/* =========================================================
   Influencer Türkiye 2 — render + etkileşimler
   ========================================================= */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const IT = window.IT || {};
  const ic = IT.icons || {};

  function hydrateIcons(root = document) {
    $$('[class^="i-"], [class*=" i-"]', root).forEach((n) => {
      if (n.dataset.ic) return;
      const cls = Array.from(n.classList).find((c) => c.startsWith("i-"));
      const key = cls && cls.slice(2);
      if (key && ic[key]) { n.innerHTML = ic[key]; n.dataset.ic = "1"; }
    });
  }

  /* ---------- render ---------- */
  function render() {
    // hero trust
    const trust = [
      { b: "13.150+", s: "Influencer" },
      { b: "500M+", s: "Aylık erişim" },
      { b: "%12", s: "Etkileşim" },
    ];
    const ht = $("#heroTrust");
    if (ht) ht.innerHTML = trust.map((t) => `<li><b>${t.b}</b><span>${t.s}</span></li>`).join("");

    // logos (sürekli kayan tek satır)
    const lr = $("#logoRow");
    if (lr) { const set = (IT.brands || []).map((b) => `<span>${esc(b)}</span>`).join(""); lr.innerHTML = set + set; }

    // services
    const svc = $("#svcGrid");
    if (svc) svc.innerHTML = (IT.services || []).map((s) => `
      <article class="card reveal">
        <span class="card__ic"><img src="${s.img}" alt="" loading="lazy"></span>
        <h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
      </article>`).join("");

    // featured
    const fg = $("#featGrid");
    if (fg) {
      const list = IT.featured || [];
      // sonsuz şerit için iki kopya
      fg.innerHTML = list.concat(list).map((p, i) => featCard(p, i % list.length)).join("");
      $$(".fcard", fg).forEach((c) => c.addEventListener("click", () => openModal(list[+c.dataset.i])));
    }

    // stats band
    const sb = $("#statBand");
    if (sb) sb.innerHTML = (IT.stats || []).map((s) => `
      <div class="bstat reveal">
        <span class="bstat__ic">${s.icon}</span>
        <b><span class="num" data-to="${s.value}" data-prefix="${s.prefix || ""}" data-suffix="${s.suffix || ""}">0</span></b>
        <span>${esc(s.label)}</span>
      </div>`).join("");

    // why
    const wg = $("#whyGrid");
    if (wg) wg.innerHTML = (IT.whyMicro || []).map((w) => `
      <article class="card reveal">
        <span class="card__ic card__ic--line">${w.icon}</span>
        <h3>${esc(w.title)}</h3><p>${esc(w.text)}</p>
      </article>`).join("");

    // benefits
    const bl = $("#benefitList");
    if (bl) bl.innerHTML = (IT.benefits || []).map((b) => `<li><i class="i-check"></i>${esc(b)}</li>`).join("");

    // achievements — sütun grafiği
    const ag = $("#achGrid");
    if (ag) {
      const data = IT.achievements || [];
      const max = Math.max(...data.map((a) => a.value), 1);
      const cols = data.map((a) => {
        const h = Math.round((a.value / max) * 160) + 24;
        return `<div class="colcol reveal"><div class="colbar" style="--h:${h}px"><span class="colval num" data-to="${a.value}">0</span></div></div>`;
      }).join("");
      const labels = data.map((a) => `<span class="collabel">${esc(a.label)}</span>`).join("");
      ag.innerHTML = `<div class="colchart">${cols}</div><div class="collabels">${labels}</div>`;
    }

    // steps
    const st = $("#stepGrid");
    if (st) st.innerHTML = (IT.steps || []).map((s) => `
      <article class="step reveal">
        <span class="step__n">${s.n}</span>
        <span class="step__ic"><img src="${s.img}" alt="" loading="lazy"></span>
        <h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
      </article>`).join("");

    // testimonials
    const tg = $("#testGrid");
    if (tg) tg.innerHTML = (IT.testimonials || []).map((t) => `
      <article class="tcard reveal">
        <div class="tcard__stars">${ic.star.repeat ? "" : ""}${Array(5).fill(`<i class="i-star"></i>`).join("")}</div>
        <p class="tcard__q">"${esc(t.quote)}"</p>
        <div class="tcard__foot"><div class="tcard__who"><b>${esc(t.name)}</b><span>${esc(t.role)}</span></div><span class="tcard__metric">${esc(t.metric)}</span></div>
      </article>`).join("");

    // footer contact
    const fc = $("#footContact");
    const c = IT.contact || {};
    if (fc) {
      fc.innerHTML = `<h4>İletişim</h4>
        <div class="fc"><i class="i-phone"></i>${esc(c.phoneDisplay || "")}</div>
        <div class="fc"><i class="i-mail"></i>${esc(c.email || "")}</div>
        <div class="fc"><i class="i-pin"></i>${esc(c.address || "")}</div>
        <div class="fc"><i class="i-clock"></i>${esc(c.hours || "")}</div>`;
    }
    const wa = $("#waBtn");
    if (wa && c.whatsapp) wa.href = "https://wa.me/" + c.whatsapp;

    hydrateIcons();
  }

  function featCard(p, i) {
    return `
      <article class="fcard" data-i="${i}">
        <div class="fcard__media">
          <img src="${p.img}" alt="${esc(p.name)}" loading="lazy">
          <span class="fcard__tag">${esc(p.tag)}</span>
          <span class="fcard__rate"><i class="i-star"></i>${(4.6 + (i % 4) * 0.1).toFixed(1)}</span>
          ${p.instagram ? `<a class="fcard__ig" href="${esc(p.instagram)}" target="_blank" rel="noopener" aria-label="Instagram profili" onclick="event.stopPropagation()"><i class="i-instagram"></i></a>` : ""}
        </div>
        <div class="fcard__body">
          <div class="fcard__name">${esc(p.name)}${p.verified ? `<i class="i-verified"></i>` : ""}</div>
          <div class="fcard__niche">${esc(p.niche)} · ${esc(p.city)}</div>
          <div class="fcard__stats">
            <div><b>${esc(p.followers)}</b><span>Takipçi</span></div>
            <div><b>%${esc(p.engagement)}</b><span>Etkileşim</span></div>
          </div>
        </div>
      </article>`;
  }

  /* ---------- modal ---------- */
  let modal;
  function ensureModal() {
    if (modal) return;
    modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = '<div class="modal__bd" data-close></div><div class="modal__panel" id="mPanel"></div>';
    document.body.appendChild(modal);
    modal.querySelector(".modal__bd").addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }
  function openModal(p) {
    if (!p) return;
    ensureModal();
    const plats = (p.platforms || []).map((pl) => `<span>${IT.platIcon[pl] || ""}</span>`).join("");
    $("#mPanel").innerHTML = `
      <button class="modal__x" data-close aria-label="Kapat">${ic.close}</button>
      <div class="mp__head">
        <img src="${p.img}" alt="${esc(p.name)}">
        <div>
          <div class="mp__name">${esc(p.name)}${p.verified ? `<i class="i-verified"></i>` : ""}</div>
          <div class="mp__sub"><i class="i-star" style="color:var(--brand)"></i> ${esc(p.niche)} · ${esc(p.city)}</div>
        </div>
      </div>
      <div class="mp__stats">
        <div class="mp__stat"><b>${esc(p.followers)}</b><span>Takipçi</span></div>
        <div class="mp__stat"><b>%${esc(p.engagement)}</b><span>Etkileşim</span></div>
        <div class="mp__stat"><b>${esc(p.reach)}</b><span>Aylık erişim</span></div>
      </div>
      <p style="color:var(--muted);font-size:.95rem;margin-bottom:16px">${esc(p.bio)}</p>
      <div class="mp__plats">${plats}</div>
      <a href="basvuru.html?tip=marka" class="btn btn--primary" style="width:100%">Bu influencer ile çalış ${ic.arrow}</a>`;
    hydrateIcons($("#mPanel"));
    modal.classList.add("open");
    document.documentElement.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    $$("[data-close]", modal).forEach((b) => b.addEventListener("click", closeModal));
  }
  function anyModalOpen() { return !!document.querySelector(".modal.open"); }
  function closeModal() {
    if (modal) modal.classList.remove("open");
    if (!anyModalOpen()) { document.documentElement.classList.remove("modal-open"); document.body.style.overflow = ""; }
  }

  /* ---------- "Tümünü keşfet" — tüm influencer grid modalı ---------- */
  let allModal;
  function openAll() {
    if (!allModal) {
      allModal = document.createElement("div");
      allModal.className = "modal modal--all";
      allModal.innerHTML = '<div class="modal__bd" data-close></div><div class="modal__panel modal__panel--all"><button class="modal__x" data-close aria-label="Kapat">' + ic.close + '</button><h3 class="allm__title">Tüm Influencerlar</h3><div class="allm__grid" id="allGrid"></div></div>';
      document.body.appendChild(allModal);
      const list = IT.featured || [];
      const grid = allModal.querySelector("#allGrid");
      grid.innerHTML = list.map((p, i) => featCard(p, i)).join("");
      $$(".fcard", grid).forEach((c) => c.addEventListener("click", () => openModal(list[+c.dataset.i])));
      hydrateIcons(allModal);
      $$("[data-close]", allModal).forEach((b) => b.addEventListener("click", closeAll));
    }
    allModal.classList.add("open");
    document.documentElement.classList.add("modal-open");
    document.body.style.overflow = "hidden";
  }
  function closeAll() {
    if (allModal) allModal.classList.remove("open");
    if (!anyModalOpen()) { document.documentElement.classList.remove("modal-open"); document.body.style.overflow = ""; }
  }

  /* ---------- interactions ---------- */
  function interactions() {
    const nav = $("#nav");
    const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    const burger = $("#burger"), links = $("#navLinks");
    if (burger && links) {
      burger.addEventListener("click", () => links.classList.toggle("show"));
      $$("a", links).forEach((a) => a.addEventListener("click", () => links.classList.remove("show")));
    }

    // reveal + counters
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
      $$(".num", e.target).forEach(countUp);
    }), { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((n) => io.observe(n));
  }

  function countUp(node) {
    const to = +node.dataset.to; if (!to && to !== 0) return;
    const pre = node.dataset.prefix || "", suf = node.dataset.suffix || "";
    const fmt = (v) => pre + (v >= 1000 ? Math.round(v).toLocaleString("tr-TR") : Math.round(v)) + suf;
    const t0 = performance.now(), dur = 1400;
    (function step(t) {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      node.textContent = fmt(to * e);
      if (p < 1) requestAnimationFrame(step); else node.textContent = fmt(to);
    })(t0);
  }

  function init() {
    if (!window.IT) { document.addEventListener("DOMContentLoaded", init); return; }
    render();
    interactions();
    window.ITopenModal = openModal;
    window.IThydrate = hydrateIcons;
    const allBtn = $("#allBtn");
    if (allBtn) allBtn.addEventListener("click", openAll);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
