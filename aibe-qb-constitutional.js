/* ============================================================================
 * AIBE XXI — Question Bank: Constitutional Law (60 questions)
 * Weightage: 10 / 100 (official syllabus, BCI Trust, 02.03.2026)
 * Schema per question matches the platform contract:
 *   id, subject, topic, subtopic, difficulty, cognitiveLevel, questionType,
 *   question, options[4], correctIndex (0=A … 3=D), explanation, legalBasis,
 *   wrongOptionExplanations[4] (index-parallel to options), flashpoint, source
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "constitutional";

  /* ---------------------------------------------------------------- Art. 12-13 */
  Q({
    id: "CON-001", subject: S, topic: "c1", subtopic: "Definition of State",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Article 12 of the Constitution of India, the expression 'State' includes which of the following?",
    options: [
      "Only the Government and Parliament of India",
      "The Government and Parliament of India, the Government and the Legislature of each State, all local authorities, and other authorities within the territory of India or under the control of the Government of India",
      "Only the Union Government and the State Governments, excluding local bodies",
      "Only bodies created by a statute of Parliament"
    ],
    correctIndex: 1,
    explanation: "Article 12 defines 'State' for the purposes of Part III expansively. It covers the Government and Parliament of India, the Government and Legislature of each State, all local authorities, and 'other authorities' within the territory of India or under the control of the Government of India.",
    legalBasis: "Article 12, Constitution of India.",
    wrongOptionExplanations: [
      "Article 12 is not confined to the Union Government and Parliament.",
      "",
      "Local authorities are expressly included in Article 12.",
      "Bodies not created by statute (for example, a society discharging a public function) have also been held to be 'other authorities'."
    ],
    flashpoint: "Article 12 → 'State' = Union + State Governments/Legislatures + local authorities + 'other authorities'.",
    source: "STATUTE"
  });

  Q({
    id: "CON-002", subject: S, topic: "c1", subtopic: "Article 13(2) and the meaning of 'law'",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Article 13(2) of the Constitution provides that the State shall not make any law which takes away or abridges the rights conferred by Part III. Which of the following is the correct legal position regarding constitutional amendments?",
    options: [
      "A constitutional amendment is a 'law' within Article 13(2) and can be struck down for violating any fundamental right",
      "A constitutional amendment made under Article 368 is a 'law' within Article 13(2), but only if it affects Article 14",
      "A constitutional amendment can never be subjected to any form of judicial scrutiny",
      "A constitutional amendment made under Article 368 is not a 'law' for the purposes of Article 13, though it remains subject to review on the ground of violation of the basic structure"
    ],
    correctIndex: 3,
    explanation: "Article 13(4) excludes an amendment under Article 368 from the operation of Article 13. Such an amendment is therefore not challengeable as an ordinary 'law', but since Kesavananda Bharati it is reviewable on the ground that it destroys the basic structure.",
    legalBasis: "Articles 13(2), 13(4) and 368, Constitution of India; Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225.",
    wrongOptionExplanations: [
      "Article 13(4) expressly takes amendments under Article 368 outside Article 13.",
      "There is no special carve-out limited to Article 14.",
      "Judicial review of amendments on basic-structure grounds is firmly established.",
      ""
    ],
    flashpoint: "Article 13(4) → Article 13 does NOT apply to an Article 368 amendment, but basic-structure review survives.",
    source: "CASE"
  });

  Q({
    id: "CON-003", subject: S, topic: "c1", subtopic: "Doctrine of eclipse",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A pre-Constitution law is inconsistent with a fundamental right. What is the effect of the doctrine of eclipse on that law?",
    options: [
      "The law becomes dormant and unenforceable to the extent of the inconsistency, but may revive if the inconsistency is removed by a constitutional amendment",
      "The law is void ab initio for all purposes and can never be revived",
      "The law remains fully operative because Article 13 does not apply to pre-Constitution laws",
      "The law is automatically repealed on the commencement of the Constitution"
    ],
    correctIndex: 0,
    explanation: "Under the doctrine of eclipse, a pre-Constitution law that is inconsistent with Part III is not dead but overshadowed — it remains in a dormant state and revives if the inconsistency is removed, for example by a constitutional amendment.",
    legalBasis: "Article 13(1), Constitution of India; Bhikaji Narain Dhakras v. State of M.P., AIR 1955 SC 781.",
    wrongOptionExplanations: [
      "",
      "'Void ab initio for all purposes' describes a different situation; the eclipsed law is not dead but dormant.",
      "Article 13(1) expressly applies to pre-Constitution laws.",
      "The Constitution does not repeal pre-Constitution laws wholesale; they continue save to the extent of inconsistency."
    ],
    flashpoint: "Doctrine of eclipse → pre-Constitution law is dormant, NOT dead; it revives if the inconsistency goes.",
    source: "CASE"
  });

  Q({
    id: "CON-004", subject: S, topic: "c2", subtopic: "Article 14 classification test",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A State law treats two classes of persons differently. Which test must the classification satisfy to be valid under Article 14?",
    options: [
      "The classification must be based on poverty or social backwardness",
      "The classification must be reasonable, founded on an intelligible differentia, and the differentia must have a rational nexus with the object sought to be achieved by the statute",
      "The classification must be made by Parliament alone",
      "The classification must be approved by the Supreme Court in advance"
    ],
    correctIndex: 1,
    explanation: "The settled two-limb test is (i) an intelligible differentia distinguishing those grouped together from those left out, and (ii) a rational nexus between that differentia and the object of the enactment.",
    legalBasis: "Article 14, Constitution of India; State of West Bengal v. Anwar Ali Sarkar, AIR 1952 SC 75.",
    wrongOptionExplanations: [
      "Article 14 does not prescribe any particular basis for classification; it requires reasonableness.",
      "",
      "Classification may be made by any competent legislature; the test is substantive.",
      "There is no requirement of prior judicial approval."
    ],
    flashpoint: "Article 14 test → intelligible differentia + rational nexus with the statutory object.",
    source: "CASE"
  });

  Q({
    id: "CON-005", subject: S, topic: "c2", subtopic: "Pension cut-off date",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A State introduces a pension scheme that distinguishes between employees who retired before a specified cut-off date and those who retired on or after it, giving a higher pension to the latter. Those excluded challenge the cut-off date as arbitrary. Which constitutional issue is primarily raised?",
    options: [
      "The legislative competence of the State to legislate on pensions",
      "Article 14 and the requirement of a reasonable classification",
      "The doctrine of severability",
      "The doctrine of eclipse"
    ],
    correctIndex: 1,
    explanation: "A cut-off date creates a classification between two sets of retirees. Such a classification is tested for reasonableness under Article 14 — whether the differentia is intelligible and whether it has a rational nexus with the object of the scheme.",
    legalBasis: "Article 14, Constitution of India; State of Kerala v. N.M. Thomas, (1976) 2 SCC 310 (on reasonable classification).",
    wrongOptionExplanations: [
      "Legislative competence is not in doubt where the scheme is within the State's competence; the challenge is to arbitrariness.",
      "",
      "Severability concerns a partly invalid statute, not a challenge to classification.",
      "The doctrine of eclipse concerns pre-Constitution laws inconsistent with Part III."
    ],
    flashpoint: "Pension cut-off date challenged → Article 14 reasonable classification, not legislative competence.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-006", subject: S, topic: "c2", subtopic: "Article 14 — arbitrariness",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Assertion-Reason",
    question: "Assertion (A): Article 14 prohibits arbitrariness in State action and not merely discriminatory classification.\nReason (R): Article 14 embodies the principle of equality before the law and the equal protection of the laws, which is violated when the State acts without any rational basis.\nDecide the correct option.",
    options: [
      "(A) is true, but (R) is false",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 2,
    explanation: "In E.P. Royappa v. State of Tamil Nadu the Supreme Court held that Article 14 strikes at arbitrariness, because a State action that is arbitrary is by definition unequal. The reason correctly explains the assertion: equality before the law is violated when the State acts without a rational basis.",
    legalBasis: "Article 14, Constitution of India; E.P. Royappa v. State of Tamil Nadu, (1974) 4 SCC 3; Maneka Gandhi v. Union of India, (1978) 1 SCC 248.",
    wrongOptionExplanations: [
      "(R) is a correct statement of the law.",
      "The reason does explain the assertion — arbitrariness is the very negation of equality.",
      "",
      "(A) correctly states the Royappa principle."
    ],
    flashpoint: "Article 14 → strikes at ARBITRARINESS, not merely at discriminatory classification (E.P. Royappa).",
    source: "CASE"
  });

  Q({
    id: "CON-007", subject: S, topic: "c3", subtopic: "Article 19 — availability",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The freedoms guaranteed by Article 19(1) of the Constitution are available to:",
    options: [
      "All persons residing in India, including foreigners",
      "Any person who has resided in India for not less than five years",
      "Citizens and friendly aliens only",
      "Citizens of India only"
    ],
    correctIndex: 3,
    explanation: "Article 19 uses the word 'citizens'. The rights under Article 19(1)(a) to (g) are available only to citizens, unlike Articles 14 and 21 which use 'person' or 'any person'.",
    legalBasis: "Article 19(1), Constitution of India.",
    wrongOptionExplanations: [
      "Foreigners cannot claim Article 19 freedoms, though they can invoke Articles 14 and 21.",
      "Residence does not confer citizenship.",
      "There is no category of 'friendly aliens' for Article 19 purposes.",
      ""
    ],
    flashpoint: "Article 19 → CITIZENS only. Article 21 → all persons.",
    source: "STATUTE"
  });

  Q({
    id: "CON-008", subject: S, topic: "c3", subtopic: "Article 21 — Maneka Gandhi test",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In Maneka Gandhi v. Union of India, the Supreme Court held that the procedure contemplated by Article 21 must be:",
    options: [
      "Fair, just and reasonable, and not arbitrary, fanciful or oppressive",
      "A procedure approved by the President",
      "Any procedure prescribed by a competent legislature",
      "A procedure consistent with the Personal Liberty (Procedure) Rules, 1950"
    ],
    correctIndex: 0,
    explanation: "Maneka Gandhi held that the procedure under Article 21 must answer the requirements of fairness and non-arbitrariness. A procedure that is arbitrary, fanciful or oppressive is not 'procedure' at all for the purposes of Article 21.",
    legalBasis: "Article 21, Constitution of India; Maneka Gandhi v. Union of India, (1978) 1 SCC 248.",
    wrongOptionExplanations: [
      "",
      "No presidential approval is contemplated by Article 21.",
      "A law made by a competent legislature is not sufficient if the procedure is arbitrary.",
      "There is no such statutory instrument as the 'Personal Liberty (Procedure) Rules, 1950'."
    ],
    flashpoint: "Maneka Gandhi (1978) 1 SCC 248 → Article 21 procedure must be fair, just and reasonable.",
    source: "CASE"
  });

  Q({
    id: "CON-009", subject: S, topic: "c3", subtopic: "Article 20(3) self-incrimination",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is the correct legal position regarding Article 20(3) of the Constitution?",
    options: [
      "It protects every person, including a suspect who is not an accused, from being questioned by the police",
      "It protects an accused person from being compelled to be a witness against himself, and the protection extends to testimonial compulsion only",
      "It bars the taking of specimen signatures, fingerprints and blood samples",
      "It bars the examination of a co-accused in a criminal trial"
    ],
    correctIndex: 1,
    explanation: "Article 20(3) applies to a person 'accused of any offence' and protects against testimonial compulsion. Physical evidence such as fingerprints and specimen signatures is not testimonial in character and therefore outside its protection.",
    legalBasis: "Article 20(3), Constitution of India; State of Bombay v. Kathi Kalu Oghad, AIR 1961 SC 1808.",
    wrongOptionExplanations: [
      "The protection is confined to a person accused of an offence; it does not extend to every suspect.",
      "",
      "Kathi Kalu Oghad held that specimen signatures and handwriting samples are not testimonial compulsion.",
      "The examination of a co-accused who turns approver is a matter of the law of evidence, not Article 20(3)."
    ],
    flashpoint: "Article 20(3) → testimonial compulsion only; fingerprints/specimen signatures are outside its protection.",
    source: "CASE"
  });

  Q({
    id: "CON-010", subject: S, topic: "c3", subtopic: "Article 22 — 24 hours",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Article 22(2) of the Constitution, an arrested person must be produced before the nearest Magistrate within:",
    options: [
      "48 hours of arrest, excluding journey time",
      "7 days of arrest",
      "Such time as the police consider reasonably necessary for investigation",
      "24 hours of arrest, excluding the time necessary for the journey from the place of arrest to the Magistrate's court"
    ],
    correctIndex: 3,
    explanation: "Article 22(2) mandates production before the nearest Magistrate within 24 hours of arrest, excluding journey time. The CrPC mirrors this in s.57.",
    legalBasis: "Article 22(2), Constitution of India; s.57, Code of Criminal Procedure, 1973.",
    wrongOptionExplanations: [
      "The outer limit is 24 hours, not 48.",
      "Seven days is used in some special statutes for other purposes, not Article 22(2).",
      "The police have no discretion to extend the 24-hour period; only a Magistrate may authorise further detention.",
      ""
    ],
    flashpoint: "Article 22(2) → 24 HOURS to produce the arrested person before the nearest Magistrate (journey time excluded).",
    source: "STATUTE"
  });

  Q({
    id: "CON-011", subject: S, topic: "c4", subtopic: "Article 23 — expansion",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which decision of the Supreme Court is associated with expanding the scope of Article 23 of the Constitution of India?",
    options: [
      "Vishaka v. State of Rajasthan, (1997) 6 SCC 241",
      "People's Union for Democratic Rights v. Union of India, (1982) 3 SCC 235",
      "M.C. Mehta v. State of Tamil Nadu, (1996) 6 SCC 756",
      "Glaxo Laboratories v. Presiding Officer, Labour Court, Meerut, (1984) 1 SCC 1"
    ],
    correctIndex: 1,
    explanation: "PUDR v. Union of India held that Article 23 strikes at every form of forced labour and has a far wider reach than 'begar'. Payment of less than the minimum wage to a workman amounts to forced labour within Article 23.",
    legalBasis: "Article 23, Constitution of India; People's Union for Democratic Rights v. Union of India, (1982) 3 SCC 235.",
    wrongOptionExplanations: [
      "Vishaka (1997) 6 SCC 241 laid down guidelines on sexual harassment at the workplace under Articles 14, 15, 19(1)(g) and 21.",
      "",
      "M.C. Mehta (1996) 6 SCC 756 concerned child labour and the right to education.",
      "Glaxo Laboratories concerned the meaning of 'workman' and the Industrial Disputes Act — that is a labour-law question, not the Article 23 expansion."
    ],
    flashpoint: "Article 23 expanded by PUDR v. UOI (1982) 3 SCC 235 — less-than-minimum-wage labour is forced labour.",
    source: "CASE"
  });

  Q({
    id: "CON-012", subject: S, topic: "c4", subtopic: "Article 23(2) compulsory service",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Article 23(2) of the Constitution permits compulsory service for public purposes. Which of the following statements about this provision is correct?",
    options: [
      "Compulsory service for public purposes is prohibited absolutely",
      "Compulsory service may be imposed only during a national emergency",
      "Compulsory service for public purposes may be imposed, but the State shall not make any discrimination on grounds only of religion, race, caste or class",
      "Compulsory service may be imposed only on citizens who have attained the age of thirty years"
    ],
    correctIndex: 2,
    explanation: "Article 23(2) creates an exception: compulsory service for public purposes is permitted, but in imposing it the State cannot discriminate on grounds only of religion, race, caste or class.",
    legalBasis: "Article 23(2), Constitution of India.",
    wrongOptionExplanations: [
      "Article 23(2) expressly saves compulsory service for public purposes.",
      "No emergency is required; the sub-article is not conditioned on a Proclamation.",
      "",
      "There is no age condition in Article 23(2)."
    ],
    flashpoint: "Article 23(2) → compulsory service for PUBLIC purposes is permitted; no discrimination on religion, race, caste or class.",
    source: "STATUTE"
  });

  Q({
    id: "CON-013", subject: S, topic: "c4", subtopic: "Article 24 child labour",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Article 24 of the Constitution of India prohibits the employment of children in factories, mines and other hazardous employment. The prohibition applies to children below the age of:",
    options: ["Eighteen years", "Sixteen years", "Twelve years", "Fourteen years"],
    correctIndex: 3,
    explanation: "Article 24 prohibits the employment of children below fourteen years of age in any factory or mine, or in other hazardous employment.",
    legalBasis: "Article 24, Constitution of India; M.C. Mehta v. State of Tamil Nadu, (1996) 6 SCC 756.",
    wrongOptionExplanations: [
      "Eighteen years is the majority age for some purposes but not the Article 24 threshold.",
      "Sixteen years is not the Article 24 threshold (it is used in some labour statutes).",
      "Twelve years is not the constitutional threshold.",
      ""
    ],
    flashpoint: "Article 24 → children below 14 years cannot be employed in factories, mines or hazardous work.",
    source: "STATUTE"
  });

  Q({
    id: "CON-014", subject: S, topic: "c5", subtopic: "Article 32 vs Article 226",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly distinguishes Article 32 from Article 226 of the Constitution?",
    options: [
      "Article 32 is wider than Article 226 because it covers both fundamental rights and other legal rights",
      "Article 226 is wider because the High Court may issue writs both for the enforcement of fundamental rights and for any other purpose, whereas Article 32 lies only for the enforcement of fundamental rights",
      "Article 32 is available only against the Union Government, while Article 226 is available against State Governments",
      "Article 32 may be exercised by any court in India, whereas Article 226 is confined to the Supreme Court"
    ],
    correctIndex: 1,
    explanation: "The High Court's jurisdiction under Article 226 extends to fundamental rights and to 'any other purpose' (other legal rights), which makes it wider than the Supreme Court's Article 32 jurisdiction. Article 32 is however itself a fundamental right.",
    legalBasis: "Articles 32 and 226, Constitution of India.",
    wrongOptionExplanations: [
      "Article 32 is narrower in scope, though it is a fundamental right in itself.",
      "",
      "Both jurisdictions lie against any authority within the respective court's territorial reach.",
      "The reverse is true: Article 32 belongs to the Supreme Court and Article 226 to the High Courts."
    ],
    flashpoint: "Article 226 (High Court) → fundamental rights + any other purpose = WIDER. Article 32 (Supreme Court) → fundamental rights only, but itself a fundamental right.",
    source: "STATUTE"
  });

  Q({
    id: "CON-015", subject: S, topic: "c5", subtopic: "Writ — mandamus",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which writ is issued to command a public authority to perform a public duty which it has failed or refused to perform?",
    options: ["Certiorari", "Prohibition", "Mandamus", "Quo warranto"],
    correctIndex: 2,
    explanation: "Mandamus commands the performance of a public duty. Certiorari quashes a quasi-judicial order, prohibition stops proceedings, and quo warranto questions a person's authority to hold a public office.",
    legalBasis: "Articles 32 and 226, Constitution of India.",
    wrongOptionExplanations: [
      "Certiorari is used to quash an order already passed by a judicial or quasi-judicial authority.",
      "Prohibition is preventive — it stops proceedings that are continuing.",
      "",
      "Quo warranto questions the legal authority of a person holding a public office."
    ],
    flashpoint: "Mandamus → commands performance of a PUBLIC DUTY.",
    source: "STATUTE"
  });

  Q({
    id: "CON-016", subject: S, topic: "c5", subtopic: "Habeas corpus",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "In which of the following cases did Lord Wright observe that 'the incalculable value of habeas corpus is that it enables the immediate determination of the applicant's freedom'?",
    options: [
      "Greene v. Secretary of State for Home Affairs (1942) AC 284",
      "Attorney General for Hong Kong v. Ng Yuen Shiu (1983) 2 AC 629",
      "Attorney General for New South Wales v. Trethowan (1932) AC 526",
      "Bugdaycay v. Secretary of State for the Home Department (1987) AC 514"
    ],
    correctIndex: 1,
    explanation: "The observation about the incalculable value of habeas corpus is associated with Attorney General for Hong Kong v. Ng Yuen Shiu (1983) 2 AC 629. The case is otherwise known for the doctrine of legitimate expectation, which is precisely why the habeas corpus dictum is a favoured examination point.",
    legalBasis: "Attorney General for Hong Kong v. Ng Yuen Shiu, (1983) 2 AC 629.",
    wrongOptionExplanations: [
      "Greene v. Secretary of State for Home Affairs (1942) AC 284 concerned the detention of an alien and the rules of natural justice.",
      "",
      "Trethowan (1932) AC 526 concerned the entrenchment of legislation and manner-and-form requirements.",
      "Bugdaycay (1987) AC 514 concerned the standard of judicial review in immigration matters."
    ],
    flashpoint: "Habeas corpus dictum → Attorney General for Hong Kong v. Ng Yuen Shiu (1983) 2 AC 629.",
    source: "CASE"
  });

  Q({
    id: "CON-017", subject: S, topic: "c5", subtopic: "Article 32 — nature",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Assertion-Reason",
    question: "Assertion (A): Article 32 of the Constitution is itself a fundamental right.\nReason (R): Article 32 confers on every person the right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by Part III.\nDecide the correct option.",
    options: [
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 1,
    explanation: "Article 32(1) guarantees the right to move the Supreme Court, and Article 32(2) empowers the Court to issue writs. Because the right to approach the Court is itself conferred as a fundamental right, Article 32 is described as the heart and soul of the Constitution.",
    legalBasis: "Article 32, Constitution of India; Romesh Thappar v. State of Madras, AIR 1950 SC 124.",
    wrongOptionExplanations: [
      "The reason is precisely why Article 32 is itself a fundamental right.",
      "",
      "(R) accurately reproduces Article 32(1).",
      "(A) is correct — Article 32 appears in Part III."
    ],
    flashpoint: "Article 32 → a fundamental right in itself; the 'heart and soul' of the Constitution.",
    source: "STATUTE"
  });

  Q({
    id: "CON-018", subject: S, topic: "c6", subtopic: "Article 248 residuary powers",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "A subject is not enumerated in either the State List or the Concurrent List. In whom does the residuary power of legislation vest?",
    options: ["The State Legislatures", "The Supreme Court of India", "The President of India", "The Parliament"],
    correctIndex: 3,
    explanation: "Article 248 vests the residuary power of legislation in Parliament, which has exclusive power to make laws with respect to any matter not enumerated in the Concurrent List or the State List.",
    legalBasis: "Article 248, Constitution of India; Entry 97, List I, Seventh Schedule.",
    wrongOptionExplanations: [
      "The States have no residuary power.",
      "The Supreme Court does not legislate.",
      "The President has no legislative power except the ordinance power.",
      ""
    ],
    flashpoint: "Article 248 → RESIDUARY power belongs to PARLIAMENT.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-019", subject: S, topic: "c6", subtopic: "Article 249 Rajya Sabha resolution",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Article 249 of the Constitution enables Parliament to legislate on a matter in the State List. Which of the following is the correct precondition?",
    options: [
      "The Council of States must pass a resolution supported by not less than two-thirds of the members present and voting that it is necessary or expedient in the national interest that Parliament should make a law on that matter",
      "The States concerned must pass resolutions to that effect",
      "A Proclamation of Emergency must be in operation",
      "The President must refer the matter to the Supreme Court for its opinion"
    ],
    correctIndex: 0,
    explanation: "Article 249 requires a Rajya Sabha (Council of States) resolution passed by a two-thirds majority of members present and voting, declaring it necessary or expedient in the national interest that Parliament should legislate on a State List matter.",
    legalBasis: "Article 249, Constitution of India.",
    wrongOptionExplanations: [
      "",
      "State consent is the mechanism under Article 252.",
      "That is the precondition for Article 250, not Article 249.",
      "A presidential reference under Article 143 is unrelated."
    ],
    flashpoint: "Article 249 → RAJYA SABHA resolution (2/3 of members present and voting).",
    source: "STATUTE"
  });

  Q({
    id: "CON-020", subject: S, topic: "c6", subtopic: "Article 250 during emergency",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Once a Proclamation under Article 352 is in operation, Parliament may legislate on any matter in the State List by virtue of which Article?",
    options: ["Article 250", "Article 356", "Article 249", "Article 360"],
    correctIndex: 0,
    explanation: "Article 250 empowers Parliament, while a Proclamation of Emergency under Article 352 is in operation, to make laws for the whole or any part of India on any matter in the State List. Such a law ceases to have effect on the expiration of six months after the Proclamation ceases to operate.",
    legalBasis: "Articles 250 and 352, Constitution of India.",
    wrongOptionExplanations: [
      "",
      "Article 356 concerns failure of constitutional machinery in a State.",
      "Article 249 requires a Rajya Sabha resolution and is not tied to an emergency.",
      "Article 360 concerns financial emergency."
    ],
    flashpoint: "Article 250 → State List legislation by Parliament DURING a Proclamation under Article 352.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-021", subject: S, topic: "c6", subtopic: "Article 253 international agreements",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "Parliament enacts legislation to implement India's obligations under an international environmental agreement. The subject ordinarily falls within the State List and no resolution under Article 252 has been passed. What is the source of Parliament's competence?",
    options: [
      "Article 249",
      "Article 252",
      "Article 253",
      "Article 250"
    ],
    correctIndex: 2,
    explanation: "Article 253 confers on Parliament the exclusive power to make laws for the whole or any part of India for implementing any treaty, agreement or convention with any other country or countries, or any decision made at an international conference, association or other body. It overrides the ordinary distribution of legislative powers.",
    legalBasis: "Article 253, Constitution of India; Maganbhai Ishwarbhai Patel v. Union of India, (1970) 3 SCC 400.",
    wrongOptionExplanations: [
      "Article 249 needs a Rajya Sabha resolution, which was not passed here.",
      "Article 252 requires the consent of two or more States.",
      "",
      "Article 250 requires a Proclamation of Emergency, which was not in operation."
    ],
    flashpoint: "Article 253 → international agreements. The legislative source for the Air Act 1981, the EP Act 1986 and similar statutes.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-022", subject: S, topic: "c6", subtopic: "Article 252 State consent",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Article 252 of the Constitution deals with which of the following?",
    options: [
      "Power of Parliament to legislate for two or more States by consent and the adoption of such legislation by any other State",
      "Power of Parliament to legislate on State List matters during a financial emergency",
      "Power of the President to promulgate Ordinances on State List subjects",
      "Power of the Governor to reserve a Bill for the consideration of the President"
    ],
    correctIndex: 0,
    explanation: "Article 252 allows two or more States to pass resolutions requesting Parliament to legislate on a State List matter; the resulting Act applies to those States and can be adopted by other States by resolution.",
    legalBasis: "Article 252, Constitution of India.",
    wrongOptionExplanations: [
      "",
      "There is no such financial-emergency legislative mechanism; Article 360 has other consequences.",
      "Ordinance-making is under Articles 123 and 213.",
      "Reservation of Bills for the President's consideration is under Articles 200 and 201."
    ],
    flashpoint: "Article 252 → TWO OR MORE STATES request Parliament to legislate on a State List matter.",
    source: "STATUTE"
  });

  Q({
    id: "CON-023", subject: S, topic: "c6", subtopic: "Article 254 repugnancy",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Multi-statement",
    question: "Consider the following statements on Article 254 of the Constitution:\nI. Where a State law is repugnant to an existing law made by Parliament on a Concurrent List matter, the State law is void to the extent of the repugnancy.\nII. Where a State law on a Concurrent List matter has been reserved for the consideration of the President and has received his assent, it prevails in that State notwithstanding the repugnancy.\nIII. A State law made under Article 254(2) can never be amended or repealed by Parliament.\nWhich of the statements are correct?",
    options: ["II and III only", "I, II and III", "I and II only", "I only"],
    correctIndex: 2,
    explanation: "Statements I and II state the effect of Article 254(1) and Article 254(2) respectively. Statement III is wrong: the proviso to Article 254(2) expressly preserves Parliament's power to amend, repeal or vary such a State law at any time.",
    legalBasis: "Article 254(1) and (2) and the proviso to Article 254(2), Constitution of India.",
    wrongOptionExplanations: [
      "Statement I is correct.",
      "Statement III is incorrect — Parliament's power to amend or repeal is preserved by the proviso.",
      "",
      "Statement II is also correct."
    ],
    flashpoint: "Article 254(1) → State law void to the extent of repugnancy. Article 254(2) → State law prevails WITH the President's assent; Parliament may still amend or repeal it.",
    source: "STATUTE"
  });

  Q({
    id: "CON-024", subject: S, topic: "c6", subtopic: "Doctrine of pith and substance",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A State legislature enacts a law ostensibly on a State List subject, but its real object and effect fall within an entry in the Union List. Which doctrine will the court apply to determine the validity of the law?",
    options: [
      "The doctrine of Eclipse",
      "The doctrine of Pith and Substance",
      "The doctrine of Severability",
      "The doctrine of Prospective Overruling"
    ],
    correctIndex: 1,
    explanation: "The doctrine of pith and substance requires the court to ascertain the true nature and character of the legislation. If the legislation is in substance on a Union List matter, it is beyond the competence of the State legislature, notwithstanding its form.",
    legalBasis: "Articles 245 and 246, Constitution of India; Prafulla Kumar Mukherjee v. Bank of Commerce Ltd., AIR 1947 PC 60.",
    wrongOptionExplanations: [
      "Eclipse concerns pre-Constitution laws and Part III.",
      "",
      "Severability concerns a partly unconstitutional statute.",
      "Prospective overruling concerns the temporal operation of a judicial decision."
    ],
    flashpoint: "Pith and substance → look at the TRUE NATURE AND CHARACTER of the legislation, not its form.",
    source: "CASE"
  });

  Q({
    id: "CON-025", subject: S, topic: "c7", subtopic: "Article 356 — judicial review",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which decision of the Supreme Court held that a Proclamation under Article 356 is subject to judicial review?",
    options: [
      "Shankari Prasad v. Union of India, AIR 1951 SC 458",
      "Minerva Mills Ltd. v. Union of India, (1980) 3 SCC 625",
      "S.R. Bommai v. Union of India, (1994) 3 SCC 1",
      "A.K. Gopalan v. State of Madras, AIR 1950 SC 27"
    ],
    correctIndex: 2,
    explanation: "S.R. Bommai held that a Proclamation under Article 356 is subject to judicial review, that the floor of the House is the appropriate forum for testing majority, and that the satisfaction of the President is not immune from scrutiny.",
    legalBasis: "Article 356, Constitution of India; S.R. Bommai v. Union of India, (1994) 3 SCC 1.",
    wrongOptionExplanations: [
      "Shankari Prasad concerned the amenability of constitutional amendments to Part III.",
      "Minerva Mills struck down parts of the 42nd Amendment and upheld the basic structure doctrine; it did not decide the justiciability of Article 356.",
      "",
      "A.K. Gopalan concerned preventive detention and Articles 19, 21 and 22."
    ],
    flashpoint: "Article 356 Proclamation → JUDICIALLY REVIEWABLE (S.R. Bommai, 1994) 3 SCC 1.",
    source: "CASE"
  });

  Q({
    id: "CON-026", subject: S, topic: "c8", subtopic: "Article 368 basic structure",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Multi-statement",
    question: "Consider the following statements on constitutional amendments:\nI. Judicial review extends to constitutional amendments.\nII. Laws inserted into the Ninth Schedule after 24 April 1973 remain open to scrutiny for violation of the basic structure.\nIII. Parliament's amending power under Article 368 is unlimited.\nWhich of the statements is/are correct?",
    options: ["I, II and III", "I only", "II and III", "I and II"],
    correctIndex: 3,
    explanation: "Statements I and II are correct. Statement III is wrong: Kesavananda Bharati held that the amending power, though wide, cannot be exercised to damage or destroy the basic structure of the Constitution.",
    legalBasis: "Article 368, Constitution of India; Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225; I.R. Coelho v. State of Tamil Nadu, (2007) 2 SCC 1.",
    wrongOptionExplanations: [
      "Statement III is incorrect — the amending power is not unlimited.",
      "Statement II is also correct — the 24 April 1973 cut-off is the I.R. Coelho rule.",
      "Statement III is incorrect.",
      ""
    ],
    flashpoint: "Article 368 power is NOT unlimited. Ninth Schedule post-24 April 1973 → open to basic-structure scrutiny (I.R. Coelho).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-027", subject: S, topic: "c8", subtopic: "Basic structure — content",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following has NOT been recognised by the Supreme Court as an element of the basic structure of the Constitution?",
    options: [
      "Judicial review",
      "The rule of law",
      "A prescribed period of ten years for every constitutional amendment to take effect",
      "Free and fair elections"
    ],
    correctIndex: 2,
    explanation: "There is no basic-structure element providing a waiting period of ten years for amendments to take effect. Judicial review, the rule of law, free and fair elections, the separation of powers, federalism and secularism have all been recognised as basic features.",
    legalBasis: "Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225; Indira Nehru Gandhi v. Raj Narain, AIR 1975 SC 2299; S.R. Bommai v. Union of India, (1994) 3 SCC 1.",
    wrongOptionExplanations: [
      "Judicial review is a recognised basic feature (L. Chandra Kumar).",
      "The rule of law is a recognised basic feature.",
      "",
      "Free and fair elections have been recognised as part of the basic structure (Indira Nehru Gandhi)."
    ],
    flashpoint: "Basic-structure elements include judicial review, rule of law, free and fair elections, federalism, secularism, separation of powers — but NOT any ten-year waiting period.",
    source: "CASE"
  });

  Q({
    id: "CON-028", subject: S, topic: "c8", subtopic: "Ninth Schedule cut-off",
    difficulty: "Difficult", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "According to I.R. Coelho v. State of Tamil Nadu, which laws placed in the Ninth Schedule remain open to challenge for violation of the basic structure?",
    options: [
      "All laws in the Ninth Schedule, irrespective of when they were inserted",
      "Only those inserted after 1 January 2007",
      "Only those inserted after 24 April 1973",
      "No law in the Ninth Schedule can ever be challenged"
    ],
    correctIndex: 2,
    explanation: "I.R. Coelho fixed the cut-off at 24 April 1973 — the date of the Kesavananda Bharati judgment. Laws inserted into the Ninth Schedule after that date are open to scrutiny for violation of the basic structure; laws inserted before it are protected by the application of Article 31B as originally conceived.",
    legalBasis: "Article 31B and the Ninth Schedule, Constitution of India; I.R. Coelho v. State of Tamil Nadu, (2007) 2 SCC 1.",
    wrongOptionExplanations: [
      "Pre-24 April 1973 insertions enjoy the protection; the challenge is open only for later insertions.",
      "1 January 2007 is the date of the I.R. Coelho judgment, not the constitutional cut-off.",
      "",
      "The immunity is not absolute — that is the whole point of I.R. Coelho."
    ],
    flashpoint: "Ninth Schedule → 24 APRIL 1973 cut-off (the date of Kesavananda Bharati).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-029", subject: S, topic: "c8", subtopic: "Article 368 procedure",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is required in addition to the special majority in each House for amending a federal provision of the Constitution under Article 368(2)?",
    options: [
      "Ratification by the legislatures of not less than one-half of the States",
      "Approval by a majority of the total membership of the Supreme Court",
      "A referendum of the people of India",
      "Approval of the Inter-State Council"
    ],
    correctIndex: 0,
    explanation: "Article 368(2) requires the amendment to be ratified by the legislatures of not less than one-half of the States where the amendment seeks to change specified federal provisions (for example, Articles 54, 55, 73, 162, 241 or the Seventh Schedule).",
    legalBasis: "Article 368(2), Constitution of India.",
    wrongOptionExplanations: [
      "",
      "The Supreme Court has no such approval role.",
      "The Constitution does not provide for referendums.",
      "The Inter-State Council is an advisory body established under Article 263."
    ],
    flashpoint: "Article 368(2) → special majority + ratification by ONE-HALF of the State legislatures for federal provisions.",
    source: "STATUTE"
  });

  Q({
    id: "CON-030", subject: S, topic: "c9", subtopic: "Article 143 advisory opinion",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "An opinion rendered by the Supreme Court under Article 143 of the Constitution is generally regarded as:",
    options: [
      "A binding precedent under Article 141",
      "Equivalent to a decree of the Court",
      "Advisory in nature and not strictly binding, nor enforceable through the contempt jurisdiction",
      "An order enforceable through the contempt jurisdiction"
    ],
    correctIndex: 2,
    explanation: "The advisory jurisdiction under Article 143 produces an opinion. It is not a 'law declared' by the Court under Article 141, is not binding on the courts in the way a judgment is, and is not enforceable through contempt.",
    legalBasis: "Articles 141 and 143, Constitution of India.",
    wrongOptionExplanations: [
      "An advisory opinion is not 'law declared' within Article 141 in the strict sense.",
      "An opinion is not a decree and creates no executable rights.",
      "",
      "The opinion is not enforceable by contempt, which is precisely why it is described as advisory."
    ],
    flashpoint: "Article 143 → advisory opinion; NOT binding; NOT enforceable by contempt.",
    source: "STATUTE"
  });

  Q({
    id: "CON-031", subject: S, topic: "c9", subtopic: "Ordinance re-promulgation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In which decision did the Supreme Court describe the repeated re-promulgation of Ordinances without placing them before the Legislature as a 'fraud on the Constitution'?",
    options: [
      "D.C. Wadhwa v. State of Bihar, AIR 1987 SC 579",
      "Shamsher Singh v. State of Punjab, AIR 1974 SC 2192",
      "R.C. Cooper v. Union of India, AIR 1970 SC 564",
      "Krishna Kumar Singh v. State of Bihar, (2017) 3 SCC 1"
    ],
    correctIndex: 0,
    explanation: "D.C. Wadhwa v. State of Bihar is the decision in which the Bihar practice of re-promulgating Ordinances, after they had ceased to be valid, was condemned as a fraud on the Constitution. Krishna Kumar Singh (2017) 3 SCC 1 later reinforced the position and rejected the doctrine of revival of Ordinances.",
    legalBasis: "Article 213, Constitution of India; D.C. Wadhwa v. State of Bihar, AIR 1987 SC 579; Krishna Kumar Singh v. State of Bihar, (2017) 3 SCC 1.",
    wrongOptionExplanations: [
      "",
      "Shamsher Singh concerned the Governor's discretion and the aid and advice of the Council of Ministers.",
      "R.C. Cooper concerned the bank nationalisation legislation.",
      "Krishna Kumar Singh (2017) followed and strengthened the principle but the 'fraud on the Constitution' expression in the re-promulgation context is associated with D.C. Wadhwa (1987); read the year in the question carefully."
    ],
    flashpoint: "'Fraud on the Constitution' — re-promulgation of Ordinances → D.C. Wadhwa (1987) AIR 1987 SC 579; reinforced by Krishna Kumar Singh (2017) 3 SCC 1.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-032", subject: S, topic: "c9", subtopic: "Article 141 precedent",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Article 141 of the Constitution provides that:",
    options: [
      "The law declared by the Supreme Court shall be binding on all courts within the territory of India",
      "The law declared by the Supreme Court shall be binding only on the High Courts",
      "The law declared by the High Courts shall be binding on all subordinate courts in India",
      "The advisory opinion of the Supreme Court shall be binding on all courts"
    ],
    correctIndex: 0,
    explanation: "Article 141 makes the law declared by the Supreme Court binding on all courts within the territory of India. Article 144 supplements it by requiring all authorities, civil and judicial, to act in aid of the Supreme Court.",
    legalBasis: "Articles 141 and 144, Constitution of India.",
    wrongOptionExplanations: [
      "",
      "The binding effect is wider than the High Courts alone.",
      "A High Court's decision binds only the courts subordinate to it.",
      "An Article 143 opinion is advisory and not binding."
    ],
    flashpoint: "Article 141 → law declared by the SUPREME COURT binds ALL courts in India.",
    source: "STATUTE"
  });

  Q({
    id: "CON-033", subject: S, topic: "c10", subtopic: "Right to privacy",
    difficulty: "Moderate", cognitiveLevel: "Analysis", questionType: "Assertion-Reason",
    question: "Assertion (A): The right to privacy has been judicially recognised as an integral part of Article 21 of the Constitution of India.\nReason (R): Privacy is expressly enumerated as a separate fundamental right in Part III of the Constitution of India.\nDecide the correct option.",
    options: [
      "(A) is false, but (R) is true",
      "(A) is true, but (R) is false",
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)"
    ],
    correctIndex: 1,
    explanation: "In K.S. Puttaswamy (2017) 10 SCC 1 a nine-judge Bench held that privacy is protected as an intrinsic part of the right to life and personal liberty under Article 21 and as a part of the freedoms guaranteed by Part III. Privacy is not, however, separately enumerated as a fundamental right — which makes the Reason false.",
    legalBasis: "Article 21, Constitution of India; Justice K.S. Puttaswamy (Retd.) v. Union of India, (2017) 10 SCC 1.",
    wrongOptionExplanations: [
      "(A) is true — Puttaswamy is settled law.",
      "",
      "(R) is false: privacy is judicially read into Article 21, not expressly enumerated in Part III.",
      "The reason is not merely unexplanatory; it is factually wrong."
    ],
    flashpoint: "Privacy → part of Article 21 (judicially recognised). NOT expressly enumerated in Part III. Distractor Reason to watch for.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-034", subject: S, topic: "c10", subtopic: "Puttaswamy proportionality test",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In K.S. Puttaswamy v. Union of India, the Supreme Court laid down a three-fold requirement for a State intrusion into privacy to be valid. Which of the following correctly states that requirement?",
    options: [
      "Executive order, administrative necessity and a recorded reason",
      "Legality, a legitimate State aim, and proportionality",
      "Parliamentary approval, presidential assent and publication in the Gazette",
      "Prior judicial permission, notice to the affected person and a hearing"
    ],
    correctIndex: 1,
    explanation: "Puttaswamy requires (i) legality — the existence of a law; (ii) a legitimate State aim; and (iii) proportionality — a rational nexus between the objects and the means adopted, and the least restrictive means.",
    legalBasis: "Article 21, Constitution of India; Justice K.S. Puttaswamy (Retd.) v. Union of India, (2017) 10 SCC 1.",
    wrongOptionExplanations: [
      "An executive order is not a substitute for a law, and administrative necessity is not the test.",
      "",
      "Parliamentary approval and Gazette publication are not the Puttaswamy requirements.",
      "Prior judicial permission is not a universal requirement; the three-fold test governs."
    ],
    flashpoint: "Puttaswamy three-fold test → LEGALITY + LEGITIMATE AIM + PROPORTIONALITY.",
    source: "CASE"
  });

  Q({
    id: "CON-035", subject: S, topic: "c3", subtopic: "Article 21 — speedy trial",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The right to a speedy trial has been recognised by the Supreme Court as implicit in which Article of the Constitution?",
    options: ["Article 21", "Article 20(1)", "Article 19(1)(g)", "Article 22(1)"],
    correctIndex: 0,
    explanation: "In Hussainara Khatoon v. State of Bihar the Supreme Court held that the right to a speedy trial is implicit in the guarantee of life and personal liberty under Article 21.",
    legalBasis: "Article 21, Constitution of India; Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81.",
    wrongOptionExplanations: [
      "",
      "Article 20(1) concerns ex post facto laws.",
      "Article 19(1)(g) concerns the freedom to practise a profession.",
      "Article 22(1) concerns the right to be informed of the grounds of arrest and to consult a legal practitioner."
    ],
    flashpoint: "Speedy trial → implicit in ARTICLE 21 (Hussainara Khatoon, 1980).",
    source: "CASE"
  });

  Q({
    id: "CON-036", subject: S, topic: "c3", subtopic: "Article 21 — emergency medical care",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The case of Parmanand Katara v. Union of India (1989) is primarily associated with which of the following rights?",
    options: [
      "The right to a clean and healthy environment",
      "The right to emergency medical care",
      "The right to a speedy trial",
      "The right to shelter"
    ],
    correctIndex: 1,
    explanation: "Parmanand Katara v. Union of India held that Article 21 obliges doctors and hospitals to provide immediate medical treatment to a person in need, without waiting for procedural formalities, and that preservation of life takes precedence over legal procedure.",
    legalBasis: "Article 21, Constitution of India; Parmanand Katara v. Union of India, (1989) 4 SCC 286.",
    wrongOptionExplanations: [
      "The right to a clean environment was developed in Subhash Kumar and M.C. Mehta cases.",
      "",
      "Speedy trial comes from Hussainara Khatoon.",
      "The right to shelter was developed in Olga Tellis and Shantistar Builders cases."
    ],
    flashpoint: "Parmanand Katara (1989) 4 SCC 286 → right to EMERGENCY MEDICAL CARE under Article 21.",
    source: "CASE"
  });

  Q({
    id: "CON-037", subject: S, topic: "c6", subtopic: "Article 245 territorial nexus",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A State legislature imposes a tax on a person who carries on business outside the State but whose goods are sold within the State. The person challenges the law on the ground that Parliament alone may legislate with extra-territorial operation. Which principle governs the validity of the State law?",
    options: [
      "The doctrine of territorial nexus — Parliament alone can legislate on extraterritorial matters, so the State law is void",
      "A State law may have extra-territorial operation where there is a sufficient territorial nexus between the State and the subject matter of the legislation",
      "A State law with extra-territorial operation is valid only if the Union Government consents",
      "A State legislature has unlimited power to legislate for any territory in India"
    ],
    correctIndex: 1,
    explanation: "Article 245(1) empowers a State legislature to make laws for the whole or any part of the State, and Article 245(2) makes a law of Parliament not invalid merely on the ground of extra-territorial operation. A State law may operate outside the State if there is a real and sufficient territorial nexus with the subject matter.",
    legalBasis: "Article 245, Constitution of India; State of Bombay v. R.M.D. Chamarbaugwala, AIR 1957 SC 699.",
    wrongOptionExplanations: [
      "The doctrine of territorial nexus saves such legislation; the State law is not automatically void.",
      "",
      "Union consent is not the test for territorial nexus.",
      "A State legislature cannot legislate for the whole of India; its competence is confined to the State."
    ],
    flashpoint: "Doctrine of territorial nexus → a State law may operate extra-territorially if there is a SUFFICIENT NEXUS with the subject matter.",
    source: "CASE"
  });

  Q({
    id: "CON-038", subject: S, topic: "c1", subtopic: "Doctrine of severability",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The doctrine of severability permits a court to:",
    options: [
      "Sever the unconstitutional part of a statute and uphold the remaining part, provided the valid and invalid parts are separable",
      "Strike down the entire statute if any part of it is unconstitutional",
      "Suspend the operation of a statute pending amendment by the legislature",
      "Refer the statute to the President for reconsideration"
    ],
    correctIndex: 0,
    explanation: "Under the doctrine of severability, where the valid and invalid parts of a statute are distinct and separable, the court strikes down only the invalid part and upholds the rest.",
    legalBasis: "Article 13, Constitution of India; R.M.D. Chamarbaugwalla v. Union of India, AIR 1957 SC 628.",
    wrongOptionExplanations: [
      "",
      "That would be the opposite of severability.",
      "Courts do not suspend statutes pending legislative amendment in this manner.",
      "There is no such reference mechanism for ordinary statutes."
    ],
    flashpoint: "Severability → strike the BAD part, keep the GOOD part (eclipse → the pre-Constitution law is dormant).",
    source: "STATUTE"
  });

  Q({
    id: "CON-039", subject: S, topic: "c2", subtopic: "Article 15 — exceptions",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Article 15(3) of the Constitution, the State is permitted to make which of the following?",
    options: [
      "Any law discriminating against men in matters of employment",
      "Special provisions only for members of Scheduled Castes and Scheduled Tribes",
      "Special provisions for women and children",
      "Special provisions for residents of a particular State"
    ],
    correctIndex: 2,
    explanation: "Article 15(3) enables the State to make special provisions for women and children, and it operates notwithstanding Article 15(1). Special provisions for Scheduled Castes, Scheduled Tribes and socially and educationally backward classes are covered by Article 15(4) and 15(5).",
    legalBasis: "Article 15(3), (4) and (5), Constitution of India.",
    wrongOptionExplanations: [
      "Article 15(3) authorises protective, not discriminatory, measures; the measures must be for the benefit of women and children.",
      "Special provisions for Scheduled Castes and Scheduled Tribes flow from Article 15(4), not Article 15(3).",
      "",
      "Residence-based preferences are dealt with under Article 16(3) in the context of public employment."
    ],
    flashpoint: "Article 15(3) → special provisions for WOMEN AND CHILDREN. Article 15(4)/(5) → SEBCs, SCs and STs.",
    source: "STATUTE"
  });

  Q({
    id: "CON-040", subject: S, topic: "c3", subtopic: "Article 19(1)(a) and reasonable restriction",
    difficulty: "Difficult", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A State law bans the publication of any criticism of the Government, on the ground that such criticism may lower the prestige of the State. The law is challenged. Which of the following is the correct constitutional position?",
    options: [
      "The restriction is valid because it is imposed by a law made by a competent legislature",
      "The restriction is invalid, because a reasonable restriction under Article 19(2) must be founded on one of the enumerated grounds and must be proportionate; mere criticism of the Government does not fall within the permitted grounds",
      "The restriction is valid because freedom of speech is not an absolute right",
      "The restriction is invalid because freedom of speech is an absolute right"
    ],
    correctIndex: 1,
    explanation: "Article 19(2) permits restrictions only on the enumerated grounds — sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation or incitement to an offence. A restriction on criticism of the Government that does not fall within these grounds and is not proportionate is void.",
    legalBasis: "Article 19(1)(a) and 19(2), Constitution of India; Kedar Nath Singh v. State of Bihar, AIR 1962 SC 955.",
    wrongOptionExplanations: [
      "Competence of the legislature is not enough; the restriction must satisfy Article 19(2).",
      "",
      "'Freedom is not absolute' does not save a restriction that is not within Article 19(2).",
      "Article 19(1)(a) is subject to reasonable restrictions under Article 19(2) — it is not absolute."
    ],
    flashpoint: "Article 19(2) → restrictions only on ENUMERATED grounds and proportionate. Criticism of the Government is not a ground.",
    source: "CASE"
  });

  Q({
    id: "CON-041", subject: S, topic: "c5", subtopic: "Article 32 — locus standi",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The relaxation of the traditional rule of locus standi, permitting public-spirited persons to approach the court for the enforcement of the fundamental rights of others, is most closely associated with:",
    options: [
      "The evolution of Public Interest Litigation",
      "Judicial review of administrative action",
      "The expansion of the writ jurisdiction under Article 226",
      "The enforcement of fundamental rights through habeas corpus alone"
    ],
    correctIndex: 0,
    explanation: "The relaxation of locus standi is the defining feature of Public Interest Litigation. The Supreme Court permitted a bona fide public-spirited person to move the court on behalf of those who cannot approach it themselves.",
    legalBasis: "Articles 32 and 226, Constitution of India; S.P. Gupta v. Union of India, 1981 Supp SCC 87.",
    wrongOptionExplanations: [
      "",
      "Judicial review of administrative action is a separate concept within administrative law.",
      "Article 226 jurisdiction was not 'expanded' by the locus standi relaxation — the relaxation concerns standing, not jurisdiction.",
      "The relaxation is not confined to habeas corpus."
    ],
    flashpoint: "Locus standi relaxation → the essence of PIL (S.P. Gupta, 1981 Supp SCC 87).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CON-042", subject: S, topic: "c1", subtopic: "Article 13(3) — 'law'",
    difficulty: "Difficult", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "For the purposes of Article 13(3) of the Constitution, the expression 'law' includes:",
    options: [
      "Only an Act of Parliament",
      "Ordinances, orders, bye-laws, rules, regulations, notifications, custom or usage having the force of law in India",
      "Only subordinate legislation",
      "Constitutional amendments made under Article 368"
    ],
    correctIndex: 1,
    explanation: "Article 13(3) defines 'law' widely to include any Ordinance, order, bye-law, rule, regulation, notification, custom or usage having in the territory of India the force of law — but not a constitutional amendment, which is excluded by Article 13(4).",
    legalBasis: "Article 13(3) and 13(4), Constitution of India.",
    wrongOptionExplanations: [
      "The definition is much wider than an Act of Parliament.",
      "",
      "Subordinate legislation is only one limb of the wide definition.",
      "Article 13(4) expressly excludes amendments under Article 368."
    ],
    flashpoint: "Article 13(3) → 'law' includes ORDINANCE, ORDER, BYE-LAW, RULE, REGULATION, NOTIFICATION, CUSTOM OR USAGE having the force of law.",
    source: "STATUTE"
  });

  Q({
    id: "CON-043", subject: S, topic: "c6", subtopic: "Colourable legislation",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The doctrine of colourable legislation means that:",
    options: [
      "A legislature may give a law any colour it pleases so long as its competence exists",
      "The legislation must be printed in the language prescribed by the Constitution",
      "The legislature cannot, by disguising a law as one on a subject within its competence, in substance legislate on a subject beyond its competence",
      "A law may be challenged only if its preamble states the wrong legislative entry"
    ],
    correctIndex: 2,
    explanation: "Colourable legislation addresses the situation where a legislature, though ostensibly within its field, in substance and effect legislates on a matter beyond its competence. The maxim is that what cannot be done directly cannot be done indirectly.",
    legalBasis: "Articles 245 and 246, Constitution of India; K.C. Gajapati Narayan Deo v. State of Orissa, AIR 1953 SC 375.",
    wrongOptionExplanations: [
      "The competence of the legislature is a question of substance, not of the label adopted.",
      "The doctrine has nothing to do with the language of printing.",
      "",
      "The challenge goes to substance, not to the accuracy of the preamble."
    ],
    flashpoint: "Colourable legislation → what cannot be done directly cannot be done INDIRECTLY (K.C. Gajapati Narayan Deo).",
    source: "CASE"
  });

  Q({
    id: "CON-044", subject: S, topic: "c7", subtopic: "Article 360",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "A Proclamation of financial emergency under Article 360 of the Constitution may be issued by the President:",
    options: [
      "Only on the recommendation of the Reserve Bank of India",
      "On being satisfied that a situation has arisen whereby the financial stability or credit of India or of any part of its territory is threatened",
      "Only during the operation of a national emergency under Article 352",
      "Only on a resolution passed by both Houses of Parliament"
    ],
    correctIndex: 1,
    explanation: "Article 360(1) permits the President to issue a Proclamation of financial emergency if satisfied that the financial stability or credit of India or any part of its territory is threatened. The Proclamation requires approval by both Houses within two months.",
    legalBasis: "Article 360, Constitution of India.",
    wrongOptionExplanations: [
      "There is no requirement of an RBI recommendation.",
      "",
      "A financial emergency does not require a prior national emergency.",
      "Parliamentary approval is required for continuation, but the Proclamation is issued on the President's satisfaction and is not preceded by a resolution."
    ],
    flashpoint: "Article 360 → FINANCIAL emergency; approval by both Houses within TWO MONTHS.",
    source: "STATUTE"
  });

  Q({
    id: "CON-045", subject: S, topic: "c3", subtopic: "Article 21 — clean environment",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The right to a clean and healthy environment has been read into which Article of the Constitution?",
    options: ["Article 21", "Article 19(1)(a)", "Article 23", "Article 29"],
    correctIndex: 0,
    explanation: "The Supreme Court has consistently held that the right to life under Article 21 includes the right to a clean and healthy environment, and has linked it with the directive principles in Articles 48A and 51A(g).",
    legalBasis: "Article 21, Constitution of India; Subhash Kumar v. State of Bihar, (1991) 1 SCC 598.",
    wrongOptionExplanations: [
      "",
      "Article 19(1)(a) concerns freedom of speech and expression.",
      "Article 23 concerns exploitation and forced labour.",
      "Article 29 concerns cultural and educational rights of minorities."
    ],
    flashpoint: "Clean environment → part of ARTICLE 21 (Subhash Kumar, 1991).",
    source: "CASE"
  });

  Q({
    id: "CON-046", subject: S, topic: "c4", subtopic: "Article 25 — essential religious practice",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In determining whether a practice is protected under Article 25 of the Constitution, the Supreme Court applies the test of whether the practice is:",
    options: [
      "Mentioned in the scriptures of the religion",
      "Recognised by the State as religious",
      "Practised by a majority of the followers of the religion",
      "Essential and integral to the religion"
    ],
    correctIndex: 3,
    explanation: "The essential religious practices test asks whether the practice is essential and integral to the religion, so that its removal would change the character of the religion. The test is applied by the court and is not determined by the number of followers.",
    legalBasis: "Articles 25 and 26, Constitution of India; Commissioner, Hindu Religious Endowments, Madras v. Sri Lakshmindra Thirtha Swamiar, AIR 1954 SC 282; Shirur Mutt case.",
    wrongOptionExplanations: [
      "Mention in the scriptures is a relevant but not decisive consideration.",
      "State recognition is not the test.",
      "Numerical majority among followers is not the test.",
      ""
    ],
    flashpoint: "Article 25 → the ESSENTIAL RELIGIOUS PRACTICES test (Shirur Mutt, AIR 1954 SC 282).",
    source: "CASE"
  });

  Q({
    id: "CON-047", subject: S, topic: "c1", subtopic: "Article 12 — 'other authorities'",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A company incorporated under the Companies Act is wholly owned and controlled by the Government and discharges functions of a public nature. In a writ petition alleging violation of Article 14, would it be amenable to the writ jurisdiction?",
    options: [
      "Yes, because a body which is an instrumentality or agency of the Government, or is financially, functionally and administratively dominated by the Government, falls within 'other authorities' under Article 12",
      "No, because it is a company incorporated under the Companies Act and not a 'State' under Article 12",
      "No, unless it is a department of the Government",
      "Yes, but only if it is a statutory corporation created by an Act of Parliament"
    ],
    correctIndex: 0,
    explanation: "Ajay Hasia v. Khalid Mujib laid down tests to determine whether a body is an instrumentality or agency of the State. Where the State's financial, functional and administrative control is pervasive, the body answers the description of 'other authorities' under Article 12, whatever its incorporation status.",
    legalBasis: "Article 12, Constitution of India; Ajay Hasia v. Khalid Mujib Sehravardi, (1981) 1 SCC 722; Pradeep Kumar Biswas v. Indian Institute of Chemical Biology, (2002) 5 SCC 111.",
    wrongOptionExplanations: [
      "",
      "Incorporation under the Companies Act is not decisive; the substance of the control test governs.",
      "Being a department is not a requirement.",
      "A statutory corporation is one route, but an instrumentality of the Government may also qualify."
    ],
    flashpoint: "Article 12 'other authorities' → instrumentality or agency test (Ajay Hasia; Pradeep Kumar Biswas).",
    source: "CASE"
  });

  Q({
    id: "CON-048", subject: S, topic: "c2", subtopic: "Article 16 — equality of opportunity",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which Article of the Constitution guarantees equality of opportunity in matters of public employment?",
    options: ["Article 14", "Article 16", "Article 15", "Article 17"],
    correctIndex: 1,
    explanation: "Article 16 guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State, and permits reservation in favour of backward classes under Article 16(4).",
    legalBasis: "Article 16, Constitution of India.",
    wrongOptionExplanations: [
      "Article 14 is the general equality guarantee.",
      "",
      "Article 15 prohibits discrimination on specified grounds generally.",
      "Article 17 abolishes untouchability."
    ],
    flashpoint: "Article 16 → EQUALITY OF OPPORTUNITY IN PUBLIC EMPLOYMENT; Article 16(4) → reservation for backward classes.",
    source: "STATUTE"
  });

  Q({
    id: "CON-049", subject: S, topic: "c6", subtopic: "Federal structure — Seventh Schedule",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The three Lists distributing legislative subjects between the Union and the States are contained in which Schedule to the Constitution?",
    options: ["The Fifth Schedule", "The Sixth Schedule", "The Eighth Schedule", "The Seventh Schedule"],
    correctIndex: 3,
    explanation: "The Seventh Schedule contains List I (Union List), List II (State List) and List III (Concurrent List).",
    legalBasis: "Article 246 and the Seventh Schedule, Constitution of India.",
    wrongOptionExplanations: [
      "The Fifth Schedule deals with the administration of Scheduled Areas and Scheduled Tribes.",
      "The Sixth Schedule deals with the administration of tribal areas in certain States.",
      "The Eighth Schedule lists the recognised languages.",
      ""
    ],
    flashpoint: "Seventh Schedule → UNION LIST (I), STATE LIST (II), CONCURRENT LIST (III).",
    source: "STATUTE"
  });

  Q({
    id: "CON-050", subject: S, topic: "c8", subtopic: "24th and 42nd Amendments",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Multi-statement",
    question: "Consider the following statements:\nI. The 24th Constitutional Amendment inserted Article 13(4) and Article 368(3).\nII. The 42nd Constitutional Amendment added Article 368(4) and (5), seeking to exclude judicial review of amendments.\nIII. Article 368(4) as inserted by the 42nd Amendment was held to be beyond the amending power in Minerva Mills.\nWhich of the statements are correct?",
    options: ["I and II only", "I only", "II and III only", "I, II and III"],
    correctIndex: 3,
    explanation: "All three statements are correct. The 24th Amendment introduced Article 13(4) and Article 368(3); the 42nd Amendment inserted Article 368(4) and (5) to oust judicial review of amendments; and in Minerva Mills Ltd. v. Union of India the Supreme Court struck down Article 368(4) and (5) as damaging the basic structure.",
    legalBasis: "Articles 13(4), 368(3), 368(4) and 368(5), Constitution of India; Minerva Mills Ltd. v. Union of India, (1980) 3 SCC 625.",
    wrongOptionExplanations: ["Statement III is also correct.", "Statements II and III are also correct.", "Statement I is also correct.", ""],
    flashpoint: "24th Amendment → Article 13(4) + Article 368(3). 42nd Amendment → Article 368(4)&(5), STRUCK DOWN in Minerva Mills (1980) 3 SCC 625.",
    source: "CASE"
  });

  Q({
    id: "CON-051", subject: S, topic: "c5", subtopic: "Article 226 — discretionary",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is the correct statement about the writ jurisdiction of the High Court under Article 226?",
    options: [
      "It is a fundamental right of the petitioner and must be exercised by the High Court in every case",
      "It is discretionary; the High Court may refuse relief on grounds such as the existence of an alternative remedy, delay or suppression of material facts",
      "It can be exercised only when the petitioner has no other remedy whatsoever",
      "It can be exercised only against the State Government and not against a private body"
    ],
    correctIndex: 1,
    explanation: "Article 226 confers a discretionary jurisdiction. The High Court may decline relief where an alternative statutory remedy exists, where the petition is belated, where material facts are suppressed, or where disputed questions of fact arise. An alternative remedy is, however, not an absolute bar.",
    legalBasis: "Article 226, Constitution of India; Whirlpool Corporation v. Registrar of Trade Marks, (1998) 8 SCC 1.",
    wrongOptionExplanations: [
      "Article 226 is not a fundamental right; Article 32 is.",
      "",
      "The existence of an alternative remedy is a self-imposed restriction, not an absolute bar, and Article 226 is not confined to cases where no other remedy exists.",
      "A writ may in appropriate cases issue against a private body discharging a public function."
    ],
    flashpoint: "Article 226 → DISCRETIONARY; alternative remedy is a self-imposed restraint, not an absolute bar (Whirlpool).",
    source: "CASE"
  });

  Q({
    id: "CON-052", subject: S, topic: "c9", subtopic: "Article 123 Ordinance",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following statements about the Ordinance-making power of the President under Article 123 is correct?",
    options: [
      "An Ordinance may be promulgated at any time and remains in force indefinitely",
      "An Ordinance may be promulgated only when both Houses of Parliament are not in session, and it ceases to operate at the expiration of six weeks from the reassembly of Parliament",
      "An Ordinance has the same force as an Act of Parliament and is exempt from the requirement of being laid before Parliament",
      "An Ordinance may be promulgated only with the prior approval of the Supreme Court"
    ],
    correctIndex: 1,
    explanation: "Article 123 permits the President to promulgate Ordinances when both Houses are not in session, if immediate action is necessary. An Ordinance has the same force as an Act of Parliament but must be laid before Parliament and ceases to operate six weeks from reassembly (or earlier if disapproved).",
    legalBasis: "Article 123, Constitution of India; D.C. Wadhwa v. State of Bihar, AIR 1987 SC 579; Krishna Kumar Singh v. State of Bihar, (2017) 3 SCC 1.",
    wrongOptionExplanations: [
      "An Ordinance is time-limited and cannot remain in force indefinitely.",
      "",
      "An Ordinance must be laid before Parliament; it is not exempt.",
      "There is no requirement of prior Supreme Court approval."
    ],
    flashpoint: "Article 123 → Ordinance only when BOTH Houses are not in session; ceases SIX WEEKS after reassembly.",
    source: "STATUTE"
  });

  Q({
    id: "CON-053", subject: S, topic: "c3", subtopic: "Article 21 — right to livelihood",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In Olga Tellis v. Bombay Municipal Corporation, the Supreme Court held that:",
    options: [
      "The right to livelihood is an integral facet of the right to life under Article 21, since no person can live without the means of living",
      "The right to livelihood is not a part of the right to life under Article 21",
      "Pavement dwellers have an absolute right to remain on the pavement without any regulation",
      "The right to livelihood is protected only under Article 19(1)(g) and not under Article 21"
    ],
    correctIndex: 0,
    explanation: "Olga Tellis recognised that the right to livelihood is an integral facet of Article 21, because the means of livelihood are indispensable to life. The Court nevertheless upheld the power of the municipal authority to remove encroachments, subject to a fair procedure.",
    legalBasis: "Article 21, Constitution of India; Olga Tellis v. Bombay Municipal Corporation, (1985) 3 SCC 545.",
    wrongOptionExplanations: [
      "",
      "The Court expressly held the contrary.",
      "The Court did not recognise an absolute right to remain on the pavement.",
      "The right was located in Article 21, not exclusively in Article 19(1)(g)."
    ],
    flashpoint: "Olga Tellis (1985) 3 SCC 545 → RIGHT TO LIVELIHOOD is part of ARTICLE 21.",
    source: "CASE"
  });

  Q({
    id: "CON-054", subject: S, topic: "c2", subtopic: "Article 14 — Article 16 relationship",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Statement-Conclusion",
    question: "Statement: Article 14 guarantees equality before the law and the equal protection of the laws, and Article 16 guarantees equality of opportunity in matters of public employment. Article 16 is not exhaustive of the general principles laid down in Article 14, and a classification that fails Article 14 cannot stand merely because it is framed under Article 16(4).\nConclusion I: Article 16 is a facet of Article 14, and the general principles of equality govern reservations made under Article 16(4).\nConclusion II: Reservation under Article 16(4) is valid only if the backward class under consideration is adequately represented in the services of the State.\nWhich conclusion(s) follow?",
    options: [
      "Both Conclusions I and II follow",
      "Only Conclusion II follows",
      "Neither Conclusion I nor II follows",
      "Only Conclusion I follows"
    ],
    correctIndex: 0,
    explanation: "Both conclusions follow. Article 16 is a facet of Article 14, and the enabling provisions of Article 16(4) are governed by the general equality principles. The requirement of inadequate representation of the backward class is a condition for the exercise of the power under Article 16(4).",
    legalBasis: "Articles 14 and 16(4), Constitution of India; Indra Sawhney v. Union of India, 1992 Supp (3) SCC 217.",
    wrongOptionExplanations: [
      "",
      "Conclusion I also follows.",
      "Both conclusions are supported by settled law.",
      "Conclusion II also follows — inadequate representation in the services of the State is a condition for Article 16(4)."
    ],
    flashpoint: "Article 16 is a FACET of Article 14. Article 16(4) requires INADEQUATE REPRESENTATION in the services of the State.",
    source: "CASE"
  });

  Q({
    id: "CON-055", subject: S, topic: "c4", subtopic: "Article 25 — freedom of religion",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Article 25 of the Constitution guarantees to all persons:",
    options: [
      "An absolute right of religious conversion through force or fraud",
      "The right freely to profess, practise and propagate religion, subject to public order, morality and health and to the other provisions of Part III",
      "A right available only to citizens of India",
      "A right that cannot be regulated by the State in any circumstances"
    ],
    correctIndex: 1,
    explanation: "Article 25 confers the freedom of conscience and the right freely to profess, practise and propagate religion, expressly subject to public order, morality and health and to the other provisions of Part III.",
    legalBasis: "Article 25, Constitution of India; Stainislaus v. State of M.P., (1977) 1 SCC 677.",
    wrongOptionExplanations: [
      "The right to propagate does not include a right to convert by force, fraud or inducement (Stainislaus).",
      "",
      "Article 25 is available to all persons, not citizens alone.",
      "The right is expressly subject to public order, morality and health and may be regulated."
    ],
    flashpoint: "Article 25 → freedom of conscience + profess, practise, propagate — subject to PUBLIC ORDER, MORALITY AND HEALTH.",
    source: "STATUTE"
  });

  Q({
    id: "CON-056", subject: S, topic: "c1", subtopic: "Article 12 — private bodies",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A private unaided school refuses admission to a child on the ground of the child's caste. The school receives no Government aid but functions under a statutory scheme of recognition. Which of the following is the most accurate constitutional position on maintainability of a writ petition under Article 226?",
    options: [
      "A writ does not lie at all, because the school is a private body",
      "A writ lies only before the Supreme Court under Article 32",
      "A writ lies only if the school is funded by the Government to the extent of 100%",
      "A writ lies because a private body discharging a public function or a statutory obligation is amenable to the writ jurisdiction of the High Court under Article 226"
    ],
    correctIndex: 3,
    explanation: "Article 226 is wider than Article 32 in that a writ may issue to any person or authority within the High Court's territorial jurisdiction, including a private body discharging a public function or a statutory duty. Recognition under a statutory scheme imposes public-law obligations.",
    legalBasis: "Article 226, Constitution of India; Andi Mukta Sadguru Shree Muktajee Vandas Swami Suvarna Jayanti Mahotsav Smarak Trust v. V.R. Rudani, (1989) 2 SCC 691.",
    wrongOptionExplanations: [
      "Article 226 is not confined to State authorities as defined in Article 12.",
      "Article 226 lies before the High Court; Article 32 lies before the Supreme Court for fundamental rights.",
      "The extent of funding is relevant but not a 100% condition.",
      ""
    ],
    flashpoint: "Article 226 → may issue to a PRIVATE BODY discharging a PUBLIC FUNCTION (Andi Mukta Sadguru Trust, 1989).",
    source: "CASE"
  });

  Q({
    id: "CON-057", subject: S, topic: "c5", subtopic: "Res judicata in writ petitions",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about a habeas corpus petition is correct?",
    options: [
      "It is available only against a detention ordered by the police",
      "It is available only where the detention is by a private individual",
      "It lies to secure the release of a person detained unlawfully, and can be moved by the detained person or by any other person on his behalf",
      "It cannot be moved against a State Government"
    ],
    correctIndex: 2,
    explanation: "Habeas corpus is the earliest and most celebrated writ of liberty. It is available not only to the person detained but also to any other person on his behalf, and lies against both public authorities and private detention.",
    legalBasis: "Articles 32 and 226, Constitution of India.",
    wrongOptionExplanations: [
      "It is available against any unlawful detention, whether ordered by the police, another authority or a private person.",
      "Private detention is one case, not the only case.",
      "",
      "It lies against the State and its authorities."
    ],
    flashpoint: "Habeas corpus → 'produce the body'; available to the detained person OR any other person on his behalf.",
    source: "STATUTE"
  });

  Q({
    id: "CON-058", subject: S, topic: "c7", subtopic: "Article 352 — armed rebellion",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Article 352 of the Constitution, a Proclamation of Emergency may be issued on the ground of:",
    options: [
      "War, external aggression or armed rebellion",
      "Internal disturbance",
      "Failure of constitutional machinery in a State",
      "Financial instability"
    ],
    correctIndex: 0,
    explanation: "Following the 44th Amendment, the expression 'internal disturbance' was replaced by 'armed rebellion'. Article 352 therefore permits a Proclamation on grounds of war, external aggression or armed rebellion.",
    legalBasis: "Article 352, Constitution of India (as amended by the 44th Amendment Act, 1978).",
    wrongOptionExplanations: [
      "",
      "'Internal disturbance' was the pre-44th Amendment language and is no longer the constitutional ground.",
      "Failure of constitutional machinery is the ground under Article 356.",
      "Financial instability is the ground under Article 360."
    ],
    flashpoint: "Article 352 → WAR / EXTERNAL AGGRESSION / ARMED REBELLION. ('Internal disturbance' was replaced by the 44th Amendment.)",
    source: "STATUTE"
  });

  Q({
    id: "CON-059", subject: S, topic: "c3", subtopic: "Article 19 — freedom of trade",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A State law prohibits the sale of certain commodities by any person within municipal limits on the ground that the trade creates a public nuisance. A trader challenges the restriction on the ground that it is unreasonable. Which of the following correctly describes the standard the court will apply?",
    options: [
      "The court will examine whether the restriction is in the interests of the general public and reasonable, considering the nature of the trade, the duration and the extent of the restriction and the proportion between the object and the means",
      "The court will presume the restriction valid because it is imposed by a legislature",
      "The court will not examine the reasonableness of the restriction at all",
      "The court will strike down the restriction automatically because Article 19(1)(g) is absolute"
    ],
    correctIndex: 0,
    explanation: "Article 19(6) permits reasonable restrictions on the freedom of trade or business in the interests of the general public. Reasonableness is examined in the light of the nature of the right, the object of the restriction and the proportion between the object and the means adopted.",
    legalBasis: "Article 19(1)(g) and 19(6), Constitution of India.",
    wrongOptionExplanations: [
      "",
      "There is no presumption of validity merely because the restriction is legislative.",
      "The reasonableness of a restriction is always justiciable.",
      "Article 19(1)(g) is subject to reasonable restrictions under Article 19(6)."
    ],
    flashpoint: "Article 19(6) → reasonable restrictions on trade in the INTERESTS OF THE GENERAL PUBLIC.",
    source: "STATUTE"
  });

  Q({
    id: "CON-060", subject: S, topic: "c8", subtopic: "Basic structure — test",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Statement-Conclusion",
    question: "Statement: The amending power of Parliament under Article 368 is wide, but it cannot be so exercised as to damage or destroy the essential features of the Constitution.\nConclusion I: A constitutional amendment that destroys judicial review is liable to be struck down.\nConclusion II: Every constitutional amendment that alters the text of Part III is unconstitutional.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion I follows", "Only Conclusion II follows", "Neither Conclusion I nor II follows"],
    correctIndex: 1,
    explanation: "Conclusion I follows: judicial review is a basic feature, so an amendment destroying it is invalid (Minerva Mills; L. Chandra Kumar). Conclusion II does not follow: an amendment that alters Part III is not automatically unconstitutional — the test is whether the amendment damages the basic structure.",
    legalBasis: "Article 368, Constitution of India; Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225; Minerva Mills Ltd. v. Union of India, (1980) 3 SCC 625; L. Chandra Kumar v. Union of India, (1997) 3 SCC 261.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "", "Conclusion II is too broad — amendment of Part III is not per se invalid.", "Conclusion I follows."],
    flashpoint: "Basic structure → the test is DAMAGE TO ESSENTIAL FEATURES, not mere textual alteration of Part III.",
    source: "CASE"
  });
})();
