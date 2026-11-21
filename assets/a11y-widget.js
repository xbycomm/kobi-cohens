/*! XBYcomm accessibility widget — self-hosted, no dependencies */
(function () {
  "use strict";
  var KEY = "xby-a11y";
  var SCALES = [1, 1.125, 1.25, 1.375, 1.5];
  var DEFAULTS = { scale: 1, contrast: false, gray: false, links: false, readable: false, motion: false };
  var I18N = {
    he: {
      open: "כלי נגישות",
      close: "סגירת כלי הנגישות",
      title: "כלי נגישות",
      smaller: "הקטנת טקסט",
      larger: "הגדלת טקסט",
      size: "גודל טקסט",
      contrast: "ניגודיות גבוהה",
      gray: "גווני אפור",
      links: "הדגשת קישורים",
      readable: "גופן קריא",
      motion: "עצירת אנימציות",
      reset: "איפוס הגדרות",
      statement: "הצהרת נגישות"
    },
    en: {
      open: "Accessibility tools",
      close: "Close accessibility tools",
      title: "Accessibility tools",
      smaller: "Decrease text size",
      larger: "Increase text size",
      size: "Text size",
      contrast: "High contrast",
      gray: "Grayscale",
      links: "Highlight links",
      readable: "Readable font",
      motion: "Stop animations",
      reset: "Reset settings",
      statement: "Accessibility statement"
    }
  };

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return Object.assign({}, DEFAULTS);
      var s = JSON.parse(raw);
      return {
        scale: SCALES.indexOf(s.scale) >= 0 ? s.scale : 1,
        contrast: !!s.contrast,
        gray: !!s.gray,
        links: !!s.links,
        readable: !!s.readable,
        motion: !!s.motion
      };
    } catch (e) {
      return Object.assign({}, DEFAULTS);
    }
  }

  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function apply(state) {
    var html = document.documentElement;
    if (state.scale && state.scale !== 1) {
      html.style.zoom = String(state.scale);
      html.style.fontSize = (state.scale * 100) + "%";
    } else {
      html.style.zoom = "";
      html.style.fontSize = "";
    }
    html.classList.toggle("a11y-contrast", !!state.contrast);
    html.classList.toggle("a11y-gray", !!state.gray);
    html.classList.toggle("a11y-links", !!state.links);
    html.classList.toggle("a11y-readable", !!state.readable);
    html.classList.toggle("a11y-motion", !!state.motion);
    if (state.motion) {
      try {
        document.querySelectorAll("video, audio").forEach(function (el) {
          el.pause();
          el.removeAttribute("autoplay");
        });
      } catch (e) {}
    }
  }

  var state = load();
  apply(state);

  var script = document.currentScript;
  if (!script) {
    var scripts = document.getElementsByTagName("script");
    script = scripts[scripts.length - 1];
  }

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    if (document.querySelector(".xby-a11y-root")) return;

    var langAttr = (document.documentElement.lang || "he").toLowerCase();
    var lang = langAttr.indexOf("en") === 0 ? "en" : "he";
    var t = I18N[lang];
    var dir = lang === "en" ? "ltr" : (document.documentElement.getAttribute("dir") || "rtl");
    var ds = (script && script.dataset) || {};
    var statement = ds.statement || "accessibility.html";
    try { statement = new URL(statement, window.location.href).href; } catch (e) {}
    var side = ds.side === "left" ? "left" : "right";

    var root = document.createElement("div");
    root.className = "xby-a11y-root";
    root.setAttribute("dir", dir);
    root.setAttribute("data-side", side);
    root.setAttribute("lang", lang);
    if (ds.liftBooking !== undefined && ds.liftBooking !== "false") root.setAttribute("data-lift-booking", "");
    if (ds.liftMobile !== undefined && ds.liftMobile !== "false") root.setAttribute("data-lift-mobile", "");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "xby-a11y-btn";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "xby-a11y-panel");
    btn.setAttribute("aria-label", t.open);
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="4.2" r="2.1" fill="currentColor"/><path fill="currentColor" d="M12 7.2c-2.3 0-4.3.9-5.2 2.2-.3.5 0 1 .5 1.2.5.2 1 0 1.2-.5.6-.8 2-1.4 3.5-1.4s2.9.6 3.5 1.4c.2.4.7.7 1.2.5.5-.2.8-.7.5-1.2C16.3 8.1 14.3 7.2 12 7.2zm-3.4 4.1v2.6L6.4 19c-.2.5 0 1.1.5 1.3.5.2 1.1 0 1.3-.5l2-4.8h2.6l2 4.8c.2.5.8.7 1.3.5.5-.2.7-.8.5-1.3l-2.2-5.1v-2.6H8.6z"/></svg>';

    var panel = document.createElement("div");
    panel.id = "xby-a11y-panel";
    panel.className = "xby-a11y-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "xby-a11y-title");
    panel.hidden = true;

    function toggleBtn(key, label) {
      return '<button type="button" class="xby-a11y-row" data-key="' + key + '" aria-pressed="false">' +
        '<span>' + label + '</span><span class="xby-a11y-sw" aria-hidden="true"></span></button>';
    }

    panel.innerHTML =
      '<div class="xby-a11y-head">' +
        '<h2 id="xby-a11y-title">' + t.title + '</h2>' +
        '<button type="button" class="xby-a11y-close" data-close aria-label="' + t.close + '">×</button>' +
      '</div>' +
      '<div class="xby-a11y-size">' +
        '<span>' + t.size + '</span>' +
        '<button type="button" data-size="-1" aria-label="' + t.smaller + '">−</button>' +
        '<b data-size-label>100%</b>' +
        '<button type="button" data-size="1" aria-label="' + t.larger + '">+</button>' +
      '</div>' +
      toggleBtn("contrast", t.contrast) +
      toggleBtn("gray", t.gray) +
      toggleBtn("links", t.links) +
      toggleBtn("readable", t.readable) +
      toggleBtn("motion", t.motion) +
      '<button type="button" class="xby-a11y-reset" data-reset>' + t.reset + '</button>' +
      '<a class="xby-a11y-stmt" href="' + statement + '">' + t.statement + '</a>';

    root.appendChild(panel);
    root.appendChild(btn);
    document.documentElement.appendChild(root);

    var sizeLabel = panel.querySelector("[data-size-label]");
    var minus = panel.querySelector('[data-size="-1"]');
    var plus = panel.querySelector('[data-size="1"]');

    function sync() {
      apply(state);
      save(state);
      sizeLabel.textContent = Math.round(state.scale * 100) + "%";
      minus.disabled = state.scale <= SCALES[0];
      plus.disabled = state.scale >= SCALES[SCALES.length - 1];
      panel.querySelectorAll("[data-key]").forEach(function (el) {
        el.setAttribute("aria-pressed", state[el.getAttribute("data-key")] ? "true" : "false");
      });
    }

    var lastFocus = null;
    function focusables() {
      return Array.prototype.slice.call(panel.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'))
        .filter(function (el) { return !el.disabled && el.offsetParent !== null; });
    }
    function open() {
      lastFocus = document.activeElement;
      root.classList.add("is-open");
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      var closeBtn = panel.querySelector("[data-close]");
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      root.classList.remove("is-open");
      panel.hidden = true;
      btn.setAttribute("aria-expanded", "false");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      else btn.focus();
    }
    function isOpen() { return root.classList.contains("is-open"); }

    btn.addEventListener("click", function () { isOpen() ? close() : open(); });
    panel.querySelector("[data-close]").addEventListener("click", close);
    panel.addEventListener("click", function (e) {
      var size = e.target.closest("[data-size]");
      if (size) {
        var dirn = parseInt(size.getAttribute("data-size"), 10);
        var i = SCALES.indexOf(state.scale);
        if (i < 0) i = 0;
        var n = i + dirn;
        if (n >= 0 && n < SCALES.length) { state.scale = SCALES[n]; sync(); }
        return;
      }
      var tog = e.target.closest("[data-key]");
      if (tog) {
        var k = tog.getAttribute("data-key");
        state[k] = !state[k];
        sync();
        return;
      }
      if (e.target.closest("[data-reset]")) {
        state = Object.assign({}, DEFAULTS);
        sync();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (!isOpen()) return;
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key !== "Tab") return;
      var list = focusables();
      if (!list.length) return;
      var first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    document.addEventListener("pointerdown", function (e) {
      if (!isOpen()) return;
      if (!root.contains(e.target)) close();
    });

    sync();
  });
})();
