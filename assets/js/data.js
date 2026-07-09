/* =========================================================
   Influencer Türkiye — içerik verisi (kendi içeriğimiz)
   ========================================================= */
(function () {
  "use strict";
  const I = (p) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;

  const icons = {
    menu: I('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    close: I('<path d="M6 6l12 12M18 6L6 18"/>'),
    arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    arrowDown: I('<path d="M12 5v14M6 13l6 6 6-6"/>'),
    check: I('<path d="M20 6L9 17l-5-5"/>'),
    users: I('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
    eye: I('<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>'),
    heart: I('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>'),
    trophy: I('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M5 4H3v2a3 3 0 0 0 3 3M19 4h2v2a3 3 0 0 1-3 3"/>'),
    target: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>'),
    spark: I('<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>'),
    shield: I('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    chart: I('<path d="M4 4v16h16"/><path d="M7 14l3-4 3 3 4-6"/>'),
    finans: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>'),
    phone: I('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    mail: I('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'),
    pin: I('<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
    clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8z"/></svg>',
    verified: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.3 1.7 2.8-.2 1.1 2.6 2.4 1.4-.7 2.7.7 2.7-2.4 1.4-1.1 2.6-2.8-.2L12 22l-2.3-1.7-2.8.2-1.1-2.6-2.4-1.4.7-2.7-.7-2.7L5.8 6.1l1.1-2.6 2.8.2z"/><path d="M9 12.2l2 2 4-4.2" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    instagram: I('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/>'),
    youtube: I('<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.2l5 2.8-5 2.8z" fill="currentColor" stroke="none"/>'),
    tiktok: I('<path d="M14 4v9.5a3.5 3.5 0 1 1-3.2-3.48"/><path d="M14 6.5a4.5 4.5 0 0 0 4.5 3.2"/>'),
    linkedin: I('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke-width="1.7"/>'),
    x: I('<path d="M4 4l16 16M20 4L4 20"/>'),
    pinterest: I('<circle cx="12" cy="12" r="9"/><path d="M9.5 20c-.3-1.4 0-3 0-3l1.4-5.6s-.4-.8-.4-1.9c0-1.8 1-3.1 2.4-3.1 1.1 0 1.7.8 1.7 1.9 0 1.1-.7 2.8-1.1 4.4-.3 1.3.7 2.4 2 2.4 2.4 0 4-3.1 4-6 0-2.5-1.8-4.4-5-4.4-3.6 0-5.9 2.7-5.9 5.4 0 1 .4 2.1 1 2.7"/>'),
    quote: I('<path d="M7 7h4v6c0 2-1.5 4-4 4M14 7h4v6c0 2-1.5 4-4 4"/>'),
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.45 6.6 2 12.05 2c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42z"/></svg>',
  };
  const platIcon = { Instagram: icons.instagram, YouTube: icons.youtube, TikTok: icons.tiktok, LinkedIn: icons.linkedin, X: icons.x, Pinterest: icons.pinterest };

  const featured = [
    { img: "assets/portf/sukrankaymak.webp", name: "Şükran Kaymak", niche: "Lifestyle & Vlog", city: "İstanbul", followers: "7.8M", engagement: "8", reach: "23M", verified: true, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/sukrankaymak",
      bio: "Günlük yaşam içerikleriyle takipçileriyle güçlü bir bağ kuran, çok yönlü ve samimi bir içerik üreticisi." },
    { img: "assets/portf/hatipoglugizem.webp", name: "Gizem Hatipoğlu", niche: "Moda & Tasarım", city: "İstanbul", followers: "2.2M", engagement: "12", reach: "6,6M", verified: true, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/hatipoglugizem",
      bio: "Sezon trendlerini kendi yorumuyla harmanlayıp takipçilerinin satın alma kararlarını doğrudan etkileyen bir moda üreticisi." },
    { img: "assets/portf/mayabasol.webp", name: "Asya Başol", niche: "Seyahat", city: "İzmir", followers: "2.6M", engagement: "10", reach: "7,8M", verified: true, platforms: ["Instagram"], tag: "Seyahat", instagram: "https://instagram.com/mayabasol",
      bio: "Türkiye ve dünyadan seyahat rotalarıyla ilham veren, otel ve destinasyon markalarının tercih ettiği bir üretici." },
    { img: "assets/portf/umrantoo.webp", name: "Ümran Avcu", niche: "Moda & Tasarım", city: "Ankara", followers: "1.4M", engagement: "12", reach: "4,2M", verified: true, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/umrantoo",
      bio: "Moda ve tasarım içerikleriyle estetik beğenisi yüksek bir kitleye ulaşan, markaların güvendiği bir stil otoritesi." },
    { img: "assets/portf/bagtubaa.webp", name: "Tuğba Bağ", niche: "Lifestyle & Vlog", city: "İstanbul", followers: "2M", engagement: "8", reach: "6M", verified: true, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/bagtubaa",
      bio: "Yaşam tarzı ve vlog içerikleriyle genç kitlesinde sadık bir topluluk oluşturan, yüksek etkileşimli bir üretici." },
    { img: "assets/portf/uzunmakarna.webp", name: "Özgür Balakar", niche: "Lifestyle & Vlog", city: "Bursa", followers: "1.1M", engagement: "11", reach: "3,3M", verified: true, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/uzunmakarna",
      bio: "Ev, aile ve günlük yaşam içerikleriyle geniş kitlelere doğal biçimde ulaşan, markaların sevdiği bir üretici." },
    { img: "assets/portf/betizmmm.webp", name: "Betül Demirkaya", niche: "Güzellik & Makyaj", city: "Antalya", followers: "1M", engagement: "12", reach: "3M", verified: true, platforms: ["Instagram"], tag: "Güzellik", instagram: "https://instagram.com/betizmmm",
      bio: "Makyaj ve cilt bakımı içerikleriyle güzellik markalarının tercih ettiği, yüksek etkileşimli bir içerik üreticisi." },
    { img: "assets/portf/ecmelrumeysa.webp", name: "Ecmel Rümeysa Kaya", niche: "Moda & Tasarım", city: "İstanbul", followers: "964K", engagement: "9", reach: "2,9M", verified: false, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/ecmelrumeysa",
      bio: "Sezon trendlerini kendi yorumuyla harmanlayıp takipçilerinin satın alma kararlarını doğrudan etkileyen bir moda üreticisi." },
    { img: "assets/portf/emure_ozd.webp", name: "Songül Dönmez", niche: "Lifestyle & Vlog", city: "Muğla", followers: "1M", engagement: "11", reach: "3M", verified: true, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/emure_ozd",
      bio: "Ev, aile ve günlük yaşam içerikleriyle geniş kitlelere doğal biçimde ulaşan, markaların sevdiği bir üretici." },
    { img: "assets/portf/aytachalideacar.webp", name: "Halide Acar", niche: "Lifestyle & Vlog", city: "İstanbul", followers: "941K", engagement: "12", reach: "2,8M", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/aytachalideacar",
      bio: "Günlük yaşam içerikleriyle takipçileriyle güçlü bir bağ kuran, çok yönlü ve samimi bir içerik üreticisi." },
    { img: "assets/portf/leyla_gunay.webp", name: "Leyla Günay", niche: "Lifestyle & Vlog", city: "İstanbul", followers: "1M", engagement: "8", reach: "3M", verified: true, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/leylaa_gunay",
      bio: "Yaşam tarzı ve vlog içerikleriyle genç kitlesinde sadık bir topluluk oluşturan, yüksek etkileşimli bir üretici." },
    { img: "assets/portf/saancez.webp", name: "Songül Dönmez", niche: "Lifestyle & Vlog", city: "İzmir", followers: "1M", engagement: "10", reach: "3M", verified: true, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/saancez",
      bio: "Ev, aile ve günlük yaşam içerikleriyle geniş kitlelere doğal biçimde ulaşan, markaların sevdiği bir üretici." },
    { img: "assets/portf/atalaraleyna.webp", name: "Aleyna Atalar", niche: "Moda & Tasarım", city: "Ankara", followers: "804K", engagement: "12", reach: "2,4M", verified: false, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/atalaraleyna",
      bio: "Moda ve tasarım içerikleriyle estetik beğenisi yüksek bir kitleye ulaşan, markaların güvendiği bir stil otoritesi." },
    { img: "assets/portf/ozlemmekik.webp", name: "Özlem Mekik", niche: "Moda & Tasarım", city: "İstanbul", followers: "706K", engagement: "8", reach: "2,1M", verified: false, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/ozlemmekik",
      bio: "Sezon trendlerini kendi yorumuyla harmanlayıp takipçilerinin satın alma kararlarını doğrudan etkileyen bir moda üreticisi." },
    { img: "assets/portf/asenaaolgun.webp", name: "Asena Olgun", niche: "Moda & Tasarım", city: "Bursa", followers: "894K", engagement: "10", reach: "2,7M", verified: false, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/asenaaolgun",
      bio: "Kombin ve tasarım içerikleriyle yüksek etkileşimli, marka iş birliklerinde güçlü dönüşüm sağlayan bir içerik üreticisi." },
    { img: "assets/portf/serapinakappa.webp", name: "Serap Korkmaz", niche: "Moda & Tasarım", city: "Antalya", followers: "602K", engagement: "10", reach: "1,8M", verified: false, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/serapinakappa",
      bio: "Moda ve tasarım içerikleriyle estetik beğenisi yüksek bir kitleye ulaşan, markaların güvendiği bir stil otoritesi." },
    { img: "assets/portf/melekicmeli.webp", name: "Melek Öğüt", niche: "Güzellik & Makyaj", city: "İstanbul", followers: "501K", engagement: "5", reach: "1,5M", verified: false, platforms: ["Instagram"], tag: "Güzellik", instagram: "https://instagram.com/melekicmeli",
      bio: "Ürün denemeleri ve bakım rutinleriyle güzellik kategorisinde güven veren, dönüşüm odaklı bir üretici." },
    { img: "assets/portf/sahinoguzoffical.webp", name: "Oğuzhan Şahin", niche: "Sanat & İçerik", city: "Muğla", followers: "483K", engagement: "12", reach: "1,4M", verified: false, platforms: ["Instagram"], tag: "Sanat", instagram: "https://instagram.com/sahinoguzofficial",
      bio: "Yaratıcı prodüksiyon ve sanat içerikleriyle dikkat çeken, marka hikâyelerini özgün biçimde anlatan bir üretici." },
    { img: "assets/portf/nursen_senyurt.webp", name: "Nurşen Şenyurt", niche: "Moda & Tasarım", city: "İstanbul", followers: "356K", engagement: "6", reach: "1,1M", verified: false, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/nursen_senyurt",
      bio: "Moda ve tasarım içerikleriyle estetik beğenisi yüksek bir kitleye ulaşan, markaların güvendiği bir stil otoritesi." },
    { img: "assets/portf/duygu.webp", name: "Duygu Genç", niche: "Güzellik & Makyaj", city: "İstanbul", followers: "406K", engagement: "7", reach: "1,2M", verified: false, platforms: ["Instagram"], tag: "Güzellik", instagram: "https://instagram.com/duygu",
      bio: "Ürün denemeleri ve bakım rutinleriyle güzellik kategorisinde güven veren, dönüşüm odaklı bir üretici." },
    { img: "assets/portf/yareento.webp", name: "Yaren Bahadır", niche: "Güzellik & Makyaj", city: "İzmir", followers: "391K", engagement: "8", reach: "1,2M", verified: false, platforms: ["Instagram"], tag: "Güzellik", instagram: "https://instagram.com/yareento",
      bio: "Güzellik ve kozmetik içerikleriyle takipçilerini gerçekten yönlendiren, samimi ve etkili bir içerik üreticisi." },
    { img: "assets/portf/aselkirazz.webp", name: "Asel Kiraz", niche: "Lifestyle & Vlog", city: "Ankara", followers: "298K", engagement: "8", reach: "894K", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/aselkirazz",
      bio: "Günlük yaşam içerikleriyle takipçileriyle güçlü bir bağ kuran, çok yönlü ve samimi bir içerik üreticisi." },
    { img: "assets/portf/nnurpehlivan.webp", name: "Nur Pehlivan", niche: "Lifestyle & Vlog", city: "İstanbul", followers: "234K", engagement: "9", reach: "702K", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/nnurpehivan",
      bio: "Yaşam tarzı ve vlog içerikleriyle genç kitlesinde sadık bir topluluk oluşturan, yüksek etkileşimli bir üretici." },
    { img: "assets/portf/dilarapusa.webp", name: "Dilara Pusa", niche: "Moda & Tasarım", city: "Bursa", followers: "279K", engagement: "10", reach: "837K", verified: false, platforms: ["Instagram"], tag: "Moda", instagram: "https://instagram.com/dilarapusa",
      bio: "Kombin ve tasarım içerikleriyle yüksek etkileşimli, marka iş birliklerinde güçlü dönüşüm sağlayan bir içerik üreticisi." },
    { img: "assets/portf/berrakberroo.webp", name: "Berrak Berro", niche: "Lifestyle & Vlog", city: "Antalya", followers: "215K", engagement: "6", reach: "645K", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/berrakberroo",
      bio: "Günlük yaşam içerikleriyle takipçileriyle güçlü bir bağ kuran, çok yönlü ve samimi bir içerik üreticisi." },
    { img: "assets/portf/omer_olgun.webp", name: "Ömer Olgun", niche: "Güzellik & Makyaj", city: "İstanbul", followers: "200K", engagement: "35", reach: "600K", verified: false, platforms: ["Instagram"], tag: "Güzellik", instagram: "https://instagram.com/omer_olgun",
      bio: "Ürün denemeleri ve bakım rutinleriyle güzellik kategorisinde güven veren, dönüşüm odaklı bir üretici." },
    { img: "assets/portf/zey_zor.webp", name: "Zeynep Boz", niche: "Lifestyle & Vlog", city: "Muğla", followers: "813K", engagement: "2", reach: "2,4M", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/zey_zor",
      bio: "Ev, aile ve günlük yaşam içerikleriyle geniş kitlelere doğal biçimde ulaşan, markaların sevdiği bir üretici." },
    { img: "assets/portf/clburakkk.webp", name: "Burak Çelebi", niche: "Lifestyle & Vlog", city: "İstanbul", followers: "321K", engagement: "8", reach: "963K", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/clburakkk",
      bio: "Günlük yaşam içerikleriyle takipçileriyle güçlü bir bağ kuran, çok yönlü ve samimi bir içerik üreticisi." },
    { img: "assets/portf/jankovicsamet.webp", name: "Samet Jankovic", niche: "Sanat & İçerik", city: "İstanbul", followers: "261K", engagement: "3", reach: "783K", verified: false, platforms: ["Instagram"], tag: "Sanat", instagram: "https://instagram.com/jankovicsamet",
      bio: "Özgün sanat ve içerik üretimiyle niş ama yüksek etkileşimli bir kitleye ulaşan yaratıcı bir içerik üreticisi." },
    { img: "assets/portf/boncuksara.webp", name: "Sara Yılmaz", niche: "Lifestyle & Vlog", city: "İzmir", followers: "896K", engagement: "8", reach: "2,7M", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/boncuksara",
      bio: "Ev, aile ve günlük yaşam içerikleriyle geniş kitlelere doğal biçimde ulaşan, markaların sevdiği bir üretici." },
    { img: "assets/portf/dr_ilaydasimaygul.webp", name: "İlayda Simay Gül", niche: "Güzellik & Makyaj", city: "Ankara", followers: "172K", engagement: "4", reach: "516K", verified: false, platforms: ["Instagram"], tag: "Güzellik", instagram: "https://instagram.com/dr.ilaydasimaygul",
      bio: "Makyaj ve cilt bakımı içerikleriyle güzellik markalarının tercih ettiği, yüksek etkileşimli bir içerik üreticisi." },
    { img: "assets/portf/senasuraeerr.webp", name: "Sena Şura Er", niche: "Lifestyle & Vlog", city: "İstanbul", followers: "354K", engagement: "3", reach: "1,1M", verified: false, platforms: ["Instagram"], tag: "Lifestyle", instagram: "https://instagram.com/senasuraeerr",
      bio: "Yaşam tarzı ve vlog içerikleriyle genç kitlesinde sadık bir topluluk oluşturan, yüksek etkileşimli bir üretici." },
  ];

  const services = [
    { img: "assets/img/ic-sanat.jpg", title: "Sanat & Life Style", text: "Sanatçıların markanıza kattığı değer; markanıza özel kurgularla üretilen özgün içerikler." },
    { img: "assets/img/ic-moda.jpg", title: "Moda & Tasarım", text: "İçeriğiniz moda ve tasarım görselleriyse, Instagram doğası gereği markanız için en uygun sahne." },
    { img: "assets/img/ic-beauty.jpg", title: "Beauty", text: "Güzellik sırları hiç güncelliğini yitirmez. Kozmetik ve güzellik içerikleriyle milyonlara ulaşın." },
    { img: "assets/img/ic-seyahat.jpg", title: "Seyahat", text: "Keşfedilmemiş rotalar ve deneyimlerle takipçilerinizi büyüleyin, markanızı yola çıkarın." },
  ];

  const steps = [
    { n: "01", img: "assets/img/ic-tanisma.jpg", title: "Tanışma", text: "Markanızı ve hedeflerinizi dinliyoruz. E-posta, telefon ya da video görüşmeyle ihtiyacınızı netleştiriyoruz." },
    { n: "02", img: "assets/img/ic-strateji.jpg", title: "Stratejik Planlama", text: "Doğru konumlandırma için yayın planı, tarih, mecra ve içerik takvimini hazırlayıp onayınıza sunuyoruz." },
    { n: "03", img: "assets/img/ic-tespit.jpg", title: "Doğru Influencer Tespiti", text: "Etkileşim, yaş grubu, cinsiyet ve takipçi kitlesini analiz ederek size özel influencer listesi çıkarıyoruz." },
    { n: "04", img: "assets/img/ic-yonetim.jpg", title: "Kampanya Yönetimi", text: "Brief, içerik onayı ve yayın koordinasyonunu uçtan uca ekibimiz yönetir; siz sadece sonuçları izlersiniz." },
    { n: "05", img: "assets/img/ic-uretim.jpg", title: "İçerik Üretimi & Yayın", text: "Influencer özgün içeriğini üretir, profesyonel çekimini tamamlar ve planlanan saatte yayınlar." },
    { n: "06", img: "assets/img/ic-rapor.jpg", title: "Raporlama & Analiz", text: "Gösterim, erişim ve etkileşim metriklerini şeffaf raporlarla düzenli olarak paylaşırız." },
  ];

  const whyMicro = [
    { icon: icons.target, title: "Hedef Kitle", text: "Hedef kitlenize göre doğru influencer seçimi yaparak bütçenizi isabetle kullanırız." },
    { icon: icons.spark, title: "Etkileyici İçerik", text: "Teşvik edici ve özgün içeriklerle hedef kitlenizi gerçekten harekete geçiririz." },
    { icon: icons.shield, title: "Samimiyet Olgusu", text: "Micro-influencer'ların samimiyeti, takipçilerin satın alma kararını doğrudan etkiler." },
    { icon: icons.users, title: "İletişim Gücü", text: "Çift yönlü güçlü iletişimle takipçi sadakatini ve marka bağını artırırız." },
  ];

  const benefits = [
    "Hedefli kitleye doğrudan erişim",
    "Ünlülere göre 10x daha ekonomik",
    "Yüksek etkileşim ve güven oranı",
    "Detaylı raporlama ve analiz",
    "Türkiye genelinde 13.000+ influencer ağı",
    "Profesyonel içerik koordinasyonu",
  ];

  const stats = [
    { value: 13150, suffix: "+", label: "Aktif influencer", icon: icons.users },
    { value: 500, suffix: "M+", label: "Aylık erişim", icon: icons.eye },
    { value: 12, prefix: "%", label: "Ort. etkileşim", icon: icons.heart },
    { value: 980, suffix: "+", label: "Tamamlanan kampanya", icon: icons.trophy },
  ];

  const achievements = [
    { value: 189, label: "Özel Proje" },
    { value: 125, label: "Hesap Yönetimi" },
    { value: 168, label: "Mekan Tanıtımı" },
    { value: 84, label: "Ödüllü Proje" },
  ];

  const testimonials = [
    { quote: "Doğru micro-influencer eşleştirmesiyle lansman haftasında hedeflediğimiz dönüşümün iki katına ulaştık. Raporlama tek kelimeyle şeffaftı.", name: "Pazarlama Direktörü", role: "Kozmetik markası", metric: "2.1x ROAS" },
    { quote: "13.000 kişilik ağdan markamıza uygun 40 isim çıkardılar; biz sadece onayladık. Süreç yönetimi bizden çıktı, sonuç bize kaldı.", name: "Marka Yöneticisi", role: "E-ticaret", metric: "%38 erişim artışı" },
    { quote: "Bütçemiz sınırlıydı ama nano & micro stratejisiyle ünlü kampanyasından daha fazla etkileşim aldık. Yeniden çalışacağız.", name: "Kurucu Ortak", role: "D2C gıda markası", metric: "%12 etkileşim" },
  ];

  const brands = ["Pratik Mutfak", "Kavi Tech", "Mavera Tekstil", "Zenfit", "Anatolia Travel", "Lumora", "Vesta Cosmetics", "Norra", "Doruk Digital", "Mira Beauty"];

  const contact = {
    phoneDisplay: "0 542 212 53 95",
    whatsapp: "905422125395",
    email: "hello@influencerturkiye.com",
    address: "Şişli / İstanbul",
    hours: "Pazartesi – Cuma · 09:00 – 18:00",
  };

  window.IT = { icons, platIcon, featured, services, steps, whyMicro, benefits, stats, achievements, testimonials, brands, contact };
})();
