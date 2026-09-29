/* ============================================================================
 * AIBE XXI — Question Bank: Cr.P.C. (1973) & Bharatiya Nagarik Suraksha
 * Sanhita (2023). Weightage: 10 / 100. 60 questions.
 * BNSS propositions used here are limited to those verified or tested in the
 * official Set A paper (in force 1 July 2024; BNSS s.105 audio-video recording
 * of search and seizure; statutory recognition of the Zero FIR; judgment
 * timeline; plea-bargaining window).
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "crpc-bnss";

  /* ------------------------------------------------------------ definitions */
  Q({
    id: "CRP-001", subject: S, topic: "r1", subtopic: "Definition of bailable offence",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Code of Criminal Procedure, 1973, which specific provision provides the legal definition of a 'bailable offence'?",
    options: ["Section 2(x)", "Section 2(h)", "Section 2(a)", "Section 2(c)"],
    correctIndex: 2,
    explanation: "Section 2(a) defines 'bailable offence' as an offence shown as bailable in the First Schedule, or which is made bailable by any other law in force; and 'non-bailable offence' as any other offence. Section 2(h) defines 'investigation', s.2(x) defines 'warrant-case' and s.2(c) defines 'cognizable offence'.",
    legalBasis: "Section 2(a), Code of Criminal Procedure, 1973.",
    wrongOptionExplanations: ["Section 2(x) defines 'warrant-case'.", "Section 2(h) defines 'investigation'.", "", "Section 2(c) defines 'cognizable offence'."],
    flashpoint: "CrPC s.2(a) → BAILABLE offence. s.2(h) → investigation. s.2(c) → cognizable. s.2(x) → warrant-case.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CRP-002", subject: S, topic: "r1", subtopic: "Cognizable offence",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "A 'cognizable offence' under the Code of Criminal Procedure, 1973 means:",
    options: [
      "An offence for which a police officer may arrest without warrant in accordance with the First Schedule or under any other law",
      "An offence punishable with imprisonment exceeding two years only",
      "An offence in which only a Magistrate may take cognizance",
      "An offence compoundable with the permission of the court"
    ],
    correctIndex: 0,
    explanation: "Section 2(c) defines a cognizable offence by reference to the police officer's power to arrest without a warrant. A 'non-cognizable offence' under s.2(l) is one for which a police officer has no authority to arrest without a warrant.",
    legalBasis: "Sections 2(c) and 2(l), Code of Criminal Procedure, 1973.",
    wrongOptionExplanations: ["", "The two-year threshold defines a 'warrant-case' under s.2(x), not a cognizable offence.", "Cognizance is a separate concept under s.190.", "Compoundability is governed by s.320."],
    flashpoint: "Cognizable = police may arrest WITHOUT WARRANT (s.2(c)). Non-cognizable = no such power (s.2(l)).",
    source: "STATUTE"
  });

  Q({
    id: "CRP-003", subject: S, topic: "r1", subtopic: "Warrant-case and summons-case",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Code of Criminal Procedure, 1973, a 'warrant-case' means a case relating to an offence punishable with:",
    options: [
      "Imprisonment for a term exceeding six months",
      "Death, imprisonment for life, or imprisonment for a term exceeding two years",
      "Imprisonment for a term exceeding five years only",
      "Fine exceeding five thousand rupees"
    ],
    correctIndex: 1,
    explanation: "Section 2(x) defines a warrant-case as a case relating to an offence punishable with death, imprisonment for life or imprisonment for a term exceeding two years. Every other case is a summons-case under s.2(w).",
    legalBasis: "Sections 2(w) and 2(x), Code of Criminal Procedure, 1973.",
    wrongOptionExplanations: ["Six months is not the threshold.", "", "The threshold is two years, not five.", "The mode of trial is determined by the punishment, not the fine."],
    flashpoint: "Warrant-case (s.2(x)) → death / life / imprisonment exceeding TWO YEARS.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-004", subject: S, topic: "r1", subtopic: "Complaint and FIR",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: An FIR recorded under Section 154, CrPC is not a substantive piece of evidence, though it can be used to corroborate or contradict the informant under the law of evidence.\nConclusion I: An FIR cannot be used to corroborate or contradict the maker of the report.\nConclusion II: An FIR is not evidence of the facts stated in it and cannot by itself be the basis of a conviction.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion II follows", "Only Conclusion I follows", "Neither Conclusion I nor II follows"],
    correctIndex: 1,
    explanation: "An FIR is not substantive evidence, so Conclusion II follows. Conclusion I is the opposite of the law — an FIR may be used to corroborate or contradict the informant.",
    legalBasis: "Section 154, Code of Criminal Procedure, 1973; Sections 157 and 145, Indian Evidence Act, 1872 (BSA ss.157, 148).",
    wrongOptionExplanations: ["Conclusion I is wrong.", "", "Conclusion I is the reverse of the legal position.", "Conclusion II follows."],
    flashpoint: "FIR → NOT substantive evidence; usable to CORROBORATE or CONTRADICT the informant; cannot alone found a conviction.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-005", subject: S, topic: "r1", subtopic: "Zero FIR",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following statements about a Zero FIR is correct?",
    options: [
      "A Zero FIR may be registered at any police station irrespective of territorial jurisdiction, and is thereafter transferred to the police station having jurisdiction; the practice has been given statutory recognition under the BNSS, 2023",
      "A Zero FIR can be registered only by the police station having territorial jurisdiction over the place of occurrence",
      "A Zero FIR is registered only in cases of offences punishable with death",
      "A Zero FIR has no legal value and is treated as a preliminary enquiry"
    ],
    correctIndex: 0,
    explanation: "The Zero FIR allows a victim to lodge an FIR at any police station regardless of territorial jurisdiction. The station registers it with a zero number and transfers it to the jurisdictional police station. The BNSS, 2023 gives the practice statutory recognition.",
    legalBasis: "Section 154, CrPC, 1973; BNSS, 2023 (information in cognizable cases).",
    wrongOptionExplanations: [
      "",
      "The whole point of a Zero FIR is that territorial jurisdiction is not a bar.",
      "The procedure is not confined to capital offences.",
      "A Zero FIR is a regular FIR and is investigated accordingly."
    ],
    flashpoint: "Zero FIR → any police station, irrespective of jurisdiction; transferred to the jurisdictional station; statutory recognition under the BNSS.",
    source: "STATUTE"
  });

  /* ----------------------------------------------------------------- arrest */
  Q({
    id: "CRP-006", subject: S, topic: "r2", subtopic: "Detention — 24 hours",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Which provision of the Code of Criminal Procedure, 1973 stipulates that a police officer must produce a person arrested without a warrant before a Magistrate within a maximum period of 24 hours?",
    options: ["Section 41", "Section 57", "Section 51", "Section 164"],
    correctIndex: 1,
    explanation: "Section 57 provides that no police officer shall detain in custody a person arrested without warrant for a longer period than, under all the circumstances of the case, is reasonable, and that such period shall not in any case exceed twenty-four hours exclusive of the time necessary for the journey from the place of arrest to the Magistrate's court.",
    legalBasis: "Sections 57 and 167, Code of Criminal Procedure, 1973; Article 22(2), Constitution of India.",
    wrongOptionExplanations: [
      "Section 41 states when a police officer may arrest without a warrant.",
      "",
      "Section 51 concerns the search of an arrested person.",
      "Section 164 concerns the recording of confessions and statements."
    ],
    flashpoint: "CrPC s.57 → 24 HOURS maximum custody (journey time excluded).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CRP-007", subject: S, topic: "r2", subtopic: "Arrest guidelines",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The guidelines requiring, among other things, the preparation of a memo of arrest attested by a witness, the visible display of identification by the arresting officer, and medical examination of the arrestee, were laid down in:",
    options: [
      "Joginder Kumar v. State of U.P., (1994) 4 SCC 260",
      "Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273",
      "D.K. Basu v. State of West Bengal, (1997) 1 SCC 416",
      "State of Maharashtra v. Christian Community Welfare Council of India, (2003) 8 SCC 546"
    ],
    correctIndex: 2,
    explanation: "D.K. Basu v. State of West Bengal laid down eleven requirements for arrest and detention, including visible identification, a memo of arrest attested by a witness and countersigned by the arrestee, intimation to a friend or relative, and medical examination. Arnesh Kumar built on it by requiring a s.41A notice and a checklist for offences punishable with up to seven years.",
    legalBasis: "Sections 41, 41A, 41B, 50, 50A and 57, CrPC, 1973; D.K. Basu v. State of West Bengal, (1997) 1 SCC 416.",
    wrongOptionExplanations: [
      "Joginder Kumar held that arrest cannot be made merely because it is lawful to do so, but the detailed requirements are from D.K. Basu.",
      "Arnesh Kumar laid down the s.41A/checklist discipline for offences up to seven years.",
      "",
      "Christian Community Welfare Council concerned the arrest of women and the circular requiring prior permission."
    ],
    flashpoint: "Arrest requirements → D.K. BASU v. State of West Bengal (1997) 1 SCC 416.",
    source: "CASE"
  });

  Q({
    id: "CRP-008", subject: S, topic: "r2", subtopic: "Notice of appearance",
    difficulty: "Difficult", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A person is alleged to have committed an offence punishable with imprisonment for three years. The police officer is satisfied that arrest is not immediately necessary. What is the correct course under the Code of Criminal Procedure, 1973?",
    options: [
      "The officer may arrest the person in every case without exception",
      "The officer must file a charge-sheet without any notice or arrest",
      "The officer must obtain the prior sanction of the Magistrate before issuing any notice",
      "The officer shall issue a notice under Section 41A requiring the person to appear before him, and shall not arrest without recording reasons in writing in the police case diary"
    ],
    correctIndex: 3,
    explanation: "Section 41A requires the police officer to issue a notice of appearance where arrest is not required, and s.41B requires reasons to be recorded in the case diary. Arnesh Kumar v. State of Bihar made the issue of the notice and the recording of reasons mandatory in such cases.",
    legalBasis: "Sections 41A and 41B, CrPC, 1973; Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273.",
    wrongOptionExplanations: [
      "Arrest is not automatic; the statutory scheme requires notice where arrest is not necessary.",
      "A charge-sheet follows investigation; the notice stage comes earlier.",
      "No prior sanction of the Magistrate is required for issuing a notice.",
      ""
    ],
    flashpoint: "s.41A → NOTICE OF APPEARANCE where arrest is not required; reasons must be recorded (Arnesh Kumar, 2014).",
    source: "CASE"
  });

  Q({
    id: "CRP-009", subject: S, topic: "r2", subtopic: "Right to meet advocate",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The right of an arrested person to meet an advocate of his choice during interrogation is provided by:",
    options: ["Section 50, CrPC", "Section 41D, CrPC", "Section 54, CrPC", "Section 303, CrPC"],
    correctIndex: 1,
    explanation: "Section 41D, inserted by the 2008 Amendment, provides that a person arrested and interrogated by the police shall be entitled to meet an advocate of his choice during interrogation, though not throughout the interrogation. Section 303 provides for the right of a person against whom proceedings are instituted to be defended by a pleader of his choice.",
    legalBasis: "Sections 41D and 303, CrPC, 1973; Article 22(1), Constitution of India.",
    wrongOptionExplanations: [
      "Section 50 requires the grounds of arrest to be communicated.",
      "",
      "Section 54 provides for the examination of an arrested person by a medical officer.",
      "Section 303 provides for the right to be defended by a pleader of choice in proceedings before a court."
    ],
    flashpoint: "s.41D → right to meet an ADVOCATE during interrogation (not throughout). s.303 → right to be defended by a pleader of choice.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-010", subject: S, topic: "r2", subtopic: "Grounds of arrest",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Assertion-Reason",
    question: "Assertion (A): A police officer arresting a person without a warrant must forthwith communicate to that person full particulars of the offence for which he is arrested or other grounds for the arrest.\nReason (R): The person arrested is entitled to be informed of the grounds of arrest so that he may prepare and defend himself, and this is also a constitutional guarantee.\nDecide the correct option.",
    options: [
      "(A) is false, but (R) is true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)"
    ],
    correctIndex: 3,
    explanation: "Section 50(1), CrPC imposes the obligation, and Article 22(1) of the Constitution guarantees the right of an arrested person to be informed of the grounds of arrest. The reason correctly explains the obligation — the right to know the grounds is the foundation of the right to defend.",
    legalBasis: "Section 50(1), CrPC, 1973; Article 22(1), Constitution of India.",
    wrongOptionExplanations: [
      "(A) is correct.",
      "The right to defend is precisely why the grounds must be communicated.",
      "(R) is correct — Article 22(1) guarantees this right.",
      ""
    ],
    flashpoint: "s.50(1) CrPC + Article 22(1) → grounds of arrest must be communicated FORTHWITH.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------------ investigation */
  Q({
    id: "CRP-011", subject: S, topic: "r3", subtopic: "Default bail",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 167 of the Code of Criminal Procedure, 1973, 'default bail' (statutory bail) becomes a right of the accused where the investigation is not completed:",
    options: [
      "After a fixed period of 30 days for all types of offences",
      "Upon the expiry of 120 days specifically for offences against the State",
      "Immediately on the expiry of the initial 15-day police custody",
      "After 60 days or 90 days, depending on the maximum punishment prescribed for the offence"
    ],
    correctIndex: 3,
    explanation: "Section 167(2) provides that the accused is entitled to be released on bail if the investigation is not completed within 60 days, where the offence is punishable with imprisonment of less than ten years, or 90 days, where the offence is punishable with death, imprisonment for life or imprisonment for a term of not less than ten years.",
    legalBasis: "Section 167(2), CrPC, 1973; Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81.",
    wrongOptionExplanations: [
      "The period is not a uniform 30 days.",
      "There is no separate 120-day period for offences against the State.",
      "The right accrues on the expiry of the statutory period, not on the completion of police custody.",
      ""
    ],
    flashpoint: "Default bail → 60 DAYS (<10 years) or 90 DAYS (death / life / ≥10 years) under s.167(2).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CRP-012", subject: S, topic: "r3", subtopic: "Default bail — filing of charge-sheet",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The right to default bail under Section 167(2) CrPC accrues on the expiry of the statutory period. Which of the following correctly states the legal position where a charge-sheet is filed after the expiry of the period but before the accused applies for bail?",
    options: [
      "The right is extinguished automatically on the filing of the charge-sheet",
      "The right is not defeated by the mere filing of the charge-sheet after the expiry of the period, provided the accused applies for bail and is prepared to furnish bail",
      "The right can be exercised only by a written application filed before the expiry of the period",
      "The right is available only to accused persons charged with offences punishable with death"
    ],
    correctIndex: 1,
    explanation: "In Uday Mohanlal Acharya v. State of Maharashtra the Supreme Court held that the indefeasible right to default bail accrues on the failure of the prosecution to file the charge-sheet within the prescribed period, and that it is not defeated by the filing of the charge-sheet after the period, where the accused has applied for bail and is prepared to furnish bail.",
    legalBasis: "Section 167(2), CrPC, 1973; Uday Mohanlal Acharya v. State of Maharashtra, (2001) 5 SCC 453.",
    wrongOptionExplanations: ["The right is not automatically extinguished.", "", "An oral application is sufficient; the right is not conditioned on a written application before the period expires.", "The right applies to all offences within the two categories of the sub-section."],
    flashpoint: "Default bail → accrues on expiry of 60/90 days; NOT defeated by a belated charge-sheet if the accused applies and is ready to furnish bail (Uday Mohanlal Acharya).",
    source: "CASE"
  });

  Q({
    id: "CRP-013", subject: S, topic: "r3", subtopic: "BNSS — search and seizure recording",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 105 of the Bharatiya Nagarik Suraksha Sanhita, 2023, what is now a mandatory requirement for the process of search and seizure conducted by the police?",
    options: [
      "The presence of a Judicial Magistrate during the search",
      "The documentation of the entire search and seizure process through audio-video electronic means",
      "The presence of at least five local residents as independent witnesses",
      "The acquisition of a signed written confession from the occupant of the premises"
    ],
    correctIndex: 1,
    explanation: "Section 105 of the BNSS makes the recording of the entire process of search and seizure through audio-video electronic means mandatory. The provision is a technology-driven innovation of the new Code.",
    legalBasis: "Section 105, Bharatiya Nagarik Suraksha Sanhita, 2023.",
    wrongOptionExplanations: ["The BNSS does not require the physical presence of a Judicial Magistrate.", "", "Two or more independent and respectable inhabitants of the locality are required to witness a search, not five.", "A confession to a police officer is inadmissible in any event."],
    flashpoint: "BNSS s.105 → search and seizure MUST be recorded by AUDIO-VIDEO electronic means.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CRP-014", subject: S, topic: "r3", subtopic: "Recording of confessions",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which provision of the Code of Criminal Procedure, 1973 deals with the recording of confessions and statements by a Magistrate?",
    options: ["Section 161", "Section 162", "Section 164", "Section 173"],
    correctIndex: 2,
    explanation: "Section 164 provides for the recording of confessions and statements by a Magistrate. Section 161 empowers a police officer to examine witnesses, s.162 restricts the use of such statements, and s.173 concerns the police report on completion of the investigation.",
    legalBasis: "Sections 161, 162, 164 and 173, CrPC, 1973.",
    wrongOptionExplanations: ["Section 161 empowers a police officer to examine any person supposed to be acquainted with the facts.", "Section 162 restricts the use of statements made to a police officer.", "", "Section 173 is the police report (charge-sheet)."],
    flashpoint: "CrPC s.164 → recording of CONFESSIONS and statements by a MAGISTRATE. s.161 → examination by police. s.173 → police report.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-015", subject: S, topic: "r3", subtopic: "Confession to police — inadmissibility",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A confession made by an accused to a police officer is inadmissible. However, so much of the information received from a person in police custody as relates distinctly to the fact thereby discovered may be proved. This doctrine of discovery flows from:",
    options: [
      "Section 27, Indian Evidence Act, 1872",
      "Section 25, Indian Evidence Act, 1872",
      "Section 24, Indian Evidence Act, 1872",
      "Section 32, Indian Evidence Act, 1872"
    ],
    correctIndex: 0,
    explanation: "Section 27 of the Indian Evidence Act, 1872 (BSA s.23) provides that so much of the information received from a person accused of any offence in the custody of a police officer as relates distinctly to the fact thereby discovered may be proved. Section 25 makes a confession to a police officer inadmissible and s.26 deals with confessions in police custody.",
    legalBasis: "Sections 25, 26 and 27, Indian Evidence Act, 1872; BSA, 2023.",
    wrongOptionExplanations: [
      "",
      "Section 25 makes a confession to a police officer inadmissible.",
      "Section 24 renders a confession caused by inducement, threat or promise irrelevant.",
      "Section 32 deals with statements of persons who are dead or cannot be found (dying declaration)."
    ],
    flashpoint: "Discovery of fact → s.27 Evidence Act (BSA s.23). Confession to police → inadmissible (s.25).",
    source: "STATUTE"
  });

  Q({
    id: "CRP-016", subject: S, topic: "r3", subtopic: "Investigation — who may investigate",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about the power to investigate under the Code of Criminal Procedure, 1973 is correct?",
    options: [
      "Any police officer may investigate any offence irrespective of rank",
      "An officer in charge of a police station may investigate a cognizable case, and an officer in charge of a police station may also require any officer subordinate to him to investigate; a Magistrate may order investigation by a police officer of a higher rank in certain cases",
      "Only a Magistrate may investigate a cognizable offence",
      "Investigation can be commenced only after the Magistrate takes cognizance"
    ],
    correctIndex: 1,
    explanation: "Section 156 provides that an officer in charge of a police station may investigate any cognizable case, and s.156(3) empowers a Magistrate to order an investigation. Section 36 and s.157 govern the powers of superior officers. Thus investigation is primarily a police function, subject to the statutory rank requirements.",
    legalBasis: "Sections 36, 156, 157 and 190, CrPC, 1973.",
    wrongOptionExplanations: ["There are rank requirements in several provisions (for example, s.157(1), s.156(3)).", "", "A Magistrate does not investigate; he may order an investigation.", "Investigation precedes cognizance in the ordinary course."],
    flashpoint: "CrPC s.156 → an officer in charge of a police station may investigate a cognizable case; s.156(3) → a Magistrate may order an investigation.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-017", subject: S, topic: "r3", subtopic: "Mandatory FIR registration",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The Supreme Court held that the registration of an FIR is mandatory where the information discloses the commission of a cognizable offence, in:",
    options: [
      "State of Haryana v. Bhajan Lal, 1992 Supp (1) SCC 335",
      "Prakash Singh v. Union of India, (2006) 8 SCC 1",
      "Lalita Kumari v. Government of U.P., (2014) 2 SCC 1",
      "D.K. Basu v. State of West Bengal, (1997) 1 SCC 416"
    ],
    correctIndex: 2,
    explanation: "Lalita Kumari v. Government of U.P. held that the registration of an FIR under s.154 is mandatory if the information discloses the commission of a cognizable offence, and that a preliminary enquiry is permissible only in the limited categories of cases specified in the judgment.",
    legalBasis: "Section 154, CrPC, 1973; Lalita Kumari v. Government of U.P., (2014) 2 SCC 1.",
    wrongOptionExplanations: [
      "Bhajan Lal laid down the categories of cases in which an FIR may be quashed under s.482.",
      "Prakash Singh concerned police reforms and the State Security Commission.",
      "",
      "D.K. Basu laid down arrest guidelines."
    ],
    flashpoint: "Mandatory FIR → LALITA KUMARI v. Government of U.P. (2014) 2 SCC 1.",
    source: "CASE"
  });

  Q({
    id: "CRP-018", subject: S, topic: "r3", subtopic: "Cognizance",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which section of the Code of Criminal Procedure, 1973 deals with the cognizance of offences by Magistrates?",
    options: ["Section 173", "Section 197", "Section 190", "Section 200"],
    correctIndex: 2,
    explanation: "Section 190 deals with cognizance of offences by Magistrates. Section 197 provides for the prosecution of judges and public servants, and s.200 provides for the examination of the complainant on receipt of a complaint.",
    legalBasis: "Sections 190, 197 and 200, CrPC, 1973.",
    wrongOptionExplanations: [
      "Section 173 is the police report on completion of investigation.",
      "Section 197 concerns sanctions for the prosecution of public servants.",
      "",
      "Section 200 concerns the examination of the complainant."
    ],
    flashpoint: "CrPC s.190 → COGNIZANCE by a Magistrate. s.197 → sanction for prosecuting a public servant.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-019", subject: S, topic: "r3", subtopic: "Limitation for cognizance",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Code of Criminal Procedure, 1973, the period of limitation for taking cognizance of an offence punishable with imprisonment for a term exceeding one year but not exceeding three years is:",
    options: ["Six months", "Three years", "One year", "There is no limitation for such offences"]
    , correctIndex: 1,
    explanation: "Section 468 provides a limitation of six months for offences punishable with fine only, one year for offences punishable with imprisonment for a term not exceeding one year, and three years for offences punishable with imprisonment for a term exceeding one year but not exceeding three years.",
    legalBasis: "Section 468, CrPC, 1973.",
    wrongOptionExplanations: [
      "Six months applies to offences punishable with fine only.",
      "",
      "One year applies to offences punishable with imprisonment up to one year.",
      "Section 468 expressly prescribes three years for this category."
    ],
    flashpoint: "Limitation (s.468) → fine only: 6 MONTHS | imprisonment ≤ 1 year: 1 YEAR | imprisonment 1-3 years: 3 YEARS.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-020", subject: S, topic: "r3", subtopic: "Charge-sheet",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "After the completion of an investigation, a police officer submits a report to the Magistrate under Section 173 CrPC. Which of the following statements about this report is correct?",
    options: [
      "The report is a substantive piece of evidence and the Magistrate is bound to accept its conclusions",
      "The report can be filed only in non-cognizable cases",
      "The report must always recommend the discharge of the accused",
      "The report is not evidence and the Magistrate is not bound by its conclusions; the Magistrate may disagree with the police and take a different view"
    ],
    correctIndex: 3,
    explanation: "The police report under s.173 is not evidence. The Magistrate is not bound by the opinion of the police and may take cognizance, direct further investigation, or take a different view on the material.",
    legalBasis: "Section 173, CrPC, 1973.",
    wrongOptionExplanations: [
      "A police report is not substantive evidence.",
      "The report is filed in cognizable cases.",
      "The report sets out the police's conclusion, whether of a charge or of a final report (closure).",
      ""
    ],
    flashpoint: "CrPC s.173 report → NOT evidence; the Magistrate is NOT bound by the police's opinion.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-021", subject: S, topic: "r3", subtopic: "Search — independent witnesses",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 100(4) of the Code of Criminal Procedure, 1973, the search of a place shall ordinarily be made in the presence of:",
    options: [
      "A Judicial Magistrate",
      "Five or more inhabitants of the locality",
      "Two or more independent and respectable inhabitants of the locality",
      "A police officer of the rank of Sub-Inspector or above"
    ],
    correctIndex: 2,
    explanation: "Section 100(4) requires the officer conducting the search to call upon two or more independent and respectable inhabitants of the locality in which the place to be searched is situate to attend and witness the search.",
    legalBasis: "Section 100(4) and (5), CrPC, 1973.",
    wrongOptionExplanations: [
      "The presence of a Magistrate is not required for a search.",
      "The requirement is for two or more, not five.",
      "",
      "The rank of the officer is a separate requirement under some provisions."
    ],
    flashpoint: "Search (s.100(4)) → TWO OR MORE INDEPENDENT AND RESPECTABLE inhabitants of the locality.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-022", subject: S, topic: "r3", subtopic: "Investigation — statements",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "During investigation, a witness makes a statement to a police officer under Section 161 CrPC. At the trial the witness gives evidence inconsistent with that statement. What is the correct legal position?",
    options: [
      "The Section 161 statement can be used as substantive evidence of the witness's earlier version",
      "The Section 161 statement cannot be used as substantive evidence, but may be used with the permission of the court to contradict the witness in the manner provided by the law of evidence",
      "The Section 161 statement cannot be used for any purpose whatsoever",
      "The Section 161 statement becomes admissible if it is signed by the witness"
    ],
    correctIndex: 1,
    explanation: "Section 162 bars the use of a statement made to a police officer during investigation except as provided — for contradicting the witness in the manner provided by s.145 of the Indian Evidence Act, 1872 (BSA s.148) where the statement is reduced to writing. Statements to the police are not substantive evidence. A statement under s.161 need not be signed.",
    legalBasis: "Sections 161 and 162, CrPC, 1973; Section 145, Indian Evidence Act, 1872 (BSA s.148).",
    wrongOptionExplanations: ["A s.161 statement is not substantive evidence.", "", "It can be used to contradict, and for other purposes permitted by s.162.", "A s.161 statement is not required to be signed, and signature does not make it substantive evidence."],
    flashpoint: "s.162 → a statement to the police during investigation is usable only to CONTRADICT (with the court's permission), never as substantive evidence.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-023", subject: S, topic: "r3", subtopic: "BNSS — judgment timeline",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The Bharatiya Nagarik Suraksha Sanhita, 2023, has introduced a specific timeframe for the delivery of a judgment after the conclusion of arguments. What is that timeframe?",
    options: [
      "Within a strict period of 15 days",
      "Within 60 days from the date of reserving the order",
      "Within 90 days, provided the reasons for delay are recorded",
      "Within 30 days, extendable up to 45 days"
    ],
    correctIndex: 3,
    explanation: "The BNSS requires the court to pronounce the judgment within thirty days from the date of the conclusion of arguments, and permits an extension of up to forty-five days for reasons to be recorded in writing.",
    legalBasis: "BNSS, 2023 (judgment provision).",
    wrongOptionExplanations: [
      "Fifteen days is not the statutory period.",
      "Sixty days is not the prescribed period.",
      "Ninety days is the outer limit in certain other contexts, not for the judgment.",
      ""
    ],
    flashpoint: "BNSS judgment timeline → 30 DAYS from conclusion of arguments, extendable to 45 DAYS.",
    source: "PAPER-PATTERN"
  });

  /* ------------------------------------------------------------------- bail */
  Q({
    id: "CRP-024", subject: S, topic: "r4", subtopic: "Bail in bailable offences",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "In the case of a bailable offence, bail under Section 436 CrPC is:",
    options: [
      "A matter of discretion of the court",
      "Available only with the consent of the Public Prosecutor",
      "Available only after the charge-sheet is filed",
      "A matter of right, and the person shall be released on bail"
    ],
    correctIndex: 3,
    explanation: "Section 436 makes bail in a bailable offence a right. The officer in charge or the court has no discretion to refuse it on the merits; the only question is the sufficiency of the surety.",
    legalBasis: "Section 436, CrPC, 1973; Rasiklal v. Kishore, (2009) 4 SCC 200.",
    wrongOptionExplanations: [
      "Discretion arises in non-bailable offences under s.437.",
      "The consent of the prosecutor is not required.",
      "Bail is available at the stage of arrest itself.",
      ""
    ],
    flashpoint: "BAILABLE offence → bail is a RIGHT (s.436). NON-BAILABLE → discretion (s.437).",
    source: "STATUTE"
  });

  Q({
    id: "CRP-025", subject: S, topic: "r4", subtopic: "Anticipatory bail",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which section of the Code of Criminal Procedure, 1973 provides for a direction for the grant of bail to a person apprehending arrest?",
    options: ["Section 437", "Section 439", "Section 438", "Section 436"],
    correctIndex: 2,
    explanation: "Section 438 provides for anticipatory bail — a direction that, in the event of arrest, the applicant shall be released on bail. Section 439 confers special powers on the High Court and the Court of Session.",
    legalBasis: "Sections 436, 437, 438 and 439, CrPC, 1973.",
    wrongOptionExplanations: [
      "Section 437 governs bail in non-bailable offences where the accused is in custody.",
      "Section 439 confers special powers on the High Court and the Court of Session in respect of bail.",
      "",
      "Section 436 governs bail in bailable offences."
    ],
    flashpoint: "CrPC s.438 → ANTICIPATORY BAIL. s.439 → special powers of the High Court / Court of Session.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-026", subject: S, topic: "r4", subtopic: "Anticipatory bail — scope",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In Gurbaksh Singh Sibbia v. State of Punjab, the Supreme Court held that the power to grant anticipatory bail under Section 438 CrPC:",
    options: [
      "Is to be exercised only in exceptional circumstances and confined to a limited period",
      "Is a wide discretion which is not to be confined by artificial limitations, and the applicant need not show that he is likely to be arrested in a particular case",
      "Can be exercised only by the Court of Session and not by the High Court",
      "Can be exercised only after an FIR is registered"
    ],
    correctIndex: 1,
    explanation: "Gurbaksh Singh Sibbia held that the discretion under s.438 is wide, that the applicant must show a reasonable apprehension of arrest, and that the power should not be hedged with conditions not found in the statute. Sibbia was partly modified in Sushila Aggarwal v. State (NCT of Delhi), (2020) 5 SCC 1, which held that anticipatory bail need not be limited in time and can operate till the end of trial, subject to the court's discretion.",
    legalBasis: "Section 438, CrPC, 1973; Gurbaksh Singh Sibbia v. State of Punjab, (1980) 2 SCC 565; Sushila Aggarwal v. State (NCT of Delhi), (2020) 5 SCC 1.",
    wrongOptionExplanations: ["The Court expressly declined to read artificial limitations into the section.", "", "Both the High Court and the Court of Session have the power under s.438.", "An FIR is not a precondition to an application under s.438."],
    flashpoint: "s.438 anticipatory bail → WIDE discretion (Gurbaksh Singh Sibbia); not limited in time (Sushila Aggarwal, 2020).",
    source: "CASE"
  });

  Q({
    id: "CRP-027", subject: S, topic: "r4", subtopic: "Bail — considerations",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Multi",
    question: "Which of the following factors are relevant to the court's discretion in granting bail in a non-bailable offence?\nI. The nature and gravity of the accusation.\nII. The antecedents of the applicant, including whether he has previously been convicted of a non-bailable offence.\nIII. The possibility of the applicant fleeing justice and the danger of the evidence being tampered with.\nIV. The applicant's wealth and social status.",
    options: ["I, II and III only", "I, II, III and IV", "II and III only", "I and IV only"],
    correctIndex: 0,
    explanation: "Section 437(3) and the settled principles of bail jurisprudence make the nature and gravity of the accusation, the antecedents of the applicant (including previous conviction of a non-bailable offence) and the danger of absconding or tampering with evidence relevant. Wealth and social status are not the statutory criteria and treating them as such would violate Article 14.",
    legalBasis: "Section 437(1) and (3), CrPC, 1973; Satender Kumar Antil v. CBI, (2022) 10 SCC 51.",
    wrongOptionExplanations: ["", "Wealth and social status are not statutory criteria and are constitutionally impermissible considerations.", "Items I and IV are relevant/irrelevant respectively, so this is incomplete.", "Item IV is not a proper criterion."],
    flashpoint: "Bail factors → gravity, antecedents, flight risk, tampering. WEALTH AND STATUS are NOT criteria.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-028", subject: S, topic: "r4", subtopic: "Default bail — computation",
    difficulty: "Difficult", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A is arrested in connection with an offence punishable with imprisonment of not less than ten years. A judicial Magistrate authorises his detention beyond 24 hours. The investigation is still incomplete on the ninety-first day. Which of the following is correct?",
    options: [
      "A's detention continues to be lawful because the offence is grave",
      "A is entitled to be released only if the High Court grants bail under Section 439",
      "A is entitled to be released on bail under Section 167(2), since the investigation was not completed within ninety days",
      "A's entitlement arises only on the expiry of one hundred and eighty days"
    ],
    correctIndex: 2,
    explanation: "Where the offence is punishable with death, imprisonment for life or imprisonment for a term of not less than ten years, the period under s.167(2) is ninety days. On the expiry of that period without the completion of the investigation, the accused becomes entitled to default bail. The gravity of the offence does not defeat the statutory right; only the Public Prosecutor's report seeking an extension, which the Code permits in limited circumstances, can.",
    legalBasis: "Section 167(2), CrPC, 1973; Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81.",
    wrongOptionExplanations: [
      "Gravity alone does not defeat the statutory right to default bail.",
      "The entitlement is before the Magistrate under s.167(2) and does not depend on a s.439 application.",
      "",
      "One hundred and eighty days is not a period under s.167(2)."
    ],
    flashpoint: "90 days for offences punishable with death, life or imprisonment ≥ 10 years; 60 days otherwise.",
    source: "CASE"
  });

  /* ------------------------------------------------------------ maintenance */
  Q({
    id: "CRP-029", subject: S, topic: "r5", subtopic: "Maintenance — the provision",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Which provision of the Code of Criminal Procedure, 1973 provides a summary legal remedy for the maintenance of spouses, children and parents who are unable to support themselves?",
    options: ["Section 125", "Section 107", "Section 144", "Section 320"],
    correctIndex: 0,
    explanation: "Section 125 provides a summary remedy for the maintenance of a wife, children and parents unable to maintain themselves. Section 107 concerns security for keeping the peace, s.144 urgent cases of nuisance and s.320 the compounding of offences.",
    legalBasis: "Section 125, CrPC, 1973.",
    wrongOptionExplanations: [
      "",
      "Section 107 is security for keeping the peace and for good behaviour.",
      "Section 144 concerns urgent cases of nuisance or apprehended danger.",
      "Section 320 governs the compounding of offences."
    ],
    flashpoint: "CrPC s.125 → SUMMARY maintenance for WIFE, CHILDREN and PARENTS.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CRP-030", subject: S, topic: "r5", subtopic: "Maintenance — religion-neutral",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The character of Section 125 CrPC as a secular provision applicable irrespective of the personal law of the parties was established in:",
    options: [
      "Mohd. Ahmed Khan v. Shah Bano Begum, (1985) 2 SCC 556",
      "Sarla Mudgal v. Union of India, (1995) 3 SCC 635",
      "Danial Latifi v. Union of India, (2001) 7 SCC 740",
      "Rajnesh v. Neha, (2021) 2 SCC 324"
    ],
    correctIndex: 0,
    explanation: "In Mohd. Ahmed Khan v. Shah Bano Begum the Supreme Court held that s.125 applies to a Muslim wife as well and that the provision cuts across the personal law of the parties. Danial Latifi later upheld the constitutional validity of the Muslim Women (Protection of Rights on Divorce) Act, 1986 by construing it consistently with Shah Bano.",
    legalBasis: "Section 125, CrPC, 1973; Mohd. Ahmed Khan v. Shah Bano Begum, (1985) 2 SCC 556.",
    wrongOptionExplanations: ["", "Sarla Mudgal concerned conversion and bigamy.", "Danial Latifi construed the 1986 Act in the light of Shah Bano but the secular character of s.125 was settled in Shah Bano.", "Rajnesh v. Neha laid down procedural guidelines for overlapping maintenance claims."],
    flashpoint: "s.125 CrPC is SECULAR and cuts across personal law → SHAH BANO (1985) 2 SCC 556.",
    source: "CASE"
  });

  Q({
    id: "CRP-031", subject: S, topic: "r5", subtopic: "Maintenance — who may claim",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following persons is NOT entitled to claim maintenance under Section 125 CrPC?",
    options: [
      "A wife unable to maintain herself",
      "A minor child, legitimate or illegitimate",
      "A brother or sister of the person against whom the claim is made",
      "A father or mother unable to maintain themselves"
    ],
    correctIndex: 2,
    explanation: "Section 125(1) covers a wife, a legitimate or illegitimate minor child, a legitimate or illegitimate child who has attained majority but is unable to maintain itself by reason of physical or mental abnormality or injury, and the father or mother unable to maintain themselves. Siblings are not covered.",
    legalBasis: "Section 125(1) Explanation (b), CrPC, 1973.",
    wrongOptionExplanations: ["A wife is covered by s.125(1)(a).", "A minor child is covered by s.125(1)(b).", "", "A father or mother is covered by s.125(1)(d)."],
    flashpoint: "s.125 → WIFE + CHILDREN + FATHER/MOTHER. Not siblings.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-032", subject: S, topic: "r5", subtopic: "Maintenance — overlapping claims",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Guidelines on the interplay of overlapping maintenance claims under different statutes, including the requirement of an affidavit of assets and liabilities, were laid down in:",
    options: [
      "Ramesh Chander Kaushal v. Veena Kaushal, (1978) 4 SCC 70",
      "Rajnesh v. Neha, (2021) 2 SCC 324",
      "Iqbal Bano v. State of U.P., (2007) 6 SCC 785",
      "Yamunabai Anantrao Adhav v. Anantrao Shivram Adhav, (1988) 1 SCC 530"
    ],
    correctIndex: 1,
    explanation: "Rajnesh v. Neha laid down comprehensive guidelines on overlapping maintenance claims under s.125 CrPC and personal-law statutes, standardised the forms for affidavits of assets and liabilities, and addressed the date from which maintenance should be awarded.",
    legalBasis: "Section 125, CrPC, 1973; Rajnesh v. Neha, (2021) 2 SCC 324.",
    wrongOptionExplanations: [
      "Ramesh Chander Kaushal concerned the wide interpretation of 'wife' under s.125.",
      "",
      "Iqbal Bano concerned the granting of maintenance to a divorced Muslim woman under s.125 where the 1986 Act did not apply.",
      "Yamunabai Adhav held that a second wife whose marriage was void is not entitled to maintenance under s.125."
    ],
    flashpoint: "Overlapping maintenance claims → guidelines in RAJNESH v. NEHA (2021) 2 SCC 324.",
    source: "CASE"
  });

  /* ------------------------------------------------------------------ trial */
  Q({
    id: "CRP-033", subject: S, topic: "r6", subtopic: "Plea bargaining window",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Code of Criminal Procedure, 1973, an accused person intending to apply for plea bargaining must file the application within how many days from the date of framing of the charge?",
    options: ["7 days", "30 days", "15 days", "60 days"],
    correctIndex: 1,
    explanation: "Section 265B(1) provides that the accused may file an application for plea bargaining, and the application must be filed within thirty days from the date of framing of the charge. The BNSS continues the scheme.",
    legalBasis: "Chapter XXIA (ss.265A-265L) including s.265B, CrPC, 1973; BNSS, 2023.",
    wrongOptionExplanations: ["Seven days is not the prescribed period.", "", "Fifteen days is not the prescribed period.", "Sixty days is not the prescribed period."],
    flashpoint: "Plea bargaining → application within 30 DAYS of framing of charge (s.265B).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CRP-034", subject: S, topic: "r6", subtopic: "Plea bargaining — excluded offences",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following offences is excluded from the plea-bargaining scheme under Chapter XXIA of the Code of Criminal Procedure, 1973?",
    options: [
      "An offence punishable with imprisonment for a term of less than seven years",
      "An offence of defamation",
      "An offence of simple hurt",
      "An offence affecting the socio-economic condition of the country as notified by the Central Government, and offences against a woman or a child below fourteen years of age"
    ],
    correctIndex: 3,
    explanation: "Section 265A excludes from the scheme offences affecting the socio-economic condition of the country, notified by the Central Government, and offences committed against a woman or a child below the age of fourteen years. Offences punishable with death, life imprisonment or imprisonment exceeding seven years are also excluded.",
    legalBasis: "Section 265A, CrPC, 1973.",
    wrongOptionExplanations: [
      "Offences punishable with less than seven years are generally within the scheme, subject to the exclusions.",
      "Defamation is not in the excluded category.",
      "Simple hurt is not in the excluded category.",
      ""
    ],
    flashpoint: "Plea bargaining excluded → offences against a WOMAN or a CHILD BELOW 14; notified socio-economic offences; and offences punishable with death/life/imprisonment > 7 years.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-035", subject: S, topic: "r6", subtopic: "Summary trial",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 260 CrPC, a Magistrate of the first class may try summarily an offence punishable with imprisonment for a term not exceeding:",
    options: ["One month", "Three months", "One year", "Six months"],
    correctIndex: 3,
    explanation: "Section 260(1) empowers a Chief Judicial Magistrate or a Magistrate of the first class to try summarily offences punishable with imprisonment for a term not exceeding six months, or with fine not exceeding one thousand rupees, or with both, and certain other specified offences.",
    legalBasis: "Sections 260-262, CrPC, 1973.",
    wrongOptionExplanations: [
      "One month is used in the petty-appeal context under s.376, not in s.260.",
      "Three months is not the threshold under s.260.",
      "One year is not the threshold under s.260.",
      ""
    ],
    flashpoint: "Summary trial (s.260) → imprisonment up to SIX MONTHS or fine up to ₹1,000 by a CJM/First Class Magistrate.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-036", subject: S, topic: "r6", subtopic: "Framing of charge",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which section of the Code of Criminal Procedure, 1973 deals with the framing of a charge in a warrant-case instituted on a police report?",
    options: ["Section 227", "Section 240", "Section 245", "Section 251"],
    correctIndex: 1,
    explanation: "Section 240 deals with the framing of a charge in a warrant-case instituted on a police report. Section 227 concerns discharge in a sessions case, s.245 the acquittal or conviction in a warrant-case instituted otherwise than on a police report, and s.251 the framing of a charge in a summons-case.",
    legalBasis: "Sections 227, 228, 239, 240, 245 and 251, CrPC, 1973.",
    wrongOptionExplanations: ["Section 227 concerns discharge in a sessions trial.", "", "Section 245 concerns the conclusion of a trial of a warrant-case instituted otherwise than on a police report.", "Section 251 concerns the framing of a charge in a summons-case."],
    flashpoint: "Sessions → discharge s.227, charge s.228. Warrant-case on police report → discharge s.239, charge s.240. Summons-case → s.251.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-037", subject: S, topic: "r6", subtopic: "Evidence — power to summon",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which provision of the Code of Criminal Procedure, 1973 empowers a court to summon any person as a witness or to recall and re-examine a person already examined, at any stage of the trial?",
    options: ["Section 309", "Section 319", "Section 313", "Section 311"],
    correctIndex: 3,
    explanation: "Section 311 confers on the court the discretionary power to summon any person as a witness or to recall and re-examine any person already examined if his evidence appears essential to the just decision of the case. Section 313 concerns the examination of the accused and s.319 the power to proceed against other persons appearing to be guilty.",
    legalBasis: "Sections 309, 311, 313 and 319, CrPC, 1973.",
    wrongOptionExplanations: [
      "Section 309 concerns the power to postpone or adjourn proceedings.",
      "Section 319 concerns the power to proceed against other persons appearing to be guilty of the offence.",
      "Section 313 concerns the examination of the accused.",
      ""
    ],
    flashpoint: "CrPC s.311 → summon material witness / recall and re-examine AT ANY STAGE.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-038", subject: S, topic: "r6", subtopic: "Examination of the accused",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The examination of the accused by the court, after the witnesses for the prosecution have been examined and before he is called upon for his defence, is provided by:",
    options: ["Section 311, CrPC", "Section 313, CrPC", "Section 319, CrPC", "Section 306, CrPC"],
    correctIndex: 1,
    explanation: "Section 313 requires the court to examine the accused personally, after the prosecution witnesses have been examined and before the accused is called upon for his defence, for the purpose of enabling him to explain any circumstances appearing in the evidence against him.",
    legalBasis: "Section 313, CrPC, 1973; Section 342 of the older Code.",
    wrongOptionExplanations: ["Section 311 is the power to summon or recall witnesses.", "", "Section 319 is the power to proceed against other persons appearing to be guilty.", "Section 306 concerns tendering a pardon to an accomplice."],
    flashpoint: "CrPC s.313 → personal examination of the accused by the court. NOT to be confused with s.311 or s.319.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-039", subject: S, topic: "r6", subtopic: "Compounding of offences",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is the correct position on the compounding of offences under Section 320 CrPC?",
    options: [
      "Only offences specified in the section are compoundable; some are compoundable without the permission of the court and others only with the permission of the court, and a few categories cannot be compounded at all",
      "Every offence under the Indian Penal Code is compoundable with the permission of the court",
      "Compounding requires the consent of the police only",
      "Compounding is permitted only in offences punishable with death"
    ],
    correctIndex: 0,
    explanation: "Section 320 lists the offences that may be compounded. The section contains a table specifying offences compoundable without the permission of the court, offences compoundable with the permission of the court, and offences that cannot be compounded. Compounding requires the consent of the accused, and a composition results in an acquittal.",
    legalBasis: "Section 320, CrPC, 1973.",
    wrongOptionExplanations: [
      "",
      "Not every offence is compoundable.",
      "Compounding is a matter between the parties and the court, not the police.",
      "Offences punishable with death are never compoundable."
    ],
    flashpoint: "s.320 → only the LISTED offences are compoundable; the effect of composition is ACQUITTAL of the accused.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------ appeals, revision */
  Q({
    id: "CRP-040", subject: S, topic: "r7", subtopic: "No appeal in petty cases",
    difficulty: "Difficult", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A Magistrate of the Second Class convicts an accused and sentences him to one month's simple imprisonment, without imposing any fine. The accused wishes to appeal. Which of the following is correct?",
    options: [
      "No appeal is maintainable, because a sentence of imprisonment not exceeding one month imposed by a Magistrate of the Second Class is a petty case",
      "An appeal lies to the Court of Session",
      "An appeal lies directly to the High Court",
      "An appeal lies to the Court of Session only if a fine was also imposed"
    ],
    correctIndex: 0,
    explanation: "Section 376 bars an appeal in petty cases — where a Magistrate of the Second Class passes a sentence of imprisonment for a term not exceeding one month, or of fine not exceeding two hundred rupees, or of both. A sentence of one month's imprisonment without a fine falls squarely within the bar.",
    legalBasis: "Sections 374 and 376, CrPC, 1973.",
    wrongOptionExplanations: [
      "",
      "Section 376 bars the appeal in this case.",
      "An appeal to the High Court would require the case to be outside the s.376 bar.",
      "The presence of a fine is not the criterion that saves the appeal; the statutory bar covers a one-month sentence without a fine as well."
    ],
    flashpoint: "CrPC s.376 → NO APPEAL for a Second Class Magistrate's sentence of ≤1 month imprisonment, or fine ≤ ₹200, or both.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CRP-041", subject: S, topic: "r7", subtopic: "Appeals — who may appeal",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Code of Criminal Procedure, 1973, which provision empowers the State Government to direct the Public Prosecutor to present an appeal against a sentence on the ground of its inadequacy?",
    options: ["Section 374", "Section 379", "Section 378", "Section 377"],
    correctIndex: 3,
    explanation: "Section 377 provides for appeals by the State Government against a sentence on the ground of its inadequacy. Section 378 provides for an appeal by the complainant in certain cases, and s.379 provides for an appeal against acquittal in certain cases.",
    legalBasis: "Sections 374, 377, 378 and 379, CrPC, 1973.",
    wrongOptionExplanations: [
      "Section 374 provides for appeals from convictions by the person convicted.",
      "Section 379 concerns an appeal against acquittal in certain cases.",
      "Section 378 provides for an appeal in the case of an acquittal in a complaint case, at the instance of the complainant.",
      ""
    ],
    flashpoint: "s.374 convicted person | s.377 State on inadequacy of sentence | s.378 complainant on acquittal | s.379 appeal against acquittal.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-042", subject: S, topic: "r7", subtopic: "Revision and reference",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is the correct description of the revisional power under Section 397 CrPC?",
    options: [
      "The High Court may transfer a case from one court to another",
      "The High Court or the Court of Session may call for and examine the record of any proceeding before an inferior criminal court for the purpose of satisfying itself as to the correctness, legality or propriety of any finding, sentence or order",
      "The Court of Session may grant bail to a person convicted and sentenced to imprisonment for life",
      "The High Court may direct further investigation into an offence"
    ],
    correctIndex: 1,
    explanation: "Section 397 confers revisional jurisdiction on the High Court and the Court of Session to call for and examine the record of any proceeding before an inferior criminal court for the purpose of satisfying itself as to the correctness, legality or propriety of any finding, sentence or order, and as to the regularity of the proceedings.",
    legalBasis: "Sections 397, 401 (powers of revision of the High Court) and 407 (transfer of cases), CrPC, 1973.",
    wrongOptionExplanations: [
      "Transfer of cases is dealt with under ss.406 and 407, not under s.397.",
      "",
      "Bail for a convict is dealt with under s.389.",
      "Further investigation is dealt with under s.173(8) and related provisions."
    ],
    flashpoint: "CrPC s.397 → REVISION for correctness, legality or propriety. s.401 → powers of revision of the High Court.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-043", subject: S, topic: "r7", subtopic: "Inherent powers",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The inherent powers of the High Court to make such orders as may be necessary to give effect to any order under the Code, or to prevent the abuse of the process of any court, or otherwise to secure the ends of justice, are conferred by:",
    options: ["Section 482 CrPC", "Section 401 CrPC", "Section 439 CrPC", "Section 407 CrPC"],
    correctIndex: 0,
    explanation: "Section 482 (corresponding to s.528 of the BNSS) saves the inherent powers of the High Court. The power is to be exercised sparingly and with circumspection, as held in State of Haryana v. Bhajan Lal.",
    legalBasis: "Section 482, CrPC, 1973; State of Haryana v. Bhajan Lal, 1992 Supp (1) SCC 335.",
    wrongOptionExplanations: [
      "",
      "Section 401 confers powers of revision on the High Court but is not the source of inherent powers.",
      "Section 439 concerns special powers regarding bail.",
      "Section 407 concerns the power to transfer cases from one criminal court to another."
    ],
    flashpoint: "CrPC s.482 → INHERENT POWERS of the High Court (BNSS s.528). Used sparingly (Bhajan Lal).",
    source: "STATUTE"
  });

  Q({
    id: "CRP-044", subject: S, topic: "r7", subtopic: "Quashing of FIR",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In State of Haryana v. Bhajan Lal, the Supreme Court laid down categories of cases in which the inherent power to quash an FIR or a criminal proceeding may be exercised. Which of the following is NOT one of those categories?",
    options: [
      "Where the allegations in the FIR do not constitute a cognizable offence",
      "Where the allegations are so absurd and inherently improbable that no prudent person can ever reach a just conclusion that there is sufficient ground for proceeding",
      "Where the criminal proceeding is manifestly attended with mala fide intention or is instituted with an ulterior motive",
      "Where the accused is a first-time offender and has offered to compound the offence"
    ],
    correctIndex: 3,
    explanation: "Bhajan Lal laid down seven categories, including absence of a cognizable offence, absurdity or improbability of the allegations, and mala fide institution of proceedings. Being a first-time offender, or offering to compound, is not a ground for quashing under s.482.",
    legalBasis: "Section 482, CrPC, 1973; State of Haryana v. Bhajan Lal, 1992 Supp (1) SCC 335.",
    wrongOptionExplanations: ["This is the first of the Bhajan Lal categories.", "This is one of the Bhajan Lal categories.", "This is one of the Bhajan Lal categories.", ""],
    flashpoint: "Bhajan Lal categories → NO cognizable offence | absurd and improbable allegations | mala fides/ulterior motive. Being a first-time offender is NOT a ground.",
    source: "CASE"
  });

  /* -------------------------------------------------- preventive, procedural */
  Q({
    id: "CRP-045", subject: S, topic: "r8", subtopic: "Security for keeping the peace",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Section 107 of the Code of Criminal Procedure, 1973 deals with:",
    options: [
      "Compounding of offences",
      "Urgent cases of nuisance or apprehended danger",
      "Security for keeping the peace and for good behaviour",
      "Dispensation of the attendance of a person confined in prison"
    ],
    correctIndex: 2,
    explanation: "Section 107 empowers an Executive Magistrate to require a person likely to commit a breach of the peace or disturb the public tranquillity to show cause why he should not be ordered to execute a bond for keeping the peace. Section 144 concerns urgent cases of nuisance or apprehended danger.",
    legalBasis: "Sections 107, 144 and 320, CrPC, 1973.",
    wrongOptionExplanations: [
      "Compounding of offences is under s.320.",
      "Urgent cases of nuisance are dealt with under s.144.",
      "",
      "Dispensation of attendance is under s.205."
    ],
    flashpoint: "CrPC s.107 → security for keeping the PEACE / good behaviour. s.144 → urgent nuisance / apprehended danger.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-046", subject: S, topic: "r8", subtopic: "Section 144",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "An order under Section 144 CrPC may be passed:",
    options: [
      "Only by the High Court",
      "Only by a Judicial Magistrate of the first class, for an unlimited period",
      "By a District Magistrate, a Sub-divisional Magistrate or any other Executive Magistrate specially empowered by the State Government, in urgent cases of nuisance or apprehended danger, and it remains in force for a maximum of two months",
      "Only during the operation of a Proclamation of Emergency"
    ],
    correctIndex: 2,
    explanation: "Section 144 empowers specified Executive Magistrates to pass an urgent order of a temporary nature in cases of nuisance or apprehended danger, in cases where no other remedy appears reasonably practicable. The order remains in force for a maximum of two months unless withdrawn earlier.",
    legalBasis: "Section 144, CrPC, 1973.",
    wrongOptionExplanations: [
      "The High Court does not pass orders under s.144.",
      "The power is exercisable by Executive Magistrates, not Judicial Magistrates, and is not unlimited in time.",
      "",
      "No emergency Proclamation is required."
    ],
    flashpoint: "s.144 → Executive Magistrate; urgent cases; maximum TWO MONTHS.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-047", subject: S, topic: "r2", subtopic: "Arrest by private person",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 43 CrPC, a private person may arrest another person who in his presence commits a non-bailable and cognizable offence. What must the private person thereafter do?",
    options: [
      "Detain the person in his own custody until the trial concludes",
      "Produce the person directly before the High Court",
      "Release the person on a bond executed before him",
      "Without unnecessary delay, make over the arrested person to a police officer, or take him to the nearest police station, and if there is reason to believe that the person is a police officer, hand him over to his superior officer"
    ],
    correctIndex: 3,
    explanation: "Section 43(1) permits a private person to arrest a person who in his presence commits a non-bailable and cognizable offence or is a proclaimed offender. Section 43(2) requires him to make over the arrested person to a police officer or take him to the nearest police station without unnecessary delay. Section 43(3) requires that where there is reason to believe the person is a police officer, he be handed over to his superior officer.",
    legalBasis: "Section 43, CrPC, 1973.",
    wrongOptionExplanations: [
      "A private person has no power of continued detention.",
      "Production before the High Court directly is not contemplated.",
      "A private person cannot release the arrested person on a bond.",
      ""
    ],
    flashpoint: "s.43 → a PRIVATE PERSON may arrest for a non-bailable and cognizable offence committed in his presence, and must hand the person over without unnecessary delay.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-048", subject: S, topic: "r3", subtopic: "Investigating officer not to investigate",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "An offence of causing simple hurt is committed. The complainant alleges that the police station's Sub-Inspector himself caused the hurt and is registering an FIR against the complainant instead. Which procedural safeguard applies to the investigation?",
    options: [
      "No safeguard applies; any police officer may investigate",
      "Only the High Court may investigate such a case",
      "The officer who is alleged to have committed the offence cannot investigate, and the Magistrate may, under Section 156(3), direct an investigation by a different officer",
      "The investigation must be conducted by a private person"
    ],
    correctIndex: 2,
    explanation: "Section 156(3) of the CrPC empowers a Magistrate empowered under s.190 to order an investigation, and the settled practice is that where the police officer concerned is himself implicated, the investigation must be entrusted to an independent officer or to another agency. A complaint may also be made to the Magistrate.",
    legalBasis: "Sections 156(3) and 157, CrPC, 1973.",
    wrongOptionExplanations: [
      "The Code recognises the need for a fair investigation by an unconnected officer.",
      "The High Court does not investigate offences; it may order an independent investigation in exceptional cases.",
      "",
      "Private persons have no investigative powers."
    ],
    flashpoint: "s.156(3) → a MAGISTRATE may order an investigation; where the local police are implicated, an independent agency/officer must investigate.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-049", subject: S, topic: "r6", subtopic: "Sessions trial — discharge",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 227 CrPC, the Court of Session may discharge the accused if:",
    options: [
      "The accused pleads guilty",
      "The prosecution fails to appear on a single occasion",
      "Upon consideration of the record of the case and the documents submitted and after hearing the submissions of the accused and the prosecution, the court considers that there is not sufficient ground for proceeding against the accused",
      "The offence is compoundable"
    ],
    correctIndex: 2,
    explanation: "Section 227 requires the Sessions Judge to consider the record and the documents and to hear both sides. If the Judge considers that there is no sufficient ground for proceeding against the accused, the accused is discharged; otherwise a charge is framed under s.228.",
    legalBasis: "Sections 227 and 228, CrPC, 1973.",
    wrongOptionExplanations: [
      "A plea of guilty leads to conviction, not discharge.",
      "Non-appearance on one occasion does not warrant discharge.",
      "",
      "Compoundability is relevant to s.320, not to s.227."
    ],
    flashpoint: "Sessions trial → DISCHARGE under s.227 if there is no sufficient ground for proceeding; otherwise CHARGE under s.228.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-050", subject: S, topic: "r7", subtopic: "Suspension of sentence pending appeal",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which provision of the Code of Criminal Procedure, 1973 empowers an appellate court to suspend the execution of a sentence and to release the convicted person on bail pending the appeal?",
    options: ["Section 391", "Section 389", "Section 395", "Section 386"],
    correctIndex: 1,
    explanation: "Section 389 empowers the appellate court to order that the execution of the sentence or order appealed against be suspended and that the appellant be released on bail, pending the appeal.",
    legalBasis: "Sections 386, 389, 391 and 395, CrPC, 1973.",
    wrongOptionExplanations: [
      "Section 391 provides for appellate courts to take further evidence.",
      "",
      "Section 395 is the reference to the High Court.",
      "Section 386 sets out the powers of the appellate court in disposing of an appeal."
    ],
    flashpoint: "CrPC s.389 → SUSPENSION of sentence and release on bail pending appeal.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-051", subject: S, topic: "r5", subtopic: "Maintenance — enforcement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: Section 125 CrPC provides a speedy and summary remedy for maintenance, and Section 128 provides that an order of maintenance may be enforced by the Magistrate in the manner provided for the recovery of fines.\nConclusion I: The fact that a civil remedy for maintenance is available does not bar a proceeding under Section 125 CrPC.\nConclusion II: An order under Section 125 CrPC operates as a bar on any subsequent claim for maintenance in a civil or matrimonial proceeding.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion II follows", "Only Conclusion I follows", "Neither Conclusion I nor II follows"],
    correctIndex: 2,
    explanation: "Conclusion I follows — the summary remedy under s.125 is an additional remedy and does not bar other remedies, though the court may adjust amounts to avoid duplication. Conclusion II does not follow: proceedings under s.125 do not bar a separate civil or matrimonial claim for maintenance.",
    legalBasis: "Sections 125 and 128, CrPC, 1973; Rajnesh v. Neha, (2021) 2 SCC 324.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "Conclusion II is wrong — the remedies are concurrent, though coordinated.", "", "Conclusion I follows."],
    flashpoint: "s.125 → an ADDITIONAL summary remedy; it does not bar other maintenance claims, but amounts may be coordinated (Rajnesh v. Neha).",
    source: "CASE"
  });

  Q({
    id: "CRP-052", subject: S, topic: "r4", subtopic: "Bail — cancellation",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is a ground on which the prosecution may seek cancellation of bail already granted?",
    options: [
      "A mere change of the investigating officer",
      "The filing of a charge-sheet after the grant of bail",
      "Interference with the course of justice, tampering with evidence, threatening witnesses, or the accused's conduct in misusing the liberty granted",
      "The seriousness of the offence alone, without any supervening misconduct"
    ],
    correctIndex: 2,
    explanation: "Bail once granted is not to be cancelled on the ground that the offence is serious or that a charge-sheet has been filed. Cancellation requires supervening circumstances such as interference with the course of justice, tampering with evidence, or the abuse of the liberty granted.",
    legalBasis: "Sections 437(5) and 439(2), CrPC, 1973; Dolat Ram v. State of Haryana, (1995) 1 SCC 349.",
    wrongOptionExplanations: [
      "A change of investigating officer is not a ground.",
      "The filing of a charge-sheet is not by itself a ground for cancellation.",
      "",
      "Seriousness alone, without supervening misconduct, is not a ground for cancelling bail already granted."
    ],
    flashpoint: "Grounds for cancellation → SUPER VENING circumstances (tampering, threats, abuse of liberty). Not mere seriousness.",
    source: "CASE"
  });

  Q({
    id: "CRP-053", subject: S, topic: "r1", subtopic: "Inquiry and trial",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly states the distinction between 'inquiry' and 'trial' under the Code of Criminal Procedure, 1973?",
    options: [
      "An inquiry and a trial are the same thing",
      "An inquiry is every inquiry other than a trial conducted by a Magistrate or court, whereas a trial concludes with either an acquittal or a conviction",
      "A trial precedes the inquiry",
      "An inquiry can be conducted only by the High Court"
    ],
    correctIndex: 1,
    explanation: "Section 2(g) defines an inquiry as every inquiry other than a trial conducted under the Code by a Magistrate or a court. The essential distinction is that a trial culminates in an acquittal or conviction, whereas an inquiry may result in an order short of a conviction or acquittal.",
    legalBasis: "Sections 2(g) and 2(h) (investigation) and 2(o), CrPC, 1973.",
    wrongOptionExplanations: ["The Code distinguishes them expressly.", "", "The inquiry generally precedes the trial.", "An inquiry is conducted by a Magistrate or a court, not only by the High Court."],
    flashpoint: "Inquiry (s.2(g)) → every inquiry OTHER THAN A TRIAL. A trial ends in ACQUITTAL or CONVICTION.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-054", subject: S, topic: "r6", subtopic: "Trial — expeditious disposal",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 309 CrPC, the trial of a sessions case is required to be continued from day to day, and the court is required to:",
    options: [
      "Adjourn the case at the request of the prosecution without any reason",
      "Complete the trial within seven days",
      "Adjourn the case for a minimum of thirty days on every application",
      "Not adjourn the case except for special reasons to be recorded in writing, and where the witnesses are present, to examine them on the same day"
    ],
    correctIndex: 3,
    explanation: "Section 309 requires the proceedings to be held as expeditiously as possible, and in a sessions case, as far as practicable, on a day-to-day basis. Adjournments are to be granted only for special reasons recorded in writing, and where the witnesses are present, the court shall examine them on the same day.",
    legalBasis: "Section 309, CrPC, 1973; Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81 (speedy trial).",
    wrongOptionExplanations: [
      "Adjournments require recorded special reasons.",
      "There is no seven-day completion requirement in s.309.",
      "A minimum thirty-day adjournment certainly is not contemplated.",
      ""
    ],
    flashpoint: "s.309 → day-to-day trial; adjournment only for SPECIAL REASONS RECORDED IN WRITING.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-055", subject: S, topic: "r2", subtopic: "Arrest of a woman",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about the arrest of a woman under the Code of Criminal Procedure, 1973 is correct?",
    options: [
      "A woman may not be arrested after sunset and before sunrise, except in exceptional circumstances with the prior permission of a Judicial Magistrate of the first class within whose local jurisdiction the offence is committed or the arrest is to be made, by a woman police officer making a written report",
      "A woman may be arrested at any time, including after sunset and before sunrise, without any condition",
      "The prior permission of the High Court is required to arrest a woman after sunset",
      "A woman can never be arrested in a cognizable offence"
    ],
    correctIndex: 0,
    explanation: "Section 46(4) prohibits the arrest of a woman after sunset and before sunrise, except where exceptional circumstances exist and the prior permission of a Judicial Magistrate of the first class is obtained by a woman police officer who must make a written report and obtain the Magistrate's permission. A woman cannot be arrested except by a woman police officer in the ordinary case.",
    legalBasis: "Section 46(4), CrPC, 1973; Christian Community Welfare Council of India v. State of Maharashtra, (2003) 8 SCC 546.",
    wrongOptionExplanations: [
      "",
      "The time restriction is express.",
      "The permission required is of a Judicial Magistrate of the first class, not the High Court.",
      "A woman can certainly be arrested in a cognizable offence, subject to the statutory safeguards."
    ],
    flashpoint: "s.46(4) → no arrest of a woman after SUNSET and before SUNRISE except with the PRIOR PERMISSION of a Judicial Magistrate (First Class), by a woman police officer.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-056", subject: S, topic: "r3", subtopic: "Investigation — further investigation",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about further investigation under Section 173(8) CrPC is correct?",
    options: [
      "Further investigation is barred once a charge-sheet is filed",
      "Further investigation can be ordered only by the Supreme Court",
      "Further investigation requires the prior sanction of the High Court",
      "The investigating officer may conduct further investigation in respect of an offence after a report under s.173(2) has been forwarded, and the court may also direct further investigation; further investigation is not barred merely because the trial has commenced"
    ],
    correctIndex: 3,
    explanation: "Section 173(8) permits the officer in charge of a police station to conduct further investigation in respect of an offence after a report under s.173(2) has been forwarded and to send a further report. The Supreme Court in Hasanbhai Valibhai Qureshi v. State of Gujarat held that further investigation is not barred merely because the trial has commenced, though it should not be resorted to in a manner that protracts the trial.",
    legalBasis: "Section 173(8), CrPC, 1973; Hasanbhai Valibhai Qureshi v. State of Gujarat, (2004) 5 SCC 347; Vinubhai Haribhai Malaviya v. State of Gujarat, (2019) 17 SCC 1.",
    wrongOptionExplanations: [
      "s.173(8) expressly permits further investigation after a report is forwarded.",
      "A Magistrate may also direct further investigation; it is not exclusive to the Supreme Court.",
      "No High Court sanction is required.",
      ""
    ],
    flashpoint: "s.173(8) → FURTHER INVESTIGATION permissible even after the charge-sheet, and even after the trial has commenced (Vinubhai Haribhai Malaviya, 2019).",
    source: "CASE"
  });

  Q({
    id: "CRP-057", subject: S, topic: "r8", subtopic: "Compounding — effect",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "What is the effect of a valid composition of an offence under Section 320 CrPC?",
    options: [
      "The accused is convicted and sentenced to a reduced punishment",
      "The accused is acquitted of the offence, and no further proceeding can be taken against him for that offence",
      "The proceedings are merely stayed",
      "The case is transferred to the High Court"
    ],
    correctIndex: 1,
    explanation: "Section 320(8) provides that a composition of an offence shall have the effect of an acquittal of the accused with whom the offence has been compounded, and that no further proceeding shall be taken against him for that offence.",
    legalBasis: "Section 320(8), CrPC, 1973.",
    wrongOptionExplanations: ["Composition does not result in a conviction.", "", "Composition brings the proceedings to an end, not merely a stay.", "No transfer is involved."],
    flashpoint: "Composition under s.320 → effect is ACQUITTAL; no further proceeding for that offence.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-058", subject: S, topic: "r6", subtopic: "Trial — charge",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Assertion-Reason",
    question: "Assertion (A): Every charge must state the offence with which the accused is charged, and if the offence has a name, the charge must state that name.\nReason (R): The accused is entitled to know the precise accusation against him so that he can prepare his defence, and a defective charge may occasion a failure of justice.\nDecide the correct option.",
    options: [
      "(A) is true, but (R) is false",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 2,
    explanation: "Section 211 requires the charge to contain the statement of the offence with its name, if it has one, and the law and section under which it is punishable. The reason explains why: the accused must know the accusation to defend himself, and a material error in the charge may occasion a failure of justice under s.464.",
    legalBasis: "Sections 211 and 464, CrPC, 1973.",
    wrongOptionExplanations: ["(R) is correct.", "The right to know the accusation is precisely the rationale for s.211.", "", "(A) correctly reproduces s.211."],
    flashpoint: "CrPC s.211 → the charge must state the OFFENCE and its NAME and the section. s.464 → a defective charge is not fatal unless there is a FAILURE OF JUSTICE.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-059", subject: S, topic: "r4", subtopic: "Bail — special powers",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which court or courts may exercise the special powers regarding bail under Section 439 CrPC?",
    options: ["Both the High Court and the Court of Session", "The Court of Session only", "The High Court only", "The Supreme Court only"],
    correctIndex: 0,
    explanation: "Section 439 confers special powers on the High Court and the Court of Session to direct that a person be released on bail and to set aside or modify any condition imposed by a Magistrate.",
    legalBasis: "Section 439, CrPC, 1973.",
    wrongOptionExplanations: [
      "",
      "The Court of Session is one of the two courts; not the only one.",
      "The High Court is one of the two courts; not the only one.",
      "The Supreme Court exercises its powers under Article 136 and other provisions, not s.439."
    ],
    flashpoint: "CrPC s.439 → BOTH the HIGH COURT and the COURT OF SESSION.",
    source: "STATUTE"
  });

  Q({
    id: "CRP-060", subject: S, topic: "r3", subtopic: "BNSS innovations — overview",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Multi",
    question: "Which of the following are innovations introduced by the Bharatiya Nagarik Suraksha Sanhita, 2023?\nI. Mandatory audio-video electronic recording of the process of search and seizure.\nII. Statutory recognition of the Zero FIR and provision for information to be given electronically.\nIII. An outer timeline for the pronouncement of judgment after the conclusion of arguments.\nIV. Abolition of the power to grant anticipatory bail.",
    options: ["I, II and III only", "I, II, III and IV", "II and IV only", "I and IV only"],
    correctIndex: 0,
    explanation: "Items I, II and III are BNSS innovations (s.105 recording; Zero FIR and electronic information; the 30/45-day judgment timeline). Anticipatory bail was retained and in fact strengthened — it was not abolished. Item IV is therefore wrong.",
    legalBasis: "BNSS, 2023 (in force 1 July 2024); Bharatiya Nagarik Suraksha Sanhita, s.105 and related provisions.",
    wrongOptionExplanations: ["", "Item IV is wrong — anticipatory bail was retained.", "Item IV is wrong and item I is correct.", "Item IV is wrong."],
    flashpoint: "BNSS innovations → audio-video recording (s.105), Zero FIR/e-FIR, judgment timeline 30/45 days. Anticipatory bail was RETAINED.",
    source: "STATUTE"
  });
})();
