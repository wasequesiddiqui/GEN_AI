/* ============================================================================
 * Legal MCQ Study Hub — multi-subject renderer for LEGAL_MCQ.html
 *
 * Data contract (each subject file appends to its own key):
 *   window.LEGAL_MCQ.constitution = [ { n, topic, diff, q, o[4], a, ex, ref, lc, tip } ]
 *   window.LEGAL_MCQ.bnss        = [ { n, topic, diff, q, o[4], a, ex, ref, lc, tip } ]
 *     n    : sequence number within the subject (1..N)
 *     diff : "Easy" | "Moderate" | "Difficult"
 *     a    : 0-based index of the correct option (0=A, 1=B, 2=C, 3=D)
 *
 * Each subject gets its own tab, panel, filters, display mode and saved
 * self-assessment score, rendered across the 13 required columns.
 * ==========================================================================*/
(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D"];
  var STORE_PREFIX = "legalmcq:v1:";

  /* ------------------------------------------------------ subject registry */
  var SUBJECTS = [
    {
      key: "constitution",
      dataKey: "constitution",
      tab: "Constitution of India",
      title: "Constitution of India — 500 MCQ Study Guide",
      blurb:
        "A rigorous, exam-oriented question bank for the All India Bar Examination: factual recall, " +
        "constitutional interpretation, case-law application and the tricky distinctions the paper is " +
        "built on. Every question carries an explanation, the governing Article, the leading judgment " +
        "and a carry-into-the-hall exam tip. Difficulties are graded " +
        "<b>20% Easy · 50% Moderate · 30% Difficult</b>.",
      csvName: "constitution-of-india-500-mcq.csv",
      referenceLabel: "Constitutional Reference",
      unit: "Article",
      caption:
        "Constitution of India — multiple choice questions with answers, explanations, " +
        "constitutional references, landmark cases and exam tips",
    },
    {
      key: "bnss",
      dataKey: "bnss",
      tab: "Bharatiya Nagarik Suraksha Sanhita (BNSS)",
      title: "Bharatiya Nagarik Suraksha Sanhita, 2023 — 500 MCQ Study Guide",
      blurb:
        "A rigorous, exam-oriented question bank on the BNSS — the code of criminal procedure that " +
        "replaced the CrPC, 1973 and came into force on 1 July 2024. Questions test section-number " +
        "recall, the scheme of investigation and trial, the new procedural safeguards and the case law " +
        "that continues to govern practice. Every question carries an explanation, the governing " +
        "section, the leading judgment and a carry-into-the-hall exam tip. Difficulties are graded " +
        "<b>20% Easy · 50% Moderate · 30% Difficult</b>.",
      csvName: "bnss-2023-500-mcq.csv",
      referenceLabel: "Section Reference",
      unit: "Section",
      caption:
        "BNSS 2023 — multiple choice questions with answers, explanations, " +
        "section references, landmark cases and exam tips",
    },
  ];

  var DATA = (window.LEGAL_MCQ = window.LEGAL_MCQ || {});
  var views = [];
  var activeKey = null;

  /* --------------------------------------------------------------- helpers */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function stripPrefix(s) { return String(s || "").replace(/^\(([A-D])\)\s*/i, ""); }

  function csvCell(v) {
    var s = String(v == null ? "" : v);
    return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }

  function loadJSON(key) {
    try { return JSON.parse(localStorage.getItem(key)) || {}; }
    catch (e) { return {}; }
  }
  function saveJSON(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* private mode */ }
  }

  /* ------------------------------------------------------------ panel HTML */
  function panelHTML(cfg) {
    var k = cfg.key;
    return "" +
    '<div class="hero">' +
      "<h1>" + esc(cfg.title) + "</h1>" +
      "<p>" + cfg.blurb + "</p>" +
      '<div class="hero-grid">' +
        '<div class="stat"><div class="k">Questions</div><div class="v" data-role="sTotal">0</div></div>' +
        '<div class="stat"><div class="k">Shown</div><div class="v" data-role="sShown">0</div></div>' +
        '<div class="stat"><div class="k">Attempted</div><div class="v" data-role="sAttempted">0</div></div>' +
        '<div class="stat ok"><div class="k">Correct</div><div class="v" data-role="sCorrect">0</div></div>' +
        '<div class="stat bad"><div class="k">Wrong</div><div class="v" data-role="sWrong">0</div></div>' +
        '<div class="stat"><div class="k">Accuracy</div><div class="v" data-role="sAcc">—</div></div>' +
      "</div>" +
    "</div>" +

    '<div class="toolbar" data-role="toolbar" role="group" aria-label="Question bank controls">' +
      '<div class="grow">' +
        '<label class="sr-only" for="q-' + k + '">Search the question bank</label>' +
        '<input type="search" id="q-' + k + '" data-role="search" ' +
          'placeholder="Search questions, options, ' + esc(cfg.unit) + 's, cases or exam tips…">' +
      "</div>" +
      '<div class="field"><label for="t-' + k + '">Topic</label>' +
        '<select id="t-' + k + '" data-role="topic"><option value="">All topics</option></select></div>' +
      '<div class="field"><label for="l-' + k + '">Level</label>' +
        '<select id="l-' + k + '" data-role="diff">' +
          '<option value="">All levels</option>' +
          '<option value="Easy">Easy</option>' +
          '<option value="Moderate">Moderate</option>' +
          '<option value="Difficult">Difficult</option>' +
        "</select></div>" +
      '<div class="field"><label for="o-' + k + '">Show</label>' +
        '<select id="o-' + k + '" data-role="odd">' +
          '<option value="all">Everything</option>' +
          '<option value="unattempted">Not yet attempted</option>' +
          '<option value="wrong">Answered incorrectly</option>' +
        "</select></div>" +
      '<div class="field" role="group" aria-label="Display mode">' +
        '<button type="button" class="btn" data-role="mode" data-mode="practice">✍ Practice</button>' +
        '<button type="button" class="btn" data-role="mode" data-mode="study">📖 Study</button>' +
        '<button type="button" class="btn" data-role="mode" data-mode="key">🔑 Key only</button>' +
      "</div>" +
      '<button type="button" class="btn" data-role="reveal">👁 Reveal all</button>' +
      '<button type="button" class="btn" data-role="csv">⤓ CSV</button>' +
      '<button type="button" class="btn" data-role="print">🖨 Print</button>' +
      '<button type="button" class="btn ghost" data-role="reset">↺ Reset</button>' +
    "</div>" +

    '<p class="result-line" data-role="resultLine">Loading question bank…</p>' +

    '<div class="table-shell"><div class="table-scroll"><table class="mcq">' +
      '<caption class="sr-only">' + esc(cfg.caption) + "</caption>" +
      "<thead><tr>" +
        '<th class="col-no" scope="col">No.</th>' +
        '<th class="col-topic" scope="col">Topic</th>' +
        '<th class="col-diff" scope="col">Difficulty</th>' +
        '<th class="col-q" scope="col">Question</th>' +
        '<th class="col-opt" scope="col">Option A</th>' +
        '<th class="col-opt" scope="col">Option B</th>' +
        '<th class="col-opt" scope="col">Option C</th>' +
        '<th class="col-opt" scope="col">Option D</th>' +
        '<th class="col-ans" scope="col">Correct Answer</th>' +
        '<th class="col-ex" scope="col">Explanation</th>' +
        '<th class="col-ref" scope="col">' + esc(cfg.referenceLabel) + "</th>" +
        '<th class="col-case" scope="col">Landmark Case</th>' +
        '<th class="col-tip" scope="col">Exam Tip</th>' +
      "</tr></thead>" +
      '<tbody data-role="body"></tbody>' +
    "</table></div></div>" +

    '<p class="end-note" data-role="emptyNote" hidden>' +
      "No question matches the current filters. Clear the search box or reset the filters to see the full bank." +
    "</p>" +

    '<p class="end-note" data-role="loadWarn" hidden>' +
      "The question data could not be loaded. Open this page from the folder that contains the " +
      "<code>legal-mcq-" + k + "-*.js</code> files." +
    "</p>" +

    '<p class="end-note">' +
      "<b>How to use this guide.</b> Work through it in <b>Practice</b> mode, answering before you peek. " +
      "Switch to <b>Study</b> mode to read the reasoning and the judgment, and to <b>Key only</b> for a " +
      "rapid revision sweep of the answer column. Progress is saved in this browser only." +
    "</p>";
  }

  /* ------------------------------------------------------------ one subject */
  function View(cfg, panel) {
    this.cfg = cfg;
    this.panel = panel;
    var self = this;
    var raw = DATA[cfg.dataKey] || [];
    this.questions = raw.slice().sort(function (x, y) { return (x.n || 0) - (y.n || 0); });
    this.byN = {};
    this.questions.forEach(function (q) { self.byN[q.n] = q; });
    this.storeKey = STORE_PREFIX + cfg.key + ":progress";
    this.progress = loadJSON(this.storeKey);
    this.state = { topic: "", diff: "", search: "", mode: "practice", odd: "all", revealAll: false };
  }

  View.prototype.q = function (role) { return $('[data-role="' + role + '"]', this.panel); };

  View.prototype.matches = function (q) {
    var st = this.state;
    if (st.topic && q.topic !== st.topic) return false;
    if (st.diff && q.diff !== st.diff) return false;
    var r = this.progress[q.n];
    if (st.odd === "wrong" && !(r && r.pick !== q.a)) return false;
    if (st.odd === "unattempted" && r) return false;
    var term = st.search.trim().toLowerCase();
    if (term) {
      var hay = [q.q, q.topic, q.ex, q.ref, q.lc, q.tip].concat(q.o || []).join(" ").toLowerCase();
      if (hay.indexOf(term) === -1) return false;
    }
    return true;
  };

  View.prototype.hl = function (s) {
    var out = esc(s);
    var term = this.state.search.trim();
    if (!term) return out;
    var re;
    try { re = new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"); }
    catch (e) { return out; }
    return out.replace(re, '<mark class="hit">$1</mark>');
  };

  View.prototype.paintRow = function (tr, q) {
    var st = this.state;
    var r = this.progress[q.n];
    var revealed = st.mode !== "practice" || !!(r && r.pick != null) || !!st.revealAll;
    tr.classList.toggle("revealed", revealed);

    $$(".opt", tr).forEach(function (btn) {
      var i = +btn.dataset.opt;
      btn.classList.remove("picked", "correct", "wrong");
      if (revealed) {
        if (i === q.a) btn.classList.add("correct");
        else if (r && r.pick === i) btn.classList.add("wrong");
      } else if (r && r.pick === i) {
        btn.classList.add("picked");
      }
    });

    var badge = $(".ans-badge", tr);
    if (badge) {
      badge.textContent = revealed ? LETTERS[q.a] : "?";
      badge.classList.toggle("hidden", !revealed);
    }
    var note = $(".ans-txt", tr);
    if (note) note.style.visibility = revealed ? "visible" : "hidden";
  };

  View.prototype.render = function () {
    var st = this.state;
    var self = this;
    var body = this.q("body");
    if (!body) return;

    if (!this.questions.length) {
      var warn = this.q("loadWarn");
      if (warn) warn.hidden = false;
      var rl0 = this.q("resultLine");
      if (rl0) rl0.textContent = "No question data loaded for this subject.";
      return;
    }

    this.panel.classList.toggle("practice", st.mode === "practice");
    this.panel.classList.toggle("key", st.mode === "key");

    var rows = this.questions.filter(function (q) { return self.matches(q); });

    body.innerHTML = rows.map(function (q) {
      var tag = /Scenario|Assertion/i.test(q.q) ? '<span class="scenario-tag">Applied</span>' : "";
      var answerText = stripPrefix(q.o[q.a]);
      var opts = LETTERS.map(function (L, i) {
        return '<td class="col-opt opt-cell">' +
            '<button type="button" class="opt" data-opt="' + i + '">' +
              '<span class="letter">' + L + "</span>" +
              "<span>" + self.hl(stripPrefix(q.o[i])) + "</span>" +
            "</button></td>";
      }).join("");

      return '<tr data-n="' + q.n + '">' +
        '<td class="col-no cell-no">' + q.n + "</td>" +
        '<td class="col-topic"><span class="topic-tag">' + esc(q.topic) + "</span></td>" +
        '<td class="col-diff"><span class="pill ' + esc(q.diff) + '">' + esc(q.diff) + "</span></td>" +
        '<td class="col-q"><div class="q-text">' + tag + self.hl(q.q) + "</div></td>" +
        opts +
        '<td class="col-ans ans-cell"><span class="ans-badge hidden">?</span>' +
            '<span class="ans-txt" style="visibility:hidden">' + esc(answerText) + "</span></td>" +
        '<td class="col-ex exp"><span class="lbl">Explanation</span>' + self.hl(q.ex || "—") + "</td>" +
        '<td class="col-ref ref"><span class="lbl">' + esc(self.cfg.referenceLabel) + "</span>" +
            '<span class="cite">' + esc(q.ref || "—") + "</span></td>" +
        '<td class="col-case case"><span class="lbl">Landmark Case</span>' +
            (q.lc ? self.hl(q.lc) : '<span class="blank">—</span>') + "</td>" +
        '<td class="col-tip tip"><span class="lbl">Exam Tip</span>' +
            (q.tip ? self.hl(q.tip) : '<span class="blank">—</span>') + "</td>" +
      "</tr>";
    }).join("");

    $$("tr", body).forEach(function (tr) {
      var q = self.byN[+tr.dataset.n];
      if (q) self.paintRow(tr, q);
    });

    var empty = this.q("emptyNote");
    if (empty) empty.hidden = rows.length !== 0;

    var rl = this.q("resultLine");
    if (rl) {
      rl.innerHTML = "<b>" + rows.length + "</b> of <b>" + this.questions.length + "</b> questions shown" +
        (st.mode === "practice" ? " · click an option to check your answer" : "");
    }

    this.updateStats(rows);
  };

  View.prototype.updateStats = function (rows) {
    var self = this;
    var attempted = 0, correct = 0;
    this.questions.forEach(function (q) {
      var r = self.progress[q.n];
      if (r && r.pick != null) { attempted++; if (r.pick === q.a) correct++; }
    });
    var set = function (role, v) { var el = self.q(role); if (el) el.textContent = v; };
    set("sTotal", this.questions.length);
    set("sShown", rows.length);
    set("sAttempted", attempted);
    set("sCorrect", correct);
    set("sWrong", attempted - correct);
    set("sAcc", attempted ? Math.round((correct / attempted) * 100) + "%" : "—");
  };

  View.prototype.buildTopicFilter = function () {
    var sel = this.q("topic");
    if (!sel) return;
    var self = this;
    var topics = [];
    this.questions.forEach(function (q) { if (topics.indexOf(q.topic) === -1) topics.push(q.topic); });
    topics.sort(function (a, b) { return a.localeCompare(b); });
    sel.innerHTML = '<option value="">All topics (' + topics.length + ")</option>" +
      topics.map(function (t) {
        var n = self.questions.filter(function (q) { return q.topic === t; }).length;
        return '<option value="' + esc(t) + '">' + esc(t) + " (" + n + ")</option>";
      }).join("");
  };

  View.prototype.exportCsv = function () {
    var self = this;
    var cfg = this.cfg;
    var cols = ["No.", "Topic", "Difficulty", "Question", "Option A", "Option B", "Option C", "Option D",
                "Correct Answer", "Explanation", cfg.referenceLabel, "Landmark Case", "Exam Tip"];
    var lines = [cols.map(csvCell).join(",")];
    this.questions.filter(function (q) { return self.matches(q); }).forEach(function (q) {
      lines.push([
        q.n, q.topic, q.diff, q.q,
        stripPrefix(q.o[0]), stripPrefix(q.o[1]), stripPrefix(q.o[2]), stripPrefix(q.o[3]),
        LETTERS[q.a] + ". " + stripPrefix(q.o[q.a]), q.ex, q.ref, q.lc || "", q.tip || "",
      ].map(csvCell).join(","));
    });
    var blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = cfg.csvName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  };

  View.prototype.wire = function () {
    var self = this;
    var st = this.state;
    var on = function (role, ev, fn) { var el = self.q(role); if (el) el.addEventListener(ev, fn); };

    on("search", "input", function (e) { st.search = e.target.value; self.render(); });
    on("topic", "change", function (e) { st.topic = e.target.value; self.render(); });
    on("diff", "change", function (e) { st.diff = e.target.value; self.render(); });
    on("odd", "change", function (e) { st.odd = e.target.value; self.render(); });

    $$('[data-role="mode"]', this.panel).forEach(function (b) {
      b.addEventListener("click", function () {
        st.mode = b.dataset.mode;
        $$('[data-role="mode"]', self.panel).forEach(function (x) { x.classList.toggle("on", x === b); });
        self.render();
      });
    });

    on("reveal", "click", function (e) {
      st.revealAll = !st.revealAll;
      e.currentTarget.classList.toggle("on", st.revealAll);
      e.currentTarget.textContent = st.revealAll ? "🙈 Hide answers" : "👁 Reveal all";
      self.render();
    });

    on("reset", "click", function () {
      if (!window.confirm("Clear all saved answers and scores for " + self.cfg.tab + "?")) return;
      self.progress = {};
      saveJSON(self.storeKey, self.progress);
      self.render();
    });

    on("csv", "click", function () { self.exportCsv(); });

    on("print", "click", function () {
      st.revealAll = true;
      self.render();
      window.print();
    });

    // Option clicks are scoped to this panel, so the two subjects never interfere.
    this.panel.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".opt") : null;
      if (!btn) return;
      var tr = btn.closest("tr");
      if (!tr) return;
      var q = self.byN[+tr.dataset.n];
      if (!q) return;
      if (st.mode !== "practice") return;
      if (self.progress[q.n] && self.progress[q.n].pick != null) return;
      self.progress[q.n] = { pick: +btn.dataset.opt };
      saveJSON(self.storeKey, self.progress);
      self.paintRow(tr, q);
      self.updateStats(self.questions.filter(function (x) { return self.matches(x); }));
    });
  };

  View.prototype.init = function () {
    this.panel.innerHTML = panelHTML(this.cfg);
    if (!this.questions.length) { this.render(); return; }
    this.buildTopicFilter();
    this.wire();
    var mode = $('[data-role="mode"][data-mode="practice"]', this.panel);
    if (mode) mode.classList.add("on");
    this.render();
  };

  /* ------------------------------------------------------------- tabs/head */
  function activeView() {
    for (var i = 0; i < views.length; i++) if (views[i].cfg.key === activeKey) return views[i];
    return views[0] || null;
  }

  function syncToolbarHeight() {
    var v = activeView();
    if (!v) return;
    var tb = v.q("toolbar");
    if (tb) document.documentElement.style.setProperty("--toolbar-h", tb.offsetHeight + "px");
  }

  function updateHead(v) {
    var count = $("#metaCount");
    var diff = $("#metaDiff");
    var subj = $("#metaSubject");
    if (subj) subj.textContent = v ? v.cfg.tab : "—";
    if (!v || !v.questions.length) {
      if (count) count.textContent = "no data";
      if (diff) diff.textContent = "—";
      return;
    }
    if (count) count.textContent = v.questions.length + " MCQs";
    if (diff) {
      var c = { Easy: 0, Moderate: 0, Difficult: 0 };
      v.questions.forEach(function (q) { if (c[q.diff] != null) c[q.diff]++; });
      diff.textContent = c.Easy + " easy · " + c.Moderate + " moderate · " + c.Difficult + " difficult";
    }
  }

  function selectSubject(key, silent) {
    var v = null;
    for (var i = 0; i < views.length; i++) if (views[i].cfg.key === key) v = views[i];
    if (!v) return;
    activeKey = key;
    views.forEach(function (x) { x.panel.classList.toggle("active", x.cfg.key === key); });
    $$(".tab").forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.subject === key)); });
    v.render();
    syncToolbarHeight();
    updateHead(v);
    if (window.location.hash !== "#" + key && (!silent || !window.location.hash)) {
      history.replaceState(null, "", "#" + key);
    }
  }

  /* ------------------------------------------------------------------ boot */
  function boot() {
    var tabs = $("#tabstrip");
    var host = $("#panels");
    if (!tabs || !host) return;

    tabs.innerHTML = SUBJECTS.map(function (cfg) {
      var n = (DATA[cfg.dataKey] || []).length;
      return '<button class="tab" role="tab" id="tab-' + cfg.key + '" aria-selected="false" ' +
        'aria-controls="panel-' + cfg.key + '" data-subject="' + cfg.key + '">' +
        esc(cfg.tab) + ' <span class="tab-count">' + (n || "—") + "</span></button>";
    }).join("");

    host.innerHTML = SUBJECTS.map(function (cfg) {
      return '<section class="panel" id="panel-' + cfg.key + '" role="tabpanel" ' +
        'aria-labelledby="tab-' + cfg.key + '"></section>';
    }).join("");

    SUBJECTS.forEach(function (cfg) {
      var v = new View(cfg, $("#panel-" + cfg.key));
      v.init();
      views.push(v);
    });

    $$(".tab").forEach(function (t) {
      t.addEventListener("click", function () { selectSubject(t.dataset.subject); });
    });

    var hash = (window.location.hash || "").replace("#", "");
    var found = false;
    SUBJECTS.forEach(function (s) { if (s.key === hash) found = true; });
    selectSubject(found ? hash : SUBJECTS[0].key, true);

    window.addEventListener("hashchange", function () {
      var h = (window.location.hash || "").replace("#", "");
      if (h && h !== activeKey) selectSubject(h, true);
    });
    window.addEventListener("resize", syncToolbarHeight);

    console.log("%cLegal MCQ Study Hub ready", "color:#1f4e79;font-weight:700",
      SUBJECTS.map(function (s) { return s.tab + ":" + ((DATA[s.dataKey] || []).length); }).join(" | "));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.LEGAL_MCQ_APP = { subjects: SUBJECTS, views: views, select: selectSubject };
})();
