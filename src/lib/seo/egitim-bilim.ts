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
    detay: [
      "Yanlış cevabın doğruyu 1/4 oranında götürmesi, rastgele işaretlemeyi mantıksız kılmak için tasarlanmıştır — 4 şıklı bir soruda rastgele işaretleyen adayın beklenen neti istatistiksel olarak sıfıra yakınsar, bu yüzden hiç bilmediğiniz soruları boş bırakmak ile rastgele işaretlemek ortalamada aynı sonucu verir; yalnızca eleyebildiğiniz sorularda tahmin mantıklıdır.",
    ],
  },
  "dgs-puan": {
    faqs: [
      { q: "DGS puanı nasıl hesaplanır?", a: "Sayısal ve sözel bölümlerdeki netleriniz (doğru − yanlış/4) standart puana çevrilir, ön lisans başarı puanınız (ÖBP) eklenerek SAY, SÖZ ve EA puanları oluşturulur. Katsayılar her yıl ÖSYM'ce yeniden belirlenir." },
      { q: "DGS ile hangi bölümlere geçilebilir?", a: "Ön lisans mezunları, ÖSYM'nin DGS kılavuzundaki tablolara göre alanlarıyla ilişkili lisans programlarına geçebilir. Her programın kendi kontenjanı ve puan türü vardır." },
    ],
    detay: [
      "DGS kontenjanları YKS'ye göre çok daha dar olduğundan, aynı puanla girilebilecek bölüm sayısı YKS'dekinden belirgin azdır — bu yüzden 'DGS'de şu puanı alırsam şu bölüme girerim' hesabını yaparken önceki yılların DGS taban puanlarına bakmak, YKS taban puanlarına bakmaktan daha isabetlidir; iki sınavın taban puanları birbirinden bağımsızdır.",
    ],
  },
  "ehliyet-sinavi": {
    faqs: [
      { q: "Ehliyet sınavında geçme notu kaçtır?", a: "50 soruluk e-sınavda her doğru 2 puandır; geçmek için en az 70 puan (35 doğru) gerekir. Yanlışlar doğruları götürmez." },
      { q: "Ehliyet sınavında kaç yanlış yapabilirim?", a: "En fazla 15 yanlış/boş hakkınız vardır — 35 ve üzeri doğru geçer. Sınav süresi 45 dakikadır." },
      { q: "Sınavdan kalırsam ne olur?", a: "4 sınav hakkınız vardır; kalınan her sınav için yeniden ücret yatırılır. Dört hakta da başarısız olunursa kurs kaydı yenilenir." },
    ],
    detay: [
      "Sınavın 45 dakikalık süresi soru başına ortalama 54 saniye demektir — çoğu aday zaman sıkıntısı değil dikkatsizlik yüzünden yanlış yapar; soruları hızlı okumak yerine ilk okumada tuzak ifadeleri (örneğin 'yalnız', 'her zaman', 'hiçbir zaman' gibi kesin kelimeleri) işaretlemek yanlış sayısını azaltmanın en etkili yoludur.",
    ],
  },
  "ekpss-puan": {
    faqs: [
      { q: "EKPSS puanı nasıl hesaplanır?", a: "Genel yetenek ve genel kültür testlerindeki netler, engel grubu ve eğitim düzeyine göre ayrı normlarla standart puana dönüştürülür. Yanlışlar doğruyu götürmez." },
      { q: "EKPSS kaç yıl geçerli?", a: "EKPSS sonuçları, yeni sınav yapılana kadar (tipik olarak 2 yıl) geçerlidir; hem kadrolu atama hem kura yöntemiyle yerleştirmede kullanılır." },
    ],
    detay: [
      "EKPSS'de kadro tercihi iki farklı yolla yapılabilir: puan sıralamasıyla doğrudan yerleştirme ya da şartları taşıyan adaylar arasından kura — bazı kadrolar yalnızca kurayla dolduğundan, düşük puan alan bir adayın yüksek puanlı bir adaydan önce yerleşmesi mümkündür; bu iki yöntemin karıştırılmaması gerekir.",
    ],
  },
  "iyos-puan": {
    faqs: [
      { q: "İYÖS (YÖS) nedir?", a: "Uluslararası öğrencilerin Türkiye'deki üniversitelere kabulü için yapılan sınavdır; ağırlıkla temel öğrenme becerileri (IQ) ve matematik sorularından oluşur. Her üniversite kendi YÖS'ünü yapabilir veya diğerlerinin sonucunu kabul edebilir." },
      { q: "YÖS puanı nasıl hesaplanır?", a: "Üniversiteye göre değişmekle birlikte genellikle net sayısı 100'lük sisteme ölçeklenir; bazı üniversiteler yanlışları kısmen götürür. Başvurduğunuz üniversitenin kılavuzunu esas alın." },
    ],
    detay: [
      "Bazı üniversiteler kendi YÖS'ünü yapmak yerine merkezi bir sınavın (TR-YÖS gibi) sonucunu kabul eder — aynı puanla birden fazla üniversiteye başvurabileceğiniz için hangi sınavın hangi üniversitelerce tanındığını önceden araştırmak, ayrı ayrı her üniversite için sınava girme zorunluluğunu ortadan kaldırabilir.",
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
    detay: [
      "İki adayın ham neti aynı olsa bile farklı yıllarda aldıkları puan birbirinden farklı olabilir, çünkü standart puan sınavın o yılki genel zorluğuna ve katılımcı ortalamasına göre bağıl olarak hesaplanır — 'geçen yıl bu netle şu puanı almıştım' kıyası her yıl için geçerli bir referans değildir.",
    ],
  },
  "lgs-puan": {
    faqs: [
      { q: "LGS puanı nasıl hesaplanır?", a: "Sözel (Türkçe, inkılap, din, İngilizce) ve sayısal (matematik, fen) testlerin netleri, MEB'in belirlediği ağırlık katsayılarıyla çarpılıp 100-500 aralığında merkezi sınav puanına dönüştürülür. Üç yanlış bir doğruyu götürür." },
      { q: "LGS'de yüzdelik dilim mi puan mı önemli?", a: "Tercihlerde asıl belirleyici yüzdelik dilimdir — okullar taban puanla değil, aldıkları öğrencinin dilimine göre sıralanır. Nitelikli okullar genellikle ilk %1-5 diliminden öğrenci alır." },
      { q: "Sınavla öğrenci almayan okullara yerleşme nasıl olur?", a: "Adrese dayalı yerel yerleştirmeyle yapılır; LGS puanı yalnızca sınavla öğrenci alan okullar için gereklidir." },
    ],
    detay: [
      "Üç yanlışın bir doğruyu götürmesi (dörtte bir değil), LGS'yi diğer birçok sınavdan farklı kılar — bu, ihtimalle işaretlemenin LGS'de görece daha az riskli olduğu anlamına gelir; ancak yine de tamamen bilmediğiniz bir soruda rastgele işaretlemenin beklenen kazancı yine de sıfıra yakındır.",
    ],
  },
  "msu-puan": {
    faqs: [
      { q: "MSÜ sınavı puanı nasıl hesaplanır?", a: "MSÜ, TYT formatında (Türkçe, matematik, fen, sosyal) yapılır; net = doğru − yanlış/4 üzerinden standart puan hesaplanır. Askeri öğrenci adaylığının ilk aşamasıdır." },
      { q: "MSÜ'den sonra süreç nasıl ilerler?", a: "Puan sıralamasına göre adaylar ikinci seçim aşamalarına (fiziki yeterlilik, mülakat, sağlık raporu) çağrılır. Nihai yerleştirme bu aşamaların bileşik sonucuna göre yapılır." },
    ],
    detay: [
      "Yalnızca yazılı puan yüksek olması yerleşmeyi garantilemez — fiziki yeterlilik testinde elenen yüksek puanlı bir aday, ikinci aşamaya asla geçemez; bu yüzden sınava hazırlanırken yazılı çalışmayla birlikte fiziksel kondisyonu da paralel geliştirmek gerekir, süreci yalnızca akademik bir sınav gibi ele almak eksik bir strateji olur.",
    ],
  },
  "pmyo-puan": {
    faqs: [
      { q: "PMYO puanı nasıl hesaplanır?", a: "TYT puanının %70'i, fiziksel yeterlilik sınavının %15'i ve mülakat puanının %15'i toplanır. Başvuru için TYT'den ilan edilen taban puanı aşmak gerekir." },
      { q: "PMYO başvuru şartları nelerdir?", a: "Türkiye Cumhuriyeti vatandaşı olmak, yaş sınırı içinde olmak (genellikle 18-26), boy-kilo oranı şartlarını sağlamak ve güvenlik soruşturmasından geçmek temel koşullardır; güncel şartlar her yıl Polis Akademisi kılavuzunda ilan edilir." },
    ],
    detay: [
      "TYT ağırlığının %70 olması, PMYO'yu salt fiziksel bir seçme süreci değil esasen akademik bir sınav sonrası eleme yapan bir program haline getirir — birçok aday fiziksel yeterliliğe hazırlanmaya odaklanıp TYT'yi ikinci plana atar, oysa toplam puandaki ağırlığa bakıldığında akademik hazırlık asıl belirleyici kalemdir.",
    ],
  },
  "tus-puan": {
    faqs: [
      { q: "TUS puanı nasıl hesaplanır?", a: "Temel bilimler ve klinik bilimler testlerindeki netler standart puana dönüştürülür; K.Puan bunların ortalamasından oluşur. Uzmanlık dallarına yerleştirme, dal bazlı puan ve tercih sırasına göre yapılır." },
      { q: "TUS'ta baraj kaç puandır?", a: "Her iki testten de 45 ve üzeri temel puan almak yerleştirme için ön şarttır. Popüler dallarda (radyoloji, dermatoloji, göz vb.) gereken puan barajın çok üzerindedir." },
    ],
    detay: [
      "K.Puan'ın iki testin basit ortalaması olması, adayların bir testte zayıf olsa bile diğerinde telafi edebileceği anlamına gelir — ancak her iki testten de barajı geçmek ayrı ayrı bir zorunluluktur; yüksek K.Puan alsanız bile bir testte baraj altında kalırsanız yerleştirmeye giremezsiniz.",
    ],
  },
  "yds-ales-puan": {
    faqs: [
      { q: "YDS puanı nasıl hesaplanır?", a: "80 soruluk sınavda her doğru 1,25 puandır; yanlışlar götürmez. 90+ (A), 80-89 (B), 70-79 (C) şeklinde seviyelendirilir ve akademik/kamu başvurularında seviye şartı aranır." },
      { q: "ALES puanı nasıl hesaplanır, kaç geçerli?", a: "Sayısal ve sözel netler standart puana çevrilerek SAY, SÖZ, EA puanları oluşturulur; sonuçlar 5 yıl geçerlidir. Lisansüstü başvurularının çoğu en az 55 puan ister." },
      { q: "YDS ile YÖKDİL farkı nedir?", a: "YDS genel yabancı dil sınavıdır; YÖKDİL akademik alanlara (fen, sağlık, sosyal) özel kelime ve metinler içerir. Kabul eden kurumlar farklılık gösterebilir — başvuracağınız kurumun şartını kontrol edin." },
    ],
    detay: [
      "ALES'in beş yıl geçerli olması, sınavı erken alıp puanı 'stoklamayı' mümkün kılar — ancak bazı kurumlar yalnızca son 2-3 yıl içindeki sonuçları kabul edebilir; başvuru yapacağınız programın ilan metnini kontrol etmeden eski bir ALES sonucuna güvenmek başvurunun reddine yol açabilir.",
    ],
  },
  "yks-dil-puan": {
    faqs: [
      { q: "YKS DİL puanı nasıl hesaplanır?", a: "YDT'deki (80 soru) yabancı dil netiniz %75, TYT puanınız %25 ağırlıkla birleşir. Net = doğru − yanlış/4 kuralı burada da geçerlidir." },
      { q: "DİL puanıyla hangi bölümlere girilir?", a: "İngiliz/Alman/Fransız dili ve edebiyatı, mütercim-tercümanlık, dil öğretmenlikleri ve bazı uluslararası ilişkiler programları DİL puanıyla öğrenci alır." },
    ],
    detay: [
      "DİL puan türünü tercih eden aday sayısı SAY/EA/SÖZ'e göre çok daha azdır — bu, aynı dil netiyle bazı programlarda diğer puan türlerine göre nispeten daha yüksek başarı sırasına ulaşmayı kolaylaştırabilir; yabancı dilde güçlü olan adaylar için bu daha az rekabetçi havuz stratejik bir avantaj olabilir.",
    ],
  },

  /* ------------------------------ MATEMATİK ------------------------------ */
  "anket-oran": {
    faqs: [
      { q: "Anket sonucu yüzdeye nasıl çevrilir?", a: "Oran = (Seçeneği işaretleyen / Toplam katılımcı) × 100. Araç ayrıca örneklem büyüklüğüne göre hata payını (güven aralığını) hesaplar." },
      { q: "Hata payı nedir?", a: "Örneklemden elde edilen oranın gerçek popülasyon değerinden ne kadar sapabileceğini gösterir; %95 güvenle hata payı ≈ 0,98/√n'dir. 400 kişilik ankette ±%4,9'dur." },
    ],
    detay: [
      "Hata payı örneklem büyüklüğünün kareköküyle ters orantılı olduğundan, hatayı yarıya indirmek için örneklemi ikiye değil dörde katlamak gerekir — 400 kişilik anketten 1.600 kişilik ankete geçmek hata payını yaklaşık yarıya indirirken, 800 kişiye çıkarmak yalnızca küçük bir iyileşme sağlar; bu yüzden büyük örneklemlerin maliyeti getirisine göre hızla azalan getiri gösterir.",
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
    detay: [
      "Vieta bağıntıları, kökleri tek tek bulmadan onlar hakkında bilgi edinmenizi sağlar — örneğin kökler toplamının veya çarpımının işaretine bakarak iki kökün de pozitif mi, negatif mi yoksa zıt işaretli mi olduğunu, denklemi çözmeden önce kestirebilirsiniz; bu, sonucu bulduktan sonra hızlı bir doğrulama yöntemi olarak da kullanılır.",
    ],
  },
  "dogum-gunu-paradoksu": {
    faqs: [
      { q: "Doğum günü paradoksu nedir?", a: "Bir grupta iki kişinin aynı gün doğmuş olma olasılığının şaşırtıcı hızla artmasıdır: 23 kişide %50'yi, 70 kişide %99,9'u aşar. Hesap, tümleyen olasılıkla yapılır: P = 1 − (365/365 × 364/365 × …)." },
      { q: "Neden bu kadar hızlı artıyor?", a: "Kıyas kişi sayısıyla değil, ikili eşleşme sayısıyla büyür: 23 kişide C(23,2) = 253 farklı çift vardır. Sezgimiz kişi sayısına odaklandığı için sonuç paradoks gibi görünür." },
    ],
    detay: [
      "Bu paradoks yalnızca doğum günleri için değil, herhangi bir 'çakışma' sorusu için genelleşir — şifre çakışması (hash collision), aynı sınıfta aynı numarayı taşıyan öğrenci veya rastgele üretilen kimliklerin çakışma olasılığı hep aynı matematiksel yapıyı kullanır; bilgisayar biliminde 'doğum günü saldırısı' adıyla kriptografide doğrudan uygulama alanı bulur.",
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
    detay: [
      "Faktöriyel şaşırtıcı hızda büyür — 10! zaten 3,6 milyona, 20! yaklaşık 2,4 kentilyona (10¹⁸ mertebesinde) ulaşır; bu yüzden büyük n değerleri için gerçek permütasyon/kombinasyon sayısı sezgisel tahminlerin çok üzerine çıkar, bu durum özellikle şifre güvenliği ve olasılık problemlerinde 'sanıldığından çok daha güvenli/nadir' sonuçların altında yatan sebeptir.",
    ],
  },
  "geometri-alan-cevre": {
    faqs: [
      { q: "Temel alan formülleri nelerdir?", a: "Kare a², dikdörtgen a×b, üçgen (taban×yükseklik)/2, daire πr², yamuk (a+c)×h/2. Araç şekli seçip ölçüleri girince alan ve çevreyi birlikte verir." },
      { q: "Çevre ile alan neden farklı büyür?", a: "Kenarlar 2 katına çıkınca çevre 2, alan 4 katına çıkar (kare-küp yasası). Bu yüzden büyük arsalarda çevre/alan oranı düşer — çit maliyeti alan başına azalır." },
    ],
    detay: [
      "Bu ölçek yasası biyolojide de geçerlidir — bir hayvanın boyu 2 katına çıktığında yüzey alanı 4, hacim/kütle 8 katına çıkar; bu yüzden büyük hayvanların yüzey/hacim oranı küçüklerden düşüktür ve ısı kaybı daha yavaştır, filin küçük bir fareye göre nispeten daha az yemesinin geometrik sebebi tam olarak budur.",
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
    detay: [
      "Aynı ortalamaya sahip iki sınıf tamamen farklı performans gösterebilir — biri tüm öğrencilerin 65-75 arası toplandığı homojen bir sınıf, diğeri yarısı 40 yarısı 100 alan uçlarda toplanmış bir sınıf olabilir; ikisinin de ortalaması aynı (70) olsa bile standart sapmaları çok farklıdır ve bu fark yalnızca ortalamaya bakarak asla görülemez.",
    ],
  },
  "karekok-hesap": {
    faqs: [
      { q: "Karekök hesaplamanın pratik yolu var mı?", a: "Tam kare komşularından tahmin edilir: √50, √49=7 ile √64=8 arasında ve 7'ye yakındır (≈7,07). Araç kare, küp, karekök ve küpkökü tam hassasiyetle verir." },
      { q: "Negatif sayının karekökü alınır mı?", a: "Gerçek sayılarda alınamaz; karmaşık sayılarda √(−a) = i√a olarak tanımlıdır. Küpkök ise negatif sayılar için gerçekte tanımlıdır: ∛(−8) = −2." },
    ],
    detay: [
      "Karekök ile karenin ters işlem olması sezgisel görünse de tam simetrik değildir — √(x²) her zaman x değil |x| verir (örneğin √((−3)²) = √9 = 3, −3 değil); bu ayrım özellikle denklem çözerken 'her iki tarafın karekökünü almak' işleminde işaret hatalarına yol açabilir.",
    ],
  },
  "karisim-problemi": {
    faqs: [
      { q: "Karışım problemi nasıl çözülür?", a: "Madde miktarı korunumu yazılır: (m₁×o₁ + m₂×o₂) = (m₁+m₂)×hedef. Buradan gereken ikinci miktar x = m₁(o₁−h)/(h−o₂) bulunur. Araç adımları göstererek çözer." },
      { q: "Hedef oran neden iki karışımın arasında olmalı?", a: "İki çözeltiyi karıştırınca sonuç daima oranların arasında bir değer alır — %20 ile %50'yi karıştırıp %60 elde edemezsiniz. Aralık dışı hedefte problem çözümsüzdür." },
    ],
    detay: [
      "Bu mantık yalnızca okul problemlerine özgü değildir — mutfakta iki farklı tuzluluktaki suyu karıştırmak, kimyada iki asit çözeltisini seyreltmek, hatta finansta iki farklı getirili portföyü belirli oranlarda karıştırmak hep aynı ağırlıklı ortalama denklemine dayanır; formülü bir kez kavramak birçok farklı alanda işe yarar.",
    ],
  },
  "kombin-basit": {
    faqs: [
      { q: "C(n,r) hızlıca nasıl hesaplanır?", a: "C(n,r) = n × (n−1) × … × (n−r+1) / r!. Örneğin C(10,3) = 10×9×8 / 6 = 120. Simetri özelliği işi kısaltır: C(n,r) = C(n,n−r)." },
      { q: "Pascal üçgeniyle ilişkisi nedir?", a: "Pascal üçgeninin n. satır r. elemanı C(n,r)'dir ve her sayı üstündeki iki sayının toplamıdır: C(n,r) = C(n−1,r−1) + C(n−1,r)." },
    ],
    detay: [
      "Pascal üçgeni yalnızca kombinasyon hesaplamak için değil, (a+b)ⁿ binom açılımının katsayılarını doğrudan vermek için de kullanılır — n. satırdaki sayılar aynı zamanda binom açılımının katsayılarıdır, bu yüzden fizik ve mühendislikte yaklaşık hesaplamalarda (binom yaklaşımı) sıkça karşınıza çıkar.",
    ],
  },
  logaritma: {
    faqs: [
      { q: "Logaritma nedir?", a: "Üs almanın tersidir: log_b(x), b'nin kaçıncı kuvvetinin x ettiğini söyler. log₁₀(1000) = 3, log₂(8) = 3, ln e = 1. Taban dönüşümü: log_b(x) = ln x / ln b." },
      { q: "Logaritma gerçek hayatta nerede kullanılır?", a: "Deprem şiddeti (Richter), ses düzeyi (desibel), pH, bileşik faizde katlanma süresi ve algoritma karmaşıklığı (O(log n)) logaritmik ölçeklerdir — her birim artış 10 kat (veya taban kadar) büyümeyi temsil eder." },
    ],
    detay: [
      "Richter ölçeğinde 6 büyüklüğündeki bir deprem, 5 büyüklüğündekinden 10 kat daha güçlü sarsıntı ve yaklaşık 32 kat daha fazla enerji açığa çıkarır — logaritmik ölçekleri 'doğrusal' gibi okumak (6'nın 5'ten sadece biraz daha güçlü olduğunu sanmak), gerçek büyüklük farkını ciddi şekilde küçümsemeye yol açar.",
    ],
  },
  "loto-ihtimali": {
    faqs: [
      { q: "Sayısal Loto'yu tutturma olasılığı nedir?", a: "90 sayıdan 6'sını bilmek 1 / C(90,6) = 1 / 622.614.630'dur. Araç, farklı oyun formatları (Süper Loto 60/6, Şans Topu vb.) için olasılıkları hesaplar." },
      { q: "Daha çok kolon oynamak kazanma şansını artırır mı?", a: "Doğrusal artırır ama taban o kadar küçüktür ki pratik fark önemsizdir: 100 kolon bile Sayısal Loto'da ~6 milyonda 1 şans demektir. Her çekiliş bağımsızdır; 'çıkmamış sayı' avantajı yoktur." },
    ],
    detay: [
      "'Uzun süredir çıkmayan sayıyı oynamak' popüler bir strateji gibi görünse de matematiksel olarak temelsizdir — her çekiliş önceki çekilişlerden tamamen bağımsızdır (kumarcı yanılgısı olarak bilinir), yani bir sayının uzun süre çıkmamış olması bir sonraki çekilişte çıkma olasılığını artırmaz veya azaltmaz.",
    ],
  },
  "oran-oranti": {
    faqs: [
      { q: "Orantı (üç bilinenle dördüncüyü bulma) nasıl çözülür?", a: "a/b = c/x eşitliğinde içler-dışlar çarpımı yapılır: x = b×c/a. 3 kg elma 90 ₺ ise 5 kg = 90×5/3 = 150 ₺." },
      { q: "Doğru orantı ile ters orantı farkı nedir?", a: "Doğru orantıda biri artınca diğeri de artar (kg-fiyat); ters orantıda biri artınca diğeri azalır (işçi sayısı-süre). Ters orantıda çarpımlar eşitlenir: a×b = sabit." },
    ],
    detay: [
      "İki büyüklüğün doğru mu ters mi orantılı olduğuna karar verirken sağduyu testi işe yarar: birini artırdığınızda diğeri mantıken artar mı azalır mı diye kendinize sorun — bir işi bitirmek için gereken işçi sayısı artınca süre azalır (ters orantı), ama alınan malzeme miktarı artınca fiyat da artar (doğru orantı); bu basit kontrol formülü ezberlemeden doğru kurulumu bulmanızı sağlar.",
    ],
  },
  "pisagor-teoremi": {
    faqs: [
      { q: "Pisagor teoremi nedir?", a: "Dik üçgende dik kenarların kareleri toplamı hipotenüsün karesine eşittir: a² + b² = c². 3-4-5, 5-12-13 ve 8-15-17 en bilinen tam sayılı üçlülerdir." },
      { q: "Pisagor günlük hayatta nerede kullanılır?", a: "İki nokta arası kuş uçuşu mesafe, merdivenin duvara güvenli yaslanma boyu, TV ekran köşegeninden en-boy hesabı ve inşaatta dik açı kontrolü (3-4-5 ipi) tipik kullanımlardır." },
    ],
    detay: [
      "İnşaat ustalarının binlerce yıldır kullandığı '3-4-5 ipi' yöntemi tam olarak Pisagor teoreminin pratik uygulamasıdır — bir ipi 3, 4 ve 5 birimlik parçalara ayırıp üçgen oluşturduğunuzda 3 ile 4 birimlik kenarların birleştiği açı matematiksel olarak kesin 90 derecedir; gönye olmadan dik açı çizmenin en eski ve güvenilir yollarından biridir.",
    ],
  },
  "rastgele-sayi": {
    faqs: [
      { q: "Rastgele sayılar nasıl üretilir?", a: "Araç, tarayıcının kriptografik rastgelelik kaynağını (crypto.getRandomValues) kullanır — çekiliş ve kura için adil, öngörülemez sonuç verir. Sayılar cihazınızda üretilir, sunucuya gönderilmez." },
      { q: "Aynı sayı tekrar çıkabilir mi?", a: "Tekrarlı modda evet — her çekim bağımsızdır. Tekrarsız modda ise seçilen aralıktan her sayı yalnızca bir kez gelir (çekiliş torbası mantığı)." },
    ],
    detay: [
      "'Rastgele' ile 'kriptografik olarak güvenli rastgele' arasında önemli bir fark vardır — sıradan bir programlama dilindeki basit rastgele sayı üreticileri (Math.random gibi) öngörülebilir desenler taşıyabilirken, bu araç tarayıcının donanım tabanlı rastgelelik kaynağını kullanır ve bu, gerçek çekiliş ve kura uygulamaları için gereken adalet standardını sağlar.",
    ],
  },
  "roma-rakami": {
    faqs: [
      { q: "Roma rakamları nasıl okunur?", a: "I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Küçük sembol büyüğün önündeyse çıkarılır: IV=4, IX=9, XL=40, CM=900. MMXXVI = 2026." },
      { q: "Roma rakamlarında sıfır ve büyük sayılar var mı?", a: "Sıfır kavramı yoktur; standart gösterim 3999 (MMMCMXCIX) ile sınırlıdır. Daha büyük sayılar için üst çizgi (bin katı) kullanılırdı: V̄ = 5000." },
    ],
    detay: [
      "Sıfır kavramının olmaması, Romalıların matematikte ilerlemesini bir noktada gerçekten sınırlamıştır — büyük çarpma ve bölme işlemleri Roma rakamlarıyla son derece zahmetlidir; Hint-Arap rakamlarının (ve sıfırın) Avrupa'ya girişi, hesap kitap işlerinde devrim niteliğinde bir kolaylık sağlamıştır.",
    ],
  },
  trigonometri: {
    faqs: [
      { q: "Sinüs, kosinüs ve tanjant nedir?", a: "Dik üçgende açıya göre oranlardır: sin = karşı/hipotenüs, cos = komşu/hipotenüs, tan = karşı/komşu. 30°-45°-60° değerleri (1/2, √2/2, √3/2 ailesi) en sık kullanılanlardır." },
      { q: "Derece ile radyan farkı nedir?", a: "Tam tur 360° = 2π radyandır; 1 rad ≈ 57,3°. Dönüşüm: rad = derece × π/180. Bilimsel hesaplarda ve türev formüllerinde radyan esastır." },
    ],
    detay: [
      "Hesap makinenizde 'DEG' yerine 'RAD' modunda olduğunuzu fark etmeden sin(30) hesaplarsanız 0,5 yerine tamamen farklı bir sayı (yaklaşık -0,988) elde edersiniz — bu, öğrencilerin sınavlarda en sık yaptığı teknik hatalardan biridir; hesaba başlamadan önce hesap makinenizin modunu kontrol etmek alışkanlık haline getirilmelidir.",
    ],
  },
  "uslu-karekok": {
    faqs: [
      { q: "Üslü sayı kuralları nelerdir?", a: "Çarpımda üsler toplanır (aᵐ×aⁿ=aᵐ⁺ⁿ), bölümde çıkarılır, üssün üssü çarpılır ((aᵐ)ⁿ=aᵐⁿ). Negatif üs tersini alır: a⁻ⁿ = 1/aⁿ; a⁰ = 1 (a≠0)." },
      { q: "Kesirli üs ne demektir?", a: "Kök anlamına gelir: a^(1/n) = ⁿ√a, a^(m/n) = ⁿ√(aᵐ). Örneğin 8^(2/3) = (∛8)² = 4." },
    ],
    detay: [
      "Kesirli üs kurallarının hepsi tutarlı olması için negatif ve sıfır üslerin de tanımlanması gerekmiştir — bu kurallar rastgele seçilmemiştir, tüm üslü sayı işlemlerinin (çarpım, bölüm, üssün üssü) her durumda birbiriyle çelişmeyecek şekilde çalışmasını garanti eden matematiksel bir zorunluluktan doğmuştur.",
    ],
  },
  "yas-problemi": {
    faqs: [
      { q: "Yaş problemleri nasıl çözülür?", a: "Bilinmeyene x deyip yaş farkının sabit kaldığı kullanılır: 'kat' ilişkisinde Küçük = Fark / (Kat − 1). Baba 30 yaş büyük ve 3 katıysa: çocuk 30/2 = 15." },
      { q: "Yaş farkı neden hep sabittir?", a: "İki kişi de her yıl aynı miktarda yaşlandığından aralarındaki fark hiç değişmez — problemlerin çoğu bu değişmezlik üzerine kurulur; kat ilişkisi ise zamanla değişir." },
    ],
    detay: [
      "Bu değişmezlik ilkesi çözümü çoğu zaman fark üzerinden kurmayı en hızlı yol haline getirir — 'X yıl sonra kaç katı olur' tipi sorularda toplam yaşları değil, sabit kalan farkı ve değişen oranı takip etmek, denklemi kurarken karışıklığı önler ve işlemi kısaltır.",
    ],
  },

  /* ------------------------------- BİLİMSEL ------------------------------ */
  "belirli-integral": {
    faqs: [
      { q: "Belirli integral neyi hesaplar?", a: "f(x) eğrisi ile x ekseni arasında, a'dan b'ye kadar olan işaretli alanı verir. Fizikte yol, iş ve olasılıkta yoğunluktan olasılık hesaplamanın temelidir." },
      { q: "Simpson ve trapez yöntemi nedir?", a: "Analitik çözümü zor integralleri sayısal yaklaşıkla hesaplar: trapez eğriyi doğru parçalarıyla, Simpson parabollerle örer. Simpson genellikle aynı adım sayısında çok daha isabetlidir." },
    ],
    detay: [
      "Sayısal integrasyon yöntemleri, gerçek dünyada integralin kapalı formda (analitik olarak) çözülemediği durumlarda vazgeçilmezdir — örneğin normal dağılımın kümülatif fonksiyonu (istatistikte sıkça kullanılan bir eğri) hiçbir zaman basit bir formülle ifade edilemez, bu tür fonksiyonlarla çalışan yazılımların büyük kısmı arka planda Simpson benzeri sayısal yöntemler kullanır.",
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
    detay: [
      "Bu sistemi geometrik olarak düşünmek soyutluğu azaltır — iki denklem aslında iki doğrunun denklemidir ve çözüm bu iki doğrunun kesiştiği noktadır; determinant sıfır olduğunda doğrular ya hiç kesişmez (paralel) ya da üst üste binmiştir (sonsuz kesişim noktası), cebirsel sonuç aslında bu geometrik gerçeğin sayısal ifadesidir.",
    ],
  },
  "denklem-sistemi-3x3": {
    faqs: [
      { q: "Üç bilinmeyenli sistem nasıl çözülür?", a: "Cramer kuralı 3×3 determinantlarla uygulanır veya Gauss eliminasyonu ile kademeli yok etme yapılır. Araç, katsayı matrisinin determinantını ve x, y, z değerlerini adımlarıyla verir." },
      { q: "Sistemin çözümü olup olmadığını nasıl anlarım?", a: "Ana determinant D ≠ 0 ise tek çözüm vardır. D = 0 iken pay determinantları da sıfırsa sonsuz çözüm, değilse çözümsüzdür." },
    ],
    detay: [
      "3×3 sistemlerde elle Cramer kuralı uygulamak, her biri 3×3 determinant hesabı gerektiren 4 ayrı determinant hesaplamayı gerektirdiğinden işlem yükü hızla artar — bu yüzden büyük sistemlerde mühendisler ve bilgisayar programları genellikle Gauss eliminasyonunu tercih eder; Cramer kuralı küçük sistemlerde kavramsal netliği için, büyük sistemlerde ise pratiklik için Gauss tercih edilir.",
    ],
  },
  "fonksiyon-tablo": {
    faqs: [
      { q: "Fonksiyon değer tablosu ne işe yarar?", a: "f(x)'in seçilen aralıktaki değerlerini listeler; grafiğin kabaca gidişatını, işaret değişimlerini (kök civarı) ve artış-azalışı görmenizi sağlar." },
      { q: "Tabloda kök nasıl fark edilir?", a: "Ardışık iki x değerinde f işaret değiştiriyorsa (biri +, biri −) arada en az bir kök vardır — bu, ara değer teoreminin pratik kullanımıdır." },
    ],
    detay: [
      "Değer tablosu, karmaşık bir fonksiyonun grafiğini çizmeden önce yapılacak en ucuz ön incelemedir — birkaç noktayı hesaplayıp işaret değişimlerini görmek, fonksiyonun kaç kökü olabileceği ve bu köklerin yaklaşık nerede bulunduğu konusunda grafik çizmeden hızlı bir fikir verir.",
    ],
  },
  "kok-bulucu": {
    faqs: [
      { q: "Newton-Raphson yöntemi nasıl çalışır?", a: "Tahmin noktasındaki teğetin x eksenini kestiği yer yeni tahmindir: xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ). Uygun başlangıçta karesel hızda (her adımda basamak sayısı ikiye katlanarak) yakınsar." },
      { q: "Bisection (ikiye bölme) ne zaman tercih edilir?", a: "İşaret değiştiren bir aralık verildiğinde garantili ama yavaş yakınsar. Newton türev gerektirir ve kötü başlangıçta ıraksayabilir; güvenilirlik önceliklinizse bisection, hız önceliklinizse Newton uygundur." },
    ],
    detay: [
      "Newton-Raphson'un hızı gerçekten çarpıcıdır — iyi bir başlangıç noktasından itibaren her adımda doğru basamak sayısı yaklaşık iki katına çıkar, yani 10 adımda ulaşacağınız hassasiyete bisection yönteminde yüzlerce adım gerekebilir; ancak bu hız, kötü seçilmiş bir başlangıç noktasında hiç yakınsamama riskiyle gelir, bu yüzden pratikte iki yöntem genellikle birlikte kullanılır.",
    ],
  },
  "kompleks-sayi": {
    faqs: [
      { q: "Kompleks (karmaşık) sayı nedir?", a: "a + bi biçimindeki sayılardır; i² = −1. Modül |z| = √(a²+b²) uzunluğu, argüman açıyı verir. Elektrik mühendisliğinde AC devre analizi ve sinyal işlemede temel araçtır." },
      { q: "Kompleks sayılar nasıl çarpılır?", a: "Cebirsel açılımla (i²=−1 kullanılarak) veya kutupsal formda modüller çarpılıp açılar toplanarak: |z₁z₂| = |z₁||z₂|, arg(z₁z₂) = arg z₁ + arg z₂." },
    ],
    detay: [
      "'Sanal' isimlendirmesi tarihsel bir kazadır ve kompleks sayıların gerçek uygulamalardaki rolünü küçümser — elektrik mühendisliğinde alternatif akımın genlik ve faz bilgisini tek bir sayıda taşımak, kuantum mekaniğinde dalga fonksiyonlarını tanımlamak gibi tamamen somut mühendislik problemlerinin merkezinde yer alırlar; 'sanal' olmaları gerçekliklerini değil, tarihsel kabul sürecinin gecikmiş olmasını yansıtır.",
    ],
  },
  "limit-hesaplama": {
    faqs: [
      { q: "Limit nedir?", a: "x bir değere yaklaşırken f(x)'in yaklaştığı değerdir — fonksiyon o noktada tanımsız olsa bile limit var olabilir. Türev ve süreklilik kavramlarının temelidir." },
      { q: "Sol ve sağ limit neden ayrı bakılır?", a: "Limitin var olması için iki yönden yaklaşımın aynı değere gitmesi gerekir. |x|/x fonksiyonunda 0'a soldan −1, sağdan +1 gidildiğinden limit yoktur." },
    ],
    detay: [
      "Limit kavramı, fonksiyonun o noktadaki değerinden tamamen bağımsızdır — bir fonksiyon tam olarak o noktada tanımsız olsa (örneğin 0/0 formunda) bile limiti mükemmel şekilde var ve hesaplanabilir olabilir; bu ayrım (limitin var olması ile fonksiyonun o noktada tanımlı olması) türev tanımının temelini oluşturan kritik bir noktadır.",
    ],
  },
  "matris-2x2": {
    faqs: [
      { q: "2×2 matris determinantı nasıl hesaplanır?", a: "det = ad − bc (çapraz çarpımlar farkı). Determinant, matrisin temsil ettiği dönüşümün alanı kaç katına çıkardığını gösterir; sıfırsa matris tersinmezdir." },
      { q: "Matris tersi ne işe yarar?", a: "A⁻¹, AX = B sistemini X = A⁻¹B ile çözmeyi sağlar. 2×2'de ters: (1/det) × [d −b; −c a]. Grafik dönüşümlerini geri almak ve şifreleme gibi alanlarda kullanılır." },
    ],
    detay: [
      "Matris tersinin formülünde determinantın paydada olması tesadüf değildir — determinant sıfırsa formül tanımsız hale gelir (sıfıra bölme), bu da tersinmez matrislerin neden ters alınamadığını cebirsel olarak açıklar; geometrik olarak bu, dönüşümün bir boyutu 'ezdiği' (örneğin düzlemi bir çizgiye indirgediği) ve bu bilginin geri alınamayacağı anlamına gelir.",
    ],
  },
  molarite: {
    faqs: [
      { q: "Molarite nasıl hesaplanır?", a: "Önce mol sayısı bulunur (n = kütle / mol kütlesi), sonra hacme bölünür: M = n / V(litre). 58,5 g NaCl'yi 2 L suda çözmek 0,5 M çözelti verir." },
      { q: "Seyreltme hesabı nasıl yapılır?", a: "M₁V₁ = M₂V₂ bağıntısı kullanılır: 5 M stoktan 1 M'lik 100 mL hazırlamak için 20 mL stok alınıp 100 mL'ye tamamlanır." },
    ],
    detay: [
      "Seyreltme yaparken sıklıkla yapılan bir hata, 20 mL stoku 100 mL suyla karıştırmaktır — doğrusu 20 mL stoku alıp üzerine toplam hacim 100 mL olacak şekilde su eklemektir (yani ~80 mL su), aradaki fark küçük görünse de laboratuvar ortamında konsantrasyon hesaplarını belirgin şekilde saptırabilir.",
    ],
  },
  "newton-hareket": {
    faqs: [
      { q: "Düzgün ivmeli hareket denklemleri nelerdir?", a: "v = v₀ + at, x = v₀t + ½at², v² = v₀² + 2ax. Üç denklemden ikisi bilinince tüm hareket çözülür; araç eksik değişkeni otomatik bulur." },
      { q: "Serbest düşmede hangi değerler kullanılır?", a: "v₀ = 0 ve a = g ≈ 9,81 m/s² alınır. Yükseklikten düşme süresi t = √(2h/g), çarpma hızı v = √(2gh) olur — 20 m'den düşen cisim ~2 s sonra ~19,8 m/s ile çarpar." },
    ],
    detay: [
      "Bu denklemler hava direncini yok saydığı için gerçekte yalnızca yoğun (taş, metal top) ve kısa mesafeli düşüşlerde doğru sonuca yakın kalır — bir tüy veya açık bir kağıt için hava direnci baskın hale gelir ve gerçek düşüş süresi formülün öngördüğünden çok daha uzun sürer; bu yüzden Ay'da tüy ve çekiç aynı anda düşerken Dünya'da düşmez.",
    ],
  },
  "ohm-watt": {
    faqs: [
      { q: "Ohm yasası nedir?", a: "Gerilim, akım ve direnç ilişkisidir: V = I × R. Güç ise P = V × I = I²R = V²/R ile bulunur. İkisi bilinince diğer tüm değerler türetilir." },
      { q: "Evdeki cihaz kaç amper çeker?", a: "I = P / V: 220 V şebekede 2.200 W'lık ısıtıcı 10 A çeker. Sigorta ve kablo kesiti bu akıma göre seçilmelidir — 16 A'lık hat ~3.500 W taşır." },
    ],
    detay: [
      "Aynı hatta birden fazla yüksek güçlü cihaz (ısıtıcı + ütü + saç kurutma makinesi gibi) aynı anda çalıştırıldığında akımlar toplanır ve sigortanın taşıma kapasitesini aşabilir — bu, sigortaların 'gereksiz yere atması' değil, tam olarak tasarlandığı gibi aşırı yüklenmeye karşı koruma sağlamasıdır; sigorta değerini yükseltmek yerine yükü farklı hatlara dağıtmak doğru çözümdür.",
    ],
  },
  "ph-hesaplama": {
    faqs: [
      { q: "pH nasıl hesaplanır?", a: "pH = −log₁₀[H⁺]. 0,01 M HCl'de pH = 2'dir. pH + pOH = 14 bağıntısıyla pOH'tan da geçilir. 7 nötr, altı asidik, üstü baziktir." },
      { q: "pH'ın 1 birim değişmesi ne demektir?", a: "Logaritmik ölçek olduğundan 10 kat asitlik farkı demektir: pH 3, pH 5'ten 100 kat daha asidiktir." },
    ],
    detay: [
      "Negatif logaritma tanımı, pH ölçeğini sezgiye ters biçimde 'ters çevirir' — hidrojen iyonu konsantrasyonu arttıkça (yani asit güçlendikçe) pH sayısı büyümez, küçülür; bu yüzden 'düşük pH = güçlü asit' ilişkisini kavramak, formülün eksi işaretinin ne işe yaradığını anlamadan zor olabilir.",
    ],
  },
  "sayisal-turev": {
    faqs: [
      { q: "Sayısal türev nasıl hesaplanır?", a: "Merkezi fark formülüyle: f'(x) ≈ (f(x+h) − f(x−h)) / 2h; ikinci türev için f''(x) ≈ (f(x+h) − 2f(x) + f(x−h)) / h². Küçük h (10⁻⁶) ile analitik değere çok yaklaşılır." },
      { q: "Türev işareti neyi gösterir?", a: "f' > 0 artış, f' < 0 azalış, f' = 0 kritik nokta (tepe/çukur adayı) demektir. f'' işareti ise bükeyliği: pozitifse çukur (min), negatifse tepe (max)." },
    ],
    detay: [
      "Kapalı formda türevi almanın zor veya imkânsız olduğu fonksiyonlarda (deneysel veriden gelen bir eğri gibi) sayısal türev tek pratik seçenektir — h değerini çok küçük seçmek teorik olarak hassasiyeti artırır ama bilgisayarın kayan nokta hassasiyeti sınırına çok yaklaşınca (h aşırı küçüldüğünde) yuvarlama hataları devreye girer ve sonuç paradoksal biçimde bozulmaya başlar.",
    ],
  },
  "taylor-serisi": {
    faqs: [
      { q: "Taylor serisi nedir?", a: "Bir fonksiyonu, bir nokta etrafında polinomla temsil eder: f(x) ≈ Σ f⁽ᵏ⁾(a)(x−a)ᵏ/k!. Hesap makineleri sin, cos, eˣ gibi fonksiyonları bu seriyle hesaplar." },
      { q: "Kaç terim yeterlidir?", a: "Açılım noktasına yakın x'lerde birkaç terim yeter; uzaklaştıkça hata büyür. sin x için x − x³/6 yaklaşımı |x| < 0,5 rad bölgesinde binde birden az hata verir." },
    ],
    detay: [
      "Küçük açı yaklaşımı (sin x ≈ x) fizikte sarkaç hareketinden optiğe kadar sayısız yerde kullanılır ve aslında Taylor serisinin ilk teriminden başka bir şey değildir — bu yaklaşım sarkacın hareket denklemini analitik olarak çözülebilir hale getirir; büyük açılarda ise yaklaşım bozulur ve sarkaç hareketi artık basit bir formülle ifade edilemez.",
    ],
  },
  "turev-integral": {
    faqs: [
      { q: "Polinom türevi nasıl alınır?", a: "Kuvvet kuralı: d/dx(axⁿ) = n·a·xⁿ⁻¹. Örneğin 3x⁴'ün türevi 12x³. Toplamın türevi terim terim alınır." },
      { q: "Polinom integrali nasıl alınır?", a: "Kuvvet kuralının tersi: ∫axⁿdx = a·xⁿ⁺¹/(n+1) + C. Türev alındığında sabitler kaybolduğundan belirsiz integralde +C eklenir." },
    ],
    detay: [
      "+C teriminin varlığı, türev alma işleminin geri döndürülemez bilgi kaybı yarattığını gösterir — x²'nin türevi de, x²+5'in türevi de aynı (2x) olduğundan, bir fonksiyonun türevinden yola çıkarak orijinal fonksiyonu geri bulmaya çalıştığınızda hangi sabitle başladığınızı asla bilemezsiniz; bu belirsizlik ancak ek bir koşul (örneğin bir noktadaki değer) verilirse ortadan kalkar.",
    ],
  },
  "vektor-3d": {
    faqs: [
      { q: "Nokta (skaler) çarpım ne verir?", a: "A·B = |A||B|cos θ — iki vektörün ne kadar aynı yönde olduğunu ölçer. Sıfırsa vektörler diktir; fizikte iş hesabı (W = F·d) tipik kullanımdır." },
      { q: "Çapraz (vektörel) çarpım ne verir?", a: "A×B, iki vektöre dik ve büyüklüğü |A||B|sin θ olan vektördür — paralelkenar alanına eşittir. Tork ve manyetik kuvvet hesaplarında kullanılır; sırası önemlidir (A×B = −B×A)." },
    ],
    detay: [
      "Skaler ve vektörel çarpımın adlarındaki fark sonuçlarının doğasını yansıtır — biri tek bir sayı (skaler) üretirken diğeri yeni bir vektör üretir; bu ayrımı unutmak, örneğin iş hesabında (skaler çarpım gerektirir) yanlışlıkla vektörel çarpım formülünü kullanmak gibi kavramsal hatalara yol açabilir.",
    ],
  },
};
