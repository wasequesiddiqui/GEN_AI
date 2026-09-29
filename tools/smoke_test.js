/* ============================================================================
 * AIBE XXI — data integrity smoke test (Node)
 *
 * Loads the browser data files into a fake `window` and asserts every contract
 * that aibe-app.js depends on, so a data defect is caught without opening a
 * browser. Run:  node tools/smoke_test.js
 * ==========================================================================*/
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

const FILES = [
  "aibe-syllabus.js",
  "aibe-notes-1.js", "aibe-notes-2.js", "aibe-notes-3.js",
  "aibe-qb-constitutional.js", "aibe-qb-ipc-bns.js", "aibe-qb-crpc-bnss.js",
  "aibe-qb-cpc.js", "aibe-qb-evidence-bsa.js", "aibe-qb-adr.js",
  "aibe-qb-family.js", "aibe-qb-pil.js", "aibe-qb-admin.js",
  "aibe-qb-ethics.js", "aibe-qb-company.js", "aibe-qb-environmental.js",
  "aibe-qb-cyber.js", "aibe-qb-labour.js", "aibe-qb-tort.js",
  "aibe-qb-taxation.js", "aibe-qb-contract.js", "aibe-qb-land.js",
  "aibe-qb-ip.js",
  "aibe-mocks.js",
  "aibe-revision.js"
];

const sandbox = { window: {}, console: console };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);

for (const f of FILES) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) { console.log("MISSING FILE: " + f); process.exit(1); }
  try {
    vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f });
  } catch (e) {
    console.log("LOAD ERROR in " + f + ": " + e.message);
    process.exit(1);
  }
}

const W = sandbox.window;
let errors = 0;
let warnings = 0;
const fail = (m) => { errors++; if (errors <= 80) console.log("  FAIL  " + m); };
const warn = (m) => { warnings++; if (warnings <= 40) console.log("  warn  " + m); };
const ok = (m) => console.log("  ok    " + m);

/* ------------------------------------------------------------- syllabus --- */
console.log("\n== Syllabus ==");
const SYLL = W.AIBE_SYLLABUS;
if (!SYLL || !Array.isArray(SYLL.subjects)) { console.log("FAIL: no AIBE_SYLLABUS"); process.exit(1); }
const subjects = SYLL.subjects;
const weightSum = subjects.reduce((a, s) => a + (s.weight || 0), 0);
weightSum === 100 ? ok("19 subjects, weights sum to 100")
                  : fail("weights sum to " + weightSum + ", expected 100");
if (subjects.length !== 19) fail("expected 19 subjects, found " + subjects.length);

const subjectById = {};
const topicIdsBySubject = {};
subjects.forEach((s) => {
  subjectById[s.id] = s;
  const t = {};
  (s.topics || []).forEach((tp) => { t[tp.id] = (tp.subtopics || []).length; });
  topicIdsBySubject[s.id] = t;
  if (!s.name || !s.id || typeof s.weight !== "number") fail("malformed subject " + JSON.stringify(s.id));
  if (!s.topics || !s.topics.length) fail("subject " + s.id + " has no topics");
});
const totalTopics = Object.values(topicIdsBySubject).reduce((a, t) => a + Object.keys(t).length, 0);
ok(totalTopics + " syllabus topics across " + subjects.length + " subjects");

/* ------------------------------------------------------------- questions -- */
console.log("\n== Question bank ==");
const Q = W.AIBE_QUESTIONS || [];
Q.length >= 600 ? ok("total MCQs: " + Q.length + " (requirement: 600+)")
                : fail("only " + Q.length + " MCQs, 600 required");

const seenId = {}, seenText = {};
const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
const perSubject = {};
const typeCount = {}, diffCount = {}, cogCount = {};

Q.forEach((q) => {
  const id = q.id;
  if (!id) { fail("question without id"); return; }
  if (seenId[id]) fail("duplicate id " + id);
  seenId[id] = true;
  if (!/^[A-Z]{2,4}-\d{3}$/.test(id)) fail("malformed id " + id);

  if (!subjectById[q.subject]) fail(id + ": unknown subject '" + q.subject + "'");
  else if (topicIdsBySubject[q.subject][q.topic] === undefined)
    fail(id + ": topic '" + q.topic + "' not in subject " + q.subject);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    fail(id + ": " + (q.options ? q.options.length : "no") + " options");
  } else {
    const norm = q.options.map((o) => String(o).trim().toLowerCase());
    if (new Set(norm).size !== 4) fail(id + ": repeated option text");
    norm.forEach((o) => { if (!o) fail(id + ": empty option text"); });
  }

  if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex > 3) {
    fail(id + ": bad correctIndex " + q.correctIndex);
  } else {
    dist[q.correctIndex]++;
  }

  if (!Array.isArray(q.wrongOptionExplanations) || q.wrongOptionExplanations.length !== 4) {
    fail(id + ": wrongOptionExplanations not length 4");
  } else {
    const blanks = q.wrongOptionExplanations
      .map((w, i) => (String(w).trim() === "" ? i : -1)).filter((i) => i >= 0);
    if (blanks.length !== 1) fail(id + ": " + blanks.length + " blank wrong-option entries");
    else if (blanks[0] !== q.correctIndex)
      fail(id + ": blank at " + blanks[0] + " but answer at " + q.correctIndex);
  }

  ["question", "explanation", "legalBasis", "flashpoint", "subtopic",
   "difficulty", "cognitiveLevel", "questionType", "source"].forEach((k) => {
    if (!q[k] || String(q[k]).trim() === "") fail(id + ": missing " + k);
  });

  const key = String(q.question || "").toLowerCase().replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]/g, "").trim();
  if (key && seenText[key]) fail(id + ": duplicate question text with " + seenText[key]);
  else if (key) seenText[key] = id;

  const expl = String(q.explanation || "") + " " + String(q.legalBasis || "");
  if (/\boption\s+[ABCD]\b/i.test(expl)) fail(id + ": explanation names an option letter");
  if (/\b(first|second|third|fourth|last)\s+option\b/i.test(expl))
    fail(id + ": explanation names an option position");

  perSubject[q.subject] = (perSubject[q.subject] || 0) + 1;
  typeCount[q.questionType] = (typeCount[q.questionType] || 0) + 1;
  diffCount[q.difficulty] = (diffCount[q.difficulty] || 0) + 1;
  cogCount[q.cognitiveLevel] = (cogCount[q.cognitiveLevel] || 0) + 1;
});

console.log("  answer key: A=" + dist[0] + " B=" + dist[1] + " C=" + dist[2] + " D=" + dist[3] +
  "  (" + [0, 1, 2, 3].map((i) => (dist[i] / Q.length * 100).toFixed(1) + "%").join(" / ") + ")");
const dev = Math.max(...[0, 1, 2, 3].map((i) => Math.abs(dist[i] / Q.length * 100 - 25)));
dev <= 3 ? ok("answer distribution within ±3 pp of 25% (max deviation " + dev.toFixed(1) + " pp)")
         : fail("answer distribution off by " + dev.toFixed(1) + " pp");

const nonDirect = Q.filter((q) => q.questionType !== "Direct").length;
console.log("  format mix: " + JSON.stringify(typeCount));
console.log("  difficulty: " + JSON.stringify(diffCount));
console.log("  cognitive : " + JSON.stringify(cogCount));
ok(nonDirect + " non-Direct items (" + (nonDirect / Q.length * 100).toFixed(1) + "%)");

subjects.forEach((s) => {
  const n = perSubject[s.id] || 0;
  const target = s.weight * 6;
  if (n === 0) fail("subject " + s.id + " has no questions");
  else if (n < target) fail(s.id + " has " + n + " questions, below the proportional target of " + target);
  else if (n > target) console.log("  note  " + s.id + " has " + n + " questions, " +
    (n - target) + " above the weight x 6 target (extra coverage of under-represented topics)");
});
const unknown = Object.keys(perSubject).filter((s) => !subjectById[s]);
if (unknown.length) fail("questions carry unknown subjects: " + unknown.join(", "));

/* Which declared syllabus topics have no question mapped to them? */
const coveredPairs = {};
Q.forEach((q) => { coveredPairs[q.subject + "/" + q.topic] = true; });
const uncovered = [];
subjects.forEach((s) => {
  (s.topics || []).forEach((t) => {
    if (!coveredPairs[s.id + "/" + t.id]) uncovered.push(s.id + "/" + t.id + " (" + t.name + ")");
  });
});
if (uncovered.length) {
  warn(uncovered.length + " syllabus topic(s) have no question mapped to them:");
  uncovered.forEach((u) => console.log("        - " + u));
} else {
  ok("every declared syllabus topic has at least one question mapped to it");
}
console.log("  topics: " + Object.keys(coveredPairs).length + " of " + totalTopics + " covered by the bank");

/* ----------------------------------------------------------------- mocks -- */
console.log("\n== Mock papers ==");
const M = W.AIBE_MOCKS || [];
if (M.length < 2) fail("expected at least 2 mock papers, found " + M.length);
M.forEach((m) => {
  if (!m.id || !m.title || !Array.isArray(m.questionIds)) { fail("malformed mock " + m.id); return; }
  if (m.questionIds.length !== 100) fail(m.id + ": " + m.questionIds.length + " questions, expected 100");
  const seen = {};
  m.questionIds.forEach((qid) => {
    if (seen[qid]) fail(m.id + ": repeated id " + qid);
    seen[qid] = true;
    if (!seenId[qid]) fail(m.id + ": unknown question id " + qid);
  });
  const bySub = {};
  m.questionIds.forEach((qid) => {
    const q = Q.filter((x) => x.id === qid)[0];
    if (q) bySub[q.subject] = (bySub[q.subject] || 0) + 1;
  });
  const bad = subjects.filter((s) => (bySub[s.id] || 0) !== s.weight);
  if (bad.length) fail(m.id + ": subject distribution wrong for " + bad.map((s) => s.id).join(", "));
});
ok(M.length + " full-length papers, 100 questions each, official subject distribution");

/* -------------------------------------------------------------- revision -- */
console.log("\n== Revision system ==");
const R = W.AIBE_REVISION;
if (!R) fail("no AIBE_REVISION");
else {
  if (!Array.isArray(R.rapid) || R.rapid.length !== 19)
    fail("rapid sheets: " + (R.rapid ? R.rapid.length : 0) + ", expected 19");
  else {
    R.rapid.forEach((s) => {
      if (!s.subject || !Array.isArray(s.points) || !s.points.length)
        fail("malformed rapid sheet " + JSON.stringify(s.subject));
    });
    ok("19 rapid revision sheets");
  }
  Array.isArray(R.oneDay) && R.oneDay.length >= 10
    ? ok(R.oneDay.length + " one-day revision points")
    : fail("one-day revision content missing or too short");
  Array.isArray(R.sevenDay) && R.sevenDay.length === 7
    ? ok("7-day plan with " + R.sevenDay.reduce((a, d) => a + (d.tasks || []).length, 0) + " tasks")
    : fail("seven-day plan must have 7 days");
  const fkeys = ["articles", "sections", "cases", "doctrines", "definitions",
                 "exceptions", "limitations", "procedure", "mapping"];
  const missing = fkeys.filter((k) => !R.final || !Array.isArray(R.final[k]) || !R.final[k].length);
  missing.length ? fail("final revision missing: " + missing.join(", "))
                 : ok("final revision: " + fkeys.map((k) => k + "=" + R.final[k].length).join(", "));
}

/* ----------------------------------------------------------------- notes -- */
console.log("\n== Study notes ==");
const N = W.AIBE_NOTES;
if (!N) fail("no AIBE_NOTES");
else {
  const ids = Object.keys(N);
  const missingSubjects = subjects.map((s) => s.id).filter((id) => !N[id]);
  missingSubjects.length ? fail("no notes for: " + missingSubjects.join(", "))
                         : ok("notes present for all " + subjects.length + " subjects");
  let topicsWithFlash = 0, topics = 0;
  ids.forEach((sid) => {
    const list = Array.isArray(N[sid]) ? N[sid] : (N[sid].topics || []);
    list.forEach((t) => {
      topics++;
      if (t.flashpoints && t.flashpoints.length) topicsWithFlash++;
      if (!t.name) fail("note topic without name in " + sid);
    });
  });
  ok(topics + " note topics, " + topicsWithFlash + " carry flashpoints");
  if (topicsWithFlash !== topics) warn((topics - topicsWithFlash) + " note topics have no flashpoints");
}

/* ---------------------------------------------------------------- result -- */
console.log("\n================================================");
console.log("errors: " + errors + "   warnings: " + warnings);
console.log(errors === 0 ? "SMOKE TEST: PASS" : "SMOKE TEST: FAIL");
console.log("================================================");
process.exit(errors === 0 ? 0 : 1);
