/* ============================================================================
 * AIBE XXI — Question Bank: I.P.C. (1860) & Bharatiya Nyaya Sanhita (2023)
 * Weightage: 8 / 100. 48 questions.
 * BNS section numbers verified against a Bare-Act listing of Act 45 of 2023.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "ipc-bns";

  /* ------------------------------------------------------------- punishments */
  Q({
    id: "IPC-001", subject: S, topic: "p1", subtopic: "Punishments under BNS s.4",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Which of the following punishments is provided by Section 4 of the Bharatiya Nyaya Sanhita, 2023 but was NOT among the punishments listed in Section 53 of the Indian Penal Code, 1860?",
    options: ["Forfeiture of property", "Fine", "Community service", "Imprisonment for life"],
    correctIndex: 2,
    explanation: "Section 4 of the BNS lists death, imprisonment for life, imprisonment (rigorous or simple), forfeiture of property, fine and community service. Community service is the new addition; the other punishments were already in IPC s.53.",
    legalBasis: "Section 4, Bharatiya Nyaya Sanhita, 2023; Section 53, Indian Penal Code, 1860.",
    wrongOptionExplanations: ["Forfeiture of property was already an IPC punishment.", "Fine was already an IPC punishment.", "", "Imprisonment for life was already an IPC punishment."],
    flashpoint: "BNS s.4 → COMMUNITY SERVICE is the new punishment; the rest mirror IPC s.53.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-002", subject: S, topic: "p1", subtopic: "Forfeiture of property",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Bharatiya Nyaya Sanhita, 2023, 'forfeiture of property' as a punishment is most commonly applied in which of the following?",
    options: ["Organised crime (Section 111)", "Offences involving simple hurt", "Petty theft", "Rash or negligent driving"],
    correctIndex: 0,
    explanation: "Forfeiture of property as a punishment has a concrete statutory application in organised crime under BNS s.111, where the property derived from organised crime may be forfeited. It has no such application for simple hurt, petty theft or negligent driving.",
    legalBasis: "Sections 4 and 111, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["", "Simple hurt is punishable with imprisonment and/or fine, not forfeiture.", "Petty theft attracts imprisonment and/or fine.", "Negligent driving attracts imprisonment and/or fine."],
    flashpoint: "Forfeiture of property → most commonly applied in ORGANISED CRIME (BNS s.111).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-003", subject: S, topic: "p1", subtopic: "Solitary confinement",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Solitary confinement as a form of punishment is dealt with in which sections of the Bharatiya Nyaya Sanhita, 2023?",
    options: ["Sections 4 and 5", "Sections 11 and 12", "Sections 61 and 62", "Sections 100 and 101"],
    correctIndex: 1,
    explanation: "BNS s.11 provides for solitary confinement and s.12 prescribes the limit of solitary confinement. Section 4 lists the kinds of punishment and s.61 defines criminal conspiracy.",
    legalBasis: "Sections 11 and 12, Bharatiya Nyaya Sanhita, 2023 (corresponding to IPC ss.73 and 74).",
    wrongOptionExplanations: ["Section 4 lists punishments; s.5 deals with commutation.", "", "Section 61 is criminal conspiracy; s.62 is attempt.", "Sections 100 and 101 define culpable homicide and murder."],
    flashpoint: "BNS s.11 → solitary confinement; BNS s.12 → limit of solitary confinement.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-004", subject: S, topic: "p2", subtopic: "Private defence of body",
    difficulty: "Moderate", cognitiveLevel: "Application", questionType: "Direct",
    question: "Under the Indian Penal Code, 1860, in which of the following scenarios does the right of private defence of the body extend to voluntarily causing death of the assailant?",
    options: [
      "A simple assault committed without the use of a weapon",
      "A theft in which the stolen property is worth more than ten thousand rupees",
      "An assault committed with the intention of kidnapping or abducting the person assaulted",
      "Criminal trespass on open, vacant land"
    ],
    correctIndex: 2,
    explanation: "IPC s.100 (BNS s.38) enumerates the cases in which the right of private defence of the body extends to causing death. These include an assault causing reasonable apprehension of death or grievous hurt, an assault with the intention of committing rape, gratifying unnatural lust, kidnapping or abduction, and wrongful confinement. A simple assault, a theft exceeding a monetary value and criminal trespass on open land do not qualify.",
    legalBasis: "Sections 96-106, Indian Penal Code, 1860; Sections 34-44, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Simple assault without a weapon does not attract IPC s.100.", "The value of the stolen property is not the test for private defence of the body.", "", "Private defence of property under IPC s.103 does not extend to death for mere criminal trespass on open land."],
    flashpoint: "Right of private defence extends to DEATH → assault causing apprehension of death/grievous hurt, RAPE, KIDNAPPING OR ABDUCTION, wrongful confinement.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-005", subject: S, topic: "p2", subtopic: "Restrictions on private defence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which section of the Indian Penal Code, 1860 imposes restrictions on the exercise of the right of private defence?",
    options: ["Section 96", "Section 99", "Section 100", "Section 103"],
    correctIndex: 1,
    explanation: "Section 99 imposes the restrictions: there is no right of private defence against an act which does not reasonably cause apprehension of death or grievous hurt if done by a public servant acting in good faith, nor where there is time to have recourse to the protection of the public authorities, and the right never extends to inflicting more harm than is necessary.",
    legalBasis: "Sections 96, 99, 100 and 103, Indian Penal Code, 1860; BNS s.37.",
    wrongOptionExplanations: ["Section 96 states that nothing is an offence done in the exercise of the right of private defence — it confers the right.", "", "Section 100 lists the cases where the right of private defence of the body extends to causing death.", "Section 103 concerns the right of private defence of property."],
    flashpoint: "IPC s.99 → RESTRICTIONS on private defence (public servant acting in good faith; time to seek public authority; no excessive harm).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-006", subject: S, topic: "p2", subtopic: "Private defence — nature",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Assertion-Reason",
    question: "Assertion (A): The right of private defence is a right of defence and not a right of retaliation.\nReason (R): The right is available only against an imminent and unlawful threat, and the force used must be proportionate to the danger apprehended.\nDecide the correct option.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Yogendra Morarji v. State of Gujarat establishes that the right of private defence is a right of defence, never of retaliation. The reason explains why: the right arises only against an imminent and unlawful threat and the force used must be proportionate.",
    legalBasis: "Sections 96-106, Indian Penal Code, 1860; Yogendra Morarji v. State of Gujarat, (1980) 2 SCC 218.",
    wrongOptionExplanations: ["", "The proportionality and imminence requirements are precisely what make the right defensive rather than retaliatory.", "(R) correctly states the law.", "(A) correctly states the law."],
    flashpoint: "Private defence → DEFENSIVE, never RETALIATORY; available only against an IMMINENT unlawful threat.",
    source: "CASE"
  });

  Q({
    id: "IPC-007", subject: S, topic: "p3", subtopic: "Criminal conspiracy — ingredients",
    difficulty: "Moderate", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Regarding the offence of criminal conspiracy as defined under Section 120A of the Indian Penal Code, 1860 (Section 61 of the BNS, 2023), which of the following statements is legally accurate?",
    options: [
      "A mere intention to commit a crime, without any agreement with another person, is sufficient for conviction",
      "A minimum of five persons must participate to satisfy the definition",
      "The agreement itself is the offence, and where the crime conspired to be committed is punishable with death, imprisonment for life or rigorous imprisonment for two years or more, no overt act needs to be proved",
      "It is not a substantive offence and can never be charged together with the offence conspired to be committed"
    ],
    correctIndex: 2,
    explanation: "Criminal conspiracy requires an agreement between two or more persons to do an unlawful act or to do a lawful act by unlawful means. The agreement is itself the offence. For the graver limb the offence is complete on the agreement alone; no overt act is required.",
    legalBasis: "Sections 120A and 120B, Indian Penal Code, 1860; Section 61, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Mere intention, without an agreement, is not conspiracy.", "Two persons are enough; there is no five-person requirement for conspiracy (that is dacoity).", "", "Conspiracy is a substantive offence and may be charged with the substantive offence."],
    flashpoint: "Conspiracy → AGREEMENT is the offence; two or more persons; no overt act needed for the graver limb. IPC s.120A/120B → BNS s.61.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-008", subject: S, topic: "p3", subtopic: "Abetment",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Abetment of a thing under the Indian Penal Code, 1860 may be committed in which of the following ways?",
    options: [
      "Only by instigation",
      "Only by conspiracy",
      "By instigation, by conspiracy, or by intentional aiding",
      "Only by intentional aiding"
    ],
    correctIndex: 2,
    explanation: "Section 107 (BNS s.45) provides that a person abets the doing of a thing if he instigates it, or engages with one or more persons in a conspiracy to do it, or intentionally aids its doing.",
    legalBasis: "Section 107, Indian Penal Code, 1860; Section 45, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Instigation is only one of three modes.", "Conspiracy is only one of three modes.", "", "Aiding is only one of three modes."],
    flashpoint: "Abetment → INSTIGATION + CONSPIRACY + INTENTIONAL AIDING (three modes).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-009", subject: S, topic: "p4", subtopic: "Culpable homicide and murder",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which of the following correctly describes the relationship between culpable homicide and murder under the Bharatiya Nyaya Sanhita, 2023?",
    options: [
      "Culpable homicide and murder are the same offence with different punishments",
      "Culpable homicide is the genus and murder is the species; every murder is culpable homicide but not every culpable homicide is murder",
      "Murder is the genus and culpable homicide is the species",
      "Culpable homicide applies only to death caused by negligence"
    ],
    correctIndex: 1,
    explanation: "Culpable homicide (BNS s.100, IPC s.299) is the genus and murder (BNS s.101, IPC s.300) is the species. All the ingredients of murder must be present for the graver offence, and the exceptions to the murder provision reduce the offence to culpable homicide not amounting to murder.",
    legalBasis: "Sections 100 and 101, Bharatiya Nyaya Sanhita, 2023; Sections 299 and 300, Indian Penal Code, 1860; State of A.P. v. Rayavarapu Punnayya, (1976) 4 SCC 382.",
    wrongOptionExplanations: ["They are distinct offences with a genus-species relationship.", "", "The relationship is the reverse.", "Death by negligence is a distinct offence (BNS s.106, IPC s.304A)."],
    flashpoint: "BNS s.100 = culpable homicide (GENUS); BNS s.101 = murder (SPECIES).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-010", subject: S, topic: "p4", subtopic: "Terrorist act — BNS s.113",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under which specific provision of the Bharatiya Nyaya Sanhita, 2023 has the definition of a 'terrorist act' been integrated into India's general penal legislation?",
    options: ["Section 109", "Section 111", "Section 113", "Section 152"],
    correctIndex: 2,
    explanation: "BNS s.113 defines and punishes a terrorist act. Section 111 deals with organised crime, s.112 with petty organised crime and s.152 with acts endangering the sovereignty, unity and integrity of India.",
    legalBasis: "Sections 111, 112, 113 and 152, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 109 is attempt to murder.", "Section 111 is organised crime.", "", "Section 152 is the replacement for sedition."],
    flashpoint: "BNS s.113 → TERRORIST ACT (first time in the general penal law). s.111 → organised crime. s.152 → endangering sovereignty (sedition replacement).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-011", subject: S, topic: "p4", subtopic: "Organised crime",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which section of the Bharatiya Nyaya Sanhita, 2023 defines and punishes 'organised crime'?",
    options: ["Section 109", "Section 111", "Section 112", "Section 113"],
    correctIndex: 1,
    explanation: "BNS s.111 deals with organised crime and prescribes punishment graded by the gravity of the offence committed by the organised crime syndicate. Section 112 deals with petty organised crime.",
    legalBasis: "Sections 111 and 112, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 109 is attempt to murder.", "", "Section 112 is petty organised crime — a distinct, lesser offence.", "Section 113 is the terrorist act."],
    flashpoint: "BNS s.111 → ORGANISED CRIME; s.112 → PETTY organised crime.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-012", subject: S, topic: "p4", subtopic: "Death by negligence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Causing death by negligence is punishable under which provision of the Bharatiya Nyaya Sanhita, 2023?",
    options: ["Section 103", "Section 105", "Section 106", "Section 108"],
    correctIndex: 2,
    explanation: "BNS s.106 punishes causing death by negligence (the successor to IPC s.304A). Section 103 punishes murder, s.105 culpable homicide not amounting to murder and s.108 abetment of suicide.",
    legalBasis: "Section 106, Bharatiya Nyaya Sanhita, 2023 (earlier Section 304A, Indian Penal Code, 1860).",
    wrongOptionExplanations: ["Section 103 is punishment for murder.", "Section 105 is punishment for culpable homicide not amounting to murder.", "", "Section 108 is abetment of suicide."],
    flashpoint: "BNS s.106 → death by negligence (IPC s.304A).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-013", subject: S, topic: "p4", subtopic: "Attempt to murder",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Attempt to murder is punishable under which section of the Bharatiya Nyaya Sanhita, 2023?",
    options: ["Section 105", "Section 107", "Section 108", "Section 109"],
    correctIndex: 3,
    explanation: "BNS s.109 punishes attempt to murder (the successor to IPC s.307). BNS s.110 punishes attempt to commit culpable homicide (IPC s.308).",
    legalBasis: "Sections 109 and 110, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 105 concerns culpable homicide not amounting to murder.", "Section 107 concerns abetment of suicide of a child or person of unsound mind.", "Section 108 concerns abetment of suicide.", ""],
    flashpoint: "BNS s.109 → attempt to murder (IPC s.307); BNS s.110 → attempt to commit culpable homicide (IPC s.308).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-014", subject: S, topic: "p4", subtopic: "Grievous hurt",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "In the Bharatiya Nyaya Sanhita, 2023, which section defines 'grievous hurt'?",
    options: ["Section 114", "Section 115", "Section 116", "Section 117"],
    correctIndex: 2,
    explanation: "BNS s.116 defines grievous hurt (IPC s.320). Section 114 defines hurt, s.115 punishes voluntarily causing hurt and s.117 punishes voluntarily causing grievous hurt.",
    legalBasis: "Sections 114-117, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 114 defines 'hurt'.", "Section 115 punishes voluntarily causing hurt.", "", "Section 117 punishes voluntarily causing grievous hurt."],
    flashpoint: "BNS s.114 hurt | s.115 voluntarily causing hurt | s.116 GREVIOUS HURT (definition) | s.117 voluntarily causing grievous hurt.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-015", subject: S, topic: "p4", subtopic: "Murder vs culpable homicide — provocation",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A finds his wife in the act of adultery with B. In a sudden transport of passion, A picks up an iron rod and strikes B on the head, causing death. The provocation was sudden, not sought by A, and the attack was not disproportionate in the circumstances. Which of the following is the correct legal position?",
    options: [
      "A is guilty of murder, because the killing was intentional",
      "A is guilty of culpable homicide not amounting to murder, because the case falls within the exception of grave and sudden provocation",
      "A is guilty of no offence, because the act was committed in a sudden passion",
      "A is guilty only of causing hurt, because the death was unintended"
    ],
    correctIndex: 1,
    explanation: "Sudden and grave provocation is Exception 1 to the murder provision. Where the provocation is grave and sudden, not sought by the accused, and the retaliation is proportionate, the offence is reduced from murder to culpable homicide not amounting to murder. Intercourse with the wife of the person accused is one of the situations the law treats as grave and sudden provocation.",
    legalBasis: "Sections 299 and 300 Exceptions 1 and 4, Indian Penal Code, 1860; BNS ss.100, 101; K.M. Nanavati v. State of Maharashtra, AIR 1962 SC 605.",
    wrongOptionExplanations: ["The exception reduces the offence below murder.", "", "Sudden passion does not make the act lawful; it only mitigates the offence.", "Death was caused, so the offence cannot be reduced to hurt."],
    flashpoint: "Grave and sudden provocation (Exception 1) → MURDER reduced to CULPABLE HOMICIDE NOT AMOUNTING TO MURDER.",
    source: "CASE"
  });

  Q({
    id: "IPC-016", subject: S, topic: "p5", subtopic: "Kidnapping — BNS s.137",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Bharatiya Nyaya Sanhita, 2023, kidnapping is defined in which section?",
    options: ["Section 137", "Section 138", "Section 139", "Section 140"],
    correctIndex: 0,
    explanation: "BNS s.137 defines kidnapping (successor to IPC ss.359-361). BNS s.138 defines abduction. BNS s.139 deals with kidnapping or maiming a child for begging and s.140 with kidnapping or abducting to murder or for ransom.",
    legalBasis: "Sections 137-140, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["", "Section 138 is abduction.", "Section 139 is kidnapping or maiming a child for begging.", "Section 140 is kidnapping or abducting to murder or for ransom."],
    flashpoint: "BNS s.137 → KIDNAPPING; BNS s.138 → ABDUCTION.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-017", subject: S, topic: "p5", subtopic: "Abduction — ingredients",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 362 of the Indian Penal Code, 1860 (BNS s.138), which of the following is NOT a mandatory legal requirement to constitute the offence of abduction?",
    options: [
      "Compelling or inducing a person to move from one place to another",
      "The employment of physical force or the use of deceitful means",
      "The classification of the act as a continuing offence",
      "The movement being of a person from one place to another"
    ],
    correctIndex: 2,
    explanation: "Abduction by definition is a continuing offence, but that is a legal characteristic of the offence, not an ingredient to be proved. The essential ingredients are the compelling of a person, by force or by any deceitful means, to go from any place, or the inducing of a person by deceitful means to go from any place.",
    legalBasis: "Section 362, Indian Penal Code, 1860; Section 138, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["This is a genuine ingredient.", "This is a genuine ingredient.", "", "This is a genuine ingredient."],
    flashpoint: "Abduction → ingredients are (i) compelling or inducing a person to move, (ii) by FORCE or DECEITFUL MEANS. 'Continuing offence' is DESCRIPTIVE, not an ingredient.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-018", subject: S, topic: "p5", subtopic: "Kidnapping vs abduction",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly distinguishes kidnapping from abduction?",
    options: [
      "Kidnapping is defined by the means used, and abduction by the status of the person",
      "Kidnapping is defined by reference to the status of the person and does not depend on the person's consent, whereas abduction is defined by the means used and is negated by the consent of a person competent to give it",
      "Both offences require the use of force",
      "Kidnapping applies only to minors, and abduction only to majors"
    ],
    correctIndex: 1,
    explanation: "Kidnapping turns on the status of the person — a minor under eighteen years, a person of unsound mind, or a person removed beyond the limits of India. Abduction turns on the means — force, compulsion, deceit or inducement. Consent is immaterial for kidnapping from lawful guardianship but is a defence to abduction where given by a person competent to consent.",
    legalBasis: "Sections 359-362, Indian Penal Code, 1860; BNS ss.137 and 138; State of Haryana v. Raja Ram, (1973) 1 SCC 544.",
    wrongOptionExplanations: ["The definitions are the reverse of this statement.", "", "Force is not essential for kidnapping.", "Kidnapping is not confined to minors — a person of unsound mind and removal beyond India are also covered."],
    flashpoint: "Kidnapping = STATUS of the person (no consent element). Abduction = MEANS used (consent of a competent person is a defence).",
    source: "CASE"
  });

  Q({
    id: "IPC-019", subject: S, topic: "p6", subtopic: "Theft — ingredients",
    difficulty: "Moderate", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 378 of the Indian Penal Code, 1860 (BNS s.303), which of the following constitutes an essential element of the offence of theft?",
    options: [
      "The unauthorised movement of immovable property without the owner's consent",
      "The movement of movable property out of a person's possession without their consent, with a dishonest intention at the time of moving",
      "The employment of physical force or criminal violence against a person",
      "The removal of property only from a public location"
    ],
    correctIndex: 1,
    explanation: "Theft requires (i) movable property, (ii) dishonest intention at the time of moving, (iii) movement of the property out of the possession of another, and (iv) absence of consent. Immovable property cannot be the subject of theft.",
    legalBasis: "Section 378, Indian Penal Code, 1860; Section 303, Bharatiya Nyaya Sanhita, 2023; K.N. Mehra v. State of Rajasthan, AIR 1957 SC 369.",
    wrongOptionExplanations: ["Immovable property cannot be stolen.", "", "Use of force is relevant to robbery, not to the definition of theft.", "Theft is not confined to property in a public location."],
    flashpoint: "Theft (BNS s.303) → MOVABLE property + dishonest intention AT THE TIME OF MOVING + out of another's possession + without consent.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-020", subject: S, topic: "p6", subtopic: "Snatching — new offence",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Which of the following offences is NEW in the Bharatiya Nyaya Sanhita, 2023 and had no separate counterpart in the Indian Penal Code, 1860?",
    options: ["Extortion", "Dacoity", "Snatching", "Criminal breach of trust"],
    correctIndex: 2,
    explanation: "BNS s.304 creates the distinct offence of snatching — a sudden or quick act of seizing, securing or grasping any movable property from a person or in that person's presence. The IPC had no separate offence of snatching; such conduct was dealt with under theft or robbery.",
    legalBasis: "Section 304, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Extortion was IPC s.383, now BNS s.308.", "Dacoity was IPC s.391, now BNS s.310.", "", "Criminal breach of trust was IPC s.405, now BNS s.316."],
    flashpoint: "BNS s.304 → SNATCHING (a NEW offence). BNS s.303 theft, s.308 extortion, s.310 dacoity.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-021", subject: S, topic: "p6", subtopic: "Theft vs extortion",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "X threatens to publish defamatory matter concerning Y unless Y delivers a sum of money to X. Y, in fear, delivers the money. Which offence has X committed?",
    options: ["Theft", "Extortion", "Cheating", "Criminal misappropriation"],
    correctIndex: 1,
    explanation: "Extortion is the dishonest inducement of a person to deliver property by putting that person in fear of injury. Y delivered the money out of fear, so the offence is extortion (IPC s.383, BNS s.308), not theft — in theft the property is taken without consent at all.",
    legalBasis: "Section 383, Indian Penal Code, 1860; Section 308, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["In theft the property is moved without the owner's consent; here the delivery was consented to, though the consent was vitiated by fear.", "", "Cheating involves deception, not fear of injury.", "Criminal misappropriation involves property already in the accused's possession."],
    flashpoint: "Extortion → consent obtained BY PUTTING IN FEAR OF INJURY. Theft → no consent at all.",
    source: "CASE"
  });

  Q({
    id: "IPC-022", subject: S, topic: "p6", subtopic: "Robbery",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Indian Penal Code, 1860, theft becomes robbery when:",
    options: [
      "The stolen property exceeds a prescribed value",
      "The theft is committed at night",
      "The offender, for the purpose of committing the theft, voluntarily causes or attempts to cause death, hurt or wrongful restraint, or fear of instant death, hurt or wrongful restraint",
      "Theft is committed by two or more persons"
    ],
    correctIndex: 2,
    explanation: "Theft is robbery if the offender voluntarily causes or attempts to cause death, hurt or wrongful restraint, or fear of instant death, hurt or wrongful restraint, in order to commit the theft or in committing it, or while carrying away the property. Extortion becomes robbery when the offender is in the presence of the person put in fear and commits extortion by causing or attempting to cause death, hurt or wrongful restraint.",
    legalBasis: "Section 390, Indian Penal Code, 1860; Section 309, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Value is irrelevant to the theft/robbery distinction.", "Time of day is relevant to house-breaking by night, not to robbery.", "", "Two or more persons relate to dacoity (five or more), not to robbery."],
    flashpoint: "Robbery = theft OR extortion + violence or threat of INSTANT death/hurt/wrongful restraint.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-023", subject: S, topic: "p6", subtopic: "Dacoity",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Dacoity is robbery committed by:",
    options: ["Two or more persons", "Three or more persons", "Five or more persons", "Ten or more persons"],
    correctIndex: 2,
    explanation: "Dacoity is robbery committed by five or more persons conjointly, or where five or more persons conjointly attempt to commit robbery. IPC s.391 (BNS s.310).",
    legalBasis: "Section 391, Indian Penal Code, 1860; Section 310, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Two or more is the threshold for criminal conspiracy.", "Three or more is used for unlawful assembly under IPC s.141.", "", "Ten or more relates to the aggravated form of dacoity under IPC s.396/BNS s.311."],
    flashpoint: "DACOITY = robbery by FIVE or more persons.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-024", subject: S, topic: "p6", subtopic: "Cheating",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The essential ingredients of cheating under the Indian Penal Code, 1860 are:",
    options: [
      "Deception of a person, fraudulent or dishonest inducement to deliver property or to do or omit to do something, and damage or loss caused to that person",
      "Taking property without consent",
      "Breach of a civil contract only",
      "Wrongful gain only, without any requirement of deception"
    ],
    correctIndex: 0,
    explanation: "Cheating requires (i) deception of any person, (ii) fraudulently or dishonestly inducing that person to deliver property, or to consent to the retention of property, or to do or omit to do something, and (iii) the doing or omission causing damage or loss.",
    legalBasis: "Sections 415 and 420, Indian Penal Code, 1860; Sections 318 and 319, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["", "Taking property without consent describes theft.", "A mere breach of contract, without deception, is not cheating.", "Deception is the essential ingredient of cheating."],
    flashpoint: "Cheating (IPC s.415/420 → BNS s.318/319) → DECEPTION + fraudulent or dishonest inducement + damage or loss.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-025", subject: S, topic: "p7", subtopic: "Sedition replacement",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which provision of the Bharatiya Nyaya Sanhita, 2023 replaces the offence of sedition under Section 124A of the Indian Penal Code, 1860?",
    options: ["Section 147", "Section 149", "Section 152", "Section 153"],
    correctIndex: 2,
    explanation: "The BNS omits sedition and substitutes a new offence in s.152 — acts endangering the sovereignty, unity and integrity of India. Section 147 concerns waging war against the Government of India and s.153 waging war against a friendly foreign State.",
    legalBasis: "Sections 147, 152 and 153, Bharatiya Nyaya Sanhita, 2023; Section 124A, Indian Penal Code, 1860.",
    wrongOptionExplanations: ["Section 147 is waging war against the Government of India.", "Section 149 is collecting arms with the intention of waging war.", "", "Section 153 concerns waging war against the Government of a foreign State at peace with India."],
    flashpoint: "IPC s.124A sedition → NOT retained; replaced by BNS s.152 (acts endangering sovereignty, unity and integrity).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-026", subject: S, topic: "p7", subtopic: "Sedition — Kedar Nath Singh",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In Kedar Nath Singh v. State of Bihar, the Supreme Court read down the offence of sedition under Section 124A IPC by holding that the section is attracted only when the words or acts have:",
    options: [
      "The tendency to bring the Government into hatred or contempt, whether or not there is any incitement to violence",
      "The intention or tendency to create public disorder or a disturbance of law and order or incitement to violence",
      "Any effect of criticising a Government policy, however mild",
      "An effect of embarrassing the Government in Parliament"
    ],
    correctIndex: 1,
    explanation: "Kedar Nath Singh confined s.124A to acts involving the intention or tendency to create disorder or disturbance of law and order or incitement to violence. Mere criticism of the Government, however strong, is not sedition.",
    legalBasis: "Section 124A, Indian Penal Code, 1860; Kedar Nath Singh v. State of Bihar, AIR 1962 SC 955; S.G. Vombatkere v. Union of India, (2022) 7 SCC 433 (putting s.124A in abeyance).",
    wrongOptionExplanations: ["The Court expressly added the requirement of incitement to violence or public disorder.", "", "Criticism of Government policy is protected speech.", "Embarrassment of the Government is not the test."],
    flashpoint: "Kedar Nath Singh (AIR 1962 SC 955) → sedition requires INCITEMENT TO VIOLENCE or PUBLIC DISORDER.",
    source: "CASE"
  });

  Q({
    id: "IPC-027", subject: S, topic: "p8", subtopic: "Defamation — BNS punishment",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Bharatiya Nyaya Sanhita, 2023, what is the range of punishments available to a court for the offence of defamation?",
    options: [
      "Simple imprisonment, or fine, or both, or community service",
      "Rigorous imprisonment for five years",
      "Only a fine",
      "Only an apology in open court"
    ],
    correctIndex: 0,
    explanation: "BNS s.356 (successor to IPC ss.499-500) punishes defamation with simple imprisonment, or with fine, or with both — and, as an innovation of the BNS, with community service.",
    legalBasis: "Section 356, Bharatiya Nyaya Sanhita, 2023; Sections 499 and 500, Indian Penal Code, 1860.",
    wrongOptionExplanations: ["", "Rigorous imprisonment for five years is not the punishment for defamation.", "A fine alone is one of the available punishments, not the only one.", "An apology in open court is not a statutory punishment."],
    flashpoint: "BNS s.356 defamation → simple imprisonment, or fine, or both, OR COMMUNITY SERVICE.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IPC-028", subject: S, topic: "p8", subtopic: "Defamation — exceptions",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is a valid exception to the offence of defamation under the Indian Penal Code, 1860?",
    options: [
      "Imputation of truth in every case, whether or not it is for the public good",
      "Imputation of truth which is for the public good",
      "Any imputation made in good faith about a private person's private life, without any public interest",
      "Any imputation published in a newspaper, irrespective of its content"
    ],
    correctIndex: 1,
    explanation: "The First Exception to IPC s.499 is that it is not defamation to impute anything which is true concerning any person, if it is for the public good that the imputation should be made or published. Truth alone, without public good, is not a defence.",
    legalBasis: "Section 499 Exceptions, Indian Penal Code, 1860; Section 356, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Truth is a defence only if it is for the public good.", "", "Good faith alone is not enough; the imputation must fall within one of the enumerated exceptions.", "Publication in a newspaper is not a defence in itself."],
    flashpoint: "Defamation → TRUTH + PUBLIC GOOD is the defence. Truth alone is NOT a defence.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-029", subject: S, topic: "p8", subtopic: "Criminal defamation — validity",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "The constitutional validity of criminal defamation under Sections 499 and 500 of the Indian Penal Code, 1860 was upheld by the Supreme Court in:",
    options: [
      "Shreya Singhal v. Union of India, (2015) 5 SCC 1",
      "Subramanian Swamy v. Union of India, (2016) 7 SCC 221",
      "S. Khushboo v. Kanniammal, (2010) 5 SCC 600",
      "K.A. Abbas v. Union of India, (1970) 2 SCC 780"
    ],
    correctIndex: 1,
    explanation: "In Subramanian Swamy v. Union of India the Supreme Court upheld the constitutional validity of criminal defamation, holding that reputation is a facet of Article 21 and that the restriction is a reasonable one under Article 19(2).",
    legalBasis: "Sections 499 and 500, Indian Penal Code, 1860; Article 19(2) and Article 21, Constitution of India; Subramanian Swamy v. Union of India, (2016) 7 SCC 221.",
    wrongOptionExplanations: ["Shreya Singhal struck down s.66A of the IT Act.", "", "S. Khushboo v. Kanniammal concerned obscenity and pre-marital sex.", "K.A. Abbas v. Union of India concerned film censorship and Article 19(1)(a)."],
    flashpoint: "Criminal defamation upheld → Subramanian Swamy v. UOI (2016) 7 SCC 221. Reputation is a facet of Article 21.",
    source: "CASE"
  });

  Q({
    id: "IPC-030", subject: S, topic: "p1", subtopic: "Commutation of sentence",
    difficulty: "Difficult", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Commutation of a sentence of death is dealt with in which section of the Bharatiya Nyaya Sanhita, 2023?",
    options: ["Section 4", "Section 5", "Section 6", "Section 7"],
    correctIndex: 1,
    explanation: "BNS s.5 provides for the commutation of sentences (successor to IPC s.54). Section 4 lists punishments, s.6 deals with fractions of terms of punishment and s.7 with sentences being wholly or partly rigorous or simple.",
    legalBasis: "Sections 4-7, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 4 lists the punishments.", "", "Section 6 deals with fractions of terms of punishment.", "Section 7 provides that a sentence of imprisonment may be wholly or partly rigorous or simple."],
    flashpoint: "BNS s.5 → COMMUTATION of sentence (IPC s.54).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-031", subject: S, topic: "p2", subtopic: "General exceptions — burden",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Where an accused claims the benefit of a general exception under the Indian Penal Code, 1860, on whom does the burden of proof lie and to what standard?",
    options: [
      "On the prosecution, beyond reasonable doubt",
      "On the accused, and it is discharged by a preponderance of probabilities",
      "On the accused, beyond reasonable doubt",
      "On the court, to be determined by the court itself"
    ],
    correctIndex: 1,
    explanation: "Section 105 of the Indian Evidence Act, 1872 (BSA s.104/105 framework) places the burden of proving the existence of circumstances bringing the case within a general exception on the accused. That burden is discharged by a preponderance of probabilities, not beyond reasonable doubt.",
    legalBasis: "Sections 105 and 106, Indian Evidence Act, 1872; BNS ss.14-44 (general exceptions); V.D. Jhingan v. State of U.P., AIR 1966 SC 1762.",
    wrongOptionExplanations: ["The prosecution's burden beyond reasonable doubt applies to the offence, not to a general exception.", "", "The accused's burden is not beyond reasonable doubt.", "The court does not assume the burden of proof."],
    flashpoint: "General exception → BURDEN ON THE ACCUSED, discharged by a PREPONDERANCE OF PROBABILITIES (s.105 Evidence Act).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-032", subject: S, topic: "p2", subtopic: "Actus reus and mens rea",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: Under the Indian Penal Code, 1860, unless the definition of an offence makes the mental element clear, a person cannot ordinarily be convicted of an offence without proof of a guilty mind (actus non facit reum nisi mens sit rea).\nConclusion I: The presumption is that mens rea is an essential ingredient of every offence unless the statute expressly or by necessary implication excludes it.\nConclusion II: Every offence under the Code requires proof of a dishonest intention.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion I follows", "Only Conclusion II follows", "Neither Conclusion I nor II follows"],
    correctIndex: 1,
    explanation: "Conclusion I follows — the maxim actus non facit reum nisi mens sit rea embodies the presumption that mens rea is required unless excluded. Conclusion II does not follow: the Code contains offences of negligence and strict liability, and different offences require different mental states.",
    legalBasis: "Indian Penal Code, 1860 (general scheme of Chapter IV); Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "", "Conclusion II overstates the requirement.", "Conclusion I follows."],
    flashpoint: "Maxim → actus non facit reum nisi mens sit rea. Mens rea is presumed unless excluded — but NOT every offence needs dishonest intention.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-033", subject: S, topic: "p3", subtopic: "Abetment by conspiracy",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "A person abets the doing of a thing by conspiracy when:",
    options: [
      "He merely knows that an offence is about to be committed",
      "He engages with one or more other persons in a conspiracy to do that thing and an act or illegal omission takes place in pursuance of that conspiracy",
      "He is present at the scene of the offence",
      "He fails to inform the police about an offence"
    ],
    correctIndex: 1,
    explanation: "The third mode of abetment under IPC s.107 requires the abettor to engage in a conspiracy and, in pursuance of that conspiracy, an act or illegal omission must take place. Mere knowledge or presence is not abetment.",
    legalBasis: "Section 107, Indian Penal Code, 1860; Section 45, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Mere knowledge is not abetment.", "", "Mere presence does not amount to abetment without instigation or aiding.", "Failure to inform may amount to a distinct offence only where the law imposes such a duty."],
    flashpoint: "Abetment by conspiracy → engagement in the conspiracy + an ACT OR ILLEGAL OMISSION in pursuance of it.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-034", subject: S, topic: "p4", subtopic: "Murder — rarest of rare",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The principle that the death sentence should be awarded only in the 'rarest of rare cases' was laid down in:",
    options: [
      "Jagmohan Singh v. State of U.P., (1973) 1 SCC 20",
      "Bachan Singh v. State of Punjab, (1980) 2 SCC 684",
      "Rajendra Prasad v. State of U.P., (1979) 3 SCC 646",
      "Machhi Singh v. State of Punjab, (1983) 3 SCC 470"
    ],
    correctIndex: 1,
    explanation: "Bachan Singh v. State of Punjab laid down the rarest-of-rare principle and required special reasons to be recorded for imposing death. Machhi Singh (1983) formulated the five categories of rarest-of-rare cases, building on Bachan Singh.",
    legalBasis: "Section 302, Indian Penal Code, 1860; BNS s.103; Bachan Singh v. State of Punjab, (1980) 2 SCC 684; Machhi Singh v. State of Punjab, (1983) 3 SCC 470.",
    wrongOptionExplanations: ["Jagmohan Singh upheld the constitutional validity of the death penalty but did not lay down the rarest-of-rare test.", "", "Rajendra Prasad dealt with the death penalty in the context of s.302 read with s.354(3) but was later clarified by Bachan Singh.", "Machhi Singh applied and elaborated Bachan Singh's principle, but the principle itself was laid down in Bachan Singh."],
    flashpoint: "Rarest of rare → BACHAN SINGH (1980) 2 SCC 684; five categories → MACHHI SINGH (1983) 3 SCC 470.",
    source: "CASE"
  });

  Q({
    id: "IPC-035", subject: S, topic: "p4", subtopic: "Organised crime — scope",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following is NOT an element of the offence of organised crime under Section 111 of the Bharatiya Nyaya Sanhita, 2023?",
    options: [
      "Continuing unlawful activity by a group of persons acting singly or jointly as a syndicate or gang",
      "Use of violence, threat of violence, intimidation or coercion, or any other unlawful means",
      "The activity must be carried on only with the object of gaining pecuniary benefits alone, and not for any other purpose",
      "The activity may be aimed at gaining pecuniary benefits or undue economic or other advantage"
    ],
    correctIndex: 2,
    explanation: "Organised crime under BNS s.111 covers continuing unlawful activity by a crime syndicate using violence, threats, intimidation, coercion or other unlawful means, whether to gain pecuniary benefits or undue economic, financial or other advantage. Restricting it to pecuniary benefit alone is therefore inaccurate.",
    legalBasis: "Section 111, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["This is an element of the offence.", "This is an element of the offence.", "", "The provision covers pecuniary benefit AND other undue advantage — which is why the 'pecuniary benefit alone' formulation is not an element."],
    flashpoint: "BNS s.111 organised crime → unlawful activity by a syndicate using violence/coercion for PECUNIARY BENEFIT OR OTHER UNDUE ADVANTAGE.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-036", subject: S, topic: "p5", subtopic: "Kidnapping — consent of guardian",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A girl aged fifteen leaves her parental home voluntarily and stays with X, who keeps her with him without the consent of her lawful guardian. The girl had consented to being with X. Which of the following is the correct legal position?",
    options: [
      "Since the girl consented, X has committed no offence of kidnapping",
      "X has committed kidnapping from lawful guardianship, because the consent of the minor is immaterial and the taking was without the guardian's consent",
      "X has committed no offence because the girl is capable of taking care of herself",
      "X has committed only the offence of wrongful restraint"
    ],
    correctIndex: 1,
    explanation: "For kidnapping from lawful guardianship, what matters is the absence of the lawful guardian's consent. The consent of the minor is irrelevant. Under IPC s.361 (BNS s.137) a minor means a male under sixteen and a female under eighteen years of age.",
    legalBasis: "Sections 359-361, Indian Penal Code, 1860; Section 137, Bharatiya Nyaya Sanhita, 2023; State of Haryana v. Raja Ram, (1973) 1 SCC 544.",
    wrongOptionExplanations: ["The minor's own consent is immaterial for kidnapping from lawful guardianship.", "", "Section 361 does not turn on the minor's capacity for self-care.", "The offence of kidnapping itself is made out."],
    flashpoint: "Kidnapping from lawful guardianship → GUARDIAN'S CONSENT is decisive; the MINOR'S CONSENT IS IMMATERIAL.",
    source: "CASE"
  });

  Q({
    id: "IPC-037", subject: S, topic: "p6", subtopic: "Criminal breach of trust",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The essential ingredients of criminal breach of trust under the Indian Penal Code, 1860 are:",
    options: [
      "Entrustment of property, dishonest misappropriation or conversion of that property, or disposal in violation of a direction of law or a legal contract",
      "Deception and delivery of property",
      "Taking of movable property without consent",
      "Obtaining property by putting a person in fear of injury"
    ],
    correctIndex: 0,
    explanation: "Criminal breach of trust requires (i) entrustment with property or dominion over property, and (ii) dishonest misappropriation, conversion, use or disposal of that property in violation of any direction of law, or of any legal contract, express or implied, or in violation of the mode prescribed for the discharge of the trust.",
    legalBasis: "Section 405, Indian Penal Code, 1860; Section 316, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["", "Deception and delivery describe cheating.", "Taking without consent describes theft.", "Putting in fear of injury describes extortion."],
    flashpoint: "Criminal breach of trust → ENTRUSTMENT + DISHONEST misappropriation or breach of a direction of law / legal contract.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-038", subject: S, topic: "p6", subtopic: "Mischief",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Mischief is defined in which section of the Indian Penal Code, 1860 (BNS s.324)?",
    options: ["Section 415", "Section 425", "Section 441", "Section 403"],
    correctIndex: 1,
    explanation: "Mischief is defined in IPC s.425 as causing wrongful loss or damage to the public or to any person by destroying or diminishing the value or utility of any property, or by affecting it injuriously. It is punishable under IPC s.426 and corresponds to BNS s.324.",
    legalBasis: "Sections 425 and 426, Indian Penal Code, 1860; Section 324, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 415 defines cheating.", "", "Section 441 defines criminal trespass.", "Section 403 defines dishonest misappropriation of property."],
    flashpoint: "Mischief → IPC s.425 (defines) / s.426 (punishes) → BNS s.324.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-039", subject: S, topic: "p7", subtopic: "Waging war",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Waging or attempting to wage war against the Government of India is punishable under which section of the Indian Penal Code, 1860 and the corresponding section of the BNS, 2023?",
    options: ["IPC s.121 / BNS s.147", "IPC s.124A / BNS s.152", "IPC s.120A / BNS s.61", "IPC s.143 / BNS s.189"],
    correctIndex: 0,
    explanation: "IPC s.121 punishes waging or attempting to wage war, or abetting the waging of war, against the Government of India. The corresponding provision in the BNS is s.147.",
    legalBasis: "Section 121, Indian Penal Code, 1860; Section 147, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["", "IPC s.124A (sedition) corresponds to BNS s.152 — endangering sovereignty, unity and integrity.", "IPC s.120A defines criminal conspiracy; BNS s.61 does the same.", "IPC s.143 concerns unlawful assembly; BNS s.189 does the same."],
    flashpoint: "IPC s.121 waging war → BNS s.147. IPC s.124A sedition → BNS s.152.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-040", subject: S, topic: "p8", subtopic: "Criminal intimidation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Criminal intimidation under the Bharatiya Nyaya Sanhita, 2023 is defined in which section?",
    options: ["Section 351", "Section 352", "Section 356", "Section 357"],
    correctIndex: 0,
    explanation: "BNS s.351 defines criminal intimidation (IPC s.503). BNS s.352 concerns intentional insult with intent to provoke a breach of the peace, s.356 defamation and s.357 breach of a contract to attend on and supply the wants of a helpless person.",
    legalBasis: "Sections 351, 352, 356 and 357, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["", "Section 352 is intentional insult with intent to provoke a breach of the peace.", "Section 356 is defamation.", "Section 357 concerns breach of a contract to attend on and supply the wants of a helpless person."],
    flashpoint: "BNS s.351 → criminal intimidation; s.356 → defamation. They sit in the same chapter — do not mix them.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-041", subject: S, topic: "p1", subtopic: "Fine and default",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Statement-Conclusion",
    question: "Statement: Where an offender is punishable with fine only under the Bharatiya Nyaya Sanhita, 2023, the amount of the fine is unlimited unless the provision itself prescribes a limit, and a sentence of imprisonment in default of payment of fine may be imposed within the limits prescribed by Section 8.\nConclusion I: A sentence of imprisonment in default of payment of fine is a mode of enforcing the fine and not a substantive punishment for the offence.\nConclusion II: Where a court imposes a fine, it must in every case impose imprisonment in default.\nWhich conclusion(s) follow?",
    options: ["Both Conclusions I and II follow", "Only Conclusion I follows", "Only Conclusion II follows", "Neither Conclusion I nor II follows"],
    correctIndex: 1,
    explanation: "Conclusion I follows — imprisonment in default of payment of fine is a mode of enforcing the fine. Conclusion II does not follow: the imposition of imprisonment in default is subject to the limits in the section, and it is not mandatory in every case.",
    legalBasis: "Section 8 and Section 64-70 (IPC) / Section 8, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Conclusion II does not follow.", "", "Conclusion II overstates the position.", "Conclusion I follows."],
    flashpoint: "Imprisonment in default of fine → a MODE OF ENFORCING the fine, not a separate punishment.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-042", subject: S, topic: "p2", subtopic: "Mistake of fact",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Indian Penal Code, 1860, a mistake of fact in good faith is a defence, whereas a mistake of law is generally not. What is the reason for this distinction?",
    options: [
      "Because the law presumes that every person knows the law, whereas facts are matters of individual perception",
      "Because mistakes of law are always punished with a higher sentence",
      "Because mistakes of fact are always reasonable",
      "Because the Code expressly excludes all mistakes from being a defence"
    ],
    correctIndex: 0,
    explanation: "IPC ss.76 and 79 protect a person who, by reason of a mistake of fact and in good faith, believes himself justified by law or believes a fact to exist which would justify the act. The maxim ignorantia juris non excusat supplies the reason for excluding mistake of law — every person is presumed to know the law.",
    legalBasis: "Sections 76 and 79, Indian Penal Code, 1860; BNS ss.14 and 17.",
    wrongOptionExplanations: ["", "There is no rule of a higher sentence for mistakes of law.", "A mistake of fact must also be in good faith and reasonable.", "The Code protects mistakes of fact, not mistakes of law."],
    flashpoint: "Mistake of FACT in good faith → defence. Mistake of LAW → NO defence (ignorantia juris non excusat).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-043", subject: S, topic: "p4", subtopic: "Culpable homicide — limb analysis",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Assertion-Reason",
    question: "Assertion (A): An act which causes death may amount to culpable homicide without amounting to murder.\nReason (R): Culpable homicide requires the death of a human being caused by an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that the act is likely to cause death, and murder requires additionally one of the four clauses of the murder provision, subject to the five exceptions.\nDecide the correct option.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Both statements are accurate. Murder requires culpable homicide plus one of the four clauses in the definition of murder, and the exceptions to that definition reduce murder to culpable homicide not amounting to murder. The reason therefore explains the assertion.",
    legalBasis: "Sections 299 and 300, Indian Penal Code, 1860; Sections 100 and 101, Bharatiya Nyaya Sanhita, 2023; State of A.P. v. Rayavarapu Punnayya, (1976) 4 SCC 382.",
    wrongOptionExplanations: ["", "The reason is the complete explanation of the assertion.", "(R) correctly states the definitions.", "(A) correctly states the law."],
    flashpoint: "Murder = culpable homicide + one of the four clauses in s.300/s.101, subject to the five exceptions.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-044", subject: S, topic: "p6", subtopic: "Dishonest misappropriation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "How does dishonest misappropriation of property under IPC s.403 differ from criminal breach of trust under IPC s.405?",
    options: [
      "There is no difference; both are the same offence",
      "Criminal breach of trust requires entrustment or dominion over property, whereas dishonest misappropriation does not",
      "Dishonest misappropriation requires entrustment, whereas criminal breach of trust does not",
      "Criminal breach of trust applies only to immovable property"
    ],
    correctIndex: 1,
    explanation: "The distinguishing feature of criminal breach of trust is the entrustment of property or the exercise of dominion over property by the accused. Dishonest misappropriation under s.403 does not require entrustment. Where entrustment exists, the graver offence under s.405/s.406 applies.",
    legalBasis: "Sections 403, 405 and 406, Indian Penal Code, 1860; Sections 314 and 316, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["The offences are distinct.", "", "This reverses the requirement.", "Both offences apply to movable property."],
    flashpoint: "Criminal breach of trust → ENTRUSTMENT is the key element. Dishonest misappropriation → no entrustment.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-045", subject: S, topic: "p5", subtopic: "Trafficking",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Trafficking of persons is dealt with in which section of the Bharatiya Nyaya Sanhita, 2023?",
    options: ["Section 140", "Section 141", "Section 143", "Section 146"],
    correctIndex: 2,
    explanation: "BNS s.143 deals with trafficking of persons. Section 140 concerns kidnapping or abducting to murder or for ransom, s.141 the importation of a girl or boy from a foreign country, and s.146 unlawful compulsory labour.",
    legalBasis: "Sections 143, 144, 145 and 146, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 140 is kidnapping or abducting to murder or for ransom.", "Section 141 is importation of a girl or boy from a foreign country.", "", "Section 146 is unlawful compulsory labour."],
    flashpoint: "BNS s.143 → TRAFFICKING; s.144 → exploitation of a trafficked person; s.146 → unlawful compulsory labour.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-046", subject: S, topic: "p3", subtopic: "Abetment — punishment",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "A instigates B to set fire to a dwelling house. B, being insane and knowing nothing of the nature of the act, sets fire to the house. Which of the following is the correct legal position regarding A's liability?",
    options: [
      "A is not liable because B committed no offence",
      "A is liable for abetment; where the person abetted is incapable by reason of insanity of committing the offence, the abettor is liable in the same manner and to the same extent as if he had abetted the offence to be committed by a person capable of committing it",
      "A is liable only for a civil wrong",
      "A's liability depends entirely on whether B is prosecuted"
    ],
    correctIndex: 1,
    explanation: "Under IPC s.108, an abettor is a person who abets an offence or the commission of an act which would be an offence if committed by a person capable of committing it. Where the person abetted is incapable of committing the offence by reason of insanity, the abettor is still liable in the same manner and to the same extent as if the offence had been committed by a person capable of committing it.",
    legalBasis: "Sections 107, 108 and 109, Indian Penal Code, 1860; BNS ss.45, 46 and 49.",
    wrongOptionExplanations: ["The insanity of the person abetted does not exonerate the abettor.", "", "The liability is criminal, not merely civil.", "The abettor's liability is independent of the prosecution of the principal offender."],
    flashpoint: "IPC s.108 → an abettor is liable even where the person abetted is incapable of committing the offence (e.g. by insanity).",
    source: "STATUTE"
  });

  Q({
    id: "IPC-047", subject: S, topic: "p6", subtopic: "Stolen property",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Which section of the Bharatiya Nyaya Sanhita, 2023 defines 'stolen property'?",
    options: ["Section 314", "Section 316", "Section 317", "Section 318"],
    correctIndex: 2,
    explanation: "BNS s.317 defines stolen property (IPC s.410). Section 314 concerns dishonest misappropriation, s.316 criminal breach of trust and s.318 cheating.",
    legalBasis: "Section 317, Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["Section 314 is dishonest misappropriation of property.", "Section 316 is criminal breach of trust.", "", "Section 318 is cheating."],
    flashpoint: "BNS s.317 → STOLEN PROPERTY.",
    source: "STATUTE"
  });

  Q({
    id: "IPC-048", subject: S, topic: "p1", subtopic: "Old Act and new Sanhita — commencement",
    difficulty: "Easy", cognitiveLevel: "Recall", questionType: "Direct",
    question: "The Bharatiya Nyaya Sanhita, 2023 came into force on:",
    options: ["25 December 2023", "1 January 2024", "1 April 2024", "1 July 2024"],
    correctIndex: 3,
    explanation: "The Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023) received presidential assent on 25 December 2023 and came into force on 1 July 2024, when it replaced the Indian Penal Code, 1860. The Bharatiya Nagarik Suraksha Sanhita, 2023 and the Bharatiya Sakshya Adhiniyam, 2023 also commenced on the same date.",
    legalBasis: "Section 1(2) and the commencement notification for the Bharatiya Nyaya Sanhita, 2023.",
    wrongOptionExplanations: ["25 December 2023 is the date of presidential assent, not commencement.", "1 January 2024 was not the commencement date.", "1 April 2024 was not the commencement date.", ""],
    flashpoint: "BNS + BNSS + BSA → ALL THREE came into force on 1 JULY 2024.",
    source: "PAPER-PATTERN"
  });
})();
