import type { SeoExtra } from "./types";

/* Yaşam + Tarih + Şans-Karar hesaplayıcıları için SEO içerikleri */
export const gunlukContent: Record<string, SeoExtra> = {
  /* -------------------------------- YAŞAM -------------------------------- */
  "ayakkabi-beden": {
    faqs: [
      { q: "EU, US ve UK ayakkabı bedenleri nasıl dönüşür?", a: "Yaklaşık karşılıklar: EU 42 ≈ US erkek 8,5-9 ≈ UK 8. Kadın numaralandırması ABD'de erkekten ~1,5 numara farklıdır. Markalar arasında yarım numara sapma normaldir." },
      { q: "Ayak uzunluğundan beden nasıl bulunur?", a: "Ayağınızı kâğıda basıp topuktan en uzun parmağa ölçün; EU beden ≈ (cm + 1,5) × 1,5. 27 cm ayak ~EU 42-43'e denk gelir. Akşam ölçmek (ayak genişler) daha doğru sonuç verir." },
    ],
  },
  bahsis: {
    faqs: [
      { q: "Bahşiş yüzde kaç bırakılır?", a: "Türkiye'de restoranlarda %5-10 yaygındır; ABD'de %15-20 standarttır. Araç, hesap tutarı ve yüzdeden bahşişi ve kişi başı payı hesaplar." },
      { q: "Servis ücreti alınıyorsa bahşiş gerekir mi?", a: "Hesaba 'servis bedeli' eklenmişse ek bahşiş zorunlu değildir; memnuniyet için küçük bir yuvarlama yeterli görülür." },
    ],
  },
  "burc-hesaplama": {
    faqs: [
      { q: "Burcum nasıl hesaplanır?", a: "Güneş burcu doğum tarihinize göre belirlenir: örneğin 21 Mart-19 Nisan Koç, 23 Ağustos-22 Eylül Başak. Sınır günlerinde doğanlar için doğum saati belirleyici olabilir." },
      { q: "Yükselen burç nedir, nasıl bulunur?", a: "Doğum anında doğu ufkunda yükselen burçtur; doğum saati ve yerine göre hesaplanır ve yaklaşık her 2 saatte bir değişir. Dış görünüş ve ilk izlenimle ilişkilendirilir." },
    ],
  },
  "gsm-tarife": {
    faqs: [
      { q: "GSM tarifeleri nasıl karşılaştırılır?", a: "Aylık ücreti kullanım profilinize (GB, dakika, SMS) bölerek birim maliyeti kıyaslayın. Kullanmadığınız dev GB paketleri yerine gerçek tüketiminize uyan tarife çoğu zaman daha ekonomiktir." },
      { q: "Numara taşıma ile geçiş avantajlı mı?", a: "Operatörler taşınan numaralara özel indirimli tarifeler sunar; taahhüt süresi ve bitişteki fiyat artışını mutlaka kontrol edin. Taşıma işlemi ücretsizdir ve 1-2 iş günü sürer." },
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
  },
  "karbon-ayak-izi": {
    faqs: [
      { q: "Karbon ayak izi nedir?", a: "Faaliyetlerinizin yıllık CO₂ eşdeğeri emisyon toplamıdır. Ulaşım, ısınma, elektrik ve beslenme ana kalemlerdir; Türkiye kişi başı ortalaması ~5-6 ton CO₂/yıl civarındadır." },
      { q: "Ayak izimi en çok ne düşürür?", a: "Uçuşları azaltmak (İstanbul-Londra gidiş-dönüş ~1 ton), toplu taşıma, evde yalıtım ve ısı pompası, kırmızı et tüketimini azaltmak en etkili bireysel adımlardır." },
    ],
  },
  "kek-malzeme": {
    faqs: [
      { q: "Kek tarifi kişi sayısına göre nasıl ölçeklenir?", a: "Tüm malzemeler aynı oranla çarpılır: 8 kişilik tarifi 12 kişiye uyarlamak için her malzeme 1,5 ile çarpılır. Kabartma tozunda oranı birebir artırmak yerine %10-20 eksik tutmak daha güvenlidir." },
      { q: "Kalıp boyutu değişince pişirme süresi değişir mi?", a: "Evet — daha büyük/derin kalıpta süre uzar, sıcaklığı 10°C düşürüp süreyi uzatmak iç pişmeyi garantiler. Kürdan testi en pratik kontroldür." },
    ],
  },
  "kitap-bitis-suresi": {
    faqs: [
      { q: "Bir kitabı ne kadar sürede bitiririm?", a: "Süre = Sayfa sayısı × sayfa başı okuma dakikası / günlük okuma süreniz. Ortalama okur dakikada ~250 kelime (sayfa başı ~1,5-2 dk) okur; 400 sayfalık roman günde 30 dk ile ~3-4 haftada biter." },
      { q: "Okuma hızımı nasıl ölçerim?", a: "10 dakika boyunca okuyup bitirdiğiniz sayfayı sayın; sayfa/dakika hızınız çıkar. Sitedeki metin okuma süresi aracıyla kelime bazlı hızınızı da ölçebilirsiniz." },
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
  },
  "klima-saatlik-elektrik": {
    faqs: [
      { q: "Klima saatte ne kadar elektrik yakar?", a: "9.000 BTU inverter klima dengeye oturduktan sonra saatte ~0,5-0,9 kWh tüketir. Tüketim; dış sıcaklık, yalıtım ve ayarlanan dereceye göre değişir. Maliyet = kWh × güncel birim fiyat." },
      { q: "Klimayı kaç derecede çalıştırmak ekonomik?", a: "Yazın 24-26°C ideal dengedir — her 1 derece düşüş tüketimi ~%5-8 artırır. Fan modunda perde/panjur kullanımı da yükü azaltır." },
    ],
  },
  "kura-cekimi": {
    faqs: [
      { q: "Online kura çekimi adil mi?", a: "Araç, tarayıcının kriptografik rastgelelik kaynağını kullanır — her isme eşit şans tanır ve sonuç öngörülemez. İsimler cihazınızdan çıkmaz; sunucuya gönderilmez." },
      { q: "Aynı kişi tekrar çıkabilir mi?", a: "Tek çekilişte hayır — seçilenler havuzdan düşer. Yeni çekiliş başlatırsanız havuz sıfırlanır ve herkes yeniden aday olur." },
    ],
  },
  "kusak-hesaplama": {
    faqs: [
      { q: "Kuşaklar hangi yıllara göre ayrılır?", a: "Yaygın sınıflama: Baby Boomer 1946-1964, X 1965-1979, Y (Millennial) 1980-1994, Z 1995-2009, Alpha 2010 sonrası. Sınır yılları kaynaklara göre 1-2 yıl oynayabilir." },
      { q: "Kuşak farkları neden önemli?", a: "Her kuşak farklı teknoloji ve ekonomik koşullarda büyüdüğünden iletişim tarzı, iş ve tüketim alışkanlıkları farklılaşır; pazarlama ve insan kaynakları planlamasında yaygın kullanılır." },
    ],
  },
  "pizza-dilim": {
    faqs: [
      { q: "Kişi başı ne kadar pizza hesaplanmalı?", a: "Doyurucu porsiyon kişi başı ~500 cm² pizzadır — orta boy (30 cm ≈ 707 cm²) bir pizza 1,5 kişi doyurur. Büyük pizza (36 cm ≈ 1.018 cm²) alan bazında iki ortadan daha avantajlı olabilir." },
      { q: "Bir büyük mü iki orta mı daha kârlı?", a: "Alan yarıçapın karesiyle büyür: 36 cm'lik bir pizza (1.018 cm²), 30 cm'lik iki pizzanın (1.414 cm²) %72'si kadardır. Fiyatları alan başına bölerek karşılaştırın — araç bunu otomatik yapar." },
    ],
  },
  "podcast-hiz": {
    faqs: [
      { q: "Podcast'i hızlı dinlemek ne kazandırır?", a: "1,5x hızda 60 dakikalık bölüm 40 dakikada biter — %33 zaman tasarrufu. Araç, hız ve içerik süresine göre kazanılan dakikayı hesaplar." },
      { q: "Hangi hız ideal?", a: "Çoğu dinleyici 1,25-1,5x aralığında anlama kaybı yaşamaz; 2x üzeri yoğun içeriklerde kavramayı düşürebilir. Hıza kademeli alışmak (0,25 artışlarla) en rahat yoldur." },
    ],
  },
  "sigara-maliyeti": {
    faqs: [
      { q: "Sigara yılda ne kadara mal olur?", a: "Günde 1 paket × paket fiyatı × 365 formülüyle: güncel fiyatlarla yıllık maliyet on binlerce liraya ulaşır. Araç 5-10-20 yıllık birikimli tutarı ve alternatif yatırım getirisini gösterir." },
      { q: "Sigara parası yatırıma gitse ne olurdu?", a: "Aylık sigara harcaması düzenli birikime yönlendirilse, bileşik getiriyle 10 yılda ev peşinatı düzeyinde tutarlar oluşabilir — araç bu senaryoyu sizin rakamlarınızla hesaplar." },
    ],
  },
  "toplu-hesap-bolustur": {
    faqs: [
      { q: "Restoran hesabı adil nasıl bölüşülür?", a: "İki yaygın yol: eşit bölüşme (toplam / kişi) veya herkesin kendi sipariş tutarı + ortak kalemlerin (servis, bahşiş) oransal payı. Araç ikisini de vergi ve bahşiş dahil hesaplar." },
      { q: "Bahşiş hesaba nasıl eklenir?", a: "Bahşiş, hesap toplamının yüzdesi olarak eklenip kişi sayısına bölünür. KDV zaten fiyatlara dahilse yalnızca servis/bahşişi ayrıca bölüştürmek yeterlidir." },
    ],
  },
  "yagmur-litre": {
    faqs: [
      { q: "1 mm yağış ne kadar su demektir?", a: "1 mm yağış = m² başına 1 litre su. 100 m² çatıya 20 mm yağmur düştüğünde 2.000 litre su toplanabilir — yağmur hasadı planlamasının temel hesabıdır." },
      { q: "Yağış şiddeti nasıl sınıflanır?", a: "Meteorolojide saatte 0,1-2 mm hafif, 2-10 mm orta, 10-50 mm kuvvetli, 50+ mm çok kuvvetli/sağanak kabul edilir." },
    ],
  },
  "yumurta-pisirme": {
    faqs: [
      { q: "Kayısı kıvamı yumurta kaç dakika haşlanır?", a: "Kaynayan suya bırakılan oda sıcaklığındaki M boy yumurta: 6 dk akışkan sarı (kayısı), 8 dk kremsi, 10-12 dk tam katı olur. Buzdolabından çıkan yumurtaya ~1 dk ekleyin." },
      { q: "Yumurta neden çatlar, nasıl önlenir?", a: "Ani ısı farkı ve iç basınç çatlatır: yumurtayı oda sıcaklığına getirmek, suya tuz/sirke eklemek ve kaynamayı hafifletmek riski azaltır. Haşlama sonrası soğuk su kabuk soymayı kolaylaştırır." },
    ],
  },
  "yuzuk-olcusu": {
    faqs: [
      { q: "Yüzük ölçüsü nasıl alınır?", a: "Mevcut yüzüğün iç çapını cetvelle ölçün: iç çap mm × π = çevre. TR ölçüsü genellikle iç çevre (mm) − 40 olarak anılır; örneğin 56 mm çevre = 16 numara. Araç çap-çevre-numara dönüşümünü yapar." },
      { q: "Parmak ölçüsü gün içinde değişir mi?", a: "Evet — parmaklar sıcakta ve akşam saatlerinde şişer, soğukta incelir. Ölçüyü gün ortasında, normal sıcaklıkta almak en doğrusudur." },
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
  },

  /* -------------------------------- TARİH -------------------------------- */
  "dogum-gunune-kalan": {
    faqs: [
      { q: "Doğum günüme kaç gün kaldı?", a: "Araç, doğum tarihinizin bu yılki (geçtiyse gelecek yılki) karşılığına kalan gün, saat ve dakikayı canlı sayaçla gösterir." },
      { q: "29 Şubat doğumlular ne zaman kutlar?", a: "Artık yıl olmayan yıllarda yaygın tercih 28 Şubat veya 1 Mart'tır; resmî işlemlerde çoğu ülke 1 Mart'ı esas alır." },
    ],
  },
  "gelecekteki-yas": {
    faqs: [
      { q: "Belirli bir tarihte kaç yaşında olacağım?", a: "Hedef tarihten doğum tarihi çıkarılır; doğum günü henüz gelmediyse bir eksik alınır. Araç yıl-ay-gün kırılımıyla kesin yaşı verir." },
      { q: "Emeklilik/askerlik gibi yaş şartlarında hangi tarih esas alınır?", a: "Kurumlar genellikle işlem tarihindeki tamamlanmış yaşı esas alır; bazı düzenlemelerde yıl sonu itibarıyla yaş hesaplanır. İlgili mevzuat hükmünü kontrol edin." },
    ],
  },
  "haftanin-gunu": {
    faqs: [
      { q: "Doğduğum gün haftanın hangi günüydü?", a: "Araç, girilen tarihi takvim algoritmasıyla (Zeller benzeri) haftanın gününe çevirir — 1900'lerden geleceğe tüm tarihler için çalışır." },
      { q: "Aynı tarih kaç yılda bir aynı güne denk gelir?", a: "Takvim 28 yıllık döngüyle tekrarlar (artık yıl düzeni bozulmadıkça). Yani 2026'daki takvim 2054'te birebir aynıdır." },
    ],
  },
  "hicri-takvim": {
    faqs: [
      { q: "Hicri takvim ile miladi takvim farkı nedir?", a: "Hicri takvim ay döngüsüne dayanır ve yıl 354-355 gündür — miladiden ~11 gün kısadır. Bu yüzden dini günler her yıl ~11 gün erkene kayar." },
      { q: "Hicri yıl nasıl hesaplanır?", a: "Yaklaşık dönüşüm: Hicri ≈ (Miladi − 622) × 33/32. Kesin karşılık, ayın gözlemine dayalı takvim tablolarıyla belirlenir; araç standart astronomik hesabı kullanır." },
    ],
  },
  "kac-yasindayim": {
    faqs: [
      { q: "Yaşım gün ve saat olarak nasıl hesaplanır?", a: "Doğum tarih-saatiniz ile şu an arasındaki fark; yıl, ay, gün, saat, dakika kırılımıyla hesaplanır. 30 yaş ≈ 10.957 gün ≈ 262.968 saattir." },
      { q: "Resmî yaş ile bu hesap aynı mı?", a: "Evet — resmî (kronolojik) yaş, tamamlanmış yıl sayısıdır ve doğum günüzde bir artar. Araç ek olarak toplam gün/saat gibi detayları gösterir." },
    ],
  },
  "ramazan-sayaci": {
    faqs: [
      { q: "Ramazan her yıl neden öne geliyor?", a: "Ramazan hicri takvime bağlıdır; hicri yıl miladiden ~11 gün kısa olduğundan Ramazan her yıl ~11 gün erken başlar ve ~33 yılda tüm mevsimleri dolaşır." },
      { q: "Ramazanın kesin başlangıcı nasıl belirlenir?", a: "Diyanet, astronomik hesapla hilalin görülebilirliğini esas alarak yıllar öncesinden takvim yayımlar; bazı ülkelerde fiilî hilal gözlemi tercih edildiğinden 1 günlük fark oluşabilir." },
    ],
  },
  "tarih-gun-ekle": {
    faqs: [
      { q: "Bir tarihe gün eklemek ne işe yarar?", a: "Yasal sürelerin (itiraz, iade, deneme süresi) bitişini, proje teslimini veya ilaç kürü sonunu bulmak için kullanılır: örneğin 14 günlük cayma hakkı hangi güne denk geliyor?" },
      { q: "İş günü ile takvim günü farkı nedir?", a: "Takvim günü hafta sonu-tatil ayırmaz; iş günü yalnızca Pazartesi-Cuma sayar. Mevzuatta süre 'gün' olarak geçiyorsa kural olarak takvim günü anlaşılır, 'iş günü' ayrıca belirtilir." },
    ],
  },
  "yas-farki-iki-kisi": {
    faqs: [
      { q: "İki kişi arasındaki yaş farkı nasıl hesaplanır?", a: "İki doğum tarihi arasındaki fark yıl-ay-gün olarak hesaplanır. Araç ayrıca farkın toplam gün karşılığını gösterir." },
      { q: "Yaş farkı hangi tarihte olursa olsun sabit mi?", a: "Gün bazında evet; ancak 'yaş' tamsayı olarak sorulduğunda doğum günlerinin sırasına göre yıl farkı ±1 görünebilir (biri kutlamış, diğeri kutlamamışken)." },
    ],
  },
  "yildonumu-sayaci": {
    faqs: [
      { q: "Evlilik yıldönümleri nasıl anılır?", a: "Yaygın gelenek: 1. kâğıt, 5. ahşap, 10. teneke, 25. gümüş, 50. altın yıldönümüdür. Araç, tarihinizden geçen süreyi ve gelecek yıldönümüne kalan günü hesaplar." },
      { q: "Ay ve gün bazında kutlama (aylık yıldönümü) nasıl hesaplanır?", a: "Araç, başlangıç tarihinden itibaren geçen tam ay sayısını ve 100. gün, 1000. gün gibi kilometre taşlarını da listeler." },
    ],
  },
  "zaman-dilimi-farki": {
    faqs: [
      { q: "İki şehir arasında saat farkı nasıl hesaplanır?", a: "Şehirlerin UTC ofsetleri karşılaştırılır: İstanbul UTC+3, New York UTC−5 (yaz UTC−4) → fark 7-8 saat. Araç yaz saati uygulamasını otomatik dikkate alır." },
      { q: "Yaz saati uygulaması farkı değiştirir mi?", a: "Evet — ülkeler yaz saatine farklı tarihlerde geçtiğinden fark yılın bölümlerine göre 1 saat oynayabilir. Türkiye sabit UTC+3 kullanır, karşı ülke değişiyorsa fark mevsimsel değişir." },
    ],
  },

  /* ------------------------------ ŞANS-KARAR ----------------------------- */
  "ne-yiyeyim": {
    faqs: [
      { q: "Ne yiyeceğime karar veremiyorum, bu araç nasıl yardım eder?", a: "Türk mutfağı, hızlı, sağlıklı, dünya mutfağı ve tatlı kategorilerinden 50+ seçenek arasından rastgele ve adil bir öneri sunar — karar yorgunluğunu tek tıkla çözer." },
      { q: "Öneriler nasıl seçiliyor?", a: "Seçtiğiniz kategorideki yemekler arasından kriptografik rastgelelikle eşit şanslı seçim yapılır; aynı öneriyi beğenmezseniz tekrar çevirebilirsiniz." },
    ],
  },
  "tas-kagit-makas": {
    faqs: [
      { q: "Taş kağıt makas kazanma stratejisi var mı?", a: "Bilgisayara karşı yoktur — seçim tamamen rastgeledir ve her hamlenin şansı eşittir (kazanma %33,3). İnsanlara karşı ise istatistiksel eğilimler (erkeklerin taşla açması gibi) küçük avantaj sağlayabilir." },
      { q: "Oyunun kuralı nedir?", a: "Taş makası kırar, makas kağıdı keser, kağıt taşı sarar. Aynı seçim beraberliktir; araç skoru otomatik tutar." },
    ],
  },
  "wpm-test": {
    faqs: [
      { q: "WPM (dakikada kelime) nasıl hesaplanır?", a: "Standart tanımda 5 karakter = 1 kelime sayılır: Brüt WPM = (karakter/5) / dakika. Net WPM, hatalar düşülerek bulunur ve gerçek beceriyi yansıtır." },
      { q: "İyi bir yazma hızı kaç WPM'dir?", a: "Ortalama kullanıcı 35-45, iyi seviye 50-70, profesyonel 80+ WPM'dir. Doğruluk hızdan önemlidir — %97+ doğrulukla hız kademeli artırılmalıdır." },
      { q: "Yazma hızımı nasıl artırırım?", a: "On parmak tekniği, klavyeye bakmama alışkanlığı ve günde 15-20 dk düzenli pratik en etkili yoldur; birkaç ayda %30-50 artış tipiktir." },
    ],
  },
  "zar-at": {
    faqs: [
      { q: "Online zar atma adil mi?", a: "Araç kriptografik rastgelelik kullanır — her yüzün gelme olasılığı tam olarak 1/6'dır ve seri sonuçlar birbirinden bağımsızdır." },
      { q: "İki zarın toplamında hangi sayı en çok gelir?", a: "7 — çünkü 6 farklı kombinasyonla (1+6, 2+5, 3+4 ve tersleri) oluşur; olasılığı 6/36 = %16,7'dir. 2 ve 12 en nadir toplamlardır (1/36)." },
    ],
  },
};
