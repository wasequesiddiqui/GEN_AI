/* ============================================================================
 * AIBE XXI — Question Bank: Indian Evidence Act, 1872 &
 * Bharatiya Sakshya Adhiniyam, 2023. Weightage: 8 / 100. 48 questions.
 * BSA, 2023 (Act 47 of 2023, 170 sections) is in force from 1 July 2024.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "evidence-bsa";

  /* ------------------------------------------------------------ applicability */
  Q({
    id: "EVD-001", subject: S, topic: "e1", subtopic: "Non-application to arbitration",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The Bharatiya Sakshya Adhiniyam, 2023 is NOT applicable in which of the following proceedings?",
    options: ["National Green Tribunal", "National Company Law Tribunal", "Arbitral Tribunal", "Income Tax Appellate Tribunal"],
    correctIndex: 2,
    explanation: "Section 1 of the Indian Evidence Act, 1872 (and s.1 of the BSA, 2023) applies to all judicial proceedings in or before any court, including courts-martial, but expressly does NOT apply to affidavits presented to any court or officer, nor to proceedings before an arbitrator. Arbitration proceedings are therefore outside the Act's scope.",
    legalBasis: "Section 1, Indian Evidence Act, 1872; Section 1, Bharatiya Sakshya Adhiniyam, 2023; State of U.P. v. Ramesh Chandra Agarwal, (2009) 11 SCC 478.",
    wrongOptionExplanations: [
      "NGT proceedings are not within the s.1 exclusion.",
      "NCLT proceedings are judicial proceedings before a tribunal and are not within the s.1 exclusion.",
      "",
      "ITAT proceedings are not within the s.1 exclusion."
    ],
    flashpoint: "Evidence Act s.1 / BSA s.1 → does NOT apply to (i) AFFIDAVITS and (ii) proceedings before an ARBITRATOR.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-002", subject: S, topic: "e1", subtopic: "Courts-martial",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly states the application of the Indian Evidence Act, 1872 to courts-martial?",
    options: [
      "The Act does not apply to courts-martial",
      "The Act applies to courts-martial only with the prior sanction of the Central Government",
      "The Act applies to all judicial proceedings in or before any court, including courts-martial",
      "The Act applies to courts-martial only for offences punishable with death"
    ],
    correctIndex: 2,
    explanation: "Section 1 of the Act expressly includes courts-martial within its ambit — 'This Act shall apply to all judicial proceedings in or before any Court, including Courts-martial'. The two exclusions are affidavits and arbitration proceedings.",
    legalBasis: "Section 1, Indian Evidence Act, 1872; Section 1, Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: [
      "Courts-martial are expressly included.",
      "No sanction of the Central Government is required.",
      "",
      "There is no such limitation by reference to punishment."
    ],
    flashpoint: "s.1 → INCLUDES courts-martial; EXCLUDES affidavits and arbitration.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-003", subject: S, topic: "e1", subtopic: "BSA — scheme",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about the Bharatiya Sakshya Adhiniyam, 2023 is correct?",
    options: [
      "It repeals the Indian Evidence Act, 1872 and contains 167 sections",
      "It does not apply to civil proceedings",
      "It is a procedural code for criminal trials only",
      "It repeals the Indian Evidence Act, 1872 and contains 170 sections, and retains the structure of the 1872 Act with changes in the treatment of electronic records"
    ],
    correctIndex: 3,
    explanation: "The Bharatiya Sakshya Adhiniyam, 2023 (Act 47 of 2023) repeals the Indian Evidence Act, 1872 and contains 170 sections. It came into force on 1 July 2024 and applies to both civil and criminal judicial proceedings, with significantly expanded treatment of electronic and digital records.",
    legalBasis: "Bharatiya Sakshya Adhiniyam, 2023, preamble and s.170 (repeal and savings).",
    wrongOptionExplanations: [
      "The BSA has 170 sections, not 167 — 167 was the number in the 1872 Act.",
      "The BSA applies to civil proceedings as well.",
      "The BSA applies to all judicial proceedings, civil and criminal.",
      ""
    ],
    flashpoint: "BSA 2023 → Act 47 of 2023, 170 sections, in force 1 July 2024, replaces the Indian Evidence Act, 1872 (167 sections).",
    source: "STATUTE"
  });

  Q({
    id: "EVD-004", subject: S, topic: "e1", subtopic: "Affidavits",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The Indian Evidence Act, 1872 does not apply to:",
    options: [
      "Proceedings before a civil court",
      "Proceedings before a criminal court",
      "Proceedings before a tribunal exercising judicial functions",
      "Affidavits presented to any court or officer"
    ],
    correctIndex: 3,
    explanation: "Section 1 excludes affidavits presented to any court or officer from the operation of the Act. Affidavits are governed by Order XIX CPC and the rules of the court concerned.",
    legalBasis: "Section 1, Indian Evidence Act, 1872; Order XIX, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: [
      "Civil court proceedings are within the Act.",
      "Criminal court proceedings are within the Act.",
      "Tribunal proceedings exercising judicial functions are within the Act.",
      ""
    ],
    flashpoint: "Exclusions under s.1 → AFFIDAVITS and ARBITRATION proceedings.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------------- definitions */
  Q({
    id: "EVD-005", subject: S, topic: "e2", subtopic: "'Document' — illustrations",
    difficulty: "Moderate", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Bharatiya Sakshya Adhiniyam, 2023, which of the following is NOT a 'document'?",
    options: ["Private papers of a person", "A map", "An inscription on a metal plate", "A caricature"],
    correctIndex: 0,
    explanation: "The definition of 'document' covers any matter expressed or described upon any substance by means of letters, figures or marks, or by more than one of those means, intended to be used or which may be used for the purpose of recording that matter. The illustrative categories include a writing, printed or photographed words, a map or plan, an inscription on a metal plate or stone, and a caricature. 'Private papers' is not one of the enumerated illustrative categories.",
    legalBasis: "Section 3, Indian Evidence Act, 1872 (definition of 'document' with illustrations); Section 2(1)(d), Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: [
      "",
      "A map or plan is expressly mentioned.",
      "An inscription on a metal plate or stone is expressly mentioned.",
      "A caricature is expressly mentioned in the illustrations."
    ],
    flashpoint: "'Document' illustrations → writing | printed/lithographed/photographed words | MAP or PLAN | INSCRIPTION | CARICATURE. 'Private papers' is NOT an enumerated category.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-006", subject: S, topic: "e2", subtopic: "'Document' — definition",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly states the definition of 'document' under the law of evidence?",
    options: [
      "Only a written instrument signed by the parties",
      "Only a paper document",
      "Only an instrument registered under the Registration Act",
      "Any matter expressed or described upon any substance by means of letters, figures or marks, or by more than one of those means, intended to be used or which may be used for the purpose of recording that matter"
    ],
    correctIndex: 3,
    explanation: "The definition is wide and substance-neutral — it covers matter expressed or described upon any substance (not necessarily paper) by letters, figures or marks, intended to be used or capable of being used for recording that matter. Electronic records are documents.",
    legalBasis: "Section 3, Indian Evidence Act, 1872; Section 2(1)(d), Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: [
      "A signature is not a requirement of the definition.",
      "The definition is not confined to paper.",
      "Registration is not a requirement.",
      ""
    ],
    flashpoint: "'Document' → any substance, any letters/figures/marks, for RECORDING matter. Electronic records included.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-007", subject: S, topic: "e2", subtopic: "'Proved' and 'disproved'",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A fact is said to be 'not proved' when it is:",
    options: ["Disproved", "Admitted by both parties", "Neither proved nor disproved", "Judicially noticed"],
    correctIndex: 2,
    explanation: "The Evidence Act distinguishes three positions: a fact is 'proved' when, after considering the matters before it, the court either believes it to exist or considers its existence so probable that a prudent man ought to act upon the supposition that it exists; 'disproved' when the court believes it not to exist or considers its non-existence so probable that a prudent man ought to act on that supposition; and 'not proved' when it is neither proved nor disproved.",
    legalBasis: "Section 3, Indian Evidence Act, 1872; Section 2(1), Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: ["Disproved is a distinct category.", "Admission is a different concept.", "", "Judicial notice is dealt with under s.56-57."],
    flashpoint: "PROVED | DISPROVED | NOT PROVED — 'not proved' means NEITHER proved NOR disproved.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-008", subject: S, topic: "e2", subtopic: "'Fact in issue'",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "'Fact in issue' means:",
    options: [
      "Any fact admitted by the parties",
      "Any fact which is in dispute and which the court has to decide",
      "Any fact which is relevant to the case",
      "Any fact from which, either by itself or in connection with other facts, the existence, non-existence, nature or extent of any right, liability or disability asserted or denied in any suit or proceeding necessarily follows"
    ],
    correctIndex: 3,
    explanation: "That is the statutory definition. It is distinct from a 'relevant' fact, which means any fact from which, either by itself or in connection with other facts, the existence, non-existence, nature or extent of any right, liability or disability asserted or denied in any suit or proceeding necessarily follows. In short: a relevant fact is one that renders probable a fact in issue.",
    legalBasis: "Section 3, Indian Evidence Act, 1872; Section 2(1), Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: [
      "Admitted facts may be dispensed with under s.58 but are not thereby 'facts in issue'.",
      "That is a loose description; the statutory definition is different.",
      "That is the definition of a 'relevant' fact.",
      ""
    ],
    flashpoint: "FACT IN ISSUE → the right/liability asserted. RELEVANT fact → a fact from which a fact in issue necessarily follows.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------------ presumptions */
  Q({
    id: "EVD-009", subject: S, topic: "e3", subtopic: "Categories of presumption",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following does NOT fall within the framework of presumptions under the law of evidence?",
    options: ["Unassailable proof", "Shall presume", "Conclusive proof", "May presume"],
    correctIndex: 0,
    explanation: "The framework recognises three categories: 'may presume', 'shall presume' and 'conclusive proof'. 'Unassailable proof' is not a recognised category. Under 'may presume' the court may regard a fact as proved unless and until it is disproved; under 'shall presume' the court must regard it as proved unless and until it is disproved; under 'conclusive proof' the court must regard it as proved and shall not allow evidence to disprove it.",
    legalBasis: "Section 4, Indian Evidence Act, 1872; Sections 2 and 4, Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: ["", "'Shall presume' is a recognised category.", "Conclusive proof is a recognised category.", "'May presume' is a recognised category."],
    flashpoint: "'UNASSAILABLE PROOF' is NOT a category. The three are MAY PRESUME | SHALL PRESUME | CONCLUSIVE PROOF.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-010", subject: S, topic: "e3", subtopic: "Conclusive proof",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Where the law provides that a fact shall be 'conclusive proof' of another fact, the court shall:",
    options: [
      "Regard the fact as proved unless and until it is disproved",
      "Refer the question to the High Court",
      "May regard the fact as proved at its discretion",
      "Regard the fact as proved and shall not allow evidence to be given for the purpose of disproving it"
    ],
    correctIndex: 3,
    explanation: "Conclusive proof means that the court shall regard the fact as proved and shall not allow evidence to be given for the purpose of disproving it. It is irrebuttable.",
    legalBasis: "Section 4, Indian Evidence Act, 1872; Section 4, Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: [
      "That describes 'shall presume', which is rebuttable.",
      "No reference to the High Court is contemplated.",
      "There is no discretion where the law makes proof conclusive.",
      ""
    ],
    flashpoint: "CONCLUSIVE PROOF → irrebuttable; no evidence to the contrary is allowed.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-011", subject: S, topic: "e3", subtopic: "'Shall presume'",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A statutory provision states that the court 'shall presume' a fact. Which of the following statements is correct?",
    options: [
      "The presumption is conclusive and no evidence to the contrary is admissible",
      "The presumption applies only in criminal cases",
      "The presumption is discretionary and the court may decline to draw it",
      "The court must regard the fact as proved unless and until it is disproved, so the presumption is rebuttable"
    ],
    correctIndex: 3,
    explanation: "'Shall presume' obliges the court to regard the fact as proved unless and until it is disproved. Unlike 'conclusive proof', it is rebuttable — the burden shifts to the person who denies the fact.",
    legalBasis: "Section 4, Indian Evidence Act, 1872; Section 4, Bharatiya Sakshya Adhiniyam, 2023; State of Maharashtra v. Vasudeo Ramchandra Kaidalwar, (1981) 3 SCC 199.",
    wrongOptionExplanations: [
      "Conclusiveness attaches to 'conclusive proof', not to 'shall presume'.",
      "There is no such restriction.",
      "The court has no discretion; the word is 'shall'.",
      ""
    ],
    flashpoint: "'SHALL PRESUME' → mandatory but REBUTTABLE. 'CONCLUSIVE PROOF' → mandatory and NOT rebuttable.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-012", subject: S, topic: "e3", subtopic: "Presumptions — s.114",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Section 114 of the Indian Evidence Act, 1872 permits the court to presume:",
    options: [
      "The existence of any fact which it thinks likely to have happened, regard being had to the common course of natural events, human conduct and public and private business, in their relation to the facts of the particular case",
      "The existence of any fact without any reference to the facts of the case",
      "Only the existence of a fact admitted by the parties",
      "Only facts proved by documentary evidence"
    ],
    correctIndex: 0,
    explanation: "Section 114 embodies the 'may presume' class of presumptions of fact: the court may presume the existence of any fact which it thinks likely to have happened, regard being had to the common course of natural events, human conduct and public and private business, in their relation to the facts of the particular case.",
    legalBasis: "Section 114, Indian Evidence Act, 1872; Section 119, Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: ["", "The presumption must be related to the facts of the particular case.", "Admissions are governed by ss.17-23.", "There is no such documentary requirement."],
    flashpoint: "s.114 → MAY PRESUME from the COMMON COURSE OF NATURAL EVENTS, HUMAN CONDUCT and PUBLIC/PRIVATE BUSINESS.",
    source: "STATUTE"
  });

  /* --------------------------------------------------------------- relevancy */
  Q({
    id: "EVD-013", subject: S, topic: "e4", subtopic: "Res gestae",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The principle of res gestae is embodied in which section of the Indian Evidence Act, 1872?",
    options: ["Section 14", "Section 8", "Section 9", "Section 6"],
    correctIndex: 3,
    explanation: "Section 6 embodies res gestae: facts which, though not in issue, are so connected with a fact in issue as to form part of the same transaction are relevant, whether they occurred at the same time and place or at different times and places. Section 8 deals with motive, preparation and conduct; s.9 with facts necessary to explain or introduce relevant facts; s.14 with similar facts.",
    legalBasis: "Sections 6, 8, 9 and 14, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: [
      "Section 14 concerns similar fact evidence.",
      "Section 8 concerns motive, preparation, previous or subsequent conduct.",
      "Section 9 concerns explanatory facts, identity, time and place.",
      ""
    ],
    flashpoint: "s.6 → RES GESTAE — facts forming part of the SAME TRANSACTION.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-014", subject: S, topic: "e4", subtopic: "Conspiracy — relevancy",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 10 of the Indian Evidence Act, 1872, where there is reasonable ground to believe that two or more persons have conspired to commit an offence, anything said, done or written by any one of them in reference to their common intention is:",
    options: [
      "Irrelevant, unless the conspiracy is first proved by independent evidence",
      "A relevant fact as against each of the persons believed to be so conspiring, as well for the purpose of proving the existence of the conspiracy as for the purpose of showing that any such person was a party to it",
      "Relevant only against the maker of the statement",
      "Admissible only if the maker is examined as a witness"
    ],
    correctIndex: 1,
    explanation: "Section 10 makes anything said, done or written by any one of the conspirators in reference to their common intention a relevant fact as against each of the persons believed to be conspiring, both for proving the existence of the conspiracy and for showing that any such person was a party to it.",
    legalBasis: "Section 10, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: ["The section expressly makes such statements relevant.", "", "It is relevant against each of the conspirators.", "The maker need not be examined as a witness for the statement to be relevant under s.10."],
    flashpoint: "s.10 → in a CONSPIRACY, anything said, done or written by a conspirator IN REFERENCE TO THE COMMON INTENTION is relevant against ALL of them.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-015", subject: S, topic: "e4", subtopic: "Similar fact evidence",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 14 of the Indian Evidence Act, 1872, facts showing the existence of any state of mind or body are relevant. Which of the following is the correct effect of this provision?",
    options: [
      "Previous bad character of the accused is always relevant in criminal proceedings",
      "Similar fact evidence is admissible in every case to prove that the accused is of a criminal disposition",
      "Facts showing a state of mind or body, such as intention, knowledge, good faith, negligence, rashness, ill-will or goodwill towards any particular person, are relevant when the existence of such a state of mind or body is in issue or relevant",
      "Evidence of habit is irrelevant"
    ],
    correctIndex: 2,
    explanation: "Section 14 makes facts showing the existence of any state of mind or body relevant where such a state of mind or body is in issue or relevant. The Explanation makes clear that a fact relevant as showing the existence of a relevant state of mind must show that the state of mind exists not generally, but in reference to the particular matter in question.",
    legalBasis: "Section 14 and its Explanation, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: [
      "Bad character is only relevant in the limited circumstances of ss.52-55.",
      "Similar fact evidence is not a licence to prove criminal disposition.",
      "",
      "Section 15 makes evidence of habit relevant."
    ],
    flashpoint: "s.14 → state of mind/body must be shown IN REFERENCE TO THE PARTICULAR MATTER in question, not generally.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-016", subject: S, topic: "e4", subtopic: "Character evidence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In criminal proceedings, the fact that the accused person has a bad character is:",
    options: [
      "Relevant only if evidence of good character has been given by the accused, and relevant in certain other specified circumstances",
      "Relevant in every case",
      "Never relevant",
      "Relevant only if the offence is punishable with death"
    ],
    correctIndex: 0,
    explanation: "Section 54 provides that in criminal proceedings the fact that the accused has a bad character is irrelevant, except where evidence has been given that he has a good character, in which case evidence of bad character becomes admissible in rebuttal. Section 53 permits evidence of good character, and s.52 restricts evidence of character in civil cases.",
    legalBasis: "Sections 52, 53 and 54, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: [
      "",
      "Bad character is not generally relevant.",
      "'Never' is too absolute — the section creates exceptions.",
      "There is no such punishment-based rule."
    ],
    flashpoint: "s.54 → bad character is IRRELEVANT in criminal proceedings, except to rebut evidence of GOOD character.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-017", subject: S, topic: "e4", subtopic: "Dying declaration",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A dying declaration is admissible under Section 32(1) of the Indian Evidence Act, 1872 on the principle that:",
    options: [
      "Statements made by a person who is dead are always admissible",
      "The statement relates to the cause of the declarant's death, or to any of the circumstances of the transaction which resulted in his death",
      "The statement was recorded by a Magistrate",
      "The statement is corroborated by other evidence"
    ],
    correctIndex: 1,
    explanation: "Section 32(1) makes admissible a statement made by a person as to the cause of his death, or as to any of the circumstances of the transaction which resulted in his death, in cases in which the cause of that person's death comes into question. The statement must relate to the cause of death or the circumstances of the transaction. Recording by a Magistrate is a salutary practice but not a statutory condition, and a dying declaration can be the sole basis of conviction if it is found truthful and voluntary.",
    legalBasis: "Section 32(1), Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: ["Statements of deceased persons are not admissible generally; only the categories in s.32 are.", "", "Recording by a Magistrate is not a statutory precondition.", "Corroboration is not a statutory requirement, though the court must scrutinise the statement carefully."],
    flashpoint: "s.32(1) → DYING DECLARATION: cause of death or the circumstances of the transaction resulting in death.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------ admissions/confessions */
  Q({
    id: "EVD-018", subject: S, topic: "e5", subtopic: "Admission vs confession",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly distinguishes an admission from a confession?",
    options: [
      "An admission is a statement suggesting an inference as to any fact in issue or relevant fact, while a confession is a statement made by an accused person which, if taken to be true, would by itself be sufficient to found a conviction",
      "An admission is admissible only in criminal proceedings",
      "A confession is admissible only in civil proceedings",
      "There is no distinction between the two"
    ],
    correctIndex: 0,
    explanation: "An admission under s.17 is a statement, oral or documentary or contained in electronic form, which suggests any inference as to any fact in issue or relevant fact, made by any of the persons and in the circumstances specified in the Act. A confession is a species of admission made by an accused person which, if true, would by itself be enough to convict. All confessions are admissions, but not all admissions are confessions.",
    legalBasis: "Sections 17 and 24-30, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: ["", "Admissions apply in civil and criminal proceedings alike.", "Confessions are relevant to criminal proceedings.", "The two are distinct concepts."],
    flashpoint: "ADMISSION (s.17) is the wider genus; CONFESSION is an admission by an accused sufficient by itself to convict.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-019", subject: S, topic: "e5", subtopic: "Confession to police",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "A confession made to a police officer is:",
    options: [
      "Admissible in evidence",
      "Admissible if it is recorded in writing",
      "Inadmissible in evidence, under Section 25 of the Indian Evidence Act, 1872",
      "Admissible only in a summary trial"
    ],
    correctIndex: 2,
    explanation: "Section 25 provides that no confession made to a police officer shall be proved as against a person accused of any offence. The rule is absolute and is not cured by recording the confession in writing or by the presence of a Magistrate.",
    legalBasis: "Sections 25 and 26, Indian Evidence Act, 1872; BSA 2023; Section 164, CrPC, 1973.",
    wrongOptionExplanations: [
      "A confession to a police officer is inadmissible.",
      "Recording it in writing does not make it admissible.",
      "",
      "The bar applies irrespective of the mode of trial."
    ],
    flashpoint: "s.25 → a confession to a POLICE OFFICER is absolutely INADMISSIBLE. The s.27 discovery exception is separate.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-020", subject: S, topic: "e5", subtopic: "Confession — inducement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 24 of the Indian Evidence Act, 1872, a confession is irrelevant if it appears to the court to have been caused by:",
    options: [
      "Any inducement, threat or promise proceeding from a person in authority, sufficient in the opinion of the court to give the accused person grounds which would appear to him reasonable for supposing that by making it he would gain any advantage or avoid any evil of a temporal nature",
      "Any question put by a police officer",
      "Any statement made in the presence of a Magistrate",
      "Any statement made after arrest"
    ],
    correctIndex: 0,
    explanation: "Section 24 renders a confession irrelevant if it appears to the court to have been caused by any inducement, threat or promise, having reference to the charge against the accused, proceeding from a person in authority, and sufficient in the court's opinion to give the accused grounds which would appear to him reasonable for supposing that by making it he would gain any advantage or avoid any evil of a temporal nature in reference to the proceedings against him.",
    legalBasis: "Section 24, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: ["", "Questioning by a police officer is not itself sufficient; the statutory test is inducement, threat or promise.", "A statement to a Magistrate may be admissible subject to s.164 CrPC safeguards.", "Arrest alone does not make a confession irrelevant."],
    flashpoint: "s.24 → confession IRRELEVANT if caused by INDUCEMENT, THREAT or PROMISE from a PERSON IN AUTHORITY.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-021", subject: S, topic: "e5", subtopic: "Discovery — s.27",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A is arrested for murder. While in police custody he states: 'I have hidden the knife in the well behind my house.' The knife is recovered from the well as a result of that statement. Which part of the statement is admissible?",
    options: [
      "The whole statement, including the words 'I have hidden the knife'",
      "The whole statement is admissible because it led to a recovery",
      "No part of the statement is admissible because it was made to a police officer",
      "Only so much of the information as relates distinctly to the fact thereby discovered, namely the fact of the place where the knife was hidden, leading to the recovery"
    ],
    correctIndex: 3,
    explanation: "Section 27 permits so much of the information received from a person accused of an offence in the custody of a police officer as relates distinctly to the fact thereby discovered to be proved. The portion of the statement that is merely confessional is excluded by ss.25 and 26; only the portion distinctly connected with the discovery is admitted.",
    legalBasis: "Sections 25, 26 and 27, Indian Evidence Act, 1872; BSA 2023; Pulukuri Kottaya v. Emperor, AIR 1947 PC 67.",
    wrongOptionExplanations: [
      "The confessional portion remains inadmissible.",
      "Only the discovery-related portion is admitted.",
      "Section 27 is an exception to ss.25 and 26.",
      ""
    ],
    flashpoint: "s.27 → only the portion DISTINCTLY RELATING TO THE FACT DISCOVERED is admissible (Pulukuri Kottaya).",
    source: "CASE"
  });

  Q({
    id: "EVD-022", subject: S, topic: "e5", subtopic: "Admission by a party",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "An admission made by a party to a suit:",
    options: [
      "May be proved as against that party, but is not conclusive unless it is an estoppel, since it is open to the party to show that it was made by mistake or was not true",
      "Is conclusive proof of the fact admitted",
      "Is admissible only if made in writing",
      "Cannot be proved against the maker"
    ],
    correctIndex: 0,
    explanation: "An admission is a piece of evidence which may be used against the maker; it is not conclusive of the matter admitted unless it amounts to an estoppel. Section 31 provides that admissions are not conclusive proof of the matters admitted but may operate as estoppels. An admission need not be in writing.",
    legalBasis: "Sections 17, 21 and 31, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: [
      "",
      "Admissions are not conclusive proof unless they operate as an estoppel.",
      "An admission may be oral.",
      "An admission is provable against its maker."
    ],
    flashpoint: "s.31 → admissions are NOT conclusive proof, but may operate as ESTOPPELS.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-023", subject: S, topic: "e5", subtopic: "Confession and co-accused",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 30 of the Indian Evidence Act, 1872, the confession of a co-accused:",
    options: [
      "Is substantive evidence and can by itself be the sole basis of conviction",
      "Can be used only in civil proceedings",
      "Is wholly inadmissible",
      "May be taken into consideration by the court, but is not substantive evidence and cannot alone form the basis of conviction; it may lend assurance to other evidence"
    ],
    correctIndex: 3,
    explanation: "Section 30 permits the court to take into consideration a confession made by one of several persons jointly tried for the same offence, affecting himself and the others. However, it is settled that such a confession is not substantive evidence against the co-accused and cannot by itself sustain a conviction; it can only lend assurance to other evidence. Kashmira Singh v. State of M.P. is the leading authority.",
    legalBasis: "Section 30, Indian Evidence Act, 1872; Kashmira Singh v. State of Madhya Pradesh, AIR 1952 SC 159.",
    wrongOptionExplanations: [
      "A co-accused's confession is not substantive evidence.",
      "Section 30 applies to criminal proceedings.",
      "It is admissible and may be taken into consideration.",
      ""
    ],
    flashpoint: "s.30 → a CO-ACCUSED's confession can be TAKEN INTO CONSIDERATION but is NOT substantive evidence (Kashmira Singh).",
    source: "CASE"
  });

  /* ------------------------------------------------------------ burden of proof */
  Q({
    id: "EVD-024", subject: S, topic: "e6", subtopic: "Onus probandi",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "What is meant by 'onus probandi'?",
    options: [
      "'The fact to be proved' or the ultimate fact that needs to be established in a legal case",
      "Burden of proof, placing the responsibility on the party making an affirmative claim to substantiate it with evidence",
      "Actual evidence, documents or witnesses presented to substantiate a claim",
      "The mental element required for a criminal offence"
    ],
    correctIndex: 1,
    explanation: "Onus probandi means the burden of proof. Section 101 provides that whoever desires any court to give judgment as to any legal right or liability dependent on the existence of facts which he asserts must prove that those facts exist, and the burden of proof lies on that person.",
    legalBasis: "Sections 101 and 102, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: ["That describes the 'fact to be proved' or the ultimate fact.", "", "That describes actual evidence.", "That describes mens rea."],
    flashpoint: "ONUS PROBANDI = BURDEN OF PROOF → on the party making the affirmative claim (s.101).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-025", subject: S, topic: "e6", subtopic: "Burden — general exception",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 105 of the Indian Evidence Act, 1872, the burden of proving the existence of circumstances bringing a case within a general exception lies on:",
    options: ["The prosecution", "The accused", "The court", "The investigating officer"],
    correctIndex: 1,
    explanation: "Section 105 places the burden of proving the existence of circumstances bringing the case within any of the general exceptions on the accused, and provides that the court shall presume the absence of such circumstances. The burden may be discharged by a preponderance of probabilities.",
    legalBasis: "Section 105, Indian Evidence Act, 1872; V.D. Jhingan v. State of U.P., AIR 1966 SC 1762.",
    wrongOptionExplanations: ["The prosecution's burden is to prove the offence beyond reasonable doubt.", "", "The court does not bear the burden of proof.", "The investigating officer's role is investigative."],
    flashpoint: "s.105 → the ACCUSED bears the burden of proving a GENERAL EXCEPTION, on a PREPONDERANCE OF PROBABILITIES.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-026", subject: S, topic: "e6", subtopic: "Golden thread",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The principle that the prosecution must prove the guilt of the accused and that the burden never shifts to the accused to prove his innocence is known as:",
    options: ["The golden thread, laid down in Woolmington v. DPP", "Res ipsa loquitur", "Res judicata", "Volenti non fit injuria"],
    correctIndex: 0,
    explanation: "Woolmington v. DPP, (1935) AC 462 laid down the 'golden thread' of English criminal law — that the prosecution must prove the accused's guilt, subject to the statutory exceptions such as insanity and, in India, the burden under s.105 of the Evidence Act.",
    legalBasis: "Section 101, Indian Evidence Act, 1872; Woolmington v. DPP, (1935) AC 462.",
    wrongOptionExplanations: [
      "",
      "Res ipsa loquitur is a rule of the law of torts and of circumstantial evidence in certain cases.",
      "Res judicata is a civil rule of finality.",
      "Volenti non fit injuria is a defence in tort."
    ],
    flashpoint: "Golden thread → WOOLMINGTON v. DPP (1935) AC 462: the prosecution must prove guilt beyond reasonable doubt.",
    source: "CASE"
  });

  Q({
    id: "EVD-027", subject: S, topic: "e6", subtopic: "Res ipsa loquitur",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "'Res ipsa loquitur' means:",
    options: [
      "The burden of proof lies on the prosecution",
      "The thing speaks for itself — the accident itself is evidence of negligence where the thing causing the injury was under the exclusive control of the defendant",
      "A fact admitted need not be proved",
      "Facts judicially noticed need not be proved"
    ],
    correctIndex: 1,
    explanation: "Res ipsa loquitur is a rule of evidence in the law of torts which permits the inference of negligence from the mere occurrence of the accident where the instrumentality causing the injury was under the exclusive control of the defendant and the accident is of a kind that does not ordinarily occur without negligence.",
    legalBasis: "Rules of evidence in tort; Municipal Corporation of Delhi v. Subhagwanti, AIR 1966 SC 1750; Syad Akbar v. State of Karnataka, (1980) 1 SCC 30.",
    wrongOptionExplanations: [
      "The burden of proof on the prosecution is a separate rule under s.101.",
      "",
      "That is the effect of an admission.",
      "That is the effect of judicial notice (s.56-57)."
    ],
    flashpoint: "RES IPSA LOQUITUR = 'the thing speaks for itself' → the accident itself evidences NEGLIGENCE where there is exclusive control.",
    source: "CASE"
  });

  Q({
    id: "EVD-028", subject: S, topic: "e6", subtopic: "Facts within special knowledge",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 106 of the Indian Evidence Act, 1872 provides that when any fact is especially within the knowledge of any person, the burden of proving that fact is upon:",
    options: ["The prosecution", "That person", "The court", "The Investigating Officer"],
    correctIndex: 1,
    explanation: "Section 106 places the burden of proving a fact especially within the knowledge of a person upon that person. The section is an exception to the general rule in s.101 and applies only where the fact is especially within a person's knowledge and not within the knowledge of the other side.",
    legalBasis: "Section 106, Indian Evidence Act, 1872.",
    wrongOptionExplanations: ["The general rule of the prosecution's burden is subject to s.106.", "", "The court does not bear the burden.", "The Investigating Officer does not bear the burden under s.106."],
    flashpoint: "s.106 → a fact ESPECIALLY WITHIN THE KNOWLEDGE of a person must be proved by THAT PERSON.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-029", subject: S, topic: "e6", subtopic: "Burden — proof beyond reasonable doubt",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Assertion-Reason",
    question: "Assertion (A): In a criminal trial the prosecution must prove the guilt of the accused beyond reasonable doubt, including the mental element where the statute requires it.\nReason (R): The presumption of innocence operates in favour of the accused, and the burden of proof never shifts to him to establish his innocence.\nDecide the correct option.",
    options: [
      "(A) is true, but (R) is false",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 2,
    explanation: "Both statements are true and the reason explains the assertion: the presumption of innocence is why the prosecution must discharge the burden beyond reasonable doubt, including proof of the mental element where the statute requires it. Statutory exceptions such as s.105 of the Evidence Act and presumptions under special statutes operate as recognised exceptions.",
    legalBasis: "Sections 101, 105, 106 and 114, Indian Evidence Act, 1872; Woolmington v. DPP, (1935) AC 462.",
    wrongOptionExplanations: ["(R) is correct, subject to statutory exceptions.", "The presumption of innocence is precisely the rationale.", "", "(A) is correct."],
    flashpoint: "Presumption of innocence is the rationale for proof beyond reasonable doubt — subject to statutory exceptions (s.105, special-statute presumptions).",
    source: "STATUTE"
  });

  Q({
    id: "EVD-030", subject: S, topic: "e7", subtopic: "Competency of witnesses",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 118 of the Indian Evidence Act, 1872, all persons are competent to testify unless the court considers that they are:",
    options: [
      "Below the age of eighteen years",
      "Not educated",
      "Related to the accused",
      "Prevented from understanding the questions put to them or from giving rational answers to those questions by tender years, extreme old age, disease of body or mind, or any other cause of the same kind"
    ],
    correctIndex: 3,
    explanation: "Section 118 makes all persons competent to testify unless the court considers that, by reason of tender years, extreme old age, disease whether of body or mind, or any other cause of the same kind, they are prevented from understanding the questions put to them or from giving rational answers to them. A child's evidence, if found reliable, can be the basis of conviction; it is a rule of prudence to look for corroboration, not a rule of law.",
    legalBasis: "Sections 118, 119 (dumb witnesses) and 120, Indian Evidence Act, 1872.",
    wrongOptionExplanations: [
      "There is no age bar; a child of tender years may testify if competent.",
      "Education is not a requirement of competency.",
      "Relationship with the accused goes to credibility, not competency.",
      ""
    ],
    flashpoint: "s.118 → ALL PERSONS are competent unless prevented from understanding questions or giving RATIONAL ANSWERS.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-031", subject: S, topic: "e7", subtopic: "Hostile witness",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A party calling a witness may, with the permission of the court, put questions to that witness which might be put in cross-examination by the adverse party. This is permissible under:",
    options: ["Section 137", "Section 146", "Section 154", "Section 165"],
    correctIndex: 2,
    explanation: "Section 154 empowers the court, in its discretion, to permit the party calling a witness to put questions to that witness which might be put in cross-examination by the adverse party. This is what is commonly described as declaring the witness hostile. Section 137 defines examination-in-chief, cross-examination and re-examination; s.146 permits cross-examination as to previous statements; s.165 confers the judge's power to put questions.",
    legalBasis: "Sections 137, 146, 154 and 165, Indian Evidence Act, 1872.",
    wrongOptionExplanations: ["Section 137 defines the three stages of examination.", "Section 146 permits cross-examination as to previous statements in writing.", "", "Section 165 is the judge's power to put questions or order production of documents."],
    flashpoint: "s.154 → declaring a witness HOSTILE, with the court's permission (a matter of DISCRETION, not right).",
    source: "STATUTE"
  });

  Q({
    id: "EVD-032", subject: S, topic: "e7", subtopic: "Leading questions",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A leading question is one which:",
    options: [
      "Suggests the answer the questioner wishes to receive",
      "Is asked only during re-examination",
      "Is asked only by the court",
      "Relates only to documents"
    ],
    correctIndex: 0,
    explanation: "Section 141 defines a leading question as any question suggesting the answer which the person putting it wishes or expects to receive. Leading questions cannot be asked in examination-in-chief or re-examination, except with the permission of the court, as provided by s.142; they may be asked in cross-examination under s.143.",
    legalBasis: "Sections 141, 142 and 143, Indian Evidence Act, 1872.",
    wrongOptionExplanations: ["", "Leading questions are permissible in cross-examination; their use in re-examination is restricted.", "The court may ask any question under s.165.", "Leading questions are not confined to documents — except in the limited case in s.142."],
    flashpoint: "s.141 → LEADING QUESTION suggests the desired answer. Permitted in CROSS-examination (s.143), restricted in examination-in-chief and re-examination (s.142).",
    source: "STATUTE"
  });

  Q({
    id: "EVD-033", subject: S, topic: "e7", subtopic: "Judge's power to put questions",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 165 of the Indian Evidence Act, 1872 empowers the judge to:",
    options: [
      "Put any question he pleases, in any form, at any time, to any witness or party, or to order the production of any document or thing, in order to discover or obtain proper proof of relevant facts",
      "Decide the case without recording evidence",
      "Declare a witness hostile without any application",
      "Summon the accused and question him under oath"
    ],
    correctIndex: 0,
    explanation: "Section 165 confers a wide power on the judge to put any question he pleases, in any form, at any time, to any witness or party, or to order the production of any document or thing, in order to discover or to obtain proper proof of relevant facts. The section contains safeguards against the abuse of this power.",
    legalBasis: "Section 165, Indian Evidence Act, 1872.",
    wrongOptionExplanations: [
      "",
      "The judge must record evidence and decide on it.",
      "Declaring a witness hostile is dealt with under s.154.",
      "The accused is not examined on oath; s.313 CrPC provides for his examination."
    ],
    flashpoint: "s.165 → the judge's WIDE power to put questions and order production, to discover or obtain proper proof of relevant facts.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------ electronic evidence */
  Q({
    id: "EVD-034", subject: S, topic: "e8", subtopic: "Certificate — condition precedent",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following statements about the requirement of a certificate for the admissibility of an electronic record is correct?",
    options: [
      "No certificate is required in any case",
      "The certificate is required only in civil proceedings",
      "The certificate is required only where the electronic record is a printout",
      "The certificate is a condition precedent to the admissibility of the electronic record"
    ],
    correctIndex: 3,
    explanation: "Anvar P.V. v. P.K. Basheer held that s.65B of the Indian Evidence Act, 1872 is a complete code and that the certificate under s.65B(4) is a condition precedent to the admissibility of an electronic record. Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal clarified that the certificate may be produced at a later stage with the leave of the court. The corresponding provision is s.63 of the BSA, 2023.",
    legalBasis: "Sections 65A and 65B, Indian Evidence Act, 1872; Section 63, Bharatiya Sakshya Adhiniyam, 2023; Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473; Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1.",
    wrongOptionExplanations: [
      "The certificate requirement is mandatory.",
      "The requirement applies in criminal and civil proceedings alike.",
      "The requirement is not confined to printouts.",
      ""
    ],
    flashpoint: "s.65B(4) Evidence Act / s.63(4) BSA → the CERTIFICATE is a CONDITION PRECEDENT (Anvar v. Basheer).",
    source: "CASE"
  });

  Q({
    id: "EVD-035", subject: S, topic: "e8", subtopic: "Section 65B as a complete code",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which decision held that Section 65B of the Indian Evidence Act, 1872 is a 'complete code' for electronic evidence?",
    options: [
      "Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473",
      "State (NCT of Delhi) v. Navjot Sandhu, AIR 2005 SC 3820",
      "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1",
      "Tomaso Bruno v. State of U.P., (2015) 7 SCC 178"
    ],
    correctIndex: 0,
    explanation: "Anvar P.V. v. P.K. Basheer held that s.65B is a complete code for the admissibility of electronic records and that the certificate is mandatory. This overruled the contrary approach in Navjot Sandhu, where it had been held that electronic records such as printouts and CDs could be admitted as prima facie evidence without authentication.",
    legalBasis: "Section 65B, Indian Evidence Act, 1872; Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473; State (NCT of Delhi) v. Navjot Sandhu, AIR 2005 SC 3820.",
    wrongOptionExplanations: [
      "",
      "Navjot Sandhu took the contrary view and was overruled on this point by Anvar.",
      "Arjun Panditrao Khotkar clarified Anvar but the 'complete code' expression is from Anvar.",
      "Tomaso Bruno concerned the production of call detail records and the right to a fair trial."
    ],
    flashpoint: "s.65B is a COMPLETE CODE → ANVAR v. BASHEER (2014) 10 SCC 473. Navjot Sandhu was OVERRULED on this point.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-036", subject: S, topic: "e8", subtopic: "Navjot Sandhu — status",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about State (NCT of Delhi) v. Navjot Sandhu, AIR 2005 SC 3820 is correct?",
    options: [
      "It held that electronic records such as printouts and compact discs could be admitted as prima facie evidence without authentication, but this view was overruled by Anvar P.V. v. P.K. Basheer",
      "It is the leading authority for the proposition that a s.65B certificate is a condition precedent",
      "It held that electronic evidence is inadmissible in all circumstances",
      "It held that the Evidence Act does not apply to electronic records"
    ],
    correctIndex: 0,
    explanation: "Navjot Sandhu held that printouts and CDs could be admitted as prima facie evidence without authentication. Anvar P.V. v. P.K. Basheer overruled that view and held that the s.65B(4) certificate is a condition precedent, a position clarified in Arjun Panditrao Khotkar.",
    legalBasis: "State (NCT of Delhi) v. Navjot Sandhu, AIR 2005 SC 3820; Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473; Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1.",
    wrongOptionExplanations: ["", "The condition-precedent proposition comes from Anvar and Arjun Panditrao Khotkar.", "Navjot Sandhu admitted such evidence on a prima facie basis.", "Neither decision holds that the Evidence Act does not apply."],
    flashpoint: "Navjot Sandhu (AIR 2005 SC 3820) → held CDs/printouts admissible WITHOUT authentication — OVERRULED by Anvar v. Basheer.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-037", subject: S, topic: "e8", subtopic: "BSA s.63 certificate contents",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Multi",
    question: "With regard to the certificate to verify the authenticity of electronic evidence, which of the following is a requirement?\nI. The certificate must be in the format prescribed in the Schedule.\nII. It must be accompanied by a hash value of the electronic record.\nIII. It must be signed by the person in charge of the computer or communication device, and where applicable, by an expert.\nIV. It must be countersigned by a Judicial Magistrate.",
    options: ["I, II, III and IV", "I, II and III only", "II and IV only", "I and IV only"],
    correctIndex: 1,
    explanation: "The BSA requires the certificate in the prescribed Schedule format, to be accompanied by a hash value, and to be signed by the person in charge of the computer or communication device and, where applicable, by an expert. There is no requirement of countersignature by a Judicial Magistrate.",
    legalBasis: "Section 63(4) and the Schedule, Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: [
      "Item IV is wrong — a Judicial Magistrate's countersignature is not required.",
      "",
      "Item IV is wrong and item I is correct.",
      "Item IV is wrong."
    ],
    flashpoint: "BSA s.63(4) certificate → SCHEDULE FORMAT + HASH VALUE + signatures of the person in charge and, where applicable, an expert.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-038", subject: S, topic: "e8", subtopic: "Anvar applicability",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Statement-Conclusion",
    question: "Statement: In Anvar P.V. v. P.K. Basheer the Supreme Court held that an electronic record by way of secondary evidence is not admissible unless the requirements of Section 65B of the Indian Evidence Act, 1872 are satisfied, and that the certificate under s.65B(4) is mandatory.\nConclusion I: Where the electronic record is produced as primary evidence under Section 62, the requirement of a certificate under Section 65B does not apply.\nConclusion II: Where the electronic record is produced as secondary evidence, the certificate is mandatory.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion I follows", "Only Conclusion II follows", "Neither Conclusion I nor II follows"],
    correctIndex: 0,
    explanation: "Both conclusions follow. Anvar distinguished between primary and secondary electronic evidence: where the record is produced as primary evidence from the device itself, s.65B has no application; where it is produced as secondary evidence, the s.65B(4) certificate is mandatory. Arjun Panditrao Khotkar clarified that the certificate may be produced subsequently with the leave of the court.",
    legalBasis: "Sections 62, 63, 65A and 65B, Indian Evidence Act, 1872; Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473; Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1.",
    wrongOptionExplanations: ["", "Conclusion II also follows.", "Conclusion I also follows.", "Both conclusions follow from Anvar."],
    flashpoint: "PRIMARY electronic record (s.62) → no certificate needed. SECONDARY electronic record → s.65B(4) certificate is MANDATORY.",
    source: "CASE"
  });

  Q({
    id: "EVD-039", subject: S, topic: "e8", subtopic: "Decryption and hash",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In the BSA framework, the 'hash value' of an electronic record is significant because:",
    options: [
      "It is a unique digital fingerprint of the record which helps establish that the record has not been altered",
      "It determines the monetary value of the record",
      "It identifies the owner of the device",
      "It replaces the need for any certificate"
    ],
    correctIndex: 0,
    explanation: "A hash value is a fixed-length alphanumeric value generated by a cryptographic algorithm applied to the electronic record. It functions as a digital fingerprint: if the record is altered, the hash value changes, which assists in establishing the integrity and authenticity of the record. The BSA requires the certificate to be accompanied by a hash value.",
    legalBasis: "Section 63(4) and the Schedule, Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: [
      "",
      "The hash value has nothing to do with monetary value.",
      "It does not identify the owner.",
      "It supplements, rather than replaces, the certificate."
    ],
    flashpoint: "HASH VALUE = digital fingerprint → unchanged hash indicates the record has NOT BEEN ALTERED.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-040", subject: S, topic: "e8", subtopic: "Electronic record — proof",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is the correct legal position about the proof of electronic records?",
    options: [
      "Electronic records are inadmissible unless reduced to paper form",
      "Electronic records are documents and are admissible in evidence subject to the conditions prescribed for their proof",
      "Electronic records are admissible without any proof of authenticity",
      "Electronic records are admissible only in criminal proceedings"
    ],
    correctIndex: 1,
    explanation: "Electronic records are 'documents' and are admissible, subject to compliance with the conditions for proof — in particular the certificate requirement under s.65B (Evidence Act) / s.63 (BSA) where the record is produced as secondary evidence.",
    legalBasis: "Sections 3, 65A and 65B, Indian Evidence Act, 1872; Sections 2 and 63, Bharatiya Sakshya Adhiniyam, 2023.",
    wrongOptionExplanations: ["Reduction to paper form is not a requirement.", "", "Authentication requirements apply.", "Electronic records are admissible in civil and criminal proceedings alike."],
    flashpoint: "Electronic records ARE documents, admissible subject to the s.65B / s.63 conditions.",
    source: "STATUTE"
  });

  /* ----------------------------------------------------------- circumstantial */
  Q({
    id: "EVD-041", subject: S, topic: "e9", subtopic: "Five golden principles",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The five golden principles with respect to circumstantial evidence were laid down in which Supreme Court judgment?",
    options: [
      "Hanumant Govind Nargundkar v. State of M.P., AIR 1952 SC 343",
      "Dr. Sunil Clifford Daniel v. State of Punjab, (2012) 11 SCC 205",
      "Vasa Chandrasekhar Rao v. Ponna Satyanarayana, (2000) 6 SCC 71",
      "Sharad Birdhichand Sarda v. State of Maharashtra, (1984) 4 SCC 116"
    ],
    correctIndex: 3,
    explanation: "Sharad Birdhichand Sarda v. State of Maharashtra laid down the five golden principles governing cases resting on circumstantial evidence: (i) the circumstances must be fully established; (ii) the facts so established must be consistent only with the hypothesis of guilt; (iii) the circumstances must be conclusive in nature; (iv) they must exclude every possible hypothesis except the one to be proved; (v) there must be a complete chain of evidence excluding any reasonable ground for a conclusion consistent with innocence. Hanumant Govind Nargundkar stated the principle earlier, but the 'five golden principles' formulation is from Sharad Birdhichand Sarda.",
    legalBasis: "Sharad Birdhichand Sarda v. State of Maharashtra, (1984) 4 SCC 116; Hanumant Govind Nargundkar v. State of M.P., AIR 1952 SC 343.",
    wrongOptionExplanations: [
      "Hanumant Govind Nargundkar is the earlier statement of the principle, not the source of the five golden principles.",
      "Dr. Sunil Clifford Daniel applied the principles in the context of a murder trial.",
      "Vasa Chandrasekhar Rao applied the principles to the facts of that case.",
      ""
    ],
    flashpoint: "FIVE GOLDEN PRINCIPLES of circumstantial evidence → SHARAD BIRDHICHAND SARDA v. State of Maharashtra, (1984) 4 SCC 116.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-042", subject: S, topic: "e9", subtopic: "Complete chain",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is the correct requirement in a case resting on circumstantial evidence?",
    options: [
      "The circumstances need not be established fully, provided the accused's conduct appears suspicious",
      "Circumstantial evidence can never sustain a conviction",
      "Each circumstance must be proved beyond doubt individually and no inference need be drawn from their cumulative effect",
      "The chain of circumstances must be so complete as not to leave any reasonable ground for a conclusion consistent with the innocence of the accused"
    ],
    correctIndex: 3,
    explanation: "The cumulative effect of the circumstances must form a chain so complete as to exclude every hypothesis except that of guilt. Circumstantial evidence can sustain a conviction where the chain is complete; the circumstances must be established fully and must be conclusive in nature.",
    legalBasis: "Sharad Birdhichand Sarda v. State of Maharashtra, (1984) 4 SCC 116.",
    wrongOptionExplanations: [
      "The circumstances must be fully established.",
      "Circumstantial evidence can sustain a conviction where the chain is complete.",
      "The cumulative effect of the circumstances is what matters.",
      ""
    ],
    flashpoint: "Circumstantial evidence → the CHAIN must EXCLUDE every hypothesis except GUILT.",
    source: "CASE"
  });

  Q({
    id: "EVD-043", subject: S, topic: "e9", subtopic: "Juvenile age — documents",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Statement-Conclusion",
    question: "Read the following statements and choose the correct option.\nStatement I: The ossification test is the final test to analyse bone fusion for estimating the age of a juvenile.\nStatement II: Statutory documents such as a birth certificate are given precedence in determining whether a person is a juvenile.\nWhich is correct?",
    options: ["Both Statements I and II are true", "Only Statement II is true", "Both Statements I and II are false", "Only Statement I is true"],
    correctIndex: 1,
    explanation: "Statement II is correct: statutory documents such as a birth certificate, school records or a matriculation certificate are relied upon first to determine age. Statement I is wrong: the ossification test is resorted to only when documentary evidence is unavailable, and the benefit of the margin is given to the person claiming juvenility. Ashwani Kumar Saxena v. State of M.P. explains the procedure.",
    legalBasis: "Juvenile Justice (Care and Protection of Children) Act, 2015; Ashwani Kumar Saxena v. State of M.P., (2012) 9 SCC 750; Abuzar Hossain v. State of West Bengal, (2012) 10 SCC 489.",
    wrongOptionExplanations: ["Statement I is false.", "", "Statement II is true, so this is wrong.", "Statement I is false."],
    flashpoint: "STATUTORY DOCUMENTS (birth certificate) take PRECEDENCE over the OSSIFICATION test in determining juvenility.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "EVD-044", subject: S, topic: "e9", subtopic: "Circumstantial evidence — motive",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In a case based on circumstantial evidence, the absence of proof of motive:",
    options: [
      "Is fatal to the prosecution case in every case",
      "Is not fatal if the circumstantial evidence is otherwise complete and conclusive, though proof of motive strengthens the prosecution case",
      "Renders the evidence inadmissible",
      "Shifts the burden of proof to the accused"
    ],
    correctIndex: 1,
    explanation: "Proof of motive is not a sine qua non in a case resting on circumstantial evidence. Where the circumstantial evidence is so complete as to exclude every hypothesis of innocence, the absence of proof of motive does not by itself weaken the prosecution case, though proof of motive certainly strengthens it.",
    legalBasis: "Sharad Birdhichand Sarda v. State of Maharashtra, (1984) 4 SCC 116; Sections 8, 9 and 14, Indian Evidence Act, 1872.",
    wrongOptionExplanations: ["The absence of motive is not fatal in every case.", "", "The evidence remains admissible.", "The burden does not shift to the accused on this ground."],
    flashpoint: "Motive → not a sine qua non in circumstantial-evidence cases, but it strengthens the prosecution case.",
    source: "CASE"
  });

  Q({
    id: "EVD-045", subject: S, topic: "e4", subtopic: "Judicial notice",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 57 of the Indian Evidence Act, 1872, the court shall take judicial notice of the fact that:",
    options: [
      "A person is of bad character",
      "A person is the owner of certain property",
      "The law of procedure in India is contained in the Code of Civil Procedure, 1908",
      "The parties have entered into a contract"
    ],
    correctIndex: 2,
    explanation: "Section 57 lists the facts of which the court shall take judicial notice, including the existence of Indian law, the procedure of the legislature, the seals of courts, the accession and sign manual of the Sovereign, the course of proceedings in Parliament, the constitution and titles of courts, and the law of nations. No proof is required of these facts.",
    legalBasis: "Sections 56 and 57, Indian Evidence Act, 1872; BSA 2023.",
    wrongOptionExplanations: ["Bad character is not a matter for judicial notice.", "Ownership is a fact to be proved.", "", "A contract is a fact to be proved."],
    flashpoint: "s.57 → judicial notice of INDIAN LAW, court seals, titles, the law of nations, etc. NO PROOF required.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-046", subject: S, topic: "e5", subtopic: "Privileged communication",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Communications between a client and a legal professional are protected from disclosure:",
    options: [
      "Always, without any exception",
      "Where the communication is made in the course and for the purpose of the professional employment of the legal adviser, and the protection does not extend to communications made in furtherance of an illegal purpose or to facts observed by the legal adviser",
      "Only in civil proceedings",
      "Only if the client is the accused in a criminal case"
    ],
    correctIndex: 1,
    explanation: "Section 129 of the Indian Evidence Act, 1872 protects a client from being compelled to disclose any confidential communication made to his legal professional adviser, and the protection is confined to communications made in the course and for the purpose of the professional employment. The protection does not apply where the communication was made in furtherance of any illegal purpose, nor to a fact observed by the legal adviser indicating that a crime or fraud has been committed since the commencement of the employment.",
    legalBasis: "Sections 126, 127, 128, 129 and the proviso to Section 126, Indian Evidence Act, 1872.",
    wrongOptionExplanations: ["The protection is subject to the statutory exceptions.", "", "The protection applies in civil and criminal proceedings alike.", "The protection is not confined to criminal cases."],
    flashpoint: "s.126/129 → CLIENT–ADVOCATE privilege; the exceptions are ILLEGAL PURPOSE and a CRIME OR FRAUD committed since the employment began.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-047", subject: S, topic: "e7", subtopic: "Examination — order",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The examination of a witness by the party who calls him is called examination-in-chief; the examination of a witness by the adverse party is called cross-examination; and the examination of a witness, subsequent to the cross-examination, by the party who called him is called re-examination. This is provided by:",
    options: ["Section 135", "Section 136", "Section 138", "Section 137"],
    correctIndex: 3,
    explanation: "Section 137 defines the three stages: examination-in-chief, cross-examination and re-examination. Section 138 prescribes the order of examinations, including that a witness shall be first examined-in-chief, then cross-examined and then re-examined.",
    legalBasis: "Sections 137 and 138, Indian Evidence Act, 1872.",
    wrongOptionExplanations: [
      "Section 135 concerns the order of production and examination of witnesses.",
      "Section 136 is the judge's power to decide admissibility and examine a witness as to admissibility.",
      "Section 138 prescribes the order of examinations.",
      ""
    ],
    flashpoint: "s.137 → defines EXAMINATION-IN-CHIEF, CROSS-EXAMINATION, RE-EXAMINATION. s.138 → the ORDER of examinations.",
    source: "STATUTE"
  });

  Q({
    id: "EVD-048", subject: S, topic: "e2", subtopic: "Evidence — definition",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "'Evidence' under the Indian Evidence Act, 1872 means and includes:",
    options: [
      "Only oral evidence",
      "Statement of witnesses (oral evidence) and documents including electronic records produced for the inspection of the court (documentary evidence). In cases where the court examines a witness as to the facts, the evidence is oral; in cases where documents are produced, it is documentary",
      "Only documentary evidence",
      "Only material objects"
    ],
    correctIndex: 1,
    explanation: "Section 3 defines 'evidence' as meaning and including (1) all statements which the court permits or requires to be made before it by witnesses in relation to matters of fact under inquiry — oral evidence; and (2) all documents including electronic records produced for the inspection of the court — documentary evidence. The definition does not expressly mention material objects, which are nonetheless admissible.",
    legalBasis: "Section 3, Indian Evidence Act, 1872; Sections 59 and 60 (oral evidence); Sections 61-65 (documentary evidence); BSA 2023.",
    wrongOptionExplanations: [
      "Oral evidence is one limb.",
      "",
      "Documentary evidence is one limb.",
      "Material objects are not expressly within the statutory definition, though admissible."
    ],
    flashpoint: "'Evidence' = ORAL (statements of witnesses) + DOCUMENTARY (documents including electronic records).",
    source: "STATUTE"
  });
})();
