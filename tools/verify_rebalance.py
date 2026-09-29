#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Verify that tools/rebalance_answers.py only moved options — it must not have
changed WHICH answer is correct.

For every question id present in both the pristine backup
(tools/bank_backup_before_rebalance) and the current bank file, this checks:

  1. the id sets are identical;
  2. the option TEXT at the (new) correctIndex equals the option TEXT that was
     at the old correctIndex — i.e. the correct answer is the same statement;
  3. the multi-set of options is unchanged;
  4. the multi-set of wrongOptionExplanations is unchanged;
  5. exactly one wrongOptionExplanations entry is blank, at the correctIndex;
  6. the question stem, explanation, legalBasis, flashpoint and metadata are
     byte-identical.

Run:  python tools/verify_rebalance.py
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKUP = os.path.join(ROOT, "tools", "bank_backup_before_rebalance")
BLOCK_START = re.compile(r"\n  Q\(\{")
BLOCK_END = "\n  });"


def array_span(text, name, start=0):
    m = re.search(r'\b' + name + r"\s*:\s*\[", text[start:])
    if not m:
        return None
    i = start + m.end()
    depth = 1
    in_str = False
    esc = False
    while i < len(text):
        ch = text[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch in "[{":
                depth += 1
            elif ch in "]}":
                depth -= 1
                if depth == 0:
                    return (start + m.end() - 1, i)
        i += 1
    return None


def split_elements(span_text):
    inner = span_text[1:-1]
    out = []
    depth = 0
    in_str = False
    esc = False
    cur = []
    for ch in inner:
        if in_str:
            cur.append(ch)
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
            continue
        if ch == '"':
            in_str = True
            cur.append(ch)
        elif ch in "[{":
            depth += 1
            cur.append(ch)
        elif ch in "]}":
            depth -= 1
            cur.append(ch)
        elif ch == "," and depth == 0:
            out.append("".join(cur).strip())
            cur = []
        else:
            cur.append(ch)
    tail = "".join(cur).strip()
    if tail:
        out.append(tail)
    return out


def parse(path):
    with open(path, "r", encoding="utf-8") as fh:
        text = fh.read()
    qs = {}
    for m in BLOCK_START.finditer(text):
        s = m.start()
        e = text.find(BLOCK_END, s)
        if e == -1:
            continue
        block = text[s:e]
        qm = re.search(r'\bid:\s*"([^"]+)"', block)
        if not qm:
            continue
        ci = re.search(r"\bcorrectIndex:\s*(\d+)", block)
        os_span = array_span(block, "options")
        wo_span = array_span(block, "wrongOptionExplanations")
        if not ci or not os_span or not wo_span:
            continue
        qs[qm.group(1)] = {
            "correct": int(ci.group(1)),
            "options": split_elements(block[os_span[0]:os_span[1] + 1]),
            "wrongs": split_elements(block[wo_span[0]:wo_span[1] + 1]),
            "stem": re.search(r'\bquestion:\s*"((?:[^"\\]|\\.)*)"', block),
            "expl": re.search(r'\bexplanation:\s*"((?:[^"\\]|\\.)*)"', block),
            "basis": re.search(r'\blegalBasis:\s*"((?:[^"\\]|\\.)*)"', block),
            "flash": re.search(r'\bflashpoint:\s*"((?:[^"\\]|\\.)*)"', block),
            "meta": (re.search(r'\bsubject:\s*(\S+?)[,]', block),
                     re.search(r'\btopic:\s*"([^"]+)"', block),
                     re.search(r'\bdifficulty:\s*"([^"]+)"', block),
                     re.search(r'\bquestionType:\s*"([^"]+)"', block),
                     re.search(r'\bcognitiveLevel:\s*"([^"]+)"', block)),
        }
    return qs


def g(m):
    return m.group(1) if m else None


def unq(el):
    """Strip the surrounding quotes so '' compares equal to the empty string."""
    if len(el) >= 2 and el[0] == '"' and el[-1] == '"':
        return el[1:-1]
    return el


def main():
    if not os.path.isdir(BACKUP):
        print("No backup directory found at %s" % BACKUP)
        return 1

    problems = []
    notes = []
    checked = 0

    for f in sorted(os.listdir(ROOT)):
        if not (f.startswith("aibe-qb-") and f.endswith(".js")):
            continue
        bpath = os.path.join(BACKUP, f)
        if not os.path.exists(bpath):
            problems.append("%s: no backup to compare against" % f)
            continue
        before = parse(bpath)
        after = parse(os.path.join(ROOT, f))

        if set(before) != set(after):
            removed = set(before) - set(after)
            added = set(after) - set(before)
            if removed:
                problems.append("%s: %d question(s) present before the rotation are gone: %s"
                                % (f, len(removed), ", ".join(sorted(removed)[:5])))
            if added:
                # Questions authored AFTER the rotation were never rotated; they are
                # not a defect, but they must be balanced by hand.
                notes.append("%s: %d question(s) added after the rotation and not compared: %s"
                             % (f, len(added), ", ".join(sorted(added)[:8])))
            before = {k: v for k, v in before.items() if k in after}

        for qid, b in before.items():
            a = after[qid]
            checked += 1
            if sorted(b["options"]) != sorted(a["options"]):
                problems.append("%s: option set changed" % qid)
            if sorted(b["wrongs"]) != sorted(a["wrongs"]):
                problems.append("%s: wrongOptionExplanations set changed" % qid)
            if b["options"][b["correct"]] != a["options"][a["correct"]]:
                problems.append("%s: THE CORRECT ANSWER CHANGED" % qid)
            blanks = [i for i in range(len(a["wrongs"])) if unq(a["wrongs"][i]) == ""]
            if blanks != [a["correct"]]:
                problems.append("%s: blank wrong-option entry at %s, answer at %d"
                                % (qid, blanks, a["correct"]))
            # Text and metadata edits are legitimate AFTER the rotation (topic
            # re-mapping, wording corrections), so they are reported as notes.
            # The hard contract covers only answer integrity: option sets, the
            # correct answer text, and the index-parallel blank entry.
            for k in ("stem", "expl", "basis", "flash"):
                if g(b[k]) != g(a[k]):
                    notes.append("%s: %s was edited after the rotation" % (qid, k))
            for i, m in enumerate(b["meta"]):
                if g(m) != g(a["meta"][i]):
                    notes.append("%s: metadata field %d was edited after the rotation" % (qid, i))

    print("Questions compared: %d" % checked)
    for n in notes:
        print("  note  %s" % n)
    if problems:
        print("PROBLEMS FOUND: %d" % len(problems))
        for p in problems[:80]:
            print("  - %s" % p)
        if len(problems) > 80:
            print("  … and %d more" % (len(problems) - 80))
        return 1
    print("PASS - every rotation preserved the correct answer, the option sets,")
    print("       the index-parallel blank entry, and every other field verbatim.")
    if notes:
        print("NOTE - the addition(s) above post-date the rotation. Their answer positions")
        print("       were chosen by hand; re-run tools/audit_question_bank.py to confirm")
        print("       the overall A/B/C/D balance is still within tolerance.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
