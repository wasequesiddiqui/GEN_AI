/* ============================================================================
 * AIBE XXI — Question Bank: Intellectual Property Law
 * Weightage: 2 / 100. 12 questions.
 * ==========================================================================*/
window.AIBE_QUESTIONS = window.AIBE_QUESTIONS || [];
(function () {
  "use strict";
  var Q = function (o) { window.AIBE_QUESTIONS.push(o); };
  var S = "ip";

  Q({
    id: "IP-001", subject: S, topic: "h1", subtopic: "Government use of patents",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under the Patents Act, 1970, the grant of a patent is subject to the condition, among others, that any process in respect of which the patent is granted may be used by or on behalf of the Government for the purpose merely of its own use. This condition, which operates without the requirement of the patentee's consent, is contained in:",
    options: [
      "Section 100 of the Patents Act, 1970",
      "Section 84 of the Patents Act, 1970",
      "Section 47 of the Patents Act, 1970",
      "Section 107A of the Patents Act, 1970"
    ],
    correctIndex: 2,
    explanation: "Section 47 of the Patents Act, 1970 provides that the grant of a patent is subject to certain conditions, including that any machine, apparatus or other article in respect of which the patent is granted, or any article made by using a process in respect of which the patent is granted, may be imported or made by or on behalf of the Government for the purpose merely of its own use, that any process in respect of which the patent is granted may be used by or on behalf of the Government for the purpose merely of its own use, and that the patented article may be made or used for the purpose merely of experiment or research. Section 84 provides for compulsory licences after three years from the date of sealing of the patent, s.100 confers on the Central Government the power to use inventions for the purposes of the Government in a broader sense, and s.107A deals with the exhaustion of patent rights and parallel importation.",
    legalBasis: "Sections 47, 84, 100, 102 and 107A, Patents Act, 1970.",
    wrongOptionExplanations: [
      "Section 100 concerns the power of the Central Government to use inventions for the purposes of the Government, a distinct power exercised by notification.",
      "Section 84 provides for compulsory licences after three years from the date of sealing.",
      "",
      "Section 107A concerns the exhaustion of rights and parallel importation."
    ],
    flashpoint: "Patents Act s.47 → the GOVERNMENT may USE the invention for its OWN PURPOSES without consent. s.84 → COMPULSORY LICENCE after 3 YEARS from sealing.",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IP-002", subject: S, topic: "h1", subtopic: "Term of a patent",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under the Patents Act, 1970, the term of every patent granted is:",
    options: [
      "Fourteen years from the date of filing",
      "Ten years from the date of grant, renewable",
      "Twenty years from the date of sealing",
      "Twenty years from the date of filing of the application for the patent"
    ],
    correctIndex: 3,
    explanation: "Section 53 provides that the term of every patent granted, and of every patent which has not expired and has not ceased to have effect, is twenty years from the date of filing of the application for the patent, subject to the payment of renewal fees under s.53(2). The present term of twenty years was introduced by the Patents (Amendment) Act, 2002, replacing the earlier term of fourteen years from the date of sealing.",
    legalBasis: "Sections 53, 53(2) and 142, Patents Act, 1970.",
    wrongOptionExplanations: [
      "Fourteen years from the date of sealing was the earlier position.",
      "The term is not ten years, and it is not renewable.",
      "The twenty years run from the date of filing, not sealing.",
      ""
    ],
    flashpoint: "TERM OF A PATENT → TWENTY YEARS from the DATE OF FILING (s.53).",
    source: "STATUTE"
  });

  Q({
    id: "IP-003", subject: S, topic: "h1", subtopic: "Compulsory licence",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Patents Act, 1970, an application for a compulsory licence may be made:",
    options: [
      "Any time after the grant of the patent",
      "Only after the expiry of the term of the patent",
      "Only after the expiry of three years from the date of sealing of the patent, on the grounds specified in the Act, including that the reasonable requirements of the public with respect to the patented invention have not been satisfied or that the patented invention is not available to the public at a reasonably affordable price",
      "Only by the Government"
    ],
    correctIndex: 2,
    explanation: "Section 84 provides that an application for a compulsory licence may be made after the expiry of three years from the date of sealing of the patent, by any person interested, on the grounds that the reasonable requirements of the public with respect to the patented invention have not been satisfied, that the patented invention is not available to the public at a reasonably affordable price, or that the patented invention is not worked in the territory of India. Section 92A provides for compulsory licences for the export of pharmaceutical products to countries with insufficient manufacturing capacity.",
    legalBasis: "Sections 84, 90, 92 and 92A, Patents Act, 1970.",
    wrongOptionExplanations: [
      "The three-year period from sealing must expire first.",
      "The application is made during the term, not after its expiry.",
      "",
      "An application may be made by any person interested, not only the Government."
    ],
    flashpoint: "COMPULSORY LICENCE (s.84) → after THREE YEARS from the DATE OF SEALING; grounds: public requirement not met, unaffordable price, not worked in India (Bayer/Nexavar).",
    source: "STATUTE"
  });

  Q({
    id: "IP-004", subject: S, topic: "h1", subtopic: "Patentability of incremental inventions",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Section 3(d) of the Patents Act, 1970 excludes from patentability:",
    options: [
      "All pharmaceutical inventions",
      "All inventions relating to computer programs",
      "The mere discovery of a new form of a known substance which does not result in the enhancement of the known efficacy of that substance, and the mere discovery of any new property or new use for a known substance, or of the mere use of a known process, machine or apparatus unless such known process results in a new product or employs at least one new reactant",
      "All inventions relating to agricultural methods"
    ],
    correctIndex: 2,
    explanation: "Section 3(d) excludes from patentability the mere discovery of a new form of a known substance which does not result in the enhancement of the known efficacy of that substance, or the mere discovery of any new property or new use for a known substance or of the mere use of a known process, machine or apparatus unless such known process results in a new product or employs at least one new reactant. The Explanation states that salts, esters, ethers, polymorphs, metabolites, pure forms, particle size, isomers, mixtures of isomers, complexes, combinations and other derivatives of a known substance shall be considered to be the same substance unless they differ significantly in properties with regard to efficacy. Novartis AG v. Union of India upheld the provision.",
    legalBasis: "Section 3(d) and its Explanation, Patents Act, 1970; Novartis AG v. Union of India, (2013) 6 SCC 1.",
    wrongOptionExplanations: [
      "Not all pharmaceutical inventions are excluded.",
      "Computer programs are dealt with in s.3(k).",
      "",
      "Agricultural methods are dealt with in s.3(h)."
    ],
    flashpoint: "Patents Act s.3(d) → NO patent for a NEW FORM of a KNOWN SUBSTANCE without ENHANCED EFFICACY; upheld in NOVARTIS v. UOI (2013) 6 SCC 1.",
    source: "CASE"
  });

  Q({
    id: "IP-005", subject: S, topic: "h2", subtopic: "Term of copyright — general",
    difficulty: "Moderate", cognitiveLevel: "Recall", questionType: "Direct",
    question: "Under Section 22 of the Copyright Act, 1957, the term of copyright in a literary, dramatic, musical or artistic work published within the lifetime of the author subsists for:",
    options: [
      "Twenty years from the date of publication",
      "The lifetime of the author plus sixty years from the beginning of the calendar year next following the year in which the author dies",
      "Sixty years from the date of publication",
      "The lifetime of the author plus twenty years"
    ],
    correctIndex: 1,
    explanation: "Section 22 provides that the term of copyright in a literary, dramatic, musical or artistic work published within the lifetime of the author subsists during the lifetime of the author until sixty years from the beginning of the calendar year next following the year in which the author dies.",
    legalBasis: "Sections 22 and 24, Copyright Act, 1957.",
    wrongOptionExplanations: [
      "Twenty years from publication is not the term.",
      "",
      "Sixty years from publication is the term for certain categories of works, not the general rule.",
      "The period after the author's death is sixty years, not twenty."
    ],
    flashpoint: "COPYRIGHT term (s.22) → AUTHOR'S LIFETIME + SIXTY YEARS from the beginning of the calendar year following the author's death.",
    source: "STATUTE"
  });

  Q({
    id: "IP-006", subject: S, topic: "h2", subtopic: "Posthumous works",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 24 of the Copyright Act, 1957, in the case of a literary, dramatic or musical work, or an engraving, in which copyright subsists at the date of the death of the author, and which was not published before his death, the term of copyright is:",
    options: [
      "Sixty years from the beginning of the calendar year next following the year of the author's death",
      "Permanently",
      "Sixty years from the beginning of the calendar year next following the year in which the work is first published",
      "Twenty years from the date of publication"
    ],
    correctIndex: 2,
    explanation: "Section 24(1) provides that in the case of a literary, dramatic or musical work, or an engraving, in which copyright subsists at the date of the death of the author or, in the case of a work of joint authorship, at or immediately before the date of the death of the author who dies last, and which was not published before his death, the copyright shall subsist until sixty years from the beginning of the calendar year next following the year in which the work is first published. So a posthumously published work gets a full sixty years from the year of first publication.",
    legalBasis: "Section 24(1), Copyright Act, 1957.",
    wrongOptionExplanations: [
      "Sixty years from the year of the author's death is the general s.22 rule, not the posthumous-work rule.",
      "The term is not perpetual.",
      "",
      "Twenty years is not the term."
    ],
    flashpoint: "POSTHUMOUS works (s.24) → SIXTY YEARS from the year of FIRST PUBLICATION (not from the author's death).",
    source: "PAPER-PATTERN"
  });

  Q({
    id: "IP-007", subject: S, topic: "h2", subtopic: "Idea-expression dichotomy",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "The principle that copyright protects the expression of an idea and not the idea itself was applied by the Supreme Court in the context of a film script in:",
    options: [
      "Gramophone Company of India Ltd. v. Birendra Bahadur Pandey, (1984) 2 SCC 534",
      "Eastern Book Company v. D.B. Modak, (2008) 1 SCC 1",
      "R.G. Anand v. Delux Films, (1978) 4 SCC 118",
      "Academy of General Education v. B. Malini Mallya, (2009) 5 SCC 108"
    ],
    correctIndex: 2,
    explanation: "R.G. Anand v. Delux Films is the leading Indian decision on the idea-expression dichotomy. The Supreme Court held that there can be no copyright in an idea, subject matter, themes, plots or historical or legendary facts, and that violation of the copyright in such cases is confined to the form, manner and arrangement and expression of the idea by the author of the copyrighted work.",
    legalBasis: "Section 13, Copyright Act, 1957; R.G. Anand v. Delux Films, (1978) 4 SCC 118.",
    wrongOptionExplanations: [
      "Gramophone Company concerned the import of records and s.53 of the Copyright Act.",
      "Eastern Book Company v. D.B. Modak concerned the copyright in a judgment and the modicum of creativity required.",
      "",
      "Academy of General Education concerned the copyright in a play and the production of a serial."
    ],
    flashpoint: "IDEA-EXPRESSION dichotomy → R.G. ANAND v. DELUX FILMS (1978) 4 SCC 118: no copyright in an idea, theme or plot; only in the FORM and EXPRESSION.",
    source: "CASE"
  });

  Q({
    id: "IP-008", subject: S, topic: "h3", subtopic: "Infringement vs passing off",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Trade Marks Act, 1999, which of the following correctly states the difference between an action for infringement and an action for passing off?",
    options: [
      "Passing off is a statutory remedy under the Trade Marks Act, 1999",
      "An action for infringement lies only for unregistered marks",
      "Both actions require registration",
      "An action for infringement lies for the violation of a registered trade mark, while an action for passing off lies to protect the goodwill of an unregistered mark and is a common-law remedy"
    ],
    correctIndex: 3,
    explanation: "An action for infringement under s.29 of the Trade Marks Act, 1999 lies where the plaintiff's trade mark is registered and the defendant's use of a mark is identical or deceptively similar in relation to the goods or services covered by the registration. An action for passing off is a common-law remedy available to the proprietor of an unregistered mark to protect its goodwill, and is expressly saved by s.27(2).",
    legalBasis: "Sections 27, 28 and 29, Trade Marks Act, 1999; S. Syed Mohideen v. P. Sulochana Bai, (2016) 2 SCC 683.",
    wrongOptionExplanations: [
      "Passing off is a common-law remedy, saved but not created by the Act.",
      "Infringement requires registration, not the absence of it.",
      "Passing off does not require registration.",
      ""
    ],
    flashpoint: "INFRINGEMENT (s.29) → requires REGISTRATION. PASSING OFF → common-law remedy for an UNREGISTERED mark (saved by s.27(2)).",
    source: "STATUTE"
  });

  Q({
    id: "IP-009", subject: S, topic: "h3", subtopic: "Deceptive similarity — factors",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "In determining whether two marks are deceptively similar, the test applied by the courts includes:",
    options: [
      "A comparison of the marks side by side",
      "The intention of the defendant alone",
      "Whether the marks are likely to deceive or cause confusion in the minds of persons of average intelligence and imperfect recollection, taking into account the visual, phonetic and structural similarity and the nature of the goods and the class of purchasers",
      "The price of the goods alone"
    ],
    correctIndex: 2,
    explanation: "In determining deceptive similarity the court considers whether the marks are likely to deceive or cause confusion in the minds of persons of average intelligence and imperfect recollection. The marks are not to be compared side by side; rather, the test is the recollection of the ordinary purchaser. The visual, phonetic and structural similarity, the nature of the goods and the class of purchasers are all relevant. The factors were canvassed in Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd. and Amritdhara Pharmacy v. Satya Deo Gupta.",
    legalBasis: "Sections 2(1)(h) and 29, Trade Marks Act, 1999; Amritdhara Pharmacy v. Satya Deo Gupta, AIR 1963 SC 449; Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd., (2001) 5 SCC 73.",
    wrongOptionExplanations: [
      "A side-by-side comparison is not the correct test.",
      "The defendant's intention is not the decisive factor.",
      "",
      "The price is a factor but not the sole criterion."
    ],
    flashpoint: "DECEPTIVE SIMILARITY → the test is the recollection of a person of AVERAGE INTELLIGENCE and IMPERFECT RECOLLECTION, not a side-by-side comparison (Amritdhara; Cadila).",
    source: "CASE"
  });

  Q({
    id: "IP-010", subject: S, topic: "h4", subtopic: "Industrial design",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Designs Act, 2000, a 'design' means:",
    options: [
      "Any mode or principle of construction",
      "Only the shape of a product",
      "The functional aspect of an article",
      "Features of shape, configuration, pattern, ornament or composition of lines or colours applied to any article, whether in two-dimensional or three-dimensional or in both forms, by any industrial process or means, which in the finished article appeal to and are judged solely by the eye, but does not include any mode or principle of construction or anything which is in substance a mere mechanical device"
    ],
    correctIndex: 3,
    explanation: "Section 2(d) of the Designs Act, 2000 defines a design as only the features of shape, configuration, pattern, ornament or composition of lines or colours applied to any article, whether in two-dimensional or three-dimensional or in both forms, by any industrial process or means, whether manual, mechanical or chemical, separate or combined, which in the finished article appeal to and are judged solely by the eye, but does not include any mode or principle of construction or anything which is in substance a mere mechanical device. The term of the registration is ten years from the date of registration, extendable by five years.",
    legalBasis: "Sections 2(d), 5 and 11, Designs Act, 2000.",
    wrongOptionExplanations: [
      "A mode or principle of construction is excluded.",
      "A design is not confined to shape.",
      "Functional features are not the subject of design protection.",
      ""
    ],
    flashpoint: "DESIGN (Designs Act 2000 s.2(d)) → APPEALS TO THE EYE; excludes any MODE OR PRINCIPLE OF CONSTRUCTION and a MERE MECHANICAL DEVICE. Term: 10 years + 5 years extension.",
    source: "STATUTE"
  });

  Q({
    id: "IP-011", subject: S, topic: "h5", subtopic: "Geographical indications",
    difficulty: "Moderate", cognitiveLevel: "Understanding", questionType: "Direct",
    question: "Under the Geographical Indications of Goods (Registration and Protection) Act, 1999, a geographical indication is:",
    options: [
      "A mark used to distinguish the goods of one trader from those of others",
      "A design applied to a product",
      "A patent for a process",
      "An indication which identifies goods as agricultural goods, natural goods or manufactured goods as originating, or manufactured in, a territory, region or locality, where a given quality, reputation or other characteristic of the goods is essentially attributable to its geographical origin"
    ],
    correctIndex: 3,
    explanation: "Section 2(1)(e) defines a geographical indication as an indication which identifies such goods as agricultural goods, natural goods or manufactured goods as originating, or manufactured in the territory of a country, or a region or locality in that territory, where a given quality, reputation or other characteristic of such goods is essentially attributable to its geographical origin, and in a case where such goods are manufactured goods, one of the activities of either the production or of processing or preparation of the goods concerned takes place in such territory, region or locality, as the case may be. The Act protects indications such as Darjeeling tea, Basmati rice and Mysore silk.",
    legalBasis: "Sections 2(1)(e), 8 and 9, Geographical Indications of Goods (Registration and Protection) Act, 1999.",
    wrongOptionExplanations: [
      "A distinguishing mark is a trade mark, not a geographical indication.",
      "A design protects the appearance of an article.",
      "A patent protects an invention.",
      ""
    ],
    flashpoint: "GEOGRAPHICAL INDICATION → quality, reputation or characteristic ESSENTIALLY ATTRIBUTABLE TO GEOGRAPHICAL ORIGIN.",
    source: "STATUTE"
  });

  Q({
    id: "IP-012", subject: S, topic: "h5", subtopic: "Fair dealing and exceptions",
    difficulty: "Difficult", cognitiveLevel: "Analysis", questionType: "Direct",
    question: "Under Section 52 of the Copyright Act, 1957, which of the following is a recognised exception to copyright infringement?",
    options: [
      "Any use of a copyrighted work without the owner's permission",
      "Making copies for commercial sale",
      "Fair dealing with a literary, dramatic, musical or artistic work for the purposes of research or private study, criticism or review, or the reporting of current events, and certain other specified acts",
      "Any use of a copyrighted work for educational purposes without limitation"
    ],
    correctIndex: 2,
    explanation: "Section 52 enumerates the acts which do not constitute an infringement of copyright, including fair dealing with a literary, dramatic, musical or artistic work not being a computer program for the purposes of research or private study; criticism or review; the reporting of current events or of a lecture delivered in public; and certain specified acts such as the making of copies or adaptation of a computer program by the lawful possessor, and the reproduction of a work by a teacher or a pupil in the course of instruction.",
    legalBasis: "Section 52, Copyright Act, 1957; Sections 51 and 52, Copyright Act, 1957.",
    wrongOptionExplanations: [
      "Not every use is excepted.",
      "Making copies for commercial sale is not an exception.",
      "",
      "The educational exception is qualified and subject to conditions."
    ],
    flashpoint: "FAIR DEALING (Copyright Act s.52) → research or private study | criticism or review | reporting of current events. The exceptions are SPECIFIED, not open-ended.",
    source: "STATUTE"
  });
})();
