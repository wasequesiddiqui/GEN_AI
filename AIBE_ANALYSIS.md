# AIBE XXI (2026) — Source Analysis & Syllabus Map

**Prepared for:** LLB candidate, All India Bar Examination XXI (2026)
**Date of analysis:** 29 September 2026
**Analyst role:** AIBE examination strategist / legal question-bank designer

---

## 1. Source inventory (what this build is grounded in)

| # | Source | Type | Status | Use in this build |
|---|--------|------|--------|-------------------|
| 1 | `Syllabus for All India Bar Exam-XXI.pdf` | Bar Council of India Trust notification, dated **02.03.2026** | 1 page, **scanned (no text layer)** — rendered and read by OCR-by-vision | **Authoritative** for subject list, sub-grouping and question weightage |
| 2 | `AIBE_XXI_English_Set_A.pdf` | Official question paper, `AX-2026/1-XI`, **Set Code-A**, English | 24 pages, 100 questions, text layer intact | **Authoritative** for style, structure, difficulty, wording and question patterns |
| 3 | Bare Acts (IPC 1860, CrPC 1973, CPC 1908, Indian Evidence Act 1872, BNS/BNSS/BSA 2023, Advocates Act 1961, etc.) | Statutes | Public domain | Legal basis for explanations |
| 4 | Reported judgments | Case law | Public domain | Legal basis for case-law questions |

**Provenance rule used throughout.** Every practice item is tagged with `source` values:
`SYLLABUS` (weightage/topic derived from source 1), `PAPER-PATTERN` (format/emphasis inferred from source 2),
`STATUTE` (bare Act), `CASE` (judgment), `SUPPLEMENTARY` (useful general Indian law outside the strict syllabus —
always labelled). Items derived from the paper's *format* are never presented as if they were the paper's *answers*.

### 1.1 Extraction / verification trail

* `tools/extract_pdfs.py` → `AIBE_XXI_English_Set_A.txt` (all 100 questions with text intact).
* The syllabus PDF has no extractable text (0 bytes of text). It was rasterised with
  `tools/render_syllabus.py` (pdfium → PNG) and read visually. The table in §2 below is transcribed
  from that scan and is the operative syllabus.
* New criminal-law section numbers used in this build were verified against a Bare-Act listing:
  * **BNS 2023** (Act 45 of 2023, 358 sections, in force **1 July 2024**), s.4 punishments *[death; imprisonment for life;
    imprisonment (rigorous/simple); forfeiture of property; fine; **community service**]*; ch. II ss.4–13; ch. IV
    s.61 criminal conspiracy, s.62 attempt; ch. VI s.100 culpable homicide, s.101 murder, s.103 punishment for murder,
    s.106 death by negligence, s.108 abetment of suicide, s.109 attempt to murder, **s.111 organised crime**,
    s.112 petty organised crime, **s.113 terrorist act**; s.114 hurt, s.116 grievous hurt, s.126 wrongful restraint,
    s.127 wrongful confinement, s.128 force, s.129 criminal force, s.130 assault; **s.137 kidnapping, s.138 abduction**,
    s.139, s.140, s.143 trafficking, s.146 unlawful compulsory labour; ch. VII **s.147 waging war**, s.152 acts endangering
    sovereignty/unity/integrity (the sedition replacement); ch. XVII **s.303 theft**, s.304 snatching, s.305, s.306,
    s.308 extortion, **s.309 robbery, s.310 dacoity**, s.314 dishonest misappropriation, s.316 criminal breach of trust,
    s.317 stolen property, s.318 cheating, s.324 mischief, s.329 criminal trespass, s.330 house-trespass; ch. XIX
    s.351 criminal intimidation, **s.356 defamation**.
  * **BNSS 2023** (Act 46 of 2023, 531 sections, 2 schedules, in force 1 July 2024); **s.105** — recording of search and
    seizure through audio-video electronic means. Zero-FIR is given statutory recognition in the BNSS. (Sources:
    BCI syllabus scan; BNS Bare-Act section listings; corroborated by Set A questions 18, 38, 45, 75, 87.)
  * **BSA 2023** (Act 47 of 2023, 170 sections, in force 1 July 2024) replaces the Indian Evidence Act, 1872.

> **Where a provision could not be verified to a high degree of confidence, no question was written on it.**
> That is a deliberate accuracy control, not an omission (see `AIBE_AUDIT.md`).

---

## 2. The operative syllabus — official weightage

Transcribed verbatim from the BCI Trust notification dated **02.03.2026**:

| Sr. No. | Topic / Subject | Questions |
|:-------:|-----------------|:---------:|
| 1 | Constitutional law | 10 |
| 2 | I.P.C. (Indian Penal Code) & (New) Bharatiya Nyaya Sanhita | 8 |
| 3 | Cr.P.C. (Criminal Procedure Code) & (New) Bharatiya Nagarik Suraksha Sanhita | 10 |
| 4 | C.P.C. (Code of Civil Procedure) | 10 |
| 5 | Evidence Act & (New) Bharatiya Sakshya Adhiniyam | 8 |
| 6 | Alternative Dispute Redressal including Arbitration Act | 4 |
| 7 | Family Law | 8 |
| 8 | Public Interest Litigation | 4 |
| 9 | Administration Law | 3 |
| 10 | Professional Ethics & Cases of Professional Misconduct under Bar Council of India Rules | 4 |
| 11 | Company Law | 2 |
| 12 | Environmental Law | 2 |
| 13 | Cyber Law | 2 |
| 14 | Labour & Industrial Law | 4 |
| 15 | Law of Tort, including Motor Vehicle Act and Consumer Protection Law | 5 |
| 16 | Law related to Taxation | 4 |
| 17 | Law of Contract, Specific Relief, Property Laws, Negotiable Instrument Act | 8 |
| 18 | Land Acquisition Act | 2 |
| 19 | Intellectual Property Laws | 2 |
| | **Total** | **100** |

### 2.1 Syllabus map

| Subject | Topics | Subtopics | Black-letter sources | Priority |
|---|---|---|---|---|
| **Constitutional Law** (10) | Fundamental Rights; Distribution of legislative powers; Union & State executive; Judiciary; Amendment | Art. 12–35 (esp. 14, 19, 21, 23, 25); Art. 245–255 (incl. 249, 250, 252, 253); Art. 143; Art. 248 residuary; Art. 356/360; Art. 368 + basic structure; writs | Constitution of India | **Very high** |
| **IPC + BNS** (8) | General exceptions; offences against body; against property; against State; defamation; conspiracy | Private defence; theft; abduction/kidnapping; criminal conspiracy; murder/culpable homicide; organised crime; terrorist act; punishment framework | IPC 1860; **BNS 2023** | **Very high** |
| **CrPC + BNSS** (10) | Arrest & bail; investigation; trial; appeal; maintenance | s.41/57 (arrest, 24 hrs); s.125 maintenance; s.167 default bail; s.320/107/144; appeal against 2nd Class Magistrate; search & seizure (s.105 BNSS); Zero FIR; judgment timelines; plea bargaining | CrPC 1973; **BNSS 2023** | **Very high** |
| **CPC** (10) | Pleadings; parties; execution; appeal/review; suit procedure | O.VI R.16 striking out; O.IX R.13 ex parte; O.XXII abatement; O.XXIII withdrawal; O.XXI R.58 third-party claim; s.24 transfer; s.35B costs; mis-joinder; court fee | CPC 1908 | **Very high** |
| **Evidence + BSA** (8) | Relevancy; presumptions; documents; electronic evidence; burden of proof | s.2/4 presumptions; document definition; circumstantial evidence golden principles; s.65B certificate; onus probandi; juvenile age proof; applicability s.1 | Indian Evidence Act 1872; **BSA 2023** | **Very high** |
| **ADR + Arbitration** (4) | Arbitration mechanics; court intervention | s.5 minimal intervention; s.16 kompetenz-kompetenz; s.20 place; s.25(b) default | Arbitration & Conciliation Act 1996 | High |
| **Family Law** (8) | Marriage; divorce & maintenance; adoption; guardianship; minority reliefs | Hindu Adoption & Maintenance Act 1956; Special Marriage Act 1954; Indian Christian Marriage Act 1872; Parsi Marriage & Divorce Act 1936; Guardians & Wards Act 1890; Dowry Prohibition Act 1961; UCC Rules Uttarakhand 2025 | Personal-law statutes | High |
| **PIL** (4) | Origin; locus standi; expansion; epistolary jurisdiction | Meaning & scope; relaxation of locus standi; Art. 32/226 use; notable PILs (Art. 21 & 23) | Constitution + case law | High |
| **Administrative Law** (3) | Rule of law; delegated legislation; natural justice; judicial review; ombudsman | Dicey; Art. 14/21 review; principles of natural justice; A.K. Kraipak; Ombudsman/Lokpal | Constitution + case law | Medium-high |
| **Professional Ethics** (4) | Advocates Act; BCI Rules; misconduct | s.9(1) Disciplinary Committee; s.35 misconduct; s.49(1)(c); Rule 20 contingency fee; Rule 8 appearance; Harish Chandra Tiwari v. Baiju | Advocates Act 1961; BCI Rules | High |
| **Company Law** (2) | Merger & amalgamation; minority protection | s.233 fast-track merger; s.241 oppression/mismanagement; s.245 class action | Companies Act 2013 | Medium |
| **Environmental Law** (2) | Framework statutes; constitutional basis | Environment (Protection) Act 1986 s.3(2)(ii); Air Act 1981; Art. 253 | EP Act 1986; Air Act 1981 | Medium |
| **Cyber Law** (2) | Electronic records; offences; liability | IT Act 2000: electronic record; s.43 civil vs s.66 criminal; unauthorised access | IT Act 2000 | Medium-high |
| **Labour & Industrial Law** (4) | Wages; industrial disputes; labour codes | Minimum Wages Act 1948 s.5; Industrial Disputes Act 1947 s.2(j)/25-F; Industrial Relations Code 2020 | Labour statutes + Codes 2020 | High |
| **Tort + MV Act + Consumer** (5) | Negligence; strict liability; consumer remedies; motor vehicles | Eggshell skull rule; nervous shock; Consumer Protection Act 2019 (one-sided agreements, s.2(7) consumer, JDA); MV Act 1988 (PUC certificates, HSRP) | Tort + CPA 2019 + MV Act 1988 | High |
| **Taxation** (4) | Income-tax charge & exemptions; deductions | s.10(37) compulsory acquisition of agricultural land; s.56(2)(x) gifts; s.80D-type deductions; previous vs assessment year | Income-tax Act 1961 | High |
| **Contract + Specific Relief + Property + NI** (8) | Formation; void agreements; remedies; transfers; instruments | s.27 restraint of trade; s.133 variance of surety's risk; trading with enemy; Specific Relief substituted performance & negative covenants; TPA s.10–18 perpetuity/accumulation, s.58 mortgage by conditional sale; NI Act promissory note | Contract Act 1872; Specific Relief Act 1963; TPA 1882; NI Act 1881 | **Very high** |
| **Land Acquisition** (2) | Acquisition process; safeguards | Preliminary notification; SIA; Gram Sabha consent for ST land; objections; notice periods | RFCTLARR Act 2013 | Medium-high |
| **IP Laws** (2) | Patents; Copyright | Patents Act 1970 (Government use — s.47); Copyright Act 1957 (term, posthumous works s.24) | Patents Act 1970; Copyright Act 1957 | Medium |

---

## 3. Empirical analysis of the Set A paper

### 3.1 Subject-wise distribution actually observed

Assignment of the 100 paper questions to syllabus subjects (auditable — question numbers are listed):

| Syllabus subject | Official | Observed in Set A | Question numbers |
|---|---:|---:|---|
| Constitutional Law | 10 | **10** | 3, 4, 12, 28, 36, 47, 53, 64, 78, 79 |
| IPC + BNS | 8 | **8** | 8, 25, 29, 35, 48, 52, 74, 86 |
| CrPC + BNSS | 10 | **10** | 6, 15, 18, 32, 38, 45, 62, 69, 75, 87 |
| CPC | 10 | **10** | 5, 17, 23, 39, 42, 50, 57, 61, 85, 99 |
| Evidence + BSA | 8 | **8** | 24, 27, 77, 82, 89, 92, 96, 98 |
| ADR + Arbitration | 4 | **4** | 37, 51, 67, 83 |
| Family Law | 8 | **8** | 33, 34, 49, 60, 71, 72, 84, 100 |
| PIL | 4 | **4** | 19, 20, 22, 46 |
| Administration Law | 3 | **4** | 40, 55, 80, 81 |
| Professional Ethics | 4 | **4** | 13, 21, 31, 56 |
| Company Law | 2 | **2** | 66, 93 |
| Environmental Law | 2 | **2** | 10, 70 |
| Cyber Law | 2 | **2** | 11, 16 |
| Labour & Industrial Law | 4 | **3** | 1, 9, 97 |
| Tort (MV Act + Consumer) | 5 | **5** | 2, 26, 30, 58, 90 |
| Taxation | 4 | **4** | 41, 73, 88, 94 |
| Contract + SR + Property + NI | 8 | **8** | 43, 44, 54, 59, 63, 65, 68, 76 |
| Land Acquisition | 2 | **2** | 7, 14 |
| IP Laws | 2 | **2** | 91, 95 |
| **Total** | **100** | **100** | |

> **Two observations, stated honestly rather than smoothed over:**
> 1. **17 of 19 subjects match the official weightage exactly.** Constitutional Law, IPC+BNS, CrPC+BNSS, CPC,
>    Evidence, ADR, Family, Professional Ethics, Company, Environmental, Cyber, Tort, Taxation, Contract-group,
>    Land Acquisition and IP all reconcile exactly.
> 2. There is a **±1 ambiguity between Administrative Law (4 observed vs 3 allotted) and Labour & Industrial Law
>    (3 observed vs 4 allotted)**. It turns on how Q40 (Rule of Law in Roman jurisprudence) and Q19 (Art. 23 / forced
>    labour, *PUDR v. Union of India*) are classified — together they can be read as Admin Law or as Labour. This is a
>    classification judgement, **not** evidence that the paper deviates from its own syllabus. Practically it means:
>    do not drop Administrative Law or Labour from your revision on the basis of the paper alone.

### 3.2 Question-format mix (empirically counted)

| Format | Count | Question numbers |
|---|---:|---|
| Straight single-best-answer (recall / provision-identification) | ~45 | e.g. 2, 6, 7, 8, 10, 11, 13–18, 20, 23, 24, 29, 32 |
| **Assertion–Reason** (standard 4-option format) | **5** | 3, 9, 78, 85, 88 |
| **Statement + two Conclusions** ("which conclusions follow") | **3** | 1, 21, 93 |
| **Two-Statement (I & II)** — decide which are true | **3** | 27, 37, 95 |
| **Multi-statement "Which of the above is/are correct"** | **3** | 4, 11, 50 |
| **Scenario / problem-based application** | **11** | 12, 14, 30, 43, 44, 54, 59, 63, 65, 68, 76 |
| **Negative framing ("which is *not*")** | **8** | 7, 26, 35, 77, 89, 96, 97, 98 |
| Case-name driven | **9** | 13, 19, 20, 28, 46, 47, 80, 82, 96 |

**Design consequences for practice.** Roughly **1 in every 5 questions is non-standard in format** (assertion–reason,
statement-conclusion, two-statement, multi-statement) and **about 1 in 9 is a factual scenario requiring application**.
A practice bank that is 100% straight recall will not reproduce the real paper's demand profile.

### 3.3 Difficulty profile

| Band | Estimated share | Characteristics |
|---|---:|---|
| Easy | ~15% | Definition / one-line provision recall (e.g. CrPC s.2(a) defining 'bailable offence', asked in Q15) |
| Moderate | ~60% | Distinguish provision A from provision B; identify the authority or the correct section |
| Difficult | ~25% | Scenario application, exception-laden provisions, conflicting-looking options, obscure fine/period details |

Patterns that make questions *hard* in this paper — reproduced deliberately in the practice bank:

1. **Two options that sound identical in effect** (e.g. "the executing court shall decide" vs "a separate suit is required").
2. **Periods, limits and fine amounts** (30 days' notice; 6 months' objections; 3 months for dowry transfer;
   5 years' minimum for giving dowry; 24 hours; 60/90 days default bail).
3. **"Which is *not*" / "which is *not stated*"** framing, where three options are true statements of law.
4. **Old Act vs new Sanhita confusion** — the single largest trap in this paper (see §4).
5. **Case-name recall with a plausible nearby case** as the distractor (e.g. *Krishna Kumar Singh* vs *D.C. Wadhwa*
   for Ordinance re-promulgation; *Ridge v. Baldwin* vs *A.K. Kraipak* for natural justice).

### 3.4 Cognitive level mix (Bloom-style)

| Level | Share | Example from the paper |
|---|---:|---|
| L1 Recall | ~40% | Q15 (which section defines "bailable offence") |
| L2 Understanding | ~30% | Q11 (what "electronic record" includes) |
| L3 Application | ~18% | Q43 (restraint-of-trade clause in an employment contract) |
| L4 Analysis | ~12% | Q59 (perpetuity + accumulation in one transfer); Q4 (three statements on amendment power) |

### 3.5 Repeated / recurring themes worth drilling

* **Constitutional amendment & basic structure** — Art. 368, Ninth Schedule post-24 April 1973, *Kesavananda* logic (Q4, Q28).
* **Federal legislative competence** — Arts. 248, 249, 250, 252, 253, 356, 360 (Q36, Q53, Q70, Q79). This is a
  repeat-vulnerable cluster: which article allows Parliament to legislate on a State List subject, and *why*.
* **The "24 hours / 30 days / 60–90 days" cluster** — CrPC s.57, s.167; BNSS timelines (Q45, Q62, Q69, Q75).
* **Old-code vs new-Sanhita mapping** — commencement date (1 July 2024), s.105 BNSS, s.4/111/113 BNS, s.63(4) BSA (Q18, 24, 25, 38, 45, 48, 52, 75, 77, 86, 87, 89, 98).
* **Consumer/joint-development-agreement** status of a landowner (Q30).
* **Professional-misconduct sanctions** — contingency fees, Rule 8, Disciplinary Committee composition (Q13, 21, 31, 56).
* **Property: perpetuity & accumulation** (Q59) and **mortgage by conditional sale vs outright sale** (Q65).

### 3.6 Distractor engineering observed (and reproduced)

| Technique | Paper example |
|---|---|
| Provision from the *right* Act but the *wrong* section | Q15 (options 2(h), 2(x), 2(c), 2(a) — only s.2(a) defines 'bailable offence'; 2(h) is 'investigation') |
| Right rule, wrong *limit* | Q7 (30 days vs 6 months), Q84 (5 vs 3 vs 7 years) |
| Conflating two neighbouring doctrines | Q12 (Art. 14 classification vs doctrine of eclipse/severability) |
| Correct statement of law that answers a *different* question | Q26 (three true eggshell-skull illustrations, one that is not) |
| Plausible but non-existent rule | Q32 ("no appeal is maintainable"), Q35 ("continuing offence" as an ingredient) |
| Mixing old and new statutory regimes | Q18, Q24, Q98 |

---

## 4. Conflict register (source conflicts and how they were resolved)

The prompt required that conflicts be identified explicitly and a governing source chosen.

| # | Conflict | Resolution adopted in this build |
|---|---|---|
| 1 | **IPC/CrPC/Evidence Act vs BNS/BNSS/BSA.** The Set A paper tests *both*: Q8, Q29, Q35, Q74 use IPC 1860 and Q6, Q15, Q62, Q69 use CrPC 1973, while Q18, Q25, Q38, Q45, Q48, Q52, Q75, Q86, Q87, Q89 use BNSS/BNS/BSA 2023. | The **syllabus itself** settles this: it names "I.P.C. **&** (New) Bharatiya Nyaya Sanhita", "Cr.P.C. **&** (New) BNSS", "Evidence Act **&** (New) BSA". Both regimes are therefore in scope. Practice items state which Act they test, and a mapping table (IPC↔BNS etc.) is supplied so both can be answered. |
| 2 | **BNS/BNSS/BSA came into force 1 July 2024**, so "current law" is the new Codes — yet the paper still quotes IPC/CrPC section numbers. | Neither is wrong. Questions in the bank that use IPC/CrPC numbers are labelled as such; the corresponding BNS/BNSS number is given in the explanation wherever it is verified. |
| 3 | The scanned syllabus gives **no topic list**, only subject names + question counts. | The detailed topic/subtopic map in §2.1 is derived from (a) the subject names, (b) the actual content of Set A, and (c) the subject matter of the statutes named. It is labelled `SYLLABUS`-derived in the data files, so it is never confused with something the BCI literally printed. |
| 4 | Some Set A content is **not obviously within any named syllabus head** (e.g. Q40 Roman jurisprudence "Rule of Law"; Q47 Lord Wright on habeas corpus). | Treated as **supplementary / general Indian legal knowledge**, folded under the nearest syllabus head (Administrative Law / Constitutional Law) and flagged as `SUPPLEMENTARY` rather than silently presented as syllabus content. |
| 5 | Any practice item whose legal proposition could **not** be verified against a bare Act or a reported judgment was excluded rather than guessed. | See the "Missing explanations / legal basis" rows in `AIBE_AUDIT.md`. |

---

## 5. Question-generation patterns extracted for practice

These are the reusable templates the paper actually uses. The practice bank is built on them 1:1.

1. **Provision identification** — "Which provision of [Act] provides [rule]?" → four section numbers, one correct.
2. **Ingredient elimination** — "Which of the following is *not* an essential ingredient of [offence/rule]?"
3. **Assertion–Reason** — two statements about a constitutional or procedural proposition, standard A/B/C/D options.
4. **Statement + Conclusions** — a statutory excerpt, then Conclusion I / Conclusion II ("which conclusions follow").
5. **Two-Statement** — Statement I and Statement II on the same provision, then Both / Only I / Only II / Neither.
6. **Multi-statement** — Statements I–IV, then "which are correct" combinations.
7. **Section-number recall with old/new confusion** — deliberately built around the IPC↔BNS and CrPC↔BNSS maps.
8. **Period-and-limit traps** — notice periods, bail timelines, limitation, fine maxima.
9. **Scenario application** — a named or unnamed party set of facts, then four legal consequences.
10. **Landmark-case-to-doctrine matching** — case name → principle (and the reverse: doctrine → case).
11. **Maxim-to-meaning** — e.g. *onus probandi*, *ex parte*, *kompetenz-kompetenz*.
12. **Scheme-of-the-Act questions** — "which article is the legislative basis for [Act]" (Arts. 250/252/253 cluster).
13. **Sanction-and-remedy questions** in Professional Ethics — what punishment follows what misconduct.
14. **Definitional precision** — "as per [Act], what does X mean" (consumer, one-sided agreement, document, electronic record).

---

## 6. How to read the deliverables

| File | Contents |
|---|---|
| `AIBE.html` | The interactive study platform (dashboard, syllabus map, study notes, flashpoints, question bank, assertion–reason, scenarios, mock tests, revision, analytics) |
| `aibe-data.js` | Syllabus map, study notes, flashpoints, case law, maxims, revision plans |
| `aibe-qb-*.js` | The MCQ bank, split by subject |
| `aibe-mocks.js` | Full-length mock tests + keys |
| `aibe-app.js`, `aibe.css` | Application logic and styling |
| `AIBE_ANALYSIS.md` | This document |
| `AIBE_AUDIT.md` | Validation / quality / distribution / coverage audit |
| `tools/audit_question_bank.py` | Re-runnable audit that regenerates `AIBE_AUDIT.md` |

**Accuracy caveat you should carry into the exam hall.** Statutory periods and fine amounts change by amendment.
Every period/limit question in this bank cites the provision it comes from, so you can re-verify against a current
Bare Act before the exam. Where a proposition is contested in the case law rather than settled, the question says so.
