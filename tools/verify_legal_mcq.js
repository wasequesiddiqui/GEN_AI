/* ============================================================================
 * Legal MCQ Hub — whole-bank integrity audit (Node)
 *
 * Verifies every subject bank that LEGAL_MCQ.html loads, so a data defect is
 * caught without opening a browser.
 *
 *   node tools/verify_legal_mcq.js            # audit every subject discovered
 *   node tools/verify_legal_mcq.js bnss       # audit one subject
 *
 * A subject's files are discovered as  legal-mcq-<subject>-<n>.js  and are
 * expected to append to  window.LEGAL_MCQ.<subject>.
 * ==========================================================================*/
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

const LETTERS = ["A", "B", "C", "D"];
const LEN_FAIL = 1.25;          // max ratio of correct-option length to mean of the others
const DIFF_TOL = 12;            // allowed +/- per difficulty band
const LETTER_TOL = 12;          // allowed +/- per correct-answer letter
const MIN_TOPICS = 40;
const MAX_FILES = 20;

/* Questions expected in each subject bank. */
const EXPECTED = { constitution: 500, bnss: 500 };
const DIFF_TARGET = { Easy: 0.2, Moderate: 0.5, Difficult: 0.3 };

const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/* A repeated option set is legitimate when the four options are one of the
   exam's standard pro-forma templates (Assertion-Reason, statement
   combination, match-the-following) rather than substantive alternatives. */
function isProForma(q) {
  if (/assertion/i.test(q.q || "")) return true;
  if (/match\s+(list|the\s+following|column|\()/i.test(q.q || "")) return true;
  const o = (q.o || []).map((x) => String(x || "").trim());
  if (o.length !== 4) return false;
  if (o.every((x) => /only\s*$/i.test(x))) return true;
  if (o.every((x) => /(^|\()\s*[ivx]+\s*(\)|,| and)/i.test(x))) return true;
  return false;
}

/* ------------------------------------------------------------- discovery */
function discoverSubjects() {
  const found = new Set();
  fs.readdirSync(ROOT).forEach((f) => {
    const m = /^legal-mcq-([a-z0-9]+)-\d+\.js$/.exec(f);
    if (m) found.add(m[1]);
  });
  return [...found].sort();
}

function loadSubject(key) {
  const sandbox = { window: {}, console: console };
  sandbox.window.window = sandbox.window;
  vm.createContext(sandbox);
  const files = [];
  for (let i = 1; i <= MAX_FILES; i++) {
    const name = "legal-mcq-" + key + "-" + i + ".js";
    const p = path.join(ROOT, name);
    if (!fs.existsSync(p)) continue;
    vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: name });
    files.push(name);
  }
  const bag = sandbox.window.LEGAL_MCQ || {};
  return { files, questions: bag[key] || [], otherKeys: Object.keys(bag) };
}

/* ----------------------------------------------------------- one subject */
function auditSubject(key) {
  let errors = 0, warnings = 0;
  const fail = (m) => { errors++; console.log("  FAIL  " + m); };
  const warn = (m) => { warnings++; if (warnings <= 60) console.log("  warn  " + m); };
  const ok = (m) => console.log("  ok    " + m);

  const { files, questions: Q } = loadSubject(key);
  const expected = EXPECTED[key] || 500;

  console.log("\n=================================================================");
  console.log(" Subject: " + key + "    files: " + files.length + "    expected: " + expected);
  console.log("=================================================================");
  if (!files.length) { fail("no files found for subject '" + key + "'"); return { errors, warnings, key, count: 0 }; }

  console.log("\n== Volume ==");
  Q.length === expected ? ok(expected + " questions loaded")
                        : fail("expected " + expected + " questions, found " + Q.length);

  console.log("\n== Field shape ==");
  const seenN = new Set();
  const diffCount = { Easy: 0, Moderate: 0, Difficult: 0 };
  const letterCount = { A: 0, B: 0, C: 0, D: 0 };
  const topicCount = {};
  let shapeErrors = 0, emptyLc = 0, emptyTip = 0;

  Q.forEach((q, i) => {
    const at = "Q#" + (q && q.n != null ? q.n : "[" + i + "]");
    if (!q || typeof q !== "object") { fail(at + ": not an object"); shapeErrors++; return; }
    if (!Number.isInteger(q.n)) { fail(at + ": bad n"); shapeErrors++; }
    else if (seenN.has(q.n)) { fail(at + ": duplicate n " + q.n); shapeErrors++; }
    else seenN.add(q.n);

    if (typeof q.topic !== "string" || !q.topic.trim()) { fail(at + ": missing topic"); shapeErrors++; }
    else topicCount[q.topic] = (topicCount[q.topic] || 0) + 1;

    if (!Object.prototype.hasOwnProperty.call(diffCount, q.diff)) { fail(at + ": bad diff '" + q.diff + "'"); shapeErrors++; }
    else diffCount[q.diff]++;

    if (typeof q.q !== "string" || q.q.trim().length < 12) { fail(at + ": question too short"); shapeErrors++; }
    if (!Array.isArray(q.o) || q.o.length !== 4) { fail(at + ": options must be exactly 4"); shapeErrors++; }
    else q.o.forEach((o, k) => { if (typeof o !== "string" || !o.trim()) fail(at + ": option " + LETTERS[k] + " empty"); });

    if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) { fail(at + ": a must be 0..3"); shapeErrors++; }
    else letterCount[LETTERS[q.a]]++;

    if (typeof q.ex !== "string" || q.ex.trim().length < 20) { fail(at + ": explanation too short"); shapeErrors++; }
    if (typeof q.ref !== "string" || !q.ref.trim()) { fail(at + ": missing statutory/constitutional reference"); shapeErrors++; }
    if (typeof q.lc !== "string") fail(at + ": lc must be a string (may be empty)");
    if (typeof q.tip !== "string") fail(at + ": tip must be a string (may be empty)");
    if (!q.lc || !q.lc.trim()) emptyLc++;
    if (!q.tip || !q.tip.trim()) emptyTip++;
  });
  if (!shapeErrors) ok("every question has n, topic, diff, question, 4 options, answer index, explanation, reference");

  console.log("\n== Numbering ==");
  const ns = [...seenN].sort((a, b) => a - b);
  if (ns.length === Q.length && ns.length && ns.every((v, i) => v === i + 1)) ok("n is contiguous 1.." + Q.length);
  else {
    const missing = [];
    for (let v = 1; v <= expected; v++) if (!seenN.has(v)) missing.push(v);
    fail("n is not a contiguous 1.." + expected + " (missing " + missing.length +
         (missing.length ? ": " + missing.slice(0, 20).join(",") : "") + ")");
  }

  console.log("\n== Difficulty mix ==");
  const wantEasy = Math.round(expected * DIFF_TARGET.Easy);
  const wantMod = Math.round(expected * DIFF_TARGET.Moderate);
  const wantHard = expected - wantEasy - wantMod;
  [["Easy", wantEasy], ["Moderate", wantMod], ["Difficult", wantHard]].forEach(([d, want]) => {
    const got = diffCount[d];
    const line = d + ": " + got + " (target " + want + ")";
    Math.abs(got - want) <= DIFF_TOL ? ok(line) : fail(line);
  });

  console.log("\n== Correct-answer balance ==");
  const per = expected / 4;
  LETTERS.forEach((L) => {
    const got = letterCount[L];
    Math.abs(got - per) <= LETTER_TOL ? ok(L + ": " + got) : fail(L + ": " + got + " (unbalanced)");
  });
  const seq = Q.slice().sort((a, b) => a.n - b.n).map((q) => LETTERS[q.a]);
  let run = 1, maxRun = 1, maxAt = 1;
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] === seq[i - 1]) { run++; if (run > maxRun) { maxRun = run; maxAt = i + 1; } } else run = 1;
  }
  maxRun <= 4 ? ok("no long runs of the same answer letter (max run " + maxRun + ")")
              : warn("run of " + maxRun + " identical letters ending at question " + maxAt);

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

  console.log("\n== Topic coverage ==");
  const topics = Object.keys(topicCount).sort((a, b) => topicCount[b] - topicCount[a]);
  topics.length >= MIN_TOPICS ? ok(topics.length + " distinct topics covered")
                              : fail("only " + topics.length + " distinct topics (expected >= " + MIN_TOPICS + ")");
  topics.forEach((t) => console.log("        " + String(topicCount[t]).padStart(3) + "  " + t));

  console.log("\n== Option-shape heuristic ==");
  let ratioSum = 0, ratioN = 0, worst = null;
  const lenOffenders = [];
  Q.forEach((q) => {
    if (isProForma(q)) return;
    if (!Array.isArray(q.o) || q.o.length !== 4) return;
    const lens = q.o.map((o) => String(o || "").length);
    const others = lens.filter((_, i) => i !== q.a);
    const meanOther = others.reduce((a, b) => a + b, 0) / others.length;
    if (meanOther <= 0) return;
    const r = lens[q.a] / meanOther;
    ratioSum += r; ratioN++;
    if (!worst || r > worst.r) worst = { r, n: q.n };
    if (r > LEN_FAIL) lenOffenders.push(q.n);
  });
  const avgRatio = ratioN ? ratioSum / ratioN : 1;
  console.log("        mean (correct-option length / other-options length) = " + avgRatio.toFixed(3));
  (avgRatio <= 1.12 && avgRatio >= 0.90) ? ok("correct options are not systematically the longest or the shortest")
                   : fail("correct options have a systematic length bias (ratio " + avgRatio.toFixed(2) + "), worst #" + (worst && worst.n));
  if (lenOffenders.length) {
    fail(lenOffenders.length + " question(s) exceed a " + LEN_FAIL + " length ratio (answer inferable from length): " +
         lenOffenders.slice(0, 60).join(", ") + (lenOffenders.length > 60 ? " …" : ""));
  } else ok("no question exceeds a " + LEN_FAIL + " length ratio");
  const shortOffenders = [];
  Q.forEach((q) => {
    if (isProForma(q)) return;
    if (!Array.isArray(q.o) || q.o.length !== 4) return;
    const lens = q.o.map((o) => String(o || "").length);
    const others = lens.filter((_, i) => i !== q.a);
    const meanOther = others.reduce((a, b) => a + b, 0) / others.length;
    if (meanOther <= 0) return;
    if (lens[q.a] / meanOther < 0.70) shortOffenders.push(q.n);
  });
  if (shortOffenders.length) {
    warn(shortOffenders.length + " question(s) have a correct option under 0.70 of the mean of the others: " +
         shortOffenders.slice(0, 60).join(", ") + (shortOffenders.length > 60 ? " …" : ""));
  }

  let longestUnique = 0, longestIsCorrect = 0, shortestUnique = 0, shortestIsCorrect = 0;
  Q.forEach((q) => {
    if (isProForma(q)) return;
    if (!Array.isArray(q.o) || q.o.length !== 4) return;
    const lens = q.o.map((o) => String(o || "").length);
    const mx = Math.max.apply(null, lens);
    const mn = Math.min.apply(null, lens);
    if (lens.filter((x) => x === mx).length === 1) {
      longestUnique++;
      if (lens.indexOf(mx) === q.a) longestIsCorrect++;
    }
    if (lens.filter((x) => x === mn).length === 1) {
      shortestUnique++;
      if (lens.indexOf(mn) === q.a) shortestIsCorrect++;
    }
  });
  if (longestUnique) {
    const pct = Math.round((longestIsCorrect / longestUnique) * 100);
    console.log("        where one option is strictly longest (" + longestUnique + " questions), it is correct " + pct + "% of the time (chance = 25%)");
    pct <= 35 ? ok("the longest option is not a reliable tell") : fail("the longest option gives the answer away (" + pct + "%)");
  }
  if (shortestUnique) {
    const pct = Math.round((shortestIsCorrect / shortestUnique) * 100);
    console.log("        where one option is strictly shortest (" + shortestUnique + " questions), it is correct " + pct + "% of the time (chance = 25%)");
    pct <= 35 ? ok("the shortest option is not a reliable tell") : fail("the shortest option gives the answer away (" + pct + "%)");
  }

  console.log("\n== Case law & tips ==");
  const withCase = Q.filter((q) => q.lc && q.lc.trim()).length;
  const withTip = Q.filter((q) => q.tip && q.tip.trim()).length;
  const pc = (n) => Math.round((n / Math.max(1, Q.length)) * 100);
  console.log("        questions citing a case: " + withCase + " (" + pc(withCase) + "%)");
  console.log("        questions with an exam tip: " + withTip + " (" + pc(withTip) + "%)");
  // A rights-bearing constitution is tested heavily through case law, but a procedural
  // code such as the BNSS is largely tested through section numbers and timelines, so the
  // expected share of case-bearing questions is legitimately lower.
  withCase / Math.max(1, Q.length) >= 0.20 ? ok("case law present across the bank")
                            : warn("fewer than 20% of questions cite a case");
  withTip / Math.max(1, Q.length) >= 0.7 ? ok("exam tips present across the bank") : warn("fewer than 70% of questions carry an exam tip");

  console.log("\n  " + key + " totals: questions " + Q.length +
              " | easy " + diffCount.Easy + " moderate " + diffCount.Moderate + " difficult " + diffCount.Difficult +
              " | A " + letterCount.A + " B " + letterCount.B + " C " + letterCount.C + " D " + letterCount.D +
              " | topics " + topics.length + " | errors " + errors + " warnings " + warnings);

  return { errors, warnings, key, count: Q.length };
}

/* ------------------------------------------------------------------ main */
const arg = process.argv[2];
const subjects = arg ? [arg] : discoverSubjects();
if (!subjects.length) { console.log("No subject banks found (expected legal-mcq-<subject>-<n>.js)."); process.exit(1); }

const results = subjects.map(auditSubject);

console.log("\n=================================================================");
results.forEach((r) => {
  console.log("  " + r.key.padEnd(14) + " questions: " + String(r.count).padStart(4) +
              "   errors: " + r.errors + "   warnings: " + r.warnings);
});
const totalErrors = results.reduce((a, r) => a + r.errors, 0);
const allComplete = results.every((r) => r.count === (EXPECTED[r.key] || 500));
console.log("  TOTAL errors: " + totalErrors + (allComplete ? "   all subjects complete" : "   INCOMPLETE SUBJECT"));
console.log("=================================================================");
process.exit(totalErrors === 0 && allComplete ? 0 : 1);
