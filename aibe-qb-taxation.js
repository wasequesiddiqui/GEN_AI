/* ============================================================================
 * AIBE XXI — Question Bank: Taxation Law
 * Weightage: 4 / 100. 24 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "taxation";

  Q({
    id: "TAX-001", subject: S, topic: "x1", subtopic: "Previous year",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 3 of the Income-tax Act, 1961, the 'previous year' means:",
    options: [
      "The period of twelve months commencing on 1 April and ending on 31 March",
      "The financial year immediately preceding the assessment year",
      "The year in which the assessment is made",
      "The year in which the return is filed"
    ],
    correctIndex: 1,
    explanation: "Section 3 defines 'previous year' as the financial year immediately preceding the assessment year. Where a business or profession is newly set up, or a source of income newly comes into existence, the previous year is the period beginning with the date of such setting up or coming into existence and ending on 31 March of that financial year.",
    legalBasis: "Sections 2(9) and 3, Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "The financial year is the calendar frame, but the 'previous year' is defined by its relation to the assessment year.",
      "",
      "The year of assessment is the assessment year, not the previous year.",
      "The year of filing the return is not the definition."
    ],
    flashpoint: "'PREVIOUS YEAR' (s.3) → the financial year IMMEDIATELY PRECEDING the assessment year. Assessment year = 'AY' (s.2(9)).",
    source: "STATUTE"
  });

  Q({
    id: "TAX-002", subject: S, topic: "x1", subtopic: "Assessment year",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 2(9) of the Income-tax Act, 1961, the 'assessment year' means:",
    options: [
      "The previous year itself",
      "The period of twelve months commencing on the first day of April every year, immediately following the previous year",
      "The year of assessment as determined by the Assessing Officer",
      "The year in which the assessee files the return"
    ],
    correctIndex: 1,
    explanation: "Section 2(9) defines 'assessment year' as the period of twelve months commencing on the first day of April of every year, being a year immediately following the previous year. The income of the previous year is assessed in the assessment year.",
    legalBasis: "Section 2(9), Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "The assessment year follows the previous year.",
      "",
      "The assessment year is fixed by statute, not by the Assessing Officer.",
      "The year of filing is not the definition."
    ],
    flashpoint: "'ASSESSMENT YEAR' (s.2(9)) → the twelve months beginning 1 APRIL, immediately FOLLOWING the previous year.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-003", subject: S, topic: "x1", subtopic: "Charge of income tax",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 4 of the Income-tax Act, 1961 is the charging section. It provides that income tax is charged:",
    options: [
      "Only on the income of individuals",
      "On the total income of the assessment year of companies only",
      "On the total income of the previous year of every person, at the rate or rates specified in the Finance Act for the relevant assessment year",
      "On the income of the previous year at the rates fixed by the Assessing Officer"
    ],
    correctIndex: 2,
    explanation: "Section 4 charges income tax for any assessment year in respect of the total income of the previous year of every person. The rates are fixed by the Finance Act of the relevant year. Section 4 also provides for the deduction at source, advance payment and the charge of additional income tax.",
    legalBasis: "Section 4, Income-tax Act, 1961; Finance Acts.",
    wrongOptionExplanations: [
      "The charge is not confined to individuals.",
      "The charge applies to every person, not companies alone.",
      "",
      "The rates are fixed by the Finance Act, not by the Assessing Officer."
    ],
    flashpoint: "Income-tax Act s.4 → the CHARGING SECTION: tax on the TOTAL INCOME OF THE PREVIOUS YEAR of EVERY PERSON at the rates in the FINANCE ACT.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-004", subject: S, topic: "x1", subtopic: "Residential status",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 6(1) of the Income-tax Act, 1961, an individual is resident in India in a previous year if he is in India for 182 days or more in that year, or if he is in India for 60 days or more in that year and 365 days or more during the four preceding previous years. In the case of an Indian citizen who leaves India for the purpose of employment outside India, the 60-day period referred to in the alternative limb is to be read as:",
    options: ["Ninety days", "One hundred and twenty days", "One hundred and eighty-two days", "Three hundred and sixty-five days"],
    correctIndex: 2,
    explanation: "The first proviso to s.6(1) provides that in the case of an Indian citizen who leaves India in any previous year for the purposes of employment outside India, or as a member of the crew of an Indian ship, or in the case of an Indian citizen or a person of Indian origin engaged outside India in the business or profession referred to in the section who comes on a visit to India in any previous year, the period of sixty days referred to in the alternative limb shall be read as one hundred and eighty-two days. The alternative limb is thereby rendered ineffective for such persons, so that residence turns on the 182-day test alone. A separate proviso inserted by the Finance Act, 2020 provides that for a citizen of India or a person of Indian origin whose total income, other than income from foreign sources, exceeds fifteen lakh rupees, the said period of sixty days shall be read as one hundred and twenty days.",
    legalBasis: "Sections 6(1) and 6(1A), Income-tax Act, 1961 (as amended by the Finance Act, 2020).",
    wrongOptionExplanations: [
      "Ninety days is not the substituted period.",
      "One hundred and twenty days is the substituted period in the separate category of a citizen or person of Indian origin with total Indian income exceeding fifteen lakh rupees, not the period for a citizen leaving India for employment.",
      "",
      "Three hundred and sixty-five days is the period making up the four preceding previous years in the alternative limb, not the substituted 60-day period."
    ],
    flashpoint: "Income-tax Act s.6 → the BASIC test (182 days) vs the ALTERNATIVE test (60 days + 365 days in the preceding 4 years), with the 182-DAY relaxation for citizens/PIOs leaving India for EMPLOYMENT.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TAX-005", subject: S, topic: "x2", subtopic: "Compulsory acquisition of agricultural land",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 10(37) of the Income-tax Act, 1961, capital gains arising from the transfer by way of compulsory acquisition of a capital asset being urban agricultural land are:",
    options: [
      "Fully taxable as long-term capital gains",
      "Taxable at the rate of ten per cent",
      "Fully taxable as business income",
      "Exempt from tax, subject to the conditions that the land was used for agricultural purposes for at least two years immediately preceding the date of transfer, and that the compensation or consideration is received on or after 1 April 2004"
    ],
    correctIndex: 3,
    explanation: "Section 10(37) exempts capital gains arising to an individual or a Hindu undivided family from the transfer of a capital asset being urban agricultural land by way of compulsory acquisition under any law, or a transfer the consideration for which is determined or approved by the Central Government or the Reserve Bank of India, where the asset was used for agricultural purposes for a period of at least two years immediately preceding the date of transfer and the consideration or compensation is received on or after 1 April 2004.",
    legalBasis: "Sections 10(37) and 45, Income-tax Act, 1961.",
    wrongOptionExplanations: ["The gain is exempt, not taxable.", "The exemption is complete, not a concessionary rate.", "The gain is not business income.", ""],
    flashpoint: "Income-tax Act s.10(37) → COMPULSORY ACQUISITION of URBAN AGRICULTURAL LAND → EXEMPT (use for 2 years before transfer; receipt on/after 1 April 2004).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TAX-006", subject: S, topic: "x3", subtopic: "Gifts and income from other sources",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "A taxpayer transfers shares to his son without consideration. The transaction constitutes a 'transfer' under Section 2(47) and the shares would be taxed under which head in the hands of the recipient?",
    options: [
      "Income from other sources under Section 56(2)(x)",
      "Income from business or profession",
      "Income from salary",
      "Income from capital gains"
    ],
    correctIndex: 0,
    explanation: "Section 56(2)(x) provides that where a person receives, without consideration, any property, the aggregate fair market value of which exceeds fifty thousand rupees, the whole of the aggregate value is chargeable to income tax under the head 'Income from Other Sources'. The section contains exceptions, including transfers from a 'relative' as defined in the Explanation. The question as framed tests the head under which such a receipt would fall.",
    legalBasis: "Section 56(2)(x) and the Explanation to Section 56(2)(x), Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "",
      "Business income requires a business or profession.",
      "Salary income requires an employer-employee relationship.",
      "Capital gains arise on the transfer of a capital asset by the transferor, not on a receipt without consideration."
    ],
    flashpoint: "Income-tax Act s.56(2)(x) → receipt of property WITHOUT CONSIDERATION above the prescribed limit → taxable under INCOME FROM OTHER SOURCES.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TAX-007", subject: S, topic: "x4", subtopic: "Health insurance deduction",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, a deduction for health insurance premia or preventive health check-up is available under:",
    options: ["Section 80D", "Section 80C", "Section 80E", "Section 80G"],
    correctIndex: 0,
    explanation: "Section 80D permits a deduction for the amount paid by an individual or a Hindu undivided family for health insurance premia for the assessee, the spouse, dependent children and dependent parents, and for preventive health check-ups, subject to the prescribed maximum limits, which differ depending on whether the insured is below or above the prescribed age. Section 80C is for specified investments and payments, s.80E for interest on loans for higher education and s.80G for donations to specified funds and charitable institutions.",
    legalBasis: "Sections 80C, 80D, 80E and 80G, Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "",
      "Section 80C covers specified investments, life insurance premia (other than health insurance) and similar payments.",
      "Section 80E is for interest on a loan taken for higher education.",
      "Section 80G is for donations to specified funds and charitable institutions."
    ],
    flashpoint: "Health insurance premium → s.80D (subject to the prescribed limits). Life insurance premium / specified investments → s.80C.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-008", subject: S, topic: "x1", subtopic: "Definition of 'person'",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Multi",
    question: "Under Section 2(31) of the Income-tax Act, 1961, 'person' includes which of the following?\nI. An individual\nII. A Hindu undivided family\nIII. A company\nIV. A firm, an association of persons or a body of individuals, whether incorporated or not, a local authority and every artificial juridical person",
    options: ["I and II only", "I, II and III only", "I, II and IV only", "I, II, III and IV"],
    correctIndex: 3,
    explanation: "Section 2(31) defines 'person' to include an individual, a Hindu undivided family, a company, a firm, an association of persons or a body of individuals, whether incorporated or not, a local authority and every artificial juridical person, not falling within any of the preceding sub-clauses. All the listed categories are therefore included.",
    legalBasis: "Section 2(31), Income-tax Act, 1961.",
    wrongOptionExplanations: ["A company is also included.", "An AOP, BOI, local authority and artificial juridical person are also included.", "A company is also included.", ""],
    flashpoint: "Income-tax Act s.2(31) 'person' → individual | HUF | company | firm | AOP or BOI | local authority | artificial juridical person.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-009", subject: S, topic: "x5", subtopic: "Capital and revenue",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following tests are used by the courts to distinguish a capital receipt from a revenue receipt?",
    options: [
      "The intention of the payer test only",
      "The size of the receipt test only",
      "The manner of payment test only",
      "The source test, the change in the capital structure test, the nature of the receipt in the hands of the recipient, and the fixed versus circulating capital test"
    ],
    correctIndex: 3,
    explanation: "The courts have evolved several tests: whether the receipt is a substitute for income (in lieu of income) or a capital accretion; whether there is a change in the capital structure of the business; whether the receipt is in the nature of a windfall; the test of fixed capital versus circulating capital; and the character of the receipt in the hands of the recipient. No single test is conclusive, and the substance of the transaction governs.",
    legalBasis: "Sections 2(24), 4, 28 and 45, Income-tax Act, 1961; Commissioner of Income-tax v. Kamal Behari Lal Singha, AIR 1971 SC 2105.",
    wrongOptionExplanations: ["A single test is not conclusive.", "The size of the receipt is not a test.", "The manner of payment is not a test.", ""],
    flashpoint: "Capital vs revenue → the SOURCE test, the CHANGE IN CAPITAL STRUCTURE test, FIXED vs CIRCULATING capital, and the CHARACTER of the receipt in the recipient's hands.",
    source: "CASE"
  });

  Q({
    id: "TAX-010", subject: S, topic: "x1", subtopic: "Income deemed to accrue in India",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 9 of the Income-tax Act, 1961, income is deemed to accrue or arise in India in which of the following cases?",
    options: [
      "Only where the income arises directly in India",
      "Where the income arises from any business connection in India, from any property in India, from any asset or source of income in India, or from the transfer of a capital asset situated in India; and in the case of a non-resident, income by way of interest, royalty, fees for technical services or salary for services rendered in India",
      "Only where the income arises from an asset in India",
      "Only where the payer is an Indian company"
    ],
    correctIndex: 1,
    explanation: "Section 9 provides that income is deemed to accrue or arise in India where it arises from any business connection in India, from any property in India, from any asset or source of income in India, or from the transfer of a capital asset situated in India. Section 9(1)(ii) covers salary for services rendered in India; s.9(1)(v) interest; s.9(1)(vi) royalty; and s.9(1)(vii) fees for technical services. Section 9(1)(i) also has Explanations on the taxation of income from the transfer of shares of a company incorporated outside India where the share derives its value substantially from assets in India.",
    legalBasis: "Section 9, Income-tax Act, 1961; Sections 5 and 6, Income-tax Act, 1961.",
    wrongOptionExplanations: ["The section is wider than direct accrual.", "", "The section covers more than assets in India.", "Payer residency is not the sole test."],
    flashpoint: "Income-tax Act s.9 → DEEMED ACCRUAL: business connection | property in India | asset or source in India | transfer of a capital asset situated in India.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-011", subject: S, topic: "x5", subtopic: "Capital gains — holding period",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, long-term capital gains arise on the transfer of:",
    options: [
      "Any capital asset held for more than six months",
      "Only shares",
      "Only immovable property",
      "A capital asset held for more than thirty-six months immediately preceding the date of transfer in the case of most assets, with shorter periods prescribed for listed securities, units and certain specified assets"
    ],
    correctIndex: 3,
    explanation: "The holding period for long-term capital gains depends on the nature of the asset. For most capital assets, the period is thirty-six months; for listed securities, units of equity-oriented funds, zero-coupon bonds and unlisted shares, the period is twelve months (and certain other assets have different periods). A transfer of a capital asset held for the prescribed period or less gives rise to short-term capital gains.",
    legalBasis: "Sections 2(29A), 2(29B), 2(42A), 2(42B) and 45, Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "Six months is not the general holding period.",
      "Shares are not the only asset.",
      "Immovable property is not the only asset; the rule applies to capital assets generally.",
      ""
    ],
    flashpoint: "LONG-TERM capital gains → generally 36 MONTHS; 12 MONTHS for listed securities, equity-oriented units, zero-coupon bonds and unlisted shares (verify against the current provisions).",
    source: "STATUTE"
  });

  Q({
    id: "TAX-012", subject: S, topic: "x5", subtopic: "Capital gains exemption — Section 54",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 54 of the Income-tax Act, 1961, the exemption from capital gains on the transfer of a residential house is available where:",
    options: [
      "The assessee purchases agricultural land",
      "The assessee purchases any property within five years",
      "The assessee invests in any asset within six months",
      "The assessee purchases one residential house in India within one year before or two years after the date of transfer, or constructs one residential house in India within three years after the date of transfer"
    ],
    correctIndex: 3,
    explanation: "Section 54 exempts the capital gain arising on the transfer of a long-term capital asset being a residential house, to the extent the assessee has within a period of one year before or two years after the date of transfer purchased, or within three years after the date of transfer constructed, one residential house in India. The exemption is subject to the investment being in a residential house and to the conditions in the section, including the lock-in period.",
    legalBasis: "Sections 54, 54F and 54EC, Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "Agricultural land is not within s.54.",
      "The periods are one year before and two years after (purchase) or three years (construction).",
      "Section 54EC provides for a six-month investment window in specified bonds, a different provision.",
      ""
    ],
    flashpoint: "s.54 → purchase within 1 YEAR BEFORE / 2 YEARS AFTER, or construction within 3 YEARS AFTER, of ONE residential house in India.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-013", subject: S, topic: "x6", subtopic: "Set-off and carry forward",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, which of the following statements about the carry forward of losses is correct?",
    options: [
      "Loss from a business other than a speculative business can be carried forward for eight assessment years, and is allowed only if the return of income has been filed within the time allowed under s.139(1)",
      "Loss from a speculative business can be carried forward indefinitely",
      "Loss from house property cannot be carried forward at all",
      "Capital losses can be carried forward indefinitely"
    ],
    correctIndex: 0,
    explanation: "Section 72 permits the carry forward of a business loss (other than a loss from a speculative business) for eight assessment years, and the loss is allowed to be set off only if the return of income is filed within the time allowed under s.139(1). Losses from speculative business are dealt with in s.73, and may be carried forward for four assessment years and set off only against speculative business income. Loss from house property may be carried forward for eight assessment years and set off only against income from house property. Capital losses under s.74 may be carried forward for eight assessment years.",
    legalBasis: "Sections 70, 71, 72, 73, 74 and 139(1), Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "",
      "A speculative business loss may be carried forward for four assessment years.",
      "A loss from house property can be carried forward for eight assessment years.",
      "Capital losses may be carried forward for eight assessment years."
    ],
    flashpoint: "SET-OFF / CARRY FORWARD → business loss 8 AY (return must be TIMELY) | speculative business loss 4 AY | house-property loss 8 AY | capital loss 8 AY.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-014", subject: S, topic: "x7", subtopic: "GST — constitutional basis",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The constitutional basis for the levy of the Goods and Services Tax in India is:",
    options: [
      "Article 279A only",
      "Article 265 only",
      "Article 269A only",
      "Article 246A, inserted by the Constitution (One Hundred and First Amendment) Act, 2016"
    ],
    correctIndex: 3,
    explanation: "The Constitution (One Hundred and First Amendment) Act, 2016 inserted Article 246A, which confers power on both Parliament and the State legislatures to make laws with respect to goods and services tax. Article 269A deals with the levy and collection of the GST on inter-State supplies in the course of import and the apportionment of the proceeds, and Article 279A provides for the constitution of the Goods and Services Tax Council. Article 265 provides that no tax shall be levied or collected except by authority of law.",
    legalBasis: "Articles 246A, 265, 269A, 279A and 286A, Constitution of India; Constitution (One Hundred and First Amendment) Act, 2016; Central Goods and Services Tax Act, 2017.",
    wrongOptionExplanations: [
      "Article 279A constitutes the GST Council.",
      "Article 265 is the general no-tax-without-law provision.",
      "Article 269A concerns inter-State supplies in the course of import.",
      ""
    ],
    flashpoint: "GST → constitutional basis ARTICLE 246A (101st Amendment, 2016); GST Council → ARTICLE 279A.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-015", subject: S, topic: "x7", subtopic: "GST — destination-based tax",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The Goods and Services Tax in India is described as a 'destination-based consumption tax'. This means:",
    options: [
      "The tax is levied only on exports",
      "The tax accrues always to the State of production",
      "The tax is levied only on imports",
      "The tax accrues to the State where the goods or services are consumed, and not necessarily to the State where they are produced"
    ],
    correctIndex: 3,
    explanation: "As a destination-based consumption tax, GST accrues to the State in which the goods or services are ultimately consumed. In the case of inter-State supplies, the Integrated Goods and Services Tax is levied and apportioned between the Union and the destination State. Exports are zero-rated and imports attract IGST.",
    legalBasis: "Articles 269A and 269A(1), Constitution of India; Integrated Goods and Services Tax Act, 2017; Central Goods and Services Tax Act, 2017.",
    wrongOptionExplanations: [
      "GST is not confined to exports; exports are zero-rated.",
      "Origin-based accrual is not the GST model.",
      "GST is not confined to imports.",
      ""
    ],
    flashpoint: "GST = DESTINATION-BASED tax → the revenue accrues to the State of CONSUMPTION. Exports ZERO-RATED.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-016", subject: S, topic: "x6", subtopic: "Advance tax and TDS",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, an assessee is liable to pay advance tax where the amount of tax payable for the financial year is:",
    options: [
      "Ten thousand rupees or more",
      "Fifty thousand rupees or more",
      "One lakh rupees or more",
      "There is no threshold"
    ],
    correctIndex: 0,
    explanation: "Section 208 provides that advance tax is payable during any financial year in respect of the current income where the amount of such tax payable by the assessee is ten thousand rupees or more. The instalments and due dates are prescribed in s.211, and s.234B and s.234C provide for interest on the default in the payment of advance tax.",
    legalBasis: "Sections 207, 208, 209, 210, 211, 234B and 234C, Income-tax Act, 1961.",
    wrongOptionExplanations: ["", "Fifty thousand rupees is not the threshold.", "One lakh rupees is not the threshold for advance tax generally.", "There is a threshold of ten thousand rupees."],
    flashpoint: "Advance tax (s.208) → liability where the tax payable for the financial year is ₹10,000 OR MORE.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-017", subject: S, topic: "x6", subtopic: "Assessment",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, 'best judgment assessment' is provided for in:",
    options: ["Section 143(1)", "Section 143(3)", "Section 144", "Section 147"],
    correctIndex: 2,
    explanation: "Section 144 provides for best judgment assessment, which the Assessing Officer may make where the assessee fails to file a return as required, fails to comply with the terms of a notice under s.142(1) or s.143(2), or fails to comply with a direction issued under s.142(2A). Section 143(1) is the summary/intimation stage, s.143(3) is the scrutiny assessment and s.147 deals with income escaping assessment.",
    legalBasis: "Sections 143(1), 143(3), 144 and 147, Income-tax Act, 1961.",
    wrongOptionExplanations: ["Section 143(1) concerns the issue of an intimation after the processing of the return.", "Section 143(3) provides for a regular assessment after scrutiny.", "", "Section 147 concerns income escaping assessment."],
    flashpoint: "BEST JUDGMENT ASSESSMENT → s.144. Summary intimation → s.143(1). Scrutiny → s.143(3). Escaped income → s.147.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-018", subject: S, topic: "x6", subtopic: "Appeals",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, an appeal against an order of the Assessing Officer lies to the Commissioner of Income-tax (Appeals) under:",
    options: ["Section 246", "Section 253", "Section 246A", "Section 260A"],
    correctIndex: 2,
    explanation: "Section 246A provides for an appeal to the Commissioner of Income-tax (Appeals) against specified orders of the Assessing Officer. Section 253 provides for an appeal to the Income Tax Appellate Tribunal, and s.260A deals with appeals to the High Court from orders of the Tribunal. Section 246 was the earlier provision, which was replaced by s.246A.",
    legalBasis: "Sections 246A, 253, 254 and 260A, Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "Section 246 was the earlier provision, replaced by s.246A.",
      "Section 253 provides for an appeal to the Income Tax Appellate Tribunal.",
      "",
      "Section 260A provides for an appeal to the High Court."
    ],
    flashpoint: "Appeals → CIT(A) under s.246A → ITAT under s.253 → HIGH COURT under s.260A → SUPREME COURT under Article 136.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-019", subject: S, topic: "x1", subtopic: "Total income",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "'Total income' under Section 2(45) of the Income-tax Act, 1961 means:",
    options: [
      "The total amount of income referred to in Section 5, computed in the manner laid down in the Act, and includes any income which is relatable to a period beyond the relevant previous year and is receivable in that previous year",
      "The gross receipts of the assessee",
      "Only the taxable income from salary and business",
      "The income after the deduction of all expenses"
    ],
    correctIndex: 0,
    explanation: "Section 2(45) defines 'total income' as the total amount of income referred to in s.5, computed in the manner laid down in the Act. Section 5 provides for the scope of total income, which depends on the residential status of the assessee. 'Gross total income' is defined in s.80B(5).",
    legalBasis: "Sections 2(45), 5 and 80B(5), Income-tax Act, 1961.",
    wrongOptionExplanations: ["", "Gross receipts are not 'total income'.", "Total income is not confined to salary and business income.", "The definition refers to computation in the manner laid down in the Act, not simply the deduction of all expenses."],
    flashpoint: "'TOTAL INCOME' (s.2(45)) → income referred to in s.5, computed per the Act. 'GROSS TOTAL INCOME' is defined in s.80B(5).",
    source: "STATUTE"
  });

  Q({
    id: "TAX-020", subject: S, topic: "x7", subtopic: "GST Council",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Article 279A of the Constitution, the Goods and Services Tax Council includes:",
    options: [
      "The President and the Governors of all States",
      "Only the Union Finance Minister and the Chief Ministers",
      "Only the State Finance Ministers",
      "The Union Finance Minister as Chairperson, the Union Minister of State in charge of Revenue or Finance, and one Minister nominated by each State Government"
    ],
    correctIndex: 3,
    explanation: "Article 279A provides that the President shall constitute a Goods and Services Tax Council consisting of the Union Finance Minister as Chairperson, the Union Minister of State in charge of Revenue or Finance, and one Minister nominated by each State Government. The Council makes recommendations on the taxes, cesses and surcharges to be subsumed, the rates, exemptions, thresholds, and special provisions for specified States.",
    legalBasis: "Article 279A, Constitution of India; Constitution (One Hundred and First Amendment) Act, 2016; Union of India v. Mohit Minerals Pvt. Ltd., (2022) 10 SCC 700.",
    wrongOptionExplanations: [
      "The President and Governors are not members of the Council.",
      "Chief Ministers are not members as such; a Minister nominated by each State Government is.",
      "The Union Finance Minister and Minister of State are also members.",
      ""
    ],
    flashpoint: "GST Council (Article 279A) → UNION FINANCE MINISTER (Chair) + Union Minister of State for Revenue/Finance + one Minister nominated by EACH STATE. Recommendations are not binding but have persuasive value.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-021", subject: S, topic: "x6", subtopic: "Deduction at source",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, tax is required to be deducted at source on:",
    options: [
      "All payments, irrespective of the amount",
      "Specified payments, such as salary, interest, dividends and contractual payments, above the prescribed thresholds, under the provisions of Chapter XVII-B",
      "Only payments made to non-residents",
      "Only on capital gains"
    ],
    correctIndex: 1,
    explanation: "Chapter XVII-B of the Income-tax Act, 1961 (ss.190-206) contains the provisions relating to the deduction of tax at source. Tax must be deducted at source on the specified payments, such as salary, interest, dividends, royalty, fees for technical services, contractual payments, commission and brokerage and rent, where the payment exceeds the prescribed thresholds, subject to the exceptions in the Act and the rules.",
    legalBasis: "Sections 190, 192, 194A, 194C, 194H, 194I, 195 and Chapter XVII-B, Income-tax Act, 1961.",
    wrongOptionExplanations: ["Not all payments attract TDS; specified payments above the thresholds do.", "", "TDS applies to residents and non-residents.", "TDS is not confined to capital gains."],
    flashpoint: "TDS → Chapter XVII-B. SPECIFIED payments ABOVE the PRESCRIBED THRESHOLDS. s.195 → payments to NON-RESIDENTS.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-022", subject: S, topic: "x5", subtopic: "Block of assets and Section 50",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, the system of allowing depreciation on a 'block of assets' means that:",
    options: [
      "Depreciation is allowed on the aggregate of the written-down value of all assets falling within a class, at the prescribed percentage, and the consideration on the transfer of any asset is reduced from the block",
      "Depreciation is allowed on each individual asset separately",
      "No depreciation is allowed at all",
      "Depreciation is allowed only on immovable property"
    ],
    correctIndex: 0,
    explanation: "Under the block-of-assets system in s.2(11) and s.32, assets of the same class (building, furniture, plant and machinery, intangible assets) and used for the purposes of the business or profession are aggregated, and depreciation is allowed on the written-down value of the block at the prescribed percentage. On the transfer of an asset, the consideration is reduced from the block value, and the resultant position may give rise to a short-term capital gain or loss under s.50.",
    legalBasis: "Sections 2(11), 32 and 50, Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "",
      "The block system aggregates assets within a class.",
      "Depreciation is allowed under s.32.",
      "Depreciation is allowed on buildings, plant and machinery, furniture and intangible assets."
    ],
    flashpoint: "BLOCK OF ASSETS (s.2(11)) → depreciation on the AGGREGATE written-down value of the block at the PRESCRIBED percentage; consideration on transfer is REDUCED from the block (s.50).",
    source: "STATUTE"
  });

  Q({
    id: "TAX-023", subject: S, topic: "x1", subtopic: "Agricultural income",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, agricultural income is:",
    options: [
      "Fully taxable as income from business",
      "Taxable only in the hands of companies",
      "Taxable at a flat rate of thirty per cent",
      "Excluded from the total income of the assessee for the purposes of the levy of income tax by the Union, but is taken into account for the purposes of determining the rate of tax applicable to the other income of the assessee"
    ],
    correctIndex: 3,
    explanation: "Agricultural income as defined in s.2(1A) is excluded from total income by s.10(1), and Parliament has no power to levy a tax on agricultural income because 'agriculture' is a State subject under Entry 18 of List II and Entry 46 of List II deals with taxes on agricultural income. Where the assessee has both agricultural and non-agricultural income and the non-agricultural income exceeds the basic exemption limit, the agricultural income is aggregated with the non-agricultural income for the purpose of determining the rate of tax under the Finance Act, and the tax is computed by the partial integration method.",
    legalBasis: "Sections 2(1A) and 10(1), Income-tax Act, 1961; Entries 18 and 46, List II, Seventh Schedule, Constitution of India.",
    wrongOptionExplanations: [
      "Agricultural income is exempt under s.10(1).",
      "The exemption is not confined to individuals and HUFs.",
      "Agricultural income is not taxed at thirty per cent; it is exempt.",
      ""
    ],
    flashpoint: "AGRICULTURAL INCOME → EXEMPT under s.10(1) (tax on it is a STATE subject). It is AGGREGATED only to determine the RATE on non-agricultural income (partial integration).",
    source: "STATUTE"
  });

  Q({
    id: "TAX-024", subject: S, topic: "x6", subtopic: "Penalty and prosecution",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 271(1)(c) of the Income-tax Act, 1961, a penalty may be imposed where:",
    options: [
      "The assessee has not maintained books of account",
      "The assessee has filed the return late",
      "The assessee has failed to pay advance tax",
      "The assessee has concealed the particulars of his income or furnished inaccurate particulars of such income"
    ],
    correctIndex: 3,
    explanation: "Section 271(1)(c) provides for a penalty where the Assessing Officer or the Commissioner (Appeals) is satisfied that any person has concealed the particulars of his income or furnished inaccurate particulars of such income. The penalty is computed by reference to the amount of tax sought to be evaded. Section 271F deals with the failure to furnish a return of income, s.234B and s.234C with interest on the default in the payment of advance tax, and s.271A with the failure to keep and maintain books of account.",
    legalBasis: "Sections 271(1)(c), 271A, 271F, 234B and 234C, Income-tax Act, 1961.",
    wrongOptionExplanations: [
      "The failure to maintain books attracts a penalty under s.271A.",
      "A late return attracts a fee under s.234F and a penalty under s.271F, not s.271(1)(c).",
      "The default in the payment of advance tax attracts interest under ss.234B-234C.",
      ""
    ],
    flashpoint: "PENALTY under s.271(1)(c) → CONCEALMENT of particulars of income or FURNISHING INACCURATE PARTICULARS.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-025", subject: S, topic: "x3", subtopic: "Income from other sources — winnings",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Income-tax Act, 1961, which of the following is chargeable to income tax under the head 'Income from Other Sources'?",
    options: [
      "Winnings from lotteries, crossword puzzles, races including horse races, card games and other games of any sort, and from gambling or betting of any form or nature",
      "Salary received by an employee from his employer",
      "Rent received from a house property let out by the assessee",
      "Profits and gains of a business carried on by the assessee"
    ],
    correctIndex: 0,
    explanation: "Section 56(2)(ib) provides that winnings from lotteries, crossword puzzles, races including horse races, card games and other games of any sort, and from gambling or betting of any form or nature whatsoever, are chargeable to income tax under the head 'Income from Other Sources'. Section 14 lists the five heads of income: salaries, income from house property, profits and gains of business or profession, capital gains, and income from other sources. Salary is chargeable under s.15, income from house property under ss.22-27 and business profits under s.28.",
    legalBasis: "Sections 14, 15, 22, 28, 56(1) and 56(2)(ib), Income-tax Act, 1961.",
    wrongOptionExplanations: ["", "Salary is chargeable under the head 'Salaries' under s.15.", "Rent from a let-out property is chargeable under the head 'Income from House Property' under ss.22-27.", "Business profits are chargeable under the head 'Profits and Gains of Business or Profession' under s.28."],
    flashpoint: "s.14 → five heads. WINNINGS from lotteries, races, card games, gambling or betting → INCOME FROM OTHER SOURCES (s.56(2)(ib)).",
    source: "STATUTE"
  });

  Q({
    id: "TAX-026", subject: S, topic: "x3", subtopic: "Section 56(2)(viib) — share premium",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 56(2)(viib) of the Income-tax Act, 1961, where a company (not being a company in which the public are substantially interested) receives consideration for the issue of shares which exceeds the fair market value of the shares, the excess is:",
    options: [
      "Not taxable at all in any case",
      "Chargeable to income tax under the head 'Income from Other Sources'",
      "Chargeable to tax as capital gains",
      "Chargeable to tax as business income"
    ],
    correctIndex: 1,
    explanation: "Section 56(2)(viib) provides that where a company, not being a company in which the public are substantially interested, receives in any previous year from any person any consideration for the issue of shares which exceeds the fair market value of the shares, the aggregate consideration received for the shares as exceeds the fair market value shall be chargeable to income tax under the head 'Income from Other Sources'. The provision does not apply where the consideration is received from a resident venture capital fund, a resident venture capital company or a specified fund, subject to the conditions prescribed in the rules.",
    legalBasis: "Section 56(2)(viib) and the Income-tax Rules on the determination of the fair market value, Income-tax Act, 1961.",
    wrongOptionExplanations: ["The excess is taxable.", "", "The excess is taxed under Income from Other Sources, not as capital gains.", "The excess is not taxed as business income."],
    flashpoint: "s.56(2)(viib) → a CLOSELY HELD company issuing shares ABOVE FAIR MARKET VALUE → the EXCESS is taxed under INCOME FROM OTHER SOURCES.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-027", subject: S, topic: "x4", subtopic: "Section 80G — donations",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Statement-Statement",
    question: "Statement I: Under Section 80G of the Income-tax Act, 1961, a donation in cash exceeding two thousand rupees is not eligible for deduction.\nStatement II: For donations to institutions covered by Section 80G(2), the deduction is 50% of the amount donated and the aggregate deduction is subject to a qualifying limit of ten per cent of the adjusted gross total income.\nWhich of the following is correct?",
    options: [
      "Both Statements I and II are correct",
      "Statement I is correct, but Statement II is incorrect",
      "Statement I is incorrect, but Statement II is correct",
      "Both Statements I and II are incorrect"
    ],
    correctIndex: 0,
    explanation: "Both statements are correct. Section 80G permits a deduction for donations to certain funds, charitable institutions and other institutions. Donations to the funds listed in sub-s.(1) qualify for a 100% deduction without a qualifying limit, whereas donations to the institutions covered by sub-s.(2) qualify for a deduction of 50% of the amount donated, and in those cases the aggregate deduction is restricted to 10% of the adjusted gross total income of the assessee. A donation made in cash exceeding two thousand rupees is not eligible for deduction; the payment must be made by any mode other than cash. The institution must also have approval or registration under the relevant provisions.",
    legalBasis: "Sections 80G and 80GGA, Income-tax Act, 1961.",
    wrongOptionExplanations: ["", "Statement II correctly states the position for institutions covered by s.80G(2).", "Statement I correctly states the position on cash donations above two thousand rupees.", "Both statements are correct."],
    flashpoint: "s.80G → 100% for sub-s.(1) funds; 50% for sub-s.(2) institutions with a 10% of adjusted GTI qualifying limit; CASH donations above ₹2,000 are NOT eligible.",
    source: "STATUTE"
  });

  Q({
    id: "TAX-028", subject: S, topic: "x4", subtopic: "Section 80C — ceiling",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 80C of the Income-tax Act, 1961, the aggregate deduction for the specified investments and payments (including a life insurance premium, contributions to a public provident fund or an equity-linked savings scheme, a National Savings Certificate, tuition fees and the repayment of the principal of a housing loan) is subject to a maximum of:",
    options: ["₹50,000", "₹1,00,000", "₹1,20,000", "₹1,50,000"],
    correctIndex: 3,
    explanation: "Section 80C permits a deduction for the specified investments and payments, subject to an aggregate ceiling of one lakh fifty thousand rupees in a previous year. Section 80CCD(1B) provides an additional deduction of up to fifty thousand rupees for contributions to the National Pension System. These deductions are not available to an assessee who opts for the concessional regime under s.115BAC, subject to the specified exceptions.",
    legalBasis: "Sections 80C, 80CCD(1B) and 115BAC, Income-tax Act, 1961.",
    wrongOptionExplanations: ["₹50,000 is the ceiling for the additional National Pension System deduction under s.80CCD(1B).", "₹1,00,000 was the ceiling before the limit was raised to ₹1,50,000 with effect from the assessment year 2015-16.", "₹1,20,000 was the ceiling for the assessment years 2012-13 and 2013-14.", ""],
    flashpoint: "s.80C → aggregate ceiling ₹1,50,000. s.80CCD(1B) → a further ₹50,000 for the NPS.",
    source: "STATUTE"
  });
})();
