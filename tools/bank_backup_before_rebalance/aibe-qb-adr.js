/* ============================================================================
 * AIBE XXI — Question Bank: Alternative Dispute Resolution including the
 * Arbitration and Conciliation Act, 1996. Weightage: 4 / 100. 24 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "adr";

  Q({
    id: "ADR-001", subject: S, topic: "a4", subtopic: "s.5 judicial intervention",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Judicial intervention in matters governed by Part I of the Arbitration and Conciliation Act, 1996 is limited by Section 5. In which of the following situations may a court intervene?",
    options: [
      "When a procedural irregularity is alleged without any specific provision in the Act",
      "When both parties request supervision of the proceedings",
      "When the court considers the award unjust on the facts",
      "When the Act expressly permits such intervention"
    ],
    correctIndex: 3,
    explanation: "Section 5 provides that notwithstanding anything contained in any other law for the time being in force, in matters governed by Part I, no judicial authority shall intervene except where so provided in Part I. The only permissible intervention is that expressly permitted by the Act.",
    legalBasis: "Section 5, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["An unspecified procedural irregularity does not permit intervention.", "The parties' request cannot create jurisdiction.", "An award is not set aside because the court disagrees with it on the facts.", ""],
    flashpoint: "s.5 → a court may intervene ONLY where the Act EXPRESSLY permits it.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADR-002", subject: S, topic: "a2", subtopic: "s.16 kompetenz-kompetenz",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Statement",
    question: "A dispute arises regarding the jurisdiction of the arbitral tribunal.\nStatement I: The arbitral tribunal may rule on its own jurisdiction.\nStatement II: A plea that the tribunal lacks jurisdiction shall be raised not later than the submission of the statement of defence, unless the arbitral tribunal permits a later plea.\nWhich is correct?",
    options: ["Both Statements I and II are true", "Neither Statement I nor Statement II is true", "Only Statement I is true", "Only Statement II is true"],
    correctIndex: 0,
    explanation: "Section 16(1) embodies the principle of kompetenz-kompetenz — the arbitral tribunal may rule on its own jurisdiction, including any objection with respect to the existence or validity of the arbitration agreement. Section 16(2) requires a plea that the tribunal does not have jurisdiction to be raised not later than the submission of the statement of defence, though the tribunal may permit a later plea if it considers the delay justified.",
    legalBasis: "Section 16(1) and (2), Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["", "Both statements are accurate.", "Statement II is also true.", "Statement I is also true."],
    flashpoint: "s.16 → KOMPETENZ-KOMPETENZ; the jurisdictional plea must be raised by the STATEMENT OF DEFENCE stage.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADR-003", subject: S, topic: "a3", subtopic: "s.20 place of arbitration",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 20 of the Arbitration and Conciliation Act, 1996, where the parties have not agreed on the place of arbitration, the arbitral tribunal shall determine it having regard to:",
    options: [
      "The place where the contract was executed",
      "The circumstances of the case, including the convenience of the parties",
      "The jurisdiction of the civil court alone",
      "The location of the subject matter of the dispute only"
    ],
    correctIndex: 1,
    explanation: "Section 20(2) provides that where the parties have not agreed on the place of arbitration, the place shall be determined by the arbitral tribunal having regard to the circumstances of the case, including the convenience of the parties.",
    legalBasis: "Section 20(2), Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["The place of execution of the contract is a relevant fact but not the statutory test.", "", "The jurisdiction of the civil court is not the test.", "The location of the subject matter is one circumstance, not the exclusive test."],
    flashpoint: "s.20(2) → the tribunal determines the place having regard to the CIRCUMSTANCES OF THE CASE, including the CONVENIENCE OF THE PARTIES.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADR-004", subject: S, topic: "a3", subtopic: "s.25 default of respondent",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "According to Section 25(b) of the Arbitration and Conciliation Act, 1996, where the respondent fails to submit his statement of defence without showing sufficient cause, the arbitral tribunal shall:",
    options: [
      "Continue the proceedings without treating such failure in itself as an admission of the claimant's allegations",
      "Proceed to decide the dispute treating the claimant's case as uncontroverted",
      "Terminate the proceedings",
      "Treat the claimant's allegations as admitted"
    ],
    correctIndex: 0,
    explanation: "Section 25(b) provides that where the respondent fails to communicate his statement of defence without showing sufficient cause, the arbitral tribunal shall continue the proceedings without treating that failure in itself as an admission of the claimant's allegations. Section 25(a) requires termination where the claimant fails to communicate his statement of claim.",
    legalBasis: "Section 25(a) and (b), Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["", "The failure is not treated as an admission, so the claimant's case is not deemed uncontroverted.", "Termination is the consequence under s.25(a) for the claimant's default, not here.", "The section expressly says the failure is not an admission."],
    flashpoint: "s.25(a) claimant defaults → TERMINATE. s.25(b) respondent defaults → CONTINUE, and the failure is NOT an admission.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "ADR-005", subject: S, topic: "a1", subtopic: "s.8 power to refer",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 8 of the Arbitration and Conciliation Act, 1996, a judicial authority before which an action is brought in a matter which is the subject of an arbitration agreement shall:",
    options: [
      "Continue with the suit and ignore the arbitration agreement",
      "If a party to the arbitration agreement or any person claiming through him so applies not later than the date of submitting his first statement on the substance of the dispute, refer the parties to arbitration",
      "Refer the parties to arbitration only with the consent of the plaintiff",
      "Transfer the suit to the High Court"
    ],
    correctIndex: 1,
    explanation: "Section 8 requires the judicial authority to refer the parties to arbitration on the application of a party to the arbitration agreement, made not later than the date of submitting the first statement on the substance of the dispute. The application must be accompanied by the original or a certified copy of the arbitration agreement, and the application must be disposed of before the framing of issues.",
    legalBasis: "Section 8, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["The section mandates a reference on a timely application.", "", "The plaintiff's consent is not the test.", "No transfer to the High Court is contemplated."],
    flashpoint: "s.8 → reference to arbitration on application made NOT LATER THAN the FIRST STATEMENT on the substance of the dispute.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-006", subject: S, topic: "a1", subtopic: "s.11 appointment",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about the appointment of arbitrators under Section 11 of the Arbitration and Conciliation Act, 1996 is correct, after the 2015 and 2019 amendments and the decision in In Re: Interplay (2024)?",
    options: [
      "The court's power under s.11 is to be exercised by the Supreme Court in all cases",
      "The Supreme Court or, as the case may be, the High Court, or any person or institution designated by such court, may appoint arbitrators on an application of a party, and the 2019 Amendment substituted 'the Supreme Court or, as the case may be, the High Court' for 'the Chief Justice'",
      "The appointment of arbitrators is entirely a matter for the parties and the court has no role",
      "The power under s.11 can be exercised only after the arbitral tribunal has given its award"
    ],
    correctIndex: 1,
    explanation: "Section 11 permits a party to apply to the Supreme Court (in international commercial arbitration) or to the High Court (in other cases), or to any person or institution designated by such court, for the appointment of arbitrators where the agreed procedure fails. The 2019 Amendment de-linked the exercise of this function from the designation of the Chief Justice. The 2024 decision in In Re: Interplay holds that an unstamped or insufficiently stamped agreement is not void but inadmissible, and the defect is curable.",
    legalBasis: "Section 11, Arbitration and Conciliation Act, 1996 (as amended in 2015 and 2019); In Re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899, (2024) 6 SCC 1.",
    wrongOptionExplanations: ["In non-international commercial arbitration, the power is exercised by the High Court.", "", "The court has a substantial role in the appointment process.", "The appointment must be made before the arbitration can proceed."],
    flashpoint: "s.11 → Supreme Court for INTERNATIONAL commercial arbitration; HIGH COURT otherwise. 2019 Amendment replaced 'Chief Justice'.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-007", subject: S, topic: "a3", subtopic: "s.18 equal treatment",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 18 of the Arbitration and Conciliation Act, 1996 provides that:",
    options: [
      "The parties shall be treated with equality and each party shall be given a full opportunity to present his case",
      "The arbitrator shall be impartial but need not be independent",
      "The arbitration shall always be held in camera",
      "The arbitral tribunal may refuse to hear one party"
    ],
    correctIndex: 0,
    explanation: "Section 18 embodies the twin principles of natural justice in arbitration — equal treatment of the parties and a full opportunity to each party to present his case. These principles are part of the fundamental policy of Indian law, and their violation is a ground under s.34(2)(a)(iii) where the party has been unable to present his case.",
    legalBasis: "Section 18, and Section 34(2)(a)(iii), Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["", "Independence and impartiality are distinct requirements under s.12.", "There is no statutory requirement that arbitration be held in camera.", "Refusing to hear a party would violate s.18 and may vitiate the award."],
    flashpoint: "s.18 → EQUAL TREATMENT + FULL OPPORTUNITY TO PRESENT THE CASE.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-008", subject: S, topic: "a3", subtopic: "s.23 statements",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 23 of the Arbitration and Conciliation Act, 1996, within the period of time agreed by the parties or determined by the arbitral tribunal, the claimant shall submit his statement of claim and the respondent shall submit his statement of defence. A party may amend or supplement his claim or defence:",
    options: [
      "At any time, as a matter of right",
      "Unless the arbitral tribunal considers it inappropriate to allow the amendment having regard to the delay in making it",
      "Only with the consent of the other party",
      "Never, once the statement of claim is filed"
    ],
    correctIndex: 1,
    explanation: "Section 23(3) permits a party to amend or supplement his claim or defence during the course of the arbitral proceedings, unless the arbitral tribunal considers it inappropriate to allow the amendment having regard to the delay in making it. Section 23(2A) permits the respondent to submit a counterclaim or plead a set-off.",
    legalBasis: "Section 23, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["The right is not absolute.", "", "The consent of the other party is not required.", "The section permits amendment."],
    flashpoint: "s.23(3) → amendment permitted unless the tribunal considers it INAPPROPRIATE having regard to DELAY.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-009", subject: S, topic: "a4", subtopic: "s.34 setting aside",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is a ground on which an arbitral award may be set aside under Section 34 of the Arbitration and Conciliation Act, 1996?",
    options: [
      "The court is of the opinion that the award is unjust on the facts",
      "The award deals with a dispute not contemplated by or not falling within the terms of the submission to arbitration",
      "The award is not to the liking of one of the parties",
      "The award decides the dispute in favour of the respondent"
    ],
    correctIndex: 1,
    explanation: "Section 34(2)(a)(iv) permits the setting aside of an award that deals with a dispute not contemplated by or not falling within the terms of the submission to arbitration, or that contains decisions on matters beyond the scope of the submission. The other grounds include incapacity, an invalid arbitration agreement, want of proper notice or inability to present the case, and composition of the tribunal or procedure not in accordance with the agreement. Section 34(2)(b) covers non-arbitrability and conflict with the public policy of India.",
    legalBasis: "Section 34, Arbitration and Conciliation Act, 1996; Ssangyong Engineering & Construction Co. Ltd. v. NHAI, (2019) 15 SCC 131.",
    wrongOptionExplanations: ["The court does not sit in appeal over the award's correctness on the facts.", "", "Dissatisfaction is not a ground.", "The identity of the successful party is irrelevant."],
    flashpoint: "s.34 → LIMITED grounds; the court does NOT re-appreciate the merits (Ssangyong, 2019).",
    source: "STATUTE"
  });

  Q({
    id: "ADR-010", subject: S, topic: "a4", subtopic: "s.34(6) no appeal",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Arbitration and Conciliation Act, 1996, an appeal from an order refusing to set aside an arbitral award under Section 34 is:",
    options: [
      "Maintainable under Section 37",
      "Not maintainable, since Section 34(6) provides that no appeal, including a letters patent appeal, shall lie from an order passed under Section 34",
      "Maintainable only with the leave of the Supreme Court",
      "Maintainable under Article 226 only"
    ],
    correctIndex: 1,
    explanation: "Section 34(6) as it stood originally provided that an application under s.34 shall be disposed of expeditiously and, after the 2015 amendment, that no appeal including a letters patent appeal shall lie from an order passed in appeal under the section. Section 37 provides a limited right of appeal only from the specified orders.",
    legalBasis: "Sections 34(6) and 37, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["Section 37 lists the appealable orders, which do not include an order under s.34.", "", "No leave of the Supreme Court is contemplated.", "Article 226 is a constitutional remedy distinct from statutory appeal."],
    flashpoint: "s.34(6) → NO APPEAL (including a letters patent appeal) from an order under s.34.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-011", subject: S, topic: "a4", subtopic: "s.9 interim measures",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 9 of the Arbitration and Conciliation Act, 1996 permits a party to apply to a court for interim measures:",
    options: [
      "Only after the arbitral award is made",
      "Before or during arbitral proceedings or at any time after the making of the arbitral award but before it is enforced, for the preservation, interim custody or sale of goods, securing the amount in dispute, detention or preservation of property, interim injunction or appointment of a receiver",
      "Only after the tribunal is constituted and with its permission",
      "Only in international commercial arbitration"
    ],
    correctIndex: 1,
    explanation: "Section 9 permits an application for interim measures before or during arbitral proceedings or at any time after the making of the award but before it is enforced, and lists the categories of interim measures that a court may grant.",
    legalBasis: "Section 9, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["Interim relief may be sought before the award and after it but before enforcement.", "", "The tribunal's permission is not required.", "Section 9 applies generally, not only to international commercial arbitration."],
    flashpoint: "s.9 → interim measures BEFORE or DURING arbitration, or AFTER the award BUT BEFORE ENFORCEMENT.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-012", subject: S, topic: "a5", subtopic: "s.29A time limit",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 29A of the Arbitration and Conciliation Act, 1996 (inserted by the 2015 Amendment), the award shall be made within:",
    options: [
      "Six months from the date the arbitral tribunal enters upon the reference, extendable only by the Supreme Court",
      "Twelve months from the date the arbitral tribunal enters upon the reference, which may be extended by a further six months by the consent of the parties, and thereafter only by the court",
      "Two years from the date of commencement of the arbitration",
      "There is no time limit for making the award"
    ],
    correctIndex: 1,
    explanation: "Section 29A requires the award to be made within twelve months from the date the arbitral tribunal enters upon the reference. The period may be extended by a further six months by the consent of the parties, and thereafter only by the court on an application made before or after the expiry of the period.",
    legalBasis: "Section 29A, Arbitration and Conciliation Act, 1996 (inserted by the 2015 Amendment).",
    wrongOptionExplanations: ["The initial period is twelve months, not six, and the extensions are not solely by the Supreme Court.", "", "Two years is not the prescribed period.", "A time limit exists."],
    flashpoint: "s.29A → award within 12 MONTHS of entering upon the reference, + 6 MONTHS by consent, thereafter only by COURT.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-013", subject: S, topic: "a5", subtopic: "s.31 form of the award",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about the form and contents of an arbitral award under the Arbitration and Conciliation Act, 1996 is correct?",
    options: [
      "The award must always be a reasoned award, and an unreasoned award can never be sustained even if the parties have agreed otherwise or the arbitration is a summary proceeding",
      "Section 31(3) requires the award to state reasons, unless the parties have agreed that no reasons are to be given, or the award is an award on agreed terms under s.30",
      "The award need not be in writing",
      "The award must be signed by all the arbitrators in every case"
    ],
    correctIndex: 1,
    explanation: "Section 31(3) requires the arbitral award to state the reasons upon which it is based, unless the parties have agreed that no reasons are to be given or the award is an award on agreed terms under s.30. Section 31(1) requires the award to be in writing and signed by the members of the arbitral tribunal.",
    legalBasis: "Sections 29A, 30 and 31, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["The requirement may be excluded by agreement of the parties or in an award on agreed terms.", "", "The award must be in writing.", "Where there is more than one arbitrator, the signatures of a majority of the members suffice."],
    flashpoint: "s.31(3) → reasons required UNLESS the parties agree otherwise or the award is on AGREED TERMS (s.30).",
    source: "STATUTE"
  });

  Q({
    id: "ADR-014", subject: S, topic: "a5", subtopic: "s.36 enforcement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 36 of the Arbitration and Conciliation Act, 1996, as amended in 2015 and 2019, where the time for making an application to set aside the arbitral award under Section 34 has expired, the award shall:",
    options: [
      "Be enforced in accordance with the provisions of the Code of Civil Procedure, 1908 in the same manner as if it were a decree of the court, and the mere filing of an application under Section 34 does not render the award unenforceable unless the court grants a stay",
      "Not be enforced until the disposal of any application under s.34",
      "Be enforceable only with the consent of the parties",
      "Be enforced only by a separate suit"
    ],
    correctIndex: 0,
    explanation: "Section 36 provides that the award shall be enforced in accordance with the CPC in the same manner as if it were a decree of the court. Following the 2015 Amendment, the mere filing of an application under s.34 does not render the award unenforceable unless the court grants a stay of the operation of the award on a separate application.",
    legalBasis: "Section 36, Arbitration and Conciliation Act, 1996 (as amended in 2015); BCCI v. Kochi Cricket Pvt. Ltd., (2018) 6 SCC 287.",
    wrongOptionExplanations: ["", "The automatic stay was removed by the 2015 Amendment (BCCI v. Kochi Cricket).", "The consent of the parties is not required.", "Enforcement is summary, not by a separate suit."],
    flashpoint: "s.36 → the award is enforceable AS A DECREE; the filing of a s.34 application does NOT automatically stay it.",
    source: "CASE"
  });

  Q({
    id: "ADR-015", subject: S, topic: "a4", subtopic: "s.37 appealable orders",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 37 of the Arbitration and Conciliation Act, 1996, an appeal lies from:",
    options: [
      "Every order passed by the arbitral tribunal",
      "Certain orders of the court, including an order granting or refusing to grant any measure under Section 9 and an order setting aside or refusing to set aside an arbitral award under Section 34, but no second appeal lies",
      "Only an order under Section 11",
      "An award of the arbitral tribunal directly"
    ],
    correctIndex: 1,
    explanation: "Section 37(1) provides for an appeal from certain orders of the court — refusing to refer the parties to arbitration under s.8, granting or refusing to grant any measure under s.9, and setting aside or refusing to set aside an arbitral award under s.34. Section 37(2) provides for an appeal from an order of the arbitral tribunal accepting a plea under s.16(2) or granting or refusing to grant an interim measure under s.17. Section 37(3) provides that no second appeal shall lie, though nothing affects the right to appeal to the Supreme Court.",
    legalBasis: "Section 37, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["Appeals from the tribunal's orders are confined to those specified in s.37(2).", "", "An order under s.11 is not an appealable order under s.37.", "An award is challenged under s.34, not by appeal."],
    flashpoint: "s.37 → appeal from specified court orders and specified tribunal orders; NO SECOND APPEAL.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-016", subject: S, topic: "a5", subtopic: "s.33 correction",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 33 of the Arbitration and Conciliation Act, 1996, a party may request the arbitral tribunal to correct computational errors, clerical or typographical errors or other errors of a similar nature in the award within:",
    options: ["Seven days of receipt of the award", "Fifteen days of receipt of the award", "Thirty days of receipt of the award", "Ninety days of receipt of the award"],
    correctIndex: 2,
    explanation: "Section 33(1) permits a party, within thirty days from the receipt of the arbitral award, to request the tribunal to correct computational errors, any clerical or typographical errors or other errors of a similar nature, and, if agreed by the parties, to give an interpretation of a specific point or part of the award.",
    legalBasis: "Section 33(1), Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["Seven days is not the period.", "Fifteen days is not the period.", "", "Ninety days is not the period."],
    flashpoint: "s.33 → correction/interpretation application within 30 DAYS of receipt of the award.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-017", subject: S, topic: "a6", subtopic: "Lok Adalat award",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following statements about an award of a Lok Adalat under the Legal Services Authorities Act, 1987 is correct?",
    options: [
      "The award is a recommendatory opinion and can be appealed",
      "The award shall be deemed to be a decree of a civil court and shall be final and binding on the parties, with no appeal lying against it",
      "The award is enforceable only after ratification by the High Court",
      "The award has no legal force"
    ],
    correctIndex: 1,
    explanation: "Section 21 of the Legal Services Authorities Act, 1987 provides that every award of a Lok Adalat shall be deemed to be a decree of a civil court and shall be final and binding on all the parties to the dispute, and that no appeal shall lie against it. Every award made by a Lok Adalat is final and binding.",
    legalBasis: "Sections 19-22, Legal Services Authorities Act, 1987.",
    wrongOptionExplanations: ["The award is final, not recommendatory, and no appeal lies.", "", "Ratification by the High Court is not required.", "The award has the force of a decree."],
    flashpoint: "Lok Adalat award → deemed a DECREE of a civil court; FINAL and NOT APPEALABLE.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-018", subject: S, topic: "a6", subtopic: "s.89 CPC and ADR modes",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Guidelines on the reference of disputes to the ADR modes under Section 89 CPC, including the categories of cases unsuitable for ADR, were laid down in:",
    options: [
      "Salem Advocate Bar Association v. Union of India, (2005) 6 SCC 344",
      "Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. (P) Ltd., (2010) 8 SCC 24",
      "Ssangyong Engineering & Construction Co. Ltd. v. NHAI, (2019) 15 SCC 131",
      "Booz Allen & Hamilton Inc. v. SBI Home Finance Ltd., (2011) 5 SCC 532"
    ],
    correctIndex: 1,
    explanation: "Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. (P) Ltd. laid down comprehensive guidelines on the scope of s.89 CPC, the four ADR processes, and the categories of cases that are not suitable for ADR (such as representative suits where the parties are not all before the court, disputes involving serious allegations of fraud or criminality, and cases involving rights in rem).",
    legalBasis: "Section 89, Code of Civil Procedure, 1908; Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. (P) Ltd., (2010) 8 SCC 24.",
    wrongOptionExplanations: ["Salem Advocate Bar Association upheld the 1999/2002 CPC amendments, including s.89, but the guidelines on reference are from Afcons.", "", "Ssangyong concerns the scope of s.34 after the 2015 Amendment.", "Booz Allen concerns arbitrability of different categories of disputes."],
    flashpoint: "s.89 CPC referral guidelines → AFCONS INFRASTRUCTURE (2010) 8 SCC 24.",
    source: "CASE"
  });

  Q({
    id: "ADR-019", subject: S, topic: "a6", subtopic: "Arbitrability",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In Booz Allen & Hamilton Inc. v. SBI Home Finance Ltd., the Supreme Court explained that:",
    options: [
      "All disputes are arbitrable",
      "Disputes relating to rights in personam are generally arbitrable, while disputes relating to rights in rem, or involving a public policy element, which are required to be adjudicated by courts or tribunals, are generally not arbitrable",
      "Only commercial disputes are arbitrable",
      "Arbitration is not recognised in India"
    ],
    correctIndex: 1,
    explanation: "Booz Allen & Hamilton Inc. v. SBI Home Finance Ltd. explained that the right to decide a dispute is generally vested in courts and certain categories of disputes are reserved for adjudication by courts or specified tribunals. Disputes relating to rights in personam — in which a specific right is claimed against a specific person — are arbitrable. Disputes relating to rights in rem, or those requiring adjudication by courts for the protection of a third party's rights, are generally not arbitrable.",
    legalBasis: "Section 7 and Section 8, Arbitration and Conciliation Act, 1996; Booz Allen & Hamilton Inc. v. SBI Home Finance Ltd., (2011) 5 SCC 532.",
    wrongOptionExplanations: ["Not all disputes are arbitrable.", "", "Arbitrability is not confined to commercial disputes, though it is most common there.", "Arbitration is fully recognised in India."],
    flashpoint: "ARBITRABILITY → rights IN PERSONAM are arbitrable; rights IN REM are generally not (Booz Allen, 2011).",
    source: "CASE"
  });

  Q({
    id: "ADR-020", subject: S, topic: "a2", subtopic: "Separability",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A contract contains an arbitration clause. The respondent contends that the entire contract, including the arbitration clause, is void because the contract was induced by fraud. Under Section 16 of the Arbitration and Conciliation Act, 1996, what is the correct position?",
    options: [
      "The arbitration clause falls with the contract, so the dispute must go to a civil court",
      "An arbitration clause which forms part of a contract shall be treated as an agreement independent of the other terms of the contract, and a decision that the contract is null and void shall not entail ipso jure the invalidity of the arbitration clause",
      "The arbitral tribunal cannot rule on the validity of the arbitration clause",
      "Only the High Court may decide the validity of the arbitration clause"
    ],
    correctIndex: 1,
    explanation: "Section 16(1)(a) and (b) embody the doctrine of separability: an arbitration clause which forms part of a contract is treated as an agreement independent of the other terms of the contract, and a decision by the arbitral tribunal that the contract is null and void does not entail ipso jure the invalidity of the arbitration clause.",
    legalBasis: "Section 16(1)(a) and (b), Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["The separability doctrine preserves the arbitration clause.", "", "The tribunal may rule on the validity of the arbitration clause under s.16.", "The tribunal, not only the High Court, rules on jurisdiction in the first instance."],
    flashpoint: "SEPARABILITY (s.16(1)(a)-(b)) → the arbitration clause SURVIVES even if the main contract is held VOID.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-021", subject: S, topic: "a5", subtopic: "Award on agreed terms",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 30 of the Arbitration and Conciliation Act, 1996, an arbitral tribunal may:",
    options: [
      "Encourage settlement and, with the agreement of the parties, use mediation, conciliation or other procedures to encourage settlement; if the parties settle the dispute, the tribunal shall terminate the proceedings and, if requested by the parties and not objected to by the tribunal, record the settlement in the form of an arbitral award on agreed terms",
      "Compel the parties to settle the dispute",
      "Refer the dispute to a civil court",
      "Appoint an amicus curiae"
    ],
    correctIndex: 0,
    explanation: "Section 30 encourages the settlement of disputes. With the agreement of the parties the tribunal may use mediation, conciliation or other procedures. Where the parties settle, the tribunal shall terminate the proceedings and, if requested by the parties and not objected to by the tribunal, record the settlement in the form of an arbitral award on agreed terms, which has the same status and effect as any other award on the merits of the case.",
    legalBasis: "Section 30, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["", "The tribunal cannot compel settlement.", "The tribunal does not refer the dispute to a civil court under s.30.", "The appointment of an amicus curiae is not contemplated by s.30."],
    flashpoint: "s.30 → AWARD ON AGREED TERMS has the same status and effect as an award on the MERITS.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-022", subject: S, topic: "a6", subtopic: "Conciliation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following statements about conciliation under Part III of the Arbitration and Conciliation Act, 1996 is correct?",
    options: [
      "The conciliator has the power to make a binding award",
      "The conciliator assists the parties in an independent and impartial manner in their attempt to reach an amicable settlement; the conciliator may make proposals for a settlement, but the settlement agreement signed by the parties is what binds them",
      "Conciliation is available only for disputes relating to immovable property",
      "The conciliation proceedings are public"
    ],
    correctIndex: 1,
    explanation: "Part III (ss.61-81) governs conciliation. The conciliator assists the parties in an independent and impartial manner, may make proposals for a settlement, and is not bound by the Code of Civil Procedure or the law of evidence. Where the parties reach agreement, they draw up and sign a settlement agreement, which is binding on them and enforceable in the same manner as an arbitral award on agreed terms.",
    legalBasis: "Sections 61-81, including ss.67, 73 and 74, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["A conciliator does not make an enforceable adjudicatory award; the settlement agreement binds.", "", "Conciliation is not confined to immovable property disputes.", "Conciliation proceedings are confidential."],
    flashpoint: "CONCILIATION (Part III, ss.61-81) → the conciliator ASSISTS and may PROPOSE; the SETTLEMENT AGREEMENT binds and is enforceable like an award on agreed terms.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-023", subject: S, topic: "a1", subtopic: "s.7 arbitration agreement",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 7 of the Arbitration and Conciliation Act, 1996, an arbitration agreement means:",
    options: [
      "Only an agreement signed by both parties in writing",
      "An agreement by the parties to submit to arbitration all or certain disputes which have arisen or which may arise between them in respect of a defined legal relationship, whether contractual or not, and it may be in the form of an arbitration clause in a contract or in the form of a separate agreement, and must be in writing",
      "An oral agreement made before a notary",
      "An agreement registered under the Registration Act, 1908"
    ],
    correctIndex: 1,
    explanation: "Section 7 defines an arbitration agreement and requires it to be in writing. Section 7(4) explains when an agreement is in writing: a document signed by the parties; an exchange of letters, telex, telegrams or other means of telecommunication including communication through electronic means providing a record of the agreement; or an exchange of statements of claim and defence in which the existence of the agreement is alleged by one party and not denied by the other.",
    legalBasis: "Section 7, Arbitration and Conciliation Act, 1996.",
    wrongOptionExplanations: ["Section 7(4) recognises forms other than a signed document.", "", "An oral agreement is not sufficient.", "Registration is not a requirement."],
    flashpoint: "s.7 → arbitration agreement MUST BE IN WRITING; may be an arbitration clause or a separate agreement; s.7(4) lists what counts as writing.",
    source: "STATUTE"
  });

  Q({
    id: "ADR-024", subject: S, topic: "a4", subtopic: "Public policy — patent illegality",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The scope of 'public policy of India' as a ground for setting aside an arbitral award under Section 34 was widened in ONGC Ltd. v. Saw Pipes Ltd. and subsequently narrowed by the 2015 Amendment and Ssangyong Engineering. Which of the following correctly states the position after the 2015 Amendment?",
    options: [
      "An award can be set aside merely because the court takes a different view of the evidence",
      "An award may be set aside on the ground of patent illegality appearing on the face of the award, but an award shall not be set aside merely on the ground of erroneous application of law or by re-appreciation of evidence",
      "The public policy ground has been abolished",
      "The public policy ground now covers any error of law"
    ],
    correctIndex: 1,
    explanation: "The 2015 Amendment introduced the ground of 'patent illegality appearing on the face of the award' for domestic awards, while expressly providing that an award shall not be set aside merely on the ground of an erroneous application of the law or by reappreciation of evidence. Ssangyong Engineering confirmed that 'patent illegality' does not permit a review on the merits of the kind an appellate court would undertake.",
    legalBasis: "Section 34(2A), Arbitration and Conciliation Act, 1996 (inserted by the 2015 Amendment); ONGC Ltd. v. Saw Pipes Ltd., (2003) 5 SCC 705; Ssangyong Engineering & Construction Co. Ltd. v. NHAI, (2019) 15 SCC 131.",
    wrongOptionExplanations: ["A difference of view on the evidence is not a ground.", "", "The ground survives, in a narrowed form.", "Not every error of law amounts to patent illegality."],
    flashpoint: "s.34(2A) → PATENT ILLEGALITY on the face of the award; NO re-appreciation of evidence; no interference for a mere erroneous application of law.",
    source: "CASE"
  });
})();
