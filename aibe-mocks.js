/* ============================================================================
 * AIBE XXI — Full-length Mock Tests
 * window.AIBE_MOCKS = [ { id, title, description, questionIds[], minutes } ]
 *
 * Every paper follows the official AIBE subject distribution (100 questions,
 * 3 hours). Paper 1 to Paper 5 draw successive blocks from each subject file,
 * so no question is repeated within a paper and the papers do not overlap.
 *
 * Official distribution used:
 *   Constitutional 10 | IPC/BNS 8 | CrPC/BNSS 10 | CPC 10 | Evidence/BSA 8
 *   ADR 4 | Family 8 | PIL 4 | Administrative 3 | Professional Ethics 4
 *   Company 2 | Environmental 2 | Cyber 2 | Labour 4 | Tort/MV/Consumer 5
 *   Taxation 4 | Contract/TPA/SRA/NI 8 | Land Acquisition 2 | IP 2   = 100
 * ==========================================================================*/
window.AIBE_MOCKS = (function () {
  "use strict";

  /* Official paper order: subject prefix and its question allocation. */
  var SUBJECTS = [
    { prefix: "CON-", n: 10, name: "Constitutional Law" },
    { prefix: "IPC-", n: 8, name: "IPC / BNS" },
    { prefix: "CRP-", n: 10, name: "CrPC / BNSS" },
    { prefix: "CPC-", n: 10, name: "Code of Civil Procedure" },
    { prefix: "EVD-", n: 8, name: "Law of Evidence / BSA" },
    { prefix: "ADR-", n: 4, name: "Alternative Dispute Resolution" },
    { prefix: "FAM-", n: 8, name: "Family Law" },
    { prefix: "PIL-", n: 4, name: "Public Interest Litigation" },
    { prefix: "ADM-", n: 3, name: "Administrative Law" },
    { prefix: "ETH-", n: 4, name: "Professional Ethics & Contempt" },
    { prefix: "COM-", n: 2, name: "Company Law" },
    { prefix: "ENV-", n: 2, name: "Environmental Law" },
    { prefix: "CYB-", n: 2, name: "Cyber Law" },
    { prefix: "LAB-", n: 4, name: "Labour & Industrial Law" },
    { prefix: "TOR-", n: 5, name: "Law of Tort, MV Act & Consumer Protection" },
    { prefix: "TAX-", n: 4, name: "Taxation Law" },
    { prefix: "CTR-", n: 8, name: "Contract, Specific Relief, TPA & NI Act" },
    { prefix: "LND-", n: 2, name: "Land Acquisition Law" },
    { prefix: "IP-", n: 2, name: "Intellectual Property Law" }
  ];

  /* Build ids: prefix + zero-padded number, n of them from `start`. */
  function block(prefix, start, n) {
    var out = [];
    for (var i = 0; i < n; i++) out.push(prefix + ("00" + (start + i)).slice(-3));
    return out;
  }

  /* Paper k (0-based) takes each subject's k-th contiguous slice. */
  function buildPaper(k) {
    var ids = [];
    SUBJECTS.forEach(function (s) { ids = ids.concat(block(s.prefix, 1 + k * s.n, s.n)); });
    return ids;
  }

  function sectionSummary() {
    return SUBJECTS.map(function (s) { return s.name + " (" + s.n + ")"; }).join(" · ");
  }

  var titles = [
    { id: "mock-01", title: "Mock Paper 1 — Full Length (Set A style)",
      description: "Baseline paper drawn from the opening block of every subject file. Sit this first to establish your baseline. Recommended time split: 55 minutes for the first 35 questions, 55 minutes for the next 35, and the last 70 minutes for the final 30 plus a review pass." },
    { id: "mock-02", title: "Mock Paper 2 — Full Length",
      description: "Second block of every subject. Expect a higher share of scenario, assertion–reason and statement–conclusion items in this paper. Simulate exam conditions strictly: no notes, only bare Acts." },
    { id: "mock-03", title: "Mock Paper 3 — Full Length",
      description: "Third block of every subject, weighted towards procedure, limitation periods and timelines. Time yourself: the CrPC/BNSS and CPC sections should not take more than 40 minutes together." },
    { id: "mock-04", title: "Mock Paper 4 — Full Length",
      description: "Fourth block of every subject, with a heavier emphasis on the new criminal-law regime (BNS, BNSS and BSA) and on the old-to-new mapping. Cross-check every section number you used against the bare Act afterwards." },
    { id: "mock-05", title: "Mock Paper 5 — Full Length (final rehearsal)",
      description: "Fifth block of every subject. Sit this paper last, in a single unbroken three-hour block. Read the entire Final Revision card afterwards and log every wrong answer as 'needs revision'." }
  ];

  var mocks = [];
  for (var k = 0; k < titles.length; k++) {
    var ids = buildPaper(k);
    if (ids.length !== 100 && typeof console !== "undefined" && console.warn) {
      console.warn("AIBE mock " + titles[k].id + " has " + ids.length + " questions, expected 100.");
    }
    mocks.push({
      id: titles[k].id,
      title: titles[k].title,
      description: titles[k].description + " Sections: " + sectionSummary() + ".",
      questionIds: ids,
      minutes: 180,
      sections: SUBJECTS.map(function (s) { return { name: s.name, n: s.n }; })
    });
  }

  return mocks;
})();
