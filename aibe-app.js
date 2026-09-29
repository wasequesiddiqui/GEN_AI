/* ============================================================================
 * AIBE XXI (2026) — Interactive study platform engine
 * Vanilla JS. No dependencies. Offline-capable (localStorage persistence).
 * ----------------------------------------------------------------------------
 * Data contracts (each loaded before this file):
 *   window.AIBE_SYLLABUS  = { meta, subjects:[{id,name,weight,priority,icon,topics[]}] }
 *   window.AIBE_NOTES     = { [subjectId]: { overview, topics:[{id,name,concept,
 *                              provisions[], cases[], exceptions[], confusions[],
 *                              aibeFocus[], flashpoints[] }] } }
 *   window.AIBE_QUESTIONS = [ { id, subject, topic, subtopic, difficulty,
 *                              cognitiveLevel, questionType, question, options[4],
 *                              correctIndex, explanation, legalBasis,
 *                              wrongOptionExplanations[4], flashpoint, source } ]
 *   window.AIBE_MOCKS     = [ { id, title, description, questionIds[] } ]
 *   window.AIBE_REVISION  = { rapid[], oneDay[], sevenDay[], final{} }
 * ==========================================================================*/
(function () {
  "use strict";

  /* ------------------------------------------------------------- utilities */
  var LETTERS = ["A", "B", "C", "D"];
  var STORE_KEY = "aibe21-state-v1";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    if (s === undefined || s === null) return "";
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function pct(n, d) { return d > 0 ? Math.round((n / d) * 1000) / 10 : 0; }

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function fmtClock(ms) {
    if (ms < 0) ms = 0;
    var total = Math.floor(ms / 1000);
    var h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
    return (h > 0 ? h + ":" + pad(m) : pad(m)) + ":" + pad(s);
  }

  /** Deterministic 32-bit string hash (FNV-1a style). */
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /** Seeded PRNG (mulberry32). */
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleWith(arr, rand) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /**
   * Option display order for a question. Authored order is preserved unless a
   * deterministic salt is supplied (randomise mode / mock tests), in which case
   * a stable permutation is derived from the question id + salt so that the
   * order does not change on re-render.
   */
  function optionOrder(q, salt) {
    if (!salt) return [0, 1, 2, 3];
    return shuffleWith([0, 1, 2, 3], rng(hash(q.id + "|" + salt)));
  }

  /* ------------------------------------------------------------ data model */
  var SYL = window.AIBE_SYLLABUS || { meta: {}, subjects: [] };
  var NOTES = window.AIBE_NOTES || {};
  var QUESTIONS = window.AIBE_QUESTIONS || [];
  var MOCKS = window.AIBE_MOCKS || [];
  var REVISION = window.AIBE_REVISION || { rapid: [], oneDay: [], sevenDay: [], final: {} };

  var SUBJECTS = SYL.subjects || [];
  var SUBJECT_BY_ID = {};
  SUBJECTS.forEach(function (s) { SUBJECT_BY_ID[s.id] = s; });

  var TOPIC_BY_ID = {};
  SUBJECTS.forEach(function (s) {
    (s.topics || []).forEach(function (t) { TOPIC_BY_ID[t.id] = { topic: t, subject: s }; });
  });

  var Q_BY_ID = {};
  QUESTIONS.forEach(function (q, i) {
    if (!q || !q.id) return;
    // Normalise: accept correctAnswer as a letter (A-D) or a 0-based index,
    // and guarantee a 4-slot wrongOptionExplanations array. This keeps the
    // authored data compatible with the documented schema while giving the
    // engine an unambiguous numeric index.
    if (typeof q.correctIndex !== "number") {
      if (typeof q.correctAnswer === "number") q.correctIndex = q.correctAnswer;
      else if (typeof q.correctAnswer === "string") {
        var li = LETTERS.indexOf(q.correctAnswer.trim().toUpperCase());
        q.correctIndex = li >= 0 ? li : 0;
      } else q.correctIndex = 0;
    }
    q.options = q.options || ["", "", "", ""];
    var w = q.wrongOptionExplanations;
    if (!Array.isArray(w)) {
      w = ["", "", "", ""];
      if (q.whyWrong && typeof q.whyWrong === "object") {
        Object.keys(q.whyWrong).forEach(function (k) {
          var idx = LETTERS.indexOf(String(k).trim().toUpperCase());
          if (idx >= 0) w[idx] = q.whyWrong[k];
        });
      }
    }
    while (w.length < 4) w.push("");
    q.wrongOptionExplanations = w;
    q.questionType = q.questionType || "Direct";
    q.difficulty = q.difficulty || "Moderate";
    q.cognitiveLevel = q.cognitiveLevel || "Understanding";
    if (!Q_BY_ID[q.id]) Q_BY_ID[q.id] = q;
  });

  function correctIdx(q) { return q.correctIndex; }


  function subjectName(id) { return (SUBJECT_BY_ID[id] && SUBJECT_BY_ID[id].name) || id; }
  function topicName(id) { return (TOPIC_BY_ID[id] && TOPIC_BY_ID[id].topic.name) || id; }
  function notesFor(subjectId) { return NOTES[subjectId] || null; }

  /* ---------------------------------------------------------------- storage */
  var DEFAULT_STATE = {
    attempts: {},      // qid -> { seen, correct, wrong, lastCorrect, lastAt, history:[bool] }
    bookmarks: [],
    review: [],
    revision: {},      // qid -> 'mastered' | 'learning' | 'needs-revision' | 'difficult'
    mocks: {},         // mockId -> { best, attempts:[{score,total,at,sections}] }
    sessions: {},      // sessionId -> serialised quiz session
    lastSession: null,
    meta: { createdAt: null, updatedAt: null }
  };

  var State = {
    data: null,
    load: function () {
      try {
        var raw = window.localStorage.getItem(STORE_KEY);
        this.data = raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_STATE));
      } catch (e) {
        this.data = JSON.parse(JSON.stringify(DEFAULT_STATE));
      }
      var d = this.data;
      d.attempts = d.attempts || {};
      d.bookmarks = d.bookmarks || [];
      d.review = d.review || [];
      d.revision = d.revision || {};
      d.mocks = d.mocks || {};
      d.sessions = d.sessions || {};
      d.meta = d.meta || { createdAt: null, updatedAt: null };
      if (!d.meta.createdAt) d.meta.createdAt = Date.now();
      return d;
    },
    save: function () {
      try {
        this.data.meta.updatedAt = Date.now();
        window.localStorage.setItem(STORE_KEY, JSON.stringify(this.data));
      } catch (e) {
        console.warn("AIBE: could not persist state (storage unavailable).", e);
      }
    },
    reset: function () {
      this.data = JSON.parse(JSON.stringify(DEFAULT_STATE));
      this.data.meta.createdAt = Date.now();
      this.save();
    },
    attempt: function (qid) { return this.data.attempts[qid] || null; },
    record: function (qid, isCorrect) {
      var a = this.data.attempts[qid] || { seen: 0, correct: 0, wrong: 0, history: [], lastAt: 0, lastCorrect: null };
      a.seen += 1;
      if (isCorrect) a.correct += 1; else a.wrong += 1;
      a.lastCorrect = !!isCorrect;
      a.lastAt = Date.now();
      a.history.push(!!isCorrect);
      if (a.history.length > 40) a.history = a.history.slice(-40);
      this.data.attempts[qid] = a;
      // Auto spaced-revision classification
      if (isCorrect && !this.data.revision[qid]) this.data.revision[qid] = "learning";
      if (!isCorrect) this.data.revision[qid] = "difficult";
      this.save();
    },
    toggleArray: function (key, qid) {
      var arr = this.data[key];
      var i = arr.indexOf(qid);
      if (i >= 0) arr.splice(i, 1); else arr.push(qid);
      this.save();
      return arr.indexOf(qid) >= 0;
    },
    has: function (key, qid) { return this.data[key].indexOf(qid) >= 0; },
    setRevision: function (qid, val) {
      if (val) this.data.revision[qid] = val; else delete this.data.revision[qid];
      this.save();
    },
  };

  /* --------------------------------------------------------------- questions */
  function questionsBySubject(subjectId) {
    return QUESTIONS.filter(function (q) { return q.subject === subjectId; });
  }

  function attemptsStats() {
    var ids = Object.keys(State.data.attempts);
    var attempted = ids.filter(function (id) { return State.data.attempts[id].seen > 0; });
    var correct = 0, total = 0;
    ids.forEach(function (id) {
      var a = State.data.attempts[id];
      correct += a.correct; total += a.correct + a.wrong;
    });
    var uniqueCorrect = ids.filter(function (id) { return State.data.attempts[id].lastCorrect; }).length;
    return {
      uniqueAttempted: attempted.length,
      totalAnswers: total,
      correctAnswers: correct,
      incorrectAnswers: total - correct,
      accuracy: pct(correct, total),
      lastPassCorrect: uniqueCorrect,
      remaining: Math.max(0, QUESTIONS.length - attempted.length),
    };
  }

  function accuracyFor(predicate) {
    var c = 0, t = 0;
    Object.keys(State.data.attempts).forEach(function (id) {
      var q = Q_BY_ID[id];
      if (!q || !predicate(q)) return;
      var a = State.data.attempts[id];
      c += a.correct; t += a.correct + a.wrong;
    });
    return { correct: c, total: t, accuracy: pct(c, t) };
  }

  /* -------------------------------------------------------------- rendering */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "dataset") Object.keys(attrs[k]).forEach(function (d) { n.dataset[d] = attrs[k][d]; });
      else n.setAttribute(k, attrs[k]);
    });
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  /* =========================== VIEWS ==================================== */
  var Views = {};

  /* ------------------------------------------------------------- dashboard */
  Views.dashboard = function (root) {
    var st = attemptsStats();
    var subjectsDone = SUBJECTS.filter(function (s) { return accuracyFor(function (q) { return q.subject === s.id; }).total > 0; }).length;
    var mockList = Object.keys(State.data.mocks);

    var h = [];
    h.push('<div class="grid cols-4">');
    h.push(stat("Total questions", QUESTIONS.length, ""));
    h.push(stat("Attempted", st.uniqueAttempted, "var(--navy-600)"));
    h.push(stat("Correct answers", st.correctAnswers, "var(--ok)", "ok"));
    h.push(stat("Incorrect answers", st.incorrectAnswers, "var(--bad)", "bad"));
    h.push(stat("Accuracy", st.accuracy + "%", "var(--gold-500)", "warn"));
    h.push(stat("Remaining", st.remaining, ""));
    h.push(stat("Subjects with progress", subjectsDone + " / " + SUBJECTS.length, ""));
    h.push(stat("Mocks attempted", mockList.length + " / " + MOCKS.length, ""));
    h.push("</div>");

    h.push('<div class="card"><h3>⚖️ Exam at a glance</h3><div class="table-wrap"><table><tbody>');
    h.push('<tr><th style="width:40%">Paper</th><td>' + esc(SYL.meta.paper || "—") + '</td></tr>');
    h.push('<tr><th>Questions</th><td>' + (SYL.meta.totalQuestions || 100) + ' questions, ' + (SYL.meta.totalMarks || 100) + ' marks</td></tr>');
    h.push('<tr><th>Duration</th><td>' + esc(SYL.meta.duration || "3 hours") + '</td></tr>');
    h.push('<tr><th>Negative marking</th><td>' + (SYL.meta.negativeMarking ? "Yes" : "No") + '</td></tr>');
    h.push('<tr><th>Mode</th><td>' + esc(SYL.meta.pattern || "—") + '</td></tr>');
    h.push('<tr><th>Syllabus dated</th><td>' + esc(SYL.meta.syllabusDate || "—") + '</td></tr>');
    h.push('</tbody></table></div>');
    h.push('<p class="small muted">Sources: <code>Syllabus for All India Bar Exam-XXI.pdf</code> (Bar Council of India Trust, dated ' + esc(SYL.meta.syllabusDate || "") + ') and <code>AIBE_XXI_English_Set_A.pdf</code>. See <code>AIBE_ANALYSIS.md</code> for the full source analysis and the conflict register.</p></div>');

    // Subject progress
    h.push('<div class="card"><h3>📊 Subject progress</h3>');
    h.push('<div class="table-wrap"><table><thead><tr><th>Subject</th><th class="num">Weight</th><th class="num">Bank</th><th class="num">Attempted</th><th class="num">Correct</th><th class="num">Accuracy</th><th>Progress</th></tr></thead><tbody>');
    SUBJECTS.forEach(function (s) {
      var pool = questionsBySubject(s.id);
      var a = accuracyFor(function (q) { return q.subject === s.id; });
      var attemptedUnique = pool.filter(function (q) { return !!State.data.attempts[q.id]; }).length;
      h.push('<tr>' +
        '<td><button class="btn sm ghost" data-goto-subject="' + esc(s.id) + '">' + esc(s.icon || "") + " " + esc(s.name) + '</button></td>' +
        '<td class="num">' + s.weight + '</td>' +
        '<td class="num">' + pool.length + '</td>' +
        '<td class="num">' + attemptedUnique + '</td>' +
        '<td class="num">' + a.correct + '</td>' +
        '<td class="num">' + (a.total ? a.accuracy + "%" : "—") + '</td>' +
        '<td><div class="progress"><i style="width:' + pct(attemptedUnique, Math.max(1, pool.length)) + '%"></i></div></td>' +
        '</tr>');
    });
    h.push('</tbody></table></div></div>');

    // Mock scores
    h.push('<div class="card"><h3>🧪 Mock-test scores</h3>');
    if (!mockList.length) {
      h.push('<p class="muted small">No mock tests attempted yet. Open <b>Mock Tests</b> to start a full-length paper.</p>');
    } else {
      h.push('<div class="table-wrap"><table><thead><tr><th>Mock</th><th class="num">Best</th><th class="num">Attempts</th><th class="num">Last</th></tr></thead><tbody>');
      mockList.forEach(function (id) {
        var m = State.data.mocks[id];
        var last = m.attempts[m.attempts.length - 1];
        h.push('<tr><td>' + esc(id) + '</td><td class="num">' + m.best + '/' + last.total + '</td><td class="num">' + m.attempts.length + '</td><td class="num">' + last.score + '/' + last.total + '</td></tr>');
      });
      h.push('</tbody></table></div>');
    }
    h.push('</div>');

    // Recommendations
    h.push('<div class="card"><h3>🎯 What to do next</h3><div id="dashRecos"></div></div>');

    root.innerHTML = h.join("");
    renderRecommendations($("#dashRecos"), 6);

    $$("[data-goto-subject]", root).forEach(function (b) {
      b.addEventListener("click", function () { goToBank({ subject: b.dataset.gotoSubject }); });
    });
  };

  function stat(label, value, color, cls) {
    return '<div class="stat ' + (cls || "") + '"><div class="label">' + esc(label) + '</div><div class="value"' +
      (color ? ' style="color:' + color + '"' : "") + ">" + esc(value) + "</div></div>";
  }

  /* --------------------------------------------------------------- syllabus */
  Views.syllabus = function (root) {
    var h = [];
    h.push('<div class="card"><h3>📋 Official weightage (BCI Trust notification dated ' + esc(SYL.meta.syllabusDate || "") + ')</h3>');
    h.push('<p class="small muted">Transcribed from the scanned syllabus. <b>Weight</b> is the number of questions allotted by the Bar Council of India Trust. Questions in the Set A paper were mapped to these subjects — see <code>AIBE_ANALYSIS.md</code> §3.1 for the question-by-question mapping and the one ±1 classification ambiguity (Administrative Law vs Labour).</p>');
    h.push('<div class="table-wrap"><table><thead><tr><th class="num">#</th><th>Subject</th><th class="num">Questions</th><th>Priority</th><th class="num">Bank size</th><th>Topics</th></tr></thead><tbody>');
    SUBJECTS.forEach(function (s, i) {
      h.push('<tr><td class="num">' + (i + 1) + '</td><td><b>' + esc(s.name) + '</b></td><td class="num">' + s.weight + '</td><td>' + esc(s.priority) + '</td><td class="num">' + questionsBySubject(s.id).length + '</td><td class="num">' + (s.topics || []).length + '</td></tr>');
    });
    var totalWeight = SUBJECTS.reduce(function (a, s) { return a + s.weight; }, 0);
    h.push('<tr><th colspan="2">Total</th><th class="num">' + totalWeight + '</th><th colspan="3"></th></tr>');
    h.push('</tbody></table></div>');
    if (totalWeight !== (SYL.meta.totalQuestions || 100)) {
      h.push('<div class="callout bad">Weight total is ' + totalWeight + ', but the syllabus states ' + (SYL.meta.totalQuestions || 100) + '. Check <code>aibe-syllabus.js</code>.</div>');
    }
    h.push('</div>');

    h.push('<h3 style="margin-top:1.2rem">Syllabus map — subject, topics, subtopics, statutes, priority</h3>');
    SUBJECTS.forEach(function (s) {
      var open = "";
      var body = [];
      body.push('<p class="small"><b>Priority:</b> ' + esc(s.priority) + ' &middot; <b>Weight:</b> ' + s.weight + ' &middot; <b>Source:</b> ' + esc(s.source || "SYLLABUS") + '</p>');
      body.push('<div class="table-wrap"><table><thead><tr><th style="width:26%">Topic</th><th>Subtopics</th><th class="num">Bank</th></tr></thead><tbody>');
      (s.topics || []).forEach(function (t) {
        var n = QUESTIONS.filter(function (q) { return q.topic === t.id; }).length;
        body.push('<tr><td><b>' + esc(t.name) + '</b></td><td>' + (t.subtopics || []).map(esc).join(" &middot; ") + '</td><td class="num">' + n + '</td></tr>');
      });
      body.push('</tbody></table></div>');
      if (notesFor(s.id)) body.push('<div class="btn-row"><button class="btn sm" data-notes-subject="' + esc(s.id) + '">Open study notes</button><button class="btn sm ghost" data-bank-subject="' + esc(s.id) + '">Practise this subject</button></div>');
      h.push('<details' + open + '><summary>' + esc(s.icon || "") + " " + esc(s.name) + '</summary><div class="details-body">' + body.join("") + '</div></details>');
    });

    root.innerHTML = h.join("");
    $$("[data-notes-subject]", root).forEach(function (b) {
      b.addEventListener("click", function () { goToNotes(b.dataset.notesSubject); });
    });
    $$("[data-bank-subject]", root).forEach(function (b) {
      b.addEventListener("click", function () { goToBank({ subject: b.dataset.bankSubject }); });
    });
  };

  /* ------------------------------------------------------------ study notes */
  var notesSelection = { subject: SUBJECTS.length ? SUBJECTS[0].id : null, open: {} };

  Views.notes = function (root) {
    goToNotes.view = true;
    var opts = SUBJECTS.filter(function (s) { return !!notesFor(s.id); }).map(function (s) {
      return '<option value="' + esc(s.id) + '"' + (s.id === notesSelection.subject ? " selected" : "") + ">" + esc(s.icon || "") + " " + esc(s.name) + "</option>";
    }).join("");

    var h = [];
    h.push('<div class="filter-bar"><label class="field">Subject<select id="notesSubject">' + opts + '</select></label>');
    h.push('<div class="btn-row"><button class="btn sm ghost" id="notesExpandAll">Expand all</button><button class="btn sm ghost" id="notesCollapseAll">Collapse all</button><button class="btn sm" id="notesPractise">Practise this subject</button></div></div>');
    h.push('<div id="notesBody"></div>');
    root.innerHTML = h.join("");

    $("#notesSubject").addEventListener("change", function (e) {
      notesSelection.subject = e.target.value;
      notesSelection.open = {};
      renderNotesBody();
    });
    $("#notesExpandAll").addEventListener("click", function () { setAllDetails(true); });
    $("#notesCollapseAll").addEventListener("click", function () { setAllDetails(false); });
    $("#notesPractise").addEventListener("click", function () { goToBank({ subject: notesSelection.subject }); });

    function setAllDetails(open) {
      $$("#notesBody details").forEach(function (d) { d.open = open; });
    }
    renderNotesBody();
  };

  function renderNotesBody() {
    var sid = notesSelection.subject;
    var s = SUBJECT_BY_ID[sid];
    var n = notesFor(sid);
    var host = $("#notesBody");
    if (!host) return;
    if (!n) { host.innerHTML = '<div class="callout">No notes authored for this subject yet.</div>'; return; }

    var h = [];
    h.push('<div class="card"><h3>' + esc(s.icon || "") + " " + esc(s.name) + '</h3>');
    if (n.overview) h.push('<p>' + esc(n.overview) + '</p>');
    var pool = questionsBySubject(sid);
    h.push('<p class="small muted">' + pool.length + ' practice questions in the bank for this subject &middot; ' + (s.topics || []).length + ' syllabus topics &middot; priority: ' + esc(s.priority) + '</p>');
    h.push('</div>');

    (n.topics || []).forEach(function (t) {
      var b = [];
      if (t.concept) b.push('<p>' + esc(t.concept) + '</p>');
      b.push(listBlock("Legal provisions", t.provisions, "mono"));
      if (t.cases && t.cases.length) {
        b.push("<h4>Important cases</h4>");
        t.cases.forEach(function (c) {
          b.push('<div class="case-item"><div class="name">' + esc(c.name) + '</div><div class="small">' + esc(c.principle) + '</div></div>');
        });
      }
      b.push(listBlock("Exceptions and qualifications", t.exceptions));
      b.push(listBlock("Common confusions", t.confusions));
      b.push(listBlock("AIBE focus", t.aibeFocus));
      if (t.flashpoints && t.flashpoints.length) {
        b.push('<h4>⚡ Flashpoints</h4>');
        b.push('<div class="flash-list">' + t.flashpoints.map(function (f) {
          return '<div class="flash"><span>⚡</span><div>' + esc(f) + "</div></div>";
        }).join("") + '</div>');
      }
      var qn = QUESTIONS.filter(function (q) { return q.topic === t.id; }).length;
      b.push('<div class="btn-row" style="margin-top:.6rem"><button class="btn sm" data-practise-topic="' + esc(t.id) + '">Practise this topic (' + qn + ')</button></div>');
      h.push('<details' + (notesSelection.open[t.id] ? " open" : "") + ' data-topic="' + esc(t.id) + '"><summary>' + esc(t.name) + '</summary><div class="details-body">' + b.join("") + "</div></details>");
    });

    host.innerHTML = h.join("");
    $$("[data-practise-topic]", host).forEach(function (btn) {
      btn.addEventListener("click", function () { goToBank({ subject: sid, topic: btn.dataset.practiseTopic }); });
    });
    $$("#notesBody details").forEach(function (d) {
      d.addEventListener("toggle", function () { notesSelection.open[d.dataset.topic] = d.open; });
    });
  }

  function listBlock(title, arr, cls) {
    if (!arr || !arr.length) return "";
    return "<h4>" + esc(title) + "</h4><ul class=\"tight\">" +
      arr.map(function (x) { return '<li' + (cls === "mono" ? ' class="mono small"' : "") + ">" + esc(x) + "</li>"; }).join("") +
      "</ul>";
  }

  /* ------------------------------------------------------------ flashpoints */
  Views.flashpoints = function (root) {
    var h = [];
    h.push('<div class="card flat"><p class="small muted">Every flashpoint in the study notes, grouped by subject. These are the single-line, high-yield facts to revise in the last week.</p>');
    h.push('<label class="field" style="max-width:380px">Search flashpoints<input type="search" id="flashSearch" placeholder="e.g. Article 253, s.133, PUDR"></label></div>');
    h.push('<div id="flashBody"></div>');
    root.innerHTML = h.join("");

    function draw(term) {
      var t = (term || "").toLowerCase();
      var total = 0, out = [];
      SUBJECTS.forEach(function (s) {
        var n = notesFor(s.id);
        if (!n) return;
        var items = [];
        (n.topics || []).forEach(function (topic) {
          (topic.flashpoints || []).forEach(function (f) {
            if (!t || f.toLowerCase().indexOf(t) >= 0) items.push({ f: f, topic: topic.name });
          });
        });
        if (!items.length) return;
        total += items.length;
        out.push('<details open><summary>' + esc(s.icon || "") + " " + esc(s.name) + ' <span class="tag">' + items.length + '</span></summary><div class="details-body">');
        var lastTopic = null;
        items.forEach(function (it) {
          if (it.topic !== lastTopic) { out.push('<h4 class="small muted" style="margin:.6rem 0 .3rem">' + esc(it.topic) + "</h4>"); lastTopic = it.topic; }
          out.push('<div class="flash"><span>⚡</span><div>' + esc(it.f) + "</div></div>");
        });
        out.push("</div></details>");
      });
      var host = $("#flashBody");
      host.innerHTML = (total ? '<p class="small muted">' + total + ' flashpoints shown.</p>' : '<div class="callout bad">No flashpoints match that search.</div>') + out.join("");
    }
    draw("");
    $("#flashSearch").addEventListener("input", function (e) { draw(e.target.value); });
  };

  /* ---------------------------------------------------------- question bank */
  var bank = {
    subject: "", topic: "", difficulty: "", type: "", level: "", q: "",
    onlyBookmarked: false, onlyWrong: false, onlyUnseen: false, onlyReview: false,
    randomise: false, order: [], idx: 0, salt: "bank",
  };

  function filterQuestions() {
    var t = bank.q.trim().toLowerCase();
    var list = QUESTIONS.filter(function (q) {
      if (bank.subject && q.subject !== bank.subject) return false;
      if (bank.topic && q.topic !== bank.topic) return false;
      if (bank.difficulty && q.difficulty !== bank.difficulty) return false;
      if (bank.type && q.questionType !== bank.type) return false;
      if (bank.level && q.cognitiveLevel !== bank.level) return false;
      if (bank.onlyBookmarked && !State.has("bookmarks", q.id)) return false;
      if (bank.onlyReview && !State.has("review", q.id)) return false;
      if (bank.onlyWrong && !(State.attempt("q") || {})) { /* placeholder, replaced below */ }
      if (bank.onlyWrong) { var a = State.data.attempts[q.id]; if (!a || a.lastCorrect) return false; }
      if (bank.onlyUnseen && State.data.attempts[q.id]) return false;
      if (t) {
        var hay = [q.question, q.explanation, q.legalBasis, q.flashpoint, subjectName(q.subject), topicName(q.topic), (q.options || []).join(" ")].join(" ").toLowerCase();
        if (hay.indexOf(t) < 0) return false;
      }
      return true;
    });
    if (bank.randomise) list = shuffleWith(list, rng(hash(bank.salt + "|filters")));
    return list;
  }

  Views.bank = function (root) {
    var subjectOpts = '<option value="">All subjects</option>' + SUBJECTS.map(function (s) {
      return '<option value="' + esc(s.id) + '"' + (bank.subject === s.id ? " selected" : "") + ">" + esc(s.icon || "") + " " + esc(s.name) + "</option>";
    }).join("");
    var pool = bank.subject ? questionsBySubject(bank.subject) : QUESTIONS;
    var topicIds = Object.keys(pool.reduce(function (m, q) { m[q.topic] = 1; return m; }, {}));
    var topicOpts = '<option value="">All topics</option>' + topicIds.map(function (id) {
      return '<option value="' + esc(id) + '"' + (bank.topic === id ? " selected" : "") + ">" + esc(topicName(id)) + "</option>";
    }).join("");
    var types = uniq(QUESTIONS.map(function (q) { return q.questionType; }));
    var levels = uniq(QUESTIONS.map(function (q) { return q.cognitiveLevel; }));

    var h = [];
    h.push('<div class="filter-bar">');
    h.push('<label class="field">Subject<select id="fSubject">' + subjectOpts + "</select></label>");
    h.push('<label class="field">Topic<select id="fTopic">' + topicOpts + "</select></label>");
    h.push('<label class="field">Difficulty<select id="fDiff"><option value="">All</option>' + ["Easy", "Moderate", "Difficult"].map(function (d) { return '<option' + (bank.difficulty === d ? " selected" : "") + ">" + d + "</option>"; }).join("") + "</select></label>");
    h.push('<label class="field">Type<select id="fType"><option value="">All</option>' + types.map(function (d) { return '<option' + (bank.type === d ? " selected" : "") + ">" + esc(d) + "</option>"; }).join("") + "</select></label>");
    h.push('<label class="field">Cognitive level<select id="fLevel"><option value="">All</option>' + levels.map(function (d) { return '<option' + (bank.level === d ? " selected" : "") + ">" + esc(d) + "</option>"; }).join("") + "</select></label>");
    h.push('<label class="field">Search<input type="search" id="fSearch" value="' + esc(bank.q) + '" placeholder="keyword, section, case"></label>');
    h.push("</div>");

    h.push('<div class="btn-row" style="margin-bottom:.9rem">');
    h.push(toggleBtn("fBook", "★ Bookmarked", bank.onlyBookmarked));
    h.push(toggleBtn("fReview", "⚑ Marked for review", bank.onlyReview));
    h.push(toggleBtn("fWrong", "✗ Answered wrong last", bank.onlyWrong));
    h.push(toggleBtn("fUnseen", "○ Unseen", bank.onlyUnseen));
    h.push(toggleBtn("fRand", "🔀 Randomise", bank.randomise));
    h.push('<button class="btn sm gold" id="fQuiz">⏱ Start timed quiz from these filters</button>');
    h.push('<button class="btn sm ghost" id="fClear">Clear filters</button>');
    h.push("</div>");

    h.push('<div class="card flat"><div class="btn-row" style="justify-content:space-between"><div id="bankCount" class="small muted"></div><div class="btn-row">' +
      '<button class="btn sm ghost" id="bankPrev">◀ Previous</button>' +
      '<span id="bankPos" class="small mono"></span>' +
      '<button class="btn sm ghost" id="bankNext">Next ▶</button></div></div></div>');
    h.push('<div id="bankQ"></div>');
    root.innerHTML = h.join("");

    function toggleBtn(id, label, on) {
      return '<button class="btn sm ' + (on ? "primary" : "ghost") + '" id="' + id + '">' + esc(label) + "</button>";
    }

    $("#fSubject").addEventListener("change", function (e) { bank.subject = e.target.value; bank.topic = ""; bank.idx = 0; Views.bank(root); });
    $("#fTopic").addEventListener("change", function (e) { bank.topic = e.target.value; bank.idx = 0; redraw(); });
    $("#fDiff").addEventListener("change", function (e) { bank.difficulty = e.target.value; bank.idx = 0; redraw(); });
    $("#fType").addEventListener("change", function (e) { bank.type = e.target.value; bank.idx = 0; redraw(); });
    $("#fLevel").addEventListener("change", function (e) { bank.level = e.target.value; bank.idx = 0; redraw(); });
    $("#fSearch").addEventListener("input", function (e) { bank.q = e.target.value; bank.idx = 0; redraw(); });
    $("#fBook").addEventListener("click", function () { bank.onlyBookmarked = !bank.onlyBookmarked; bank.idx = 0; Views.bank(root); });
    $("#fReview").addEventListener("click", function () { bank.onlyReview = !bank.onlyReview; bank.idx = 0; Views.bank(root); });
    $("#fWrong").addEventListener("click", function () { bank.onlyWrong = !bank.onlyWrong; bank.idx = 0; Views.bank(root); });
    $("#fUnseen").addEventListener("click", function () { bank.onlyUnseen = !bank.onlyUnseen; bank.idx = 0; Views.bank(root); });
    $("#fRand").addEventListener("click", function () { bank.randomise = !bank.randomise; bank.idx = 0; Views.bank(root); });
    $("#fClear").addEventListener("click", function () {
      bank.subject = bank.topic = bank.difficulty = bank.type = bank.level = bank.q = "";
      bank.onlyBookmarked = bank.onlyWrong = bank.onlyUnseen = bank.onlyReview = false;
      bank.idx = 0; Views.bank(root);
    });
    $("#bankPrev").addEventListener("click", function () { if (bank.idx > 0) { bank.idx--; redraw(); } });
    $("#bankNext").addEventListener("click", function () { if (bank.idx < bank.order.length - 1) { bank.idx++; redraw(); } });
    $("#fQuiz").addEventListener("click", function () {
      var list = bank.order;
      if (!list.length) return;
      // Cap the drill so the timer stays meaningful (the unfiltered bank holds
      // 600+ questions), and budget roughly two questions per minute.
      var cap = 100;
      var picked = list.length > cap ? list.slice(0, cap) : list;
      var minutes = Math.max(1, Math.ceil(picked.length / 2));
      var title = "Timed quiz — filtered set (" + picked.length + " question" + (picked.length === 1 ? "" : "s") + ")";
      if (picked.length < list.length) title += " — first " + cap + " of " + list.length + " matching";
      Quiz.start(picked.map(function (q) { return q.id; }), title, minutes);
    });

    function redraw() {
      bank.order = filterQuestions();
      if (bank.idx >= bank.order.length) bank.idx = 0;
      $("#bankCount").textContent = bank.order.length + " question" + (bank.order.length === 1 ? "" : "s") + " match the current filters" + (QUESTIONS.length ? " (bank total " + QUESTIONS.length + ")" : "");
      var host = $("#bankQ");
      if (!bank.order.length) { host.innerHTML = '<div class="callout bad">No questions match these filters.</div>'; $("#bankPos").textContent = ""; return; }
      $("#bankPos").textContent = (bank.idx + 1) + " / " + bank.order.length;
      renderQuestionCard(host, bank.order[bank.idx], { salt: bank.randomise ? bank.salt : null, context: "bank" });
    }

    // Re-filter on entry so filters from other views are honoured.
    redraw();
  };

  function uniq(arr) { var o = [], s = {}; arr.forEach(function (x) { if (x && !s[x]) { s[x] = 1; o.push(x); } }); return o; }

  /* ------------------------------------------------------ question renderer */
  function renderQuestionCard(host, q, opts) {
    opts = opts || {};
    var order = optionOrder(q, opts.salt);
    var wrongs = q.wrongOptionExplanations || ["", "", "", ""];
    var chosen = opts.chosenIndex === undefined ? null : opts.chosenIndex;
    var revealed = !!opts.revealed;
    var correctDisplayed = order.indexOf(correctIdx(q));

    var h = [];
    h.push('<div class="card" data-qid="' + esc(q.id) + '">');
    h.push('<div class="q-head">');
    h.push('<span class="tag navy">' + esc(q.id) + "</span>");
    h.push('<span class="tag">' + esc(subjectName(q.subject)) + "</span>");
    h.push('<span class="tag i">' + esc(topicName(q.topic)) + "</span>");
    h.push('<span class="tag ' + esc((q.difficulty || "").toLowerCase()) + '">' + esc(q.difficulty || "") + "</span>");
    h.push('<span class="tag">' + esc(q.cognitiveLevel || "") + "</span>");
    h.push('<span class="tag">' + esc(q.questionType || "") + "</span>");
    if (opts.sessionMeta) h.push('<span class="tag gold">' + esc(opts.sessionMeta) + "</span>");
    h.push("</div>");

    h.push('<div class="q-text">' + esc(q.question) + "</div>");
    h.push('<ul class="options">');
    order.forEach(function (srcIdx, displayIdx) {
      var cls = "opt";
      if (chosen !== null && displayIdx === chosen) cls += " chosen";
      if (revealed) {
        if (displayIdx === correctDisplayed) cls += " correct";
        else if (chosen !== null && displayIdx === chosen) cls += " wrong";
      }
      h.push('<li><button class="' + cls + '" data-opt="' + displayIdx + '"' + (revealed || chosen !== null ? " disabled" : "") + '>' +
        '<span class="key">' + LETTERS[displayIdx] + "</span><span>" + esc(q.options[srcIdx]) + "</span></button></li>");
    });
    h.push("</ul>");

    if (revealed) {
      var isRight = chosen === correctDisplayed;
      h.push('<div class="explain">');
      if (chosen !== null) {
        h.push('<div class="explain-block"><div class="verdict ' + (isRight ? "ok" : "bad") + '">' +
          (isRight ? "✓ Correct" : "✗ Incorrect — correct answer is " + LETTERS[correctDisplayed] + ". " + esc(q.options[correctIdx(q)])) + "</div></div>");
      } else {
        h.push('<div class="explain-block"><div class="verdict">Correct answer: ' + LETTERS[correctDisplayed] + ". " + esc(q.options[correctIdx(q)]) + "</div></div>");
      }
      h.push(block("Detailed explanation", esc(q.explanation || "—")));
      h.push(block("Legal basis", esc(q.legalBasis || "—")));
      var why = [];
      order.forEach(function (srcIdx, displayIdx) {
        if (srcIdx === correctIdx(q)) return;
        var w = wrongs[srcIdx] || "";
        if (w) why.push("<li><b>" + LETTERS[displayIdx] + ".</b> " + esc(w) + "</li>");
      });
      if (why.length) h.push('<div class="explain-block"><h4>Why the other options are wrong</h4><ul class="tight">' + why.join("") + "</ul></div>");
      if (q.flashpoint) h.push('<div class="explain-block"><h4>⚡ Flashpoint</h4><div class="flash"><span>⚡</span><div>' + esc(q.flashpoint) + "</div></div></div>");
      h.push('<div class="explain-block"><h4>Source basis</h4><span class="tag">' + esc(q.source || "STATUTE") + "</span> " +
        '<button class="btn sm" data-study="' + esc(q.subject) + '|' + esc(q.topic) + '">📖 Study this topic</button></div>');
      h.push("</div>");
    }

    // Toolbar
    h.push('<div class="btn-row" style="margin-top:.7rem">');
    if (!revealed) {
      h.push('<button class="btn sm primary" data-action="submit">Submit answer</button>');
      h.push('<button class="btn sm ghost" data-action="reveal">Show answer</button>');
    } else {
      h.push('<button class="btn sm ghost" data-action="retry">Try again</button>');
    }
    h.push('<button class="btn sm ' + (State.has("bookmarks", q.id) ? "gold" : "ghost") + '" data-action="bookmark">' + (State.has("bookmarks", q.id) ? "★ Bookmarked" : "☆ Bookmark") + "</button>");
    h.push('<button class="btn sm ' + (State.has("review", q.id) ? "gold" : "ghost") + '" data-action="review">' + (State.has("review", q.id) ? "⚑ Marked" : "⚑ Mark for review") + "</button>");
    var a = State.attempt(q.id);
    h.push('<span class="small muted" style="margin-left:auto">' + (a ? "Seen " + a.seen + "× · " + a.correct + " correct · " + a.wrong + " wrong" : "Not attempted yet") + "</span>");
    h.push("</div>");

    // Spaced revision classifier
    h.push('<div class="btn-row" style="margin-top:.5rem"><span class="small muted">Revision state:</span>');
    ["mastered", "learning", "needs-revision", "difficult"].forEach(function (state) {
      var on = State.data.revision[q.id] === state;
      h.push('<button class="btn sm ' + (on ? "primary" : "ghost") + '" data-rev="' + state + '">' + esc(prettyState(state)) + "</button>");
    });
    h.push("</div>");

    h.push("</div>");
    host.innerHTML = h.join("");

    function block(title, html) { return '<div class="explain-block"><h4>' + esc(title) + "</h4>" + html + "</div>"; }

    var card = $('[data-qid="' + q.id + '"]', host);
    var submitted = revealed;

    $$(".opt", card).forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (submitted) return;
        var pick = parseInt(btn.dataset.opt, 10);
        if (typeof opts.onAnswer === "function") { opts.onAnswer(pick, q, order); return; }
        // Browse mode: record the choice visually; reveal only on Submit / Show answer.
        redrawWith(pick, false);
      });
    });

    card.addEventListener("click", function (ev) {
      var b = ev.target.closest("button");
      if (!b) return;
      var act = b.dataset.action;
      if (act === "bookmark") { var on = State.toggleArray("bookmarks", q.id); b.className = "btn sm " + (on ? "gold" : "ghost"); b.textContent = on ? "★ Bookmarked" : "☆ Bookmark"; return; }
      if (act === "review") { var on2 = State.toggleArray("review", q.id); b.className = "btn sm " + (on2 ? "gold" : "ghost"); b.textContent = on2 ? "⚑ Marked" : "⚑ Mark for review"; return; }
      if (act === "reveal") { redrawWith(chosen, true); return; }
      if (act === "submit") {
        if (chosen === null || chosen === undefined) { showInlineWarn(card); return; }
        if (typeof opts.onAnswer !== "function") State.record(q.id, chosen === correctDisplayed);
        redrawWith(chosen, true);
        return;
      }
      if (act === "retry") { redrawWith(null, false); return; }
      if (b.dataset.study) {
        var parts = b.dataset.study.split("|");
        goToNotes(parts[0], parts[1]);
        return;
      }
      if (b.dataset.rev) {
        var cur = State.data.revision[q.id];
        State.setRevision(q.id, cur === b.dataset.rev ? null : b.dataset.rev);
        renderQuestionCard(host, q, opts);
        return;
      }
    });

    function redrawWith(chosenDisplay, doReveal) {
      var nextOpts = Object.assign({}, opts);
      nextOpts.chosenIndex = chosenDisplay;
      nextOpts.revealed = doReveal;
      renderQuestionCard(host, q, nextOpts);
    }
  }

  /** Track a tentative selection before submit (browse mode). */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".opt");
    if (!btn || btn.disabled) return;
  });

  function showInlineWarn(card) {
    if ($(".inline-warn", card)) return;
    var w = el("div", { class: "callout bad" }, "Choose an option first, or use <b>Show answer</b>.");
    card.insertBefore(w, card.firstChild.nextSibling);
    setTimeout(function () { if (w.parentNode) w.parentNode.removeChild(w); }, 2500);
  }

  function prettyState(s) {
    return { mastered: "✓ Mastered", learning: "◐ Learning", "needs-revision": "↺ Needs revision", difficult: "⚠ Difficult" }[s] || s;
  }

  /* ---------------------------------------- assertion-reason & scenarios */
  function filteredViewCore(root, predicate, blurb, emptyMsg) {
    var list = QUESTIONS.filter(predicate);
    var h = [];
    h.push('<div class="card flat"><p class="small muted">' + blurb + '</p><p class="small"><b>' + list.length + "</b> question(s) in this set.</p></div>");
    if (!list.length) { h.push('<div class="callout bad">' + esc(emptyMsg) + "</div>"); root.innerHTML = h.join(""); return; }
    h.push('<div class="card flat"><div class="btn-row"><label class="field" style="min-width:230px">Filter by subject<select id="arSub"><option value="">All subjects</option>' +
      uniq(list.map(function (q) { return q.subject; })).map(function (s) { return '<option value="' + esc(s) + '">' + esc(subjectName(s)) + "</option>"; }).join("") +
      '</select></label><span class="small muted">Answers are hidden until you submit — attempt first, then read the explanation.</span></div></div>');
    h.push('<div id="arList"></div>');
    root.innerHTML = h.join("");

    function draw(sub) {
      var host = $("#arList");
      host.innerHTML = "";
      list.filter(function (q) { return !sub || q.subject === sub; }).forEach(function (q) {
        var wrap = el("div");
        host.appendChild(wrap);
        renderQuestionCard(wrap, q, { context: "ar" });
      });
    }
    draw("");
    $("#arSub").addEventListener("change", function (e) { draw(e.target.value); });
  }

  Views.assertion = function (root) {
    filteredViewCore(
      root,
      function (q) { return q.questionType === "Assertion-Reason"; },
      "Standard format: <b>(A)</b> Both A and R are true and R correctly explains A &middot; <b>(B)</b> Both true but R does not explain A &middot; <b>(C)</b> A is true but R is false &middot; <b>(D)</b> A is false but R is true. " +
      "Each explanation below sets out the assertion, the reason, whether the reason explains the assertion, and the governing provision.",
      "No assertion-reason questions loaded. Add them to the question-bank files."
    );
  };

  Views.scenario = function (root) {
    filteredViewCore(
      root,
      function (q) { return q.questionType === "Scenario"; },
      "Factual, problem-based questions. You must apply the law rather than recall it — the answer usually turns on one distinguishing element (consent, intention, authority, timing).",
      "No scenario questions loaded yet."
    );
  };

  /* -------------------------------------------------------------- analytics */
  Views.analytics = function (root) {
    var st = attemptsStats();
    var h = [];
    h.push('<div class="grid cols-4">');
    h.push(stat("Overall accuracy", st.accuracy + "%", "var(--gold-500)", "warn"));
    h.push(stat("Total answers", st.totalAnswers));
    h.push(stat("Questions seen", st.uniqueAttempted + " / " + QUESTIONS.length));
    h.push(stat("Bookmarked", State.data.bookmarks.length));
    h.push("</div>");

    h.push('<div class="card"><h3>Subject accuracy</h3>' + accTable(function (q) { return q.subject; }, function (k) { return subjectName(k); }) + "</div>");
    h.push('<div class="card"><h3>Topic accuracy</h3>' + accTable(function (q) { return q.topic; }, function (k) { return topicName(k); }) + "</div>");
    h.push('<div class="card"><h3>Difficulty accuracy</h3>' + accTable(function (q) { return q.difficulty; }, function (k) { return k; }) + "</div>");
    h.push('<div class="card"><h3>Cognitive-level accuracy</h3>' + accTable(function (q) { return q.cognitiveLevel; }, function (k) { return k; }) + "</div>");
    h.push('<div class="card"><h3>Question-type accuracy</h3>' + accTable(function (q) { return q.questionType; }, function (k) { return k; }) + "</div>");

    // Repeatedly wrong
    var repeated = Object.keys(State.data.attempts).map(function (id) {
      var a = State.data.attempts[id];
      return { id: id, a: a, wrongRate: a.wrong / Math.max(1, a.correct + a.wrong) };
    }).filter(function (r) { return r.a.wrong >= 2; }).sort(function (x, y) { return y.a.wrong - x.a.wrong; }).slice(0, 20);

    h.push('<div class="card"><h3>Questions repeatedly answered incorrectly</h3>');
    if (!repeated.length) h.push('<p class="muted small">None yet — good sign, or you have not attempted enough questions.</p>');
    else {
      h.push('<div class="table-wrap"><table><thead><tr><th>ID</th><th>Subject</th><th>Topic</th><th class="num">Wrong</th><th class="num">Right</th><th class="num">Wrong rate</th></tr></thead><tbody>');
      repeated.forEach(function (r) {
        var q = Q_BY_ID[r.id] || {};
        h.push('<tr><td class="mono">' + esc(r.id) + '</td><td>' + esc(subjectName(q.subject)) + '</td><td>' + esc(topicName(q.topic)) + '</td><td class="num">' + r.a.wrong + '</td><td class="num">' + r.a.correct + '</td><td class="num">' + Math.round(r.wrongRate * 100) + '%</td></tr>');
      });
      h.push("</tbody></table></div>");
    }
    h.push("</div>");

    // Revision progress
    var revCounts = { mastered: 0, learning: 0, "needs-revision": 0, difficult: 0 };
    Object.keys(State.data.revision).forEach(function (id) { if (revCounts[State.data.revision[id]] !== undefined) revCounts[State.data.revision[id]]++; });
    h.push('<div class="card"><h3>Revision progress</h3><div class="grid cols-4">');
    Object.keys(revCounts).forEach(function (k) { h.push(stat(prettyState(k), revCounts[k])); });
    h.push("</div></div>");

    // Attempt history
    var timeline = Object.keys(State.data.attempts).map(function (id) { return { id: id, at: State.data.attempts[id].lastAt, ok: State.data.attempts[id].lastCorrect }; })
      .sort(function (a, b) { return (b.at || 0) - (a.at || 0); }).slice(0, 25);
    h.push('<div class="card"><h3>Recent attempt history</h3>');
    if (!timeline.length) h.push('<p class="muted small">Nothing attempted yet.</p>');
    else {
      h.push('<div class="table-wrap"><table><thead><tr><th>When</th><th>ID</th><th>Subject</th><th>Result</th></tr></thead><tbody>');
      timeline.forEach(function (r) {
        var q = Q_BY_ID[r.id] || {};
        h.push('<tr><td class="small">' + (r.at ? new Date(r.at).toLocaleString() : "—") + '</td><td class="mono">' + esc(r.id) + '</td><td>' + esc(subjectName(q.subject)) + '</td><td>' + (r.ok ? '<span class="tag easy">Correct</span>' : '<span class="tag difficult">Wrong</span>') + "</td></tr>");
      });
      h.push("</tbody></table></div>");
    }
    h.push("</div>");

    // Mock performance
    h.push('<div class="card"><h3>Mock-test performance</h3>');
    var mkeys = Object.keys(State.data.mocks);
    if (!mkeys.length) h.push('<p class="muted small">No mocks attempted.</p>');
    else {
      h.push('<div class="table-wrap"><table><thead><tr><th>Mock</th><th class="num">Attempt</th><th class="num">Score</th><th class="num">%</th><th>When</th></tr></thead><tbody>');
      mkeys.forEach(function (mid) {
        State.data.mocks[mid].attempts.forEach(function (a, i) {
          h.push('<tr><td>' + esc(mid) + '</td><td class="num">' + (i + 1) + '</td><td class="num">' + a.score + "/" + a.total + '</td><td class="num">' + pct(a.score, a.total) + '%</td><td class="small">' + (a.at ? new Date(a.at).toLocaleString() : "—") + "</td></tr>");
        });
      });
      h.push("</tbody></table></div>");
    }
    h.push("</div>");

    h.push('<div class="card"><h3>🎯 Actionable study recommendations</h3><div id="anRecos"></div>' +
      '<p class="small muted">Recommendations are generated from your own attempt data. They never alter legal content.</p></div>');

    h.push('<div class="card"><h3>Data</h3><div class="btn-row">' +
      '<button class="btn sm ghost" id="exportBtn">⬇ Export progress (JSON)</button>' +
      '<button class="btn sm danger" id="resetBtn">Reset all progress</button></div>' +
      '<p class="small muted" style="margin-top:.5rem">Progress is stored in this browser only (<code>localStorage</code>, key <code>' + STORE_KEY + '</code>). Nothing is uploaded.</p></div>');

    root.innerHTML = h.join("");
    renderRecommendations($("#anRecos"), 12);

    $("#exportBtn").addEventListener("click", function () {
      var blob = new Blob([JSON.stringify(State.data, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "aibe-xxi-progress.json";
      a.click();
      URL.revokeObjectURL(a.href);
    });
    $("#resetBtn").addEventListener("click", function () {
      if (confirm("Reset all AIBE XXI progress (attempts, bookmarks, mocks, revision states)?")) {
        State.reset();
        alert("Progress reset.");
        render();
      }
    });
  };

  function accTable(keyFn, labelFn) {
    var groups = {};
    Object.keys(State.data.attempts).forEach(function (id) {
      var q = Q_BY_ID[id];
      if (!q) return;
      var k = keyFn(q) || "—";
      groups[k] = groups[k] || { c: 0, t: 0 };
      var a = State.data.attempts[id];
      groups[k].c += a.correct; groups[k].t += a.correct + a.wrong;
    });
    var keys = Object.keys(groups);
    if (!keys.length) return '<p class="muted small">No attempts recorded yet.</p>';
    keys.sort(function (a, b) { return pct(groups[a].c, groups[a].t) - pct(groups[b].c, groups[b].t); });
    var h = ['<div class="table-wrap"><table><thead><tr><th>Group</th><th class="num">Correct</th><th class="num">Total</th><th class="num">Accuracy</th><th>Performance</th></tr></thead><tbody>'];
    keys.forEach(function (k) {
      var g = groups[k], acc = pct(g.c, g.t);
      h.push('<tr><td>' + esc(labelFn(k)) + '</td><td class="num">' + g.c + '</td><td class="num">' + g.t + '</td><td class="num">' + acc + '%</td>' +
        '<td><div class="progress"><i style="width:' + acc + '%"></i></div></td></tr>');
    });
    h.push("</tbody></table></div>");
    return h.join("");
  }

  function renderRecommendations(host, limit) {
    if (!host) return;
    var recos = [];

    // Weak subjects (>=5 answers, accuracy < 60)
    SUBJECTS.forEach(function (s) {
      var a = accuracyFor(function (q) { return q.subject === s.id; });
      if (a.total >= 5 && a.accuracy < 60) {
        recos.push({
          w: (60 - a.accuracy) * 2 + a.total / 10,
          html: "<b>Revise " + esc(s.name) + "</b> — accuracy " + a.accuracy + "% over " + a.total + " answers. Worth " + s.weight +
            " mark(s) in the paper. " + (notesFor(s.id) ? "Read the study notes, then drill the flashpoints." : "Drill the question bank."),
          action: { label: "Practise " + s.name, subject: s.id }
        });
      }
    });

    // Unseen high-weight subjects
    SUBJECTS.forEach(function (s) {
      var pool = questionsBySubject(s.id);
      var seen = pool.filter(function (q) { return !!State.data.attempts[q.id]; }).length;
      if (pool.length >= 5 && seen === 0 && s.weight >= 8) {
        recos.push({ w: s.weight * 3, html: "<b>" + esc(s.name) + "</b> is worth " + s.weight + " marks and you have not attempted a single question from it.", action: { label: "Start " + s.name, subject: s.id } });
      }
    });

    // Weak topics
    var topics = {};
    Object.keys(State.data.attempts).forEach(function (id) {
      var q = Q_BY_ID[id]; if (!q) return;
      topics[q.topic] = topics[q.topic] || { c: 0, t: 0 };
      var a = State.data.attempts[id];
      topics[q.topic].c += a.correct; topics[q.topic].t += a.correct + a.wrong;
    });
    Object.keys(topics).forEach(function (tid) {
      var g = topics[tid];
      if (g.t >= 4 && pct(g.c, g.t) < 50) {
        recos.push({ w: 40 - pct(g.c, g.t), html: "<b>Weak topic: " + esc(topicName(tid)) + "</b> — " + pct(g.c, g.t) + "% accuracy over " + g.t + " answers.", action: { label: "Drill this topic", subject: (TOPIC_BY_ID[tid] || {}).subject && TOPIC_BY_ID[tid].subject.id, topic: tid } });
      }
    });

    // Repeatedly wrong
    var repeated = Object.keys(State.data.attempts).filter(function (id) { return State.data.attempts[id].wrong >= 3; });
    if (repeated.length) {
      recos.push({ w: 90, html: "<b>" + repeated.length + " question(s) you keep getting wrong.</b> Use <b>Revise My Weak Areas</b> in the Revision tab, and read the flashpoint under each one.", action: { label: "Open Revision", view: "revision" } });
    }

    // Mocks
    Object.keys(State.data.mocks).forEach(function (mid) {
      var m = State.data.mocks[mid];
      var last = m.attempts[m.attempts.length - 1];
      var p = pct(last.score, last.total);
      if (p < 50) recos.push({ w: 70, html: "<b>" + esc(mid) + "</b> score " + last.score + "/" + last.total + " (" + p + "%). Sit the paper again after revising your weakest two subjects.", action: { label: "Open Mock Tests", view: "mocks" } });
    });

    if (!recos.length) {
      recos.push({ w: 0, html: "Not enough data yet. Attempt at least 20 questions (or one mock test) and this panel will start telling you which subjects to prioritise.", action: { label: "Open Question Bank", view: "bank" } });
    }

    recos.sort(function (a, b) { return b.w - a.w; });
    host.innerHTML = recos.slice(0, limit).map(function (r) {
      var btn = "";
      if (r.action) {
        btn = ' <button class="btn sm" data-reco="' + esc(JSON.stringify(r.action)) + '">' + esc(r.action.label) + "</button>";
      }
      return '<div class="callout" style="display:flex;gap:.7rem;align-items:flex-start;justify-content:space-between;flex-wrap:wrap"><div>' + r.html + "</div><div>" + btn + "</div></div>";
    }).join("");

    $$("[data-reco]", host).forEach(function (b) {
      b.addEventListener("click", function () {
        var a = JSON.parse(b.dataset.reco);
        if (a.view) { goTo(a.view); return; }
        goToBank({ subject: a.subject, topic: a.topic });
      });
    });
  }

  /* ------------------------------------------------------------- quiz mode */
  var Quiz = {
    session: null,
    timerId: null,

    start: function (ids, title, minutes, salt) {
      var session = {
        id: "s" + Date.now(),
        title: title || "Practice session",
        ids: ids.slice(),
        idx: 0,
        chosen: {},         // qid -> display index chosen
        revealed: {},       // qid -> true
        startedAt: Date.now(),
        endsAt: minutes ? Date.now() + minutes * 60000 : null,
        minutes: minutes || null,
        salt: salt || String(Date.now()),
        finished: false,
      };
      this.session = session;
      State.data.sessions[session.id] = session;
      State.data.lastSession = session.id;
      State.save();
      this.render();
    },

    resume: function (id) {
      var s = State.data.sessions[id];
      if (!s) return;
      this.session = s;
      State.data.lastSession = id;
      State.save();
      this.render();
    },

    stop: function () {
      if (this.timerId) { clearInterval(this.timerId); this.timerId = null; }
    },

    render: function () {
      var s = this.session;
      if (!s) return;
      // `activate` (not `goTo`) switches the panel: calling goTo("quiz") here
      // would re-enter Views.quiz -> Quiz.render() and recurse infinitely.
      activate("quiz");
      // The panel body may not exist yet (a session can be started from the
      // Mock Tests or Revision tab), so create the mount point directly.
      var panel = $("#view-quiz");
      if (panel && !$("#quizBody")) panel.innerHTML = '<div id="quizBody"></div>';
      var host = $("#quizBody");
      if (!host) return;
      host.innerHTML = "";
      this.stop();

      var head = el("div", { class: "quiz-hud" });
      head.innerHTML =
        '<div><b>' + esc(s.title) + '</b><div class="small muted">' + (s.finished ? "Finished" : "Resume or finish — progress is saved automatically") + '</div></div>' +
        '<div class="btn-row">' +
        '<span class="small muted">Answered <b id="qAnswered">0</b>/' + s.ids.length + '</span>' +
        '<span class="small muted">Correct <b id="qCorrect">0</b></span>' +
        '<span class="timer" id="qTimer">--:--</span>' +
        '<button class="btn sm ghost" id="qPrev">◀</button>' +
        '<span class="small mono" id="qPos"></span>' +
        '<button class="btn sm ghost" id="qNext">▶</button>' +
        '<button class="btn sm gold" id="qFinish">Submit session</button>' +
        '<button class="btn sm danger" id="qExit">Exit</button>' +
        "</div>";
      host.appendChild(head);

      var cardHost = el("div", { id: "qCard" });
      host.appendChild(cardHost);

      var resultsHost = el("div", { id: "qResults" });
      host.appendChild(resultsHost);

      var self = this;
      $("#qPrev").addEventListener("click", function () { if (s.idx > 0) { s.idx--; State.save(); self.drawCard(); } });
      $("#qNext").addEventListener("click", function () { if (s.idx < s.ids.length - 1) { s.idx++; State.save(); self.drawCard(); } });
      $("#qFinish").addEventListener("click", function () { self.finish(); });
      $("#qExit").addEventListener("click", function () {
        self.stop();
        goTo("bank");
      });

      this.drawCard();
      if (s.endsAt && !s.finished) {
        this.timerId = setInterval(function () {
          var left = s.endsAt - Date.now();
          var t = $("#qTimer");
          if (t) { t.textContent = fmtClock(left); t.className = "timer" + (left < 60000 ? " low" : ""); }
          if (left <= 0) { self.stop(); self.finish(true); }
        }, 500);
        var left0 = s.endsAt - Date.now();
        $("#qTimer").textContent = fmtClock(left0);
      } else if (s.finished) {
        $("#qTimer").textContent = "done";
        this.showResults();
      } else {
        $("#qTimer").textContent = "∞";
      }
    },

    drawCard: function () {
      var s = this.session;
      if (!s || !s.ids.length) return;
      if (s.idx >= s.ids.length) s.idx = s.ids.length - 1;
      var q = Q_BY_ID[s.ids[s.idx]];
      if (!q) { $("#qCard").innerHTML = '<div class="callout bad">Question ' + esc(s.ids[s.idx]) + " not found.</div>"; return; }
      var chosenDisplay = s.chosen[q.id] === undefined ? null : s.chosen[q.id];
      var revealed = !!s.revealed[q.id];
      var self = this;

      $("#qPos").textContent = (s.idx + 1) + "/" + s.ids.length;

      renderQuestionCard($("#qCard"), q, {
        salt: s.salt,
        chosenIndex: chosenDisplay,
        revealed: revealed,
        onAnswer: function (displayIdx) {
          if (s.revealed[q.id]) return;
          s.chosen[q.id] = displayIdx;
          var order = optionOrder(q, s.salt);
          var isCorrect = order[displayIdx] === correctIdx(q);
          State.record(q.id, isCorrect);
          s.revealed[q.id] = true;
          State.save();
          self.drawCard();
        },
        sessionMeta: "Session",
      });

      // Cancel the default submit/reveal buttons inside a session by re-binding.
      var card = $("#qCard [data-qid]");
      if (card) {
        var submitBtn = card.querySelector('[data-action="submit"]');
        if (submitBtn) {
          var fresh = submitBtn.cloneNode(true);
          submitBtn.parentNode.replaceChild(fresh, submitBtn);
          fresh.addEventListener("click", function () {
            var pick = card.dataset.pick;
            if (pick === undefined) { showInlineWarn(card); return; }
            // mimic option click
            var optBtn = card.querySelector('.opt[data-opt="' + pick + '"]');
            if (optBtn) optBtn.click();
          });
        }
        var revealBtn = card.querySelector('[data-action="reveal"]');
        if (revealBtn) {
          var freshR = revealBtn.cloneNode(true);
          revealBtn.parentNode.replaceChild(freshR, revealBtn);
          freshR.addEventListener("click", function () {
            s.revealed[q.id] = true; State.save(); self.drawCard();
          });
        }
      }
      // Record tentative picks so the Submit button works.
      $$(".opt", card).forEach(function (b) {
        b.addEventListener("click", function () { card.dataset.pick = b.dataset.opt; });
      });

      this.updateHud();
    },

    updateHud: function () {
      var s = this.session;
      if (!s) return;
      var answered = Object.keys(s.chosen).length;
      var correct = 0;
      s.ids.forEach(function (id) {
        if (s.chosen[id] === undefined) return;
        var q = Q_BY_ID[id]; if (!q) return;
        if (optionOrder(q, s.salt)[s.chosen[id]] === correctIdx(q)) correct++;
      });
      var a = $("#qAnswered"); if (a) a.textContent = answered;
      var c = $("#qCorrect"); if (c) c.textContent = correct;
    },

    finish: function (auto) {
      var s = this.session;
      if (!s) return;
      s.finished = true;
      s.finishedAt = Date.now();
      State.save();
      this.stop();
      if (auto) alert("Time is up. The session has been submitted.");
      this.showResults();
    },

    showResults: function () {
      var s = this.session;
      if (!s) return;
      var host = $("#qResults");
      if (!host) return;
      var correct = 0, attempted = 0, bySubject = {}, byDiff = {};
      s.ids.forEach(function (id) {
        var q = Q_BY_ID[id]; if (!q) return;
        if (s.chosen[id] === undefined) return;
        attempted++;
        var ok = optionOrder(q, s.salt)[s.chosen[id]] === correctIdx(q);
        if (ok) correct++;
        bySubject[q.subject] = bySubject[q.subject] || { c: 0, t: 0 };
        bySubject[q.subject].t++; if (ok) bySubject[q.subject].c++;
        byDiff[q.difficulty] = byDiff[q.difficulty] || { c: 0, t: 0 };
        byDiff[q.difficulty].t++; if (ok) byDiff[q.difficulty].c++;
      });

      var h = ['<div class="card"><h3>Session result</h3>'];
      h.push('<div class="grid cols-4">');
      h.push(stat("Score", correct + " / " + s.ids.length));
      h.push(stat("Attempted", attempted + " / " + s.ids.length));
      h.push(stat("Accuracy", pct(correct, attempted) + "%", "var(--gold-500)", "warn"));
      h.push(stat("Unattempted", s.ids.length - attempted));
      h.push("</div>");

      h.push('<h4 style="margin-top:.9rem">Subject-wise analysis</h4><div class="table-wrap"><table><thead><tr><th>Subject</th><th class="num">Correct</th><th class="num">Attempted</th><th class="num">Accuracy</th></tr></thead><tbody>');
      Object.keys(bySubject).sort().forEach(function (k) {
        var g = bySubject[k];
        h.push('<tr><td>' + esc(subjectName(k)) + '</td><td class="num">' + g.c + '</td><td class="num">' + g.t + '</td><td class="num">' + pct(g.c, g.t) + "%</td></tr>");
      });
      h.push("</tbody></table></div>");

      h.push('<h4>Difficulty analysis</h4><div class="table-wrap"><table><thead><tr><th>Difficulty</th><th class="num">Correct</th><th class="num">Attempted</th><th class="num">Accuracy</th></tr></thead><tbody>');
      Object.keys(byDiff).forEach(function (k) {
        var g = byDiff[k];
        h.push('<tr><td>' + esc(k) + '</td><td class="num">' + g.c + '</td><td class="num">' + g.t + '</td><td class="num">' + pct(g.c, g.t) + "%</td></tr>");
      });
      h.push("</tbody></table></div>");
      h.push('<div class="btn-row" style="margin-top:.8rem"><button class="btn sm primary" data-act="revealAll">Show all explanations and answer key</button><button class="btn sm ghost" data-act="newFromWrong">Practise only the ones I got wrong</button></div>');
      h.push("</div>");

      host.innerHTML = h.join("");
      var self = this;
      $('[data-act="revealAll"]', host).addEventListener("click", function () {
        var keyHost = el("div");
        host.appendChild(keyHost);
        s.ids.forEach(function (id) {
          var q = Q_BY_ID[id]; if (!q) return;
          var w = el("div"); keyHost.appendChild(w);
          renderQuestionCard(w, q, { salt: s.salt, chosenIndex: s.chosen[id] === undefined ? null : s.chosen[id], revealed: true });
        });
        window.scrollTo({ top: host.offsetTop, behavior: "smooth" });
      });
      $('[data-act="newFromWrong"]', host).addEventListener("click", function () {
        var wrongIds = s.ids.filter(function (id) {
          var q = Q_BY_ID[id]; if (!q) return false;
          if (s.chosen[id] === undefined) return false;
          return optionOrder(q, s.salt)[s.chosen[id]] !== correctIdx(q);
        });
        if (!wrongIds.length) { alert("Nothing to practise — you did not get any attempted question wrong."); return; }
        self.start(wrongIds, "Weak-area drill", null, String(Date.now()));
      });
      this.updateHud();
    },
  };

  Views.quiz = function (root) {
    root.innerHTML = '<div id="quizBody"></div>';
    if (Quiz.session) Quiz.render();
    else root.innerHTML = '<div class="callout">No active session. Start one from the <b>Question Bank</b> (timed quiz) or the <b>Revision</b> tab (weak areas), or resume a saved session from the Revision tab.</div>';
  };

  /* --------------------------------------------------------------- revision */
  Views.revision = function (root) {
    var h = [];
    var weak = weakAreaIds();
    h.push('<div class="card"><h3>↺ Revise My Weak Areas</h3>');
    h.push('<p class="small">Prioritises questions you have got wrong, questions classified as difficult or needing revision, and questions from subjects where your accuracy is below 60%. <b>' + weak.length + "</b> question(s) qualify right now.</p>");
    h.push('<div class="btn-row"><button class="btn primary" id="revWeak">Start weak-area drill</button>' +
      '<button class="btn ghost" id="revDifficult">Drill everything marked “Difficult”</button>' +
      '<button class="btn ghost" id="revBookmarks">Drill my bookmarks</button></div></div>');

    if (REVISION.rapid && REVISION.rapid.length) {
      h.push('<div class="card"><h3>⚡ Rapid revision sheets — one per subject</h3>');
      REVISION.rapid.forEach(function (rs) {
        h.push('<details><summary>' + esc(rs.subject) + '</summary><div class="details-body">' +
          listBlock("High-yield points", rs.points) + "</div></details>");
      });
      h.push("</div>");
    }

    if (REVISION.oneDay && REVISION.oneDay.length) {
      h.push('<div class="card"><h3>📅 One-day revision — ultra-condensed</h3>' + listBlock("", REVISION.oneDay) + "</div>");
    }

    if (REVISION.sevenDay && REVISION.sevenDay.length) {
      h.push('<div class="card"><h3>🗓 Seven-day revision plan</h3><div class="table-wrap"><table><thead><tr><th style="width:12%">Day</th><th>Focus</th><th>Tasks</th></tr></thead><tbody>');
      REVISION.sevenDay.forEach(function (d) {
        h.push('<tr><td><b>' + esc(d.day) + '</b></td><td>' + esc(d.focus) + '</td><td>' + (d.tasks || []).map(esc).join("<br>") + "</td></tr>");
      });
      h.push("</tbody></table></div></div>");
    }

    var fin = REVISION.final;
    if (fin) {
      h.push('<div class="card"><h3>🏁 Final revision — the lists that matter</h3>');
      [["Articles", fin.articles], ["Sections", fin.sections], ["Cases", fin.cases], ["Doctrines & maxims", fin.doctrines], ["Definitions & distinctions", fin.definitions],
       ["Exceptions", fin.exceptions], ["Limitation periods & timelines", fin.limitations], ["Procedural rules", fin.procedure], ["Old Act ↔ New Sanhita map", fin.mapping]].forEach(function (pair) {
        if (!pair[1] || !pair[1].length) return;
        h.push('<details><summary>' + esc(pair[0]) + ' <span class="tag">' + pair[1].length + '</span></summary><div class="details-body">' + listBlock("", pair[1]) + "</div></details>");
      });
      h.push("</div>");
    }

    // Saved sessions
    var sids = Object.keys(State.data.sessions);
    h.push('<div class="card"><h3>💾 Saved sessions</h3>');
    if (!sids.length) h.push('<p class="muted small">No saved sessions. Timed quizzes and drills are saved automatically so you can resume them later.</p>');
    else {
      h.push('<div class="table-wrap"><table><thead><tr><th>Session</th><th class="num">Questions</th><th class="num">Answered</th><th>Status</th><th></th></tr></thead><tbody>');
      sids.slice().reverse().forEach(function (id) {
        var s = State.data.sessions[id];
        h.push('<tr><td>' + esc(s.title || id) + '</td><td class="num">' + (s.ids || []).length + '</td><td class="num">' + Object.keys(s.chosen || {}).length + '</td><td>' + (s.finished ? '<span class="tag easy">Finished</span>' : '<span class="tag moderate">In progress</span>') + '</td>' +
          '<td><button class="btn sm" data-resume="' + esc(id) + '">' + (s.finished ? "Review" : "Resume") + "</button></td></tr>");
      });
      h.push("</tbody></table></div>");
    }
    h.push("</div>");

    root.innerHTML = h.join("");

    $("#revWeak").addEventListener("click", function () {
      if (!weak.length) { alert("No weak-area questions qualify yet. Attempt more questions first."); return; }
      Quiz.start(weak, "Revise my weak areas", null, String(Date.now()));
    });
    $("#revDifficult").addEventListener("click", function () {
      var ids = Object.keys(State.data.revision).filter(function (id) { return State.data.revision[id] === "difficult" && Q_BY_ID[id]; });
      if (!ids.length) { alert('Nothing marked "Difficult" yet. You can mark questions as Difficult from the question card.'); return; }
      Quiz.start(ids, "Difficult questions drill", null, String(Date.now()));
    });
    $("#revBookmarks").addEventListener("click", function () {
      if (!State.data.bookmarks.length) { alert("No bookmarks yet."); return; }
      Quiz.start(State.data.bookmarks.slice(), "Bookmarked questions drill", null, String(Date.now()));
    });
    $$("[data-resume]", root).forEach(function (b) {
      b.addEventListener("click", function () { Quiz.resume(b.dataset.resume); });
    });
  };

  function weakAreaIds() {
    var weakSubjects = {};
    SUBJECTS.forEach(function (s) {
      var a = accuracyFor(function (q) { return q.subject === s.id; });
      if (a.total >= 4 && a.accuracy < 60) weakSubjects[s.id] = true;
    });
    return QUESTIONS.filter(function (q) {
      var a = State.data.attempts[q.id];
      var rev = State.data.revision[q.id];
      if (a && a.wrong > 0 && (a.lastCorrect === false || a.wrong >= a.correct)) return true;
      if (rev === "difficult" || rev === "needs-revision") return true;
      if (!a && weakSubjects[q.subject]) return true;
      return false;
    }).map(function (q) { return q.id; });
  }

  /* ------------------------------------------------------------- mock tests */
  Views.mocks = function (root) {
    var h = [];
    if (!MOCKS.length) {
      h.push('<div class="callout">No mock tests loaded. They live in <code>aibe-mocks.js</code>.</div>');
    } else {
      h.push('<div class="card flat"><p class="small muted">Each mock test follows the official subject distribution. Answers are shuffled per attempt (deterministic per session, so a resumed session looks the same). The score is shown only after submission, and is followed by a subject-wise and difficulty-wise analysis.</p></div>');
      MOCKS.forEach(function (m) {
        var rec = State.data.mocks[m.id];
        h.push('<div class="card"><h3>🧪 ' + esc(m.title) + '</h3>');
        if (m.description) h.push('<p class="small">' + esc(m.description) + "</p>");
        h.push('<p class="small muted">' + m.questionIds.length + " questions");
        if (m.minutes) h.push(" &middot; " + m.minutes + " minutes");
        if (rec) h.push(" &middot; best " + rec.best + "/" + m.questionIds.length + " over " + rec.attempts.length + " attempt(s)");
        h.push("</p>");
        h.push('<div class="btn-row"><button class="btn primary" data-mock="' + esc(m.id) + '">Start mock test</button>' +
          '<button class="btn ghost" data-mock-browse="' + esc(m.id) + '">Browse questions without timer</button></div>');
        h.push("</div>");
      });
    }
    root.innerHTML = h.join("");

    $$("[data-mock]", root).forEach(function (b) {
      b.addEventListener("click", function () { startMock(b.dataset.mock); });
    });
    $$("[data-mock-browse]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var m = MOCKS.filter(function (x) { return x.id === b.dataset.mockBrowse; })[0];
        bank.subject = ""; bank.topic = ""; bank.q = ""; bank.idx = 0; bank.randomise = false;
        goTo("bank");
        bank.order = m.questionIds.map(function (id) { return Q_BY_ID[id]; }).filter(Boolean);
        $("#bankCount").textContent = "Browsing " + m.title + " (" + bank.order.length + " questions)";
        bank.idx = 0;
        var host = $("#bankQ");
        renderQuestionCard(host, bank.order[0], { context: "mock-browse" });
        $("#bankPos").textContent = "1 / " + bank.order.length;
      });
    });

    function startMock(id) {
      var m = MOCKS.filter(function (x) { return x.id === id; })[0];
      if (!m) return;
      Quiz.start(m.questionIds, m.title, m.minutes, String(Date.now()));
      Quiz.session.mockId = m.id;
      State.save();
    }
  };

  /** Record a finished mock score (called from Quiz.showResults for mock sessions). */
  function recordMockScore(session) {
    if (!session || !session.mockId) return;
    var m = MOCKS.filter(function (x) { return x.id === session.mockId; })[0];
    if (!m) return;
    var correct = 0, answered = 0;
    session.ids.forEach(function (id) {
      var q = Q_BY_ID[id]; if (!q) return;
      if (session.chosen[id] === undefined) return;
      answered++;
      if (optionOrder(q, session.salt)[session.chosen[id]] === correctIdx(q)) correct++;
    });
    var rec = State.data.mocks[m.id] || { best: 0, attempts: [] };
    rec.attempts.push({ score: correct, answered: answered, total: session.ids.length, at: Date.now() });
    rec.best = Math.max(rec.best, correct);
    State.data.mocks[m.id] = rec;
    State.save();
  }

  /* ------------------------------------------------------------ navigation */
  var currentView = "dashboard";

  function goTo(view) {
    activate(view);
    var host = $("#view-" + view);
    if (host && Views[view]) Views[view](host);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* Switch the visible panel, the sidebar highlight, the headings and the hash
     WITHOUT rendering the view. Quiz.render() uses this so that it can paint
     into #quizBody without re-entering Views.quiz. */
  function activate(view) {
    currentView = view;
    $$(".view").forEach(function (v) { v.classList.toggle("active", v.id === "view-" + view); });
    $$(".nav-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.view === view); });
    var title = VIEW_META[view] || { title: view, sub: "" };
    $("#viewTitle").textContent = title.title;
    $("#viewSub").textContent = title.sub || "";
    if (window.location.hash !== "#" + view) history.replaceState(null, "", "#" + view);
  }

  var VIEW_META = {
    dashboard: { title: "Dashboard", sub: "Your progress across the whole AIBE XXI syllabus" },
    syllabus: { title: "Syllabus", sub: "Official weightage and the topic map — derived from the BCI Trust notification dated 02.03.2026" },
    notes: { title: "Study Notes", sub: "Concept, provisions, cases, exceptions, confusions and AIBE focus for every topic" },
    flashpoints: { title: "Flashpoints", sub: "The one-line facts to carry into the hall" },
    bank: { title: "Question Bank", sub: "Filter, search, bookmark, drill — 600+ questions with full explanations" },
    assertion: { title: "Assertion–Reason", sub: "The standard A/R format, with the explanation of both statements" },
    scenario: { title: "Scenario Questions", sub: "Apply the law to facts, not recall it" },
    mocks: { title: "Mock Tests", sub: "Full-length papers with answer keys and analysis" },
    revision: { title: "Revision", sub: "Rapid sheets, one-day and seven-day plans, and weak-area drills" },
    quiz: { title: "Session", sub: "Timed quiz or drill in progress" },
    analytics: { title: "Performance Analytics", sub: "Everything is computed from your own attempts, stored locally" },
  };

  function goToBank(opts) {
    opts = opts || {};
    if (opts.subject !== undefined) bank.subject = opts.subject;
    if (opts.topic !== undefined) bank.topic = opts.topic || "";
    bank.idx = 0;
    goTo("bank");
  }

  function goToNotes(subjectId, topicId) {
    notesSelection.subject = subjectId;
    notesSelection.open = {};
    if (topicId) notesSelection.open[topicId] = true;
    goTo("notes");
    if (topicId) {
      var d = $('#notesBody details[data-topic="' + topicId + '"]');
      if (d) { d.open = true; d.scrollIntoView({ block: "center", behavior: "smooth" }); }
    }
  }

  /* ------------------------------------------------------------------ boot */
  function buildNav() {
    var nav = $("#navBody");
    if (!nav) return;
    var groups = [
      { label: "Overview", items: [["dashboard", "📊", "Dashboard"], ["syllabus", "📋", "Syllabus"]] },
      { label: "Learn", items: [["notes", "📖", "Study Notes"], ["flashpoints", "⚡", "Flashpoints"], ["revision", "↺", "Revision"]] },
      { label: "Practise", items: [["bank", "❓", "Question Bank"], ["assertion", "⇄", "Assertion–Reason"], ["scenario", "🧩", "Scenario Questions"], ["mocks", "🧪", "Mock Tests"], ["quiz", "⏱", "Active Session"]] },
      { label: "Measure", items: [["analytics", "📈", "Performance Analytics"]] },
    ];
    var counts = {
      bank: QUESTIONS.length,
      assertion: QUESTIONS.filter(function (q) { return q.questionType === "Assertion-Reason"; }).length,
      scenario: QUESTIONS.filter(function (q) { return q.questionType === "Scenario"; }).length,
      mocks: MOCKS.length,
      flashpoints: SUBJECTS.reduce(function (a, s) {
        var n = notesFor(s.id);
        if (!n) return a;
        return a + (n.topics || []).reduce(function (b, t) { return b + ((t.flashpoints || []).length); }, 0);
      }, 0),
    };
    nav.innerHTML = groups.map(function (g) {
      return '<div class="nav-group-label">' + esc(g.label) + "</div>" + g.items.map(function (it) {
        return '<button class="nav-btn' + (it[0] === currentView ? " active" : "") + '" data-view="' + it[0] + '">' +
          '<span class="ico">' + it[1] + "</span><span>" + esc(it[2]) + "</span>" +
          (counts[it[0]] !== undefined ? '<span class="count">' + counts[it[0]] + "</span>" : "") + "</button>";
      }).join("");
    }).join("");
    $$(".nav-btn", nav).forEach(function (b) {
      b.addEventListener("click", function () { goTo(b.dataset.view); $("#sidebar").classList.remove("open"); });
    });
  }

  function render() {
    buildNav();
    goTo(currentView);
  }

  function boot() {
    State.load();
    if (!QUESTIONS.length) {
      console.warn("AIBE: window.AIBE_QUESTIONS is empty — check that the aibe-qb-*.js files are loaded before aibe-app.js.");
    }
    if (!SUBJECTS.length) {
      console.error("AIBE: window.AIBE_SYLLABUS.subjects is empty — aibe-syllabus.js did not load.");
    }
    var hash = (window.location.hash || "").replace("#", "");
    if (hash && VIEW_META[hash]) currentView = hash;
    buildNav();
    goTo(currentView);

    var mt = $("#menuToggle");
    if (mt) mt.addEventListener("click", function () { $("#sidebar").classList.toggle("open"); });

    var pb = $("#printBtn");
    if (pb) pb.addEventListener("click", function () { window.print(); });

    window.addEventListener("hashchange", function () {
      var v = (window.location.hash || "").replace("#", "");
      if (v && VIEW_META[v] && v !== currentView) goTo(v);
    });

    // Keep the sidebar counts fresh after progress changes.
    setInterval(function () {
      var el = $("#navBody");
      if (el && el.querySelector('[data-view="bank"] .count')) {
        var c = el.querySelector('[data-view="bank"] .count');
        if (c) c.textContent = QUESTIONS.length;
      }
    }, 15000);

    console.log("%cAIBE XXI study platform ready", "color:#b8860b;font-weight:700",
      "| questions:", QUESTIONS.length, "| subjects:", SUBJECTS.length, "| mocks:", MOCKS.length,
      "| subjects with notes:", Object.keys(NOTES).length);
  }

  // Expose a small API for the console / future extensions.
  window.AIBE = {
    state: State, quiz: Quiz, goTo: goTo, questions: QUESTIONS, syllabus: SYL, notes: NOTES,
    stats: attemptsStats, analyticsAccuracy: accuracyFor, recordMockScore: recordMockScore,
    // exposed so the option shuffling can be inspected/tested from the console
    correctIdx: correctIdx, optionOrder: optionOrder, qById: Q_BY_ID, mocks: MOCKS, revision: REVISION,
  };

  // Hook mock scoring into the quiz result renderer.
  var _origShowResults = Quiz.showResults;
  Quiz.showResults = function () {
    var s = this.session;
    if (s && s.finished && s.mockId && !s._scored) {
      s._scored = true;
      recordMockScore(s);
    }
    return _origShowResults.apply(this, arguments);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
