/* ============================================================================
 * Legal MCQ Hub — data integrity check (Node)
 *
 * Loads the Constitution question-bank files into a fake `window` and asserts
 * the contract that LEGAL_MCQ.html / legal-mcq-app.js depend on, so a data
 * defect is caught without opening a browser.
 *
 * Run:  node tools/verify_legal_mcq.js
 * ==========================================================================*/
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const FILES = [];
for (let i = 1; i <= 10; i++) FILES.push("legal-mcq-constitution-" + i + ".js");

const EXPECT_TOTAL = 500;
const EXPECT_DIFF = { Easy: 100, Moderate: 250, Difficult: 150 };
const DIFF_TOL = 12;              // allowed +/- per difficulty band
const LETTER_TOL = 12;            // allowed +/- per correct-answer letter
const MIN_TOPICS = 40;

const sandbox = { window: {}, console: console };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);

let loadErrors = 0;
for (const f of FILES) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) { console.log("MISSING FILE: " + f); loadErrors++; continue; }
  try {
    vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f });
  } catch (e) {
    console.log("LOAD ERROR in " + f + ": " + e.message);
    loadErrors++;
  }
}
if (loadErrors) { console.log("\n" + loadErrors + " file(s) failed to load."); process.exit(1); }

const Q = (sandbox.window.LEGAL_MCQ && sandbox.window.LEGAL_MCQ.constitution) || [];

let errors = 0, warnings = 0;
const fail = (m) => { errors++; if (errors <= 120) console.log("  FAIL  " + m); };
const warn = (m) => { warnings++; if (warnings <= 60) console.log("  warn  " + m); };
const ok = (m) => console.log("  ok    " + m);

const LETTERS = ["A", "B", "C", "D"];
const LEN_FAIL = 1.25;
const norm = (s) => String(s || "").toLowerCase().replace(/[\s\u2018\u2019"'`.,;:()\[\]{}?!\-–—_/\\|]+/g, " ").trim();

/* A repeated option set is legitimate when the four options are the exam's
   standard pro-forma templates (Assertion–Reason / statement combination /
   match-the-following) rather than substantive alternatives. */
function isProForma(q) {
  if (/assertion/i.test(q.q || "")) return true;
  if (/match\s+(list|the\s+following|column|\()/i.test(q.q || "")) return true;
  const o = (q.o || []).map((x) => String(x || "").trim());
  if (o.length !== 4) return false;
  if (o.every((x) => /only\s*$/i.test(x))) return true;
  if (o.every((x) => /(^|\()\s*[ivx]+\s*(\)|,| and)/i.test(x))) return true;
  return false;
}

console.log("\n== Volume ==");
Q.length === EXPECT_TOTAL
  ? ok(EXPECT_TOTAL + " questions loaded")
  : fail("expected " + EXPECT_TOTAL + " questions, found " + Q.length);

/* ------------------------------------------------------------- field shape */
console.log("\n== Field shape ==");
const seenN = new Set();
const diffCount = { Easy: 0, Moderate: 0, Difficult: 0 };
const letterCount = { A: 0, B: 0, C: 0, D: 0 };
const topicCount = {};
let shapeErrors = 0;
let emptyLc = 0, emptyTip = 0;

Q.forEach((q, i) => {
  const at = "Q#" + (q && q.n != null ? q.n : "[" + i + "]");
  if (!q || typeof q !== "object") { fail(at + ": not an object"); shapeErrors++; return; }

  if (typeof q.n !== "number" || !Number.isInteger(q.n)) { fail(at + ": bad n"); shapeErrors++; }
  else if (seenN.has(q.n)) { fail(at + ": duplicate n " + q.n); shapeErrors++; }
  else seenN.add(q.n);

  if (typeof q.topic !== "string" || !q.topic.trim()) { fail(at + ": missing topic"); shapeErrors++; }
  else topicCount[q.topic] = (topicCount[q.topic] || 0) + 1;

  if (!["Easy", "Moderate", "Difficult"].includes(q.diff)) { fail(at + ": bad diff '" + q.diff + "'"); shapeErrors++; }
  else diffCount[q.diff]++;

  if (typeof q.q !== "string" || q.q.trim().length < 12) { fail(at + ": question too short"); shapeErrors++; }

  if (!Array.isArray(q.o) || q.o.length !== 4) { fail(at + ": options must be exactly 4"); shapeErrors++; }
  else q.o.forEach((o, k) => {
    if (typeof o !== "string" || !o.trim()) fail(at + ": option " + LETTERS[k] + " empty");
  });

  if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) { fail(at + ": a must be 0..3"); shapeErrors++; }
  else letterCount[LETTERS[q.a]]++;

  if (typeof q.ex !== "string" || q.ex.trim().length < 20) { fail(at + ": explanation too short"); shapeErrors++; }
  if (typeof q.ref !== "string" || !q.ref.trim()) { fail(at + ": missing constitutional reference"); shapeErrors++; }
  if (typeof q.lc !== "string") fail(at + ": lc must be a string (may be empty)");
  if (typeof q.tip !== "string") fail(at + ": tip must be a string (may be empty)");
  if (!q.lc || !q.lc.trim()) emptyLc++;
  if (!q.tip || !q.tip.trim()) emptyTip++;
});
if (!shapeErrors) ok("every question has n, topic, diff, question, 4 options, answer index, explanation, reference");

/* ---------------------------------------------------------- numbering ---- */
console.log("\n== Numbering ==");
const ns = [...seenN].sort((a, b) => a - b);
if (ns.length === EXPECT_TOTAL && ns[0] === 1 && ns[ns.length - 1] === EXPECT_TOTAL &&
    ns.every((v, i) => v === i + 1)) {
  ok("n is contiguous 1.." + EXPECT_TOTAL);
} else {
  const missing = [];
  for (let v = 1; v <= EXPECT_TOTAL; v++) if (!seenN.has(v)) missing.push(v);
  fail("n is not a contiguous 1.." + EXPECT_TOTAL + " (missing " + missing.length +
       (missing.length ? ": " + missing.slice(0, 20).join(",") : "") + ")");
}

/* ------------------------------------------------------- difficulty mix --- */
console.log("\n== Difficulty mix (target 100 / 250 / 150) ==");
Object.keys(EXPECT_DIFF).forEach((d) => {
  const got = diffCount[d] || 0, want = EXPECT_DIFF[d];
  const line = d + ": " + got + " (target " + want + ")";
  Math.abs(got - want) <= DIFF_TOL ? ok(line) : fail(line);
});
const total = diffCount.Easy + diffCount.Moderate + diffCount.Difficult;
if (total === EXPECT_TOTAL) ok("difficulty bands sum to " + EXPECT_TOTAL);
else fail("difficulty bands sum to " + total);

/* ------------------------------------------------------- answer balance --- */
console.log("\n== Correct-answer balance (target ~125 each) ==");
LETTERS.forEach((L) => {
  const got = letterCount[L];
  const line = L + ": " + got;
  Math.abs(got - 125) <= LETTER_TOL ? ok(line) : fail(line + " (unbalanced)");
});

/* ------------------------------------------------- longest-run sanity ---- */
const seq = Q.slice().sort((a, b) => a.n - b.n).map((q) => LETTERS[q.a]);
let run = 1, maxRun = 1, maxAt = 1;
for (let i = 1; i < seq.length; i++) {
  if (seq[i] === seq[i - 1]) { run++; if (run > maxRun) { maxRun = run; maxAt = i + 1; } }
  else run = 1;
}
maxRun <= 4 ? ok("no long runs of the same answer letter (max run " + maxRun + ")")
            : warn("run of " + maxRun + " identical letters ending at question " + maxAt);

/* --------------------------------------------------------- duplicates ---- */
console.log("\n== Duplicate detection ==");
const byQ = new Map();
let dupQ = 0;
Q.forEach((q) => {
  const k = norm(q.q);
  if (byQ.has(k)) { fail("duplicate question text: #" + byQ.get(k) + " and #" + q.n); dupQ++; }
  else byQ.set(k, q.n);
});
const byOpts = new Map();
let dupO = 0;
Q.forEach((q) => {
  if (isProForma(q)) return;
  const k = (q.o || []).map(norm).sort().join(" ~ ");
  if (byOpts.has(k)) { warn("identical option sets: #" + byOpts.get(k) + " and #" + q.n); dupO++; }
  else byOpts.set(k, q.n);
});
if (!dupQ) ok("no duplicate question text");
if (!dupO) ok("no duplicated option sets");

/* ------------------------------------------------------- topic coverage --- */
console.log("\n== Topic coverage ==");
const topics = Object.keys(topicCount).sort((a, b) => topicCount[b] - topicCount[a]);
topics.length >= MIN_TOPICS
  ? ok(topics.length + " distinct topics covered")
  : fail("only " + topics.length + " distinct topics (expected >= " + MIN_TOPICS + ")");
topics.forEach((t) => console.log("        " + String(topicCount[t]).padStart(3) + "  " + t));

/* --------------------------------------------- giveaway length heuristic - */
console.log("\n== Option-shape heuristic ==");
let ratioSum = 0, ratioN = 0, worst = null;
Q.forEach((q) => {
  if (isProForma(q)) return;
  if (!Array.isArray(q.o) || q.o.length !== 4) return;
  const lens = q.o.map((o) => String(o || "").length);
  const correct = lens[q.a];
  const others = lens.filter((_, i) => i !== q.a);
  const meanOther = others.reduce((a, b) => a + b, 0) / others.length;
  if (meanOther <= 0) return;
  const r = correct / meanOther;
  ratioSum += r; ratioN++;
  if (!worst || r > worst.r) worst = { r, n: q.n };
});
const avgRatio = ratioN ? ratioSum / ratioN : 1;
console.log("        mean (correct-option length / other-options length) = " + avgRatio.toFixed(3));
avgRatio <= 1.12 ? ok("correct options are not systematically the longest")
                 : fail("correct options look longer on average (ratio " + avgRatio.toFixed(2) +
                        "), worst #" + (worst && worst.n));
const lenOffenders = [];
Q.forEach((q) => {
  if (isProForma(q)) return;
  if (!Array.isArray(q.o) || q.o.length !== 4) return;
  const lens = q.o.map((o) => String(o || "").length);
  const others = lens.filter((_, i) => i !== q.a);
  const meanOther = others.reduce((a, b) => a + b, 0) / others.length;
  if (meanOther <= 0) return;
  if (lens[q.a] / meanOther > LEN_FAIL) lenOffenders.push(q.n);
});
if (lenOffenders.length) {
  fail(lenOffenders.length + " question(s) exceed a " + LEN_FAIL + " length ratio (answer inferable from length): " +
       lenOffenders.slice(0, 60).join(", ") + (lenOffenders.length > 60 ? " …" : ""));
} else ok("no question exceeds a " + LEN_FAIL + " length ratio");

let longestUnique = 0, longestIsCorrect = 0;
Q.forEach((q) => {
  if (isProForma(q)) return;
  if (!Array.isArray(q.o) || q.o.length !== 4) return;
  const lens = q.o.map((o) => String(o || "").length);
  const mx = Math.max.apply(null, lens);
  if (lens.filter((x) => x === mx).length !== 1) return;
  longestUnique++;
  if (lens.indexOf(mx) === q.a) longestIsCorrect++;
});
if (longestUnique) {
  const pct = Math.round((longestIsCorrect / longestUnique) * 100);
  console.log("        where one option is strictly longest (" + longestUnique + " questions), it is correct " + pct + "% of the time (chance = 25%)");
  pct <= 35 ? ok("the longest option is not a reliable tell")
            : fail("the longest option gives the answer away (" + pct + "% of the time)");
}

/* ----------------------------------------------- optional case coverage - */
console.log("\n== Case law & tips ==");
const withCase = Q.filter((q) => q.lc && q.lc.trim()).length;
const withTip = Q.filter((q) => q.tip && q.tip.trim()).length;
console.log("        questions citing a case: " + withCase + " (" + Math.round(withCase / Q.length * 100) + "%)");
console.log("        questions with an exam tip: " + withTip + " (" + Math.round(withTip / Q.length * 100) + "%)");
withCase / Q.length >= 0.35 ? ok("case law present across the bank")
                            : warn("fewer than 35% of questions cite a case");
withTip / Q.length >= 0.7 ? ok("exam tips present across the bank")
                          : warn("fewer than 70% of questions carry an exam tip");

/* ------------------------------------------------------------- summary --- */
console.log("\n=================================================");
console.log("  questions : " + Q.length);
console.log("  difficulty: easy " + diffCount.Easy + " | moderate " + diffCount.Moderate + " | difficult " + diffCount.Difficult);
console.log("  answers   : A " + letterCount.A + " | B " + letterCount.B + " | C " + letterCount.C + " | D " + letterCount.D);
console.log("  topics    : " + topics.length);
console.log("  errors    : " + errors);
console.log("  warnings  : " + warnings);
console.log("=================================================");
process.exit(errors === 0 && Q.length === EXPECT_TOTAL ? 0 : 1);
