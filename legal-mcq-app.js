/* ============================================================================
 * Legal MCQ Study Hub — renderer for LEGAL_MCQ.html
 *
 * Data contract (populated by legal-mcq-constitution-*.js):
 *   window.LEGAL_MCQ.constitution = [ { n, topic, diff, q, o[4], a, ex, ref, lc, tip } ]
 *     n    : global sequence number (1..500)
 *     diff : "Easy" | "Moderate" | "Difficult"
 *     a    : 0-based index of the correct option (0=A, 1=B, 2=C, 3=D)
 *
 * Renders one row per question across the 13 required columns and keeps a
 * self-assessment score in localStorage.
 * ==========================================================================*/
(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D"];
  var DIFFS = ["Easy", "Moderate", "Difficult"];
  var STORE_KEY = "legalmcq:v1:constitution:progress";

  var DATA = (window.LEGAL_MCQ && window.LEGAL_MCQ.constitution) || [];
  var QUESTIONS = DATA.slice().sort(function (x, y) { return (x.n || 0) - (y.n || 0); });

  var state = {
    topic: "",
    diff: "",
    search: "",
    mode: "practice",   // practice | study | key
    odd: "all",         // all | wrong | unattempted | flagged
    progress: {},
  };

  var progress = loadProgress();
  state.progress = progress;

  function syncToolbarHeight() {
    var tb = $("#toolbar");
    if (tb) document.documentElement.style.setProperty("--toolbar-h", tb.offsetHeight + "px");
  }

  /* ------------------------------------------------------------- helpers */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function hl(s) {
    var out = esc(s);
    var term = state.search.trim();
    if (!term) return out;
    var re;
    try { re = new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"); }
    catch (e) { return out; }
    return out.replace(re, "<mark class=\"hit\">$1</mark>");
  }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* private mode */ }
  }

  function rec(q) { return progress[q.n] || null; }

  function matches(q) {
    if (state.topic && q.topic !== state.topic) return false;
    if (state.diff && q.diff !== state.diff) return false;
    if (state.odd === "wrong" && !(rec(q) && rec(q).pick !== q.a)) return false;
    if (state.odd === "unattempted" && rec(q)) return false;
    if (state.odd === "flagged" && !(rec(q) && rec(q).flag)) return false;
    var term = state.search.trim().toLowerCase();
    if (term) {
      var hay = [q.q, q.topic, q.ex, q.ref, q.lc, q.tip].concat(q.o || []).join(" ").toLowerCase();
      if (hay.indexOf(term) === -1) return false;
    }
    return true;
  }

  /* --------------------------------------------------------- row painting */
  function paintRow(tr, q) {
    var r = rec(q);
    var revealed = state.mode !== "practice" || !!(r && r.pick != null) || !!state.revealAll;
    tr.classList.toggle("revealed", revealed);

    var correctIdx = q.a;
    $$(".opt", tr).forEach(function (btn) {
      var i = +btn.dataset.opt;
      btn.classList.remove("picked", "correct", "wrong");
      if (revealed) {
        if (i === correctIdx) btn.classList.add("correct");
        else if (r && r.pick === i) btn.classList.add("wrong");
      } else if (r && r.pick === i) {
        btn.classList.add("picked");
      }
    });

    var badge = $(".ans-badge", tr);
    if (badge) {
      badge.textContent = revealed ? LETTERS[correctIdx] : "?";
      badge.classList.toggle("hidden", !revealed);
    }
    var note = $(".ans-txt", tr);
    if (note) note.style.visibility = revealed ? "visible" : "hidden";
  }

  /* --------------------------------------------------------------- render */
  function render() {
    var rows = QUESTIONS.filter(matches);
    var body = $("#mcqBody");
    if (!body) return;
    syncToolbarHeight();

    if (state.mode === "practice") document.body.classList.add("practice");
    else document.body.classList.remove("practice");
    document.body.classList.toggle("key", state.mode === "key");

    body.innerHTML = rows.map(function (q) {
      var tag = /Scenario|Assertion/i.test(q.q) ? '<span class="scenario-tag">Applied</span>' : "";
      var answerText = String(q.o[q.a] || "").replace(/^\(([A-D])\)\s*/i, "");
      var opts = LETTERS.map(function (L, i) {
        var dec = /^\((A|B|C|D)\)/.test(String(q.o[i] || "")) ? "" : "(" + L + ") ";
        return '<td class="col-opt opt-cell" data-col="' + L + '">' +
            '<button type="button" class="opt" data-opt="' + i + '">' +
              '<span class="letter">' + L + "</span>" +
              "<span>" + dec + hl(q.o[i] || "") + "</span>" +
            "</button></td>";
      }).join("");

      return '<tr data-n="' + q.n + '">' +
        '<td class="col-no cell-no">' + q.n + "</td>" +
        '<td class="col-topic"><span class="topic-tag">' + esc(q.topic) + "</span></td>" +
        '<td class="col-diff"><span class="pill ' + esc(q.diff) + '">' + esc(q.diff) + "</span></td>" +
        '<td class="col-q"><div class="q-text">' + tag + hl(q.q) + "</div></td>" +
        opts +
        '<td class="col-ans ans-cell"><span class="ans-badge hidden">?</span>' +
            '<span class="ans-txt" style="visibility:hidden">' + esc(answerText) + "</span></td>" +
        '<td class="col-ex exp"><span class="lbl">Explanation</span>' + hl(q.ex || "—") + "</td>" +
        '<td class="col-ref ref"><span class="lbl">Constitutional Reference</span><span class="cite">' + esc(q.ref || "—") + "</span></td>" +
        '<td class="col-case case"><span class="lbl">Landmark Case</span>' + (q.lc ? hl(q.lc) : '<span class="blank">—</span>') + "</td>" +
        '<td class="col-tip tip"><span class="lbl">Exam Tip</span>' + (q.tip ? hl(q.tip) : '<span class="blank">—</span>') + "</td>" +
      "</tr>";
    }).join("");

    $$("#mcqBody tr").forEach(function (tr) {
      var q = byN(+tr.dataset.n);
      if (q) paintRow(tr, q);
    });

    $("#emptyNote").hidden = rows.length !== 0;
    $("#resultLine").innerHTML = "<b>" + rows.length + "</b> of <b>" + QUESTIONS.length +
      "</b> questions shown" + (state.mode === "practice" ? " · click an option to check your answer" : "");
    updateStats(rows);
  }

  function byN(n) {
    for (var i = 0; i < QUESTIONS.length; i++) if (QUESTIONS[i].n === n) return QUESTIONS[i];
    return null;
  }

  function updateStats(rows) {
    var total = QUESTIONS.length;
    var attempted = 0, correct = 0;
    QUESTIONS.forEach(function (q) {
      var r = rec(q);
      if (r && r.pick != null) { attempted++; if (r.pick === q.a) correct++; }
    });
    var wrong = attempted - correct;
    set("#sTotal", total);
    set("#sShown", rows.length);
    set("#sAttempted", attempted);
    set("#sCorrect", correct);
    set("#sWrong", wrong);
    set("#sAcc", attempted ? Math.round((correct / attempted) * 100) + "%" : "—");
  }

  function set(sel, v) { var el = $(sel); if (el) el.textContent = v; }

  /* ------------------------------------------------------------- controls */
  function buildTopicFilter() {
    var sel = $("#fTopic");
    if (!sel) return;
    var topics = [];
    QUESTIONS.forEach(function (q) { if (topics.indexOf(q.topic) === -1) topics.push(q.topic); });
    topics.sort(function (a, b) { return a.localeCompare(b); });
    sel.innerHTML = '<option value="">All topics (' + topics.length + ")</option>" +
      topics.map(function (t) {
        var n = QUESTIONS.filter(function (q) { return q.topic === t; }).length;
        return '<option value="' + esc(t) + '">' + esc(t) + " (" + n + ")</option>";
      }).join("");
  }

  function wire() {
    var s = $("#fSearch");
    if (s) s.addEventListener("input", function () { state.search = s.value; render(); });

    var t = $("#fTopic");
    if (t) t.addEventListener("change", function () { state.topic = t.value; render(); });

    var d = $("#fDiff");
    if (d) d.addEventListener("change", function () { state.diff = d.value; render(); });

    var o = $("#fOdd");
    if (o) o.addEventListener("change", function () { state.odd = o.value; render(); });

    $$("[data-mode]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.mode = b.dataset.mode;
        $$("[data-mode]").forEach(function (x) { x.classList.toggle("on", x === b); });
        render();
      });
    });

    var reveal = $("#fReveal");
    if (reveal) reveal.addEventListener("click", function () {
      state.revealAll = !state.revealAll;
      reveal.classList.toggle("on", state.revealAll);
      reveal.textContent = state.revealAll ? "🙈 Hide answers" : "👁 Reveal all";
      render();
    });

    var reset = $("#fReset");
    if (reset) reset.addEventListener("click", function () {
      if (!window.confirm("Clear all saved answers and scores for this question bank?")) return;
      progress = {};
      state.progress = progress;
      saveProgress();
      render();
    });

    var csv = $("#fCsv");
    if (csv) csv.addEventListener("click", exportCsv);

    var pr = $("#fPrint");
    if (pr) pr.addEventListener("click", function () {
      state.revealAll = true;
      render();
      window.print();
    });

    // delegated option clicks
    document.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".opt") : null;
      if (!btn) return;
      var tr = btn.closest("tr");
      if (!tr) return;
      var q = byN(+tr.dataset.n);
      if (!q) return;
      if (state.mode !== "practice") return;      // study/key modes are read-only
      if (rec(q) && rec(q).pick != null) return;  // lock after first attempt
      progress[q.n] = { pick: +btn.dataset.opt, flag: false };
      saveProgress();
      paintRow(tr, q);
      updateStats(QUESTIONS.filter(matches));
    });
  }

  function exportCsv() {
    var cols = ["No.", "Topic", "Difficulty", "Question", "Option A", "Option B", "Option C", "Option D",
                "Correct Answer", "Explanation", "Constitutional Reference", "Landmark Case", "Exam Tip"];
    var lines = [cols.map(csvCell).join(",")];
    QUESTIONS.filter(matches).forEach(function (q) {
      var correctText = q.o[q.a] || "";
      lines.push([
        q.n, q.topic, q.diff, q.q, q.o[0], q.o[1], q.o[2], q.o[3],
        LETTERS[q.a] + ". " + correctText, q.ex, q.ref, q.lc || "", q.tip || "",
      ].map(csvCell).join(","));
    });
    var blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "constitution-of-india-500-mcq.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }

  function csvCell(v) {
    var s = String(v == null ? "" : v);
    return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }

  /* ----------------------------------------------------------------- boot */
  function boot() {
    var banner = $("#loadWarn");
    if (!QUESTIONS.length) {
      if (banner) banner.hidden = false;
      return;
    }
    if (banner) banner.hidden = true;
    buildTopicFilter();
    wire();
    var md = $("#metaDiff");
    if (md) {
      var c = { Easy: 0, Moderate: 0, Difficult: 0 };
      QUESTIONS.forEach(function (q) { if (c[q.diff] != null) c[q.diff]++; });
      md.textContent = c.Easy + " easy · " + c.Moderate + " moderate · " + c.Difficult + " difficult";
    }
    render();
    window.addEventListener("resize", syncToolbarHeight);
    console.log("%cLegal MCQ Hub ready", "color:#1f4e79;font-weight:700",
      "| Constitution of India:", QUESTIONS.length, "questions");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.LEGAL_MCQ_APP = { state: state, render: render, questions: QUESTIONS };
})();
