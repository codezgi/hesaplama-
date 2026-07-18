import type { SeoExtra } from "./types";

/* Sağlık + Hamilelik hesaplayıcıları için SEO içerikleri */
export const saglikContent: Record<string, SeoExtra> = {
  "ideal-kilo": {
    howItWorks: [
      "Boyunuzu ve cinsiyetinizi girin.",
      "Devine formülüyle ideal kilo hesaplanır; BMI 18,5-24,9 aralığına karşılık gelen sağlıklı kilo aralığı da gösterilir.",
    ],
    faqs: [
      { q: "İdeal kilo nasıl hesaplanır?", a: "En yaygın yöntem Devine formülüdür: erkeklerde 50 + 2,3 × (boy inç − 60), kadınlarda 45,5 + 2,3 × (boy inç − 60). Alternatif olarak BMI 22 hedefiyle boy karesinin 22 ile çarpımı kullanılır." },
      { q: "İdeal kilom neden tek bir sayı değil?", a: "Sağlıklı kilo bir aralıktır — BMI 18,5-24,9 arası normal kabul edilir. Kas oranı, kemik yapısı ve yaş kişisel farklar yaratır; formüller yalnızca referans noktasıdır." },
      { q: "Sporcularda ideal kilo formülleri geçerli mi?", a: "Sınırlı geçerlidir — kas dokusu yağdan ağır olduğu için kaslı kişilerde formüller ve BMI olduğundan kilolu gösterebilir. Vücut yağ oranı ölçümü daha doğru bir göstergedir." },
    ],
    detay: [
      "Devine formülü aslında ilaç dozajı hesaplamak için 1974'te geliştirildi, genel halk için estetik bir 'ideal kilo' rehberi olarak tasarlanmadı — bugün yaygın kullanılmasının sebebi pratikliğidir, ama kemik yapısı geniş veya dar olan bireylerde birkaç kilo sapma göstermesi normaldir.",
      "162 cm altındaki boylarda formül matematik olarak negatif veya anlamsız sonuç verebilir çünkü '60 inçin altı' için düzeltme terimi eksi değere döner — bu araç bu sınır durumunu ayrıca ele alır, ama elle hesaplarken bu tuzağa dikkat edin.",
    ],
  },
  "vucut-yag-orani": {
    howItWorks: [
      "Cinsiyet, boy, bel ve boyun çevrenizi (kadınlarda ayrıca kalça) girin.",
      "US Navy yöntemiyle vücut yağ yüzdeniz logaritmik formülle hesaplanır.",
    ],
    faqs: [
      { q: "Vücut yağ oranı kaç olmalı?", a: "Erkeklerde %10-20, kadınlarda %18-28 aralığı genel olarak sağlıklı kabul edilir. Sporcular daha düşük değerlere sahipken, esansiyel yağ sınırının (erkek %3-5, kadın %10-13) altına inmek sağlıksızdır." },
      { q: "US Navy yöntemi ne kadar doğru?", a: "Mezura ile yapılan ölçümlere dayanan bu yöntem, DEXA gibi klinik ölçümlere göre ±3-4 puan sapabilir; ancak evde takip için tutarlı ve pratik bir göstergedir. Ölçümü hep aynı koşullarda yapın." },
      { q: "BMI normalken yağ oranım yüksek olabilir mi?", a: "Evet — buna 'normal kilolu obezite' denir. Kas kütlesi düşük, yağ oranı yüksek kişilerde BMI normal görünebilir; bu yüzden yağ oranı BMI'dan daha bilgilendirici olabilir." },
    ],
  },
  "su-ihtiyaci": {
    howItWorks: [
      "Kilonuzu, aktivite düzeyinizi ve iklim koşulunu girin.",
      "Temel ihtiyaç kg başına 35 ml olarak hesaplanır; egzersiz ve sıcak iklim için ekleme yapılır.",
    ],
    faqs: [
      { q: "Günde ne kadar su içmeliyim?", a: "Pratik kural, kilogram başına 30-35 ml'dir: 70 kg bir yetişkin için yaklaşık 2,1-2,5 litre. Egzersiz, sıcak hava, gebelik ve emzirme ihtiyacı artırır." },
      { q: "Çay ve kahve su yerine geçer mi?", a: "Kısmen — kafeinli içecekler de sıvı dengesine katkı sağlar, ancak hafif idrar söktürücü etkileri vardır. Günlük sıvının ağırlıklı kısmını su oluşturmalıdır." },
      { q: "Fazla su içmek zararlı olabilir mi?", a: "Aşırı ve hızlı su tüketimi nadiren de olsa sodyum düşüklüğüne (hiponatremi) yol açabilir. Böbrek ve kalp hastaları hekimlerinin önerdiği sıvı kısıtlamasına uymalıdır." },
    ],
    detay: [
      "'Günde 8 bardak su' kuralı aslında bilimsel bir kaynağa dayanmaz — 1945'te bir tavsiyede geçen 'yiyeceklerden alınanlar dahil 2,5 litre' ifadesi zamanla 'sadece içme suyundan 8 bardak' şeklinde yanlış aktarılmıştır; yediğiniz sebze-meyve ve çorbalar da günlük su ihtiyacınıza katkı sağlar.",
    ],
  },
  "protein-ihtiyaci": {
    howItWorks: [
      "Kilonuzu ve hedefinizi (hareketsiz, aktif, kas kazanımı, kilo verme) seçin.",
      "Protein ihtiyacı = Kilo × hedefinize uygun katsayı (0,8-2,0 g/kg) olarak hesaplanır.",
    ],
    faqs: [
      { q: "Günlük protein ihtiyacım ne kadar?", a: "Hareketsiz yetişkinlerde 0,8 g/kg yeterlidir; düzenli egzersiz yapanlarda 1,2-1,6 g/kg, yoğun kuvvet antrenmanı ve kas kazanımında 1,6-2,2 g/kg önerilir. 80 kg sporcunun ihtiyacı 130-175 g civarındadır." },
      { q: "Fazla protein zararlı mı?", a: "Sağlıklı böbreklere sahip kişilerde 2 g/kg'a kadar alımın zararı gösterilmemiştir. Böbrek hastalığı olanlar mutlaka hekim kontrolünde protein alımını ayarlamalıdır." },
      { q: "Proteinleri gün içine nasıl dağıtmalıyım?", a: "Kas protein sentezi için öğün başına 20-40 g, günde 3-5 öğüne dağıtım tek seferde yüklemeye göre daha etkilidir. Antrenman sonrası 2 saat içinde protein almak faydalıdır." },
    ],
    detay: [
      "Kilo verme döneminde protein ihtiyacı aslında normalden düşmez, tam tersine artırılması önerilir (1,6-2,2 g/kg) — çünkü kalori açığında vücut enerji ihtiyacını kaslardan karşılamaya meyillidir; yüksek protein alımı bu kas kaybını sınırlayan en güçlü tek besin stratejisidir.",
    ],
  },
  "bel-kalca-orani": {
    faqs: [
      { q: "Bel-kalça oranı (WHR) nedir, kaç olmalı?", a: "Bel çevresinin kalça çevresine bölünmesiyle bulunur. WHO'ya göre erkeklerde 0,90, kadınlarda 0,85 üzeri abdominal obezite ve artmış kardiyometabolik risk göstergesidir." },
      { q: "Bel çevresi nereden ölçülür?", a: "Ayakta, karın rahatken, en alt kaburga ile leğen kemiğinin üst çıkıntısı arasındaki en dar noktadan (genellikle göbek hizası) ölçülür. Kalça, en geniş noktadan ölçülür." },
      { q: "WHR neden BMI'dan farklı bilgi verir?", a: "BMI toplam kütleyi ölçer, WHR yağın nerede toplandığını gösterir. Karın bölgesi (elma tipi) yağlanma, kalça-bacak (armut tipi) yağlanmadan daha yüksek kalp-damar riski taşır." },
    ],
  },
  "bel-boy-orani": {
    faqs: [
      { q: "Bel-boy oranı (WHtR) nedir?", a: "Bel çevresinin boya bölünmesiyle bulunur; 'belin boyunun yarısını geçmesin' kuralına dayanır. 0,5 üzeri değerler artmış sağlık riskine işaret eder ve BMI'dan daha iyi öngörücü olduğunu gösteren çalışmalar vardır." },
      { q: "WHtR kaç olmalı?", a: "0,4-0,5 arası sağlıklı kabul edilir; 0,5-0,6 artmış risk, 0,6 üzeri yüksek risk bölgesidir. Çocuklarda da aynı 0,5 eşiği pratikte kullanılır." },
    ],
  },
  "bmi-hizli": {
    faqs: [
      { q: "BMI (vücut kitle indeksi) nasıl hesaplanır?", a: "BMI = kilo (kg) / boy² (m). Örneğin 70 kg ve 1,75 m için: 70 / 3,0625 = 22,9. WHO sınıflaması: 18,5 altı zayıf, 18,5-24,9 normal, 25-29,9 fazla kilolu, 30+ obez." },
      { q: "BMI'nin sınırları nelerdir?", a: "Kas-yağ ayrımı yapamaz: kaslı sporcular 'fazla kilolu' görünebilir, kas kaybı olan yaşlılar 'normal' çıkabilir. Bel çevresi ve yağ oranıyla birlikte değerlendirmek daha doğrudur." },
    ],
  },
  "bmr-harris-benedict": {
    howItWorks: [
      "Yaş, cinsiyet, boy ve kilonuzu girin.",
      "Harris-Benedict ve Mifflin-St Jeor formülleriyle bazal metabolizma hızınız (BMR) ayrı ayrı hesaplanıp karşılaştırılır.",
    ],
    faqs: [
      { q: "BMR (bazal metabolizma hızı) nedir?", a: "Vücudunuzun tam istirahatte, yaşamsal işlevler için harcadığı günlük kaloridir. Toplam günlük harcamanın (TDEE) %60-70'ini oluşturur." },
      { q: "Harris-Benedict ile Mifflin-St Jeor hangisi daha doğru?", a: "Güncel çalışmalar Mifflin-St Jeor'un günümüz popülasyonunda daha isabetli olduğunu gösterir; Harris-Benedict (1919) genellikle %5 civarı yüksek tahmin eder. Bu araç ikisini birlikte gösterir." },
      { q: "BMR'den günlük kalori ihtiyacı nasıl bulunur?", a: "BMR aktivite katsayısıyla çarpılır: hareketsiz 1,2; hafif aktif 1,375; orta 1,55; çok aktif 1,725. Sonuç, kilonuzu koruyacak günlük kaloridir (TDEE)." },
    ],
  },
  "ideal-kilo-bmi22": {
    faqs: [
      { q: "BMI 22 hedefiyle ideal kilo nasıl bulunur?", a: "Normal aralığın (18,5-24,9) ortası olan BMI 22 referans alınır: İdeal kilo = 22 × boy² (m). 1,70 m için 22 × 2,89 = 63,6 kg." },
      { q: "Neden BMI 22?", a: "Epidemiyolojik çalışmalarda en düşük hastalık ve ölüm riskinin BMI 20-23 bandında kümelendiği gözlenmiştir; 22 bu bandın pratik orta noktasıdır." },
    ],
  },
  "ilac-katilim-payi": {
    faqs: [
      { q: "SGK ilaç katılım payı ne kadar?", a: "Reçeteli ilaçlarda çalışanlar ve bakmakla yükümlü olunanlar %20, emekliler %10 katılım payı öder. Ayrıca ilaç başına ve reçete başına küçük sabit ücretler eklenebilir." },
      { q: "Katılım payından muaf olan var mı?", a: "İş kazası-meslek hastalığı tedavileri, savaş gazileri, bazı kronik hastalıkların (raporlu) ilaçları ve aile hekimi sevkli bazı durumlar katılım payından muaftır." },
      { q: "Eşdeğer ilaç farkı nedir?", a: "SGK, eşdeğer ilaç grubunda en ucuz ilacın belirli bir bandına kadar öder; daha pahalı markayı seçerseniz aradaki fiyat farkını da cebinizden ödersiniz." },
    ],
  },
  "kalp-atis-zonlari": {
    howItWorks: [
      "Yaşınızı ve istirahat nabzınızı girin.",
      "Karvonen yöntemiyle nabız rezervi (Max KAH − istirahat) hesaplanır ve %50-90 yoğunluk zonları çıkarılır.",
    ],
    faqs: [
      { q: "Antrenman nabız zonları nasıl hesaplanır?", a: "Karvonen yöntemi: Hedef nabız = (Max KAH − İstirahat KAH) × yoğunluk% + İstirahat KAH. Max KAH pratikte 220 − yaş ile tahmin edilir." },
      { q: "Yağ yakımı için hangi zonda çalışmalıyım?", a: "Zon 2 (%60-70 rezerv) yağın enerji kaynağı olarak en yüksek oranda kullanıldığı bölgedir ve uzun süre sürdürülebilir. Toplam kalori açığı yine de belirleyicidir." },
      { q: "İstirahat nabzı nasıl ölçülür?", a: "Sabah uyanır uyanmaz, yataktan kalkmadan 60 saniye sayarak ölçün. Düzenli antrenmanla istirahat nabzının düşmesi kondisyon gelişiminin işaretidir." },
    ],
  },
  "kolesterol-kategori": {
    faqs: [
      { q: "Kolesterol değerleri kaç olmalı?", a: "Genel hedefler: toplam kolesterol <200 mg/dL, LDL <130 (riskli hastalarda <100 hatta <70), HDL erkekte >40 kadında >50, trigliserid <150 mg/dL. Hedefler kişisel risk profiline göre hekimce belirlenir." },
      { q: "LDL neden 'kötü' kolesterol olarak anılır?", a: "LDL damar duvarında birikerek plak oluşumuna (ateroskleroz) katkıda bulunur; yüksek LDL kalp krizi ve inme riskini artırır. HDL ise fazla kolesterolü karaciğere taşıdığı için koruyucudur." },
      { q: "Kolesterol ilaçsız düşürülebilir mi?", a: "Doymuş yağı azaltmak, lif ve omega-3 alımını artırmak, düzenli egzersiz ve kilo kontrolü LDL'yi %10-20 düşürebilir. İlaç kararı toplam kardiyovasküler riske göre hekim tarafından verilir." },
    ],
  },
  "kosu-tempo": {
    faqs: [
      { q: "Koşu temposu (pace) nasıl hesaplanır?", a: "Tempo = Süre / Mesafe olarak dk/km cinsinden ifade edilir. 5 km'yi 27:30'da koşan birinin temposu 5:30/km'dir. Araç tempo, süre ve mesafeden eksik olanı hesaplar." },
      { q: "Hedef yarış sürem için hangi tempoda koşmalıyım?", a: "Hedef süreyi mesafeye bölün: 45 dakikada 10K için 4:30/km tutturmalısınız. Antrenmanlarda yarış temposunun üstünde ve altında karışık tempolar çalışmak gelişimi hızlandırır." },
      { q: "Km başına tempo ile hız (km/s) dönüşümü nasıl?", a: "Hız = 60 / tempo(dk). 5:00/km tempo 12 km/s'ye, 6:00/km tempo 10 km/s'ye karşılık gelir." },
    ],
  },
  "alkol-promil": {
    faqs: [
      { q: "Promil nasıl hesaplanır?", a: "Widmark formülü kullanılır: Promil = alkol gramı / (kilo × r) − 0,15 × saat. r dağılım katsayısıdır (erkek ~0,68, kadın ~0,55); vücut alkolü saatte yaklaşık 0,15 promil arıtır." },
      { q: "Yasal alkol sınırı kaç promil?", a: "Türkiye'de hususi araç sürücüleri için sınır 0,50 promildir; ticari araç sürücüleri ve hususi araç dışı sürücüler için sıfır tolerans uygulanır. 1,00 promil üzeri TCK kapsamında suçtur." },
      { q: "Ne kadar sürede ayılırım?", a: "Karaciğer sabit hızla (saatte ~0,15 promil) çalışır; kahve, duş veya uyku bu hızı artırmaz. 1 promilin sıfırlanması yaklaşık 6-7 saat sürer. Hesaplama tahminidir — direksiyona geçmeden önce hiç içmemek en güvenlisidir." },
    ],
  },
  "sigara-birakma": {
    faqs: [
      { q: "Sigarayı bırakınca vücutta neler değişir?", a: "20 dakikada nabız normalleşir, 12 saatte kandaki karbonmonoksit temizlenir, 2-12 haftada dolaşım düzelir, 1 yılda kalp hastalığı riski yarılanır, 10 yılda akciğer kanseri riski içmeyene yaklaşır." },
      { q: "Bırakınca ne kadar para biriktiririm?", a: "Günde 1 paket içen biri, paket fiyatı üzerinden yılda binlerce lira tasarruf eder. Araç, günlük tüketiminize göre birikimi gün gün hesaplar — bu tutarı somut bir hedefe bağlamak motivasyonu artırır." },
      { q: "Bırakmak için destek nereden alınır?", a: "ALO 171 Sigara Bırakma Danışma Hattı ücretsizdir; sigara bırakma polikliniklerinde davranışsal destek ve gerektiğinde ilaç tedavisi sağlanır." },
    ],
  },
  "su-rehberi": {
    faqs: [
      { q: "Yaşa göre su ihtiyacı değişir mi?", a: "Evet — bebeklerde kg başına ihtiyaç en yüksektir (100-150 ml/kg), çocuklarda kademeli azalır, yetişkinlerde 30-35 ml/kg'a oturur. Yaşlılarda susama hissi azaldığı için bilinçli tüketim önemlidir." },
      { q: "Suyu ne zaman içmek daha iyi?", a: "Gün içine yaymak esastır; sabah uyanınca ve öğünlerden önce birer bardak pratik bir düzendir. Egzersizden önce, sırasında ve sonrasında ek sıvı alın." },
    ],
  },
  "tansiyon-kategori": {
    faqs: [
      { q: "Tansiyon değerleri nasıl sınıflanır?", a: "Genel sınıflama: <120/80 normal, 120-139/80-89 yüksek-normal, 140-159/90-99 evre 1 hipertansiyon, 160+/100+ evre 2. Tek ölçüm tanı koydurmaz; farklı günlerde tekrarlanan ölçümler esastır." },
      { q: "Tansiyon nasıl doğru ölçülür?", a: "5 dakika dinlendikten sonra, oturur pozisyonda, kol kalp hizasında, konuşmadan ölçün. Ölçümden 30 dk önce kafein ve sigaradan kaçının; iki ölçümün ortalamasını alın." },
      { q: "Büyük-küçük tansiyon farkı ne anlama gelir?", a: "Büyük (sistolik) kalbin kasılma, küçük (diyastolik) gevşeme basıncıdır. Nabız basıncı denen fark normalde 30-50 mmHg'dir; belirgin geniş fark damar sertliğine işaret edebilir." },
    ],
  },
  "uyku-dongu": {
    howItWorks: [
      "Kalkmak istediğiniz saati girin.",
      "90 dakikalık uyku döngüleri geriye sayılarak (4-6 döngü) ideal yatış saatleri listelenir; uykuya dalma payı olarak 15 dk eklenir.",
    ],
    faqs: [
      { q: "Uyku döngüsü nedir, neden 90 dakika?", a: "Uyku; hafif, derin ve REM evrelerinden oluşan ~90 dakikalık döngüler halinde ilerler. Döngü ortasında (özellikle derin uykuda) uyanmak sersemliğe yol açar; döngü sonunda uyanmak daha zindedir." },
      { q: "Kaç döngü uyumalıyım?", a: "Yetişkinler için 5-6 döngü (7,5-9 saat) idealdir; 4 döngü (6 saat) kısa dönemde alt sınırdır. Düzenli olarak aynı saatte yatıp kalkmak döngü kalitesini artırır." },
      { q: "90 dakika kuralı herkeste aynı mı?", a: "Ortalamadır — kişisel döngüler 80-110 dakika arasında değişebilir. Alarmsız uyandığınız hafta sonu düzeninizi gözlemleyerek kendi döngünüzü keşfedebilirsiniz." },
    ],
  },
  vo2max: {
    faqs: [
      { q: "VO2 max nedir?", a: "Vücudun dakikada kullanabildiği maksimum oksijen miktarıdır (ml/kg/dk) ve kardiyorespiratuvar kondisyonun altın standart göstergesidir. Yüksek VO2 max, uzun ömür ile güçlü ilişki gösterir." },
      { q: "Cooper testi nasıl yapılır?", a: "12 dakika boyunca koşabildiğiniz en uzun mesafeyi koşarsınız; VO2 max = (metre − 504,9) / 44,73 formülüyle tahmin edilir. 12 dakikada 2.400 m koşan kişinin VO2 max'ı ~42'dir." },
      { q: "VO2 max nasıl artırılır?", a: "Aralıklı yüksek yoğunluklu antrenman (HIIT) ve düzenli tempolu koşular en etkili yöntemlerdir. Antrenmansız kişilerde aylar içinde %15-25 artış mümkündür; yaşla birlikte doğal düşüş yıllık ~%1'dir." },
    ],
  },
  "yasam-beklentisi": {
    faqs: [
      { q: "Yaşam beklentisi nasıl hesaplanır?", a: "Ülke ortalama ömür tablolarından başlanır; sigara, egzersiz, beslenme, uyku ve kronik hastalık gibi faktörlerle istatistiksel düzeltme yapılır. Sonuç kişisel kesinlik değil, popülasyon temelli tahmindir." },
      { q: "Türkiye'de ortalama yaşam süresi kaç?", a: "TÜİK verilerine göre doğuşta beklenen yaşam süresi kadınlarda ~80, erkeklerde ~75 yıl civarındadır. Bugün belirli bir yaşa ulaşmış kişilerin beklentisi doğuştaki ortalamadan daha yüksektir." },
      { q: "Hangi alışkanlıklar ömrü en çok etkiler?", a: "Sigara içmemek (+~10 yıl fark), düzenli fiziksel aktivite, sağlıklı kilo, kaliteli uyku ve güçlü sosyal bağlar en büyük etkiye sahip değiştirilebilir faktörlerdir." },
    ],
  },
  "yuruyus-kalori": {
    faqs: [
      { q: "Yürüyüş kaç kalori yaktırır?", a: "Kabaca adım başına 0,04 kcal × (kilonuz/70) yakılır: 70 kg biri 10.000 adımda ~400 kcal harcar. Tempo, eğim ve kilo arttıkça yakım artar." },
      { q: "Günde 10.000 adım şart mı?", a: "10.000 pazarlama kökenli bir sayıdır; araştırmalar 7.000-8.000 adımda sağlık faydalarının büyük kısmının elde edildiğini gösterir. Mevcut seviyenizi kademeli artırmak en sürdürülebilir yaklaşımdır." },
      { q: "Kilo vermek için yürüyüş yeterli mi?", a: "Kalori açığı oluşturursa evet — günde 400-500 kcal'lik ek yakım, beslenme kontrolüyle birleşince haftada ~0,5 kg kayıp sağlayabilir. Kuvvet antrenmanı eklemek kas kaybını önler." },
    ],
  },
  "zayiflama-sure": {
    howItWorks: [
      "Mevcut kilonuzu, hedef kilonuzu ve günlük kalori açığınızı girin.",
      "1 kg yağ ≈ 7.700 kcal kabulüyle hedefe ulaşma süreniz hesaplanır.",
    ],
    faqs: [
      { q: "Kaç kaloriyle ne kadar sürede zayıflarım?", a: "1 kg yağ yaklaşık 7.700 kcal'dir. Günlük 500 kcal açık haftada ~0,45 kg, 10 kg için ~22 hafta demektir. Süreçte metabolik adaptasyonla hız bir miktar yavaşlar." },
      { q: "Haftada en fazla kaç kilo vermek sağlıklı?", a: "Haftada 0,5-1 kg sürdürülebilir ve kas kaybını sınırlayan hızdır. Çok düşük kalorili hızlı diyetler kas kaybı, besin yetersizliği ve geri alım riskini artırır." },
      { q: "Kilo verme neden zamanla yavaşlar?", a: "Kilo düştükçe vücudun harcadığı enerji de azalır ve başlangıçtaki açık küçülür. Ara ara kaloriyi yeniden hesaplamak ve aktiviteyi artırmak platoyu aşmaya yardım eder." },
    ],
  },
  "adet-takvimi": {
    faqs: [
      { q: "Adet döngüsü nasıl hesaplanır?", a: "Döngü, adetin ilk gününden bir sonraki adetin ilk gününe kadar sayılır; ortalama 28 gündür ancak 21-35 gün arası normaldir. Araç, son adet tarihi ve döngü uzunluğunuzdan gelecek dönemleri tahmin eder." },
      { q: "Adet gecikmesi ne zaman önemlidir?", a: "Düzenli döngüde 7 günü aşan gecikmede gebelik testi önerilir. Sık düzensizlik; stres, kilo değişimi, tiroid veya PCOS kaynaklı olabilir — tekrarlıyorsa hekime başvurun." },
    ],
  },
  "alkol-kalori": {
    faqs: [
      { q: "Alkol kaç kalori içerir?", a: "Saf alkol gram başına 7 kcal'dir — yağa (9) yakın, karbonhidrat ve proteinin (4) neredeyse iki katı. Hesap: ml × (alkol% / 100) × 0,789 × 7. Bir kutu bira ~150, bir kadeh şarap ~120-150 kcal'dir." },
      { q: "Alkol neden 'boş kalori' sayılır?", a: "Enerji verir ama vitamin, mineral ve doyuruculuk sağlamaz; üstelik vücut alkolü öncelikli yaktığından yağ yakımını geçici olarak durdurur." },
    ],
  },
  "kek-kalori": {
    faqs: [
      { q: "Bir dilim kek kaç kalori?", a: "Tarife göre değişir: sade kekin 100 gramı ~350-400 kcal, kremalı-çikolatalı pastalarda 450+ kcal olabilir. Araç, malzemelerin toplam kalorisini dilim sayısına bölerek dilim başı değeri verir." },
      { q: "Kekin kalorisini nasıl düşürebilirim?", a: "Şekeri 1/3 azaltmak, yağın bir kısmını yoğurt veya elma püresiyle değiştirmek ve beyaz unun yarısını tam buğdayla ikame etmek lezzetten büyük ödün vermeden kaloriyi %20-30 düşürür." },
    ],
  },
  "merdiven-kalori": {
    faqs: [
      { q: "Merdiven çıkmak kaç kalori yaktırır?", a: "Merdiven çıkma yaklaşık 8-10 MET'lik yoğun bir aktivitedir: 70 kg biri dakikada ~10 kcal, kat başına (~15 basamak) ~1-1,5 kcal harcar. İnişte yakım çıkışın üçte biri kadardır." },
      { q: "Asansör yerine merdiven ne kazandırır?", a: "Günde 5 kat çıkan 70 kg biri yılda binlerce kcal ekstra harcar; ayrıca kısa yoğun eforlar kalp-damar sağlığına düzenli katkı sağlar." },
    ],
  },
  "ovulasyon-takibi": {
    howItWorks: [
      "Son adet tarihinizi ve ortalama döngü uzunluğunuzu girin.",
      "Ovulasyon, bir sonraki adetten 14 gün öncesi olarak tahmin edilir; verimli pencere ovulasyondan 5 gün önce başlar.",
    ],
    faqs: [
      { q: "Ovulasyon (yumurtlama) günü nasıl hesaplanır?", a: "Luteal faz görece sabit olduğundan ovulasyon, beklenen sonraki adetten ~14 gün öncesidir. 28 günlük döngüde 14. gün, 32 günlük döngüde 18. güne denk gelir." },
      { q: "Verimli dönem (fertil pencere) ne zamandır?", a: "Sperm 5 güne kadar canlı kalabildiğinden verimli pencere ovulasyondan 5 gün önce başlar ve ovulasyon günüyle biter — toplam ~6 gün. En yüksek olasılık ovulasyondan önceki 2 gündür." },
      { q: "Takvim yöntemi ne kadar güvenilir?", a: "Düzensiz döngülerde sapma büyüktür; tahmin niteliğindedir. Daha isabetli takip için ovulasyon testi (LH), bazal vücut ısısı ve servikal mukus takibi birlikte kullanılabilir. Doğum kontrol yöntemi olarak tek başına güvenilir değildir." },
    ],
  },

  /* ------------------------------ HAMİLELİK ------------------------------ */
  "asi-takvimi": {
    faqs: [
      { q: "Bebeklerde aşı takvimi nasıldır?", a: "Sağlık Bakanlığı çizelgesine göre doğumda Hepatit B ile başlar; 2., 4., 6. aylarda karma aşılar (DaBT-İPA-Hib), KPA; 12. ayda KKK ve suçiçeği; 18-24 ayda pekiştirme dozları uygulanır. Araç, doğum tarihine göre kişisel takvimi çıkarır." },
      { q: "Aşı tarihini kaçırırsak ne yapmalıyız?", a: "Takvim kaldığı yerden devam eder — baştan başlanmaz. Aile sağlığı merkezinize başvurarak eksik dozların telafi planını yaptırabilirsiniz." },
      { q: "Aşılar ücretli mi?", a: "Ulusal aşı takvimindeki tüm aşılar aile sağlığı merkezlerinde ücretsizdir. Takvim dışı aşılar (rotavirüs, meningokok B vb.) hekim önerisiyle özel olarak yaptırılabilir." },
    ],
  },
  "bebek-buyume-takibi": {
    faqs: [
      { q: "Bebeğimin boy-kilosu normal mi?", a: "Büyüme, tek ölçümle değil persentil eğrisindeki seyirle değerlendirilir: 3-97 persentil arası geniş bir normal aralıktır. Önemli olan bebeğin kendi eğrisini istikrarla izlemesidir." },
      { q: "Persentil ne demek?", a: "Bebeğinizin aynı yaş ve cinsiyetteki 100 bebek arasındaki sırasını gösterir: 40. persentil kilo, bebeklerin %40'ından ağır olduğu anlamına gelir. Düşük persentil tek başına sorun demek değildir." },
      { q: "Bebekler ilk yıl ne kadar büyür?", a: "Ortalama olarak doğum kilosu 5-6. ayda ikiye, 1 yaşında üçe katlanır; boy ilk yılda ~25 cm uzar. Aralıklı hızlanma-yavaşlama dönemleri normaldir." },
    ],
  },
  "bebek-uyku-ihtiyaci": {
    faqs: [
      { q: "Bebekler günde kaç saat uyumalı?", a: "Yenidoğan 14-17, 4-11 ay 12-15, 1-2 yaş 11-14, 3-5 yaş 10-13 saat (gündüz uykuları dahil) önerilir. Kişisel farklar ±1-2 saat normaldir." },
      { q: "Gündüz uykuları ne zaman azalır?", a: "Çoğu bebek 6-8. ayda 3'ten 2 uykuya, 12-18. ayda tek öğle uykusuna geçer; öğle uykusu genellikle 3-5 yaş arasında bırakılır." },
    ],
  },
  "cocuk-boy-tahmini": {
    faqs: [
      { q: "Çocuğun yetişkin boyu nasıl tahmin edilir?", a: "Mid-parental yöntem kullanılır: erkek çocukta (anne + baba boyu + 13) / 2, kız çocukta (anne + baba − 13) / 2. Sonuç ±8-10 cm'lik genetik aralığın orta noktasıdır." },
      { q: "Tahmin ne kadar isabetlidir?", a: "Genetik potansiyeli gösterir; beslenme, uyku, sağlık durumu ve ergenlik zamanlaması gerçek boyu aynı aralık içinde etkiler. Kemik yaşı ölçümü hekimlerin kullandığı daha kesin yöntemdir." },
      { q: "Boy uzaması ne zaman durur?", a: "Kızlarda genellikle 15-16, erkeklerde 17-18 yaşında büyüme plakları kapanır. Ergenlik atağı kızlarda daha erken başlar ve biter." },
    ],
  },
};
