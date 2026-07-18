import type { SeoExtra } from "./types";

/* ---------------------------------------------------------------------------
   En yüksek trafikli ve en yüksek reklam değerine sahip sayfalar için
   detaylı bilgi blokları. Genel geçer cümleler değil; somut rakam, örnek
   ve "insanlar genelde şunu karıştırır" tipi pratik ayrıntılar içerir.
--------------------------------------------------------------------------- */
export const oncelikliContent: Record<string, SeoExtra> = {
  "kdv-hesaplama": {
    detay: [
      "Uygulamada en çok karıştırılan nokta, KDV dahil bir fiyattan KDV tutarını bulurken tutarı doğrudan orana çarpmak. 1.200 ₺ KDV dahil bir ürün için %20 KDV varsa, 1.200 × 0,20 = 240 ₺ demek yanlıştır; çünkü bu işlem KDV hariç tutarı esas almaz. Doğrusu, 1.200 / 1,20 = 1.000 ₺ matrahı bulup aradaki 200 ₺'yi KDV olarak görmektir. Bu araç her iki yönü de ayrı ayrı hesaplayarak bu hatayı otomatik önler.",
      "2024 yılından bu yana bazı temel gıda ürünlerinde oran %1'den kademeli olarak yükseltildi; güncel oranı fatura kesmeden önce mutlaka Gelir İdaresi'nin güncel KDV oranları listesinden teyit edin, özellikle otel-konaklama ve inşaat sektöründe oranlar sık değişiyor.",
      "Esnaf ve küçük işletme sahipleri için pratik bir kontrol: aylık KDV beyannamesi hazırlarken alış faturalarındaki KDV (indirilecek KDV) ile satış faturalarındaki KDV (hesaplanan KDV) arasındaki fark ödenecek veya devreden KDV'yi verir; bu araç tek işlem için hesap yapar, toplu beyanname hesabı için muhasebecinizin yazılımı gereklidir.",
    ],
  },
  "kredi-hesaplama": {
    detay: [
      "Bankaların ilan ettiği 'aylık faiz oranı' ile karşılaştırdığınızda gerçek maliyetiniz her zaman daha yüksek çıkar, çünkü BSMV (banka sigorta muameleleri vergisi, faizin %5'i) ve KKDF gibi vergiler taksite eklenir. 100.000 ₺ krediye ilan edilen %3,5 aylık faiz, efektif yıllık maliyette %55-60 bandına çıkabilir — teklif alırken mutlaka 'yıllık maliyet oranını' (YMO) isteyin, yalnızca aylık faize bakmayın.",
      "Erken kapama düşünüyorsanız dikkat edin: bankalar kalan anaparaya göre en fazla 1 aylık faiz tutarında erken ödeme cezası kesebilir (mevzuatla sınırlıdır); 24 ay vadeli bir kredide 6. ayda kapatma genellikle taksitlerin toplamından belirgin tasarruf sağlar çünkü ilk taksitlerde faiz payı anaparadan yüksektir.",
      "Vade uzadıkça aylık taksit küçülür ama toplam ödenen faiz katlanarak artar — 100.000 ₺ krediyi 12 ay yerine 36 aya yaymak, aylık taksiti üçe bölmez, toplam maliyeti neredeyse ikiye katlar. Kısa vadeyi kaldırabiliyorsanız her zaman tercih edin.",
    ],
  },
  "brut-net-maas": {
    detay: [
      "Hesap, yılın ilk ayına göre yapılır çünkü gelir vergisi Türkiye'de kümülatif dilim sistemiyle işler: Ocak ayında %15 dilimindeki biri, yıl ilerledikçe kümülatif matrahı arttıkça Ekim-Kasım gibi %20, hatta yüksek maaşlarda %27 dilimine geçebilir. Yani aynı brüt maaş, Ocak'ta ve Kasım'da farklı net maaş verir — bu araç ilk ay hesabını gösterir, yıl sonuna doğru net maaşınızın birkaç yüz lira düşmesi normal ve beklenen bir durumdur.",
      "Asgari ücret ile aynı brüt maaşı alan biri, gelir vergisi ve damga vergisi istisnası sayesinde daha yüksek maaşlılara göre orantısal olarak daha az vergi öder; bu yüzden brüt maaş artışının net maaşa yansıması doğrusal değildir, dilim sınırlarına yaklaştıkça net artış oranı küçülür.",
      "İşveren maliyeti hesaplarken sıkça unutulan kalem işsizlik sigortası işveren payı (%2) ve varsa özel sağlık sigortası, yemek kartı gibi yan haklardır — bir çalışanın 'şirkete gerçek maliyeti', bordroda görünen brüt maaşın genellikle %20-22 üzerindedir.",
    ],
  },
  "doviz-cevirici": {
    detay: [
      "Bankanızda gördüğünüz kur, bu sayfadaki TCMB gösterge kurundan farklı olacaktır — bankalar kendi kâr marjlarını (spread) ekler, bu fark özellikle nakit döviz alım-satımında (efektif kur) %2-4'e kadar çıkabilir. Yurt dışı kredi kartı harcamalarında ise kartın kestiği kur, harcama tarihi değil hesaba yansıma tarihindeki kur olabilir — bu da beklenmedik küçük farklar yaratır.",
      "TCMB kurları hafta içi her gün saat 15:30 civarı açıklanır ve ertesi gün 09:30'dan itibaren 'o günün resmi kuru' sayılır; hafta sonu ve resmi tatillerde son açıklanan kur geçerliliğini korur, bu yüzden pazartesi sabahı gördüğünüz kur aslında cuma günkü kurdur.",
    ],
  },
  "altin-hesaplama": {
    detay: [
      "Gram altın fiyatı ile bilezik/ziynet altın fiyatı arasında işçilik farkı vardır — 22 ayar bir bilezikte kuyumcu, gram altın fiyatının üzerine %8-15 arası işçilik ve kâr payı ekler; bu yüzden aynı gün aynı gramajda aldığınız külçe altın ile takı fiyatı asla birebir aynı çıkmaz.",
      "Çeyrek, yarım, tam ve Cumhuriyet altını gibi basılı altınlarda gramaj sabit değildir (çeyrek altın yaklaşık 1,75 gram saf altın içerir) ve nadir/eski basımlarda numismatik (koleksiyon) değeri fiziksel altın değerinin üzerine çıkabilir — bu araç yalnızca güncel piyasa değerini hesaplar, koleksiyon değerini kapsamaz.",
    ],
  },
  "gpa-hesaplama": {
    detay: [
      "Üniversiteler arasında 4'lük sisteme çevirme katsayıları farklılık gösterebilir — YÖK'ün yayımladığı resmi 100'lük-4'lük dönüşüm tablosu genel referans olsa da, bazı üniversiteler kendi yönetmeliklerinde farklı aralıklar (örneğin AA=90-100 yerine AA=93-100) kullanabilir; yurt dışı başvurusu yapıyorsanız transkriptinizdeki resmi harf notlarını esas alın, bu aracı yalnızca ön tahmin için kullanın.",
      "AKTS (kredi) ağırlıklı ortalama ile ders kredisi ağırlıklı ortalama farklı sonuç verebilir çünkü bir dersin AKTS'si ile yerel kredisi (T-U-K) her zaman orantılı değildir — GANO/AGNO hesaplarken transkriptinizde hangi sistemin kullanıldığını (çoğu devlet üniversitesi yerel kredi kullanır) kontrol edin.",
    ],
  },
  "kidem-tazminati": {
    detay: [
      "Kıdem tazminatı tavanı her 6 ayda bir (Ocak ve Temmuz) memur maaş katsayısına bağlı olarak güncellenir ve brüt maaşınız ne kadar yüksek olursa olsun, hesaplamada bu tavanın üzerine çıkılamaz — yüksek maaşlı bir yöneticinin kıdem tazminatı hesabında gerçek brüt maaşı değil, güncel tavan tutarı esas alınır.",
      "Tazminata esas ücrete yalnızca çıplak brüt maaş değil, düzenli ödenen ikramiye, yol/yemek yardımı gibi süreklilik arz eden yan haklar da (aylığa bölünerek) dahil edilir — bu yüzden 'giydirilmiş brüt ücret' çoğu zaman bordroda yazan çıplak maaştan belirgin yüksektir ve tazminat hesabında gözden kaçırılan en büyük kalemdir.",
      "Kıdem tazminatından yalnızca damga vergisi kesilir, gelir vergisi kesilmez — ihbar tazminatından ise hem gelir vergisi hem damga vergisi kesilir; bu iki kalemi karıştırıp aynı vergi muamelesini beklemek yaygın bir yanılgıdır.",
    ],
  },
  "bmi-hesaplama": {
    detay: [
      "BMI formülü 19. yüzyılda bir Belçikalı istatistikçi tarafından, bireysel sağlık değerlendirmesi için değil, popülasyon ortalamalarını incelemek için geliştirildi — bu yüzden tek bir kişi için 'kesin' bir sağlık hükmü vermez, özellikle kas kütlesi yüksek sporcularda ve yaşlılarda (kas kaybı nedeniyle) yanıltıcı sonuç verebilir.",
      "Asya popülasyonları için WHO bazı ülkelerde daha düşük eşik değerleri (23 üzeri fazla kilolu) önermektedir çünkü aynı BMI değerinde Asya kökenli bireylerde vücut yağ oranı Avrupa kökenlilere göre istatistiksel olarak daha yüksek çıkmaktadır — bu araç standart WHO eşiklerini kullanır.",
    ],
  },
  "yakit-maliyeti": {
    detay: [
      "Katalog tüketim değeri (genellikle üretici tarafından sabit hız ve ideal koşullarda ölçülür) ile şehir içi gerçek tüketim arasında %15-30 fark olması normaldir — özellikle kısa mesafeli, sık dur-kalklı şehir trafiğinde motor hiç ısınmadan kapanıp açıldığından tüketim katalog değerinin belirgin üzerine çıkar.",
      "Yakıt fiyatları il bazında birkaç kuruş farklılık gösterebilir (nakliye bedeli farkı) ve İstanbul-Anadolu yakası ile bazı şehir merkezlerinde otoyol/köprü kullanımı hesaba katılmadığında toplam yolculuk maliyeti bu araçtaki tahminin altında kalabilir.",
    ],
  },
  "gelir-vergisi": {
    detay: [
      "Gelir vergisi dilim sistemi 'marjinal' çalışır, yani bir üst dilime geçtiğinizde tüm geliriniz değil, yalnızca o dilimi aşan kısım daha yüksek oranda vergilendirilir — 'zam aldım, üst dilime girdim, eskisinden az param kaldı' algısı yaygın bir yanlış anlamadır, matematiksel olarak böyle bir şey mümkün değildir.",
      "Serbest meslek ve ticari kazanç sahipleri için matrah, brüt gelirden değil, kanunen kabul edilen giderler düşüldükten sonraki net kazançtan hesaplanır — ücretlilerin brüt maaş üzerinden hesaplanan gelir vergisiyle bu iki sistemi karıştırmak yaygın bir muhasebe hatasıdır.",
    ],
  },
  "formul-ifade": {
    detay: [
      "Parser işlem önceliğini standart matematik kurallarına göre uygular (önce parantez, sonra üs, sonra çarpma-bölme, en son toplama-çıkarma) — 2+3*4 ifadesi 20 değil 14 sonucunu verir, bu yaygın bir kafa karışıklığı kaynağıdır çünkü bazı hesap makineleri soldan sağa doğrudan işlem yapar.",
      "Trigonometrik fonksiyonlar (sin, cos, tan) radyan cinsinden çalışır, derece değil — 90 derecelik açının sinüsünü almak için sin(90) değil sin(90*pi/180) yazmanız gerekir; bu araç derece-radyan dönüşümünü otomatik yapmaz, formülünüze pi/180 çarpanını eklemeniz gerekir.",
    ],
  },
  "konut-kredisi": {
    detay: [
      "Bankaların ilan ettiği faiz oranına ek olarak zorunlu konut sigortası (DASK hariç, yangın/dabs sigortası) ve bazen hayat sigortası kredi paketine dahil edilir; bu sigorta primleri taksite eklendiğinde efektif maliyet ilan edilen faizin 1-2 puan üzerine çıkabilir — teklif karşılaştırırken sigortasız net faiz oranını isteyin.",
      "Ekspertiz raporundaki değer ile satış bedeli farklıysa banka düşük olanı esas alır ve kredi tutarını buna göre sınırlar — özellikle yüksek talep gören bölgelerde satıcının istediği fiyat ile bankanın ekspertiz değeri arasında fark çıkması sık karşılaşılan bir durumdur, peşinatınızı bu ihtimale göre planlayın.",
    ],
  },
  "mevduat-faizi": {
    detay: [
      "Bankaların ilan ettiği brüt faiz oranından stopaj (vadeye göre %5-15 arası) kesildikten sonra elinize geçen net getiri, ilan edilen orandan belirgin düşük olur — 1 aya kadar vadede stopaj oranı en yüksektir, vade uzadıkça bazı dönemlerde stopaj oranı düşebilir; bankanın 'brüt' mü 'net' mi faiz gösterdiğini mutlaka teyit edin.",
      "Vade sonunda parayı çekmeyip otomatik yenilettiğinizde (temdit), faiz oranı o günkü güncel orana göre yeniden belirlenir — yüksek faiz döneminde açtığınız mevduat, oranlar düştükten sonra otomatik yenilendiğinde beklediğinizden düşük getiri sağlayabilir.",
    ],
  },
};
