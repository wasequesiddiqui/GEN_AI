#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Restore the aibe-qb-*.js question bank files from the Copilot session transcript.

The transcript is a JSONL file in which every tool call made during the session
is recorded. This script walks it in order and reconstructs the exact content of
each question-bank file as it stood immediately before tools/rebalance_answers.py
was (incorrectly) run:

  * create_file   -> sets the file content
  * replace_string_in_file        -> applies one oldString -> newString edit
  * multi_replace_string_in_file  -> applies each replacement in order

Usage:
    python tools/restore_bank_from_transcript.py <transcript.jsonl> [--apply]

Without --apply the script only reports what it would restore.
"""

import os
import re
import sys
import json
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKUP = os.path.join(ROOT, "tools", "bank_backup_before_restore")


def walk_calls(obj, out):
    """Recursively collect every tool-call argument dict in a transcript record."""
    if isinstance(obj, dict):
        if ("filePath" in obj or "file_path" in obj) and (
            "content" in obj or "oldString" in obj or "replacements" in obj
        ):
            out.append(obj)
        for v in obj.values():
            walk_calls(v, out)
    elif isinstance(obj, list):
        for v in obj:
            walk_calls(v, out)


def get(obj, *names):
    for n in names:
        if n in obj:
            return obj[n]
    return None


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 1
    path = sys.argv[1]
    apply = "--apply" in sys.argv

    if not os.path.exists(path):
        print("Transcript not found: %s" % path)
        return 1

    files = {}          # absolute path -> content
    order = []
    stats = {"create": 0, "replace": 0, "multi": 0, "skipped": 0}

    with open(path, "r", encoding="utf-8", errors="replace") as fh:
        for lineno, line in enumerate(fh, 1):
            line = line.strip()
            if not line:
                continue
            try:
                rec = json.loads(line)
            except Exception:
                stats["skipped"] += 1
                continue

            calls = []
            walk_calls(rec, calls)
            for call in calls:
                fp = get(call, "filePath", "file_path")
                if not fp or not re.search(r"aibe-qb-[a-z\-]+\.js$", fp.replace("\\", "/")):
                    continue
                key = os.path.normcase(os.path.abspath(fp))

                if "content" in call:
                    content = call["content"]
                    if not isinstance(content, str):
                        continue
                    if key not in files:
                        order.append(key)
                    files[key] = content
                    stats["create"] += 1

                elif "replacements" in call:
                    reps = call["replacements"]
                    if key not in files:
                        stats["skipped"] += 1
                        continue
                    ok = 0
                    for r in reps:
                        old = get(r, "oldString", "old_string")
                        new = get(r, "newString", "new_string")
                        if old is None or new is None:
                            continue
                        if old in files[key]:
                            files[key] = files[key].replace(old, new, 1)
                            ok += 1
                        else:
                            print("  ! line %d: oldString not found in %s"
                                  % (lineno, os.path.basename(key)))
                    stats["multi"] += 1
                    print("  %s: applied %d/%d replacement(s) from line %d"
                          % (os.path.basename(key), ok, len(reps), lineno))

                elif "oldString" in call:
                    old = call["oldString"]
                    new = get(call, "newString", "new_string")
                    if key not in files or new is None:
                        stats["skipped"] += 1
                        continue
                    if old in files[key]:
                        files[key] = files[key].replace(old, new, 1)
                        stats["replace"] += 1
                    else:
                        print("  ! line %d: oldString not found in %s"
                              % (lineno, os.path.basename(key)))

    print()
    print("Tool calls replayed: %s" % stats)
    print("Files reconstructed: %d" % len(files))
    for k in order:
        print("  %-34s %7d bytes" % (os.path.basename(k), len(files[k])))

    if not apply:
        print()
        print("DRY RUN - nothing written. Re-run with --apply to restore.")
        return 0

    if os.path.isdir(BACKUP):
        shutil.rmtree(BACKUP)
    os.makedirs(BACKUP)
    for k in order:
        if os.path.exists(k):
            shutil.copy2(k, os.path.join(BACKUP, os.path.basename(k)))
    for k in order:
        with open(k, "w", encoding="utf-8", newline="") as fh:
            fh.write(files[k])
    print()
    print("Restored %d file(s). Corrupted copies backed up to %s" % (len(order), BACKUP))
    return 0


if __name__ == "__main__":
    sys.exit(main())
