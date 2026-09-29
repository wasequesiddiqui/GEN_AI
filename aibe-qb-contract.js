/* ============================================================================
 * AIBE XXI — Question Bank: Indian Contract Act, Specific Relief, Transfer of
 * Property, Easements, Trusts and Negotiable Instruments.
 * Weightage: 8 / 100. 48 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "contract";

  /* ============================================== g1 — Formation of contract */
  Q({
    id: "CTR-001", subject: S, topic: "g1", subtopic: "Essentials of a valid contract",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Multi",
    question: "Which of the following are essential elements of a valid contract under the Indian Contract Act, 1872?\nI. Offer and acceptance resulting in an agreement\nII. Intention to create legal relations\nIII. Lawful consideration and lawful object\nIV. Capacity of the parties and free consent",
    options: ["I, II and III", "I, III and IV", "II, III and IV", "I, II, III and IV"],
    correctIndex: 3,
    explanation: "Section 10 provides that all agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not expressly declared to be void. Read with ss.2(h), 11 and 23, the essentials are: an offer and acceptance resulting in an agreement, the intention to create legal relations (a judicial requirement rather than a statutory one), lawful consideration, a lawful object, capacity, free consent, and certainty and possibility of performance.",
    legalBasis: "Sections 2(h), 10, 11, 13, 14, 23, 29 and 56, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["Statement IV is also essential.", "Statement II is also an essential requirement.", "Statement I is also essential.", ""],
    flashpoint: "INDIAN CONTRACT ACT s.10 → free consent + competent parties + LAWFUL CONSIDERATION + LAWFUL OBJECT.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-002", subject: S, topic: "g1", subtopic: "Communication of offer",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 4 of the Indian Contract Act, 1872, the communication of a proposal is complete:",
    options: [
      "When it is posted",
      "When the proposer writes it",
      "When the acceptor accepts it",
      "When it comes to the knowledge of the person to whom it is made"
    ],
    correctIndex: 3,
    explanation: "Section 4 provides that the communication of a proposal is complete when it comes to the knowledge of the person to whom it is made. The communication of an acceptance is complete as against the proposer when it is put in a course of transmission to him, so as to be out of the power of the acceptor; and as against the acceptor when it comes to the knowledge of the proposer.",
    legalBasis: "Sections 3, 4 and 5, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "Posting is relevant to the communication of the acceptance.",
      "Writing alone does not complete the communication.",
      "Acceptance completes the agreement, not the communication of the proposal.",
      ""
    ],
    flashpoint: "s.4 → communication of a PROPOSAL is complete when it comes to the KNOWLEDGE of the offeree. Communication of an ACCEPTANCE is complete against the PROPOSER when POSTED.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-003", subject: S, topic: "g1", subtopic: "Revocation of acceptance",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 5 of the Indian Contract Act, 1872, an acceptance may be revoked:",
    options: [
      "At any time before the contract is performed",
      "At any time before the communication of the acceptance is complete as against the acceptor, but not afterwards",
      "Only after the communication of the acceptance is complete",
      "An acceptance cannot be revoked at all"
    ],
    correctIndex: 1,
    explanation: "Section 5 provides that a proposal may be revoked at any time before the communication of its acceptance is complete as against the proposer, but not afterwards, and that an acceptance may be revoked at any time before the communication of the acceptance is complete as against the acceptor, but not afterwards. Since the communication of the acceptance is complete as against the acceptor when it comes to the knowledge of the proposer, the revocation must reach the proposer before the acceptance does.",
    legalBasis: "Sections 4 and 5, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["The revocation window closes on the completion of the communication.", "", "After the communication is complete, the revocation is too late.", "An acceptance may be revoked within the statutory window."],
    flashpoint: "s.5 → an ACCEPTANCE may be revoked BEFORE the communication of the acceptance is complete AS AGAINST THE ACCEPTOR.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-004", subject: S, topic: "g1", subtopic: "Invitation to offer",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Scenario",
    question: "A shopkeeper displays goods on his shelves with price tags. A customer picks up an item and tenders the price at the counter. Which of the following is the correct analysis?",
    options: [
      "The display is an offer, and the customer's tender of the price is an acceptance",
      "No contract can result from a sale in a shop",
      "The display is a standing offer which the customer accepts",
      "The display is an invitation to offer, and the customer's tender of the price is the offer, which the shopkeeper may accept or refuse"
    ],
    correctIndex: 3,
    explanation: "A display of goods with a price tag in a shop window or on a shelf is ordinarily an invitation to offer, not an offer. The customer makes the offer when he tenders the price, and the shopkeeper may accept or refuse it. Pharmaceutical Society of Great Britain v. Boots Cash Chemists (Southern) Ltd. is the leading authority.",
    legalBasis: "Sections 2(a) and 2(b), Indian Contract Act, 1872; Pharmaceutical Society of Great Britain v. Boots Cash Chemists (Southern) Ltd., (1953) 1 QB 401.",
    wrongOptionExplanations: ["The display is not an offer.", "Contracts arise from sales in shops.", "A standing offer is a different concept.", ""],
    flashpoint: "DISPLAY of goods with a price tag = INVITATION TO OFFER. The CUSTOMER's tender of the price = the OFFER.",
    source: "CASE"
  });

  Q({
    id: "CTR-005", subject: S, topic: "g1", subtopic: "Consideration",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 2(d) of the Indian Contract Act, 1872, consideration must be:",
    options: [
      "Adequate in value",
      "Always past",
      "Always in money",
      "Something at the desire of the promisor, done or abstained from doing, or promised to be done or abstained from doing, and it must be real, lawful and not illusory"
    ],
    correctIndex: 3,
    explanation: "Section 2(d) defines consideration as, when at the desire of the promisor, the promisee or any other person has done or abstained from doing, or does or abstains from doing, or promises to do or to abstain from doing, something, such act or abstinence or promise is called a consideration for the promise. Explanation 1 to s.25 and the decided cases establish that consideration must be real and lawful and that it need not be adequate, but it must be something more than a mere illusion.",
    legalBasis: "Sections 2(d), 23, 25 and the Explanation to Section 25, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "Adequacy of consideration is not required, though it must be real.",
      "Consideration may be past, present or future (executed or executory).",
      "Consideration need not be in money.",
      ""
    ],
    flashpoint: "s.2(d) → consideration must be at the DESIRE of the PROMISOR; it must be REAL and LAWFUL; ADEQUACY is NOT required.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-006", subject: S, topic: "g1", subtopic: "Privity of contract",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Indian Contract Act, 1872, the rule of privity of contract means that:",
    options: [
      "A contract can be enforced by a stranger to the contract",
      "Consideration must always move from the promisee",
      "Only a party to a contract can enforce it, subject to the recognised exceptions such as a trust, a family arrangement or a charge in favour of a third party, and Section 2(d) which permits consideration to move from a third party",
      "A third party beneficiary can always sue on the contract"
    ],
    correctIndex: 2,
    explanation: "The rule of privity of contract is that only a party to a contract can enforce it. However, the Indian position differs from the English position in one important respect: s.2(d) permits consideration to move from a third party, so a stranger to the consideration may be a party to the contract. The exceptions to the privity rule include a trust, a family arrangement, a charge in favour of a third party, and the acknowledgment or estoppel by a party who has received the benefit.",
    legalBasis: "Sections 2(d) and 25, Indian Contract Act, 1872; Khwaja Muhammad Khan v. Husaini Begum, (1910) ILR 32 All 410.",
    wrongOptionExplanations: [
      "A stranger cannot ordinarily enforce a contract.",
      "Consideration may move from a third party under s.2(d).",
      "",
      "A third-party beneficiary cannot always sue."
    ],
    flashpoint: "PRIVITY → only a PARTY may enforce. But s.2(d) allows consideration to MOVE FROM A THIRD PARTY (a stranger to consideration may be a party).",
    source: "STATUTE"
  });

  /* ==================================================== g2 — Free consent */
  Q({
    id: "CTR-007", subject: S, topic: "g2", subtopic: "Coercion and undue influence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is the correct distinction between coercion under Section 15 and undue influence under Section 16 of the Indian Contract Act, 1872?",
    options: [
      "Both involve the threat of an offence",
      "Coercion involves dominating the will of another, while undue influence involves the threat of an offence",
      "Coercion involves committing or threatening to commit any act forbidden by the Indian Penal Code, or the unlawful detaining or threatening to detain any property, to the prejudice of any person, with the intention of causing any person to enter into an agreement; undue influence involves the relations between the parties being such that one party is in a position to dominate the will of the other and uses that position to obtain an unfair advantage",
      "Undue influence involves moral pressure only, and coercion involves physical pressure only"
    ],
    correctIndex: 2,
    explanation: "Section 15 defines coercion as the committing or threatening to commit any act forbidden by the Indian Penal Code, or the unlawful detaining or threatening to detain any property, to the prejudice of any person whatever, with the intention of causing any person to enter into an agreement. Section 16 defines undue influence as where the relations subsisting between the parties are such that one of the parties is in a position to dominate the will of the other and uses that position to obtain an unfair advantage over the other.",
    legalBasis: "Sections 15, 16, 19 and 19A, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "Undue influence does not require the threat of an offence.",
      "The description is the reverse of the correct position.",
      "",
      "The physical/moral distinction is an oversimplification."
    ],
    flashpoint: "COERCION (s.15) → act forbidden by the IPC or unlawful detention of property. UNDUE INFLUENCE (s.16) → POSITION TO DOMINATE THE WILL + UNFAIR ADVANTAGE.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-008", subject: S, topic: "g2", subtopic: "Fraud and misrepresentation",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly distinguishes fraud under Section 17 from misrepresentation under Section 18 of the Indian Contract Act, 1872?",
    options: [
      "Fraud is always innocent, whereas misrepresentation involves an intention to deceive",
      "Fraud involves an intention to deceive, whereas misrepresentation is an innocent or unintentional misstatement of fact",
      "Both are the same",
      "Misrepresentation entitles the aggrieved party to avoid the contract, but fraud does not"
    ],
    correctIndex: 1,
    explanation: "Section 17 defines fraud to include, with intent to deceive, the suggestion as a fact of that which is not true by one who does not believe it to be true, the active concealment of a fact, a promise made without any intention of performing it, and any other act fitted to deceive. Section 18 defines misrepresentation as a positive assertion not warranted by the information of the person making it, though he believes it to be true, a breach of duty which has given an advantage to the person committing it by misleading another, or causing another to make a mistake as to the substance of the thing. The essential difference is the intention to deceive.",
    legalBasis: "Sections 17, 18 and 19, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "The description is the reverse of the correct position.",
      "",
      "The two are distinct.",
      "Both fraud and misrepresentation entitle the aggrieved party to avoid the contract."
    ],
    flashpoint: "FRAUD (s.17) → INTENT TO DECEIVE. MISREPRESENTATION (s.18) → INNOCENT or UNINTENTIONAL misstatement.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-009", subject: S, topic: "g2", subtopic: "Mistake of fact",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Indian Contract Act, 1872, a contract is void where both parties are under a mistake as to a matter of fact essential to the agreement. This is provided in:",
    options: ["Section 19", "Section 21", "Section 20", "Section 22"],
    correctIndex: 2,
    explanation: "Section 20 provides that where both the parties to an agreement are under a mistake as to a matter of fact essential to the agreement, the agreement is void. Section 21 provides that a contract is not voidable because it was caused by a mistake as to any law in force in India, and s.22 provides that a contract is not voidable merely because it was caused by one of the parties being under a mistake as to a matter of fact.",
    legalBasis: "Sections 19, 20, 21 and 22, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "Section 19 deals with the voidability of agreements without free consent.",
      "Section 21 deals with a mistake as to law.",
      "",
      "Section 22 deals with a unilateral mistake of fact."
    ],
    flashpoint: "BILATERAL mistake of fact essential to the agreement → VOID (s.20). MISTAKE OF LAW → not voidable (s.21). UNILATERAL mistake → not voidable (s.22).",
    source: "STATUTE"
  });

  Q({
    id: "CTR-010", subject: S, topic: "g2", subtopic: "Effect of coercion, undue influence and fraud",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Statement-Statement",
    question: "Statement I: A contract caused by coercion, undue influence, fraud or misrepresentation is voidable at the option of the party whose consent was so caused.\nStatement II: Where consent is caused by a bilateral mistake as to a matter of fact essential to the agreement, the agreement is void.\nWhich of the following is correct?",
    options: [
      "Statement I is incorrect, but Statement II is correct",
      "Statement I is correct, but Statement II is incorrect",
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect"
    ],
    correctIndex: 2,
    explanation: "Section 19 provides that when consent to an agreement is caused by coercion, fraud or misrepresentation, the agreement is a contract voidable at the option of the party whose consent was so caused; s.19A makes the same provision for undue influence. Section 20 provides that where both parties are under a mistake as to a matter of fact essential to the agreement, the agreement is void. Both statements are therefore correct.",
    legalBasis: "Sections 19, 19A and 20, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["Statement I is correct.", "Statement II is correct.", "", "Both statements are correct."],
    flashpoint: "VOIDABLE → coercion, undue influence, fraud, misrepresentation (ss.19, 19A). VOID → bilateral mistake of fact (s.20).",
    source: "STATUTE"
  });

  Q({
    id: "CTR-011", subject: S, topic: "g2", subtopic: "Domination of will",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 16(2) of the Indian Contract Act, 1872, a person is deemed to be in a position to dominate the will of another where:",
    options: [
      "He holds a real or apparent authority over the other, or stands in a fiduciary relation to him, or makes a contract with a person whose mental capacity is temporarily or permanently affected by reason of age, illness or mental or bodily distress",
      "He is older than the other party",
      "He is wealthier than the other party",
      "He is a businessman"
    ],
    correctIndex: 0,
    explanation: "Section 16(2) sets out the circumstances in which a person is deemed to be in a position to dominate the will of another: where he holds a real or apparent authority over the other, or where he stands in a fiduciary relation to the other, or where he makes a contract with a person whose mental capacity is temporarily or permanently affected by reason of age, illness, or mental or bodily distress. Section 16(3) provides that a transaction is deemed to have been induced by undue influence where the transaction appears unconscionable and the party in the dominant position fails to show that it was not induced by undue influence.",
    legalBasis: "Sections 16(1), 16(2) and 16(3), Indian Contract Act, 1872.",
    wrongOptionExplanations: ["", "Age alone is not the test.", "Wealth alone is not the test.", "Business status is not the test."],
    flashpoint: "s.16(2) → REAL OR APPARENT AUTHORITY | FIDUCIARY RELATION | MENTAL CAPACITY affected by age, illness or distress.",
    source: "STATUTE"
  });

  /* ============================================== g3 — Void agreements */
  Q({
    id: "CTR-012", subject: S, topic: "g3", subtopic: "Restraint of trade",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 27 of the Indian Contract Act, 1872, an agreement in restraint of trade is:",
    options: ["Valid", "Voidable", "Void", "Unenforceable but lawful"],
    correctIndex: 2,
    explanation: "Section 27 provides that every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind is, to that extent, void. The only statutory exception in the Indian Contract Act is the sale of the goodwill of a business, where the seller may agree not to carry on a similar business within specified local limits so long as the buyer or any person deriving title from him carries on a like business, provided the limits are reasonable.",
    legalBasis: "Section 27 and Exception 1, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "An agreement in restraint of trade is void.",
      "Voidable is a different category.",
      "",
      "An agreement in restraint of trade is void, not merely unenforceable."
    ],
    flashpoint: "s.27 → an agreement in RESTRAINT OF TRADE is VOID. Exception: SALE OF GOODWILL with reasonable local limits.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-013", subject: S, topic: "g3", subtopic: "Post-employment non-compete",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "An employee executes an employment agreement with his employer including a clause that after leaving the employment he shall not join any competing business for two years anywhere in India. Which of the following is the correct legal position?",
    options: [
      "The clause is valid because it protects the employer's business interests",
      "The clause is void under Section 27 as being in restraint of trade, and the position in India is that a post-employment non-compete restraint is void",
      "The clause is valid if the employee was paid additional compensation",
      "The clause is valid if it is limited to two years"
    ],
    correctIndex: 1,
    explanation: "Under s.27 of the Indian Contract Act, 1872, an agreement in restraint of trade is void. Unlike the English position, Indian law does not recognise a 'reasonableness' test for a post-employment non-compete restraint, so a covenant preventing an employee from carrying on his trade or profession after the termination of his employment is void, and the fact that the restraint is limited in time and place does not save it. Percept D'Mark (India) (P) Ltd. v. Zaheer Khan is among the decisions to this effect. A restriction operating during the subsistence of the employment stands on a different footing.",
    legalBasis: "Section 27, Indian Contract Act, 1872; Percept D'Mark (India) (P) Ltd. v. Zaheer Khan, (2006) 4 SCC 227; Superintendence Company of India (P) Ltd. v. Krishan Murgai, (1981) 2 SCC 246.",
    wrongOptionExplanations: ["Protection of business interest does not save a post-employment restraint in India.", "", "Additional compensation does not make the restraint valid.", "A limitation in time does not validate a post-employment restraint in India."],
    flashpoint: "POST-EMPLOYMENT NON-COMPETE → VOID in India (s.27). Percept D'Mark v. Zaheer Khan. Reasonableness does NOT save it.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CTR-014", subject: S, topic: "g3", subtopic: "Wagering agreement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 30 of the Indian Contract Act, 1872, agreements by way of wager are:",
    options: [
      "Valid and enforceable",
      "Void, and no suit shall be brought for recovering anything alleged to be won on any wager",
      "Voidable at the option of the loser",
      "Valid if the wager is in writing"
    ],
    correctIndex: 1,
    explanation: "Section 30 provides that agreements by way of wager are void, and that no suit shall be brought for recovering anything alleged to be won on any wager, or entrusted to any person to abide the result of any game or other uncertain event on which any wager is made. A collateral transaction, however, such as a loan advanced for the purpose of wagering, or a prize in a horse race of the prescribed value, may be enforceable.",
    legalBasis: "Section 30 and Exception 1, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["A wagering agreement is void.", "", "It is void, not voidable.", "Writing does not validate a wager."],
    flashpoint: "s.30 → WAGERING agreements are VOID. Collateral transactions and prizes in horse races of the prescribed value may be enforceable.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-015", subject: S, topic: "g3", subtopic: "Unlawful object",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 23 of the Indian Contract Act, 1872, the consideration or object of an agreement is unlawful if:",
    options: [
      "It is forbidden by law, or is of such a nature that if permitted it would defeat the provisions of any law, or is fraudulent, or involves or implies injury to the person or property of another, or the Court regards it as immoral or opposed to public policy",
      "The parties belong to different States",
      "The consideration is inadequate",
      "The agreement is oral"
    ],
    correctIndex: 0,
    explanation: "Section 23 provides that the consideration or object of an agreement is lawful unless it is forbidden by law, or is of such a nature that if permitted it would defeat the provisions of any law, or is fraudulent, or involves or implies injury to the person or property of another, or the Court regards it as immoral or opposed to public policy. Every agreement of which the object or consideration is unlawful is void.",
    legalBasis: "Sections 23 and 24, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["", "Residence of the parties is irrelevant.", "Inadequacy of consideration does not make an agreement void.", "An oral agreement may be valid."],
    flashpoint: "s.23 → FORBIDDEN BY LAW | DEFEATS THE PROVISIONS OF LAW | FRAUDULENT | INJURY to person or property | IMMORAL | OPPOSED TO PUBLIC POLICY.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-016", subject: S, topic: "g3", subtopic: "Trading with enemy",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "An agreement between a citizen of India and a citizen of an enemy country, made during the continuance of hostilities and without the permission of the Government, is:",
    options: ["Valid", "Valid if it is in writing", "Voidable at the option of the Indian citizen", "Void as being opposed to public policy"],
    correctIndex: 3,
    explanation: "An agreement to trade with an alien enemy without the permission of the Government is unlawful as being opposed to public policy and is void under s.23. Contracts entered into before the outbreak of hostilities may be suspended during the war and may revive at its conclusion, but a contract made with an enemy during the continuance of hostilities is void.",
    legalBasis: "Section 23, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["Trading with an enemy without permission is not valid.", "Writing does not save it.", "It is void, not merely voidable.", ""],
    flashpoint: "TRADING WITH AN ENEMY without Government permission → VOID as OPPOSED TO PUBLIC POLICY (s.23).",
    source: "STATUTE"
  });

  Q({
    id: "CTR-017", subject: S, topic: "g3", subtopic: "Agreements without consideration",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 25 of the Indian Contract Act, 1872, an agreement made without consideration is void, save in which of the following cases?",
    options: [
      "An agreement made on account of natural love and affection between parties standing in a near relation to each other, expressed in writing and registered; a promise to compensate wholly or in part a person who has already voluntarily done something for the promisor; and a promise in writing and signed to pay a time-barred debt",
      "Any agreement between relatives",
      "Any oral promise to pay a time-barred debt",
      "Any agreement to do something for the promisor"
    ],
    correctIndex: 0,
    explanation: "Section 25 contains three exceptions: (1) an agreement made on account of natural love and affection between parties standing in a near relation to each other, expressed in writing and registered under the law for the time being in force for the registration of documents; (2) a promise to compensate, wholly or in part, a person who has already voluntarily done something for the promisor, or something which the promisor was legally compellable to do; and (3) a promise made in writing and signed by the person to be charged therewith, or by his agent, to pay wholly or in part a debt of which the creditor might have enforced payment but for the law for the limitation of suits. Section 185 of the Indian Contract Act (agency) and the provisions relating to gifts also create exceptions.",
    legalBasis: "Section 25 and its Exceptions, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["", "Relationship alone is not enough; writing and registration are required.", "An oral promise to pay a time-barred debt is not enforceable under the exception.", "Doing something for the promisor must be voluntary and the promise must be to compensate."],
    flashpoint: "s.25 exceptions → NATURAL LOVE AND AFFECTION (WRITING + REGISTRATION) | COMPENSATION for a past voluntary act | WRITTEN, SIGNED promise to pay a TIME-BARRED debt.",
    source: "STATUTE"
  });

  /* ============================================== g4 — Quasi contracts */
  Q({
    id: "CTR-018", subject: S, topic: "g4", subtopic: "Quantum meruit",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The principle of quantum meruit under the Indian Contract Act, 1872 means:",
    options: [
      "The whole of the contract price",
      "As much as earned — a claim for the reasonable value of services rendered",
      "A penalty for breach",
      "A form of specific performance"
    ],
    correctIndex: 1,
    explanation: "Quantum meruit means 'as much as earned', and refers to a claim for the reasonable value of services rendered or goods supplied where the contract has been discharged or where the contract is unenforceable. Section 70 of the Indian Contract Act, 1872 codifies this principle where a person lawfully does anything for another or delivers anything to him not intending to do so gratuitously.",
    legalBasis: "Sections 68, 69, 70 and 71, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "Quantum meruit is the reasonable value of the work, not the whole contract price.",
      "",
      "It is not a penalty.",
      "It is not a form of specific performance."
    ],
    flashpoint: "QUANTUM MERUIT = 'as much as earned' → reasonable value of services. Codified principally in s.70.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-019", subject: S, topic: "g4", subtopic: "Obligation of a person enjoying a benefit",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 70 of the Indian Contract Act, 1872 provides that where a person lawfully does anything for another person or delivers anything to him, not intending to do so gratuitously, and such other person enjoys the benefit thereof:",
    options: [
      "The former has no remedy",
      "The latter has no obligation",
      "The latter must compensate the former in respect of, or restore, the thing so done or delivered",
      "The former must sue for breach of contract"
    ],
    correctIndex: 2,
    explanation: "Section 70 provides that where a person lawfully does anything for another person, or delivers anything to him, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation to the former in respect of, or to restore, the thing so done or delivered. The provision is one of the quasi-contractual obligations dealt with in Chapter V of the Act.",
    legalBasis: "Sections 68, 69, 70 and 71, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "A remedy is available under s.70.",
      "The obligation arises under s.70.",
      "",
      "The claim is quasi-contractual, not for breach of contract."
    ],
    flashpoint: "s.70 → LAWFUL act done or thing delivered, NOT gratuitously, and the other ENJOYS THE BENEFIT → COMPENSATION or RESTORATION.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-020", subject: S, topic: "g4", subtopic: "Payment by mistake",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 72 of the Indian Contract Act, 1872, a person to whom money has been paid, or anything delivered, by mistake or under coercion:",
    options: [
      "May retain it",
      "Must repay or return it",
      "May retain it if he acted in good faith",
      "Must repay only if the mistake was mutual"
    ],
    correctIndex: 1,
    explanation: "Section 72 provides that a person to whom money has been paid, or anything delivered, by mistake or under coercion, must repay or return it. The provision applies whether the mistake is of fact or of law and whether it is mutual or unilateral, and the recipient's good faith is not a defence.",
    legalBasis: "Sections 21 and 72, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["The money must be repaid.", "", "Good faith is not a defence under s.72.", "The mistake need not be mutual."],
    flashpoint: "s.72 → money paid or thing delivered BY MISTAKE or UNDER COERCION must be REPAID or RETURNED. Good faith is NO defence.",
    source: "STATUTE"
  });

  /* ========================================= g5 — Performance and discharge */
  Q({
    id: "CTR-021", subject: S, topic: "g5", subtopic: "Doctrine of frustration",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 56 of the Indian Contract Act, 1872, an agreement to do an act impossible in itself is void, and a contract to do an act which, after the contract is made, becomes impossible or unlawful:",
    options: [
      "Remains enforceable",
      "Becomes void when the act becomes impossible or unlawful",
      "Becomes voidable",
      "Must be specifically performed"
    ],
    correctIndex: 1,
    explanation: "Section 56 provides that an agreement to do an act impossible in itself is void, and that a contract to do an act which, after the contract is made, becomes impossible or, by reason of some event which the promisor could not prevent, unlawful, becomes void when the act becomes impossible or unlawful. The section embodies the doctrine of frustration, and Satyabrata Ghose v. Mugneeram Bangur & Co. is the leading authority on its application.",
    legalBasis: "Section 56, Indian Contract Act, 1872; Satyabrata Ghose v. Mugneeram Bangur & Co., AIR 1954 SC 44.",
    wrongOptionExplanations: ["The contract does not remain enforceable.", "", "It is void, not voidable.", "A void contract cannot be specifically performed."],
    flashpoint: "s.56 → FRUSTRATION. A post-contract supervening impossibility renders the contract VOID (Satyabrata Ghose). Self-induced impossibility does not attract s.56.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-022", subject: S, topic: "g5", subtopic: "Time as essence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 55 of the Indian Contract Act, 1872, when a party to a contract promises to do a certain thing at or before a specified time, and fails to do it at or before the specified time, the contract, or so much of it as has not been performed:",
    options: [
      "Becomes voidable at the option of the promisee if the intention of the parties was that time should be of the essence of the contract",
      "Is void",
      "Is automatically terminated",
      "Remains enforceable without any consequence"
    ],
    correctIndex: 0,
    explanation: "Section 55 provides that where a party promises to do a certain thing at or before a specified time, or certain things at or before specified times, and fails to do any such thing at or before the specified time, the contract, or so much of it as has not been performed, becomes voidable at the option of the promisee if the intention of the parties was that time should be of the essence of the contract. Section 55 also provides that where time is of the essence and the promisee accepts performance at any other time, he cannot claim compensation for any loss occasioned by the non-performance at the specified time unless he gives notice of his intention to do so.",
    legalBasis: "Section 55, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "",
      "The contract becomes voidable, not void.",
      "It is not automatically terminated.",
      "Consequences flow from the failure to perform within time."
    ],
    flashpoint: "s.55 → TIME AS ESSENCE → the contract becomes VOIDABLE at the PROMISEE's option. In commercial contracts, time is ordinarily of the essence.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-023", subject: S, topic: "g5", subtopic: "Novation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 62 of the Indian Contract Act, 1872, if the parties to a contract agree to substitute a new contract for it, or to rescind or alter it:",
    options: [
      "The original contract must still be performed",
      "The original contract need not be performed",
      "The original contract is void",
      "The original contract is voidable"
    ],
    correctIndex: 1,
    explanation: "Section 62 provides that if the parties to a contract agree to substitute a new contract for it, or to rescind or alter it, the original contract need not be performed. This is the doctrine of novation, and the substituted contract must be a valid contract between the same parties.",
    legalBasis: "Sections 62 and 63, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "The original contract need not be performed.",
      "",
      "The original contract is discharged, not void.",
      "The doctrine concerns discharge, not voidability."
    ],
    flashpoint: "s.62 NOVATION → the ORIGINAL CONTRACT need not be performed. s.63 → acceptance of a lesser sum discharges the promisor.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-024", subject: S, topic: "g5", subtopic: "Anticipatory breach",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly states the effect of an anticipatory breach of contract under the Indian Contract Act, 1872?",
    options: [
      "The aggrieved party has no remedy until the time for performance arrives",
      "The contract is automatically void",
      "Where a party repudiates the contract before the time for performance has arrived, the aggrieved party may put an end to the contract, or may keep the contract alive and wait for the time of performance",
      "The aggrieved party may only claim nominal damages"
    ],
    correctIndex: 2,
    explanation: "Where a party repudiates a contract before the time for performance has arrived, the aggrieved party may treat the contract as at an end and sue for damages immediately, or may keep the contract alive and wait until the time for performance arrives, in which case the contract continues for the benefit of both parties. For a promissory note, bill of exchange or cheque, s.39 and the Explanation to s.37 govern; for the general position on anticipatory breach, ss.39 and 37 are read with the decided cases.",
    legalBasis: "Sections 37, 38 and 39, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "The aggrieved party has an immediate remedy.",
      "The contract is not automatically void.",
      "",
      "The aggrieved party may recover substantial damages."
    ],
    flashpoint: "ANTICIPATORY BREACH (s.39) → the aggrieved party may RESCIND immediately or ELECT TO KEEP the contract alive until the time for performance.",
    source: "STATUTE"
  });

  /* ================================================ g6 — Breach and damages */
  Q({
    id: "CTR-025", subject: S, topic: "g6", subtopic: "Section 73 — damages",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 73 of the Indian Contract Act, 1872, when a contract has been broken, the party who suffers by the breach is entitled to receive from the party who has broken the contract:",
    options: [
      "Any loss, however remote",
      "Only nominal damages",
      "Compensation for any loss or damage caused to him thereby which naturally arose in the usual course of things from such breach, or which the parties knew, when they made the contract, to be likely to result from the breach of it",
      "Only the return of any advance paid"
    ],
    correctIndex: 2,
    explanation: "Section 73 provides that when a contract has been broken, the party who suffers by such breach is entitled to receive from the party who has broken the contract compensation for any loss or damage caused to him thereby which naturally arose in the usual course of things from such breach, or which the parties knew, when they made the contract, to be likely to result from the breach of it. Such compensation is not to be given for any remote and indirect loss or damage sustained by reason of the breach. The principle in Hadley v. Baxendale is thus codified.",
    legalBasis: "Section 73, Indian Contract Act, 1872; Hadley v. Baxendale, (1854) 9 Ex 341.",
    wrongOptionExplanations: [
      "Remote loss is not recoverable under s.73.",
      "Nominal damages are available only where no actual loss is proved.",
      "",
      "The measure is not confined to the return of an advance."
    ],
    flashpoint: "s.73 → DAMAGES for loss NATURALLY ARISING IN THE USUAL COURSE OF THINGS or loss within the CONTEMPLATION OF THE PARTIES. REMOTE loss is NOT recoverable (Hadley v. Baxendale).",
    source: "STATUTE"
  });

  Q({
    id: "CTR-026", subject: S, topic: "g6", subtopic: "Section 74 — liquidated damages",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 74 of the Indian Contract Act, 1872, where a contract names a sum to be paid in case of breach, or contains any other stipulation by way of penalty:",
    options: [
      "The full sum named is always recoverable",
      "The aggrieved party is entitled, whether or not actual damage or loss is proved to have been caused thereby, to receive from the party who has broken the contract reasonable compensation not exceeding the amount so named",
      "Only nominal damages are recoverable",
      "The stipulation is void"
    ],
    correctIndex: 1,
    explanation: "Section 74 provides that where a contract names a sum to be paid in case of breach, or contains any other stipulation by way of penalty, the party complaining of the breach is entitled, whether or not actual damage or loss is proved to have been caused thereby, to receive from the party who has broken the contract reasonable compensation not exceeding the amount so named. The section dispenses with the need to prove actual loss, but caps recovery at the amount named, and the court may award less than the stipulated sum. Fateh Chand v. Balkishan Dass is the leading authority.",
    legalBasis: "Section 74, Indian Contract Act, 1872; Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405; Kailash Nath Associates v. Delhi Development Authority, (2015) 4 SCC 136.",
    wrongOptionExplanations: ["The sum named is a ceiling, not an automatic entitlement.", "", "Reasonable compensation is available even without proof of actual loss.", "A stipulation by way of penalty is not void; it attracts s.74."],
    flashpoint: "s.74 → REASONABLE COMPENSATION not exceeding the sum named, whether or not actual loss is proved. FATEH CHAND v. BALKISHAN DASS; KAILASH NATH ASSOCIATES.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-027", subject: S, topic: "g6", subtopic: "Earnest money and forfeiture",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In Kailash Nath Associates v. Delhi Development Authority, (2015) 4 SCC 136, the Supreme Court held that:",
    options: [
      "Earnest money may be forfeited even where no loss is proved in every case",
      "Earnest money can never be forfeited",
      "Forfeiture of earnest money is not governed by Section 74",
      "Section 74 of the Indian Contract Act, 1872 applies to the forfeiture of earnest money, and where the amount is by way of penalty or is in the nature of a penalty, reasonable compensation must be awarded and loss must be proved unless the case falls within the recognised exceptions"
    ],
    correctIndex: 3,
    explanation: "In Kailash Nath Associates the Supreme Court held that s.74 of the Indian Contract Act applies to the forfeiture of earnest money, and that where the amount is by way of penalty or is in the nature of a penalty, reasonable compensation must be awarded and loss must be proved unless the case falls within the recognised exceptions, such as a genuine pre-estimate of damages or a reasonable amount of compensation. Where the forfeiture is of an unreasonable amount, it is penal.",
    legalBasis: "Section 74, Indian Contract Act, 1872; Kailash Nath Associates v. Delhi Development Authority, (2015) 4 SCC 136; Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405.",
    wrongOptionExplanations: [
      "Loss must generally be shown where the amount is penal.",
      "Earnest money may be forfeited in appropriate cases.",
      "Section 74 applies to such forfeiture.",
      ""
    ],
    flashpoint: "KAILASH NATH ASSOCIATES (2015) 4 SCC 136 → the FORFEITURE of EARNEST MONEY is governed by s.74; if the amount is PENAL, LOSS must be proved and REASONABLE COMPENSATION awarded.",
    source: "CASE"
  });

  Q({
    id: "CTR-028", subject: S, topic: "g6", subtopic: "Duty to mitigate",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Indian Contract Act, 1872, the Explanation to Section 73 provides that in estimating the loss or damage arising from a breach of contract:",
    options: [
      "The aggrieved party need not take any steps to mitigate the loss",
      "Damages are always the full contract price",
      "Only the contract price is relevant",
      "The means which existed of remedying the inconvenience caused by the non-performance of the contract must be taken into account"
    ],
    correctIndex: 3,
    explanation: "The Explanation to s.73 provides that in estimating the loss or damage arising from a breach of contract, the means which existed of remedying the inconvenience caused by the non-performance of the contract must be taken into account. This embodies the duty to mitigate: the aggrieved party cannot recover damages for a loss which he could have avoided by reasonable steps.",
    legalBasis: "Section 73 and the Explanation thereto, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "The aggrieved party must take reasonable steps to mitigate.",
      "Damages are compensatory, not the full contract price.",
      "The contract price is only one factor.",
      ""
    ],
    flashpoint: "EXPLANATION to s.73 → DUTY TO MITIGATE: the means available to remedy the inconvenience must be taken into account.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-029", subject: S, topic: "g6", subtopic: "Liquidated damages vs penalty",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly distinguishes liquidated damages from a penalty?",
    options: [
      "Liquidated damages are a genuine pre-estimate of the loss likely to result from the breach, whereas a penalty is a sum stipulated to secure performance which is extravagant and unconscionable in amount in comparison with the greatest loss that could conceivably be proved",
      "Liquidated damages are always unenforceable",
      "A penalty is always enforceable in full",
      "There is no distinction in Indian law"
    ],
    correctIndex: 0,
    explanation: "Liquidated damages represent a genuine pre-estimate of the loss likely to result from the breach. A penalty is a sum inserted to secure performance, and is extravagant and unconscionable in amount in comparison with the greatest loss that could conceivably be proved to have followed from the breach. The distinction is most fully developed in English law (Dunlop Pneumatic Tyre Co. Ltd. v. New Garage & Motor Co. Ltd.), and in India s.74 of the Indian Contract Act, 1872 applies a uniform test of reasonable compensation not exceeding the sum named, whether the stipulation is by way of liquidated damages or penalty.",
    legalBasis: "Section 74, Indian Contract Act, 1872; Dunlop Pneumatic Tyre Co. Ltd. v. New Garage & Motor Co. Ltd., (1915) AC 79; Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405.",
    wrongOptionExplanations: ["", "Liquidated damages may be recoverable as reasonable compensation.", "A penalty is not recoverable in full; reasonable compensation is awarded.", "Indian law recognises the concept, though s.74 adopts a uniform test."],
    flashpoint: "LIQUIDATED DAMAGES → GENUINE PRE-ESTIMATE. PENALTY → EXTRAVAGANT and UNCONSCIONABLE, intended to secure performance. s.74 applies a UNIFORM test of REASONABLE COMPENSATION.",
    source: "CASE"
  });

  /* ========================================== g7 — Bailment, pledge, surety */
  Q({
    id: "CTR-030", subject: S, topic: "g7", subtopic: "Bailment — definition",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 148 of the Indian Contract Act, 1872, a 'bailment' is:",
    options: [
      "A gratuitous promise to return goods",
      "The transfer of ownership of goods",
      "The delivery of goods by one person to another for some purpose, upon a contract that they shall, when the purpose is accomplished, be returned or otherwise disposed of according to the directions of the person delivering them",
      "A sale of goods on approval"
    ],
    correctIndex: 2,
    explanation: "Section 148 defines bailment as the delivery of goods by one person to another for some purpose, upon a contract that they shall, when the purpose is accomplished, be returned or otherwise disposed of according to the directions of the person delivering them. The person delivering the goods is called the bailor and the person to whom they are delivered is called the bailee. Only goods, and not money, are the subject of a bailment, and possession, not ownership, passes to the bailee.",
    legalBasis: "Sections 148, 149 and 150, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["A bailment requires delivery of possession.", "Ownership does not pass in a bailment.", "", "A sale on approval is not a bailment."],
    flashpoint: "BAILMENT (s.148) → DELIVERY OF GOODS for a PURPOSE + RETURN or disposal per the BAILOR's directions. Possession, not ownership, passes.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-031", subject: S, topic: "g7", subtopic: "Bailee's duty of care",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 151 of the Indian Contract Act, 1872, in all cases of bailment the bailee is bound to take:",
    options: [
      "Less care than he would take of his own goods",
      "As much care of the goods bailed to him as a man of ordinary prudence would, under similar circumstances, take of his own goods of the same bulk, quality and value as the goods bailed",
      "Care only if he is paid",
      "No care at all"
    ],
    correctIndex: 1,
    explanation: "Section 151 provides that in all cases of bailment the bailee is bound to take as much care of the goods bailed to him as a man of ordinary prudence would, under similar circumstances, take of his own goods of the same bulk, quality and value as the goods bailed. Section 152 provides that the bailee is not liable for the loss, destruction or deterioration of the goods bailed if he has taken the amount of care required by s.151.",
    legalBasis: "Sections 151, 152, 161 and 162, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["The standard is that of a man of ordinary prudence.", "", "The duty applies irrespective of remuneration, though a gratuitous bailee may be treated differently in some respects.", "The bailee must take care of the goods."],
    flashpoint: "s.151 → the bailee must take the care of a MAN OF ORDINARY PRUDENCE of goods of the SAME BULK, QUALITY AND VALUE as his own.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-032", subject: S, topic: "g7", subtopic: "Lien of a bailee",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly distinguishes a particular lien from a general lien under the Indian Contract Act, 1872?",
    options: [
      "A general lien is available only to a common carrier",
      "A particular lien extends to all goods of the bailor, while a general lien is confined to the specific goods",
      "Both are the same",
      "A particular lien, available where the bailee has, in accordance with the purpose of the bailment, rendered services involving the exercise of labour or skill in respect of the goods bailed, is confined to those goods; a general lien, available to specified categories such as bankers, factors, wharfingers, attorneys of a High Court and policy brokers, entitles the holder to retain any goods in respect of a general balance of account"
    ],
    correctIndex: 3,
    explanation: "Section 170 confers a particular lien on a bailee who has, in accordance with the purpose of the bailment, rendered services involving the exercise of labour or skill in respect of the goods bailed; the lien is confined to those goods and to the amount of the remuneration. Section 171 confers a general lien on bankers, factors, wharfingers, attorneys of a High Court and policy brokers, entitling them to retain, as a security for a general balance of account, any goods bailed to them, in the absence of a contract to the contrary.",
    legalBasis: "Sections 169, 170 and 171, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "A common carrier has a particular lien under s.170 and a general lien is available to the categories in s.171.",
      "The description is the reverse of the correct position.",
      "The two are distinct.",
      ""
    ],
    flashpoint: "PARTICULAR LIEN (s.170) → confined to the goods on which LABOUR OR SKILL was expended. GENERAL LIEN (s.171) → bankers, factors, wharfingers, attorneys of a High Court, policy brokers; covers a GENERAL BALANCE OF ACCOUNT.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-033", subject: S, topic: "g7", subtopic: "Guarantee — variance",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 133 of the Indian Contract Act, 1872, where the creditor makes a variance in the terms of the contract between the principal debtor and the creditor, without the surety's consent, the surety is:",
    options: [
      "Discharged only if the variance is in writing",
      "Not discharged in any case",
      "Discharged as to transactions after the variance, unless the variance is not material or the surety has consented",
      "Entitled to a reduction of one-half of the amount"
    ],
    correctIndex: 2,
    explanation: "Section 133 provides that any variance made without the surety's consent in the terms of the contract between the principal debtor and the creditor discharges the surety as to transactions subsequent to the variance. The section is qualified by the word 'variance' and the variance must be material; a variance which is not material does not discharge the surety. The surety may, of course, consent to the variance, in which case the discharge does not occur.",
    legalBasis: "Sections 128, 130, 133, 134, 135 and 139, Indian Contract Act, 1872.",
    wrongOptionExplanations: [
      "The discharge does not depend on the variance being in writing.",
      "A material variance without consent discharges the surety.",
      "",
      "A reduction of one-half is not the consequence."
    ],
    flashpoint: "s.133 → a MATERIAL VARIANCE without the SURETY's consent DISCHARGES the surety as to subsequent transactions. An immaterial variance does not.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-034", subject: S, topic: "g7", subtopic: "Extent of surety's liability",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 128 of the Indian Contract Act, 1872, the liability of the surety is:",
    options: [
      "Co-extensive with that of the principal debtor, unless it is otherwise provided by the contract",
      "Primary and independent of the principal debtor's liability",
      "Limited to one-half of the principal debt",
      "Only moral"
    ],
    correctIndex: 0,
    explanation: "Section 128 provides that the liability of the surety is co-extensive with that of the principal debtor, unless it is otherwise provided by the contract. The surety's liability arises immediately upon the principal debtor's default, and it is not necessary for the creditor to exhaust his remedies against the principal debtor before proceeding against the surety, unless the contract provides otherwise.",
    legalBasis: "Sections 126, 128 and 140, Indian Contract Act, 1872.",
    wrongOptionExplanations: ["", "The liability is co-extensive, not independent in that sense.", "A one-half limitation is not the rule.", "The liability is legal."],
    flashpoint: "s.128 → the surety's liability is CO-EXTENSIVE with that of the principal debtor unless the contract provides otherwise.",
    source: "STATUTE"
  });

  /* ============================================= g8 — Specific Relief Act */
  Q({
    id: "CTR-035", subject: S, topic: "g8", subtopic: "Substituted performance",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Specific Relief Act, 1963, the remedy of 'substituted performance' was introduced by the Specific Relief (Amendment) Act, 2018 in place of:",
    options: [
      "Section 10", "Section 14", "Section 16", "Section 20"],
    correctIndex: 2,
    explanation: "The Specific Relief (Amendment) Act, 2018 substituted the earlier s.20 (which had given the court a discretion to decree specific performance) and introduced the provisions relating to substituted performance. Section 20 of the Act as amended provides that where a contract is broken and the party not in breach has suffered, he may, without prejudice to his right to claim compensation, engage an alternative agency to perform the contract, and the party in breach shall be liable for the costs incurred. The amendment also made specific performance the rule rather than a discretionary remedy.",
    legalBasis: "Sections 10, 14, 16 and 20, Specific Relief Act, 1963 (as amended in 2018); Specific Relief (Amendment) Act, 2018.",
    wrongOptionExplanations: ["Section 10 provides for the cases in which specific performance may be enforced.", "Section 14 specifies the contracts which cannot be specifically enforced.", "", "Section 20 now provides for substituted performance."],
    flashpoint: "SPECIFIC RELIEF (Amendment) Act 2018 → SPECIFIC PERFORMANCE is now the RULE; SUBSTITUTED PERFORMANCE is provided for in s.20 (replacing the old discretionary s.20).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CTR-036", subject: S, topic: "g8", subtopic: "Injunction for a negative covenant",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 42 of the Specific Relief Act, 1963, where a contract comprises an affirmative agreement to do a certain act, coupled with a negative agreement, express or implied, not to do a certain act, the circumstance that the court is unable to compel specific performance of the affirmative agreement:",
    options: [
      "Precludes the grant of an injunction in every case",
      "Shall not preclude it from granting an injunction to perform the negative agreement, provided the plaintiff has not failed to perform the contract so far as it is binding on him",
      "Renders the contract void",
      "Entitles the plaintiff to damages only"
    ],
    correctIndex: 1,
    explanation: "Section 42 provides that notwithstanding anything contained in s.57 (which empowers a court to grant an injunction to prevent the breach of an obligation), where a contract comprises an affirmative agreement to do a certain act, coupled with a negative agreement, express or implied, not to do a certain act, the circumstance that the court is unable to compel specific performance of the affirmative agreement shall not preclude it from granting an injunction to perform the negative agreement, provided the applicant has not failed to perform the contract so far as it is binding on him. Lumley v. Wagner is the classic illustration.",
    legalBasis: "Sections 41, 42 and 57, Specific Relief Act, 1963; Lumley v. Wagner, (1852) 1 De GM & G 604.",
    wrongOptionExplanations: [
      "The inability to compel specific performance does not preclude the injunction.",
      "",
      "The contract is not rendered void.",
      "The remedy of an injunction is available."
    ],
    flashpoint: "s.42 → an AFFIRMATIVE agreement coupled with a NEGATIVE covenant — the court may INJUNCT the breach of the negative covenant even where it cannot compel specific performance of the affirmative part (Lumley v. Wagner).",
    source: "CASE"
  });

  Q({
    id: "CTR-037", subject: S, topic: "g8", subtopic: "Contracts not specifically enforceable",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 14 of the Specific Relief Act, 1963, a contract for the non-performance of which compensation is an adequate relief is:",
    options: ["Deemed to be specifically enforceable", "Void", "Deemed not to be specifically enforceable", "Voidable"],
    correctIndex: 2,
    explanation: "Section 14, as amended in 2018, specifies the contracts which cannot be specifically enforced, including a contract for the non-performance of which compensation is an adequate relief; a contract which runs into minute or numerous details, or which is so dependent on the personal qualifications or volition of the parties, or otherwise from its nature is such that the court cannot enforce specific performance of its material terms; a contract which is in its nature determinable; and a contract the performance of which involves the performance of a continuous duty which the court cannot supervise. The 2018 Amendment changed the framing so that specific performance is now the rule and the exceptions are listed.",
    legalBasis: "Sections 10, 11, 14, 16 and 20, Specific Relief Act, 1963 (as amended in 2018).",
    wrongOptionExplanations: ["Such a contract is not specifically enforceable.", "The contract is not void.", "", "The contract is not voidable."],
    flashpoint: "s.14 → contracts NOT specifically enforceable include those for which COMPENSATION is ADEQUATE RELIEF, those dependent on PERSONAL QUALIFICATIONS and those that are DETERMINABLE in nature.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-038", subject: S, topic: "g8", subtopic: "Personal service",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Specific Relief Act, 1963, a contract of personal service:",
    options: [
      "May always be specifically enforced",
      "Cannot ordinarily be specifically enforced, since the court cannot supervise the performance of personal service, though the courts have granted relief in cases of termination in breach of a statutory or constitutional obligation",
      "Can never give rise to any remedy",
      "Is void"
    ],
    correctIndex: 1,
    explanation: "A contract of personal service cannot ordinarily be specifically enforced because the court cannot supervise the performance of personal service, and specific performance of such a contract would be contrary to public policy (s.14). Classical English authority is Lumley v. Wagner for the injunction route and Fry L.J.'s observation that contracts of personal service are not specifically enforceable. However, the Indian courts have devised the doctrine of 'moulded relief' and, in cases of termination in breach of a statutory or constitutional obligation, have ordered reinstatement or granted compensation.",
    legalBasis: "Section 14, Specific Relief Act, 1963; Executive Committee of Vaish Degree College v. Lakshmi Narain, (1976) 2 SCC 58; Life Insurance Corporation of India v. Raghavendra Seshagiri Rao Kulkarni, (1997) 8 SCC 461.",
    wrongOptionExplanations: ["Such a contract cannot ordinarily be specifically enforced.", "", "Other remedies, such as damages, remain available.", "The contract is not void."],
    flashpoint: "PERSONAL SERVICE → NOT ordinarily specifically enforceable. But MANDAMUS / declarations may lie where the termination breaches a STATUTORY or CONSTITUTIONAL obligation.",
    source: "CASE"
  });

  Q({
    id: "CTR-039", subject: S, topic: "g8", subtopic: "Declaration of status",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 34 of the Specific Relief Act, 1963, a suit for a declaration may be filed by any person:",
    options: [
      "Who is a party to a contract only",
      "Who is entitled to any legal character or to any right as to any property, and any person denying or interested to deny his title to such character or right",
      "Only by the Government",
      "Only by a registered owner of property"
    ],
    correctIndex: 1,
    explanation: "Section 34 provides that any person entitled to any legal character, or to any right as to any property, may institute a suit against any person denying, or interested to deny, his title to such character or right, and the court may in its discretion make a declaration that he is so entitled, and the plaintiff need not in such a suit ask for any further relief. Section 35 provides that a declaration made under the Act is binding on the parties and on persons claiming through them. The proviso to s.34 permits the court to refuse a declaration where the plaintiff, being able to seek further relief than a mere declaration of title, omits to do so.",
    legalBasis: "Sections 34 and 35, Specific Relief Act, 1963.",
    wrongOptionExplanations: ["A party to a contract is not the only eligible plaintiff.", "", "The Government is not the only eligible plaintiff.", "Registered ownership is not a precondition."],
    flashpoint: "s.34 → DECLARATORY suit by a person entitled to a LEGAL CHARACTER or a RIGHT TO PROPERTY, against a person DENYING or INTERESTED TO DENY the title.",
    source: "STATUTE"
  });

  /* =========================================== g9 — Transfer of Property */
  Q({
    id: "CTR-040", subject: S, topic: "g9", subtopic: "Rule against perpetuity",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 18 of the Transfer of Property Act, 1882, the rule against perpetuity does not apply to:",
    options: [
      "A transfer for the benefit of the public, or a transfer of property for the benefit of a religious or charitable institution",
      "A transfer of immovable property for a monetary consideration",
      "A lease of a building",
      "A mortgage of immovable property"
    ],
    correctIndex: 0,
    explanation: "Section 18 of the Transfer of Property Act, 1882 provides that no transfer of property can operate to create an interest which is to take effect after the lifetime of one or more persons living at the date of such transfer, and the minority of some person who shall be in existence at the expiration of that period, and to whom, if he attains full age, the interest created is to belong. The section expressly provides that the rule does not apply to a transfer for the benefit of the public, or for the benefit of a religious or charitable institution, such as a waqf, a debutter or a trust for public purposes.",
    legalBasis: "Section 18, Transfer of Property Act, 1882.",
    wrongOptionExplanations: ["", "The exception is not for transfers for consideration.", "The exception is not for leases.", "The exception is not for mortgages."],
    flashpoint: "s.18 rule against PERPETUITY → does NOT apply to a transfer for the BENEFIT OF THE PUBLIC or a RELIGIOUS or CHARITABLE institution (waqf, debutter, public trust).",
    source: "STATUTE"
  });

  Q({
    id: "CTR-041", subject: S, topic: "g9", subtopic: "Accumulation of income",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 17 of the Transfer of Property Act, 1882, where a transfer directs the accumulation of income for a period longer than the maximum permitted, the direction is:",
    options: [
      "Valid in its entirety",
      "Enforceable only against the transferor",
      "Voidable at the option of the transferee",
      "Void, and where the accumulation is directed for a longer term, the direction is void as to the excess and the income during the excess period is to be applied as if no such direction had been made"
    ],
    correctIndex: 3,
    explanation: "Section 17 of the Transfer of Property Act, 1882 permits the accumulation of income for the lifetime of the transferor, or for a period of eighteen years from the date of the transfer, whichever is longer, in the case of a transfer of immovable property, and for a period of eighteen years in the case of movable property. Where the direction for accumulation is for a longer term, the direction is void as to the excess, and the income during the excess period is to be applied as if no such direction had been made.",
    legalBasis: "Section 17 and its illustrations, Transfer of Property Act, 1882.",
    wrongOptionExplanations: [
      "The direction is void as to the excess.",
      "The direction is not enforceable against the transferor.",
      "The direction is not voidable at the option of the transferee.",
      ""
    ],
    flashpoint: "s.17 ACCUMULATION → IMMOVABLE property: the TRANSFEROR's LIFETIME or EIGHTEEN YEARS, whichever is longer. MOVABLE property: EIGHTEEN YEARS. Excess is VOID.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-042", subject: S, topic: "g9", subtopic: "Mortgage by conditional sale",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 58(b) of the Transfer of Property Act, 1882, a mortgage by conditional sale is one where the mortgagor ostensibly sells the mortgaged property:",
    options: [
      "With a simple agreement to repay",
      "With a separate document providing for reconveyance",
      "On condition that on default of payment of the mortgage money the sale shall become absolute, or on condition that on such payment being made the sale shall become void, or on condition that on such payment being made the buyer shall transfer the property to the seller, provided that the condition be embodied in the document which effects or purports to effect the sale",
      "By delivering possession only"
    ],
    correctIndex: 2,
    explanation: "Section 58(b) defines a mortgage by conditional sale: the mortgagor ostensibly sells the mortgaged property on certain conditions — that on default of payment of the mortgage money the sale shall become absolute, or that on such payment being made the sale shall become void, or that on such payment being made the buyer shall transfer the property to the seller — with the proviso that no such transaction shall be deemed to be a mortgage unless the condition is embodied in the document which effects or purports to effect the sale. Bhaskar Waman Joshi v. Narayan Rambilas Agarwal is the leading authority on the same-document test.",
    legalBasis: "Section 58(b), Transfer of Property Act, 1882; Bhaskar Waman Joshi v. Narayan Rambilas Agarwal, AIR 1960 SC 301.",
    wrongOptionExplanations: [
      "A simple agreement to repay is not the definition.",
      "A separate document of reconveyance points away from a mortgage by conditional sale and towards a sale with a separate agreement.",
      "",
      "Delivery of possession alone does not create a mortgage by conditional sale."
    ],
    flashpoint: "s.58(b) MORTGAGE BY CONDITIONAL SALE → the condition must be EMBODIED IN THE SAME DOCUMENT (the 'same document' test — Bhaskar Waman Joshi).",
    source: "CASE"
  });

  Q({
    id: "CTR-043", subject: S, topic: "g9", subtopic: "Doctrine of part performance",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 53A of the Transfer of Property Act, 1882, the doctrine of part performance protects a transferee who:",
    options: [
      "Has merely paid the consideration",
      "Has taken possession or continued in possession of the property, or any part thereof, and has performed or is willing to perform his part of the contract, where the contract is in writing and signed and the terms can be ascertained with reasonable certainty",
      "Has merely signed an oral agreement",
      "Has merely inspected the property"
    ],
    correctIndex: 1,
    explanation: "Section 53A provides that where any person contracts to transfer for consideration any immovable property by writing signed by him or on his behalf from which the terms necessary to constitute the transfer can be ascertained with reasonable certainty, and the transferee has, in part performance of the contract, taken possession of the property or any part thereof, or the transferee, being already in possession, continues in possession in part performance of the contract, and has done some act in furtherance of the contract, and the transferee has performed or is willing to perform his part of the contract, then the transferor or any person claiming under him shall be debarred from enforcing against the transferee any right in respect of the property of which the transferee has taken or continued in possession, other than a right expressly provided by the terms of the contract. The section was amended by the 2001 Amendment to require registration.",
    legalBasis: "Section 53A, Transfer of Property Act, 1882 (as amended in 2001).",
    wrongOptionExplanations: [
      "Payment of consideration alone is not enough.",
      "",
      "An oral agreement does not satisfy s.53A.",
      "Inspection of the property is not part performance."
    ],
    flashpoint: "s.53A PART PERFORMANCE → WRITTEN + SIGNED contract + TAKING/CONTINUING IN POSSESSION + WILLINGNESS TO PERFORM. The transferor is DEBARRED from enforcing his rights.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-044", subject: S, topic: "g9", subtopic: "Transfer to an unborn person",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 13 of the Transfer of Property Act, 1882, a transfer of immovable property for the benefit of an unborn person is valid provided:",
    options: [
      "The transfer is made by a registered instrument only",
      "The unborn person is a male child",
      "The interest created is preceded by a life interest in favour of a person living at the date of the transfer, and the whole of the remaining interest of the transferor in the property is transferred to the unborn person (or, in the case of a class, to all the persons of that class)",
      "No condition is required"
    ],
    correctIndex: 2,
    explanation: "Section 13 provides that where, on a transfer of property, an interest therein is created for the benefit of a person not in existence at the date of the transfer, subject to a prior interest created by the same transfer, the interest created for the benefit of such person shall not take effect unless it extends to the whole of the remaining interest of the transferor in the property. The provision requires a prior life interest in favour of a person living at the date of the transfer, and the transfer of the whole of the remaining interest to the unborn person, and where the interest is created for a class, it must extend to the whole of the remaining interest and be transferable to all the persons of the class.",
    legalBasis: "Section 13 and its illustrations, Transfer of Property Act, 1882.",
    wrongOptionExplanations: [
      "Registration is not the condition prescribed by s.13.",
      "The provision is not confined to a male child.",
      "",
      "The conditions in s.13 are mandatory."
    ],
    flashpoint: "s.13 → an UNBORN person take only if preceded by a LIFE INTEREST in a person LIVING at the date of the transfer and the transfer covers the WHOLE of the remaining interest.",
    source: "STATUTE"
  });

  /* ============================================ g10 — Easements and trusts */
  Q({
    id: "CTR-045", subject: S, topic: "g10", subtopic: "Easement — definition",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 4 of the Indian Easements Act, 1882, an easement is a right which:",
    options: [
      "Confers ownership of the servient heritage",
      "Entitles the holder to take the soil of the servient heritage",
      "The owner or occupier of certain land possesses, as such, for the beneficial enjoyment of that land, to do and continue to do something, or to prevent and continue to prevent something being done, in or upon, or in respect of, certain other land not his own",
      "Exists independently of any dominant heritage"
    ],
    correctIndex: 2,
    explanation: "Section 4 of the Indian Easements Act, 1882 defines an easement as a right which the owner or occupier of certain land possesses, as such, for the beneficial enjoyment of that land, to do and continue to do something, or to prevent and continue to prevent something being done, in or upon, or in respect of, certain other land not his own. The land for the beneficial enjoyment of which the right exists is called the dominant heritage and its owner or occupier the dominant owner; the land on which the liability is imposed is called the servient heritage and its owner or occupier the servient owner.",
    legalBasis: "Sections 4, 5 and 6, Indian Easements Act, 1882.",
    wrongOptionExplanations: [
      "An easement does not confer ownership of the servient heritage.",
      "An easement may or may not include a right to take soil or minerals, depending on its nature.",
      "",
      "An easement requires a dominant heritage."
    ],
    flashpoint: "EASEMENT (s.4) requires a DOMINANT HERITAGE and a SERVIENT HERITAGE; the right is for the BENEFICIAL ENJOYMENT of the dominant heritage.",
    source: "STATUTE"
  });

  Q({
    id: "CTR-046", subject: S, topic: "g10", subtopic: "Trust — definition",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 3 of the Indian Trusts Act, 1882, a 'trust' is:",
    options: [
      "A mortgage of immovable property",
      "A transfer of ownership of property",
      "A contract of agency",
      "An obligation annexed to the ownership of property, and arising out of a confidence reposed in and accepted by the owner, or declared and accepted by him, for the benefit of another, or of another and the owner"
    ],
    correctIndex: 3,
    explanation: "Section 3 of the Indian Trusts Act, 1882 defines a trust as an obligation annexed to the ownership of property, and arising out of a confidence reposed in and accepted by the owner, or declared and accepted by him, for the benefit of another, or of another and the owner. The person who reposes or declares the confidence is the author of the trust; the person who accepts the confidence is the trustee; the person for whose benefit the confidence is accepted is the beneficiary; and the subject matter of the trust is the trust property or the trust money.",
    legalBasis: "Sections 3, 4, 5 and 6, Indian Trusts Act, 1882.",
    wrongOptionExplanations: [
      "A mortgage is a distinct transaction.",
      "A trust is not a transfer of ownership; the trustee holds legal ownership for the benefit of the beneficiary.",
      "Agency is a distinct relationship.",
      ""
    ],
    flashpoint: "TRUST (Indian Trusts Act s.3) → an OBLIGATION annexed to OWNERSHIP arising out of a CONFIDENCE reposed and ACCEPTED for the benefit of ANOTHER.",
    source: "STATUTE"
  });

  /* =============================================== g11 — Negotiable instruments */
  Q({
    id: "CTR-047", subject: S, topic: "g11", subtopic: "Promissory note",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 4 of the Negotiable Instruments Act, 1881, a 'promissory note' is:",
    options: [
      "An instrument requiring the signature of a witness in every case",
      "An unconditional order to pay a certain sum of money",
      "A cheque drawn on a specified banker",
      "An instrument in writing (not being a banknote or a currency note) containing an unconditional undertaking, signed by the maker, to pay a certain sum of money only to, or to the order of, a certain person, or to the bearer of the instrument"
    ],
    correctIndex: 3,
    explanation: "Section 4 defines a promissory note as an instrument in writing (not being a banknote or a currency note) containing an unconditional undertaking, signed by the maker, to pay a certain sum of money only to, or to the order of, a certain person, or to the bearer of the instrument. Section 13 defines a negotiable instrument, s.5 defines a bill of exchange and s.6 defines a cheque. There is no requirement of a witness's signature for a promissory note or a bill of exchange under the Act.",
    legalBasis: "Sections 4, 5, 6 and 13, Negotiable Instruments Act, 1881.",
    wrongOptionExplanations: [
      "A witness's signature is not required for a promissory note under the Act.",
      "An unconditional order to pay is a bill of exchange (s.5).",
      "A cheque is a bill of exchange drawn on a specified banker (s.6).",
      ""
    ],
    flashpoint: "PROMISSORY NOTE (s.4) → an UNCONDITIONAL UNDERTAKING to pay, signed by the MAKER. BILL OF EXCHANGE (s.5) → an UNCONDITIONAL ORDER to pay. NO WITNESS required.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CTR-048", subject: S, topic: "g11", subtopic: "Presumptions under Section 118",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 118 of the Negotiable Instruments Act, 1881, until the contrary is proved, which of the following presumptions applies?",
    options: [
      "That the instrument was drawn and accepted without consideration",
      "That the instrument was obtained by fraud",
      "That every negotiable instrument was made or drawn for consideration, and that every such instrument, when it has been accepted, indorsed, negotiated or transferred, was accepted, indorsed, negotiated or transferred for consideration",
      "That the holder is not a holder in due course"
    ],
    correctIndex: 2,
    explanation: "Section 118 provides a set of presumptions, including that of consideration: until the contrary is proved, every negotiable instrument shall be presumed to have been made or drawn for consideration, and that every such instrument, when it has been accepted, indorsed, negotiated or transferred, was accepted, indorsed, negotiated or transferred for consideration. Section 139 provides the presumption in favour of the holder as to the existence of consideration, and s.138 deals with the dishonour of a cheque for insufficiency of funds.",
    legalBasis: "Sections 118, 138, 139 and 146, Negotiable Instruments Act, 1881.",
    wrongOptionExplanations: [
      "The presumption is the reverse — that the instrument was drawn for consideration.",
      "Fraud is not presumed.",
      "",
      "The holder is presumed to be a holder in due course under s.120 as regards the maker."
    ],
    flashpoint: "NI Act s.118 → PRESUMPTION OF CONSIDERATION. s.139 → presumption in favour of the HOLDER. s.138 → dishonour of a cheque for insufficiency of funds.",
    source: "STATUTE"
  });
})();
