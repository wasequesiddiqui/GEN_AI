/* ============================================================================
 * AIBE XXI — Question Bank: Family Law
 * Weightage: 8 / 100. 48 questions across the personal-law statutes.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "family";

  /* -------------------------------------------------------- Hindu marriage */
  Q({
    id: "FAM-001", subject: S, topic: "f1", subtopic: "Conditions for a valid Hindu marriage",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 5 of the Hindu Marriage Act, 1955, which of the following conditions is NOT a condition for a valid Hindu marriage?",
    options: [
      "Neither party has a spouse living at the time of the marriage",
      "Neither party is suffering from a mental disorder of such a kind or to such an extent as to be unfit for marriage and the procreation of children",
      "The parties have completed at least one year of engagement before the marriage",
      "Neither party is within the degrees of a prohibited relationship unless the custom or usage governing each of them permits it"
    ],
    correctIndex: 2,
    explanation: "Section 5 lists the conditions of a valid Hindu marriage: monogamy (neither party has a spouse living); soundness of mind and freedom from mental disorder and attacks of insanity; the age condition (the bridegroom has completed twenty-one years and the bride eighteen years); that the parties are not within the degrees of a prohibited relationship unless custom permits; and that the parties are not sapindas of each other unless custom permits. There is no requirement of a minimum period of engagement.",
    legalBasis: "Section 5, Hindu Marriage Act, 1955.",
    wrongOptionExplanations: ["This is the condition of monogamy under s.5(i).", "This is the condition under s.5(ii).", "", "This is the condition under s.5(iv) and (v)."],
    flashpoint: "HMA s.5 → monogamy | sound mind | bridegroom 21 / bride 18 | not within prohibited degrees | not sapindas.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-002", subject: S, topic: "f1", subtopic: "Void and voidable marriages",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Hindu Marriage Act, 1955, a marriage is VOID under Section 11 where it is in contravention of:",
    options: [
      "Section 5(i), (iv) or (v) — bigamy, prohibited degrees, or sapinda relationship",
      "Section 5(iii) — the age condition",
      "Section 5(ii) — unsoundness of mind",
      "Section 5(ii) only"
    ],
    correctIndex: 0,
    explanation: "Section 11 makes a marriage void if it contravenes s.5(i) (a spouse living), s.5(iv) (prohibited degrees) or s.5(v) (sapinda relationship). A marriage in contravention of the age condition in s.5(iii) is neither void nor voidable, though it is punishable under s.18 and the child of such a marriage may be legitimate.",
    legalBasis: "Sections 5, 11 and 12, Hindu Marriage Act, 1955.",
    wrongOptionExplanations: [
      "",
      "Breach of the age condition does not make the marriage void.",
      "Unsoundness of mind renders a marriage voidable under s.12, not void.",
      "Contravention of s.5(ii) is a ground for a voidable marriage."
    ],
    flashpoint: "HMA → VOID (s.11) if s.5(i), (iv) or (v) is contravened. VOIDABLE (s.12) for s.5(ii) and fraud/concealment/pregnancy. Age breach → VALID but PUNISHABLE.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-003", subject: S, topic: "f1", subtopic: "Voidable marriage — grounds",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 12 of the Hindu Marriage Act, 1955, a marriage is voidable on which of the following grounds?",
    options: [
      "That the marriage has not been consummated owing to the impotence of one of the parties, and that the consent of the petitioner was obtained by force or fraud",
      "That the parties belong to different castes",
      "That the parties have no children",
      "That the marriage was solemnised without a religious ceremony"
    ],
    correctIndex: 0,
    explanation: "Section 12 lists the grounds on which a marriage is voidable: that the marriage has not been consummated owing to the impotence of either party; that the marriage is in contravention of s.5(ii) (unsoundness of mind); that the consent of the petitioner was obtained by force or fraud; and that the respondent was at the time of the marriage pregnant by some person other than the petitioner. The grounds relating to force, fraud and pregnancy must be pleaded within the statutory time limits.",
    legalBasis: "Section 12, Hindu Marriage Act, 1955.",
    wrongOptionExplanations: ["", "Inter-caste marriage is neither void nor voidable under the Act.", "Childlessness is a ground for relief in limited circumstances but not a s.12 ground.", "The absence of a religious ceremony goes to the validity of solemnisation under s.7."],
    flashpoint: "HMA s.12 VOIDABLE → impotence | s.5(ii) unsoundness | force or fraud | pregnancy by another.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-004", subject: S, topic: "f1", subtopic: "Divorce by mutual consent",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 13B of the Hindu Marriage Act, 1955, a petition for divorce by mutual consent may be presented where the parties have been living separately for a period of:",
    options: ["Six months or more", "Two years or more", "One year or more", "Three years or more"],
    correctIndex: 2,
    explanation: "Section 13B(1) permits a petition for divorce by mutual consent where the parties have been living separately for a period of one year or more, have not been able to live together, and have mutually agreed that the marriage should be dissolved. Section 13B(2) provides for a waiting period of six months, which may be waived as held in Amardeep Singh v. Harveen Kaur.",
    legalBasis: "Section 13B, Hindu Marriage Act, 1955; Amardeep Singh v. Harveen Kaur, (2017) 8 SCC 746.",
    wrongOptionExplanations: [
      "Six months is the waiting period under s.13B(2), not the period of separation.",
      "Two years is the period of desertion under s.13(1)(ib).",
      "",
      "Three years is not the prescribed period."
    ],
    flashpoint: "HMA s.13B → ONE YEAR of living separately; the SIX-MONTH waiting period may be WAIVED (Amardeep Singh, 2017).",
    source: "STATUTE"
  });

  Q({
    id: "FAM-005", subject: S, topic: "f1", subtopic: "Desertion",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Hindu Marriage Act, 1955, desertion as a ground for divorce requires:",
    options: [
      "Mere physical separation of the spouses",
      "The factum of separation and the animus deserendi (intention to desert), without reasonable cause and without the consent of the other party, for a continuous period of not less than two years immediately preceding the presentation of the petition",
      "Separation for a period of six months",
      "The consent of both spouses to live separately"
    ],
    correctIndex: 1,
    explanation: "Desertion under s.13(1)(ib) requires the factum of separation, the animus deserendi, the absence of reasonable cause and of consent, and a continuous period of not less than two years immediately preceding the presentation of the petition. Bipinchandra Jaisinghbai Shah v. Prabhavati explains that desertion is a total repudiation of the obligation of marriage.",
    legalBasis: "Section 13(1)(ib) and the Explanation, Hindu Marriage Act, 1955; Bipinchandra Jaisinghbai Shah v. Prabhavati, AIR 1957 SC 176.",
    wrongOptionExplanations: ["Mere physical separation is not desertion.", "", "The period is two years, not six months.", "Consent negates desertion."],
    flashpoint: "DESERTION → FACTUM of separation + ANIMUS DESERENDI + no reasonable cause + no consent + 2 YEARS continuous.",
    source: "CASE"
  });

  /* ----------------------------------------------------- Hindu adoption */
  Q({
    id: "FAM-006", subject: S, topic: "f2", subtopic: "Consent of the wife",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Direct",
    question: "Under the Hindu Adoptions and Maintenance Act, 1956, in which of the following situations is the consent of a wife NOT necessary for an adoption by her husband?",
    options: [
      "She refuses consent because of a personal disagreement",
      "She is living separately from her husband without any decree of legal separation",
      "She has expressed disagreement with the choice of the child",
      "She has ceased to be a Hindu by conversion to another religion"
    ],
    correctIndex: 3,
    explanation: "The proviso to s.7 of the Hindu Adoptions and Maintenance Act, 1956 requires the consent of the wife for an adoption by a Hindu male who has a wife living. The consent may be dispensed with only where the wife has completely and finally renounced the world, or has ceased to be a Hindu by conversion to another religion, or has been declared by a court of competent jurisdiction to be of unsound mind.",
    legalBasis: "Section 7 and its proviso, Hindu Adoptions and Maintenance Act, 1956.",
    wrongOptionExplanations: [
      "Disagreement on personal grounds does not dispense with consent.",
      "Living separately without a decree of legal separation is not one of the three statutory grounds.",
      "Disagreement over the choice of the child does not dispense with consent.",
      ""
    ],
    flashpoint: "HAMA s.7 proviso → a wife's consent is dispensed with ONLY for (i) RENUNCIATION of the world, (ii) CONVERSION, or (iii) being DECLARED OF UNSOUND MIND by a competent court.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "FAM-007", subject: S, topic: "f2", subtopic: "Requisites of a valid adoption",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is a requisite of a valid adoption under the Hindu Adoptions and Maintenance Act, 1956?",
    options: [
      "The adoption must be registered under the Registration Act, 1908",
      "The person adopting must have the capacity and the right to take in adoption, the person giving in adoption must have the capacity to do so, the person adopted must be capable of being taken in adoption, and the adoption must be made in compliance with the other conditions in the Act",
      "The adopted child must be below five years of age",
      "The adoptive parents must be below forty years of age"
    ],
    correctIndex: 1,
    explanation: "Section 6 lays down the requisites of a valid adoption: the person adopting must have the capacity and also the right to take in adoption; the person giving in adoption must have the capacity to do so; the person adopted must be capable of being taken in adoption; and the adoption must be made in compliance with the conditions in Chapter II.",
    legalBasis: "Sections 6-11, Hindu Adoptions and Maintenance Act, 1956.",
    wrongOptionExplanations: ["Registration is not a requisite of validity under the Act (although a registered document is good evidence).", "", "The Act does not prescribe a ceiling of five years for the child's age.", "The Act prescribes a minimum age of twenty-one years for the person adopting in the case of a male, and eighteen for a female, not a maximum."],
    flashpoint: "HAMA s.6 → capacity to TAKE, capacity to GIVE, capacity to BE TAKEN, plus compliance with ss.7-11.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-008", subject: S, topic: "f2", subtopic: "Effects of adoption",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 12 of the Hindu Adoptions and Maintenance Act, 1956, an adopted child is deemed to be the child of his or her adoptive parents for all purposes. Which of the following is a consequence?",
    options: [
      "The adopted child retains all rights in the family of his or her birth, including the right to marry a person whom he or she could not have married if he or she had continued in the family of birth",
      "The adopted child severs all ties with the family of birth, and the ties with the family of birth are replaced by those created by the adoption, subject to the statutory savings",
      "The adopted child can be adopted again by another person",
      "The adoption can be revoked at any time by the adoptive parents"
    ],
    correctIndex: 1,
    explanation: "Section 12 provides that an adopted child shall be deemed to be the child of his or her adoptive father or mother for all purposes with effect from the date of the adoption, and from that date all ties with the family of birth shall be deemed to be severed and replaced by those created by the adoption. The statutory savings preserve vesting rights, the right to inherit from the family of birth in certain circumstances, and the prohibition on the marriage of the adopted child with a person whom he or she could not have married if he or she had continued in the family of birth. An adoption, once validly made, cannot be cancelled or revoked.",
    legalBasis: "Sections 12 and 15, Hindu Adoptions and Maintenance Act, 1956.",
    wrongOptionExplanations: ["The ties with the family of birth are severed subject to the statutory savings.", "", "The same child cannot be adopted by two different persons (s.11).", "A valid adoption cannot be cancelled or revoked (s.15)."],
    flashpoint: "HAMA s.12 → the adopted child is deemed the child of the adoptive parents; ties with the family of birth are SEVERED. s.15 → an adoption CANNOT BE CANCELLED.",
    source: "STATUTE"
  });

  /* ------------------------------------------------- Special Marriage Act */
  Q({
    id: "FAM-009", subject: S, topic: "f3", subtopic: "In-camera proceedings — fine",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Special Marriage Act, 1954, what is the maximum fine that may be imposed for printing or publishing matter relating to in-camera proceedings without the previous permission of the court?",
    options: ["One thousand rupees", "Five hundred rupees", "Two thousand rupees", "Five thousand rupees"],
    correctIndex: 0,
    explanation: "Section 33 of the Special Marriage Act, 1954 provides that all proceedings under the Act shall be held in camera and that it shall not be lawful to print or publish any matter relating to such proceedings without the previous permission of the court. A contravention is punishable with a fine which may extend to one thousand rupees.",
    legalBasis: "Section 33, Special Marriage Act, 1954.",
    wrongOptionExplanations: [
      "",
      "Five hundred rupees is not the statutory maximum.",
      "Two thousand rupees is not the statutory maximum.",
      "Five thousand rupees is not the statutory maximum."
    ],
    flashpoint: "Special Marriage Act s.33 → in-camera proceedings; publishing without permission → fine up to ₹1,000.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "FAM-010", subject: S, topic: "f3", subtopic: "Conditions for solemnisation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 4 of the Special Marriage Act, 1954, a marriage may be solemnised between any two persons if which of the following conditions is satisfied?",
    options: [
      "The parties must belong to the same religion",
      "Neither party has a spouse living, neither is an idiot or a lunatic, the bridegroom has completed twenty-one years and the bride eighteen years, and the parties are not within the degrees of a prohibited relationship unless custom permits",
      "The parties must have been resident in the district for at least five years",
      "The consent of the parents is mandatory in every case"
    ],
    correctIndex: 1,
    explanation: "Section 4 lays down the conditions: neither party has a spouse living; neither party is incapable of giving a valid consent to the marriage by reason of unsoundness of mind, or has been suffering from a mental disorder of such a kind or extent as to be unfit for marriage and the procreation of children, or has been subject to recurrent attacks of insanity; the bridegroom has completed twenty-one years and the bride eighteen years; and the parties are not within the degrees of a prohibited relationship unless custom or usage governing each of them permits.",
    legalBasis: "Section 4, Special Marriage Act, 1954.",
    wrongOptionExplanations: ["The Act expressly permits marriage irrespective of the religion of the parties.", "", "A minimum residence requirement exists for notice purposes but not five years for the validity of the marriage.", "The consent of parents is not a statutory condition for adults."],
    flashpoint: "Special Marriage Act s.4 → no common religion required; monogamy; sound mind; groom 21 / bride 18; not within prohibited degrees.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-011", subject: S, topic: "f3", subtopic: "Notice of marriage",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 5 of the Special Marriage Act, 1954, when the marriage is not solemnised in the form of a ceremony, the parties must give notice in writing to the Marriage Officer of the district:",
    options: [
      "In which the bridegroom was born",
      "In which at least one of the parties has resided for a period of not less than thirty days immediately preceding the date on which the notice is given",
      "In which the Marriage Officer's office is situated in the capital of the State only",
      "Chosen by the bride's parents"
    ],
    correctIndex: 1,
    explanation: "Section 5 requires the parties to give notice in writing in the prescribed form to the Marriage Officer of the district in which at least one of the parties has resided for a period of not less than thirty days immediately preceding the date on which the notice is given.",
    legalBasis: "Sections 5, 6 and 7, Special Marriage Act, 1954.",
    wrongOptionExplanations: [
      "The place of birth is not the statutory test.",
      "",
      "The Act does not confine the notice to a State capital.",
      "The choice is not that of the bride's parents under the Act."
    ],
    flashpoint: "Special Marriage Act s.5 → notice to the Marriage Officer of the district where a party has resided for NOT LESS THAN 30 DAYS.",
    source: "STATUTE"
  });

  /* -------------------------------------------------------- Christian/Parsi */
  Q({
    id: "FAM-012", subject: S, topic: "f4", subtopic: "Christian marriage — hours",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Indian Christian Marriage Act, 1872, between which hours must a marriage generally be solemnised?",
    options: [
      "Between five in the morning and six in the evening",
      "Between six in the morning and nine in the evening",
      "Between seven in the morning and eight in the evening",
      "Between six in the morning and seven in the evening"
    ],
    correctIndex: 3,
    explanation: "Section 10 of the Indian Christian Marriage Act, 1872 provides that a marriage must be solemnised between six in the morning and seven in the evening. A marriage solemnised outside these hours is not valid unless it is a marriage between Indian Christians solemnised under the provisions relating to the solemnisation of marriages by a Minister of Religion where the peculiar circumstances of the case require it, in which case the Marriage Officer's permission may be needed.",
    legalBasis: "Section 10, Indian Christian Marriage Act, 1872.",
    wrongOptionExplanations: [
      "Five in the morning is not the statutory hour.",
      "Nine in the evening is not the statutory hour.",
      "Seven in the morning is not the statutory hour.",
      ""
    ],
    flashpoint: "Indian Christian Marriage Act 1872 s.10 → solemnisation between 6 AM and 7 PM.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "FAM-013", subject: S, topic: "f5", subtopic: "Parsi maintenance",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Parsi Marriage and Divorce Act, 1936, for what duration may maintenance be awarded?",
    options: [
      "For a fixed term not exceeding ten years",
      "For a maximum of five years only",
      "For a term not exceeding the life of the plaintiff",
      "For a period determined solely by the Registrar"
    ],
    correctIndex: 2,
    explanation: "Section 40 of the Parsi Marriage and Divorce Act, 1936 empowers the court, on the application of the wife, to order the husband to secure or pay a monthly or periodical sum for her maintenance and support for a term not exceeding the life of the plaintiff. The court may also order maintenance for a child for a term not exceeding the life of the child.",
    legalBasis: "Section 40, Parsi Marriage and Divorce Act, 1936.",
    wrongOptionExplanations: ["The Act does not prescribe a fixed term of ten years.", "The Act does not prescribe a maximum of five years.", "", "The duration is determined by the court, not the Registrar."],
    flashpoint: "Parsi Marriage and Divorce Act 1936 s.40 → maintenance for a term NOT EXCEEDING THE LIFE OF THE PLAINTIFF.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "FAM-014", subject: S, topic: "f5", subtopic: "Parsi marriage — solemnisation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Parsi Marriage and Divorce Act, 1936, a Parsi marriage is valid:",
    options: [
      "If it is solemnised in accordance with the Parsi form of ceremony called 'Ashirvad' by a priest duly ordained, in the presence of two Parsi witnesses other than the priest, and the parties are not within the prohibited degrees of consanguinity and affinity",
      "Only if registered before a Marriage Officer",
      "Only if one of the parties is a Parsi",
      "If the parties simply declare themselves to be married"
    ],
    correctIndex: 0,
    explanation: "Under the Parsi Marriage and Divorce Act, 1936 a Parsi marriage is not valid unless it is solemnised in the Parsi form of ceremony called 'Ashirvad' by a priest duly ordained in accordance with the Parsi religion, in the presence of two Parsi witnesses other than the priest, and unless the parties are not within the degrees of consanguinity or affinity prohibited by the Act. Registration is provided for, but the ceremony is what makes the marriage valid.",
    legalBasis: "Sections 3, 4 and 6, Parsi Marriage and Divorce Act, 1936.",
    wrongOptionExplanations: ["", "Registration is provided for (s.6) but is not the act that validates the marriage.", "Both parties must be Parsi.", "A mere declaration is not sufficient."],
    flashpoint: "Parsi marriage → 'ASHIRVAD' ceremony by an ordained priest, in the presence of TWO PARSI WITNESSES.",
    source: "STATUTE"
  });

  /* -------------------------------------------------- Guardians and Wards */
  Q({
    id: "FAM-015", subject: S, topic: "f6", subtopic: "Guardian of a married female minor",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Guardians and Wards Act, 1890, what condition applies to the appointment of a guardian of the person of a married female minor?",
    options: [
      "The husband must consent to such appointment",
      "The parents must apply jointly",
      "The husband must be considered unfit by the court",
      "The husband must be declared legally incompetent by a competent court"
    ],
    correctIndex: 2,
    explanation: "Section 19 of the Guardians and Wards Act, 1890 provides that nothing in the Act (except the provision relating to the appointment of a guardian of the property) shall authorise the court to appoint or declare a guardian of the person of a minor whose father is living and is not, in the opinion of the court, unfit to be guardian of the person of the minor; and similarly, where the minor is a married female, a guardian of the person shall not be appointed while the husband is not unfit. The statutory test is the unfitness of the husband, not his consent or a declaration of legal incompetence.",
    legalBasis: "Section 19, Guardians and Wards Act, 1890.",
    wrongOptionExplanations: [
      "Consent of the husband is not the statutory test.",
      "A joint application by the parents is not a requirement.",
      "",
      "A declaration of legal incompetence is not the statutory test; unfitness is."
    ],
    flashpoint: "Guardians and Wards Act s.19 → for a MARRIED FEMALE MINOR, a guardian of the person may be appointed only if the HUSBAND IS UNFIT.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "FAM-016", subject: S, topic: "f6", subtopic: "Welfare of the minor",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 17 of the Guardians and Wards Act, 1890, in appointing or declaring the guardian of a minor, the court shall be guided by:",
    options: [
      "What appears to be for the welfare of the minor, and while considering this the court shall have regard to the age, sex and religion of the minor, the character and capacity of the proposed guardian and his nearness of kin to the minor, the wishes of a deceased parent, and the wishes of the minor if he is of sufficient age to form an intelligent preference",
      "The wishes of the father in all cases",
      "The financial standing of the parties alone",
      "The provisions of the personal law of the father only"
    ],
    correctIndex: 0,
    explanation: "Section 17 makes the welfare of the minor the paramount consideration, and lists the matters to which the court shall have regard. The welfare principle is the guiding star in custody matters, as repeatedly affirmed by the Supreme Court.",
    legalBasis: "Section 17, Guardians and Wards Act, 1890; Gaurav Nagpal v. Sumedha Nagpal, (2009) 1 SCC 42.",
    wrongOptionExplanations: [
      "",
      "The wishes of the father are not the guiding consideration.",
      "Financial standing is one relevant factor but not the sole criterion.",
      "Personal law informs the decision but the statutory criterion is the welfare of the minor."
    ],
    flashpoint: "Guardians and Wards Act s.17 → the WELFARE OF THE MINOR is PARAMOUNT.",
    source: "STATUTE"
  });

  /* ---------------------------------------------------------- Dowry Act */
  Q({
    id: "FAM-017", subject: S, topic: "f7", subtopic: "Transfer of dowry — 3 months",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 6 of the Dowry Prohibition Act, 1961, within how many months from the date of the marriage must dowry received before the marriage be transferred to the woman?",
    options: ["Five months", "Three months", "Six months", "Seven months"],
    correctIndex: 1,
    explanation: "Section 6(1) of the Dowry Prohibition Act, 1961 requires that where any dowry is received by any person other than the woman in connection with whose marriage it is given, that person shall transfer it to the woman within three months after the date of the marriage, and pending such transfer shall hold it in trust for the benefit of the woman.",
    legalBasis: "Section 6, Dowry Prohibition Act, 1961.",
    wrongOptionExplanations: [
      "Five months is not the prescribed period.",
      "",
      "Six months is not the prescribed period (a common distractor).",
      "Seven months is not the prescribed period."
    ],
    flashpoint: "Dowry Prohibition Act s.6 → dowry received BEFORE marriage must be transferred to the woman WITHIN 3 MONTHS.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "FAM-018", subject: S, topic: "f7", subtopic: "Minimum punishment for dowry",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Dowry Prohibition Act, 1961, what is the minimum term of imprisonment prescribed for giving or taking dowry?",
    options: ["Not less than three years", "Not less than ten years", "Not less than seven years", "Not less than five years"],
    correctIndex: 3,
    explanation: "Section 3(2) of the Dowry Prohibition Act, 1961 provides that whoever gives or takes or abets the giving or taking of dowry shall be punishable with imprisonment for a term which shall not be less than five years, and with a fine which shall not be less than fifteen thousand rupees or the amount of the value of such dowry, whichever is more.",
    legalBasis: "Section 3(2), Dowry Prohibition Act, 1961.",
    wrongOptionExplanations: [
      "Three years is not the minimum for giving or taking dowry.",
      "Ten years is not the minimum.",
      "Seven years is not the minimum (it is used for demanding dowry under s.4(1)? No — s.4 provides a minimum of six months). ",
      ""
    ],
    flashpoint: "Dowry Prohibition Act s.3(2) → minimum punishment for GIVING OR TAKING dowry = NOT LESS THAN 5 YEARS.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "FAM-019", subject: S, topic: "f7", subtopic: "Definition of dowry",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 2 of the Dowry Prohibition Act, 1961, 'dowry' means any property or valuable security:",
    options: [
      "Given only by the bride's parents",
      "Given only before the marriage",
      "Given only in cash",
      "Given or agreed to be given either directly or indirectly by one party to a marriage to the other party to the marriage, or by the parents of either party to a marriage or by any other person to either party to the marriage or to any other person, at or before or any time after the marriage in connection with the marriage of the said parties"
    ],
    correctIndex: 3,
    explanation: "Section 2 defines dowry as property or valuable security given or agreed to be given, directly or indirectly, by one party to a marriage to the other party, or by the parents of either party, or by any other person, to either party to the marriage or to any other person, at or before or any time after the marriage in connection with the marriage of the said parties. Presents given at the time of marriage to the bride or bridegroom without any demand are excluded.",
    legalBasis: "Section 2, Dowry Prohibition Act, 1961.",
    wrongOptionExplanations: [
      "The definition includes gifts by the bridegroom's side as well.",
      "The definition covers property given at any time in connection with the marriage.",
      "The definition is not confined to cash.",
      ""
    ],
    flashpoint: "Dowry → property or valuable security given AT, BEFORE or ANY TIME AFTER the marriage in connection with the marriage; PRESENTS without a demand are excluded.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-020", subject: S, topic: "f7", subtopic: "Demanding dowry",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 4 of the Dowry Prohibition Act, 1961, the punishment for demanding dowry, directly or indirectly, from the parents or other relatives or guardian of a bride or bridegroom is imprisonment for a term which shall not be less than:",
    options: ["Six months", "Three months", "One month", "One year"],
    correctIndex: 0,
    explanation: "Section 4(1) provides that if any person demands, directly or indirectly, from the parents or other relatives or guardian of a bride or bridegroom, as the case may be, any dowry, he shall be punishable with imprisonment for a term which shall not be less than six months but which may extend to two years, and with fine which may extend to ten thousand rupees.",
    legalBasis: "Section 4, Dowry Prohibition Act, 1961.",
    wrongOptionExplanations: ["", "Three months is not the prescribed minimum.", "One month is not the prescribed minimum.", "One year is not the prescribed minimum."],
    flashpoint: "Dowry demand (s.4) → minimum imprisonment SIX MONTHS, extendable to two years, with fine up to ₹10,000.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-021", subject: S, topic: "f7", subtopic: "Dowry death",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The offence of dowry death is punishable under which provision of the Bharatiya Nyaya Sanhita, 2023?",
    options: ["Section 86", "Section 85", "Section 80", "Section 108"],
    correctIndex: 2,
    explanation: "BNS s.80 corresponds to IPC s.304B (dowry death). BNS s.85 deals with cruelty by a husband or relative of the husband (IPC s.498A) and s.86 with the definition of cruelty. BNS s.108 deals with abetment of suicide.",
    legalBasis: "Sections 80, 85 and 86, Bharatiya Nyaya Sanhita, 2023; Sections 304B and 498A, Indian Penal Code, 1860.",
    wrongOptionExplanations: ["Section 86 defines cruelty.", "Section 85 is cruelty by a husband or relative.", "", "Section 108 is abetment of suicide."],
    flashpoint: "Dowry death → IPC s.304B → BNS s.80. Cruelty → IPC s.498A → BNS s.85.",
    source: "STATUTE"
  });

  /* -------------------------------------------------------------- UCC */
  Q({
    id: "FAM-022", subject: S, topic: "f9", subtopic: "Article 44",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Article 44 of the Constitution of India, which deals with a uniform civil code, is:",
    options: [
      "A fundamental right enforceable under Article 32",
      "A provision in the Seventh Schedule",
      "A fundamental duty of every citizen",
      "A directive principle of State policy, not enforceable in a court of law"
    ],
    correctIndex: 3,
    explanation: "Article 44 provides that the State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India. It appears in Part IV (Directive Principles of State Policy) and is not enforceable in any court.",
    legalBasis: "Article 44 (Part IV), Constitution of India.",
    wrongOptionExplanations: [
      "Directive principles are not enforceable by themselves.",
      "The Seventh Schedule contains the legislative lists.",
      "Fundamental duties are in Part IVA.",
      ""
    ],
    flashpoint: "Article 44 → UNIFORM CIVIL CODE is a DIRECTIVE PRINCIPLE, not enforceable.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-023", subject: S, topic: "f9", subtopic: "Uttarakhand UCC Rules",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Uniform Civil Code Rules, Uttarakhand, 2025, when is an application for the declaration of legal heirs forwarded to the Registrar General?",
    options: [
      "After fifteen days of receipt if the Registrar does not take action",
      "After ten days of receipt if the Registrar does not take action",
      "After thirty days of receipt if the Registrar does not take action",
      "Never; the application must be made directly to the Registrar General"
    ],
    correctIndex: 0,
    explanation: "The Uniform Civil Code Rules, Uttarakhand, 2025 prescribe that where the Registrar does not take action on an application for the declaration of legal heirs within the prescribed period, the application is forwarded to the Registrar General after fifteen days of receipt. The Uttarakhand rules are the first State-level UCC rules in force.",
    legalBasis: "Uniform Civil Code Rules, Uttarakhand, 2025 (made under the Uttarakhand Uniform Civil Code Act); Article 44, Constitution of India.",
    wrongOptionExplanations: [
      "",
      "Ten days is not the prescribed period.",
      "Thirty days is not the prescribed period.",
      "The application is received by the Registrar and forwarded if no action is taken."
    ],
    flashpoint: "Uttarakhand UCC Rules 2025 → declaration of legal heirs forwarded to the REGISTRAR GENERAL after 15 DAYS if the Registrar takes no action.",
    source: "PAPER-PATTERN"
  });

  /* -------------------------------------------------------- Maintenance */
  Q({
    id: "FAM-024", subject: S, topic: "f2", subtopic: "Maintenance under HAMA",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Hindu Adoptions and Maintenance Act, 1956, a Hindu wife is entitled to be maintained by her husband during her lifetime, and she is entitled to live separately from her husband without forfeiting her claim to maintenance on certain grounds. Which of the following is one such ground?",
    options: [
      "The husband's income is below the taxable limit",
      "The husband is posted outside India",
      "The husband has been transferred to another city",
      "The husband has any other wife living"
    ],
    correctIndex: 3,
    explanation: "Section 18(2) of the Hindu Adoptions and Maintenance Act, 1956 entitles a Hindu wife to live separately from her husband without forfeiting her claim to maintenance on grounds including that the husband is guilty of desertion, that he has treated her with cruelty, that he is suffering from a virulent form of leprosy, that he has any other wife living, that he keeps a concubine in the same house or habitually resides with a concubine elsewhere, that he has ceased to be a Hindu by conversion, or on any other cause justifying her living separately. Section 18(3) bars the claim where the wife is unchaste or ceases to be a Hindu by conversion.",
    legalBasis: "Section 18, Hindu Adoptions and Maintenance Act, 1956.",
    wrongOptionExplanations: [
      "The husband's tax status is not a statutory ground.",
      "A posting abroad is not a statutory ground.",
      "A transfer is not a statutory ground.",
      ""
    ],
    flashpoint: "HAMA s.18(2) grounds → desertion | cruelty | leprosy | ANOTHER WIFE LIVING | concubine | conversion | other just cause.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-025", subject: S, topic: "f11", subtopic: "CrPC s.125 and personal law",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly states the relationship between a maintenance order under Section 125 CrPC and a maintenance order under a personal-law statute?",
    options: [
      "A personal-law order bars a proceeding under s.125 CrPC",
      "Only the higher of the two awards can be enforced",
      "A s.125 CrPC order bars a personal-law claim",
      "The two remedies are concurrent, and the court may take into account the amount awarded under one proceeding while fixing the amount under the other, so as to avoid duplication"
    ],
    correctIndex: 3,
    explanation: "The remedies are concurrent. Rajnesh v. Neha laid down guidelines for the interplay of overlapping maintenance claims, including the requirement of an affidavit of assets and liabilities and the adjustment of amounts awarded under different statutes so as to avoid duplication while ensuring adequate maintenance.",
    legalBasis: "Section 125, CrPC, 1973; Rajnesh v. Neha, (2021) 2 SCC 324.",
    wrongOptionExplanations: [
      "The remedies are concurrent, not mutually exclusive.",
      "Both may be enforced, subject to adjustment to prevent duplication.",
      "Neither order bars the other.",
      ""
    ],
    flashpoint: "Maintenance remedies are CONCURRENT; Rajnesh v. Neha (2021) 2 SCC 324 → coordinate to AVOID DUPLICATION.",
    source: "CASE"
  });

  Q({
    id: "FAM-026", subject: S, topic: "f1", subtopic: "Restitution of conjugal rights",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 9 of the Hindu Marriage Act, 1955, a petition for restitution of conjugal rights may be presented where:",
    options: [
      "The other party has withdrawn from the society of the petitioner without reasonable excuse",
      "The parties have been living separately for ten years",
      "The other party has converted to another religion",
      "The other party is suffering from a disease"
    ],
    correctIndex: 0,
    explanation: "Section 9 provides that when either the husband or the wife has, without reasonable excuse, withdrawn from the society of the other, the aggrieved party may apply for restitution of conjugal rights, and the court, on being satisfied of the truth of the statements and that there is no legal ground why the application should not be granted, may decree restitution of conjugal rights accordingly. The burden of proving reasonable excuse is on the party who has withdrawn.",
    legalBasis: "Section 9, Hindu Marriage Act, 1955.",
    wrongOptionExplanations: ["", "Ten years' separation may ground a divorce, not restitution.", "Conversion is a ground for divorce under s.13(1)(ii).", "Disease is not a ground for restitution; it may be relevant to other reliefs."],
    flashpoint: "HMA s.9 → RESTITUTION OF CONJUGAL RIGHTS; the burden of proving 'reasonable excuse' is on the WITHDRAWING party.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-027", subject: S, topic: "f10", subtopic: "Family Courts Act",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Family Courts Act, 1984, which of the following is the correct position about the appearance of advocates?",
    options: [
      "Advocates have an absolute right to appear in every proceeding before a Family Court",
      "Only senior advocates may appear",
      "Advocates are prohibited from appearing in Family Courts in all circumstances",
      "The Act generally provides that no party to a suit or proceeding before a Family Court shall be entitled, as of right, to be represented by an advocate, though the court may permit such representation on specified grounds"
    ],
    correctIndex: 3,
    explanation: "Section 13 of the Family Courts Act, 1984 provides that no party to a suit or proceeding before a Family Court shall be entitled, as of right, to be represented by a legal practitioner. The court may, however, permit such representation where it considers it necessary in the interest of justice, or on the application of a party and with the leave of the court, on grounds such as the party being a woman or a minor, or suffering from a disability, or where the opposite party is represented by a legal practitioner.",
    legalBasis: "Section 13, Family Courts Act, 1984.",
    wrongOptionExplanations: [
      "There is no absolute right of appearance.",
      "There is no such restriction to senior advocates.",
      "Advocates may appear with the permission of the court.",
      ""
    ],
    flashpoint: "Family Courts Act s.13 → NO RIGHT OF ADVOCATE APPEARANCE; the court may PERMIT representation on the specified grounds.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-028", subject: S, topic: "f10", subtopic: "Family Court — duty to conciliate",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 9 of the Family Courts Act, 1984, the Family Court is required to:",
    options: [
      "Decide the case within seven days",
      "Conduct the proceedings in public in every case",
      "Refer every matter to arbitration",
      "Assist and persuade the parties in arriving at a settlement in respect of the subject matter of the suit or proceeding, and may follow such procedure as it thinks fit"
    ],
    correctIndex: 3,
    explanation: "Section 9 imposes a duty on the Family Court to assist and persuade the parties in arriving at a settlement, and permits the court to adjourn the proceedings for that purpose. A Family Court proceeding is held in camera under s.11, and the court is not bound by the strict rules of evidence.",
    legalBasis: "Sections 9, 10, 11 and 14, Family Courts Act, 1984.",
    wrongOptionExplanations: ["There is no seven-day rule.", "Proceedings are held in camera.", "Arbitration in family matters is not mandated.", ""],
    flashpoint: "Family Courts Act s.9 → DUTY TO ASSIST AND PERSUADE the parties to SETTLE. s.11 → proceedings IN CAMERA.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-029", subject: S, topic: "f1", subtopic: "Permanent alimony",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Hindu Marriage Act, 1955, an order for permanent alimony and maintenance may be made under:",
    options: ["Section 25", "Section 24", "Section 26", "Section 27"],
    correctIndex: 0,
    explanation: "Section 24 provides for maintenance pendente lite and expenses of proceedings, while s.25 provides for permanent alimony and maintenance at the time of passing any decree or at any time subsequent thereto. Section 26 deals with custody of children and s.27 with the disposal of property presented at or about the time of marriage.",
    legalBasis: "Sections 24, 25, 26 and 27, Hindu Marriage Act, 1955.",
    wrongOptionExplanations: [
      "",
      "Section 24 is maintenance pendente lite.",
      "Section 26 concerns custody of children.",
      "Section 27 concerns property presented at or about the time of marriage."
    ],
    flashpoint: "HMA s.24 → MAINTENANCE PENDENTE LITE. s.25 → PERMANENT ALIMONY.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-030", subject: S, topic: "f1", subtopic: "Solemnisation of Hindu marriage",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 7 of the Hindu Marriage Act, 1955, a Hindu marriage may be solemnised in accordance with:",
    options: [
      "The registration of the marriage only",
      "The customary rites and ceremonies of either party thereto, and where the rites and ceremonies include the Saptapadi (the taking of seven steps by the bridegroom and the bride jointly before the sacred fire), the marriage becomes complete and binding when the seventh step is taken",
      "A civil ceremony before a Registrar in every case",
      "Any ceremony chosen by the bride's father"
    ],
    correctIndex: 1,
    explanation: "Section 7 provides that a Hindu marriage may be solemnised in accordance with the customary rites and ceremonies of either party thereto. Where such rites and ceremonies include the Saptapadi, the marriage becomes complete and binding when the seventh step is taken. Registration under s.8 is for the purpose of facilitating proof, and does not confer validity.",
    legalBasis: "Sections 7 and 8, Hindu Marriage Act, 1955.",
    wrongOptionExplanations: [
      "Registration facilitates proof but is not a mode of solemnisation.",
      "",
      "A Hindu marriage is not ordinarily solemnised before a Registrar.",
      "The choice is governed by the customary rites of either party, not the bride's father."
    ],
    flashpoint: "HMA s.7 → SAPTAPADI completes the marriage on the SEVENTH STEP. Registration is for FACILITATING PROOF only.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-031", subject: S, topic: "f8", subtopic: "Triple talaq",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which decision of the Supreme Court declared the practice of instantaneous triple talaq (talaq-e-biddat) to be unconstitutional?",
    options: [
      "Mohd. Ahmed Khan v. Shah Bano Begum, (1985) 2 SCC 556",
      "Shayara Bano v. Union of India, (2017) 9 SCC 1",
      "Danial Latifi v. Union of India, (2001) 7 SCC 740",
      "Sarla Mudgal v. Union of India, (1995) 3 SCC 635"
    ],
    correctIndex: 1,
    explanation: "In Shayara Bano v. Union of India a Constitution Bench held the practice of talaq-e-biddat (instantaneous triple talaq) to be manifestly arbitrary and therefore violative of Article 14, and set it aside. Parliament subsequently enacted the Muslim Women (Protection of Rights on Marriage) Act, 2019, which makes the practice an offence.",
    legalBasis: "Shayara Bano v. Union of India, (2017) 9 SCC 1; Muslim Women (Protection of Rights on Marriage) Act, 2019.",
    wrongOptionExplanations: [
      "Shah Bano concerned maintenance under s.125 CrPC.",
      "",
      "Danial Latifi construed the Muslim Women (Protection of Rights on Divorce) Act, 1986.",
      "Sarla Mudgal concerned conversion and bigamy."
    ],
    flashpoint: "Triple talaq → SHAYARA BANO v. UOI (2017) 9 SCC 1 (talaq-e-biddat manifestly arbitrary).",
    source: "CASE"
  });

  Q({
    id: "FAM-032", subject: S, topic: "f11", subtopic: "Domestic Violence Act",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Protection of Women from Domestic Violence Act, 2005, 'domestic relationship' includes:",
    options: [
      "Only the relationship between a husband and wife",
      "Only relationships recognised by personal law",
      "Any relationship between two persons residing in the same locality",
      "A relationship between two persons who live or have, at any point of time, lived together in a shared household, when they are related by consanguinity, marriage, or through a relationship in the nature of marriage, adoption or are family members living together as a joint family"
    ],
    correctIndex: 3,
    explanation: "Section 2(f) of the Protection of Women from Domestic Violence Act, 2005 defines a domestic relationship as a relationship between two persons who live or have, at any point of time, lived together in a shared household, when they are related by consanguinity, marriage, or through a relationship in the nature of marriage, adoption or are family members living together as a joint family.",
    legalBasis: "Section 2(f) and (s) of the Protection of Women from Domestic Violence Act, 2005.",
    wrongOptionExplanations: [
      "The definition is wider than the husband-wife relationship.",
      "The definition is not confined to relationships recognised by personal law.",
      "Residence in the same locality is not a domestic relationship.",
      ""
    ],
    flashpoint: "PWDVA s.2(f) → DOMESTIC RELATIONSHIP = shared household + consanguinity / marriage / relationship in the nature of marriage / adoption / joint family.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-033", subject: S, topic: "f6", subtopic: "Minor — definition",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 4(3) of the Guardians and Wards Act, 1890, a 'minor' means:",
    options: [
      "A person who has not attained the age of eighteen years",
      "A person who has not attained the age of sixteen years",
      "A person who has not attained the age of twenty-one years",
      "A person who has not attained the age of fourteen years"
    ],
    correctIndex: 0,
    explanation: "Section 4(3) of the Guardians and Wards Act, 1890 defines a minor as a person who, under the provisions of the Indian Majority Act, 1875, is to be deemed not to have attained his majority — that is, eighteen years. A ward ceases to be a ward on attaining majority.",
    legalBasis: "Section 4(3), Guardians and Wards Act, 1890; Section 3, Indian Majority Act, 1875.",
    wrongOptionExplanations: [
      "",
      "Sixteen years is not the majority age.",
      "Twenty-one years applies under the Majority Act only in limited cases where a guardian of the person or property of the minor has been appointed by the court.",
      "Fourteen years is not the majority age."
    ],
    flashpoint: "Guardians and Wards Act s.4(3) → 'MINOR' = under EIGHTEEN years (Indian Majority Act, 1875).",
    source: "STATUTE"
  });

  Q({
    id: "FAM-034", subject: S, topic: "f1", subtopic: "Cruelty as a ground for divorce",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Cruelty as a ground for divorce or judicial separation under the Hindu Marriage Act, 1955 is dealt with in:",
    options: ["Section 13(1)(i) only", "Section 13(1)(ib)", "Section 13(1)(ia)", "Section 12(1)(c)"],
    correctIndex: 2,
    explanation: "Section 13(1)(ia) provides cruelty as a ground for divorce. Section 13(1)(ib) provides desertion, and s.13(1)(i) provides adultery. The Explanation to s.13(1) clarifies that 'cruelty' includes physical cruelty; mental cruelty is recognised by judicial decisions.",
    legalBasis: "Section 13(1)(i), (ia) and (ib), Hindu Marriage Act, 1955; Samar Ghosh v. Jaya Ghosh, (2007) 4 SCC 511.",
    wrongOptionExplanations: [
      "Section 13(1)(i) is adultery.",
      "Section 13(1)(ib) is desertion.",
      "",
      "Section 12(1)(c) relates to consent obtained by force or fraud in the context of a voidable marriage."
    ],
    flashpoint: "HMA s.13(1) → (i) ADULTERY | (ia) CRUELTY | (ib) DESERTION (2 years).",
    source: "STATUTE"
  });

  Q({
    id: "FAM-035", subject: S, topic: "f1", subtopic: "Mental cruelty",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Guidance on what constitutes mental cruelty, as a ground for divorce under the Hindu Marriage Act, 1955, was laid down in:",
    options: [
      "Samar Ghosh v. Jaya Ghosh, (2007) 4 SCC 511",
      "All of the above contributed to the jurisprudence on mental cruelty",
      "Naveen Kohli v. Neelu Kohli, (2006) 4 SCC 558",
      "Savitry Pandey v. Prem Chandra Pandey, (2002) 2 SCC 73"
    ],
    correctIndex: 1,
    explanation: "Samar Ghosh v. Jaya Ghosh laid down illustrative instances of mental cruelty, Savitry Pandey v. Prem Chandra Pandey and Naveen Kohli v. Neelu Kohli also contributed materially to the development of the jurisprudence. Samar Ghosh is the most commonly cited for the illustrative list.",
    legalBasis: "Section 13(1)(ia), Hindu Marriage Act, 1955; Samar Ghosh v. Jaya Ghosh, (2007) 4 SCC 511; Naveen Kohli v. Neelu Kohli, (2006) 4 SCC 558.",
    wrongOptionExplanations: [
      "Samar Ghosh laid down the leading illustrative list, but the other decisions also contributed.",
      "",
      "Naveen Kohli discussed irretrievable breakdown and cruelty.",
      "Savitry Pandey discussed cruelty and the approach to matrimonial disputes."
    ],
    flashpoint: "MENTAL CRUELTY → illustrative instances in SAMAR GHOSH v. JAYA GHOSH (2007) 4 SCC 511; also Naveen Kohli v. Neelu Kohli.",
    source: "CASE"
  });

  Q({
    id: "FAM-036", subject: S, topic: "f1", subtopic: "Sapinda relationship",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Hindu Marriage Act, 1955, a 'sapinda relationship' with reference to any person extends:",
    options: [
      "Only to the second generation",
      "Only to the first generation",
      "To the seventh generation in both lines",
      "As far as the third generation in the line of ascent through the mother, and the fifth generation in the line of ascent through the father, the line being traced upwards in each case from the person concerned, who is to be counted as the first generation"
    ],
    correctIndex: 3,
    explanation: "Section 3(f) of the Hindu Marriage Act, 1955 provides that a sapinda relationship with reference to any person extends as far as the third generation (inclusive) in the line of ascent through the mother, and the fifth generation (inclusive) in the line of ascent through the father, the line being traced upwards in each case from the person concerned, who is to be counted as the first generation. Two persons are sapindas of each other if one is a lineal ascendant of the other within those limits, or if they have a common lineal ascendant within those limits.",
    legalBasis: "Section 3(f) and (g), Hindu Marriage Act, 1955.",
    wrongOptionExplanations: [
      "The limits are three and five, not two.",
      "The relationship extends beyond one generation.",
      "Seven generations in both lines is not the statutory rule.",
      ""
    ],
    flashpoint: "SAPINDA → 3 generations through the MOTHER and 5 generations through the FATHER.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-037", subject: S, topic: "f2", subtopic: "Person capable of giving in adoption",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 9 of the Hindu Adoptions and Maintenance Act, 1956, who may give a child in adoption?",
    options: [
      "Only the father of the child in every case",
      "Any relative of the child",
      "Only the guardian of the child",
      "The father, the mother (with the consent of the father where he is alive and of sound mind, and if the father has ceased to be a Hindu or has finally and completely renounced the world or has been declared of unsound mind, the mother may give the child in adoption without his consent), and the guardian of the child where both parents are dead, have abandoned the child or have been declared of unsound mind — with the permission of the court"
    ],
    correctIndex: 3,
    explanation: "Section 9 provides that no person except the father, the mother or the guardian of a child shall have the capacity to give the child in adoption. The father has the right to give in adoption, but the mother's consent is required where the father is alive; the mother may give the child in adoption without the father's consent in specified circumstances. The guardian may give the child in adoption with the previous permission of the court, subject to the conditions in s.9(4).",
    legalBasis: "Section 9, Hindu Adoptions and Maintenance Act, 1956.",
    wrongOptionExplanations: [
      "The mother and the guardian may also give in adoption in the circumstances specified.",
      "A relative who is not the father, the mother or the guardian cannot give the child in adoption.",
      "The guardian is only one of three categories.",
      ""
    ],
    flashpoint: "HAMA s.9 → only the FATHER, the MOTHER or the GUARDIAN may give a child in adoption. The guardian requires the COURT'S PREVIOUS PERMISSION.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-038", subject: S, topic: "f2", subtopic: "Maintenance of dependants",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Hindu Adoptions and Maintenance Act, 1956, the obligation to maintain aged or infirm parents is:",
    options: [
      "Limited to the eldest son only",
      "On a person, during his lifetime, to maintain his or her legitimate or illegitimate children, and also aged or infirm parents or such children, so far as the parent or child is unable to maintain himself or herself, and this obligation extends so far as the estate of the deceased Hindu's heirs allows",
      "On the heirs of the deceased Hindu, and where a Hindu has ceased to be a Hindu by conversion the obligation ceases",
      "Only on the daughters"
    ],
    correctIndex: 1,
    explanation: "Section 20 of the Hindu Adoptions and Maintenance Act, 1956 imposes on a Hindu the obligation, during his lifetime, to maintain his legitimate or illegitimate children and his aged or infirm parents, or such children, so far as the claimant is unable to maintain himself or herself from his or her own earnings or other property. Section 22 imposes a similar obligation on the heirs of a deceased Hindu, to the extent the estate allows.",
    legalBasis: "Sections 20, 21 and 22, Hindu Adoptions and Maintenance Act, 1956.",
    wrongOptionExplanations: [
      "The obligation does not rest on the eldest son alone.",
      "",
      "The obligation survives against the estate in the hands of the heirs under s.22, subject to the statutory limits.",
      "The obligation does not rest only on the daughters."
    ],
    flashpoint: "HAMA s.20 → obligation to maintain CHILDREN and AGED OR INFIRM PARENTS, limited to the claimant's inability to maintain himself.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-039", subject: S, topic: "f3", subtopic: "Divorce under the Special Marriage Act",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Special Marriage Act, 1954, a petition for divorce by mutual consent may be presented where:",
    options: [
      "The parties have no children",
      "The parties have been married for at least ten years",
      "Both parties have independent incomes",
      "The parties have been living separately for one year or more, have not been able to live together and have mutually agreed that the marriage should be dissolved"
    ],
    correctIndex: 3,
    explanation: "Section 28 of the Special Marriage Act, 1954 provides for divorce by mutual consent on the same pattern as s.13B of the Hindu Marriage Act, 1955 — the parties must have been living separately for a period of one year or more, have not been able to live together, and have mutually agreed that the marriage should be dissolved.",
    legalBasis: "Section 28, Special Marriage Act, 1954.",
    wrongOptionExplanations: ["The absence of children is not a condition.", "Ten years of marriage is not the test.", "Independent income is irrelevant.", ""],
    flashpoint: "Special Marriage Act s.28 → mutual-consent divorce: ONE YEAR of living separately.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-040", subject: S, topic: "f1", subtopic: "Irretrievable breakdown",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly states the position of irretrievable breakdown of marriage as a ground for divorce in India?",
    options: [
      "It is a statutory ground for divorce under the Hindu Marriage Act, 1955",
      "It is prohibited by law",
      "It is a statutory ground under the Special Marriage Act, 1954 only",
      "It is not a statutory ground, though the Supreme Court has on occasion dissolved marriages on this basis in the exercise of its powers under Article 142, and has recommended that it be introduced by legislation"
    ],
    correctIndex: 3,
    explanation: "Irretrievable breakdown of marriage is not a statutory ground for divorce under the Hindu Marriage Act, 1955. The Supreme Court has, in cases such as Shilpa Sailesh v. Varun Sreenivasan (2023), held that it may dissolve a marriage on the ground of irretrievable breakdown by exercising its powers under Article 142, and the Law Commission has recommended that it be introduced by legislation.",
    legalBasis: "Article 142, Constitution of India; Section 13, Hindu Marriage Act, 1955; Shilpa Sailesh v. Varun Sreenivasan, (2023) 7 SCC 329.",
    wrongOptionExplanations: [
      "It is not a statutory ground.",
      "It is not prohibited; it is judicially recognised as a ground for the exercise of Article 142 jurisdiction.",
      "It is not a statutory ground under any of the personal-law statutes.",
      ""
    ],
    flashpoint: "Irretrievable breakdown → NOT a statutory ground in India; relief has been granted under ARTICLE 142 (Shilpa Sailesh, 2023).",
    source: "CASE"
  });

  Q({
    id: "FAM-041", subject: S, topic: "f1", subtopic: "Judicial separation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 10 of the Hindu Marriage Act, 1955, a decree of judicial separation:",
    options: [
      "Does not dissolve the marriage; it entitles the parties to live separately, and cohabitation may be resumed, and the decree is a ground for divorce if there is no resumption of cohabitation for one year or more after the decree",
      "Dissolves the marriage",
      "Is available only to the husband",
      "Operates as a permanent bar to divorce"
    ],
    correctIndex: 0,
    explanation: "A decree of judicial separation does not dissolve the marriage; the parties are no longer under the obligation to cohabit, but the marital bond subsists and cohabitation may be resumed. Section 13(1A)(i) makes the non-resumption of cohabitation for one year or upwards after the passing of a decree for judicial separation a ground for divorce.",
    legalBasis: "Sections 10 and 13(1A)(i), Hindu Marriage Act, 1955.",
    wrongOptionExplanations: [
      "",
      "Judicial separation does not dissolve the marriage.",
      "It is available to either spouse.",
      "It is not a bar to divorce; it is in fact a stepping stone to it under s.13(1A)."
    ],
    flashpoint: "HMA s.10 JUDICIAL SEPARATION → the marriage SUBSISTS; no resumption for 1 YEAR → ground for DIVORCE under s.13(1A).",
    source: "STATUTE"
  });

  Q({
    id: "FAM-042", subject: S, topic: "f7", subtopic: "Cognizance of dowry offences",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 7 of the Dowry Prohibition Act, 1961, an offence under the Act is cognizable:",
    options: [
      "For the purposes of arrest, for every offence under the Act",
      "For the purposes of arrest, only in respect of an offence under s.4 (demanding dowry)",
      "For the purposes of investigation but not arrest",
      "It is a non-cognizable offence in every case"
    ],
    correctIndex: 1,
    explanation: "Section 7(1) provides that notwithstanding anything contained in the Code of Criminal Procedure, 1973, every offence under the Act shall be non-cognizable and non-bailable, but s.7(1)(b) provides that the offence under s.4 shall be cognizable for the purposes of arrest. Section 7(2) provides that no court inferior to that of a Metropolitan Magistrate or a Judicial Magistrate of the first class shall try an offence under the Act.",
    legalBasis: "Section 7, Dowry Prohibition Act, 1961.",
    wrongOptionExplanations: ["Not every offence under the Act is cognizable for arrest.", "", "The provision distinguishes between arrest and investigation.", "The offence under s.4 is cognizable for the purposes of arrest."],
    flashpoint: "Dowry Prohibition Act s.7 → offences are NON-COGNIZABLE and NON-BAILABLE, EXCEPT the offence under s.4 (demanding dowry), which is COGNIZABLE for the purposes of ARREST.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-043", subject: S, topic: "f4", subtopic: "Christian marriage — solemnisation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Indian Christian Marriage Act, 1872, a marriage between persons one or both of whom is or are a Christian or Christians may be solemnised by:",
    options: [
      "Any person chosen by the parties",
      "Only a Marriage Registrar",
      "A Minister of Religion licensed under the Act, a Marriage Registrar appointed under the Act, or a person licensed under the Act to solemnise marriages",
      "Only a Magistrate"
    ],
    correctIndex: 2,
    explanation: "Section 5 of the Indian Christian Marriage Act, 1872 provides that marriages may be solemnised by a Minister of Religion licensed under the Act, by or before a Marriage Registrar appointed under the Act, or by a person licensed under the Act to solemnise marriages. Persons who are not Christians do not require a licence.",
    legalBasis: "Sections 4, 5, 6, 7 and 9, Indian Christian Marriage Act, 1872.",
    wrongOptionExplanations: [
      "The Act specifies the categories of persons who may solemnise a marriage.",
      "A Marriage Registrar is one of the three categories.",
      "",
      "A Magistrate is not a category under the Act."
    ],
    flashpoint: "Indian Christian Marriage Act 1872 s.5 → a MINISTER OF RELIGION, a MARRIAGE REGISTRAR, or a person LICENSED under the Act.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-044", subject: S, topic: "f6", subtopic: "Custody of a child below five",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In matters of custody of a child below five years of age, the courts have generally taken the view that:",
    options: [
      "The custody of a child below five years is ordinarily better entrusted to the mother, since the welfare of the child is the paramount consideration",
      "The father is always the natural guardian and must be preferred",
      "The custody must be decided by the child alone",
      "Custody must always be given to the paternal grandparents"
    ],
    correctIndex: 0,
    explanation: "While the welfare of the child is the paramount consideration, the courts have generally taken the view that the custody of a child below five years is ordinarily better entrusted to the mother, as recognised in Roxann Sharma v. Arun Sharma. Section 6(a) of the Hindu Minority and Guardianship Act, 1956 also provides that the custody of a minor who has not completed the age of five years shall ordinarily be with the mother.",
    legalBasis: "Section 6(a), Hindu Minority and Guardianship Act, 1956; Section 17, Guardians and Wards Act, 1890; Roxann Sharma v. Arun Sharma, (2015) 8 SCC 318.",
    wrongOptionExplanations: [
      "",
      "The welfare principle prevails over a presumption in favour of the father.",
      "The child's wishes are relevant if he or she is of sufficient age to form an intelligent preference, but the decision is the court's.",
      "There is no such rule."
    ],
    flashpoint: "Hindu Minority and Guardianship Act s.6(a) → custody of a child BELOW FIVE is ORDINARILY WITH THE MOTHER; welfare is paramount.",
    source: "CASE"
  });

  Q({
    id: "FAM-045", subject: S, topic: "f1", subtopic: "Adultery as a ground",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Hindu Marriage Act, 1955, adultery is a ground for divorce under Section 13(1)(i). Which of the following correctly states the position regarding the standard of proof?",
    options: [
      "Adultery must be proved beyond reasonable doubt in every case",
      "Adultery, being a matrimonial offence in a civil proceeding, may be established on a preponderance of probabilities, though the court requires satisfactory evidence and may look for corroboration",
      "Adultery can be presumed without any evidence",
      "Adultery no longer constitutes a ground for divorce"
    ],
    correctIndex: 1,
    explanation: "Matrimonial proceedings are civil in nature, and adultery is proved on a preponderance of probabilities rather than beyond reasonable doubt, though the court insists on satisfactory evidence and generally looks for corroboration. Section 13(1)(i) provides adultery as a ground for divorce and s.13(2)(i) provides it as a ground available to the wife.",
    legalBasis: "Section 13(1)(i) and 13(2)(i), Hindu Marriage Act, 1955.",
    wrongOptionExplanations: ["The criminal standard does not apply in matrimonial proceedings.", "", "A presumption without evidence is not permissible.", "Adultery remains a ground for divorce."],
    flashpoint: "Adultery → proved on a PREPONDERANCE OF PROBABILITIES (civil standard), generally with CORROBORATION.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-046", subject: S, topic: "f1", subtopic: "Non-resumption after restitution decree",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: Under Section 13(1A) of the Hindu Marriage Act, 1955, either party to a marriage may present a petition for divorce on the ground that there has been no resumption of cohabitation for a period of one year or upwards after the passing of a decree for judicial separation, or that there has been no restitution of conjugal rights for a period of one year or upwards after the passing of a decree for restitution of conjugal rights.\nConclusion I: A decree of judicial separation or restitution of conjugal rights is not itself a dissolution of the marriage; it may, however, become a stepping stone to divorce if the parties do not resume cohabitation.\nConclusion II: A party who has obtained a decree of restitution of conjugal rights and then cohabits with the other spouse may nevertheless seek a divorce under s.13(1A).\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Neither Conclusion I nor II follows", "Only Conclusion II follows", "Only Conclusion I follows"],
    correctIndex: 3,
    explanation: "Conclusion I follows. Conclusion II does not: the ground in s.13(1A) requires that there has been no resumption of cohabitation, or no restitution of conjugal rights, for the statutory period — actual resumption of cohabitation removes the foundation of the ground.",
    legalBasis: "Section 13(1A) and Section 23, Hindu Marriage Act, 1955.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "Conclusion I follows.", "Conclusion II is wrong because cohabitation removes the ground.", ""],
    flashpoint: "HMA s.13(1A) → a decree of JUDICIAL SEPARATION or RESTITUTION becomes a ground for DIVORCE after ONE YEAR of non-resumption.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-047", subject: S, topic: "f1", subtopic: "Bars to relief",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 23(1) of the Hindu Marriage Act, 1955, in any proceeding under the Act, whether defended or not, the court shall decree the relief sought only if, inter alia:",
    options: [
      "The petitioner has been in continuous residence with the respondent",
      "The respondent consents to the relief",
      "The petitioner has employed an advocate",
      "The petitioner is not taking advantage of his or her own wrong or disability, has not in any manner been accessory to or connived at or condoned the act or acts complained of, and has not unnecessarily or improperly delayed the proceedings"
    ],
    correctIndex: 3,
    explanation: "Section 23(1) requires the court, before granting relief, to be satisfied that the petitioner is not taking advantage of his or her own wrong or disability, has not been accessory to or connived at or condoned the act complained of, has not unnecessarily or improperly delayed the proceedings, and has not otherwise in any way been guilty of such conduct as to disentitle him or her to the relief.",
    legalBasis: "Section 23(1), Hindu Marriage Act, 1955.",
    wrongOptionExplanations: [
      "Continuous residence is not a statutory condition.",
      "The respondent's consent is not required in a defended or undefended proceeding under s.23.",
      "Engagement of an advocate is not a condition under s.23.",
      ""
    ],
    flashpoint: "HMA s.23(1) bars → taking advantage of one's OWN WRONG | ACCESSORY, CONNIVANCE or CONDONATION | unnecessary DELAY.",
    source: "STATUTE"
  });

  Q({
    id: "FAM-048", subject: S, topic: "f11", subtopic: "Maintenance under the 2005 Act",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Protection of Women from Domestic Violence Act, 2005, a Magistrate may order:",
    options: [
      "Only a protection order",
      "Only monetary relief",
      "Protection orders, residence orders, monetary relief, custody orders, compensation orders and interim ex parte orders",
      "Only an order directing the parties to live together"
    ],
    correctIndex: 2,
    explanation: "The Act provides a range of reliefs: protection orders under s.18, residence orders under s.19, monetary relief under s.20, custody orders under s.21, compensation orders under s.22, and interim and ex parte orders under s.23. The reliefs may be sought in a single application.",
    legalBasis: "Sections 18-23, Protection of Women from Domestic Violence Act, 2005.",
    wrongOptionExplanations: ["A protection order is one of several reliefs.", "Monetary relief is one of several reliefs.", "", "There is no such order under the Act."],
    flashpoint: "PWDVA reliefs → PROTECTION (s.18) | RESIDENCE (s.19) | MONETARY (s.20) | CUSTODY (s.21) | COMPENSATION (s.22) | INTERIM/EX PARTE (s.23).",
    source: "STATUTE"
  });
})();
