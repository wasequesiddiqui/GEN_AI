/* ============================================================================
 * AIBE XXI — Study notes, batch 1
 * Constitutional Law | IPC+BNS | CrPC+BNSS | CPC | Evidence+BSA | ADR | Family
 * Each topic: concept, provisions, cases, exceptions, confusions, AIBE focus,
 * and a FLASHPOINTS block (memorise these).
 * ==========================================================================*/
window.AIBE_NOTES = window.AIBE_NOTES || {};

/* ============================== CONSTITUTIONAL LAW ==========================*/
window.AIBE_NOTES["constitutional"] = {
  overview:
    "Worth 10 questions — the joint-largest single block with CrPC and CPC. The paper tests three things repeatedly: " +
    "(1) which Article of the Constitution does X; (2) which case laid down Y; (3) whether a classification or " +
    "amendment survives judicial review. Learn Articles by NUMBER and FUNCTION, and pair each with one case.",
  topics: [
    {
      id: "c1",
      name: "Article 12, Article 13 and Judicial Review",
      concept:
        "'State' under Article 12 includes the Government and Parliament of India, State Governments and legislatures, " +
        "all local authorities, and 'other authorities' within India or under the control of the Government of India. " +
        "Article 13 makes pre-Constitution and post-Constitution laws void to the extent they violate Part III, and " +
        "bans the State from making laws that take away fundamental rights.",
      provisions: [
        "Article 12 — definition of 'State' for Part III",
        "Article 13(1) — pre-Constitution laws void to the extent of inconsistency",
        "Article 13(2) — State shall not make laws taking away fundamental rights",
        "Article 13(4) — nothing in Art. 13 applies to an amendment under Article 368",
      ],
      cases: [
        { name: "Shankari Prasad v. Union of India", principle: "Constitutional amendments are not 'law' under Article 13 and cannot be challenged for violating Part III — position later displaced by Kesavananda." },
        { name: "Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225", principle: "Parliament's amending power under Article 368 is wide but cannot destroy the basic structure of the Constitution." },
      ],
      exceptions: ["Doctrine of eclipse protects pre-Constitution laws that are inconsistent with Part III until amended.", "A constitutional amendment is outside Article 13 — but not outside basic-structure review."],
      confusions: [
        "Article 13(2) applies to 'laws' (ordinary legislation) — not to constitutional amendments (Article 13(4)).",
        "Eclipse (a pre-Constitution law is dormant, revives if the inconsistency is removed) ≠ severability (the bad part of a law is struck down, the good part survives).",
      ],
      aibeFocus: ["Article numbers 12, 13(1), 13(2), 13(4).", "Which doctrine applies when: eclipse for pre-Constitution law, severability for a partly bad statute."],
      flashpoints: [
        "Article 12 → 'State' includes local authorities and 'other authorities'.",
        "Article 13(2) → State shall NOT make laws abridging Part III.",
        "Article 13(4) → Article 13 does NOT apply to Article 368 amendments.",
        "Doctrine of eclipse → pre-Constitution law, dormant not dead.",
        "Doctrine of severability → strike the bad part, keep the good part.",
        "Kesavananda Bharati (1973) 4 SCC 225 → basic structure cannot be destroyed.",
      ],
    },
    {
      id: "c2",
      name: "Article 14 and the Principle of Classification",
      concept:
        "Article 14 guarantees equality before the law and the equal protection of the laws. Permissible classification " +
        "requires (i) an intelligible differentia, and (ii) a rational nexus between that differentia and the object of " +
        "the statute. Pension schemes fixing a cut-off date between retiring employees are the classic examination fact pattern.",
      provisions: ["Article 14 — equality before law; equal protection of laws", "Article 15 — prohibition of discrimination on grounds of religion, race, caste, sex or place of birth", "Article 16 — equality of opportunity in public employment", "Article 17 — abolition of untouchability", "Article 18 — abolition of titles"],
      cases: [
        { name: "State of West Bengal v. Anwar Ali Sarkar, AIR 1952 SC 75", principle: "Classification must be reasonable and based on an intelligible differentia bearing a rational nexus to the object." },
        { name: "E.P. Royappa v. State of Tamil Nadu, (1974) 4 SCC 3", principle: "Article 14 forbids arbitrariness; equality is a dynamic concept, not mere classification." },
      ],
      exceptions: ["Reasonable classification is permitted.", "Special provisions for women and children under Art. 15(3) and for backward classes under Art. 15(4)/(5)."],
      confusions: [
        "Article 14 = general equality; Article 15 = discrimination on enumerated grounds; Article 16 = public employment.",
        "A cut-off date in a pension scheme is tested against Article 14 classification — not against legislative competence.",
      ],
      aibeFocus: ["The two-limb classification test, verbatim.", "Applying Article 14 to a cut-off-date pension scheme."],
      flashpoints: [
        "Article 14 → equality before law + equal protection of laws.",
        "Classification test → intelligible differentia + rational nexus to statutory object.",
        "Article 15(3) → special provisions for women and children are permitted.",
        "Article 17 → untouchability abolished (enforceable against private persons too).",
        "Article 14 ≠ Article 15 ≠ Article 16 — know which one a fact pattern activates.",
      ],
    },
    {
      id: "c3",
      name: "Article 19, Article 21 and Criminal Process Rights",
      concept:
        "Article 19(1) protects six freedoms, each subject to the reasonable restrictions listed in Article 19(2)-(6). " +
        "Article 21 — 'no person shall be deprived of his life or personal liberty except according to procedure " +
        "established by law' — has been read expansively to include dignity, health, speedy trial, shelter, clean " +
        "environment, privacy and livelihood. Articles 20 and 22 protect against ex post facto laws, double jeopardy, " +
        "self-incrimination, and provide safeguards on arrest and detention.",
      provisions: ["Article 19(1)(a)-(g) — freedoms; Article 19(2)-(6) — restrictions", "Article 20(1) ex post facto; 20(2) double jeopardy; 20(3) self-incrimination", "Article 21 — life and personal liberty", "Article 21A — right to education (6-14 years)", "Article 22 — safeguards against arrest and detention"],
      cases: [
        { name: "Maneka Gandhi v. Union of India, (1978) 1 SCC 248", principle: "Procedure under Article 21 must be fair, just and reasonable — not arbitrary, fanciful or oppressive." },
        { name: "Parmanand Katara v. Union of India, (1989) 4 SCC 286", principle: "Right to emergency medical care — Article 21 obliges doctors/hospitals to provide immediate treatment." },
        { name: "Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81", principle: "Right to speedy trial is implicit in Article 21." },
      ],
      exceptions: ["Article 19 rights are available only to citizens; Article 21 is available to all persons.", "Reasonable restrictions under 19(2)-(6) must be by law and proportionate."],
      confusions: [
        "Article 19 — citizens only. Article 21 — all persons (including foreigners).",
        "Article 20(3) protects an accused from being a witness against himself — it does not cover voluntary statements or physical evidence like fingerprints.",
      ],
      aibeFocus: ["The Maneka Gandhi three-fold test (fair, just, reasonable).", "Which right is a citizen-only right."],
      flashpoints: [
        "Article 19 → citizens only; Article 21 → all persons.",
        "Maneka Gandhi (1978) → procedure under Art. 21 must be fair, just and reasonable.",
        "Parmanand Katara (1989) → right to emergency medical care.",
        "Hussainara Khatoon (1980) → right to speedy trial under Art. 21.",
        "Article 22 → 24 hours to produce an arrested person before a Magistrate (Art. 22(2)).",
      ],
    },
    {
      id: "c4",
      name: "Article 23 — Exploitation and Forced Labour",
      concept:
        "Article 23 prohibits traffic in human beings, *begar* and other similar forms of forced labour. Article 23(2) " +
        "permits compulsory service for public purposes. The provision has been read as a guaranteed right against " +
        "exploitation in any form, and its ambit was expanded beyond 'begar' and forced labour to cover any form of " +
        "compelled labour for less than the minimum wage.",
      provisions: ["Article 23(1) — prohibition of traffic in human beings, begar and other similar forms of forced labour", "Article 23(2) — compulsory service for public purposes permitted; no discrimination on grounds of religion, race, caste or class", "Article 24 — prohibition of employment of children below 14 years"],
      cases: [
        { name: "People's Union for Democratic Rights v. Union of India (PUDR), (1982) 3 SCC 235", principle: "Article 23 has a far wider reach: it strikes at forced labour in every form, including payment of less than the minimum wage. Landmark expansion of Article 23." },
        { name: "Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161", principle: "Bonded labour and the right to live with human dignity under Articles 21 and 23." },
      ],
      exceptions: ["Article 23(2) — compulsory service for public purposes is permitted and cannot be challenged on grounds of religion, race, caste or class."],
      confusions: ["Article 23 (traffic in human beings/forced labour) ≠ Article 24 (child labour under 14).", "Article 23 is enforceable against private individuals, not merely the State."],
      aibeFocus: ["PUDR v. Union of India (1982) 3 SCC 235 is the case the paper associates with expanding Article 23."],
      flashpoints: [
        "Article 23 → traffic in human beings, begar, similar forms of forced labour.",
        "PUDR v. UOI (1982) 3 SCC 235 → Article 23 expanded; less-than-minimum-wage labour is forced labour.",
        "Bandhua Mukti Morcha (1984) → bonded labour violates Arts. 21 and 23.",
        "Article 23(2) → compulsory service for PUBLIC purposes is allowed.",
        "Article 23 ≠ Article 24 — 23 is exploitation generally, 24 is child labour.",
      ],
    },
    {
      id: "c5",
      name: "Writs — Article 32 and Article 226",
      concept:
        "Article 32 confers the right to move the Supreme Court for enforcement of fundamental rights — itself a " +
        "fundamental right. Article 226 gives High Courts a wider power to issue writs for the enforcement of " +
        "fundamental rights *and for any other legal right*. Habeas corpus (produce the body) is a writ of liberty " +
        "available against both public and private detention.",
      provisions: ["Article 32 — writ jurisdiction of the Supreme Court; right to constitutional remedies", "Article 226 — writ jurisdiction of High Courts (wider)", "Article 227 — superintendence over tribunals", "Article 142 — Supreme Court's power to do complete justice"],
      cases: [
        { name: "Attorney General for Hong Kong v. Ng Yuen Shiu, (1983) 2 AC 629", principle: "Contains Lord Fraser's dictum on habeas corpus in the context of a legitimate expectation — cited alongside Lord Wright's classic observation that 'the incalculable value of habeas corpus is that it enables the immediate determination of the applicant's freedom'." },
        { name: "Romesh Thappar v. State of Madras, AIR 1950 SC 124", principle: "Article 32 is itself a fundamental right; it is not merely a procedural provision." },
      ],
      exceptions: ["Habeas corpus is not available where the detention is by a competent court acting within jurisdiction.", "The Supreme Court's writ power is limited to fundamental rights; the High Court's extends to other legal rights."],
      confusions: ["Article 32 — Supreme Court, fundamental rights only. Article 226 — High Courts, fundamental rights AND other legal rights (hence 'wider').", "Habeas corpus ≠ mandamus — mandamus commands a public authority to perform a public duty."],
      aibeFocus: ["Which writ lies for what. Article 32 vs 226 scope."],
      flashpoints: [
        "Article 32 → Supreme Court; fundamental rights only. Called the 'heart and soul' of the Constitution.",
        "Article 226 → High Courts; wider — FRs + other legal rights.",
        "Habeas corpus → 'produce the body'; the incalculable value is immediate determination of freedom.",
        "Mandamus → commands performance of a public duty.",
        "Quo warranto → questions the authority of a person holding a public office.",
        "Certiorari → quashes a quasi-judicial order; Prohibition → stops proceedings mid-way.",
      ],
    },
    {
      id: "c6",
      name: "Distribution of Legislative Powers — Articles 245-254",
      concept:
        "Parliament and State legislatures legislate within the Union, State and Concurrent Lists (Seventh Schedule). " +
        "Some subjects lie outside the three Lists — residuary power over them rests with Parliament under Article 248. " +
        "Parliament may also legislate on a State List subject in the exceptional circumstances covered by Articles 249, " +
        "250, 252 and 253.",
      provisions: [
        "Article 245 — territorial nexus; extra-territorial operation",
        "Article 246 — subject matter of laws made by Parliament and State legislatures",
        "Article 248 — residuary powers of legislation vest in Parliament",
        "Article 249 — Parliament may legislate on a State List matter if the Rajya Sabha so resolves by two-thirds",
        "Article 250 — Parliament may legislate on a State List matter while a Proclamation of Emergency is in operation",
        "Article 252 — two or more States may request Parliament to legislate on a State List matter for those States",
        "Article 253 — Parliament may legislate to implement international agreements and decisions of international bodies",
        "Article 254 — repugnancy between State and Union law (254(1) State law void to the extent of repugnancy; 254(2) State law may prevail with President's assent)",
      ],
      cases: [
        { name: "Magainbhai Ishwarbhai Patel v. Union of India, (1970) 3 SCC 400", principle: "Article 253 enables Parliament to legislate to implement international agreements, even on State List subjects." },
        { name: "State of Kerala v. Mar Appraem Kuri Co. Ltd., (2012) 7 SCC 106", principle: "Repugnancy under Article 254 applies from the commencement of the Central law." },
      ],
      exceptions: ["Article 254(2) — a State law on a Concurrent List subject may prevail if reserved for and assented to by the President.", "Article 252 — legislation for two or more States at their request."],
      confusions: [
        "Article 249 = Rajya Sabha resolution. Article 250 = Emergency (Article 352) in operation. Article 252 = consent of two or more States. Article 253 = international obligation. This four-way distinction is a standing AIBE trap.",
        "Article 248 residuary → Parliament, NOT the States.",
      ],
      aibeFocus: ["Match the Article to the mechanism: resolution / emergency / State consent / treaty. Practise the reverse direction too (mechanism → Article)."],
      flashpoints: [
        "Article 248 → residuary powers belong to PARLIAMENT.",
        "Article 249 → Rajya Sabha resolution (2/3 present and voting).",
        "Article 250 → Parliament legislates on a State List matter during Emergency.",
        "Article 252 → two or more States request Parliament.",
        "Article 253 → legislation to implement INTERNATIONAL agreements — the source for the Air Act 1981, EP Act 1986, etc.",
        "Article 254(1) → State law void to the extent of repugnancy to Union law.",
        "Article 254(2) → State law may prevail with President's assent.",
      ],
    },
    {
      id: "c7",
      name: "Emergency Provisions — Articles 352, 356, 360",
      concept:
        "Three kinds of emergency: national emergency (Article 352, on grounds of war, external aggression or armed " +
        "rebellion), President's Rule (Article 356, on failure of constitutional machinery in a State) and financial " +
        "emergency (Article 360). Each has its own effect on legislative competence — notably Article 250 during a " +
        "national emergency, and Article 353 which lets the executive power of the Union extend to giving directions " +
        "to States.",
      provisions: ["Article 352 — Proclamation of Emergency", "Article 353 — effect of the Proclamation", "Article 356 — failure of constitutional machinery in a State", "Article 360 — financial emergency", "Article 250 — Parliament's power to legislate on State List matters during emergency"],
      cases: [
        { name: "S.R. Bommai v. Union of India, (1994) 3 SCC 1", principle: "A Proclamation under Article 356 is subject to judicial review; the floor test is the proper method for testing majority." },
        { name: "Minerva Mills Ltd. v. Union of India, (1980) 3 SCC 625", principle: "Articles 352/356/360 cannot be used to destroy the basic structure." },
      ],
      exceptions: ["Emergency provisions are justiciable — see S.R. Bommai.", "Article 250 legislation ceases to operate six months after the Proclamation ceases."],
      confusions: ["Article 250 (Emergency powers) ≠ Article 249 (Rajya Sabha resolution).", "Article 356 (State) ≠ Article 360 (financial)."],
      aibeFocus: ["Which Article lets Parliament legislate on the State List during a Proclamation → Article 250."],
      flashpoints: [
        "Article 352 → national emergency (war, external aggression, armed rebellion).",
        "Article 356 → President's Rule; judicially reviewable (S.R. Bommai).",
        "Article 360 → financial emergency.",
        "Article 250 → State List legislation by Parliament during a Proclamation under Article 352.",
      ],
    },
    {
      id: "c8",
      name: "Article 368, Basic Structure and the Ninth Schedule",
      concept:
        "Article 368 lays down the procedure for amendment. Kesavananda Bharati (1973) held that the amending power " +
        "is wide but cannot damage the basic structure. I.R. Coelho (2007) held that laws placed in the Ninth Schedule " +
        "after 24 April 1973 remain open to challenge for violation of the basic structure.",
      provisions: ["Article 368(1) — power of Parliament to amend the Constitution", "Article 368(2) — procedure: special majority + State ratification for federal provisions", "Article 368(4) & (5) — inserted by the 42nd Amendment; (4) is subject to basic-structure review", "Ninth Schedule — Article 31B protection"],
      cases: [
        { name: "Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225", principle: "Basic structure doctrine — the foundation of every Art. 368 question." },
        { name: "I.R. Coelho v. State of Tamil Nadu, (2007) 2 SCC 1", principle: "Ninth Schedule laws inserted after 24 April 1973 are open to scrutiny for violation of the basic structure; the cut-off is the date of Kesavananda." },
        { name: "Sajjan Singh v. State of Rajasthan, AIR 1965 SC 845", principle: "Earlier, narrower view of the amending power — useful as a distractor and as history." },
      ],
      exceptions: ["Amendments by the simple legislative process in Articles 4, 169 and 239A are not 'amendments' under Article 368."],
      confusions: [
        "Article 368(2) requires a special majority; ratification by half the State legislatures is needed only for federal provisions.",
        "The 24th Amendment inserted Article 13(4) and Article 368(3); the 42nd Amendment inserted 368(4)-(5); it was the 42nd Amendment that was itself caught by basic-structure review in Minerva Mills.",
      ],
      aibeFocus: ["Statements I, II, III testing: does judicial review extend to amendments? Is Article 368 unlimited? What is the Ninth Schedule cut-off?"],
      flashpoints: [
        "Article 368 → amendment procedure; special majority required.",
        "Kesavananda Bharati (1973) → amending power is wide but not unlimited; basic structure.",
        "I.R. Coelho (2007) → Ninth Schedule laws inserted AFTER 24 April 1973 are open to basic-structure scrutiny.",
        "Parliament's Article 368 power is NOT unlimited — the answer to 'unlimited' is always FALSE.",
        "Judicial review DOES extend to constitutional amendments (on basic-structure grounds).",
      ],
    },
    {
      id: "c9",
      name: "Advisory Jurisdiction, Precedent and Ordinances",
      concept:
        "Article 143 lets the President refer questions of law or fact of public importance to the Supreme Court for " +
        "its opinion; that opinion is advisory and not binding. Article 141 makes Supreme Court law binding on all " +
        "courts. Article 123 empowers the President to promulgate Ordinances when Parliament is not in session; " +
        "re-promulgation to circumvent the legislature has been called a 'fraud on the Constitution'.",
      provisions: ["Article 141 — law declared by the Supreme Court binding on all courts", "Article 143 — advisory jurisdiction of the Supreme Court", "Article 123 — Ordinance-making power of the President", "Article 213 — Ordinance-making power of the Governor"],
      cases: [
        { name: "D.C. Wadhwa v. State of Bihar, AIR 1987 SC 579", principle: "Re-promulgation of Ordinances repeatedly, to avoid placing them before the legislature, is a 'fraud on the Constitution'; the Court exposed the Bihar practice of re-promulgating Ordinances decades after they had lost validity." },
        { name: "Krishna Kumar Singh v. State of Bihar, (2017) 3 SCC 1", principle: "Re-promulgation of Ordinances is a fraud on the Constitution; the doctrine of revival of Ordinances is rejected — an Ordinance does not revive on the day the reconstituted legislature assembles." },
        { name: "In re Kerala Education Bill, AIR 1958 SC 956", principle: "Classic example of the advisory jurisdiction under Article 143." },
      ],
      exceptions: ["The Court may decline to answer a reference under Article 143 that is vague, political or not of public importance.", "Article 141 binds all courts in India, but not the Supreme Court itself in absolute terms."],
      confusions: [
        "Article 143 opinion = advisory, NOT binding, and NOT a precedent under Article 141.",
        "Two competing 'fraud on the Constitution' cases: D.C. Wadhwa (1987) and Krishna Kumar Singh (2017). Read the question wording carefully — 2017 rejected the revival doctrine, Wadhwa was the earlier exposition of 'fraud on the Constitution'.",
      ],
      aibeFocus: ["Article 143 opinion is advisory and not enforceable through contempt.", "Ordinance re-promulgation → 'fraud on the Constitution'."],
      flashpoints: [
        "Article 143 → advisory opinion; NOT binding; NOT enforceable by contempt.",
        "Article 141 → Supreme Court's law binds all courts.",
        "Article 123 → President's Ordinance power; needs legislative approval within 6 weeks of reassembly.",
        "Re-promulgation = 'fraud on the Constitution' → D.C. Wadhwa (1987); Krishna Kumar Singh (2017).",
      ],
    },
    {
      id: "c10",
      name: "Right to Privacy — K.S. Puttaswamy",
      concept:
        "The right to privacy is not expressly enumerated in Part III; it was judicially recognised as an integral " +
        "part of Article 21. The nine-judge Bench in Puttaswamy overruled the earlier M.P. Sharma and Kharak Singh " +
        "limitations and laid down a three-fold test: legality, legitimate State aim, and proportionality.",
      provisions: ["Article 21 — source of the right to privacy (judicially read in)", "Article 14 — non-arbitrariness", "Article 19 — informational and associational dimensions", "Article 21 — data protection dimensions"],
      cases: [
        { name: "Justice K.S. Puttaswamy (Retd.) v. Union of India, (2017) 10 SCC 1", principle: "Privacy is intrinsic to Article 21; a three-fold test (legality, legitimate aim, proportionality) governs State intrusion." },
        { name: "Kharak Singh v. State of U.P., AIR 1963 SC 1295", principle: "Earlier narrower view — privacy not a fundamental right; partially overruled by Puttaswamy." },
      ],
      exceptions: ["Privacy is subject to reasonable restrictions; the State may intrude if the three-fold test is satisfied."],
      confusions: ["Privacy is NOT expressly listed in Part III — the answer to 'is privacy a separate enumerated fundamental right?' is FALSE."],
      aibeFocus: ["Assertion–Reason pattern: 'Privacy is part of Article 21' (true) + 'Privacy is expressly enumerated in Part III' (false) → assertion true, reason false."],
      flashpoints: [
        "Privacy → part of Article 21, judicially recognised.",
        "Privacy is NOT expressly enumerated in Part III — a favourite false Reason.",
        "Puttaswamy (2017) 10 SCC 1 → nine-judge Bench; three-fold test.",
        "Overruled in part → M.P. Sharma v. Satish Chandra; Kharak Singh.",
      ],
    },
  ],
};

/* ============================== IPC + BNS ==================================*/
window.AIBE_NOTES["ipc-bns"] = {
  overview:
    "8 questions, and the single most trap-laden subject because the paper deliberately mixes the IPC, 1860 with the " +
    "Bharatiya Nyaya Sanhita, 2023 (in force 1 July 2024). Learn the general-exceptions scheme, the property offences " +
    "and the new offences (organised crime, terrorist act, snatching), and learn the BNS section numbers next to the " +
    "IPC ones they replaced.",
  topics: [
    {
      id: "p1",
      name: "Punishments — IPC s.53 and BNS s.4",
      concept:
        "The Sanhita lists the punishments to which offenders are liable. The significant innovation in the BNS is the " +
        "addition of community service, which does not exist in the IPC. Forfeiture of property — already an IPC " +
        "punishment but rarely used — is retained and now has a defined application in organised crime.",
      provisions: [
        "IPC s.53 / BNS s.4 — punishments: (a) death; (b) imprisonment for life; (c) imprisonment (rigorous or simple); (d) forfeiture of property; (e) fine; (f) community service",
        "BNS s.5 — commutation of sentence",
        "BNS s.6 — fractions of terms of punishment",
        "BNS s.11 — solitary confinement; BNS s.12 — limit of solitary confinement",
        "BNS s.13 — enhanced punishment after previous conviction",
      ],
      cases: [
        { name: "Bachan Singh v. State of Punjab, (1980) 2 SCC 684", principle: "Death sentence to be awarded only in the rarest of rare cases; 'special reasons' must be recorded." },
        { name: "Machhi Singh v. State of Punjab, (1983) 3 SCC 470", principle: "Five categories of rarest-of-rare cases laid down." },
      ],
      exceptions: ["Death is not a mandatory punishment for any offence except where the alternative is excluded by the provision itself.", "Under BNS s.4, community service is available only for the petty offences for which the offence-provision itself prescribes it."],
      confusions: [
        "Community service is a BNS innovation — it is NOT among the IPC s.53 punishments.",
        "Solitary confinement is a mode of imprisonment, not a separate species of punishment.",
        "Forfeiture of property is an IPC punishment too — the BNS did not invent it, but the BNS gives it a concrete application (e.g. organised crime, BNS s.111).",
      ],
      aibeFocus: ["BNS s.4's list, item by item. Which punishment is new. Where forfeiture of property applies in practice."],
      flashpoints: [
        "BNS s.4 list → death | imprisonment for life | imprisonment (rigorous/simple) | forfeiture of property | fine | COMMUNITY SERVICE.",
        "Community service = BNS innovation (not in IPC s.53).",
        "Forfeiture of property → most commonly applied to ORGANISED CRIME (BNS s.111).",
        "BNS s.11 → solitary confinement; s.12 → its limit.",
        "Bachan Singh (1980) → rarest of rare for death; Machhi Singh (1983) → five categories.",
      ],
    },
    {
      id: "p2",
      name: "General Exceptions and the Right of Private Defence",
      concept:
        "General exceptions in IPC ss.76-106 (BNS ss.14-44) negate the offence where the necessary mental element or " +
        "unlawfulness is absent. The right of private defence of person and property is contained in IPC ss.96-106 " +
        "(BNS ss.34-44). It is a right of defence, never of retaliation, and arises only against an imminent, " +
        "unlawful threat.",
      provisions: [
        "IPC ss.96-106 / BNS ss.34-44 — private defence",
        "IPC s.100 / BNS s.38 — when the right extends to voluntarily causing death (assault causing reasonable apprehension of death or grievous hurt; rape; kidnapping or abduction; wrongful confinement; and certain hurt/grievous-hurt offences)",
        "IPC s.103 / BNS s.41 — private defence of property extending to death (robbery, house-breaking by night, mischief by fire) — NOT criminal trespass on open land",
        "IPC s.99 / BNS s.37 — restrictions on the right",
      ],
      cases: [
        { name: "Yogendra Morarji v. State of Gujarat, (1980) 2 SCC 218", principle: "The right of private defence is not a right of retaliation and must be used in proportion to the threat." },
        { name: "James Martin v. State of Kerala, (2004) 2 SCC 203", principle: "The right of private defence arises when the accused is under reasonable apprehension, not when he has time to approach the police." },
      ],
      exceptions: ["IPC s.99 / BNS s.37 — no right of private defence against a public servant acting in good faith, or where there is time to have recourse to the protection of public authorities.", "The right does not extend to causing more harm than was necessary for defence."],
      confusions: [
        "Private defence of the BODY (IPC s.100) vs private defence of PROPERTY (IPC s.103) — the enumerated triggering offences differ.",
        "Simple assault, theft of property above a monetary value, and criminal trespass on open land do NOT by themselves justify causing death.",
        "Right of private defence is available even against an act which is not itself an offence but which is unlawful.",
      ],
      aibeFocus: ["Which fact patterns extend the right to cause death — kidnapping/abduction, rape, and the listed assault offences.", "Criminal trespass on vacant land does NOT attract the extreme right."],
      flashpoints: [
        "Private defence extends to causing DEATH → apprehension of death/grievous hurt, rape, kidnapping/abduction, wrongful confinement (IPC s.100 / BNS s.38).",
        "Private defence of PROPERTY → death only for robbery, house-breaking by night, mischief by fire (IPC s.103 / BNS s.41).",
        "Criminal trespass on open vacant land → NO right to cause death.",
        "Right does NOT exist where there is time to seek public authority protection.",
        "Private defence is defensive, never retaliatory.",
      ],
    },
    {
      id: "p3",
      name: "Criminal Conspiracy and Abetment",
      concept:
        "Criminal conspiracy requires an AGREEMENT between two or more persons to do an unlawful act, or to do a " +
        "lawful act by unlawful means. The agreement itself is the offence — no overt act is required for the more " +
        "serious second limb punishable with death, imprisonment for life or rigorous imprisonment of two years or more.",
      provisions: [
        "IPC s.120A defining conspiracy; s.120B punishment → BNS s.61",
        "IPC s.107 / BNS s.45 — abetment of a thing",
        "IPC s.108 — abettor; IPC s.109 / BNS s.49 — punishment of abetment",
        "IPC s.111 — liability where the act abetted is different from the act done",
      ],
      cases: [
        { name: "State of Maharashtra v. Som Nath Thapa, (1996) 4 SCC 659", principle: "For conspiracy the prosecution must show agreement — a meeting of minds — though it may be inferred from circumstances." },
        { name: "Kashmira Singh v. State of Madhya Pradesh, AIR 1952 SC 159", principle: "A confession of a co-accused is not substantive evidence; it can only lend assurance." },
      ],
      exceptions: ["One person alone cannot commit a conspiracy — there must be at least two.", "A mere intention, without an agreement, is not conspiracy."],
      confusions: [
        "Conspiracy = agreement, not intention. This is the single most tested point.",
        "Abetment can be by a single person; conspiracy requires two or more.",
        "IPC s.120B → BNS s.61 (verified section mapping).",
      ],
      aibeFocus: ["'Mere agreement is sufficient if the intended crime is punishable with death or rigorous imprisonment' — this formulation is the correct statement of law.", "'A minimum of five persons' and 'mere intention is enough' are classic fabrications."],
      flashpoints: [
        "Conspiracy → AGREEMENT between TWO OR MORE persons; the agreement is itself the offence.",
        "IPC s.120A/s.120B → BNS s.61.",
        "Mere intention, without agreement, is NOT conspiracy.",
        "Conspiracy is not barred from being charged with the substantive offence.",
        "Abetment can be by one person; conspiracy needs at least two.",
      ],
    },
    {
      id: "p4",
      name: "Offences Against the Body — Homicide and the New Offences",
      concept:
        "Culpable homicide is the genus; murder is the species — the difference lies in the degree of intention, " +
        "knowledge and the enumerated aggravating circumstances. The BNS retains the IPC scheme but adds two major " +
        "offences: organised crime and the terrorist act, the latter for the first time integrated into the general " +
        "penal law.",
      provisions: [
        "BNS s.100 culpable homicide (IPC s.299); BNS s.101 murder (IPC s.300)",
        "BNS s.102 — culpable homicide by causing the death of a person other than the person whose death was intended",
        "BNS s.103 punishment for murder (IPC s.302); s.104 murder by a life-convict; s.105 punishment for culpable homicide not amounting to murder (IPC s.304)",
        "BNS s.106 — causing death by negligence (IPC s.304A)",
        "BNS s.107 — abetment of suicide of a child or person of unsound mind; BNS s.108 — abetment of suicide (IPC s.306)",
        "BNS s.109 — attempt to murder (IPC s.307); BNS s.110 — attempt to commit culpable homicide (IPC s.308)",
        "BNS s.111 — organised crime; BNS s.112 — petty organised crime",
        "BNS s.113 — TERRORIST ACT (new to the general penal code)",
        "BNS s.114 hurt (definition); s.115 voluntarily causing hurt; s.116 grievous hurt; s.117 voluntarily causing grievous hurt; s.124 acid attack",
      ],
      cases: [
        { name: "Virsa Singh v. State of Punjab, AIR 1958 SC 465", principle: "For murder under the 'injury sufficient in the ordinary course of nature to cause death' limb, the prosecution must prove the nature of the injury and that it was sufficient." },
        { name: "K.M. Nanavati v. State of Maharashtra, AIR 1962 SC 605", principle: "Distinction between grave and sudden provocation and its effect on murder vs culpable homicide." },
        { name: "State of A.P. v. Rayavarapu Punnayya, (1976) 4 SCC 382", principle: "Culpable homicide is the genus; murder is the species — the analytical starting point." },
      ],
      exceptions: ["Exceptions 1-5 to IPC s.300 / BNS s.101 reduce murder to culpable homicide not amounting to murder.", "Death by negligence under BNS s.106 requires no intention to cause death."],
      confusions: [
        "Organised crime (BNS s.111) ≠ petty organised crime (BNS s.112) ≠ terrorist act (BNS s.113). Learn all three numbers.",
        "Culpable homicide is not always murder, but every murder is culpable homicide.",
        "Forfeiture of property as a punishment in practice attaches to organised crime under BNS s.111.",
      ],
      aibeFocus: ["BNS s.113 = terrorist act, integrated into general penal law for the first time. BNS s.111 = organised crime. BNS s.100/101 = culpable homicide/murder."],
      flashpoints: [
        "BNS s.100 → culpable homicide (genus); BNS s.101 → murder (species).",
        "BNS s.111 → organised crime; s.112 → petty organised crime; s.113 → TERRORIST ACT.",
        "BNS s.106 → death by negligence (IPC s.304A equivalent).",
        "BNS s.108 → abetment of suicide (IPC s.306).",
        "BNS s.109 → attempt to murder (IPC s.307).",
        "Forfeiture of property → organised crime (BNS s.111).",
      ],
    },
    {
      id: "p5",
      name: "Kidnapping and Abduction",
      concept:
        "Kidnapping and abduction are distinct offences. Kidnapping is defined by reference to the status of the " +
        "person (a minor or a person of unsound mind, or a person removed beyond India's limits) — consent is " +
        "immaterial. Abduction is defined by the MEANS used — force, compulsion, deceit or inducement — and therefore " +
        "consent (of a person of competent age and understanding) negates it.",
      provisions: [
        "BNS s.137 kidnapping (IPC s.359-361); BNS s.138 abduction (IPC s.362)",
        "BNS s.139 kidnapping or maiming a child for begging; BNS s.140 kidnapping or abducting to murder or for ransom",
        "BNS s.143 trafficking of person; BNS s.146 unlawful compulsory labour",
      ],
      cases: [
        { name: "State of Haryana v. Raja Ram, (1973) 1 SCC 544", principle: "Consent of the minor's guardian, not the minor, is relevant for kidnapping from lawful guardianship — the minor's own consent is immaterial." },
        { name: "Thakorlal D. Vadgama v. State of Gujarat, (1973) 2 SCC 413", principle: "The 'taking' must be out of the keeping of the lawful guardian without that guardian's consent." },
      ],
      exceptions: ["Abduction ceases to be an offence if the person moved is of competent age and consents — the means used must still be established.", "Consent of the minor is no defence for kidnapping from lawful guardianship."],
      confusions: [
        "Kidnapping has no 'consent' element; abduction does.",
        "'Continuing offence' is NOT an ingredient of abduction — it is a legal characteristic of the offence. Exam questions often present it as an ingredient to trap you.",
        "IPC s.362 → BNS s.138 (verified).",
      ],
      aibeFocus: ["Which of the listed items is NOT a mandatory ingredient of abduction — the answer is the 'continuing offence' classification."],
      flashpoints: [
        "Kidnapping → status of the person (minor / unsound mind / beyond India). BNS s.137, IPC ss.359-361.",
        "Abduction → MEANS used: force, compulsion, deceit, inducement. BNS s.138, IPC s.362.",
        "Abduction ingredients: (i) compelling/inducing a person to move, (ii) by force or deceitful means. That is all.",
        "'Continuing offence' is descriptive, NOT an ingredient.",
        "Minor's own consent does not save the accused from kidnapping from lawful guardianship.",
      ],
    },
    {
      id: "p6",
      name: "Offences Against Property — Theft, Extortion, Robbery, Dacoity",
      concept:
        "Property offences form a ladder: theft (movable property, without consent) → extortion (consent obtained by " +
        "putting in fear) → robbery (theft or extortion plus violence or threat of instant violence, or death/grievous " +
        "hurt) → dacoity (robbery by five or more persons). The BNS adds snatching as a standalone new offence.",
      provisions: [
        "IPC s.378 theft → BNS s.303; BNS s.304 snatching (NEW)",
        "IPC s.383 extortion / s.390 robbery → BNS s.308 / s.309",
        "IPC s.391 dacoity / s.397 → BNS s.310 / s.311",
        "IPC s.403 dishonest misappropriation → BNS s.314",
        "IPC s.405 breach of trust → BNS s.316",
        "IPC s.415/420 cheating → BNS s.318/319",
        "IPC s.425 mischief → BNS s.324",
        "IPC s.441 criminal trespass → BNS s.329",
      ],
      cases: [
        { name: "K.N. Mehra v. State of Rajasthan, AIR 1957 SC 369", principle: "For theft, dishonest intention must exist at the time of moving the property; the accused must have intended to take the property dishonestly." },
        { name: "Pyare Lal Bhargava v. State of Rajasthan, AIR 1963 SC 1094", principle: "Moving of property for a short time can still constitute theft if dishonest intention is proved." },
        { name: "Om Parkash v. State of Punjab, (1961) 3 SCR 1070", principle: "Electoral roll is not movable property — illustration of the requirement of property for theft." },
      ],
      exceptions: ["Immovable property cannot be the subject of theft.", "Where property is moved without any dishonest intention (e.g., a bona fide claim of right), theft is not made out."],
      confusions: [
        "Theft requires MOVABLE property and takes property OUT of another's possession without consent. Robbery is aggravated theft or extortion.",
        "Extortion is theft's mirror image — in extortion, consent is obtained but it is vitiated consent; in theft there is no consent at all.",
        "Snatching (BNS s.304) is a NEW distinct offence; the IPC had no separate snatching provision.",
      ],
      aibeFocus: ["Essential ingredients of theft — dishonest intention at the point of moving, movable property, out of the owner's possession, without consent."],
      flashpoints: [
        "IPC s.378 → BNS s.303 THEFT. IPC s.383 → BNS s.308 extortion.",
        "Theft requires MOVABLE property; immovable property CANNOT be stolen.",
        "Robbery = theft OR extortion + violence / threat of instant violence / death / grievous hurt (BNS s.309).",
        "Dacoity = robbery by FIVE or more persons (BNS s.310).",
        "Snatching → BNS s.304 — a NEW offence, no IPC equivalent.",
        "Cheating → IPC s.415/420 → BNS s.318/319.",
      ],
    },
    {
      id: "p7",
      name: "Offences Against the State — Sedition and Its Replacement",
      concept:
        "The BNS omits sedition (IPC s.124A) and replaces it with a new offence of acts endangering the sovereignty, " +
        "unity and integrity of India (BNS s.152). The offence of waging war against the Government of India is BNS " +
        "s.147. Unlike sedition, the replacement provision is not textually confined to words and does not require " +
        "the words to bring the Government into hatred or contempt.",
      provisions: ["IPC s.121 waging war / s.124A sedition → BNS s.147 / BNS s.152", "BNS s.148 — conspiracy to commit offences punishable by BNS s.147", "BNS s.149 — collecting arms with intention of waging war", "BNS s.153 — waging war against a friendly foreign State"],
      cases: [
        { name: "Kedar Nath Singh v. State of Bihar, AIR 1962 SC 955", principle: "Sedition is confined to acts involving intention or tendency to create disorder or disturbance of law and order or incitement to violence — mere criticism of the Government is not sedition." },
        { name: "S.G. Vombatkere v. Union of India, (2022) 7 SCC 433", principle: "Supreme Court put IPC s.124A in abeyance pending reconsideration of Kedar Nath — a crucial development for the sedition question." },
      ],
      exceptions: ["Comment expressing disapprobation of Government measures, without incitement to violence or public disorder, is not sedition.", "BNS s.152 is written more broadly — this breadth is itself a point the examiner may test as a factual statement."],
      confusions: ["IPC s.124A (sedition) has no direct counterpart; do NOT answer 'sedition is retained' for BNS questions.", "BNS s.152 uses 'acts endangering sovereignty, unity and integrity' — this is the replacement, not a renumbering."],
      aibeFocus: ["BNS s.152 is what replaced IPC s.124A. BNS s.113 is the terrorist act. Do not confuse the two numbers."],
      flashpoints: [
        "IPC s.124A sedition → NOT retained in the BNS; replaced by BNS s.152 (acts endangering sovereignty, unity and integrity).",
        "BNS s.147 → waging war against the Government of India.",
        "BNS s.113 → terrorist act (first time in the general penal law).",
        "Kedar Nath Singh (1962) → sedition requires incitement to violence or public disorder.",
      ],
    },
    {
      id: "p8",
      name: "Defamation — BNS s.356 / IPC ss.499-500",
      concept:
        "Defamation is committed by publishing an imputation intending to harm, or knowing or having reason to " +
        "believe that it will harm, the reputation of a person. The BNS retains the offence and the ten exceptions, " +
        "but expands the range of punishments to include community service.",
      provisions: [
        "BNS s.356 defamation (IPC ss.499-500)",
        "Punishment range under BNS s.356 → simple imprisonment, or fine, or both, or community service",
        "Exceptions — truth for the public good; fair comment on public conduct; good-faith imputation for the public good; censure by a competent authority; and the other exceptions in the section",
      ],
      cases: [
        { name: "Subramanian Swamy v. Union of India, (2016) 7 SCC 221", principle: "Criminal defamation under IPC ss.499-500 is constitutionally valid; reputation is a facet of Article 21." },
        { name: "Chaman Lal v. State of Punjab, (1970) 1 SCC 590", principle: "Elements of the offence and the scope of the 'good faith' exception." },
      ],
      exceptions: ["Truth is a defence only if it is for the public good — not in every case.", "Fair and bona fide comment on the public conduct of a public servant is a protected exception."],
      confusions: ["BNS s.356 ≠ BNS s.351 (criminal intimidation). The two sections sit next to each other in Chapter XIX and are deliberately confusable.", "'Community service' is NOT available under the IPC for defamation, but IS under BNS s.356."],
      aibeFocus: ["The range of punishments for defamation under BNS s.356, including community service."],
      flashpoints: [
        "BNS s.356 → defamation; BNS s.351 → criminal intimidation (do not mix them).",
        "BNS s.356 punishment → simple imprisonment, or fine, or both, OR COMMUNITY SERVICE.",
        "IPC ss.499/500 → no community service.",
        "Truth is a defence ONLY if for the public good.",
        "Subramanian Swamy (2016) 7 SCC 221 → criminal defamation upheld as valid.",
      ],
    },
  ],
};

/* ============================== CrPC + BNSS ================================*/
window.AIBE_NOTES["crpc-bnss"] = {
  overview:
    "10 questions — tied with Constitutional Law and CPC as the largest block. The examiner's favourite technique here " +
    "is the number-and-period trap: 24 hours, 60/90 days, 3 months, 6 months, 30/45 days. Learn the arrest-to-bail " +
    "pipeline as one continuous story, and keep the CrPC and BNSS numbers side by side.",
  topics: [
    {
      id: "r1",
      name: "Definitions — Bailable, Cognizable, Warrant-case",
      concept:
        "The classification of offences drives the whole procedure. 'Bailable offence' means an offence shown as " +
        "bailable in the First Schedule or made bailable by any other law. 'Cognizable offence' means an offence for " +
        "which a police officer may, in accordance with the First Schedule or any other law, arrest without a warrant. " +
        "A 'warrant-case' is a case relating to an offence punishable with death, imprisonment for life or imprisonment " +
        "for a term exceeding two years.",
      provisions: [
        "CrPC s.2(a) — 'bailable offence' means an offence shown as bailable in the First Schedule or made bailable by any other law; and 'non-bailable offence' means any other offence",
        "CrPC s.2(c) — 'cognizable offence' means an offence for which a police officer may, in accordance with the First Schedule or under any other law, arrest without warrant",
        "CrPC s.2(h) — 'investigation'",
        "CrPC s.2(l) — 'non-cognizable offence'",
        "CrPC s.2(w) — 'summons-case'; s.2(x) — 'warrant-case'",
        "CrPC s.2(y) — 'warrant'",
      ],
      cases: [
        { name: "Rasiklal v. Kishore, (2009) 4 SCC 200", principle: "The right to bail in a bailable offence under s.436 is a right; the officer or court has no discretion to refuse it on merits." },
      ],
      exceptions: ["An offence may be non-bailable but still triable as a summons-case."],
      confusions: [
        "Bailable/non-bailable is about BAIL; cognizable/non-cognizable is about POLICE POWERS OF ARREST AND INVESTIGATION; summons-case/warrant-case is about TRIAL PROCEDURE. Three independent axes.",
        "Learn the letters precisely: s.2(a) is bailable/non-bailable, s.2(c) is cognizable, s.2(h) is 'investigation', s.2(l) is non-cognizable, s.2(w) is summons-case, s.2(x) is warrant-case. The paper routinely offers 2(h) and 2(x) as distractors for the bailable-offence definition.",
      ],
      aibeFocus: ["CrPC s.2(a) defines 'bailable offence' — memorise the letter, and remember that s.2(h) is 'investigation', which is the standard distractor."],
      flashpoints: [
        "CrPC s.2(a) → 'bailable offence' (and 'non-bailable offence' in the same clause).",
        "CrPC s.2(c) → 'cognizable offence'.",
        "CrPC s.2(h) → 'investigation' (NOT bailable offence).",
        "CrPC s.2(l) → 'non-cognizable offence'.",
        "CrPC s.2(w) → 'summons-case'; s.2(x) → 'warrant-case' (death, life, or imprisonment > 2 years).",
        "Bailable = bail as of right. Non-bailable = bail is discretionary.",
        "Cognizable = police may arrest WITHOUT warrant.",
      ],
    },
    {
      id: "r2",
      name: "Arrest — Rights of the Arrested Person",
      concept:
        "An arrested person must be produced before a Magistrate within 24 hours of arrest, excluding the time " +
        "necessary for the journey. The Constitution itself provides this in Article 22(2), and the CrPC mirrors it.",
      provisions: [
        "CrPC s.41 — when police may arrest without warrant",
        "CrPC s.41B — procedure of arrest and duties of officer making arrest",
        "CrPC s.41D — right of arrested person to meet an advocate during interrogation",
        "CrPC s.50 — grounds of arrest must be communicated; s.50A — obligation to inform a nominated person",
        "CrPC s.51 — search of arrested person",
        "CrPC s.57 — no detention beyond 24 hours without a special order under s.167",
        "Article 22(2) — produced before the nearest Magistrate within 24 hours",
      ],
      cases: [
        { name: "D.K. Basu v. State of West Bengal, (1997) 1 SCC 416", principle: "Eleven requirements for arrest and detention formulated, including visible identification, a memo of arrest attested by a witness, and medical examination." },
        { name: "Joginder Kumar v. State of U.P., (1994) 4 SCC 260", principle: "Arrest cannot be made merely because it is lawful to do so; it must be justified and the arrestee must be informed of the grounds." },
      ],
      exceptions: ["The 24-hour period excludes the time necessary for the journey from the place of arrest to the Magistrate's court.", "A Magistrate may authorise detention beyond 24 hours under s.167 where the investigation cannot be completed."],
      confusions: ["CrPC s.57 (24 hours) ≠ CrPC s.167 (default bail, 60/90 days). Both concern custody but at different stages."],
      aibeFocus: ["CrPC s.57 = the 24-hour rule. Article 22(2) = the constitutional source."],
      flashpoints: [
        "CrPC s.57 → no detention beyond 24 HOURS without a Magistrate's order.",
        "Article 22(2) → 24 hours to produce before the nearest Magistrate; journey time excluded.",
        "D.K. Basu (1997) 1 SCC 416 → arrest guidelines.",
        "CrPC s.41 → police may arrest without warrant; s.41D → right to meet an advocate.",
      ],
    },
    {
      id: "r3",
      name: "Investigation — FIR, Search and Seizure, Default Bail",
      concept:
        "An FIR under s.154 sets the investigation in motion. Where the officer finds no sufficient ground to " +
        "investigate, the informant must be told. The BNSS adds a mandatory audio-video recording requirement for " +
        "search and seizure, gives statutory recognition to the Zero FIR, and prescribes timelines for the " +
        "completion of investigation. Section 167 governs remand and, when the investigation is not completed in " +
        "time, confers the right to default (statutory) bail.",
      provisions: [
        "CrPC s.154 — FIR; s.155 — information in non-cognizable cases; s.156 — investigation",
        "CrPC s.157 — report of the officer in charge",
        "CrPC s.164 — recording of confessions and statements",
        "CrPC s.167 — procedure when investigation cannot be completed in 24 hours; default bail after 60 days (offence punishable with less than 10 years) or 90 days (offence punishable with death, life or 10 years or more)",
        "CrPC s.173 — report of the police officer on completion of investigation",
        "BNSS s.105 — the entire process of search and seizure must be recorded through audio-video electronic means",
        "BNSS — Zero FIR given statutory recognition; provision for notifying the informant of a decision not to investigate",
      ],
      cases: [
        { name: "Lalita Kumari v. Government of U.P., (2014) 2 SCC 1", principle: "Registration of FIR is mandatory under s.154 where the information discloses a cognizable offence." },
        { name: "Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81", principle: "Default bail under s.167 is a right; an incomplete investigation cannot justify indefinite detention." },
        { name: "Uday Mohanlal Acharya v. State of Maharashtra, (2001) 5 SCC 453", principle: "The right to default bail accrues on the expiry of the statutory period and is not defeated by the filing of a charge-sheet after the period but before the bail application." },
      ],
      exceptions: ["The 60/90 day period under s.167 may be extended by the Magistrate on a report of the Public Prosecutor showing the specific reasons for detention beyond the period."],
      confusions: [
        "60 days vs 90 days under s.167 — 90 days applies to offences punishable with death, imprisonment for life or imprisonment for a term of not less than 10 years.",
        "CrPC s.154 (FIR) ≠ BNSS s.173 (which also relates to the police report): the numbering changed, so match the number to the Act before answering.",
      ],
      aibeFocus: ["BNSS s.105 → audio-video recording of search and seizure is the NEW mandatory requirement.", "Default bail: 60 or 90 days depending on the maximum punishment."],
      flashpoints: [
        "CrPC s.167 → default bail after 60 days (offence < 10 years) or 90 days (death / life / ≥10 years).",
        "BNSS s.105 → search and seizure documented by AUDIO-VIDEO electronic recording.",
        "CrPC s.154 → FIR; s.164 → confession before a Magistrate; s.173 → police report.",
        "Zero FIR → may be filed at any police station regardless of territorial jurisdiction.",
        "Lalita Kumari (2014) 2 SCC 1 → FIR registration is mandatory when a cognizable offence is disclosed.",
      ],
    },
    {
      id: "r4",
      name: "Bail",
      concept:
        "Bail is the rule and jail the exception in bailable offences; in non-bailable offences the court exercises a " +
        "discretion guided by the nature and gravity of the accusation, the antecedents of the applicant, and the " +
        "possibility of the applicant fleeing justice.",
      provisions: ["CrPC s.436 — bail in bailable offences (as of right)", "CrPC s.437 — bail in non-bailable offences", "CrPC s.438 — direction for grant of bail to a person apprehending arrest (anticipatory bail)", "CrPC s.439 — special powers of the High Court or Court of Session regarding bail", "CrPC s.167(2) — default bail"],
      cases: [
        { name: "Gurbaksh Singh Sibbia v. State of Punjab, (1980) 2 SCC 565", principle: "Anticipatory bail under s.438 is not to be confined by artificial limitations; the discretion is wide but must be exercised judicially." },
        { name: "Satender Kumar Antil v. CBI, (2022) 10 SCC 51", principle: "Comprehensive guidelines on bail, including category-wise classification of offences for the purposes of bail." },
      ],
      exceptions: ["Bail may be refused where the accused is likely to flee, tamper with evidence or intimidate witnesses.", "Special statutory restrictions (e.g., offences under special Acts) may override the ordinary bail provisions."],
      confusions: ["Bailable (right, s.436) vs non-bailable (discretion, s.437) vs anticipatory (s.438) vs default (s.167(2)). Four separate mechanisms."],
      aibeFocus: ["Which section applies at which stage."],
      flashpoints: [
        "CrPC s.436 → bailable offence → bail is a RIGHT.",
        "CrPC s.437 → non-bailable offence → discretion.",
        "CrPC s.438 → anticipatory bail.",
        "CrPC s.167(2) → default bail (60/90 days).",
        "Gurbaksh Singh Sibbia (1980) 2 SCC 565 → anticipatory bail not to be artificially restricted.",
      ],
    },
    {
      id: "r5",
      name: "Maintenance — CrPC s.125",
      concept:
        "Section 125 provides a summary legal remedy for the maintenance of a wife, children (legitimate or " +
        "illegitimate) and parents who are unable to maintain themselves. It is a secular, self-contained remedy " +
        "available regardless of the personal law of the parties, and applies to persons of any religion.",
      provisions: ["CrPC s.125 — order for maintenance of wives, children and parents", "CrPC s.126 — procedure", "CrPC s.127 — alteration in allowance", "CrPC s.128 — enforcement of the order"],
      cases: [
        { name: "Mohd. Ahmed Khan v. Shah Bano Begum, (1985) 2 SCC 556", principle: "Section 125 applies to a Muslim wife; the provision cuts across personal law and is a secular remedy." },
        { name: "Rajnesh v. Neha, (2021) 2 SCC 324", principle: "Comprehensive guidelines on overlapping maintenance claims under CrPC s.125 and personal-law statutes; affidavit of assets and liabilities required." },
      ],
      exceptions: ["A wife living in adultery, or a wife who refuses to live with her husband without sufficient reason, is not entitled to maintenance.", "A father is not obliged to maintain a child who has attained majority unless the child is unable to maintain itself by reason of physical or mental abnormality."],
      confusions: ["CrPC s.125 (summary maintenance, secular) ≠ personal-law maintenance (e.g., Hindu Marriage Act s.24/25) ≠ Protection of Women from Domestic Violence Act reliefs.", "CrPC s.125 is 125 — not 144 (public nuisance) and not 107 (security for keeping the peace)."],
      aibeFocus: ["'Summary legal remedy for maintenance of spouses, children and parents' → CrPC s.125."],
      flashpoints: [
        "CrPC s.125 → summary remedy for maintenance of WIFE, CHILDREN, PARENTS.",
        "Section 125 is secular — it cuts across personal law (Shah Bano).",
        "CrPC s.144 → public nuisance / urgent cases of nuisance. CrPC s.107 → security for keeping the peace. CrPC s.320 → compounding.",
        "Rajnesh v. Neha (2021) 2 SCC 324 → overlapping maintenance claims.",
      ],
    },
    {
      id: "r6",
      name: "Trial — Appeal and Timelines",
      concept:
        "An appeal against conviction by a Magistrate of the Second Class lies to the Court of Session where the " +
        "sentence exceeds one month, or where a fine exceeding a specified amount has been imposed together with the " +
        "imprisonment. Where the sentence is only one month's imprisonment and no fine accompanies it, no appeal lies. " +
        "The BNSS introduces an outer timeline for the pronouncement of judgment after the conclusion of arguments.",
      provisions: [
        "CrPC s.374 — appeals from convictions",
        "CrPC s.376 — no appeal in petty cases (a sentence of imprisonment not exceeding ONE MONTH, or a fine not exceeding two hundred rupees, imposed by a Magistrate of the Second Class)",
        "CrPC s.377 — appeal by the State; s.378 — appeal by the complainant; s.379 — appeal against acquittal in certain cases",
        "BNSS — judgment within 30 days of the conclusion of arguments, extendable up to 45 days",
      ],
      cases: [
        { name: "Bani Singh v. State of U.P., (1996) 4 SCC 720", principle: "An appellate court is not obliged to re-appreciate the evidence if counsel does not press it, but must still decide the appeal on merits." },
      ],
      exceptions: ["CrPC s.376 bars appeals in petty cases: a Second Class Magistrate's sentence of not more than one month's imprisonment and a fine of not more than two hundred rupees.", "Where a fine exceeding the specified amount is imposed, an appeal does lie."],
      confusions: ["'Appeal lies to the Court of Session' vs 'no appeal is maintainable' — read the sentence imposed carefully. Sentence of one month's imprisonment alone from a Second Class Magistrate → NO appeal."],
      aibeFocus: ["The petty-case bar in s.376. And the BNSS judgment timeline of 30/45 days."],
      flashpoints: [
        "Second Class Magistrate, sentence of ONE MONTH's imprisonment with no fine → NO APPEAL (CrPC s.376).",
        "BNSS → judgment within 30 DAYS of conclusion of arguments, extendable to 45 DAYS.",
        "CrPC s.374 → general right of appeal; s.377 → State appeal; s.378 → complainant appeal.",
      ],
    },
    {
      id: "r7",
      name: "BNSS Innovations — Timelines and Recording",
      concept:
        "The BNSS introduces technology-driven and time-bound procedures: mandatory audio-video recording of search " +
        "and seizure, statutory recognition of the Zero FIR, time limits for the completion of investigation for " +
        "sexual offences, disposal of cases by framing of charge within 60 days, and an outer limit for pronouncing " +
        "judgment.",
      provisions: [
        "BNSS s.105 — audio-video recording of search and seizure",
        "BNSS — police must inform the informant of a decision not to investigate",
        "BNSS — plea bargaining application to be made within the prescribed window after framing of charge",
        "BNSS — electronic mode of service, e-FIR, Zero FIR",
      ],
      cases: [
        { name: "Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273", principle: "Arrest guidelines for offences punishable with up to seven years; checklist and notice under s.41A required — a development that the BNSS builds upon." },
      ],
      exceptions: ["Where a Magistrate records reasons in writing, the recording requirement may be relaxed in specified circumstances."],
      confusions: ["BNSS s.105 ≠ CrPC s.105 (which relates to execution of warrants). The number is reused for a completely different provision — a textbook trap."],
      aibeFocus: ["BNSS s.105 = audio-video documentation of search and seizure, and nothing else."],
      flashpoints: [
        "BNSS s.105 → MANDATORY audio-video recording of the whole search and seizure process.",
        "BNSS judgment timeline → 30 days, extendable to 45 days.",
        "Plea bargaining → application must be made within 30 days of framing of charge.",
        "CrPC s.105 ≠ BNSS s.105 — different subject matter, same number.",
        "Zero FIR → statutory recognition in the BNSS.",
      ],
    },
  ],
};

/* ============================== CPC ========================================*/
window.AIBE_NOTES["cpc"] = {
  overview:
    "10 questions. CPC questions are almost always about ORDERS AND RULES, not sections — Order VI Rule 16, Order IX " +
    "Rule 13, Order XXI Rule 58, Order XXII, Order XXIII. Learn the order-rule number with the remedy, and learn the " +
    "specific small provisions (s.24, s.35B, s.148, s.151) that the paper used.",
  topics: [
    {
      id: "v1",
      name: "Transfer of Suits — ss.24 and 25",
      concept:
        "Section 24 empowers the High Court or the District Court to transfer any suit, appeal or proceeding from one " +
        "court to another subordinate court. Section 25 empowers the Supreme Court to transfer a case from a court in " +
        "one State to a court in another State.",
      provisions: ["s.15-20 — place of suing", "s.22 — power to transfer where several courts have jurisdiction", "s.23 — withdrawal and transfer when several courts have jurisdiction", "s.24 — general power of transfer and withdrawal", "s.25 — power of the Supreme Court to transfer cases"],
      cases: [
        { name: "Kulwinder Kaur v. Kandi Friends Education Trust, (2008) 3 SCC 659", principle: "Principles governing transfer of suits: the convenience of the parties and the ends of justice, not the convenience of one party alone." },
      ],
      exceptions: ["A district-to-district transfer within the State is made by the High Court (or the District Court within its own jurisdiction) — not by the court in which the suit is pending."],
      confusions: ["s.24 = within the State, by High Court / District Court. s.25 = inter-State, by the Supreme Court. A transfer from one district to another district within the State requires the High Court (or District Court), not an agreement between the parties."],
      aibeFocus: ["A district-to-district transfer within a State → the High Court."],
      flashpoints: [
        "CPC s.24 → transfer and withdrawal (High Court / District Court).",
        "CPC s.25 → inter-State transfer by the SUPREME COURT.",
        "Transfer does not require the parties' agreement.",
        "Transfer may be ordered at any stage.",
      ],
    },
    {
      id: "v2",
      name: "Pleadings — Striking Out and Amendment",
      concept:
        "Order VI Rule 16 empowers the court to strike out from any pleading any matter which may be unnecessary, " +
        "scandalous, frivolous or vexatious, or which may tend to prejudice, embarrass or delay the fair trial of the " +
        "suit, or which is otherwise an abuse of the process of the court. The power may be exercised at any stage of " +
        "the proceedings.",
      provisions: [
        "Order VI Rule 1-2 — pleadings and their contents",
        "Order VI Rule 16 — striking out pleadings (may be done AT ANY STAGE of the proceedings)",
        "Order VI Rule 17 — amendment of pleadings (cannot be used to substitute a new cause of action)",
        "Order VII Rule 11 — rejection of the plaint",
        "Order VIII Rule 9 — subsequent pleadings",
      ],
      cases: [
        { name: "Raveendran v. Sobhana, (2018) 12 SCC 683", principle: "Order VI Rule 16 and Order VII Rule 11 serve different purposes — striking out part of a pleading vs rejecting the plaint." },
        { name: "Salem Advocate Bar Association v. Union of India, (2005) 6 SCC 344", principle: "Object, scope and constitutionality of the CPC amendments of 1999 and 2002." },
      ],
      exceptions: ["Striking out is a drastic power to be exercised sparingly.", "Amendment is refused where it changes the nature of the suit or the cause of action."],
      confusions: ["Order VI Rule 16 strikes out a pleading (or part of it); Order VII Rule 11 REJECTS the plaint; Order VI Rule 17 AMENDS. The paper tests precisely this distinction.", "Striking out operates at any stage; it does not require the trial to have begun."],
      aibeFocus: ["Order VI Rule 16 — the court MAY strike out such pleadings at any stage."],
      flashpoints: [
        "Order VI Rule 16 → striking out unnecessary/scandalous/prejudicial pleadings, AT ANY STAGE.",
        "Order VI Rule 17 → amendment of pleadings.",
        "Order VII Rule 11 → rejection of the plaint.",
        "Striking out ≠ rejecting the plaint ≠ dismissing the suit.",
      ],
    },
    {
      id: "v3",
      name: "Parties — Mis-joinder and Non-joinder",
      concept:
        "Order I Rule 9 provides that no suit shall be defeated by reason of the mis-joinder or non-joinder of " +
        "parties; the court may deal with the matter in controversy so far as it regards the rights and interests of " +
        "the parties actually before it. Order I Rule 10 empowers the court to add, delete or substitute parties at " +
        "any stage of the proceedings.",
      provisions: ["Order I Rule 9 — mis-joinder and non-joinder", "Order I Rule 10 — suit in the name of a wrong person as plaintiff/defendant; addition and substitution of parties", "Order I Rule 8 — representative suits", "Order I Rule 3 — joinder of defendants"],
      cases: [
        { name: "Anil Kumar Singh v. Shivnath Mishra, (1995) 3 SCC 147", principle: "The court may add a party whose presence is necessary to enable it effectually and completely to adjudicate upon and settle all the questions involved." },
      ],
      exceptions: ["A suit against a dead person is a nullity, but a wrongly-impleaded party may be substituted."],
      confusions: ["Order I Rule 9 (no suit defeated by mis-joinder) does NOT mean a suit against a dead person survives.", "A wrong defendant is not a reason to return the plaint or dismiss the suit — substitution or addition is the remedy."],
      aibeFocus: ["Where a person has been wrongly impleaded as a defendant, the court may permit substitution or addition of the proper defendant."],
      flashpoints: [
        "Order I Rule 9 → a suit is NOT defeated by mis-joinder or non-joinder.",
        "Order I Rule 10 → the court may ADD, DELETE or SUBSTITUTE parties at any stage.",
        "Wrong defendant → substitute, do not dismiss.",
        "Suit against a dead person → nullity (different rule from mis-joinder).",
      ],
    },
    {
      id: "v4",
      name: "Ex Parte Decrees — Order IX Rule 13",
      concept:
        "Where a defendant does not appear when the suit is called on for hearing, the court may proceed ex parte. " +
        "Order IX Rule 13 allows the defendant to apply to set aside the ex parte decree on satisfying the court that " +
        "the summons was not duly served, or that he was prevented by sufficient cause from appearing when the suit " +
        "was called on for hearing.",
      provisions: ["Order IX Rule 6 — procedure when only the plaintiff appears", "Order IX Rule 7 — procedure where the defendant appears but the plaintiff does not", "Order IX Rule 13 — setting aside decree ex parte against a defendant", "Order IX Rule 14 — procedure where the plaintiff does not appear", "s.96(2) — appeal against an ex parte decree"],
      cases: [
        { name: "G.P. Srivastava v. R.K. Raizada, (2000) 3 SCC 54", principle: "The expression 'sufficient cause' in Order IX Rule 13 must be liberally construed to advance substantial justice; the defendant must not have been negligent." },
        { name: "Sangram Singh v. Election Tribunal, AIR 1955 SC 425", principle: "The CPC must be construed as a procedure designed to advance justice, not to defeat it." },
      ],
      exceptions: ["An ex parte decree may be set aside either by an application under Order IX Rule 13 or by an appeal under s.96(2); where the defendant had no notice, a separate suit is not the appropriate remedy."],
      confusions: ["Setting aside an ex parte decree (Order IX Rule 13) vs setting aside an abatement (Order XXII Rule 9) vs review (s.114). Order-rule numbers matter."],
      aibeFocus: ["The two grounds in Order IX Rule 13: summons not duly served, OR prevented by sufficient cause from appearing."],
      flashpoints: [
        "Order IX Rule 13 → set aside an EX PARTE decree on (i) summons not duly served or (ii) sufficient cause for non-appearance.",
        "Remedy for a defendant never served → application under Order IX Rule 13 (not a fresh suit, not only an appeal).",
        "Order XXII Rule 9 → setting aside an ABATEMENT for sufficient cause.",
        "Liberally construe 'sufficient cause' (G.P. Srivastava).",
      ],
    },
    {
      id: "v5",
      name: "Withdrawal and Abandonment of Suits — Order XXIII",
      concept:
        "A plaintiff may withdraw a suit or abandon a part of his claim with liberty to institute a fresh suit in " +
        "respect of the subject matter. Where the plaintiff withdraws without the court's permission to file a fresh " +
        "suit, he is barred from instituting a fresh suit on the same cause of action.",
      provisions: ["Order XXIII Rule 1 — withdrawal of suit or abandonment of part of claim", "Order XXIII Rule 1(3) — court may grant permission to file a fresh suit where the suit must fail by reason of some formal defect, or where there are sufficient grounds", "Order XXIII Rule 1(4) — no fresh suit without permission", "Order XXIII Rule 2 — limitation on the plaintiff's right to withdraw", "Order XXIII Rule 3 — compromise decree"],
      cases: [
        { name: "Kiran Singh v. Chaman Paswan, AIR 1954 SC 340", principle: "A decree passed by a court without jurisdiction is a nullity, and withdrawal must be distinguished from a decree on merits." },
      ],
      exceptions: ["Permission to institute a fresh suit is granted where the suit must fail by reason of a formal defect or on sufficient grounds — the court does not grant it as a matter of course."],
      confusions: ["Withdrawal WITH permission → fresh suit permitted. Withdrawal WITHOUT permission → fresh suit BARRED. The paper's Statement set tests exactly this."],
      aibeFocus: ["Whether the court must grant permission on request — it must NOT; permission is discretionary."],
      flashpoints: [
        "Order XXIII Rule 1 → withdrawal / abandonment of a suit (or part of a claim).",
        "Fresh suit needs the court's PERMISSION (Order XXIII Rule 1(3)).",
        "Without permission → fresh suit on the SAME cause of action is BARRED.",
        "The court is NOT bound to grant permission just because it is asked for.",
      ],
    },
    {
      id: "v6",
      name: "Execution — Order XXI Rule 58",
      concept:
        "Execution is the process of enforcing a decree. Where property of the judgment-debtor has been attached and " +
        "a third party claims an independent title, the claim is adjudicated by the executing court itself under " +
        "Order XXI Rule 58; the bar in Order XXI Rule 59 and the summary nature of the enquiry must be understood.",
      provisions: [
        "s.36-47 — execution; s.47 — questions to be determined by the executing court",
        "Order XXI Rule 54 — attachment of immovable property",
        "Order XXI Rule 58 — adjudication of claims and objections to attachment",
        "Order XXI Rule 63 — the order is subject to a suit, and does not preclude a separate suit to establish title",
        "s.47 — questions arising between the parties to the suit relating to execution to be determined by the executing court, not by a separate suit",
      ],
      cases: [
        { name: "N.S.S. Narayana Sarma v. Goldstone Exports (P) Ltd., (2002) 1 SCC 662", principle: "Section 47 excludes a separate suit for questions arising between the parties relating to the execution, discharge or satisfaction of the decree." },
        { name: "Bhavan Vaja v. Solanki Hanuji Khodaji Mansang, (1973) 2 SCC 40", principle: "Scope of the executing court's power — it cannot go behind the decree." },
      ],
      exceptions: ["A third-party claimant who is not a party to the suit may still establish title by a separate suit where Order XXI Rule 63 applies."],
      confusions: ["Where the claim is by a THIRD PARTY with an independent title → the executing court adjudicates under Order XXI Rule 58. Where the dispute is BETWEEN THE PARTIES to the suit → s.47, and a separate suit is barred."],
      aibeFocus: ["Third-party claim asserting independent title in execution → adjudicated by the executing court."],
      flashpoints: [
        "Order XXI Rule 58 → the EXECUTING COURT adjudicates a third-party claim to attached property.",
        "s.47 → questions between the parties to the suit regarding execution → executing court, NO separate suit.",
        "The executing court cannot go behind the decree.",
        "Order XXI Rule 63 → the claim order is subject to a suit to establish title.",
      ],
    },
    {
      id: "v7",
      name: "Costs and Dismissal — ss.35, 35B and Court Fee",
      concept:
        "Section 35 governs costs. Section 35B deals with costs for causing delay and lets the court impose costs as " +
        "a precondition for allowing the suit to proceed further where a party fails to take a step required by the " +
        "court on the date fixed. Where the plaintiff fails to pay court fee or postal charges for service of summons " +
        "within the time permitted, the suit may be dismissed.",
      provisions: ["s.35 — costs discretionary", "s.35A — compensatory costs in respect of false or vexatious claims or defences", "s.35B — costs for causing delay", "s.148 — enlargement of time", "s.149 — power to make up deficiency of court fees", "s.151 — inherent powers"],
      cases: [
        { name: "Salem Advocate Bar Association v. Union of India, (2005) 6 SCC 344", principle: "s.35B and related provisions on costs are intended to discourage delaying tactics; upheld as valid." },
      ],
      exceptions: ["s.35B costs are a precondition, not a penalty for contempt — the court retains the discretion to fix the amount.", "s.149 permits the court to allow a party to pay the deficient court fee at any stage."],
      confusions: ["s.35B (costs for delay in the conduct of the suit) ≠ s.35A (compensatory costs for false claims).", "Failure to pay court fee/postal charges → dismissal of the suit; failure to pay s.35B costs → further prosecution is barred until payment."],
      aibeFocus: ["s.35B — the court may impose costs as a precondition for allowing further prosecution."],
      flashpoints: [
        "s.35B → costs for causing delay; a PRECONDITION for further prosecution.",
        "Failure to pay court fee / postal charges for summons within the permitted time → DISMISSAL of the suit.",
        "s.149 → the court may permit making up the deficiency of court fee at any stage.",
        "s.151 → inherent powers are residuary.",
      ],
    },
    {
      id: "v8",
      name: "Abatement — Order XXII",
      concept:
        "Where a party dies and the legal representatives are not brought on record within the prescribed time, the " +
        "suit abates. Order XXII Rule 9 allows the court to set aside the abatement if the plaintiff shows sufficient " +
        "cause for not making the application within time.",
      provisions: ["Order XXII Rule 3 — procedure where one of several plaintiffs or defendants dies", "Order XXII Rule 4 — procedure where there is no legal representative", "Order XXII Rule 4(3) — 90 days to apply to bring the legal representatives on record", "Order XXII Rule 9 — effect of abatement and setting aside of abatement", "Order XXII Rule 10A — duty of the pleader to inform about the death of a party"],
      cases: [
        { name: "Vidyawati v. State of Punjab, (2006) 6 SCC 57", principle: "The court should be liberal in allowing applications to set aside abatement, but delay must be explained." },
        { name: "Perumon Bhagvathy Devaswom v. Bhargavi Amma, (2008) 8 SCC 321", principle: "The day-to-day delay is to be computed strictly; courts should not adopt a hyper-technical approach in condoning delay in bringing legal representatives on record." },
      ],
      exceptions: ["The court may set aside an abatement on sufficient cause being shown; the power is discretionary and not to be exercised mechanically."],
      confusions: ["Order XXII Rule 9 (setting aside ABATEMENT) vs Order IX Rule 13 (setting aside an EX PARTE DECREE)."],
      aibeFocus: ["Setting aside abatement requires 'sufficient cause' for not applying within time."],
      flashpoints: [
        "Abatement → failure to bring the legal representatives on record in time.",
        "Order XXII Rule 9 → set aside the abatement for SUFFICIENT CAUSE.",
        "Order XXII Rule 4(3) → 90 days from the date of death to apply.",
        "Setting aside abatement is discretionary, not automatic.",
      ],
    },
  ],
};

/* ============================== EVIDENCE + BSA =============================*/
window.AIBE_NOTES["evidence-bsa"] = {
  overview:
    "8 questions. The examiner's favourite territories here are: (i) the applicability of the Act (arbitration!), " +
    "(ii) the definition of 'document', (iii) the three presumptions, (iv) circumstantial evidence's five golden " +
    "principles, and (v) electronic evidence under s.65B / BSA s.63. Learn the BSA section numbers as the new default " +
    "while keeping the Evidence Act numbers for reference.",
  topics: [
    {
      id: "e1",
      name: "Applicability — the Arbitration Point",
      concept:
        "The Evidence Act applies to all judicial proceedings in or before any court, including courts-martial, but " +
        "does NOT apply to affidavits presented to any court or officer, and does NOT apply to proceedings before an " +
        "arbitrator. The BSA reproduces this exclusion.",
      provisions: ["Evidence Act s.1 — short title, extent and commencement; the two exclusions (affidavits; proceedings before an arbitrator)", "BSA s.1 — extent and commencement"],
      cases: [
        { name: "State of U.P. v. Ramesh Chandra Agarwal, (2009) 11 SCC 478", principle: "Evidence Act s.1 does not apply to proceedings before an arbitrator, though the arbitral tribunal is not bound by the strict rules of the Act." },
      ],
      exceptions: ["Courts-martial ARE within the Act, notwithstanding the military context.", "The Act does not apply to affidavits."],
      confusions: ["Courts-martial (covered) vs arbitration proceedings (NOT covered) — an exam favourite reversal.", "The BSA has a carve-out for arbitration; tribunals such as NCLT/NCLAT/NGT/ITAT are not the same as arbitration and are not the exclusion."],
      aibeFocus: ["'The BSA is not applicable in which case?' → an ARBITRAL TRIBUNAL."],
      flashpoints: [
        "Evidence Act s.1 / BSA s.1 → applies to all judicial proceedings INCLUDING courts-martial.",
        "Does NOT apply to → AFFIDAVITS and proceedings before an ARBITRATOR.",
        "Arbitral tribunal ≠ court-martial for the purposes of s.1.",
        "NCLT, NCLAT, NGT and ITAT are tribunals within the judicial-proceeding framework — not the s.1 exclusion.",
      ],
    },
    {
      id: "e2",
      name: "Definitions — 'Document'",
      concept:
        "'Document' means any matter expressed or described upon any substance by means of letters, figures or marks, " +
        "or by more than one of those means, intended to be used, or which may be used, for the purpose of recording " +
        "that matter. The illustrations make clear that a MAP OR PLAN, an INSCRIPTION on a metal plate or stone, and a " +
        "CARICATURE are all documents.",
      provisions: ["Evidence Act s.3 — 'document' (with illustrations: writing, printed/lithographed/photographed words, map or plan, inscription on metal plate or stone, caricature)", "Evidence Act s.3 — 'evidence', 'fact', 'relevant', 'fact in issue', 'proved', 'disproved', 'not proved'", "BSA s.2(1)(d) — 'document' likewise includes electronic records and the illustrative categories"],
      cases: [
        { name: "Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473", principle: "Electronic records are documents within the meaning of the Act, and s.65B is a complete code for their admissibility." },
      ],
      exceptions: ["Statements made in court, when recorded, may be documents — but oral testimony is not."],
      confusions: ["Map, plan, inscription and caricature are all documents — do not be misled into thinking a caricature is 'not a document'. And 'private papers' is not one of the enumerated illustrative categories — that is the answer the paper seeks."],
      aibeFocus: ["Which is NOT a document as per BSA — the illustrative list (map, inscription, caricature) is in; 'private papers' is the odd one out."],
      flashpoints: [
        "Document → matter expressed on a substance by letters, figures or marks.",
        "Illustrations: writing | printed/lithographed/photographed words | MAP or PLAN | INSCRIPTION on metal/stone | CARICATURE.",
        "'Private papers' → not an enumerated illustrative category.",
        "Electronic records are documents (Anvar v. Basheer).",
      ],
    },
    {
      id: "e3",
      name: "Presumptions — May Presume, Shall Presume, Conclusive Proof",
      concept:
        "Three degrees of presumption run through the Act. 'May presume' — the court may regard a fact as proved " +
        "unless and until it is disproved. 'Shall presume' — the court MUST regard the fact as proved unless and until " +
        "it is disproved. 'Conclusive proof' — the court shall regard the fact as proved and shall not allow evidence " +
        "to be given to disprove it.",
      provisions: ["Evidence Act s.4 — the three categories", "Evidence Act s.3 — definitions of 'may presume' and 'shall presume'", "BSA s.2 and s.4 — the same framework", "Evidence Act s.113A, s.113B — statutory presumptions in dowry-death matters"],
      cases: [
        { name: "State of Maharashtra v. Vasudeo Ramchandra Kaidalwar, (1981) 3 SCC 199", principle: "Effect of a 'shall presume' clause — it shifts the burden onto the accused, but only to the extent of a preponderance of probabilities." },
      ],
      exceptions: ["Conclusive proof admits of no rebuttal evidence at all.", "'Shall presume' is rebuttable — it is not conclusive."],
      confusions: ["'Unassailable proof' is NOT a category under the Act — the three are may presume, shall presume, conclusive proof. That is exactly the trap the paper sets."],
      aibeFocus: ["The category that does NOT exist: 'unassailable proof'."],
      flashpoints: [
        "May presume → court MAY, and it is rebuttable.",
        "Shall presume → court MUST, but it is still rebuttable.",
        "Conclusive proof → court SHALL, and NO evidence to the contrary is allowed.",
        "'Unassailable proof' → NOT a recognised category (BNS/BSA presumption framework).",
        "BSA s.2 → definitions including 'conclusive proof'.",
      ],
    },
    {
      id: "e4",
      name: "Burden of Proof and Onus Probandi",
      concept:
        "'Onus probandi' means the burden of proof — the obligation on the party who asserts a fact to prove it. In " +
        "criminal cases the burden is on the prosecution to prove the offence beyond a reasonable doubt, and that " +
        "includes proof of mens rea where the statute requires it.",
      provisions: ["Evidence Act s.101 — burden of proof", "Evidence Act s.102 — on whom burden of proof lies", "Evidence Act s.103 — burden of proof as to particular fact", "Evidence Act s.104 — burden of proving fact to be proved to make evidence admissible", "Evidence Act s.105 — burden of proving that the case falls within an exception", "Evidence Act s.106 — burden of proving fact especially within knowledge", "Evidence Act s.114 — court may presume the existence of facts"],
      cases: [
        { name: "Woolmington v. DPP, (1935) AC 462", principle: "The golden thread — the prosecution must prove the guilt of the accused; the burden never shifts to the accused to prove his innocence." },
        { name: "V.D. Jhingan v. State of U.P., AIR 1966 SC 1762", principle: "Where the statute places a burden on the accused, it may be discharged by a preponderance of probabilities." },
      ],
      exceptions: ["s.105 — the burden of proving that a case falls within a general exception lies on the accused.", "s.106 — facts especially within the knowledge of a person must be proved by that person."],
      confusions: ["'Onus probandi' is precisely 'burden of proof' — not 'the fact to be proved', not 'actual evidence', and not 'mens rea'."],
      aibeFocus: ["The definition of onus probandi in one line: burden of proof, placing responsibility on the party making the affirmative claim."],
      flashpoints: [
        "Onus probandi = BURDEN OF PROOF.",
        "Burden lies on the party who asserts the affirmative.",
        "Criminal cases → prosecution must prove beyond reasonable doubt, including mens rea.",
        "s.105 → the ACCUSED bears the burden of proving a general exception.",
        "Woolmington (1935) AC 462 → the golden thread.",
      ],
    },
    {
      id: "e5",
      name: "Electronic Evidence — s.65B / BSA s.63",
      concept:
        "Electronic records are admissible subject to the conditions in s.65B (Evidence Act) / s.63 (BSA). The " +
        "certificate requirement is a condition precedent to admissibility, and the BSA requires the certificate to " +
        "be in the prescribed Schedule format, accompanied by a hash value, and signed by the person in charge of " +
        "the computer or communication device and, where applicable, an expert.",
      provisions: [
        "Evidence Act s.65A — contents of electronic records may be proved",
        "Evidence Act s.65B — admissibility of electronic records; s.65B(4) certificate",
        "BSA s.63 — admissibility of electronic records; s.63(4) certificate; Schedule prescribing the format with a HASH VALUE",
      ],
      cases: [
        { name: "State (NCT of Delhi) v. Navjot Sandhu, AIR 2005 SC 3820", principle: "Held that electronic records such as printouts and CDs could be admitted as prima facie evidence without authentication — the approach later displaced by Anvar v. Basheer." },
        { name: "Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473", principle: "Section 65B is a complete code; a certificate under s.65B(4) is mandatory. Overruled Navjot Sandhu on this point." },
        { name: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1", principle: "Clarified Anvar; the certificate under s.65B(4) is a condition precedent but may be produced at a later stage with the leave of the court. Landmark and latest interpretation." },
        { name: "Ravinder Singh v. State of Punjab, (2022) 7 SCC 581", principle: "Clarified the evidentiary value of WhatsApp messages and the requirements for authentication." },
      ],
      exceptions: ["The certificate may be produced subsequently with the court's leave (Arjun Panditrao Khotkar).", "Where the electronic record is produced as primary evidence under s.62, the certificate requirement is differently treated — a contested point that the cases discuss."],
      confusions: [
        "The Navjot Sandhu approach (no authentication required) was OVERRULED by Anvar v. Basheer. A question that treats Navjot Sandhu as good law for the certificate point is testing your knowledge of that overruling.",
        "s.65B (Evidence Act) ↔ s.63 (BSA). Same subject, new number.",
      ],
      aibeFocus: ["The relationship between Anvar, Arjun Panditrao Khotkar and Navjot Sandhu. BSA s.63(4) certificate requirements — hash value and Schedule format."],
      flashpoints: [
        "Evidence Act s.65B ↔ BSA s.63.",
        "s.65B(4)/63(4) certificate → CONDITION PRECEDENT to admissibility.",
        "Certificate must follow the SCHEDULE format and carry a HASH VALUE.",
        "Anvar v. Basheer (2014) → s.65B is a complete code; overruled Navjot Sandhu.",
        "Arjun Panditrao Khotkar (2020) 7 SCC 1 → latest position; certificate may be produced later with leave.",
        "Navjot Sandhu (AIR 2005 SC 3820) → held CDs/printouts admissible without authentication — NO LONGER good law on this point.",
      ],
    },
    {
      id: "e6",
      name: "Circumstantial Evidence — The Five Golden Principles",
      concept:
        "Where a case rests on circumstantial evidence, the circumstances must be fully established and must form a " +
        "complete chain excluding every hypothesis except that of the guilt of the accused. The five golden " +
        "principles were laid down in Sharad Birdhichand Sarda.",
      provisions: ["Evidence Act ss.5-16 — relevancy of facts", "Evidence Act s.27 — discovery pursuant to information received from an accused", "Evidence Act s.114 — presumptions as to probable facts"],
      cases: [
        { name: "Sharad Birdhichand Sarda v. State of Maharashtra, (1984) 4 SCC 116", principle: "Five golden principles: (i) the circumstances must be fully established; (ii) the facts so established must be consistent only with the hypothesis of the guilt of the accused; (iii) the circumstances must be conclusive in nature; (iv) they must exclude every possible hypothesis except the one to be proved; (v) there must be a chain of evidence so complete as not to leave any reasonable ground for a conclusion consistent with the innocence of the accused." },
        { name: "Hanumant Govind Nargundkar v. State of M.P., AIR 1952 SC 343", principle: "The classic statement that the circumstances must be such as to exclude every hypothesis but the one proposed to be proved." },
      ],
      exceptions: ["Circumstantial evidence can sustain a conviction without direct evidence, provided the chain is complete."],
      confusions: ["Two similar-sounding cases: Hanumant Govind (1952) states the principle; Sharad Birdhichand Sarda (1984) lays down the FIVE golden principles. The paper's question asks for the five principles."],
      aibeFocus: ["Five golden principles = Sharad Birdhichand Sarda v. State of Maharashtra."],
      flashpoints: [
        "Five golden principles of circumstantial evidence → SHARAD BIRDHICHAND SARDA v. State of Maharashtra, (1984) 4 SCC 116.",
        "Hanumant Govind Nargundkar (1952) → the earlier formulation.",
        "Requirement → chain so complete as to exclude every hypothesis except guilt.",
      ],
    },
    {
      id: "e7",
      name: "Juvenile Age Determination",
      concept:
        "Age determination for juvenility is governed by the Juvenile Justice Act framework. Statutory documents " +
        "such as a birth certificate are preferred; medical examinations such as the ossification test are used " +
        "only in the absence of such documents, and the benefit of the margin is given to the person claiming juvenility.",
      provisions: ["Juvenile Justice (Care and Protection of Children) Act 2015 — age determination provisions", "Evidence Act s.35 — relevancy of an entry in a public record", "Evidence Act s.32 — statements of persons who are dead or cannot be found (birth certificate context)"],
      cases: [
        { name: "Ashwani Kumar Saxena v. State of M.P., (2012) 9 SCC 750", principle: "Procedure for age determination; the ossification test can only be resorted to when documentary evidence is unavailable." },
        { name: "Abuzar Hossain v. State of West Bengal, (2012) 10 SCC 489", principle: "Claim of juvenility may be raised at any stage; the court must conduct an enquiry and give the benefit of doubt on the margin of age." },
      ],
      exceptions: ["Where the accuracy of the birth certificate is disputed, the court may direct a medical examination."],
      confusions: ["Ossification is NOT the final or primary test — statutory documents take precedence. The paper's Statement II is the correct position."],
      aibeFocus: ["Birth certificate/documentary evidence takes precedence over the ossification test."],
      flashpoints: [
        "Statutory documents (birth certificate, school records) → PREFERRED for determining age of a juvenile.",
        "Ossification test → only when documentary evidence is NOT available.",
        "Abuzar Hossain (2012) → juvenility may be claimed at any stage.",
        "Benefit of the margin → given to the person claiming juvenility.",
      ],
    },
  ],
};

/* ============================== ADR ========================================*/
window.AIBE_NOTES["adr"] = {
  overview:
    "4 questions, and the cheapest marks in the paper — the provisions are few and the numbers are stable. Learn " +
    "s.5, s.16, s.20, s.23, s.25 and s.34 cold, and know the difference between arbitration, conciliation, mediation " +
    "and Lok Adalat.",
  topics: [
    {
      id: "a1",
      name: "Jurisdiction of the Arbitral Tribunal — s.16",
      concept:
        "The arbitral tribunal may rule on its own jurisdiction, including any objections with respect to the " +
        "existence or validity of the arbitration agreement — the principle of kompetenz-kompetenz. A plea that the " +
        "tribunal lacks jurisdiction must be raised not later than the submission of the statement of defence.",
      provisions: ["s.7 — arbitration agreement", "s.8 — power to refer parties to arbitration", "s.11 — appointment of arbitrators", "s.16 — competence of the arbitral tribunal to rule on its own jurisdiction; s.16(2) time limit for raising the plea", "s.21 — commencement of arbitral proceedings"],
      cases: [
        { name: "SBP & Co. v. Patel Engineering Ltd., (2005) 8 SCC 618", principle: "The power under s.11 was held to be judicial; the designated judge could decide jurisdictional issues — later modified by the 2015 Amendment." },
        { name: "Booz Allen & Hamilton Inc. v. SBI Home Finance Ltd., (2011) 5 SCC 532", principle: "Arbitrability of disputes — rights in personam are arbitrable; rights in rem are generally not." },
        { name: "In Re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act 1996 and the Indian Stamp Act 1899, (2024) 6 SCC 1", principle: "Seven-judge Bench: an unstamped or insufficiently stamped arbitration agreement is inadmissible but not void; the defect is curable, and the tribunal may rule on it." },
      ],
      exceptions: ["The tribunal's ruling on jurisdiction is not final — it is subject to challenge under s.34.", "The separability doctrine means the arbitration clause survives the invalidity of the main contract."],
      confusions: ["s.16 (tribunal rules on its own jurisdiction) ≠ s.11 (court appoints arbitrators) ≠ s.8 (judicial authority refers parties to arbitration)."],
      aibeFocus: ["Both limbs: the tribunal MAY rule on its own jurisdiction, and the plea must be raised not later than the statement of defence."],
      flashpoints: [
        "s.16 → the arbitral tribunal may RULE ON ITS OWN JURISDICTION (kompetenz-kompetenz).",
        "s.16(2) → a jurisdictional plea must be raised not later than the submission of the STATEMENT OF DEFENCE, unless the tribunal permits a later plea.",
        "s.5 → limited judicial intervention: a court may intervene ONLY where the Act expressly permits it.",
        "s.8 → judicial authority refers parties to arbitration where an arbitration agreement exists.",
        "Separability → the arbitration clause survives even if the main contract is invalid.",
      ],
    },
    {
      id: "a2",
      name: "Conduct of Proceedings — ss.18, 20, 23, 25",
      concept:
        "The tribunal must treat the parties with equality and give each a full opportunity to present its case. " +
        "Failing agreement between the parties, the tribunal determines the place of arbitration having regard to the " +
        "circumstances of the case, including the convenience of the parties. Where a respondent fails to submit its " +
        "statement of defence without sufficient cause, the tribunal continues the proceedings without treating that " +
        "failure as an admission of the claimant's allegations.",
      provisions: ["s.18 — equal treatment of parties", "s.20 — place of arbitration", "s.23 — statements of claim and defence", "s.25 — default of a party: (a) claimant fails to file the statement of claim → terminate; (b) respondent fails to file the statement of defence → continue WITHOUT treating it as an admission; (c) a party fails to appear or produce documents → proceed and make the award on the evidence before it"],
      cases: [
        { name: "Ssangyong Engineering & Construction Co. Ltd. v. NHAI, (2019) 15 SCC 131", principle: "Post-2015 amendment scope of s.34; 'patent illegality' and the public policy grounds narrowed." },
      ],
      exceptions: ["The tribunal may permit a later plea where it thinks fit."],
      confusions: ["s.25(a) — claimant defaults → TERMINATE proceedings. s.25(b) — respondent defaults → CONTINUE, and the failure is NOT an admission. This asymmetry is a standard exam question."],
      aibeFocus: ["s.25(b) is exactly what the paper tests: continue the proceedings, without treating the failure as an admission."],
      flashpoints: [
        "s.18 → equal treatment + full opportunity to present the case.",
        "s.20 → place of arbitration determined by the tribunal having regard to the CIRCUMSTANCES OF THE CASE, including the CONVENIENCE OF THE PARTIES.",
        "s.25(a) → claimant fails → TERMINATE.",
        "s.25(b) → respondent fails → CONTINUE, NOT an admission.",
        "s.25(c) → party fails to appear → proceed and make the award on the evidence.",
      ],
    },
    {
      id: "a3",
      name: "Court Intervention and the Award",
      concept:
        "Section 5 makes it clear that in matters governed by Part I, no judicial authority shall intervene except " +
        "where so provided. The grounds for setting aside an award are exhaustively listed in s.34, and the scope of " +
        "interference is narrow — an award is not to be set aside on the ground that the court considers it unjust " +
        "on the facts.",
      provisions: ["s.5 — extent of judicial intervention", "s.9 — interim measures by court", "s.17 — interim measures by the tribunal", "s.29A — time limit for the arbitral award (12 months, extendable by 6 months by consent, then by the court)", "s.31 — form and contents of the award; interest", "s.34 — setting aside the award (limited grounds; s.34(6) — no appeal)", "s.36 — enforcement; s.37 — appealable orders"],
      cases: [
        { name: "ONGC Ltd. v. Saw Pipes Ltd., (2003) 5 SCC 705", principle: "Expanded 'public policy' to include patent illegality — later narrowed by the 2015 Amendment and Ssangyong." },
        { name: "BCCI v. Kochi Cricket Pvt. Ltd., (2018) 6 SCC 287", principle: "Section 36 was amended in 2015; the automatic stay on the filing of a s.34 application was removed." },
      ],
      exceptions: ["Under s.34(5), an application to set aside an award must first be filed before the court; an appeal does not lie from an award."],
      confusions: ["A court may intervene ONLY where the Act expressly so provides — it cannot intervene merely because it disagrees with the award on facts, or because both parties ask for supervision, or because of an unspecified procedural irregularity."],
      aibeFocus: ["s.5 — the answer is always 'when the Act expressly permits such intervention'."],
      flashpoints: [
        "s.5 → judicial intervention ONLY where the Act expressly permits it.",
        "s.34 → setting aside; s.34(6) → NO appeal from a s.34 decision.",
        "s.37 → appeal lies only from specified orders.",
        "s.29A → award within 12 months, extendable by 6 months by consent.",
        "An award is NOT set aside because the court finds it unjust on the facts.",
      ],
    },
    {
      id: "a4",
      name: "Other ADR Modes",
      concept:
        "Mediation, conciliation and Lok Adalat are distinct from arbitration. In mediation and conciliation the " +
        "neutral third party does not adjudicate; in arbitration the tribunal renders a binding award enforceable as " +
        "a decree.",
      provisions: ["Arbitration and Conciliation Act 1996 Part III — conciliation (ss.61-81)", "Mediation Act 2023", "Legal Services Authorities Act 1987 — Lok Adalat (s.19-22); s.21 — the award is deemed to be a decree of a civil court and is final and binding", "s.89 CPC — settlement of disputes outside the court"],
      cases: [
        { name: "Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. (P) Ltd., (2010) 8 SCC 24", principle: "Guidelines on referral to ADR under s.89 CPC; identified categories of cases unsuitable for ADR." },
      ],
      exceptions: ["A Lok Adalat award is final and cannot be appealed.", "Disputes involving rights in rem or serious criminal offences are generally unsuitable for ADR."],
      confusions: ["Arbitration → binding award enforceable as a decree (s.36). Conciliation → the conciliator assists, and a settlement agreement is binding on the parties. Mediation → the mediator facilitates and does not decide."],
      aibeFocus: ["Which mode produces a binding adjudicatory outcome."],
      flashpoints: [
        "Arbitration → binding award; enforceable as a decree (s.36).",
        "Conciliation → Part III of the 1996 Act (ss.61-81); conciliator assists, does not adjudicate.",
        "Lok Adalat → award deemed a decree of a civil court, FINAL and not appealable.",
        "s.89 CPC → reference of disputes to ADR.",
        "Afcons Infrastructure (2010) 8 SCC 24 → guidelines on s.89 referral.",
      ],
    },
  ],
};

/* ============================== FAMILY LAW =================================*/
window.AIBE_NOTES["family"] = {
  overview:
    "8 questions. The paper's Family Law questions are disproportionately about SPECIFIC STATUTES WITH SPECIFIC " +
    "NUMBERS — hours of solemnisation, duration of maintenance, months for transferring dowry, minimum sentences. " +
    "Treat this as a numbers subject and build a table.",
  topics: [
    {
      id: "f1",
      name: "Hindu Marriage and Divorce",
      concept:
        "The Hindu Marriage Act 1955 governs marriage between Hindus. Void marriages (s.11) are those in breach of " +
        "the conditions in s.5(i), (iv) and (v); voidable marriages (s.12) are those vitiated by impotence, fraud, " +
        "concealment or a pregnancy at the time of marriage.",
      provisions: ["s.5 — conditions for a valid Hindu marriage", "s.11 — void marriages", "s.12 — voidable marriages", "s.13 — divorce grounds (including cruelty, desertion for two years, conversion, unsoundness of mind, renunciation, presumption of death)", "s.13B — divorce by mutual consent", "s.24 — maintenance pendente lite; s.25 — permanent alimony", "s.9 — restitution of conjugal rights; s.10 — judicial separation"],
      cases: [
        { name: "Sarla Mudgal v. Union of India, (1995) 3 SCC 635", principle: "Conversion to Islam and a second marriage is void and amounts to bigamy — Article 44 UCC discussion." },
        { name: "Amardeep Singh v. Harveen Kaur, (2017) 8 SCC 746", principle: "The statutory waiting period of six months under s.13B can be waived where there is no chance of reconciliation." },
      ],
      exceptions: ["A marriage in breach of s.5(iii) (minimum age) is neither void nor voidable — it is punishable but valid.", "Under s.13B the court may waive the waiting period."],
      confusions: ["Breach of the minimum-age condition makes the marriage neither void nor voidable — it is simply punishable. Breach of s.5(i) (bigamy), (iv) (within prohibited degrees) and (v) (sapinda) makes it void."],
      aibeFocus: ["Which breaches make a marriage void vs voidable vs merely punishable."],
      flashpoints: [
        "s.5(i),(iv),(v) breach → VOID (s.11).",
        "s.12 grounds → VOIDABLE (impotence, fraud, concealment, pregnancy by another).",
        "Breach of minimum age s.5(iii) → valid but PUNISHABLE — neither void nor voidable.",
        "s.13B → mutual-consent divorce; waiting period of 6 months can be waived.",
        "s.24 → maintenance pendente lite; s.25 → permanent alimony.",
      ],
    },
    {
      id: "f2",
      name: "Hindu Adoptions and Maintenance Act 1956",
      concept:
        "A Hindu male or female may adopt. Where a Hindu male has a wife living, her consent is necessary unless she " +
        "has finally and completely renounced the world, has ceased to be a Hindu by conversion, or has been declared " +
        "of unsound mind by a competent court.",
      provisions: ["s.6 — requisites of a valid adoption", "s.7 — capacity of a male Hindu to take in adoption; s.7 proviso — consent of the wife is necessary", "s.8 — capacity of a female Hindu to take in adoption", "s.9 — persons capable of giving in adoption", "s.10 — persons who may be adopted", "s.11 — other conditions for a valid adoption (including that the same child cannot be adopted by two persons)", "s.12 — effects of adoption", "s.18-22 — maintenance of wife, children and aged parents"],
      cases: [
        { name: "Sawan Ram v. Kalawanti, AIR 1967 SC 1761", principle: "On adoption by a widow, the adopted child is deemed to be the child of her deceased husband as well — the adoption is to the family." },
      ],
      exceptions: ["The wife's consent is dispensed with where she has finally and completely renounced the world, has ceased to be a Hindu by conversion, or has been declared of unsound mind."],
      confusions: ["The three statutory dispensations from a wife's consent are exhaustive — mere refusal, personal disagreement or living separately without legal separation does NOT dispense with consent."],
      aibeFocus: ["When a wife's consent is unnecessary → conversion / renunciation / declared unsound mind."],
      flashpoints: [
        "HAMA 1956 s.7 proviso → the WIFE'S CONSENT is necessary for a Hindu male's adoption.",
        "Consent unnecessary if she has: ceased to be a Hindu by CONVERSION | finally and completely RENOUNCED the world | been declared of UNSOUND MIND by a competent court.",
        "Mere refusal, disagreement or separate living → NOT grounds to dispense with consent.",
        "s.11 — the same child cannot be adopted by two different persons.",
      ],
    },
    {
      id: "f3",
      name: "Special Marriage Act 1954",
      concept:
        "The Special Marriage Act provides for civil marriage irrespective of religion. Notice of intended marriage must " +
        "be given to the Marriage Officer, and provision is made for the solemnisation of marriage in the presence of " +
        "three witnesses. Proceedings may be held in camera, and publishing matter relating to in-camera proceedings " +
        "is penalised.",
      provisions: ["s.4 — conditions relating to solemnisation", "s.5 — notice of intended marriage", "s.6 — marriage notice book and publication", "s.7 — objection to the marriage", "s.11 — declaration by parties and witnesses", "s.12 — place and form of solemnisation", "s.33 — proceedings to be in camera; publication of proceedings without permission is punishable with a fine which may extend to ONE THOUSAND RUPEES", "s.34 — appeals"],
      cases: [
        { name: "Shakti Vahini v. Union of India, (2018) 7 SCC 192", principle: "Protection of couples in inter-caste or inter-religious marriages; the role of the Special Marriage Act in protecting their choice." },
      ],
      exceptions: ["The court may permit publication of in-camera proceedings where it is satisfied that it is in the public interest."],
      confusions: ["Fine limits differ across sections — the in-camera publication fine question is about s.33: a fine up to ONE THOUSAND RUPEES. Read the section reference in the question before choosing."],
      aibeFocus: ["Fine for publishing in-camera proceedings — s.33, up to ₹1,000."],
      flashpoints: [
        "Special Marriage Act 1954 → civil marriage; notice under s.5.",
        "s.33 → proceedings in camera; publishing in-camera matter → fine up to ₹1,000.",
        "Three witnesses required (s.11).",
        "s.4 → conditions for solemnisation.",
      ],
    },
    {
      id: "f4",
      name: "Christian and Parsi Marriage Laws",
      concept:
        "The Indian Christian Marriage Act 1872 regulates the time and manner of solemnisation of Christian marriages. " +
        "The Parsi Marriage and Divorce Act 1936 provides for solemnisation and for maintenance, the duration of " +
        "which is a specific statutory point.",
      provisions: [
        "Indian Christian Marriage Act 1872 s.10 — marriage to be solemnised between SIX IN THE MORNING and SEVEN IN THE EVENING (six and seven)",
        "Indian Christian Marriage Act 1872 s.4-9 — persons by whom marriages may be solemnised; registration",
        "Parsi Marriage and Divorce Act 1936 s.40 — permanent alimony and maintenance; the Court may order maintenance for a term NOT EXCEEDING THE LIFE OF THE PLAINTIFF (the plaintiff's life)",
        "Parsi Marriage and Divorce Act 1936 s.32 — grounds for divorce",
      ],
      cases: [
        { name: "Badshah v. Urmila Badshah Godse, (2014) 1 SCC 188", principle: "Maintenance jurisprudence — though decided under CrPC s.125, it illustrates the purposive approach to maintenance provisions." },
      ],
      exceptions: ["Where the bridegroom is a Christian and the marriage is solemnised in the presence of a Marriage Officer, the hours provision applies to the solemnisation."],
      confusions: [
        "Indian Christian Marriage Act hours → between SIX in the morning and SEVEN in the evening.",
        "Parsi maintenance duration → NOT a fixed term of 5 or 10 years; it is for a term not exceeding the LIFE OF THE PLAINTIFF.",
      ],
      aibeFocus: ["The two statutory numbers: Christian solemnisation hours (6 am - 7 pm) and Parsi maintenance duration (not exceeding the life of the plaintiff)."],
      flashpoints: [
        "Indian Christian Marriage Act 1872 s.10 → solemnisation between 6 AM and 7 PM.",
        "Parsi Marriage and Divorce Act 1936 s.40 → maintenance for a term NOT EXCEEDING THE LIFE OF THE PLAINTIFF.",
        "Parsi marriages are registered under s.6 of the 1936 Act.",
        "Do not answer 'fixed term of ten years' — that is a fabricated option.",
      ],
    },
    {
      id: "f5",
      name: "Guardians and Wards Act 1890",
      concept:
        "The Act applies to all persons in India regardless of religion, and governs the appointment and declaration of " +
        "guardianship of minors and the custody of the minor's property. For a married female minor, a guardian may " +
        "be appointed only in special circumstances.",
      provisions: ["s.4 — definitions ('minor', 'guardian', 'ward')", "s.4(3) — 'minor' means a person who has not attained the age of eighteen years; a ward ceases to be a ward on attaining majority", "s.7 — power of the court to make an order as to guardianship", "s.8 — persons entitled to apply for an order for guardianship", "s.17 — matters to be considered in appointing a guardian (welfare of the minor is paramount)", "s.19 — guardian of the person not to be appointed where the father or mother is not unfit; a married female minor: NO guardian of the person to be appointed where the husband is not unfit"],
      cases: [
        { name: "Gohar Begum v. Suggi, AIR 1960 SC 93", principle: "Habeas corpus to restore an infant to the custody of the person entitled to it; the welfare of the minor is paramount." },
        { name: "Roxann Sharma v. Arun Sharma, (2015) 8 SCC 318", principle: "Custody of a child below five years with the mother is generally in the child's welfare." },
      ],
      exceptions: ["Section 19 permits appointment of a guardian of the person of a married female minor only where the husband is considered unfit by the Court (or where the husband is not fit) — mere non-consent is not the test."],
      confusions: ["The Act does not require the husband's CONSENT; the test is the husband's UNFITNESS. The options 'husband must consent' and 'husband must be declared legally incompetent' are deliberate distractors."],
      aibeFocus: ["For a married female minor → a guardian of the person can be appointed only if the husband is UNFIT."],
      flashpoints: [
        "Guardians and Wards Act 1890 → applies to ALL personal laws.",
        "s.4(3) → 'minor' = under 18 years.",
        "Welfare of the minor (s.17) is the PARAMOUNT consideration.",
        "Married female minor → guardian of the person appointed only where the HUSBAND IS UNFIT (s.19).",
        "Consent of the husband is not the statutory test.",
      ],
    },
    {
      id: "f6",
      name: "Dowry Prohibition Act 1961",
      concept:
        "The Act prohibits the giving and taking of dowry. Where dowry is received before marriage, it must be " +
        "transferred to the woman within three months of the marriage. The minimum punishment for giving or taking " +
        "dowry is imprisonment of not less than five years — one of the highest minimums in the statute book.",
      provisions: [
        "s.2 — definition of 'dowry' (property or valuable security given or agreed to be given in connection with the marriage)",
        "s.3 — penalty for giving or taking dowry; s.3(2) — punishment: imprisonment of NOT LESS THAN FIVE YEARS and a fine of not less than fifteen thousand rupees or the amount of the value of the dowry, whichever is more",
        "s.4 — penalty for demanding dowry",
        "s.6 — transfer of dowry to the bride: where dowry is received before the marriage, it must be transferred to the bride WITHIN THREE MONTHS of the marriage",
        "s.7 — cognizance of offences (no court inferior to that of a Metropolitan Magistrate or a Judicial Magistrate of the first class shall try the offence)",
        "s.8A — burden of proof in certain cases",
        "IPC s.304B / BNS s.80 — dowry death",
      ],
      cases: [
        { name: "Reema Aggarwal v. Anupam, (2004) 3 SCC 199", principle: "The expression 'husband' in the dowry provisions is not to be construed narrowly; the provision must be given a purposive interpretation." },
        { name: "State of H.P. v. Nikku Ram, (1995) 6 SCC 219", principle: "A demand for dowry is the gist of the offence; the punishment for giving or taking dowry applies to both sides." },
      ],
      exceptions: ["Presents given at the time of marriage to the bride or bridegroom, without any demand, are excluded from the definition of 'dowry'.", "A list of gifts must be maintained if the value exceeds the prescribed amount."],
      confusions: ["The period for transferring dowry to the bride is THREE MONTHS — not six, not seven, not five.", "Minimum imprisonment for giving or taking dowry is FIVE YEARS — not three, not seven, not ten."],
      aibeFocus: ["Two numbers: 3 months (transfer of dowry) and 5 years minimum (giving/taking dowry)."],
      flashpoints: [
        "Dowry Prohibition Act 1961 s.6 → dowry received BEFORE marriage must be transferred to the woman WITHIN 3 MONTHS.",
        "s.3(2) → minimum imprisonment for giving or taking dowry = NOT LESS THAN 5 YEARS.",
        "s.4 → demanding dowry (minimum 6 months' imprisonment).",
        "s.2 → 'dowry' excludes presents given without a demand.",
        "Dowry death → IPC s.304B / BNS s.80.",
      ],
    },
    {
      id: "f7",
      name: "Uniform Civil Code — Article 44 and the Uttarakhand Rules",
      concept:
        "Article 44 directs the State to endeavour to secure a uniform civil code. Uttarakhand became the first State " +
        "to bring UCC rules into force, providing for registration of marriages, live-in relationships, succession and " +
        "a procedure for the declaration of legal heirs.",
      provisions: ["Article 44 — uniform civil code (directive principle)", "Uttarakhand Uniform Civil Code Rules 2025 — application for declaration of legal heirs; where the Registrar does not take action, the application is forwarded to the Registrar General after the prescribed period", "Registration of marriages and live-in relationships"],
      cases: [
        { name: "Sarla Mudgal v. Union of India, (1995) 3 SCC 635", principle: "Judicial call for a uniform civil code; Article 44 is a directive to the State." },
        { name: "Mohd. Ahmed Khan v. Shah Bano Begum, (1985) 2 SCC 556", principle: "Judicial discussion of the desirability of a uniform civil code in the maintenance context." },
      ],
      exceptions: ["Article 44 is a directive principle and is not enforceable in a court of law."],
      confusions: ["UCC is a Directive Principle (Part IV) — it is NOT a fundamental right and cannot be enforced under Article 32."],
      aibeFocus: ["Article 44's character (directive, non-enforceable) and the Uttarakhand UCC Rules procedure."],
      flashpoints: [
        "Article 44 → Directive Principle; NOT enforceable.",
        "Uttarakhand UCC Rules 2025 → first State UCC rules; declaration of legal heirs procedure.",
        "UCC is in Part IV (Directive Principles), not Part III.",
      ],
    },
  ],
};
