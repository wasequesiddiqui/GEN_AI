/* ============================================================================
 * AIBE XXI — Study notes, batch 2
 * PIL | Administrative Law | Professional Ethics | Company Law |
 * Environmental Law | Cyber Law | Labour & Industrial Law
 * ==========================================================================*/
window.AIBE_NOTES = window.AIBE_NOTES || {};

/* ============================== PIL ========================================*/
window.AIBE_NOTES["pil"] = {
  overview:
    "4 questions, and they are usually conceptual rather than provision-based: who can file, what the writ " +
    "jurisdiction adds, and who coined the expression. Learn the standing rules and the locus standi relaxation.",
  topics: [
    {
      id: "i1",
      name: "Concept and Origin",
      concept:
        "Public Interest Litigation is litigation in the interest of the public at large, where the traditional " +
        "requirement that the petitioner must be personally aggrieved is relaxed. The expression 'Public Interest " +
        "Litigation' was first used by Prof. Abram Chayes of Harvard Law School in the 1970s; in the Indian context " +
        "the PIL jurisdiction was developed by Justices P.N. Bhagwati and V.R. Krishna Iyer.",
      provisions: ["Article 32 — writ jurisdiction of the Supreme Court (basis of PIL)", "Article 226 — writ jurisdiction of High Courts (wider)", "Article 39A — equal justice and free legal aid", "Article 21 — source of most PIL rights", "s.89 CPC and the Legal Services Authorities Act 1987 — statutory ADR routes"],
      cases: [
        { name: "S.P. Gupta v. Union of India, (1981) Supp SCC 87", principle: "Any member of the public acting bona fide may move the court for the enforcement of fundamental rights of a class of persons who cannot approach the court themselves — the classic locus standi relaxation." },
        { name: "People's Union for Democratic Rights v. Union of India, (1982) 3 SCC 235", principle: "PIL used to expand Article 23; illustrates PIL as a vehicle for socio-economic rights." },
        { name: "Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161", principle: "Epistolary jurisdiction — a letter to the court can be treated as a writ petition." },
        { name: "State of Uttaranchal v. Balwant Singh Chaufal, (2010) 3 SCC 402", principle: "Guidelines to prevent abuse of PIL; courts must be careful about bona fides and the existence of a public interest." },
      ],
      exceptions: ["PIL is not available for a personal or private grievance.", "A PIL filed for publicity, personal gain or vendetta may attract costs."],
      confusions: [
        "The expression 'Public Interest Litigation' was FIRST USED BY Prof. Abram Chayes — not by Justice Bhagwati or Justice Krishna Iyer, who developed the Indian practice, and not by Prof. Upendra Baxi (who wrote about it).",
        "First PIL case in India is often traced to Hussainara Khatoon (1979); the locus standi relaxation is S.P. Gupta (1981).",
      ],
      aibeFocus: ["The 'first used by' question. And what PIL is NOT (not a private dispute remedy)."],
      flashpoints: [
        "PIL first used by → PROF. ABRAM CHAYES (Harvard).",
        "Indian PIL developed by → Justice P.N. Bhagwati and Justice V.R. Krishna Iyer.",
        "Locus standi relaxed → S.P. Gupta v. UOI (1981) Supp SCC 87.",
        "Epistolary jurisdiction → Bandhua Mukti Morcha (1984) 3 SCC 161.",
        "Abuse of PIL → State of Uttaranchal v. Balwant Singh Chaufal (2010) 3 SCC 402.",
        "PIL is NOT for private/personal grievances.",
      ],
    },
    {
      id: "i2",
      name: "Locus Standi and Procedure",
      concept:
        "The traditional rule confined standing to a person whose own legal right was infringed. PIL relaxes this: a " +
        "public-spirited individual or a social action group may approach the court on behalf of those who are unable " +
        "to do so. Courts have accepted letter petitions and newspaper reports as the trigger for suo motu action.",
      provisions: ["Article 32(1) — right to move the Supreme Court", "Article 226 — High Court writ powers", "Order I Rule 8 CPC — representative suits (the procedural analogy)", "s.91 CPC — public nuisance"],
      cases: [
        { name: "Jasbhai Motibhai Desai v. Roshan Kumar Haji Bashir Ahmed, (1976) 1 SCC 671", principle: "Only a person aggrieved has standing; the scope of the expression 'aggrieved person' — the pre-PIL baseline." },
        { name: "Sunil Batra v. Delhi Administration, (1978) 4 SCC 494", principle: "A letter from a prisoner treated as a writ petition — expansion of access to justice." },
      ],
      exceptions: ["Standing is still denied to a busybody or an interloper without any genuine public interest."],
      confusions: ["PIL relaxes WHO may file — it does not change WHAT relief may be granted or dispense with the requirement of a legal right in the affected class."],
      aibeFocus: ["The concept of relaxation of locus standi as the defining feature of PIL."],
      flashpoints: [
        "Locus standi → relaxed for PIL; any bona fide public-spirited person may approach the court.",
        "Traditional rule → only a person whose own right is infringed.",
        "Letter petitions → accepted (epistolary jurisdiction).",
        "PIL does NOT permit a frivolous or personal claim to be dressed up as public interest.",
      ],
    },
    {
      id: "i3",
      name: "Scope and Abuse of PIL",
      concept:
        "PIL has been used for environmental protection, prison reform, bonded labour, consumer protection and " +
        "gender justice. Against this stands the danger of abuse — PILs filed for publicity or to settle private " +
        "scores, which courts now penalise with costs.",
      provisions: ["Article 21 — right to a clean environment, health, livelihood (the PIL workhorses)", "Article 23 — against exploitation", "National Green Tribunal Act 2010 — specialised forum reducing PIL overload"],
      cases: [
        { name: "M.C. Mehta v. Union of India (Oleum Gas Leak case), (1987) 1 SCC 395", principle: "Absolute liability of enterprises engaged in hazardous activity; upheld the constitutional validity of the Environment (Protection) Act 1986 — a PIL landmark." },
        { name: "Vishaka v. State of Rajasthan, (1997) 6 SCC 241", principle: "Guidelines on sexual harassment at the workplace laid down under Article 32 — judicial legislation through PIL." },
        { name: "Aravalli Range cases / T.N. Godavarman Thirumulpad v. Union of India", principle: "Continuing mandamus in environmental PIL." },
      ],
      exceptions: ["PIL is not a substitute for a civil suit or for statutory remedies.", "A PIL involving disputed questions of fact requiring evidence is generally not entertained."],
      confusions: ["Vishaka (1997) 6 SCC 241 — sexual harassment guidelines (Article 32/PIL) — is NOT the case that expanded Article 23. PUDR (1982) is."],
      aibeFocus: ["Correct case-to-doctrine pairing (Vishaka = workplace sexual harassment; PUDR = Article 23; M.C. Mehta = absolute liability/environment)."],
      flashpoints: [
        "M.C. Mehta v. UOI (1987) 1 SCC 395 → absolute liability for hazardous enterprises.",
        "Vishaka v. State of Rajasthan (1997) 6 SCC 241 → sexual harassment guidelines.",
        "Bandhua Mukti Morcha (1984) → bonded labour, Article 21 + 23.",
        "Costs may be imposed for frivolous PILs.",
      ],
    },
  ],
};

/* ============================== ADMINISTRATIVE LAW =========================*/
window.AIBE_NOTES["admin"] = {
  overview:
    "3 questions allotted (Set A observes 4 — see AIBE_ANALYSIS.md §3.1). Nothing here is procedural in the CPC " +
    "sense; the questions are definitional and doctrinal. Learn (i) the definition of administrative law, (ii) the " +
    "natural justice cases, and (iii) the grounds of judicial review.",
  topics: [
    {
      id: "d1",
      name: "Definition and Rule of Law",
      concept:
        "'Administrative law is the law concerning the powers and procedures of administrative agencies, including " +
        "especially the law governing judicial review of administrative action' — this is K.C. Davis's definition. " +
        "Dicey's formulation of the rule of law has three limbs: supremacy of law, equality before the law, and the " +
        "predominance of the legal spirit. In Roman jurisprudence the concept analogous to the rule of law was " +
        "expressed through *jus naturale* — the law of nature applied to all.",
      provisions: ["Article 14 — equality before the law", "Article 21 — procedure established by law", "Article 32 & 226 — judicial review", "Article 323A & 323B — tribunals"],
      cases: [
        { name: "A.K. Kraipak v. Union of India, AIR 1970 SC 150", principle: "The rules of natural justice are not confined to the narrow precincts of the prevailing definition of quasi-judicial functions; they extend to administrative action affecting rights." },
      ],
      exceptions: ["Dicey's rule of law is criticised for its rigid separation-of-powers premise, which does not describe the Indian constitutional scheme."],
      confusions: [
        "K.C. Davis's definition is the one quoted in the paper's question ('powers and procedures of administrative agencies... judicial review of administrative action'). Do not attribute it to Dicey, Jennings or Wade.",
        "Roman analogue of the rule of law → *jus naturale* (not *jus gentium*, not *lex regia*, not *jus civile*).",
      ],
      aibeFocus: ["The attribution questions: definition → K.C. Davis; natural justice beyond quasi-judicial → A.K. Kraipak; Roman rule of law → jus naturale."],
      flashpoints: [
        "'Administrative law is the law concerning the powers and procedures of administrative agencies...' → K.C. DAVIS.",
        "Rule of Law → A.V. DICEY.",
        "Natural justice not confined to quasi-judicial functions → A.K. KRAPAIP v. UOI, AIR 1970 SC 150.",
        "Roman concept akin to Rule of Law → JUS NATURALE.",
        "Judicial review grounds → illegality, irrationality, procedural impropriety.",
      ],
    },
    {
      id: "d2",
      name: "Principles of Natural Justice",
      concept:
        "Two core principles: *nemo judex in causa sua* (no one shall be a judge in his own cause — the rule against " +
        "bias) and *audi alteram partem* (hear the other side). To these have been added the duty to give reasons " +
        "and the requirement of a fair procedure.",
      provisions: ["Article 14 — rule against arbitrariness", "Article 21 — fair procedure (Maneka Gandhi)", "Article 311(2) — the constitutional expression of natural justice in disciplinary matters"],
      cases: [
        { name: "A.K. Kraipak v. Union of India, AIR 1970 SC 150", principle: "Natural justice applies to administrative action, not merely to quasi-judicial action." },
        { name: "Ridge v. Baldwin, (1964) AC 40", principle: "The House of Lords extended natural justice to administrative decisions — the English counterpart of Kraipak." },
        { name: "Maneka Gandhi v. Union of India, (1978) 1 SCC 248", principle: "Procedure under Article 21 must be fair, just and reasonable." },
        { name: "Mohinder Singh Gill v. Chief Election Commissioner, (1978) 1 SCC 405", principle: "Natural justice is a flexible concept; the requirements vary with the facts and the statutory framework." },
      ],
      exceptions: ["Natural justice may be excluded by statute expressly, by necessary implication, or in cases of urgency, confidentiality, public interest or where no right is affected."],
      confusions: ["Ridge v. Baldwin (1964) AC 40 is the ENGLISH case that rejected the classification of functions; A.K. Kraipak (1970) adopted the same approach in India. Questions may test either."],
      aibeFocus: ["The two maxims and the case attribution."],
      flashpoints: [
        "Nemo judex in causa sua → no one a judge in his own cause (rule against bias).",
        "Audi alteram partem → hear the other side.",
        "Kraipak (1970) → natural justice extends beyond quasi-judicial functions.",
        "Ridge v. Baldwin (1964) AC 40 → the English turning point.",
        "Natural justice may be excluded in urgency/confidential matters.",
      ],
    },
    {
      id: "d3",
      name: "Judicial Review, Delegated Legislation and Ombudsman",
      concept:
        "Judicial review of administrative action proceeds on three grounds — illegality, irrationality (Wednesday " +
        "unreasonableness) and procedural impropriety. Delegated legislation is permissible but not unlimited: " +
        "excessive delegation, sub-delegation of an essential legislative function and violation of the parent Act " +
        "render it ultra vires. The Ombudsman-type institution was first recommended for India by the **Santhanam " +
        "Committee (1964)**, and was later given effect through the Lokpal and Lokayuktas Act 2013.",
      provisions: ["Article 32 & 226 — judicial review", "Article 245-246 & delegated legislation — control by laying requirements", "Administrative Tribunals Act 1985", "Lokpal and Lokayuktas Act 2013", "Central Vigilance Commission Act 2003"],
      cases: [
        { name: "Associated Provincial Picture Houses Ltd. v. Wednesbury Corporation, (1948) 1 KB 223", principle: "Wednesbury unreasonableness — a decision so unreasonable that no reasonable authority would have taken it." },
        { name: "Rojer Mathew v. South Indian Bank Ltd., (2020) 6 SCC 1", principle: "Struck down the Tribunal Members (Qualifications and Other Conditions of Service) Rules 2020 as unconstitutional and laid down directions for tribunal appointments." },
        { name: "L. Chandra Kumar v. Union of India, (1997) 3 SCC 261", principle: "Judicial review under Articles 226/227 and 32 is part of the basic structure; tribunals cannot exclude High Court jurisdiction." },
      ],
      exceptions: ["An ouster clause cannot exclude the High Court's writ jurisdiction under Article 226 (L. Chandra Kumar)."],
      confusions: [
        "Ombudsman first recommended by the SANTHANAM COMMITTEE (1964) — not by the Administrative Reforms Commission of 2005 or 1966, and not by the India Against Corruption movement (2011).",
        "Article 226 jurisdiction cannot be ousted by statute.",
      ],
      aibeFocus: ["Santhanam Committee 1964 → Ombudsman recommendation."],
      flashpoints: [
        "Ombudsman in India first recommended by → SANTHANAM COMMITTEE, 1964.",
        "Wednesbury (1948) 1 KB 223 → unreasonableness test.",
        "L. Chandra Kumar (1997) 3 SCC 261 → judicial review is part of the basic structure; tribunals cannot oust Article 226.",
        "Rojer Mathew (2020) 6 SCC 1 → struck down the 2020 Tribunal Rules.",
        "Grounds of judicial review → illegality | irrationality | procedural impropriety.",
      ],
    },
  ],
};

/* ============================== PROFESSIONAL ETHICS ========================*/
window.AIBE_NOTES["ethics"] = {
  overview:
    "4 questions, and they are almost entirely about SECTIONS OF THE ADVOCATES ACT, 1961 and RULES of the BCI " +
    "Standards of Professional Conduct and Etiquette. Learn s.9(1), s.35, s.49(1)(c), Rule 8 and Rule 20 by " +
    "number, and one landmark misconduct case.",
  topics: [
    {
      id: "t1",
      name: "Rule-Making Power and the Advocates Act",
      concept:
        "The Bar Council of India derives its rule-making power — including the power to frame rules governing " +
        "professional conduct and etiquette — from s.49(1)(c) of the Advocates Act, 1961. Breach of a rule framed " +
        "under the Act is proceeded against as misconduct under s.35.",
      provisions: ["s.7 — functions of the Bar Council of India", "s.9 — constitution of the Bar Council of India's disciplinary committees", "s.24 — enrolment", "s.35 — punishment of advocates for misconduct", "s.36 — disciplinary powers of the State Bar Council", "s.36A — stay of orders; s.36B — disposal of pending proceedings", "s.37 — appeal to the Supreme Court", "s.49(1)(c) — rule-making power in respect of professional conduct and etiquette"],
      cases: [
        { name: "Bar Council of India v. A.K. Balaji, (2018) 5 SCC 379", principle: "Foreign law firms and foreign lawyers cannot practise law in India without complying with the Advocates Act and the BCI Rules." },
      ],
      exceptions: ["The rule-making power is subject to the Act and to the approval/consultation requirements in the Act."],
      confusions: ["s.49(1)(c) → RULE-MAKING power (conduct and etiquette). s.35 → PUNISHMENT for misconduct. Do not swap them."],
      aibeFocus: ["s.49(1)(c) is the source of the professional-conduct rules."],
      flashpoints: [
        "Advocates Act s.49(1)(c) → BCI's power to frame rules on professional CONDUCT AND ETIQUETTE.",
        "s.35 → punishment of advocates for misconduct.",
        "s.37 → appeal to the Supreme Court against a Bar Council order.",
        "s.7 → functions of the Bar Council of India.",
      ],
    },
    {
      id: "t2",
      name: "Disciplinary Committees — Composition",
      concept:
        "Section 9(1) of the Advocates Act, 1961 requires a Bar Council (other than the Bar Council of India) to " +
        "constitute one or more disciplinary committees. Each committee consists of THREE members: two elected from " +
        "among the members of the Council and one co-opted, being an advocate possessing the prescribed " +
        "qualifications who is NOT a member of the Council.",
      provisions: ["s.9(1) — constitution of disciplinary committees: three members, of whom two are elected from the Council's membership and one is co-opted and is not a member of the Council", "s.9(2) — the Bar Council of India constitutes disciplinary committees", "s.35 — reference of misconduct cases", "s.42 — stay of proceedings in certain cases"],
      cases: [
        { name: "Supreme Court Bar Association v. Union of India, (1998) 4 SCC 409", principle: "An advocate found guilty of contempt is liable to punishment; the court's disciplinary jurisdiction over advocates is distinct from the Bar Council's and can be exercised concurrently." },
      ],
      exceptions: ["The Bar Council of India itself constitutes its own disciplinary committees under s.9(2)."],
      confusions: ["THREE members (two elected + one co-opted, the co-opted member not being a member of the Council). The option stating FIVE members is the standard distractor."],
      aibeFocus: ["Composition of a disciplinary committee: three members, two elected, one co-opted external advocate."],
      flashpoints: [
        "Advocates Act s.9(1) → disciplinary committee = 3 members.",
        "Two elected from the Council + ONE co-opted advocate not a member of the Council.",
        "Do NOT answer 'five members'.",
        "s.35 → misconduct proceedings; s.37 → appeal to the Supreme Court.",
      ],
    },
    {
      id: "t3",
      name: "Contingency Fees — Rule 20",
      concept:
        "Rule 20 of the Standards of Professional Conduct and Etiquette bars an advocate from stipulating for, or " +
        "receiving, any fee whose quantum is dependent upon the outcome of litigation, or from entering into any " +
        "arrangement to share in the proceeds of litigation. Contravention exposes the advocate to disciplinary action " +
        "under s.35 of the Advocates Act.",
      provisions: ["Rule 20 — no contingency fees; no sharing in the proceeds of litigation (except as permitted, e.g. by a vendor's or purchaser's claim, or the customary arrangement in the case of a suit for the recovery of a debt where the advocate's fee is a fixed percentage)", "s.35 — punishment for misconduct"],
      cases: [
        { name: "In the matter of a Senior Advocate / the Bar Council's disciplinary jurisprudence", principle: "Sharing in the fruits of litigation is treated as serious professional misconduct." },
      ],
      exceptions: ["The Rule itself recognises certain customary arrangements in specific limited contexts — but an outcome-linked fee contract in the ordinary sense is prohibited. Written client consent does NOT cure the prohibition."],
      confusions: ["Client consent is NOT a defence to Rule 20. This is the exact trap in the paper's Statement–Conclusion question."],
      aibeFocus: ["Conclusion I (client consent makes it lawful) is WRONG; Conclusion II (disciplinary action under the Act) is CORRECT."],
      flashpoints: [
        "Rule 20 → NO contingency fee; NO sharing of litigation proceeds.",
        "Client's written consent does NOT make an outcome-linked fee lawful.",
        "Breach → disciplinary action under s.35, Advocates Act 1961.",
        "Rule-making source → s.49(1)(c).",
      ],
    },
    {
      id: "t4",
      name: "Rule 8 — Appearance for Institutions",
      concept:
        "Rule 8 of the Standards of Professional Conduct and Etiquette prohibits an advocate from appearing before any " +
        "court, tribunal or authority for, or against, an organisation or institution of which he is a member of the " +
        "GOVERNING BODY or is a member of its Executive Committee, or in which he is interested otherwise than as an " +
        "advocate.",
      provisions: ["Rule 8 — restriction on appearance for/against an organisation or institution of which the advocate is a member of the Executive Committee (or is otherwise interested)", "Rule 6 — dual practice restriction", "Rule 7 — conflicts from previous employment", "Rule 9 — advocate must not act on instructions from an unqualified person"],
      cases: [
        { name: "Bar Council of India — disciplinary jurisprudence on Rule 8", principle: "An advocate who is a member of the managing/executive body of an institution cannot appear for or against that institution, owing to the conflict of interest." },
      ],
      exceptions: ["The prohibition applies by reference to the specified relationship with the institution — advisory or sub-committee membership is not the category the Rule names."],
      confusions: ["Rule 8 names the EXECUTIVE COMMITTEE / governing body membership as the disqualifying relationship. 'General Body', 'Sub-Committee' and 'Advisory Committee' are distractors."],
      aibeFocus: ["Rule 8 → Executive Committee membership."],
      flashpoints: [
        "Rule 8 → no appearance for/against an institution of which the advocate is a member of its EXECUTIVE COMMITTEE.",
        "Rule 8 addresses conflict of interest.",
        "Compare Rule 7 (previous employment) and Rule 6 (dual practice).",
      ],
    },
    {
      id: "t5",
      name: "Misconduct and Sanction — Harish Chandra Tiwari",
      concept:
        "In Harish Chandra Tiwari v. Baiju, the Supreme Court dealt with the appropriate punishment for an advocate " +
        "who had misappropriated a client's money. The Court held that misappropriation of a client's money is one of " +
        "the gravest forms of professional misconduct and ordinarily warrants removal of the advocate's name from the " +
        "State roll — a reprimand is not sufficient for first-time misappropriation.",
      provisions: ["s.35 — punishment for misconduct (reprimand, suspension, removal from the roll)", "s.35(3) — the disciplinary committee may reprimand the advocate or suspend him from practice for a period not exceeding two years, or remove his name from the State roll", "s.37 — appeal to the Supreme Court", "s.24A — disqualification for enrolment"],
      cases: [
        { name: "Harish Chandra Tiwari v. Baiju, (2002) 2 SCC 67", principle: "Misappropriation of a client's money is among the gravest forms of professional misconduct and ordinarily warrants removal of the advocate's name from the State roll. Reprimand is not the appropriate punishment for such misconduct." },
        { name: "Noratanmal Chouraria v. M.R. Murli, (2004) 5 SCC 689", principle: "Principles governing the quantum of punishment for professional misconduct — the punishment must be proportionate to the gravity of the misconduct." },
        { name: "V.C. Rangadurai v. D. Gopalan, (1979) 1 SCC 308", principle: "Professional misconduct and the standard of proof; the disciplinary jurisdiction is protective, not punitive alone." },
        { name: "P.D. Gupta v. Ram Murti, (1997) 7 SCC 147", principle: "Misappropriation of client money — suspension and removal upheld." },
      ],
      exceptions: ["The punishment must be proportionate; a single lapse combined with genuine restitution has sometimes attracted a reprimand or a short suspension, but not where the misconduct is misappropriation of client funds."],
      confusions: ["The paper's question offers 'monetary penalty equal to double the amount misappropriated' and 'reprimand' as options — both are wrong. Removal from the roll is the answer."],
      aibeFocus: ["The holding of Harish Chandra Tiwari v. Baiju: removal from the roll ordinarily warranted for misappropriation of client money."],
      flashpoints: [
        "Harish Chandra Tiwari v. Baiju, (2002) 2 SCC 67 → misappropriation of client money = gravest professional misconduct → REMOVAL from the State roll.",
        "Reprimand is NOT sufficient for misappropriation.",
        "s.35(3) sanctions → reprimand | suspension up to 2 years | removal from the roll.",
        "s.37 → appeal to the Supreme Court.",
      ],
    },
  ],
};

/* ============================== COMPANY LAW ================================*/
window.AIBE_NOTES["company"] = {
  overview:
    "Only 2 questions — but they are worth 2% of the paper, and one of them is usually about the FAST-TRACK MERGER " +
    "timeline or the class-action remedy. Learn s.233 with its numbers, and s.241/s.245 as remedies.",
  topics: [
    {
      id: "m1",
      name: "Fast-Track Merger — s.233",
      concept:
        "Section 233 of the Companies Act, 2013 provides a fast-track route for the merger of certain classes of " +
        "companies (small companies, holding and wholly-owned subsidiaries, or such other class as may be prescribed) " +
        "with the approval of the CENTRAL GOVERNMENT (through the Regional Director), without the NCLT's sanction. " +
        "The prescribed timeline for the process is sixty to ninety days.",
      provisions: ["s.230-232 — compromise, arrangement and amalgamation (NCLT route)", "s.233 — merger or amalgamation of certain companies (fast-track, Regional Director route); the notice to the Registrar and Official Liquidator; the prescribed 60-90 day timeline", "s.234 — merger of a foreign company with an Indian company", "s.235 — power to acquire shares of dissenting shareholders"],
      cases: [
        { name: "In re: Sun Pharmaceutical Industries / merger jurisprudence under s.230-232", principle:
            "The NCLT's sanction is the ordinary route; the objector's interest is protected through notice and the statutory scheme of s.232." },
      ],
      exceptions: ["Where any member or creditor objects to the scheme under s.233(1)(c), the matter is referred to the NCLT and the fast-track route is no longer available."],
      confusions: ["s.233 fast-track merger → the approval authority is the REGIONAL DIRECTOR (Central Government) within 60-90 days — NOT the NCLT, and NOT a one-year timeline. The ordinary merger under s.230-232 goes to the NCLT."],
      aibeFocus: ["s.233 → 60-90 days, and the Regional Director (Central Government) is the approving authority."],
      flashpoints: [
        "Companies Act 2013 s.233 → FAST-TRACK MERGER.",
        "Timeline → 60 to 90 DAYS.",
        "Approving authority → REGIONAL DIRECTOR (Central Government).",
        "Ordinary merger route (s.230-232) → NCLT.",
        "If a member or creditor objects → the matter goes to the NCLT.",
        "Eligible: small companies; holding company and wholly-owned subsidiary; other prescribed classes.",
      ],
    },
    {
      id: "m2",
      name: "Oppression, Mismanagement and Class Actions",
      concept:
        "Section 241 lets a member complain that the affairs of the company are being conducted in a manner " +
        "prejudicial to public interest or oppressive to any member. Section 245 provides the class-action remedy, " +
        "allowing members or depositors to sue the company, directors, auditors and advisers for damages or other " +
        "appropriate relief before the NCLT.",
      provisions: ["s.241 — application to the NCLT for relief in cases of oppression and mismanagement", "s.242 — powers of the NCLT (including reversal of transactions and compensation)", "s.244 — right to apply (10% of members or 100 members; depositors: 20% or 100 depositors)", "s.245 — class action", "s.246 — application of ss.241-245 to certain companies"],
      cases: [
        { name: "Shanti Prasad Jain v. Kalinga Tubes Ltd., AIR 1965 SC 1535", principle: "The classic oppression-and-mismanagement decision under the earlier Companies Act — scope of 'oppressive' conduct." },
        { name: "Hanuman Prasad Bagri v. Bagress Cereals Pvt. Ltd., (2001) 4 SCC 420", principle: "Continuous and persisting wrongs are necessary to found a s.397/398 petition (now s.241)." },
      ],
      exceptions: ["A single isolated act may not amount to oppression; the conduct must be burdensome, harsh and wrongful, and sustained."],
      confusions: [
        "s.241 → oppression and mismanagement (individual or joint petition; s.244 threshold).",
        "s.245 → CLASS ACTION (representative action on behalf of members or depositors, seeking damages/directions).",
        "Both routes can be available on the same facts — that is exactly the paper's Conclusion I (s.245 class action) and Conclusion II (s.241 oppression) issue.",
      ],
      aibeFocus: ["Which section gives which remedy: s.245 for class action, s.241 for oppression/mismanagement, s.242 for the reliefs the NCLT may grant."],
      flashpoints: [
        "Companies Act 2013 s.233 → fast-track merger, 60-90 days, Regional Director.",
        "s.241 → oppression and mismanagement before the NCLT.",
        "s.242 → reliefs the NCLT may grant, including reversal of transactions and compensation.",
        "s.245 → CLASS ACTION by members or depositors.",
        "s.244 → threshold for filing: 100 members or 10% of members; 100 depositors or 20%.",
      ],
    },
  ],
};

/* ============================== ENVIRONMENTAL LAW ==========================*/
window.AIBE_NOTES["environmental"] = {
  overview:
    "2 questions. The examiner goes for either (i) a specific sub-clause of s.3(2) of the Environment (Protection) " +
    "Act, 1986, or (ii) the constitutional source of Parliament's competence to legislate on the environment.",
  topics: [
    {
      id: "n1",
      name: "Constitutional and Environmental Framework",
      concept:
        "Environmental protection is primarily a State List subject. Parliament's power to legislate on the " +
        "environment flows largely from Article 253 — the power to make laws to implement international agreements " +
        "(the Stockholm Declaration 1972 and the Rio Summit laid the basis for the Water Act 1974, the Air Act 1981 " +
        "and the Environment (Protection) Act 1986). Article 21 has been read to include the right to a clean and " +
        "healthy environment; Article 48A and Article 51A(g) supply the directive and fundamental-duties dimension.",
      provisions: ["Article 21 — right to a clean and healthy environment", "Article 48A — State's duty to protect and improve the environment", "Article 51A(g) — fundamental duty of every citizen", "Article 253 — legislation to implement international agreements", "Article 249, 250, 252 — alternative legislative routes", "Water Act 1974; Air (Prevention and Control of Pollution) Act 1981; Environment (Protection) Act 1986; NGT Act 2010"],
      cases: [
        { name: "Subhash Kumar v. State of Bihar, (1991) 1 SCC 598", principle: "Right to a clean environment is part of Article 21." },
        { name: "Virender Gaur v. State of Haryana, (1995) 2 SCC 577", principle: "Environmental protection is an element of the right to life." },
        { name: "M.C. Mehta v. Union of India, (1987) 1 SCC 395", principle: "Absolute liability for hazardous enterprises; the EP Act 1986 was upheld." },
      ],
      exceptions: ["Article 48A and Article 51A are not enforceable by themselves — they inform the interpretation of Article 21."],
      confusions: [
        "Article 253 (international agreements) is the legislative source for the Air Act 1981 and the EP Act 1986. Not Article 252 (State consent) and not Article 249 (Rajya Sabha resolution).",
        "Article 51A(g) creates a DUTY on citizens; Article 48A creates a DUTY on the State. Both are non-enforceable by themselves.",
      ],
      aibeFocus: ["Which Article is the legislative basis for the Air Act 1981 and the EP Act 1986 → Article 253."],
      flashpoints: [
        "Article 253 → Parliament may legislate to implement INTERNATIONAL agreements (the source for the Air Act 1981 and EP Act 1986).",
        "Article 48A → State's duty to protect the environment (Directive Principle).",
        "Article 51A(g) → citizens' fundamental duty (Part IVA).",
        "Article 21 → right to clean and healthy environment (Subhash Kumar).",
        "M.C. Mehta (1987) 1 SCC 395 → absolute liability; EP Act 1986 upheld.",
      ],
    },
    {
      id: "n2",
      name: "Environment (Protection) Act 1986 — s.3(2)",
      concept:
        "Section 3(1) empowers the Central Government to take all such measures as it deems necessary for protecting " +
        "and improving the environment. Section 3(2) enumerates without prejudice to the generality of s.3(1) the " +
        "specific matters on which rules may be made — co-ordination of action, planning and execution of a " +
        "nation-wide programme, laying down standards for the quality of the environment, restriction of areas, " +
        "laying down procedures and safeguards for handling hazardous substances, and so on.",
      provisions: [
        "s.2 — definitions (environment, environmental pollutant, environmental pollution, hazardous substance)",
        "s.3(1) — power of the Central Government to take measures to protect and improve the environment",
        "s.3(2) — specific matters on which measures may be taken, including: (i) co-ordination of actions of State Governments; (ii) PLANNING AND EXECUTION of a NATION-WIDE PROGRAMME for the prevention, control and abatement of environmental pollution; (iii) LAYING DOWN STANDARDS for the quality of the environment; (iv) restriction of areas in which industries or processes shall not be carried on; (v) laying down procedures and safeguards for the handling of hazardous substances",
        "s.5 — power to issue directions (including closure, prohibition, regulation)",
        "s.15 — penalties (as amended)",
        "s.19 — cognizance of offences",
      ],
      cases: [
        { name: "Vellore Citizens' Welfare Forum v. Union of India, (1996) 5 SCC 647", principle: "Precautionary principle and polluter-pays principle recognised as part of the law of the land; the EP Act 1986 was upheld." },
        { name: "A.P. Pollution Control Board v. Prof. M.V. Nayudu, (1999) 2 SCC 718", principle: "Precautionary principle and the burden of proof; the role of the NGT/pollution control boards." },
      ],
      exceptions: ["Section 3(2) is 'without prejudice' to s.3(1) — so the enumerated matters are illustrative and do not cut down the general power."],
      confusions: [
        "Collection and dissemination of information, carrying out investigations and research, inspection of plant and equipment — these are all matters listed under s.3(2) in other sub-clauses. Read the specific sub-clause number in the question before choosing.",
        "s.5 (directions) ≠ s.3(2) (matters on which measures may be taken).",
      ],
      aibeFocus: ["Which of the listed powers falls within s.3(2)(ii) specifically — planning and execution of a NATION-WIDE PROGRAMME for prevention, control and abatement of pollution."],
      flashpoints: [
        "EP Act 1986 s.3(1) → general power to take measures.",
        "s.3(2) → the enumerated list; s.3(2)(ii) → PLANNING AND EXECUTION of a NATION-WIDE PROGRAMME.",
        "s.3(2) is 'without prejudice' to s.3(1) → illustrative, not exhaustive.",
        "s.5 → power to issue directions.",
        "s.15 → penalties; s.19 → cognizance of offences.",
        "Precautionary principle + polluter pays → Vellore Citizens' Welfare Forum (1996) 5 SCC 647.",
      ],
    },
  ],
};

/* ============================== CYBER LAW ==================================*/
window.AIBE_NOTES["cyber"] = {
  overview:
    "2 questions. The examiner's two favoured targets are (i) the meaning of 'electronic record' under the IT Act, " +
    "and (ii) the civil-liability versus criminal-liability distinction (s.43 versus s.66).",
  topics: [
    {
      id: "y1",
      name: "Electronic Records under the IT Act, 2000",
      concept:
        "'Electronic record' means data, record or data generated, image or sound stored, received or sent in an " +
        "electronic form or micro film or computer-generated micro fiche. Information recorded only on paper without " +
        "any electronic processing is NOT an electronic record.",
      provisions: ["s.2(1)(t) — 'electronic record' (data, record or data generated, image or sound stored, received or sent in an electronic form or micro film or computer-generated micro fiche)", "s.2(1)(o) — 'data'", "s.2(1)(p) — 'digital signature'", "s.2(1)(ta) — 'electronic signature'", "s.4 — legal recognition of electronic records", "s.5 — legal recognition of electronic signatures", "s.10A — validity of contracts formed through electronic means"],
      cases: [
        { name: "Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473", principle: "Electronic records are documents; their admissibility is governed by s.65B of the Evidence Act (now BSA s.63)." },
        { name: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1", principle: "Certificate requirement under s.65B(4) is a condition precedent, but it may be produced later with the court's leave." },
      ],
      exceptions: ["Paper records that have not been subjected to any electronic processing are outside the definition."],
      confusions: ["Microfilm and computer-generated microfiche ARE within the definition. A document recorded only on paper WITHOUT electronic processing is NOT."],
      aibeFocus: ["Statements I-IV: digital data, image/sound stored or transmitted electronically, and microfilm/microfiche are all in; paper-only records are out."],
      flashpoints: [
        "IT Act s.2(1)(t) → 'electronic record' = data, record or data generated, image or sound stored/received/sent in electronic form or MICRO FILM or COMPUTER-GENERATED MICRO FICHE.",
        "Paper-only records with no electronic processing → NOT electronic records.",
        "s.4 → legal recognition of electronic records; s.5 → electronic signatures.",
        "Anvar v. Basheer (2014) → electronic record is a document; s.65B mandatory.",
      ],
    },
    {
      id: "y2",
      name: "Civil vs Criminal Liability — s.43 and s.66",
      concept:
        "Section 43 creates a CIVIL liability to pay compensation for unauthorised access, downloading, copying, " +
        "introduction of viruses, damage, disruption, denial of access and similar acts. Section 66 makes the same " +
        "conduct a CRIMINAL offence where it is done DISHONESTLY OR FRAUDULENTLY. The distinguishing element is the " +
        "dishonest or fraudulent intent — not the amount of damage and not the choice of the affected party.",
      provisions: [
        "s.43 — penalty and compensation for damage to computer, computer system, etc. (civil)",
        "s.43A — compensation for failure to protect data (body corporate)",
        "s.44 — penalty for failure to furnish information, return, etc.",
        "s.45 — residuary penalty",
        "s.65 — tampering with computer source documents",
        "s.66 — computer-related offences: if any person dishonestly or fraudulently does any act referred to in s.43, he shall be punishable with imprisonment up to three years or with fine up to five lakh rupees or with both",
        "s.66C — identity theft; s.66D — cheating by personation by using computer resource; s.66E — violation of privacy",
        "s.67 — publishing obscene material in electronic form",
        "s.69 — power to issue directions for interception; s.69A — blocking; s.72A — disclosure of information in breach of lawful contract",
        "s.75 — extra-territorial application",
      ],
      cases: [
        { name: "Shreya Singhal v. Union of India, (2015) 5 SCC 1", principle: "Struck down s.66A for vagueness and chilling effect on free speech; upheld s.69A and s.79 subject to safeguards." },
        { name: "Amish Devgan v. Union of India, (2021) 1 SCC 1", principle: "Discussion of the harm principle and the limits of criminalisation in the cyber speech context." },
      ],
      exceptions: ["A civil claim under s.43 requires no dishonest intention; criminal liability under s.66 requires it. There is no requirement that the damage exceed a monetary threshold in order to attract criminal liability."],
      confusions: [
        "The trigger for criminal liability is the DISHONEST OR FRAUDULENT intention, not the monetary value of the damage and not the complainant's choice of forum.",
        "s.43 is civil; s.66 is criminal — the paper tests exactly this boundary.",
      ],
      aibeFocus: ["When conduct attracts criminal punishment rather than mere compensation → when done dishonestly or fraudulently in addition to unauthorised access."],
      flashpoints: [
        "s.43 → CIVIL liability (compensation) for unauthorised access and damage.",
        "s.66 → CRIMINAL liability where the s.43 act is done DISHONESTLY or FRAUDULENTLY.",
        "s.66A → STRUCK DOWN in Shreya Singhal (2015) 5 SCC 1.",
        "s.66C → identity theft; s.66D → cheating by personation; s.67 → obscene material.",
        "Monetary value of the damage is NOT the test for criminal liability.",
      ],
    },
  ],
};

/* ============================== LABOUR & INDUSTRIAL LAW ====================*/
window.AIBE_NOTES["labour"] = {
  overview:
    "4 questions allotted. Set A's questions came from the Minimum Wages Act, the Industrial Disputes Act and the " +
    "labour codes. The likely extra question is on the constitutional dimension (Article 23/24) or the four labour " +
    "codes' coverage.",
  topics: [
    {
      id: "b1",
      name: "Minimum Wages Act 1948",
      concept:
        "Section 5 of the Minimum Wages Act, 1948 lays down the detailed procedure for fixing or revising minimum " +
        "wages. The appropriate Government may fix or revise the minimum rates of wages by notification in the " +
        "Official Gazette, after considering the advice of the committees appointed and all representations received " +
        "before the date notified in the Gazette notification. Where a date is specified in the notification, the " +
        "minimum rates come into force from that date; where no date is specified, they come into force on the expiry " +
        "of three months from the date of issue of the notification.",
      provisions: [
        "s.2 — definitions ('appropriate Government', 'employer', 'scheduled employment', 'wages')",
        "s.3 — fixing of minimum rates of wages",
        "s.4 — minimum rate of wages (basic rate, special allowance, cash value of concessions)",
        "s.5 — procedure for fixing and revising minimum wages: (i) the committee method; (ii) the notification method — after considering the advice of committees and representations received before the notified date, the appropriate Government may by notification fix or revise minimum rates; s.5(2) — when a date is specified the rates take effect from that date, and when no date is specified they take effect on the expiry of three months from the date of issue of the notification",
        "s.12 — payment of minimum rates of wages",
        "s.22 — penalties for paying less than the minimum rates",
        "Code on Wages 2019 — the successor regime",
      ],
      cases: [
        { name: "Sanjit Roy v. State of Rajasthan, (1983) 1 SCC 525", principle: "Payment of less than the minimum wage to a person employed on a famine relief work violates Article 23 — forced labour." },
        { name: "People's Union for Democratic Rights v. Union of India, (1982) 3 SCC 235", principle: "Payment of less than the minimum wage amounts to forced labour under Article 23." },
      ],
      exceptions: ["Different minimum rates may be fixed for different scheduled employments, different classes of work, adults, adolescents, children and apprentices, and different localities."],
      confusions: ["Where a date IS specified → the rates take effect from that date. Where NO date is specified → three months from the date of issue of the notification. Both conclusions in the paper's question can be correct together."],
      aibeFocus: ["Both conclusions in the statement-conclusion question are correct: specified date → that date; no date → expiry of three months."],
      flashpoints: [
        "Minimum Wages Act s.5 → procedure for fixing/revising minimum wages.",
        "Date specified in the notification → rates take effect from THAT DATE.",
        "No date specified → rates take effect on the EXPIRY OF THREE MONTHS from the date of issue.",
        "s.5 requires consideration of the advice of committees AND representations received before the notified date.",
        "Paying less than the minimum wage → Article 23 forced labour (PUDR, 1982).",
      ],
    },
    {
      id: "b2",
      name: "Industrial Disputes Act 1947 — 'Industry' and Retrenchment",
      concept:
        "Section 2(j) defines 'industry' as any business, trade, undertaking, manufacture or calling of employers, " +
        "and includes any calling, service, employment, handicraft or industrial occupation or avocation of " +
        "workmen. The dominant nature test from Bangalore Water Supply determines whether an establishment is an " +
        "industry. Section 25F imposes conditions precedent to retrenchment.",
      provisions: [
        "s.2(j) — 'industry'",
        "s.2(k) — 'industrial dispute'",
        "s.2(s) — 'workman'",
        "s.25F — conditions precedent to retrenchment of workmen: one month's notice or wages in lieu, and compensation at the rate of fifteen days' average pay for every completed year of continuous service",
        "s.25N — conditions precedent to closure",
        "s.11A — powers of labour courts and tribunals",
      ],
      cases: [
        { name: "Bangalore Water Supply & Sewerage Board v. A. Rajappa, (1978) 2 SCC 213", principle: "Triple test and dominant nature test for 'industry'; a charitable or philanthropic activity may still be an industry if it is organised like a business, has employees and involves the production or distribution of goods or services." },
        { name: "State of U.P. v. Jai Bir Singh, (2005) 5 SCC 1", principle: "Reference to a larger Bench on the correctness of Bangalore Water Supply; discusses the effect of the subsequent statutory amendments." },
        { name: "Coir Board, Ernakulam v. Indira Devi P.S., (1998) 3 SCC 259", principle: "Whether a body discharging statutory functions is an industry." },
      ],
      exceptions: ["Sovereign functions of the State, purely administrative functions and certain domestic/charitable activities have been held not to be an industry — but this depends on the dominant nature of the activity."],
      confusions: ["A charitable trust engaging in multifarious activities including commercial ventures, hiring employees in an organised manner with proper remuneration, IS likely to be an industry — the dominant nature test governs. The Assertion–Reason question turns on this."],
      aibeFocus: ["The 'industry' test where a charitable trust engages in organised activity with paid employees."],
      flashpoints: [
        "ID Act s.2(j) → 'industry'; dominant nature test (Bangalore Water Supply).",
        "Charitable trust with organised, commercial, paid activity → CAN be an industry.",
        "s.25F → conditions precedent to retrenchment (notice + 15 days' pay per completed year).",
        "s.2(s) → 'workman'.",
        "Bangalore Water Supply (1978) 2 SCC 213 → the leading case.",
      ],
    },
    {
      id: "b3",
      name: "The Labour Codes 2019-2020",
      concept:
        "Four codes consolidate twenty-nine central labour statutes: the Code on Wages 2019, the Industrial Relations " +
        "Code 2020, the Code on Social Security 2020 and the Occupational Safety, Health and Working Conditions Code " +
        "2020. Critically, the Industrial Relations Code subsumes the Trade Unions Act 1926, the Industrial Disputes " +
        "Act 1947 and the Industrial Employment (Standing Orders) Act 1946 — but NOT the Industries (Development and " +
        "Regulation) Act 1951.",
      provisions: [
        "Code on Wages 2019 — Payment of Wages Act 1936, Minimum Wages Act 1948, Payment of Bonus Act 1965, Equal Remuneration Act 1976",
        "Industrial Relations Code 2020 — Trade Unions Act 1926, Industrial Disputes Act 1947, Industrial Employment (Standing Orders) Act 1946",
        "Code on Social Security 2020 — Employees' Compensation Act 1923, ESI Act 1948, EPF & MP Act 1952, Maternity Benefit Act 1961, and others",
        "OSH Code 2020 — Factories Act 1948, Contract Labour (Regulation and Abolition) Act 1970, and others",
        "IDR Act 1951 — NOT subsumed in the Industrial Relations Code 2020",
      ],
      cases: [
        { name: "Rojer Mathew v. South Indian Bank Ltd., (2020) 6 SCC 1", principle: "Tribunal framework and the conditions of service of tribunal members — relevant to the labour adjudication machinery." },
      ],
      exceptions: ["The IDR Act 1951 remains outside the four labour codes — this is the point the paper's question tests."],
      confusions: ["The Industrial Relations Code 2020 subsumes the Trade Unions Act 1926, the ID Act 1947 and the Standing Orders Act 1946, but NOT the IDR Act 1951. The question asks which is NOT included — the answer is the IDR Act 1951."],
      aibeFocus: ["Memorise the three Acts subsumed by the Industrial Relations Code 2020, and remember that the IDR Act 1951 is not one of them."],
      flashpoints: [
        "Industrial Relations Code 2020 → Trade Unions Act 1926 + Industrial Disputes Act 1947 + Standing Orders Act 1946.",
        "IDR Act 1951 → NOT subsumed (the odd one out).",
        "Code on Wages 2019 → Minimum Wages Act, Payment of Wages Act, Payment of Bonus Act, Equal Remuneration Act.",
        "Code on Social Security 2020 → ESI, EPF, Maternity Benefit, Employees' Compensation.",
        "Four codes, replacing 29 central labour laws.",
      ],
    },
    {
      id: "b4",
      name: "Constitutional Labour Rights",
      concept:
        "Articles 23 and 24 are the enforceable fundamental rights in the labour context; Articles 39, 41-43A are " +
        "directive principles. The Supreme Court has treated the payment of less than the minimum wage as forced " +
        "labour and has derived a right to livelihood from Article 21.",
      provisions: ["Article 23 — prohibition of forced labour", "Article 24 — prohibition of employment of children below 14 years", "Article 39(d) — equal pay for equal work", "Article 41 — right to work", "Article 42 — just and humane conditions of work, maternity relief", "Article 43 — living wage", "Article 43A — participation of workers in management", "Article 21 — right to livelihood"],
      cases: [
        { name: "Olga Tellis v. Bombay Municipal Corporation, (1985) 3 SCC 545", principle: "Right to livelihood is an integral facet of the right to life under Article 21." },
        { name: "Bandhua Mukti Morcha v. Union of India, (1984) 3 SCC 161", principle: "Bonded labour; Article 21 + Article 23; right to live with human dignity." },
      ],
      exceptions: ["Directive principles are not enforceable by themselves."],
      confusions: ["Article 23/24 are enforceable fundamental rights; Article 39/41-43A are not. The paper routinely mixes the two."],
      aibeFocus: ["Which labour provisions are in Part III (justiciable) and which in Part IV (not justiciable)."],
      flashpoints: [
        "Article 23 → forced labour (justiciable).",
        "Article 24 → child labour below 14 years (justiciable).",
        "Article 39(d) → equal pay for equal work (Directive Principle).",
        "Article 43 → living wage (Directive Principle).",
        "Olga Tellis (1985) 3 SCC 545 → right to livelihood under Article 21.",
      ],
    },
  ],
};
