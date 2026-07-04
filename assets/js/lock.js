/* =========================================================
   GEÇİCİ KİLİT MODU (showcase)
   Yalnızca ANASAYFA görünür/çalışır. Sayfa içi gezinme (anchor),
   mobil menü, öne çıkan kart modalı çalışır; başka sayfaya/forma
   yönlendiren bağlantılar etkisizdir.
   TAM SİTEYİ AÇMAK İÇİN: index.html'den lock.js satırını sil ve
   vercel.json içindeki redirects bloğunu kaldır.
   ========================================================= */
(function () {
  document.documentElement.classList.add("locked");

  document.addEventListener(
    "click",
    function (e) {
      // Sayfa içi etkileşimlere izin ver
      if (e.target.closest('#burger, [data-close], .fcard, .modal__bd, a[href^="#"]')) return;
      // Başka sayfaya/dış bağlantıya/forma gidişi engelle
      if (e.target.closest('a, button, [role="button"], input[type="submit"]')) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key !== "Enter") return;
      var t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true
  );
})();
