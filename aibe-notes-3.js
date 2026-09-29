/* ============================================================================
 * AIBE XXI — Study notes, batch 3
 * Tort (+MV Act, Consumer) | Taxation | Contract/Specific Relief/Property/NI |
 * Land Acquisition | Intellectual Property
 * ==========================================================================*/
window.AIBE_NOTES = window.AIBE_NOTES || {};

/* ============================== TORT =======================================*/
window.AIBE_NOTES["tort"] = {
  overview:
    "5 questions. Set A drew one pure tort question (eggshell skull), one consumer question (JDA landowner), and two " +
    "Motor Vehicles Act questions. Expect at least one question on a doctrine and one on a statutory number.",
  topics: [
    {
      id: "o1",
      name: "The Eggshell Skull Rule",
      concept:
        "The eggshell skull (thin skull) rule provides that a tortfeasor must take his victim as he finds him. Where " +
        "the injury inflicted is a foreseeable kind of harm, the wrongdoer is liable for the FULL extent of the harm, " +
        "even if the victim's peculiar susceptibility (a pre-existing physical, mental or pathological condition) " +
        "made the consequence far more serious than it would have been for an ordinary person. In nervous-shock " +
        "cases the rule is applied with the qualification that the shock must have been reasonably foreseeable to an " +
        "ordinarily strong-nerved person in the claimant's position.",
      provisions: ["Not statutory — a common law principle of tortious liability", "Applied in fatal-accident and personal-injury claims, including claims before Motor Accident Claims Tribunals"],
      cases: [
        { name: "Dulieu v. White, (1901) 2 KB 669", principle: "The origin of the rule — the defendant must take the plaintiff as he finds him; recovery for nervous shock where the fear of immediate personal injury was reasonably foreseeable." },
        { name: "Smith v. Leech Brain & Co. Ltd., (1962) 2 QB 405", principle: "The thin skull rule applied: the defendant was liable for death caused by cancer triggered by a burn, because the burn was the foreseeable injury." },
        { name: "Robinson v. Post Office, (1974) 1 WLR 1176", principle: "The thin skull rule applies to both physical and psychological vulnerability." },
        { name: "Overseas Tankship (U.K.) Ltd. v. Morts Dock & Engineering Co. Ltd. (The Wagon Mound), (1961) AC 388", principle: "Remoteness of damage — the extent of the damage need not be foreseeable; only the kind of damage must be foreseeable." },
      ],
      exceptions: ["The rule does NOT make the defendant liable for an unforeseeable KIND of damage — only for the unforeseeable EXTENT of a foreseeable kind of damage.", "Where the injury itself is not caused by the defendant's negligence, the rule cannot be invoked."],
      confusions: [
        "The eggshell skull rule is about the EXTENT of damage, not its kind. An example that does not involve a pre-existing peculiar susceptibility — such as a surgical needle left inside a patient, or a driver's straightforward negligence — is NOT an instance of the rule.",
        "Nervous shock and eggshell skull are related but distinct doctrines.",
      ],
      aibeFocus: ["Identify which of four illustrations is NOT an eggshell-skull case. A retained surgical needle and a road-accident fatality are negligence, not thin-skull cases; the classroom kick aggravating an unknown microbial condition IS; the nervous-shock illustration IS."],
      flashpoints: [
        "Eggshell skull rule → take your victim as you find him.",
        "The defendant is liable for the FULL extent of the harm, even if unforeseeably severe.",
        "The KIND of damage must be foreseeable; the EXTENT need not be.",
        "Dulieu v. White (1901) 2 KB 669 → origin of the rule.",
        "Smith v. Leech Brain (1962) 2 QB 405 → burn triggered cancer; full liability.",
        "A case with no pre-existing susceptibility is NOT an eggshell-skull case.",
      ],
    },
    {
      id: "o2",
      name: "Negligence, Nervous Shock and Strict Liability",
      concept:
        "Negligence requires duty, breach, causation and damage. *Res ipsa loquitur* shifts the evidential burden to " +
        "the defendant where the thing that caused the injury was under the defendant's exclusive control and the " +
        "accident is one that does not ordinarily happen without negligence. Where an enterprise is engaged in a " +
        "hazardous activity, the Supreme Court has imposed ABSOLUTE liability — stricter than the English rule in " +
        "*Rylands v. Fletcher*.",
      provisions: ["Common law principles; no single Indian statute", "Constitutional dimension: Article 21 — the right to health and safety (M.C. Mehta)"],
      cases: [
        { name: "Rylands v. Fletcher, (1868) LR 3 HL 330", principle: "Strict liability for the escape of a dangerous thing brought onto land; subject to exceptions (act of God, act of a stranger, consent, statutory authority)." },
        { name: "M.C. Mehta v. Union of India, (1987) 1 SCC 395", principle: "Absolute liability — no exceptions, for enterprises engaged in a hazardous or inherently dangerous activity; compensation determined by the magnitude and capacity of the enterprise." },
        { name: "Donoghue v. Stevenson, (1932) AC 562", principle: "The neighbour principle — the duty of care." },
        { name: "Municipal Corporation of Delhi v. Subhagwanti, AIR 1966 SC 1750", principle: "Res ipsa loquitur in the context of a collapsing clock tower." },
      ],
      exceptions: ["Absolute liability under M.C. Mehta admits of NO exceptions — that is what distinguishes it from Rylands v. Fletcher's strict liability."],
      confusions: ["Strict liability (Rylands v. Fletcher, with exceptions) ≠ absolute liability (M.C. Mehta, no exceptions). This distinction is a classic."],
      aibeFocus: ["Absolute liability — no exceptions, no defences."],
      flashpoints: [
        "Negligence → duty, breach, causation, damage.",
        "Res ipsa loquitur → the thing speaks for itself; the burden shifts to the defendant.",
        "Rylands v. Fletcher (1868) → STRICT liability WITH exceptions.",
        "M.C. Mehta (1987) 1 SCC 395 → ABSOLUTE liability, NO exceptions.",
        "Donoghue v. Stevenson (1932) AC 562 → the neighbour principle.",
      ],
    },
    {
      id: "o3",
      name: "Consumer Protection Act 2019",
      concept:
        "'Consumer' means a person who buys any goods or hires or avails of any service for a consideration, but " +
        "does NOT include a person who obtains such goods or services for RESALE or for a COMMERCIAL PURPOSE. The " +
        "Act also introduces 'unfair contracts' and 'product liability', and provides for one-sided agreements and " +
        "Central/State Consumer Protection Authorities.",
      provisions: [
        "s.2(7) — 'consumer' (excludes goods/services obtained for resale or commercial purpose; includes e-commerce transactions; excludes a person who avails a service for a commercial purpose other than for earning his livelihood by means of self-employment)",
        "s.2(28) — 'restrictive trade practice'; s.2(47) — 'unfair trade practice'",
        "s.2(46) — 'unfair contract' (an agreement between a consumer and a manufacturer/service provider which is one-sided and causes a significant change in the rights of the consumer)",
        "s.2(34) — 'product liability'; s.82-87 — liability of product manufacturers, product service providers and product sellers",
        "s.2(4) — 'complaint'; s.35 — complaint by a consumer; s.38 — District Commission; s.47 — State Commission; s.58 — National Commission",
        "s.17-18 — Central and State Consumer Protection Councils; s.10 — Central Consumer Protection Authority",
        "s.38(7) pecuniary jurisdiction of the District Commission (as amended)",
      ],
      cases: [
        { name: "Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan, (2019) 5 SCC 725", principle: "An unfair one-sided clause in a builder's agreement cannot be enforced against a consumer — the 'one-sided agreement' principle." },
        { name: "Bunga Daniel Babu v. Sri Vasudeva Constructions, (2016) 8 SCC 683", principle: "A joint development agreement where the landowner contributes land for a share of the constructed area is a commercial venture; where the landowner and builder are equally involved in the business of development, the landowner is not a 'consumer'." },
        { name: "Ganeshlal v. Shyam, (2014) 2 CPJ 78 (NC)", principle: "Joint development agreement partner — not a consumer where the transaction is commercial in nature." },
        { name: "LDA v. M.K. Gupta, (1994) 1 SCC 243", principle: "Deficiency in service; statutory authorities are amenable to consumer jurisdiction for their service functions." },
        { name: "Indian Medical Association v. V.P. Shantha, (1995) 6 SCC 651", principle: "Medical services fall within the Act; distinction between gratuitous and paid services." },
      ],
      exceptions: ["A person who buys goods for resale or for a commercial purpose is excluded. A self-employed person earning a livelihood is not excluded.", "Where a landowner enters into a Joint Development Agreement, contributing land in return for a share of the developed property plus a monetary deposit, and is equally involved in the development business, the transaction is commercial and the landowner is NOT a consumer."],
      confusions: [
        "The mere fact that the landowner did not construct the building himself does NOT make him a consumer.",
        "The existence of defects does NOT by itself confer consumer status — the nature of the transaction (commercial vs personal) is the test.",
        "s.2(46) unfair contracts and one-sided agreements are separately defined — 'one-sided agreements' are the expression used in the Act for unfair contracts.",
      ],
      aibeFocus: ["Two likely questions: (i) whether a JDA landowner is a consumer (answer: generally NOT, if the transaction is commercial); (ii) what 'one-sided agreements' means under the Act."],
      flashpoints: [
        "CPA 2019 s.2(7) → 'consumer' EXCLUDES resale and commercial purpose.",
        "JDA landowner + builder sharing developed property + monetary deposit → COMMERCIAL joint venture → NOT a consumer.",
        "s.2(46) → 'unfair contract' — the one-sided agreement provision.",
        "s.2(34) & ss.82-87 → product liability.",
        "Pioneer Urban Land (2019) 5 SCC 725 → one-sided clause unenforceable.",
        "Bunga Daniel Babu (2016) 8 SCC 683 → JDA partner is not a consumer.",
      ],
    },
    {
      id: "o4",
      name: "Motor Vehicles Act 1988",
      concept:
        "Compulsory third-party insurance, claims tribunals and the compensation scheme are the statutory heart of " +
        "road-accident liability. In addition the Act and the Central Motor Vehicles Rules prescribe environmental " +
        "and safety requirements such as the Pollution Under Control (PUC) certificate and the mandatory pre-fitment " +
        "of High Security Registration Plates (HSRP) for new vehicles.",
      provisions: [
        "s.2(30) — 'owner'; s.2(47) — 'transport vehicle'",
        "s.140-144 — no-fault liability",
        "s.145-164 — compulsory third-party insurance; s.149 — duty of insurers to satisfy judgments",
        "s.165-176 — Claims Tribunals; s.166 — application for compensation; s.168 — award of the Claims Tribunal",
        "s.161 — hit-and-run compensation scheme",
        "s.190(2) — penalty for driving without a valid PUC certificate (originally s.190(2); renumbered after the 2019 amendments); Central Motor Vehicles Rules 1989 (Rules relating to PUC certification)",
        "Mandatory pre-fitment of HSRP for all new vehicles — brought into effect by the Central Motor Vehicles (Fourteenth Amendment) Rules, 2018, with compliance mandated for new vehicles from 1 April 2019",
      ],
      cases: [
        { name: "Sarla Verma v. Delhi Transport Corporation, (2009) 6 SCC 121", principle: "Multiplier method for computing compensation in fatal-accident cases; deduction for personal expenses." },
        { name: "National Insurance Co. Ltd. v. Pranay Sethi, (2017) 16 SCC 680", principle: "Consolidated principles for computing compensation — future prospects, multiplier, conventional heads; overruled Sarla Verma on certain points." },
        { name: "Mukund Dewangan v. Oriental Insurance Co. Ltd., (2017) 14 SCC 663", principle: "Licensing requirements for transport vehicles — the interpretation of 'transport vehicle' in the licence context." },
      ],
      exceptions: ["An insurer is not liable where the vehicle was used for a purpose not permitted by the policy, or by a person not holding a valid licence, subject to statutory exceptions."],
      confusions: [
        "HSRP pre-fitment for all new vehicles was mandated with effect from 1 April 2019 (following the 2018 amendment), so the commencement year asked for is 2019.",
        "PUC certification is under the Motor Vehicles Act and the Central Motor Vehicles Rules — know the section and rule numbers as they appear in your current Bare Act, since the 2019 amendments renumbered several provisions.",
      ],
      aibeFocus: ["HSRP year (2019) and the source of the PUC requirement."],
      flashpoints: [
        "Compulsory third-party insurance → MV Act 1988 ss.145-164.",
        "Claims Tribunal → s.165-176; award under s.168.",
        "Hit and run → s.161 scheme.",
        "PUC certificate → mandatory under the MV Act and the Central Motor Vehicles Rules.",
        "HSRP pre-fitment for all new vehicles → mandatory with effect from 1 APRIL 2019.",
        "Sarla Verma (2009) 6 SCC 121 and Pranay Sethi (2017) 16 SCC 680 → compensation computation.",
      ],
    },
  ],
};

/* ============================== TAXATION ===================================*/
window.AIBE_NOTES["taxation"] = {
  overview:
    "4 questions — one of the easiest scoring blocks in the paper because it repeats the same handful of ideas: " +
    "exemptions, deductions, gifts, and the previous-year/assessment-year relationship. Learn s.10(37), s.56(2)(x), " +
    "the Chapter VI-A scheme, and s.2(9)/s.3.",
  topics: [
    {
      id: "x1",
      name: "Basic Scheme — Previous Year and Assessment Year",
      concept:
        "Income-tax is levied on the total income of a person for the PREVIOUS YEAR. Income earned during the " +
        "previous year is assessed to tax in the immediately succeeding ASSESSMENT YEAR. This temporal relationship " +
        "is the foundation of the whole scheme and is tested both directly and in Assertion–Reason form.",
      provisions: ["s.2(9) — 'assessment year' (the period of twelve months commencing on the first day of April)", "s.3 — 'previous year'", "s.4 — charge of income-tax (for any assessment year, in respect of the total income of the previous year)", "s.5 — scope of total income (residence-based)", "s.6 — residence in India", "s.7-9 — income deemed to be received/accruing in India"],
      cases: [
        { name: "CIT v. Vatika Township Pvt. Ltd., (2015) 1 SCC 1", principle: "Presumption against retrospectivity of taxing statutes; discussion of the rationale of the previous-year/assessment-year scheme." },
      ],
      exceptions: ["Where income cannot be taxed in the previous year (e.g. a business newly set up or a source newly coming into existence), the assessment year may be treated as the previous year."],
      confusions: ["Assessment year FOLLOWS the previous year. Be careful with Assertion–Reason questions on this — the Assertion 'income-tax is levied on the total income of a person for the previous year' is TRUE and the Reason 'income earned during the previous year is assessed in the immediately succeeding assessment year' is ALSO TRUE and it does explain the Assertion."],
      aibeFocus: ["The Assertion–Reason relationship on previous year/assessment year — both true, and the reason explains the assertion."],
      flashpoints: [
        "s.2(9) → 'assessment year' = 12 months from 1 April.",
        "s.3 → 'previous year'.",
        "s.4 → charge on the total income of the previous year at the rates prescribed by the Finance Act.",
        "Income of the previous year → taxed in the immediately succeeding ASSESSMENT YEAR.",
        "Assessment year FOLLOWS the previous year.",
      ],
    },
    {
      id: "x2",
      name: "Exemptions — s.10(37) and Agricultural Income",
      concept:
        "Compensation received on the compulsory acquisition of agricultural land is dealt with specifically. " +
        "Individual and HUF recipients of compensation on compulsory acquisition of agricultural land used for " +
        "agricultural purposes are exempt under s.10(37), subject to fulfilment of the prescribed conditions.",
      provisions: [
        "s.2(1A) — 'agricultural income'",
        "s.10(1) — agricultural income is exempt",
        "s.10(37) — exemption for capital gains on compulsory acquisition of agricultural land (individual/HUF; the land must have been used for agricultural purposes for the prescribed period before acquisition; the compensation must be received as consideration for compulsory acquisition)",
        "s.10(2A), 10(10D), 10(13A) — other common exemptions",
        "s.45 — capital gains on transfer",
        "s.54B — capital gains exemption on the transfer of agricultural land",
      ],
      cases: [
        { name: "CIT v. Raja Benoy Kumar Sahas Roy, AIR 1957 SC 768", principle: "Definition and scope of 'agricultural income' — basic operations and subsequent operations." },
      ],
      exceptions: ["Agricultural income is exempt only if it satisfies the statutory definition; the exemption under s.10(37) requires the conditions in that sub-section to be satisfied, including that the land was used for agricultural purposes for the prescribed period immediately before acquisition."],
      confusions: ["s.10(37) does NOT make the compensation always taxable. It is EXEMPT subject to conditions. An option saying 'it is always taxable' is wrong."],
      aibeFocus: ["The correct legal position on s.10(37): compensation received on compulsory acquisition of agricultural land used for agricultural purposes is EXEMPT, subject to the prescribed conditions."],
      flashpoints: [
        "s.10(1) → agricultural income exempt.",
        "s.10(37) → compensation on COMPULSORY ACQUISITION of AGRICULTURAL LAND is EXEMPT, subject to CONDITIONS.",
        "s.10(37) applies to an individual or a Hindu Undivided Family.",
        "The land must have been used for agricultural purposes for the prescribed period before acquisition.",
        "s.54B → separate exemption on the transfer of agricultural land.",
      ],
    },
    {
      id: "x3",
      name: "Income from Other Sources — s.56(2)(x)",
      concept:
        "Where any person receives, in any previous year, from any person or persons on or after 1 April 2017 " +
        "property (including money) without consideration, or for inadequate consideration, and the aggregate value " +
        "of which exceeds the prescribed monetary limit, the value of the property so received is chargeable to " +
        "income-tax under the head 'INCOME FROM OTHER SOURCES'.",
      provisions: [
        "s.56(1) — charge on income from other sources",
        "s.56(2)(x) — receipt of money or property without consideration or for inadequate consideration; chargeable under Income from Other Sources if the aggregate exceeds the prescribed limit",
        "Exceptions within s.56(2)(x) — receipts from RELATIVES; on the occasion of the individual's marriage; under a will or inheritance; on the occasion of the death of the payer; from a local authority, fund or institution registered under s.12AA or s.10(23C), etc.",
        "s.56(2)(viib) — consideration received for issue of shares above fair market value",
        "s.2(24)(xviia) — the receipt referred to in s.56(2)(x) treated as income",
      ],
      cases: [
        { name: "CIT v. S.V. Electricals (P) Ltd.", principle: "Discussion of gifts and receipts without consideration and the treatment of such receipts under the 'other sources' head." },
      ],
      exceptions: ["Receipts from a RELATIVE are excluded. Receipts on the occasion of the individual's own marriage are excluded. Receipts under a will or by way of inheritance are excluded."],
      confusions: [
        "The head under which such receipts are taxed is INCOME FROM OTHER SOURCES — not 'capital gains', not exempt, and not taxable only if received in cash (the provision covers money as well as property, including immovable property).",
      ],
      aibeFocus: ["Section 56(2)(x) → taxable under the head 'Income from Other Sources'."],
      flashpoints: [
        "s.56(2)(x) → receipt of money/property without or for inadequate consideration, above the prescribed limit → TAXABLE.",
        "Head of tax → INCOME FROM OTHER SOURCES.",
        "Exclusions → RECEIPTS FROM RELATIVES | on the occasion of the individual's MARRIAGE | under a WILL or by INHERITANCE | on the death of the payer.",
        "The provision covers both money and property — not cash alone.",
      ],
    },
    {
      id: "x4",
      name: "Deductions — Chapter VI-A",
      concept:
        "Chapter VI-A deductions are allowed from gross total income in computing total income. Deductions such as " +
        "the additional interest on housing loans for first-time home buyers and the deduction in respect of health " +
        "insurance premia are allowed subject to the prescribed limits and conditions — not without any monetary " +
        "limit and not exclusively for senior citizens.",
      provisions: ["s.80C — investments (life insurance premia, provident fund, etc.) subject to the prescribed limit", "s.80D — health insurance premia for self and family, subject to prescribed limits; additional deduction for senior citizens", "s.80DD/80DDB — medical treatment of a dependant", "s.80G — donations", "s.80U — disability", "Chapter VI-A scheme — deduction from gross total income"],
      cases: [
        { name: "CIT v. Rajiv Goyal / Chapter VI-A deduction jurisprudence", principle: "Deductions are allowed only on satisfaction of the statutory conditions; they are not a matter of course." },
      ],
      exceptions: ["Deductions under Chapter VI-A cannot exceed the gross total income and cannot be claimed if the assessee has opted for the concessional regime where those deductions are unavailable."],
      confusions: ["A deduction is never 'without any monetary limit' unless the provision says so. Health insurance premium deductions are allowed SUBJECT TO PRESCRIBED LIMITS."],
      aibeFocus: ["Health insurance premium deduction → allowed subject to prescribed limits and conditions."],
      flashpoints: [
        "Chapter VI-A → deductions FROM gross total income to compute total income.",
        "Health insurance premium → deduction allowed SUBJECT TO PRESCRIBED LIMITS (not unlimited, not senior-citizens-only).",
        "Deductions require satisfaction of statutory conditions.",
        "Chapter VI-A deductions cannot exceed gross total income.",
      ],
    },
  ],
};

/* ============================== CONTRACT GROUP =============================*/
window.AIBE_NOTES["contract"] = {
  overview:
    "8 questions — a large, high-yield block combining the Indian Contract Act, the Specific Relief Act, the Transfer " +
    "of Property Act and the Negotiable Instruments Act. Learn s.27, s.133, specificity of performance including " +
    "negative covenants, and mortgage by conditional sale.",
  topics: [
    {
      id: "g1",
      name: "Void Agreements — Restraint of Trade and Public Policy",
      concept:
        "Every agreement by which anyone is restrained from exercising a lawful profession, trade or business of any " +
        "kind is, to that extent, VOID. Post-employment restraints that restrain a person from carrying on a lawful " +
        "profession after the term of employment ends are void. Agreements against public policy — including trading " +
        "with an enemy in time of war — are void.",
      provisions: [
        "s.2(h) — void agreements",
        "s.23 — lawful object and consideration; agreements opposed to public policy are void; trading with an enemy is against public policy",
        "s.24 — agreement void where the consideration or object is unlawful in part",
        "s.25 — agreement without consideration is void, subject to the exceptions (natural love and affection; past voluntary services; time-barred debt)",
        "s.26 — restraint of marriage → void",
        "s.27 — restraint of trade → VOID (except the sale of the goodwill of a business, where a reasonable restraint is permitted)",
        "s.28 — restraint of legal proceedings → void",
        "s.29 — uncertain agreements → void",
        "s.30 — wager → void (but collateral transactions are valid)",
      ],
      cases: [
        { name: "Percept D'Mark (India) (P) Ltd. v. Zaheer Khan, (2006) 4 SCC 227", principle: "A post-contract restraint on the employee's liberty to work is void under s.27; the court will not enforce a restraint operating after the term of the contract expires." },
        { name: "Nordenfelt v. Maxim Nordenfelt Guns & Ammunition Co. Ltd., (1894) AC 535", principle: "For the SALE OF GOODWILL, a reasonable restraint of trade is valid — the recognised exception to s.27." },
        { name: "Superintendence Company of India (P) Ltd. v. Krishan Murgai, (1980) 2 SCC 105", principle: "Post-employment restraint is void; negative covenants during the employment may be enforced." },
      ],
      exceptions: ["Sale of the goodwill of a business: a reasonable restraint is valid (s.27 exception).", "A negative covenant operating DURING the term of the contract may be enforced by injunction."],
      confusions: [
        "A three-year post-resignation bar on joining a rival firm is a restraint on the exercise of a lawful profession AFTER employment ends → VOID under s.27. Validating options keyed to 'reasonable period' or 'voluntary agreement' or 'protection of business interest' are wrong.",
        "Restraint during employment ≠ restraint after employment.",
      ],
      aibeFocus: ["A post-employment non-compete clause → VOID under s.27, however reasonable the period or however voluntary the agreement."],
      flashpoints: [
        "s.27 → restraint of trade is VOID (except a reasonable restraint on the SALE OF GOODWILL).",
        "Post-employment non-compete → VOID. Period and voluntariness are irrelevant.",
        "s.26 → restraint of marriage void; s.28 → restraint of legal proceedings void; s.29 → uncertain agreements void; s.30 → wagers void.",
        "s.23 → trading with an ENEMY in time of war is against PUBLIC POLICY → VOID (humanitarian goods or payment through a neutral intermediary do not save it).",
        "Percept D'Mark v. Zaheer Khan (2006) 4 SCC 227 → post-contract restraint void.",
        "Nordenfelt (1894) AC 535 → sale-of-goodwill exception.",
      ],
    },
    {
      id: "g2",
      name: "Surety and Discharge — s.133",
      concept:
        "The liability of a surety is co-extensive with that of the principal debtor. Where the creditor makes any " +
        "change in the terms of the contract between the principal debtor and the creditor, WITHOUT the surety's " +
        "consent, the surety is DISCHARGED as to transactions subsequent to the variance. This is a strict rule — the " +
        "surety's risk cannot be increased without consent.",
      provisions: [
        "s.126 — contract of guarantee; 'surety', 'principal debtor', 'creditor'",
        "s.128 — surety's liability is co-extensive with that of the principal debtor",
        "s.130 — revocation of continuing guarantee",
        "s.133 — DISCHARGE of surety by VARIANCE in terms of the contract",
        "s.134 — discharge by release or discharge of the principal debtor",
        "s.135 — discharge where the creditor compounds with, gives time to, or agrees not to sue the principal debtor",
        "s.139 — discharge by the creditor's act or omission impairing the surety's eventual remedy",
        "s.140-141 — rights of the surety",
        "s.43-45 — liability of joint promisors",
      ],
      cases: [
        { name: "State Bank of India v. Indexport Registered, (1992) 3 SCC 159", principle: "The creditor may proceed against the surety without first exhausting remedies against the principal debtor." },
        { name: "Amrit Lal Goverdhan Lalan v. State Bank of Travancore, AIR 1968 SC 1432", principle: "Scope of variance under s.133 and when a surety is discharged." },
      ],
      exceptions: ["A variance that is not material and does not increase the surety's risk does not discharge the surety.", "The surety is discharged only as to transactions SUBSEQUENT to the variance."],
      confusions: [
        "The quantum of discharge under s.133 — the surety is discharged as to transactions SUBSEQUENT to the variance; the safest and most accurate description of the consequence is that the surety is discharged from liability arising out of the modification made without consent.",
        "A bank granting a rate reduction and an extension of the repayment period without informing the surety is a classic s.133 variance.",
      ],
      aibeFocus: ["s.133 → variance without the surety's consent discharges the surety."],
      flashpoints: [
        "s.126 → contract of guarantee.",
        "s.128 → the surety's liability is CO-EXTENSIVE with the principal debtor's.",
        "s.133 → material VARIANCE without the surety's consent → DISCHARGE of the surety.",
        "s.135 → giving time to or compounding with the principal debtor also discharges the surety.",
        "s.139 → the creditor's act impairing the surety's remedy discharges the surety.",
        "The creditor may sue the surety directly without suing the principal debtor first.",
      ],
    },
    {
      id: "g3",
      name: "Breach, Damages and Specific Relief",
      concept:
        "Section 73 of the Contract Act provides compensation for loss or damage caused by the breach which naturally " +
        "arose in the usual course of things, or which the parties knew would likely result. Section 74 governs " +
        "liquidated damages. The Specific Relief Act, 1963 provides that specific performance is the general rule for " +
        "enforceable contracts, that a person who suffers breach may seek SUBSTITUTED PERFORMANCE, and that an " +
        "injunction may be granted to restrain a negative covenant where the contract is not one for personal service " +
        "in the narrow sense.",
      provisions: [
        "Contract Act s.73 — compensation for loss or damage (Hadley v. Baxendale rule)",
        "Contract Act s.74 — compensation for breach where a sum is named (reasonable compensation not exceeding the amount named)",
        "Specific Relief Act 1963 s.10 — specific performance is the general rule (as amended in 2018)",
        "s.14 — contracts not specifically enforceable (including contracts dependent on personal qualifications, contracts for personal services, and, as amended, the categories after the 2018 Amendment)",
        "s.16 — personal bars to relief; s.16(c) — the plaintiff must be ready and willing to perform",
        "s.20 — SUBSTITUTED PERFORMANCE (as amended in 2018): where a contract is broken, the party at fault may be liable for substituted performance, and the aggrieved party may have the contract performed by a third party at the cost of the party in breach",
        "s.34 — declaratory relief; s.36-42 — injunctions; s.42 — injunction to perform a negative agreement",
        "s.41 — injunction where the plaintiff's conduct is such that he cannot be relieved",
      ],
      cases: [
        { name: "Hadley v. Baxendale, (1854) 9 Ex 341", principle: "Damages are recoverable for losses arising naturally from the breach, or for losses within the contemplation of the parties at the time of contracting." },
        { name: "Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405", principle: "Section 74 — reasonable compensation, not the full penalty; the court is not bound to award the sum named." },
        { name: "Lumley v. Wagner, (1852) 1 De GM & G 604", principle: "Injunction to restrain a negative covenant — a singer who agreed to perform exclusively for one theatre was restrained from performing elsewhere; the court would not compel performance but would enforce the negative part of the covenant." },
        { name: "Warner Bros. Pictures Inc. v. Nelson, (1937) 1 KB 209", principle: "Application of the Lumley v. Wagner principle to film contracts — the Bette Davis case." },
        { name: "Sumitomo Heavy Industries Ltd. v. ONGC Ltd., (2010) 11 SCC 296", principle: "Damages and the scope of s.73." },
      ],
      exceptions: ["A contract for personal service will not be specifically enforced, but an injunction may be granted to restrain a breach of a negative covenant (Lumley v. Wagner / Warner Bros v. Nelson).", "Damages are the usual remedy; specific performance is now the general rule under the amended s.10 but remains subject to s.14 and s.16."],
      confusions: [
        "Where the defendant fails to perform a contract like construction or supply and the plaintiff has it done by a third party at extra cost, the plaintiff may recover the extra cost — this is SUBSTITUTED PERFORMANCE under s.20. The option saying 'the plaintiff must sue only for damages and not substituted performance' is wrong.",
        "Exclusive-talent cases: an injunction IS available to enforce the negative covenant (the answer in the paper's singer question).",
      ],
      aibeFocus: ["(i) Substituted performance for a breach of a construction contract; (ii) injunction enforcing an exclusive-performance negative covenant."],
      flashpoints: [
        "Specific Relief Act s.20 → SUBSTITUTED PERFORMANCE; the aggrieved party may have the contract performed by a third party at the breaker's cost.",
        "s.14 → contracts not specifically enforceable; personal-service contracts included.",
        "s.42 → injunction to perform a NEGATIVE agreement — the Lumley v. Wagner principle.",
        "Exclusive-performance covenant → INJUNCTION may be granted.",
        "Contract Act s.73 → natural losses + losses within the parties' contemplation.",
        "Contract Act s.74 → reasonable compensation, not exceeding the sum named (Fateh Chand).",
      ],
    },
    {
      id: "g4",
      name: "Transfer of Property — Perpetuity and Accumulation",
      concept:
        "Section 10 of the Transfer of Property Act forbids a condition restraining alienation. Sections 11 to 18 " +
        "restrict transfers that create an interest to take effect beyond the statutory period — the rule against " +
        "perpetuity — and conditions of accumulation. A transfer for the benefit of the PUBLIC is specifically saved " +
        "from the rule against perpetuity, but the accumulation clause is separately governed by s.17 and is void to " +
        "the extent it exceeds the statutory limit.",
      provisions: [
        "s.5 — transfer of property defined; s.6 — what may be transferred",
        "s.10 — condition restraining alienation is void",
        "s.11 — restriction repugnant to the interest created",
        "s.13-14 — transfer for the benefit of an unborn person; rule against perpetuity (interest must vest within 18 years of the death of the last preceding owner)",
        "s.17 — direction for accumulation: void if it directs accumulation for a period longer than the LIFE of the transferor or 18 years from the date of transfer, whichever is longer; exceptions include accumulation for the benefit of the public",
        "s.18 — the rule against perpetuity does not apply to transfers for the benefit of the public",
        "s.19 — vested interest; s.20 — contingent interest",
        "s.31 — conditional transfer; s.32 — condition precedent and condition subsequent",
        "s.58 — mortgage; mortgage by conditional sale (s.58(c)); s.54 — sale",
        "s.35 — doctrine of election; s.53A — doctrine of part performance",
      ],
      cases: [
        { name: "Mirza Kurrat-ul-ain v. Nawab Mohammad Ibrahim", principle: "Application of the rule against perpetuity and the public-benefit exception." },
        { name: "Rambaran Prosad v. Ram Mohit Hazra, AIR 1967 SC 744", principle: "Covenants and their enforceability; discussion of the rule against perpetuity." },
      ],
      exceptions: ["s.18 — the rule against perpetuity does NOT apply to transfers for the PUBLIC benefit.", "s.17 — accumulation for the benefit of the public is a permitted exception."],
      confusions: [
        "A transfer to a trust for a public library is for the BENEFIT OF THE PUBLIC → the perpetuity rule does not apply (s.18). BUT the clause directing accumulation of income for 50 years is void to the extent it exceeds the statutory limits under s.17. The correct answer is the MIDDLE option: the transfer is valid as within the public-benefit exception, but the accumulation clause is void beyond the statutory limit.",
        "Perpetuity and accumulation are separate rules with separate sections (s.14 vs s.17) — do not merge them.",
      ],
      aibeFocus: ["A single transfer containing both a perpetuity question and an accumulation clause → split the analysis: public-benefit exception saves the transfer; the accumulation clause is void beyond the limit."],
      flashpoints: [
        "s.10 → condition restraining alienation is VOID.",
        "s.14 → RULE AGAINST PERPETUITY — vesting within 18 years of the death of the last preceding owner.",
        "s.17 → ACCUMULATION beyond the permitted period is VOID (limit: life of the transferor or 18 years, whichever is longer); public-benefit accumulation is excepted.",
        "s.18 → rule against perpetuity does NOT apply to transfers for the PUBLIC BENEFIT.",
        "Public benefit saves the transfer; it does NOT validate an excessive accumulation clause.",
      ],
    },
    {
      id: "g5",
      name: "Transfer of Property — Mortgage by Conditional Sale",
      concept:
        "A mortgage by conditional sale arises where the mortgagor ostensibly sells the property on the condition " +
        "that the sale shall become absolute on default of payment, or that it shall become void on payment, or that " +
        "the property shall be retransferred on payment. The transaction is a MORTGAGE, not an outright sale, and the " +
        "condition must be contained in the same document.",
      provisions: [
        "s.58(a) — simple mortgage; s.58(b) — mortgage by conditional sale; s.58(c) — usufructuary mortgage; s.58(d) — English mortgage; s.58(e) — equitable mortgage; s.58(f) — anomalous mortgage",
        "s.58(b) proviso — if the sale and the condition of retransfer are not contained in the SAME document, the transaction is a SALE and not a mortgage",
        "s.60 — right of redemption; s.60 proviso — the right of redemption subsists until a decree of foreclosure",
        "s.62 — right of usufructuary mortgagor to recover possession",
        "s.67 — right to foreclosure or sale",
        "s.76 — liabilities of the mortgagee in possession",
        "s.67A — mortgagee may apply for a decree",
      ],
      cases: [
        { name: "Jagannath Ganeshram Agarwala v. Shivnarayan Bhagirath, AIR 1940 Bom 247", principle: "Tests for distinguishing a mortgage by conditional sale from a sale with a condition of retransfer." },
        { name: "Bhaskar Waman Joshi v. Narayan Rambilas Agarwal, AIR 1960 SC 301", principle: "The decisive test is whether the sale and the condition of retransfer are contained in the same document — the s.58(b) proviso." },
        { name: "Tamboli Ramanlal Motilal v. Ghanchi Chimanlal Keshavlal, (1993) 1 SCC 215", principle: "Whether a document is a mortgage by conditional sale or an outright sale — intention is gathered from the terms of the document itself." },
      ],
      exceptions: ["Where the sale and the condition of retransfer are contained in the SAME document → mortgage by conditional sale. Where they are in SEPARATE documents → the transaction is a SALE and the condition is a separate agreement."],
      confusions: [
        "A sale deed containing the condition 'if I repay within 3 years, B shall retransfer; otherwise the sale becomes absolute' — the condition IS in the same document → it is a MORTGAGE BY CONDITIONAL SALE, not an outright sale, and B must seek foreclosure.",
        "The fact that a retransfer right exists does not by itself make the transaction a mortgage — the same-document test is decisive.",
      ],
      aibeFocus: ["The s.58(b) proviso — same document or separate documents — and the consequence that the mortgagee must seek foreclosure rather than claim automatic absolute ownership."],
      flashpoints: [
        "s.58(b) → MORTGAGE BY CONDITIONAL SALE.",
        "s.58(b) proviso → sale and condition of retransfer in the SAME document → MORTGAGE; in SEPARATE documents → SALE.",
        "Mortgage by conditional sale → the mortgagee must seek FORECLOSURE; ownership does not become absolute automatically.",
        "s.60 → right of redemption subsists until foreclosure.",
        "s.67 → right to foreclosure or sale.",
      ],
    },
    {
      id: "g6",
      name: "Negotiable Instruments Act 1881",
      concept:
        "A promissory note is an instrument in writing (not being a bank note or currency note) containing an " +
        "UNCONDITIONAL undertaking, signed by the maker, to pay a certain sum of money only to, or to the order of, a " +
        "certain person or to the bearer of the instrument. Consideration is PRESUMED under s.118 — a negotiable " +
        "instrument is presumed, until the contrary is proved, to have been made or drawn for consideration.",
      provisions: [
        "s.4 — promissory note",
        "s.5 — bill of exchange; s.6 — cheque",
        "s.13 — negotiable instrument; s.14 — negotiation; s.15-16 — endorsement",
        "s.8 — holder; s.9 — holder in due course",
        "s.118 — PRESUMPTIONS as to consideration, date, time of acceptance, transfer before maturity and order of endorsements",
        "s.120 — a negotiable instrument cannot be denied to have been made or drawn for consideration in a suit between parties to the instrument, save on proof of fraud, misrepresentation or illegality",
        "s.138 — dishonour of cheque; s.139 — presumption in favour of the holder; s.141 — offences by companies; s.142 — complaint; s.143A — interim compensation",
        "s.148 — appellate court may direct deposit of a minimum percentage of the fine/compensation",
      ],
      cases: [
        { name: "Dashrath Rupsingh Rathod v. State of Maharashtra, (2014) 9 SCC 129", principle: "Territorial jurisdiction for s.138 complaints — later modified by the 2015 Amendment inserting s.142(2)." },
        { name: "Meters & Instruments (P) Ltd. v. Kanchan Mehta, (2018) 1 SCC 560", principle: "Section 138 proceedings may be compounded; a complaint cannot be dismissed for non-appearance without giving an opportunity." },
      ],
      exceptions: ["The presumption of consideration under s.118 is REBUTTABLE — it can be displaced by proof of fraud, misrepresentation or illegality."],
      confusions: [
        "A promissory note does NOT need to mention consideration — consideration is presumed under s.118. The option 'void because it does not mention the consideration' is wrong.",
        "A promissory note does NOT need a witness. An 18-year-old of sound mind is competent to contract (s.11 of the Contract Act) — 'voidable because he is only 18' is wrong.",
      ],
      aibeFocus: ["A competently executed promissory note with all essential elements is VALID and the maker is liable to pay, even though consideration is not recited and no witness has signed."],
      flashpoints: [
        "NI Act s.4 → PROMISSORY NOTE: writing + unconditional undertaking + signed by the maker + certain sum + to a certain person or bearer.",
        "s.13 → negotiable instrument.",
        "s.118 → consideration is PRESUMED (rebuttable).",
        "s.120 → consideration cannot be denied in a suit between parties save on proof of fraud, misrepresentation or illegality.",
        "A promissory note does NOT require a witness.",
        "s.138 → dishonour of cheque; s.139 → presumption in favour of the holder.",
      ],
    },
    {
      id: "g7",
      name: "Formation, Privity and Quasi Contract",
      concept:
        "An agreement is a promise or set of promises forming the consideration for each other. Essentials of a valid " +
        "contract are offer, acceptance, consideration, capacity, free consent and lawful object. A stranger to the " +
        "consideration may sue in certain recognised exceptions to privity, including a trust or charge, a family " +
        "arrangement, an estoppel, an acknowledgement or a statutory exception.",
      provisions: [
        "s.2(a)-(h) — definitions of proposal, promise, agreement, contract, void agreement, voidable contract",
        "s.3-9 — communication, acceptance and revocation of proposals",
        "s.10 — essentials of a valid contract",
        "s.11 — capacity ('minor' — a person who has not attained the age of majority; an agreement with a minor is void)",
        "s.14-18 — free consent",
        "s.23 — lawful object and consideration",
        "s.25 — consideration and the exceptions",
        "s.56 — impossibility of performance; s.62-67 — novation, rescission and alteration",
        "s.68-72 — quasi contracts (supply of necessaries to a person incapable of contracting; payment by an interested person; non-gratuitous act; money paid by mistake or coercion)",
      ],
      cases: [
        { name: "Mohori Bibee v. Dharmodas Ghose, (1903) 30 Cal 539 (PC)", principle: "An agreement with a minor is VOID — not merely voidable." },
        { name: "Carlill v. Carbolic Smoke Ball Co., (1893) 1 QB 256", principle: "General offer and acceptance by performance — the leading offer-and-acceptance case." },
        { name: "Khwaja Muhammad Khan v. Husaini Begum", principle: "Family-arrangement exception to privity of contract." },
      ],
      exceptions: ["s.25 exceptions: natural love and affection, past voluntary services, and a time-barred debt.", "Privity exceptions: trust or charge, family arrangement, estoppel, acknowledgement, statutory exceptions."],
      confusions: ["Section 11 read with the Majority Act: a person who has attained 18 years of age is competent to contract (21 in some personal-law contexts). An 18-year-old of sound mind is competent — 'voidable because he is only 18 years of age' is wrong."],
      aibeFocus: ["Capacity, consideration and the validity of an instrument where the essential elements are present."],
      flashpoints: [
        "s.10 → offer + acceptance + consideration + capacity + free consent + lawful object.",
        "Mohori Bibee (1903) 30 Cal 539 → an agreement with a MINOR is VOID ab initio.",
        "s.25 exceptions → love and affection | past voluntary services | time-barred debt.",
        "s.56 → impossibility of performance (doctrine of frustration).",
        "s.68-72 → quasi contracts.",
      ],
    },
  ],
};

/* ============================== LAND ACQUISITION ===========================*/
window.AIBE_NOTES["land"] = {
  overview:
    "2 questions. Set A asked one negative question about the procedure and one application question about Scheduled " +
    "Tribe land, SIA and Gram Sabha consent. Learn the sequence of steps and the consent requirements.",
  topics: [
    {
      id: "l1",
      name: "Procedure and the SIA-Gram Sabha Requirement",
      concept:
        "The Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, " +
        "2013 requires a Social Impact Assessment before acquisition, appraisal of the SIA report, and — where " +
        "Scheduled Area land belonging to Scheduled Tribes is being acquired — the consent of the Gram Sabha or the " +
        "appropriate authority. For public-private partnership projects the consent of 70% of the affected families " +
        "is required, and for private projects 80%.",
      provisions: [
        "s.4 — conduct of Social Impact Assessment before preliminary notification (s.4(2): the SIA must be completed within 6 months from the date of commencement)",
        "s.5 — appraisal of the SIA report by an expert committee",
        "s.6 — publication of the SIA report and the appraisal",
        "s.11 — publication of the preliminary notification (notice published in the Official Gazette, in two daily newspapers, and on the website of the appropriate Government)",
        "s.11(1) — the notice must be published and the objections heard; s.11(5) — a minimum notice period before the preliminary notification / objections considered",
        "s.15 — objections to be filed within the prescribed period (60 days from the date of publication of the preliminary notification)",
        "s.19 — publication of the declaration (final notification); the declaration must be made within 12 months of the preliminary notification",
        "s.24 — lapse of proceedings where no award is made within the prescribed period",
        "s.41 — special provisions for Scheduled Areas: the acquiring authority must consult the Gram Sabha before the preliminary notification and obtain its consent; 80% of the affected families' consent for private projects",
        "s.43 — land acquisition for public purposes in Scheduled Areas",
        "s.89-90 — provisions relating to Scheduled Castes and Scheduled Tribes (including the requirement of the Gram Sabha's consent for the acquisition of land in Scheduled Areas)",
      ],
      cases: [
        { name: "Vidya Devi Jindal v. State of Haryana, (2020) 4 SCC 199", principle: "Compliance with the mandatory requirements of the 2013 Act — including the SIA and the publication requirements — is essential; non-compliance vitiates the acquisition." },
        { name: "Indore Development Authority v. Manoharlal, (2020) 8 SCC 129", principle: "Interpretation of s.24(2) of the 2013 Act — the lapse provisions; overruled Pune Municipal Corporation v. Harakchand Misirimal Solanki." },
      ],
      exceptions: ["Section 17 of the 2013 Act permits the appropriate Government to exempt certain projects from the SIA and consent requirements, but only in specified circumstances (urgency, irrigation and infrastructure projects) and subject to conditions, including that the exemption may be withdrawn if the land remains unutilised."],
      confusions: [
        "The SIA must PRECEDE the preliminary notification. Final notification can never come before the SIA.",
        "For Scheduled Tribe land, the Gram Sabha's consultation/consent is NOT merely advisory — the acquisition cannot proceed without the mandated consent. The option saying 'Gram Sabha is advisory only' is wrong.",
        "Also, the answer to the 'which is NOT true' question on the procedure: interested persons may file objections within 60 days — NOT 6 months; and there is no requirement for every interested person to appear PERSONALLY.",
      ],
      aibeFocus: ["Sequence: SIA → appraisal → preliminary notification → objections → final declaration. And the consent requirement for ST land."],
      flashpoints: [
        "Sequence → SIA (s.4) → appraisal (s.5) → PRELIMINARY NOTIFICATION (s.11) → objections (s.15) → FINAL DECLARATION (s.19) → award.",
        "SIA must be completed within 6 months (s.4(2)).",
        "Objections within 60 days of the preliminary notification (s.15) — NOT 6 months.",
        "Scheduled Areas / ST land → GRAM SABHA CONSULTATION AND CONSENT are MANDATORY (s.41) — not advisory.",
        "Consent thresholds → 80% of affected families for private projects; 70% for PPP projects.",
        "Final declaration must be made within 12 MONTHS of the preliminary notification (s.19).",
      ],
    },
    {
      id: "l2",
      name: "Compensation, Lapse and the 1894 Act",
      concept:
        "The Land Acquisition Act, 1894 continues to govern acquisitions initiated before 1 January 2014, while the " +
        "2013 Act governs later acquisitions. Compensation under the 2013 Act is based on market value with the " +
        "statutory multiplier, solatium and additional components.",
      provisions: [
        "s.23 — matters to be considered in determining compensation (market value, damage, severance, injurious affection, reasonable expenses)",
        "s.24 — compensation for land acquired under the 1894 Act",
        "s.26 — determination of market value",
        "s.28 — multiplier for the market value of rural land (1.0 to 2.0 times)",
        "s.30 — solatium (100% of the market value in addition)",
        "s.31 — award",
        "s.24(2) of the 2013 Act — lapse of proceedings under the 1894 Act where no award has been made, and where the physical possession has not been taken or compensation not paid",
      ],
      cases: [
        { name: "Indore Development Authority v. Manoharlal, (2020) 8 SCC 129", principle: "Section 24(2) of the 2013 Act: the two conditions (possession and compensation) must be read disjunctively for the purpose of lapse; payment of compensation must have been made or tendered." },
        { name: "Pune Municipal Corporation v. Harakchand Misirimal Solanki, (2014) 3 SCC 183", principle: "Earlier, narrower view of s.24(2) — overruled by Indore Development Authority." },
      ],
      exceptions: ["Where compensation has been deposited in the treasury or tendered and possession has been taken, s.24(2) lapse does not apply."],
      confusions: ["Pune Municipal Corporation (2014) has been OVERRULED by Indore Development Authority (2020). A question treating the 2014 view as current law is testing that you know the overruling."],
      aibeFocus: ["Which decision is currently good law on s.24(2) → Indore Development Authority (2020) 8 SCC 129."],
      flashpoints: [
        "Land Acquisition Act 1894 governs acquisitions initiated BEFORE 1 January 2014.",
        "2013 Act → market value + MULTIPLIER (rural land 1.0-2.0x) + SOLATIUM (100%).",
        "s.24(2) → LAPSE of 1894 Act proceedings.",
        "Indore Development Authority v. Manoharlal (2020) 8 SCC 129 → CURRENT law on s.24(2); overruled Pune Municipal Corporation.",
      ],
    },
  ],
};

/* ============================== IP =========================================*/
window.AIBE_NOTES["ip"] = {
  overview:
    "2 questions. Set A asked (i) a limitation on a patentee's rights (Government use) and (ii) the copyright term " +
    "for posthumous works. Both are single-section questions. Learn s.47 of the Patents Act and s.24 of the " +
    "Copyright Act.",
  topics: [
    {
      id: "h1",
      name: "Patents Act 1970 — Government Use and Limitations",
      concept:
        "A patent grants an exclusive right to make, use, exercise, sell or distribute the invention in India. That " +
        "right is subject to statutory limitations, including the Government's power to use the invention for its own " +
        "purposes. The term of a patent is 20 years from the date of filing.",
      provisions: [
        "s.2(1)(m) — 'patent'",
        "s.3 — what are not inventions (frivolous, contrary to natural laws, contrary to public order or morality, mere discovery of a scientific principle, substance obtained by a mere admixture, a method of agriculture or horticulture, the mere arrangement of known devices, etc.); s.3(d) — new forms of known substances and enhanced efficacy",
        "s.5 — inventions not patentable (abolished by the 2005 amendment — now covered by s.3); s.3(j) — plants and animals",
        "s.10 — contents of a complete specification",
        "s.43-46 — grant and term; s.53 — TERM OF PATENT: 20 YEARS from the date of filing of the application",
        "s.47 — GRANT OF PATENT SUBJECT TO CERTAIN CONDITIONS: (i) the Government may import the patented article for its own use; (ii) the Government, or a person authorised by it, may make, use, exercise or vend the invention FOR ITS OWN USE, and may use or vend the invention for the purposes of the Government",
        "s.84 — compulsory licence after 3 years from the grant, on the grounds specified (reasonable requirements of the public not satisfied, invention not available at a reasonably affordable price, invention not worked in India)",
        "s.92 — special compulsory licence for export; s.92A — compulsory licence for export of patented pharmaceutical products",
        "ss.100-103 — Government use of inventions and the notification requirements",
      ],
      cases: [
        { name: "Bayer Corporation v. Union of India, (2014) 13 SCC 20 (Nexavar case)", principle: "The first compulsory licence granted in India under s.84 — reasonable requirements of the public and reasonably affordable price; upheld by the Bombay High Court." },
        { name: "Novartis AG v. Union of India, (2013) 6 SCC 1", principle: "Section 3(d) — enhanced therapeutic efficacy; the Glivec case." },
      ],
      exceptions: ["The Government may use the invention for its own purposes without the patentee's consent (s.47). The patent does NOT become void merely because the Government used it.", "The patentee does not lose ALL rights once the Government uses the invention."],
      confusions: [
        "The correct limitation is that the GOVERNMENT MAY USE THE INVENTION FOR ITS OWN PURPOSES WITHOUT THE PATENTEE'S CONSENT — not that the patentee loses all rights, not that the patent becomes void, and not that the Government can never use it.",
      ],
      aibeFocus: ["s.47 — use of the invention by or on behalf of the Government for its own purposes, without the patentee's consent."],
      flashpoints: [
        "Patents Act s.47 → the Government may USE the invention for its OWN PURPOSES without the patentee's consent — a statutory LIMITATION on the patentee's rights.",
        "s.53 → patent term = 20 YEARS from the date of filing.",
        "s.84 → compulsory licence after 3 years from grant.",
        "s.3(d) → enhanced efficacy required for new forms of known substances (Novartis, Glivec).",
        "Bayer v. UOI (2014) 13 SCC 20 → India's first compulsory licence (Nexavar).",
        "Government use does NOT make the patent void.",
      ],
    },
    {
      id: "h2",
      name: "Copyright Act 1957 — Term and Posthumous Works",
      concept:
        "Copyright subsists in original literary, dramatic, musical and artistic works, cinematograph films and sound " +
        "recordings. The term is generally sixty years from the beginning of the calendar year next following the " +
        "year in which the author dies. In the case of a POSTHUMOUS work, the term runs for sixty years from the " +
        "beginning of the calendar year next following the year in which the work is FIRST PUBLISHED.",
      provisions: [
        "s.13 — works in which copyright subsists",
        "s.14 — meaning of 'copyright' (the exclusive rights)",
        "s.2(d) — 'author'",
        "s.2(ff) — 'publication'",
        "s.3 — meaning of 'publication': making a work available to the public by issue of copies, or by communication to the public",
        "s.22 — TERM of copyright: 60 YEARS from the beginning of the calendar year next following the year in which the author dies",
        "s.24 — TERM FOR POSTHUMOUS WORKS: where a work is published after the death of the author, copyright subsists for 60 YEARS from the beginning of the calendar year next following the year in which the work is FIRST PUBLISHED",
        "s.26-28 — term for films, sound recordings and Government works",
        "s.52 — fair dealing exceptions",
        "s.57 — moral rights (author's special rights)",
        "s.63 — offence of infringement",
      ],
      cases: [
        { name: "R.G. Anand v. Delux Films, (1978) 4 SCC 118", principle: "The leading case on the distinction between an idea and its expression; what constitutes infringement of copyright." },
        { name: "Eastern Book Company v. D.B. Modak, (2008) 1 SCC 1", principle: "The 'modicum of creativity' standard; copyright in the headnotes and editorial notes of a law report." },
      ],
      exceptions: ["s.52 — fair dealing with a work for the purposes of private study, research, criticism or review does not constitute infringement."],
      confusions: ["For a posthumous work the term runs from the year of first PUBLICATION (not the year of the author's death). Both Statements I and II in the paper's question are TRUE."],
      aibeFocus: ["Posthumous works → 60 years from the year of first publication; and the definition of 'publication'."],
      flashpoints: [
        "Copyright Act s.22 → general term = 60 YEARS from the calendar year following the author's death.",
        "s.24 → POSTHUMOUS WORK = 60 YEARS from the calendar year following the year of FIRST PUBLICATION.",
        "s.3 → 'publication' = making the work available to the public by issue of copies or communication to the public.",
        "s.52 → fair dealing.",
        "s.57 → moral rights.",
        "R.G. Anand (1978) 4 SCC 118 → idea-expression distinction.",
      ],
    },
    {
      id: "h3",
      name: "Trade Marks, Designs and Other Regimes",
      concept:
        "The Trade Marks Act, 1999 protects marks that are capable of distinguishing the goods or services of one " +
        "person from those of others. Infringement of a registered mark under s.29 and passing off as a common law " +
        "action are distinct but overlapping remedies. The Designs Act, 2000, the Geographical Indications of Goods " +
        "Act, 1999 and the Protection of Plant Varieties and Farmers' Rights Act, 2001 complete the Indian IP " +
        "framework.",
      provisions: ["Trade Marks Act 1999 s.2(1)(zb) 'trade mark'; s.28 rights conferred; s.29 infringement; s.34, s.35; s.27 common law action for passing off; s.11 well-known marks", "Designs Act 2000 s.4-5 (prohibition of registration of certain designs); s.22 piracy of a registered design", "Geographical Indications of Goods (Registration and Protection) Act 1999", "Semiconductor Integrated Circuits Layout-Design Act 2000", "Protection of Plant Varieties and Farmers' Rights Act 2001"],
      cases: [
        { name: "S. Syed Mohideen v. P. Sulochana Bai, (2016) 2 SCC 683", principle: "Passing off is a common law remedy independent of and superior to the statutory right conferred by registration; prior use may defeat a later registration." },
        { name: "Ambalal Sarabhai Enterprises Ltd. v. K.S. Inorfields, (2014) 4 SCC 378", principle: "Relevant considerations in deciding deceptive similarity and passing off." },
      ],
      exceptions: ["Honest concurrent use and prior use may be defences.", "A descriptive mark that has not acquired distinctiveness cannot be infringed."],
      confusions: ["Infringement of a registered mark (statutory, s.29) vs passing off (common law) — a registered proprietor may sue for infringement, while an unregistered user may sue for passing off."],
      aibeFocus: ["Distinguishing statutory infringement from common law passing off."],
      flashpoints: [
        "Trade Marks Act 1999 s.28 → rights conferred by registration.",
        "s.29 → INFRINGEMENT (statutory remedy for a registered mark).",
        "s.27(2) / common law → PASSING OFF (available even without registration).",
        "S. Syed Mohideen (2016) 2 SCC 683 → passing off is independent of and superior to statutory rights.",
        "Designs Act 2000 s.22 → piracy of a registered design.",
      ],
    },
  ],
};
