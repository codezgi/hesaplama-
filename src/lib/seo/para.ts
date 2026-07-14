import type { SeoExtra } from "./types";

/* Finansal + Vergi + Ticari + Sigorta hesaplayıcıları için SEO içerikleri */
export const paraContent: Record<string, SeoExtra> = {
  /* ------------------------------- FİNANSAL ------------------------------ */
  "basit-faiz": {
    howItWorks: [
      "Anapara, yıllık faiz oranı ve gün sayısını girin.",
      "Faiz tutarı = Anapara × Oran × Gün / 36500 formülüyle hesaplanır.",
      "Vade sonunda elinize geçecek toplam, anapara + faiz olarak gösterilir.",
    ],
    faqs: [
      { q: "Basit faiz nasıl hesaplanır?", a: "Basit faizde kazanç yalnızca anapara üzerinden işler: Faiz = Anapara × Yıllık Oran × Gün / 36500. Örneğin 100.000 ₺, %48 oranla 32 günde yaklaşık 4.208 ₺ faiz getirir." },
      { q: "Basit faiz ile bileşik faiz arasındaki fark nedir?", a: "Basit faizde faiz her dönem yalnızca anaparaya işler; bileşik faizde kazanılan faiz anaparaya eklenir ve sonraki dönemde faiz de faiz kazanır. Uzun vadede bileşik faiz belirgin şekilde daha fazla getiri sağlar." },
      { q: "Mevduat faizi basit faiz midir?", a: "Tek seferlik, vadesi sonunda bozulan mevduat basit faizle hesaplanır. Vade sonunda faizle birlikte yeniden yatırırsanız (temdit), bileşik etki elde edersiniz." },
    ],
  },
  "bes-devlet-katkisi": {
    howItWorks: [
      "Aylık düzenli BES katkı payınızı girin.",
      "Devlet katkısı, ödediğiniz katkı payının %30'u olarak hesaplanır.",
      "Yıl bazında toplam birikiminiz ve devlet katkısı ayrı ayrı gösterilir.",
    ],
    faqs: [
      { q: "BES devlet katkısı nedir, ne kadardır?", a: "Bireysel Emeklilik Sistemi'nde ödediğiniz katkı payının %30'u kadar tutar devlet tarafından hesabınıza eklenir. Örneğin ayda 1.000 ₺ öderseniz yılda 3.600 ₺ devlet katkısı alırsınız." },
      { q: "BES devlet katkısının tamamını ne zaman alabilirim?", a: "Devlet katkısının tamamına hak kazanmak için sistemde en az 10 yıl kalıp 56 yaşını doldurmanız gerekir. Erken çıkışta kalış sürenize göre kademeli hak ediş uygulanır (3-6 yıl %15, 6-10 yıl %35, 10+ yıl %60)." },
      { q: "BES'ten erken çıkarsam ne kaybederim?", a: "Erken çıkışta devlet katkısının hak etmediğiniz kısmını alamazsınız ve birikiminizin getirisi üzerinden stopaj kesilir. Kesinti oranı sistemde kalma sürenize göre değişir." },
    ],
  },
  "bilesik-faiz-katki": {
    howItWorks: [
      "Başlangıç anaparası, aylık düzenli katkı, yıllık getiri oranı ve süreyi girin.",
      "Her ay katkınız eklenir ve toplam bakiye aylık bileşik oranla büyür.",
      "Vade sonu değeri A = P(1+i)ⁿ + PMT × ((1+i)ⁿ − 1)/i formülüyle bulunur.",
    ],
    faqs: [
      { q: "Bileşik faiz neden bu kadar güçlüdür?", a: "Bileşik faizde her dönemin kazancı anaparaya eklenir ve sonraki dönemde faiz de faiz kazanır. Bu üstel büyüme uzun vadede farkı devasa yapar: aylık 5.000 ₺ katkı %3 aylık getiriyle 10 yılda katkıların toplamının birkaç katına ulaşabilir." },
      { q: "Aylık düzenli katkı birikimi nasıl etkiler?", a: "Düzenli katkı, tek seferlik yatırıma göre hem disiplin sağlar hem de maliyet ortalaması etkisi yaratır. Formüldeki ikinci terim (PMT × ((1+i)ⁿ−1)/i) katkıların bileşik büyümesini hesaplar." },
      { q: "Getiri oranını nasıl seçmeliyim?", a: "Mevduat için bankaların güncel yıllık oranını 12'ye bölerek, fon/hisse için geçmiş yıllık ortalama getiriyi kullanabilirsiniz. Enflasyonu düşerek reel getiriyle hesaplamak daha gerçekçi sonuç verir." },
    ],
  },
  "birikim-hedef-suresi": {
    howItWorks: [
      "Hedef tutarı, mevcut birikiminizi, aylık katkınızı ve beklenen getiri oranını girin.",
      "Araç, bileşik büyüme ile hedefe kaç ayda ulaşacağınızı hesaplar.",
    ],
    faqs: [
      { q: "Birikim hedefime ne kadar sürede ulaşırım?", a: "Süre; mevcut birikim, aylık katkı ve getiri oranına bağlıdır. Araç, her ay katkı + bileşik getiri eklenerek bakiyenin hedefi geçtiği ilk ayı bulur." },
      { q: "Birikim süremi nasıl kısaltabilirim?", a: "Üç kaldıraç vardır: aylık katkıyı artırmak, daha yüksek getirili (ama riskli olabilecek) araçlara yönelmek ve birikime erken başlamak. Küçük katkı artışları bileşik etkiyle süreyi beklenenden fazla kısaltır." },
      { q: "Enflasyon hedef tutarımı etkiler mi?", a: "Evet — 5 yıl sonraki 1 milyon ₺, bugünkü 1 milyon ₺'den daha az mal alır. Hedefi bugünkü fiyatlarla koyuyorsanız getiri oranı yerine reel getiri (getiri − enflasyon) kullanın." },
    ],
  },
  "coklu-kur": {
    faqs: [
      { q: "TL karşılığında kaç dolar/euro alabilirim?", a: "Araç, girdiğiniz TL tutarını TCMB güncel satış kurlarıyla aynı anda dolar, euro, sterlin ve diğer para birimlerine çevirir. Kurlar gün içinde otomatik güncellenir." },
      { q: "Hangi kur kullanılır: alış mı satış mı?", a: "Döviz satın alırken bankanın satış kuru, bozdururken alış kuru uygulanır. Bu araç TL'den dövize geçişte satış kurunu esas alır; bankaların kur marjı TCMB kurundan bir miktar farklı olabilir." },
      { q: "Kurlar ne sıklıkla güncellenir?", a: "TCMB gösterge kurları her iş günü öğleden sonra açıklanır; sayfa bu veriyi otomatik çeker. Hafta sonu ve tatillerde son iş gününün kuru gösterilir." },
    ],
  },
  "emeklilik-yasi": {
    howItWorks: [
      "Cinsiyetinizi, işe giriş (ilk sigorta) tarihinizi ve prim gün sayınızı girin.",
      "SGK 4A (SSK) mevzuatındaki kademeli geçiş tablosuna göre emeklilik yaşınız ve gereken prim günü hesaplanır.",
    ],
    faqs: [
      { q: "Ne zaman emekli olabilirim?", a: "Emeklilik; ilk sigortalılık tarihinize, prim gün sayınıza ve cinsiyetinize göre belirlenir. 8 Eylül 1999 öncesi girişlilerde EYT düzenlemesi ile yaş şartı kaldırılmıştır; sonrası girişlerde kademeli yaş tablosu uygulanır." },
      { q: "EYT kimleri kapsıyor?", a: "8 Eylül 1999'dan önce sigortalı olanlar, yaş şartı olmaksızın prim günü ve sigortalılık süresi koşullarını (kadın 20 yıl/5.000-5.975 gün, erkek 25 yıl/5.000-5.975 gün) sağladıklarında emekli olabilir." },
      { q: "Eksik prim günümü nasıl tamamlarım?", a: "Çalışmaya devam ederek, askerlik/doğum borçlanması yaparak veya isteğe bağlı sigorta ödeyerek prim gününüzü artırabilirsiniz. Borçlanma tutarları için SGK'ya başvurmanız gerekir." },
    ],
  },
  "enflasyon-guncelleme": {
    howItWorks: [
      "Geçmişteki tutarı ve ait olduğu yıl/ayı girin.",
      "TÜFE endeks değişimi kullanılarak tutarın bugünkü satın alma gücü karşılığı hesaplanır.",
    ],
    faqs: [
      { q: "Geçmişteki bir para bugün ne eder?", a: "TÜFE endeksi ile güncellenir: Bugünkü değer = Eski tutar × (Güncel endeks / Eski endeks). Örneğin yüksek enflasyonlu yıllarda 5 yıl önceki 100.000 ₺'nin bugünkü karşılığı birkaç katına çıkabilir." },
      { q: "TÜFE güncellemesi hangi işlemlerde kullanılır?", a: "Kira depozitosu iadesi, mahkeme alacaklarının güncellenmesi, sözleşme bedellerinin revizyonu ve geçmiş maaşların bugünkü değerle karşılaştırılması gibi işlemlerde yaygın kullanılır." },
      { q: "Endeks verisi nereden gelir?", a: "TÜİK'in aylık açıkladığı Tüketici Fiyat Endeksi kullanılır. Hesap, iki tarih arasındaki endeks oranını uygular; resmî işlemlerde TÜİK'in kendi hesaplayıcısıyla teyit etmeniz önerilir." },
    ],
  },
  "forward-kur": {
    faqs: [
      { q: "Forward kur nedir?", a: "Gelecekteki bir tarihte gerçekleşecek döviz alım-satımı için bugünden sabitlenen kurdur. İki para biriminin faiz farkından hesaplanır: F = Spot × (1 + TL faizi × t/365) / (1 + döviz faizi × t/365)." },
      { q: "Forward kur neden spot kurdan yüksektir?", a: "TL faizi döviz faizinden yüksek olduğu sürece forward kur spot kurun üzerinde oluşur; buna forward primi denir. Bu, arbitrajı engelleyen matematiksel bir denge fiyatıdır, kur tahmini değildir." },
      { q: "Forward sözleşmeyi kimler kullanır?", a: "İthalatçı ve ihracatçılar gelecekteki döviz ödemelerinin/tahsilatlarının TL maliyetini bugünden sabitleyerek kur riskinden korunmak (hedge) için kullanır." },
    ],
  },
  "freelance-saatlik-ucret": {
    howItWorks: [
      "Hedeflediğiniz yıllık net geliri, yılda çalışacağınız hafta sayısını ve haftalık faturalandırılabilir saatinizi girin.",
      "Araç; tatil, hastalık ve satış/idari işlere giden zamanı düştükten sonra istemeniz gereken saatlik ücreti hesaplar.",
    ],
    faqs: [
      { q: "Freelance saatlik ücretimi nasıl belirlemeliyim?", a: "Yıllık gelir hedefinizi gerçekten faturalandırabileceğiniz saat sayısına bölün. Serbest çalışanlar zamanının önemli kısmını müşteri bulma ve idari işlere ayırdığından, haftada 40 değil 25-30 saat faturalandırılabilir saat varsaymak gerçekçidir." },
      { q: "Maaşlı işteki ücretimle nasıl karşılaştırırım?", a: "Maaşlı çalışanın aldığı SGK işveren payı, izin, kıdem ve diğer yan hakları kendiniz karşılayacaksınız. Kabaca, brüt maaş karşılığının %30-50 üzerinde bir saatlik hedef koymak bu farkı dengeler." },
      { q: "Vergi ve giderleri hesaba katmalı mıyım?", a: "Evet — hedef geliri net düşünüyorsanız üzerine gelir vergisi, KDV sorumlulukları, bağkur primi ve ofis/donanım giderlerini ekleyin. Aracın sonucunu bu kalemleri kapsayan brüt hedefle kullanın." },
    ],
  },
  "iban-dogrulama": {
    faqs: [
      { q: "IBAN doğrulama nasıl çalışır?", a: "IBAN, uluslararası MOD-97 algoritmasıyla kontrol edilir: harfler sayıya çevrilip 97'ye bölündüğünde kalan 1 ise IBAN biçimsel olarak geçerlidir. Türkiye IBAN'ları TR ile başlar ve 26 karakterdir." },
      { q: "Geçerli IBAN, hesabın var olduğunu gösterir mi?", a: "Hayır — doğrulama yalnızca yazım/kontrol basamağının tutarlı olduğunu gösterir. Hesabın gerçekten açık ve doğru kişiye ait olduğunu ancak bankanız transfer sırasında teyit eder." },
      { q: "IBAN'ı yanlış girersem param kaybolur mu?", a: "Kontrol basamağı sayesinde tek karakterlik yazım hataları neredeyse her zaman yakalanır ve transfer reddedilir. Ancak geçerli ama yanlış kişiye ait bir IBAN'a gönderim yapılabilir; alıcı adı kontrolü bu yüzden önemlidir." },
    ],
  },
  "irr-hesaplama": {
    faqs: [
      { q: "IRR (iç verim oranı) nedir?", a: "Bir yatırımın nakit akışlarının net bugünkü değerini sıfır yapan iskonto oranıdır. Projenin 'yıllık yüzde kaç kazandırdığının' tek sayılık özetidir ve projeleri karşılaştırmada kullanılır." },
      { q: "IRR nasıl yorumlanır?", a: "IRR, sermaye maliyetinizden (ya da alternatif getiriden) yüksekse proje değer yaratır. Örneğin IRR %45, mevduat %35 ise proje tercih edilebilir; IRR düşükse parayı alternatifte tutmak daha iyidir." },
      { q: "IRR'nin zayıf yönleri nelerdir?", a: "Nakit akışı işaret değiştiren projelerde birden fazla IRR çıkabilir ve farklı ölçekteki projeleri kıyaslarken yanıltabilir. Bu durumlarda NPV ile birlikte değerlendirmek gerekir." },
    ],
  },
  "kredi-karti-asgari": {
    howItWorks: [
      "Dönem borcunuzu ve kartınızın limitine göre geçerli asgari ödeme oranını girin.",
      "Asgari tutar ve kalan borca işleyecek akdi faiz hesaplanır.",
      "Yalnızca asgari ödeyerek borcun nasıl uzadığını görebilirsiniz.",
    ],
    faqs: [
      { q: "Kredi kartı asgari ödeme tutarı nasıl hesaplanır?", a: "Asgari tutar, dönem borcunun BDDK'ca belirlenen orana (genellikle %20-%40 arası, limite göre değişir) çarpılmasıyla bulunur. Kalan borca aylık akdi faiz işler." },
      { q: "Sadece asgariyi ödersem ne olur?", a: "Kalan borca her ay faiz biner ve borç hızla büyür; yüksek faiz oranlarında yalnızca asgari ödeyerek borcu kapatmak yıllar alabilir. Mümkünse dönem borcunun tamamını ödemek en ekonomik yoldur." },
      { q: "Asgariyi de ödemezsem ne olur?", a: "Gecikme faizi (akdi faizden daha yüksek) uygulanır, kart kullanıma kapatılabilir ve ödemesizlik sicilinize (KKB/findeks) olumsuz yansır." },
    ],
  },
  "npv-hesaplama": {
    faqs: [
      { q: "NPV (net bugünkü değer) nedir?", a: "Gelecekteki nakit akışlarının bugünkü değerinden başlangıç yatırımının düşülmesiyle bulunan tutardır: NPV = Σ CFₜ/(1+r)ᵗ − Yatırım. Paranın zaman değerini hesaba katarak projenin gerçekten kazandırıp kazandırmadığını gösterir." },
      { q: "NPV pozitifse ne anlama gelir?", a: "Proje, kullandığınız iskonto oranının (alternatif getirinin) üzerinde değer yaratıyor demektir ve finansal olarak kabul edilebilir. NPV negatifse aynı parayı alternatifte değerlendirmek daha kârlıdır." },
      { q: "İskonto oranını nasıl seçerim?", a: "Genellikle sermaye maliyeti ya da vazgeçilen en iyi alternatifin getirisi (örneğin mevduat veya tahvil faizi) kullanılır. Yüksek riskli projelerde oranı risk primi ekleyerek artırmak doğru olur." },
    ],
  },
  "para-katlama-72": {
    faqs: [
      { q: "72 kuralı nedir?", a: "Paranın ikiye katlanma süresini hızlıca tahmin eden pratik kuraldır: 72 ÷ yıllık getiri oranı ≈ katlanma yılı. Örneğin %24 getiriyle para yaklaşık 3 yılda ikiye katlanır." },
      { q: "72 kuralı ne kadar doğrudur?", a: "%6-%12 arası oranlarda oldukça isabetlidir; çok yüksek oranlarda sapma artar. Bu araç hem 72 kuralını hem de kesin logaritmik formülü (n = ln2 / ln(1+r)) birlikte gösterir." },
      { q: "Enflasyon paranın değerini kaç yılda yarıya indirir?", a: "Aynı kural tersine de çalışır: 72 ÷ enflasyon oranı ≈ satın alma gücünün yarıya inme süresi. %36 enflasyonda paranızın alım gücü yaklaşık 2 yılda yarılanır." },
    ],
  },
  "reel-getiri": {
    faqs: [
      { q: "Reel getiri nedir, nasıl hesaplanır?", a: "Enflasyondan arındırılmış gerçek kazançtır. Fisher formülüyle hesaplanır: Reel = (1 + Nominal) / (1 + Enflasyon) − 1. Nominal %50 kazanç, %45 enflasyonda yalnızca %3,4 reel getiri demektir." },
      { q: "Neden nominal orandan enflasyonu doğrudan çıkaramıyoruz?", a: "Basit çıkarma (%50 − %45 = %5) yaklaşık sonuç verir ama bileşik etkiyi ihmal eder. Yüksek enflasyonda fark büyür; doğru yöntem Fisher formülüdür." },
      { q: "Mevduat enflasyona karşı koruyor mu?", a: "Mevduat faizi enflasyonun altındaysa reel getiri negatiftir — paranız nominal artsa da alım gücü düşer. Bu araçla yatırımınızın gerçekten kazandırıp kazandırmadığını görebilirsiniz." },
    ],
  },
  "roi-hesaplama": {
    faqs: [
      { q: "ROI nedir, nasıl hesaplanır?", a: "Yatırım getiri oranıdır: ROI = (Net Kâr / Yatırım Maliyeti) × 100. Örneğin 100.000 ₺ yatırımdan 25.000 ₺ net kâr elde ettiyseniz ROI %25'tir." },
      { q: "İyi bir ROI kaçtır?", a: "Sektöre ve riske göre değişir; anlamlı kıyas, alternatif getiridir. ROI'niz risksiz mevduat getirisinin altındaysa yatırım finansal olarak zayıftır. Reklam kampanyalarında ise genellikle %100+ (2x) hedeflenir." },
      { q: "ROI ile ROAS arasındaki fark nedir?", a: "ROAS ciroyu harcamaya oranlar (Ciro/Harcama), ROI ise net kârı esas alır. ROAS 3x görünen bir kampanya, ürün maliyetleri düşülünce düşük hatta negatif ROI verebilir." },
    ],
  },

  /* -------------------------------- VERGİ -------------------------------- */
  "damga-vergisi": {
    howItWorks: [
      "Sözleşme/belge türünü seçin ve belge bedelini girin.",
      "Damga vergisi = Bedel × belge türüne ait binde oran formülüyle hesaplanır.",
    ],
    faqs: [
      { q: "Damga vergisi nedir, hangi belgelerden alınır?", a: "Resmî işlemlere konu kağıtlardan (sözleşme, kira kontratı, maaş bordrosu, ihale kararı vb.) alınan vergidir. Her belge türünün Damga Vergisi Kanunu'na ekli tabloda binde cinsinden oranı vardır." },
      { q: "Kira sözleşmesinde damga vergisi ne kadar?", a: "Kira sözleşmeleri, sözleşme süresine göre toplam kira bedeli üzerinden binde 1,89 oranında damga vergisine tabidir. Konut kiralarında kiracı gerçek kişiyse istisna uygulanır." },
      { q: "Damga vergisini kim öder?", a: "Kural olarak kağıdı imzalayanlar müteselsilen sorumludur; uygulamada taraflar sözleşmeyle paylaşımı belirler. Resmî dairelerle yapılan işlemlerde vergi genellikle diğer tarafça ödenir." },
    ],
  },
  "emlak-vergisi": {
    howItWorks: [
      "Taşınmazın türünü (konut, iş yeri, arsa, arazi) ve belediye rayiç bedelini girin.",
      "Büyükşehir sınırında olup olmadığını seçin — büyükşehirde oranlar iki kat uygulanır.",
      "Yıllık vergi = Rayiç bedel × binde oran olarak hesaplanır.",
    ],
    faqs: [
      { q: "Emlak vergisi oranları nedir?", a: "Normal belediyelerde konut binde 1, iş yeri binde 2, arsa binde 3, arazi binde 1'dir. Büyükşehir belediyesi sınırlarında bu oranlar iki katı uygulanır (konut binde 2 vb.)." },
      { q: "Emlak vergisi ne zaman ödenir?", a: "İki eşit taksitte ödenir: birinci taksit Mart-Mayıs, ikinci taksit Kasım ayı içinde. Belediyenize giderek veya e-belediye üzerinden ödeyebilirsiniz." },
      { q: "Emlak vergisinden kimler muaf?", a: "Tek konutu olan emekliler, ev hanımları, işsizler, engelliler, gaziler ve şehit yakınları belirli şartlarla (konutun 200 m²'yi aşmaması vb.) sıfır oranlı vergiden yararlanır." },
    ],
  },
  "kdv-tevkifat": {
    howItWorks: [
      "Fatura tutarını, KDV oranını ve işlem türüne ait tevkifat oranını (ör. 5/10, 9/10) girin.",
      "KDV'nin tevkif edilen kısmı alıcı tarafından, kalanı satıcı tarafından beyan edilir; araç iki tutarı da gösterir.",
    ],
    faqs: [
      { q: "KDV tevkifatı nedir?", a: "Bazı işlemlerde KDV'nin tamamının satıcıya ödenmeyip belirli oranının (örneğin 9/10) alıcı tarafından sorumlu sıfatıyla doğrudan vergi dairesine yatırılmasıdır. Amaç vergi güvenliğini sağlamaktır." },
      { q: "Hangi işlemler tevkifata tabidir?", a: "Yapım işleri, işgücü temini, temizlik-bakım hizmetleri, danışmanlık, servis taşımacılığı gibi Gelir İdaresi'nin tebliğle belirlediği hizmetler; ayrıca belirlenmiş alıcılara (kamu, bankalar vb.) yapılan teslimlerde uygulanır." },
      { q: "5/10 tevkifat ne demek?", a: "Faturadaki KDV'nin yarısını alıcı sorumlu sıfatıyla vergi dairesine öder, kalan yarısını satıcıya öder. Örneğin 1.000 ₺ + %20 KDV (200 ₺) faturada 5/10 tevkifatla satıcıya 1.100 ₺ ödenir, 100 ₺ alıcı tarafından beyan edilir." },
    ],
  },
  "kira-geliri-vergisi": {
    howItWorks: [
      "Yıllık brüt kira gelirinizi girin ve gider yöntemini seçin (götürü %15 veya gerçek gider).",
      "Konut istisnası düşülür, kalan matraha artan oranlı gelir vergisi tarifesi uygulanır.",
    ],
    faqs: [
      { q: "Kira geliri vergisi nasıl hesaplanır?", a: "Brüt kiradan istisna (konutlarda yıllık istisna tutarı) düşülür, kalan tutardan götürü (%15) veya belgeli gerçek giderler indirilir; kalan matraha artan oranlı gelir vergisi tarifesi (%15'ten başlar) uygulanır." },
      { q: "Götürü gider mi gerçek gider mi seçmeliyim?", a: "Kredi faizi, sigorta, bakım-onarım gibi belgeli gideriniz kiranın %15'ini aşıyorsa gerçek gider avantajlıdır; aksi halde belge derdi olmayan götürü gider pratiktir. Götürüyü seçen 2 yıl vazgeçemez." },
      { q: "Kira beyannamesi ne zaman verilir?", a: "Bir önceki yıla ait kira gelirleri Mart ayında beyan edilir; vergi Mart ve Temmuz'da iki taksitte ödenir. Beyan, Hazır Beyan Sistemi üzerinden online yapılabilir." },
    ],
  },

  /* ------------------------------- TİCARİ -------------------------------- */
  "deri-miktar": {
    faqs: [
      { q: "Deri ürün için kaç m² deri gerekir?", a: "Ürünün kalıp alanı, fire payıyla (genellikle %15-%30) çarpılarak bulunur. Araç, parça ölçülerinden toplam deri ihtiyacını ve maliyeti hesaplar." },
      { q: "Deri neden feet kare (sqft) ile satılır?", a: "Uluslararası deri ticaretinde standart birim feet karedir (1 sqft ≈ 0,0929 m²). Araç m² ve sqft arasında otomatik dönüşüm yapar." },
    ],
  },
  "desi-kargo": {
    howItWorks: [
      "Paketin en, boy ve yükseklik ölçülerini cm cinsinden girin.",
      "Desi = (En × Boy × Yükseklik) / 3000 formülüyle hacimsel ağırlık bulunur.",
      "Kargo ücreti, desi ile gerçek kilogramdan büyük olanı üzerinden hesaplanır.",
    ],
    faqs: [
      { q: "Desi nedir, nasıl hesaplanır?", a: "Desi, kargonun kapladığı hacmi ağırlığa çeviren birimdir: Desi = En × Boy × Yükseklik (cm) / 3000. Örneğin 40×30×25 cm koli 10 desidir." },
      { q: "Kargo ücreti desiden mi kilodan mı hesaplanır?", a: "İkisinden büyük olanından. 10 desi ama 3 kg olan hafif-hacimli koli 10 desi üzerinden; 5 desi ama 8 kg olan yoğun koli 8 kg üzerinden ücretlendirilir." },
      { q: "Desiyi düşürmek için ne yapabilirim?", a: "Mümkün olan en küçük kutuyu kullanın ve boşlukları azaltın — çünkü ölçüler çarpım olarak etki eder; her kenardan birkaç cm kısalma toplam desiyi belirgin düşürür." },
    ],
  },
  "eoq-siparis": {
    faqs: [
      { q: "EOQ (ekonomik sipariş miktarı) nedir?", a: "Sipariş verme maliyeti ile stok tutma maliyetinin toplamını en aza indiren sipariş büyüklüğüdür: EOQ = √(2 × Yıllık Talep × Sipariş Maliyeti / Birim Elde Tutma Maliyeti)." },
      { q: "EOQ ne işe yarar?", a: "Çok sık küçük sipariş vermek sipariş maliyetini, seyrek büyük sipariş vermek depo/stok maliyetini artırır. EOQ bu iki maliyeti dengeleyen optimum noktayı verir." },
      { q: "EOQ'nun varsayımları nelerdir?", a: "Talebin sabit ve bilinir olduğunu, tedarik süresinin değişmediğini ve birim fiyatın miktara göre değişmediğini varsayar. İskonto veya mevsimsellik varsa sonuç başlangıç noktası olarak kullanılmalıdır." },
    ],
  },
  "fatura-hesaplama": {
    howItWorks: [
      "Net (KDV hariç) tutarı, KDV oranını ve varsa stopaj oranını girin.",
      "Araç; KDV dahil toplamı, stopaj kesintisini ve tahsil edilecek tutarı ayrı ayrı gösterir.",
    ],
    faqs: [
      { q: "Faturada stopaj nasıl hesaplanır?", a: "Stopaj brüt (KDV hariç) tutar üzerinden kesilir. Örneğin serbest meslek makbuzunda %20 stopaj: 10.000 ₺ brüt işte 2.000 ₺ stopaj kesilir, KDV eklenir ve tahsil edilecek tutar buna göre oluşur." },
      { q: "KDV ile stopaj aynı şey mi?", a: "Hayır — KDV alıcıdan tahsil edilip devlete ödenen tüketim vergisidir, faturaya eklenir. Stopaj ise gelir vergisinin peşin kesintisidir, tutardan düşülür ve alıcı tarafından vergi dairesine yatırılır." },
      { q: "E-fatura ve e-arşiv fatura farkı nedir?", a: "E-fatura yalnızca sisteme kayıtlı mükellefler arasında elektronik ortamda iletilir; e-arşiv fatura sisteme kayıtlı olmayan alıcılara (nihai tüketici dahil) kesilir ve e-posta/kağıt olarak iletilebilir." },
    ],
  },
  "insaat-maliyet": {
    faqs: [
      { q: "İnşaat m² maliyeti nasıl hesaplanır?", a: "Toplam inşaat alanı, yapı sınıfına ait m² birim maliyetiyle çarpılır. Birim maliyet; kaba yapı, ince işçilik, tesisat ve işçiliği kapsar ve yapı kalitesine göre önemli ölçüde değişir." },
      { q: "Resmî birim maliyetler nereden bulunur?", a: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı her yıl 'Yapı Yaklaşık Birim Maliyetleri' tebliği yayımlar; ruhsat harçları ve sigorta bu değerler üzerinden hesaplanır. Piyasa maliyeti tebliğ değerinden farklı olabilir." },
      { q: "Kaba inşaat ile anahtar teslim fark nedir?", a: "Kaba inşaat (temel, betonarme, duvar, çatı) toplam maliyetin kabaca %40-50'sidir; ince işler (sıva, boya, zemin, mutfak-banyo, tesisat) kaliteye göre kalan kısmı oluşturur ve anahtar teslim maliyeti belirleyen esas kalemdir." },
    ],
  },
  "kar-marji-iskonto": {
    howItWorks: [
      "Maliyet ve satış fiyatını girin — kâr marjı ve markup ayrı ayrı hesaplanır.",
      "İskonto bölümünde etiket fiyatı ve indirim oranından indirimli fiyat bulunur.",
    ],
    faqs: [
      { q: "Kâr marjı ile markup farkı nedir?", a: "Markup maliyete göre (Kâr/Maliyet), marj satışa göre (Kâr/Satış) oranlardır. 100 ₺'ye alıp 150 ₺'ye satarsanız markup %50, kâr marjı %33'tür. İkisini karıştırmak yaygın fiyatlama hatasıdır." },
      { q: "Zincirleme (ardışık) iskonto nasıl hesaplanır?", a: "İndirimler toplanmaz, ardışık uygulanır: %20 + %10 iskonto toplam %30 değil, 1 − (0,80 × 0,90) = %28 eder. Araç ardışık indirimleri doğru şekilde zincirler." },
      { q: "Hedef kâr marjına göre satış fiyatı nasıl bulunur?", a: "Satış = Maliyet / (1 − hedef marj). %25 marj hedefiyle 100 ₺ maliyetli ürün 133,33 ₺'ye satılmalıdır — maliyete %25 eklemek (125 ₺) hedefin altında kalır." },
    ],
  },
  "reklam-metrikleri": {
    faqs: [
      { q: "CTR, CPC, CPM ve ROAS ne anlama gelir?", a: "CTR tıklama oranı (Tıklama/Gösterim), CPC tıklama başı maliyet, CPM bin gösterim maliyeti, ROAS reklam harcaması getirisidir (Ciro/Harcama). Kampanya sağlığını birlikte okumak gerekir." },
      { q: "İyi bir ROAS kaç olmalı?", a: "Kâr marjınıza bağlıdır: başabaş ROAS = 1 / kâr marjı. %25 marjlı üründe 4x altındaki ROAS zarar demektir; %50 marjda 2x yeterli olabilir." },
      { q: "CTR düşükse ne yapmalıyım?", a: "Görsel/başlık uyumunu, hedef kitle seçimini ve teklifin netliğini gözden geçirin. Sektöre göre değişmekle birlikte arama ağında %2+, görüntülü reklamda %0,5+ CTR makul kabul edilir." },
    ],
  },
  "vade-farki-senet": {
    faqs: [
      { q: "Senet iskontosu nasıl hesaplanır?", a: "Vadesinden önce paraya çevrilen senetten, kalan gün için faiz düşülür: İskonto = Senet Bedeli × Yıllık Oran × Gün / 36500. Elinize senet bedelinden iskonto düşülmüş tutar geçer." },
      { q: "Vade farkı nedir?", a: "Peşin fiyat ile vadeli fiyat arasındaki, paranın zaman değerini yansıtan farktır. Satıcı, tahsilatı geciken parasının finansman maliyetini vade farkı olarak fiyata ekler." },
      { q: "İç iskonto ve dış iskonto farkı nedir?", a: "Dış iskonto senet bedeli üzerinden, iç iskonto ise bugünkü değer üzerinden hesaplanır. Bankalar genellikle dış iskonto kullanır; iç iskonto matematiksel olarak daha adildir." },
    ],
  },

  /* ------------------------------- SİGORTA ------------------------------- */
  "dask-hesaplama": {
    howItWorks: [
      "Konutun brüt yüzölçümünü, yapı tarzını ve bulunduğu il/deprem risk bölgesini girin.",
      "Prim; m² birim maliyeti, bölge risk katsayısı ve yapı tarzı çarpanıyla hesaplanır.",
    ],
    faqs: [
      { q: "DASK zorunlu mu?", a: "Evet — belediye sınırları içindeki tüm konutlar için Zorunlu Deprem Sigortası yasal zorunluluktur. Tapu işlemleri, elektrik-su aboneliği ve konut kredisi DASK poliçesi olmadan yapılamaz." },
      { q: "DASK primi neye göre değişir?", a: "Konutun yüzölçümü, yapı tarzı (betonarme/diğer), bina yaşı, kat sayısı ve bulunduğu deprem risk bölgesine göre belirlenir. Riskli bölgede eski ve büyük konutların primi daha yüksektir." },
      { q: "DASK neleri karşılar, neleri karşılamaz?", a: "Depremin ve deprem kaynaklı yangın, patlama, tsunami ile yer kaymasının binada yarattığı maddi hasarı teminat limitine kadar karşılar. Eşyalar, kira kaybı ve bedeni zararlar kapsam dışıdır — bunlar için konut sigortası gerekir." },
    ],
  },
  "hayat-sigortasi": {
    faqs: [
      { q: "Hayat sigortası primi neye göre belirlenir?", a: "Yaş, cinsiyet, sağlık durumu, teminat tutarı ve süreye göre belirlenir. Yaş ilerledikçe risk arttığından prim üstel biçimde yükselir; genç yaşta başlamak önemli avantajdır." },
      { q: "Kredi alırken hayat sigortası zorunlu mu?", a: "Yasal olarak zorunlu değildir ancak bankalar kredi güvencesi olarak talep edebilir. İstediğiniz sigorta şirketinden yaptırma hakkınız vardır — bankanın anlaşmalı şirketiyle sınırlı değilsiniz." },
      { q: "Vefat teminatı tutarı nasıl seçilmeli?", a: "Yaygın yaklaşım, yıllık gelirinizin 5-10 katı veya geride kalanların borçlar + birkaç yıllık yaşam giderini karşılayacak tutardır. Kredi bağlantılı poliçelerde teminat en az kalan borç kadar olmalıdır." },
    ],
  },
  "kasko-tahmin": {
    faqs: [
      { q: "Kasko primi neye göre hesaplanır?", a: "Aracın kasko değeri (TSB değer listesi), sürücünün yaşı ve hasarsızlık kademesi, aracın yaşı, il ve teminat kapsamına göre belirlenir. Prim kabaca araç değerinin %2-6'sı aralığında oluşur." },
      { q: "Kasko ile trafik sigortası farkı nedir?", a: "Trafik sigortası zorunludur ve yalnızca karşı tarafa verdiğiniz zararı öder; kasko isteğe bağlıdır ve kendi aracınızın hasarını (çarpma, çalınma, yanma, doğal afet) karşılar." },
      { q: "Hasarsızlık indirimi nasıl işler?", a: "Hasarsız geçen her yıl prim indirimi kademeniz artar (şirketlere göre %30-65'e kadar). Hasar dosyası açtırmak kademeyi düşürür; küçük hasarları cepten karşılamak bazen uzun vadede daha ekonomiktir." },
    ],
  },
  "seyahat-sigortasi": {
    faqs: [
      { q: "Seyahat sağlık sigortası neleri kapsar?", a: "Yurt dışında ani hastalık ve kaza durumunda tedavi masrafları, ilaç, hastane yatışı ve tıbbi nakil giderlerini poliçe limitine kadar karşılar. Bagaj kaybı ve uçuş iptali gibi ek teminatlar pakete göre değişir." },
      { q: "Schengen vizesi için sigorta şartı nedir?", a: "Schengen başvurularında en az 30.000 € teminatlı, tüm Schengen bölgesinde geçerli ve seyahat süresini kapsayan sağlık sigortası zorunludur." },
      { q: "Prim neye göre değişir?", a: "Yaş, seyahat süresi, gidilen bölge ve teminat limitine göre belirlenir. 65 yaş üstünde prim belirgin artar; yıllık çok girişli poliçeler sık seyahat edenler için daha ekonomiktir." },
    ],
  },
  "trafik-basamak": {
    faqs: [
      { q: "Trafik sigortası basamak sistemi nasıl çalışır?", a: "7 basamaklı sistemde herkes 4. basamaktan başlar. Hasarsız her yıl bir basamak yükselir (en yüksek 7: yaklaşık %50 indirim); kusurlu hasarda basamak düşer ve prim yükselir (en düşük 1: %50 sürprim)." },
      { q: "Hasar yaparsam basamağım ne kadar düşer?", a: "Kusurlu her hasar ihbarı basamağınızı bir düşürür. Örneğin 7. basamaktaki sürücü bir hasarla 6'ya iner; yeniden yükselmek için bir yıl hasarsız geçirmesi gerekir." },
      { q: "Basamağım araca mı bana mı bağlı?", a: "Basamak sürücüye değil sigorta ettirene (araç sahibine) bağlıdır ve araç değişiminde korunur. Aracı satarsanız yeni aracınızda kademeniz devam eder." },
    ],
  },
};
