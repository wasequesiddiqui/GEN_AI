/* ============================================================================
 * Legal MCQ Hub — single-batch check (Node)
 *
 * Usage:  node tools/verify_legal_batch.js legal-mcq-constitution-3.js
 *
 * Loads ONE question-bank file and reports the shape of that batch: count,
 * field completeness, duplicate questions, answer-letter spread, difficulty
 * mix and topic spread. Exit code 0 = clean.
 * ==========================================================================*/
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const file = process.argv[2];
if (!file) { console.log("usage: node tools/verify_legal_batch.js <file.js>"); process.exit(2); }

const ROOT = path.resolve(__dirname, "..");
const abs = path.isAbsolute(file) ? file : path.join(ROOT, file);
if (!fs.existsSync(abs)) { console.log("MISSING: " + abs); process.exit(1); }

const sandbox = { window: {}, console: console };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
try {
  vm.runInContext(fs.readFileSync(abs, "utf8"), sandbox, { filename: path.basename(abs) });
} catch (e) {
  console.log("LOAD ERROR: " + e.message);
  process.exit(1);
}

const Q = (() => {
  const bag = sandbox.window.LEGAL_MCQ || {};
  return Object.keys(bag).reduce((acc, k) => acc.concat(Array.isArray(bag[k]) ? bag[k] : []), []);
})();
const LETTERS = ["A", "B", "C", "D"];
const LEN_FAIL = 1.25;   // max allowed (correct-option length / mean of the others)
const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/* A repeated option set is legitimate when the four options are one of the
   exam's standard pro-forma templates (Assertion–Reason, statement
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

let errors = 0, warnings = 0;
const fail = (m) => { errors++; console.log("  FAIL  " + m); };
const warn = (m) => { warnings++; console.log("  warn  " + m); };

const letters = { A: 0, B: 0, C: 0, D: 0 };
const diffs = { Easy: 0, Moderate: 0, Difficult: 0 };
const topics = {};
const ns = [];
let missing = 0, emptyLc = 0, emptyTip = 0, banned = 0, prefix = 0;

Q.forEach((q, i) => {
  const at = "item[" + i + "] n=" + (q && q.n);
  if (!q || typeof q !== "object") { fail(at + " not an object"); return; }
  if (typeof q.n !== "number") ns.push(null); else ns.push(q.n);
  if (!q.topic || !String(q.topic).trim()) { fail(at + " missing topic"); missing++; } else topics[q.topic] = (topics[q.topic] || 0) + 1;
  if (!["Easy", "Moderate", "Difficult"].includes(q.diff)) { fail(at + " bad diff '" + q.diff + "'"); } else diffs[q.diff]++;
  if (!q.q || String(q.q).trim().length < 12) { fail(at + " question missing/too short"); missing++; }
  if (!Array.isArray(q.o) || q.o.length !== 4) { fail(at + " needs exactly 4 options"); missing++; }
  else q.o.forEach((o, k) => {
    if (!o || !String(o).trim()) { fail(at + " option " + LETTERS[k] + " empty"); missing++; }
    if (/^\(?[A-D]\)?[\.\)\s]/i.test(String(o))) prefix++;
    if (/^\s*(all|none)\s+of\s+(the\s+)?above/i.test(String(o))) { banned++; }
  });
  if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) { fail(at + " answer index out of range"); missing++; }
  else letters[LETTERS[q.a]]++;
  if (!q.ex || String(q.ex).trim().length < 20) { fail(at + " explanation missing/too short"); missing++; }
  if (!q.ref || !String(q.ref).trim()) { fail(at + " constitutional reference missing"); missing++; }
  if (!q.lc || !String(q.lc).trim()) emptyLc++;
  if (!q.tip || !String(q.tip).trim()) emptyTip++;
});

// duplicates inside the batch
const seenQ = new Map();
let dupQ = 0;
Q.forEach((q) => {
  const k = norm(q.q);
  if (seenQ.has(k)) { fail("duplicate question text: n=" + seenQ.get(k) + " and n=" + q.n); dupQ++; }
  else seenQ.set(k, q.n);
});
const seenO = new Map();
let dupO = 0;
Q.forEach((q) => {
  if (isProForma(q)) return;
  const k = (q.o || []).map(norm).sort().join(" | ");
  if (seenO.has(k)) { warn("identical option set: n=" + seenO.get(k) + " and n=" + q.n); dupO++; }
  else seenO.set(k, q.n);
});

/* option-length bias: a long correct option gives the answer away.
   Pro-forma templates (Assertion–Reason etc.) are exempt: their four options
   are fixed phrases of inherently unequal length. */
const lenOffenders = [];
let ratioSum = 0, ratioN = 0;
Q.forEach((q) => {
  if (isProForma(q)) return;
  if (!Array.isArray(q.o) || q.o.length !== 4) return;
  const lens = q.o.map((o) => String(o || "").length);
  const others = lens.filter((_, i) => i !== q.a);
  const m = others.reduce((a, b) => a + b, 0) / others.length;
  if (m <= 0) return;
  const r = lens[q.a] / m;
  ratioSum += r; ratioN++;
  if (r > LEN_FAIL) lenOffenders.push({ n: q.n, r: +r.toFixed(2), cl: lens[q.a], ml: Math.round(m) });
});

// contiguous run of n
const valid = ns.filter((v) => typeof v === "number").sort((a, b) => a - b);
let contiguous = valid.length === Q.length && valid.every((v, i) => v === valid[0] + i);

console.log("\n=================================================");
console.log("  file      : " + path.basename(abs));
console.log("  questions : " + Q.length);
console.log("  n range   : " + (valid.length ? valid[0] + " .. " + valid[valid.length - 1] : "-") + (contiguous ? "  (contiguous)" : "  (NOT contiguous)"));
console.log("  answers   : A " + letters.A + " | B " + letters.B + " | C " + letters.C + " | D " + letters.D);
console.log("  difficulty: easy " + diffs.Easy + " | moderate " + diffs.Moderate + " | difficult " + diffs.Difficult);
console.log("  topics    : " + Object.keys(topics).length);
Object.keys(topics).sort((a, b) => topics[b] - topics[a]).forEach((t) => console.log("                 " + String(topics[t]).padStart(3) + "  " + t));
console.log("  case cites: " + (Q.length - emptyLc) + " | exam tips: " + (Q.length - emptyTip));
console.log("  len bias  : mean " + (ratioN ? (ratioSum / ratioN).toFixed(3) : "-") +
            " | over " + LEN_FAIL + ": " + lenOffenders.length);
if (lenOffenders.length) {
  console.log("              offenders (n : correctLen / othersMean = ratio):");
  lenOffenders.sort((a, b) => b.r - a.r).forEach((o) =>
    console.log("                n=" + o.n + "  " + o.cl + "/" + o.ml + " = " + o.r));
}
console.log("  errors    : " + errors + "   warnings: " + warnings);
console.log("=================================================\n");

if (Q.length !== 50) fail("expected exactly 50 questions in a batch file, found " + Q.length);
if (!contiguous) fail("n values must be contiguous within the batch");
LETTERS.forEach((L) => {
  if (Math.abs(letters[L] - 12.5) > 1.5) warn("answer letter " + L + " used " + letters[L] + " times (target 12-13)");
});
if (banned) fail(banned + " option(s) use an 'all/none of the above' style, which is not allowed");
if (prefix) warn(prefix + " option(s) begin with a letter prefix like 'A.' — the app adds letters itself");
if (lenOffenders.length) fail(lenOffenders.length + " question(s) give the answer away by option length (ratio > " + LEN_FAIL + ")");
if (missing) fail(missing + " field-level problem(s)");
if (dupQ) fail(dupQ + " duplicated question(s)");

console.log(errors === 0 && Q.length === 50 ? "BATCH OK" : "BATCH HAS ERRORS");
process.exit(errors === 0 && Q.length === 50 ? 0 : 1);
