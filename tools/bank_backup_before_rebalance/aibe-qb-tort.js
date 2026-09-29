/* ============================================================================
 * AIBE XXI — Question Bank: Law of Tort, Motor Vehicles Act & Consumer
 * Protection. Weightage: 5 / 100. 30 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "tort";

  /* ------------------------------------------------------- eggshell skull */
  Q({
    id: "TOR-001", subject: S, topic: "o2", subtopic: "Eggshell skull — principle",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The 'eggshell skull' rule in the law of torts provides that:",
    options: [
      "A tortfeasor is liable only for the harm that an ordinary person would have suffered",
      "A tortfeasor must take the victim as he finds him, and is liable for the full extent of the harm caused, even if the victim's peculiar susceptibility made the consequence more serious than would ordinarily have been the case",
      "A tortfeasor is never liable for nervous shock",
      "A tortfeasor is liable only if the victim is free from any pre-existing condition"
    ],
    correctIndex: 1,
    explanation: "The eggshell skull (thin skull) rule requires the defendant to take the plaintiff as he finds him. Where the injury inflicted is of a foreseeable kind, the defendant is liable for its full extent, even if a pre-existing physical or psychological condition made the consequences far more serious than would have been expected in an ordinary person.",
    legalBasis: "Dulieu v. White, (1901) 2 KB 669; Smith v. Leech Brain & Co. Ltd., (1962) 2 QB 405; Robinson v. Post Office, (1974) 1 WLR 1176.",
    wrongOptionExplanations: ["That is the opposite of the rule.", "", "The rule applies to nervous shock as well, subject to foreseeability of that kind of harm.", "A pre-existing condition does not exonerate the defendant; it may increase liability."],
    flashpoint: "EGGSHELL SKULL → take your victim AS YOU FIND HIM; full liability for the EXTENT of a foreseeable kind of harm.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-002", subject: S, topic: "o2", subtopic: "Eggshell skull — distinguishing",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is NOT an example of the eggshell skull rule as per the law of torts?",
    options: [
      "A boy kicked another from across the aisle in the classroom; it turned out that the victim had an unknown pre-existing condition that was irritated and resulted in his entirely losing the use of his leg",
      "A man had a heart attack and died after being bruised in the chest during a rear-end car accident",
      "'A' underwent an appendectomy in a hospital; despite the surgery going as planned, she continued to experience abdominal pain; it was later discovered that a needle had been left inside her abdomen, leading to further surgeries and prolonged suffering",
      "A person with a pre-existing weak spine suffered a fracture after a minor fall caused by another's negligence"
    ],
    correctIndex: 2,
    explanation: "The third illustration describes ordinary negligence causing a direct injury — a surgical needle left inside a patient's abdomen. There is no pre-existing peculiar susceptibility of the victim that aggravated the consequences of an otherwise minor or foreseeable injury, which is the essence of the eggshell skull rule. The other illustrations all involve a victim with a special susceptibility that the rule addresses.",
    legalBasis: "Dulieu v. White, (1901) 2 KB 669; Smith v. Leech Brain & Co. Ltd., (1962) 2 QB 405; Robinson v. Post Office, (1974) 1 WLR 1176.",
    wrongOptionExplanations: ["This is a classic thin-skull illustration — an unknown pre-existing condition aggravated by a minor blow.", "This is a thin-skull illustration — a pre-existing heart condition aggravated by a chest injury.", "", "This is a thin-skull illustration — a pre-existing spinal weakness aggravated by a minor impact."],
    flashpoint: "The eggshell skull rule requires a PRE-EXISTING PECULIAR SUSCEPTIBILITY. A case of direct surgical negligence is NOT an eggshell-skull case.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TOR-003", subject: S, topic: "o2", subtopic: "Remoteness vs extent",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The rule in Overseas Tankship (U.K.) Ltd. v. Morts Dock & Engineering Co. Ltd. (The Wagon Mound) establishes that:",
    options: [
      "The extent of the damage need not be foreseeable; only the kind of damage must be foreseeable",
      "Both the kind and the extent of the damage must be foreseeable",
      "Neither the kind nor the extent of the damage need be foreseeable",
      "A defendant is liable only for damage caused directly by physical impact"
    ],
    correctIndex: 0,
    explanation: "The Wagon Mound established that a defendant is liable only for damage of a kind that was reasonably foreseeable. The extent of the damage is immaterial — this is the interface between remoteness of damage and the eggshell skull rule, which makes the defendant liable for the unforeseeable extent of a foreseeable kind of harm.",
    legalBasis: "Overseas Tankship (U.K.) Ltd. v. Morts Dock & Engineering Co. Ltd. (The Wagon Mound), (1961) AC 388; Smith v. Leech Brain & Co. Ltd., (1962) 2 QB 405.",
    wrongOptionExplanations: ["", "Only the KIND of damage must be foreseeable.", "Some foreseeability of the kind of damage is required.", "Liability is not confined to physical impact."],
    flashpoint: "THE WAGON MOUND (1961) AC 388 → the KIND of damage must be foreseeable; the EXTENT need not be.",
    source: "CASE"
  });

  Q({
    id: "TOR-004", subject: S, topic: "o1", subtopic: "Res ipsa loquitur",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "'Res ipsa loquitur' applies where:",
    options: [
      "The plaintiff has direct evidence of the defendant's negligence",
      "The thing causing the injury was under the exclusive control of the defendant and the accident is of a kind that does not ordinarily occur without negligence, so that the accident itself raises an inference of negligence and the burden shifts to the defendant",
      "The defendant admits negligence",
      "The plaintiff and the defendant are equally negligent"
    ],
    correctIndex: 1,
    explanation: "Res ipsa loquitur applies where the instrumentality causing the injury was under the exclusive control of the defendant and the accident is of a kind that does not ordinarily occur in the absence of negligence. The accident itself then raises an inference of negligence and the evidential burden shifts to the defendant to explain.",
    legalBasis: "Municipal Corporation of Delhi v. Subhagwanti, AIR 1966 SC 1750; Syad Akbar v. State of Karnataka, (1980) 1 SCC 30.",
    wrongOptionExplanations: ["The maxim applies precisely where there is no direct evidence of negligence.", "", "An admission of negligence would make the maxim unnecessary.", "Equal negligence relates to contributory negligence."],
    flashpoint: "RES IPSA LOQUITUR → EXCLUSIVE CONTROL of the thing + an accident that does not ordinarily happen without negligence → the accident speaks for itself.",
    source: "CASE"
  });

  Q({
    id: "TOR-005", subject: S, topic: "o3", subtopic: "Strict vs absolute liability",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly distinguishes strict liability from absolute liability in Indian tort law?",
    options: [
      "Strict liability under Rylands v. Fletcher is subject to recognised exceptions, whereas absolute liability as laid down in M.C. Mehta v. Union of India admits of no exceptions and no defences",
      "Absolute liability admits of exceptions whereas strict liability does not",
      "Both are the same concept",
      "Strict liability applies only to immovable property, and absolute liability only to movable property"
    ],
    correctIndex: 0,
    explanation: "Rylands v. Fletcher imposes strict liability for the escape of a dangerous thing brought onto land, subject to recognised exceptions such as act of God, act of a stranger, consent of the plaintiff and statutory authority. In M.C. Mehta v. Union of India (the Oleum Gas Leak case) the Supreme Court held that an enterprise engaged in a hazardous or inherently dangerous activity is absolutely liable, and that the rule in Rylands v. Fletcher, with its exceptions, is inapplicable to such enterprises.",
    legalBasis: "Rylands v. Fletcher, (1868) LR 3 HL 330; M.C. Mehta v. Union of India, (1987) 1 SCC 395.",
    wrongOptionExplanations: ["", "The description is the reverse of the correct position.", "The two are distinct.", "Neither concept is confined by the nature of the property."],
    flashpoint: "STRICT liability (Rylands v. Fletcher) → WITH exceptions. ABSOLUTE liability (M.C. Mehta) → NO exceptions.",
    source: "CASE"
  });

  Q({
    id: "TOR-006", subject: S, topic: "o4", subtopic: "Vicarious liability",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A master is vicariously liable for the torts of his servant committed:",
    options: [
      "At any time, whether or not connected with the employment",
      "In the course of the servant's employment, and the act must be either authorised by the master or a wrongful and unauthorised mode of doing an authorised act",
      "Only when the master expressly authorised the tortious act",
      "Only when the servant is acting outside the scope of employment"
    ],
    correctIndex: 1,
    explanation: "Vicarious liability arises where the servant commits a tort in the course of his employment. The act complained of must be either authorised by the master, or a wrongful and unauthorised mode of doing some act authorised by the master. The 'course of employment' test, and the distinction between an employee and an independent contractor, are central to this area of the law.",
    legalBasis: "General principles of tort; Century Insurance Co. Ltd. v. Northern Ireland Road Transport Board, (1942) AC 509.",
    wrongOptionExplanations: ["Liability does not extend to acts unconnected with the employment.", "", "Express authorisation of the tortious act is not required.", "Acts outside the scope of employment do not ordinarily attract vicarious liability."],
    flashpoint: "Vicarious liability → the tort must be committed IN THE COURSE OF EMPLOYMENT (authorised act or an unauthorised mode of doing it).",
    source: "CASE"
  });

  Q({
    id: "TOR-007", subject: S, topic: "o5", subtopic: "Libel and slander",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly distinguishes libel from slander?",
    options: [
      "Libel is defamation in a permanent form, such as writing or printing, and is actionable per se; slander is defamation in a transient form, such as spoken words, and is actionable only on proof of special damage except in the recognised categories",
      "Libel is actionable only on proof of special damage, while slander is actionable per se",
      "Libel relates to the dead and slander to the living",
      "There is no distinction between the two in Indian law"
    ],
    correctIndex: 0,
    explanation: "Libel is defamation in a permanent, visible form — writing, printing, effigy, film. It is actionable per se, without proof of special damage. Slander is defamation in a transient form, such as spoken words or gestures. It is actionable only on proof of special damage, except in the recognised categories such as imputations of a criminal offence, of a contagious disease, of unchastity in a woman, or of words calculated to disparage a person in his office, profession, trade or business.",
    legalBasis: "General principles of tort; Sections 499 and 500, Indian Penal Code, 1860 (for the criminal offence).",
    wrongOptionExplanations: ["", "The description is the reverse of the correct position.", "Defamation of the dead is not actionable in tort.", "The distinction is recognised in Indian law."],
    flashpoint: "LIBEL → permanent form, actionable PER SE. SLANDER → transient form, requires SPECIAL DAMAGE unless within the recognised categories.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-008", subject: S, topic: "o8", subtopic: "Contributory negligence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The defence of contributory negligence succeeds where:",
    options: [
      "The plaintiff was also negligent and that negligence contributed to the damage suffered by him",
      "The plaintiff's negligence was the sole cause of the damage",
      "The plaintiff was aware of the risk but voluntarily accepted it",
      "The defendant acted under statutory authority"
    ],
    correctIndex: 0,
    explanation: "Contributory negligence is a defence where the plaintiff's own negligence contributed to the damage. Under the Law Reform (Contributory Negligence) Act, 1945 in England and the corresponding jurisprudence in India, the plaintiff's damages are reduced to the extent of his share of responsibility. Where the plaintiff's negligence is the sole cause, the position may be one of no negligence on the defendant's part; and where the plaintiff voluntarily accepts the risk, the defence is volenti non fit injuria.",
    legalBasis: "General principles of tort; Law Reform (Contributory Negligence) Act, 1945 (English); Motor Vehicles Act, 1988 (composite negligence in motor accident claims).",
    wrongOptionExplanations: ["", "If the plaintiff's negligence is the sole cause, the defendant may not be liable at all rather than the damages being apportioned.", "Voluntary acceptance of risk is the defence of volenti non fit injuria.", "Statutory authority is a separate defence."],
    flashpoint: "CONTRIBUTORY NEGLIGENCE → the plaintiff's own negligence contributed to the damage → damages REDUCED. VOLENTI → the plaintiff voluntarily accepted the risk.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-009", subject: S, topic: "o5", subtopic: "Nuisance",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly distinguishes private nuisance from public nuisance?",
    options: [
      "Private nuisance is an unlawful interference with a person's use or enjoyment of land, or of some right over or in connection with it; public nuisance is an unlawful act or omission that causes common injury, danger or annoyance to the public or to the people in general who dwell or occupy property in the vicinity",
      "Private nuisance affects the public at large, while public nuisance affects an individual",
      "Both are identical concepts",
      "Public nuisance is actionable only by a suit for damages"
    ],
    correctIndex: 0,
    explanation: "Private nuisance is an unlawful interference with a person's use or enjoyment of land. Public nuisance is an unlawful act or omission that causes common injury, danger or annoyance to the public or to the people in general who dwell or occupy property in the vicinity. A public nuisance is generally a crime and is abatable under s.133 and s.144 of the CrPC; a private individual may sue in tort only on proof of special damage.",
    legalBasis: "General principles of tort; Sections 133, 143, 144, 268 and 290, Indian Penal Code, 1860 and CrPC, 1973.",
    wrongOptionExplanations: ["", "The description is the reverse of the correct position.", "The two are distinct.", "A public nuisance is not actionable by a private individual without proof of special damage, and is generally a crime."],
    flashpoint: "PRIVATE nuisance → interference with the USE OR ENJOYMENT OF LAND. PUBLIC nuisance → injury to the PUBLIC at large; private action requires SPECIAL DAMAGE.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------------ MV Act */
  Q({
    id: "TOR-010", subject: S, topic: "o6", subtopic: "Pollution Under Control certificate",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Motor Vehicles Act, 1988 and the Central Motor Vehicles Rules, 1989, a mandatory Pollution Under Control (PUC) certificate is provided for. Which of the following correctly identifies the relevant source?",
    options: [
      "Section 120(3) of the Motor Vehicles Act, 1988 and Rules 122 and 123 of the Central Motor Vehicles Rules, 1989",
      "Section 190(2) of the Motor Vehicles Act, 1988 and Rules 115 and 116 of the Central Motor Vehicles Rules, 1989",
      "Section 160(1) of the Motor Vehicles Act, 1988 and Rules 109 and 110 of the Central Motor Vehicles Rules, 1989",
      "Section 177(3) of the Motor Vehicles Act, 1988 and Rules 117 and 118 of the Central Motor Vehicles Rules, 1989"
    ],
    correctIndex: 1,
    explanation: "The requirement of a Pollution Under Control certificate is provided for by s.190(2) of the Motor Vehicles Act, 1988, read with Rules 115 and 116 of the Central Motor Vehicles Rules, 1989. Section 190(2) provides the penalty for driving a motor vehicle in contravention of the emission standards and the PUC requirements. Note that the 2019 Amendment renumbered several penalties, so the section number should be verified against the current Bare Act.",
    legalBasis: "Sections 110, 190 and 191, Motor Vehicles Act, 1988; Rules 115, 116, 122 and 123, Central Motor Vehicles Rules, 1989.",
    wrongOptionExplanations: ["Section 120(3) does not deal with the PUC certificate.", "", "Section 160(1) concerns the power to demand information and documents.", "Section 177(3) provides the general penalty for the contravention of the Act and rules."],
    flashpoint: "PUC certificate → MOTOR VEHICLES ACT 1988 s.190(2) + CENTRAL MOTOR VEHICLES RULES 1989 rr.115-116. (Verify the numbering against the current Bare Act after the 2019 Amendment.)",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TOR-011", subject: S, topic: "o6", subtopic: "High Security Registration Plates",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The mandatory pre-fitment of High Security Registration Plates (HSRP) for all new vehicles came into effect in which year, following the amendment of the Central Motor Vehicles Rules?",
    options: ["2018", "2019", "2023", "2024"],
    correctIndex: 1,
    explanation: "The Central Motor Vehicles (Fourteenth Amendment) Rules, 2018 mandated the pre-fitment of High Security Registration Plates, and compliance for all new vehicles was required with effect from 1 April 2019. The requirement is enforced under the Motor Vehicles Act, 1988 and the Central Motor Vehicles Rules, 1989.",
    legalBasis: "Motor Vehicles Act, 1988; Central Motor Vehicles (Fourteenth Amendment) Rules, 2018 (compliance for new vehicles from 1 April 2019).",
    wrongOptionExplanations: ["2018 is the year of the amendment, not the year from which compliance was enforced.", "", "2023 is not the relevant year.", "2024 is the year in which the three new criminal laws came into force, not the HSRP year."],
    flashpoint: "HSRP pre-fitment for all new vehicles → mandatory with effect from 1 APRIL 2019.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TOR-012", subject: S, topic: "o6", subtopic: "Compensation — multiplier method",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The multiplier method for the computation of compensation in fatal motor accident cases was laid down in:",
    options: [
      "Sarla Verma v. Delhi Transport Corporation, (2009) 6 SCC 121",
      "National Insurance Co. Ltd. v. Pranay Sethi, (2017) 16 SCC 680",
      "Mukund Dewangan v. Oriental Insurance Co. Ltd., (2017) 14 SCC 663",
      "Kerala State Road Transport Corporation v. Susamma Thomas, (1994) 2 SCC 176"
    ],
    correctIndex: 0,
    explanation: "Sarla Verma v. Delhi Transport Corporation laid down the multiplier method, prescribing the deduction for personal expenses and the selection of the multiplier by reference to the age of the deceased. National Insurance Co. Ltd. v. Pranay Sethi subsequently consolidated the principles on future prospects, the multiplier and conventional heads, and modified Sarla Verma in certain respects.",
    legalBasis: "Motor Vehicles Act, 1988, ss.166 and 168; Sarla Verma v. Delhi Transport Corporation, (2009) 6 SCC 121; National Insurance Co. Ltd. v. Pranay Sethi, (2017) 16 SCC 680.",
    wrongOptionExplanations: ["", "Pranay Sethi consolidated and modified the principles but the multiplier method is from Sarla Verma.", "Mukund Dewangan concerned the licensing requirements for transport vehicles.", "Susamma Thomas is an earlier decision on compensation and predates the settled multiplier tables of Sarla Verma."],
    flashpoint: "Multiplier method → SARLA VERMA v. DTC (2009) 6 SCC 121; consolidated in PRANAY SETHI (2017) 16 SCC 680.",
    source: "CASE"
  });

  Q({
    id: "TOR-013", subject: S, topic: "o6", subtopic: "Third-party insurance",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Motor Vehicles Act, 1988, compulsory third-party insurance of a motor vehicle is required:",
    options: [
      "Only for transport vehicles",
      "For a motor vehicle used in a public place, insuring the owner against liability in respect of the death or bodily injury to any person, or damage to any property of a third party, caused by or arising out of the use of the vehicle in a public place",
      "Only for vehicles used for commercial purposes",
      "Only for vehicles older than ten years"
    ],
    correctIndex: 1,
    explanation: "Chapter XI of the Motor Vehicles Act, 1988 (ss.145-164) requires that a motor vehicle shall not be used in a public place unless it is insured against third-party risks, that is, liability in respect of the death or bodily injury to any person or damage to any property of a third party caused by or arising out of the use of the vehicle in a public place. Section 196 penalises the use of an uninsured vehicle.",
    legalBasis: "Sections 146, 147, 149 and 196, Motor Vehicles Act, 1988.",
    wrongOptionExplanations: ["The requirement applies to motor vehicles generally, not only transport vehicles.", "", "It is not confined to commercial use.", "The age of the vehicle is not the test."],
    flashpoint: "MV Act s.146/147 → COMPULSORY THIRD-PARTY INSURANCE for a motor vehicle used in a PUBLIC PLACE.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-014", subject: S, topic: "o6", subtopic: "Claims Tribunal",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Motor Vehicles Act, 1988, an application for compensation arising out of a motor accident is made to:",
    options: [
      "The civil court having jurisdiction",
      "A Motor Accidents Claims Tribunal constituted by the State Government under Section 165, having jurisdiction over the area in which the accident occurred",
      "The High Court directly",
      "The District Consumer Disputes Redressal Commission"
    ],
    correctIndex: 1,
    explanation: "Section 165 empowers the State Government to constitute Motor Accidents Claims Tribunals for specified areas to adjudicate claims for compensation in respect of accidents involving the death of, or bodily injury to, persons arising out of the use of motor vehicles, or damage to any property of a third party so arising. Section 166 provides for the application for compensation, and s.168 for the award of the Tribunal. Section 175 bars a civil suit where a claim is cognizable by a Claims Tribunal.",
    legalBasis: "Sections 165, 166, 168 and 175, Motor Vehicles Act, 1988.",
    wrongOptionExplanations: ["Section 175 bars a civil suit in respect of claims cognizable by the Claims Tribunal.", "", "The High Court is not the forum of first instance.", "The consumer commission is not the forum for a motor accident claim."],
    flashpoint: "MV Act s.165 → MOTOR ACCIDENTS CLAIMS TRIBUNAL. s.175 → CIVIL SUIT BARRED where the claim is within the Tribunal's jurisdiction.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-015", subject: S, topic: "o6", subtopic: "Hit and run",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Motor Vehicles Act, 1988, the scheme providing compensation to the victims of hit-and-run motor accidents is contained in:",
    options: ["Section 140", "Section 161", "Section 163A", "Section 166"],
    correctIndex: 1,
    explanation: "Section 161 of the Motor Vehicles Act, 1988 provides for a scheme for the payment of compensation in respect of hit-and-run motor accidents, on a structured formula basis, from the Solatium Fund. Section 140 provides for no-fault liability, s.163A for compensation on a structured formula basis and s.166 for the application for compensation.",
    legalBasis: "Sections 140, 161, 163A and 166, Motor Vehicles Act, 1988; Solatium Fund Scheme, 1995.",
    wrongOptionExplanations: ["Section 140 provides for liability without fault.", "", "Section 163A provides for compensation on a structured formula basis.", "Section 166 provides for the application for compensation."],
    flashpoint: "HIT-AND-RUN compensation → MV Act s.161 (Solatium Fund). s.140 → no-fault liability. s.163A → structured formula.",
    source: "STATUTE"
  });

  /* ------------------------------------------------------ Consumer Protection */
  Q({
    id: "TOR-016", subject: S, topic: "o7", subtopic: "'Consumer' — commercial purpose",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 2(7) of the Consumer Protection Act, 2019, a person who obtains goods or services for a commercial purpose is:",
    options: [
      "A consumer, since all purchasers are consumers",
      "Excluded from the definition of 'consumer', save where the goods or services are obtained for the purpose of earning a livelihood by means of self-employment",
      "A consumer if the value of the goods is below a prescribed limit",
      "A consumer only if he is an individual and not a company"
    ],
    correctIndex: 1,
    explanation: "Section 2(7) defines a consumer as a person who buys any goods, or hires or avails of any service, for a consideration, but excludes a person who obtains such goods or services for resale, or for a commercial purpose. The explanation provides that 'commercial purpose' does not include the use by a person of goods bought and used by him exclusively for the purpose of earning his livelihood by means of self-employment.",
    legalBasis: "Section 2(7) and its Explanation, Consumer Protection Act, 2019; Laxmi Engineering Works v. P.S.G. Industrial Institute, (1995) 3 SCC 583.",
    wrongOptionExplanations: ["Resale and commercial purpose are excluded.", "", "Value is not the test for consumer status.", "Consumer status does not turn on the individual/company distinction."],
    flashpoint: "CPA 2019 s.2(7) → 'consumer' EXCLUDES RESALE and COMMERCIAL PURPOSE; self-employment for a livelihood is NOT a commercial purpose.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-017", subject: S, topic: "o7", subtopic: "Joint Development Agreement landowner",
    difficulty: "Difficult", cognitiveLevel: "Application", questionType: "Scenario",
    question: "A landowner enters into a Joint Development Agreement with a builder, contributing land in exchange for 50% of the developed property and a monetary deposit, and is equally involved in the business of development. He files a complaint under the Consumer Protection Act, 2019 alleging construction defects and delay. Which of the following statements is most accurate?",
    options: [
      "The landowner is a consumer unless profit motive is proved",
      "The landowner is a consumer because he did not construct the building himself",
      "The landowner is not a consumer, as the transaction constitutes a commercial joint venture",
      "The landowner is a consumer if the defects exist, irrespective of the nature of the transaction"
    ],
    correctIndex: 2,
    explanation: "Where a landowner enters into a Joint Development Agreement contributing land in return for a share of the developed property and a monetary deposit, and is equally involved in the business of development, the transaction is commercial in nature and the landowner is not a 'consumer' within s.2(7). The mere fact that he did not construct the building himself, and the mere existence of defects, do not confer consumer status — the nature of the transaction determines it.",
    legalBasis: "Section 2(7), Consumer Protection Act, 2019; Bunga Daniel Babu v. Sri Vasudeva Constructions, (2016) 8 SCC 683; Ganeshlal v. Shyam, (2014) 2 CPJ 78 (NC).",
    wrongOptionExplanations: ["Profit motive is not the test — the commercial character of the transaction is.", "Non-construction by the landowner is not the test.", "", "The existence of defects does not confer consumer status."],
    flashpoint: "JDA landowner contributing LAND for a SHARE of the developed property = COMMERCIAL JOINT VENTURE → NOT a consumer.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TOR-018", subject: S, topic: "o7", subtopic: "One-sided agreements",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Consumer Protection Act, 2019, what are 'one-sided agreements' referred to as?",
    options: [
      "Unilateral contracts",
      "Unfair contracts, that is, agreements between a consumer and a manufacturer, trader or service provider that cause a significant change in the rights of the consumer",
      "Quasi contracts",
      "Unfair trade practices"
    ],
    correctIndex: 1,
    explanation: "Section 2(46) of the Consumer Protection Act, 2019 defines an 'unfair contract' as an agreement between a consumer and a manufacturer, trader or service provider that causes a significant change in the rights of the consumer, including agreements that require excessive security deposits, impose disproportionate penalties, unilaterally permit termination or refusal to perform, or assign unilateral rights to the manufacturer or trader. In popular usage these are described as one-sided agreements.",
    legalBasis: "Section 2(46) and Section 59(2)(a), Consumer Protection Act, 2019; Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan, (2019) 5 SCC 725.",
    wrongOptionExplanations: ["'Unilateral contract' is a contract-law concept, not the statutory expression in the Act.", "", "A quasi contract is an obligation created by law, distinct from a contract.", "An unfair trade practice is separately defined in s.2(47)."],
    flashpoint: "CPA 2019 s.2(46) → 'UNFAIR CONTRACT' — in popular usage, a ONE-SIDED agreement that significantly changes the consumer's rights.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "TOR-019", subject: S, topic: "o7", subtopic: "Product liability",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Consumer Protection Act, 2019, 'product liability' means:",
    options: [
      "The liability of a consumer to pay for the product",
      "The responsibility of a product manufacturer or product seller, of any product or service, to compensate for any harm caused to a consumer by a defective product manufactured or sold or by a deficiency in services",
      "The liability of the Government to compensate for defective products",
      "The liability of an insurer only"
    ],
    correctIndex: 1,
    explanation: "Section 2(34) defines product liability as the responsibility of a product manufacturer or product seller, of any product or service, to compensate for any harm caused to a consumer by a defective product manufactured or sold or by a deficiency in services. Chapter VI (ss.82-87) provides for the liability of product manufacturers, product service providers and product sellers.",
    legalBasis: "Section 2(34) and Chapter VI (ss.82-87), Consumer Protection Act, 2019.",
    wrongOptionExplanations: ["The liability runs against the manufacturer or seller, not the consumer.", "", "The Government's liability is not the concept defined.", "The definition is not confined to insurers."],
    flashpoint: "CPA 2019 s.2(34) → PRODUCT LIABILITY of the manufacturer/seller/service provider for harm caused by a defective product or deficient service.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-020", subject: S, topic: "o7", subtopic: "Pecuniary jurisdiction",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Consumer Protection Act, 2019, the District Commission has jurisdiction to entertain complaints where the value of the goods or services paid as consideration does not exceed:",
    options: [
      "Twenty lakh rupees",
      "Fifty lakh rupees",
      "One crore rupees",
      "Two crore rupees"
    ],
    correctIndex: 2,
    explanation: "Section 34(1) provides that the District Commission shall have jurisdiction to entertain complaints where the value of the goods or services paid as consideration does not exceed one crore rupees. The State Commission has jurisdiction where the value exceeds one crore rupees but does not exceed ten crore rupees, and the National Commission where the value exceeds ten crore rupees. The 2019 Act replaced the earlier 'value of the goods or services' test with the 'consideration paid' test, and the 2021 rules revised the pecuniary limits.",
    legalBasis: "Sections 34, 47 and 58, Consumer Protection Act, 2019 (read with the Consumer Protection (Jurisdiction of the District Commission, the State Commission and the National Commission) Rules, 2021).",
    wrongOptionExplanations: ["Twenty lakh rupees was the limit under the 1986 Act as amended in 2002.", "Fifty lakh rupees is not the statutory limit under the 2019 Act for the District Commission.", "", "Two crore rupees is not the limit for the District Commission."],
    flashpoint: "CPA 2019 pecuniary jurisdiction → DISTRICT up to ₹1 CRORE | STATE ₹1-10 CRORE | NATIONAL above ₹10 CRORE (verify against the 2021 Rules).",
    source: "STATUTE"
  });

  Q({
    id: "TOR-021", subject: S, topic: "o7", subtopic: "Deficiency in service",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "'Deficiency' under Section 2(11) of the Consumer Protection Act, 2019 means:",
    options: [
      "Any fault, imperfection, shortcoming or inadequacy in the quality, nature and manner of performance which is required to be maintained by or under any law for the time being in force, or has been undertaken to be performed by a person in pursuance of a contract or otherwise in relation to any service, and includes any act of negligence or omission or commission by such person which causes loss or injury to the consumer",
      "Only a defect in goods",
      "Only a delay in delivery",
      "Only a monetary loss"
    ],
    correctIndex: 0,
    explanation: "Section 2(11) defines deficiency as any fault, imperfection, shortcoming or inadequacy in the quality, nature and manner of performance which is required to be maintained by or under any law for the time being in force or has been undertaken to be performed by a person in pursuance of a contract or otherwise in relation to any service, and includes any act of negligence or omission or commission by such person which causes loss or injury to the consumer, and deliberate withholding of relevant information by such person to the consumer. A 'defect' relates to goods under s.2(10).",
    legalBasis: "Sections 2(10) and 2(11), Consumer Protection Act, 2019.",
    wrongOptionExplanations: ["", "'Defect' relates to goods; 'deficiency' relates to services.", "Delay is one illustration of deficiency, not the whole definition.", "The definition is not confined to monetary loss."],
    flashpoint: "CPA 2019 → DEFECT (s.2(10)) relates to GOODS; DEFICIENCY (s.2(11)) relates to SERVICES.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-022", subject: S, topic: "o7", subtopic: "Medical services as service",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The question whether medical services fall within the purview of the consumer protection legislation was decided in:",
    options: [
      "Indian Medical Association v. V.P. Shantha, (1995) 6 SCC 651",
      "Laxmi Engineering Works v. P.S.G. Industrial Institute, (1995) 3 SCC 583",
      "Lucknow Development Authority v. M.K. Gupta, (1994) 1 SCC 243",
      "Spring Meadows Hospital v. Harjol Ahluwalia, (1998) 4 SCC 39"
    ],
    correctIndex: 0,
    explanation: "In Indian Medical Association v. V.P. Shantha a three-judge Bench held that medical services rendered by a medical practitioner or a hospital fall within the ambit of 'service' under the consumer protection legislation, and that a patient is a 'consumer'. The Court drew a distinction between services rendered free of charge to everybody and services rendered on payment, and held that services rendered on payment, or where the patient pays for them, attract the Act.",
    legalBasis: "Indian Medical Association v. V.P. Shantha, (1995) 6 SCC 651; Consumer Protection Act, 2019.",
    wrongOptionExplanations: ["", "Laxmi Engineering Works concerned the meaning of 'commercial purpose'.", "Lucknow Development Authority v. M.K. Gupta concerned the amenability of statutory authorities to consumer jurisdiction.", "Spring Meadows Hospital v. Harjol Ahluwalia dealt with the liability of a hospital and doctor for negligence in a specific case."],
    flashpoint: "Medical services = 'SERVICE' under the CPA → INDIAN MEDICAL ASSOCIATION v. V.P. SHANTHA (1995) 6 SCC 651.",
    source: "CASE"
  });

  Q({
    id: "TOR-023", subject: S, topic: "o7", subtopic: "Unfair trade practice",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following is an 'unfair trade practice' under Section 2(47) of the Consumer Protection Act, 2019?",
    options: [
      "Adopting any unfair method or unfair or deceptive practice, including falsely representing that the goods or services are of a particular standard, quality, quantity or grade, making a false or misleading representation concerning the usefulness of the goods or services, and refusing to take back or withdraw defective goods",
      "Charging a price higher than the maximum retail price",
      "Giving a discount to a consumer",
      "Selling a product at a loss"
    ],
    correctIndex: 0,
    explanation: "Section 2(47) defines an unfair trade practice broadly to include false or misleading representations about the standard, quality, quantity, grade, composition, style or model of goods or services, the need for or usefulness of goods or services, false warranties or guarantees, participation in a scheme that is deceptive, and refusing to take back or withdraw defective goods or to refund the consideration. Charging above the maximum retail price may also amount to an unfair trade practice in certain circumstances, but the definition is broader than that.",
    legalBasis: "Section 2(47), Consumer Protection Act, 2019; Chapter III (ss.10-30) and the Central Consumer Protection Authority's powers.",
    wrongOptionExplanations: ["", "Charging above the MRP is one illustration, not the whole definition.", "Giving a discount is not an unfair trade practice.", "Selling at a loss is not by itself an unfair trade practice."],
    flashpoint: "CPA 2019 s.2(47) → UNFAIR TRADE PRACTICE covers false/misleading representations and refusal to take back defective goods or refund the consideration.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-024", subject: S, topic: "o8", subtopic: "Volenti non fit injuria",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The maxim 'volenti non fit injuria' means:",
    options: [
      "No injury is done to a person who consents to the act — that is, a voluntary assumption of the risk of harm",
      "The act of God excludes liability",
      "The thing speaks for itself",
      "A person must take his victim as he finds him"
    ],
    correctIndex: 0,
    explanation: "Volenti non fit injuria means that no injury is done to a person who consents to the act. It is a defence where the plaintiff, with full knowledge of the risk, voluntarily exposed himself to it. The consent must be free and informed; mere knowledge of the risk is not enough unless the plaintiff also voluntarily accepted it.",
    legalBasis: "General principles of tort; Hall v. Brooklands Auto-Racing Club, (1933) 1 KB 205.",
    wrongOptionExplanations: ["", "Act of God is a separate defence.", "'Res ipsa loquitur' means the thing speaks for itself.", "The eggshell skull rule requires the defendant to take the victim as he finds him."],
    flashpoint: "VOLENTI NON FIT INJURIA → free and informed VOLUNTARY ASSUMPTION OF RISK. Mere knowledge of the risk is not enough.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-025", subject: S, topic: "o1", subtopic: "Negligence — elements",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly states the essential elements of negligence?",
    options: [
      "Intention to cause harm and actual harm",
      "A duty of care owed by the defendant to the plaintiff, a breach of that duty, causation, and damage resulting from the breach",
      "A contractual relationship between the parties and a breach",
      "Any act causing loss to another"
    ],
    correctIndex: 1,
    explanation: "Negligence requires (i) a duty of care owed by the defendant to the plaintiff, (ii) a breach of that duty, (iii) causation — the breach must be the cause of the damage, and (iv) damage resulting from the breach. Intention is not an element of negligence; the duty may exist independently of contract.",
    legalBasis: "Donoghue v. Stevenson, (1932) AC 562; general principles of tort.",
    wrongOptionExplanations: ["Intention is not required for negligence.", "", "A contractual relationship is not necessary; a duty may arise independently.", "An act causing loss without breach of duty is not actionable in negligence."],
    flashpoint: "NEGLIGENCE → DUTY + BREACH + CAUSATION + DAMAGE (Donoghue v. Stevenson).",
    source: "CASE"
  });

  Q({
    id: "TOR-026", subject: S, topic: "o7", subtopic: "Consumer — e-commerce",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Consumer Protection Act, 2019, the definition of 'consumer' expressly includes:",
    options: [
      "Only offline purchasers",
      "Persons who buy goods or avail services through electronic means, teleshopping, direct selling or multi-level marketing",
      "Only persons residing in urban areas",
      "Only persons above the age of eighteen years"
    ],
    correctIndex: 1,
    explanation: "The Explanation to s.2(7) expressly provides that the expression 'consumer' includes a person who buys goods or avails services through electronic means, teleshopping, direct selling or multi-level marketing. The Act also contains provisions relating to e-commerce and provides for the e-Daakhil portal for the electronic filing of complaints.",
    legalBasis: "Section 2(7) and its Explanation, and the provisions on e-commerce, Consumer Protection Act, 2019; Consumer Protection (E-Commerce) Rules, 2020.",
    wrongOptionExplanations: ["The definition is not confined to offline purchasers.", "", "Residence is not a criterion.", "Age is not a criterion in the definition of consumer."],
    flashpoint: "CPA 2019 → 'consumer' expressly includes purchases through ELECTRONIC MEANS, TELESHOPPING, DIRECT SELLING and MULTI-LEVEL MARKETING.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-027", subject: S, topic: "o7", subtopic: "Complaint — limitation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under Section 69 of the Consumer Protection Act, 2019, a complaint relating to a defect in goods or a deficiency in service must ordinarily be filed within:",
    options: [
      "Six months from the date on which the cause of action has arisen",
      "One year from the date on which the cause of action has arisen",
      "Two years from the date on which the cause of action has arisen",
      "Three years from the date on which the cause of action has arisen"
    ],
    correctIndex: 2,
    explanation: "Section 69 provides that a complaint shall be filed within two years from the date on which the cause of action has arisen, and that a complaint filed after the period of two years may be entertained if the complainant satisfies the Commission that he had sufficient cause for not filing the complaint within that period, provided that the delay does not exceed a further period of one year.",
    legalBasis: "Section 69, Consumer Protection Act, 2019.",
    wrongOptionExplanations: ["Six months is not the prescribed period.", "One year is not the prescribed period.", "", "Three years is not the prescribed period."],
    flashpoint: "CPA 2019 s.69 → complaint within TWO YEARS of the cause of action; condonation up to a further ONE YEAR.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-028", subject: S, topic: "o1", subtopic: "Causation and remoteness",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A pedestrian is knocked down by a car driven negligently. He is taken to hospital, where he contracts an infection because of the hospital's negligence in sterilising instruments, and dies of the infection. Which of the following statements best represents the legal position?",
    options: [
      "The driver is not liable because the immediate cause of death was the hospital's negligence",
      "The driver's negligence was a cause of the death, and the hospital's negligence may also be a cause; both may be liable, and the chain of causation is not necessarily broken where the subsequent treatment is a natural consequence of the original injury",
      "The driver is liable only for the injuries and not for the death",
      "Only the hospital is liable"
    ],
    correctIndex: 1,
    explanation: "Where the injured person receives negligent treatment, the original tortfeasor may still be liable if the treatment was a natural consequence of the original injury — negligent medical treatment does not necessarily break the chain of causation, though if the treatment was so grossly negligent as to be independent of the original injury, it may. The hospital may also be liable in its own right. The law assesses whether the subsequent event was a natural and probable consequence or an independent intervening cause.",
    legalBasis: "General principles of tort on causation and novus actus interveniens; Motor Vehicles Act, 1988, ss.166-168 (for claims before the Tribunal).",
    wrongOptionExplanations: ["Negligent medical treatment does not automatically break the chain of causation.", "", "The driver's liability extends to the death if the chain of causation is not broken.", "The hospital's liability does not exclude the driver's."],
    flashpoint: "NEGLIGENT MEDICAL TREATMENT after a tort → does NOT automatically break the CHAIN OF CAUSATION (novus actus interveniens).",
    source: "CASE"
  });

  Q({
    id: "TOR-029", subject: S, topic: "o7", subtopic: "Central Consumer Protection Authority",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The Central Consumer Protection Authority established under the Consumer Protection Act, 2019 has the power, inter alia, to:",
    options: [
      "Adjudicate consumer complaints in the first instance",
      "Inquire into violations of consumer rights, order the recall of goods or withdrawal of services that are dangerous or unsafe, order the reimbursement of the price paid, order the discontinuance of unfair trade practices, and impose penalties",
      "Hear appeals from the District Commission",
      "Constitute the State Commissions"
    ],
    correctIndex: 1,
    explanation: "Chapter III of the Consumer Protection Act, 2019 establishes the Central Consumer Protection Authority with the object of regulating matters relating to the violation of consumer rights, unfair trade practices and misleading advertisements. The Authority may inquire into violations, order the recall of goods or withdrawal of services that are dangerous, unsafe or hazardous, order the reimbursement of the price paid, order the discontinuance or modification of unfair trade practices, order the manufacturer to cease production, and impose penalties. Appeals from the Authority lie to the National Commission.",
    legalBasis: "Sections 10-30, Consumer Protection Act, 2019.",
    wrongOptionExplanations: ["Adjudication of complaints is by the District, State and National Commissions.", "", "Appeals from the District Commission lie to the State Commission under s.41.", "The Central Authority does not constitute the State Commissions."],
    flashpoint: "CCPA (CPA 2019, Chapter III) → can order RECALL, WITHDRAWAL, REIMBURSEMENT, DISCONTINUANCE of unfair practices and IMPOSE PENALTIES.",
    source: "STATUTE"
  });

  Q({
    id: "TOR-030", subject: S, topic: "o8", subtopic: "Damages",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly describes exemplary damages in tort?",
    options: [
      "Damages awarded to compensate the plaintiff for the loss actually suffered",
      "Damages which are nominal in amount and are awarded where the plaintiff's right has been infringed but no substantial loss has been suffered",
      "Damages awarded in excess of the plaintiff's actual loss, to punish the defendant where his conduct is such that it calls for punishment, such as in cases of oppressive, arbitrary or unconstitutional action or where the defendant's conduct was calculated to make a profit exceeding the compensation payable",
      "Damages awarded only in contract cases"
    ],
    correctIndex: 2,
    explanation: "Exemplary (or punitive) damages are awarded in excess of the plaintiff's actual loss, with the object of punishing the defendant and deterring similar conduct. The English Court of Appeal in Rookes v. Barnard, (1964) AC 1129, categorised the circumstances in which such damages may be awarded — oppressive, arbitrary or unconstitutional action by the servants of the government, conduct calculated by the defendant to make a profit which may exceed the compensation payable to the plaintiff, and cases where a statute expressly authorises such damages. Compensatory damages reimburse actual loss; nominal damages are of a small amount; contemptuous damages are a small sum where the plaintiff is not deserving of sympathy.",
    legalBasis: "Rookes v. Barnard, (1964) AC 1129; general principles of tort on damages.",
    wrongOptionExplanations: ["That describes compensatory damages.", "That describes nominal damages.", "", "Exemplary damages are available in tort, not only in contract."],
    flashpoint: "EXEMPLARY DAMAGES → in EXCESS of actual loss, to PUNISH the defendant (Rookes v. Barnard). Distinct from COMPENSATORY, NOMINAL and CONTEMPTUOUS damages.",
    source: "CASE"
  });
})();
