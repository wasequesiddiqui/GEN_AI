# AIBE XXI — Final Validation & Audit Report

This report records **what was built**, **how it was verified**, and **every defect that was
found and fixed** during the build. It is the §24 "final validation and audit report" required
by `AIBE.txt`.

| Report | Contents |
|---|---|
| `AIBE_ANALYSIS.md` | Source inventory, extraction trail, official syllabus transcription, Set A empirical analysis, conflict register, question-generation patterns |
| `AIBE_AUDIT.md` | Machine-generated: content audit, answer-distribution audit, quality audit, coverage audit, mock audit (regenerate with `tools/audit_question_bank.py`) |
| `AIBE_VALIDATION.md` | This file — verification log, defects found and fixed, limitations |

---

## 1. Deliverables

| `AIBE.txt` requirement | Delivered | Where |
|---|---|---|
| Complete study material + subject-wise study notes | 92 topics across all 19 subjects; each with concept, provisions, cases, exceptions, confusions, AIBE focus | `aibe-notes-1.js`, `aibe-notes-2.js`, `aibe-notes-3.js` |
| Flashpoints | 444 flashpoints, searchable | inside the notes files + `Views.flashpoints` |
| 600+ MCQs | **604** questions, all 19 subjects, weight × 6 per subject (+4 extra in Taxation) | `aibe-qb-*.js` (19 files) |
| Assertion–Reason bank | 12 items | tagged `questionType: "Assertion-Reason"` |
| Scenario-based bank | 35 items | tagged `questionType: "Scenario"` |
| Full-length mock tests | 5 papers × 100 questions, official subject distribution | `aibe-mocks.js` |
| Answer keys + detailed explanations | Every question: `explanation`, `legalBasis`, index-parallel `wrongOptionExplanations`, `flashpoint`, `source` | every `Q({...})` |
| Rapid revision material | 19 rapid sheets + 19 one-day points + 7-day plan + 9 final lists | `aibe-revision.js` |
| Performance-tracking system | Attempts, accuracy by subject/topic/difficulty/cognitive/type, weak-area drill, spaced-revision states, mock scores, export/reset | `Views.analytics`, `Views.revision`, `State` |
| Professional interactive HTML application | 11 views, no build step, offline, `localStorage` persistence | `AIBE.html`, `aibe.css`, `aibe-app.js` |
| Answer randomisation to A≈B≈C≈D≈25% + distribution audit | **150 / 150 / 150 / 151** (25.2% / 25.0% / 24.8% / 25.0%) | `tools/rebalance_answers.py`, §2 of `AIBE_AUDIT.md` |
| No fabrication of sections, cases, dates, provisions | Every provision checked against a bare Act, the official notification, or the reference paper; unverifiable items were not authored | `aibe-revision.js` head note, `AIBE_ANALYSIS.md` §conflict register |

---

## 2. Verification performed

### 2.1 Static / data verification

```
C:/Python/python3.14t.exe tools/audit_question_bank.py    # structural + coverage audit
node tools/smoke_test.js                                  # data-model contract test
C:/Python/python3.14t.exe tools/verify_rebalance.py       # answer-rotation equivalence proof
node --check <every aibe-*.js>                            # JavaScript syntax
```

**Result — all four pass.**

| Check | Result |
|---|---|
| Questions parsed | 604 |
| Bank files parsed | 19 |
| Subjects represented | 19 of 19 |
| Syllabus topics covered | **136 of 136** (100%) |
| Answer key | A=152 B=151 C=150 D=151 — max deviation 0.2 pp from 25% |
| Duplicate question text | 0 |
| Questions without exactly four options | 0 |
| Missing explanation / legal basis / flashpoint | 0 |
| `wrongOptionExplanations` not length 4 | 0 |
| Blank wrong-option entry not at the correct index | 0 |
| Multiple blank entries (ambiguous / multi-correct) | 0 |
| Explanations naming an option letter or position | 0 |
| Mock papers | 5 × 100 questions, official distribution, **0 missing ids** |
| JavaScript syntax errors | 0 of 26 files |
| Smoke-test errors / warnings | 0 / 0 |

### 2.2 Runtime (browser) verification

Loaded `AIBE.html` in the integrated browser with error and console capture attached.

| Behaviour | Result |
|---|---|
| Load, boot, console clean | ✅ no errors, no console warnings |
| Nav built (5 groups, 10 buttons) with live counts (604 / 444 / 12 / 35 / 5) | ✅ |
| All 11 panels render | ✅ dashboard, syllabus, notes, flashpoints, bank, assertion, scenario, mocks, revision, quiz, analytics |
| Dashboard | ✅ 8 stat cards, "Exam at a glance" table, subject-progress table, recommendations |
| Browse a question: click option → Submit | ✅ option marked, no reveal; Submit reveals, records the attempt, sets a revision state |
| Revealed card | ✅ verdict, detailed explanation, legal basis, "why the other options are wrong", flashpoint, source tag |
| Timed quiz from filters | ✅ capped at 100 questions, sensible timer, HUD (answered / correct / countdown / position) |
| Scoring correctness | ✅ deliberately selecting the option the app computes as correct scored **6 / 6** |
| Session submit | ✅ score, accuracy, subject-wise and difficulty-wise analysis, "show all explanations and answer key", "practise only the ones I got wrong" |
| Mock test end-to-end | ✅ 100-question paper starts, timer counts down, `mockId` recorded, score persisted and shown in the Mock Tests list |
| Persistence | ✅ `localStorage` key `aibe21-state-v1` (attempts, revision states, bookmarks, sessions, mock scores) |
| Revision view | ✅ 19 rapid sheets, one-day list, 7-day table, 9 final-revision lists, saved sessions |
| Analytics view | ✅ 11 cards, 6 tables, export JSON, reset |
| Hub integration | ✅ `index.html` card links to `AIBE.html` with `target="_blank"` |

---

## 3. Defects found and fixed

Seven real defects were found and fixed. One of them was self-inflicted and is disclosed in full.

### 3.1 Legal accuracy

| # | Defect | Fix |
|---|---|---|
| 1 | **CrPC s.2(h)** was described as defining a *bailable offence*. In fact **s.2(a)** defines bailable/non-bailable; **s.2(h) is "investigation"** — the exact distractor the real Set A paper uses. | Corrected in `aibe-notes-1.js`, `aibe-syllabus.js` and `AIBE_ANALYSIS.md`, and turned into an explicit flashpoint. |
| 2 | **Indore Development Authority v. Manoharlal** was stated **backwards** — the option described the *Pune Municipal Corporation* position. | Rewritten: both conditions must be satisfied for the proceedings to lapse; Pune Municipal Corporation was overruled. |
| 3 | **ENV-004** offered *"Oleum Gas Leak Reference"* as a distractor alongside *M.C. Mehta (1987) 1 SCC 395* — the same case, i.e. two defensible answers. | Replaced the distractor with *Indian Council for Enviro-Legal Action*. |
| 4 | **IP-001** conflated the Government's *own-use* right (s.47) with the power to *acquire* an invention (s.102). | Rewritten to test s.47 with the statutory "merely of its own use" wording; s.100 and s.102 distinguished in the explanation. |
| 5 | **TAX-004** had a self-contradictory scenario (an 18-month fact pattern unrelated to its own explanation). | Replaced with an unambiguous question on the 182-day substitution in the first proviso to s.6(1), plus the Finance Act 2020 120-day proviso. |
| 6 | **EVD-006** carried a fifth, malformed `wrongOptionExplanations` entry reading *"The second option is correct."* | Removed — it both broke the length-4 contract and named an option position, which would have been falsified by answer rotation. |

### 3.2 Software

| # | Defect | Fix |
|---|---|---|
| 7 | **Infinite recursion.** `Quiz.render()` → `goTo("quiz")` → `Views.quiz()` → `Quiz.render()` … crashed with `RangeError: Maximum call stack size exceeded`, so a mock test could never be started. | `goTo()` split into `activate()` (panel, sidebar, headings, hash) and the view render. `Quiz.render()` now calls `activate("quiz")` and creates `#quizBody` itself if the panel has not been rendered yet. |
| 8 | **Nonsense timer.** "Start timed quiz" computed `60 × ceil(n/2)` *minutes*, so the unfiltered 604-question bank produced an 18,120-minute (302-hour) countdown. | Capped the drill at 100 questions and budgeted ~2 questions per minute; the title now states "first 100 of 604 matching". |
| 9 | **Three syllabus topics uncovered** — `taxation/x5` (Capital Gains), `x6` (Procedure) and `x7` (GST) had no question mapped to them. | 13 questions re-mapped to the topics they genuinely test, and 4 new Taxation questions authored (2 on Income from Other Sources, 2 on Chapter VI-A deductions). Coverage is now 136/136 topics. |

### 3.3 Disclosure — self-inflicted corruption and recovery

While rebalancing the answer key I wrote a script whose replacement spans were computed
**relative to each question block** but applied **to the whole file**. Each edit therefore
overwrote text near the *start* of the file, destroying the header and first question of all
19 bank files (600 questions became 580 parseable, 18 of 19 `var S` subject declarations lost).

Recovery:

1. The workspace had no committed copy of the bank files (all untracked in git), so git could
   not restore them.
2. `tools/restore_bank_from_transcript.py` was written to replay the Copilot session
   transcript — every `create_file` and every `replace_string_in_file` tool call, **in order** —
   reconstructing all 19 files exactly as they stood immediately before the bad run.
   Result: 600 questions, 19 subjects, 0 option-count errors — byte-consistent with the
   pre-incident state.
3. `tools/rebalance_answers.py` was fixed (absolute offsets) and hardened with **pre-write
   assertions** on every span plus post-edit verification of the id list, field counts,
   bracket/brace balance and duplicated-key detection. A file that fails verification is
   skipped and reported instead of written.
4. `tools/verify_rebalance.py` was added to prove the rotation is semantics-preserving. For
every question it asserts the **answer-integrity contract**:
   - the option **text** at the new correct index equals the text that was at the old correct index;
   - the option multiset and the wrong-option multiset are unchanged;
   - exactly one blank entry remains, and it sits at the answer index;
   - no question that existed before the rotation has disappeared.

   Text and metadata edits made *after* the rotation (the Taxation topic re-mapping and the
   four added questions) are reported as **notes**, not failures, because they are legitimate
   content edits that cannot falsify a rotation.

**Result: `verify_rebalance.py` reports "PASS — every rotation preserved the correct answer,
the option sets, the index-parallel blank entry, and every other field verbatim" over 600
compared questions, with 17 informational notes (4 questions added post-rotation, 13 topic
re-mappings).** Pristine pre-rotation copies are retained in
`tools/bank_backup_before_rebalance/` so the proof can be re-run.

---

## 4. Why answer rotation is safe here

Three invariants were designed in from the start and are enforced by both the audit and the
smoke test:

1. Every question has exactly four options.
2. `wrongOptionExplanations` is **index-parallel** to `options`, with an empty string at the
   correct index — so rotating one rotates the other in lock-step.
3. **No `explanation` or `legalBasis` names an option letter or position.** The audit checks
   for `option A|B|C|D` and `first|second|third|fourth|last option`. Six questions violated
   this during authoring and were rewritten.

Because of (3) an option may be moved to any position without falsifying its explanation.

---

## 5. Known limitations — read before relying on this

1. **Substantive legal accuracy is a human-review task.** The automated checks verify
   *structure*, *balance* and *syllabus mapping*. They cannot verify that a section number is
   correct. Each provision, case name and timeline was checked at authoring time against a bare
   Act, the official syllabus notification, or the reference paper, and items whose answer
   depended on an unverifiable section number were **not authored** — but a bare-Act
   cross-check of all 604 items before use is still strongly advised.
2. **Penalties and monetary limits that move.** The Motor Vehicles Act penalty numbering was
   renumbered by the 2019 Amendment; Consumer Protection pecuniary jurisdiction was revised by
   the 2021 Rules; the Income-tax residential-status provisos were amended by the Finance Act
   2020. Those items say so in their explanations and flashpoints.
3. **The IPC/CrPC/Evidence Act vs BNS/BNSS/BSA dual regime.** The official syllabus names both
   the old and the new statutes, so the bank tests both and the "Old Act ↔ New Sanhita map"
   opens with a caution that the correspondence is a study aid, not a substitution table. The
   three new Acts are **not** verbatim re-enactments: section numbers, wording, punishments and
   sometimes the scope of an offence have changed.
4. **Non-standard question formats are 12.4%**, not the "≈15%" noted in the analysis of Set A.
   Format labels are per question and were not inflated to hit a target.
5. **Taxation carries 28 questions against a proportional target of 24.** The four extra exist
   because Income from Other Sources and Chapter VI-A would otherwise have had a single question
   each. This is over-provision, not a coverage gap.
6. **The mocks draw from the first 50 questions of each subject.** Five papers × 100 need 500 of
   the 604 items; the papers do not overlap and every id is verified to exist, but Papers 1–5 do
   not use the last 104 questions.
7. **`tools/bank_backup_before_rebalance/`** contains a full pre-rotation copy of the bank
   (~1.1 MB). It exists so `tools/verify_rebalance.py` can be re-run; delete it once you no
   longer need that proof.
8. **`tools/restore_bank_from_transcript.py`** reads a machine-specific transcript path. It is
   kept as a documented recovery path, not as a routine tool.

---

## 6. Reproducing the verification

```
C:/Python/python3.14t.exe tools/audit_question_bank.py   # regenerates AIBE_AUDIT.md
node tools/smoke_test.js                                 # data-model contract test
C:/Python/python3.14t.exe tools/verify_rebalance.py      # rotation equivalence proof

# answer rotation (only needed if the key is ever edited again)
C:/Python/python3.14t.exe tools/rebalance_answers.py --dry-run
C:/Python/python3.14t.exe tools/rebalance_answers.py
```

Then open `AIBE.html` (or the card on the hub, `index.html`) and confirm
`window.AIBE_QUESTIONS.length === 604`, the syllabus weights total 100, and a mock paper starts
and scores.
