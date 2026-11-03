(function(){
  const S = window.SITE, $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
  const ils = n => "₪" + Number(n).toLocaleString("he-IL");
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const ICONS = {
    bottle:'<svg viewBox="0 0 48 48"><path d="M20 4h8v6h-8zM18 10h12l2 6v26a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V16z"/><path d="M16 24h16"/></svg>',
    cream:'<svg viewBox="0 0 48 48"><path d="M14 14h20v6H14zM12 20h24v20a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z"/><path d="M18 30h12"/></svg>',
    jar:'<svg viewBox="0 0 48 48"><rect x="10" y="12" width="28" height="8" rx="2"/><path d="M12 20h24v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z"/></svg>',
    drop:'<svg viewBox="0 0 48 48"><path d="M24 6c6 9 12 15 12 23a12 12 0 0 1-24 0c0-8 6-14 12-23z"/></svg>'
  };
  const waLink = text => "https://wa.me/" + S.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");

  // links
  $$("[data-book]").forEach(a => { a.href = S.bookingUrl; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-express]").forEach(a => { a.href = S.expressUrl; a.target = "_blank"; a.rel = "noopener"; });
  const tel = "tel:+" + S.whatsapp;
  ["#callBtn","#mbCall"].forEach(id => $(id).href = tel);
  $("#fabWa").href = waLink("היי קובי, הגעתי מהאתר");
  $("#igLink").href = $("#footIg").href = S.instagram; $("#igHandle").textContent = S.instagramHandle;
  $("#wazeBtn").href = S.wazeUrl;
  $("#addr").textContent = `${S.address} · ${S.street}, ${S.city}`;
  $("#footAddr").textContent = `${S.address}, ${S.city} · ${S.phone}`;
  $("#map").src = "https://maps.google.com/maps?q=" + S.geo.lat + "," + S.geo.lng + "&z=17&hl=he&output=embed";
  $("#aboutText").textContent = S.about;
  $("#yr").textContent = new Date().getFullYear();
  $("#heroRating").textContent = `${S.rating.value.toFixed(1)} · ${S.rating.count} ביקורות`;

  // hours + open now
  const now = new Date(), d = now.getDay(), mins = now.getHours()*60 + now.getMinutes();
  const toM = t => { const [h,m] = t.split(":").map(Number); return h*60+m; };
  $("#hours").innerHTML = S.hours.map((h,i) => `<tr class="${i===d?"today":""}"><td>${h.day}${i===d?" (היום)":""}</td><td class="${h.closed?"cl":""}">${h.closed?"סגור":h.open+" – "+h.close}</td></tr>`).join("");
  const t = S.hours[d]; let st;
  if (!t.closed && mins >= toM(t.open) && mins < toM(t.close)) st = `<span class="st-open"><i class="dot"></i>פתוח עכשיו</span> עד ${t.close}`;
  else { let k=1; while (k<8 && S.hours[(d+k)%7].closed) k++;
    const n = (!t.closed && mins < toM(t.open)) ? {h:t,lbl:"היום"} : {h:S.hours[(d+k)%7],lbl:k===1?"מחר":"ב"+S.hours[(d+k)%7].day};
    st = `<span class="st-closed"><i class="dot"></i>סגור</span> · נפתח ${n.lbl} ב-${n.h.open}`; }
  $("#openNow").innerHTML = st;

  // services
  const cats = ["הכל", ...new Set(S.services.map(s => s.cat))];
  const renderSvc = c => {
    $("#svcList").innerHTML = S.services.filter(s => c==="הכל" || s.cat===c).map(s =>
      `<div class="svc"><div class="nm">${esc(s.name)}${s.note?`<span class="tag">${esc(s.note)}</span>`:""}${s.duration?`<small>${s.duration} דק׳</small>`:""}</div><span class="pr">${ils(s.price)}</span><a class="go" href="${S.bookingUrl}" target="_blank" rel="noopener" aria-label="קביעת תור ל${esc(s.name)}">לתור ←</a></div>`).join("");
  };
  $("#svcTabs").innerHTML = cats.map((c,i) => `<button class="tab" role="tab" aria-selected="${i===0}">${c}</button>`).join("");
  $$("#svcTabs .tab").forEach(b => b.onclick = () => { $$("#svcTabs .tab").forEach(x => x.setAttribute("aria-selected", x===b)); renderSvc(b.textContent); });
  renderSvc("הכל");

  // team, reviews, gallery
  $("#team").innerHTML = S.team.map(m => `<figure class="member"><img src="${m.img}" alt="${esc(m.name)}" loading="lazy" width="450" height="450"><b>${esc(m.name)}</b><span>${esc(m.role)}</span></figure>`).join("");
  $("#revTrack").innerHTML = S.reviews.map(r => `<article class="rev"><span class="stars" aria-label="5 כוכבים">★★★★★</span><p>${esc(r.text)}</p><div class="who"><span class="av">${esc(r.name[0])}</span><span>${esc(r.name)}<small>${esc(r.when)} · ${esc(S.rating.source)}</small></span></div></article>`).join("");
  if (S.gallery.length) { $("#gallery").hidden = false; $("#galGrid").innerHTML = S.gallery.map(g => `<img src="${g.src}" alt="${esc(g.alt||"")}" loading="lazy">`).join(""); }

  // shop
  const hasShop = S.products.length > 0;
  document.documentElement.classList.toggle("no-shop", !hasShop);
  const P = Object.fromEntries(S.products.map(p => [p.id, p]));
  const media = p => p.img ? `<img src="${p.img}" alt="${esc(p.name)}" loading="lazy">` : (ICONS[p.icon]||ICONS.jar);
  if (!hasShop) $("#shopSub").textContent = "המוצרים שאנחנו עובדים איתם על הכיסא – בקרוב להזמנה ישירות מהאתר.";
  if (!hasShop) $("#prodGrid").outerHTML = `<div class="soon" data-rv>
      <div class="soon-ring" aria-hidden="true"><span class="pole big"></span></div>
      <p class="soon-k" lang="en" dir="ltr">THE GROOMING SHOP <i>·</i> <b class="shimmer">COMING SOON</b></p>
      <h3>מוצרי ה-Grooming בדרך אלינו.</h3>
      <p>אפטר-שייב, קרמי גילוח ומוצרי טיפוח לשיער – בקרוב גם כאן באתר. עד אז, שאלו אותנו במספרה או בוואטסאפ.</p>
      <a class="btn btn-wa" id="soonWa" href="#" target="_blank" rel="noopener">לשאול בוואטסאפ</a>
    </div>`;
  else $("#prodGrid").innerHTML = S.products.map(p => `<article class="prod"><div class="ph">${media(p)}</div><div class="bd">${p.placeholder?'<span class="ph-flag">דוגמה · ממתין לפרטים</span>':""}<h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><span class="pr ${p.price==null?"tbd":""}">${p.price==null?"מחיר בתיאום":ils(p.price)}</span><button class="add" data-id="${p.id}">הוספה לסל</button></div></article>`).join("");

  // cart (localStorage)
  const KEY = "kc_cart_v1";
  let cart = {}; try { cart = JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){}
  Object.keys(cart).forEach(id => { if (!P[id]) delete cart[id]; });
  const save = () => { localStorage.setItem(KEY, JSON.stringify(cart)); render(); };
  const count = () => Object.values(cart).reduce((a,b)=>a+b,0);
  function render(){
    const n = count(); $("#cartCount").textContent = n; $("#cartCount").classList.toggle("zero", !n); $("#mbCount").textContent = n;
    const ids = Object.keys(cart);
    if (!ids.length) { $("#cartItems").innerHTML = '<div class="empty">הסל עדיין ריק.<br>מוצרי ה-Grooming מחכים בחנות.</div>'; $("#cartFoot").hidden = true; return; }
    $("#cartFoot").hidden = false;
    let total = 0, hasNull = false;
    $("#cartItems").innerHTML = ids.map(id => { const p = P[id], q = cart[id];
      if (p.price==null) hasNull = true; else total += p.price*q;
      return `<div class="ci"><span class="thumb">${p.img?`<img src="${p.img}" alt="">`:(ICONS[p.icon]||ICONS.jar)}</span><div><b>${esc(p.name)}</b><small>${p.price==null?"מחיר בתיאום":ils(p.price)+" ליח׳"}</small><br><button class="rm" data-rm="${id}">הסרה</button></div><div class="qty" aria-label="כמות"><button data-inc="${id}" aria-label="הוספת יחידה">+</button><span>${q}</span><button data-dec="${id}" aria-label="הפחתת יחידה">−</button></div></div>`; }).join("");
    $("#cartTotal").textContent = (total===0 && hasNull) ? "בתיאום *" : ils(total) + (hasNull ? " + *" : "");
    $("#cartNoteNull").hidden = !hasNull;
    $("#waCheckout").href = waLink(orderText(total, hasNull));
  }
  function orderText(total, hasNull){
    const lines = Object.keys(cart).map(id => { const p=P[id], q=cart[id]; return `• ${p.name} × ${q}` + (p.price==null ? " (מחיר בתיאום)" : ` – ${ils(p.price*q)}`); });
    const name = $("#custName").value.trim(), note = $("#custNote").value.trim();
    return [`היי קובי, הזמנה חדשה מהאתר:`, ...lines, ``, (total===0&&hasNull) ? "סה״כ: בתיאום" : `סה״כ: ${ils(total)}${hasNull?" + פריטים במחיר בתיאום":""}`, `איסוף: ${S.fulfilment}`, name?`שם: ${name}`:"", note?`הערה: ${note}`:""].filter((l,i,a)=>l!==""||i===a.indexOf("")).join("\n");
  }
  ["#custName","#custNote"].forEach(id => $(id).addEventListener("input", render));
  $("#fulfil").textContent = "🛍️ " + S.fulfilment;
  if (S.payment.enabled && S.payment.url) { $("#payBtn").hidden = false; $("#payBtn").href = S.payment.url; $("#payOff").hidden = true; }

  const toast = m => { const t=$("#toast"); t.textContent=m; t.classList.add("show"); clearTimeout(toast.t); toast.t=setTimeout(()=>t.classList.remove("show"),1800); };
  document.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.id){ const id=b.dataset.id; cart[id]=(cart[id]||0)+1; save(); toast(`✓ ${P[id].name} נוסף לסל`); b.classList.add("done"); b.textContent="✓ נוסף"; setTimeout(()=>{b.classList.remove("done");b.textContent="הוספה לסל";},1400); }
    if (b.dataset.inc){ cart[b.dataset.inc]++; save(); }
    if (b.dataset.dec){ const id=b.dataset.dec; if(--cart[id]<=0) delete cart[id]; save(); }
    if (b.dataset.rm){ delete cart[b.dataset.rm]; save(); }
  });
  const drawer = $("#cart"), scrim = $("#scrim"); let lastFocus;
  const open = () => { lastFocus=document.activeElement; drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); scrim.hidden=false; document.body.style.overflow="hidden"; drawer.focus(); };
  const close = () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); scrim.hidden=true; document.body.style.overflow=""; lastFocus && lastFocus.focus(); };
  $("#cartBtn").onclick = open; $("#mbCart").onclick = open; $("#cartClose").onclick = close; scrim.onclick = close;
  document.addEventListener("keydown", e => { if (e.key==="Escape" && drawer.classList.contains("open")) close(); });
  window.KC = { open, close };
  render();
  const sw = $("#soonWa"); if (sw) sw.href = waLink("היי קובי, אשמח לשמוע אילו מוצרי טיפוח יש אצלכם");
  initMotion();

  // ================= MOTION =================
  function initMotion(){
    const root = document.documentElement;
    const reduce = root.classList.contains("rm");
    const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

    // hero headline: split into words with stagger
    let wi = 0;
    $$(".split .ln").forEach(ln => {
      ln.innerHTML = ln.textContent.trim().split(/\s+/).map(w => `<span class="w"><span style="--i:${wi++}">${esc(w)}</span></span>`).join(" ");
    });
    requestAnimationFrame(() => root.classList.add("loaded"));

    // scroll reveal (with per-group stagger)
    const groups = [".sec-h", ".tabs", ".svc-list > .svc", ".grid-prod > .prod", ".soon", ".about .quote", ".usp li", ".member", ".rev", ".ig-card", ".visit > div > *", ".map", "details", ".final .wrap > *", ".foot-in > *"];
    groups.forEach(sel => $$(sel).forEach((el, i) => { el.setAttribute("data-rv", ""); el.style.setProperty("--rd", (Math.min(i, 8) * 70) + "ms"); }));
    const els = $$("[data-rv]");
    if (reduce || !("IntersectionObserver" in window)) els.forEach(e => e.classList.add("in"));
    else {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
      els.forEach(e => io.observe(e));
      // re-observe service rows after tab switch
      new MutationObserver(() => $$("#svcList > .svc").forEach((el,i) => { el.setAttribute("data-rv",""); el.style.setProperty("--rd", i*50+"ms"); requestAnimationFrame(()=>el.classList.add("in")); })).observe($("#svcList"), { childList: true });
    }

    // count-up
    const cnt = el => { const to = +el.dataset.count, dec = +(el.dataset.dec||0); if (reduce) return; const t0 = performance.now(), dur = 1200;
      const step = t => { const k = Math.min(1, (t - t0) / dur), v = to * (1 - Math.pow(1 - k, 3)); el.textContent = v.toFixed(dec); if (k < 1) requestAnimationFrame(step); };
      el.textContent = (0).toFixed(dec); requestAnimationFrame(step); };
    const cio = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { cnt(e.target); cio.unobserve(e.target); } }), { threshold: .6 }) : null;
    $$("[data-count]").forEach(el => cio ? cio.observe(el) : 0);

    // header state + scroll progress + hero parallax (rAF-throttled)
    const top = $("#top"), bar = $("#progress"), pic = $(".hero-pic"); let ticking = false;
    const onScroll = () => { ticking = false; const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
      top.classList.toggle("scrolled", y > 20); bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      if (!reduce && pic && innerWidth > 820 && y < innerHeight) pic.style.transform = `translate3d(0,${y * .12}px,0)`; };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true }); onScroll();

    // magnetic buttons (desktop only)
    if (fine && !reduce) $$(".btn, .cart-btn, .fab-wa").forEach(b => {
      b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); const x = (e.clientX - r.left - r.width/2) * .18, y = (e.clientY - r.top - r.height/2) * .28; b.style.transform = `translate(${x}px,${y}px)`; });
      b.addEventListener("pointerleave", () => b.style.transform = "");
    });

    // reviews carousel: arrows + gentle autoplay, pauses on interaction / when off-screen
    const tr = $("#revTrack"); if (tr) {
      const card = () => (tr.querySelector(".rev")?.offsetWidth || 300) + 16;
      // RTL: scrollLeft goes negative; scrollBy with negative left moves "forward" (towards the end)
      const go = dir => { const max = tr.scrollWidth - tr.clientWidth, cur = Math.abs(tr.scrollLeft);
        if (dir > 0 && cur >= max - 4) tr.scrollTo({ left: 0, behavior: "smooth" }); else tr.scrollBy({ left: -dir * card(), behavior: "smooth" }); };
      $("#revNext").onclick = () => { go(1); hold(); }; $("#revPrev").onclick = () => { go(-1); hold(); };
      let paused = false, vis = false, tmr; const hold = () => { paused = true; clearTimeout(tmr); tmr = setTimeout(() => paused = false, 8000); };
      ["pointerdown","wheel","touchstart","focusin"].forEach(ev => tr.addEventListener(ev, hold, { passive: true }));
      tr.addEventListener("mouseenter", () => paused = true); tr.addEventListener("mouseleave", () => paused = false);
      if ("IntersectionObserver" in window) new IntersectionObserver(es => vis = es[0].isIntersecting, { threshold: .4 }).observe(tr);
      if (!reduce) setInterval(() => { if (vis && !paused && !document.hidden) go(1); }, 4500);
    }
  }
})();
