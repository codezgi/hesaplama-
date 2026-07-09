import type { Calculator } from "./types";

export const calculators: Calculator[] = [
  /* ----------------------------- FİNANSAL ----------------------------- */
  {
    slug: "kdv-hesaplama",
    title: "KDV Hesaplama",
    category: "finansal",
    description:
      "KDV dahil ve KDV hariç tutarları anında hesaplayın. %1, %10 ve %20 oranları hazır.",
    keywords: ["kdv", "katma değer vergisi", "kdv dahil", "kdv hariç", "kdv hesapla"],
    formula: "KDV Tutarı = Matrah × (Oran / 100)",
    howItWorks: [
      "KDV hariç tutara oran uygulanarak vergi tutarı bulunur.",
      "KDV dahil bir tutardan matrahı ayırmak için tutar (1 + oran/100)'e bölünür.",
    ],
    note: "Güncel KDV oranları: temel gıda %1, bazı ürün/hizmetler %10, genel oran %20 (2024 sonrası).",
    status: "active",
  },
  {
    slug: "kredi-hesaplama",
    title: "Kredi Taksit Hesaplama",
    category: "finansal",
    description:
      "Kredi tutarı, faiz oranı ve vadeye göre aylık taksit, toplam ödeme ve toplam faizi hesaplayın.",
    keywords: ["kredi", "taksit", "ihtiyaç kredisi", "faiz", "kredi hesaplama", "annüite"],
    formula: "Taksit = A × i × (1+i)^n / ((1+i)^n − 1)",
    howItWorks: [
      "Aylık faiz oranı (i) ve vade sayısına (n) göre eşit taksitli (annüite) yöntem kullanılır.",
      "Toplam ödeme, taksit × vade; toplam faiz ise toplam ödeme − anapara ile bulunur.",
    ],
    note: "Sonuçlar bilgilendirme amaçlıdır; BSMV/KKDF ve dosya masrafları dahil değildir.",
    status: "active",
  },
  {
    slug: "doviz-cevirici",
    title: "Döviz Çevirici (Canlı Kur)",
    category: "finansal",
    description:
      "TCMB güncel kurlarıyla dolar, euro ve tüm para birimleri arasında anlık çeviri yapın.",
    keywords: ["döviz", "kur", "dolar", "euro", "tcmb", "döviz çevirici", "merkez bankası kuru"],
    howItWorks: [
      "Kurlar TCMB'nin resmi günlük verisinden (today.xml) otomatik çekilir.",
      "Çeviri, kaynak birim TL'ye, oradan hedef birime dönüştürülerek yapılır.",
    ],
    note: "Kaynak: TCMB (Merkez Bankası). Gösterge kurlar iş günlerinde ~15:30 sonrası güncellenir.",
    status: "active",
  },
  {
    slug: "altin-hesaplama",
    title: "Altın Hesaplama (Canlı Fiyat)",
    category: "finansal",
    description:
      "Gram, çeyrek, yarım, tam ve cumhuriyet altınının güncel TL değerini anlık hesaplayın.",
    keywords: ["altın", "gram altın", "çeyrek altın", "altın fiyatı", "altın hesaplama"],
    howItWorks: [
      "Altın türü ve miktarını girin; güncel alış/satış fiyatıyla toplam değer hesaplanır.",
      "Fiyatlar Kapalıçarşı verisinden gerçek zamanlı çekilir.",
    ],
    note: "Fiyatlar piyasa verisidir, yatırım tavsiyesi değildir. Kuyumcu marjları farklılık gösterebilir.",
    status: "active",
  },
  {
    slug: "mevduat-faizi",
    title: "Mevduat Faizi Hesaplama",
    category: "finansal",
    description:
      "Anapara, yıllık faiz oranı ve vadeye göre vade sonu getirinizi ve stopaj sonrası net faizi hesaplayın.",
    keywords: ["mevduat", "faiz", "vadeli hesap", "stopaj", "vade sonu", "faiz getirisi"],
    formula: "Brüt Faiz = Anapara × (Oran / 100) × (Vade Gün / 365)",
    howItWorks: [
      "Yıllık brüt faiz, vade gün sayısına oranlanarak brüt getiri bulunur.",
      "Brüt faizden stopaj (gelir vergisi kesintisi) düşülerek net faiz hesaplanır.",
      "Vade sonu ele geçen = anapara + net faiz.",
    ],
    note: "Stopaj oranı TL mevduatta vadeye göre değişebilir; güncel oranı girerek hesaplayın. Tek vade için basit faiz esas alınır.",
    status: "active",
  },
  {
    slug: "bilesik-faiz",
    title: "Bileşik Faiz Hesaplama",
    category: "finansal",
    description:
      "Anapara, faiz oranı, süre ve faiz işleme sıklığına göre bileşik faizle ulaşacağınız vade sonu değeri hesaplayın.",
    keywords: ["bileşik faiz", "compound interest", "faiz getirisi", "yatırım getirisi", "birikim"],
    formula: "A = P × (1 + r/n)^(n·t)",
    howItWorks: [
      "Faiz her dönemde anaparaya eklenir ve sonraki dönemde birlikte işler.",
      "İşleme sıklığı arttıkça (yıllık → aylık → günlük) getiri bir miktar yükselir.",
    ],
    note: "Vergi ve stopaj hariçtir. Tek seferlik yatırım içindir; düzenli katkı içermez.",
    status: "active",
  },

  /* ------------------------------ MAAŞ -------------------------------- */
  {
    slug: "brut-net-maas",
    title: "Brüt-Net Maaş Hesaplama (2026)",
    category: "maas",
    description:
      "Brütten nete, netten brüte maaş hesabı. SGK, işsizlik, gelir ve damga vergisi ile işveren maliyeti dahil.",
    keywords: ["brüt maaş", "net maaş", "maaş hesaplama", "sgk", "gelir vergisi", "2026 maaş"],
    formula: "Net = Brüt − SGK (%14) − İşsizlik (%1) − Gelir Vergisi − Damga Vergisi",
    howItWorks: [
      "Brütten SGK (%14) ve işsizlik (%1) primi düşülerek gelir vergisi matrahı bulunur.",
      "Gelir vergisi artan oranlı dilimlerle (%15–40) hesaplanır; asgari ücrete denk gelen kısım istisnadır.",
      "Damga vergisinde de (binde 7,59) asgari ücret tutarı istisna tutulur.",
    ],
    note: "2026 parametreleri: brüt asgari ücret 33.030 ₺, gelir/damga vergisi istisnaları dahil. Hesap yılın ilk ayına göredir; ilerleyen aylarda vergi dilimleri dolunca net düşebilir.",
    status: "active",
  },
  {
    slug: "kidem-tazminati",
    title: "Kıdem Tazminatı Hesaplama",
    category: "maas",
    description:
      "İşe giriş-çıkış tarihi ve giydirilmiş brüt maaşa göre net kıdem tazminatınızı, tavan ve damga vergisi dahil hesaplayın.",
    keywords: ["kıdem tazminatı", "tazminat", "işten çıkış", "kıdem tavanı", "giydirilmiş brüt"],
    formula: "Kıdem = Giydirilmiş Aylık Brüt × (Toplam Gün / 365)",
    howItWorks: [
      "Her tam çalışma yılı için 30 günlük giydirilmiş brüt ücret esas alınır, artan süre orantılı eklenir.",
      "Aylık ücret, yasal kıdem tazminatı tavanını aşamaz.",
      "Kıdem tazminatından yalnızca damga vergisi (binde 7,59) kesilir; gelir vergisi ve SGK istisnadır.",
    ],
    note: "En az 1 yıl (365 gün) çalışma şartı vardır. Kıdem tavanı her yıl Ocak ve Temmuz'da güncellenir; güncel dönem değerini girerek hesaplayın.",
    status: "active",
  },
  {
    slug: "ihbar-tazminati",
    title: "İhbar Tazminatı Hesaplama",
    category: "maas",
    description: "Çalışma sürenize ve giydirilmiş brüt maaşınıza göre kanuni ihbar sürenizi ve tazminatı hesaplayın.",
    keywords: ["ihbar tazminatı", "ihbar süresi", "iş kanunu 17", "işten çıkış tazminatı"],
    formula: "Süre: <6ay=2h, 6-18ay=4h, 18ay-3yıl=6h, 3+yıl=8h  →  Brüt = Günlük ücret × (hafta × 7)",
    howItWorks: [
      "İhbar süresi çalışma sürenize göre belirlenir (İş Kanunu m.17).",
      "Giydirilmiş brüt aylık ücret 30'a bölünür ve gün sayısıyla çarpılır.",
      "Kıdem tazminatının aksine ihbar tazminatından gelir vergisi de kesilir.",
    ],
    note: "Bu hesap işveren tarafından yapılacak fesihte geçerlidir. İstifada bu tazminat ödenmez.",
    status: "active",
  },
  {
    slug: "fazla-mesai",
    title: "Fazla Mesai Ücreti Hesaplama",
    category: "maas",
    description: "Aylık brüt maaşınız ve fazla çalışma saatinize göre fazla mesai ücretinizi hesaplayın.",
    keywords: ["fazla mesai", "fazla çalışma", "mesai ücreti", "haftalık 45 saat"],
    formula: "Saatlik = Aylık / 225 · Fazla mesai = Saatlik × 1,5 (tatilde ×2)",
    note: "İş Kanunu m.41: Haftalık 45 saat üstü fazla çalışma sayılır; normal saatin en az %50 fazlası ödenir.",
    status: "active",
  },
  {
    slug: "yillik-izin",
    title: "Yıllık Ücretli İzin Hesaplama",
    category: "maas",
    description: "Kıdem yılı ve yaşınıza göre kanuni yıllık ücretli izin gün hakkınızı öğrenin.",
    keywords: ["yıllık izin", "izin hakkı", "iş kanunu 53", "ücretli izin"],
    formula: "1-5 yıl: 14 gün · 5-15 yıl: 20 gün · 15+ yıl: 26 gün · 18- / 50+: min 20 gün",
    note: "İş Kanunu m.53. Toplu iş sözleşmelerinde daha yüksek süreler belirlenebilir.",
    status: "active",
  },
  {
    slug: "issizlik-maasi",
    title: "İşsizlik Maaşı (Ödeneği) Hesaplama",
    category: "maas",
    description: "Son 4 ay brüt ortalamanız ve prim gün sayınıza göre aylık işsizlik ödeneği ve toplam alacağınız tutar.",
    keywords: ["işsizlik maaşı", "işsizlik ödeneği", "iş-kur", "prim gün sayısı"],
    formula: "Aylık ödenek = min(üst; max(alt; Brüt ort × %40))",
    howItWorks: [
      "Son 4 aylık brüt ortalamanın %40'ı ham ödenektir.",
      "Alt sınır: asgari brüt × %40. Üst sınır: alt sınır × 2,5.",
      "Prim günü ödeme süresini belirler: 600→6 ay, 900→8 ay, 1080+→10 ay.",
    ],
    note: "İşten kendi isteğiyle ayrılan veya son 120 gün kesintisiz priminizin olmadığı durumlarda hak kazanılmaz.",
    status: "active",
  },
  {
    slug: "amortisman",
    title: "Amortisman Hesaplama (Normal / Azalan Bakiye)",
    category: "maas",
    description: "Duran varlığın bedelini normal veya azalan bakiye yöntemiyle faydalı ömür boyunca amortismana tabi tutun.",
    keywords: ["amortisman", "amortisman hesaplama", "azalan bakiye", "vergi usul", "faydalı ömür"],
    formula: "Normal: Bedel/Ömür  ·  Azalan: Net Değer × (2/Ömür)",
    status: "active",
  },
  {
    slug: "serbest-meslek-makbuzu",
    title: "Serbest Meslek Makbuzu Hesaplama",
    category: "maas",
    description: "Net ele geçecek tutara göre brüt hizmet bedelini, KDV ve stopajı ayrıştırarak müşteriden tahsil edilecek tutarı hesaplayın.",
    keywords: ["serbest meslek makbuzu", "smm", "stopaj hesaplama", "smm net brüt"],
    formula: "Brüt = Net / (1 − Stopaj%)   ·   Tahsil = Brüt + KDV − Stopaj",
    status: "active",
  },

  /* ----------------------------- EĞİTİM ------------------------------- */
  {
    slug: "gpa-hesaplama",
    title: "GPA / Not Ortalaması Hesaplama",
    category: "egitim",
    description:
      "Ders, kredi/AKTS ve harf notlarından ağırlıklı GPA (4'lük) ortalamanızı transkript gibi hesaplayın. Kredi veya AKTS'ye göre seçilebilir.",
    keywords: [
      "gpa",
      "not ortalaması",
      "agno",
      "gano",
      "döno",
      "akts",
      "ağırlıklı ortalama",
      "transkript",
    ],
    formula: "GPA = Σ(Ağırlık × Katsayı) / Σ(Ağırlık)   (Ağırlık = Kredi veya AKTS)",
    howItWorks: [
      "Her dersin harf notu 4'lük sistemde bir katsayıya çevrilir (AA=4.00, BA=3.50 ...).",
      "Katsayı, seçtiğiniz ağırlıkla (yerel kredi veya AKTS) çarpılır, tüm dersler toplanır ve toplam ağırlığa bölünür.",
      "Tek dönem girerseniz DÖNO, tüm dersleri girerseniz GANO/AGNO elde edersiniz.",
    ],
    status: "active",
  },

  /* ----------------------------- SAĞLIK ------------------------------- */
  {
    slug: "vucut-kitle-indeksi",
    title: "Vücut Kitle İndeksi (BMI) Hesaplama",
    category: "saglik",
    description:
      "Boy ve kiloya göre vücut kitle indeksinizi ve WHO'ya göre kategorinizi öğrenin.",
    keywords: ["bmi", "vücut kitle indeksi", "vki", "ideal kilo", "obezite"],
    formula: "BMI = kilo (kg) / boy² (m)",
    howItWorks: [
      "Kilogram cinsinden ağırlık, metre cinsinden boyun karesine bölünür.",
      "Sonuç WHO aralıklarıyla sınıflandırılır: zayıf, normal, fazla kilolu, obez.",
    ],
    status: "active",
  },
  {
    slug: "gunluk-kalori",
    title: "Günlük Kalori İhtiyacı Hesaplama",
    category: "saglik",
    description:
      "Yaş, boy, kilo ve aktivite seviyenize göre bazal metabolizma (BMR) ve günlük kalori ihtiyacınızı (TDEE) hesaplayın.",
    keywords: ["kalori", "günlük kalori", "bmr", "tdee", "bazal metabolizma", "kalori ihtiyacı"],
    formula: "BMR = 10×kg + 6,25×cm − 5×yaş ± sabit   ·   TDEE = BMR × aktivite",
    howItWorks: [
      "Bazal metabolizma Mifflin-St Jeor denklemiyle hesaplanır (erkek +5, kadın −161 sabiti).",
      "BMR aktivite çarpanıyla çarpılarak günlük toplam enerji ihtiyacı (TDEE) bulunur.",
      "Kilo vermek için ~500 kcal açık, kilo almak için ~500 kcal fazla önerilir.",
    ],
    note: "Sonuçlar tahminidir ve genel formüle dayanır; bireysel beslenme için diyetisyene danışın.",
    status: "active",
  },
  {
    slug: "ideal-kilo",
    title: "İdeal Kilo Hesaplama",
    category: "saglik",
    description: "Boy ve cinsiyetinize göre Devine, Robinson, Miller ve Hamwi formülleriyle ideal kilonuzu hesaplayın.",
    keywords: ["ideal kilo", "ideal ağırlık", "devine", "robinson", "hamwi", "kilo hesaplama"],
    formula: "Devine (E): 50 + 2,3 × (boy inç − 60)   ·   (K): 45,5 + 2,3 × …",
    status: "active",
  },
  {
    slug: "vucut-yag-orani",
    title: "Vücut Yağ Oranı Hesaplama (US Navy)",
    category: "saglik",
    description: "Bel, boyun ve kalça ölçülerinizle US Navy yöntemine göre vücut yağ oranınızı hesaplayın.",
    keywords: ["vücut yağ oranı", "yağ oranı", "us navy", "yağsız kütle", "vücut yağı"],
    status: "active",
  },
  {
    slug: "su-ihtiyaci",
    title: "Günlük Su İhtiyacı Hesaplama",
    category: "saglik",
    description: "Kilo, aktivite ve iklim koşullarınıza göre günlük içmeniz gereken su miktarını hesaplayın.",
    keywords: ["su ihtiyacı", "günlük su", "kaç litre su", "hidrasyon"],
    formula: "Temel: kg × 35 ml + aktivite/iklim düzeltmesi",
    status: "active",
  },
  {
    slug: "protein-ihtiyaci",
    title: "Günlük Protein İhtiyacı Hesaplama",
    category: "saglik",
    description: "Kilo ve aktivite/hedeflerinize göre günlük protein ihtiyacınızı gram olarak hesaplayın.",
    keywords: ["protein ihtiyacı", "günlük protein", "makro besinler", "protein hesaplama"],
    formula: "Protein (g) = Kilo × Faktör (0,8 – 2,0 g/kg)",
    status: "active",
  },
  {
    slug: "ovulasyon-takibi",
    title: "Ovulasyon ve Verimli Dönem Hesaplama",
    category: "saglik",
    description: "Son adet tarihi ve döngü uzunluğuna göre yumurtlama günü ve verimli dönemi hesaplayın.",
    keywords: ["ovulasyon", "yumurtlama", "verimli dönem", "gebelik takvimi", "regl döngüsü"],
    formula: "Ovulasyon ≈ Sonraki Regl − 14 gün (luteal faz)",
    note: "Tahminidir; hormon dalgalanmaları ovulasyonu kaydırabilir.",
    status: "active",
  },
  {
    slug: "bel-kalca-orani",
    title: "Bel-Kalça Oranı (WHR) Hesaplama",
    category: "saglik",
    description: "WHO eşiklerine göre bel/kalça oranı ve kardiyovasküler risk kategorinizi öğrenin.",
    keywords: ["bel kalça oranı", "whr", "sağlık riski", "abdominal yağ", "bel çevresi"],
    formula: "WHR = Bel çevresi / Kalça çevresi",
    note: "Erkeklerde <0,90 normal · 0,90-1,00 orta · ≥1,00 yüksek. Kadınlarda <0,80 normal · 0,80-0,85 orta · ≥0,85 yüksek risk.",
    status: "active",
  },

  /* ------------------------------ ARAÇ -------------------------------- */
  {
    slug: "yakit-maliyeti",
    title: "Yakıt Maliyeti Hesaplama",
    category: "arac",
    description:
      "Mesafe, ortalama tüketim ve yakıt fiyatına göre yolculuğunuzun maliyetini hesaplayın.",
    keywords: ["yakıt", "benzin", "mazot", "yakıt maliyeti", "yol masrafı", "tüketim"],
    formula: "Maliyet = (Mesafe / 100) × Tüketim × Fiyat",
    howItWorks: [
      "100 km'de tüketilen yakıt, toplam mesafeye oranlanarak toplam litre bulunur.",
      "Toplam litre, güncel litre fiyatıyla çarpılarak maliyet hesaplanır.",
    ],
    status: "active",
  },
  {
    slug: "mtv-hesaplama",
    title: "MTV (Motorlu Taşıtlar Vergisi) Hesaplama 2026",
    category: "arac",
    description: "Motor silindir hacmi ve aracın yaşına göre 2026 yılı MTV tutarını hesaplayın.",
    keywords: ["mtv", "motorlu taşıtlar vergisi", "araç vergisi", "2026 mtv"],
    note: "2026 I sayılı cetvel (otomobil) yaklaşık tarifedir. Kesin oranlar için Gelir İdaresi Başkanlığı sitesini kontrol edin.",
    status: "active",
  },

  /* ---------------------------- MATEMATİK ----------------------------- */
  {
    slug: "yuzde-hesaplama",
    title: "Yüzde Hesaplama",
    category: "matematik",
    description:
      "Bir sayının yüzdesi, yüzde artış/azalış ve iki sayı arası yüzde değişimi tek ekranda.",
    keywords: ["yüzde", "yüzde hesaplama", "yüzde artış", "yüzde azalış", "indirim"],
    formula: "Değişim (%) = (Yeni − Eski) / Eski × 100",
    howItWorks: [
      "Bir sayının yüzdesi: Sayı × (Yüzde / 100).",
      "Yüzde değişim: iki değer arasındaki farkın eski değere oranı yüzdeyle ifade edilir.",
    ],
    status: "active",
  },
  {
    slug: "uslu-karekok",
    title: "Üslü Sayı ve Karekök Hesaplama",
    category: "matematik",
    description: "Üslü (kuvvet) sayı ve her dereceden kök (karekök, küpkök) hesaplayın.",
    keywords: ["üslü sayı", "kuvvet", "karekök", "küpkök", "üs alma", "kök hesaplama"],
    formula: "aⁿ = a × a × … (n kez)   ·   ⁿ√a = a^(1/n)",
    status: "active",
  },
  {
    slug: "ebob-ekok",
    title: "EBOB - EKOK Hesaplama",
    category: "matematik",
    description: "Birden fazla sayının en büyük ortak böleni (EBOB) ve en küçük ortak katını (EKOK) asal çarpanlarıyla hesaplayın.",
    keywords: ["ebob", "ekok", "en büyük ortak bölen", "en küçük ortak kat", "obeb", "okek"],
    formula: "EKOK(a,b) = (a × b) / EBOB(a,b)",
    howItWorks: [
      "EBOB, sayıları tam bölen en büyük sayıdır (Öklit algoritması).",
      "EKOK, sayıların ortak en küçük katıdır; EBOB üzerinden bulunur.",
    ],
    status: "active",
  },
  {
    slug: "faktoriyel-permutasyon",
    title: "Faktöriyel, Permütasyon ve Kombinasyon",
    category: "matematik",
    description: "Faktöriyel (n!), permütasyon P(n,r) ve kombinasyon C(n,r) hesaplayın.",
    keywords: ["faktöriyel", "permütasyon", "kombinasyon", "n faktöriyel", "olasılık"],
    formula: "P(n,r) = n!/(n−r)!   ·   C(n,r) = n!/(r!(n−r)!)",
    status: "active",
  },
  {
    slug: "geometri-alan-cevre",
    title: "Geometri: Alan ve Çevre Hesaplama",
    category: "matematik",
    description: "Kare, dikdörtgen, üçgen ve dairenin alan ve çevresini hesaplayın.",
    keywords: ["alan hesaplama", "çevre hesaplama", "daire alanı", "üçgen alanı", "geometri"],
    formula: "Daire: πr²  ·  Kare: a²  ·  Dikdörtgen: a×b  ·  Üçgen: (taban×yükseklik)/2",
    status: "active",
  },
  {
    slug: "sayi-tabani-cevirici",
    title: "Sayı Tabanı Çevirici (2-8-10-16)",
    category: "matematik",
    description: "İkilik, sekizlik, onluk ve onaltılık (hex) sayı sistemleri arasında dönüşüm yapın.",
    keywords: ["sayı tabanı", "binary", "hex", "ikilik", "onaltılık", "taban çevirme", "ikilik onluk"],
    howItWorks: [
      "Girdiğiniz sayı seçtiğiniz tabandan onluk sisteme çevrilir.",
      "Ardından tüm tabanlardaki (2, 8, 10, 16) karşılığı gösterilir.",
    ],
    status: "active",
  },

  /* --------------------------- DÖNÜŞTÜRÜCÜLER -------------------------- */
  {
    slug: "uzunluk-cevirici",
    title: "Uzunluk Birimi Çevirici",
    category: "donusturucu",
    description: "Kilometre, metre, cm, mm, mil, yarda, fit, inç ve deniz mili arasında çeviri.",
    keywords: ["uzunluk çevirici", "metre", "kilometre", "inç", "fit", "mil", "cm mm çevirici"],
    status: "active",
  },
  {
    slug: "agirlik-cevirici",
    title: "Ağırlık / Kütle Birimi Çevirici",
    category: "donusturucu",
    description: "Ton, kilogram, gram, miligram, libre, ons ve karat arasında çeviri.",
    keywords: ["ağırlık çevirici", "kütle", "kilogram", "gram", "libre", "ons", "kg lb çevirici"],
    status: "active",
  },
  {
    slug: "sicaklik-cevirici",
    title: "Sıcaklık Birimi Çevirici",
    category: "donusturucu",
    description: "Santigrat (°C), Fahrenhayt (°F) ve Kelvin (K) arasında sıcaklık çevirin.",
    keywords: ["sıcaklık çevirici", "santigrat fahrenhayt", "celsius fahrenheit", "kelvin", "derece çevirici"],
    formula: "°F = °C × 9/5 + 32   ·   K = °C + 273,15",
    status: "active",
  },
  {
    slug: "alan-cevirici",
    title: "Alan Birimi Çevirici",
    category: "donusturucu",
    description: "Metrekare, kilometrekare, hektar, dönüm, akr ve fitkare arasında çeviri.",
    keywords: ["alan çevirici", "metrekare", "hektar", "dönüm", "akr", "m2 çevirici"],
    status: "active",
  },
  {
    slug: "hacim-cevirici",
    title: "Hacim Birimi Çevirici",
    category: "donusturucu",
    description: "Metreküp, litre, mililitre, galon ve fitküp arasında çeviri.",
    keywords: ["hacim çevirici", "litre", "metreküp", "galon", "mililitre", "m3 çevirici"],
    status: "active",
  },
  {
    slug: "hiz-cevirici",
    title: "Hız Birimi Çevirici",
    category: "donusturucu",
    description: "km/saat, m/saniye, mil/saat, knot ve fit/saniye arasında çeviri.",
    keywords: ["hız çevirici", "km saat", "mph", "knot", "m/s çevirici"],
    status: "active",
  },
  {
    slug: "veri-cevirici",
    title: "Veri Boyutu Çevirici",
    category: "donusturucu",
    description: "Bit, byte, KB, MB, GB ve TB arasında dönüşüm (ikilik, 1024 tabanlı).",
    keywords: ["veri çevirici", "byte kb mb gb", "megabyte gigabyte", "veri boyutu"],
    status: "active",
  },
  {
    slug: "zaman-cevirici",
    title: "Zaman Birimi Çevirici",
    category: "donusturucu",
    description: "Saniye, dakika, saat, gün, hafta, ay ve yıl arasında çeviri.",
    keywords: ["zaman çevirici", "saniye dakika saat", "gün hafta", "süre çevirici"],
    status: "active",
  },

  /* ------------------------------ TARİH ------------------------------- */
  {
    slug: "yas-hesaplama",
    title: "Yaş Hesaplama",
    category: "tarih",
    description:
      "Doğum tarihinizden bugüne yaşınızı yıl, ay, gün ve toplam gün olarak hesaplayın.",
    keywords: ["yaş", "yaş hesaplama", "doğum tarihi", "kaç yaşındayım"],
    howItWorks: [
      "İki tarih arasındaki fark yıl, ay ve güne bölünerek tam yaş bulunur.",
      "Ayrıca toplam gün, hafta ve bir sonraki doğum gününe kalan süre gösterilir.",
    ],
    status: "active",
  },
  {
    slug: "iki-tarih-arasi",
    title: "İki Tarih Arası Hesaplama",
    category: "tarih",
    description:
      "İki tarih arasındaki farkı yıl, ay, gün, hafta, iş günü ve saat olarak hesaplayın.",
    keywords: ["iki tarih arası", "gün hesaplama", "tarih farkı", "kaç gün", "iş günü hesaplama"],
    howItWorks: [
      "İki tarih arasındaki toplam gün bulunur, ardından yıl/ay/gün ve hafta olarak ayrıştırılır.",
      "Hafta içi (Pazartesi-Cuma) günler sayılarak iş günü sayısı hesaplanır.",
    ],
    status: "active",
  },
  {
    slug: "tarih-gun-ekle",
    title: "Tarihe Gün Ekleme / Çıkarma",
    category: "tarih",
    description: "Bir tarihe belirli sayıda gün ekleyip veya çıkararak ulaşacağınız tarihi bulun.",
    keywords: ["gün ekle", "tarih ekleme", "gün çıkarma", "sonra hangi gün", "bugünden n gün sonra"],
    status: "active",
  },
  {
    slug: "haftanin-gunu",
    title: "Haftanın Günü Hesaplama",
    category: "tarih",
    description: "Herhangi bir tarihin haftanın hangi gününe denk geldiğini, yılın kaçıncı günü/haftası olduğunu öğrenin.",
    keywords: ["haftanın günü", "hangi gün", "yılın kaçıncı günü", "iso hafta"],
    status: "active",
  },
  {
    slug: "hicri-takvim",
    title: "Miladi - Hicri Takvim Çevirici",
    category: "tarih",
    description: "Miladi tarihi hicri (İslami) takvime dönüştürün; gün, ay ve yıl karşılıklarını görün.",
    keywords: ["hicri", "miladi hicri çevirici", "islami takvim", "hicri tarih"],
    note: "Kuwaiti algoritması yaklaşık ~1-2 gün hatayla çevirir. Diyanet resmi verisi esastır.",
    status: "active",
  },

  /* ------------------------------ VERGİ ------------------------------- */
  {
    slug: "gelir-vergisi",
    title: "Gelir Vergisi Hesaplama (2026)",
    category: "vergi",
    description:
      "Yıllık vergi matrahınıza göre artan oranlı gelir vergisini dilim dilim, efektif oranıyla birlikte hesaplayın.",
    keywords: ["gelir vergisi", "vergi hesaplama", "vergi dilimi", "2026 gelir vergisi", "vergi tarifesi"],
    formula: "Vergi = Σ (Dilim Matrahı × Dilim Oranı)",
    howItWorks: [
      "Yıllık matrah, 2026 gelir vergisi tarifesindeki dilimlere (%15–40) bölünür.",
      "Her dilime düşen tutara ilgili oran uygulanır ve toplanarak toplam vergi bulunur.",
      "Efektif oran = toplam vergi / matrah olarak gösterilir.",
    ],
    note: "2026 gelir vergisi tarifesine göredir. Ücret gelirinde asgari ücret istisnası ayrıca uygulanır; bu araç genel tarife hesabı içindir.",
    status: "active",
  },
  {
    slug: "damga-vergisi",
    title: "Damga Vergisi Hesaplama",
    category: "vergi",
    description: "Sözleşme, kira, maaş bordrosu, ihale ve makbuz belgeleri için damga vergisini hesaplayın.",
    keywords: ["damga vergisi", "damga vergisi oranı", "sözleşme damga", "kira damga"],
    formula: "Damga = Belge Bedeli × Oran (binde)",
    status: "active",
  },
  {
    slug: "emlak-vergisi",
    title: "Emlak Vergisi Hesaplama",
    category: "vergi",
    description: "Konut, işyeri, arsa ve arazi için rayiç bedele göre yıllık emlak vergisi ve taksitleri.",
    keywords: ["emlak vergisi", "emlak vergisi hesaplama", "rayiç bedel", "büyükşehir emlak"],
    formula: "Yıllık = Rayiç × Oran (binde) — büyükşehirde 2×",
    status: "active",
  },
  {
    slug: "kira-geliri-vergisi",
    title: "Kira Geliri Vergisi Hesaplama (2026)",
    category: "vergi",
    description: "Mesken kira gelirinizi götürü veya gerçek gider yöntemiyle beyan ederek ödeyeceğiniz vergiyi hesaplayın.",
    keywords: ["kira geliri", "kira vergisi", "kira beyanı", "götürü gider", "mesken istisnası"],
    formula: "Matrah = (Gelir − İstisna) − Gider · Vergi = Tarifeden",
    note: "Mesken istisnası ve tarife 2026 yılına göredir. İşyeri kira gelirinde stopaj kuralları farklıdır.",
    status: "active",
  },

  /* ------------------------------ TİCARİ ------------------------------ */
  {
    slug: "kar-marji-iskonto",
    title: "Kâr Marjı ve İskonto (İndirim) Hesaplama",
    category: "ticari",
    description: "Alış-satış fiyatına göre kâr yüzdesi ve brüt marj; liste fiyatına indirim uygulama ve KDV ekleme.",
    keywords: ["kâr marjı", "kar marji", "iskonto", "indirim hesaplama", "brüt marj"],
    formula: "Kâr% = (Satış − Maliyet) / Maliyet × 100",
    status: "active",
  },
  {
    slug: "desi-kargo",
    title: "Desi (Hacimsel Ağırlık) Hesaplama",
    category: "ticari",
    description: "Kargolarda kullanılan desi (hacimsel ağırlık) hesabı; gerçek ağırlıkla karşılaştırılıp faturalanacak ağırlığı belirler.",
    keywords: ["desi", "desi hesaplama", "kargo desi", "hacimsel ağırlık", "kargo ağırlığı"],
    formula: "Desi = (En × Boy × Yükseklik cm) / 3000",
    status: "active",
  },

  /* --------------------------- GELİŞTİRİCİ EK --------------------------- */
  {
    slug: "sifre-uretici",
    title: "Şifre Üretici (Güvenli Rastgele)",
    category: "gelistirici",
    description: "Kriptografik olarak güvenli, uzunluk ve karakter seti ayarlanabilir güçlü şifreler üretin.",
    keywords: ["şifre üretici", "password generator", "güçlü şifre", "rastgele şifre"],
    note: "Şifre tarayıcınızda crypto.getRandomValues ile üretilir; sunucuya gönderilmez.",
    status: "active",
  },
  {
    slug: "hash-uretici",
    title: "SHA Hash Üretici (SHA-1/256/384/512)",
    category: "gelistirici",
    description: "Metinden SHA-1, SHA-256, SHA-384 veya SHA-512 hash üretin. Web Crypto ile tarayıcıda çalışır.",
    keywords: ["hash", "sha256", "sha1", "sha512", "hash üretici", "kriptografi"],
    note: "MD5 modern Web Crypto API'sinde bulunmadığı için hariç tutulmuştur (güvenlik açısından da tavsiye edilmez).",
    status: "active",
  },
  {
    slug: "renk-cevirici",
    title: "Renk Çevirici (HEX ↔ RGB ↔ HSL)",
    category: "gelistirici",
    description: "Renk kodları arasında dönüşüm: HEX (#RRGGBB), RGB ve HSL. Anlık önizleme ve renk seçici.",
    keywords: ["renk çevirici", "hex rgb", "hex hsl", "renk kodu", "css renk"],
    status: "active",
  },
  {
    slug: "karakter-sayaci",
    title: "Karakter ve Kelime Sayacı",
    category: "gelistirici",
    description: "Metnin karakter (boşluklu/boşluksuz), kelime, cümle, satır, paragraf sayısı ve tahmini okuma süresi.",
    keywords: ["karakter sayacı", "kelime sayacı", "okuma süresi", "metin analizi"],
    status: "active",
  },

  /* --------------------------- MATEMATİK EK --------------------------- */
  {
    slug: "oran-oranti",
    title: "Oran - Orantı Çözücü",
    category: "matematik",
    description: "a/b = c/x denkleminde x değişkenini çözer. Doğru orantı ve ölçekleme problemleri için.",
    keywords: ["oran orantı", "doğru orantı", "orantı çözücü"],
    formula: "x = (b × c) / a",
    status: "active",
  },
  {
    slug: "istatistik-ortalama",
    title: "Ortalama ve Standart Sapma Hesaplama",
    category: "matematik",
    description: "Sayı dizisi için aritmetik/geometrik/harmonik ortalama, medyan, mod, standart sapma ve varyans.",
    keywords: ["ortalama", "standart sapma", "medyan", "varyans", "istatistik", "aritmetik ortalama"],
    formula: "σ = √(Σ(x−μ)² / n)",
    status: "active",
  },
  {
    slug: "roma-rakami",
    title: "Roma Rakamı Çevirici",
    category: "matematik",
    description: "Sayıyı Roma rakamına veya Roma rakamını sayıya çevirin (1-3999 arası).",
    keywords: ["roma rakamı", "roma rakamları", "sayıdan romaya", "romadan sayıya"],
    status: "active",
  },
  {
    slug: "rastgele-sayi",
    title: "Rastgele Sayı Üretici",
    category: "matematik",
    description: "Belirli aralıkta, istediğiniz adette, tekrarlı veya tekrarsız rastgele sayılar üretin.",
    keywords: ["rastgele sayı", "random sayı", "çekiliş", "kur'a"],
    status: "active",
  },

  /* ------------------------------ SINAV ------------------------------ */
  {
    slug: "tyt-puan",
    title: "TYT Puan Hesaplama (YKS)",
    category: "sinav",
    description: "Türkçe, Sosyal, Matematik ve Fen ders netlerinize göre YKS TYT ham puanınızı tahmin edin.",
    keywords: ["tyt puan", "yks tyt", "tyt hesaplama", "üniversite sınavı puan", "tyt net puan"],
    formula: "TYT = 100 + Σ (Ders Net × Katsayı)",
    howItWorks: [
      "Her ders için net = doğru − yanlış/4 formülüyle hesaplanır.",
      "Netler, ÖSYM standart ağırlıklarına yakın katsayılarla çarpılıp toplanır ve 100 baz puana eklenir.",
    ],
    note: "ÖSYM resmi formülü z-skor tabanlıdır; bu araç yaygın kullanılan tahmini formülü uygular, sonuçlar ±5-10 puan sapabilir.",
    status: "active",
  },
  {
    slug: "ayt-puan",
    title: "AYT Puan Hesaplama (SAY / EA / SÖZ)",
    category: "sinav",
    description: "AYT ders netleri ve TYT ham puanınızla sayısal, eşit ağırlık veya sözel yerleştirme puanınızı tahmin edin.",
    keywords: ["ayt puan", "yks ayt", "sayısal puan", "eşit ağırlık", "sözel puan", "yerleştirme puanı"],
    formula: "Yerleştirme ≈ 100 + TYT ham × %40 + AYT ham × %60",
    note: "ÖSYM resmi katsayı ve dönüşümleri karmaşıktır; bu araç yaygın tahmini formülü uygular.",
    status: "active",
  },
  {
    slug: "kpss-puan",
    title: "KPSS Puan Hesaplama (P3 / P93)",
    category: "sinav",
    description: "Genel Yetenek ve Genel Kültür netlerinize göre KPSS P3 ve P93 (öğretmenlik) puanlarınızı tahmin edin.",
    keywords: ["kpss puan", "kpss hesaplama", "kpss p3", "kpss p93", "öğretmen puanı", "genel yetenek genel kültür"],
    note: "ÖSYM standart puanı z-skor tabanlıdır; bu araç yaklaşık net-ağırlıklı formül kullanır.",
    status: "active",
  },
  {
    slug: "lgs-puan",
    title: "LGS Puan Hesaplama",
    category: "sinav",
    description: "6 ders (Türkçe, Matematik, Fen, İnkılap, Din, İngilizce) netlerinize göre LGS puan tahmini.",
    keywords: ["lgs puan", "lgs hesaplama", "lise sınavı puan", "8. sınıf sınav puanı"],
    status: "active",
  },
  {
    slug: "dgs-puan",
    title: "DGS Puan Hesaplama (SAY / SÖZ / EA)",
    category: "sinav",
    description: "Sayısal ve sözel netlerinizden SAY, SÖZ ve EA DGS puanlarınızı tahmin edin.",
    keywords: ["dgs puan", "dikey geçiş", "dgs hesaplama", "dgs say sözel"],
    status: "active",
  },
  {
    slug: "yds-ales-puan",
    title: "YDS ve ALES Puan Hesaplama",
    category: "sinav",
    description: "YDS için 100 üzerinden puan, ALES için SAY/SÖZ/EA puan tahmini.",
    keywords: ["yds puan", "ales puan", "ales hesaplama", "yds hesaplama", "yabancı dil sınavı"],
    status: "active",
  },

  /* ------------------------------ MUHASEBE ------------------------------ */

  /* ----------------------------- EV & YAŞAM --------------------------- */
  {
    slug: "konut-kredisi",
    title: "Konut Kredisi Hesaplama",
    category: "ev-yasam",
    description:
      "Konut bedeli, peşinat, faiz ve vadeye göre aylık taksit, toplam ödeme ve toplam faizi hesaplayın.",
    keywords: ["konut kredisi", "ev kredisi", "mortgage", "taksit", "peşinat", "konut kredisi hesaplama"],
    formula: "Taksit = K × i × (1+i)^n / ((1+i)^n − 1)   (K = Bedel − Peşinat)",
    howItWorks: [
      "Kredi tutarı, konut bedelinden peşinat düşülerek bulunur.",
      "Eşit taksitli (annüite) yöntemle aylık taksit, toplam ödeme ve toplam faiz hesaplanır.",
    ],
    note: "Sonuçlar bilgilendirme amaçlıdır; ekspertiz, sigorta ve masraflar dahil değildir. Konut kredisinde yasal kredilendirme oranı sınırları uygulanabilir.",
    status: "active",
  },
  {
    slug: "elektrik-faturasi",
    title: "Elektrik Faturası Hesaplama",
    category: "ev-yasam",
    description:
      "Aylık tüketim (kWh) ve birim fiyatlara göre enerji, dağıtım, vergi ve KDV dahil tahmini fatura tutarı.",
    keywords: ["elektrik faturası", "elektrik hesaplama", "kwh", "fatura hesaplama", "elektrik tüketim"],
    formula: "Toplam = (Enerji + Dağıtım + BTV) × (1 + KDV)",
    howItWorks: [
      "Enerji ve dağıtım bedeli, tüketim (kWh) ile birim fiyatların çarpımıdır.",
      "Enerji bedeli üzerinden elektrik tüketim vergisi (mesken %5), ardından tümüne KDV (%20) eklenir.",
    ],
    note: "Tahminidir. Birim fiyatlar tarife ve abonelik türüne göre değişir; faturanızdaki birim fiyatları girerek en doğru sonucu alın.",
    status: "active",
  },

  /* ---------------------------- HAMİLELİK ----------------------------- */
  {
    slug: "gebelik-hesaplama",
    title: "Gebelik ve Tahmini Doğum Tarihi Hesaplama",
    category: "hamilelik",
    description:
      "Son adet tarihinize göre gebelik haftanızı, trimesterinizi ve tahmini doğum tarihinizi hesaplayın.",
    keywords: ["gebelik", "gebelik haftası", "tahmini doğum tarihi", "hamilelik hesaplama", "kaç haftalık gebeyim"],
    formula: "Tahmini Doğum = Son Adet Tarihi + 280 gün (Naegele)",
    howItWorks: [
      "Son adet tarihine 280 gün (40 hafta) eklenerek tahmini doğum tarihi bulunur.",
      "Bugüne kadar geçen süreyle gebelik haftası ve trimester (1/2/3) belirlenir.",
    ],
    note: "Naegele kuralına dayalı tahminidir; düzensiz döngü ve ultrason ölçümleri sonucu değiştirebilir. Kesin takip için hekiminize danışın.",
    status: "active",
  },

  /* --------------------------- GELİŞTİRİCİ ---------------------------- */
  {
    slug: "json-formatlayici",
    title: "JSON Formatlayıcı ve Doğrulayıcı",
    category: "gelistirici",
    description:
      "JSON verinizi girintili biçimde formatlayın, tek satıra küçültün ve geçerliliğini anında doğrulayın.",
    keywords: ["json formatlayıcı", "json formatter", "json beautify", "json doğrulama", "json validator", "json minify"],
    howItWorks: [
      "Girdiğiniz metin JSON olarak ayrıştırılır; hatalıysa nedeni gösterilir.",
      "Geçerli JSON, seçtiğiniz girinti ile yeniden yazılır veya tek satıra küçültülür.",
    ],
    note: "Tüm işlem tarayıcınızda yapılır; verileriniz sunucuya gönderilmez.",
    status: "active",
  },
  {
    slug: "base64-cevirici",
    title: "Base64 Kodlama / Çözme",
    category: "gelistirici",
    description:
      "Metni Base64'e kodlayın veya Base64 veriyi metne çözün. Türkçe karakterler için UTF-8 uyumlu.",
    keywords: ["base64", "base64 encode", "base64 decode", "base64 çevirici", "kodlama"],
    howItWorks: [
      "Metin UTF-8 baytlarına çevrilerek Base64 alfabesiyle kodlanır.",
      "Çözme işleminde Base64 metin tekrar UTF-8 metne dönüştürülür.",
    ],
    note: "İşlem tamamen tarayıcıda yapılır; veriler sunucuya gönderilmez.",
    status: "active",
  },
  {
    slug: "uuid-uretici",
    title: "UUID Üretici (v4)",
    category: "gelistirici",
    description:
      "Rastgele (sürüm 4) UUID/GUID üretin. Tek tıkla birden fazla üretip kopyalayın.",
    keywords: ["uuid", "guid", "uuid üretici", "uuid generator", "rastgele kimlik"],
    howItWorks: [
      "Tarayıcının kriptografik crypto.randomUUID() fonksiyonuyla sürüm 4 UUID üretilir.",
      "İstediğiniz adette üretip tek tek veya toplu kopyalayabilirsiniz.",
    ],
    note: "UUID'ler tarayıcınızda üretilir; sunucuya gönderilmez.",
    status: "active",
  },

  /* ------------------------------ SİGORTA ------------------------------ */
  {
    slug: "dask-hesaplama",
    title: "DASK (Zorunlu Deprem Sigortası) Hesaplama",
    category: "sigorta",
    description: "Yapı sınıfı, alan (m²) ve deprem risk bölgesine göre yıllık zorunlu deprem sigortası primini hesaplayın.",
    keywords: ["dask", "zorunlu deprem sigortası", "dask hesaplama", "deprem primi"],
    formula: "Prim ≈ (m² × birim × bölge çarpanı) / 100",
    note: "Yaklaşık 2026 tarifelerine dayanır. Kesin prim DASK sistem sorgusundan alınır.",
    status: "active",
  },
  {
    slug: "kasko-tahmin",
    title: "Kasko Primi Tahmini",
    category: "sigorta",
    description: "Aracınızın piyasa değerine göre mini/standart/tam kasko yıllık prim tahminleri.",
    keywords: ["kasko", "kasko hesaplama", "kasko primi", "araç sigortası"],
    formula: "Mini ≈ %2, Standart ≈ %3,5, Tam ≈ %5,5",
    note: "Marka, model, yaş, hasarsızlık indirimi ve ek teminatlar priminizi değiştirir.",
    status: "active",
  },
  {
    slug: "trafik-basamak",
    title: "Trafik Sigortası Basamak Hesaplama",
    category: "sigorta",
    description: "Baz prim ve hasarsızlık basamağınıza göre ödeyeceğiniz trafik sigortası primi.",
    keywords: ["trafik sigortası", "hasarsızlık indirimi", "trafik basamak", "trafik primi"],
    formula: "Prim = Baz × Basamak Katsayısı (0,60 – 2,00)",
    status: "active",
  },

  /* ------------------------------ SEYAHAT ------------------------------ */
  {
    slug: "elektrikli-arac-sarj",
    title: "Elektrikli Araç Şarj Maliyeti Hesaplama",
    category: "seyahat",
    description: "Batarya, mevcut/hedef %, şarj gücü ve birim fiyata göre şarj maliyeti ve süresi.",
    keywords: ["elektrikli araç", "ev şarj", "şarj maliyeti", "kwh maliyet", "elektrikli araç şarj"],
    formula: "Enerji = Batarya × Δ% ÷ Verim   ·   Süre = Enerji / Şarj Gücü",
    status: "active",
  },
  {
    slug: "taksi-ucreti",
    title: "Taksi Ücreti Hesaplama",
    category: "seyahat",
    description: "Açılış, kilometre, bekleme ve gündüz/gece tarifesine göre taksi ücret tahmini.",
    keywords: ["taksi ücreti", "taksi hesaplama", "taksi fiyatı", "gece tarifesi"],
    formula: "Ücret = Açılış + km × ₺/km + dk × ₺/dk  (Gece × 1,5)",
    status: "active",
  },

  /* ------------------------------ YAŞAM ------------------------------ */
  {
    slug: "burc-hesaplama",
    title: "Burç Hesaplama",
    category: "yasam",
    description: "Doğum tarihinize göre batı astrolojisi burcunuzu ve element/gezegen bilgilerini öğrenin.",
    keywords: ["burç", "burç hesaplama", "hangi burcum", "astroloji"],
    status: "active",
  },
  {
    slug: "kusak-hesaplama",
    title: "Kuşak Hesaplama (X, Y, Z, Alpha)",
    category: "yasam",
    description: "Doğum yılınıza göre hangi kuşağa (Sessiz, Boomer, X, Y, Z, Alpha) ait olduğunuzu öğrenin.",
    keywords: ["kuşak", "x kuşağı", "y kuşağı", "z kuşağı", "alpha kuşağı", "milenyum"],
    status: "active",
  },
  {
    slug: "zekat-hesaplama",
    title: "Zekat Hesaplama",
    category: "yasam",
    description: "Mal varlığınız ve borcunuza göre nisap üstü ise ödemeniz gereken zekatı hesaplayın.",
    keywords: ["zekat", "zekat hesaplama", "nisap", "zekat oranı"],
    formula: "Zekat = (Net Mal − Nisap 85gr altın) × 2,5%",
    note: "Bilgi amaçlıdır; kesin dini hüküm için Diyanet İşleri Başkanlığı fetvasını esas alınız.",
    status: "active",
  },
  {
    slug: "klima-btu",
    title: "Klima BTU Hesaplama",
    category: "yasam",
    description: "Oda alanı, tavan yüksekliği, insan sayısı ve güneşe maruziyete göre ihtiyaç duyduğunuz klima BTU değerini bulun.",
    keywords: ["klima btu", "kaç btu klima", "klima seçimi", "klima kapasitesi"],
    formula: "BTU ≈ (m² × Tavan × 200) + İnsan × 500  (Güneşli %+15)",
    status: "active",
  },
  {
    slug: "sigara-maliyeti",
    title: "Sigara Maliyeti Hesaplama",
    category: "yasam",
    description: "Günlük sigara alışkanlığınızın 1 gün, 1 yıl ve 10 yıllık maliyetini görün.",
    keywords: ["sigara maliyeti", "sigara harcaması", "sigara bırakma", "sigara parası"],
    formula: "Günlük = (Adet/20) × Paket Fiyatı",
    status: "active",
  },
];

export function getCalculator(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function calculatorsByCategory(categorySlug: string): Calculator[] {
  return calculators.filter((c) => c.category === categorySlug);
}

export function activeCalculators(): Calculator[] {
  return calculators.filter((c) => c.status === "active");
}
