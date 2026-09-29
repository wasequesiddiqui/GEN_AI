/* ============================================================================
 * AIBE XXI — Question Bank: Code of Civil Procedure, 1908
 * Weightage: 10 / 100. 60 questions.
 * CPC questions are overwhelmingly about ORDERS AND RULES, not sections.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "cpc";

  /* ------------------------------------------------- jurisdiction and suits */
  Q({
    id: "CPC-001", subject: S, topic: "v1", subtopic: "s.9 jurisdiction",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 9 of the Code of Civil Procedure, 1908 provides that the civil courts shall have jurisdiction to try all suits of a civil nature except:",
    options: [
      "Suits in which the value of the subject matter exceeds the pecuniary jurisdiction of the court",
      "Suits of which their cognizance is either expressly or impliedly barred",
      "Suits in which the Government is a party",
      "Suits relating to immovable property"
    ],
    correctIndex: 1,
    explanation: "Section 9 confers jurisdiction on civil courts over all suits of a civil nature excepting suits of which their cognizance is expressly or impliedly barred. Jurisdiction is the foundation of the court's power, and an objection to jurisdiction may be raised at any stage.",
    legalBasis: "Section 9, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Pecuniary limits define which court within the hierarchy has jurisdiction, but do not negate jurisdiction under s.9 generally.", "", "Suits against the Government are maintainable subject to notice under s.80.", "Suits relating to immovable property are within the jurisdiction of the civil courts subject to s.16."],
    flashpoint: "s.9 → all suits of a CIVIL NATURE, except those expressly or impliedly BARRED.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-002", subject: S, topic: "v1", subtopic: "s.20 place of suing",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 20 of the Code of Civil Procedure, 1908, a suit (other than those specified in ss.16-19) may be instituted in the court within whose local limits:",
    options: [
      "The plaintiff resides",
      "The defendant, or any of the defendants, actually and voluntarily resides, or carries on business, or personally works for gain, or the cause of action arises wholly or in part",
      "The plaintiff's advocate practises",
      "The suit property is situate in every case"
    ],
    correctIndex: 1,
    explanation: "Section 20 permits institution where the defendant, or any of the defendants, actually and voluntarily resides, or carries on business, or personally works for gain, or where the cause of action arises wholly or in part.",
    legalBasis: "Sections 16-20, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The plaintiff's residence is not the ordinary test under s.20.", "", "The place of practice of the plaintiff's advocate is irrelevant.", "That describes s.16, which applies to suits for the recovery of immovable property."],
    flashpoint: "s.20 → defendant's residence/business OR the place where the cause of action arises.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-003", subject: S, topic: "v1", subtopic: "s.24 transfer",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A suit is pending in a civil court in District A. An application is made seeking transfer of the case to a court in District B, within the same State. By whom may such a transfer be ordered?",
    options: [
      "Only by agreement between the parties",
      "Only by the court in which the suit is pending",
      "By the High Court or the District Court",
      "Only after the conclusion of the trial"
    ],
    correctIndex: 2,
    explanation: "Section 24 confers on the High Court and the District Court the general power to transfer a suit, appeal or proceeding from one subordinate court to another. A transfer from one district to another district within the State is therefore ordered by the High Court (or the District Court in an appropriate case within its own jurisdiction), not by the parties or by the court in which the suit happens to be pending.",
    legalBasis: "Sections 22, 23 and 24, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The parties' agreement is not the source of the power.", "The court in which the suit is pending cannot transfer it to another district.", "", "A transfer may be ordered at any stage; the conclusion of the trial is not a precondition."],
    flashpoint: "s.24 → transfer by the HIGH COURT or the DISTRICT COURT. s.25 → inter-State transfer by the SUPREME COURT.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-004", subject: S, topic: "v1", subtopic: "s.25 Supreme Court transfer",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The power to transfer a case from a court in one State to a court in another State is exercisable by:",
    options: ["The High Court of the State concerned", "The Supreme Court", "The District Court", "The Law Commission of India"],
    correctIndex: 1,
    explanation: "Section 25 empowers the Supreme Court to transfer any suit, appeal or other proceeding from a High Court or other civil court in one State to a High Court or other civil court in any other State.",
    legalBasis: "Section 25, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["A High Court's power of transfer under s.24 is confined to courts subordinate to it within the State.", "", "A District Court has power only within its own jurisdiction.", "The Law Commission has no judicial power."],
    flashpoint: "s.24 → within the State (High Court/District Court). s.25 → inter-State, by the SUPREME COURT.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-005", subject: S, topic: "v1", subtopic: "Res judicata",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The principle of res judicata is embodied in which section of the Code of Civil Procedure, 1908?",
    options: ["Section 10", "Section 11", "Section 12", "Section 13"],
    correctIndex: 1,
    explanation: "Section 11 embodies res judicata: no court shall try any suit or issue in which the matter directly and substantially in issue has been directly and substantially in issue in a former suit between the same parties, or between parties under whom they or any of them claim, litigating under the same title, in a court competent to try such subsequent suit, and has been heard and finally decided by such court. Section 10 embodies res sub judice.",
    legalBasis: "Sections 10 and 11, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Section 10 is res sub judice — stay of suit.", "", "Section 12 concerns the bar of a further suit in certain cases after a partial claim.", "Section 13 concerns the bar on a foreign judgment."],
    flashpoint: "s.10 → RES SUB JUDICE (stay). s.11 → RES JUDICATA.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-006", subject: S, topic: "v1", subtopic: "s.80 notice to Government",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 80 CPC, no suit shall be instituted against the Government or a public officer in respect of any act purporting to be done in his official capacity until the expiration of:",
    options: ["Fifteen days after notice in writing", "One month after notice in writing", "Two months after notice in writing", "Three months after notice in writing"],
    correctIndex: 2,
    explanation: "Section 80 requires the delivery of a notice in writing stating the cause of action, the name and description of the plaintiff, and the relief claimed, and the suit may be instituted after the expiration of two months from the date of delivery of the notice, subject to the statutory exceptions where the relief is sought on the ground of urgency or where the act is in respect of any act purporting to be done in an official capacity.",
    legalBasis: "Section 80, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Fifteen days is not the period.", "One month is not the period.", "", "Three months is not the period."],
    flashpoint: "s.80 → TWO MONTHS' notice before suing the Government or a public officer in an official capacity.",
    source: "STATUTE"
  });

  /* --------------------------------------------------------------- pleadings */
  Q({
    id: "CPC-007", subject: S, topic: "v2", subtopic: "Order VI Rule 16 striking out",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "While examining the pleadings, a court finds certain averments to be unnecessary and capable of prejudicing or delaying a fair trial. What may the court do?",
    options: [
      "Strike out such pleadings at any stage of the proceedings",
      "Ignore such pleadings without passing any order",
      "Direct an amendment only after the trial begins",
      "Reject the plaint in its entirety"
    ],
    correctIndex: 0,
    explanation: "Order VI Rule 16 empowers the court to order to be struck out or amended any matter in any pleading which may be unnecessary, scandalous, frivolous or vexatious, which may tend to prejudice, embarrass or delay the fair trial of the suit, or which is otherwise an abuse of the process of the court. The power may be exercised at any stage of the proceedings.",
    legalBasis: "Order VI Rule 16, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "The court must pass an order; it cannot simply ignore the pleading.", "Striking out is not confined to the stage after the trial begins.", "Rejection of the plaint is a distinct power under Order VII Rule 11."],
    flashpoint: "Order VI Rule 16 → STRIKE OUT scandalous/frivolous/prejudicial matter AT ANY STAGE.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-008", subject: S, topic: "v2", subtopic: "Order VI Rule 17 amendment",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order VI Rule 17 CPC, as amended in 2002, no application for amendment shall be allowed after the trial has commenced unless:",
    options: [
      "The opposite party consents",
      "The court concludes that, in spite of due diligence, the party could not have raised the matter before the commencement of trial",
      "The amendment is confined to a clerical error",
      "The suit is valued above a prescribed limit"
    ],
    correctIndex: 1,
    explanation: "The proviso to Order VI Rule 17 bars an amendment after the commencement of the trial unless the court concludes that, in spite of due diligence, the party could not have raised the matter before the commencement of the trial.",
    legalBasis: "Order VI Rule 17 and the proviso thereto, Code of Civil Procedure, 1908 (as amended in 1999/2002); Salem Advocate Bar Association v. Union of India, (2005) 6 SCC 344.",
    wrongOptionExplanations: ["The consent of the opposite party is not the statutory test.", "", "The proviso applies to all amendments, not only clerical ones.", "The value of the suit is irrelevant to Order VI Rule 17."],
    flashpoint: "Order VI Rule 17 proviso → after commencement of trial, amendment only if it could not have been raised DESPITE DUE DILIGENCE.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-009", subject: S, topic: "v2", subtopic: "Order VII Rule 11 rejection of plaint",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is a ground for rejection of a plaint under Order VII Rule 11 CPC?",
    options: [
      "The plaintiff has no documentary evidence in support of the claim",
      "The suit is barred by any law",
      "The defendant has not been served with summons",
      "The plaintiff did not engage an advocate"
    ],
    correctIndex: 1,
    explanation: "Order VII Rule 11 lists the grounds for rejecting a plaint: where it does not disclose a cause of action; where the relief claimed is undervalued and the plaintiff fails to correct the valuation within the time allowed; where the relief claimed is properly valued but the plaint is written on insufficiently stamped paper; where the suit appears from the statement in the plaint to be barred by any law; and where the plaint is not filed in duplicate or does not comply with the statutory requirements as to copies.",
    legalBasis: "Order VII Rule 11, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Absence of documentary evidence is a matter for trial, not a ground for rejection.", "", "Non-service of summons is a procedural matter after institution.", "There is no requirement that the plaintiff be represented by an advocate."],
    flashpoint: "Order VII Rule 11 → REJECTION: no cause of action | undervaluation | insufficient stamp | SUIT BARRED BY ANY LAW.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-010", subject: S, topic: "v2", subtopic: "Striking out vs rejection",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly distinguishes Order VI Rule 16 from Order VII Rule 11 CPC?",
    options: [
      "Order VI Rule 16 rejects the plaint; Order VII Rule 11 strikes out a pleading",
      "Order VI Rule 16 empowers the striking out of a pleading or part of it; Order VII Rule 11 empowers the rejection of the plaint as a whole",
      "Both powers are exercised only after the framing of issues",
      "Both powers are exercised only by the High Court"
    ],
    correctIndex: 1,
    explanation: "Order VI Rule 16 operates on a pleading (or part of it) that is scandalous, frivolous, vexatious or prejudicial; Order VII Rule 11 operates on the plaint and results in its rejection. The two powers are distinct in scope and consequence.",
    legalBasis: "Order VI Rule 16 and Order VII Rule 11, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The two powers are the reverse of this description.", "", "Order VII Rule 11 may be exercised at any stage before the framing of issues, not only after; striking out may be at any stage.", "Both powers are exercised by the trial court, not only by the High Court."],
    flashpoint: "Order VI R.16 → STRIKE OUT a pleading (part). Order VII R.11 → REJECT the plaint (whole).",
    source: "STATUTE"
  });

  /* ------------------------------------------------------------------ parties */
  Q({
    id: "CPC-011", subject: S, topic: "v3", subtopic: "Mis-joinder",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A suit is instituted against a person who is subsequently found to have been wrongly impleaded as a defendant. What may the court do?",
    options: [
      "Return the plaint on the ground of mis-joinder of parties",
      "Dismiss the suit as not maintainable",
      "Direct the plaintiff to institute a fresh suit",
      "Permit substitution or addition of the proper defendant"
    ],
    correctIndex: 3,
    explanation: "Order I Rule 9 provides that no suit shall be defeated by reason of the mis-joinder or non-joinder of parties. Order I Rule 10 empowers the court to add, delete or substitute parties at any stage of the proceedings so as to enable it effectually and completely to adjudicate upon and settle all the questions involved.",
    legalBasis: "Order I Rules 9 and 10, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Mis-joinder is not a ground for returning the plaint.", "A suit is not dismissed for mis-joinder.", "A fresh suit is not required.", ""],
    flashpoint: "Order I R.9 → a suit is NOT defeated by mis-joinder or non-joinder. Order I R.10 → the court may ADD, DELETE or SUBSTITUTE parties at any stage.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-012", subject: S, topic: "v3", subtopic: "Representative suit",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Order I Rule 8 CPC, a representative suit may be instituted with the permission of the court by or against one person on behalf of numerous persons having the same interest. What is the effect of the decree in such a suit?",
    options: [
      "It binds only the person who actually instituted or defended the suit",
      "It binds all the persons on whose behalf or for whose benefit the suit was instituted or defended",
      "It binds all the persons in the locality irrespective of interest",
      "It has no binding effect until each person is individually impleaded"
    ],
    correctIndex: 1,
    explanation: "Order I Rule 8 permits a representative suit where numerous persons have the same interest, with notice of the institution of the suit given at the plaintiff's expense. The decree binds all the persons on whose behalf or for whose benefit the suit was instituted or defended.",
    legalBasis: "Order I Rule 8, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["That would defeat the purpose of a representative action.", "", "Only persons having the same interest are bound.", "Individual impleadment is not required once the conditions of Order I Rule 8 are satisfied."],
    flashpoint: "Order I R.8 → REPRESENTATIVE SUIT; the decree binds all persons having the same interest who are represented.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-013", subject: S, topic: "v3", subtopic: "Splitting of claims",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "A plaintiff omits to sue for a portion of his claim and subsequently sues for the omitted portion. What is the correct position under Order II Rule 2 CPC?",
    options: [
      "The plaintiff may split the claim as he pleases",
      "The plaintiff may sue for the omitted portion with the leave of the court granted at the time of the institution of the first suit",
      "The second suit is barred absolutely in every case",
      "Order II Rule 2 applies only to suits relating to immovable property"
    ],
    correctIndex: 1,
    explanation: "Order II Rule 2 requires the plaintiff to include the whole of the claim in one suit and bars a separate suit for the portion omitted, unless the plaintiff had, at the time of instituting the first suit, obtained the leave of the court or the defendant has consented, or the relief claimed in the second suit was not one the plaintiff was bound to claim in the first.",
    legalBasis: "Order II Rule 2, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Splitting is not at the plaintiff's option; it is regulated by Order II Rule 2.", "", "The bar is not absolute; leave of the court at the time of the first suit saves the position.", "Order II Rule 2 is of general application."],
    flashpoint: "Order II R.2 → no SPLITTING of claims; a suit for the omitted portion is barred unless leave was obtained in the first suit.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------------ defaults */
  Q({
    id: "CPC-014", subject: S, topic: "v4", subtopic: "Order IX Rule 13",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A defendant against whom an ex parte decree has been passed applies to have it set aside. On what grounds may the court set aside the decree under Order IX Rule 13 CPC?",
    options: [
      "Only where the summons was not duly served",
      "Where the summons was not duly served or where the defendant was prevented by sufficient cause from appearing when the suit was called on for hearing",
      "Only where the decree is contrary to law",
      "Only where the plaintiff consents"
    ],
    correctIndex: 1,
    explanation: "Order IX Rule 13 permits the court to set aside an ex parte decree on either of two grounds: that the summons was not duly served, or that the defendant was prevented by sufficient cause from appearing when the suit was called on for hearing. 'Sufficient cause' is construed liberally to advance substantial justice.",
    legalBasis: "Order IX Rule 13, Code of Civil Procedure, 1908; G.P. Srivastava v. R.K. Raizada, (2000) 3 SCC 54.",
    wrongOptionExplanations: ["Non-service is one ground, not the only ground.", "", "An error of law is a ground of appeal or review, not of an Order IX Rule 13 application.", "The plaintiff's consent is not required."],
    flashpoint: "Order IX R.13 → TWO grounds: summons NOT duly served OR prevented by SUFFICIENT CAUSE from appearing.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-015", subject: S, topic: "v4", subtopic: "Ex parte decree against one defendant",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A decree is passed against several defendants, one of whom was never served with summons and had no opportunity to contest. What relief is available to that defendant?",
    options: [
      "An application under Order IX Rule 13 to set aside the ex parte decree",
      "A separate suit only",
      "An appeal against the decree only",
      "A review before the same court only"
    ],
    correctIndex: 0,
    explanation: "Where a decree is passed ex parte against a defendant who was not served, the remedy is an application under Order IX Rule 13 to set aside the ex parte decree as against him. An appeal under s.96(2) would lie only against a decree passed ex parte that is appealable and where the defendant-appellant had appeared and then failed to appear; for a defendant never served, Order IX Rule 13 is the appropriate remedy.",
    legalBasis: "Order IX Rules 6 and 13, and Section 96(2), Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "A separate suit is not the appropriate remedy; the Code provides the specific application.", "An appeal does not meet the case of a defendant never served and who has never appeared.", "Review lies on the grounds in s.114 and Order XLVII, which are different."],
    flashpoint: "Defendant NEVER SERVED → application under ORDER IX RULE 13 (not a fresh suit, not only an appeal).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-016", subject: S, topic: "v4", subtopic: "Ex parte proceedings",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Assertion-Reason",
    question: "Assertion (A): Where the defendant does not appear when the suit is called on for hearing, the court may proceed ex parte against him.\nReason (R): The Code provides a remedy to the defendant to apply to set aside the ex parte decree on the grounds specified in Order IX Rule 13, and the court may also require the defendant to bear the costs occasioned by his non-appearance.\nDecide the correct option.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 1,
    explanation: "Both statements are true. Order IX Rule 6 permits the court to proceed ex parte, and Order IX Rule 13 provides the remedy of setting aside. However, the existence of a remedy is a consequence of, not the reason for, the power to proceed ex parte — the reason for the rule is the necessity of avoiding delay where a defendant, having been served, chooses not to appear.",
    legalBasis: "Order IX Rules 6, 7 and 13, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The reason does not explain the assertion; it states a consequence.", "", "(R) correctly states the law.", "(A) correctly states the law."],
    flashpoint: "Order IX R.6 → the court MAY proceed EX PARTE. R.13 → the remedy is to set aside on the specified grounds.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------ abatement, deaths */
  Q({
    id: "CPC-017", subject: S, topic: "v5", subtopic: "Abatement",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Direct",
    question: "Where a suit has abated owing to the failure to bring the legal representatives on record within the prescribed time, the court may set aside the abatement if the plaintiff shows:",
    options: [
      "That the defendant had knowledge of the death",
      "Sufficient cause for not making the application within time",
      "That the decree has not yet been passed",
      "An error apparent on the face of the record"
    ],
    correctIndex: 1,
    explanation: "Order XXII Rule 9(2) permits the court to set aside an abatement on sufficient cause being shown by the plaintiff for not making the application within the time allowed. The provision is construed liberally, but the delay must be explained.",
    legalBasis: "Order XXII Rule 9(2), Code of Civil Procedure, 1908; Vidyawati v. State of Punjab, (2006) 6 SCC 57.",
    wrongOptionExplanations: ["The defendant's knowledge is not the statutory test.", "", "The passing of a decree is not the test for setting aside an abatement.", "'Error apparent on the face of the record' is the ground for review under Order XLVII."],
    flashpoint: "Order XXII R.9(2) → set aside ABATEMENT for SUFFICIENT CAUSE.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-018", subject: S, topic: "v5", subtopic: "Abatement — period",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Order XXII Rule 4(3) CPC, an application to bring the legal representatives of a deceased defendant on record must be made within:",
    options: ["30 days from the date of death", "60 days from the date of death", "90 days from the date of death", "One year from the date of death"],
    correctIndex: 2,
    explanation: "Order XXII Rule 4(3) requires the application to bring the legal representative of a deceased defendant on record to be made within ninety days from the date of the defendant's death. Article 120 of the Limitation Act provides 90 days for bringing legal representatives on record.",
    legalBasis: "Order XXII Rule 4(3), Code of Civil Procedure, 1908; Article 120, Limitation Act, 1963.",
    wrongOptionExplanations: ["Thirty days is not the period.", "Sixty days is not the period.", "", "One year is not the period."],
    flashpoint: "Order XXII R.4(3) → 90 DAYS from the date of death (Limitation Act Art. 120).",
    source: "STATUTE"
  });

  Q({
    id: "CPC-019", subject: S, topic: "v5", subtopic: "Abatement — effect",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about the abatement of a suit is correct?",
    options: [
      "Abatement operates automatically on the death of a party and the suit stands dismissed on merits",
      "Abatement occurs where the legal representatives are not brought on record within the time allowed, and the abated suit does not operate as res judicata on the merits",
      "An abated suit operates as res judicata against the plaintiff",
      "Abatement is available only in appeals and not in suits"
    ],
    correctIndex: 1,
    explanation: "Abatement results from the failure to bring the legal representatives on record within time. Since the suit is not decided on the merits, the abatement does not operate as res judicata, and a fresh suit may be possible subject to limitation. Abatement applies to suits as well as appeals.",
    legalBasis: "Order XXII Rules 3, 4 and 9, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Abatement does not result from a decision on the merits.", "", "An abated suit is not a decision on the merits and so is not res judicata.", "Abatement applies to suits and appeals alike."],
    flashpoint: "Abatement → no decision on MERITS → so NOT res judicata.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------ withdrawal, compromise */
  Q({
    id: "CPC-020", subject: S, topic: "v6", subtopic: "Withdrawal and fresh suit",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Multi",
    question: "With reference to withdrawal and abandonment of suits under the Code of Civil Procedure, 1908, consider the following statements:\nI. A plaintiff may withdraw or abandon a suit subject to the provisions of law.\nII. The institution of a fresh suit on the same cause of action requires the permission of the court.\nIII. Withdrawal of a suit without the permission of the court to institute a fresh suit bars a subsequent suit on the same cause of action.\nIV. The court must grant permission whenever such a request is made.\nWhich of the statements are correct?",
    options: ["I, II and III", "I, III and IV", "I, II, III and IV", "II, III and IV"],
    correctIndex: 0,
    explanation: "Statements I, II and III are correct under Order XXIII Rule 1. Statement IV is wrong: the grant of permission to institute a fresh suit is discretionary and is granted only where the suit must fail by reason of a formal defect or where there are sufficient grounds — it is not granted as a matter of course.",
    legalBasis: "Order XXIII Rule 1, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "Statement IV is wrong — permission is discretionary.", "Statement IV is wrong.", "Statement I is correct."],
    flashpoint: "Order XXIII R.1 → withdrawal/abandonment; fresh suit needs PERMISSION; without permission the fresh suit is BARRED; permission is DISCRETIONARY.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-021", subject: S, topic: "v6", subtopic: "Compromise decree",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order XXIII Rule 3 CPC, where the parties to a suit arrive at a lawful agreement or compromise, the court shall:",
    options: [
      "Record the compromise only if the defendant so requests",
      "Order such agreement, compromise or satisfaction to be recorded and pass a decree in accordance therewith so far as it relates to the suit, provided the agreement is lawful",
      "Refer the parties to arbitration in every case",
      "Refuse to record the compromise unless all parties are personally present"
    ],
    correctIndex: 1,
    explanation: "Order XXIII Rule 3 requires the court, where it is proved to its satisfaction that a suit has been adjusted wholly or in part by any lawful agreement or compromise, to record the agreement and pass a decree in accordance with it so far as it relates to the suit. A compromise decree is not appealable on the merits, though it may be challenged on the ground that the compromise was not lawful.",
    legalBasis: "Order XXIII Rule 3, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The recording does not depend on the defendant's request.", "", "Reference to arbitration arises under s.89, not automatically under Order XXIII Rule 3.", "Personal presence of all parties is not required; the agreement may be established otherwise."],
    flashpoint: "Order XXIII R.3 → COMPROMISE DECREE if the agreement is LAWFUL and proved to the court's satisfaction.",
    source: "STATUTE"
  });

  /* -------------------------------------------------------------- execution */
  Q({
    id: "CPC-022", subject: S, topic: "v7", subtopic: "Third-party claim in execution",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "In execution proceedings, property of the judgment-debtor is attached and a third party raises a claim asserting independent title. What is the correct position under the Code of Civil Procedure, 1908?",
    options: [
      "The claim shall be adjudicated by the executing court",
      "The claim requires prior determination by the court which passed the decree",
      "The claim must be decided only by instituting a separate civil suit",
      "The claim can be decided only after the completion of the execution proceedings"
    ],
    correctIndex: 0,
    explanation: "Order XXI Rule 58 requires the executing court to adjudicate upon the claim or objection of a third party to the attachment of property in execution of a decree, if the claim is preferred before the property is sold. The enquiry is summary in nature, and under Order XXI Rule 63 the order is subject to the result of a suit to establish title if the claimant so chooses. The claim is investigated by the executing court itself.",
    legalBasis: "Order XXI Rules 58, 59 and 63, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "The decree-passing court does not decide the third party's independent title.", "A separate suit is not the immediate remedy — the executing court adjudicates first, and the separate suit follows under Order XXI Rule 63 if needed.", "The claim must be investigated before the property is sold."],
    flashpoint: "Order XXI R.58 → the EXECUTING COURT adjudicates a third-party claim to attached property (before sale); R.63 → the order is subject to a suit.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-023", subject: S, topic: "v7", subtopic: "s.47 questions in execution",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 47 CPC, which court determines questions arising between the parties to the suit relating to the execution, discharge or satisfaction of the decree?",
    options: [
      "The executing court, and no separate suit lies in respect of such questions",
      "The appellate court only",
      "The High Court only",
      "A separate suit is the only remedy"
    ],
    correctIndex: 0,
    explanation: "Section 47 requires all questions arising between the parties to the suit in which the decree was passed, or their representatives, and relating to the execution, discharge or satisfaction of the decree, to be determined by the court executing the decree and not by a separate suit. N.S.S. Narayana Sarma v. Goldstone Exports (P) Ltd. confirms the exclusion of a separate suit.",
    legalBasis: "Section 47, Code of Civil Procedure, 1908; N.S.S. Narayana Sarma v. Goldstone Exports (P) Ltd., (2002) 1 SCC 662.",
    wrongOptionExplanations: ["", "The appellate court is not the forum for execution questions.", "The High Court is not the forum in the first instance.", "A separate suit is expressly excluded."],
    flashpoint: "s.47 → questions BETWEEN THE PARTIES relating to execution → determined by the EXECUTING COURT; no separate suit.",
    source: "CASE"
  });

  Q({
    id: "CPC-024", subject: S, topic: "v7", subtopic: "Executing court and the decree",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following statements about the powers of the executing court is correct?",
    options: [
      "The executing court may go behind the decree and examine its correctness",
      "The executing court cannot go behind the decree; it must execute the decree as it stands",
      "The executing court may modify the decree to do justice",
      "The executing court may set aside the decree"
    ],
    correctIndex: 1,
    explanation: "The executing court cannot go behind the decree. It must take the decree as it stands and execute it, unless the decree is a nullity for want of jurisdiction or the terms of the decree are ambiguous. Objections to the decree must be raised in appeal or other appropriate proceedings.",
    legalBasis: "Section 47 and Order XXI, Code of Civil Procedure, 1908; Bhavan Vaja v. Solanki Hanuji Khodaji Mansang, (1973) 2 SCC 40.",
    wrongOptionExplanations: ["The executing court cannot examine the correctness of the decree.", "", "The executing court cannot modify the decree.", "The executing court cannot set aside the decree."],
    flashpoint: "Executing court → CANNOT GO BEHIND THE DECREE (except where the decree is a nullity for want of jurisdiction).",
    source: "CASE"
  });

  /* ------------------------------------------------------------------ costs */
  Q({
    id: "CPC-025", subject: S, topic: "v8", subtopic: "s.35B costs for delay",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Direct",
    question: "Under Section 35B CPC, where a party fails to take a step required by the court on the date fixed, the court may:",
    options: [
      "Grant an adjournment as a matter of right",
      "Impose costs as a precondition for allowing further prosecution of the suit",
      "Dismiss the suit",
      "Proceed with the suit without imposing any condition"
    ],
    correctIndex: 1,
    explanation: "Section 35B empowers the court, where a party fails without lawful excuse to take a step required by the court on the date fixed, to order that, as a precondition to the further prosecution of the suit or proceeding, the party shall pay the costs occasioned by such failure. The costs are a precondition, not a penalty for contempt.",
    legalBasis: "Section 35B, Code of Civil Procedure, 1908; Salem Advocate Bar Association v. Union of India, (2005) 6 SCC 344.",
    wrongOptionExplanations: ["An adjournment is not a matter of right.", "", "Dismissal is not the sanction under s.35B.", "The section expressly contemplates costs as a precondition."],
    flashpoint: "s.35B → COSTS FOR CAUSING DELAY; payment is a PRECONDITION for further prosecution.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-026", subject: S, topic: "v8", subtopic: "Court fee and postal charges",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A plaintiff fails to pay the requisite court fee or the postal charges for the service of summons within the time permitted by the court. What may the court do?",
    options: [
      "Stay the proceedings until service is effected",
      "Proceed to decide the suit on the merits",
      "Return the plaint for fresh presentation",
      "Dismiss the suit"
    ],
    correctIndex: 3,
    explanation: "Where the plaintiff fails to pay the requisite court fee or the postal charges for the service of summons on the defendant within the time permitted by the court, the court may dismiss the suit. Section 149 separately permits the court, at any stage, to allow the plaintiff to make up the deficiency in court fee.",
    legalBasis: "Order VII Rule 11 (insufficient stamp) and Section 149, Code of Civil Procedure, 1908; Order IX Rule 5.",
    wrongOptionExplanations: ["A stay is not the consequence contemplated.", "The suit cannot be decided on the merits in the plaintiff's default.", "Returning the plaint is a remedy in different circumstances.", ""],
    flashpoint: "Failure to pay court fee / postal charges in time → DISMISSAL of the suit. s.149 → the court MAY allow the deficiency to be made up at any stage.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-027", subject: S, topic: "v8", subtopic: "s.148 and s.149",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly states the effect of Sections 148 and 149 CPC?",
    options: [
      "Section 148 permits the enlargement of time fixed for doing an act, and Section 149 permits the court to allow a party to make up the deficiency of court fee",
      "Section 148 relates to court fee and Section 149 to the enlargement of time",
      "Both sections relate only to appeals",
      "Both sections apply only to the Government as a party"
    ],
    correctIndex: 0,
    explanation: "Section 148 empowers the court to enlarge, from time to time, any period fixed or granted by it for the doing of any act prescribed or allowed by the Code, even though the period originally fixed may have expired. Section 149 empowers the court, at any stage, to allow the plaintiff to pay the deficient court fee, and the document shall then have the same force and effect as if it had been paid in the first instance.",
    legalBasis: "Sections 148 and 149, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "The sections are the reverse of this description.", "Both sections have general application, not confined to appeals.", "Both sections apply to all parties."],
    flashpoint: "s.148 → ENLARGEMENT OF TIME (even after expiry). s.149 → power to make up the DEFICIENCY IN COURT FEE.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-028", subject: S, topic: "v8", subtopic: "Inherent powers",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 151 CPC provides that:",
    options: [
      "Nothing in the Code shall be deemed to limit or otherwise affect the inherent power of the court to make such orders as may be necessary for the ends of justice or to prevent abuse of the process of the court",
      "The court shall have no power other than those expressly conferred by the Code",
      "The court may override the substantive law to do justice",
      "The court may enlarge the jurisdiction conferred by the Code"
    ],
    correctIndex: 0,
    explanation: "Section 151 preserves the inherent powers of the court to make such orders as may be necessary for the ends of justice or to prevent the abuse of the process of the court. The power is not to be exercised to override express provisions of law or to enlarge jurisdiction.",
    legalBasis: "Section 151, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "The Code does not exclude inherent powers.", "Inherent power cannot override the substantive law or express provisions.", "Inherent power cannot be used to enlarge jurisdiction."],
    flashpoint: "s.151 → INHERENT POWERS — for the ends of justice or to prevent ABUSE OF PROCESS; cannot override express provisions.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------ appeals and review */
  Q({
    id: "CPC-029", subject: S, topic: "v9", subtopic: "Second appeal",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 100 CPC, a second appeal lies to the High Court only if:",
    options: [
      "The amount involved exceeds a prescribed value",
      "The case involves a substantial question of law",
      "The first appellate court has dismissed the appeal",
      "The trial court has exercised jurisdiction illegally"
    ],
    correctIndex: 1,
    explanation: "Section 100 permits a second appeal only where the case involves a substantial question of law. A second appeal does not lie on a question of fact, and the High Court must formulate the substantial question of law at the time of admission.",
    legalBasis: "Section 100 and Section 100A, Code of Civil Procedure, 1908 (as amended in 1976).",
    wrongOptionExplanations: ["The value of the subject matter is not the test for a second appeal.", "", "The identity of the court that decided the first appeal is not the test.", "Illegality in the exercise of jurisdiction may generate a substantial question of law, but it must be such a question to sustain the appeal."],
    flashpoint: "s.100 → SECOND APPEAL only on a SUBSTANTIAL QUESTION OF LAW. s.100A → no further appeal.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-030", subject: S, topic: "v9", subtopic: "Appealable orders",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is an appealable order under Section 104 CPC?",
    options: [
      "An order under Order IX Rule 13 refusing to set aside an ex parte decree",
      "Every interlocutory order passed during the trial",
      "An order of adjournment",
      "An order relating to the conduct of the trial"
    ],
    correctIndex: 0,
    explanation: "Section 104 lists the appealable orders, which include an order under Order IX Rule 13 (or Order IX Rule 9) refusing to set aside an ex parte decree, an order under Order XXI Rule 58, and an order imposing costs under the provisions relating to review and others. An appeal under s.104 lies to the court to which an appeal would lie from the decree in the suit.",
    legalBasis: "Section 104 and Order XLIII, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "Not every interlocutory order is appealable; only those listed.", "An adjournment order is not ordinarily appealable.", "Orders on the conduct of the trial are not generally appealable."],
    flashpoint: "s.104 + Order XLIII → only the LISTED orders are appealable; the rest may be challenged in revision or in the appeal from the decree.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-031", subject: S, topic: "v9", subtopic: "Review",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is a ground for review under Section 114 read with Order XLVII Rule 1 CPC?",
    options: [
      "The discovery of new and important matter or evidence which, after the exercise of due diligence, was not within the applicant's knowledge",
      "The decision is contrary to the judge's view of the law",
      "The applicant is dissatisfied with the order",
      "A change of counsel"
    ],
    correctIndex: 0,
    explanation: "Section 114 and Order XLVII Rule 1 permit review on the ground of the discovery of new and important matter or evidence which, after the exercise of due diligence, was not within the knowledge of the applicant or could not be produced when the decree or order was passed; or on account of some mistake or error apparent on the face of the record; or for any other sufficient reason.",
    legalBasis: "Section 114 and Order XLVII Rule 1, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "A contrary view of the law is a ground of appeal, not review.", "Dissatisfaction is not a ground.", "A change of counsel is not a ground."],
    flashpoint: "Review grounds → NEW AND IMPORTANT MATTER | ERROR APPARENT ON THE FACE OF THE RECORD | any other sufficient reason.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-032", subject: S, topic: "v9", subtopic: "Revision",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly states the scope of revision under Section 115 CPC?",
    options: [
      "The High Court may revise any order of a court subordinate to it if the order is wrong on the merits of the case",
      "The High Court may revise a case decided in which no appeal lies if the subordinate court has exercised a jurisdiction not vested in it, or has failed to exercise a jurisdiction so vested, or has acted in the exercise of its jurisdiction illegally or with material irregularity",
      "Revision lies only against decrees",
      "Revision lies to the Supreme Court only"
    ],
    correctIndex: 1,
    explanation: "Section 115 confers revisional jurisdiction on the High Court in respect of a case decided by a subordinate court in which no appeal lies thereto, where the subordinate court has exercised a jurisdiction not vested in it by law, failed to exercise a jurisdiction so vested, or acted in the exercise of its jurisdiction illegally or with material irregularity.",
    legalBasis: "Section 115, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Revision is confined to jurisdictional errors, not the merits generally.", "", "Revision lies against orders, and a decree is generally appealable.", "Revision under s.115 lies to the High Court."],
    flashpoint: "s.115 → revision for (i) exercising jurisdiction NOT vested, (ii) failing to exercise jurisdiction vested, (iii) acting ILLEGALLY or with MATERIAL IRREGULARITY.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-033", subject: S, topic: "v9", subtopic: "Reference",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 113 CPC, a subordinate court may refer a question of law to the High Court only where:",
    options: [
      "The question involves a substantial amount of money",
      "The question involves the validity of any Act, Ordinance or Regulation, the determination of which is necessary for the disposal of the case, and the court is satisfied that the Act, Ordinance or Regulation is invalid or inoperative but is not a provision of the Constitution",
      "The parties agree to a reference",
      "The question has been decided by the Supreme Court"
    ],
    correctIndex: 1,
    explanation: "Section 113 requires a reference to the High Court where a question arises as to the validity of any Act, Ordinance or Regulation, the determination of which is necessary for the disposal of the case, and the subordinate court is satisfied that the Act, Ordinance or Regulation is invalid or inoperative but is not a provision of the Constitution.",
    legalBasis: "Section 113, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The value of the subject matter is irrelevant to s.113.", "", "Reference is not by consent of the parties.", "A question already decided by the Supreme Court does not require a reference."],
    flashpoint: "s.113 → REFERENCE on the VALIDITY of an Act/Ordinance/Regulation (not a constitutional provision).",
    source: "STATUTE"
  });

  /* --------------------------------------------------------- miscellaneous */
  Q({
    id: "CPC-034", subject: S, topic: "v8", subtopic: "s.89 ADR",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 89 CPC requires the court, where it appears that there exist elements of a settlement acceptable to the parties, to:",
    options: [
      "Dismiss the suit for want of prosecution",
      "Formulate the terms of settlement and refer the same for arbitration, conciliation, judicial settlement including settlement through Lok Adalat, or mediation",
      "Refer every suit to arbitration irrespective of the wishes of the parties",
      "Transfer the suit to the High Court"
    ],
    correctIndex: 1,
    explanation: "Section 89 requires the court to formulate the terms of settlement and refer the dispute to one of four modes: arbitration, conciliation, judicial settlement including settlement through Lok Adalat, or mediation. Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. (P) Ltd. lays down guidelines on referral and identifies categories of cases unsuitable for ADR.",
    legalBasis: "Section 89, Code of Civil Procedure, 1908; Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. (P) Ltd., (2010) 8 SCC 24.",
    wrongOptionExplanations: ["Dismissal is not contemplated by s.89.", "", "Referral is not automatic and requires a consensual element.", "A transfer to the High Court is not what s.89 provides."],
    flashpoint: "s.89 → FOUR modes: ARBITRATION | CONCILIATION | JUDICIAL SETTLEMENT incl. LOK ADALAT | MEDIATION. Guidelines → Afcons Infrastructure (2010) 8 SCC 24.",
    source: "CASE"
  });

  Q({
    id: "CPC-035", subject: S, topic: "v7", subtopic: "Attachment before judgment",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "An order of attachment before judgment under Order XXXVIII Rule 5 CPC may be made where the defendant:",
    options: [
      "Has merely denied the plaintiff's claim",
      "Is about to dispose of the whole or any part of his property, or is about to remove the whole or any part of his property from the local limits of the jurisdiction of the court, with intent to obstruct or delay the execution of any decree that may be passed against him",
      "Has failed to file a written statement",
      "Has not paid the court fee"
    ],
    correctIndex: 1,
    explanation: "Order XXXVIII Rule 5 permits the court, at any stage of a suit, to direct the defendant either to furnish security in a specified sum or to place the disputed property at the court's disposal, where the defendant is about to dispose of or remove his property with intent to obstruct or delay execution of a probable decree. The court must be satisfied by affidavit or otherwise and must record reasons.",
    legalBasis: "Order XXXVIII Rule 5 and Section 94, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["A mere denial is not a ground.", "", "Failure to file a written statement is a different matter.", "Non-payment of court fee is a distinct matter under Order VII Rule 11."],
    flashpoint: "Order XXXVIII R.5 → ATTACHMENT BEFORE JUDGMENT where the defendant is about to DISPOSE OF or REMOVE property to obstruct execution.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-036", subject: S, topic: "v1", subtopic: "Objection to jurisdiction",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 21 CPC, an objection that a suit has been instituted in a court which has no territorial or pecuniary jurisdiction shall be entertained:",
    options: [
      "At any stage of the suit",
      "Only at the earliest possible opportunity and, in all cases where issues are settled, at or before the settlement of issues, unless there has been a consequent failure of justice",
      "Only in an appeal",
      "Only in revision before the High Court"
    ],
    correctIndex: 1,
    explanation: "Section 21(1) requires an objection as to the place of suing to be raised at the earliest possible opportunity and, where issues are settled, at or before the settlement of issues. Section 21(2) deals with pecuniary jurisdiction and requires both the raising of the objection at the earliest opportunity and a consequent failure of justice.",
    legalBasis: "Section 21, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The objection cannot be raised at any stage.", "", "An appeal is too late for such an objection.", "Revision is not the ordinary route for such an objection."],
    flashpoint: "s.21 → objection as to the PLACE OF SUING must be taken at the EARLIEST OPPORTUNITY (and, for pecuniary jurisdiction, plus a consequent FAILURE OF JUSTICE).",
    source: "STATUTE"
  });

  Q({
    id: "CPC-037", subject: S, topic: "v2", subtopic: "Verification of pleadings",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Order VI Rule 15 CPC, every pleading shall be verified at the foot by the party or by one of the parties pleading or by some other person proved to the satisfaction of the court to be acquainted with the facts of the case. The verification:",
    options: [
      "Must be signed by an advocate only",
      "Must be signed by the party and not by any other person",
      "May be signed by an authorised agent or by a person acquainted with the facts, as permitted by the Rule",
      "Is not required if the party is a company"
    ],
    correctIndex: 2,
    explanation: "Order VI Rule 15 requires verification by the party or by one of the parties pleading or by some other person proved to the satisfaction of the court to be acquainted with the facts. The verification must be signed by the person making it, and a false verification may attract consequences under the law.",
    legalBasis: "Order VI Rule 15, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Verification is by the party or a person acquainted with the facts, not by an advocate alone.", "The Rule permits verification by some other person acquainted with the facts.", "", "There is no exemption for companies; verification is done by an authorised person."],
    flashpoint: "Order VI R.15 → VERIFICATION of pleadings; a false verification is punishable.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-038", subject: S, topic: "v4", subtopic: "Written statement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order VIII Rule 1 CPC, as amended, the defendant shall file a written statement of his defence within:",
    options: [
      "Ninety days from the date of service of summons, which is extendable at the court's discretion without limit",
      "Thirty days from the date of service of summons, which may be extended up to ninety days from the date of service of summons for reasons to be recorded in writing",
      "Sixty days from the date of service of summons, not extendable",
      "One year from the date of service of summons"
    ],
    correctIndex: 1,
    explanation: "Order VIII Rule 1 requires the defendant to present a written statement within thirty days from the date of service of summons, and the proviso permits an extension up to ninety days from the date of service of summons for reasons to be recorded in writing. Salem Advocate Bar Association v. Union of India held that the outer limit of ninety days is directory and not mandatory in the absolute sense, and that in exceptional cases a further extension may be granted on payment of costs.",
    legalBasis: "Order VIII Rule 1 and its proviso, Code of Civil Procedure, 1908; Salem Advocate Bar Association v. Union of India, (2005) 6 SCC 344.",
    wrongOptionExplanations: ["Ninety days is the OUTER limit, not the initial period.", "", "Sixty days is not the prescribed period.", "One year is not contemplated."],
    flashpoint: "Order VIII R.1 → 30 DAYS for the written statement, extendable to 90 DAYS for recorded reasons.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-039", subject: S, topic: "v6", subtopic: "Withdrawal — effect",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: Under Order XXIII Rule 1(4) CPC, where the plaintiff withdraws from a suit without the permission of the court to institute a fresh suit, he shall be precluded from instituting any fresh suit in respect of the same subject matter.\nConclusion I: The bar under Order XXIII Rule 1(4) applies only where the withdrawal was made without the permission of the court.\nConclusion II: A plaintiff who withdraws with the permission of the court to institute a fresh suit is barred from instituting a fresh suit on a different cause of action.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion I follows", "Only Conclusion II follows", "Neither Conclusion I nor II follows"],
    correctIndex: 1,
    explanation: "Conclusion I follows — the bar operates where the withdrawal is without permission. Conclusion II does not follow: permission to institute a fresh suit relates to the same subject matter, and the bar does not extend to a fresh suit on a different cause of action.",
    legalBasis: "Order XXIII Rules 1 and 2, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "", "Conclusion II is wrong.", "Conclusion I follows."],
    flashpoint: "Order XXIII R.1(4) → withdrawal WITHOUT permission bars a fresh suit on the SAME subject matter.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-040", subject: S, topic: "v3", subtopic: "Necessary and proper parties",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly describes a 'necessary party' as distinguished from a 'proper party'?",
    options: [
      "A necessary party is one whose presence is merely convenient, while a proper party is one without whom no effective decree can be passed",
      "A necessary party is one without whom no effective decree can be made, while a proper party is one whose presence is necessary for a complete and effectual adjudication though the decree can be passed in his absence",
      "There is no distinction between necessary and proper parties under the Code",
      "A necessary party is one who is impleaded at the plaintiff's choice"
    ],
    correctIndex: 1,
    explanation: "A necessary party is one without whom no effective order or decree can be made, and in whose absence the suit is liable to be dismissed for non-joinder. A proper party is one whose presence is necessary for a complete and final decision on the questions involved, though the decree can be passed in his absence.",
    legalBasis: "Order I Rules 3, 9 and 10, Code of Civil Procedure, 1908; Anil Kumar Singh v. Shivnath Mishra, (1995) 3 SCC 147.",
    wrongOptionExplanations: ["The definitions are reversed.", "", "The distinction is well established.", "Impleadment is governed by Order I Rule 10, not by the plaintiff's preference alone."],
    flashpoint: "NECESSARY party → decree IMPOSSIBLE without him. PROPER party → decree possible, but he is needed for a COMPLETE adjudication.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-041", subject: S, topic: "v1", subtopic: "Suits for immovable property",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 16 CPC, a suit for the recovery of immovable property, or for the partition of immovable property, or for foreclosure, sale or redemption in the case of a mortgage upon immovable property, shall be instituted in the court within the local limits of whose jurisdiction:",
    options: [
      "The defendant resides",
      "The property is situate",
      "The plaintiff resides",
      "The cause of action arose"
    ],
    correctIndex: 1,
    explanation: "Section 16 requires suits relating to immovable property to be instituted where the property is situate. Section 17 provides for cases where the property is situate within the jurisdiction of different courts, and s.18 for cases where the local limits of the jurisdiction of the courts are uncertain.",
    legalBasis: "Sections 16, 17 and 18, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The defendant's residence governs suits under s.20, not s.16.", "", "The plaintiff's residence is not the test under s.16.", "The place of accrual of the cause of action governs suits under s.19 and s.20."],
    flashpoint: "s.16 → suits relating to IMMOVABLE PROPERTY are instituted WHERE THE PROPERTY IS SITUATE (lex situs).",
    source: "STATUTE"
  });

  Q({
    id: "CPC-042", subject: S, topic: "v2", subtopic: "Amendment — nature",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Assertion-Reason",
    question: "Assertion (A): The power to allow amendment of pleadings is wide and is intended to determine the real question in controversy.\nReason (R): An amendment that changes the nature of the suit or substitutes a new cause of action for the original one is, however, not to be allowed.\nDecide the correct option.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 1,
    explanation: "Both statements are true. The power under Order VI Rule 17 is wide, but it is not so wide as to permit an amendment that changes the nature of the suit or substitutes a new cause of action. The reason states a limitation on the power rather than its justification, so it does not explain the assertion.",
    legalBasis: "Order VI Rule 17, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The reason states a limitation, not the rationale.", "", "(R) correctly states the law.", "(A) correctly states the law."],
    flashpoint: "Order VI R.17 → wide power, BUT no amendment that CHANGES THE NATURE of the suit or SUBSTITUTES A NEW CAUSE OF ACTION.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-043", subject: S, topic: "v9", subtopic: "Appeal — powers of appellate court",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order XLI Rule 31 CPC, the judgment of the appellate court shall:",
    options: [
      "Contain only the points for determination, without reasons",
      "Contain the points for determination, the decision thereon and the reasons for the decision",
      "Contain only a summary of the evidence",
      "Be delivered orally without any written judgment"
    ],
    correctIndex: 1,
    explanation: "Order XLI Rule 31 requires the appellate judgment to state the points for determination, the decision thereon and the reasons for the decision, and, where the decree appealed from is reversed or varied, the relief to which the appellant is entitled. The requirement of reasons is a facet of natural justice and a safeguard against arbitrariness.",
    legalBasis: "Order XLI Rule 31, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["A judgment without reasons does not comply with Order XLI Rule 31.", "", "A summary of evidence is not a substitute for the points for determination.", "A written judgment is required."],
    flashpoint: "Order XLI R.31 → appellate judgment must state POINTS FOR DETERMINATION + DECISION + REASONS.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-044", subject: S, topic: "v7", subtopic: "Sale of attached property",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following statements about a court sale of property in execution is correct?",
    options: [
      "The sale is complete when the bid is accepted by the highest bidder",
      "The sale becomes absolute on the confirmation of the sale by the court under Order XXI Rule 92",
      "A third party may apply to set aside the sale at any time after confirmation",
      "The judgment-debtor has an absolute right to set aside the sale on payment of the decretal amount after confirmation"
    ],
    correctIndex: 1,
    explanation: "Order XXI Rule 92 provides that the sale becomes absolute on confirmation by the court. Until confirmation, the sale may be set aside on the grounds in Order XXI Rules 89, 90 and 91. The judgment-debtor's right to have the sale set aside on deposit of the decretal amount under Order XXI Rule 89 must be exercised within the statutory time, and not after confirmation.",
    legalBasis: "Order XXI Rules 84, 89, 90, 91 and 92, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Acceptance of the bid does not complete the sale; confirmation is required.", "", "The grounds for setting aside the sale must be made out before confirmation, subject to the specific rules.", "The right to set aside on deposit is confined to the statutory period and before confirmation."],
    flashpoint: "Execution sale → becomes ABSOLUTE on CONFIRMATION (Order XXI R.92).",
    source: "STATUTE"
  });

  Q({
    id: "CPC-045", subject: S, topic: "v3", subtopic: "Suit against a dead person",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "A suit is filed against a defendant who had already died before the institution of the suit. What is the correct legal position?",
    options: [
      "The suit is valid and the legal representatives are automatically substituted",
      "The suit against a dead person is a nullity; the proper course is to file a fresh suit against the legal representatives, subject to limitation",
      "The suit can continue against the estate of the deceased",
      "The plaint may be amended at any stage to substitute the legal representatives, even if the claim is time-barred"
    ],
    correctIndex: 1,
    explanation: "A suit instituted against a person who was dead at the time of institution is a nullity. The remedy is to institute a fresh suit against the legal representatives, subject to limitation. Order XXII applies where a party dies after the institution of the suit, not before.",
    legalBasis: "Order I Rule 9 and Order XXII, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Automatic substitution does not occur.", "", "A suit cannot proceed against the estate of a deceased person who was never a party.", "An amendment cannot revive a suit that was a nullity from inception, and the law of limitation continues to apply."],
    flashpoint: "Suit against a DEAD person → NULLITY. Order XXII applies only where a party dies AFTER institution.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-046", subject: S, topic: "v8", subtopic: "Costs — discretion",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 35 CPC, the award of costs is:",
    options: [
      "A matter of right in favour of the successful party",
      "A matter of the court's discretion, guided by the conduct of the parties, the subject matter and the circumstances of the case",
      "Always equal to the actual expenses incurred by the successful party",
      "Mandatory in every case"
    ],
    correctIndex: 1,
    explanation: "Section 35 makes costs discretionary, subject to the conditions and limitations prescribed, but the costs of and incident to all suits are ordinarily to follow the event, and the court may order otherwise for reasons to be recorded.",
    legalBasis: "Section 35, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Costs are not a matter of right in the strict sense.", "", "Costs are not measured by actual expenses; they are awarded on a scale.", "Costs are discretionary, not mandatory."],
    flashpoint: "s.35 → costs are DISCRETIONARY; costs ordinarily FOLLOW THE EVENT, reasons recorded if otherwise.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-047", subject: S, topic: "v2", subtopic: "Return of plaint",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order VII Rule 10 CPC, the court may return the plaint to be presented to the proper court where it finds that it has no jurisdiction to entertain the suit. What is the effect of such a return on limitation?",
    options: [
      "The plaintiff loses the benefit of the original filing date",
      "Under Section 14 of the Limitation Act, the time during which the suit was prosecuted in the wrong court may be excluded in computing limitation for the fresh filing",
      "The suit automatically abates",
      "The plaintiff must obtain the leave of the High Court to file afresh"
    ],
    correctIndex: 1,
    explanation: "Order VII Rule 10 requires the court to return the plaint for presentation to the proper court at any stage of the suit. Section 14 of the Limitation Act, 1963 permits the exclusion of the time spent in prosecuting the suit in good faith in a court which, from defect of jurisdiction or other cause of a like nature, is unable to entertain it.",
    legalBasis: "Order VII Rule 10, Code of Civil Procedure, 1908; Section 14, Limitation Act, 1963.",
    wrongOptionExplanations: ["Section 14 of the Limitation Act may preserve the benefit.", "", "Return of the plaint does not cause abatement.", "No leave of the High Court is required."],
    flashpoint: "Order VII R.10 → RETURN OF PLAINT for want of jurisdiction; s.14 Limitation Act may exclude the time spent in the wrong court.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-048", subject: S, topic: "v5", subtopic: "Death of a plaintiff",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "One of two plaintiffs dies during the pendency of the suit, and the cause of action survives to the other plaintiff. The plaintiff's legal representatives are not brought on record. What is the effect on the suit?",
    options: [
      "The whole suit abates automatically",
      "The suit does not abate; under Order XXII Rule 2 the suit may proceed at the instance of the surviving plaintiff, provided the cause of action survives",
      "The suit is dismissed for non-prosecution",
      "The defendant must apply for abatement"
    ],
    correctIndex: 1,
    explanation: "Order XXII Rule 2 provides that where there are more plaintiffs than one and one of them dies, and the right to sue does not survive to the surviving plaintiff alone, the court, on an application, may cause the legal representative of the deceased plaintiff to be made a party. Where the cause of action survives to the surviving plaintiff, the suit may proceed at the instance of the survivor.",
    legalBasis: "Order XXII Rules 1, 2 and 3, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Automatic abatement of the whole suit is not the rule where the cause of action survives to the surviving plaintiff.", "", "Dismissal for non-prosecution requires a separate ground.", "The defendant does not apply for abatement; abatement follows from the omission to bring the legal representatives on record within time."],
    flashpoint: "Order XXII R.2 → where the right to sue survives to the surviving plaintiff, the SUIT DOES NOT ABATE.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-049", subject: S, topic: "v5", subtopic: "Survival of cause of action",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following actions does NOT survive to the legal representatives on the death of the plaintiff?",
    options: [
      "A suit for recovery of a debt",
      "A suit for damages for breach of contract",
      "A suit for damages for defamation of the plaintiff personally",
      "A suit for possession of immovable property"
    ],
    correctIndex: 2,
    explanation: "An action for damages for a personal wrong such as defamation, assault or false imprisonment does not survive on the death of the person affected, since the right is personal to that person. Actions for the recovery of a debt, damages for breach of contract, and possession of immovable property survive.",
    legalBasis: "Order XXII Rule 3, Code of Civil Procedure, 1908; maxim actio personalis moritur cum persona.",
    wrongOptionExplanations: ["A debt claim survives.", "A claim for breach of contract survives.", "", "A claim to immovable property survives."],
    flashpoint: "actio personalis moritur cum persona → a PERSONAL action (e.g. defamation) does NOT survive.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-050", subject: S, topic: "v6", subtopic: "Withdrawal — liberty",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order XXIII Rule 1(3) CPC, the court may grant permission to institute a fresh suit where:",
    options: [
      "The plaintiff finds the litigation inconvenient",
      "The suit must fail by reason of some formal defect, or where there are sufficient grounds for allowing the plaintiff to institute a fresh suit for the subject matter of the suit or part of the claim",
      "The defendant refuses to settle",
      "The plaintiff wishes to change his advocate"
    ],
    correctIndex: 1,
    explanation: "Order XXIII Rule 1(3) permits the court to grant permission to institute a fresh suit where the suit must fail by reason of some formal defect, or where there are sufficient grounds for allowing the plaintiff to institute a fresh suit for the subject matter of the suit or part of the claim.",
    legalBasis: "Order XXIII Rule 1(3), Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Inconvenience is not a ground.", "", "The defendant's refusal to settle is not a ground.", "A change of advocate is not a ground."],
    flashpoint: "Order XXIII R.1(3) → permission to file afresh on (i) a FORMAL DEFECT or (ii) SUFFICIENT GROUNDS.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-051", subject: S, topic: "v7", subtopic: "Execution — limitation",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Article 136 of the Limitation Act, 1963, the period of limitation for the execution of a decree or order of a civil court is:",
    options: ["Three years from the date of the decree", "Six years from the date of the decree", "Twelve years from the date when the decree becomes enforceable", "Twenty years from the date of the decree"],
    correctIndex: 2,
    explanation: "Article 136 of the Limitation Act, 1963 prescribes twelve years from the date when the decree or order becomes enforceable, or from the date of the default in making the payment directed by the decree.",
    legalBasis: "Article 136, Limitation Act, 1963; Section 36 and Order XXI, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Three years is the period for certain applications, not for execution generally.", "Six years is not the period under Article 136.", "", "Twenty years is not the period."],
    flashpoint: "Execution limitation → 12 YEARS from the date the decree becomes ENFORCEABLE (Art. 136, Limitation Act).",
    source: "STATUTE"
  });

  Q({
    id: "CPC-052", subject: S, topic: "v1", subtopic: "Res sub judice",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 10 CPC provides for a stay of a suit where the matter in issue is also directly and substantially in issue in a previously instituted suit between the same parties. Which of the following is a condition for the application of Section 10?",
    options: [
      "The previously instituted suit must be pending in a court of competent jurisdiction",
      "The previously instituted suit must be pending in a foreign court",
      "The previously instituted suit must have been dismissed",
      "The previously instituted suit must relate to a different cause of action"
    ],
    correctIndex: 0,
    explanation: "Section 10 applies where the matter in issue in the subsequent suit is also directly and substantially in issue in a previously instituted suit between the same parties, litigating under the same title, and the previously instituted suit is pending in a court competent to grant the relief claimed, or in a court beyond the limits of India established by the Central Government or a court of a foreign country with which the Central Government has extended the provisions of the section.",
    legalBasis: "Section 10, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "A foreign court's suit does not attract s.10 unless the section has been extended by the Central Government.", "A dismissed suit cannot support a stay under s.10.", "The matter in issue must be substantially the same, not different."],
    flashpoint: "s.10 RES SUB JUDICE → stay of the SUBSEQUENT suit; the previous suit must be in a COMPETENT COURT.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-053", subject: S, topic: "v9", subtopic: "First appeal — powers",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order XLI Rule 33 CPC, the appellate court has the power to:",
    options: [
      "Only confirm the decree of the lower court",
      "Pass any decree or make any order which ought to have been passed or made, and to make such further or other order as the case may require, even in favour of a party who has not appealed",
      "Only remand the case for fresh trial",
      "Only reduce the amount of the decree"
    ],
    correctIndex: 1,
    explanation: "Order XLI Rule 33 confers wide powers on the appellate court to pass any decree or make any order which ought to have been passed or made in the proceedings before it, and to make such further or other order as the case may require, notwithstanding that the appeal is as to part only of the decree. The power may be exercised in favour of a non-appealing party, though not to the prejudice of a respondent without notice.",
    legalBasis: "Order XLI Rule 33, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The power is far wider than confirmation.", "", "Remand is one of several powers under Order XLI Rule 23 and 23A.", "Reduction of the decree amount is one possibility among many."],
    flashpoint: "Order XLI R.33 → WIDE appellate powers; a decree may be passed IN FAVOUR OF A NON-APPEALING party.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-054", subject: S, topic: "v8", subtopic: "s.35A compensatory costs",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 35A CPC provides for:",
    options: [
      "Costs for causing delay",
      "Compensatory costs in respect of false or vexatious claims or defences, to be awarded where a claim or defence is false or vexatious and the party knew it to be so",
      "Costs in public interest litigation",
      "Costs of the execution proceedings only"
    ],
    correctIndex: 1,
    explanation: "Section 35A empowers the court, if satisfied that a claim or defence was false or vexatious to the knowledge of the party by whom it was made, to award compensatory costs in respect of such claim or defence, subject to the pecuniary limit prescribed by the section.",
    legalBasis: "Sections 35A and 35B, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["Costs for causing delay are dealt with in s.35B.", "", "There is no special provision for PIL costs in s.35A.", "Section 35A applies to claims and defences generally, not only to execution."],
    flashpoint: "s.35A → COMPENSATORY costs for FALSE OR VEXATIOUS claims/defences. s.35B → costs for DELAY.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-055", subject: S, topic: "v2", subtopic: "Pleadings — essentials",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Multi",
    question: "Which of the following are the fundamental rules of pleading under Order VI Rules 1 and 2 CPC?\nI. Pleadings shall contain a statement in a concise form of the material facts on which the party pleading relies for his claim or defence, but not the evidence by which they are to be proved.\nII. Pleadings shall, when necessary, be divided into paragraphs, numbered consecutively.\nIII. Pleadings must set out the evidence in full.\nIV. Pleadings must be signed by the party and verified in the manner prescribed by law.",
    options: ["I, II and IV only", "I, II, III and IV", "II and III only", "I and III only"],
    correctIndex: 0,
    explanation: "Order VI Rule 2 requires the pleading to contain a concise statement of the MATERIAL FACTS, but not the evidence by which they are to be proved. Order VI Rule 1 requires pleadings to be divided into paragraphs, numbered consecutively. Order VI Rule 15 requires verification. Statement III is wrong — evidence is not to be pleaded.",
    legalBasis: "Order VI Rules 1, 2 and 15, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["", "Statement III is wrong — the pleadings must state material facts, not evidence.", "Statement III is wrong and statements I and IV are correct.", "Statement III is wrong."],
    flashpoint: "Pleadings → MATERIAL FACTS only, NOT the evidence; numbered paragraphs; signed and VERIFIED.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-056", subject: S, topic: "v4", subtopic: "Setting aside ex parte decree — remedy",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: An ex parte decree may be set aside if the defendant satisfies the court that he was prevented by sufficient cause from appearing when the suit was called on for hearing. Under Order IX Rule 13 CPC the court must be satisfied that the summons was not duly served or that the defendant was prevented by sufficient cause from appearing.\nConclusion I: Both the grounds under Order IX Rule 13 are alternatives, and it is sufficient for the defendant to establish either.\nConclusion II: An ex parte decree can be set aside only by an application under Order IX Rule 13 and by no other means.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion I follows", "Only Conclusion II follows", "Neither Conclusion I nor II follows"],
    correctIndex: 1,
    explanation: "Conclusion I follows — the two grounds are alternative. Conclusion II does not follow: an ex parte decree may also be challenged by an appeal under s.96(2) where the defendant had appeared and had an opportunity, and the remedy is not confined to Order IX Rule 13.",
    legalBasis: "Order IX Rule 13 and Section 96(2), Code of Civil Procedure, 1908; G.P. Srivastava v. R.K. Raizada, (2000) 3 SCC 54.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "", "Conclusion II is wrong.", "Conclusion I follows."],
    flashpoint: "Order IX R.13 → the two grounds are ALTERNATIVE. An appeal under s.96(2) is also available in an appropriate case.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CPC-057", subject: S, topic: "v3", subtopic: "Addition of parties",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Order I Rule 10(2) CPC, the court may add or strike out the name of any party whose presence before the court may be necessary in order to enable the court effectually and completely to adjudicate upon and settle all the questions involved in the suit. Such an order may be made:",
    options: [
      "Only before the framing of issues",
      "Only with the consent of all the parties",
      "Either upon or without the application of any party, and on such terms as may appear to the court to be just, at any stage of the proceedings",
      "Only by the High Court"
    ],
    correctIndex: 2,
    explanation: "Order I Rule 10(2) empowers the court to act either on or without an application, at any stage of the proceedings, and on such terms as appear just, so as to enable it effectually and completely to adjudicate upon and settle all the questions involved in the suit. No plaintiff can be added without his consent where he is not a proper party.",
    legalBasis: "Order I Rule 10(2), Code of Civil Procedure, 1908; Anil Kumar Singh v. Shivnath Mishra, (1995) 3 SCC 147.",
    wrongOptionExplanations: ["The power may be exercised at any stage.", "Consent of all parties is not required.", "", "The power is exercised by the court before which the suit is pending."],
    flashpoint: "Order I R.10(2) → ADD or DELETE parties at ANY STAGE, with or without an application.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-058", subject: S, topic: "v1", subtopic: "Bar of suits — expression",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "A suit of a civil nature is barred where its cognizance is expressly or impliedly barred. Which of the following is an example of an implied bar?",
    options: [
      "A provision in a statute expressly stating that no suit shall lie in a civil court",
      "A statute creating a special tribunal with exclusive jurisdiction to decide the matters entrusted to it and providing a complete machinery for relief",
      "An order of a court refusing to entertain a suit",
      "An agreement between the parties not to sue"
    ],
    correctIndex: 1,
    explanation: "An express bar arises from a provision stating that no suit shall lie. An implied bar arises where a statute creates a special right or liability and provides a complete machinery for its determination, thereby excluding the jurisdiction of civil courts by necessary implication. An agreement not to sue does not oust the jurisdiction of the court.",
    legalBasis: "Section 9, Code of Civil Procedure, 1908; Dhulabhai v. State of M.P., AIR 1969 SC 78; Premier Automobiles Ltd. v. Kamlekar Shantaram Wadke, (1976) 1 SCC 496.",
    wrongOptionExplanations: ["That is an express bar.", "", "A court's refusal is not the source of the bar.", "Parties cannot by agreement confer or oust jurisdiction."],
    flashpoint: "Implied bar → a statute creating a special right with a COMPLETE MACHINERY of relief EXCLUDES the civil court's jurisdiction (Dhulabhai).",
    source: "CASE"
  });

  Q({
    id: "CPC-059", subject: S, topic: "v6", subtopic: "Compromise decree — challenge",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "A compromise decree has been recorded under Order XXIII Rule 3 CPC. On what ground may it be challenged?",
    options: [
      "On the merits of the original claim",
      "On the ground that the agreement or compromise was not lawful, or that it was not a voluntary compromise, or that it was obtained by fraud or collusion",
      "On the ground that the plaintiff did not like the terms later",
      "It cannot be challenged at all"
    ],
    correctIndex: 1,
    explanation: "A compromise decree is not appealable on the merits because the parties have consented. However, it may be challenged on the ground that the agreement was not lawful within the meaning of Order XXIII Rule 3, or that the compromise was obtained by fraud, misrepresentation or collusion, or was not a voluntary act of the parties.",
    legalBasis: "Order XXIII Rule 3 and Rule 3A, Code of Civil Procedure, 1908.",
    wrongOptionExplanations: ["The consent precludes an appeal on the merits.", "", "A subsequent change of mind is not a ground.", "The decree is not immune from challenge on the specified grounds."],
    flashpoint: "Compromise decree → not appealable on the merits, but challengeable for UNLAWFULNESS, FRAUD, COLLUSION or absence of volition.",
    source: "STATUTE"
  });

  Q({
    id: "CPC-060", subject: S, topic: "v8", subtopic: "Code as procedural law",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly describes the nature of the Code of Civil Procedure, 1908?",
    options: [
      "Substantive law, so that a defect in procedure always destroys the substantive right",
      "Procedural law, whose provisions are generally construed liberally, and a breach of procedure does not vitiate a decision unless it has occasioned a failure of justice or prejudice",
      "Criminal law",
      "Merely advisory, with no binding force"
    ],
    correctIndex: 1,
    explanation: "The Code is procedural law. The general approach is that procedural provisions are designed to advance justice, so that irregularities in procedure do not vitiate the proceedings unless they occasion a failure of justice or cause prejudice to a party. Section 99 and s.148 exemplify this approach, and Sangram Singh v. Election Tribunal explains it.",
    legalBasis: "Preamble and Sections 99 and 148, Code of Civil Procedure, 1908; Sangram Singh v. Election Tribunal, AIR 1955 SC 425.",
    wrongOptionExplanations: ["The Code is procedural, not substantive.", "", "The Code is civil, not criminal.", "The Code is binding law, not advisory."],
    flashpoint: "CPC → PROCEDURAL law; a breach does not vitiate unless it occasions a FAILURE OF JUSTICE (s.99).",
    source: "CASE"
  });
})();
