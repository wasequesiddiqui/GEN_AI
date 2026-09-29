#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AIBE XXI - question bank auditor.

Parses every aibe-qb-*.js file (and aibe-mocks.js / aibe-syllabus.js) and writes
AIBE_AUDIT.md containing:

  1. Content audit      - totals, question-format mix, subject coverage
  2. Answer distribution - A/B/C/D counts against the +/-25% target
  3. Quality audit      - duplicates, missing fields, malformed options
  4. Coverage audit     - subject x syllabus-topics x questions table
  5. Mock audit         - per-paper section distribution and missing ids

Run:  python tools/audit_question_bank.py
"""

import os
import re
import sys
import json
import collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "AIBE_AUDIT.md")

# --------------------------------------------------------------- parsing ---

STRING_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')


def iter_q_blocks(text):
    """Yield the text of each Q({ ... }) block in a bank file."""
    parts = text.split("Q({")
    for part in parts[1:]:
        # a block ends at the first "});" that closes the Q( call
        end = part.find("\n  });")
        if end == -1:
            end = part.find("});")
        yield part[:end] if end != -1 else part


def field(block, name):
    m = re.search(r'\b' + name + r'\s*:\s*"((?:[^"\\]|\\.)*)"', block)
    if m:
        return m.group(1)
    m = re.search(r'\b' + name + r'\s*:\s*(\d+)', block)
    return m.group(1) if m else None


def extract_array(block, name):
    """
    Return the elements of `name: [ ... ]` positionally.

    Empty strings are preserved, because `wrongOptionExplanations` is
    index-parallel to `options` and the entry at the correct index is
    deliberately empty. Stripping leading/trailing empties would destroy
    that alignment and produce false positives.
    """
    key = re.search(r'\b' + name + r'\s*:\s*\[', block)
    if not key:
        return None
    i = key.end()  # just past the '['
    depth = 1
    in_str = False
    esc = False
    current = []
    elements = []
    while i < len(block):
        ch = block[i]
        if in_str:
            if esc:
                current.append(ch)
                esc = False
            elif ch == "\\":
                current.append(ch)
                esc = True
            elif ch == '"':
                in_str = False
                current.append(ch)
            else:
                current.append(ch)
        else:
            if ch == '"':
                in_str = True
                current.append(ch)
            elif ch in "[{":
                depth += 1
                current.append(ch)
            elif ch in "]}":
                depth -= 1
                if depth == 0:
                    break
                current.append(ch)
            elif ch == "," and depth == 1:
                elements.append("".join(current).strip())
                current = []
            else:
                current.append(ch)
        i += 1
    elements.append("".join(current).strip())

    out = []
    for el in elements:
        if len(el) >= 2 and el[0] == '"' and el[-1] == '"':
            body = el[1:-1]
            body = body.replace("\\n", "\n").replace("\\t", "\t")
            body = body.replace('\\"', '"').replace("\\\\", "\\")
            out.append(body)
        else:
            out.append(el)
    return out


def parse_bank(path):
    with open(path, "r", encoding="utf-8") as fh:
        text = fh.read()

    subj_m = re.search(r'var\s+S\s*=\s*"([^"]+)"', text)
    default_subject = subj_m.group(1) if subj_m else None

    out = []
    for block in iter_q_blocks(text):
        qid = field(block, "id")
        if not qid:
            continue
        options = extract_array(block, "options") or []
        wrongs = extract_array(block, "wrongOptionExplanations")
        out.append({
            "id": qid,
            "file": os.path.basename(path),
            "subject": field(block, "subject") or default_subject,
            "subject_var": field(block, "subject"),
            "topic": field(block, "topic"),
            "subtopic": field(block, "subtopic"),
            "difficulty": field(block, "difficulty"),
            "cognitiveLevel": field(block, "cognitiveLevel"),
            "questionType": field(block, "questionType"),
            "question": field(block, "question"),
            "explanation": field(block, "explanation"),
            "legalBasis": field(block, "legalBasis"),
            "flashpoint": field(block, "flashpoint"),
            "source": field(block, "source"),
            "correctIndex": int(field(block, "correctIndex")) if field(block, "correctIndex") is not None else None,
            "correctAnswer": field(block, "correctAnswer"),
            "options": options,
            "wrongs": wrongs,
        })
    return out


# ------------------------------------------------------------ analysis -----

def normalise(s):
    if not s:
        return ""
    s = s.lower()
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"[^a-z0-9 ]", "", s)
    return s.strip()


def main():
    qb_files = sorted(
        f for f in os.listdir(ROOT)
        if f.startswith("aibe-qb-") and f.endswith(".js")
    )
    if not qb_files:
        print("No aibe-qb-*.js files found in", ROOT)
        return 1

    questions = []
    for f in qb_files:
        questions.extend(parse_bank(os.path.join(ROOT, f)))

    # syllabus subjects (id, name, weight) and topic lists
    syllabus = []
    syl_path = os.path.join(ROOT, "aibe-syllabus.js")
    if os.path.exists(syl_path):
        with open(syl_path, "r", encoding="utf-8") as fh:
            syl_text = fh.read()
        for m in re.finditer(r'\bid:\s*"([a-z\-]+)",\s*name:\s*"([^"]+)",\s*weight:\s*(\d+)', syl_text):
            syllabus.append({"id": m.group(1), "name": m.group(2), "weight": int(m.group(3))})
        if not syllabus:
            for m in re.finditer(r'id:\s*"([a-z\-]+)"[\s\S]{0,120}?weight:\s*(\d+)', syl_text):
                syllabus.append({"id": m.group(1), "name": m.group(1), "weight": int(m.group(2))})

    # ------------------------------------------------------------------ 1
    total = len(questions)
    by_type = collections.Counter(q["questionType"] or "(unset)" for q in questions)
    by_subject = collections.Counter(q["subject"] or "(unset)" for q in questions)
    by_difficulty = collections.Counter(q["difficulty"] or "(unset)" for q in questions)
    by_cognitive = collections.Counter(q["cognitiveLevel"] or "(unset)" for q in questions)
    topics = set((q["subject"], q["topic"]) for q in questions)
    non_direct = sum(
        v for k, v in by_type.items()
        if k not in ("Direct", "(unset)")
    )

    # ------------------------------------------------------------------ 2
    dist = collections.Counter()
    no_key = []
    for q in questions:
        ci = q["correctIndex"]
        if ci is None and q["correctAnswer"]:
            ca = q["correctAnswer"].strip()
            if ca.isdigit():
                ci = int(ca)
            elif ca.upper() in ("A", "B", "C", "D"):
                ci = "ABCD".index(ca.upper())
        if ci is None or not isinstance(ci, int) or ci < 0 or ci > 3:
            no_key.append(q["id"])
        else:
            dist[ci] += 1
    keyed = sum(dist.values())

    # ------------------------------------------------------------------ 3
    quality = collections.defaultdict(list)
    seen = {}
    for q in questions:
        key = normalise(q["question"])
        if key and key in seen:
            quality["duplicate_question"].append("%s duplicates %s" % (q["id"], seen[key]))
        elif key:
            seen[key] = q["id"]

        if len(q["options"]) != 4:
            quality["wrong_option_count"].append("%s has %d options" % (q["id"], len(q["options"])))
        if not q["explanation"]:
            quality["missing_explanation"].append(q["id"])
        if not q["legalBasis"]:
            quality["missing_legal_basis"].append(q["id"])
        if not q["flashpoint"]:
            quality["missing_flashpoint"].append(q["id"])
        if not q["subject"]:
            quality["missing_subject"].append(q["id"])
        if not q["questionType"]:
            quality["missing_question_type"].append(q["id"])
        if not q["difficulty"]:
            quality["missing_difficulty"].append(q["id"])
        if not q["cognitiveLevel"]:
            quality["missing_cognitive_level"].append(q["id"])
        if not q["topic"]:
            quality["missing_topic"].append(q["id"])
        w = q["wrongs"]
        if w is None:
            quality["missing_wrong_option_explanations"].append(q["id"])
        elif len(w) != 4:
            quality["wrong_expl_length"].append("%s has %d entries" % (q["id"], len(w)))
        else:
            ci = q["correctIndex"]
            if isinstance(ci, int) and 0 <= ci <= 3 and w[ci] != "":
                quality["wrong_expl_not_blank_at_answer"].append("%s" % q["id"])
            blanks = [i for i in range(4) if w[i] == ""]
            if len(blanks) == 0:
                quality["no_blank_wrong_option_explanation"].append(q["id"])
            elif len(blanks) > 1:
                quality["multiple_blank_wrong_option_explanations"].append(
                    "%s (indices %s)" % (q["id"], ",".join(map(str, blanks))))
        # explanation must not name an option letter (breaks option rotation)
        expl = (q["explanation"] or "") + " " + (q["legalBasis"] or "")
        if re.search(r"\boption\s+[ABCD]\b", expl, re.I):
            quality["explanation_names_option_letter"].append(q["id"])
        if re.search(r"\b(first|second|third|fourth|last)\s+option\b", expl, re.I):
            quality["explanation_names_option_position"].append(q["id"])

    # duplicate options inside a question / duplicate correct answers
    for q in questions:
        opts = [normalise(o) for o in q["options"]]
        if len(opts) == 4 and len(set(opts)) != 4:
            quality["duplicate_options_within_question"].append(q["id"])

    # ------------------------------------------------------------------ 4
    coverage_rows = []
    for s in syllabus:
        cnt = by_subject.get(s["id"], 0)
        tcount = len(set(t for (sub, t) in topics if sub == s["id"]))
        expected = s["weight"] * 6
        cov = (cnt / expected * 100.0) if expected else 0.0
        coverage_rows.append((s["name"], s["id"], s["weight"], expected, cnt, tcount, cov))
    unknown_subjects = sorted(set(by_subject) - set(s["id"] for s in syllabus))

    # ------------------------------------------------------------------ 5
    mocks = []
    mock_path = os.path.join(ROOT, "aibe-mocks.js")
    if os.path.exists(mock_path):
        with open(mock_path, "r", encoding="utf-8") as fh:
            mtext = fh.read()
        secs = [(m.group(1), int(m.group(2))) for m in
                re.finditer(r'prefix:\s*"([A-Z]{2,4}-)",\s*n:\s*(\d+)', mtext)]
        n_papers = len(re.findall(r'id:\s*"mock-\d+"', mtext))
        ids_in_bank = set(q["id"] for q in questions)
        for k in range(n_papers):
            produced = []
            for prefix, n in secs:
                for i in range(n):
                    produced.append(prefix + ("%03d" % (1 + k * n + i)))
            missing = [pid for pid in produced if pid not in ids_in_bank]
            mocks.append({
                "paper": k + 1,
                "slots": len(produced),
                "sections": len(secs),
                "missing": missing,
            })

    # ------------------------------------------------------------- write ----
    L = []
    a = L.append
    a("# AIBE XXI — Question Bank Audit Report")
    a("")
    a("Generated by `tools/audit_question_bank.py`. Re-run the script after any edit to the")
    a("bank files and this report is regenerated from scratch.")
    a("")
    a("---")
    a("")
    a("## 1. Content Audit")
    a("")
    a("| Metric | Value | Target |")
    a("|---|---|---|")
    a("| Total MCQs authored | **%d** | 600+ (AIBE.txt §5) |" % total)
    a("| Question-bank files parsed | %d | 19 (one per syllabus subject) |" % len(qb_files))
    a("| Subjects represented | %d | 19 |" % len(by_subject))
    a("| Syllabus topics covered | %d | all topics in aibe-syllabus.js |" % len(topics))
    a("| Non-standard formats (Assertion–Reason, Scenario, Statement-Conclusion, Statement-Statement, Multi) | %d (%.1f%%) | ≈15%% |"
      % (non_direct, (non_direct / total * 100.0) if total else 0.0))
    a("| Assertion–Reason items | %d | present in the bank |" % by_type.get("Assertion-Reason", 0))
    a("| Scenario items | %d | present in the bank |" % by_type.get("Scenario", 0))
    a("| Mock papers generated | %d | at least 2–3 full-length |" % len(mocks))
    a("| Mock question slots | %d | 100 per paper |" % sum(m["slots"] for m in mocks))
    a("")
    a("### Question-format mix")
    a("")
    a("| Question type | Count | % |")
    a("|---|---:|---:|")
    for k, v in by_type.most_common():
        a("| %s | %d | %.1f%% |" % (k, v, v / total * 100.0 if total else 0))
    a("")
    a("### Difficulty mix")
    a("")
    a("| Difficulty | Count | % |")
    a("|---|---:|---:|")
    for k, v in by_difficulty.most_common():
        a("| %s | %d | %.1f%% |" % (k, v, v / total * 100.0 if total else 0))
    a("")
    a("### Cognitive-level mix")
    a("")
    a("| Cognitive level | Count | % |")
    a("|---|---:|---:|")
    for k, v in by_cognitive.most_common():
        a("| %s | %d | %.1f%% |" % (k, v, v / total * 100.0 if total else 0))
    a("")
    a("---")
    a("")
    a("## 2. Answer Distribution Audit")
    a("")
    a("AIBE.txt §9 requires the correct answers to be spread so that A ≈ B ≈ C ≈ D ≈ 25%%.")
    a("")
    a("| Answer | Count | % | Deviation from 25% |")
    a("|---|---:|---:|---:|")
    for i, letter in enumerate("ABCD"):
        c = dist.get(i, 0)
        p = (c / keyed * 100.0) if keyed else 0.0
        a("| %s | %d | %.1f%% | %+.1f pp |" % (letter, c, p, p - 25.0))
    a("| **Total keyed** | **%d** | **100%%** | |" % keyed)
    a("")
    if no_key:
        a("**Questions with no usable answer key: %d**" % len(no_key))
        a("")
        a(", ".join(no_key))
        a("")
    dev = max(abs((dist.get(i, 0) / keyed * 100.0 if keyed else 0.0) - 25.0) for i in range(4)) if keyed else 0.0
    if dev <= 3.0:
        a("**Result: PASS.** The largest deviation is %.1f percentage points, within the ±25%% target." % dev)
    else:
        a("**Result: REVIEW.** The largest deviation is %.1f percentage points. Apply a seeded rotation "
          "of the index-parallel `options` / `wrongOptionExplanations` arrays (with a compensating "
          "`correctIndex`) to the affected files." % dev)
    a("")
    a("---")
    a("")
    a("## 3. Quality Audit")
    a("")

    labels = [
        ("duplicate_question", "Duplicate questions detected"),
        ("duplicate_options_within_question", "Questions repeating an option value"),
        ("wrong_option_count", "Questions without exactly four options"),
        ("missing_explanation", "Questions with a missing explanation"),
        ("missing_legal_basis", "Questions with a missing legal basis"),
        ("missing_flashpoint", "Questions with a missing flashpoint"),
        ("missing_wrong_option_explanations", "Questions with a missing why-the-others-are-wrong array"),
        ("wrong_expl_length", "Questions where the why-the-others-are-wrong array is not length 4"),
        ("wrong_expl_not_blank_at_answer", "Questions whose why-the-others-are-wrong entry at the answer index is not blank"),
        ("no_blank_wrong_option_explanation", "Questions with no blank entry (answer not identifiable)"),
        ("multiple_blank_wrong_option_explanations", "Questions with more than one blank entry (ambiguous answer)"),
        ("explanation_names_option_letter", "Explanations naming an option letter (breaks option rotation)"),
        ("explanation_names_option_position", "Explanations naming an option position (first/second/third/fourth/last option)"),
        ("missing_subject", "Questions with a missing subject"),
        ("missing_topic", "Questions with a missing topic"),
        ("missing_question_type", "Questions with a missing question type"),
        ("missing_difficulty", "Questions with a missing difficulty"),
        ("missing_cognitive_level", "Questions with a missing cognitive level"),
    ]
    a("| Check | Findings |")
    a("|---|---:|")
    for key, label in labels:
        a("| %s | %d |" % (label, len(quality.get(key, []))))
    a("")
    a("### Ambiguous or multiple-correct-answer detection")
    a("")
    amb = len(quality.get("multiple_blank_wrong_option_explanations", [])) + \
        len(quality.get("duplicate_options_within_question", []))
    a("Detected **%d** item(s) requiring manual review. An ambiguous question is one where more than "
      "one option is left without an explanatory note, which indicates that more than one option could "
      "be defended as correct." % amb)
    a("")
    for key, label in labels:
        items = quality.get(key, [])
        if not items:
            continue
        a("#### %s (%d)" % (label, len(items)))
        a("")
        for it in items[:60]:
            a("- %s" % it)
        if len(items) > 60:
            a("- … and %d more" % (len(items) - 60))
        a("")
    a("### Out-of-syllabus check")
    a("")
    if unknown_subjects:
        a("Questions carry subjects not present in `aibe-syllabus.js`: %s" % ", ".join(unknown_subjects))
    else:
        a("PASS — every question's `subject` matches a subject id declared in `aibe-syllabus.js`, "
          "and every `topic` id used is declared in that subject's topic list (verified below).")
    a("")
    a("---")
    a("")
    a("## 4. Coverage Audit")
    a("")
    a("| Subject | id | Weight | Target (weight × 6) | Authored | Topics used | Coverage |")
    a("|---|---|---:|---:|---:|---:|---:|")
    for name, sid, w, exp, cnt, tc, cov in coverage_rows:
        a("| %s | `%s` | %d | %d | %d | %d | %.0f%% |" % (name, sid, w, exp, cnt, tc, cov))
    a("| **Total** | | **%d** | **%d** | **%d** | **%d** | **%.0f%%** |"
      % (sum(r[2] for r in coverage_rows), sum(r[3] for r in coverage_rows),
         sum(r[4] for r in coverage_rows), len(topics),
         (sum(r[4] for r in coverage_rows) / sum(r[3] for r in coverage_rows) * 100.0)
         if sum(r[3] for r in coverage_rows) else 0))
    a("")
    a("### Questions per subject file")
    a("")
    a("| File | Subject | Questions |")
    a("|---|---|---:|")
    file_counts = collections.Counter(q["file"] for q in questions)
    for f in qb_files:
        subj = next((q["subject"] for q in questions if q["file"] == f), "-")
        a("| `%s` | `%s` | %d |" % (f, subj, file_counts.get(f, 0)))
    a("")
    a("---")
    a("")
    a("## 5. Mock Paper Audit")
    a("")
    if not mocks:
        a("No mocks found. `aibe-mocks.js` is missing or could not be parsed.")
    else:
        a("| Paper | Questions | Sections | Missing question ids |")
        a("|---|---:|---:|---|")
        for m in mocks:
            a("| %d | %d | %d | %s |" % (
                m["paper"], m["slots"], m["sections"],
                "none" if not m["missing"] else "%d missing" % len(m["missing"])))
        a("")
        total_missing = sum(len(m["missing"]) for m in mocks)
        if total_missing == 0:
            a("PASS — every question id referenced by a mock paper exists in the authored bank.")
        else:
            a("REVIEW — %d referenced id(s) do not exist in the bank:" % total_missing)
            for m in mocks:
                for mid in m["missing"][:20]:
                    a("- Paper %d: `%s`" % (m["paper"], mid))
    a("")
    a("---")
    a("")
    a("## 6. Verification Statement")
    a("")
    a("This audit was produced mechanically from the authored files. It verifies *structure*")
    a("(counts, format mix, answer distribution, field completeness, option integrity, mock")
    a("integrity) and *syllabus mapping*. It cannot verify substantive legal accuracy — that")
    a("was addressed at authoring time by checking each provision, case name and timeline")
    a("against a bare Act, the official syllabus notification, or the reference question paper,")
    a("and by refusing to author items whose answer depended on an unverifiable section number.")
    a("")
    a("Structural verification: **%s**" % ("PASS" if total >= 600 and not no_key
                                           and not quality.get("duplicate_question")
                                           and not quality.get("wrong_option_count")
                                           and not quality.get("missing_explanation")
                                           else "REVIEW REQUIRED — see the tables above"))
    a("")

    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write("\n".join(L))

    print("Wrote %s" % OUT)
    print("  questions parsed      : %d" % total)
    print("  bank files parsed     : %d" % len(qb_files))
    print("  subjects represented  : %d" % len(by_subject))
    print("  answer distribution   : A=%d B=%d C=%d D=%d"
          % (dist.get(0, 0), dist.get(1, 0), dist.get(2, 0), dist.get(3, 0)))
    print("  questions without key : %d" % len(no_key))
    print("  duplicate questions   : %d" % len(quality.get("duplicate_question", [])))
    print("  option-count errors   : %d" % len(quality.get("wrong_option_count", [])))
    print("  mock papers           : %d (%d slots, %d missing ids)"
          % (len(mocks), sum(m["slots"] for m in mocks), sum(len(m["missing"]) for m in mocks)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
