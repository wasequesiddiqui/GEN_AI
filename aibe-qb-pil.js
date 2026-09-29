/* ============================================================================
 * AIBE XXI — Question Bank: Public Interest Litigation
 * Weightage: 4 / 100. 24 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "pil";

  Q({
    id: "PIL-001", subject: S, topic: "i1", subtopic: "Origin of the expression",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The term 'Public Interest Litigation' was first used by:",
    options: ["Justice P.N. Bhagwati", "Justice V.R. Krishna Iyer", "Prof. Abram Chayes", "Prof. Upendra Baxi"],
    correctIndex: 2,
    explanation: "The expression 'Public Interest Litigation' was first used by Prof. Abram Chayes of Harvard Law School in the 1970s, in the context of the United States. In India the jurisdiction was developed by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer, and Prof. Upendra Baxi has written extensively on the subject — but the expression itself originated with Prof. Chayes.",
    legalBasis: "Comparative constitutional law; PIL jurisprudence; S.P. Gupta v. Union of India, 1981 Supp SCC 87.",
    wrongOptionExplanations: [
      "Justice P.N. Bhagwati developed and championed PIL in India but did not coin the expression.",
      "Justice V.R. Krishna Iyer was another leading architect of Indian PIL.",
      "",
      "Prof. Upendra Baxi is a leading Indian scholar on the subject; the expression is not attributed to him."
    ],
    flashpoint: "The expression 'PIL' was FIRST USED by PROF. ABRAM CHAYES (Harvard). In India it was developed by Justices BHAGWATI and KRISHNA IYER.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "PIL-002", subject: S, topic: "i2", subtopic: "Relaxation of locus standi",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The relaxation of the traditional rule of locus standi, permitting a public-spirited individual to approach the court for the enforcement of the fundamental rights of others, was recognised in:",
    options: [
      "Jasbhai Motibhai Desai v. Roshan Kumar Haji Bashir Ahmed, (1976) 1 SCC 671",
      "S.P. Gupta v. Union of India, 1981 Supp SCC 87",
      "A.K. Gopalan v. State of Madras, AIR 1950 SC 27",
      "Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225"
    ],
    correctIndex: 1,
    explanation: "In S.P. Gupta v. Union of India the Supreme Court held that any member of the public acting bona fide and having sufficient interest in the proceedings may move the court for the enforcement of the fundamental rights of a class of persons who cannot approach the court themselves. This decision is the classic exposition of the relaxation of locus standi and the foundation of PIL practice in India.",
    legalBasis: "Articles 32 and 226, Constitution of India; S.P. Gupta v. Union of India, 1981 Supp SCC 87.",
    wrongOptionExplanations: [
      "Jasbhai Motibhai Desai represents the stricter pre-PIL position on standing.",
      "",
      "A.K. Gopalan concerned Articles 19, 21 and 22 and preventive detention.",
      "Kesavananda Bharati laid down the basic structure doctrine."
    ],
    flashpoint: "Locus standi relaxation → S.P. GUPTA v. Union of India, 1981 Supp SCC 87.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "PIL-003", subject: S, topic: "i2", subtopic: "Traditional rule of standing",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the traditional rule of locus standi, the right to move a court for relief was available to:",
    options: [
      "A person whose own legal right or legally protected interest had been infringed",
      "Any person who read about the violation of a legal right in a newspaper",
      "Any taxpayer",
      "Any registered social action group"
    ],
    correctIndex: 0,
    explanation: "The traditional rule confined standing to a person whose own legal right or legally protected interest was infringed — a person 'aggrieved'. PIL relaxed that requirement so that a public-spirited person could move the court on behalf of those who could not approach it.",
    legalBasis: "Article 32 and Article 226, Constitution of India; Jasbhai Motibhai Desai v. Roshan Kumar Haji Bashir Ahmed, (1976) 1 SCC 671; BALCO Employees Union v. Union of India, (2002) 2 SCC 333.",
    wrongOptionExplanations: [
      "",
      "Mere knowledge of a violation did not confer standing under the traditional rule.",
      "Taxpayer standing is a specific development, not the traditional rule.",
      "Social action groups gained standing through the PIL jurisdiction."
    ],
    flashpoint: "Traditional rule → only a PERSON AGGRIEVED had standing. PIL RELAXED this.",
    source: "STATUTE"
  });

  Q({
    id: "PIL-004", subject: S, topic: "i3", subtopic: "Epistolary jurisdiction",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The practice of treating a letter addressed to the court as a writ petition is known as:",
    options: ["Original jurisdiction", "Advisory jurisdiction", "Epistolary jurisdiction", "Appellate jurisdiction"],
    correctIndex: 2,
    explanation: "The Supreme Court's practice of treating letters, postcards and newspaper reports as writ petitions is described as epistolary jurisdiction. Sunil Batra v. Delhi Administration (a letter from a prisoner) and Bandhua Mukti Morcha v. Union of India are among the cases in which the Court acted upon a letter.",
    legalBasis: "Article 32, Constitution of India; Sunil Batra v. Delhi Administration, (1978) 4 SCC 494; Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161.",
    wrongOptionExplanations: [
      "Original jurisdiction refers to the forum in which a proceeding is first instituted.",
      "Advisory jurisdiction is that under Article 143.",
      "",
      "Appellate jurisdiction concerns appeals."
    ],
    flashpoint: "EPISTOLARY JURISDICTION → a LETTER to the court may be treated as a WRIT PETITION.",
    source: "CASE"
  });

  Q({
    id: "PIL-005", subject: S, topic: "i4", subtopic: "PIL and Article 21",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Bonded labour and the right to live with human dignity, enforced through PIL, were dealt with in:",
    options: [
      "Subhash Kumar v. State of Bihar, (1991) 1 SCC 598",
      "Vishaka v. State of Rajasthan, (1997) 6 SCC 241",
      "M.C. Mehta v. Union of India, (1987) 1 SCC 395",
      "Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161"
    ],
    correctIndex: 3,
    explanation: "Bandhua Mukti Morcha v. Union of India is the leading PIL decision on bonded labour. The Supreme Court, acting on a letter, examined the conditions of bonded labourers and held that the right to live with human dignity, free from exploitation, flows from Articles 21 and 23 read with the directive principles.",
    legalBasis: "Articles 21 and 23, Constitution of India; Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161.",
    wrongOptionExplanations: [
      "Subhash Kumar recognised the right to a clean environment as part of Article 21.",
      "Vishaka laid down guidelines on sexual harassment at the workplace.",
      "M.C. Mehta (1987) 1 SCC 395 established absolute liability for hazardous enterprises.",
      ""
    ],
    flashpoint: "Bonded labour PIL → BANDHUA MUKTI MORCHA v. UOI (1984) 3 SCC 161 (Articles 21 and 23).",
    source: "CASE"
  });

  Q({
    id: "PIL-006", subject: S, topic: "i4", subtopic: "PIL and workplace harassment",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The Supreme Court laid down guidelines on sexual harassment at the workplace, to be observed as law until suitable legislation was enacted, in:",
    options: [
      "Both Vishaka and Medha Kotwal Lele",
      "Apparel Export Promotion Council v. A.K. Chopra, (1999) 1 SCC 759",
      "Medha Kotwal Lele v. Union of India, (2013) 1 SCC 297",
      "Vishaka v. State of Rajasthan, (1997) 6 SCC 241"
    ],
    correctIndex: 3,
    explanation: "Vishaka v. State of Rajasthan laid down the guidelines to be followed at the workplace, relying on the Convention on the Elimination of All Forms of Discrimination against Women and Articles 14, 15, 19(1)(g) and 21 of the Constitution. The guidelines operated until the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 was enacted.",
    legalBasis: "Articles 14, 15, 19(1)(g) and 21, Constitution of India; Vishaka v. State of Rajasthan, (1997) 6 SCC 241.",
    wrongOptionExplanations: [
      "The guidelines originate in Vishaka.",
      "Apparel Export Promotion Council applied the Vishaka guidelines to the facts of an individual case.",
      "Medha Kotwal Lele monitored the implementation of the Vishaka guidelines, but the guidelines were laid down in Vishaka.",
      ""
    ],
    flashpoint: "Vishaka v. State of Rajasthan (1997) 6 SCC 241 → SEXUAL HARASSMENT AT THE WORKPLACE guidelines under Article 32.",
    source: "CASE"
  });

  Q({
    id: "PIL-007", subject: S, topic: "i4", subtopic: "Absolute liability through PIL",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The principle of absolute liability of enterprises engaged in hazardous or inherently dangerous activities, developed in a PIL, was laid down in:",
    options: [
      "Rylands v. Fletcher, (1868) LR 3 HL 330",
      "Vellore Citizens' Welfare Forum v. Union of India, (1996) 5 SCC 647",
      "M.C. Mehta v. Union of India, (1987) 1 SCC 395",
      "Indian Council for Enviro-Legal Action v. Union of India, (1996) 3 SCC 212"
    ],
    correctIndex: 2,
    explanation: "In M.C. Mehta v. Union of India (the Oleum Gas Leak case) the Supreme Court held that an enterprise engaged in a hazardous or inherently dangerous activity owes an absolute and non-delegable duty to the community, and that where harm results the enterprise is absolutely liable, without any of the exceptions available under Rylands v. Fletcher.",
    legalBasis: "Article 21 and Article 32, Constitution of India; M.C. Mehta v. Union of India, (1987) 1 SCC 395; Rylands v. Fletcher, (1868) LR 3 HL 330.",
    wrongOptionExplanations: [
      "Rylands v. Fletcher established STRICT liability, with exceptions — the Indian court went further to ABSOLUTE liability.",
      "Vellore Citizens' Welfare Forum recognised the precautionary and polluter-pays principles.",
      "",
      "Indian Council for Enviro-Legal Action dealt with the remediation of polluted land and the polluter-pays principle."
    ],
    flashpoint: "ABSOLUTE liability, no exceptions → M.C. MEHTA v. UOI (1987) 1 SCC 395 (Oleum Gas Leak).",
    source: "CASE"
  });

  Q({
    id: "PIL-008", subject: S, topic: "i4", subtopic: "Abuse of PIL",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Guidelines for the prevention of the abuse of PIL, requiring the court to be satisfied of the bona fides of the petitioner and the existence of a genuine public interest, were laid down in:",
    options: [
      "Janata Dal v. H.S. Chowdhary, (1992) 4 SCC 305",
      "S.P. Gupta v. Union of India, 1981 Supp SCC 87",
      "Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161",
      "State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402"
    ],
    correctIndex: 3,
    explanation: "In State of Uttaranchal v. Balwant Singh Chaufal the Supreme Court laid down comprehensive guidelines to preserve the purity and sanctity of PIL, to prevent its abuse, and to ensure that the court is satisfied about the bona fides of the petitioner and the existence of a genuine public interest. The Court also directed that courts should impose exemplary costs on persons filing frivolous PILs.",
    legalBasis: "Articles 32 and 226, Constitution of India; State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402.",
    wrongOptionExplanations: [
      "Janata Dal v. H.S. Chowdhary discussed the scope of PIL and the need for caution, but the consolidated guidelines are from Balwant Singh Chaufal.",
      "S.P. Gupta established the relaxation of locus standi.",
      "Bandhua Mukti Morcha is a PIL on bonded labour.",
      ""
    ],
    flashpoint: "PIL abuse → guidelines in STATE OF UTTARANCHAL v. BALWANT SINGH CHAUFAL (2010) 3 SCC 402.",
    source: "CASE"
  });

  Q({
    id: "PIL-009", subject: S, topic: "i1", subtopic: "PIL — concept",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following best describes Public Interest Litigation?",
    options: [
      "Litigation instituted by the Government for the enforcement of public rights",
      "Litigation instituted in a court of law for the enforcement of a public interest, where the traditional rule of standing is relaxed so that a public-spirited person may approach the court on behalf of those who cannot do so themselves",
      "Any litigation in which a large number of persons are parties",
      "Litigation conducted free of cost"
    ],
    correctIndex: 1,
    explanation: "PIL is litigation in the interest of the public at large, where the traditional requirement of personal aggrievement is relaxed so that a public-spirited individual or a social action group can invoke the writ jurisdiction on behalf of a class of persons who cannot approach the court. It is not confined to the Government as petitioner, nor is it defined by the number of parties or by the absence of fees.",
    legalBasis: "Articles 32 and 226, Constitution of India; S.P. Gupta v. Union of India, 1981 Supp SCC 87.",
    wrongOptionExplanations: ["A PIL may be filed by any public-spirited person, not only by the Government.", "", "The number of parties is not the defining feature.", "Free legal aid is a distinct concept under Article 39A and the Legal Services Authorities Act, 1987."],
    flashpoint: "PIL = PUBLIC INTEREST + RELAXED STANDING. Not defined by the number of parties or by cost.",
    source: "STATUTE"
  });

  Q({
    id: "PIL-010", subject: S, topic: "i4", subtopic: "Continuing mandamus",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The technique of 'continuing mandamus', by which the Supreme Court monitors compliance with its orders over a period of time, has been used prominently in:",
    options: [
      "Bail applications",
      "Environmental and forest-related PILs, such as the T.N. Godavarman Thirumulpad line of cases",
      "Matrimonial disputes",
      "Income-tax appeals"
    ],
    correctIndex: 1,
    explanation: "The continuing mandamus is a technique developed in PIL jurisdiction by which the court keeps a matter pending and issues directions from time to time to ensure compliance, monitoring the implementation of its orders. It has been used extensively in environmental and forest matters, notably in the T.N. Godavarman Thirumulpad v. Union of India line of cases concerning the protection of forests.",
    legalBasis: "Articles 32 and 226, Constitution of India; T.N. Godavarman Thirumulpad v. Union of India, (1997) 2 SCC 267 and subsequent orders.",
    wrongOptionExplanations: [
      "Bail applications are decided on the statutory criteria under the CrPC.",
      "",
      "Matrimonial disputes are governed by personal-law statutes and the Family Courts Act, 1984.",
      "Tax appeals follow the statutory appellate machinery."
    ],
    flashpoint: "CONTINUING MANDAMUS → the court MONITORS over time; used mainly in ENVIRONMENTAL/FOREST PILs (Godavarman).",
    source: "CASE"
  });

  Q({
    id: "PIL-011", subject: S, topic: "i2", subtopic: "PIL — who may file",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A journalist reads a newspaper report about the deplorable conditions in a government-run shelter home and files a petition before the High Court seeking directions for improvement. The affected inmates are illiterate and cannot approach the court. What is the correct position?",
    options: [
      "The petition is maintainable as a PIL, since a public-spirited person may approach the court on behalf of persons who cannot do so themselves, and the court may also act on the basis of a newspaper report",
      "The petition is not maintainable because the journalist is not personally aggrieved",
      "The petition is maintainable only if the journalist is appointed as a next friend by a court order",
      "The petition is maintainable only before the Supreme Court"
    ],
    correctIndex: 0,
    explanation: "The relaxation of locus standi permits a public-spirited individual with sufficient interest to move the court on behalf of persons who are unable to approach it themselves. Courts have also acted on the basis of newspaper reports and letters. Such a petition may be filed before the High Court under Article 226 or the Supreme Court under Article 32.",
    legalBasis: "Articles 32 and 226, Constitution of India; S.P. Gupta v. Union of India, 1981 Supp SCC 87; Sunil Batra v. Delhi Administration, (1978) 4 SCC 494.",
    wrongOptionExplanations: [
      "",
      "Personal aggrievement is precisely what PIL relaxes.",
      "A formal order appointing a next friend is not a precondition.",
      "A PIL may be filed before the High Court under Article 226 as well."
    ],
    flashpoint: "PIL → a public-spirited person may sue for others; a NEWSPAPER REPORT may trigger the court's action.",
    source: "CASE"
  });

  Q({
    id: "PIL-012", subject: S, topic: "i3", subtopic: "PIL — relief",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about the relief that may be granted in a PIL is correct?",
    options: [
      "The court may grant any relief it considers appropriate, including the issue of directions to the executive, the framing of guidelines, the appointment of a committee, and compensation to the affected persons",
      "The court may only issue a declaratory order",
      "The court may only quash an administrative order",
      "The court may not issue directions to the executive"
    ],
    correctIndex: 0,
    explanation: "In PIL jurisdiction courts have issued directions to the executive, framed guidelines to fill a legislative vacuum (Vishaka), appointed committees and commissioners to investigate and monitor (Bandhua Mukti Morcha), awarded compensation and ordered rehabilitation, and retained matters for monitoring through continuing mandamus. The relief is moulded to the needs of the case.",
    legalBasis: "Articles 32, 141 and 142, Constitution of India; Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161; Vishaka v. State of Rajasthan, (1997) 6 SCC 241.",
    wrongOptionExplanations: ["", "The relief is not confined to a declaratory order.", "More than quashing is available.", "Directions to the executive are a standard PIL remedy."],
    flashpoint: "PIL remedies → DIRECTIONS, GUIDELINES, COMMITTEES, COMPENSATION, CONTINUING MANDAMUS.",
    source: "CASE"
  });

  Q({
    id: "PIL-013", subject: S, topic: "i4", subtopic: "PIL — environmental",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The 'polluter pays' principle and the 'precautionary' principle, recognised as part of the law of the land, were authoritatively laid down in:",
    options: [
      "Subhash Kumar v. State of Bihar, (1991) 1 SCC 598",
      "Vellore Citizens' Welfare Forum v. Union of India, (1996) 5 SCC 647",
      "M.C. Mehta v. Union of India, (1987) 1 SCC 395",
      "A.P. Pollution Control Board v. Prof. M.V. Nayudu, (1999) 2 SCC 718"
    ],
    correctIndex: 1,
    explanation: "In Vellore Citizens' Welfare Forum v. Union of India the Supreme Court held that the precautionary principle and the polluter-pays principle are part of the law of the land, and sustained the constitutional validity of the Environment (Protection) Act, 1986. A.P. Pollution Control Board v. Prof. M.V. Nayudu later elaborated on these principles, but the authoritative statement is in Vellore Citizens.",
    legalBasis: "Article 21 and Article 253, Constitution of India; Environment (Protection) Act, 1986; Vellore Citizens' Welfare Forum v. Union of India, (1996) 5 SCC 647.",
    wrongOptionExplanations: [
      "Subhash Kumar recognised the right to a clean environment as part of Article 21.",
      "",
      "M.C. Mehta (1987) 1 SCC 395 established absolute liability and upheld the EP Act 1986.",
      "A.P. Pollution Control Board v. M.V. Nayudu elaborated the principles and discussed the burden of proof."
    ],
    flashpoint: "Precautionary principle + polluter pays → VELLORE CITIZENS' WELFARE FORUM (1996) 5 SCC 647.",
    source: "CASE"
  });

  Q({
    id: "PIL-014", subject: S, topic: "i4", subtopic: "PIL and prison reform",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A letter from a prisoner to a judge of the Supreme Court complaining of ill-treatment in jail was treated as a writ petition in:",
    options: [
      "Sunil Batra v. Delhi Administration, (1978) 4 SCC 494",
      "Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81",
      "Prem Shankar Shukla v. Delhi Administration, (1980) 3 SCC 526",
      "D.K. Basu v. State of West Bengal, (1997) 1 SCC 416"
    ],
    correctIndex: 0,
    explanation: "In Sunil Batra v. Delhi Administration a letter written by a prisoner to Justice V.R. Krishna Iyer was treated as a writ petition. The Court examined prison conditions, the use of bar fetters and the rights of prisoners, and held that prisoners retain the fundamental rights that are not taken away by the deprivation of liberty.",
    legalBasis: "Articles 21 and 32, Constitution of India; Sunil Batra v. Delhi Administration, (1978) 4 SCC 494.",
    wrongOptionExplanations: ["", "Hussainara Khatoon concerned the right to a speedy trial and undertrial prisoners.", "Prem Shankar Shukla concerned the use of handcuffs.", "D.K. Basu laid down arrest and detention guidelines."],
    flashpoint: "Letter from a prisoner treated as a writ petition → SUNIL BATRA v. Delhi Administration (1978) 4 SCC 494.",
    source: "CASE"
  });

  Q({
    id: "PIL-015", subject: S, topic: "i3", subtopic: "PIL — procedure",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is NOT a recognised feature of the procedure in PIL?",
    options: [
      "Relaxation of the traditional rule of standing",
      "A requirement that the petitioner must deposit security for the costs of the respondent before the petition is entertained",
      "Procedural flexibility, including the appointment of commissioners and committees to gather facts",
      "Acceptance of letters and newspaper reports as the basis of a petition"
    ],
    correctIndex: 1,
    explanation: "PIL procedure is marked by the relaxation of standing, epistolary jurisdiction, procedural flexibility and the appointment of fact-finding commissioners and committees. There is no requirement of a pre-deposit of security for costs as a condition of maintainability; on the contrary, courts have imposed costs on frivolous PILs as a deterrent.",
    legalBasis: "Articles 32 and 226, Constitution of India; Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161; State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402.",
    wrongOptionExplanations: [
      "Relaxation of standing is a defining feature.",
      "",
      "Procedural flexibility is a defining feature.",
      "Epistolary jurisdiction is a defining feature."
    ],
    flashpoint: "PIL procedure → relaxed standing, epistolary jurisdiction, flexible procedure, fact-finding commissioners. NO pre-deposit of security.",
    source: "STATUTE"
  });

  Q({
    id: "PIL-016", subject: S, topic: "i4", subtopic: "PIL — private grievance",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A person whose tender has been rejected by a municipal corporation files a petition describing it as a PIL on the ground that the rejection is arbitrary and affects the public exchequer. Is the petition maintainable as a PIL?",
    options: [
      "Yes, because any challenge to an administrative action is a PIL",
      "Yes, because the petitioner is a taxpayer",
      "No, because the grievance is personal and private; a PIL is not intended to be used as a cloak for a private dispute or to settle personal scores",
      "Yes, because the municipal corporation is a public body"
    ],
    correctIndex: 2,
    explanation: "A PIL is not a vehicle for the redressal of a private grievance. Where the petitioner's own interest is directly and personally affected, the appropriate remedy is a regular writ petition or other proceeding. Courts have repeatedly held that a private dispute dressed up as public interest litigation is to be dismissed, often with costs.",
    legalBasis: "Articles 32 and 226, Constitution of India; State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402; BALCO Employees Union v. Union of India, (2002) 2 SCC 333.",
    wrongOptionExplanations: [
      "Not every challenge to administrative action is a PIL.",
      "Taxpayer status alone does not convert a private grievance into a PIL.",
      "",
      "The public character of the respondent does not make a private grievance a public interest matter."
    ],
    flashpoint: "PIL is NOT for PRIVATE grievances. A private dispute dressed as a PIL → dismissed, often with COSTS.",
    source: "STATUTE"
  });

  Q({
    id: "PIL-017", subject: S, topic: "i4", subtopic: "PIL and Article 23",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which PIL is associated with the expansion of the scope of Article 23 of the Constitution to cover payment of less than the minimum wage?",
    options: [
      "All of the above decisions contributed to this expansion",
      "Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161",
      "Sanjit Roy v. State of Rajasthan, (1983) 1 SCC 525",
      "People's Union for Democratic Rights v. Union of India, (1982) 3 SCC 235"
    ],
    correctIndex: 0,
    explanation: "PUDR v. Union of India (1982) 3 SCC 235 is the decision in which the Supreme Court gave Article 23 its wide construction, holding that payment of less than the minimum wage amounts to forced labour. Sanjit Roy v. State of Rajasthan applied the same reasoning to famine-relief work, and Bandhua Mukti Morcha addressed bonded labour under Articles 21 and 23. All three contributed to the expansion.",
    legalBasis: "Article 23, Constitution of India; People's Union for Democratic Rights v. Union of India, (1982) 3 SCC 235; Sanjit Roy v. State of Rajasthan, (1983) 1 SCC 525; Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161.",
    wrongOptionExplanations: [
      "",
      "Bandhua Mukti Morcha addressed bonded labour under Articles 21 and 23.",
      "Sanjit Roy applied PUDR to famine-relief work.",
      "PUDR is the leading case, but the others also contributed."
    ],
    flashpoint: "Article 23 expansion → PUDR (1982) 3 SCC 235 (leading); applied in Sanjit Roy (1983) and Bandhua Mukti Morcha (1984).",
    source: "CASE"
  });

  Q({
    id: "PIL-018", subject: S, topic: "i4", subtopic: "PIL and child labour",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Directions for the elimination of child labour from hazardous industries, with the identification and rehabilitation of affected children, were issued in:",
    options: [
      "M.C. Mehta v. State of Tamil Nadu, (1996) 6 SCC 756",
      "Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161",
      "Unni Krishnan v. State of A.P., (1993) 1 SCC 645",
      "All of the above"
    ],
    correctIndex: 0,
    explanation: "In M.C. Mehta v. State of Tamil Nadu the Supreme Court, in a PIL concerning child labour in the Sivakasi match industry, issued detailed directions for the elimination of child labour, the identification of children employed in hazardous industries, and their rehabilitation through a welfare fund. The case also contributed to the recognition of the right to education.",
    legalBasis: "Articles 21, 24, 39(e) and (f), 45 and 47, Constitution of India; M.C. Mehta v. State of Tamil Nadu, (1996) 6 SCC 756; Unni Krishnan v. State of A.P., (1993) 1 SCC 645.",
    wrongOptionExplanations: ["", "Bandhua Mukti Morcha concerned bonded labour rather than child labour in hazardous industries.", "Unni Krishnan v. State of A.P. concerned the right to education under Article 21.", "The directions on child labour are from M.C. Mehta (1996)."],
    flashpoint: "Child labour PIL → M.C. MEHTA v. State of Tamil Nadu (1996) 6 SCC 756 (Sivakasi match industry).",
    source: "CASE"
  });

  Q({
    id: "PIL-019", subject: S, topic: "i1", subtopic: "Judicial activism",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The relationship between PIL and judicial activism is best described as follows:",
    options: [
      "PIL is a form of judicial overreach that is unconstitutional",
      "PIL is a mechanism through which the judiciary enforces constitutional and legal rights of the disadvantaged; it is an aspect of judicial activism, but it must be exercised with restraint, since excessive intervention can raise concerns about the separation of powers",
      "PIL and judicial activism are unrelated concepts",
      "PIL is a form of legislative power exercised by the judiciary"
    ],
    correctIndex: 1,
    explanation: "PIL is an instrument of judicial activism — the proactive enforcement of rights of persons unable to approach the court. It has been used to protect the environment, prisoners' rights, bonded labourers and children. At the same time, courts have cautioned against overreach, and guidelines such as those in Balwant Singh Chaufal are intended to keep PIL within legitimate bounds consistent with the separation of powers.",
    legalBasis: "Articles 32 and 226, Constitution of India; State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402.",
    wrongOptionExplanations: ["PIL is constitutionally grounded in Articles 32 and 226.", "", "The two concepts are closely related.", "The judiciary does not exercise legislative power; PIL directions are subject to constitutional limits."],
    flashpoint: "PIL = judicial activism + restraint; guidelines in Balwant Singh Chaufal keep it within bounds.",
    source: "STATUTE"
  });

  Q({
    id: "PIL-020", subject: S, topic: "i3", subtopic: "PIL — costs",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about costs in PIL is correct?",
    options: [
      "Costs can never be awarded in PIL",
      "Costs are awarded only against the Government",
      "Costs are always awarded in favour of the petitioner",
      "Courts may impose costs on a petitioner who files a frivolous, vexatious or motivated PIL, and may award costs in favour of a successful PIL petitioner"
    ],
    correctIndex: 3,
    explanation: "Courts have imposed exemplary costs on persons filing frivolous or motivated PILs as a deterrent, as recommended in Balwant Singh Chaufal. Equally, courts have awarded costs in favour of public-spirited petitioners whose petitions succeed, and have directed that the costs be paid to the affected persons or a welfare fund.",
    legalBasis: "Articles 32 and 226, Constitution of India; State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402.",
    wrongOptionExplanations: [
      "Costs have been imposed on both sides in appropriate cases.",
      "Costs may be awarded against any party, including the petitioner.",
      "Costs are not automatic in favour of the petitioner.",
      ""
    ],
    flashpoint: "PIL costs → exemplary costs for FRIVOLOUS/MOTIVATED PILs; costs may also be awarded to a successful petitioner.",
    source: "CASE"
  });

  Q({
    id: "PIL-021", subject: S, topic: "i4", subtopic: "PIL and Article 32",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Assertion-Reason",
    question: "Assertion (A): A public interest petition may be filed before the Supreme Court under Article 32 as well as before a High Court under Article 226.\nReason (R): Article 32 lies only for the enforcement of fundamental rights, whereas Article 226 may be exercised for the enforcement of fundamental rights and for any other purpose.\nDecide the correct option.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 2,
    explanation: "Both statements are true: a PIL may be filed under Article 32 or Article 226, and the description of the differing scope of the two articles is accurate. However, the reason explains the relative width of the two jurisdictions, not why a PIL may be filed before either court. The reason therefore does not explain the assertion.",
    legalBasis: "Articles 32 and 226, Constitution of India.",
    wrongOptionExplanations: [
      "The reason explains a different point — the comparative scope of the two articles.",
      "(R) correctly states the law.",
      "",
      "(A) correctly states the law."
    ],
    flashpoint: "Article 32 → Supreme Court, fundamental rights only. Article 226 → High Court, fundamental rights + any other purpose (WIDER).",
    source: "STATUTE"
  });

  Q({
    id: "PIL-022", subject: S, topic: "i3", subtopic: "Suo motu action",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The Supreme Court may initiate proceedings on its own motion on the basis of a newspaper report or other information. This is described as:",
    options: ["Suo motu action", "Appellate jurisdiction", "Advisory jurisdiction", "Original jurisdiction"],
    correctIndex: 0,
    explanation: "Suo motu action is the exercise of jurisdiction by the court on its own motion, without a formal petition, usually triggered by a newspaper report, a letter or information brought to the court's notice. It is a feature of the PIL jurisdiction and derives from the Court's power under Articles 32 and 142.",
    legalBasis: "Articles 32 and 142, Constitution of India; S.P. Gupta v. Union of India, 1981 Supp SCC 87.",
    wrongOptionExplanations: [
      "",
      "Appellate jurisdiction concerns appeals.",
      "Advisory jurisdiction is exercised under Article 143.",
      "Original jurisdiction is technical — the court hearing the matter in the first instance, which is different from the source of the trigger."
    ],
    flashpoint: "SUO MOTU action → the court acts on its own motion, often on the basis of a newspaper report.",
    source: "CASE"
  });

  Q({
    id: "PIL-023", subject: S, topic: "i4", subtopic: "PIL — undertrial prisoners",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The PIL that led to the recognition of the right to a speedy trial and the release of undertrial prisoners who had been detained for periods longer than the maximum sentence for the offences alleged was:",
    options: [
      "Khatri v. State of Bihar, (1981) 1 SCC 627",
      "Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81",
      "Hussainara Khatoon and Khatri both",
      "Sunil Batra v. Delhi Administration, (1978) 4 SCC 494"
    ],
    correctIndex: 1,
    explanation: "Hussainara Khatoon v. State of Bihar, arising from a newspaper report, led to the recognition of the right to a speedy trial as implicit in Article 21 and to the release of undertrial prisoners whose detention had exceeded the maximum sentence prescribed for the alleged offence. Khatri v. State of Bihar (the Bhagalpur blindings case) followed and dealt with legal aid and the rights of prisoners, but the speedy trial principle was laid down in Hussainara Khatoon.",
    legalBasis: "Article 21, Constitution of India; Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81; Khatri v. State of Bihar, (1981) 1 SCC 627.",
    wrongOptionExplanations: [
      "Khatri concerned legal aid and the rights of prisoners, not the speedy trial principle itself.",
      "",
      "The speedy trial principle is from Hussainara Khatoon.",
      "Sunil Batra concerned prison conditions and bar fetters."
    ],
    flashpoint: "Speedy trial + release of undertrials → HUSSAINARA KHATOON v. State of Bihar (1980) 1 SCC 81.",
    source: "CASE"
  });

  Q({
    id: "PIL-024", subject: S, topic: "i4", subtopic: "PIL and the environment",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: The right to a clean and healthy environment has been recognised as part of the right to life under Article 21, and has been enforced through public interest litigation.\nConclusion I: A public interest petition may be filed to enforce the right to a clean environment, since it is part of the right to life under Article 21.\nConclusion II: Public interest litigation is available only for the enforcement of fundamental rights and not for the enforcement of statutory environmental obligations.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion II follows", "Only Conclusion I follows", "Neither Conclusion I nor II follows"],
    correctIndex: 2,
    explanation: "Conclusion I follows. Conclusion II does not: while the Supreme Court's Article 32 jurisdiction is confined to fundamental rights, the High Court's jurisdiction under Article 226 extends to rights or obligations created by statute — 'for any other purpose'. Environmental PILs have therefore been entertained under both articles, and in relation to statutory obligations as well.",
    legalBasis: "Articles 21, 32 and 226, Constitution of India; Subhash Kumar v. State of Bihar, (1991) 1 SCC 598.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "Conclusion II misstates the scope of Article 226.", "", "Conclusion I follows."],
    flashpoint: "Environmental PIL → Article 21 (right to clean environment) + Article 226 (statutory obligations as well).",
    source: "CASE"
  });
})();
