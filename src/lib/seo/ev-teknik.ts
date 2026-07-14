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
  },
  "dogalgaz-faturasi": {
    faqs: [
      { q: "Doğalgaz faturası nasıl hesaplanır?", a: "Tüketilen m³, fatura döneminin düzeltme katsayısı ve üst ısıl değeriyle kWh'ye çevrilir (1 m³ ≈ 10,64 kWh), birim fiyatla çarpılır; üzerine KDV eklenir." },
      { q: "Faturadaki kWh dönüşümü neden yapılır?", a: "Gazın enerji içeriği basınç ve sıcaklıkla değiştiğinden EPDK, faturalamanın hacim yerine enerji (kWh) üzerinden yapılmasını zorunlu kılar — böylece herkes aldığı enerji kadar öder." },
      { q: "Kombi tüketimini ne azaltır?", a: "Oda sıcaklığını 1°C düşürmek ~%6 tasarruf sağlar; gece/dışarıda ekonomi modu, radyatör arkası yalıtım ve yıllık kombi bakımı tüketimi belirgin düşürür." },
    ],
  },
  "su-tarife-kademe": {
    faqs: [
      { q: "Kademeli su tarifesi nasıl çalışır?", a: "Aylık tüketim dilimlere ayrılır; her dilim kendi fiyatından ücretlendirilir. Örneğin ilk 10 m³ ucuz, sonraki dilimler kademeli pahalıdır — fazla tüketen daha yüksek birim fiyat öder." },
      { q: "Kademeyi aşmamak neden önemli?", a: "Üst dilim fiyatları alt dilimin 1,5-3 katı olabilir; ay sonunda dilim atlamak faturayı orantısız büyütür. Araç, tüketiminizin hangi dilimlere dağıldığını gösterir." },
    ],
  },
  "beyaz-esya-elektrik": {
    faqs: [
      { q: "Hangi beyaz eşya ne kadar elektrik harcar?", a: "Yaklaşık aylık tüketimler: buzdolabı (A++) 15-25 kWh, çamaşır makinesi (haftada 4 yıkama) 8-12 kWh, bulaşık makinesi 10-15 kWh, fırın 8-15 kWh. Araç cihaz ve kullanım sıklığınıza göre aylık maliyeti hesaplar." },
      { q: "Enerji sınıfı farkı faturada ne eder?", a: "Yeni etiket sisteminde A sınıfı bir buzdolabı, eski C-D sınıfına göre yılda yüzlerce kWh az harcar — cihaz 10+ yıl kullanıldığından aradaki fiyat farkı genellikle kendini amorti eder." },
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
  },
  "kombi-guc": {
    faqs: [
      { q: "Kaç m² eve kaç kW kombi gerekir?", a: "Orta yalıtımlı evde m² başına ~100 W hesaplanır: 120 m² daire için ~12 kW ısıtma yükü. Yalıtımsız ve kuzey cepheli evlerde %20-30 ekleyin; kombiler tipik 20-24 kW satıldığından çoğu daireye standart kombi yeter." },
      { q: "Yüksek kW kombi daha mı iyi ısıtır?", a: "Gereğinden büyük kombi sık dur-kalk yapar, verim ve ömür düşer. Doğru boyut + dış hava sensörü/oda termostatı en verimli çözümdür." },
    ],
  },
  "konut-toplam-maliyet": {
    faqs: [
      { q: "Ev almanın gerçek maliyeti nedir?", a: "Satış fiyatına ek olarak tapu harcı (%4), kredi faizi toplamı, DASK+konut sigortası, emlakçı komisyonu, aidat ve bakım giderleri eklenmelidir. 10 yıllık toplam, etiket fiyatının çok üzerine çıkabilir — araç tüm kalemleri toplar." },
      { q: "Kira mı ev almak mı daha mantıklı?", a: "Kıyas; kira/fiyat oranı, kredi faizi ve değer artışı beklentisine bağlıdır. Yıllık kiranın satış fiyatına oranı %5'in altındaysa (amortisman 20+ yıl) kirada kalıp birikimi değerlendirmek matematiksel olarak öne geçebilir." },
    ],
  },
  "led-tasarruf": {
    faqs: [
      { q: "LED ampul ne kadar tasarruf sağlar?", a: "9 W LED, 60 W akkor ile aynı ışığı verir — %85 daha az tüketim. Günde 5 saat yanan 10 ampullük ev, LED'e geçişle yılda yüzlerce kWh tasarruf eder; ampuller birkaç ayda kendini öder." },
      { q: "LED ampul seçerken neye bakılır?", a: "Watt yerine lümene bakın (~800 lm ≈ eski 60 W). Renk sıcaklığı: 2700K sıcak sarı (salon), 4000K doğal (mutfak-banyo), 6500K beyaz (çalışma) — kaliteli LED'ler 15.000+ saat ömürlüdür." },
    ],
  },
  "taks-kaks-emsal": {
    faqs: [
      { q: "TAKS ve KAKS (emsal) nedir?", a: "TAKS, binanın oturum alanının arsaya oranıdır (taban alanı katsayısı); KAKS/emsal, toplam inşaat alanının arsaya oranıdır. 1.000 m² arsada TAKS 0,3 / KAKS 1,2 ise taban 300 m², toplam inşaat 1.200 m² olabilir." },
      { q: "Emsal alanına neler dahil değildir?", a: "Yönetmeliğe göre sığınak, otopark, teknik hacimler ve belirli ortak alanlar emsale dahil edilmez — bu yüzden fiili inşaat alanı emsal hesabından büyük olabilir. Kesin kurallar imar planı notlarında yer alır." },
    ],
  },
  "bahce-su-ihtiyaci": {
    faqs: [
      { q: "Bahçe/çim sulamada ne kadar su gerekir?", a: "Çim yazın haftada ~25-40 mm (m² başına 25-40 L) su ister; damla sulamalı sebze bahçesi daha azıyla yetinir. Araç alan ve bitki türüne göre haftalık litreyi hesaplar." },
      { q: "Sulama ne zaman yapılmalı?", a: "Sabah erken saatler idealdir — buharlaşma az, mantar riski düşüktür. Az ve sık yerine derin ve seyrek sulama kök gelişimini güçlendirir." },
    ],
  },
  "damacana-suresi": {
    faqs: [
      { q: "19 litrelik damacana kaç gün yeter?", a: "Kişi başı içme suyu ~1,5-2 L/gün hesabıyla: 2 kişilik evde ~5-6 gün, 4 kişide ~2,5-3 gün. Çay-kahve ve yemek kullanımı süreyi kısaltır — araç hane profilinize göre hesaplar." },
      { q: "Damacana mı arıtma mı ekonomik?", a: "Yüksek tüketimli hanelerde arıtma cihazı 1-2 yılda damacana maliyetinin altına iner; az tüketen 1-2 kişilik evlerde damacana pratik kalabilir. Filtre değişim maliyetini hesaba katın." },
    ],
  },
  "hali-m2": {
    faqs: [
      { q: "Odama kaç m² halı gerekir?", a: "Yaygın yaklaşım, mobilya düzenine göre oda alanının %60-80'ini kaplayan halıdır: 20 m² salona 12-16 m² (ör. 3×4 veya 3,5×4,5) uygun düşer. Araç oda ölçünüzden standart halı boyutlarını önerir." },
      { q: "Halı boyutu nasıl seçilir?", a: "Oturma grubunda ön ayaklar halının üzerine gelmeli; yemek masasında sandalye geriye çekildiğinde halıda kalmalıdır (masa + her yönden ~60-75 cm)." },
    ],
  },
  "isitma-kiyas": {
    faqs: [
      { q: "Elektrikli ısıtıcı mı doğalgaz mı ucuz?", a: "Birim enerji maliyeti karşılaştırılır: doğalgaz kWh başına elektrikten belirgin ucuzdur (tipik olarak 1/3-1/4 oranında). Tek odayı kısa süre ısıtmakta elektrik pratik olsa da sürekli ısıtmada doğalgaz açık ara ekonomiktir." },
      { q: "Klima ile ısıtma nasıl konumlanır?", a: "İklimlendirme cihazları (ısı pompaları) 1 kWh elektrikle 3-4 kWh ısı üretebildiğinden (COP 3-4), ılıman bölgelerde doğalgazla rekabet edebilir; çok soğuk havalarda verim düşer." },
    ],
  },
  "kira-gelir-orani": {
    faqs: [
      { q: "Kiraya gelirin ne kadarı ayrılmalı?", a: "Yaygın finansal kural, kiranın net hane gelirinin %30'unu aşmamasıdır; %40 üzeri bütçeyi ciddi zorlar. Araç oranınızı hesaplayıp sağlıklı aralıkla karşılaştırır." },
      { q: "Oran yüksekse ne yapılabilir?", a: "Daha uygun bölge/metrekare, ev arkadaşlığı veya gelir artırma seçenekleri değerlendirilebilir; uzun vadede oranı düşürmek birikim kapasitesini doğrudan artırır." },
    ],
  },

  /* --------------------------------- ARAÇ -------------------------------- */
  "mtv-hesaplama": {
    faqs: [
      { q: "MTV neye göre hesaplanır?", a: "Otomobillerde motor silindir hacmi, araç yaşı ve 2018 sonrası kayıtlarda araç değeri esas alınır; tutarlar Gelir İdaresi'nin yıllık cetvelinde ilan edilir ve her yıl yeniden değerleme oranında artar." },
      { q: "MTV ne zaman ödenir?", a: "Yılda iki eşit taksitte: Ocak ve Temmuz aylarında. GİB internet vergi dairesi, bankalar veya e-Devlet üzerinden ödenebilir." },
      { q: "Elektrikli araçlarda MTV nasıl?", a: "Elektrikli otomobillerde MTV, motor gücü (kW) esasına göre ve eşdeğer benzinli araçlara kıyasla oldukça düşük tarifeden alınır." },
    ],
  },
  "kasko-deger-kaybi": {
    faqs: [
      { q: "Araç yılda ne kadar değer kaybeder?", a: "İlk yıl %15-20, sonraki yıllarda %8-12 civarı kayıp tipiktir; marka güvenilirliği ve piyasa koşullarına göre değişir. Araç, yıllık oran varsayımıyla gelecek değeri hesaplar: Değer = Sıfır × (1−oran)ⁿ." },
      { q: "Kazadan sonra değer kaybı tazminatı alınır mı?", a: "Kusursuz taraf, aracın kaza nedeniyle ikinci el değerindeki düşüşü karşı tarafın trafik sigortasından talep edebilir. Tutar; hasar boyutu, araç yaşı ve km'ye göre eksper raporuyla belirlenir." },
    ],
  },
  "km-basi-yakit": {
    faqs: [
      { q: "Km başına yakıt maliyeti nasıl hesaplanır?", a: "(Tüketim L/100km × litre fiyatı) / 100. Örneğin 7 L/100km tüketen araç, litre 50 ₺ iken km başına 3,5 ₺ yakar; 100 km yol ~350 ₺'dir." },
      { q: "Gerçek tüketimimi nasıl ölçerim?", a: "Depoyu fulleyin, sayaç sıfırlayın; bir sonraki full'de alınan litreyi yapılan km'ye bölüp 100 ile çarpın. Katalog değeri gerçek kullanımda genellikle %10-20 aşılır." },
    ],
  },
  "lpg-donusum": {
    faqs: [
      { q: "LPG dönüşümü ne kadar sürede amorti eder?", a: "Dönüşüm maliyeti / km başına tasarrufa bölünür. LPG litre fiyatı benzinin yaklaşık yarısı, tüketimi ~%15-20 fazladır; yılda 15-20 bin km yapan araçta dönüşüm tipik olarak 1-2 yılda kendini öder." },
      { q: "LPG'nin dezavantajları nelerdir?", a: "Bagaj hacmi kaybı, ~%5-10 güç düşüşü, periyodik sızdırmazlık kontrolü ve bazı otoparklara giriş kısıtı başlıca noktalardır. Montajın yetkili firmada yapılması ve ruhsata işlenmesi zorunludur." },
    ],
  },
  "trafik-cezasi-indirim": {
    faqs: [
      { q: "Trafik cezasında peşin ödeme indirimi nedir?", a: "Tebliğden itibaren 15 gün içinde ödenen cezalarda %25 indirim uygulanır. 1.000 ₺'lik ceza 750 ₺ ödenir — araç indirimli tutarı ve son ödeme gününü hesaplar." },
      { q: "15 gün geçerse ne olur?", a: "İndirim hakkı düşer ve ceza tam tahsil edilir; ödenmezse aylık gecikme zammı işler. Cezaya itiraz süresi de tebliğden itibaren 15 gündür — itiraz, ödeme indirimini etkilemez." },
    ],
  },
  "yakit-tasarruf": {
    faqs: [
      { q: "İki aracın yakıt maliyeti nasıl karşılaştırılır?", a: "Yıllık km × tüketim farkı × yakıt fiyatı formülüyle: yılda 20.000 km'de 2 L/100km fark, litre 50 ₺ iken yılda 20.000 ₺ eder. Araç, hibrit/dizel farkının kaç yılda amorti ettiğini gösterir." },
      { q: "Sürüş tarzı tüketimi ne kadar etkiler?", a: "Ani hızlanma-fren, yüksek hız ve gereksiz yük tüketimi %20-30 artırabilir. Sabit seyir, doğru lastik basıncı ve zamanında bakım en etkili tasarruf yollarıdır." },
    ],
  },

  /* ------------------------------- SEYAHAT ------------------------------- */
  "elektrikli-arac-menzil": {
    faqs: [
      { q: "Elektrikli aracın menzili nasıl hesaplanır?", a: "Menzil = kullanılabilir batarya (kWh) × şarj yüzdesi / tüketim (kWh/100km) × 100. 60 kWh batarya, %80 şarj ve 18 kWh/100km tüketimle ~267 km yol yapılır." },
      { q: "Kışın menzil neden düşer?", a: "Soğukta batarya kimyası yavaşlar ve kabin ısıtması ek enerji harcar — menzil %20-35 düşebilir. Ön ısıtma (araç prizdeyken) ve ısı pompalı modeller kaybı azaltır." },
    ],
  },
  "elektrikli-arac-sarj": {
    faqs: [
      { q: "Elektrikli araç şarjı ne kadara mal olur?", a: "Maliyet = çekilen enerji (kWh) × birim fiyat. 60 kWh bataryayı %20'den %80'e evde şarj etmek ~36-40 kWh çeker; ev tarifesiyle DC hızlı şarj istasyonunun üçte biri ile yarısı maliyete gelir." },
      { q: "Evde şarj mı istasyonda mı ucuz?", a: "Evde gece tarifesiyle şarj açık ara en ekonomiktir; DC hızlı şarj istasyonları hız karşılığında kWh başına 2-4 kat fiyat uygular. Günlük kullanımda ev şarjı + yolculukta hızlı şarj tipik dengedir." },
      { q: "Şarj süresi nasıl hesaplanır?", a: "Süre ≈ çekilecek enerji / şarj gücü: 40 kWh'lik dolum 7,4 kW ev kutusunda ~5,5 saat, 100 kW DC istasyonda ~25-30 dakika sürer (batarya %80 sonrası yavaşlar)." },
    ],
  },
  "otopark-ucret": {
    faqs: [
      { q: "Otopark ücreti nasıl hesaplanır?", a: "Genellikle ilk saat(ler) sabit, sonrası saat başı tarifedir; günlük tavan uygulanır. Araç, giriş-çıkış saatinize ve tarifeye göre toplam ücreti hesaplar." },
      { q: "Aylık abonelik ne zaman avantajlı?", a: "Aylık ücret / günlük ücret oranına bakın: ayda ~15 günden fazla park ediyorsanız abonelik çoğu otoparkta öne geçer." },
    ],
  },
  "taksi-ucreti": {
    faqs: [
      { q: "Taksi ücreti nasıl hesaplanır?", a: "Açılış (indi-bindi) + km başına ücret + bekleme/trafik süresi ücreti toplanır. Tarifeler il il farklıdır ve belediyelerce güncellenir; araç güncel İstanbul/Ankara/İzmir tarifeleriyle tahmin verir." },
      { q: "Gece tarifesi hâlâ var mı?", a: "İstanbul'da gece-gündüz tarifesi birleştirilmiştir; bazı illerde 24:00-06:00 arası ~%50 zamlı gece tarifesi uygulanmaya devam eder. Yola çıkmadan aracın hesapladığı aralığı referans alın." },
    ],
  },
  "ulasim-kart-vs-bilet": {
    faqs: [
      { q: "Aylık abonman kart ne zaman avantajlı?", a: "Başabaş noktası = abonman ücreti / tek biniş ücreti. Aylık kart 40 biniş fiyatındaysa ve ayda 40'tan fazla biniyorsanız (günde 2 biniş × 20+ iş günü) kart kazandırır." },
      { q: "Aktarma ücretlendirmesi hesaba katılmalı mı?", a: "Evet — indirimli aktarma, tek biniş maliyetinizi düşürerek başabaş noktasını yukarı çeker. Araç, aktarma oranınızı da hesaba katarak gerçek kıyas yapar." },
    ],
  },

  /* ----------------------------- DÖNÜŞTÜRÜCÜ ----------------------------- */
  "uzunluk-cevirici": {
    faqs: [
      { q: "1 inç, 1 feet, 1 mil kaç cm/m/km'dir?", a: "1 inç = 2,54 cm; 1 feet = 30,48 cm; 1 yard = 0,9144 m; 1 mil = 1,609 km; 1 deniz mili = 1,852 km. Araç tüm birimler arasında anında çevirir." },
      { q: "TV ekranı inç olarak neyi ölçer?", a: "Ekranın köşegen uzunluğunu: 55 inç TV'nin köşegeni 139,7 cm'dir; 16:9 oranda bu ~121×68 cm panele karşılık gelir." },
    ],
  },
  "agirlik-cevirici": {
    faqs: [
      { q: "1 libre (lb) ve 1 ons (oz) kaç gramdır?", a: "1 lb = 453,59 g; 1 oz = 28,35 g; 1 stone = 6,35 kg. ABD tariflerindeki ağırlıkları mutfak ölçülerine çevirmede en çok bu üçü kullanılır." },
      { q: "Kilogram ile Newton karıştırılır mı?", a: "Kg kütle, Newton kuvvet birimidir: 1 kg kütlenin yeryüzündeki ağırlığı ~9,81 N'dur. Günlük dil 'ağırlık' dese de tartılar kütleyi gösterir." },
    ],
  },
  "sicaklik-cevirici": {
    faqs: [
      { q: "Fahrenheit'tan Celsius'a nasıl çevrilir?", a: "°C = (°F − 32) × 5/9. Pratik referanslar: 32°F = 0°C, 100°F ≈ 37,8°C (vücut ateşi sınırı), 212°F = 100°C. Kelvin için K = °C + 273,15." },
      { q: "−40 derecede ne özel?", a: "Fahrenheit ve Celsius ölçeklerinin kesiştiği tek nokta −40'tır: −40°C = −40°F." },
    ],
  },
  "alan-cevirici": {
    faqs: [
      { q: "1 dönüm, 1 hektar kaç m²'dir?", a: "1 dönüm = 1.000 m²; 1 hektar = 10.000 m² = 10 dönüm; 1 acre ≈ 4.047 m² ≈ 4 dönüm. Tapu ve tarım arazisi işlemlerinin standart dönüşümleridir." },
      { q: "Metrekare fiyatından dönüm fiyatı nasıl bulunur?", a: "m² fiyatı × 1.000. Araç ters yönde de (dönüm fiyatından m²'ye) otomatik hesaplar." },
    ],
  },
  "hacim-cevirici": {
    faqs: [
      { q: "1 galon, 1 litre, 1 m³ ilişkisi nedir?", a: "1 m³ = 1.000 L; 1 ABD galonu = 3,785 L; 1 İngiliz galonu = 4,546 L; 1 bardak (cup) ≈ 236 ml. Araç mutfak ölçülerinden endüstriyel birimlere tüm dönüşümleri yapar." },
      { q: "ml ile cc aynı mı?", a: "Evet — 1 ml = 1 cm³ (cc). Motor hacimlerinde cc, sıvı ölçülerinde ml kullanılır ama değerler birebir aynıdır." },
    ],
  },
  "hiz-cevirici": {
    faqs: [
      { q: "1 knot (deniz mili/saat) kaç km/s'dir?", a: "1 knot = 1,852 km/s. Havacılık ve denizcilikte hız knot ile ifade edilir; 500 knot uçak hızı ~926 km/s'dir. m/s'ye çevirmek için km/s ÷ 3,6." },
      { q: "mph'yi km/s'ye nasıl çeviririm?", a: "1 mph = 1,609 km/s. ABD'de 70 mph hız limiti ~113 km/s'ye karşılık gelir." },
    ],
  },
  "veri-cevirici": {
    faqs: [
      { q: "1 GB kaç MB'dir — 1000 mi 1024 mü?", a: "İki standart vardır: SI'da 1 GB = 1000 MB, ikili sistemde 1 GiB = 1024 MiB. Disk üreticileri 1000'i, işletim sistemleri çoğunlukla 1024'ü kullanır — 1 TB diskin ~931 GiB görünmesinin sebebi budur." },
      { q: "Mbps ile MB/s farkı nedir?", a: "Mbps megabit/saniye, MB/s megabayt/saniyedir; 1 bayt = 8 bit olduğundan 100 Mbps internet en fazla 12,5 MB/s indirir." },
    ],
  },
  "zaman-cevirici": {
    faqs: [
      { q: "1 yıl kaç saniyedir?", a: "365 gün = 31.536.000 saniye; artık yılda 31.622.400. Bir milyon saniye ~11,6 gün, bir milyar saniye ~31,7 yıldır — ölçek farkını kavramanın klasik örneğidir." },
      { q: "İş saati hesaplarında hangi değerler kullanılır?", a: "Türkiye'de tam zamanlı çalışma haftada 45 saattir; aylık ~195, yıllık ~2.340 saate karşılık gelir. Saatlik ücret hesaplarında ay 225 saat kabul edilir (İş Kanunu pratiği)." },
    ],
  },
  "sicaklik-hizli": {
    faqs: [
      { q: "Réaumur ve Rankine ölçekleri nedir?", a: "Réaumur (°Ré) suyun donma-kaynama aralığını 80'e böler (°Ré = °C × 0,8); Rankine (°R) Fahrenheit tabanlı mutlak ölçektir (°R = °F + 459,67). Tarihî metinler ve bazı mühendislik alanlarında karşılaşılır." },
    ],
  },
  "hacim-birim-hizli": {
    faqs: [
      { q: "Bir yemek kaşığı / çay kaşığı kaç ml?", a: "Standart: 1 yemek kaşığı = 15 ml, 1 tatlı kaşığı = 10 ml, 1 çay kaşığı = 5 ml, 1 su bardağı ≈ 200-240 ml. Tariflerdeki ölçüleri ml'ye çevirmenin pratik yolu budur." },
    ],
  },
  "kilo-birim-hizli": {
    faqs: [
      { q: "Kilomu libre (lbs) olarak nasıl söylerim?", a: "kg × 2,2046 = lbs: 70 kg ≈ 154 lbs. Stone için kg ÷ 6,35: 70 kg = 11 stone. Spor salonu plakaları ve yurt dışı formlar için en sık dönüşümlerdir." },
    ],
  },

  /* ----------------------------- GELİŞTİRİCİ ----------------------------- */
  "sifre-uretici": {
    faqs: [
      { q: "Güçlü şifre nasıl olmalı?", a: "En az 12-16 karakter; büyük-küçük harf, rakam ve sembol karışımı; sözlük kelimesi ve kişisel bilgi içermemeli. Her hesap için farklı şifre kullanmak en kritik kuraldır." },
      { q: "Bu araçla üretilen şifreler güvenli mi?", a: "Şifreler tarayıcınızın kriptografik rastgelelik kaynağıyla (crypto.getRandomValues) cihazınızda üretilir — sunucuya gönderilmez, kaydedilmez." },
      { q: "16 karakterlik şifre kırılabilir mi?", a: "4 karakter sınıfını içeren 16 karakterlik rastgele şifrenin kombinasyon uzayı ~10³¹'dir; kaba kuvvetle kırılması güncel donanımla pratik olarak imkânsızdır. Zayıf halka genellikle şifre değil, sızdırılmış veri tabanları ve şifre tekrarıdır." },
    ],
  },
  "hash-uretici": {
    faqs: [
      { q: "Hash nedir, ne işe yarar?", a: "Veriyi sabit uzunlukta parmak izine dönüştüren tek yönlü fonksiyondur: aynı girdi hep aynı çıktıyı verir, çıktıdan girdi elde edilemez. Dosya bütünlüğü doğrulama ve parola saklamada kullanılır." },
      { q: "SHA-256 ile MD5 farkı nedir?", a: "MD5 ve SHA-1 çakışma saldırılarına karşı kırılmıştır ve güvenlik amaçlı kullanılmamalıdır; SHA-256 ve üzeri güncel standarttır. Bu araç Web Crypto API'nin desteklediği SHA ailesini kullanır." },
      { q: "Parolalar hash'lenerek mi saklanır?", a: "Evet ama düz SHA yerine bcrypt/argon2 gibi yavaşlatılmış ve tuzlanmış (salt) algoritmalarla — böylece sızıntı halinde toplu kırma zorlaşır." },
    ],
  },
  "renk-cevirici": {
    faqs: [
      { q: "HEX, RGB ve HSL arasındaki fark nedir?", a: "Aynı rengin farklı gösterimleridir: HEX (#1a7f6e) kompakt web formatı, RGB (26,127,110) kanal değerleri, HSL (ton, doygunluk, açıklık) insan sezgisine en yakın modeldir. Araç üçü arasında anlık çevirir." },
      { q: "HSL neden tasarımda kullanışlıdır?", a: "Aynı tonun açık/koyu varyantlarını üretmek için yalnızca L (lightness) değerini değiştirmek yeterlidir — tutarlı renk paletleri kurmayı kolaylaştırır." },
    ],
  },
  "karakter-sayaci": {
    faqs: [
      { q: "Sosyal medya karakter limitleri nelerdir?", a: "X/Twitter 280, Instagram açıklama 2.200, SEO meta başlık ~60, meta açıklama ~155-160 karakterdir. Araç; karakter, kelime, cümle ve boşluksuz karakter sayısını canlı gösterir." },
      { q: "SMS kaç karakterdir?", a: "Standart SMS 160 karakterdir; Türkçe karakter (ğ, ş, ı vb.) kullanılırsa kodlama değişir ve sınır 70'e düşer — uzun mesajlar bölünerek ücretlendirilir." },
    ],
  },
  "metin-okuma-suresi": {
    faqs: [
      { q: "Okuma süresi nasıl hesaplanır?", a: "Kelime sayısı / okuma hızı (dakikada kelime). Ortalama sessiz okuma ~200-250 kpm, sesli okuma/sunum ~130-150 kpm'dir. Blog yazılarındaki 'X dk okuma' etiketi bu hesaba dayanır." },
      { q: "Sunum için konuşma süresi nasıl tahmin edilir?", a: "Konuşma hızı ~130-150 kpm alınır: 1.000 kelimelik metin ~7-8 dakikalık konuşmadır. Araç hızı seçmenize izin verir." },
    ],
  },
  "dpi-piksel": {
    faqs: [
      { q: "DPI nedir, baskıda neden önemli?", a: "İnç başına nokta sayısıdır; kaliteli baskı için 300 DPI standarttır. 10×15 cm fotoğraf baskısı için en az 1181×1772 piksel görüntü gerekir — araç boyut-DPI-piksel üçlüsünü çevirir." },
      { q: "Ekran PPI'ı ile baskı DPI'ı aynı şey mi?", a: "Kavramsal olarak benzer (yoğunluk ölçüsü) ama ekranlar piksel, yazıcılar mürekkep noktası kullanır. Web'de 72/96 PPI varsayımı tarihseldir; modern ekranlar 300+ PPI olabilir." },
    ],
  },
  "font-donusum": {
    faqs: [
      { q: "PX, EM, REM arasındaki fark nedir?", a: "PX mutlak pikseldir; EM ebeveyn elemanın font boyutuna, REM kök (html) boyutuna göredir. Varsayılan 16px kökte 1rem = 16px, 1,5rem = 24px'tir. REM, erişilebilir ve tutarlı ölçekleme için tercih edilir." },
      { q: "PT (punto) web'de ne karşılığa gelir?", a: "1pt = 1,333px (96/72). Baskı dünyasından gelir; CSS'te 12pt = 16px'tir." },
    ],
  },
  "kagit-boyutlari": {
    faqs: [
      { q: "A4 kağıdın ölçüsü nedir?", a: "A4 = 210×297 mm (8,27×11,69 inç). A serisinde her boy, bir üstünün yarısıdır: A3 = 297×420, A5 = 148×210 mm. Tüm seride en-boy oranı √2'dir — bu sayede büyütme/küçültmede oran bozulmaz." },
      { q: "A4'ün piksel karşılığı nedir?", a: "300 DPI'da 2480×3508 px, 150 DPI'da 1240×1754 px. Tasarımı baskıya hazırlarken hedef DPI'a göre bu değerler kullanılır." },
    ],
  },
  "renk-kontrast": {
    faqs: [
      { q: "WCAG kontrast oranı nedir?", a: "Metin ile arka plan arasındaki parlaklık oranıdır: (L1+0,05)/(L2+0,05). WCAG AA standardı normal metinde en az 4,5:1, büyük metinde 3:1; AAA ise 7:1 ister." },
      { q: "Kontrast neden önemli?", a: "Düşük kontrast; görme azlığı olan kullanıcılar, yaşlılar ve güneş altındaki ekranlar için metni okunmaz yapar. Yasal erişilebilirlik denetimlerinin de temel kriteridir." },
      { q: "Kontrastı nasıl artırırım?", a: "Metin rengini koyulaştırmak/açmak (L değerini değiştirmek) en etkili yoldur; renk tonunu değiştirmeden HSL'de lightness ayarı çoğu zaman yeterlidir. Araç, iki renginizi girince tüm WCAG eşiklerini test eder." },
    ],
  },
  "cidr-alt-ag": {
    faqs: [
      { q: "CIDR gösterimi (/24 gibi) ne anlama gelir?", a: "IP adresinin kaç bitinin ağ kısmı olduğunu belirtir: /24 = 255.255.255.0 maskesi = 256 adres (254 kullanılabilir host). /16 = 65.536, /30 = 4 adres içerir." },
      { q: "Alt ağa bölme (subnetting) nasıl yapılır?", a: "Maske bitini artırarak ağ ikiye bölünür: /24'ten iki /25 (128'er adres) elde edilir. Araç; ağ adresi, yayın adresi, host aralığı ve adet hesabını otomatik yapar." },
    ],
  },
};
