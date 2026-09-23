/* ============================================================================
   image-zoom.js  —  Click-to-zoom lightbox for every image on the page.
   ----------------------------------------------------------------------------
   Add this once per page:   <script src="image-zoom.js" defer></script>
   It automatically enhances every <img> element with:
     • click / tap to open a full-screen zoomable viewer
     • mouse-wheel zoom (zooms toward the cursor)
     • drag to pan when zoomed in
     • pinch-to-zoom on touch devices
     • double-click to toggle zoom
     • toolbar: −  +  reset  open-original  close
     • keyboard: Esc close · + / − zoom · 0 reset · arrows pan
   Opt an image out with:  <img data-no-zoom ...>
   ========================================================================== */
(function () {
  'use strict';

  if (window.__imageZoomLoaded) return;
  window.__imageZoomLoaded = true;

  var MIN_SCALE = 0.25;
  var MAX_SCALE = 10;
  var STEP = 0.25;

  /* ---------------------------------------------------------------- styles */
  var css = ''
    + '.iz-zoomable{cursor:zoom-in;transition:filter .2s ease}'
    + '.iz-zoomable:hover{filter:brightness(1.04)}'
    + '.iz-overlay{position:fixed;inset:0;z-index:2147483647;background:rgba(10,12,20,.92);'
    + 'backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;'
    + 'opacity:0;transition:opacity .22s ease;touch-action:none}'
    + '.iz-overlay.iz-open{display:flex}'
    + '.iz-overlay.iz-visible{opacity:1}'
    + '.iz-stage{position:absolute;inset:0;overflow:hidden;display:flex;'
    + 'align-items:center;justify-content:center;cursor:grab}'
    + '.iz-stage.iz-grabbing{cursor:grabbing}'
    + '.iz-img{max-width:94vw;max-height:88vh;width:auto;height:auto;'
    + 'user-select:none;-webkit-user-drag:none;transform-origin:center center;'
    + 'will-change:transform;box-shadow:0 12px 48px rgba(0,0,0,.5);border-radius:6px;'
    + 'background:#fff}'
    + '.iz-toolbar{position:absolute;top:14px;right:16px;z-index:3;display:flex;'
    + 'align-items:center;gap:6px;background:rgba(22,26,38,.82);padding:6px;'
    + 'border-radius:12px;border:1px solid rgba(255,255,255,.14);'
    + 'box-shadow:0 6px 22px rgba(0,0,0,.4)}'
    + '.iz-btn{width:38px;height:38px;min-width:38px;border:none;border-radius:9px;'
    + 'background:transparent;color:#e8eaf2;font-size:1.15rem;line-height:1;cursor:pointer;'
    + 'display:inline-flex;align-items:center;justify-content:center;text-decoration:none;'
    + 'font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;'
    + 'transition:background .15s ease,color .15s ease}'
    + '.iz-btn:hover{background:rgba(255,255,255,.16);color:#fff}'
    + '.iz-btn:focus-visible{outline:2px solid #7c8cff;outline-offset:2px}'
    + '.iz-level{min-width:56px;text-align:center;color:#c9cde0;font-size:.82rem;'
    + 'font-variant-numeric:tabular-nums;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}'
    + '.iz-caption{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);'
    + 'max-width:90vw;text-align:center;color:#dfe2ef;font-size:.85rem;padding:7px 16px;'
    + 'background:rgba(22,26,38,.8);border-radius:20px;border:1px solid rgba(255,255,255,.12);'
    + 'font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;'
    + 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
    + '.iz-caption:empty{display:none}'
    + '.iz-hint{position:absolute;top:16px;left:16px;z-index:3;color:#aeb4c9;font-size:.78rem;'
    + 'background:rgba(22,26,38,.8);padding:6px 12px;border-radius:16px;'
    + 'border:1px solid rgba(255,255,255,.12);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}'
    + '@media (max-width:600px){.iz-hint{display:none}.iz-img{max-width:98vw;max-height:82vh}'
    + '.iz-toolbar{top:auto;bottom:64px;right:50%;transform:translateX(50%)}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-image-zoom', '');
  styleEl.textContent = css;
  (document.head || document.documentElement).appendChild(styleEl);

  /* --------------------------------------------------------------- lightbox */
  var overlay, stage, imgEl, levelEl, captionEl, hintEl;
  var scale = 1, tx = 0, ty = 0;
  var dragging = false, startX = 0, startY = 0, baseTx = 0, baseTy = 0;
  var lastTap = 0, pinchDist = 0, pinchScale = 1;
  var lastFocused = null;

  function buildLightbox() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'iz-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image preview');

    overlay.innerHTML =
      '<div class="iz-hint">Scroll to zoom · drag to pan · Esc to close</div>' +
      '<div class="iz-toolbar">' +
        '<button class="iz-btn" data-iz="out" title="Zoom out (−)">−</button>' +
        '<span class="iz-level">100%</span>' +
        '<button class="iz-btn" data-iz="in" title="Zoom in (+)">+</button>' +
        '<button class="iz-btn" data-iz="reset" title="Reset (0)">⟲</button>' +
        '<a class="iz-btn" data-iz="open" target="_blank" rel="noopener" title="Open original in new tab ↗">↗</a>' +
        '<button class="iz-btn" data-iz="close" title="Close (Esc)">✕</button>' +
      '</div>' +
      '<div class="iz-stage"><img class="iz-img" alt=""></div>' +
      '<div class="iz-caption"></div>';

    document.body.appendChild(overlay);

    stage = overlay.querySelector('.iz-stage');
    imgEl = overlay.querySelector('.iz-img');
    levelEl = overlay.querySelector('.iz-level');
    captionEl = overlay.querySelector('.iz-caption');
    hintEl = overlay.querySelector('.iz-hint');

    overlay.querySelector('[data-iz="in"]').addEventListener('click', function () { zoomBy(STEP); });
    overlay.querySelector('[data-iz="out"]').addEventListener('click', function () { zoomBy(-STEP); });
    overlay.querySelector('[data-iz="reset"]').addEventListener('click', reset);
    overlay.querySelector('[data-iz="close"]').addEventListener('click', close);

    /* Close when clicking the dark backdrop (not the image or toolbar). */
    stage.addEventListener('click', function (e) { if (e.target === stage) close(); });

    /* Wheel zoom toward the cursor. */
    overlay.addEventListener('wheel', function (e) {
      e.preventDefault();
      var factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      zoomAt(factor, e.clientX, e.clientY);
    }, { passive: false });

    /* Drag to pan. */
    stage.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    /* Double-click / double-tap toggles zoom. */
    imgEl.addEventListener('dblclick', function (e) { e.preventDefault(); toggleZoom(e.clientX, e.clientY); });

    /* Pinch-to-zoom (touch). */
    stage.addEventListener('touchstart', onTouchStart, { passive: false });
    stage.addEventListener('touchmove', onTouchMove, { passive: false });
    stage.addEventListener('touchend', onTouchEnd);

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', function () { if (isOpen()) reset(); });
  }

  function isOpen() { return overlay && overlay.classList.contains('iz-open'); }

  function open(src, alt, caption) {
    buildLightbox();
    lastFocused = document.activeElement;
    imgEl.src = src;
    imgEl.alt = alt || '';
    captionEl.textContent = caption || '';
    overlay.querySelector('[data-iz="open"]').setAttribute('href', src);
    reset();
    overlay.classList.add('iz-open');
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(function () { overlay.classList.add('iz-visible'); });
    overlay.querySelector('[data-iz="close"]').focus();
  }

  function close() {
    if (!isOpen()) return;
    overlay.classList.remove('iz-visible');
    document.documentElement.style.overflow = '';
    setTimeout(function () {
      overlay.classList.remove('iz-open');
      imgEl.removeAttribute('src');
    }, 200);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function apply() {
    imgEl.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
    levelEl.textContent = Math.round(scale * 100) + '%';
  }

  function reset() {
    scale = 1; tx = 0; ty = 0;
    imgEl.style.transition = 'transform .18s ease';
    apply();
    setTimeout(function () { imgEl.style.transition = 'none'; }, 190);
  }

  function zoomBy(delta) { zoomAt(1 + delta, 0, 0); }

  function zoomAt(factor, clientX, clientY) {
    var next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * factor));
    if (next === scale) return;
    var rect = stage.getBoundingClientRect();
    var cx = (clientX || rect.left + rect.width / 2) - (rect.left + rect.width / 2);
    var cy = (clientY || rect.top + rect.height / 2) - (rect.top + rect.height / 2);
    var ratio = next / scale;
    tx = cx - ratio * (cx - tx);
    ty = cy - ratio * (cy - ty);
    scale = next;
    imgEl.style.transition = 'none';
    apply();
    clampPan();
  }

  function toggleZoom(clientX, clientY) {
    if (scale > 1.01) { reset(); }
    else { zoomAt(2 / scale, clientX, clientY); }
  }

  function clampPan() {
    var rect = stage.getBoundingClientRect();
    var iw = imgEl.clientWidth * scale;
    var ih = imgEl.clientHeight * scale;
    var maxX = Math.max(0, (iw - rect.width) / 2);
    var maxY = Math.max(0, (ih - rect.height) / 2);
    tx = Math.min(maxX, Math.max(-maxX, tx));
    ty = Math.min(maxY, Math.max(-maxY, ty));
    apply();
  }

  /* ---------------------------------------------------------------- pointer */
  function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
    if (e.target.closest && e.target.closest('.iz-toolbar')) return;
    dragging = true;
    startX = e.clientX; startY = e.clientY;
    baseTx = tx; baseTy = ty;
    stage.classList.add('iz-grabbing');
    if (stage.setPointerCapture) { try { stage.setPointerCapture(e.pointerId); } catch (err) {} }
  }

  function onPointerMove(e) {
    if (!dragging) return;
    tx = baseTx + (e.clientX - startX);
    ty = baseTy + (e.clientY - startY);
    imgEl.style.transition = 'none';
    apply();
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove('iz-grabbing');
    clampPan();
  }

  /* ------------------------------------------------------------------ touch */
  function onTouchStart(e) {
    if (e.touches.length === 2) {
      dragging = false;
      pinchDist = touchDistance(e.touches);
      pinchScale = scale;
    } else if (e.touches.length === 1) {
      var now = Date.now();
      if (now - lastTap < 300) { toggleZoom(e.touches[0].clientX, e.touches[0].clientY); lastTap = 0; }
      else { lastTap = now; }
    }
  }

  function onTouchMove(e) {
    if (e.touches.length === 2 && pinchDist) {
      e.preventDefault();
      var d = touchDistance(e.touches);
      var mid = touchMid(e.touches);
      var factor = (pinchScale * (d / pinchDist)) / scale;
      zoomAt(factor, mid.x, mid.y);
    }
  }

  function onTouchEnd(e) {
    if (e.touches.length < 2) pinchDist = 0;
  }

  function touchDistance(t) {
    var dx = t[0].clientX - t[1].clientX, dy = t[0].clientY - t[1].clientY;
    return Math.hypot(dx, dy);
  }

  function touchMid(t) {
    return { x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 };
  }

  /* --------------------------------------------------------------- keyboard */
  function onKeyDown(e) {
    if (!isOpen()) return;
    switch (e.key) {
      case 'Escape': close(); break;
      case '+': case '=': e.preventDefault(); zoomAt(1 + STEP, 0, 0); break;
      case '-': case '_': e.preventDefault(); zoomAt(1 / (1 + STEP), 0, 0); break;
      case '0': e.preventDefault(); reset(); break;
      case 'ArrowLeft': tx += 60; clampPan(); break;
      case 'ArrowRight': tx -= 60; clampPan(); break;
      case 'ArrowUp': ty += 60; clampPan(); break;
      case 'ArrowDown': ty -= 60; clampPan(); break;
      default: return;
    }
  }

  /* ------------------------------------------------------------- attachment */
  function enhance(img) {
    if (!img || img.__izBound) return;
    if (img.hasAttribute('data-no-zoom')) return;
    if (img.dataset && img.dataset.izSkip === 'true') return;
    img.__izBound = true;
    img.classList.add('iz-zoomable');

    if (!img.hasAttribute('title') && !img.hasAttribute('aria-label')) {
      img.setAttribute('title', 'Click to zoom');
    }
    if (!img.hasAttribute('role')) img.setAttribute('role', 'button');
    if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');

    function trigger(e) {
      if (e) e.preventDefault();
      if (img.naturalWidth === 0) return; /* broken image – nothing to zoom */
      var cap = '';
      var fig = img.closest('figure');
      var fc = fig && fig.querySelector('figcaption');
      if (fc) cap = fc.textContent.trim();
      else if (img.alt && img.alt !== 'Profile photo') cap = img.alt;
      open(img.currentSrc || img.src, img.alt, cap);
    }

    img.addEventListener('click', function (e) {
      trigger(e);
      e.stopPropagation();
    });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') trigger(e);
    });
  }

  function enhanceAll(root) {
    var scope = root || document;
    var imgs = scope.querySelectorAll ? scope.querySelectorAll('img') : [];
    for (var i = 0; i < imgs.length; i++) enhance(imgs[i]);
  }

  function init() {
    enhanceAll(document);
    /* Keep working for images injected later (tabs, quizzes, dynamic content). */
    if (window.MutationObserver) {
      var mo = new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          var added = muts[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            var n = added[j];
            if (n.nodeType !== 1) continue;
            if (n.tagName === 'IMG') enhance(n);
            else enhanceAll(n);
          }
        }
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
