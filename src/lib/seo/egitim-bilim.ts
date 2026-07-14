import type { SeoExtra } from "./types";

/* Sınav + Matematik + Bilimsel hesaplayıcıları için SEO içerikleri */
export const egitimBilimContent: Record<string, SeoExtra> = {
  /* -------------------------------- SINAV -------------------------------- */
  "ayt-puan": {
    howItWorks: [
      "TYT ve AYT testlerindeki doğru-yanlış sayılarınızı girin.",
      "Net = Doğru − (Yanlış / 4) hesaplanır; yerleştirme puanında TYT %40, AYT %60 ağırlıkla katılır.",
    ],
    faqs: [
      { q: "AYT puanı nasıl hesaplanır?", a: "Her testte net = doğru − yanlış/4 bulunur; netler ÖSYM'nin o yılki standart sapma katsayılarıyla çarpılıp ham puana dönüştürülür. Yerleştirme puanı TYT %40 + AYT %60 ağırlığıyla oluşur; sonuç tahminidir, kesin katsayılar sınav sonrası belli olur." },
      { q: "AYT'de baraj kaç puandır?", a: "Güncel sistemde puan barajı kaldırılmıştır; tercih yapabilmek için sınava girmiş olmak yeterlidir. Programların kendi başarı sırası şartları (tıp, hukuk, mühendislik vb.) ise devam etmektedir." },
      { q: "OBP yerleştirmeye nasıl etki eder?", a: "Ortaöğretim başarı puanı (diploma notu × 5) 0,12 katsayısıyla eklenir — 100 diploma notu, yerleştirmeye 60 puan katkı demektir." },
    ],
  },
  "dgs-puan": {
    faqs: [
      { q: "DGS puanı nasıl hesaplanır?", a: "Sayısal ve sözel bölümlerdeki netleriniz (doğru − yanlış/4) standart puana çevrilir, ön lisans başarı puanınız (ÖBP) eklenerek SAY, SÖZ ve EA puanları oluşturulur. Katsayılar her yıl ÖSYM'ce yeniden belirlenir." },
      { q: "DGS ile hangi bölümlere geçilebilir?", a: "Ön lisans mezunları, ÖSYM'nin DGS kılavuzundaki tablolara göre alanlarıyla ilişkili lisans programlarına geçebilir. Her programın kendi kontenjanı ve puan türü vardır." },
    ],
  },
  "ehliyet-sinavi": {
    faqs: [
      { q: "Ehliyet sınavında geçme notu kaçtır?", a: "50 soruluk e-sınavda her doğru 2 puandır; geçmek için en az 70 puan (35 doğru) gerekir. Yanlışlar doğruları götürmez." },
      { q: "Ehliyet sınavında kaç yanlış yapabilirim?", a: "En fazla 15 yanlış/boş hakkınız vardır — 35 ve üzeri doğru geçer. Sınav süresi 45 dakikadır." },
      { q: "Sınavdan kalırsam ne olur?", a: "4 sınav hakkınız vardır; kalınan her sınav için yeniden ücret yatırılır. Dört hakta da başarısız olunursa kurs kaydı yenilenir." },
    ],
  },
  "ekpss-puan": {
    faqs: [
      { q: "EKPSS puanı nasıl hesaplanır?", a: "Genel yetenek ve genel kültür testlerindeki netler, engel grubu ve eğitim düzeyine göre ayrı normlarla standart puana dönüştürülür. Yanlışlar doğruyu götürmez." },
      { q: "EKPSS kaç yıl geçerli?", a: "EKPSS sonuçları, yeni sınav yapılana kadar (tipik olarak 2 yıl) geçerlidir; hem kadrolu atama hem kura yöntemiyle yerleştirmede kullanılır." },
    ],
  },
  "iyos-puan": {
    faqs: [
      { q: "İYÖS (YÖS) nedir?", a: "Uluslararası öğrencilerin Türkiye'deki üniversitelere kabulü için yapılan sınavdır; ağırlıkla temel öğrenme becerileri (IQ) ve matematik sorularından oluşur. Her üniversite kendi YÖS'ünü yapabilir veya diğerlerinin sonucunu kabul edebilir." },
      { q: "YÖS puanı nasıl hesaplanır?", a: "Üniversiteye göre değişmekle birlikte genellikle net sayısı 100'lük sisteme ölçeklenir; bazı üniversiteler yanlışları kısmen götürür. Başvurduğunuz üniversitenin kılavuzunu esas alın." },
    ],
  },
  "kpss-puan": {
    howItWorks: [
      "Genel yetenek ve genel kültür (lisans için ayrıca alan) doğru-yanlışlarınızı girin.",
      "Net = Doğru − Yanlış/4 hesaplanır ve ÖSYM'nin standart puan yöntemine göre tahmini KPSS puanınız bulunur.",
    ],
    faqs: [
      { q: "KPSS P3 puanı nedir?", a: "Lisans mezunlarının genel yetenek + genel kültür oturumundan hesaplanan temel puandır; B grubu kadrolara (memurluk) yerleştirmede kullanılır. P93 ön lisans, P94 lise mezunlarının karşılığıdır." },
      { q: "KPSS'de kaç net kaç puan eder?", a: "Puan, o yılki ortalama ve standart sapmaya bağlı olduğundan sabit bir karşılık yoktur; kabaca 50-55 net 75-80 puana denk gelir. Araç son yılların istatistikleriyle tahmin üretir." },
      { q: "KPSS puanı kaç yıl geçerli?", a: "Lisans düzeyi KPSS puanları iki yıl (sınav dönemine göre), ön lisans/lise puanları da sonraki sınava kadar geçerlidir. A grubu kadrolarda kurumlar güncel puan isteyebilir." },
    ],
  },
  "lgs-puan": {
    faqs: [
      { q: "LGS puanı nasıl hesaplanır?", a: "Sözel (Türkçe, inkılap, din, İngilizce) ve sayısal (matematik, fen) testlerin netleri, MEB'in belirlediği ağırlık katsayılarıyla çarpılıp 100-500 aralığında merkezi sınav puanına dönüştürülür. Üç yanlış bir doğruyu götürür." },
      { q: "LGS'de yüzdelik dilim mi puan mı önemli?", a: "Tercihlerde asıl belirleyici yüzdelik dilimdir — okullar taban puanla değil, aldıkları öğrencinin dilimine göre sıralanır. Nitelikli okullar genellikle ilk %1-5 diliminden öğrenci alır." },
      { q: "Sınavla öğrenci almayan okullara yerleşme nasıl olur?", a: "Adrese dayalı yerel yerleştirmeyle yapılır; LGS puanı yalnızca sınavla öğrenci alan okullar için gereklidir." },
    ],
  },
  "msu-puan": {
    faqs: [
      { q: "MSÜ sınavı puanı nasıl hesaplanır?", a: "MSÜ, TYT formatında (Türkçe, matematik, fen, sosyal) yapılır; net = doğru − yanlış/4 üzerinden standart puan hesaplanır. Askeri öğrenci adaylığının ilk aşamasıdır." },
      { q: "MSÜ'den sonra süreç nasıl ilerler?", a: "Puan sıralamasına göre adaylar ikinci seçim aşamalarına (fiziki yeterlilik, mülakat, sağlık raporu) çağrılır. Nihai yerleştirme bu aşamaların bileşik sonucuna göre yapılır." },
    ],
  },
  "pmyo-puan": {
    faqs: [
      { q: "PMYO puanı nasıl hesaplanır?", a: "TYT puanının %70'i, fiziksel yeterlilik sınavının %15'i ve mülakat puanının %15'i toplanır. Başvuru için TYT'den ilan edilen taban puanı aşmak gerekir." },
      { q: "PMYO başvuru şartları nelerdir?", a: "Türkiye Cumhuriyeti vatandaşı olmak, yaş sınırı içinde olmak (genellikle 18-26), boy-kilo oranı şartlarını sağlamak ve güvenlik soruşturmasından geçmek temel koşullardır; güncel şartlar her yıl Polis Akademisi kılavuzunda ilan edilir." },
    ],
  },
  "tus-puan": {
    faqs: [
      { q: "TUS puanı nasıl hesaplanır?", a: "Temel bilimler ve klinik bilimler testlerindeki netler standart puana dönüştürülür; K.Puan bunların ortalamasından oluşur. Uzmanlık dallarına yerleştirme, dal bazlı puan ve tercih sırasına göre yapılır." },
      { q: "TUS'ta baraj kaç puandır?", a: "Her iki testten de 45 ve üzeri temel puan almak yerleştirme için ön şarttır. Popüler dallarda (radyoloji, dermatoloji, göz vb.) gereken puan barajın çok üzerindedir." },
    ],
  },
  "yds-ales-puan": {
    faqs: [
      { q: "YDS puanı nasıl hesaplanır?", a: "80 soruluk sınavda her doğru 1,25 puandır; yanlışlar götürmez. 90+ (A), 80-89 (B), 70-79 (C) şeklinde seviyelendirilir ve akademik/kamu başvurularında seviye şartı aranır." },
      { q: "ALES puanı nasıl hesaplanır, kaç geçerli?", a: "Sayısal ve sözel netler standart puana çevrilerek SAY, SÖZ, EA puanları oluşturulur; sonuçlar 5 yıl geçerlidir. Lisansüstü başvurularının çoğu en az 55 puan ister." },
      { q: "YDS ile YÖKDİL farkı nedir?", a: "YDS genel yabancı dil sınavıdır; YÖKDİL akademik alanlara (fen, sağlık, sosyal) özel kelime ve metinler içerir. Kabul eden kurumlar farklılık gösterebilir — başvuracağınız kurumun şartını kontrol edin." },
    ],
  },
  "yks-dil-puan": {
    faqs: [
      { q: "YKS DİL puanı nasıl hesaplanır?", a: "YDT'deki (80 soru) yabancı dil netiniz %75, TYT puanınız %25 ağırlıkla birleşir. Net = doğru − yanlış/4 kuralı burada da geçerlidir." },
      { q: "DİL puanıyla hangi bölümlere girilir?", a: "İngiliz/Alman/Fransız dili ve edebiyatı, mütercim-tercümanlık, dil öğretmenlikleri ve bazı uluslararası ilişkiler programları DİL puanıyla öğrenci alır." },
    ],
  },

  /* ------------------------------ MATEMATİK ------------------------------ */
  "anket-oran": {
    faqs: [
      { q: "Anket sonucu yüzdeye nasıl çevrilir?", a: "Oran = (Seçeneği işaretleyen / Toplam katılımcı) × 100. Araç ayrıca örneklem büyüklüğüne göre hata payını (güven aralığını) hesaplar." },
      { q: "Hata payı nedir?", a: "Örneklemden elde edilen oranın gerçek popülasyon değerinden ne kadar sapabileceğini gösterir; %95 güvenle hata payı ≈ 0,98/√n'dir. 400 kişilik ankette ±%4,9'dur." },
    ],
  },
  "denklem-cozucu": {
    howItWorks: [
      "ax² + bx + c = 0 formundaki katsayıları girin.",
      "Diskriminant Δ = b² − 4ac hesaplanır; Δ'nın işaretine göre iki gerçek, çift kök veya karmaşık kökler bulunur.",
    ],
    faqs: [
      { q: "İkinci dereceden denklem nasıl çözülür?", a: "Kökler x = (−b ± √Δ) / 2a formülüyle bulunur; Δ = b² − 4ac. Δ > 0 ise iki farklı gerçek kök, Δ = 0 ise çakışık kök, Δ < 0 ise gerçek kök yoktur (karmaşık kökler vardır)." },
      { q: "Diskriminant ne işe yarar?", a: "Köklerin doğasını çözmeye başlamadan söyler: işareti kök sayısını, değeri köklerin birbirine uzaklığını belirler. Vieta bağıntılarıyla kökler toplamı −b/a, çarpımı c/a olarak da kontrol edilebilir." },
    ],
  },
  "dogum-gunu-paradoksu": {
    faqs: [
      { q: "Doğum günü paradoksu nedir?", a: "Bir grupta iki kişinin aynı gün doğmuş olma olasılığının şaşırtıcı hızla artmasıdır: 23 kişide %50'yi, 70 kişide %99,9'u aşar. Hesap, tümleyen olasılıkla yapılır: P = 1 − (365/365 × 364/365 × …)." },
      { q: "Neden bu kadar hızlı artıyor?", a: "Kıyas kişi sayısıyla değil, ikili eşleşme sayısıyla büyür: 23 kişide C(23,2) = 253 farklı çift vardır. Sezgimiz kişi sayısına odaklandığı için sonuç paradoks gibi görünür." },
    ],
  },
  "faktoriyel-permutasyon": {
    howItWorks: [
      "n ve r değerlerini girin.",
      "n! (faktöriyel), P(n,r) = n!/(n−r)! ve C(n,r) = n!/(r!(n−r)!) birlikte hesaplanır.",
    ],
    faqs: [
      { q: "Permütasyon ile kombinasyon farkı nedir?", a: "Permütasyonda sıra önemlidir (şifre, sıralama), kombinasyonda değildir (takım seçimi, loto). 5 kişiden 3'ünü sıralamak P(5,3)=60, sadece seçmek C(5,3)=10 farklı yolla yapılır." },
      { q: "0! neden 1'e eşittir?", a: "Boş kümenin tek bir düzenlenişi vardır ve n! = n × (n−1)! bağıntısının n=1 için tutarlı olması 0! = 1 gerektirir." },
    ],
  },
  "geometri-alan-cevre": {
    faqs: [
      { q: "Temel alan formülleri nelerdir?", a: "Kare a², dikdörtgen a×b, üçgen (taban×yükseklik)/2, daire πr², yamuk (a+c)×h/2. Araç şekli seçip ölçüleri girince alan ve çevreyi birlikte verir." },
      { q: "Çevre ile alan neden farklı büyür?", a: "Kenarlar 2 katına çıkınca çevre 2, alan 4 katına çıkar (kare-küp yasası). Bu yüzden büyük arsalarda çevre/alan oranı düşer — çit maliyeti alan başına azalır." },
    ],
  },
  "istatistik-ortalama": {
    howItWorks: [
      "Sayıları virgül veya boşlukla ayırarak girin.",
      "Aritmetik ortalama, medyan, mod, varyans ve standart sapma birlikte hesaplanır.",
    ],
    faqs: [
      { q: "Ortalama, medyan ve mod arasındaki fark nedir?", a: "Ortalama toplam/adet; medyan sıralı dizinin ortanca değeri; mod en sık tekrar edendir. Uç değerler ortalamayı çarpıtır — gelir gibi çarpık dağılımlarda medyan daha temsilîdir." },
      { q: "Standart sapma ne anlatır?", a: "Verilerin ortalamadan tipik sapma miktarıdır: σ = √(Σ(x−μ)²/n). Küçük sapma verilerin kümelendiğini, büyük sapma dağınıklığı gösterir. Normal dağılımda verilerin ~%68'i ±1σ aralığındadır." },
    ],
  },
  "karekok-hesap": {
    faqs: [
      { q: "Karekök hesaplamanın pratik yolu var mı?", a: "Tam kare komşularından tahmin edilir: √50, √49=7 ile √64=8 arasında ve 7'ye yakındır (≈7,07). Araç kare, küp, karekök ve küpkökü tam hassasiyetle verir." },
      { q: "Negatif sayının karekökü alınır mı?", a: "Gerçek sayılarda alınamaz; karmaşık sayılarda √(−a) = i√a olarak tanımlıdır. Küpkök ise negatif sayılar için gerçekte tanımlıdır: ∛(−8) = −2." },
    ],
  },
  "karisim-problemi": {
    faqs: [
      { q: "Karışım problemi nasıl çözülür?", a: "Madde miktarı korunumu yazılır: (m₁×o₁ + m₂×o₂) = (m₁+m₂)×hedef. Buradan gereken ikinci miktar x = m₁(o₁−h)/(h−o₂) bulunur. Araç adımları göstererek çözer." },
      { q: "Hedef oran neden iki karışımın arasında olmalı?", a: "İki çözeltiyi karıştırınca sonuç daima oranların arasında bir değer alır — %20 ile %50'yi karıştırıp %60 elde edemezsiniz. Aralık dışı hedefte problem çözümsüzdür." },
    ],
  },
  "kombin-basit": {
    faqs: [
      { q: "C(n,r) hızlıca nasıl hesaplanır?", a: "C(n,r) = n × (n−1) × … × (n−r+1) / r!. Örneğin C(10,3) = 10×9×8 / 6 = 120. Simetri özelliği işi kısaltır: C(n,r) = C(n,n−r)." },
      { q: "Pascal üçgeniyle ilişkisi nedir?", a: "Pascal üçgeninin n. satır r. elemanı C(n,r)'dir ve her sayı üstündeki iki sayının toplamıdır: C(n,r) = C(n−1,r−1) + C(n−1,r)." },
    ],
  },
  logaritma: {
    faqs: [
      { q: "Logaritma nedir?", a: "Üs almanın tersidir: log_b(x), b'nin kaçıncı kuvvetinin x ettiğini söyler. log₁₀(1000) = 3, log₂(8) = 3, ln e = 1. Taban dönüşümü: log_b(x) = ln x / ln b." },
      { q: "Logaritma gerçek hayatta nerede kullanılır?", a: "Deprem şiddeti (Richter), ses düzeyi (desibel), pH, bileşik faizde katlanma süresi ve algoritma karmaşıklığı (O(log n)) logaritmik ölçeklerdir — her birim artış 10 kat (veya taban kadar) büyümeyi temsil eder." },
    ],
  },
  "loto-ihtimali": {
    faqs: [
      { q: "Sayısal Loto'yu tutturma olasılığı nedir?", a: "90 sayıdan 6'sını bilmek 1 / C(90,6) = 1 / 622.614.630'dur. Araç, farklı oyun formatları (Süper Loto 60/6, Şans Topu vb.) için olasılıkları hesaplar." },
      { q: "Daha çok kolon oynamak kazanma şansını artırır mı?", a: "Doğrusal artırır ama taban o kadar küçüktür ki pratik fark önemsizdir: 100 kolon bile Sayısal Loto'da ~6 milyonda 1 şans demektir. Her çekiliş bağımsızdır; 'çıkmamış sayı' avantajı yoktur." },
    ],
  },
  "oran-oranti": {
    faqs: [
      { q: "Orantı (üç bilinenle dördüncüyü bulma) nasıl çözülür?", a: "a/b = c/x eşitliğinde içler-dışlar çarpımı yapılır: x = b×c/a. 3 kg elma 90 ₺ ise 5 kg = 90×5/3 = 150 ₺." },
      { q: "Doğru orantı ile ters orantı farkı nedir?", a: "Doğru orantıda biri artınca diğeri de artar (kg-fiyat); ters orantıda biri artınca diğeri azalır (işçi sayısı-süre). Ters orantıda çarpımlar eşitlenir: a×b = sabit." },
    ],
  },
  "pisagor-teoremi": {
    faqs: [
      { q: "Pisagor teoremi nedir?", a: "Dik üçgende dik kenarların kareleri toplamı hipotenüsün karesine eşittir: a² + b² = c². 3-4-5, 5-12-13 ve 8-15-17 en bilinen tam sayılı üçlülerdir." },
      { q: "Pisagor günlük hayatta nerede kullanılır?", a: "İki nokta arası kuş uçuşu mesafe, merdivenin duvara güvenli yaslanma boyu, TV ekran köşegeninden en-boy hesabı ve inşaatta dik açı kontrolü (3-4-5 ipi) tipik kullanımlardır." },
    ],
  },
  "rastgele-sayi": {
    faqs: [
      { q: "Rastgele sayılar nasıl üretilir?", a: "Araç, tarayıcının kriptografik rastgelelik kaynağını (crypto.getRandomValues) kullanır — çekiliş ve kura için adil, öngörülemez sonuç verir. Sayılar cihazınızda üretilir, sunucuya gönderilmez." },
      { q: "Aynı sayı tekrar çıkabilir mi?", a: "Tekrarlı modda evet — her çekim bağımsızdır. Tekrarsız modda ise seçilen aralıktan her sayı yalnızca bir kez gelir (çekiliş torbası mantığı)." },
    ],
  },
  "roma-rakami": {
    faqs: [
      { q: "Roma rakamları nasıl okunur?", a: "I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Küçük sembol büyüğün önündeyse çıkarılır: IV=4, IX=9, XL=40, CM=900. MMXXVI = 2026." },
      { q: "Roma rakamlarında sıfır ve büyük sayılar var mı?", a: "Sıfır kavramı yoktur; standart gösterim 3999 (MMMCMXCIX) ile sınırlıdır. Daha büyük sayılar için üst çizgi (bin katı) kullanılırdı: V̄ = 5000." },
    ],
  },
  trigonometri: {
    faqs: [
      { q: "Sinüs, kosinüs ve tanjant nedir?", a: "Dik üçgende açıya göre oranlardır: sin = karşı/hipotenüs, cos = komşu/hipotenüs, tan = karşı/komşu. 30°-45°-60° değerleri (1/2, √2/2, √3/2 ailesi) en sık kullanılanlardır." },
      { q: "Derece ile radyan farkı nedir?", a: "Tam tur 360° = 2π radyandır; 1 rad ≈ 57,3°. Dönüşüm: rad = derece × π/180. Bilimsel hesaplarda ve türev formüllerinde radyan esastır." },
    ],
  },
  "uslu-karekok": {
    faqs: [
      { q: "Üslü sayı kuralları nelerdir?", a: "Çarpımda üsler toplanır (aᵐ×aⁿ=aᵐ⁺ⁿ), bölümde çıkarılır, üssün üssü çarpılır ((aᵐ)ⁿ=aᵐⁿ). Negatif üs tersini alır: a⁻ⁿ = 1/aⁿ; a⁰ = 1 (a≠0)." },
      { q: "Kesirli üs ne demektir?", a: "Kök anlamına gelir: a^(1/n) = ⁿ√a, a^(m/n) = ⁿ√(aᵐ). Örneğin 8^(2/3) = (∛8)² = 4." },
    ],
  },
  "yas-problemi": {
    faqs: [
      { q: "Yaş problemleri nasıl çözülür?", a: "Bilinmeyene x deyip yaş farkının sabit kaldığı kullanılır: 'kat' ilişkisinde Küçük = Fark / (Kat − 1). Baba 30 yaş büyük ve 3 katıysa: çocuk 30/2 = 15." },
      { q: "Yaş farkı neden hep sabittir?", a: "İki kişi de her yıl aynı miktarda yaşlandığından aralarındaki fark hiç değişmez — problemlerin çoğu bu değişmezlik üzerine kurulur; kat ilişkisi ise zamanla değişir." },
    ],
  },

  /* ------------------------------- BİLİMSEL ------------------------------ */
  "belirli-integral": {
    faqs: [
      { q: "Belirli integral neyi hesaplar?", a: "f(x) eğrisi ile x ekseni arasında, a'dan b'ye kadar olan işaretli alanı verir. Fizikte yol, iş ve olasılıkta yoğunluktan olasılık hesaplamanın temelidir." },
      { q: "Simpson ve trapez yöntemi nedir?", a: "Analitik çözümü zor integralleri sayısal yaklaşıkla hesaplar: trapez eğriyi doğru parçalarıyla, Simpson parabollerle örer. Simpson genellikle aynı adım sayısında çok daha isabetlidir." },
    ],
  },
  "denklem-sistemi-2x2": {
    howItWorks: [
      "a₁x + b₁y = c₁ ve a₂x + b₂y = c₂ katsayılarını girin.",
      "Cramer kuralıyla determinantlar üzerinden x ve y bulunur; determinant sıfırsa sistemin tek çözümü yoktur.",
    ],
    faqs: [
      { q: "İki bilinmeyenli denklem sistemi nasıl çözülür?", a: "Yerine koyma, yok etme veya Cramer kuralı kullanılır. Cramer: x = (c₁b₂−b₁c₂)/D, y = (a₁c₂−c₁a₂)/D; D = a₁b₂−b₁a₂ ana determinanttır." },
      { q: "Determinant sıfır çıkarsa ne olur?", a: "Doğrular ya paraleldir (çözüm yok) ya da çakışıktır (sonsuz çözüm). Hangisi olduğunu sabit terimlerin oranı belirler." },
    ],
  },
  "denklem-sistemi-3x3": {
    faqs: [
      { q: "Üç bilinmeyenli sistem nasıl çözülür?", a: "Cramer kuralı 3×3 determinantlarla uygulanır veya Gauss eliminasyonu ile kademeli yok etme yapılır. Araç, katsayı matrisinin determinantını ve x, y, z değerlerini adımlarıyla verir." },
      { q: "Sistemin çözümü olup olmadığını nasıl anlarım?", a: "Ana determinant D ≠ 0 ise tek çözüm vardır. D = 0 iken pay determinantları da sıfırsa sonsuz çözüm, değilse çözümsüzdür." },
    ],
  },
  "fonksiyon-tablo": {
    faqs: [
      { q: "Fonksiyon değer tablosu ne işe yarar?", a: "f(x)'in seçilen aralıktaki değerlerini listeler; grafiğin kabaca gidişatını, işaret değişimlerini (kök civarı) ve artış-azalışı görmenizi sağlar." },
      { q: "Tabloda kök nasıl fark edilir?", a: "Ardışık iki x değerinde f işaret değiştiriyorsa (biri +, biri −) arada en az bir kök vardır — bu, ara değer teoreminin pratik kullanımıdır." },
    ],
  },
  "kok-bulucu": {
    faqs: [
      { q: "Newton-Raphson yöntemi nasıl çalışır?", a: "Tahmin noktasındaki teğetin x eksenini kestiği yer yeni tahmindir: xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ). Uygun başlangıçta karesel hızda (her adımda basamak sayısı ikiye katlanarak) yakınsar." },
      { q: "Bisection (ikiye bölme) ne zaman tercih edilir?", a: "İşaret değiştiren bir aralık verildiğinde garantili ama yavaş yakınsar. Newton türev gerektirir ve kötü başlangıçta ıraksayabilir; güvenilirlik önceliklinizse bisection, hız önceliklinizse Newton uygundur." },
    ],
  },
  "kompleks-sayi": {
    faqs: [
      { q: "Kompleks (karmaşık) sayı nedir?", a: "a + bi biçimindeki sayılardır; i² = −1. Modül |z| = √(a²+b²) uzunluğu, argüman açıyı verir. Elektrik mühendisliğinde AC devre analizi ve sinyal işlemede temel araçtır." },
      { q: "Kompleks sayılar nasıl çarpılır?", a: "Cebirsel açılımla (i²=−1 kullanılarak) veya kutupsal formda modüller çarpılıp açılar toplanarak: |z₁z₂| = |z₁||z₂|, arg(z₁z₂) = arg z₁ + arg z₂." },
    ],
  },
  "limit-hesaplama": {
    faqs: [
      { q: "Limit nedir?", a: "x bir değere yaklaşırken f(x)'in yaklaştığı değerdir — fonksiyon o noktada tanımsız olsa bile limit var olabilir. Türev ve süreklilik kavramlarının temelidir." },
      { q: "Sol ve sağ limit neden ayrı bakılır?", a: "Limitin var olması için iki yönden yaklaşımın aynı değere gitmesi gerekir. |x|/x fonksiyonunda 0'a soldan −1, sağdan +1 gidildiğinden limit yoktur." },
    ],
  },
  "matris-2x2": {
    faqs: [
      { q: "2×2 matris determinantı nasıl hesaplanır?", a: "det = ad − bc (çapraz çarpımlar farkı). Determinant, matrisin temsil ettiği dönüşümün alanı kaç katına çıkardığını gösterir; sıfırsa matris tersinmezdir." },
      { q: "Matris tersi ne işe yarar?", a: "A⁻¹, AX = B sistemini X = A⁻¹B ile çözmeyi sağlar. 2×2'de ters: (1/det) × [d −b; −c a]. Grafik dönüşümlerini geri almak ve şifreleme gibi alanlarda kullanılır." },
    ],
  },
  molarite: {
    faqs: [
      { q: "Molarite nasıl hesaplanır?", a: "Önce mol sayısı bulunur (n = kütle / mol kütlesi), sonra hacme bölünür: M = n / V(litre). 58,5 g NaCl'yi 2 L suda çözmek 0,5 M çözelti verir." },
      { q: "Seyreltme hesabı nasıl yapılır?", a: "M₁V₁ = M₂V₂ bağıntısı kullanılır: 5 M stoktan 1 M'lik 100 mL hazırlamak için 20 mL stok alınıp 100 mL'ye tamamlanır." },
    ],
  },
  "newton-hareket": {
    faqs: [
      { q: "Düzgün ivmeli hareket denklemleri nelerdir?", a: "v = v₀ + at, x = v₀t + ½at², v² = v₀² + 2ax. Üç denklemden ikisi bilinince tüm hareket çözülür; araç eksik değişkeni otomatik bulur." },
      { q: "Serbest düşmede hangi değerler kullanılır?", a: "v₀ = 0 ve a = g ≈ 9,81 m/s² alınır. Yükseklikten düşme süresi t = √(2h/g), çarpma hızı v = √(2gh) olur — 20 m'den düşen cisim ~2 s sonra ~19,8 m/s ile çarpar." },
    ],
  },
  "ohm-watt": {
    faqs: [
      { q: "Ohm yasası nedir?", a: "Gerilim, akım ve direnç ilişkisidir: V = I × R. Güç ise P = V × I = I²R = V²/R ile bulunur. İkisi bilinince diğer tüm değerler türetilir." },
      { q: "Evdeki cihaz kaç amper çeker?", a: "I = P / V: 220 V şebekede 2.200 W'lık ısıtıcı 10 A çeker. Sigorta ve kablo kesiti bu akıma göre seçilmelidir — 16 A'lık hat ~3.500 W taşır." },
    ],
  },
  "ph-hesaplama": {
    faqs: [
      { q: "pH nasıl hesaplanır?", a: "pH = −log₁₀[H⁺]. 0,01 M HCl'de pH = 2'dir. pH + pOH = 14 bağıntısıyla pOH'tan da geçilir. 7 nötr, altı asidik, üstü baziktir." },
      { q: "pH'ın 1 birim değişmesi ne demektir?", a: "Logaritmik ölçek olduğundan 10 kat asitlik farkı demektir: pH 3, pH 5'ten 100 kat daha asidiktir." },
    ],
  },
  "sayisal-turev": {
    faqs: [
      { q: "Sayısal türev nasıl hesaplanır?", a: "Merkezi fark formülüyle: f'(x) ≈ (f(x+h) − f(x−h)) / 2h; ikinci türev için f''(x) ≈ (f(x+h) − 2f(x) + f(x−h)) / h². Küçük h (10⁻⁶) ile analitik değere çok yaklaşılır." },
      { q: "Türev işareti neyi gösterir?", a: "f' > 0 artış, f' < 0 azalış, f' = 0 kritik nokta (tepe/çukur adayı) demektir. f'' işareti ise bükeyliği: pozitifse çukur (min), negatifse tepe (max)." },
    ],
  },
  "taylor-serisi": {
    faqs: [
      { q: "Taylor serisi nedir?", a: "Bir fonksiyonu, bir nokta etrafında polinomla temsil eder: f(x) ≈ Σ f⁽ᵏ⁾(a)(x−a)ᵏ/k!. Hesap makineleri sin, cos, eˣ gibi fonksiyonları bu seriyle hesaplar." },
      { q: "Kaç terim yeterlidir?", a: "Açılım noktasına yakın x'lerde birkaç terim yeter; uzaklaştıkça hata büyür. sin x için x − x³/6 yaklaşımı |x| < 0,5 rad bölgesinde binde birden az hata verir." },
    ],
  },
  "turev-integral": {
    faqs: [
      { q: "Polinom türevi nasıl alınır?", a: "Kuvvet kuralı: d/dx(axⁿ) = n·a·xⁿ⁻¹. Örneğin 3x⁴'ün türevi 12x³. Toplamın türevi terim terim alınır." },
      { q: "Polinom integrali nasıl alınır?", a: "Kuvvet kuralının tersi: ∫axⁿdx = a·xⁿ⁺¹/(n+1) + C. Türev alındığında sabitler kaybolduğundan belirsiz integralde +C eklenir." },
    ],
  },
  "vektor-3d": {
    faqs: [
      { q: "Nokta (skaler) çarpım ne verir?", a: "A·B = |A||B|cos θ — iki vektörün ne kadar aynı yönde olduğunu ölçer. Sıfırsa vektörler diktir; fizikte iş hesabı (W = F·d) tipik kullanımdır." },
      { q: "Çapraz (vektörel) çarpım ne verir?", a: "A×B, iki vektöre dik ve büyüklüğü |A||B|sin θ olan vektördür — paralelkenar alanına eşittir. Tork ve manyetik kuvvet hesaplarında kullanılır; sırası önemlidir (A×B = −B×A)." },
    ],
  },
};
