/* =========================================================
   Başvuru formu — FormSubmit ile hello@influencerturkiye.com'a gider.
   Bizde/veritabanında veri saklanmaz.
   ========================================================= */
(function () {
  "use strict";
  var LEAD_EMAIL = "hello@influencerturkiye.com";
  var ENDPOINT = "https://formsubmit.co/ajax/" + encodeURIComponent(LEAD_EMAIL);

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function init() {
    var tabs = $$(".apply-tab");
    var formInf = $("#formInf"), formBrand = $("#formBrand");
    var title = $("#applyTitle"), sub = $("#applySub"), headIc = $("#applyHeadIc");
    if (!formInf || !formBrand) return;

    function setMode(mode) {
      var isInf = mode !== "brand";
      formInf.hidden = !isInf;
      formBrand.hidden = isInf;
      tabs.forEach(function (t) { t.classList.toggle("is-active", t.dataset.tab === mode); });
      title.textContent = isInf ? "Influencer Başvuru Formu" : "Marka Başvuru Formu";
      sub.textContent = isInf ? "Sosyal medya varlığınızı büyütmek için bize katılın" : "Markanız için doğru influencer iş birliklerini birlikte kuralım";
      headIc.innerHTML = isInf ? '<i class="i-spark"></i>' : '<i class="i-users"></i>';
      if (window.IThydrate) window.IThydrate(headIc);
      hideError();
    }
    tabs.forEach(function (t) { t.addEventListener("click", function () { setMode(t.dataset.tab); }); });

    // ?tip=marka / ?tip=influencer ile sekme seç, ?inf=<isim> ile influencer alanını doldur
    var params = new URLSearchParams(location.search);
    var tip = params.get("tip");
    var infName = params.get("inf");
    // Kart modalından "Bu influencer ile çalış" ile gelindiyse marka sekmesi + isim otomatik
    if (tip === "marka" || tip === "brand" || infName) setMode("brand"); else setMode("influencer");
    if (infName) {
      var brandInf = document.getElementById("brandInf");
      if (brandInf) brandInf.value = infName;
    }

    function hideError() { var e = $("#applyError"); e.hidden = true; e.textContent = ""; }
    function showError(msg) { var e = $("#applyError"); e.textContent = msg; e.hidden = false; e.scrollIntoView({ behavior: "smooth", block: "center" }); }

    function validate(form) {
      // zorunlu alanlar
      var missing = $$("[required]", form).filter(function (el) { return !String(el.value).trim(); });
      if (missing.length) { missing[0].focus(); return "Lütfen zorunlu (*) alanları doldurun."; }
      // e-posta format
      var email = form.querySelector('input[type="email"]');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.focus(); return "Geçerli bir e-posta girin."; }
      // influencer: en az bir sosyal medya
      if (form.id === "formInf") {
        var anySocial = $$(".js-social", form).some(function (el) { return String(el.value).trim(); });
        if (!anySocial) { return "En az bir sosyal medya hesabı girmelisiniz."; }
      }
      // kvkk
      if (!form.querySelector(".js-kvkk").checked) { return "Devam etmek için KVKK metnini onaylayın."; }
      return null;
    }

    function collect(form) {
      var data = {};
      $$("input, select, textarea", form).forEach(function (el) {
        if (el.type === "checkbox") return;
        if (el.name && String(el.value).trim()) data[el.name] = el.value.trim();
      });
      return data;
    }

    function onSubmit(form, tipLabel) {
      return function (e) {
        e.preventDefault();
        hideError();
        var err = validate(form);
        if (err) { showError(err); return; }
        var btn = form.querySelector(".apply-submit");
        var old = btn.innerHTML;
        btn.disabled = true; btn.textContent = "Gönderiliyor…";
        var fields = collect(form);
        var subject = tipLabel === "Influencer"
          ? ("Yeni Influencer Başvurusu — " + (fields["Ad Soyad"] || ""))
          : ("Yeni Marka Başvurusu — " + (fields["Marka"] || ""));
        var payload = Object.assign({ Tip: tipLabel }, fields, { _subject: subject, _template: "table", _captcha: "false" });
        fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        }).then(function (res) {
          if (!res.ok) throw new Error("http " + res.status);
          return res.json().catch(function () { return {}; });
        }).then(function () {
          $("#applyBody").hidden = true;
          $("#applyTabs").hidden = true;
          var s = $("#applySuccess"); s.hidden = false;
          if (window.IThydrate) window.IThydrate(s);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }).catch(function () {
          btn.disabled = false; btn.innerHTML = old;
          showError("Başvuru gönderilemedi. Lütfen tekrar deneyin veya WhatsApp'tan ulaşın.");
        });
      };
    }
    formInf.addEventListener("submit", onSubmit(formInf, "Influencer"));
    formBrand.addEventListener("submit", onSubmit(formBrand, "Marka"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
