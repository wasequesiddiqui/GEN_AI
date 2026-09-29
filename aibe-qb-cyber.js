/* ============================================================================
 * AIBE XXI — Question Bank: Cyber Law
 * Weightage: 2 / 100. 12 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "cyber";

  Q({
    id: "CYB-001", subject: S, topic: "y1", subtopic: "Electronic record",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Multi",
    question: "Under the Information Technology Act, 2000, the term 'electronic record' includes which of the following?\nI. Data stored in digital form.\nII. Image or sound stored or transmitted electronically.\nIII. Information generated in microfilm or computer-generated microfiche.\nIV. Information recorded only on paper without any electronic processing.",
    options: ["I and II", "II, III and IV", "I, II, III and IV", "I, II and III"],
    correctIndex: 3,
    explanation: "Section 2(1)(t) defines an electronic record as data, record or data generated, image or sound stored, received or sent in an electronic form or micro film or computer-generated micro fiche. Statement IV is outside the definition because a purely paper record that has not undergone any electronic process is not an electronic record.",
    legalBasis: "Section 2(1)(t), Information Technology Act, 2000.",
    wrongOptionExplanations: ["Statement III is also within the definition.", "Statement IV is outside the definition.", "Statement IV is outside the definition.", ""],
    flashpoint: "'Electronic record' (IT Act s.2(1)(t)) → data | image or sound stored/sent electronically | MICRO FILM | COMPUTER-GENERATED MICRO FICHE. NOT paper-only records.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CYB-002", subject: S, topic: "y2", subtopic: "Civil vs criminal liability",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Scenario",
    question: "The Information Technology Act, 2000 distinguishes between civil liability and criminal liability in cases of misuse of computer resources. In which of the following situations would such conduct attract criminal punishment rather than mere compensation?",
    options: [
      "When the damage to computer resources exceeds a prescribed monetary limit",
      "When the affected party chooses to initiate criminal proceedings",
      "When the act is done dishonestly or fraudulently in addition to unauthorised access",
      "When access to a computer system is without permission, irrespective of intent"
    ],
    correctIndex: 2,
    explanation: "Section 43 creates civil liability for unauthorised access, downloading, copying, damage, disruption and similar acts, and s.43 provides for compensation. Section 66 makes the same conduct a criminal offence where it is done 'dishonestly or fraudulently'. The distinguishing element is therefore the dishonest or fraudulent intention, not the amount of the loss and not the choice of the complainant.",
    legalBasis: "Sections 43, 43A, 66 and 66C, Information Technology Act, 2000.",
    wrongOptionExplanations: [
      "There is no monetary threshold that converts civil liability into criminal liability under the scheme.",
      "The choice of the complainant does not determine the character of the liability.",
      "",
      "Unauthorised access simpliciter attracts civil liability under s.43."
    ],
    flashpoint: "IT Act s.43 → CIVIL (compensation). s.66 → CRIMINAL where the act is done DISHONESTLY OR FRAUDULENTLY.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "CYB-003", subject: S, topic: "y3", subtopic: "Section 66A — struck down",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 66A of the Information Technology Act, 2000, which penalised sending offensive messages through a computer resource, was:",
    options: [
      "Struck down as unconstitutional in Shreya Singhal v. Union of India, (2015) 5 SCC 1, for being vague and for its chilling effect on freedom of speech",
      "Upheld as constitutionally valid",
      "Amended by Parliament in 2020",
      "Repealed by the Bharatiya Nyaya Sanhita, 2023"
    ],
    correctIndex: 0,
    explanation: "In Shreya Singhal v. Union of India the Supreme Court struck down s.66A as unconstitutional, holding that the expressions used were vague and that the provision had a chilling effect on the freedom of speech and expression guaranteed by Article 19(1)(a) and was not saved by any of the reasonable restrictions in Article 19(2).",
    legalBasis: "Article 19(1)(a) and 19(2), Constitution of India; Section 66A, Information Technology Act, 2000; Shreya Singhal v. Union of India, (2015) 5 SCC 1.",
    wrongOptionExplanations: [
      "",
      "Section 66A was struck down.",
      "The provision was struck down by the Supreme Court, not amended by Parliament.",
      "The striking down was by the Supreme Court in 2015, not by the BNS."
    ],
    flashpoint: "IT Act s.66A → STRUCK DOWN in SHREYA SINGHAL v. UOI (2015) 5 SCC 1 (vagueness + chilling effect on speech).",
    source: "CASE"
  });

  Q({
    id: "CYB-004", subject: S, topic: "y3", subtopic: "Identity theft",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Information Technology Act, 2000, identity theft is punishable under:",
    options: ["Section 66", "Section 66B", "Section 66C", "Section 66D"],
    correctIndex: 2,
    explanation: "Section 66C punishes identity theft — the fraudulent or dishonest use of the electronic signature, password or any other unique identification feature of any other person. Section 66D punishes cheating by personation by using a computer resource or a communication device. Section 66B punishes dishonestly receiving stolen computer resource or communication device. Section 66 punishes computer-related offences.",
    legalBasis: "Sections 66, 66B, 66C and 66D, Information Technology Act, 2000.",
    wrongOptionExplanations: ["Section 66 is the general computer-related offence.", "Section 66B is receiving a stolen computer resource or communication device.", "", "Section 66D is cheating by personation by using a computer resource."],
    flashpoint: "IT Act s.66C → IDENTITY THEFT; s.66D → CHEATING BY PERSONATION using a computer resource.",
    source: "STATUTE"
  });

  Q({
    id: "CYB-005", subject: S, topic: "y1", subtopic: "Legal recognition of electronic records",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 4 of the Information Technology Act, 2000 provides that:",
    options: [
      "Electronic records have no legal recognition",
      "Where any law requires information to be in writing, that requirement is deemed to be satisfied if the information is in the form of an electronic record, subject to the conditions in the section",
      "Electronic records are recognised only for the purposes of taxation",
      "Electronic records must be printed to be legally effective"
    ],
    correctIndex: 1,
    explanation: "Section 4 provides that where any law requires information to be in writing, printed or in a typewritten form, that requirement is deemed to be satisfied if the information is rendered or made available in an electronic form and is accessible so as to be usable for a subsequent reference. Section 5 similarly recognises electronic signatures, and s.10A validates contracts formed through electronic means.",
    legalBasis: "Sections 4, 5 and 10A, Information Technology Act, 2000.",
    wrongOptionExplanations: [
      "Electronic records are legally recognised.",
      "",
      "Recognition is not confined to taxation.",
      "Printing is not a condition of legal effectiveness."
    ],
    flashpoint: "IT Act s.4 → legal recognition of ELECTRONIC RECORDS to satisfy a requirement of WRITING. s.10A → validity of contracts formed electronically.",
    source: "STATUTE"
  });

  Q({
    id: "CYB-006", subject: S, topic: "y2", subtopic: "Body corporate — data protection",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Section 43A of the Information Technology Act, 2000 imposes liability on a body corporate that is:",
    options: [
      "Possessing, dealing with or handling any sensitive personal data or information in a computer resource which it owns, controls or operates, and which is negligent in implementing and maintaining reasonable security practices and procedures, resulting in wrongful gain or wrongful loss to any person",
      "Engaged in the business of selling computer hardware",
      "Registered under the Companies Act, 2013 only",
      "Engaged in providing internet services"
    ],
    correctIndex: 0,
    explanation: "Section 43A provides that where a body corporate, possessing, dealing with or handling any sensitive personal data or information in a computer resource which it owns, controls or operates, is negligent in implementing and maintaining reasonable security practices and procedures, and thereby causes wrongful gain or wrongful loss to any person, the body corporate shall be liable to pay damages by way of compensation to the person affected. The provision was inserted by the 2008 Amendment and now needs to be read with the Digital Personal Data Protection Act, 2023.",
    legalBasis: "Section 43A, Information Technology Act, 2000; Digital Personal Data Protection Act, 2023.",
    wrongOptionExplanations: [
      "",
      "The provision is not confined to hardware sellers.",
      "There is no requirement of registration under the Companies Act for the section to apply.",
      "The provision is not confined to internet service providers."
    ],
    flashpoint: "IT Act s.43A → liability of a BODY CORPORATE for NEGLIGENCE in maintaining REASONABLE SECURITY PRACTICES for SENSITIVE PERSONAL DATA.",
    source: "STATUTE"
  });

  Q({
    id: "CYB-007", subject: S, topic: "y1", subtopic: "Electronic record and evidence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "In the context of the law of evidence, an electronic record:",
    options: [
      "Is not a document under the law of evidence",
      "Is admissible only in proceedings under the Information Technology Act, 2000",
      "Is admissible only if the original device is produced before the court in every case",
      "Is a document, and is admissible subject to the conditions prescribed for its proof, including the certificate requirement where it is produced as secondary evidence"
    ],
    correctIndex: 3,
    explanation: "An electronic record is a document within the meaning of the law of evidence. Its admissibility where produced as secondary evidence is governed by the certificate requirement under s.65B of the Indian Evidence Act, 1872 (now s.63 of the BSA, 2023). Anvar P.V. v. P.K. Basheer and Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal govern the position.",
    legalBasis: "Sections 3, 65A and 65B, Indian Evidence Act, 1872; Section 63, Bharatiya Sakshya Adhiniyam, 2023; Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473.",
    wrongOptionExplanations: [
      "An electronic record is a document.",
      "Electronic records are admissible in all judicial proceedings.",
      "Production of the original device is not always required.",
      ""
    ],
    flashpoint: "Electronic record = DOCUMENT; admissibility per s.65B (Evidence Act) / s.63 (BSA) where produced as SECONDARY evidence.",
    source: "STATUTE"
  });

  Q({
    id: "CYB-008", subject: S, topic: "y4", subtopic: "Extra-territorial application",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 75 of the Information Technology Act, 2000, the Act applies to an offence or contravention committed outside India by any person if:",
    options: [
      "The person is a citizen of India",
      "The person has an account in an Indian bank",
      "The act or conduct constituting the offence or contravention involves a computer, computer system or computer network located in India",
      "The person has visited India within the preceding five years"
    ],
    correctIndex: 2,
    explanation: "Section 75 provides that the Act shall apply to an offence or contravention committed outside India by any person if the act or conduct constituting the offence or contravention involves a computer, computer system or computer network located in India. This is the connecting factor for the extra-territorial application of the Act.",
    legalBasis: "Section 75, Information Technology Act, 2000.",
    wrongOptionExplanations: [
      "Citizenship is not the statutory connecting factor under s.75.",
      "A bank account in India is not the connecting factor.",
      "",
      "A prior visit to India is not the connecting factor."
    ],
    flashpoint: "IT Act s.75 → extra-territorial application where the conduct INVOLVES A COMPUTER, COMPUTER SYSTEM OR NETWORK LOCATED IN INDIA.",
    source: "STATUTE"
  });

  Q({
    id: "CYB-009", subject: S, topic: "y5", subtopic: "Data protection",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Digital Personal Data Protection Act, 2023, the terms used for the individual to whom the personal data relates and for the entity that determines the purpose and means of processing are:",
    options: ["Data owner and data processor", "Data subject and data controller", "Data principal and data fiduciary", "Data holder and data custodian"],
    correctIndex: 2,
    explanation: "The Digital Personal Data Protection Act, 2023 uses 'data principal' for the individual to whom the personal data relates and 'data fiduciary' for the person who alone or in conjunction with other persons determines the purpose and means of processing personal data. Processing is based on the consent of the data principal or on specified legitimate uses.",
    legalBasis: "Digital Personal Data Protection Act, 2023.",
    wrongOptionExplanations: [
      "These are not the statutory terms.",
      "'Data subject' and 'data controller' are terms used in the European GDPR framework, not in the Indian Act.",
      "",
      "These are not the statutory terms."
    ],
    flashpoint: "DPDP Act 2023 → DATA PRINCIPAL (individual) and DATA FIDUCIARY (determines purpose and means of processing).",
    source: "STATUTE"
  });

  Q({
    id: "CYB-010", subject: S, topic: "y3", subtopic: "Interception and monitoring",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Information Technology Act, 2000, the power of the Central Government or a State Government to issue directions for the interception, monitoring or decryption of any information through any computer resource is conferred by:",
    options: ["Section 69", "Section 67", "Section 72", "Section 79"],
    correctIndex: 0,
    explanation: "Section 69 empowers the Central Government or a State Government to issue directions for the interception, monitoring or decryption of any information through any computer resource, in the interest of the sovereignty or integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or for the prevention of incitement to the commission of any cognizable offence. Section 69A concerns blocking of access, s.67 obscene material, s.72 breach of confidentiality and privacy, and s.79 the exemption from liability of intermediaries.",
    legalBasis: "Sections 67, 69, 69A, 72 and 79, Information Technology Act, 2000; Shreya Singhal v. Union of India, (2015) 5 SCC 1.",
    wrongOptionExplanations: [
      "",
      "Section 67 punishes publishing obscene material in electronic form.",
      "Section 72 punishes breach of confidentiality and privacy.",
      "Section 79 provides the exemption from liability of intermediaries subject to conditions."
    ],
    flashpoint: "IT Act s.69 → INTERCEPTION/MONITORING/DECRYPTION; s.69A → BLOCKING; s.79 → INTERMEDIARY exemption.",
    source: "STATUTE"
  });

  Q({
    id: "CYB-011", subject: S, topic: "y4", subtopic: "Adjudicating officer and compensation",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Information Technology Act, 2000, a claim for compensation for a contravention of Section 43 is adjudicated by:",
    options: [
      "The adjudicating officer appointed under Section 46 of the Act, and an appeal from the order of the adjudicating officer lies to the Appellate Tribunal (the Telecom Disputes Settlement and Appellate Tribunal)",
      "A civil court",
      "The Supreme Court directly",
      "The National Company Law Tribunal"
    ],
    correctIndex: 0,
    explanation: "Section 43 read with s.46 provides for adjudication by an adjudicating officer appointed by the Central Government, who must be satisfied that a person has contravened the provisions and must have regard to the amount of gain of unfair advantage and the amount of loss caused. Section 57 provides an appeal to the Appellate Tribunal, which is the Telecom Disputes Settlement and Appellate Tribunal.",
    legalBasis: "Sections 43, 46, 47 and 57, Information Technology Act, 2000.",
    wrongOptionExplanations: [
      "",
      "The claim is adjudicated by the adjudicating officer, not a civil court.",
      "The Supreme Court is not the forum of first instance.",
      "The NCLT has no jurisdiction under the IT Act."
    ],
    flashpoint: "IT Act s.43 claim → adjudicated by the ADJUDICATING OFFICER (s.46); appeal to the APPELLATE TRIBUNAL (TDSAT) under s.57.",
    source: "STATUTE"
  });

  Q({
    id: "CYB-012", subject: S, topic: "y1", subtopic: "Electronic signature vs digital signature",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Which of the following correctly states the relationship between a 'digital signature' and an 'electronic signature' under the Information Technology Act, 2000?",
    options: [
      "A digital signature is a wider concept that includes an electronic signature",
      "The two terms are identical in the Act",
      "A digital signature is a species of electronic signature involving an asymmetric cryptosystem and a hash function, and was originally the only form recognised until the concept of an electronic signature was introduced by the 2008 Amendment",
      "An electronic signature is valid only for Government transactions"
    ],
    correctIndex: 2,
    explanation: "The Act originally recognised only 'digital signature', defined in s.2(1)(p) as authentication of an electronic record by a subscriber by means of an electronic method or procedure in accordance with s.3, which employs an asymmetric cryptosystem and a hash function. The 2008 Amendment introduced the wider concept of 'electronic signature' in s.2(1)(ta), of which a digital signature is one species.",
    legalBasis: "Sections 2(1)(p) and 2(1)(ta), and Sections 3, 3A, 5 and 10, Information Technology Act, 2000 (as amended in 2008).",
    wrongOptionExplanations: [
      "The relationship is the reverse — an electronic signature is the wider concept.",
      "The two are not identical; the digital signature is one species.",
      "",
      "An electronic signature is not confined to Government transactions."
    ],
    flashpoint: "ELECTRONIC SIGNATURE (s.2(1)(ta)) is the WIDER concept; DIGITAL SIGNATURE (s.2(1)(p)) is a species using an asymmetric cryptosystem and a hash function.",
    source: "STATUTE"
  });
})();
