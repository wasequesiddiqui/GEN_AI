/* ============================================================================
 * AIBE XXI — Question Bank: Administrative Law
 * Weightage: 3 / 100 (Set A observed 4 — see AIBE_ANALYSIS.md §3.1). 18 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "admin";

  Q({
    id: "ADM-001", subject: S, topic: "d1", subtopic: "Definition — K.C. Davis",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "'Administrative law is the law concerning the powers and procedures of administrative agencies, including especially the law governing judicial review of administrative action.' This definition was given by:",
    options: ["Ivor Jennings", "K.C. Davis", "A.V. Dicey", "H.W.R. Wade"],
    correctIndex: 1,
    explanation: "The definition quoted is K.C. Davis's. Dicey is associated with the rule of law, Wade with a definition of administrative law as the law relating to the control of governmental power, and Jennings with the view that administrative law is the law relating to the administration.",
    legalBasis: "Standard administrative-law scholarship; K.C. Davis, Administrative Law Text.",
    wrongOptionExplanations: ["Ivor Jennings defined administrative law as the law relating to the administration.", "", "A.V. Dicey formulated the rule of law.", "H.W.R. Wade defined administrative law as the law relating to the control of governmental power."],
    flashpoint: "Administrative law definition ('powers and procedures of administrative agencies... judicial review') → K.C. DAVIS.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADM-002", subject: S, topic: "d1", subtopic: "Rule of law",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly states Dicey's formulation of the rule of law?",
    options: [
      "The supremacy of law, equality before the law, and the predominance of the legal spirit",
      "The separation of powers between the legislature and the executive alone",
      "The supremacy of Parliament in all matters",
      "The independence of the judiciary alone"
    ],
    correctIndex: 0,
    explanation: "Dicey's rule of law has three limbs: the absolute supremacy or predominance of regular law as opposed to the influence of arbitrary power; equality before the law, or the equal subjection of all classes to the ordinary law administered by the ordinary courts; and the predominance of the legal spirit, in the sense that the general principles of the constitution are the result of judicial decisions determining the rights of private persons.",
    legalBasis: "A.V. Dicey, Introduction to the Study of the Law of the Constitution; Articles 14 and 21, Constitution of India.",
    wrongOptionExplanations: ["", "Dicey's formulation is wider than the separation of powers.", "Parliamentary supremacy is a different doctrine.", "Judicial independence is one element, not the whole formulation."],
    flashpoint: "Dicey's rule of law → SUPREMACY OF LAW | EQUALITY BEFORE LAW | PREDOMINANCE OF THE LEGAL SPIRIT.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-003", subject: S, topic: "d1", subtopic: "Roman equivalent of the rule of law",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In Roman jurisprudence, the concept similar to the rule of law was referred to as:",
    options: ["Jus gentium", "Jus naturale", "Lex regia", "Jus civile"],
    correctIndex: 1,
    explanation: "In Roman jurisprudence the concept analogous to the rule of law was expressed as jus naturale — the law of nature, conceived as a body of principles of universal application binding on all persons, including the ruler. Jus gentium was the law of nations, jus civile the law applicable to Roman citizens, and lex regia the law relating to the conferment of power on the emperor.",
    legalBasis: "Roman jurisprudence; comparative administrative law.",
    wrongOptionExplanations: ["Jus gentium is the law of nations, distinct from the natural-law basis of the rule of law.", "", "Lex regia concerned the transfer of power to the emperor.", "Jus civile is the law of Roman citizens."],
    flashpoint: "Roman analogue of the rule of law → JUS NATURALE.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADM-004", subject: S, topic: "d3", subtopic: "Natural justice — Kraipak",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "'The rules of natural justice were not confined to the narrow precincts of the prevailing definition of quasi-judicial functions.' This principle was laid down in:",
    options: ["Ridge v. Baldwin, (1964) AC 40", "Conway v. Rimmer, (1968) AC 910", "Maradana Mosque Trustees v. Mahmud, (1967) (1) AC 13", "A.K. Kraipak v. Union of India, AIR 1970 SC 150"],
    correctIndex: 3,
    explanation: "In A.K. Kraipak v. Union of India the Supreme Court held that the distinction between quasi-judicial and administrative functions had become blurred and that the rules of natural justice are not confined to the narrow precincts of the prevailing definition of quasi-judicial functions. The English counterpart of the development is Ridge v. Baldwin.",
    legalBasis: "A.K. Kraipak v. Union of India, AIR 1970 SC 150; Ridge v. Baldwin, (1964) AC 40.",
    wrongOptionExplanations: ["Ridge v. Baldwin is the English decision that rejected the classification of functions and extended natural justice to administrative action.", "Conway v. Rimmer concerned Crown privilege and the disclosure of documents.", "Maradana Mosque Trustees v. Mahmud concerned natural justice in the context of a refusal of a licence.", ""],
    flashpoint: "Natural justice extends beyond quasi-judicial functions → A.K. KRAPAIP v. UOI, AIR 1970 SC 150 (English counterpart: Ridge v. Baldwin).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADM-005", subject: S, topic: "d3", subtopic: "Principles of natural justice",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The two core principles of natural justice are:",
    options: [
      "Nemo judex in causa sua and audi alteram partem",
      "Res judicata and res sub judice",
      "Volenti non fit injuria and res ipsa loquitur",
      "Ratio decidendi and obiter dictum"
    ],
    correctIndex: 0,
    explanation: "The two core principles are nemo judex in causa sua (no one shall be a judge in his own cause — the rule against bias) and audi alteram partem (hear the other side — the rule of fair hearing).",
    legalBasis: "Principles of natural justice; A.K. Kraipak v. Union of India, AIR 1970 SC 150; Maneka Gandhi v. Union of India, (1978) 1 SCC 248.",
    wrongOptionExplanations: ["", "Res judicata and res sub judice are civil-procedure doctrines.", "Volenti non fit injuria and res ipsa loquitur belong to the law of torts.", "Ratio decidendi and obiter dictum are parts of a judgment."],
    flashpoint: "Natural justice → NEMO JUDEX IN CAUSA SUA (no bias) + AUDI ALTERAM PARTEM (fair hearing).",
    source: "STATUTE"
  });

  Q({
    id: "ADM-006", subject: S, topic: "d4", subtopic: "Grounds of judicial review",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The grounds on which a court may review administrative action are classically stated as:",
    options: [
      "Illegality, irrationality and procedural impropriety",
      "Fraud, misrepresentation and coercion",
      "Illegality, laches and estoppel",
      "Error, delay and non-application of mind"
    ],
    correctIndex: 0,
    explanation: "The three classical grounds of judicial review of administrative action are illegality (acting ultra vires or for an improper purpose), irrationality (Wednesbury unreasonableness), and procedural impropriety (breach of natural justice or of statutory procedure). To these, proportionality has been added in the context of fundamental rights.",
    legalBasis: "Council of Civil Service Unions v. Minister for the Civil Service, (1985) AC 374; Articles 32 and 226, Constitution of India.",
    wrongOptionExplanations: ["", "Fraud, misrepresentation and coercion are grounds in contract law.", "Laches and estoppel are defences rather than grounds of review.", "These are specific defects rather than the classical classification."],
    flashpoint: "Judicial review grounds → ILLEGALITY, IRRATIONALITY, PROCEDURAL IMPROPRIETY.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-007", subject: S, topic: "d4", subtopic: "Wednesbury unreasonableness",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The test of Wednesbury unreasonableness means that a decision may be struck down where:",
    options: [
      "The court disagrees with the decision on the merits",
      "The decision is so unreasonable that no reasonable authority could ever have come to it",
      "The decision has adverse consequences for the petitioner",
      "The decision was taken by an officer below the rank of Secretary"
    ],
    correctIndex: 1,
    explanation: "In Associated Provincial Picture Houses Ltd. v. Wednesbury Corporation the test was stated as whether the decision is so unreasonable that no reasonable authority could ever have come to it. The threshold is high, and the test does not permit the court to substitute its own view of the merits.",
    legalBasis: "Associated Provincial Picture Houses Ltd. v. Wednesbury Corporation, (1948) 1 KB 223.",
    wrongOptionExplanations: ["The court does not sit in appeal on the merits.", "", "Adverse consequences alone do not make a decision unreasonable.", "The rank of the officer is not the test."],
    flashpoint: "WEDNESBURY (1948) 1 KB 223 → a decision SO UNREASONABLE that NO REASONABLE AUTHORITY could have reached it.",
    source: "CASE"
  });

  Q({
    id: "ADM-008", subject: S, topic: "d6", subtopic: "Ombudsman — first recommendation",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The adoption of an Ombudsman-type institution in India was first recommended by:",
    options: [
      "The Administrative Reforms Commission, 2005",
      "The Santhanam Committee, 1964",
      "The Administrative Reforms Commission, 1966",
      "The India Against Corruption movement, 2011"
    ],
    correctIndex: 1,
    explanation: "The Santhanam Committee on Prevention of Corruption (1964) recommended the adoption of an Ombudsman-type institution in India. The Administrative Reforms Commission of 1966 subsequently recommended a two-tier machinery of Lokpal at the Centre and Lokayukta in the States. The Lokpal and Lokayuktas Act, 2013 gave statutory effect to the institution.",
    legalBasis: "Santhanam Committee Report (1964); Administrative Reforms Commission Report (1966); Lokpal and Lokayuktas Act, 2013.",
    wrongOptionExplanations: ["The Administrative Reforms Commission of 2005 is not the body that first recommended the institution.", "", "The 1966 Commission built on the Santhanam Committee's recommendation.", "The India Against Corruption movement of 2011 postdates the recommendation by decades."],
    flashpoint: "Ombudsman first recommended by the SANTHANAM COMMITTEE (1964); two-tier Lokpal/Lokayukta by the ARC (1966); statute: Lokpal and Lokayuktas Act 2013.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADM-009", subject: S, topic: "d2", subtopic: "Delegated legislation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is a recognised ground for holding delegated legislation invalid?",
    options: [
      "That the parent Act does not itself contain detailed rules",
      "Excessive delegation of an essential legislative function, or a violation of the parent Act or of the Constitution",
      "That the rules were framed by the executive rather than by the legislature",
      "That the rules were not approved by the Supreme Court"
    ],
    correctIndex: 1,
    explanation: "Delegated legislation may be struck down for (i) excessive delegation — the legislature must lay down the policy and cannot delegate its essential legislative function; (ii) violation of the parent Act or of the Constitution; (iii) sub-delegation of a power that cannot be sub-delegated; and (iv) procedural non-compliance, such as failure to comply with a mandatory laying requirement.",
    legalBasis: "Articles 245 and 246, Constitution of India; In re Delhi Laws Act, AIR 1951 SC 332; Hamdard Dawakhana v. Union of India, AIR 1960 SC 554.",
    wrongOptionExplanations: ["Delegated legislation is legitimate where the parent Act lays down the policy and guidelines.", "", "Framing by the executive is of the essence of delegated legislation.", "Approval by the Supreme Court is not a requirement."],
    flashpoint: "Delegated legislation → invalid for EXCESSIVE DELEGATION of the ESSENTIAL LEGISLATIVE FUNCTION, or for violating the parent Act/Constitution.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-010", subject: S, topic: "d5", subtopic: "Writ — quo warranto",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The writ of quo warranto is issued to:",
    options: [
      "Compel the performance of a public duty",
      "Quash an order already passed by a quasi-judicial authority",
      "Enquire into the legality of a claim by a person to hold a public office, requiring him to show by what authority he holds that office",
      "Stop proceedings that are continuing before a tribunal"
    ],
    correctIndex: 2,
    explanation: "Quo warranto requires the holder of a public office to show by what authority he holds that office. It is available to any person, not merely to an aggrieved party, and lies where the office is public and of a substantive character, created by statute or the Constitution.",
    legalBasis: "Articles 32 and 226, Constitution of India; University of Mysore v. C.D. Govinda Rao, AIR 1965 SC 491.",
    wrongOptionExplanations: ["Commanding performance of a public duty is the function of mandamus.", "Quashing an order is the function of certiorari.", "", "Stopping continuing proceedings is the function of prohibition."],
    flashpoint: "QUO WARRANTO → 'by what authority' — questions the legality of holding a PUBLIC OFFICE.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-011", subject: S, topic: "d5", subtopic: "Writ — prohibition and certiorari",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly distinguishes prohibition from certiorari?",
    options: [
      "Prohibition is preventive and is issued while proceedings are pending, whereas certiorari is issued after the order has been passed and quashes it",
      "Certiorari is preventive and prohibition is remedial",
      "Both are issued only after the final order",
      "There is no distinction between the two writs"
    ],
    correctIndex: 0,
    explanation: "Prohibition issues before the proceedings are concluded, to prevent an excess or abuse of jurisdiction. Certiorari issues after the order has been passed, to quash it. The two writs are complementary — prohibition is preventive, certiorari is remedial.",
    legalBasis: "Articles 32, 226 and 227, Constitution of India.",
    wrongOptionExplanations: ["", "The description is the reverse of the correct position.", "Prohibition is issued while proceedings are pending.", "The two writs serve different purposes."],
    flashpoint: "PROHIBITION → PREVENTIVE, issued while proceedings are pending. CERTIORARI → REMEDIAL, quashes an order already passed.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-012", subject: S, topic: "d3", subtopic: "Exclusion of natural justice",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is a recognised circumstance in which the requirements of natural justice may be excluded or reduced?",
    options: [
      "Whenever the authority considers it convenient",
      "Urgency, confidentiality, public interest, or where no right of the person is affected, or where the statute excludes the requirements expressly or by necessary implication",
      "Only during a Proclamation of Emergency",
      "Only where the person affected belongs to a foreign country"
    ],
    correctIndex: 1,
    explanation: "The requirements of natural justice may be excluded by statute expressly or by necessary implication, or in circumstances of urgency, confidentiality, public interest or where no right of the affected person is involved. The doctrine of necessity may also permit a person otherwise disqualified by bias to act where no other authority is competent to decide.",
    legalBasis: "Principles of natural justice; A.K. Kraipak v. Union of India, AIR 1970 SC 150; Maneka Gandhi v. Union of India, (1978) 1 SCC 248.",
    wrongOptionExplanations: ["Convenience of the authority is not a recognised ground.", "", "An emergency Proclamation is not a precondition for exclusion.", "Nationality is not the test."],
    flashpoint: "Natural justice may be excluded for URGENCY, CONFIDENTIALITY, PUBLIC INTEREST, no right affected, or by STATUTORY EXCLUSION.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-013", subject: S, topic: "d3", subtopic: "Audi alteram partem — content",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The content of the rule of audi alteram partem includes:",
    options: [
      "Only the right to be heard orally",
      "Notice of the case to be met, a fair opportunity to be heard, an opportunity to rebut the evidence relied upon, and ordinarily a reasoned decision",
      "Only the right to file a written representation",
      "Only the right to be represented by an advocate"
    ],
    correctIndex: 1,
    explanation: "The rule requires that the person affected be given notice of the case he has to meet, a fair and reasonable opportunity of being heard, disclosure of and an opportunity to rebut the material relied upon against him, and ordinarily a reasoned decision. The requirements are flexible and are moulded to the facts and the statutory framework.",
    legalBasis: "Principles of natural justice; Mohinder Singh Gill v. Chief Election Commissioner, (1978) 1 SCC 405.",
    wrongOptionExplanations: ["Oral hearing is not always required.", "", "A written representation alone is not the content of the rule.", "Representation by an advocate is not an invariable element."],
    flashpoint: "AUDI ALTERAM PARTEM → NOTICE + fair OPPORTUNITY to be heard + opportunity to REBUT the material + REASONS.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-014", subject: S, topic: "d3", subtopic: "Rule against bias",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is a recognised category of bias in administrative decision-making?",
    options: [
      "Pecuniary bias, personal bias, subject-matter bias and departmental or official bias",
      "Only pecuniary bias",
      "Only personal bias",
      "Bias is not recognised in administrative law"
    ],
    correctIndex: 0,
    explanation: "The recognised categories of bias include pecuniary bias (a direct or indirect financial interest), personal bias (a relationship or animosity towards a party), subject-matter bias (a predisposition on the question in issue), and departmental or official bias (a tendency to favour the department to which the decision-maker belongs).",
    legalBasis: "Principles of natural justice; A.K. Kraipak v. Union of India, AIR 1970 SC 150; Mineral Development Ltd. v. State of Bihar, AIR 1960 SC 468.",
    wrongOptionExplanations: ["", "Pecuniary bias is one category among several.", "Personal bias is one category among several.", "Bias is a central ground for challenging administrative action."],
    flashpoint: "Bias categories → PECUNIARY | PERSONAL | SUBJECT-MATTER | DEPARTMENTAL/OFFICIAL.",
    source: "STATUTE"
  });

  Q({
    id: "ADM-015", subject: S, topic: "d7", subtopic: "Tribunals and judicial review",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In L. Chandra Kumar v. Union of India, the Supreme Court held that:",
    options: [
      "Tribunals may exclude the jurisdiction of the High Courts under Articles 226 and 227",
      "The power of judicial review vested in the High Courts under Articles 226 and 227 and in the Supreme Court under Article 32 is part of the basic structure of the Constitution, and tribunals cannot exclude the jurisdiction of the High Courts under Articles 226 and 227",
      "Only the Supreme Court may entertain a challenge to the decision of a tribunal",
      "Tribunals are superior to the High Courts"
    ],
    correctIndex: 1,
    explanation: "L. Chandra Kumar v. Union of India held that judicial review under Articles 226/227 and 32 is part of the basic structure of the Constitution, and that while tribunals may perform a supplemental role, their decisions are subject to the scrutiny of the High Court under Articles 226 and 227 and of the Supreme Court under Article 32. The Court struck down the provision excluding the jurisdiction of the High Courts.",
    legalBasis: "Articles 32, 226, 227, 323A and 323B, Constitution of India; L. Chandra Kumar v. Union of India, (1997) 3 SCC 261.",
    wrongOptionExplanations: ["The Court held precisely the contrary.", "", "The High Courts retain supervisory jurisdiction.", "Tribunals are not superior to the High Courts; they are subject to judicial review."],
    flashpoint: "Judicial review under Articles 226/227 and 32 → BASIC STRUCTURE; tribunals CANNOT exclude the High Court's jurisdiction (L. Chandra Kumar, 1997).",
    source: "CASE"
  });

  Q({
    id: "ADM-016", subject: S, topic: "d4", subtopic: "Proportionality",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The doctrine of proportionality in administrative law requires that:",
    options: [
      "The administrative action must be the only possible action available",
      "The administrative action must be proportionate to the object sought to be achieved, and the means adopted must not be more restrictive than necessary",
      "The administrative action must be approved by the legislature",
      "The administrative action must be unanimous"
    ],
    correctIndex: 1,
    explanation: "Proportionality requires that the administrative measure be suitable for achieving the objective, necessary in the sense that no less restrictive alternative is available, and proportionate in the narrow sense — i.e., the benefits must outweigh the burdens imposed. It has been applied with greatest force in cases involving fundamental rights (Puttaswamy; Modern Dental College).",
    legalBasis: "Modern Dental College & Research Centre v. State of M.P., (2016) 7 SCC 353; Justice K.S. Puttaswamy (Retd.) v. Union of India, (2017) 10 SCC 1.",
    wrongOptionExplanations: ["The requirement is not that the action be the only possible one.", "", "Legislative approval is not part of the proportionality inquiry.", "Unanimity is not a requirement."],
    flashpoint: "PROPORTIONALITY → SUITABLE + NECESSARY (least restrictive) + proportionate in the NARROW sense.",
    source: "CASE"
  });

  Q({
    id: "ADM-017", subject: S, topic: "d2", subtopic: "Conditional legislation",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "What is 'conditional legislation'?",
    options: [
      "Legislation that comes into force subject to a condition, such as the determination of the date of commencement or the extension of the Act to a particular area by the executive, where the legislature has laid down the policy completely",
      "Legislation that has been struck down by the court conditionally",
      "Legislation that is valid only for a limited period",
      "Legislation that requires the consent of the President"
    ],
    correctIndex: 0,
    explanation: "Conditional legislation occurs where the legislature enacts a complete law and leaves it to the executive merely to bring it into operation or to extend its application to specified areas or classes, the power being conditional upon the existence of the state of facts to which the legislature has attached the commencement or extension. It is distinguished from delegated legislation, where the executive is empowered to make rules.",
    legalBasis: "In re Delhi Laws Act, AIR 1951 SC 332; Hamdard Dawakhana v. Union of India, AIR 1960 SC 554.",
    wrongOptionExplanations: ["", "That is not what conditional legislation means.", "Temporary legislation is a different concept.", "Presidential assent is a stage of ordinary law-making."],
    flashpoint: "CONDITIONAL legislation → the legislature lays down the policy and leaves it to the executive to bring it into force or to extend its application.",
    source: "CASE"
  });

  Q({
    id: "ADM-018", subject: S, topic: "d8", subtopic: "Scholars and their definitions",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Which of the following pairings of scholar and contribution is correct?",
    options: [
      "A.V. Dicey — the rule of law",
      "H.W.R. Wade — the rule of law",
      "Ivor Jennings — the rule of law",
      "K.C. Davis — the rule of law"
    ],
    correctIndex: 0,
    explanation: "A.V. Dicey formulated the rule of law. H.W.R. Wade defined administrative law as the law relating to the control of governmental power. Ivor Jennings defined administrative law as the law relating to administration. K.C. Davis framed the definition of administrative law in terms of the powers and procedures of administrative agencies and judicial review.",
    legalBasis: "Standard administrative-law scholarship.",
    wrongOptionExplanations: ["", "Wade is associated with the definition of administrative law in terms of the control of governmental power, not with the rule of law.", "Jennings is associated with the definition of administrative law as the law relating to administration.", "K.C. Davis is associated with the definition of administrative law in terms of the powers and procedures of administrative agencies."],
    flashpoint: "RULE OF LAW → DICEY. Administrative law definitions → K.C. DAVIS, IVOR JENNINGS, H.W.R. WADE.",
    source: "STATUTE"
  });
})();
