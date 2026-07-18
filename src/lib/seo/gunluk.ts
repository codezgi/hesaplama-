import type { SeoExtra } from "./types";

/* Yaşam + Tarih + Şans-Karar hesaplayıcıları için SEO içerikleri */
export const gunlukContent: Record<string, SeoExtra> = {
  /* -------------------------------- YAŞAM -------------------------------- */
  "ayakkabi-beden": {
    faqs: [
      { q: "EU, US ve UK ayakkabı bedenleri nasıl dönüşür?", a: "Yaklaşık karşılıklar: EU 42 ≈ US erkek 8,5-9 ≈ UK 8. Kadın numaralandırması ABD'de erkekten ~1,5 numara farklıdır. Markalar arasında yarım numara sapma normaldir." },
      { q: "Ayak uzunluğundan beden nasıl bulunur?", a: "Ayağınızı kâğıda basıp topuktan en uzun parmağa ölçün; EU beden ≈ (cm + 1,5) × 1,5. 27 cm ayak ~EU 42-43'e denk gelir. Akşam ölçmek (ayak genişler) daha doğru sonuç verir." },
    ],
    detay: [
      "Her iki ayağınızı da ölçmek önemlidir çünkü çoğu insanda bir ayak diğerinden 0,5-1 numara farklıdır — ayakkabı seçerken her zaman büyük olan ayağa göre numara almak, küçük ayakta biraz boşluk bırakırken büyük ayakta sıkışmayı önler.",
    ],
  },
  bahsis: {
    faqs: [
      { q: "Bahşiş yüzde kaç bırakılır?", a: "Türkiye'de restoranlarda %5-10 yaygındır; ABD'de %15-20 standarttır. Araç, hesap tutarı ve yüzdeden bahşişi ve kişi başı payı hesaplar." },
      { q: "Servis ücreti alınıyorsa bahşiş gerekir mi?", a: "Hesaba 'servis bedeli' eklenmişse ek bahşiş zorunlu değildir; memnuniyet için küçük bir yuvarlama yeterli görülür." },
    ],
    detay: [
      "Servis bedeli ile bahşiş aynı şey değildir — servis bedeli işletmenin genel giderine (personel, temizlik vb.) katkı olarak faturaya eklenir ve garsona doğrudan gitmeyebilir; bu yüzden hizmetten özellikle memnun kaldıysanız servis bedeli olsa bile küçük bir nakit bahşiş bırakmak garsona ulaşan tek pay olabilir.",
    ],
  },
  "burc-hesaplama": {
    faqs: [
      { q: "Burcum nasıl hesaplanır?", a: "Güneş burcu doğum tarihinize göre belirlenir: örneğin 21 Mart-19 Nisan Koç, 23 Ağustos-22 Eylül Başak. Sınır günlerinde doğanlar için doğum saati belirleyici olabilir." },
      { q: "Yükselen burç nedir, nasıl bulunur?", a: "Doğum anında doğu ufkunda yükselen burçtur; doğum saati ve yerine göre hesaplanır ve yaklaşık her 2 saatte bir değişir. Dış görünüş ve ilk izlenimle ilişkilendirilir." },
    ],
    detay: [
      "Batı astrolojisinin kullandığı tropikal burç sistemi, gökyüzündeki gerçek yıldız takımlarının konumuyla artık örtüşmez — dünyanın ekseninin yavaş sallanması (presesyon) nedeniyle binlerce yıl önce belirlenen tarih aralıkları, bugünün gerçek gökyüzü konumlarından kaymıştır; bu araç geleneksel tropikal tarihleri esas alır.",
    ],
  },
  "gsm-tarife": {
    faqs: [
      { q: "GSM tarifeleri nasıl karşılaştırılır?", a: "Aylık ücreti kullanım profilinize (GB, dakika, SMS) bölerek birim maliyeti kıyaslayın. Kullanmadığınız dev GB paketleri yerine gerçek tüketiminize uyan tarife çoğu zaman daha ekonomiktir." },
      { q: "Numara taşıma ile geçiş avantajlı mı?", a: "Operatörler taşınan numaralara özel indirimli tarifeler sunar; taahhüt süresi ve bitişteki fiyat artışını mutlaka kontrol edin. Taşıma işlemi ücretsizdir ve 1-2 iş günü sürer." },
    ],
    detay: [
      "'İlk 12 ay indirimli' tarifelerde asıl maliyet karşılaştırması taahhüt bitiminden sonraki fiyata göre yapılmalıdır — bir operatör ilk yıl çok cazip görünüp ikinci yıldan itibaren fiyatı ciddi artırabilir; toplam 24 aylık maliyeti hesaplamadan yalnızca ilk ayın fiyatına bakmak yanıltıcı bir karara götürebilir.",
    ],
  },
  "karar-matrisi": {
    howItWorks: [
      "Seçenekleri ve karar kriterlerinizi girin; her kritere önem ağırlığı verin.",
      "Her seçeneğe kriter bazında puan verin — ağırlıklı toplam skoru en yüksek seçenek kazanır.",
    ],
    faqs: [
      { q: "Karar matrisi nedir, ne zaman kullanılır?", a: "Çok kriterli kararları (iş teklifi, ev, araba seçimi) sayısallaştıran yöntemdir: kriterlere ağırlık, seçeneklere puan verilir; Skor = Σ(puan × ağırlık). Duyguları veriye dönüştürerek kör noktaları azaltır." },
      { q: "Ağırlıkları nasıl belirlemeliyim?", a: "Toplam 100 puanı kriterlere dağıtın veya 1-5 önem notu verin. 'Hepsi önemli' tuzağına düşmeyin — en fazla 2-3 kritere yüksek ağırlık vermek ayrıştırıcılığı artırır." },
    ],
    detay: [
      "Karar matrisinin en büyük değeri sonucun kendisinden çok, matrisi doldururken fark ettiğiniz şeylerdir — bazen bir seçeneğe düşük puan vermek istemediğinizi görmek, aslında zihninizde önceden hangi seçeneği istediğinizi biliyor olduğunuzu ortaya çıkarır; araç bu içgörüyü rakamsallaştırarak görünür kılar.",
    ],
  },
  "karbon-ayak-izi": {
    faqs: [
      { q: "Karbon ayak izi nedir?", a: "Faaliyetlerinizin yıllık CO₂ eşdeğeri emisyon toplamıdır. Ulaşım, ısınma, elektrik ve beslenme ana kalemlerdir; Türkiye kişi başı ortalaması ~5-6 ton CO₂/yıl civarındadır." },
      { q: "Ayak izimi en çok ne düşürür?", a: "Uçuşları azaltmak (İstanbul-Londra gidiş-dönüş ~1 ton), toplu taşıma, evde yalıtım ve ısı pompası, kırmızı et tüketimini azaltmak en etkili bireysel adımlardır." },
    ],
    detay: [
      "Geri dönüşüm ve poşet kullanmama gibi görünür alışkanlıklar toplam ayak izinin küçük bir kısmını oluşturur — ulaşım (özellikle uçak yolculuğu) ve konut ısıtması genellikle bireysel ayak izinin çoğunu tek başına belirler; bu yüzden en görünür değil en büyük etkiye sahip kalemlere odaklanmak daha anlamlı sonuç verir.",
    ],
  },
  "kek-malzeme": {
    faqs: [
      { q: "Kek tarifi kişi sayısına göre nasıl ölçeklenir?", a: "Tüm malzemeler aynı oranla çarpılır: 8 kişilik tarifi 12 kişiye uyarlamak için her malzeme 1,5 ile çarpılır. Kabartma tozunda oranı birebir artırmak yerine %10-20 eksik tutmak daha güvenlidir." },
      { q: "Kalıp boyutu değişince pişirme süresi değişir mi?", a: "Evet — daha büyük/derin kalıpta süre uzar, sıcaklığı 10°C düşürüp süreyi uzatmak iç pişmeyi garantiler. Kürdan testi en pratik kontroldür." },
    ],
    detay: [
      "Malzemeleri ölçeklendirirken bir istisna vardır: pişirme süresi ve fırın sıcaklığı orantısal artmaz — hamurun hacmi büyüdükçe merkeze ısının ulaşması orantısızca uzar, bu yüzden 1,5 kat malzeme kullanılan bir kekte süreyi de otomatik 1,5 ile çarpmak yerine kürdan testiyle kontrol etmek gerekir.",
    ],
  },
  "kitap-bitis-suresi": {
    faqs: [
      { q: "Bir kitabı ne kadar sürede bitiririm?", a: "Süre = Sayfa sayısı × sayfa başı okuma dakikası / günlük okuma süreniz. Ortalama okur dakikada ~250 kelime (sayfa başı ~1,5-2 dk) okur; 400 sayfalık roman günde 30 dk ile ~3-4 haftada biter." },
      { q: "Okuma hızımı nasıl ölçerim?", a: "10 dakika boyunca okuyup bitirdiğiniz sayfayı sayın; sayfa/dakika hızınız çıkar. Sitedeki metin okuma süresi aracıyla kelime bazlı hızınızı da ölçebilirsiniz." },
    ],
    detay: [
      "Kitap türü tahmini süreyi belirgin etkiler — yoğun bilgi içeren bir ders kitabı veya felsefe metni, akıcı bir roman ile aynı sayfa sayısına sahip olsa bile iki-üç kat daha yavaş okunur; hesabınızı yaparken kendi ortalama okuma hızınızı değil, o türdeki gerçekçi hızınızı kullanmak tahmini daha isabetli yapar.",
    ],
  },
  "klima-btu": {
    howItWorks: [
      "Odanın m² alanını, tavan yüksekliğini ve güneş alma durumunu girin.",
      "BTU ≈ m² × 200 baz değeriyle hesaplanır; güneşli cephe ve kalabalık için ekleme yapılır.",
    ],
    faqs: [
      { q: "Kaç m² için kaç BTU klima gerekir?", a: "Pratik kural m² başına ~200 BTU'dur: 12-18 m² için 9.000, 18-26 m² için 12.000, 26-36 m² için 18.000 BTU. Güneş alan ve yalıtımsız odalarda %15-20 ekleyin." },
      { q: "Büyük BTU almak daha mı iyi?", a: "Hayır — aşırı büyük klima kısa çevrimlerle çalışıp nem alamaz ve konforu düşürür; küçük olan ise yetişemez. Doğru boyutlandırma hem konfor hem elektrik tüketimi için kritiktir." },
      { q: "Inverter klima ne kazandırır?", a: "Kompresör hızını ihtiyaca göre ayarlayarak sabit çalışır; aç-kapa modellere göre %30-50 daha az elektrik tüketir ve sıcaklık dalgalanması yaratmaz." },
    ],
    detay: [
      "BTU hesabında en sık atlanan kalem tavan yüksekliğidir — standart 2,5 m yerine 3+ m tavanlı bir mekânda soğutulacak hava hacmi arttığından, aynı taban alanına sahip normal tavanlı bir odaya göre daha yüksek BTU gerekir; yüksek tavanlı salonlarda hesaba bu düzeltmeyi eklemezseniz klima yetersiz kalabilir.",
    ],
  },
  "klima-saatlik-elektrik": {
    faqs: [
      { q: "Klima saatte ne kadar elektrik yakar?", a: "9.000 BTU inverter klima dengeye oturduktan sonra saatte ~0,5-0,9 kWh tüketir. Tüketim; dış sıcaklık, yalıtım ve ayarlanan dereceye göre değişir. Maliyet = kWh × güncel birim fiyat." },
      { q: "Klimayı kaç derecede çalıştırmak ekonomik?", a: "Yazın 24-26°C ideal dengedir — her 1 derece düşüş tüketimi ~%5-8 artırır. Fan modunda perde/panjur kullanımı da yükü azaltır." },
    ],
    detay: [
      "Klimayı sürekli açıp kapatmak yerine düşük ayarda sabit çalıştırmak genellikle daha ekonomiktir — özellikle inverter modellerde her yeniden başlatma, kompresörün en yüksek güçle çalıştığı ve en çok elektrik harcadığı andır; dışarı kısa süreliğine çıkarken klimayı kapatmak yerine birkaç derece yükseltmek bu ekstra tüketimi önler.",
    ],
  },
  "kura-cekimi": {
    faqs: [
      { q: "Online kura çekimi adil mi?", a: "Araç, tarayıcının kriptografik rastgelelik kaynağını kullanır — her isme eşit şans tanır ve sonuç öngörülemez. İsimler cihazınızdan çıkmaz; sunucuya gönderilmez." },
      { q: "Aynı kişi tekrar çıkabilir mi?", a: "Tek çekilişte hayır — seçilenler havuzdan düşer. Yeni çekiliş başlatırsanız havuz sıfırlanır ve herkes yeniden aday olur." },
    ],
    detay: [
      "İnsan eliyle yapılan kura çekimleri (isimleri bir torbaya koyup çekmek gibi) katlanma, yapışma veya kâğıt kalınlığı gibi fiziksel faktörlerden dolayı sanılandan daha az adil olabilir — dijital bir kura, bu tür fiziksel önyargılardan tamamen bağımsız olduğu için aslında geleneksel yöntemden daha güvenilir bir adalet sağlar.",
    ],
  },
  "kusak-hesaplama": {
    faqs: [
      { q: "Kuşaklar hangi yıllara göre ayrılır?", a: "Yaygın sınıflama: Baby Boomer 1946-1964, X 1965-1979, Y (Millennial) 1980-1994, Z 1995-2009, Alpha 2010 sonrası. Sınır yılları kaynaklara göre 1-2 yıl oynayabilir." },
      { q: "Kuşak farkları neden önemli?", a: "Her kuşak farklı teknoloji ve ekonomik koşullarda büyüdüğünden iletişim tarzı, iş ve tüketim alışkanlıkları farklılaşır; pazarlama ve insan kaynakları planlamasında yaygın kullanılır." },
    ],
    detay: [
      "Kuşak sınırları katı bilimsel kategoriler değil, sosyologların ve pazarlamacıların pratik amaçlarla üzerinde uzlaştığı yaklaşık aralıklardır — bir yılın sınırında doğan biri kendini hangi kuşağa daha yakın hissettiğine göre iki kuşağın da özelliklerini taşıyabilir, kesin bir kimlik etiketi olarak değil eğilim göstergesi olarak okunmalıdır.",
    ],
  },
  "pizza-dilim": {
    faqs: [
      { q: "Kişi başı ne kadar pizza hesaplanmalı?", a: "Doyurucu porsiyon kişi başı ~500 cm² pizzadır — orta boy (30 cm ≈ 707 cm²) bir pizza 1,5 kişi doyurur. Büyük pizza (36 cm ≈ 1.018 cm²) alan bazında iki ortadan daha avantajlı olabilir." },
      { q: "Bir büyük mü iki orta mı daha kârlı?", a: "Alan yarıçapın karesiyle büyür: 36 cm'lik bir pizza (1.018 cm²), 30 cm'lik iki pizzanın (1.414 cm²) %72'si kadardır. Fiyatları alan başına bölerek karşılaştırın — araç bunu otomatik yapar." },
    ],
    detay: [
      "İnsanların çoğu pizza boyutunu çapa göre değerlendirir ama gerçek 'miktar' alanla orantılıdır ve alan çapın karesiyle büyür — bu yüzden çapı %20 büyük bir pizza, göz kararı sanıldığından çok daha fazla (yaklaşık %44) hamur ve malzeme içerir; büyük boy pizzalar genellikle metrekare fiyatı olarak da daha ekonomiktir.",
    ],
  },
  "podcast-hiz": {
    faqs: [
      { q: "Podcast'i hızlı dinlemek ne kazandırır?", a: "1,5x hızda 60 dakikalık bölüm 40 dakikada biter — %33 zaman tasarrufu. Araç, hız ve içerik süresine göre kazanılan dakikayı hesaplar." },
      { q: "Hangi hız ideal?", a: "Çoğu dinleyici 1,25-1,5x aralığında anlama kaybı yaşamaz; 2x üzeri yoğun içeriklerde kavramayı düşürebilir. Hıza kademeli alışmak (0,25 artışlarla) en rahat yoldur." },
    ],
    detay: [
      "İçerik türü ideal hızı belirgin etkiler — sohbet tarzı, doğal duraklamalarla dolu bir podcast 1,5-1,75x'te bile rahat takip edilirken, yoğun teknik bilgi içeren bir ders veya röportaj 1,25x'in üzerinde anlama kaybına yol açabilir; hızı içeriğin yoğunluğuna göre ayarlamak sabit bir hızda ısrar etmekten daha etkilidir.",
    ],
  },
  "sigara-maliyeti": {
    faqs: [
      { q: "Sigara yılda ne kadara mal olur?", a: "Günde 1 paket × paket fiyatı × 365 formülüyle: güncel fiyatlarla yıllık maliyet on binlerce liraya ulaşır. Araç 5-10-20 yıllık birikimli tutarı ve alternatif yatırım getirisini gösterir." },
      { q: "Sigara parası yatırıma gitse ne olurdu?", a: "Aylık sigara harcaması düzenli birikime yönlendirilse, bileşik getiriyle 10 yılda ev peşinatı düzeyinde tutarlar oluşabilir — araç bu senaryoyu sizin rakamlarınızla hesaplar." },
    ],
    detay: [
      "Sigaranın gerçek maliyeti yalnızca paket fiyatından ibaret değildir — düzenli sigara içen biri, sigortalarda daha yüksek prim öder (özellikle hayat sigortasında), sağlık harcamaları uzun vadede artar ve iş verimliliği araştırmalara göre bir miktar etkilenir; doğrudan paket harcaması bu dolaylı maliyetlerin yalnızca görünen kısmıdır.",
    ],
  },
  "toplu-hesap-bolustur": {
    faqs: [
      { q: "Restoran hesabı adil nasıl bölüşülür?", a: "İki yaygın yol: eşit bölüşme (toplam / kişi) veya herkesin kendi sipariş tutarı + ortak kalemlerin (servis, bahşiş) oransal payı. Araç ikisini de vergi ve bahşiş dahil hesaplar." },
      { q: "Bahşiş hesaba nasıl eklenir?", a: "Bahşiş, hesap toplamının yüzdesi olarak eklenip kişi sayısına bölünür. KDV zaten fiyatlara dahilse yalnızca servis/bahşişi ayrıca bölüştürmek yeterlidir." },
    ],
    detay: [
      "Eşit bölüşme yöntemi pratik olsa da adil olmayabilir — bir kişi yalnızca salata sipariş ederken diğeri birkaç içki ve ana yemek alıyorsa, toplamı kişi sayısına bölmek az yiyen kişiye haksızlık eder; bu araç her iki yöntemi de sunarak grubun tercihine göre daha adil bir bölüşüm yapmasını sağlar.",
    ],
  },
  "yagmur-litre": {
    faqs: [
      { q: "1 mm yağış ne kadar su demektir?", a: "1 mm yağış = m² başına 1 litre su. 100 m² çatıya 20 mm yağmur düştüğünde 2.000 litre su toplanabilir — yağmur hasadı planlamasının temel hesabıdır." },
      { q: "Yağış şiddeti nasıl sınıflanır?", a: "Meteorolojide saatte 0,1-2 mm hafif, 2-10 mm orta, 10-50 mm kuvvetli, 50+ mm çok kuvvetli/sağanak kabul edilir." },
    ],
    detay: [
      "mm cinsinden ölçülen yağış miktarının çatı alanından bağımsız olması ilk bakışta şaşırtıcıdır — 1 mm yağış her zaman m² başına 1 litre demektir, çatınız 50 m² de olsa 500 m² de olsa birim alan başına düşen su miktarı aynıdır; toplam hacim yalnızca çatı alanınızla orantılı büyür.",
    ],
  },
  "yumurta-pisirme": {
    faqs: [
      { q: "Kayısı kıvamı yumurta kaç dakika haşlanır?", a: "Kaynayan suya bırakılan oda sıcaklığındaki M boy yumurta: 6 dk akışkan sarı (kayısı), 8 dk kremsi, 10-12 dk tam katı olur. Buzdolabından çıkan yumurtaya ~1 dk ekleyin." },
      { q: "Yumurta neden çatlar, nasıl önlenir?", a: "Ani ısı farkı ve iç basınç çatlatır: yumurtayı oda sıcaklığına getirmek, suya tuz/sirke eklemek ve kaynamayı hafifletmek riski azaltır. Haşlama sonrası soğuk su kabuk soymayı kolaylaştırır." },
    ],
    detay: [
      "Süreler yumurtanın büyüklüğüne göre de değişir — S boy bir yumurta M boydan yaklaşık 1 dakika daha kısa, L boy ise 1 dakika daha uzun sürede aynı kıvama ulaşır; tarifteki süreleri harfiyen uygularken elinizdeki yumurtanın gerçek boyutunu da hesaba katmak sonucu belirgin değiştirebilir.",
    ],
  },
  "yuzuk-olcusu": {
    faqs: [
      { q: "Yüzük ölçüsü nasıl alınır?", a: "Mevcut yüzüğün iç çapını cetvelle ölçün: iç çap mm × π = çevre. TR ölçüsü genellikle iç çevre (mm) − 40 olarak anılır; örneğin 56 mm çevre = 16 numara. Araç çap-çevre-numara dönüşümünü yapar." },
      { q: "Parmak ölçüsü gün içinde değişir mi?", a: "Evet — parmaklar sıcakta ve akşam saatlerinde şişer, soğukta incelir. Ölçüyü gün ortasında, normal sıcaklıkta almak en doğrusudur." },
    ],
    detay: [
      "Baskın (kalem tutan) el parmakları genellikle diğer elden biraz daha kalındır çünkü daha sık kullanılan kaslar hafifçe gelişir — yüzük alırken hangi eli hedeflediğinize göre o eldeki parmağı ölçmek, karşı elden alınan ölçüye göre daha isabetli bir numara verir.",
    ],
  },
  "zekat-hesaplama": {
    howItWorks: [
      "Nakit, altın, döviz ve ticari mal varlıklarınızı girin; borçlarınızı düşün.",
      "Net varlık nisap (85 gr altın karşılığı) üzerindeyse %2,5 zekat hesaplanır.",
    ],
    faqs: [
      { q: "Zekat nasıl hesaplanır?", a: "Temel ihtiyaç ve borçlar düşüldükten sonra kalan zekata tabi mal (nakit, altın, döviz, ticari mal) nisabı aşıyor ve üzerinden 1 kameri yıl geçmişse %2,5'i (kırkta biri) zekat olarak verilir." },
      { q: "Nisap miktarı nedir?", a: "Zekat yükümlülüğü sınırıdır: 85 gr altın (veya 595 gr gümüş) değeridir. Güncel gram altın fiyatıyla TL karşılığı her gün değişir — araç güncel kurla hesaplar." },
      { q: "Hangi mallara zekat düşmez?", a: "Oturulan ev, binilen araç, ev eşyası ve mesleki alet-edevat gibi temel ihtiyaç malları zekata tabi değildir. Kiraya verilen mülkün kendisi değil, birikmiş kira geliri zekata girer." },
    ],
    detay: [
      "Zekat hesabında kameri (hicri) yıl esas alınır, miladi yıl değil — bu 354-355 günlük süre miladi yıldan yaklaşık 11 gün kısadır; bazı kişiler pratiklik açısından her miladi Ramazan'da zekat vermeyi tercih eder, bu durumda üzerinden geçen sürenin tam 1 kameri yılı biraz aştığını (ki bu zekatı geçersiz kılmaz, yalnızca biraz erken vermek anlamına gelir) bilmekte fayda var.",
    ],
  },

  /* -------------------------------- TARİH -------------------------------- */
  "dogum-gunune-kalan": {
    faqs: [
      { q: "Doğum günüme kaç gün kaldı?", a: "Araç, doğum tarihinizin bu yılki (geçtiyse gelecek yılki) karşılığına kalan gün, saat ve dakikayı canlı sayaçla gösterir." },
      { q: "29 Şubat doğumlular ne zaman kutlar?", a: "Artık yıl olmayan yıllarda yaygın tercih 28 Şubat veya 1 Mart'tır; resmî işlemlerde çoğu ülke 1 Mart'ı esas alır." },
    ],
    detay: [
      "29 Şubat'ta doğanların gerçek doğum günü 4 yılda bir gelir ama yaşları takvim tarafından değil, doğduğu tarihten geçen gün sayısıyla belirlenir — yani 29 Şubat 2024 doğumlu biri, 2026'nın Şubat-Mart geçişinde takvimde '29 Şubat' görünmese de tam 2 yaşını doldurmuş olur; bu araç bu geçişi doğru şekilde hesaba katar.",
    ],
  },
  "gelecekteki-yas": {
    faqs: [
      { q: "Belirli bir tarihte kaç yaşında olacağım?", a: "Hedef tarihten doğum tarihi çıkarılır; doğum günü henüz gelmediyse bir eksik alınır. Araç yıl-ay-gün kırılımıyla kesin yaşı verir." },
      { q: "Emeklilik/askerlik gibi yaş şartlarında hangi tarih esas alınır?", a: "Kurumlar genellikle işlem tarihindeki tamamlanmış yaşı esas alır; bazı düzenlemelerde yıl sonu itibarıyla yaş hesaplanır. İlgili mevzuat hükmünü kontrol edin." },
    ],
    detay: [
      "'Doğum yılına göre' ile 'doğum tarihine göre' hesaplanan yaş şartları önemli farklar yaratabilir — bir düzenleme 'ilgili yılın sonunda kaç yaşında olacağınızı' esas alıyorsa, henüz doğum gününüz gelmemiş olsa bile o yılın sonundaki tamamlanmış yaşınız değil, yıl sonu itibarıyla dolduracağınız yaş sayılabilir; başvuru yaptığınız kurumun tam olarak hangi yöntemi kullandığını mutlaka netleştirin.",
    ],
  },
  "haftanin-gunu": {
    faqs: [
      { q: "Doğduğum gün haftanın hangi günüydü?", a: "Araç, girilen tarihi takvim algoritmasıyla (Zeller benzeri) haftanın gününe çevirir — 1900'lerden geleceğe tüm tarihler için çalışır." },
      { q: "Aynı tarih kaç yılda bir aynı güne denk gelir?", a: "Takvim 28 yıllık döngüyle tekrarlar (artık yıl düzeni bozulmadıkça). Yani 2026'daki takvim 2054'te birebir aynıdır." },
    ],
    detay: [
      "28 yıllık döngü kuralı, 100'e bölünüp 400'e bölünmeyen yüzyıl yıllarında (1900, 2100 gibi) bozulur çünkü bu yıllar artık yıl olması beklenirken aslında değildir — Gregoryen takvimin bu istisnası, güneş yılını daha hassas takip etmek için 16. yüzyılda özellikle eklenmiştir ve döngünün neden tam olarak her zaman 28 yıl olmadığını açıklar.",
    ],
  },
  "hicri-takvim": {
    faqs: [
      { q: "Hicri takvim ile miladi takvim farkı nedir?", a: "Hicri takvim ay döngüsüne dayanır ve yıl 354-355 gündür — miladiden ~11 gün kısadır. Bu yüzden dini günler her yıl ~11 gün erkene kayar." },
      { q: "Hicri yıl nasıl hesaplanır?", a: "Yaklaşık dönüşüm: Hicri ≈ (Miladi − 622) × 33/32. Kesin karşılık, ayın gözlemine dayalı takvim tablolarıyla belirlenir; araç standart astronomik hesabı kullanır." },
    ],
    detay: [
      "33/32 çarpanı tesadüfi değildir — yaklaşık 33 miladi yılda 34 hicri yıl geçer, çünkü hicri yıl miladiden yaklaşık %3 daha kısadır; bu birikimli fark, uzun vadede iki takvim arasındaki yıl sayısının neden birebir aynı oranda artmadığını açıklar.",
    ],
  },
  "kac-yasindayim": {
    faqs: [
      { q: "Yaşım gün ve saat olarak nasıl hesaplanır?", a: "Doğum tarih-saatiniz ile şu an arasındaki fark; yıl, ay, gün, saat, dakika kırılımıyla hesaplanır. 30 yaş ≈ 10.957 gün ≈ 262.968 saattir." },
      { q: "Resmî yaş ile bu hesap aynı mı?", a: "Evet — resmî (kronolojik) yaş, tamamlanmış yıl sayısıdır ve doğum günüzde bir artar. Araç ek olarak toplam gün/saat gibi detayları gösterir." },
    ],
    detay: [
      "Kore tarzı 'yaş sayma' sistemi (doğuşta 1 yaşında sayılıp her yeni yılda bir eklenen sistem) ile Türkiye'nin kullandığı kronolojik yaş arasındaki fark, aynı kişinin iki farklı sistemde 1-2 yaş farklı görünmesine yol açabilir — bu araç yalnızca uluslararası standart kronolojik yaşı hesaplar.",
    ],
  },
  "ramazan-sayaci": {
    faqs: [
      { q: "Ramazan her yıl neden öne geliyor?", a: "Ramazan hicri takvime bağlıdır; hicri yıl miladiden ~11 gün kısa olduğundan Ramazan her yıl ~11 gün erken başlar ve ~33 yılda tüm mevsimleri dolaşır." },
      { q: "Ramazanın kesin başlangıcı nasıl belirlenir?", a: "Diyanet, astronomik hesapla hilalin görülebilirliğini esas alarak yıllar öncesinden takvim yayımlar; bazı ülkelerde fiilî hilal gözlemi tercih edildiğinden 1 günlük fark oluşabilir." },
    ],
    detay: [
      "Ramazan'ın ~33 yılda tüm mevsimleri dolaşması demek, bugün yaz aylarına denk gelen uzun ve sıcak oruç günlerinin birkaç on yıl sonra kış aylarına, yani kısa ve serin günlere kayacağı anlamına gelir — bu döngü, hicri takvimin güneş yılından bağımsız, tamamen ay evrelerine dayalı olmasının doğal bir sonucudur.",
    ],
  },
  "tarih-gun-ekle": {
    faqs: [
      { q: "Bir tarihe gün eklemek ne işe yarar?", a: "Yasal sürelerin (itiraz, iade, deneme süresi) bitişini, proje teslimini veya ilaç kürü sonunu bulmak için kullanılır: örneğin 14 günlük cayma hakkı hangi güne denk geliyor?" },
      { q: "İş günü ile takvim günü farkı nedir?", a: "Takvim günü hafta sonu-tatil ayırmaz; iş günü yalnızca Pazartesi-Cuma sayar. Mevzuatta süre 'gün' olarak geçiyorsa kural olarak takvim günü anlaşılır, 'iş günü' ayrıca belirtilir." },
    ],
    detay: [
      "Sürenin son gününün resmî tatile denk gelmesi durumunda genel kural, sürenin tatili takip eden ilk iş günü sonuna kadar uzamasıdır — bu küçük ayrıntı, özellikle hafta sonuna veya bayram tatiline denk gelen son günlerde bir günlük ekstra süre kazandırabilir ve birçok kişi tarafından bilinmediği için haksız yere kaçırılan haklara yol açabilir.",
    ],
  },
  "yas-farki-iki-kisi": {
    faqs: [
      { q: "İki kişi arasındaki yaş farkı nasıl hesaplanır?", a: "İki doğum tarihi arasındaki fark yıl-ay-gün olarak hesaplanır. Araç ayrıca farkın toplam gün karşılığını gösterir." },
      { q: "Yaş farkı hangi tarihte olursa olsun sabit mi?", a: "Gün bazında evet; ancak 'yaş' tamsayı olarak sorulduğunda doğum günlerinin sırasına göre yıl farkı ±1 görünebilir (biri kutlamış, diğeri kutlamamışken)." },
    ],
    detay: [
      "İki kişinin 'kaç yaş farkı var' sorusuna verilen cevap, doğum tarihlerinin yıl içindeki sırasına göre görünüşte değişebilir — Ocak doğumlu biri ile Aralık doğumlu biri arasında aynı doğum yılı farkı olsa da, yılın hangi ayında olduğunuza göre 'şu an kaç yaş farklılar' sorusunun cevabı bir yıl oynayabilir; gerçek fark gün bazında hep sabittir, yalnızca yıla yuvarlarken bu görünür oynama ortaya çıkar.",
    ],
  },
  "yildonumu-sayaci": {
    faqs: [
      { q: "Evlilik yıldönümleri nasıl anılır?", a: "Yaygın gelenek: 1. kâğıt, 5. ahşap, 10. teneke, 25. gümüş, 50. altın yıldönümüdür. Araç, tarihinizden geçen süreyi ve gelecek yıldönümüne kalan günü hesaplar." },
      { q: "Ay ve gün bazında kutlama (aylık yıldönümü) nasıl hesaplanır?", a: "Araç, başlangıç tarihinden itibaren geçen tam ay sayısını ve 100. gün, 1000. gün gibi kilometre taşlarını da listeler." },
    ],
    detay: [
      "1000. gün gibi kilometre taşları basit görünse de yıla tam olarak denk gelmez — 1000 gün, 365,25 güne bölündüğünde yaklaşık 2 yıl 9 aya karşılık gelir; bu yüzden 'bininci gününüz' kutlaması genellikle bir yıldönümü tarihinden farklı bir günde düşer ve ayrı bir kutlama fırsatı olarak değerlendirilebilir.",
    ],
  },
  "zaman-dilimi-farki": {
    faqs: [
      { q: "İki şehir arasında saat farkı nasıl hesaplanır?", a: "Şehirlerin UTC ofsetleri karşılaştırılır: İstanbul UTC+3, New York UTC−5 (yaz UTC−4) → fark 7-8 saat. Araç yaz saati uygulamasını otomatik dikkate alır." },
      { q: "Yaz saati uygulaması farkı değiştirir mi?", a: "Evet — ülkeler yaz saatine farklı tarihlerde geçtiğinden fark yılın bölümlerine göre 1 saat oynayabilir. Türkiye sabit UTC+3 kullanır, karşı ülke değişiyorsa fark mevsimsel değişir." },
    ],
    detay: [
      "Avrupa ve ABD, yaz saatine farklı haftalarda geçip çıktığından, yılın belirli birkaç haftasında iki bölge arasındaki saat farkı normal dönemden bir saat farklı olabilir — özellikle Mart sonu ve Ekim sonundaki geçiş haftalarında uçuş veya toplantı planlarken bu geçici sapmayı hesaba katmamak yanlış saatte görüşmeye kalkmaya yol açabilir.",
    ],
  },

  /* ------------------------------ ŞANS-KARAR ----------------------------- */
  "ne-yiyeyim": {
    faqs: [
      { q: "Ne yiyeceğime karar veremiyorum, bu araç nasıl yardım eder?", a: "Türk mutfağı, hızlı, sağlıklı, dünya mutfağı ve tatlı kategorilerinden 50+ seçenek arasından rastgele ve adil bir öneri sunar — karar yorgunluğunu tek tıkla çözer." },
      { q: "Öneriler nasıl seçiliyor?", a: "Seçtiğiniz kategorideki yemekler arasından kriptografik rastgelelikle eşit şanslı seçim yapılır; aynı öneriyi beğenmezseniz tekrar çevirebilirsiniz." },
    ],
    detay: [
      "Karar yorgunluğu (decision fatigue) gerçek bir psikolojik olgudur — gün içinde çok fazla küçük karar vermek, sonraki kararların kalitesini düşürür; 'ne yiyeceğim' gibi düşük riskli ama sık tekrarlanan kararları rastgele bir araca devretmek, zihinsel enerjiyi daha önemli kararlar için saklamanın basit ama etkili bir yoludur.",
    ],
  },
  "tas-kagit-makas": {
    faqs: [
      { q: "Taş kağıt makas kazanma stratejisi var mı?", a: "Bilgisayara karşı yoktur — seçim tamamen rastgeledir ve her hamlenin şansı eşittir (kazanma %33,3). İnsanlara karşı ise istatistiksel eğilimler (erkeklerin taşla açması gibi) küçük avantaj sağlayabilir." },
      { q: "Oyunun kuralı nedir?", a: "Taş makası kırar, makas kağıdı keser, kağıt taşı sarar. Aynı seçim beraberliktir; araç skoru otomatik tutar." },
    ],
    detay: [
      "İnsanlara karşı oynarken küçük bir psikolojik avantaj vardır çünkü insanlar tamamen rastgele davranmakta zorlanır — kaybettikten sonra aynı hamleyi tekrarlama veya kazandıktan sonra değiştirme gibi bilinçsiz kalıplar sergileriz; bilgisayara karşı ise böyle bir kalıp yoktur, bu yüzden bu araçtaki oyun gerçekten %33,3 şansa dayalıdır.",
    ],
  },
  "wpm-test": {
    faqs: [
      { q: "WPM (dakikada kelime) nasıl hesaplanır?", a: "Standart tanımda 5 karakter = 1 kelime sayılır: Brüt WPM = (karakter/5) / dakika. Net WPM, hatalar düşülerek bulunur ve gerçek beceriyi yansıtır." },
      { q: "İyi bir yazma hızı kaç WPM'dir?", a: "Ortalama kullanıcı 35-45, iyi seviye 50-70, profesyonel 80+ WPM'dir. Doğruluk hızdan önemlidir — %97+ doğrulukla hız kademeli artırılmalıdır." },
      { q: "Yazma hızımı nasıl artırırım?", a: "On parmak tekniği, klavyeye bakmama alışkanlığı ve günde 15-20 dk düzenli pratik en etkili yoldur; birkaç ayda %30-50 artış tipiktir." },
    ],
    detay: [
      "Hız artırma çalışmalarında en sık yapılan hata, doğruluğu feda ederek hızlanmaya çalışmaktır — gerçekte doğru sırayla giden bir gelişim, önce %98+ doğrulukla rahat bir hızda tutarlılık kazanmak, sonra kademeli olarak hızı artırmaktır; sürekli hata yaparak pratik yapmak, hatalı parmak alışkanlıklarını pekiştirip uzun vadede ilerlemeyi yavaşlatır.",
    ],
  },
  "zar-at": {
    faqs: [
      { q: "Online zar atma adil mi?", a: "Araç kriptografik rastgelelik kullanır — her yüzün gelme olasılığı tam olarak 1/6'dır ve seri sonuçlar birbirinden bağımsızdır." },
      { q: "İki zarın toplamında hangi sayı en çok gelir?", a: "7 — çünkü 6 farklı kombinasyonla (1+6, 2+5, 3+4 ve tersleri) oluşur; olasılığı 6/36 = %16,7'dir. 2 ve 12 en nadir toplamlardır (1/36)." },
    ],
    detay: [
      "Tavla ve zar tabanlı birçok masa oyununun kural tasarımı bu 7 sayısının merkezi eğilimini kullanır — olasılık dağılımı 2'den 12'ye doğru önce artıp 7'de tepe yapıp sonra azalan bir üçgen (piramit) şeklindedir; oyun tasarımcıları bu bilgiyi bilerek kullanır, örneğin bazı zar oyunlarında 7 sayısına özel kurallar tanımlanmasının sebebi bu istatistiksel merkeziliktir.",
    ],
  },
};
