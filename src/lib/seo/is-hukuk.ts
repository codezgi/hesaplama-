import type { SeoExtra } from "./types";

/* Maaş/Çalışma + Hukuki + Eğitim hesaplayıcıları için SEO içerikleri */
export const isHukukContent: Record<string, SeoExtra> = {
  /* --------------------------------- MAAŞ -------------------------------- */
  "fazla-mesai": {
    howItWorks: [
      "Aylık brüt maaşınızı ve fazla mesai saatinizi girin.",
      "Saatlik ücret = Aylık brüt / 225 formülüyle bulunur.",
      "Normal günlerde saat ücretinin 1,5 katı, hafta tatili ve resmî tatillerde 2 katı uygulanır.",
    ],
    faqs: [
      { q: "Fazla mesai ücreti nasıl hesaplanır?", a: "Saatlik ücret aylık brüt maaşın 225'e bölünmesiyle bulunur; fazla mesai için bu tutarın %50 zamlısı (1,5 katı) ödenir. Hafta tatilinde çalışmada zam %100'dür (2 katı)." },
      { q: "Yıllık fazla mesai sınırı nedir?", a: "İş Kanunu'na göre fazla çalışma yılda 270 saati aşamaz ve işçinin her yıl yazılı onayı alınmalıdır. Sınırın aşılması işçiye haklı fesih imkânı verebilir." },
      { q: "Fazla mesai yerine izin kullanabilir miyim?", a: "Evet — işçi isterse zamlı ücret yerine serbest zaman kullanabilir: her fazla saat için 1,5 saat izin. Bu tercihi işçi yapar, işveren dayatamaz." },
    ],
    detay: [
      "225 sayısı rastgele değildir — ayda ortalama 30 gün, günde 7,5 saat çalışma esasına dayanan İş Kanunu'ndaki standart hesap yöntemidir (30 × 7,5). Bazı işyerlerinde farklı bir bölen kullanıldığını görürseniz bordronuzu bu standart değerle karşılaştırıp fark olup olmadığını kontrol edin.",
      "Fazla çalışma ile fazla sürelerle çalışma farklı kavramlardır: haftalık 45 saati aşan çalışma 'fazla çalışma' (zam %50), haftalık çalışma süresi 45 saatin altında belirlenmiş işyerlerinde 45 saate kadar olan ek çalışma 'fazla sürelerle çalışma' sayılır ve zam oranı %25'tir — bordronuzda hangi kalemin uygulandığını ayırt etmek önemlidir.",
    ],
  },
  "yillik-izin": {
    howItWorks: [
      "İşe giriş tarihinizi ve yaşınızı girin.",
      "Kıdeminize göre yasal izin süreniz hesaplanır: 1-5 yıl 14 gün, 5-15 yıl 20 gün, 15+ yıl 26 gün.",
    ],
    faqs: [
      { q: "Yıllık izin hakkım kaç gün?", a: "Kıdeme göre: 1-5 yıl arası 14 gün, 5 yıldan fazla 15 yıldan az 20 gün, 15 yıl ve üzeri 26 gündür. 18 yaş altı ve 50 yaş üstü işçilerde alt sınır 20 gündür." },
      { q: "Yıllık izne ne zaman hak kazanırım?", a: "İşe başladığınız tarihten itibaren deneme süresi dahil en az 1 yıl çalışmanız gerekir. Her hizmet yılını doldurdukça o yılın izni hak edilir." },
      { q: "Kullanılmayan izinler yanar mı?", a: "Hayır — kullanılmayan izinler birikir ve iş sözleşmesi sona erdiğinde son brüt ücret üzerinden izin ücreti olarak ödenmek zorundadır. Çalışırken izin ücrete çevrilemez." },
    ],
    detay: [
      "İzin ücreti hesaplanırken kıdem tazminatındaki gibi son brüt ücret esas alınır, izni hak ettiğiniz yıldaki eski (düşük) maaş değil — bu yüzden yıllar içinde biriktirilmiş kullanılmamış izin, işten ayrılırken güncel maaşınız üzerinden hesaplandığından beklediğinizden yüksek bir tutar çıkabilir.",
    ],
  },
  amortisman: {
    howItWorks: [
      "Varlığın alış bedelini ve faydalı ömrünü (yıl) girin.",
      "Normal yöntemde her yıl eşit tutar (Bedel/Ömür), azalan bakiyede net defter değerinin iki katı oran ayrılır.",
    ],
    faqs: [
      { q: "Amortisman nedir?", a: "Bir yıldan uzun kullanılan varlıkların (makine, taşıt, bilgisayar vb.) maliyetinin faydalı ömrüne yayılarak gider yazılmasıdır. Vergi matrahını yasal olarak azaltır." },
      { q: "Normal ve azalan bakiye yöntemi farkı nedir?", a: "Normal yöntemde her yıl eşit amortisman ayrılır. Azalan bakiyede oran iki katıdır ama kalan net değere uygulanır — ilk yıllarda daha çok gider yazılır, bu da vergiyi öne çeker." },
      { q: "Faydalı ömürler nereden bulunur?", a: "Hazine ve Maliye Bakanlığı'nın amortisman listesinde her varlık türü için faydalı ömür ve oran belirlenmiştir; örneğin binek otomobil 5 yıl, bilgisayar 4 yıl (bazı kalemler güncellenebilir)." },
    ],
    detay: [
      "Azalan bakiye yönteminde varlık hiçbir zaman tam sıfıra inmez (her yıl kalan değerin belirli oranı ayrıldığından matematiksel olarak sonsuza yaklaşır) — bu yüzden mevzuat, son yılda kalan tüm net değerin tek seferde gider yazılmasına izin verir; bu detay yöntemi elle uygularken sıkça atlanır.",
    ],
  },
  "serbest-meslek-makbuzu": {
    howItWorks: [
      "Net (elinize geçmesini istediğiniz) veya brüt tutarı girin.",
      "%20 gelir vergisi stopajı ve %20 KDV hesaplanarak makbuz kalemleri (brüt, stopaj, KDV, tahsil edilecek) çıkarılır.",
    ],
    faqs: [
      { q: "Serbest meslek makbuzu nasıl hesaplanır?", a: "Brüt ücretten %20 stopaj kesilir, üzerine %20 KDV eklenir: Tahsil edilecek = Brüt − Stopaj + KDV. Net 10.000 ₺ istiyorsanız brüt 12.500 ₺, KDV ile tahsilat 15.000 ₺ olur." },
      { q: "Stopajı kim öder?", a: "Stopajı müşteriniz (ödemeyi yapan mükellef) keser ve sizin adınıza vergi dairesine yatırır. Yıllık beyannamenizde bu kesintiler hesaplanan vergiden mahsup edilir." },
      { q: "E-SMM (elektronik serbest meslek makbuzu) zorunlu mu?", a: "Evet — serbest meslek erbabının makbuzlarını elektronik ortamda (e-SMM) düzenlemesi zorunludur. GİB portalı veya entegratör yazılımlar üzerinden kesilebilir." },
    ],
    detay: [
      "'Net 10.000 ₺ isterken brüt kaç yazmalıyım' sorusunun cevabı basit bir bölme değildir çünkü stopaj brüt üzerinden, net ise brüt eksi stopaj olarak tanımlanır — doğru formül Brüt = Net / (1 − stopaj oranı) şeklindedir; bu araç bu ters hesabı otomatik yaparak elle bölme hatasını önler.",
    ],
  },
  "sut-izni": {
    faqs: [
      { q: "Süt izni ne kadardır?", a: "İş Kanunu'na tabi annelere, çocuk 1 yaşına gelene kadar günde toplam 1,5 saat süt izni verilir. Memurlarda ilk 6 ay günde 3 saat, ikinci 6 ay 1,5 saattir." },
      { q: "Süt iznini toplu kullanabilir miyim?", a: "İznin hangi saatlerde ve kaça bölünerek kullanılacağını anne belirler. Günlük izinlerin birleştirilip toplu kullanılması ancak işverenle anlaşmayla mümkündür — yasal zorunluluk değildir." },
      { q: "Süt izni ücretten kesilir mi?", a: "Hayır — süt izni günlük çalışma süresinden sayılır ve ücrette herhangi bir kesinti yapılamaz." },
    ],
    detay: [
      "Süt izni yalnızca doğum yapan biyolojik anneye tanınan bir haktır, evlat edinen veya babaya devredilebilen bir hak değildir — doğum izninin bir kısmı babaya devredilebilse de süt izni bu kuralın dışındadır ve tamamen anneye özgüdür.",
    ],
  },
  "dogum-izni": {
    faqs: [
      { q: "Doğum izni kaç haftadır?", a: "Annelere doğumdan önce 8, sonra 8 olmak üzere toplam 16 hafta ücretli izin verilir; çoğul gebelikte doğum öncesine 2 hafta eklenir. Babalara özel sektörde 5 gün, memurlarda 10 gün izin verilir." },
      { q: "Doğum öncesi iznimi doğum sonrasına aktarabilir miyim?", a: "Evet — hekim onayıyla doğumdan önceki 3 haftaya kadar çalışabilir, kalan 5 haftayı doğum sonrasına ekleyebilirsiniz (toplam süre değişmez)." },
      { q: "Doğum izninde maaşı kim öder?", a: "İzin süresince SGK, günlük kazancınızın üçte ikisi tutarında geçici iş göremezlik ödeneği (rapor parası) öder. Bunun için doğumdan önceki son 1 yılda en az 90 gün prim gerekir." },
    ],
    detay: [
      "SGK'nın ödediği üçte iki oranı işverenin ödediği tam maaştan düşük kaldığından, birçok kurumsal işveren aradaki farkı gönüllü olarak tamamlayıp çalışana doğum izninde tam maaş öder — bu, yasal zorunluluk değil işyeri politikasıdır; iş sözleşmenizde veya personel yönetmeliğinde bu farkın tamamlanıp tamamlanmadığını kontrol edin.",
    ],
  },
  "yolluk-harcirah": {
    faqs: [
      { q: "Harcırah (yolluk) nedir, neleri kapsar?", a: "Görev yolculuğunda gündelik (yeme-içme ve konaklama karşılığı), yol gideri ve varsa konaklama bedelinden oluşur. Kamu personelinde tutarlar her yıl bütçe kanunuyla belirlenir." },
      { q: "Harcırah vergiden muaf mı?", a: "Kamu gündelik tutarını aşmayan harcırah ödemeleri gelir vergisinden istisnadır. Aşan kısım ücret sayılır ve vergilendirilir." },
      { q: "Özel sektörde yolluk zorunlu mu?", a: "Yasal zorunluluk yoktur; iş sözleşmesi veya işyeri uygulamasıyla belirlenir. Ancak yerleşik uygulama haline gelmişse işçi lehine kazanılmış hak oluşturabilir." },
    ],
    detay: [
      "Kamu personelinde harcırah tutarları unvana ve derece/kademeye göre farklılaşır — bir müdür ile bir memurun aynı şehre yaptığı görev yolculuğunda gündelik tutarı birebir aynı değildir; bütçe kanununa ekli cetvelde her unvan grubunun kendi gündelik miktarı ayrı ayrı listelenir.",
    ],
  },

  /* -------------------------------- HUKUKİ ------------------------------- */
  "yasal-faiz": {
    howItWorks: [
      "Anapara, faiz türü (yasal / ticari / gecikme) ve gün sayısını girin.",
      "Faiz = Anapara × Yıllık Oran × Gün / 365 formülüyle dönem faizi hesaplanır.",
    ],
    faqs: [
      { q: "Yasal faiz oranı nedir?", a: "Borçlar hukukunda sözleşmeyle oran belirlenmemişse uygulanan faizdir; oran Cumhurbaşkanı kararıyla belirlenir ve dönemsel olarak güncellenir. Ticari işlerde avans faiz oranı esas alınır." },
      { q: "Gecikme faizi ne zaman işlemeye başlar?", a: "Borçlu temerrüde düştüğünde — yani vadesi belli borçlarda vadenin dolmasıyla, vadesizlerde ihtarnameyle başlar. Faiz, temerrüt tarihinden fiilî ödemeye kadar işler." },
      { q: "Faize faiz işletilebilir mi?", a: "Türk hukukunda bileşik faiz (faize faiz) kural olarak yasaktır; yalnızca cari hesap ve iki tarafı tacir olan bazı ticari işlemlerde sınırlı olarak mümkündür." },
    ],
    detay: [
      "Yasal faiz ile ticari (avans) faiz farklı oranlardır ve hangisinin uygulanacağı tarafların sıfatına göre değişir — iki tarafı da tacir olan bir uyuşmazlıkta ticari faiz, taraflardan biri tüketici ise yasal faiz esas alınır; dava dilekçesinde yanlış faiz türü talep etmek alacağın eksik hesaplanmasına yol açabilir.",
    ],
  },
  "arabuluculuk-ucreti": {
    faqs: [
      { q: "Arabuluculuk ücreti nasıl hesaplanır?", a: "Anlaşmayla sonuçlanan arabuluculukta ücret, uyuşmazlık tutarına Arabuluculuk Asgari Ücret Tarifesi'ndeki kademeli oranlar uygulanarak hesaplanır ve taraflarca aksine anlaşma yoksa eşit paylaşılır." },
      { q: "Arabuluculuk hangi davalarda zorunlu?", a: "İşçi-işveren alacakları, ticari davalar, kira ve tüketici uyuşmazlıklarında dava açmadan önce arabulucuya başvuru zorunlu dava şartıdır. Anlaşamama halinde son tutanakla dava açılabilir." },
      { q: "Anlaşma olmazsa ücret ödenir mi?", a: "Zorunlu arabuluculukta anlaşmama halinde ilk iki saatlik ücret Adalet Bakanlığı bütçesinden karşılanır; taraflar ödeme yapmaz. İki saati aşan süre taraflarca ödenir." },
    ],
    detay: [
      "Arabuluculuk ücreti anlaşma tutarına göre kademeli hesaplandığından, aynı uyuşmazlıkta daha düşük bir tutarda anlaşmak paradoksal biçimde arabuluculuk masrafını da düşürür — bu, taraflar arasında hem esas alacak hem de masraf üzerinden ayrı bir pazarlık dinamiği yaratabilir.",
    ],
  },
  "tapu-harci": {
    howItWorks: [
      "Gayrimenkulün satış bedelini girin.",
      "Alıcı ve satıcı ayrı ayrı binde 20 (%2) tapu harcı öder; toplam %4 hesaplanır.",
    ],
    faqs: [
      { q: "Tapu harcı ne kadar, kim öder?", a: "Satış bedeli üzerinden alıcı %2, satıcı %2 olmak üzere toplam %4 tapu harcı ödenir. Uygulamada tarafların harcın tamamını pazarlıkla tek tarafa yüklemesi de mümkündür." },
      { q: "Tapu harcı hangi bedel üzerinden hesaplanır?", a: "Gerçek satış bedeli üzerinden hesaplanır ve bu bedel emlak vergisi değerinin altında olamaz. Düşük gösterme, cezalı harç tarhiyatı ve vergi ziyaı cezası riski doğurur." },
      { q: "Tapu harcı dışında hangi masraflar var?", a: "Döner sermaye ücreti, varsa ipotek tesis harcı ve zorunlu DASK poliçesi başlıca ek maliyetlerdir. Krediyle alımlarda bankanın ekspertiz ve dosya ücretleri de eklenir." },
    ],
    detay: [
      "%4'lük toplam harcı ikiye bölmek zorunlu değildir — alıcı ve satıcı kendi aralarında anlaşarak harcın tamamını (örneğin pazarlıkla) tek tarafa yükleyebilir; tapu dairesi bu iç anlaşmaya karışmaz, yalnızca toplam harcın tahsil edildiğini kontrol eder. Bu detay özellikle satıcının fiyat konusunda esnek olduğu durumlarda pazarlık payı yaratır.",
    ],
  },
  "kira-artis-tavani": {
    howItWorks: [
      "Mevcut aylık kiranızı girin.",
      "TÜİK'in açıkladığı 12 aylık ortalama TÜFE oranı uygulanarak yasal azami yeni kira hesaplanır.",
    ],
    faqs: [
      { q: "Kira artışı en fazla ne kadar olabilir?", a: "Konut kiralarında yasal tavan, TÜİK'in açıkladığı 12 aylık ortalama TÜFE değişim oranıdır. Sözleşmede daha yüksek oran yazsa bile tavanı aşan kısım geçersizdir." },
      { q: "Ev sahibi TÜFE üzerinde artış isteyebilir mi?", a: "Yenileme dönemlerinde isteyemez — tavan emredici kuraldır. Ancak 5 yılın sonunda taraflar anlaşamazsa ev sahibi, hâkimden emsal kira bedeline uyarlama (tespit davası) isteyebilir." },
      { q: "Kira artışı ne zaman yapılır?", a: "Her kira yılının dolmasıyla, yani sözleşmenin yenilendiği tarihte uygulanır. Yıl içinde ara zam yapılamaz; artış için yeni dönemin başlaması gerekir." },
    ],
    detay: [
      "TÜFE tavanı sözleşmede yazan tarihe değil, kira sözleşmesinin fiilen başladığı yenileme tarihine göre hesaplanır — sözleşmenizde 'her yıl Ocak ayında zam yapılır' gibi bir madde olsa bile, kira başlangıcı Mart ise TÜFE oranı Mart-Mart 12 aylık ortalamaya göre hesaplanmalıdır; bu ayrım küçük bir tarih farkında bile artış oranını belirgin değiştirebilir.",
    ],
  },
  nafaka: {
    faqs: [
      { q: "Nafaka türleri nelerdir?", a: "Boşanma sürecinde tedbir nafakası, boşanma sonrası yoksulluk nafakası (eş için) ve iştirak nafakası (çocuk için) olmak üzere üç temel tür vardır. Her biri farklı koşullara bağlıdır." },
      { q: "Nafaka miktarı neye göre belirlenir?", a: "Kanunda sabit oran yoktur; hâkim tarafların ekonomik gücü, yaşam standardı, çocuğun ihtiyaçları ve kusur durumunu değerlendirir. Uygulamada gelirin belirli bir yüzdesi civarında takdir edilmesi yaygındır." },
      { q: "Nafaka artırılabilir veya kaldırılabilir mi?", a: "Evet — tarafların mali durumu değiştiğinde uyarlama davasıyla artırım/indirim istenebilir. Nafaka alacaklısının evlenmesi yoksulluk nafakasını kendiliğinden sona erdirir." },
    ],
    detay: [
      "İştirak nafakası, ana-babanın boşanmış olup olmamasından bağımsız bir çocuk hakkıdır — evlilik dışı doğan veya ana-babası hiç evlenmemiş çocuklar için de aynı şekilde talep edilebilir; nafaka çocuğun değil ana-babanın 'hakkı' gibi düşünülmesi yaygın ama hatalı bir algıdır.",
    ],
  },
  "miras-paylari": {
    howItWorks: [
      "Sağ kalan eş olup olmadığını ve mirasçıların zümresini (çocuklar / anne-baba / büyükanne-büyükbaba) seçin.",
      "TMK zümre sistemine göre her mirasçının yasal payı hesaplanır.",
    ],
    faqs: [
      { q: "Miras nasıl paylaşılır?", a: "TMK zümre sistemine göre: birinci zümrede (çocuklar) eş 1/4, çocuklar 3/4 alır ve kendi aralarında eşit bölüşür. Çocuk yoksa ikinci zümrede eş 1/2, anne-baba 1/2 alır." },
      { q: "Saklı pay nedir?", a: "Bazı mirasçıların (çocuklar, anne-baba, eş) vasiyetle dahi ellerinden alınamayacak asgari payıdır. Örneğin çocukların saklı payı yasal paylarının yarısıdır; ihlal halinde tenkis davası açılabilir." },
      { q: "Eş her durumda mirasçı mıdır?", a: "Evet — sağ kalan eş her zümreyle birlikte mirasçıdır ve payı birlikte mirasçı olduğu zümreye göre değişir: çocuklarla 1/4, anne-babayla 1/2, büyükanne-büyükbabayla 3/4, hiçbiri yoksa tamamı." },
    ],
    detay: [
      "Zümre sistemi 'alt zümre üst zümreyi tamamen dışlar' ilkesine dayanır — miras bırakanın tek bir çocuğu ve iki kardeşi varsa, kardeşler (ikinci zümre değil, aslında farklı bir sınıf) hiçbir pay alamaz, tüm miras (eş payı düşüldükten sonra) o tek çocuğa kalır; 'kardeşler de hak sahibi' sanılması sık rastlanan bir yanılgıdır.",
    ],
  },
  "itiraz-suresi": {
    faqs: [
      { q: "Hukuki itiraz süreleri neden önemlidir?", a: "Süreler hak düşürücüdür — kaçırılırsa itiraz hakkı kaybedilir ve işlem kesinleşir. Örneğin ödeme emrine itiraz 7 gün, idari para cezasına itiraz 15 gün, istinaf başvurusu 2 haftadır." },
      { q: "Süre hangi günden başlar?", a: "Kural olarak tebliğ tarihini izleyen günden başlar. Son gün resmî tatile denk gelirse süre ilk iş günü mesai bitiminde dolar." },
      { q: "Süreyi kaçırırsam ne yapabilirim?", a: "Kural olarak hak kaybedilir; ancak elde olmayan sebeplerle (ağır hastalık, doğal afet vb.) kaçırma halinde bazı usul kanunlarında eski hale getirme talep edilebilir. Acilen avukata danışın." },
    ],
    detay: [
      "'Gün' olarak belirlenen süreler ile 'iş günü' olarak belirlenen süreler farklı sayılır ve bu iki kavramı karıştırmak süreyi kaçırmanın en sık nedenlerinden biridir — 15 günlük bir süre hafta sonlarını da sayarken, '15 iş günü' yalnızca Pazartesi-Cuma günlerini sayar ve takvimde yaklaşık 3 hafta sürer.",
    ],
  },
  "depozito-iade": {
    faqs: [
      { q: "Depozito iadesi nasıl hesaplanır?", a: "Depozito, sözleşme sonunda hasar ve borç yoksa iade edilir. Para olarak verilmişse aradan geçen sürede değer kaybını telafi için TÜFE ile güncellenmiş karşılığı bu araçla görebilirsiniz — yasal zorunluluk bankada vadeli mevduat olarak tutulmasıdır." },
      { q: "Ev sahibi depozitoyu hangi hallerde kesebilir?", a: "Ödenmemiş kira/fatura borçları ve olağan kullanım aşımı niteliğindeki hasarlar için kesinti yapabilir. Boya ve olağan yıpranma (eskiyen musluklar vb.) kiracıdan istenemez." },
      { q: "Depozito en fazla ne kadar olabilir?", a: "TBK'ya göre konut ve çatılı işyeri kiralarında güvence en fazla 3 aylık kira bedeli kadardır ve kiracının bankada vadeli hesabına yatırılması gerekir." },
    ],
    detay: [
      "Kanuna göre depozitonun bankaya kiracı ve kiraya verenin birlikte imzasıyla ancak çekilebilecek şekilde bloke edilmesi gerekir — nakit olarak veya doğrudan ev sahibinin şahsi hesabına yatan depozitolar bu güvenceyi taşımaz ve uyuşmazlık halinde iadesi ispat yükü kiracıya kalan bir konu haline gelir.",
    ],
  },

  /* -------------------------------- EĞİTİM ------------------------------- */
  "kyk-geri-odeme": {
    howItWorks: [
      "Aldığınız toplam kredi tutarını ve öğrenim sürenizi girin.",
      "Geri ödeme, öğrenim süresi bittikten 2 yıl sonra başlar ve alınan süre kadar taksitle ödenir; borç TÜFE ile endekslenir.",
    ],
    faqs: [
      { q: "KYK kredisi geri ödemesi ne zaman başlar?", a: "Normal öğrenim sürenizin bitiminden 2 yıl sonra başlar. Ödeme süresi, krediyi aldığınız süre kadardır ve aylık taksitlerle yapılır." },
      { q: "KYK borcuna faiz işler mi?", a: "Faiz yerine TÜFE endekslemesi uygulanır: borcunuz, ödeme zamanındaki enflasyon oranı kadar artar. Yapılan yasal düzenlemelerle dönem dönem endeks silinip yalnızca anapara tahsil edilmiştir — güncel durumu GSB'den kontrol edin." },
      { q: "KYK borcu ertelenebilir mi?", a: "İşsizlik halinde İŞKUR kaydıyla borç, başvuru üzerine belirli dönemler halinde ertelenebilir. Askerlik ve lisansüstü öğrenim de erteleme sebebidir." },
    ],
    detay: [
      "Öğrenim kredisi ile katkı kredisi farklı muameleye tabi olabilir ve zaman içinde çıkan yasal düzenlemelerle bazı dönemlerde yalnızca anaparanın (TÜFE farksız) tahsil edilmesine karar verilmiştir — güncel geri ödeme tutarınızı hesaplarken mutlaka e-Devlet'teki güncel borç dökümünüzü esas alın, geçmiş yıllardaki genel bilgiye güvenmeyin.",
    ],
  },
};
