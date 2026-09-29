/* ============================================================================
 * AIBE XXI — Revision System
 * window.AIBE_REVISION = {
 *   rapid   : [ { subject, points[] } ]        one sheet per syllabus subject
 *   oneDay  : [ string ]                       ultra-condensed one-day drill
 *   sevenDay: [ { day, focus, tasks[] } ]
 *   final   : { articles[], sections[], cases[], doctrines[], definitions[],
 *               exceptions[], limitations[], procedure[], mapping[] }
 * }
 *
 * ACCURACY NOTE
 * Every section number, case name and timeline below has been checked against a
 * Bare Act, the official syllabus notification, or the reference question paper.
 * Where a number is liable to change (penalties renumbered by the 2019 Motor
 * Vehicles amendment, pecuniary limits revised by rules), the entry says so.
 * Nothing here should be used instead of the Bare Act itself.
 * ==========================================================================*/
window.AIBE_REVISION = (function () {
  "use strict";

  /* ======================================================= RAPID SHEETS === */
  var rapid = [
    {
      subject: "Constitutional Law (10 marks)",
      points: [
        "Article 12 'State' — includes the Government and Parliament of India, the Government and Legislature of each State, all local authorities and other authorities within India or under the control of the Government of India.",
        "Article 13 — pre-constitution and post-constitution laws inconsistent with Part III are void. Doctrine of eclipse applies to pre-constitution laws; doctrine of severability salvages the valid part.",
        "Article 14 — requires a reasonable classification founded on an intelligible differentia with a rational nexus to the object. Article 14 forbids arbitrariness (E.P. Royappa; Maneka Gandhi).",
        "Article 19(1)(a) to (g) — six freedoms; only reasonable restrictions under Article 19(2)-(6) are permissible.",
        "Article 21 — 'procedure established by law' now means fair, just and reasonable procedure (Maneka Gandhi). Includes right to livelihood, health, clean environment, speedy trial, legal aid, privacy (K.S. Puttaswamy) and dignity.",
        "Article 32 — right to constitutional remedies; a fundamental right itself. Article 226 — wider writ jurisdiction of the High Courts (also for other legal rights).",
        "Basic structure — Kesavananda Bharati. Judicial review (L. Chandra Kumar), free and fair elections, federalism and secularism are part of it. Cannot be destroyed by amendment.",
        "Doctrine of pleasure (Article 310) is qualified by Article 311 — no dismissal/removal/reduction in rank without inquiry, and a reasonable opportunity of being heard.",
        "Directive principles are not enforceable (Article 37) but are fundamental in governance; Articles 39A, 43A and 48A have been read into Article 21.",
        "Fundamental duties Article 51A — (a) to (k); Article 51A(g) environment, Article 51A(i) public property, Article 51A(j) excellence.",
        "Preamble: sovereign, socialist, secular, democratic republic — 'socialist' and 'secular' added by the 42nd Amendment, 1976. Preamble is part of the Constitution (Kesavananda; LIC of India v. Escorts)."
      ]
    },
    {
      subject: "IPC / BNS (8 marks)",
      points: [
        "Bharatiya Nyaya Sanhita, 2023 — Act 45 of 2023, 358 sections, 20 chapters, in force 1 July 2024. Replaces the Indian Penal Code, 1860.",
        "BNS s.4 punishments: death; imprisonment for life; imprisonment rigorous or simple; forfeiture of property; fine; and (new) community service.",
        "BNS s.3(5) = common intention (old IPC s.34). BNS s.190 = common object of an unlawful assembly (old IPC s.149).",
        "BNS s.61 = criminal conspiracy (IPC s.120A/120B); s.62 = attempt (IPC s.511).",
        "Culpable homicide: BNS s.100 (IPC s.299); murder: BNS s.101 (IPC s.300); punishment for murder: BNS s.103 (IPC s.302); culpable homicide not amounting to murder: BNS s.105 (IPC s.304); death by negligence: BNS s.106 (IPC s.304A).",
        "Abetment of suicide: BNS s.108 (IPC s.306). Attempt to murder: BNS s.109 (IPC s.307).",
        "Hurt: BNS s.114 (IPC s.319/321); grievous hurt: BNS s.115 (IPC s.320/325); grievous hurt by dangerous weapons: BNS s.116 (IPC s.326).",
        "Acid attack: BNS s.124 (IPC s.326A/326B). Wrongful restraint: BNS s.126 (IPC s.341). Wrongful confinement: BNS s.127 (IPC s.342).",
        "Kidnapping: BNS s.137 (IPC s.359/361); abduction: BNS s.138 (IPC s.362). Trafficking: BNS s.143 (IPC s.370). Unlawful compulsory labour: BNS s.146 (IPC s.374).",
        "Sedition: IPC s.124A replaced by BNS s.152 — 'acts endangering sovereignty, unity and integrity of India'.",
        "Theft: BNS s.303 (IPC s.379); snatching is a NEW offence under BNS s.304; extortion: BNS s.308 (IPC s.383/384); robbery: BNS s.309 (IPC s.392); dacoity: BNS s.310 (IPC s.391/395).",
        "Dishonest misappropriation: BNS s.314 (IPC s.403); criminal breach of trust: BNS s.316 (IPC s.405/406); stolen property: BNS s.317 (IPC s.410/411); cheating: BNS s.318 (IPC s.415/420).",
        "Criminal trespass: BNS s.329 (IPC s.441); house-trespass: BNS s.330 (IPC s.442/448); criminal intimidation: BNS s.351 (IPC s.503); defamation: BNS s.356 (IPC s.499/500)."
      ]
    },
    {
      subject: "CrPC / BNSS (10 marks)",
      points: [
        "Bharatiya Nagarik Suraksha Sanhita, 2023 — Act 46 of 2023, 531 sections, 39 chapters, 2 schedules, in force 1 July 2024. Replaces the Code of Criminal Procedure, 1973.",
        "Cognizable offence: a police officer may arrest without a warrant. Non-cognizable: a warrant is required (BNSS s.2(1)(g)/(h)).",
        "Bailable offence is defined in BNSS s.2(1)(b). Under the CrPC the definition of a bailable offence was in s.2(a) — NOT s.2(h), which defined 'investigation'. This is a favourite distractor.",
        "FIR: BNSS s.173 (CrPC s.154). A Zero FIR may be registered at any police station irrespective of territorial jurisdiction and then transferred.",
        "Power to investigate: BNSS s.175 (CrPC s.156). A Magistrate cannot direct an investigation under s.175 after cognizance; it is the police that investigates.",
        "Examination of witnesses by the police: BNSS s.180 (CrPC s.161). Recording of confessions and statements by a Magistrate: BNSS s.183 (CrPC s.164).",
        "Remand: BNSS s.187 (CrPC s.167) — 15 days in the whole where the investigation cannot be completed, with a maximum of 90 days (offences punishable with death, life imprisonment or not less than 10 years) and 60 days for other offences for the filing of the charge-sheet.",
        "Report of the police officer on completion of investigation: BNSS s.193 (CrPC s.173). Cognizance of offences by Magistrates: BNSS s.210 (CrPC s.190).",
        "Bail: BNSS s.480 (CrPC s.437 — bail by a non-High Court/non-Sessions Court), BNSS s.482 (CrPC s.438 — anticipatory bail) and BNSS s.483 (CrPC s.439 — special powers of the High Court or the Sessions Court).",
        "Maintenance: BNSS s.144 (CrPC s.125) — wife, children and parents unable to maintain themselves, with the new provision for a person with a disability.",
        "BNSS s.105 — mandatory audio-video recording of the search and seizure. BNSS recognises the Zero FIR statutorily.",
        "Judgment must be pronounced within thirty days of the conclusion of the trial, extendable to forty-five days for special reasons. Plea bargaining: an application within thirty days from the framing of the charge.",
        "Case law: Arnesh Kumar v. State of Bihar — arrest not to be made mechanically in offences punishable with up to seven years; D.K. Basu v. State of West Bengal — arrest guidelines; Lalita Kumari v. Govt. of U.P. — registration of an FIR is mandatory where a cognizable offence is disclosed; Joginder Kumar v. State of U.P. — arrest requires necessity, not mere power."
      ]
    },
    {
      subject: "Code of Civil Procedure (10 marks)",
      points: [
        "Order I Rule 8 — representative suit; a person may sue or be sued in a representative capacity on behalf of numerous persons with the same interest.",
        "Order II Rule 2 — a plaintiff must include the whole of the claim; a suit is barred for a claim omitted, save with the leave of the court.",
        "Res judicata (s.11) — a matter directly and substantially in issue in a former suit decided by a competent court cannot be tried again. Constructive res judicata applies to matters that ought to have been raised.",
        "Res sub judice (s.10) — a stay of the later suit where the matter in issue is also directly and substantially in issue in a previously instituted suit between the same parties.",
        "Place of suing: ss.15-20. Suits for immovable property lie where the property is situate (s.16); other suits lie where the defendant resides or carries on business or where the cause of action arises (s.19/20).",
        "Order VI Rule 17 — amendment of pleadings; the proviso bars an amendment after the trial has commenced unless the court concludes that the party could not have raised the matter before the commencement of the trial despite due diligence.",
        "Order VII Rule 11 — rejection of a plaint where it discloses no cause of action, is barred by law, or is insufficiently stamped.",
        "Order IX — appearance and non-appearance. Order IX Rule 13 restores a suit dismissed ex parte. Order VIII Rule 6 provides a set-off and counter-claim.",
        "Order XXXVIII — arrest and attachment before judgment on the defendant's intention to delay or obstruct execution.",
        "Order XXXIX Rules 1-4 — temporary injunction on a prima facie case, irreparable injury and the balance of convenience. Order XXXIX Rule 3A deals with the undertaking.",
        "Sections 96/100 — first and second appeals; s.115 — revision. Section 89 — reference to arbitration, conciliation, judicial settlement or mediation.",
        "Limitation: Order XXII (death, marriage and insolvency of parties), s.148 (enlargement of time), s.151 (inherent powers of the court)."
      ]
    },
    {
      subject: "Law of Evidence / BSA (8 marks)",
      points: [
        "Bharatiya Sakshya Adhiniyam, 2023 — Act 47 of 2023, 170 sections, in force 1 July 2024. Replaces the Indian Evidence Act, 1872 (167 sections).",
        "Evidence may be oral or documentary; documentary evidence is primary or secondary. Electronic records are documents and are governed by the certificate requirement for secondary evidence.",
        "Recording of confessions to a police officer is prohibited; the bar is now in the BSA (replacing Evidence Act ss.25-26). A confession otherwise inadmissible may be used for the discovery of a fact, in so far as it distinctly relates to that discovery (Evidence Act s.27, corresponding BSA provision).",
        "Dying declaration — a statement as to the cause of death. It is admissible even if there was no expectation of death, provided the statement relates to the cause of death and the maker is dead.",
        "Burden of proof (Evidence Act ss.101-104) — a person who desires the court to give judgment on the existence of a fact must prove it. A fact is said to be proved when the court believes it to exist or considers its existence so probable that a prudent man ought to act on it.",
        "Presumptions: s.114 (the court may presume the existence of a probable fact), s.113A (abatement of suicide by a married woman), s.113B (dowry death).",
        "Expert evidence — opinion is relevant where the question involves foreign law, science, art, handwriting or finger impressions. A handwriting expert's opinion is a weak type of evidence.",
        "Privileged communications: ss.122-129 — matrimonial communications, communications during a marriage, state documents and professional communications with a legal adviser.",
        "Hostile witness: a party may cross-examine his own witness with the leave of the court; evidence of a hostile witness is not wholly effaced (Evidence Act s.154).",
        "Case law: Anvar P.V. v. P.K. Basheer and Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal — the certificate requirement for electronic records; Chirag @ Chirag Deepak Koli v. State of Gujarat — the video-print of a CD is not admissible without a certificate."
      ]
    },
    {
      subject: "Alternative Dispute Resolution (4 marks)",
      points: [
        "Arbitration and Conciliation Act, 1996 — Part I (ss.2-43) domestic arbitration; Part II enforcement of foreign awards (New York Convention and Geneva Convention); Part III conciliation; Part IV supplementary.",
        "Section 7 — an arbitration agreement may be in the form of an arbitration clause in a contract or a separate agreement; it must be in writing.",
        "Section 8 — a judicial authority before which an action is brought in a matter which is the subject of an arbitration agreement shall refer the parties to arbitration where a party so applies.",
        "Section 9 — interim measures by the court before or during arbitral proceedings or at any time after the making of the award but before its enforcement.",
        "Section 11 — appointment of arbitrators; the Supreme Court or a person/institution designated by it in an international commercial arbitration, and the High Court or a person/institution designated by it in other cases.",
        "Section 16 — the arbitral tribunal may rule on its own jurisdiction (kompetenz-kompetenz), including objections with respect to the existence or validity of the arbitration agreement.",
        "Section 31 — the form and contents of the arbitral award; the award must be in writing and signed by the members of the tribunal. Section 24 — hearings and written proceedings.",
        "Section 34 — setting aside an award on the grounds of incapacity, an invalid arbitration agreement, want of notice, an award beyond the scope of the submission, irregular composition of the tribunal, non-arbitrability, and a conflict with the public policy of India (fraud or corruption, a contravention of the fundamental policy of Indian law, or a conflict with the most basic notions of morality or justice).",
        "Section 36 — enforcement of an award; the 2015 Amendment confined the automatic stay to three months on a separate application. Section 37 — appealable orders.",
        "Section 43 — the Limitation Act, 1963 applies to arbitrations as it applies to proceedings in court.",
        "Conciliation under Part III (ss.61-81) — the conciliator's role is facilitative; a settlement agreement signed by the parties is enforceable as an arbitral award under s.74.",
        "Legal Services Authorities Act, 1987 — Lok Adalats. An award of a Lok Adalat is final and binding and no appeal lies (s.21); a permanent Lok Adalat may settle disputes of a public utility nature.",
        "Mediation — the mediation agreement, the role of the mediator and confidentiality. The Mediation Act, 2023 now provides a statutory framework for mediation and enforcement of a mediated settlement agreement."
      ]
    },
    {
      subject: "Family Law (8 marks)",
      points: [
        "Hindu Marriage Act, 1955 — s.5 conditions of a valid Hindu marriage (monogamy, sound mind, age of the bridegroom 21 and the bride 18, not within the degrees of prohibited relationship and not sapindas unless custom permits); s.11 void marriages; s.12 voidable marriages; s.13 divorce; s.13B mutual consent divorce (a minimum of six months' separation before the motion, waivable by the Supreme Court in appropriate cases).",
        "Restitution of conjugal rights — s.9; judicial separation — s.10.",
        "Section 24 — maintenance pendente lite and expenses of proceedings; s.25 — permanent alimony and maintenance.",
        "Hindu Succession Act, 1956 — ss.6 to 8. A coparcener's interest devolves by testamentary or intestate succession (s.6, substituted in 2005). Daughter as a coparcener (s.6(1)); Vineeta Sharma v. Rakesh Sharma — the daughter is a coparcener by birth, and the right is independent of the father's death.",
        "Hindu Adoptions and Maintenance Act, 1956 — ss.5-17. Only the mother with the father's consent where the father is alive (s.8); the age difference between the adoptive parent and the child (s.11); s.18 the wife's maintenance; s.20 the maintenance of children and aged parents.",
        "Special Marriage Act, 1954 — a civil marriage, notice of the intended marriage under s.5 (a thirty-day period), objections under s.6-8, registration under s.11, and the option of a court marriage.",
        "Muslim law — the nikah requires offer and acceptance in the presence of witnesses; mehr is a sum of money or property which the wife is entitled to receive from her husband; talaq must be for a reasonable cause and followed by an arbitration/conciliation process, as held in Shayara Bano v. Union of India, where triple talaq in one sitting was set aside and the practice was later criminalised by the Muslim Women (Protection of Rights on Marriage) Act, 2019.",
        "Muslim law of succession — the Hanafi law of inheritance with the sharers (Quranic heirs) and residuaries; a will is limited to one-third of the estate without the consent of the heirs.",
        "Christian law — the Indian Divorce Act, 1869 as amended in 2001 (s.10 and s.10A); the Indian Christian Marriage Act, 1872.",
        "Guardians and Wards Act, 1890 and the Hindu Minority and Guardianship Act, 1956 — the welfare of the minor is the paramount consideration (s.17 of the 1890 Act and s.13 of the 1956 Act); Hindu Minority and Guardianship Act s.6 — the father is the natural guardian of a legitimate Hindu minor and after him the mother; guardianship of a child below five years ordinarily with the mother.",
        "Gaurav Nagpal v. Sumedha Nagpal and Roxann Sharma v. Arun Sharma — the welfare of the child is paramount; a custody order is not final and may be varied on changed circumstances.",
        "Domestic Violence Act, 2005 — 'aggrieved person', 'domestic relationship', 'shared household' (s.2); protection orders (s.18), residence orders (s.19 — the right to reside in the shared household), monetary relief (s.20), custody orders (s.21), compensation (s.22) and interim and ex parte orders (ss.23-25)."
      ]
    },
    {
      subject: "Public Interest Litigation (4 marks)",
      points: [
        "PIL relaxes the traditional rule of locus standi. Anyone acting in good faith with a sufficient interest may move the court (S.P. Gupta v. Union of India — 'any member of the public having sufficient interest').",
        "The court may act on a letter or a news report — epistolary jurisdiction. See also People's Union for Democratic Rights v. Union of India.",
        "Constitutional basis — Articles 32 and 226. Article 32 is itself a fundamental right; Article 226 is wider and covers legal rights too.",
        "Judicial activism and the expansion of Article 21 — Bandhua Mukti Morcha v. Union of India (bonded labour, Article 21 and Article 23), M.C. Mehta v. Union of India, Vishaka v. State of Rajasthan (guidelines in the absence of legislation).",
        "PIL is not a substitute for ordinary litigation. The court has warned against frivolous, publicity-seeking and personal-interest PILs (State of Uttaranchal v. Balwant Singh Chaufal — the court issued guidelines and identified the phases of PIL).",
        "The court may appoint commissions and amicus curiae, and may monitor the implementation of its orders (continuing mandamus — Vineet Narain v. Union of India).",
        "Not maintainable to settle private disputes or to enforce a private contract; the dispute must affect the public at large.",
        "The Supreme Court has deprecated the use of PIL in the service and revenue matters of individuals (Dattaraj Nathuji Thaware v. State of Maharashtra — PIL as a 'publicity interest litigation')."
      ]
    },
    {
      subject: "Administrative Law (3 marks)",
      points: [
        "Rule of law (A.V. Dicey) — the supremacy of law, equality before the law and the predominance of the legal spirit; the Indian version is the 'rule of law' in Article 14 and the constitutional scheme (Kesavananda Bharati).",
        "Delegated legislation — conditional legislation and subordinate legislation; the grounds of challenge include excessive delegation, the abdication of essential legislative functions (In re Delhi Laws Act, 1951) and the doctrine of excessive delegation.",
        "Judicial review of administrative action on the grounds of (i) illegality, (ii) irrationality (Wednesbury unreasonableness and proportionality), (iii) procedural impropriety, and (iv) proportionality (the 'fourth ground' developed in India).",
        "Natural justice — audi alteram partem (a fair hearing) and nemo judex in causa sua (no one shall be a judge in his own cause). The rules must be complied with where a civil consequence follows (Maneka Gandhi; A.K. Kraipak).",
        "The rule of natural justice is not absolute — exceptions include urgency, a purely administrative or policy decision, a matter of confidential or national security, and where the statute expressly excludes a hearing.",
        "Writ jurisdiction — certiorari (quashing), prohibition (preventing), mandamus (commanding performance of a public duty), habeas corpus (producing a person) and quo warranto (by what authority a person holds a public office).",
        "Certiorari and prohibition lie against a judicial or quasi-judicial authority and also against an administrative authority affecting rights (A.K. Kraipak); mandamus lies to enforce a public duty and not a discretionary or private obligation.",
        "Administrative discretion — the power must be exercised reasonably, on relevant considerations, without taking extraneous matters into account, and without acting mala fide. The doctrine of legitimate expectation may arise from an express promise, a past practice or a statutory scheme (Union of India v. Hindustan Development Corporation).",
        "Statutory corporations and the 'other authorities' of Article 12 (Ajay Hasia v. Khalid Mujib; Pradeep Kumar Biswas v. Indian Institute of Chemical Biology)."
      ]
    },
    {
      subject: "Professional Ethics / Contempt (4 marks)",
      points: [
        "Advocates Act, 1961 — s.24 persons who may be admitted as advocates; s.29 advocates alone are entitled to practise throughout India; s.30 the right of an advocate to practise; s.33 the right of an advocate alone to practise in all courts.",
        "Section 35 — punishment of advocates for professional or other misconduct by the State Bar Council, with the procedure and the role of the Disciplinary Committee. Section 36 — disciplinary powers of the Bar Council of India; s.37 — appeal to the Supreme Court.",
        "Section 49 — the Bar Council of India may make rules; the Bar Council of India Rules (Part VI, Chapter II) contain the standards of professional conduct and etiquette.",
        "Duties to the court: an advocate must not mislead the court, must not present a false case, must not influence the decision of a court by any illegal or improper means, and must maintain a respectful attitude towards the court.",
        "Duties to the client: to accept a brief where there is no reasonable ground to refuse, to be bound to disclose all information and give a candid opinion on the merits, to keep the client's confidence, and not to withdraw from an engagement without sufficient cause and without reasonable notice.",
        "An advocate shall not act on the instructions of a person who is not his client, shall not appear for a party after having advised the opposite party in the same matter, shall not use the client's confidence to his own advantage, and shall not stipulate for a share in the subject matter of a suit (no contingency fee).",
        "An advocate shall not advertise or solicit work, directly or indirectly; shall not use his name or the name of his firm in a way that amounts to advertisement; and shall not accept employment in a matter in which he has reason to believe that the party is a prohibited person.",
        "Contempt of Courts Act, 1971 — s.2(a) 'contempt of court' means civil contempt or criminal contempt; s.2(b) civil contempt is a wilful disobedience of a judgment, decree, direction, order, writ or other process of a court, or a wilful breach of an undertaking given to a court; s.2(c) criminal contempt is the publication of any matter or the doing of any other act whatsoever which scandalises or tends to scandalise or lowers or tends to lower the authority of any court, or prejudices or interferes with the due course of a judicial proceeding, or obstructs or interferes with the administration of justice in any other manner.",
        "Punishment for contempt under s.12 — simple imprisonment for a term which may extend to six months, or a fine which may extend to two thousand rupees, or both. Section 14 — procedure where contempt is in the face of the Supreme Court or a High Court.",
        "A contempt proceeding may be initiated by a motion of the Advocate-General or the Attorney-General, or on a motion by a party with the consent in writing of the Advocate-General, or suo motu by the court. Section 15 prescribes the procedure and the limitation of one year from the date of the contempt under s.20.",
        "The truth may be a defence in a contempt proceeding relating to a judgment or order under s.13(b) where it is in the public interest and bona fide.",
        "Case law: Prashant Bhushan, In re (2020) — the court on contempt and the limits of criticism; In re Arundhati Roy — scandalising the court; Bar Council of Maharashtra v. M.V. Dabholkar — misconduct and the standards of professional conduct."
      ]
    },
    {
      subject: "Company Law (2 marks)",
      points: [
        "Companies Act, 2013 — classification: one person company (s.3(1)(c)), private company (s.2(68) — a minimum paid-up capital, restrictions on the transfer of shares, a maximum of two hundred members), public company (s.2(71)), small company (s.2(85)).",
        "Section 9 — on incorporation a company becomes a body corporate with perpetual succession and a common seal, and becomes capable of suing and being sued. Salomon v. Salomon & Co. Ltd. — the company is a legal person distinct from its members.",
        "Lifting the corporate veil — where the corporate form is used as a sham or a façade, to evade legal obligations, to defraud creditors or revenue, or where the statute expressly requires it.",
        "Section 166 — the duties of directors: to act in accordance with the articles, in good faith to promote the objects of the company for the benefit of its members as a whole, with due and reasonable care, skill and diligence, without a conflict of interest, and without any undue gain.",
        "Section 188 — related-party transactions; a prior approval of the board or the members is required depending on the transaction size. The definitions of 'related party' under s.2(76) and the applicable rules.",
        "Section 185 — a loan to a director; s.186 — a loan or investment by a company. Section 188 — the approval process.",
        "Section 230-232 — a scheme of compromise or arrangement with the members or creditors needs a majority representing three-fourths in value present and voting, and the sanction of the NCLT. Section 233 — the fast-track merger for the prescribed classes of companies, with the approval of the Regional Director within 60-90 days. Section 234 — the merger of a foreign company with an Indian company and vice versa.",
        "Section 241 — an application to the NCLT for oppression and mismanagement; s.242 — the reliefs; s.244 — the threshold (100 members or one-tenth of the total number of members, whichever is less, or a member or members holding not less than one-tenth of the issued share capital, with a possible waiver). Section 245 — class action by members or depositors.",
        "Section 271 — the grounds for winding up; s.272 — the petition; s.279 — the powers of the Tribunal. Sections 320-338 — the liquidation process. Insolvency and Bankruptcy Code, 2016 — the corporate insolvency resolution process, and s.14 the moratorium.",
        "Section 243 — the consequence of the NCLT's order: removal of a director, the power to make an order for the appointment or removal of a managing director, and the recovery of undue gain."
      ]
    },
    {
      subject: "Environmental Law (2 marks)",
      points: [
        "Article 21 — the right to a clean and healthy environment (Subhash Kumar v. State of Bihar; M.C. Mehta v. Union of India).",
        "Article 48A — the State's duty to protect and improve the environment and to safeguard forests and wildlife. Article 51A(g) — the citizens' duty to protect and improve the natural environment including forests, lakes, rivers and wildlife, and to have compassion for living creatures.",
        "Article 253 — the legislative source for the Air (Prevention and Control of Pollution) Act, 1981 and the Environment (Protection) Act, 1986, enacted in pursuance of the Stockholm Conference, 1972.",
        "Water (Prevention and Control of Pollution) Act, 1974 — the Central and State Pollution Control Boards; s.24 the prohibition on the discharge of polluting matter and the requirement of the previous consent of the State Board under s.25.",
        "Air (Prevention and Control of Pollution) Act, 1981 — s.19 the power to declare air pollution control areas; s.20 to give instructions; s.21 the previous consent of the State Board to establish or operate an industrial plant in an air pollution control area.",
        "Environment (Protection) Act, 1986 — s.3 the power of the Central Government to take measures; s.3(2) the specific measures, including s.3(2)(ii) 'planning and execution of a nation-wide programme for the prevention, control and abatement of environmental pollution'; s.5 the power to issue directions; s.15 the penalty; s.19 the cognizance of offences (a complaint by the Central Government or an authorised officer, or by a person who has given sixty days' notice).",
        "Principles: precautionary principle, polluter pays, sustainable development and intergenerational equity — Vellore Citizens' Welfare Forum v. Union of India; absolute liability for hazardous activities — M.C. Mehta v. Union of India (Oleum Gas Leak).",
        "National Green Tribunal Act, 2010 — s.14 the tribunal's jurisdiction; s.15 the relief and compensation; s.16 an application within six months of the cause of action, extendable by sixty days. The NGT applies the principles of sustainable development, the precautionary principle and the polluter-pays principle (s.20).",
        "Environmental Impact Assessment Notification, 2006; the Wildlife (Protection) Act, 1972; the Forest (Conservation) Act, 1980; the Biological Diversity Act, 2002."
      ]
    },
    {
      subject: "Cyber Law (2 marks)",
      points: [
        "Information Technology Act, 2000 — the scheme: Chapter II (ss.3-10) digital/electronic signatures, Chapter III (ss.11-13) electronic governance, Chapter IV (ss.14-16) attribution, acknowledgment and despatch, Chapter IX (ss.43-47) civil liability, Chapter XI (ss.65-78) offences, Chapter XII (ss.79-82) intermediaries.",
        "Section 2(1)(t) — 'electronic record' means data, record or data generated, image or sound stored, received or sent in an electronic form or micro film or computer-generated micro fiche. Section 2(1)(ta) 'electronic signature'; s.2(1)(p) 'digital signature'.",
        "Section 4 — where a law requires writing, the requirement is satisfied by an electronic record. Section 5 — electronic/digital signature. Section 10A — the validity of contracts formed through electronic means.",
        "Section 43 — civil liability for unauthorised access, downloading, damage, disruption, denial of access and contamination, with compensation. Section 43A — the liability of a body corporate for negligence in maintaining reasonable security practices for sensitive personal data.",
        "Section 66 — computer-related offences where the act is done dishonestly or fraudulently (the criminal counterpart of s.43). Section 66B — receiving a stolen computer resource; s.66C — identity theft; s.66D — cheating by personation by using a computer resource; s.66E — privacy. Section 66F — cyber terrorism.",
        "Section 66A, which penalised sending offensive messages, was struck down as unconstitutional in Shreya Singhal v. Union of India, (2015) 5 SCC 1, for vagueness and its chilling effect on free speech.",
        "Section 67 — obscene material; s.67A — sexually explicit material; s.67B — material depicting children. Section 69 — the power of the Central or State Government to issue directions for interception, monitoring or decryption; s.69A — blocking of access (the procedure was upheld subject to safeguards in Shreya Singhal).",
        "Section 72 — the penalty for a breach of confidentiality and privacy. Section 79 — the exemption from liability of intermediaries, subject to the conditions and the due-diligence requirement. Section 75 — the extra-territorial application of the Act where the conduct involves a computer, computer system or computer network located in India.",
        "Section 46 — the adjudicating officer; s.57 — an appeal to the Cyber Appellate Tribunal (now the Telecom Disputes Settlement and Appellate Tribunal).",
        "Digital Personal Data Protection Act, 2023 — the data principal, the data fiduciary, consent, the legitimate uses, the Data Protection Board and the obligations on data fiduciaries; the position of significant data fiduciaries."
      ]
    },
    {
      subject: "Labour & Industrial Law (4 marks)",
      points: [
        "Article 23 — the prohibition of traffic in human beings, begar and other similar forms of forced labour, enforceable against private persons as well; payment of less than the minimum wage amounts to forced labour (People's Union for Democratic Rights v. Union of India; Sanjit Roy v. State of Rajasthan). Article 24 — the prohibition of the employment of children below fourteen years in factories, mines and other hazardous employment.",
        "Directive principles — Article 39(d) equal pay for equal work; Article 41 the right to work; Article 42 just and humane conditions of work and maternity relief; Article 43 a living wage and a decent standard of life; Article 43A the participation of workers in management.",
        "Minimum Wages Act, 1948 — the appropriate Government may fix or revise minimum wages in scheduled employments (s.3), the procedure in s.5, and the coming into force of the rates from the specified date or, if no date is specified, from the expiry of three months from the issue of the notification (s.5(2)).",
        "Industrial Disputes Act, 1947 — s.2(j) 'industry' (Bangalore Water Supply & Sewerage Board v. A. Rajappa, triple test and dominant nature test); s.2(k) 'industrial dispute'; s.2(kkk) 'lay-off'; s.2(oo) 'retrenchment'; s.2(s) 'workman' (excludes managerial/administrative and supervisory employees above the wage ceiling, and apprentices).",
        "Section 25F — conditions precedent to retrenchment: one month's notice in writing indicating the reasons, or wages in lieu of notice, and compensation at the rate of fifteen days' average pay for every completed year of continuous service or any part in excess of six months. Section 25N — prior permission of the appropriate Government ninety days in advance where not less than one hundred workmen were employed.",
        "Sections 22-24 and 26 — the illegality of a strike, the prohibition on a strike in a public utility service without the prescribed notice, and during the pendency of conciliation or adjudication proceedings.",
        "Trade Unions Act, 1926 — registration is not compulsory but confers the status of a body corporate (s.13) and the immunity for legitimate trade-union activities (ss.17-18). The office-bearers of a registered trade union are protected in respect of acts done in contemplation or furtherance of a trade dispute.",
        "Employees' Compensation Act, 1923 — s.3 the employer's liability for personal injury caused by an accident arising out of and in the course of employment; the exclusions include intoxication, wilful disobedience of an express safety order and the wilful removal of a safety guard.",
        "Payment of Gratuity Act, 1972 — s.4 the right to gratuity on the completion of five years' continuous service, and the requirement is not applicable in the case of death or disablement. Maternity Benefit Act, 1961 — as amended in 2017, twenty-six weeks of maternity benefit (twelve weeks for two or more surviving children) and not more than eight weeks before the expected date of delivery.",
        "The four labour codes: the Code on Wages, 2019 (Payment of Wages Act, 1936; Minimum Wages Act, 1948; Payment of Bonus Act, 1965; Equal Remuneration Act, 1976); the Industrial Relations Code, 2020 (Trade Unions Act, 1926; Industrial Disputes Act, 1947; Industrial Employment (Standing Orders) Act, 1946); the Code on Social Security, 2020; and the Occupational Safety, Health and Working Conditions Code, 2020 (Factories Act, 1948 and other safety statutes). Note that the Industries (Development and Regulation) Act, 1951 is NOT part of the labour codes."
      ]
    },
    {
      subject: "Law of Tort, MV Act & Consumer Protection (5 marks)",
      points: [
        "Negligence — duty of care, breach, causation and damage. Donoghue v. Stevenson (the neighbour principle).",
        "Eggshell skull rule — the defendant must take the victim as he finds him; full liability for the unforeseeable extent of a foreseeable kind of harm (Dulieu v. White; Smith v. Leech Brain & Co.; Robinson v. Post Office). The Wagon Mound — the kind of damage must be foreseeable, the extent need not be.",
        "Res ipsa loquitur — the thing speaks for itself; the injury-causing instrumentality was under the exclusive control of the defendant and the accident was of a kind that does not ordinarily occur without negligence (Municipal Corporation of Delhi v. Subhagwanti; Syad Akbar v. State of Karnataka).",
        "Strict liability — Rylands v. Fletcher (the escape of a dangerous thing brought onto land), with the recognised exceptions of act of God, act of a stranger, consent and statutory authority. Absolute liability — M.C. Mehta v. Union of India; no exceptions.",
        "Defences — volenti non fit injuria (free and informed voluntary assumption of risk), contributory negligence (damages reduced), act of God, statutory authority and inevitable accident.",
        "Vicarious liability — a master is liable for the torts of his servant committed in the course of employment; the act must be authorised, or a wrongful and unauthorised mode of doing an authorised act.",
        "Damages — compensatory, nominal, contemptuous and exemplary (Rookes v. Barnard). Duty to mitigate.",
        "Consumer Protection Act, 2019 — s.2(7) 'consumer' (excludes resale and a commercial purpose; includes purchases through electronic means, teleshopping, direct selling and multi-level marketing); s.2(10) 'defect' (goods); s.2(11) 'deficiency' (services); s.2(34) 'product liability'; s.2(46) 'unfair contract' (the popular 'one-sided agreement'); s.2(47) 'unfair trade practice'.",
        "Consumer Protection Act, 2019 — the three-tier machinery: the District Commission (up to one crore rupees of consideration), the State Commission (one crore to ten crore rupees) and the National Commission (above ten crore rupees), read with the 2021 Rules. Section 69 — a complaint within two years of the cause of action, with condonation of up to one year.",
        "Central Consumer Protection Authority under Chapter III — the power to recall goods, withdraw services, order reimbursement, discontinue unfair trade practices and impose penalties.",
        "A landowner entering into a Joint Development Agreement contributing land for a share in the developed property is NOT a consumer (Bunga Daniel Babu v. Sri Vasudeva Constructions). Medical services are 'service' (Indian Medical Association v. V.P. Shantha).",
        "Motor Vehicles Act, 1988 — s.146/147 compulsory third-party insurance for a motor vehicle used in a public place; s.165 the Motor Accidents Claims Tribunal; s.166 the application for compensation; s.175 bars a civil suit; s.140 no-fault liability; s.161 hit-and-run compensation from the Solatium Fund; s.163A compensation on a structured formula.",
        "Motor accident compensation — the multiplier method (Sarla Verma v. Delhi Transport Corporation) consolidated in National Insurance Co. Ltd. v. Pranay Sethi. The Pollution Under Control certificate requirement is provided for by s.190(2) of the Motor Vehicles Act, 1988 read with Rules 115-116 of the Central Motor Vehicles Rules, 1989. Pre-fitment of High Security Registration Plates for all new vehicles became mandatory with effect from 1 April 2019."
      ]
    },
    {
      subject: "Taxation Law (4 marks)",
      points: [
        "Income-tax Act, 1961 — s.2(9) 'assessment year' (the twelve months beginning 1 April, immediately following the previous year); s.3 'previous year' (the financial year immediately preceding the assessment year); s.4 the charging section; s.2(31) 'person'; s.2(45) 'total income'; s.80B(5) 'gross total income'.",
        "Section 6 — residential status. The basic test: 182 days or more in the previous year. The alternative test: 60 days or more in the previous year and 365 days or more in the four preceding previous years. The 60-day period is read as 182 days for an Indian citizen leaving India for employment outside India or as a crew member, and, for a citizen or person of Indian origin with Indian income above fifteen lakh rupees, as 120 days.",
        "Section 10(1) — agricultural income is exempt, because the levy of a tax on agricultural income is a State subject (Entry 46 of List II). Agricultural income is aggregated only to determine the rate on non-agricultural income. Section 10(37) — capital gains on the compulsory acquisition of urban agricultural land are exempt, subject to the conditions.",
        "Section 56(2)(x) — the receipt of property without consideration, or for inadequate consideration, above the prescribed limit is taxable under 'Income from Other Sources'. Section 56(2)(vii) and (viia) deal with the receipt of money and immovable property.",
        "Capital gains — s.45 the charging section; s.2(42A) the holding period; s.54 the exemption on the purchase of one residential house within one year before or two years after, or construction within three years after, the transfer; s.54F; s.54EC (specified bonds within six months); s.50 the deemed short-term capital gain on the transfer of a depreciable asset.",
        "Section 32 — depreciation on plant and machinery, buildings, furniture and intangible assets on the block-of-assets system (s.2(11)). Section 28 and s.37 — business income and the general deduction. Section 43B — certain deductions on actual payment.",
        "Set-off and carry forward: s.72 (a business loss, other than a speculative business loss, for eight assessment years, allowed only if the return is filed within the time allowed under s.139(1)); s.73 (a speculative business loss for four assessment years, against speculative income only); s.74 (a capital loss for eight assessment years); s.71B (a loss from house property for eight assessment years, against house property income only).",
        "Section 139 — the return of income; s.139(1) the due date; s.139(4) a belated return; s.139(5) a revised return; s.139(9) a defective return. Section 142(1) the power to call for information; s.143(1) the summary intimation; s.143(2) the scrutiny notice; s.143(3) the assessment; s.144 the best judgment assessment; s.147 income escaping assessment; s.148 the notice.",
        "Section 208 — advance tax is payable where the tax payable for the financial year is ten thousand rupees or more. Sections 234B and 234C provide for interest on the default in the payment of advance tax. Chapter XVII-B provides for the deduction of tax at source on the specified payments (s.192 salary; s.194A interest; s.194C contracts; s.194H commission and brokerage; s.194I rent; s.195 payments to a non-resident).",
        "Appeals — s.246A to the Commissioner of Income-tax (Appeals); s.253 to the Income Tax Appellate Tribunal; s.260A to the High Court; s.261 to the Supreme Court. Section 271(1)(c) — a penalty for the concealment of particulars of income or the furnishing of inaccurate particulars.",
        "Goods and Services Tax — the constitutional basis is Article 246A, inserted by the Constitution (One Hundred and First Amendment) Act, 2016. Article 269A deals with the IGST on inter-State supplies in the course of import and the apportionment of the proceeds; Article 279A constitutes the GST Council. GST is a destination-based consumption tax; exports are zero-rated.",
        "GST — the Central Goods and Services Tax Act, 2017, the Integrated Goods and Services Tax Act, 2017 (inter-State supplies), the State Goods and Services Tax Act, 2017 and the Union Territory Goods and Services Tax Act, 2017. The GST Council's recommendations are persuasive rather than binding (Union of India v. Mohit Minerals Pvt. Ltd.)."
      ]
    },
    {
      subject: "Indian Contract Act & Specific Relief (8 marks)",
      points: [
        "Section 2(h) — an agreement enforceable by law is a contract. Section 10 — the essentials of a valid contract: free consent, competent parties, lawful consideration, lawful object, and not expressly declared void.",
        "Section 2(d) — consideration must be at the desire of the promisor; it may move from the promisee or any other person. Adequacy is not required, but consideration must be real.",
        "Section 4 — the communication of a proposal is complete when it comes to the knowledge of the person to whom it is made; the communication of an acceptance is complete as against the proposer when it is put in a course of transmission to him so as to be out of the power of the acceptor. Section 5 — the revocation window.",
        "Free consent — s.14. Coercion (s.15), undue influence (s.16), fraud (s.17), misrepresentation (s.18), mistake (ss.20-22). Section 19 and s.19A — voidable. Section 20 — a bilateral mistake of fact essential to the agreement makes the agreement void.",
        "Void agreements — s.24 (unlawful consideration or object in part), s.25 (an agreement without consideration), s.26 (restraint of marriage), s.27 (restraint of trade), s.28 (restraint of legal proceedings), s.29 (uncertainty), s.30 (wagering).",
        "Section 27 — an agreement in restraint of trade is void. India does not recognise a reasonableness test for a post-employment non-compete restraint (Percept D'Mark (India) (P) Ltd. v. Zaheer Khan; Superintendence Company of India (P) Ltd. v. Krishan Murgai). The sale of the goodwill of a business with reasonable local limits is an exception.",
        "Section 23 — the consideration or object is unlawful if it is forbidden by law, defeats the provisions of a law, is fraudulent, involves or implies injury to the person or property of another, or is immoral or opposed to public policy. An agreement to trade with an alien enemy without the permission of the Government is void.",
        "Quasi contracts (ss.68-72) — s.70 (a lawful act done or a thing delivered not gratuitously and the other person enjoys the benefit), s.71 (the responsibility of a finder of goods), s.72 (money paid or a thing delivered by mistake or under coercion must be repaid or returned).",
        "Discharge — s.56 (frustration; Satyabrata Ghose v. Mugneeram Bangur & Co.), s.55 (time as the essence of the contract), s.62 (novation), s.63 (acceptance of a lesser sum), s.39 (anticipatory breach).",
        "Section 73 — damages for a loss which naturally arose in the usual course of things or which the parties knew to be likely to result; remote loss is not recoverable. The Explanation codifies the duty to mitigate. Section 74 — reasonable compensation not exceeding the sum named, whether or not actual loss is proved (Fateh Chand v. Balkishan Dass; Kailash Nath Associates v. Delhi Development Authority, on the forfeiture of earnest money).",
        "Bailment — s.148 the definition; s.151 the bailee's duty of care (of a man of ordinary prudence); s.152 the bailee's immunity; s.170 a particular lien; s.171 a general lien (bankers, factors, wharfingers, attorneys of a High Court and policy brokers).",
        "Guarantee — s.126 the definition; s.128 the surety's liability is co-extensive with that of the principal debtor; s.133 a material variance without the surety's consent discharges the surety as to transactions subsequent to the variance; s.139 the creditor's duty to preserve the securities.",
        "Specific Relief Act, 1963 — s.10 the cases in which specific performance is enforced; s.14 the contracts which cannot be specifically enforced; s.16 the personal bars; s.20 substituted performance, introduced by the Specific Relief (Amendment) Act, 2018, which made specific performance the rule; s.34 a declaratory suit; s.42 an injunction to perform a negative covenant (Lumley v. Wagner).",
        "Transfer of Property Act, 1882 — s.13 a transfer for the benefit of an unborn person; s.17 the accumulation of income; s.18 the rule against perpetuity (which does not apply to a transfer for the benefit of the public or a religious or charitable institution); s.53A part performance; s.58 the six types of mortgage, including s.58(b) a mortgage by conditional sale with the same-document test (Bhaskar Waman Joshi).",
        "Negotiable Instruments Act, 1881 — s.4 a promissory note; s.5 a bill of exchange; s.6 a cheque; s.13 the definition of a negotiable instrument; s.118 the presumption of consideration; s.138 the dishonour of a cheque for insufficiency of funds; s.139 the presumption in favour of the holder. No witness is required for a promissory note under the Act."
      ]
    },
    {
      subject: "Land Acquisition Law (2 marks)",
      points: [
        "Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 — assent 25 September 2013, in force 1 January 2014. Replaces the Land Acquisition Act, 1894.",
        "The process: a Social Impact Assessment study in consultation with the Gram Sabha (s.4) → the appraisal of the report by an expert group (s.7) → the preliminary notification (s.11) → objections within sixty days (s.15) → the report of the Collector (s.16) → the final declaration within twelve months of the preliminary notification (s.19); failing which the process lapses.",
        "Section 2(2) — the prior consent of at least seventy per cent of the affected families for a public-private partnership project and at least eighty per cent for a private company. The role of the Gram Sabha is mandatory, and the requirements for Scheduled Areas are informed by Article 244 and the Fifth Schedule and the Panchayats (Extension to Scheduled Areas) Act, 1996.",
        "Section 15 — an objection may be made within sixty days; a person interested may appear personally or by an agent or a pleader. The requirement of personal appearance is a favourite distractor.",
        "Compensation — s.26 (the market value), s.28 (a multiplier specified in the First Schedule), s.30 (a solatium of one hundred per cent of the market value), plus the value of the assets attached to the land and the rehabilitation and resettlement entitlements.",
        "Section 40 — the urgency provisions (defence, national security, natural calamity, resettlement), which dispense with the Social Impact Assessment and the objection stage but not with compensation or rehabilitation and resettlement.",
        "Section 24(2) — Indore Development Authority v. Manoharlal, (2020) 8 SCC 129: for the proceedings to lapse, BOTH conditions must be satisfied — physical possession has not been taken AND the compensation has not been paid or tendered. Pune Municipal Corporation was overruled. 'Paid' includes the deposit of compensation in the treasury.",
        "Article 300A — no person shall be deprived of his property save by authority of law. A constitutional right, not a fundamental right, following the Constitution (Forty-fourth Amendment) Act, 1978. The Supreme Court has recognised the right to property as a human right in certain contexts (Vidya Devi v. State of Himachal Pradesh)."
      ]
    },
    {
      subject: "Intellectual Property Law (2 marks)",
      points: [
        "Patents Act, 1970 — s.3 the exclusions from patentability, including s.3(d) (the mere discovery of a new form of a known substance without enhanced efficacy; Novartis AG v. Union of India upheld it); s.47 the conditions subject to which a patent is granted, including the use of the invention by the Government for its own purposes without consent; s.53 the term of twenty years from the date of filing.",
        "Section 84 — a compulsory licence after three years from the date of sealing, on the grounds that the reasonable requirements of the public have not been satisfied, the invention is not available at a reasonably affordable price, or it is not worked in India (Bayer Corporation v. Union of India — Nexavar).",
        "Copyright Act, 1957 — s.13 the works in which copyright subsists; s.14 the exclusive rights; s.22 the term: the author's lifetime plus sixty years from the beginning of the calendar year following the author's death; s.24 a posthumous work: sixty years from the year of first publication; s.51 infringement; s.52 fair dealing.",
        "R.G. Anand v. Delux Films — there is no copyright in an idea, theme, plot or historical fact; the protection is confined to the form, manner and arrangement and expression of the idea.",
        "Trade Marks Act, 1999 — s.2(1)(zb) the definition of a trade mark; s.27(2) the common-law remedy of passing off is saved; s.28 the rights conferred by registration; s.29 infringement; s.31 the registration as prima facie evidence of validity. The test of deceptive similarity is the recollection of a person of average intelligence and imperfect recollection, not a side-by-side comparison (Amritdhara Pharmacy v. Satya Deo Gupta; Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd.).",
        "Designs Act, 2000 — s.2(d) a design (features of shape, configuration, pattern, ornament or composition of lines or colours applied to an article by an industrial process, which appeal to and are judged solely by the eye; excludes a mode or principle of construction and a mere mechanical device); the term of ten years, extendable by five.",
        "Geographical Indications of Goods (Registration and Protection) Act, 1999 — s.2(1)(e) the definition; the registration of indications such as Darjeeling tea, Basmati rice and Mysore silk. The protection is for the producers of the geographical region and not for an individual trader.",
        "Enforcement — a suit for infringement or passing off lies before a District Court having jurisdiction or a High Court having original jurisdiction; s.135 of the Trade Marks Act provides for relief, including an ex parte injunction and damages or an account of profits. Anton Piller orders (search and seizure) and John Doe orders are recognised in Indian practice.",
        "The interface — a patent protects an invention; copyright protects an expression; a trade mark protects the source of goods or services; a design protects the appearance of an article; a geographical indication protects the reputation of a place of origin; and a plant variety is protected under the Protection of Plant Varieties and Farmers' Rights Act, 2001."
      ]
    }
  ];

  /* ================================================= ONE-DAY REVISION ===== */
  var oneDay = [
    "Constitutional: Articles 12, 13, 14, 19(1)(a)-(g) with 19(2)-(6), 21, 32, 226, 300A, 310/311, 51A, 48A, 43, 39(d). Cases: Kesavananda Bharati, Maneka Gandhi, K.S. Puttaswamy, Olga Tellis, Subhash Kumar.",
    "BNS: 4 (punishments), 3(5) (common intention), 61 (conspiracy), 100/101/103/105 (homicide and murder), 106 (death by negligence), 108 (abetment of suicide), 109 (attempt to murder), 114/115/116 (hurt), 124 (acid attack), 137/138 (kidnapping and abduction), 143 (trafficking), 152 (sedition replacement), 303 (theft), 304 (snatching — new), 309 (robbery), 310 (dacoity), 316 (criminal breach of trust), 318 (cheating), 330 (house-trespass), 351 (criminal intimidation), 356 (defamation).",
    "BNSS: 173 (FIR), 175 (investigation), 180 (s.161 statement), 183 (confession), 187 (remand), 193 (charge-sheet), 210 (cognizance), 480/482/483 (bail and anticipatory bail), 144 (maintenance), 105 (audio-video recording of search and seizure), Zero FIR, 30/45 days for judgment.",
    "CPC: s.10 (res sub judice), s.11 (res judicata), ss.15-20 (place of suing), O.I R.8 (representative suit), O.II R.2, O.VI R.17 (amendment), O.VII R.11 (rejection of plaint), O.IX R.13, O.XXXVIII, O.XXXIX Rr.1-4, s.89 (ADR), s.100 (second appeal), s.115 (revision).",
    "BSA: electronic records and the certificate for secondary evidence; s.24-style dying declaration; burden of proof; presumptions; privileged communications; hostile witness. Cases: Anvar P.V. v. P.K. Basheer; Arjun Panditrao Khotkar.",
    "ADR: ss.7, 8, 9, 11, 16, 24, 31, 34, 36, 37 and 43 of the Arbitration and Conciliation Act, 1996. Section 74 (the conciliation settlement is enforceable as an award). Lok Adalat award final under s.21 of the Legal Services Authorities Act, 1987.",
    "Family: Hindu Marriage Act ss.5, 9, 10, 11, 12, 13, 13B, 24, 25; Hindu Succession Act s.6 (Vineeta Sharma); HAMA ss.5-11, 18, 20; Special Marriage Act s.5 (30-day notice); Domestic Violence Act ss.2, 18-22; Guardian and Wards Act s.17; Hindu Minority and Guardianship Act ss.6, 13.",
    "PIL: locus standi relaxed; Articles 32 and 226; epistolary jurisdiction; State of Uttaranchal v. Balwant Singh Chaufal guidelines; PIL as 'publicity interest litigation' deprecated.",
    "Administrative law: rule of law; delegated legislation; the grounds of judicial review; audi alteram partem and nemo judex; the five writs; legitimate expectation; Ajay Hasia and Pradeep Kumar Biswas on 'other authorities'.",
    "Professional ethics: ss.24, 29, 30, 33, 35, 36, 37 and 49 of the Advocates Act, 1961; duties to the court and to the client; no advertisement or solicitation; no contingency fee. Contempt of Courts Act, 1971 — s.2(a)-(c), s.12 (six months or two thousand rupees, or both), s.13(b) truth as a defence, s.20 (a one-year limitation).",
    "Company law: ss.2(68), 2(71), 2(85), 9, 166, 185, 188, 230-234, 241, 242, 244, 245, 271; Salomon v. Salomon; lifting the corporate veil; IBC s.14 moratorium.",
    "Environmental law: Articles 21, 48A, 51A(g), 253; Water Act s.25; Air Act ss.19-21; EP Act ss.3(2), 5, 15, 19; NGT Act ss.14-16, 20; M.C. Mehta (absolute liability); Vellore Citizens (precautionary principle and polluter pays); Subhash Kumar.",
    "Cyber law: IT Act ss.2(1)(t), 2(1)(ta), 2(1)(p), 4, 5, 10A, 43, 43A, 46, 57, 66, 66B-66F, 67, 69, 69A, 72, 75, 79; s.66A struck down in Shreya Singhal; DPDP Act, 2023 (data principal and data fiduciary).",
    "Labour: Articles 23, 24, 39(d), 41-43A; Minimum Wages Act ss.3, 5, 5(2); ID Act ss.2(j), 2(k), 2(kkk), 2(oo), 2(s), 22-24, 25F, 25N; Trade Unions Act ss.13, 17, 18; Employees' Compensation Act s.3; Payment of Gratuity Act s.4 (five years, not applicable on death or disablement); Maternity Benefit Act (26 weeks); the four labour codes and what each subsumes.",
    "Tort, MV Act and CPA: negligence; the eggshell skull rule; res ipsa loquitur; Rylands v. Fletcher vs M.C. Mehta; volenti and contributory negligence; Rookes v. Barnard on exemplary damages. CPA 2019 ss.2(7), 2(10), 2(11), 2(34), 2(46), 2(47), 34/47/58, 69; Bunga Daniel Babu; V.P. Shantha. MV Act 1988 ss.140, 146/147, 161, 163A, 165, 166, 175; Sarla Verma; Pranay Sethi.",
    "Taxation: ss.2(9), 3, 4, 2(31), 2(45); residential status under s.6 (182 days / 60 + 365 days; the 182-day and 120-day relaxations); s.10(1) and s.10(37); s.56(2)(x); ss.54 and 54EC; s.32 and the block of assets; ss.72, 73, 74, 71B (carry forward); ss.139, 143, 144, 147; s.208 (₹10,000); ss.246A, 253, 260A; s.271(1)(c). GST: Articles 246A, 269A and 279A; destination-based; exports zero-rated; Mohit Minerals.",
    "Contract: ss.2(d), 2(h), 4, 5, 10, 14-20, 23-30, 55, 56, 62, 63, 68-72, 73, 74, 126, 128, 133, 148, 151, 152, 170, 171. Hadley v. Baxendale; Fateh Chand; Kailash Nath Associates; Percept D'Mark. Specific Relief Act ss.10, 14, 16 (old numbering), 20 (substituted performance), 34, 42. TPA ss.13, 17, 18, 53A, 58. NI Act ss.4, 5, 6, 13, 118, 138, 139.",
    "Land: LARR Act ss.2(2), 4, 7, 11, 15, 19, 24(2), 26, 28, 30, 40; seventy and eighty per cent consent; sixty days for objections; twelve months for the final declaration; Indore Development Authority v. Manoharlal overruled Pune Municipal Corporation; Article 300A.",
    "IP: Patents Act ss.3(d), 47, 53 (twenty years from filing), 84 (compulsory licence after three years from sealing); Copyright Act ss.13, 14, 22 (lifetime + sixty years), 24 (posthumous — sixty years from first publication), 51, 52; R.G. Anand; Trade Marks Act ss.27(2), 28, 29; Amritdhara and Cadila; Designs Act s.2(d); GI Act s.2(1)(e)."
  ];

  /* ================================================= SEVEN-DAY PLAN ======== */
  var sevenDay = [
    {
      day: "Day 1",
      focus: "Constitutional Law + Public Interest Litigation (14 marks)",
      tasks: [
        "Read the rapid sheet for Constitutional Law and Public Interest Litigation.",
        "Memorise Articles 12, 13, 14, 19, 21, 32, 226, 300A and 311 with the leading case for each.",
        "Attempt all 60 constitutional questions in the bank with the 'randomise options' toggle on.",
        "Attempt the 24 PIL questions; note every flashpoint you could not recall.",
        "Review the analytics tab and mark every wrong answer as 'needs revision'."
      ]
    },
    {
      day: "Day 2",
      focus: "BNS/IPC + BNSS/CrPC (18 marks) — the heaviest single day",
      tasks: [
        "Read both rapid sheets.",
        "Write out the old-to-new mapping for the twenty highest-yield offences (murder, culpable homicide, death by negligence, abetment of suicide, attempt to murder, hurt and grievous hurt, acid attack, kidnapping and abduction, trafficking, theft, snatching, extortion, robbery, dacoity, criminal breach of trust, cheating, criminal trespass, criminal intimidation, defamation).",
        "Write out the CrPC-to-BNSS mapping for FIR, investigation, confession, remand, charge-sheet, cognizance, bail and maintenance.",
        "Attempt all 48 IPC/BNS and all 60 CrPC/BNSS questions.",
        "Drill the weak-area set."
      ]
    },
    {
      day: "Day 3",
      focus: "CPC + Evidence/BSA (18 marks)",
      tasks: [
        "Read both rapid sheets.",
        "Memorise the Order and Rule numbers for pleadings, amendment, plaint rejection, ex parte decrees, temporary injunction and appeals.",
        "Memorise the Evidence Act to BSA correspondence for confessions, dying declarations, expert opinion, privilege and electronic records.",
        "Attempt all 60 CPC and all 48 Evidence/BSA questions.",
        "Attempt the Assertion–Reason view filtered to both subjects."
      ]
    },
    {
      day: "Day 4",
      focus: "Contract, Specific Relief, Transfer of Property and Negotiable Instruments (8 marks) + Company Law (2)",
      tasks: [
        "Read the contract rapid sheet and the company law rapid sheet.",
        "Memorise the void agreements of ss.24-30 and the three exceptions to s.25.",
        "Memorise s.74 and the difference between liquidated damages and a penalty.",
        "Attempt all 48 contract and 12 company questions.",
        "Attempt the Scenario view filtered to contract and company."
      ]
    },
    {
      day: "Day 5",
      focus: "Family Law (8) + Labour (4) + Tort, MV Act and Consumer Protection (5)",
      tasks: [
        "Read all three rapid sheets.",
        "Memorise the grounds and the reliefs under the Hindu Marriage Act, and the domestic violence reliefs.",
        "Memorise the retrenchment conditions of s.25F, the lay-off and retrenchment definitions, and what each of the four labour codes subsumes.",
        "Memorise the eggshell skull rule, res ipsa loquitur, strict vs absolute liability, and the consumer protection definitions and pecuniary limits.",
        "Attempt all 48 family, 24 labour and 30 tort questions."
      ]
    },
    {
      day: "Day 6",
      focus: "Taxation (4) + Administrative Law (3) + ADR (4) + Ethics (4) + Environmental (2) + Cyber (2) + Land (2) + IP (2)",
      tasks: [
        "Read every remaining rapid sheet.",
        "Memorise the residential status tests, the appeal hierarchy and the GST articles.",
        "Memorise the five writs and the two rules of natural justice.",
        "Memorise the arbitration sections from the application to the setting aside of an award.",
        "Attempt all the remaining bank questions in one sitting."
      ]
    },
    {
      day: "Day 7",
      focus: "Full-length mock tests and the final revision lists",
      tasks: [
        "Sit Mock Paper 1 in one three-hour block without notes. Score it and record the subject-wise analysis.",
        "Sit Mock Paper 2 in the afternoon. Compare the weak subjects with Paper 1.",
        "Read the entire Final Revision card — the articles, sections, cases, doctrines, definitions, exceptions, limitations, procedure and the Old Act to New Sanhita map.",
        "Re-attempt every question you have marked 'difficult' in one drill.",
        "Confirm your exam-day logistics from the Exam at a glance card on the dashboard: the paper is a 100-question, 3-hour offline OMR test with no negative marking, and bare Acts are permitted in the examination hall."
      ]
    }
  ];

  /* ================================================= FINAL LISTS ========== */
  var final = {
    articles: [
      "Article 12 — definition of 'State' for Part III.",
      "Article 13 — laws inconsistent with Part III are void; doctrines of eclipse and severability.",
      "Article 14 — equality before the law and the equal protection of the laws; the reasonable classification test; arbitrariness.",
      "Article 19(1)(a)-(g) — six freedoms; the reasonable restrictions in Article 19(2)-(6).",
      "Article 21 — life and personal liberty; fair procedure; dignity, livelihood, health, environment, privacy, speedy trial.",
      "Article 21A — the right to education for children of six to fourteen years (86th Amendment, 2002); RTE Act, 2009.",
      "Article 22 — protection against arrest and detention; the right to be informed and to consult a legal practitioner; the 24-hour rule; preventive detention.",
      "Article 23 — prohibition of traffic in human beings, begar and other similar forms of forced labour.",
      "Article 24 — prohibition of the employment of children below fourteen years in factories, mines and hazardous employment.",
      "Article 25-28 — freedom of religion.",
      "Article 32 — the right to constitutional remedies (itself a fundamental right). Article 226 — the wider writ jurisdiction of the High Courts.",
      "Article 39(d) — equal pay for equal work. Article 39A — equal justice and free legal aid. Article 41 — the right to work. Article 42 — just and humane conditions of work and maternity relief. Article 43 — a living wage and a decent standard of life. Article 43A — the participation of workers in management.",
      "Article 44 — a uniform civil code. Article 45 — early childhood care and education. Article 47 — public health and the prohibition of intoxicating drinks and drugs. Article 48A — the protection and improvement of the environment and the safeguarding of forests and wildlife.",
      "Article 50 — the separation of the judiciary from the executive.",
      "Article 51A — the fundamental duties; (g) the environment; (i) public property; (j) excellence.",
      "Article 105-108, 122 — parliamentary privileges. Article 143 — the advisory jurisdiction of the Supreme Court. Article 161 — the pardoning power of the Governor. Article 215, 227 — the High Court's superintendence.",
      "Article 244 and the Fifth and Sixth Schedules — the administration of Scheduled and Tribal Areas.",
      "Article 246A — the legislative power for GST. Article 253 — legislation to implement international agreements. Article 265 — no tax except by authority of law. Article 269A — the apportionment of the IGST on inter-State supplies in the course of import. Article 279A — the GST Council.",
      "Article 300A — no person shall be deprived of his property save by authority of law.",
      "Article 310 — the doctrine of pleasure. Article 311 — the safeguards against dismissal, removal and reduction in rank.",
      "Article 323A and 323B — administrative tribunals and tribunals for other matters.",
      "Article 356 — the failure of constitutional machinery in a State. Article 368 — the amending power."
    ],
    sections: [
      "Hindu Marriage Act, 1955 — s.5 (conditions of a valid marriage), s.9, s.10, s.11, s.12, s.13, s.13B.",
      "Hindu Succession Act, 1956 — s.6 (a daughter is a coparcener by birth), s.8.",
      "Hindu Adoptions and Maintenance Act, 1956 — ss.5-11, s.18, s.20.",
      "Special Marriage Act, 1954 — s.5 (notice), s.11 (registration), s.27, s.28.",
      "Domestic Violence Act, 2005 — s.2 (aggrieved person, domestic relationship, shared household), ss.18-22.",
      "Indian Contract Act, 1872 — s.2(d), 2(h), s.4, s.5, s.10, s.11, s.13-18, s.19, s.19A, s.20, s.23, s.24, s.25, s.26, s.27, s.28, s.29, s.30, s.39, s.55, s.56, s.62, s.63, ss.68-72, s.73, s.74, s.126, s.128, s.133, s.139, s.148, s.151, s.152, s.170, s.171.",
      "Specific Relief Act, 1963 — s.10, s.14, s.16, s.20 (substituted performance, substituted by the 2018 Amendment), s.34, s.41, s.42.",
      "Transfer of Property Act, 1882 — s.13, s.17, s.18, s.53A, s.58(a)-(g), s.60, s.111.",
      "Negotiable Instruments Act, 1881 — s.4, s.5, s.6, s.13, s.118, s.138, s.139, s.142.",
      "Indian Penal Code, 1860 — ss.34, 109, 120A/120B, 124A, 149, 299, 300, 302, 304, 304A, 306, 307, 319/321, 320/325, 326, 326A/326B, 359/361, 362, 370, 374, 379, 383/384, 391/395, 403, 405/406, 410/411, 415/420, 441, 442/448, 499/500, 503, 511.",
      "Bharatiya Nyaya Sanhita, 2023 — s.3(5), s.4, s.61, s.62, s.100, s.101, s.103, s.105, s.106, s.108, s.109, s.114, s.115, s.116, s.124, s.126, s.127, s.137, s.138, s.143, s.146, s.152, s.190, s.303, s.304 (snatching — new), s.308, s.309, s.310, s.314, s.316, s.317, s.318, s.329, s.330, s.351, s.356.",
      "CrPC, 1973 — ss.2(a) (a bailable offence — NOT s.2(h), which is 'investigation'), 41, 125, 144, 154, 156, 161, 164, 167, 173, 190, 437, 438, 439.",
      "Bharatiya Nagarik Suraksha Sanhita, 2023 — s.2(1)(b) (bailable offence), s.2(1)(g)/(h), s.105 (audio-video recording of search and seizure), s.144 (maintenance), s.163, s.173 (FIR), s.175, s.180, s.183, s.187, s.193, s.210, s.480, s.482, s.483.",
      "Indian Evidence Act, 1872 — ss.25-27 (confessions), s.32 (dying declaration), s.45 (expert opinion), s.60 (oral evidence must be direct), s.65B (electronic records), ss.101-104 (burden of proof), s.113A, s.113B, ss.122-129 (privilege), s.154 (hostile witness).",
      "Bharatiya Sakshya Adhiniyam, 2023 — 170 sections; the certificate requirement for electronic records; the provisions corresponding to the Evidence Act provisions listed above.",
      "Code of Civil Procedure, 1908 — s.9, s.10, s.11, ss.15-20, s.89, s.96, s.100, s.115, s.148, s.151.",
      "Companies Act, 2013 — s.2(68), s.2(71), s.2(85), s.9, s.166, s.185, s.188, ss.230-234, s.241, s.242, s.244, s.245, s.271.",
      "Insolvency and Bankruptcy Code, 2016 — s.7, s.9, s.10, s.12, s.14 (moratorium), s.31, s.53.",
      "Arbitration and Conciliation Act, 1996 — s.7, s.8, s.9, s.11, s.16, s.24, s.31, s.34, s.36, s.37, s.43, s.74.",
      "Advocates Act, 1961 — s.24, s.29, s.30, s.33, s.35, s.36, s.37, s.49.",
      "Contempt of Courts Act, 1971 — s.2(a)-(c), s.12, s.13, s.14, s.15, s.20.",
      "Minimum Wages Act, 1948 — s.3, s.5, s.5(2). Industrial Disputes Act, 1947 — s.2(j), s.2(k), s.2(kkk), s.2(oo), s.2(s), ss.22-24, s.25F, s.25N.",
      "Employees' Compensation Act, 1923 — s.3. Payment of Gratuity Act, 1972 — s.4. Maternity Benefit Act, 1961 — ss.5, 5A, 5B (as amended in 2017). Payment of Wages Act, 1936.",
      "Motor Vehicles Act, 1988 — s.140, s.146, s.147, s.149, s.161, s.163A, s.165, s.166, s.168, s.175, s.190(2) (PUC certificate), s.196.",
      "Consumer Protection Act, 2019 — s.2(7), s.2(10), s.2(11), s.2(34), s.2(46), s.2(47), s.34, s.47, s.58, s.69, Chapter III (the Central Consumer Protection Authority).",
      "Income-tax Act, 1961 — s.2(9), s.2(31), s.2(45), s.3, s.4, s.6, s.10(1), s.10(37), s.28, s.32, s.37, s.45, s.54, s.54EC, s.56(2)(x), s.71B, s.72, s.73, s.74, s.80B(5), s.80C, s.80D, s.80E, s.80G, s.139, s.142(1), s.143, s.144, s.147, s.148, s.208, s.234B, s.234C, s.246A, s.253, s.260A, s.271(1)(c).",
      "Information Technology Act, 2000 — s.2(1)(p), s.2(1)(t), s.2(1)(ta), s.4, s.5, s.10A, s.43, s.43A, s.46, s.57, s.66, s.66B-66F, s.67, s.69, s.69A, s.72, s.75, s.79.",
      "Patents Act, 1970 — s.3(d), s.47, s.53, s.84, s.92A, s.100, s.102, s.107A. Copyright Act, 1957 — s.13, s.14, s.22, s.24, s.51, s.52. Trade Marks Act, 1999 — s.2(1)(zb), s.27(2), s.28, s.29, s.31, s.135. Designs Act, 2000 — s.2(d).",
      "Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 — s.2(2), s.4, s.7, s.11, s.15, s.16, s.19, s.24(2), s.26, s.28, s.30, s.40."
    ],
    cases: [
      "Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225 — the basic structure doctrine.",
      "Maneka Gandhi v. Union of India, (1978) 1 SCC 248 — fair, just and reasonable procedure under Article 21.",
      "K.S. Puttaswamy v. Union of India, (2017) 10 SCC 1 — the right to privacy is a fundamental right.",
      "Olga Tellis v. Bombay Municipal Corporation, (1985) 3 SCC 545 — the right to livelihood is part of Article 21.",
      "People's Union for Democratic Rights v. Union of India, (1982) 3 SCC 235 — payment of less than the minimum wage is forced labour under Article 23.",
      "M.C. Mehta v. Union of India, (1987) 1 SCC 395 — absolute liability for hazardous activities; no exceptions.",
      "Vellore Citizens' Welfare Forum v. Union of India, (1996) 5 SCC 647 — the precautionary principle and the polluter-pays principle.",
      "Subhash Kumar v. State of Bihar, (1991) 1 SCC 598 — the right to a clean environment under Article 21.",
      "Shreya Singhal v. Union of India, (2015) 5 SCC 1 — s.66A of the IT Act struck down.",
      "Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473 — the certificate requirement for electronic records.",
      "Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273 — arrest not to be made mechanically in offences punishable with up to seven years.",
      "D.K. Basu v. State of West Bengal, (1997) 1 SCC 416 — arrest and custodial guidelines.",
      "Lalita Kumari v. Govt. of U.P., (2014) 2 SCC 1 — registration of an FIR is mandatory where a cognizable offence is disclosed.",
      "Arnesh Kumar, Joginder Kumar and Lalita Kumari together define the pre-trial arrest regime in India.",
      "Salomon v. Salomon & Co. Ltd., (1897) AC 22 — a company is a legal person distinct from its members.",
      "Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405 — s.74 of the Contract Act; reasonable compensation not exceeding the sum named.",
      "Kailash Nath Associates v. Delhi Development Authority, (2015) 4 SCC 136 — the forfeiture of earnest money is governed by s.74.",
      "Satyabrata Ghose v. Mugneeram Bangur & Co., AIR 1954 SC 44 — the doctrine of frustration under s.56.",
      "Percept D'Mark (India) (P) Ltd. v. Zaheer Khan, (2006) 4 SCC 227 — a post-employment non-compete restraint is void under s.27.",
      "Rylands v. Fletcher, (1868) LR 3 HL 330 — strict liability with exceptions.",
      "Donoghue v. Stevenson, (1932) AC 562 — the neighbour principle.",
      "Rookes v. Barnard, (1964) AC 1129 — exemplary damages.",
      "Dulieu v. White, (1901) 2 KB 669 and Smith v. Leech Brain & Co. Ltd., (1962) 2 QB 405 — the eggshell skull rule.",
      "Overseas Tankship (U.K.) Ltd. v. Morts Dock & Engineering Co. Ltd. (The Wagon Mound), (1961) AC 388 — the kind of damage must be foreseeable.",
      "Sarla Verma v. Delhi Transport Corporation, (2009) 6 SCC 121 — the multiplier method.",
      "National Insurance Co. Ltd. v. Pranay Sethi, (2017) 16 SCC 680 — compensation consolidated.",
      "Indian Medical Association v. V.P. Shantha, (1995) 6 SCC 651 — medical services are 'service'.",
      "Bunga Daniel Babu v. Sri Vasudeva Constructions, (2016) 8 SCC 683 — a JDA landowner is not a consumer.",
      "Hadley v. Baxendale, (1854) 9 Ex 341 — remoteness of damage.",
      "Lumley v. Wagner, (1852) 1 De GM & G 604 — an injunction to enforce a negative covenant.",
      "Bhaskar Waman Joshi v. Narayan Rambilas Agarwal, AIR 1960 SC 301 — the same-document test for a mortgage by conditional sale.",
      "Bangalore Water Supply & Sewerage Board v. A. Rajappa, (1978) 2 SCC 213 — the meaning of 'industry'.",
      "Sanjit Roy v. State of Rajasthan, (1983) 1 SCC 525 — payment of less than the minimum wage is forced labour.",
      "M.C. Mehta v. State of Tamil Nadu, (1996) 6 SCC 756 — child labour directions and the rehabilitation fund.",
      "Vineeta Sharma v. Rakesh Sharma, (2020) 9 SCC 1 — a daughter is a coparcener by birth under s.6 of the Hindu Succession Act.",
      "Shayara Bano v. Union of India, (2017) 9 SCC 1 — triple talaq in one sitting was set aside.",
      "Gaurav Nagpal v. Sumedha Nagpal, (2009) 1 SCC 42 — the welfare of the child is paramount in custody.",
      "State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402 — the PIL guidelines.",
      "Vineet Narain v. Union of India, (1998) 1 SCC 226 — continuing mandamus.",
      "A.K. Kraipak v. Union of India, (1969) 2 SCC 262 — the rules of natural justice apply to administrative action.",
      "Ajay Hasia v. Khalid Mujib Sehravardi, (1981) 1 SCC 722 — an instrumentality of the State under Article 12.",
      "Pradeep Kumar Biswas v. Indian Institute of Chemical Biology, (2002) 5 SCC 111 — the test for 'other authorities'.",
      "Indore Development Authority v. Manoharlal, (2020) 8 SCC 129 — s.24(2) of the LARR Act requires both conditions; Pune Municipal Corporation overruled.",
      "Vidya Devi v. State of Himachal Pradesh, (2020) 2 SCC 569 — Article 300A and the right to property as a human right.",
      "Novartis AG v. Union of India, (2013) 6 SCC 1 — s.3(d) of the Patents Act upheld.",
      "Bayer Corporation v. Union of India, (2014) 6 SCC 1 — the first compulsory licence for Nexavar.",
      "R.G. Anand v. Delux Films, (1978) 4 SCC 118 — the idea-expression dichotomy.",
      "Amritdhara Pharmacy v. Satya Deo Gupta, AIR 1963 SC 449 — the test of deceptive similarity.",
      "Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd., (2001) 5 SCC 73 — the factors for deceptive similarity.",
      "S. Syed Mohideen v. P. Sulochana Bai, (2016) 2 SCC 683 — the distinctness of the infringement and passing-off actions.",
      "Union of India v. Mohit Minerals Pvt. Ltd., (2022) 10 SCC 700 — the GST Council's recommendations are persuasive, not binding.",
      "Prashant Bhushan, In re, (2021) 3 SCC 160 — contempt and the limits of criticism of the judiciary.",
      "Anvar P.V. and Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1 — electronic evidence.",
      "Municipal Corporation of Delhi v. Subhagwanti, AIR 1966 SC 1750 — res ipsa loquitur.",
      "Roxann Sharma v. Arun Sharma, (2015) 8 SCC 318 — custody and the welfare of the child."
    ],
    doctrines: [
      "Basic structure doctrine — Kesavananda Bharati; an amendment cannot destroy the essential features of the Constitution.",
      "Doctrine of eclipse — a pre-constitution law inconsistent with Part III is not void ab initio but remains dormant; it revives if the inconsistency is removed (Bhikaji Narain Dhakras v. State of M.P.).",
      "Doctrine of severability — only the inconsistent part of a statute is void, and the valid part survives.",
      "Doctrine of pleasure (Article 310) read with Article 311 — the safeguards against dismissal, removal and reduction in rank.",
      "Doctrine of proportionality — a limitation on a right must be for a legitimate goal, be suitable, be necessary and be proportionate (Modern Dental College v. State of M.P.).",
      "Doctrine of legitimate expectation — an express promise, a past practice or a statutory scheme may create an expectation to be treated in a particular way (Union of India v. Hindustan Development Corporation).",
      "Doctrine of colourable legislation — what cannot be done directly cannot be done indirectly.",
      "Res judicata (s.11 CPC) and constructive res judicata; res sub judice (s.10 CPC).",
      "Doctrine of part performance (s.53A TPA) — the transferor is debarred from enforcing his rights against a transferee who has performed or is willing to perform.",
      "Rule against perpetuity (s.18 TPA) — an interest cannot take effect after the lifetime of a life in being plus the minority of a person in existence; the rule does not apply to a transfer for the benefit of the public or a religious or charitable institution.",
      "Eggshell skull rule — take your victim as you find him.",
      "Res ipsa loquitur — the thing speaks for itself.",
      "Volenti non fit injuria — a free and informed voluntary assumption of risk.",
      "Novus actus interveniens — a new intervening act that breaks the chain of causation.",
      "Strict liability (Rylands v. Fletcher) with exceptions versus absolute liability (M.C. Mehta) with none.",
      "Vicarious liability — a master is liable for the torts of his servant committed in the course of employment.",
      "Doctrine of frustration (s.56) — a supervening impossibility renders a contract void; self-induced impossibility does not attract the doctrine.",
      "Doctrine of frustration in the law of arbitration — the separability of the arbitration clause from the underlying contract (s.16).",
      "Kompetenz-kompetenz — the arbitral tribunal may rule on its own jurisdiction (s.16 of the Arbitration and Conciliation Act, 1996).",
      "Precautionary principle and the polluter-pays principle — Vellore Citizens' Welfare Forum.",
      "Sustainable development and intergenerational equity — the needs of the present without compromising future generations.",
      "Doctrine of public trust — the State holds natural resources in trust for the public (M.C. Mehta v. Kamal Nath).",
      "Doctrine of lifting the corporate veil — sham, façade, fraud, evasion of legal obligations and statutory requirement.",
      "Doctrine of legitimate expectation in administrative law; and the Wednesbury test of unreasonableness.",
      "Doctrine of proportionality in administrative law — the 'fourth ground' of judicial review.",
      "Audi alteram partem and nemo judex in causa sua — the two rules of natural justice.",
      "Doctrine of ultra vires in administrative law and in company law (acts beyond the objects clause).",
      "Continuing mandamus — the court monitors the implementation of its orders (Vineet Narain).",
      "Doctrine of eclipse and severability in administrative and constitutional law.",
      "Doctrine of occupied field and repugnancy (Article 254) in legislative competence."
    ],
    definitions: [
      "'Industry' — ID Act s.2(j); Bangalore Water Supply (triple test and dominant nature test).",
      "'Industrial dispute' — ID Act s.2(k); a dispute or difference between employers and employers, employers and workmen, or workmen and workmen connected with employment, non-employment, the terms of employment or the conditions of labour of any person.",
      "'Workman' — ID Act s.2(s); excludes managerial and administrative employees, supervisory employees above the wage ceiling, and apprentices.",
      "'Lay-off' (s.2(kkk)) is temporary; 'retrenchment' (s.2(oo)) is a permanent severance of the employment relationship other than as a disciplinary punishment.",
      "'Bailable offence' — CrPC s.2(a); BNSS s.2(1)(b). NOT CrPC s.2(h), which defines 'investigation'.",
      "'Electronic record' — IT Act s.2(1)(t); includes data, an image or sound stored, received or sent in an electronic form, micro film or computer-generated micro fiche; excludes a purely paper record.",
      "'Electronic signature' (s.2(1)(ta)) is the wider concept; 'digital signature' (s.2(1)(p)) is a species using an asymmetric cryptosystem and a hash function.",
      "'Design' — Designs Act s.2(d); features of shape, configuration, pattern, ornament or composition of lines or colours applied to an article by an industrial process, appealing to and judged solely by the eye; excludes a mode or principle of construction and a mere mechanical device.",
      "'Geographical indication' — GI Act s.2(1)(e); the quality, reputation or other characteristic is essentially attributable to the geographical origin.",
      "'Consumer' — CPA s.2(7); excludes resale and a commercial purpose, but includes purchases through electronic means, teleshopping, direct selling and multi-level marketing.",
      "'Defect' (s.2(10)) relates to goods; 'deficiency' (s.2(11)) relates to services.",
      "'Unfair contract' — CPA s.2(46); in popular usage, a 'one-sided agreement'.",
      "'Product liability' — CPA s.2(34); the responsibility of a manufacturer or seller to compensate for harm caused by a defective product or a deficient service.",
      "'Total income' — Income-tax Act s.2(45); the total amount of income referred to in s.5, computed per the Act. 'Gross total income' is defined in s.80B(5).",
      "'Previous year' (s.3) is the financial year immediately preceding the assessment year; 'assessment year' (s.2(9)) is the twelve months beginning 1 April, immediately following the previous year.",
      "'Promissory note' (s.4 NI Act) — an unconditional undertaking to pay, signed by the maker. 'Bill of exchange' (s.5) — an unconditional order to pay. 'Cheque' (s.6) — a bill of exchange drawn on a specified banker and payable on demand.",
      "'Bailment' — Contract Act s.148; delivery of goods for a purpose with the obligation to return or dispose of them per the bailor's directions. Only possession, not ownership, passes.",
      "'Particular lien' (s.170) is confined to the goods on which labour or skill was expended; 'general lien' (s.171) covers a general balance of account for bankers, factors, wharfingers, attorneys of a High Court and policy brokers.",
      "'Consideration' — s.2(d); something at the desire of the promisor; may move from a third party; adequacy is not required.",
      "'Coercion' (s.15) requires an act forbidden by the IPC or the unlawful detention of property; 'undue influence' (s.16) requires a position to dominate the will and the obtaining of an unfair advantage.",
      "'Fraud' (s.17) requires an intention to deceive; 'misrepresentation' (s.18) is an innocent misstatement.",
      "'Easement' — Easements Act s.4; a right for the beneficial enjoyment of the dominant heritage over the servient heritage.",
      "'Trust' — Indian Trusts Act s.3; an obligation annexed to the ownership of property arising out of a confidence reposed in and accepted by the owner for the benefit of another.",
      "'Aggrieved person', 'domestic relationship' and 'shared household' — Domestic Violence Act s.2."
    ],
    exceptions: [
      "Article 14 — reasonable classification with an intelligible differentia and a rational nexus to the object; protective discrimination under Articles 15(4), 15(5), 16(4) and 16(4A).",
      "Article 19 — the reasonable restrictions in Articles 19(2)-(6), including the new grounds added by the First Amendment (public order, friendly relations with foreign States, incitement to an offence) and the 16th Amendment (sovereignty and integrity of India).",
      "Article 21 — the deprivation of life or personal liberty must be in accordance with a procedure established by law that is fair, just and reasonable.",
      "Article 22(3) — the protection of clauses (1) and (2) is not available to an enemy alien or to a person detained under a preventive detention law.",
      "Article 311 — the safeguards do not apply to a person dismissed on the ground of conduct leading to a conviction, or where an inquiry is not reasonably practicable.",
      "Section 27 of the Contract Act — the sale of the goodwill of a business with reasonable local limits is an exception to the rule that an agreement in restraint of trade is void.",
      "Section 25 of the Contract Act — natural love and affection (written and registered), compensation for a past voluntary act, and a written and signed promise to pay a time-barred debt.",
      "Section 300 IPC / s.101 BNS — the five exceptions to murder: grave and sudden provocation, exceeding the right of private defence, a public servant exceeding his powers, a sudden fight, and consent.",
      "Section 300 IPC / s.101 BNS — the exceptions, if established, reduce the offence to culpable homicide not amounting to murder (s.304 IPC / s.105 BNS).",
      "Section 56 of the Contract Act — the doctrine of frustration does not apply where the impossibility is self-induced or where the event was foreseeable and provided for in the contract.",
      "Section 133 of the Contract Act — a material variance discharges the surety, but an immaterial variance and a variance with the surety's consent do not.",
      "Section 24(2) of the LARR Act — both conditions must be satisfied for the proceedings to lapse (Indore Development Authority v. Manoharlal).",
      "Section 18 of the TPA — the rule against perpetuity does not apply to a transfer for the benefit of the public or a religious or charitable institution.",
      "Section 14 of the Specific Relief Act — the contracts which cannot be specifically enforced, including those for which compensation is an adequate relief, those dependent on personal qualifications and those determinable in nature.",
      "Section 52 of the Copyright Act — fair dealing for research or private study, criticism or review, and the reporting of current events; and certain specified educational and other acts.",
      "Section 3 of the Employees' Compensation Act — liability is excluded where the injury was caused by intoxication, wilful disobedience of an express safety order, or the wilful removal of a safety guard.",
      "Section 4 of the Payment of Gratuity Act — the requirement of five years' continuous service is not applicable in the case of death or disablement.",
      "Section 19 of the Environment (Protection) Act — cognizance only on a complaint by the Central Government or an authorised officer, or by a person who has given sixty days' notice.",
      "Section 40 of the LARR Act — the urgency provisions dispense with the Social Impact Assessment and the objection stage, but not with compensation or rehabilitation and resettlement.",
      "Section 14 of the Insolvency and Bankruptcy Code — the moratorium does not extinguish claims; it suspends their enforcement."
    ],
    limitations: [
      "AIBE XXI — 100 questions, 3 hours, offline OMR, no negative marking, bare Acts permitted in the examination hall.",
      "CrPC s.167 / BNSS s.187 — remand: 15 days in the whole where the investigation cannot be completed; the charge-sheet must be filed within 90 days (offences punishable with death, life imprisonment or not less than 10 years) or 60 days (other offences).",
      "CrPC s.167 / BNSS s.187 — the 24-hour rule for producing an arrested person before a Magistrate (Article 22(2) and CrPC s.57 / BNSS s.58).",
      "BNSS — the judgment must be pronounced within 30 days of the conclusion of the trial, extendable to 45 days for special reasons.",
      "Plea bargaining — an application within 30 days from the framing of the charge.",
      "CPC Order VIII — a written statement ordinarily within 30 days, extendable to 90 days in all.",
      "CPC Order IX Rule 7 — the setting aside of an ex parte decree on showing sufficient cause, within 30 days of the decree (Article 123 of the Limitation Act).",
      "Civil appeals — Limitation Act, Article 116 for a first appeal from a decree (90 days), Article 117 for an appeal from an order (30 days), Article 133 for a second appeal or a revision (90 days).",
      "Consumer Protection Act, 2019 s.69 — a complaint within 2 years of the cause of action, with condonation of up to a further 1 year.",
      "Consumer Protection Act, 2019 — pecuniary jurisdiction: the District Commission up to ₹1 crore, the State Commission ₹1 crore to ₹10 crore, the National Commission above ₹10 crore (read with the 2021 Rules).",
      "Motor Vehicles Act, 1988 s.166 — a claim before the Motor Accidents Claims Tribunal within 6 months of the occurrence of the accident, extendable by a further 6 months on sufficient cause (read with s.166(3)).",
      "Domestic Violence Act, 2005 s.468 of the CrPC (now BNSS) — a one-year limitation for offences under the Act.",
      "Arbitration and Conciliation Act, 1996 s.34(3) — an application to set aside an award within 3 months of the receipt of the award, extendable by 30 days on sufficient cause but not thereafter. Section 11(13) — an endeavour to dispose of an appointment application within 60 days.",
      "Arbitration and Conciliation Act, 1996 s.29A — the award within 12 months from the completion of pleadings, extendable by 6 months by consent, and thereafter only with the leave of the court.",
      "Contempt of Courts Act, 1971 s.20 — a limitation of 1 year from the date on which the contempt is alleged to have been committed.",
      "Land Acquisition — objections within 60 days (s.15); the final declaration within 12 months of the preliminary notification (s.19), failing which the process lapses; the award within 12 months of the final declaration (s.25).",
      "GNCTD/NGT Act, 2010 s.16 — an application within 6 months of the cause of action, with up to 60 days at the Tribunal's discretion.",
      "Income-tax Act, 1961 s.139(1) — the due date for the return; s.139(4) a belated return within 1 year from the end of the assessment year or before the completion of the assessment, whichever is earlier; s.153 the time limit for the completion of an assessment.",
      "Income-tax Act, 1961 s.208 — advance tax is payable where the tax for the financial year is ₹10,000 or more; the instalments are prescribed in s.211.",
      "Income-tax Act, 1961 ss.72, 73, 74, 71B — carry forward: a business loss 8 assessment years (with a timely return), a speculative business loss 4, a capital loss 8, a house-property loss 8.",
      "Transfer of Property Act, 1882 s.17 — the accumulation of income for the transferor's lifetime in the case of immovable property, or 18 years, whichever is longer; 18 years for movable property.",
      "Limitation Act, 1963 — Article 54 (a suit for specific performance: 3 years from the date fixed for performance or when notice of refusal is received), Article 58 (a declaratory suit: 3 years), Article 65 (a suit for possession of immovable property based on title: 12 years), Article 113 (a residuary suit: 3 years)."
    ],
    procedure: [
      "Criminal process: an FIR (BNSS s.173) or a complaint (BNSS s.223) → investigation (s.175) → a final report (s.193) → cognizance (s.210) → process, appearance, charge, trial, examination of witnesses, argument and judgment. A Zero FIR may be registered at any police station irrespective of jurisdiction.",
      "Bail: a bailable offence — bail is a matter of right; a non-bailable offence — the court's discretion under s.480 (CrPC s.437); anticipatory bail under s.482 (CrPC s.438); the special powers of the High Court and the Sessions Court under s.483 (CrPC s.439).",
      "Plea bargaining: BNSS — an application by a person accused of an offence other than one punishable with death, life imprisonment or imprisonment for more than seven years, filed within 30 days from the framing of the charge.",
      "Civil process: a plaint (Order VII) → a summons → a written statement (Order VIII) → the framing of issues (Order XIV) → discovery and inspection → trial → judgment and decree (Order XX) → execution (Order XXI) → appeal.",
      "Interim reliefs in civil suits: a temporary injunction under Order XXXIX Rr.1-4, an attachment before judgment under Order XXXVIII, and a receiver under Order XL.",
      "Section 89 CPC — where the court is of the opinion that there exist elements of a settlement acceptable to the parties, it shall formulate the terms of the settlement and refer the dispute to arbitration, conciliation, judicial settlement, mediation or Lok Adalat.",
      "Arbitration: an arbitration agreement (s.7) → a reference by the court (s.8) or interim measures (s.9) → the appointment of the tribunal (s.11) → the statement of claim and defence, hearings (s.24) → the award (s.31) → setting aside (s.34) → enforcement (s.36) → appeal on specified orders (s.37).",
      "Consumer complaint: the complaint before the District, State or National Commission as per the pecuniary limit (s.34/47/58) → the admission of the complaint → a notice to the opposite party → the response → the hearing → the order; an appeal lies to the next higher commission and, thereafter, to the Supreme Court.",
      "Writ petition: Article 32 before the Supreme Court or Article 226 before the High Court; the writs are habeas corpus, mandamus, prohibition, certiorari and quo warranto.",
      "Income-tax assessment: the return (s.139) → the summary intimation (s.143(1)) → a notice under s.143(2) for a scrutiny assessment → the assessment under s.143(3) or the best judgment assessment under s.144 → an appeal to the CIT(A) under s.246A → the ITAT under s.253 → the High Court under s.260A → the Supreme Court.",
      "Land acquisition: the Social Impact Assessment in consultation with the Gram Sabha (s.4) → the appraisal by the expert group (s.7) → the preliminary notification (s.11) → objections within 60 days (s.15) → the report of the Collector (s.16) → the final declaration within 12 months (s.19) → the award (s.25) → the taking of possession (s.38).",
      "Insolvency of a corporate debtor: the filing of an application by a financial creditor (s.7), an operational creditor (s.9) or the corporate debtor itself (s.10) → the admission of the application and the declaration of a moratorium (s.14) → the appointment of an interim resolution professional → the committee of creditors → the resolution plan (s.30/31) or liquidation (s.33).",
      "Contempt: a motion by the Advocate-General or the Attorney-General, or by a party with the consent in writing of the Advocate-General, or suo motu by the court; the punishment is simple imprisonment for up to six months, or a fine of up to ₹2,000, or both."
    ],
    mapping: [
      "CAUTION — the correspondence below is a study aid. The Bharatiya Nyaya Sanhita, 2023, the Bharatiya Nagarik Suraksha Sanhita, 2023 and the Bharatiya Sakshya Adhiniyam, 2023 are NOT verbatim re-enactments of the Indian Penal Code, 1860, the Code of Criminal Procedure, 1973 and the Indian Evidence Act, 1872. Section numbers, wording, punishments and the definition of some offences have changed. Always verify each entry against the Bare Act. The syllabus names both the old and the new Acts, so questions may test either regime.",
      "IPC s.34 (common intention) → BNS s.3(5).",
      "IPC s.109 (punishment of abetment) → BNS s.49.",
      "IPC s.120A and s.120B (criminal conspiracy) → BNS s.61.",
      "IPC s.124A (sedition) → BNS s.152 (acts endangering sovereignty, unity and integrity of India) — the wording and scope are not identical.",
      "IPC s.149 (unlawful assembly, common object) → BNS s.190.",
      "IPC s.299 (culpable homicide) → BNS s.100.",
      "IPC s.300 (murder) → BNS s.101.",
      "IPC s.302 (punishment for murder) → BNS s.103.",
      "IPC s.304 (culpable homicide not amounting to murder) → BNS s.105.",
      "IPC s.304A (death by negligence) → BNS s.106.",
      "IPC s.306 (abetment of suicide) → BNS s.108.",
      "IPC s.307 (attempt to murder) → BNS s.109.",
      "IPC s.319 (hurt) and s.321 (voluntarily causing hurt) → BNS s.114.",
      "IPC s.320 (grievous hurt) and s.325 → BNS s.115.",
      "IPC s.326 (grievous hurt by dangerous weapons) → BNS s.116.",
      "IPC s.326A and s.326B (acid attack) → BNS s.124.",
      "IPC s.341 (wrongful restraint) → BNS s.126.",
      "IPC s.342 (wrongful confinement) → BNS s.127.",
      "IPC s.359 and s.361 (kidnapping) → BNS s.137.",
      "IPC s.362 (abduction) → BNS s.138.",
      "IPC s.370 (trafficking) → BNS s.143.",
      "IPC s.374 (unlawful compulsory labour) → BNS s.146.",
      "IPC s.379 (theft) → BNS s.303. Snatching is a NEW offence in BNS s.304 with no IPC counterpart.",
      "IPC s.383 and s.384 (extortion) → BNS s.308.",
      "IPC s.391 and s.392 (robbery) → BNS s.309.",
      "IPC s.391 and s.395 (dacoity) → BNS s.310.",
      "IPC s.403 (dishonest misappropriation) → BNS s.314.",
      "IPC s.405 and s.406 (criminal breach of trust) → BNS s.316.",
      "IPC s.410 and s.411 (stolen property) → BNS s.317.",
      "IPC s.415 and s.420 (cheating) → BNS s.318, with the punishment for cheating and dishonestly inducing delivery of property in s.318(4).",
      "IPC s.441 and s.447 (criminal trespass) → BNS s.329.",
      "IPC s.442 and s.448 (house-trespass) → BNS s.330.",
      "IPC s.499 and s.500 (defamation) → BNS s.356.",
      "IPC s.503 (criminal intimidation) → BNS s.351, with the punishment in s.351(2) and s.351(3); the IPC punishment was in s.506.",
      "IPC s.511 (attempt to commit offences punishable with imprisonment for life or other imprisonment) → BNS s.62.",
      "CrPC s.154 (FIR) → BNSS s.173. The Zero FIR is now given statutory recognition.",
      "CrPC s.156 (power to investigate) → BNSS s.175.",
      "CrPC s.161 (examination of witnesses by the police) → BNSS s.180.",
      "CrPC s.164 (recording of confessions and statements) → BNSS s.183.",
      "CrPC s.167 (procedure when the investigation cannot be completed in 24 hours) → BNSS s.187.",
      "CrPC s.173 (report of the police officer on completion of the investigation) → BNSS s.193.",
      "CrPC s.190 (cognizance of offences by Magistrates) → BNSS s.210.",
      "CrPC s.200 (examination of the complainant on oath) → BNSS s.223.",
      "CrPC s.125 (order for maintenance) → BNSS s.144.",
      "CrPC s.144 (power to issue orders in urgent cases of nuisance or apprehended danger) → BNSS s.163.",
      "CrPC s.437 (when bail may be taken in the case of a non-bailable offence) → BNSS s.480.",
      "CrPC s.438 (direction for the grant of bail to a person apprehending arrest) → BNSS s.482.",
      "CrPC s.439 (special powers of the High Court or the Court of Session regarding bail) → BNSS s.483.",
      "CrPC s.57 (no detention beyond 24 hours) → BNSS s.58.",
      "CrPC s.41 (when the police may arrest without a warrant) → BNSS s.35.",
      "CrPC s.46 (arrest how made) → BNSS s.36.",
      "Evidence Act s.25 and s.26 (confessions to a police officer) → the corresponding provision in the Bharatiya Sakshya Adhiniyam, 2023.",
      "Evidence Act s.27 (how much of the information received from an accused in custody may be proved) → the corresponding provision in the Bharatiya Sakshya Adhiniyam, 2023.",
      "Evidence Act s.32 (cases in which a statement of a relevant fact by a person who is dead or cannot be found is relevant — the dying declaration) → the corresponding provision in the Bharatiya Sakshya Adhiniyam, 2023.",
      "Evidence Act s.45 (opinion of an expert) → the corresponding provision in the Bharatiya Sakshya Adhiniyam, 2023.",
      "Evidence Act s.65B (admissibility of electronic records) → the corresponding provision in the Bharatiya Sakshya Adhiniyam, 2023; the certificate requirement continues.",
      "Evidence Act s.101 to s.104 (burden of proof) → the corresponding provisions in the Bharatiya Sakshya Adhiniyam, 2023.",
      "Evidence Act s.114 (the court may presume the existence of a fact) → the corresponding provision in the Bharatiya Sakshya Adhiniyam, 2023, which also introduces a provision on the presumptive evidentiary value of a certified electronic record and the chain-of-custody requirement for an electronic device.",
      "NUMBERS THAT DO NOT CHANGE: the Bharatiya Nyaya Sanhita, 2023 is Act 45 of 2023; the Bharatiya Nagarik Suraksha Sanhita, 2023 is Act 46 of 2023; the Bharatiya Sakshya Adhiniyam, 2023 is Act 47 of 2023. All three came into force on 1 July 2024."
    ]
  };

  return { rapid: rapid, oneDay: oneDay, sevenDay: sevenDay, final: final };
})();
