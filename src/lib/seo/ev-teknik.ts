import type { SeoExtra } from "./types";

/* Ev-Yaşam + Araç + Seyahat + Dönüştürücü + Geliştirici SEO içerikleri */
export const evTeknikContent: Record<string, SeoExtra> = {
  /* ------------------------------- EV-YAŞAM ------------------------------ */
  "su-faturasi": {
    faqs: [
      { q: "Su faturası nasıl hesaplanır?", a: "Tüketim (m³) × birim fiyat üzerine atık su bedeli (genellikle su bedelinin %50-60'ı), ÇTV ve KDV eklenir. Birim fiyatlar belediyeye göre değişir ve çoğu şehirde kademelidir." },
      { q: "Atık su bedeli nedir, neden alınır?", a: "Kullandığınız suyun kanalizasyonla uzaklaştırılması ve arıtılmasının karşılığıdır; tüketilen içme suyu miktarı üzerinden hesaplanır." },
      { q: "Su faturamı nasıl düşürürüm?", a: "Damlatan muslukları onarmak (günde ~30-100 L kayıp), çift kademeli rezervuar ve verimli duş başlığı kullanmak tüketimi %20-30 azaltabilir; kademeli tarifede alt dilimde kalmayı sağlar." },
    ],
    detay: [
      "Atık su bedelinin içme suyu tüketimi üzerinden hesaplanması, bahçe sulaması gibi kanalizasyona gitmeyen kullanımlar için de aynı oranda ücretlendirildiğiniz anlamına gelir — bazı belediyeler ayrı bahçe sayacı taktırana bu kısım için indirim uygular; yüksek bahçe/havuz tüketimi olan haneler bu seçeneği araştırmalıdır.",
    ],
  },
  "dogalgaz-faturasi": {
    faqs: [
      { q: "Doğalgaz faturası nasıl hesaplanır?", a: "Tüketilen m³, fatura döneminin düzeltme katsayısı ve üst ısıl değeriyle kWh'ye çevrilir (1 m³ ≈ 10,64 kWh), birim fiyatla çarpılır; üzerine KDV eklenir." },
      { q: "Faturadaki kWh dönüşümü neden yapılır?", a: "Gazın enerji içeriği basınç ve sıcaklıkla değiştiğinden EPDK, faturalamanın hacim yerine enerji (kWh) üzerinden yapılmasını zorunlu kılar — böylece herkes aldığı enerji kadar öder." },
      { q: "Kombi tüketimini ne azaltır?", a: "Oda sıcaklığını 1°C düşürmek ~%6 tasarruf sağlar; gece/dışarıda ekonomi modu, radyatör arkası yalıtım ve yıllık kombi bakımı tüketimi belirgin düşürür." },
    ],
    detay: [
      "Faturadaki 'düzeltme katsayısı' mevsime göre değişir çünkü gazın yoğunluğu sıcaklık ve basınca bağlıdır — kışın soğuk havada gaz biraz daha yoğun aktığından, aynı fiziksel hacimdeki gaz enerji olarak daha fazla kWh'ye karşılık gelebilir; bu yüzden yaz ve kış faturalarındaki m³-kWh oranı birebir aynı çıkmaz.",
    ],
  },
  "su-tarife-kademe": {
    faqs: [
      { q: "Kademeli su tarifesi nasıl çalışır?", a: "Aylık tüketim dilimlere ayrılır; her dilim kendi fiyatından ücretlendirilir. Örneğin ilk 10 m³ ucuz, sonraki dilimler kademeli pahalıdır — fazla tüketen daha yüksek birim fiyat öder." },
      { q: "Kademeyi aşmamak neden önemli?", a: "Üst dilim fiyatları alt dilimin 1,5-3 katı olabilir; ay sonunda dilim atlamak faturayı orantısız büyütür. Araç, tüketiminizin hangi dilimlere dağıldığını gösterir." },
    ],
    detay: [
      "Kademeli tarifede yalnızca aşılan kısım üst dilim fiyatından ücretlendirilir, tüketimin tamamı değil — 15 m³ tüketen ve ilk 10 m³'ün ucuz olduğu bir tarifede yalnızca son 5 m³ üst dilimden hesaplanır; bu detay bazı kullanıcıların 'dilimi aştım, tüm faturam pahalı fiyattan hesaplandı' şeklindeki yanlış korkusunu ortadan kaldırır.",
    ],
  },
  "beyaz-esya-elektrik": {
    faqs: [
      { q: "Hangi beyaz eşya ne kadar elektrik harcar?", a: "Yaklaşık aylık tüketimler: buzdolabı (A++) 15-25 kWh, çamaşır makinesi (haftada 4 yıkama) 8-12 kWh, bulaşık makinesi 10-15 kWh, fırın 8-15 kWh. Araç cihaz ve kullanım sıklığınıza göre aylık maliyeti hesaplar." },
      { q: "Enerji sınıfı farkı faturada ne eder?", a: "Yeni etiket sisteminde A sınıfı bir buzdolabı, eski C-D sınıfına göre yılda yüzlerce kWh az harcar — cihaz 10+ yıl kullanıldığından aradaki fiyat farkı genellikle kendini amorti eder." },
    ],
    detay: [
      "Buzdolabı, evdeki tek 7/24 çalışan cihaz olduğu için toplam elektrik faturasındaki payı göründüğünden büyüktür — bir çamaşır makinesi haftada birkaç saat çalışırken buzdolabı yılın 8.760 saatinin tamamında az da olsa enerji tüketir; bu yüzden buzdolabı seçiminde enerji sınıfı, diğer beyaz eşyalara göre çok daha kritik bir maliyet kalemidir.",
    ],
  },
  "boya-miktari": {
    howItWorks: [
      "Duvar alanını (m²) ve kat sayısını girin; kapı-pencere alanını düşün.",
      "Litre başına ~10-12 m² kapasite esasıyla gereken boya miktarı hesaplanır.",
    ],
    faqs: [
      { q: "1 litre boya kaç m² duvar boyar?", a: "İç cephe plastik/silikonlu boyalar tek katta litre başına ~10-12 m² kaplar. İki kat uygulamada m² başına ~0,18-0,2 litre hesaplayın; koyu renk üzerine açık boyamada kat sayısı artabilir." },
      { q: "Oda için boya miktarı nasıl hesaplanır?", a: "Duvar alanı = çevre × yükseklik − kapı/pencere alanları. 12 m²'lik standart oda (~30 m² duvar) için iki katta ~6 litre boya gerekir." },
    ],
    detay: [
      "Duvarın dokusu (sıva pürüzlülüğü) boya sarfiyatını belirgin etkiler — pürüzlü sıva veya ilk kez boyanan yeni sıva, düzgün ve önceden boyanmış bir duvara göre %20-30 daha fazla boya emer; hesaplarken üretici etiketindeki 'ideal koşul' değerine değil, kendi duvarınızın durumuna göre biraz payla hesap yapmak eksik boya kalma riskini azaltır.",
    ],
  },
  "kombi-guc": {
    faqs: [
      { q: "Kaç m² eve kaç kW kombi gerekir?", a: "Orta yalıtımlı evde m² başına ~100 W hesaplanır: 120 m² daire için ~12 kW ısıtma yükü. Yalıtımsız ve kuzey cepheli evlerde %20-30 ekleyin; kombiler tipik 20-24 kW satıldığından çoğu daireye standart kombi yeter." },
      { q: "Yüksek kW kombi daha mı iyi ısıtır?", a: "Gereğinden büyük kombi sık dur-kalk yapar, verim ve ömür düşer. Doğru boyut + dış hava sensörü/oda termostatı en verimli çözümdür." },
    ],
    detay: [
      "Sıcak su ihtiyacı (kalabalık hane, çok banyolu ev) da kombi seçiminde ısıtma yükü kadar önemlidir — yalnızca m²'ye göre hesaplanan kombi, kalabalık bir ailede aynı anda birden fazla musluk/duş kullanıldığında yetersiz kalabilir; bu araç ısıtma yükünü hesaplarken sıcak su kapasitesini ayrıca banyo/mutfak sayınıza göre değerlendirmenizi önerir.",
    ],
  },
  "konut-toplam-maliyet": {
    faqs: [
      { q: "Ev almanın gerçek maliyeti nedir?", a: "Satış fiyatına ek olarak tapu harcı (%4), kredi faizi toplamı, DASK+konut sigortası, emlakçı komisyonu, aidat ve bakım giderleri eklenmelidir. 10 yıllık toplam, etiket fiyatının çok üzerine çıkabilir — araç tüm kalemleri toplar." },
      { q: "Kira mı ev almak mı daha mantıklı?", a: "Kıyas; kira/fiyat oranı, kredi faizi ve değer artışı beklentisine bağlıdır. Yıllık kiranın satış fiyatına oranı %5'in altındaysa (amortisman 20+ yıl) kirada kalıp birikimi değerlendirmek matematiksel olarak öne geçebilir." },
    ],
    detay: [
      "Ev alırken 'kredi taksitim kiradan ucuz' karşılaştırması genellikle eksiktir çünkü aidat, emlak vergisi, bakım-onarım ve tapu harcı gibi kira ödemesinde olmayan kalemleri hesaba katmaz — 10 yıllık toplam maliyeti gördükten sonra, aylık taksit farkının göründüğünden çok daha küçük olduğunu fark etmek yaygın bir sürpriz olur.",
    ],
  },
  "led-tasarruf": {
    faqs: [
      { q: "LED ampul ne kadar tasarruf sağlar?", a: "9 W LED, 60 W akkor ile aynı ışığı verir — %85 daha az tüketim. Günde 5 saat yanan 10 ampullük ev, LED'e geçişle yılda yüzlerce kWh tasarruf eder; ampuller birkaç ayda kendini öder." },
      { q: "LED ampul seçerken neye bakılır?", a: "Watt yerine lümene bakın (~800 lm ≈ eski 60 W). Renk sıcaklığı: 2700K sıcak sarı (salon), 4000K doğal (mutfak-banyo), 6500K beyaz (çalışma) — kaliteli LED'ler 15.000+ saat ömürlüdür." },
    ],
    detay: [
      "Ucuz LED ampullerin bir kısmı ilan edilen lümen değerini gerçekte vermez veya birkaç ay içinde ışık gücü belirgin düşer — markalı ve TSE onaylı ürünler biraz daha pahalı olsa da hem gerçek tasarrufu hem de ilan edilen 15.000+ saatlik ömrü sağlama ihtimali çok daha yüksektir; çok ucuz LED'lerde 'ucuz iki kez alınır' kuralı sıkça geçerli olur.",
    ],
  },
  "taks-kaks-emsal": {
    faqs: [
      { q: "TAKS ve KAKS (emsal) nedir?", a: "TAKS, binanın oturum alanının arsaya oranıdır (taban alanı katsayısı); KAKS/emsal, toplam inşaat alanının arsaya oranıdır. 1.000 m² arsada TAKS 0,3 / KAKS 1,2 ise taban 300 m², toplam inşaat 1.200 m² olabilir." },
      { q: "Emsal alanına neler dahil değildir?", a: "Yönetmeliğe göre sığınak, otopark, teknik hacimler ve belirli ortak alanlar emsale dahil edilmez — bu yüzden fiili inşaat alanı emsal hesabından büyük olabilir. Kesin kurallar imar planı notlarında yer alır." },
    ],
    detay: [
      "Emsal hakkının tamamı zorunlu olarak kullanılmak zorunda değildir ama kullanılmayan kısım genellikle telafi edilemez — bir arsa sahibi TAKS/KAKS haklarının altında bir bina yaptırırsa, kalan hakkı ilerideki bir ek yapıyla kullanabilir ancak bu, imar planındaki güncel yönetmeliğe ve parselin fiziksel elverişliliğine bağlıdır.",
    ],
  },
  "bahce-su-ihtiyaci": {
    faqs: [
      { q: "Bahçe/çim sulamada ne kadar su gerekir?", a: "Çim yazın haftada ~25-40 mm (m² başına 25-40 L) su ister; damla sulamalı sebze bahçesi daha azıyla yetinir. Araç alan ve bitki türüne göre haftalık litreyi hesaplar." },
      { q: "Sulama ne zaman yapılmalı?", a: "Sabah erken saatler idealdir — buharlaşma az, mantar riski düşüktür. Az ve sık yerine derin ve seyrek sulama kök gelişimini güçlendirir." },
    ],
    detay: [
      "Sık ama az miktarda sulamak, kökleri toprağın üst yüzeyinde kalmaya alıştırır ve bitkiyi kuraklığa karşı daha kırılgan yapar — derin ve seyrek sulama ise kökleri daha aşağıya inmeye teşvik eder, bu da hem su verimliliğini artırır hem de sıcak günlerde bitkinin daha dayanıklı olmasını sağlar.",
    ],
  },
  "damacana-suresi": {
    faqs: [
      { q: "19 litrelik damacana kaç gün yeter?", a: "Kişi başı içme suyu ~1,5-2 L/gün hesabıyla: 2 kişilik evde ~5-6 gün, 4 kişide ~2,5-3 gün. Çay-kahve ve yemek kullanımı süreyi kısaltır — araç hane profilinize göre hesaplar." },
      { q: "Damacana mı arıtma mı ekonomik?", a: "Yüksek tüketimli hanelerde arıtma cihazı 1-2 yılda damacana maliyetinin altına iner; az tüketen 1-2 kişilik evlerde damacana pratik kalabilir. Filtre değişim maliyetini hesaba katın." },
    ],
    detay: [
      "Arıtma cihazı karşılaştırmasında sıklıkla unutulan kalem filtre değişim maliyetidir — cihazın kendisi ucuz olsa bile yılda birkaç kez değişmesi gereken filtreler toplam maliyeti belirgin artırabilir; gerçek maliyet karşılaştırması yapmadan yalnızca cihaz fiyatına bakmak yanıltıcı bir karara yol açabilir.",
    ],
  },
  "hali-m2": {
    faqs: [
      { q: "Odama kaç m² halı gerekir?", a: "Yaygın yaklaşım, mobilya düzenine göre oda alanının %60-80'ini kaplayan halıdır: 20 m² salona 12-16 m² (ör. 3×4 veya 3,5×4,5) uygun düşer. Araç oda ölçünüzden standart halı boyutlarını önerir." },
      { q: "Halı boyutu nasıl seçilir?", a: "Oturma grubunda ön ayaklar halının üzerine gelmeli; yemek masasında sandalye geriye çekildiğinde halıda kalmalıdır (masa + her yönden ~60-75 cm)." },
    ],
    detay: [
      "Halının çok küçük seçilmesi, mobilyaların 'havada asılı' durduğu bir görsel etki yaratır ve odayı olduğundan küçük gösterir — deneyimli iç mimarların genel kuralı, hata payı varsa her zaman bir beden büyük halı seçmektir; küçük halı görsel olarak odayı bölerken büyük halı mekânı bütünleştirir.",
    ],
  },
  "isitma-kiyas": {
    faqs: [
      { q: "Elektrikli ısıtıcı mı doğalgaz mı ucuz?", a: "Birim enerji maliyeti karşılaştırılır: doğalgaz kWh başına elektrikten belirgin ucuzdur (tipik olarak 1/3-1/4 oranında). Tek odayı kısa süre ısıtmakta elektrik pratik olsa da sürekli ısıtmada doğalgaz açık ara ekonomiktir." },
      { q: "Klima ile ısıtma nasıl konumlanır?", a: "İklimlendirme cihazları (ısı pompaları) 1 kWh elektrikle 3-4 kWh ısı üretebildiğinden (COP 3-4), ılıman bölgelerde doğalgazla rekabet edebilir; çok soğuk havalarda verim düşer." },
    ],
    detay: [
      "Elektrikli ısıtıcının '%100 verimli' olması yanıltıcı bir pazarlama noktasıdır — evet, harcanan her kWh elektriğin tamamı ısıya dönüşür, ama ısı pompası aynı 1 kWh ile havadan/topraktan ek enerji çekerek 3-4 kWh ısı üretebilir; bu yüzden '%100 verim' aslında '%300-400 verimli' bir alternatife göre düşük kalabilir.",
    ],
  },
  "kira-gelir-orani": {
    faqs: [
      { q: "Kiraya gelirin ne kadarı ayrılmalı?", a: "Yaygın finansal kural, kiranın net hane gelirinin %30'unu aşmamasıdır; %40 üzeri bütçeyi ciddi zorlar. Araç oranınızı hesaplayıp sağlıklı aralıkla karşılaştırır." },
      { q: "Oran yüksekse ne yapılabilir?", a: "Daha uygun bölge/metrekare, ev arkadaşlığı veya gelir artırma seçenekleri değerlendirilebilir; uzun vadede oranı düşürmek birikim kapasitesini doğrudan artırır." },
    ],
    detay: [
      "%30 kuralı evrensel bir fizik yasası değil, 1980'lerde ABD'de konut yardımı programları için belirlenmiş idari bir eşiktir — yüksek maliyetli şehirlerde yaşayan birçok kişi bu oranın üzerinde yaşamak zorunda kalır; kural mutlak bir sınır değil, bütçenizin ne kadar gerginleştiğini anlamak için kullanışlı bir referans noktası olarak görülmelidir.",
    ],
  },

  /* --------------------------------- ARAÇ -------------------------------- */
  "mtv-hesaplama": {
    faqs: [
      { q: "MTV neye göre hesaplanır?", a: "Otomobillerde motor silindir hacmi, araç yaşı ve 2018 sonrası kayıtlarda araç değeri esas alınır; tutarlar Gelir İdaresi'nin yıllık cetvelinde ilan edilir ve her yıl yeniden değerleme oranında artar." },
      { q: "MTV ne zaman ödenir?", a: "Yılda iki eşit taksitte: Ocak ve Temmuz aylarında. GİB internet vergi dairesi, bankalar veya e-Devlet üzerinden ödenebilir." },
      { q: "Elektrikli araçlarda MTV nasıl?", a: "Elektrikli otomobillerde MTV, motor gücü (kW) esasına göre ve eşdeğer benzinli araçlara kıyasla oldukça düşük tarifeden alınır." },
    ],
    detay: [
      "2018 öncesi ve sonrası tescilli araçlarda farklı MTV hesaplama mantığı uygulanır — 2018 öncesi yalnızca motor hacmi ve yaşa göre sabit tarife tablosu kullanılırken, 2018 sonrası tescillerde araç değeri de devreye girer; bu yüzden aynı yıl ve modeldeki iki araç, tescil tarihine göre farklı MTV ödeyebilir.",
    ],
  },
  "kasko-deger-kaybi": {
    faqs: [
      { q: "Araç yılda ne kadar değer kaybeder?", a: "İlk yıl %15-20, sonraki yıllarda %8-12 civarı kayıp tipiktir; marka güvenilirliği ve piyasa koşullarına göre değişir. Araç, yıllık oran varsayımıyla gelecek değeri hesaplar: Değer = Sıfır × (1−oran)ⁿ." },
      { q: "Kazadan sonra değer kaybı tazminatı alınır mı?", a: "Kusursuz taraf, aracın kaza nedeniyle ikinci el değerindeki düşüşü karşı tarafın trafik sigortasından talep edebilir. Tutar; hasar boyutu, araç yaşı ve km'ye göre eksper raporuyla belirlenir." },
    ],
    detay: [
      "Değer kaybı hesabı doğrusal değildir — ilk yılın yüksek kaybı (%15-20), aracın 'sıfır kilometre' primini kaybetmesinden kaynaklanır; sonraki yıllarda kayıp oranı yavaşlar ve belirli bir yaştan sonra (genellikle 8-10 yıl) neredeyse düzleşir, bu yüzden çok eski bir aracın değeri yıllar geçse de büyük ölçüde sabit kalabilir.",
    ],
  },
  "km-basi-yakit": {
    faqs: [
      { q: "Km başına yakıt maliyeti nasıl hesaplanır?", a: "(Tüketim L/100km × litre fiyatı) / 100. Örneğin 7 L/100km tüketen araç, litre 50 ₺ iken km başına 3,5 ₺ yakar; 100 km yol ~350 ₺'dir." },
      { q: "Gerçek tüketimimi nasıl ölçerim?", a: "Depoyu fulleyin, sayaç sıfırlayın; bir sonraki full'de alınan litreyi yapılan km'ye bölüp 100 ile çarpın. Katalog değeri gerçek kullanımda genellikle %10-20 aşılır." },
    ],
    detay: [
      "Bu ölçümü tek seferde değil birkaç dolum üst üste yapmak daha güvenilir sonuç verir çünkü tek bir dolum, o dönemki özel koşullardan (şehir içi yoğun trafik, otoyol seyahati vb.) etkilenmiş olabilir; birkaç ölçümün ortalaması, aracınızın gerçek karma tüketimini katalog değerinden çok daha isabetli yansıtır.",
    ],
  },
  "lpg-donusum": {
    faqs: [
      { q: "LPG dönüşümü ne kadar sürede amorti eder?", a: "Dönüşüm maliyeti / km başına tasarrufa bölünür. LPG litre fiyatı benzinin yaklaşık yarısı, tüketimi ~%15-20 fazladır; yılda 15-20 bin km yapan araçta dönüşüm tipik olarak 1-2 yılda kendini öder." },
      { q: "LPG'nin dezavantajları nelerdir?", a: "Bagaj hacmi kaybı, ~%5-10 güç düşüşü, periyodik sızdırmazlık kontrolü ve bazı otoparklara giriş kısıtı başlıca noktalardır. Montajın yetkili firmada yapılması ve ruhsata işlenmesi zorunludur." },
    ],
    detay: [
      "Amorti hesabında sıklıkla atlanan bir kalem, LPG sisteminin periyodik muayene ve bakım maliyetidir — tüp test süresi ve enjeksiyon sistemi bakımları yıllık birkaç yüz liralık ek gider oluşturur; gerçek amorti süresini hesaplarken yalnızca yakıt tasarrufuna değil, bu bakım maliyetlerine de bakmak gerekir.",
    ],
  },
  "trafik-cezasi-indirim": {
    faqs: [
      { q: "Trafik cezasında peşin ödeme indirimi nedir?", a: "Tebliğden itibaren 15 gün içinde ödenen cezalarda %25 indirim uygulanır. 1.000 ₺'lik ceza 750 ₺ ödenir — araç indirimli tutarı ve son ödeme gününü hesaplar." },
      { q: "15 gün geçerse ne olur?", a: "İndirim hakkı düşer ve ceza tam tahsil edilir; ödenmezse aylık gecikme zammı işler. Cezaya itiraz süresi de tebliğden itibaren 15 gündür — itiraz, ödeme indirimini etkilemez." },
    ],
    detay: [
      "İtiraz etmek istiyorsanız bile peşin indirimli ödemeyi kaybetmemek için ayrı bir strateji izlenebilir — bazı sürücüler cezayı indirimli ödeyip sonrasında haksız olduğunu düşündüğü noktada idari yargıya başvurmayı tercih eder, ancak bu iki sürecin (ödeme ve itiraz) birbirinden bağımsız işlediğini ve ödemenin itiraz hakkından vazgeçme anlamına gelmediğini bilmek önemlidir.",
    ],
  },
  "yakit-tasarruf": {
    faqs: [
      { q: "İki aracın yakıt maliyeti nasıl karşılaştırılır?", a: "Yıllık km × tüketim farkı × yakıt fiyatı formülüyle: yılda 20.000 km'de 2 L/100km fark, litre 50 ₺ iken yılda 20.000 ₺ eder. Araç, hibrit/dizel farkının kaç yılda amorti ettiğini gösterir." },
      { q: "Sürüş tarzı tüketimi ne kadar etkiler?", a: "Ani hızlanma-fren, yüksek hız ve gereksiz yük tüketimi %20-30 artırabilir. Sabit seyir, doğru lastik basıncı ve zamanında bakım en etkili tasarruf yollarıdır." },
    ],
    detay: [
      "Hava direnci hızın karesiyle orantılı arttığından, otoyolda 120 yerine 100 km/s'de gitmek yakıt tüketimini sezgisel olarak beklenenden çok daha fazla düşürür — hız %17 azalırken, direnci yenmek için harcanan enerji yaklaşık %31 azalabilir; bu, uzun yolda hız limiti içinde kalmanın hem güvenlik hem yakıt açısından neden bu kadar etkili olduğunu açıklar.",
    ],
  },

  /* ------------------------------- SEYAHAT ------------------------------- */
  "elektrikli-arac-menzil": {
    faqs: [
      { q: "Elektrikli aracın menzili nasıl hesaplanır?", a: "Menzil = kullanılabilir batarya (kWh) × şarj yüzdesi / tüketim (kWh/100km) × 100. 60 kWh batarya, %80 şarj ve 18 kWh/100km tüketimle ~267 km yol yapılır." },
      { q: "Kışın menzil neden düşer?", a: "Soğukta batarya kimyası yavaşlar ve kabin ısıtması ek enerji harcar — menzil %20-35 düşebilir. Ön ısıtma (araç prizdeyken) ve ısı pompalı modeller kaybı azaltır." },
    ],
    detay: [
      "Benzinli bir araçta motor kendi atık ısısıyla kabini ücretsiz ısıtırken, elektrikli araçta ısıtma doğrudan bataryadan enerji çeker — bu, elektrikli araçların kışın neden benzinliye göre orantısız daha fazla menzil kaybettiğini açıklayan temel fiziksel farktır; koltuk ısıtıcısı kullanmak (kabin havasını ısıtmaktan çok daha az enerji harcar) bu kaybı kısmen telafi edebilir.",
    ],
  },
  "elektrikli-arac-sarj": {
    faqs: [
      { q: "Elektrikli araç şarjı ne kadara mal olur?", a: "Maliyet = çekilen enerji (kWh) × birim fiyat. 60 kWh bataryayı %20'den %80'e evde şarj etmek ~36-40 kWh çeker; ev tarifesiyle DC hızlı şarj istasyonunun üçte biri ile yarısı maliyete gelir." },
      { q: "Evde şarj mı istasyonda mı ucuz?", a: "Evde gece tarifesiyle şarj açık ara en ekonomiktir; DC hızlı şarj istasyonları hız karşılığında kWh başına 2-4 kat fiyat uygular. Günlük kullanımda ev şarjı + yolculukta hızlı şarj tipik dengedir." },
      { q: "Şarj süresi nasıl hesaplanır?", a: "Süre ≈ çekilecek enerji / şarj gücü: 40 kWh'lik dolum 7,4 kW ev kutusunda ~5,5 saat, 100 kW DC istasyonda ~25-30 dakika sürer (batarya %80 sonrası yavaşlar)." },
    ],
    detay: [
      "'%80 sonrası yavaşlar' kuralı bataryayı korumak için kasıtlı bir mühendislik kararıdır — batarya yönetim sistemi, hücrelerin zarar görmemesi için son %20'lik dolumu kademeli yavaşlatır; bu yüzden uzun yolda %10'dan %80'e şarj etmek genellikle %80'den %100'e tamamlamaktan çok daha hızlıdır, deneyimli elektrikli araç sürücüleri molalarda genellikle %80'de şarjı keser.",
    ],
  },
  "otopark-ucret": {
    faqs: [
      { q: "Otopark ücreti nasıl hesaplanır?", a: "Genellikle ilk saat(ler) sabit, sonrası saat başı tarifedir; günlük tavan uygulanır. Araç, giriş-çıkış saatinize ve tarifeye göre toplam ücreti hesaplar." },
      { q: "Aylık abonelik ne zaman avantajlı?", a: "Aylık ücret / günlük ücret oranına bakın: ayda ~15 günden fazla park ediyorsanız abonelik çoğu otoparkta öne geçer." },
    ],
    detay: [
      "Saatlik tarifelerde ilk 1-2 saatin sabit ücretli olması, kısa süreli park (alışveriş, randevu) için otoparkın maliyetini orantısız yüksek gösterebilir — 20 dakikalık bir ziyaret için bile tam ilk saat ücreti ödenir; bu yüzden çok kısa süreli işler için otopark yerine yol kenarı ücretli park alanlarını kontrol etmek daha ekonomik olabilir.",
    ],
  },
  "taksi-ucreti": {
    faqs: [
      { q: "Taksi ücreti nasıl hesaplanır?", a: "Açılış (indi-bindi) + km başına ücret + bekleme/trafik süresi ücreti toplanır. Tarifeler il il farklıdır ve belediyelerce güncellenir; araç güncel İstanbul/Ankara/İzmir tarifeleriyle tahmin verir." },
      { q: "Gece tarifesi hâlâ var mı?", a: "İstanbul'da gece-gündüz tarifesi birleştirilmiştir; bazı illerde 24:00-06:00 arası ~%50 zamlı gece tarifesi uygulanmaya devam eder. Yola çıkmadan aracın hesapladığı aralığı referans alın." },
    ],
    detay: [
      "Taksimetrede bekleme/trafik ücreti genellikle km başına değil dakika başına işler — yoğun trafikte duran bir taksi hem km ücretini durdurur hem de zaman ücretini işletmeye devam eder; bu yüzden aynı mesafe için trafiksiz bir saatte yapılan yolculuk, yoğun saatteki aynı güzergâhtan belirgin ucuza gelebilir.",
    ],
  },
  "ulasim-kart-vs-bilet": {
    faqs: [
      { q: "Aylık abonman kart ne zaman avantajlı?", a: "Başabaş noktası = abonman ücreti / tek biniş ücreti. Aylık kart 40 biniş fiyatındaysa ve ayda 40'tan fazla biniyorsanız (günde 2 biniş × 20+ iş günü) kart kazandırır." },
      { q: "Aktarma ücretlendirmesi hesaba katılmalı mı?", a: "Evet — indirimli aktarma, tek biniş maliyetinizi düşürerek başabaş noktasını yukarı çeker. Araç, aktarma oranınızı da hesaba katarak gerçek kıyas yapar." },
    ],
    detay: [
      "Abonman kart hesaplarken yalnızca işe gidiş-dönüşü değil, hafta sonu ve akşam sosyal aktiviteler için yapılan ek binişleri de dahil etmek gerekir — çoğu kişi yalnızca hafta içi mesai binişlerini sayıp abonmanın kendisine yetmeyeceğini düşünür, oysa toplam aylık biniş sayısı genellikle sanılandan yüksektir.",
    ],
  },

  /* ----------------------------- DÖNÜŞTÜRÜCÜ ----------------------------- */
  "uzunluk-cevirici": {
    faqs: [
      { q: "1 inç, 1 feet, 1 mil kaç cm/m/km'dir?", a: "1 inç = 2,54 cm; 1 feet = 30,48 cm; 1 yard = 0,9144 m; 1 mil = 1,609 km; 1 deniz mili = 1,852 km. Araç tüm birimler arasında anında çevirir." },
      { q: "TV ekranı inç olarak neyi ölçer?", a: "Ekranın köşegen uzunluğunu: 55 inç TV'nin köşegeni 139,7 cm'dir; 16:9 oranda bu ~121×68 cm panele karşılık gelir." },
    ],
    detay: [
      "İnç sisteminin bu kadar direngen olmasının nedeni endüstri standardı olmasıdır — özellikle ABD kaynaklı elektronik, tekstil ve inşaat sektörlerinde küresel üretim zinciri inç üzerine kurulu olduğundan, dünyanın geri kalanı metrik sistemi kullansa bile TV ekranı, vida dişi ve boru çapı gibi belirli ürün kategorilerinde inç fiilen evrensel ölçü birimi olmaya devam eder.",
    ],
  },
  "agirlik-cevirici": {
    faqs: [
      { q: "1 libre (lb) ve 1 ons (oz) kaç gramdır?", a: "1 lb = 453,59 g; 1 oz = 28,35 g; 1 stone = 6,35 kg. ABD tariflerindeki ağırlıkları mutfak ölçülerine çevirmede en çok bu üçü kullanılır." },
      { q: "Kilogram ile Newton karıştırılır mı?", a: "Kg kütle, Newton kuvvet birimidir: 1 kg kütlenin yeryüzündeki ağırlığı ~9,81 N'dur. Günlük dil 'ağırlık' dese de tartılar kütleyi gösterir." },
    ],
    detay: [
      "Bu ayrım Ay'a gidildiğinde somutlaşır — 70 kg kütleye sahip bir astronotun kütlesi Ay'da da 70 kg'dır (madde miktarı değişmez), ama tartıdaki 'ağırlığı' yalnızca ~11,5 kg'a karşılık gelen bir kuvvet gösterir çünkü Ay'ın yerçekimi Dünya'nın yaklaşık altıda biridir; günlük hayatta kg'ı hem kütle hem ağırlık için kullanmamız bu farkı gizler.",
    ],
  },
  "sicaklik-cevirici": {
    faqs: [
      { q: "Fahrenheit'tan Celsius'a nasıl çevrilir?", a: "°C = (°F − 32) × 5/9. Pratik referanslar: 32°F = 0°C, 100°F ≈ 37,8°C (vücut ateşi sınırı), 212°F = 100°C. Kelvin için K = °C + 273,15." },
      { q: "−40 derecede ne özel?", a: "Fahrenheit ve Celsius ölçeklerinin kesiştiği tek nokta −40'tır: −40°C = −40°F." },
    ],
    detay: [
      "Bu kesişim noktasının varlığı, iki doğrusal denklemin (°C→°F ve °F→°C) matematiksel olarak zorunlu bir sonucudur — birbirinin tersi olan iki doğrusal fonksiyon, eğimleri 1'den farklı olduğu sürece mutlaka bir noktada eşitlenir; −40 sadece bu iki ölçeğin rastgele değil, denklemin yapısından kaynaklanan kesişim noktasıdır.",
    ],
  },
  "alan-cevirici": {
    faqs: [
      { q: "1 dönüm, 1 hektar kaç m²'dir?", a: "1 dönüm = 1.000 m²; 1 hektar = 10.000 m² = 10 dönüm; 1 acre ≈ 4.047 m² ≈ 4 dönüm. Tapu ve tarım arazisi işlemlerinin standart dönüşümleridir." },
      { q: "Metrekare fiyatından dönüm fiyatı nasıl bulunur?", a: "m² fiyatı × 1.000. Araç ters yönde de (dönüm fiyatından m²'ye) otomatik hesaplar." },
    ],
    detay: [
      "Tarım arazisi ilanlarında bazen 'dönüm', bazen 'evlek' veya bölgesel yerel birimler kullanılır ve bu birimler Türkiye'nin farklı bölgelerinde farklı m² değerlerine karşılık gelebilir — arsa/arazi alım satımında ilan edilen birimin standart 1.000 m²'lik dönüm mü yoksa yerel bir varyant mı olduğunu tapu kaydından teyit etmek, yanlış anlaşılmayı önler.",
    ],
  },
  "hacim-cevirici": {
    faqs: [
      { q: "1 galon, 1 litre, 1 m³ ilişkisi nedir?", a: "1 m³ = 1.000 L; 1 ABD galonu = 3,785 L; 1 İngiliz galonu = 4,546 L; 1 bardak (cup) ≈ 236 ml. Araç mutfak ölçülerinden endüstriyel birimlere tüm dönüşümleri yapar." },
      { q: "ml ile cc aynı mı?", a: "Evet — 1 ml = 1 cm³ (cc). Motor hacimlerinde cc, sıvı ölçülerinde ml kullanılır ama değerler birebir aynıdır." },
    ],
    detay: [
      "Bu birebir eşitlik tesadüf değildir — litre, tam olarak 10×10×10 cm'lik bir küpün hacmi (1.000 cm³) olarak tanımlandığından, ml (litrenin binde biri) ile cm³ matematiksel olarak zorunlu şekilde aynı büyüklüğü ifade eder; metrik sistemin iç tutarlılığının güzel bir örneğidir.",
    ],
  },
  "hiz-cevirici": {
    faqs: [
      { q: "1 knot (deniz mili/saat) kaç km/s'dir?", a: "1 knot = 1,852 km/s. Havacılık ve denizcilikte hız knot ile ifade edilir; 500 knot uçak hızı ~926 km/s'dir. m/s'ye çevirmek için km/s ÷ 3,6." },
      { q: "mph'yi km/s'ye nasıl çeviririm?", a: "1 mph = 1,609 km/s. ABD'de 70 mph hız limiti ~113 km/s'ye karşılık gelir." },
    ],
    detay: [
      "Kiralık araç veya ithal aracın gösterge panelinde hem mph hem km/s bulunması, bu iki sistemin küresel ölçekte hâlâ paralel yaşadığının somut kanıtıdır — ABD, İngiltere ve birkaç ülke dışında dünyanın geri kalanı km/s kullandığından, uluslararası sürüş yapan biri için bu dönüşümü hızlıca yapabilmek pratik bir güvenlik konusudur.",
    ],
  },
  "veri-cevirici": {
    faqs: [
      { q: "1 GB kaç MB'dir — 1000 mi 1024 mü?", a: "İki standart vardır: SI'da 1 GB = 1000 MB, ikili sistemde 1 GiB = 1024 MiB. Disk üreticileri 1000'i, işletim sistemleri çoğunlukla 1024'ü kullanır — 1 TB diskin ~931 GiB görünmesinin sebebi budur." },
      { q: "Mbps ile MB/s farkı nedir?", a: "Mbps megabit/saniye, MB/s megabayt/saniyedir; 1 bayt = 8 bit olduğundan 100 Mbps internet en fazla 12,5 MB/s indirir." },
    ],
    detay: [
      "İnternet servis sağlayıcılarının hızı Mbps (megabit) cinsinden pazarlaması, tarayıcının indirme hızını MB (megabayt) cinsinden göstermesiyle birleşince yaygın bir kafa karışıklığı yaratır — '100 Mbps aldım ama indirme hızım 12,5'te takılı kalıyor' şikâyetlerinin çoğunun sebebi arıza değil, bu birim farkının fark edilmemesidir.",
    ],
  },
  "zaman-cevirici": {
    faqs: [
      { q: "1 yıl kaç saniyedir?", a: "365 gün = 31.536.000 saniye; artık yılda 31.622.400. Bir milyon saniye ~11,6 gün, bir milyar saniye ~31,7 yıldır — ölçek farkını kavramanın klasik örneğidir." },
      { q: "İş saati hesaplarında hangi değerler kullanılır?", a: "Türkiye'de tam zamanlı çalışma haftada 45 saattir; aylık ~195, yıllık ~2.340 saate karşılık gelir. Saatlik ücret hesaplarında ay 225 saat kabul edilir (İş Kanunu pratiği)." },
    ],
    detay: [
      "225 saatlik bölen, gerçek çalışma saatinden (195 civarı) yüksektir çünkü hafta tatili ve genel tatil günlerinin ücretli olması da bu sabit bölene dahil edilmiştir — yani 225, 'fiilen çalışılan saat' değil, 'aylık ücretin karşılığı sayılan toplam gün×saat' esasına dayanan idari bir kabuldür.",
    ],
  },
  "sicaklik-hizli": {
    faqs: [
      { q: "Réaumur ve Rankine ölçekleri nedir?", a: "Réaumur (°Ré) suyun donma-kaynama aralığını 80'e böler (°Ré = °C × 0,8); Rankine (°R) Fahrenheit tabanlı mutlak ölçektir (°R = °F + 459,67). Tarihî metinler ve bazı mühendislik alanlarında karşılaşılır." },
    ],
    detay: [
      "Rankine, Kelvin'in Fahrenheit versiyonu gibi düşünülebilir — ikisi de 'mutlak sıfırı' (moleküler hareketin durduğu teorik nokta) sıfır kabul eder, ama Kelvin derece aralığını Celsius'tan, Rankine ise Fahrenheit'tan alır; bu yüzden ABD kaynaklı termodinamik mühendislik hesaplarında Kelvin yerine hâlâ Rankine görülebilir.",
    ],
  },
  "hacim-birim-hizli": {
    faqs: [
      { q: "Bir yemek kaşığı / çay kaşığı kaç ml?", a: "Standart: 1 yemek kaşığı = 15 ml, 1 tatlı kaşığı = 10 ml, 1 çay kaşığı = 5 ml, 1 su bardağı ≈ 200-240 ml. Tariflerdeki ölçüleri ml'ye çevirmenin pratik yolu budur." },
    ],
    detay: [
      "Evdeki gerçek kaşıklar bu standart ölçülerden belirgin sapabilir — bazı 'yemek kaşığı' modelleri 12 ml, bazıları 18 ml alabilir; hassasiyetin önemli olduğu tariflerde (kek, pasta gibi kimyasal reaksiyona dayalı tarifler) standart ölçü kaşığı kullanmak, evdeki rastgele kaşıkla ölçmekten çok daha tutarlı sonuç verir.",
    ],
  },
  "kilo-birim-hizli": {
    faqs: [
      { q: "Kilomu libre (lbs) olarak nasıl söylerim?", a: "kg × 2,2046 = lbs: 70 kg ≈ 154 lbs. Stone için kg ÷ 6,35: 70 kg = 11 stone. Spor salonu plakaları ve yurt dışı formlar için en sık dönüşümlerdir." },
    ],
    detay: [
      "İngiltere'de kişisel kiloyu ifade ederken hâlâ yaygın olarak stone kullanılır ve bu, tek başına libreden farklı olarak 14 librelik bloklar halinde sayılır — '11 stone 3 pound' gibi bir ifadeyi doğrudan kilogramla kıyaslamak için önce stone kısmını libreye çevirip toplamak gerekir, bu çift katmanlı sistem yalnızca kg'a alışkın biri için kafa karıştırıcı olabilir.",
    ],
  },

  /* ----------------------------- GELİŞTİRİCİ ----------------------------- */
  "sifre-uretici": {
    faqs: [
      { q: "Güçlü şifre nasıl olmalı?", a: "En az 12-16 karakter; büyük-küçük harf, rakam ve sembol karışımı; sözlük kelimesi ve kişisel bilgi içermemeli. Her hesap için farklı şifre kullanmak en kritik kuraldır." },
      { q: "Bu araçla üretilen şifreler güvenli mi?", a: "Şifreler tarayıcınızın kriptografik rastgelelik kaynağıyla (crypto.getRandomValues) cihazınızda üretilir — sunucuya gönderilmez, kaydedilmez." },
      { q: "16 karakterlik şifre kırılabilir mi?", a: "4 karakter sınıfını içeren 16 karakterlik rastgele şifrenin kombinasyon uzayı ~10³¹'dir; kaba kuvvetle kırılması güncel donanımla pratik olarak imkânsızdır. Zayıf halka genellikle şifre değil, sızdırılmış veri tabanları ve şifre tekrarıdır." },
    ],
    detay: [
      "Şifre uzunluğunun karmaşıklıktan (sembol çeşitliliğinden) daha etkili olduğu güncel güvenlik araştırmalarının ortak bulgusudur — 12 karakterlik yalnızca küçük harften oluşan bir şifre bile, kombinasyon uzayı büyüklüğü açısından 8 karakterlik karmaşık bir şifreden (büyük-küçük harf, rakam, sembol karışık) daha güvenli olabilir; bu yüzden hatırlanması kolay uzun cümle-şifreler (passphrase) modern güvenlik tavsiyelerinde öne çıkar.",
    ],
  },
  "hash-uretici": {
    faqs: [
      { q: "Hash nedir, ne işe yarar?", a: "Veriyi sabit uzunlukta parmak izine dönüştüren tek yönlü fonksiyondur: aynı girdi hep aynı çıktıyı verir, çıktıdan girdi elde edilemez. Dosya bütünlüğü doğrulama ve parola saklamada kullanılır." },
      { q: "SHA-256 ile MD5 farkı nedir?", a: "MD5 ve SHA-1 çakışma saldırılarına karşı kırılmıştır ve güvenlik amaçlı kullanılmamalıdır; SHA-256 ve üzeri güncel standarttır. Bu araç Web Crypto API'nin desteklediği SHA ailesini kullanır." },
      { q: "Parolalar hash'lenerek mi saklanır?", a: "Evet ama düz SHA yerine bcrypt/argon2 gibi yavaşlatılmış ve tuzlanmış (salt) algoritmalarla — böylece sızıntı halinde toplu kırma zorlaşır." },
    ],
    detay: [
      "SHA-256 gibi hızlı hash fonksiyonlarının parola saklama için uygun olmamasının sebebi tam da hızlı olmalarıdır — bir saldırgan saniyede milyarlarca SHA-256 hash'i deneyebilirken, bcrypt kasıtlı olarak yavaş çalışacak şekilde tasarlanmıştır ve bu yavaşlık, kaba kuvvet saldırılarını pratikte imkânsız hale getiren asıl güvenlik katmanıdır.",
    ],
  },
  "renk-cevirici": {
    faqs: [
      { q: "HEX, RGB ve HSL arasındaki fark nedir?", a: "Aynı rengin farklı gösterimleridir: HEX (#1a7f6e) kompakt web formatı, RGB (26,127,110) kanal değerleri, HSL (ton, doygunluk, açıklık) insan sezgisine en yakın modeldir. Araç üçü arasında anlık çevirir." },
      { q: "HSL neden tasarımda kullanışlıdır?", a: "Aynı tonun açık/koyu varyantlarını üretmek için yalnızca L (lightness) değerini değiştirmek yeterlidir — tutarlı renk paletleri kurmayı kolaylaştırır." },
    ],
    detay: [
      "RGB'de bir rengi biraz daha koyu yapmak istediğinizde üç kanalı da (R, G, B) orantılı azaltmanız gerekir ve bu genellikle deneme-yanılma gerektirir — HSL'de ise yalnızca tek bir sayıyı (L) değiştirmek yeterlidir, bu yüzden tasarım sistemlerinde 'ana renk + 5 ton açık/koyu varyant' üretmek RGB yerine HSL üzerinden matematiksel olarak çok daha basittir.",
    ],
  },
  "karakter-sayaci": {
    faqs: [
      { q: "Sosyal medya karakter limitleri nelerdir?", a: "X/Twitter 280, Instagram açıklama 2.200, SEO meta başlık ~60, meta açıklama ~155-160 karakterdir. Araç; karakter, kelime, cümle ve boşluksuz karakter sayısını canlı gösterir." },
      { q: "SMS kaç karakterdir?", a: "Standart SMS 160 karakterdir; Türkçe karakter (ğ, ş, ı vb.) kullanılırsa kodlama değişir ve sınır 70'e düşer — uzun mesajlar bölünerek ücretlendirilir." },
    ],
    detay: [
      "160 karakter sınırının bu kadar spesifik olmasının teknik bir sebebi vardır — eski GSM sinyalleşme kanalının taşıyabildiği veri paketi boyutuyla sınırlıydı; standart 7-bit GSM alfabesiyle 160 karakter sığarken, Türkçe karakterler 16-bit Unicode kodlaması gerektirdiğinden aynı paket boyutuna yalnızca 70 karakter sığar — bu, teknolojinin bir dile göre tasarlanıp başka dillere sonradan uyarlanmasının bıraktığı bir iz.",
    ],
  },
  "metin-okuma-suresi": {
    faqs: [
      { q: "Okuma süresi nasıl hesaplanır?", a: "Kelime sayısı / okuma hızı (dakikada kelime). Ortalama sessiz okuma ~200-250 kpm, sesli okuma/sunum ~130-150 kpm'dir. Blog yazılarındaki 'X dk okuma' etiketi bu hesaba dayanır." },
      { q: "Sunum için konuşma süresi nasıl tahmin edilir?", a: "Konuşma hızı ~130-150 kpm alınır: 1.000 kelimelik metin ~7-8 dakikalık konuşmadır. Araç hızı seçmenize izin verir." },
    ],
    detay: [
      "Konuşma süresi tahmininde sıklıkla unutulan kalem doğal duraklamalardır — slayt geçişleri, soru-cevap araları ve vurgu için yapılan kısa sessizlikler toplam süreye kelime sayısının önerdiğinden daha fazla dakika ekler; tecrübeli sunucular metinden hesaplanan süreye genellikle %15-20 pay bırakır.",
    ],
  },
  "dpi-piksel": {
    faqs: [
      { q: "DPI nedir, baskıda neden önemli?", a: "İnç başına nokta sayısıdır; kaliteli baskı için 300 DPI standarttır. 10×15 cm fotoğraf baskısı için en az 1181×1772 piksel görüntü gerekir — araç boyut-DPI-piksel üçlüsünü çevirir." },
      { q: "Ekran PPI'ı ile baskı DPI'ı aynı şey mi?", a: "Kavramsal olarak benzer (yoğunluk ölçüsü) ama ekranlar piksel, yazıcılar mürekkep noktası kullanır. Web'de 72/96 PPI varsayımı tarihseldir; modern ekranlar 300+ PPI olabilir." },
    ],
    detay: [
      "Ekranda mükemmel görünen bir görselin baskıda bulanık çıkmasının en yaygın sebebi bu birim karışıklığıdır — web için hazırlanan görseller genellikle 72-96 PPI'da tasarlanır ve bu çözünürlük ekranda net görünür, ama aynı dosya 300 DPI baskı standardına göre büyütülmeden basılırsa piksel boyutları görünür hale gelir (pikselleşme).",
    ],
  },
  "font-donusum": {
    faqs: [
      { q: "PX, EM, REM arasındaki fark nedir?", a: "PX mutlak pikseldir; EM ebeveyn elemanın font boyutuna, REM kök (html) boyutuna göredir. Varsayılan 16px kökte 1rem = 16px, 1,5rem = 24px'tir. REM, erişilebilir ve tutarlı ölçekleme için tercih edilir." },
      { q: "PT (punto) web'de ne karşılığa gelir?", a: "1pt = 1,333px (96/72). Baskı dünyasından gelir; CSS'te 12pt = 16px'tir." },
    ],
    detay: [
      "REM'in erişilebilirlik açısından PX'e üstünlüğü şuradan gelir — kullanıcı tarayıcı ayarlarından varsayılan font boyutunu büyütürse (görme zorluğu yaşayanlar için yaygın bir ayar), REM ile tanımlanmış tüm boyutlar orantılı büyür; PX ile sabitlenmiş tasarımlar ise kullanıcının bu erişilebilirlik ayarına tepki vermez ve küçük kalmaya devam eder.",
    ],
  },
  "kagit-boyutlari": {
    faqs: [
      { q: "A4 kağıdın ölçüsü nedir?", a: "A4 = 210×297 mm (8,27×11,69 inç). A serisinde her boy, bir üstünün yarısıdır: A3 = 297×420, A5 = 148×210 mm. Tüm seride en-boy oranı √2'dir — bu sayede büyütme/küçültmede oran bozulmaz." },
      { q: "A4'ün piksel karşılığı nedir?", a: "300 DPI'da 2480×3508 px, 150 DPI'da 1240×1754 px. Tasarımı baskıya hazırlarken hedef DPI'a göre bu değerler kullanılır." },
    ],
    detay: [
      "√2 oranının sihirli özelliği şudur — bir A serisi kağıdı ortadan ikiye katladığınızda (uzun kenardan), ortaya çıkan iki parça orijinal kağıtla birebir aynı en-boy oranını korur; bu yüzden A4'ü ikiye katlarsanız A5, A3'ü ikiye katlarsanız A4 elde edersiniz — hiçbir başka oran bu özelliği taşımaz, bu da fotokopi makinelerinin büyütme-küçültme oranlarını neden hep %70-141 gibi görünüşte tuhaf yüzdelerle çalıştığını açıklar.",
    ],
  },
  "renk-kontrast": {
    faqs: [
      { q: "WCAG kontrast oranı nedir?", a: "Metin ile arka plan arasındaki parlaklık oranıdır: (L1+0,05)/(L2+0,05). WCAG AA standardı normal metinde en az 4,5:1, büyük metinde 3:1; AAA ise 7:1 ister." },
      { q: "Kontrast neden önemli?", a: "Düşük kontrast; görme azlığı olan kullanıcılar, yaşlılar ve güneş altındaki ekranlar için metni okunmaz yapar. Yasal erişilebilirlik denetimlerinin de temel kriteridir." },
      { q: "Kontrastı nasıl artırırım?", a: "Metin rengini koyulaştırmak/açmak (L değerini değiştirmek) en etkili yoldur; renk tonunu değiştirmeden HSL'de lightness ayarı çoğu zaman yeterlidir. Araç, iki renginizi girince tüm WCAG eşiklerini test eder." },
    ],
    detay: [
      "Göreli parlaklık (relative luminance) hesabı, insan gözünün renklere eşit duyarlı olmadığı gerçeğini yansıtır — yeşil kanal formülde en yüksek ağırlığı taşırken mavi en düşük ağırlığı taşır, çünkü göz yeşile mavi ışıktan çok daha duyarlıdır; bu yüzden aynı 'parlaklık' değerine sahip iki renk, insan gözüne birbirinden farklı derecede parlak görünebilir ve kontrast formülü bu farkı hesaba katar.",
    ],
  },
  "cidr-alt-ag": {
    faqs: [
      { q: "CIDR gösterimi (/24 gibi) ne anlama gelir?", a: "IP adresinin kaç bitinin ağ kısmı olduğunu belirtir: /24 = 255.255.255.0 maskesi = 256 adres (254 kullanılabilir host). /16 = 65.536, /30 = 4 adres içerir." },
      { q: "Alt ağa bölme (subnetting) nasıl yapılır?", a: "Maske bitini artırarak ağ ikiye bölünür: /24'ten iki /25 (128'er adres) elde edilir. Araç; ağ adresi, yayın adresi, host aralığı ve adet hesabını otomatik yapar." },
    ],
    detay: [
      "Her alt ağda toplam adres sayısından her zaman 2 adres düşülür — biri ağ adresi (o alt ağı tanımlayan ilk adres), diğeri yayın (broadcast) adresi (o alt ağdaki tüm cihazlara birden mesaj göndermek için ayrılmış son adres); bu yüzden /24'lük bir ağda 256 adres olsa da gerçekte cihazlara atanabilecek kullanılabilir adres sayısı 254'tür.",
    ],
  },
};
