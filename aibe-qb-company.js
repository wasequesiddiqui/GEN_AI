/* ============================================================================
 * AIBE XXI — Question Bank: Company Law
 * Weightage: 2 / 100. 12 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "company";

  Q({
    id: "COM-001", subject: S, topic: "m1", subtopic: "Fast-track merger",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Section 233 of the Companies Act, 2013 deals with the 'fast track merger'. What is the prescribed time duration and the concerned authority for approval?",
    options: ["60-90 days, the Regional Director (Central Government)", "60-90 days, NCLT", "45-90 days, NCLAT", "One year, the Regional Director"],
    correctIndex: 0,
    explanation: "Section 233 provides a fast-track route for the merger or amalgamation of certain classes of companies (small companies; holding and wholly-owned subsidiary companies; and other prescribed classes) with the approval of the Central Government through the Regional Director. The prescribed timeline for the process is sixty to ninety days. Where a member or creditor objects, the matter is referred to the NCLT.",
    legalBasis: "Section 233 and the Companies (Compromises, Arrangements and Amalgamations) Rules, 2016, Companies Act, 2013.",
    wrongOptionExplanations: [
      "",
      "The NCLT is the approving authority under the ordinary route (ss.230-232), not under the fast-track route.",
      "The approving authority is not the NCLAT, and the timeline is 60-90 days.",
      "The timeline is not one year."
    ],
    flashpoint: "Companies Act s.233 fast-track merger → 60-90 DAYS, approved by the REGIONAL DIRECTOR. Ordinary merger (ss.230-232) → NCLT.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "COM-002", subject: S, topic: "m3", subtopic: "Class action",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Companies Act, 2013, a class action on behalf of members or depositors may be filed before the National Company Law Tribunal under:",
    options: ["Section 241", "Section 242", "Section 244", "Section 245"],
    correctIndex: 3,
    explanation: "Section 245 provides for class actions: a prescribed number of members or depositors, or any association or body of members or depositors, may file an application before the NCLT seeking relief against the company, its directors, auditors, advisers and others for acts that are prejudicial to the interests of the members or depositors. Section 241 provides the remedy for oppression and mismanagement.",
    legalBasis: "Sections 241, 242, 244 and 245, Companies Act, 2013.",
    wrongOptionExplanations: ["Section 241 is the oppression and mismanagement provision.", "Section 242 sets out the powers of the NCLT on a s.241 application.", "Section 244 prescribes the right to apply under ss.241 and 242.", ""],
    flashpoint: "Companies Act s.245 → CLASS ACTION by members or depositors before the NCLT. s.241 → OPPRESSION AND MISMANAGEMENT.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "COM-003", subject: S, topic: "m2", subtopic: "Oppression and mismanagement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 241 of the Companies Act, 2013, an application to the National Company Law Tribunal may be made where the affairs of the company are being conducted in a manner:",
    options: [
      "Prejudicial to public interest or oppressive to any member or members, or where a material change has taken place in the management or control of the company",
      "That results in a decrease in the company's turnover",
      "That results in a change in the company's auditors",
      "That results in diversification of the company's business"
    ],
    correctIndex: 0,
    explanation: "Section 241(1) permits a member or members to apply to the NCLT where the affairs of the company have been or are being conducted in a manner prejudicial to public interest or in a manner prejudicial or oppressive to them or any other member or members, or where a material change has taken place in the management or control of the company, and the same is likely to be prejudicial to the interests of the company or its members.",
    legalBasis: "Sections 241 and 242, Companies Act, 2013.",
    wrongOptionExplanations: ["", "A fall in turnover is not a ground under s.241.", "A change of auditors is not a ground under s.241.", "Diversification is not a ground under s.241."],
    flashpoint: "s.241 → OPPRESSION, PREJUDICE TO PUBLIC INTEREST, or a MATERIAL CHANGE in management/control.",
    source: "STATUTE"
  });

  Q({
    id: "COM-004", subject: S, topic: "m2", subtopic: "Reliefs by NCLT",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 242 of the Companies Act, 2013, what reliefs may the National Company Law Tribunal grant on an application under Section 241?",
    options: [
      "Only a direction to wind up the company",
      "Only compensation to the petitioner",
      "Only a declaratory order",
      "Regulation of the conduct of the affairs of the company in future, purchase of the shares or interests of any member by other members or by the company, termination or modification of agreements, removal of the managing director or any director, recovery of undue gain with interest, and any other relief it deems fit"
    ],
    correctIndex: 3,
    explanation: "Section 242(2) sets out a wide range of reliefs the NCLT may grant, including the regulation of the conduct of the company's affairs in future; the purchase of the shares or interests of any member by other members or by the company; the termination, setting aside or modification of any agreement; the removal of the managing director, manager or any other director; the recovery of any undue gain with interest; and any other relief it deems fit. The court may also order the winding up of the company if it is of the opinion that it is just and equitable.",
    legalBasis: "Section 242, Companies Act, 2013.",
    wrongOptionExplanations: [
      "Winding up is one possible relief among many.",
      "Compensation is one relief among many.",
      "The reliefs are far wider than a declaratory order.",
      ""
    ],
    flashpoint: "s.242 → wide reliefs including REGULATION of affairs, PURCHASE of shares, MODIFICATION of agreements, REMOVAL of directors, RECOVERY of undue gain.",
    source: "STATUTE"
  });

  Q({
    id: "COM-005", subject: S, topic: "m2", subtopic: "Right to apply",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 244 of the Companies Act, 2013, the right to apply to the National Company Law Tribunal for relief in cases of oppression and mismanagement requires at least:",
    options: [
      "Fifty members in every case",
      "One hundred members or one-tenth of the total number of members, whichever is less, or a member or members holding not less than one-tenth of the issued share capital (subject to the proviso permitting a waiver by the NCLT); and in the case of depositors, one hundred depositors or one-tenth of the total number of depositors, whichever is less",
      "Two hundred members in every case",
      "One member only"
    ],
    correctIndex: 1,
    explanation: "Section 244 prescribes the threshold: not less than one hundred members or one-tenth of the total number of members, whichever is less, or a member or members holding not less than one-tenth of the issued share capital. For depositors, the threshold is one hundred depositors or one-tenth of the total number of depositors, whichever is less. The NCLT may waive any of the requirements on an application to avoid oppression or mismanagement.",
    legalBasis: "Section 244, Companies Act, 2013.",
    wrongOptionExplanations: [
      "Fifty members is not the statutory threshold.",
      "",
      "Two hundred members is not the statutory threshold.",
      "A single member cannot ordinarily apply; the threshold or a waiver is required."
    ],
    flashpoint: "s.244 threshold → 100 members OR 1/10th of members (whichever is LESS) / 1/10th of the issued share capital; waiver possible by the NCLT.",
    source: "STATUTE"
  });

  Q({
    id: "COM-006", subject: S, topic: "m4", subtopic: "Separate legal personality",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The principle that a company is a legal person distinct from its members was established in:",
    options: [
      "Lee v. Lee's Air Farming Ltd., (1961) AC 12",
      "Foss v. Harbottle, (1843) 2 Hare 461",
      "Salomon v. Salomon & Co. Ltd., (1897) AC 22",
      "Macaulay v. Federal Supply Co., (1928) 3 OWN 39"
    ],
    correctIndex: 2,
    explanation: "Salomon v. Salomon & Co. Ltd. established that on incorporation a company becomes a legal person distinct from its subscribers, and that the company is not the agent or trustee of its members. Lee v. Lee's Air Farming applied the principle in holding that a director could also be an employee of the company.",
    legalBasis: "Salomon v. Salomon & Co. Ltd., (1897) AC 22; Lee v. Lee's Air Farming Ltd., (1961) AC 12; Section 9, Companies Act, 2013.",
    wrongOptionExplanations: [
      "Lee v. Lee's Air Farming applied the Salomon principle to the employment relationship.",
      "Foss v. Harbottle laid down the rule against derivative actions (the proper plaintiff rule).",
      "",
      "Macaulay v. Federal Supply concerned the nationality of a company."
    ],
    flashpoint: "Separate legal personality → SALOMON v. SALOMON & CO. LTD. (1897) AC 22.",
    source: "CASE"
  });

  Q({
    id: "COM-007", subject: S, topic: "m4", subtopic: "Lifting the corporate veil",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is a recognised circumstance in which the courts will lift the corporate veil?",
    options: [
      "Where the company is a sham or is being used to evade legal obligations, where the corporate form is used to defraud creditors or evade taxes, where the company is a mere agent or façade of the shareholders, and where a statute expressly requires the lifting of the veil",
      "Whenever the company has suffered a loss",
      "Only when the company is wound up",
      "Only when the company has more than one director"
    ],
    correctIndex: 0,
    explanation: "The corporate veil may be lifted where the corporate form is used to evade legal obligations, to defraud creditors or revenue, to achieve an unlawful object, or where the company is merely an agent or a façade of the shareholders, or where a statute or the court requires it (for example, in cases of fraudulent trading or misstatement in the prospectus).",
    legalBasis: "Salomon v. Salomon & Co. Ltd., (1897) AC 22; Sections 339, 464 and other provisions, Companies Act, 2013; Life Insurance Corporation of India v. Escorts Ltd., (1986) 1 SCC 264.",
    wrongOptionExplanations: ["", "A loss alone is not a ground.", "Winding up is not a precondition to lifting the veil.", "The number of directors is irrelevant."],
    flashpoint: "Lifting the veil → SHAM/FAÇADE, EVASION of legal obligations, FRAUD, AGENCY, or a STATUTORY requirement.",
    source: "STATUTE"
  });

  Q({
    id: "COM-008", subject: S, topic: "m5", subtopic: "IBC moratorium",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Insolvency and Bankruptcy Code, 2016, the declaration of a moratorium by the adjudicating authority on the admission of an application has the effect of:",
    options: [
      "Transferring the assets of the corporate debtor to the creditors",
      "Dissolving the corporate debtor automatically",
      "Extinguishing all claims against the corporate debtor",
      "Prohibiting the institution of suits or continuation of pending suits or proceedings against the corporate debtor, including execution of any judgment or decree, and prohibiting the transfer or disposal of its assets, among other things"
    ],
    correctIndex: 3,
    explanation: "Section 14 of the IBC provides that on the insolvency commencement date the adjudicating authority shall declare a moratorium prohibiting the institution of suits or continuation of pending suits or proceedings against the corporate debtor, including the execution of any judgment, decree or order, and prohibiting the transfer, encumbrance, alienation or disposal of any of the assets of the corporate debtor, the termination of supply of essential goods or services, and the foreclosure or enforcement of security interest. The moratorium does not extinguish claims; it suspends their enforcement during the process.",
    legalBasis: "Section 14, Insolvency and Bankruptcy Code, 2016.",
    wrongOptionExplanations: [
      "The moratorium does not transfer assets to creditors.",
      "The corporate debtor is not automatically dissolved on the declaration of a moratorium.",
      "The moratorium suspends enforcement; it does not extinguish claims.",
      ""
    ],
    flashpoint: "IBC s.14 MORATORIUM → no suits/proceedings, no execution, no transfer of assets, no termination of essential supplies.",
    source: "STATUTE"
  });

  Q({
    id: "COM-009", subject: S, topic: "m1", subtopic: "Scheme of compromise and arrangement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 230 of the Companies Act, 2013, a scheme of compromise or arrangement between a company and its creditors or members requires:",
    options: [
      "The sanction of the National Company Law Tribunal, together with the approval of a majority of persons representing three-fourths in value of the creditors or members present and voting",
      "No approval at all",
      "Only the approval of the board of directors",
      "Only the approval of the Registrar of Companies"
    ],
    correctIndex: 0,
    explanation: "Section 230 requires an application to the NCLT for an order calling meetings of the creditors or members. If a majority representing three-fourths in value of the creditors or members present and voting agree to the compromise or arrangement, and the NCLT sanctions it, the scheme becomes binding. A separate scheme for the amalgamation of two or more companies is dealt with in s.232.",
    legalBasis: "Sections 230, 231 and 232, Companies Act, 2013.",
    wrongOptionExplanations: [
      "",
      "The scheme requires approval and sanction.",
      "Board approval alone is insufficient.",
      "The Registrar's approval is not the requirement."
    ],
    flashpoint: "s.230 → approval by a MAJORITY representing THREE-FOURTHS IN VALUE present and voting + NCLT SANCTION.",
    source: "STATUTE"
  });

  Q({
    id: "COM-010", subject: S, topic: "m5", subtopic: "Winding up",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Companies Act, 2013, the National Company Law Tribunal may order the winding up of a company on which of the following grounds?",
    options: [
      "Only on the ground that the company has not commenced business within a year of incorporation",
      "Only on the ground of inability to pay debts",
      "On the ground that the company has by special resolution resolved that it be wound up by the Tribunal; that default has been made in filing financial statements or annual returns for the immediately preceding five financial years; that the company has failed to pay its debts; that the company has acted against the integrity and sovereignty of India; or that it is just and equitable to wind up the company",
      "Only at the instance of the Registrar of Companies"
    ],
    correctIndex: 2,
    explanation: "Section 271 lists the grounds for winding up by the Tribunal, including the passing of a special resolution; default in filing financial statements or annual returns for the immediately preceding five consecutive financial years; failure to pay debts; action against the integrity and sovereignty of India; failure to submit an annual report or the statutory report; and any other ground on which it is just and equitable that the company should be wound up. The petition may be presented by the company, a creditor, a contributory, the Registrar, a person authorised by the Central or State Government, or a combination of these.",
    legalBasis: "Sections 271-273, Companies Act, 2013.",
    wrongOptionExplanations: [
      "Non-commencement within a year is one possible ground but not the only one.",
      "Failure to pay debts is one ground among several.",
      "",
      "The Registrar is one of several possible petitioners."
    ],
    flashpoint: "s.271 grounds → SPECIAL RESOLUTION | default in FILING (5 years) | FAILURE TO PAY DEBTS | acts against sovereignty | JUST AND EQUITABLE.",
    source: "STATUTE"
  });

  Q({
    id: "COM-011", subject: S, topic: "m4", subtopic: "Directors' duties",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 166 of the Companies Act, 2013, a director of a company shall:",
    options: [
      "Act only in the interests of the majority shareholders",
      "Act in accordance with the articles of the company, act in good faith in order to promote the objects of the company for the benefit of its members as a whole, exercise his duties with due and reasonable care, skill and diligence, not involve himself in a situation in which he has a direct or indirect conflict of interest, and not make any undue gain or advantage",
      "Act in accordance with the directions of the promoters",
      "Act in accordance with the directions of the auditors"
    ],
    correctIndex: 1,
    explanation: "Section 166 enumerates the duties of directors: to act in accordance with the articles; to act in good faith in order to promote the objects of the company for the benefit of its members as a whole, and in the best interests of the company, its employees, the shareholders, the community and for the protection of the environment; to exercise duties with due and reasonable care, skill and diligence; not to involve himself in a situation in which he has a direct or indirect conflict of interest; not to achieve or attempt to achieve any undue gain or advantage; and not to assign his office.",
    legalBasis: "Section 166, Companies Act, 2013.",
    wrongOptionExplanations: [
      "The duty is to the company and its members as a whole, not to the majority shareholders alone.",
      "",
      "Directors act in the interests of the company, not at the direction of the promoters.",
      "Directors do not act at the direction of the auditors."
    ],
    flashpoint: "s.166 directors' duties → act per ARTICLES, GOOD FAITH for the benefit of MEMBERS AS A WHOLE, CARE/SKILL/DILIGENCE, NO CONFLICT, NO UNDUE GAIN.",
    source: "STATUTE"
  });

  Q({
    id: "COM-012", subject: S, topic: "m1", subtopic: "Merger of a foreign company",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Companies Act, 2013, the merger or amalgamation of a foreign company with an Indian company, and vice versa, is provided for in:",
    options: ["Section 234", "Section 232", "Section 233", "Section 230"],
    correctIndex: 0,
    explanation: "Section 234 provides for the merger or amalgamation of a foreign company with an Indian company and vice versa, subject to the provisions relating to the valuation of assets and liabilities, the payment of consideration to the shareholders of the transferor company, and compliance with the rules made under the Act, with the prior approval of the Reserve Bank of India where required.",
    legalBasis: "Section 234 and the Companies (Compromises, Arrangements and Amalgamations) Rules, 2016, Companies Act, 2013.",
    wrongOptionExplanations: [
      "",
      "Section 232 deals with the amalgamation of two or more companies.",
      "Section 233 provides the fast-track merger route.",
      "Section 230 deals with the power to compromise or make arrangements with creditors and members."
    ],
    flashpoint: "Companies Act s.234 → MERGER OF A FOREIGN COMPANY with an Indian company (and vice versa).",
    source: "STATUTE"
  });
})();
