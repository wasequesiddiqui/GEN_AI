#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AIBE XXI - answer-key rebalancer.

AIBE.txt section 9 requires the correct answers of the 600-question bank to be
distributed so that A ~ B ~ C ~ D ~ 25%. Authoring produced a heavy bias toward
one option position. This script rotates the `options` array of each question,
carrying the index-parallel `wrongOptionExplanations` array with it and
compensating `correctIndex`, so that the answer key is exactly balanced.

SAFETY INVARIANTS this relies on (both verified by tools/audit_question_bank.py):
  1. Every question has exactly four options.
  2. `wrongOptionExplanations` is index-parallel to `options`, with an empty
     string at the correct index.
  3. No `explanation` or `legalBasis` names an option letter (A/B/C/D), so
     moving an option to a different position cannot falsify the explanation.

Rotation is performed on the RAW source text of each array element, so string
escaping (\\n, \\", unicode) is preserved byte for byte.

Run:  python tools/rebalance_answers.py [--dry-run]
"""

import os
import re
import sys
import shutil
import random
import collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKUP = os.path.join(ROOT, "tools", "bank_backup_before_rebalance")
SEED = 20260302                      # BCI syllabus notification date, for determinism
BLOCK_START = re.compile(r"\n  Q\(\{")
BLOCK_END = "\n  });"


# ------------------------------------------------------------- extraction ---

def array_span(text, name, start=0):
    """Return (start_index, end_index) of the array literal for `name: [...]`."""
    m = re.search(r'\b' + name + r"\s*:\s*\[", text[start:])
    if not m:
        return None
    i = start + m.end()          # just past the opening '['
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
                    return (start + m.end() - 1, i)      # include '[' .. ']'
        i += 1
    return None


def split_elements(span_text):
    """Split the inside of an array literal into raw element texts."""
    inner = span_text[1:-1]                      # drop [ and ]
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


def render_array(elements, indent="    "):
    """
    Render an ARRAY LITERAL ONLY, one element per line for readability.

    The replaced span covers the brackets and their contents, not the
    `options:` / `wrongOptionExplanations:` key, so the key must not be
    re-emitted here or the file becomes `options: options: [...]`.
    """
    one = "[" + ", ".join(elements) + "]"
    if len(one) <= 140:
        return one
    pad = indent + "  "
    body = (",\n" + pad).join(elements)
    return "[\n" + pad + body + "\n" + indent + "]"


def unquote(el):
    if len(el) >= 2 and el[0] == '"' and el[-1] == '"':
        b = el[1:-1]
        return b.replace('\\"', '"').replace("\\n", "\n").replace("\\\\", "\\")
    return el


# ------------------------------------------------------------------ main ----

def main():
    dry = "--dry-run" in sys.argv

    qb_files = sorted(f for f in os.listdir(ROOT)
                      if f.startswith("aibe-qb-") and f.endswith(".js"))
    if not qb_files:
        print("No aibe-qb-*.js files found.")
        return 1

    # ---- pass 1: inventory every question and its current answer position ---
    inventory = []          # (file, block_start, block_end, qid, correct, opts, wrongs)
    for f in qb_files:
        path = os.path.join(ROOT, f)
        with open(path, "r", encoding="utf-8") as fh:
            text = fh.read()
        # BLOCK_START matches "\n  Q({"; m.start() is the index of the "\n"
        starts = [m.start() for m in BLOCK_START.finditer(text)]
        for s in starts:
            e = text.find(BLOCK_END, s)
            if e == -1:
                continue
            block = text[s:e]
            qm = re.search(r'\bid:\s*"([^"]+)"', block)
            if not qm:
                continue
            ci = re.search(r"\bcorrectIndex:\s*(\d+)", block)
            if not ci:
                print("  ! %s has no correctIndex; skipped" % qm.group(1))
                continue
            os_span = array_span(block, "options")
            wo_span = array_span(block, "wrongOptionExplanations")
            if not os_span or not wo_span:
                print("  ! %s missing options/wrongOptionExplanations; skipped" % qm.group(1))
                continue
            opts = split_elements(block[os_span[0]:os_span[1] + 1])
            wrongs = split_elements(block[wo_span[0]:wo_span[1] + 1])
            if len(opts) != 4 or len(wrongs) != 4:
                print("  ! %s has %d options / %d wrongs; skipped"
                      % (qm.group(1), len(opts), len(wrongs)))
                continue
            inventory.append({
                "file": f, "path": path, "block_start": s, "block_end": e,
                "id": qm.group(1), "correct": int(ci.group(1)),
                "opts": opts, "wrongs": wrongs,
                # array_span() works on the block substring; convert to absolute
                # file offsets by adding the block start. Getting this wrong
                # silently overwrites unrelated text, so it is asserted below.
                "opts_span": (s + os_span[0], s + os_span[1]),
                "wrongs_span": (s + wo_span[0], s + wo_span[1]),
                "ci_span": (s + ci.start(1), s + ci.end(1)),
            })

    total = len(inventory)
    print("Questions inventoried: %d" % total)

    # ---- pass 2: decide a perfectly balanced target position for each -------
    rng = random.Random(SEED)
    targets = [0, 1, 2, 3] * (total // 4 + 1)
    targets = targets[:total]
    rng.shuffle(targets)
    # avoid long runs of the same position
    for i in range(2, total):
        if targets[i] == targets[i - 1] == targets[i - 2]:
            j = i + 1
            while j < total and targets[j] == targets[i]:
                j += 1
            if j < total:
                targets[i], targets[j] = targets[j], targets[i]

    before = collections.Counter()
    after = collections.Counter()
    failed = []

    # ---- pass 3: apply, grouping edits per file, applying back-to-front ------
    by_file = collections.defaultdict(list)
    for q, t in zip(inventory, targets):
        by_file[q["file"]].append((q, t))

    for f, items in by_file.items():
        path = os.path.join(ROOT, f)
        with open(path, "r", encoding="utf-8") as fh:
            text = fh.read()

        edits = []
        for q, target in items:
            c = q["correct"]
            before[c] += 1
            after[target] += 1
            if c == target:
                continue
            perm = list(range(4))
            perm[c], perm[target] = perm[target], perm[c]
            new_opts = [q["opts"][perm[p]] for p in range(4)]
            new_wrongs = [q["wrongs"][perm[p]] for p in range(4)]

            rel_opts = (q["opts_span"][0], q["opts_span"][1] + 1)
            rel_wrongs = (q["wrongs_span"][0], q["wrongs_span"][1] + 1)
            rel_ci = q["ci_span"]

            # sanity: the span must still slice the original array literal
            assert text[rel_opts[0]] == "[" and text[rel_opts[1] - 1] == "]", \
                "options span out of range for %s" % q["id"]
            assert text[rel_wrongs[0]] == "[" and text[rel_wrongs[1] - 1] == "]", \
                "wrongOptionExplanations span out of range for %s" % q["id"]
            assert text[rel_ci[0]:rel_ci[1]].isdigit(), \
                "correctIndex span out of range for %s" % q["id"]

            edits.append((rel_opts[0], rel_opts[1], render_array(new_opts)))
            edits.append((rel_wrongs[0], rel_wrongs[1], render_array(new_wrongs)))
            edits.append((rel_ci[0], rel_ci[1], str(target)))

        edits.sort(key=lambda x: x[0], reverse=True)
        new_text = text
        for a, b, rep in edits:
            new_text = new_text[:a] + rep + new_text[b:]

        # ---- verify before committing -------------------------------------
        before_ids = re.findall(r'\bid:\s*"([A-Z]{2,4}-\d+)"', text)
        after_ids = re.findall(r'\bid:\s*"([A-Z]{2,4}-\d+)"', new_text)
        problems = []
        if before_ids != after_ids:
            problems.append("id list changed (%d -> %d)" % (len(before_ids), len(after_ids)))
        for key in ("options", "wrongOptionExplanations", "correctIndex"):
            if new_text.count(key + ":") != text.count(key + ":"):
                problems.append("field count changed for %s" % key)
        for bad in ("options: options:", "wrongOptionExplanations: wrongOptionExplanations:",
                    "correctIndex: correctIndex:"):
            if bad in new_text:
                problems.append("duplicated key %r" % bad)
        if new_text.count("[") != text.count("[") or new_text.count("]") != text.count("]"):
            problems.append("bracket count changed")
        if new_text.count("{") != text.count("{") or new_text.count("}") != text.count("}"):
            problems.append("brace count changed")
        if problems:
            print("  !! %s NOT written: %s" % (f, "; ".join(problems)))
            failed.append(f)
            continue

        if dry:
            print("  %-32s %d edit(s) prepared" % (f, len(edits)))
        else:
            if not os.path.isdir(BACKUP):
                os.makedirs(BACKUP)
            shutil.copy2(path, os.path.join(BACKUP, f))
            with open(path, "w", encoding="utf-8", newline="") as fh:
                fh.write(new_text)
            print("  %-32s %d edit(s) written" % (f, len(edits)))

    print()
    print("Answer position before: A=%d B=%d C=%d D=%d"
          % (before[0], before[1], before[2], before[3]))
    print("Answer position after : A=%d B=%d C=%d D=%d  (%.1f%% each)"
          % (after[0], after[1], after[2], after[3], total and 100.0 / 4))
    if failed:
        print("FILES NOT WRITTEN (verification failed): %s" % ", ".join(failed))
    if dry:
        print("DRY RUN - no files were changed.")
    else:
        print("Pristine copies saved to %s" % BACKUP)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
