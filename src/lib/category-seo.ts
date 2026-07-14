/* ---------------------------------------------------------------------------
   Kategori sayfaları için SEO giriş metinleri.
   Her kategori sayfasının üstünde gösterilir ve sayfaya özgün, taranabilir
   içerik derinliği kazandırır. 2-3 cümle, kullanıcıya gerçekten yol gösteren
   ve anahtar kelimeleri doğal biçimde içeren metinler.
--------------------------------------------------------------------------- */

export const categoryIntros: Record<string, string> = {
  finansal:
    "KDV, kredi taksiti, mevduat faizi, döviz çevirme, bileşik faiz ve yatırım getirisi gibi para ile ilgili tüm hesaplamalar bu sayfada. Döviz ve altın hesaplayıcıları TCMB'nin güncel günlük kurlarını otomatik çeker; faiz hesaplamaları bankaların kullandığı standart formüllerle yapılır. Kredi çekmeden önce taksit tutarını, mevduata yatırmadan önce net getiriyi saniyeler içinde görebilirsiniz.",
  maas:
    "Brüt maaştan nete geçiş, kıdem ve ihbar tazminatı, fazla mesai ücreti, yıllık izin süresi ve işveren maliyeti hesaplamaları burada. Tüm hesaplar 2026 yılının resmî SGK prim oranları, gelir vergisi dilimleri ve asgari ücret istisnalarına göre yapılır. Bordronuzu kontrol etmek, işten ayrılırken alacağınızı öğrenmek veya işe alım maliyeti çıkarmak için kullanabilirsiniz.",
  egitim:
    "Üniversite not ortalaması (GPA/AGNO), lise ortalaması, ders geçme notu ve KYK kredisi geri ödemesi gibi öğrenci hayatının tüm hesapları bu kategoride. 4'lük ve 100'lük sistem dönüşümleri YÖK'ün resmî çevrim tablosuna göre yapılır. Dönem sonu ortalamanızı önceden görmek ve hedef not belirlemek için idealdir.",
  sinav:
    "YKS (TYT-AYT), KPSS, LGS, DGS, ALES, YDS, TUS, MSÜ ve PMYO puan hesaplayıcıları burada. Doğru ve yanlış sayılarınızı girerek net sayınızı ve tahmini yerleştirme puanınızı ÖSYM'nin güncel puanlama yöntemine göre hesaplayabilirsiniz. Sınav sonrası tercih dönemi için tahmini sıralama fikri verir.",
  saglik:
    "Vücut kitle indeksi (BMI), günlük kalori ve protein ihtiyacı, ideal kilo, su tüketimi, vücut yağ oranı ve nabız zonları gibi sağlık ve beslenme hesaplamaları bu sayfada. Hesaplayıcılar WHO ve yaygın klinik formülleri (Harris-Benedict, Mifflin-St Jeor, US Navy) kullanır. Sonuçlar bilgilendirme amaçlıdır; tıbbi kararlar için hekiminize danışın.",
  arac:
    "Yakıt maliyeti, kilometre başı tüketim, MTV (motorlu taşıtlar vergisi), LPG dönüşüm kârlılığı ve araç değer kaybı hesaplamaları burada. Uzun yola çıkmadan önce yol masrafını, araç alırken yıllık vergi ve yakıt giderini önceden görebilirsiniz. MTV hesabı Gelir İdaresi'nin güncel tarife cetveline dayanır.",
  "ev-yasam":
    "Elektrik, su ve doğalgaz faturası hesaplama, kombi gücü seçimi, boya miktarı, konut kredisi toplam maliyeti ve LED tasarrufu gibi ev ekonomisi hesapları bu kategoride. Fatura hesaplayıcıları güncel tarife yapısını (kademeli su tarifesi, dağıtım bedelleri, vergiler) dikkate alır. Eve dair her masrafı önceden planlamanızı sağlar.",
  hamilelik:
    "Gebelik haftası, tahmini doğum tarihi, ovulasyon günü, bebek aşı takvimi ve bebek büyüme takibi hesaplamaları burada. Hesaplar standart obstetrik yöntemlere (son adet tarihi + 280 gün, Naegele kuralı) ve Sağlık Bakanlığı'nın resmî aşı çizelgesine dayanır. Sonuçlar bilgilendirme amaçlıdır; takibinizi mutlaka hekiminizle yapın.",
  vergi:
    "Gelir vergisi, damga vergisi, emlak vergisi, kira geliri vergisi ve KDV tevkifatı hesaplamaları bu sayfada. Tüm hesaplar 2026 yılının resmî vergi dilimleri, istisna tutarları ve oranlarına göre günceldir. Beyanname öncesi ödeyeceğiniz vergiyi önceden görmek için kullanabilirsiniz.",
  matematik:
    "Yüzde hesaplama, üslü sayılar, karekök, faktöriyel, permütasyon-kombinasyon, denklem çözücü, logaritma ve geometri hesaplamaları burada. Her araç adım adım sonuç gösterir; öğrenciler ödev kontrolü, yetişkinler günlük yüzde/oran hesapları için kullanabilir.",
  donusturucu:
    "Uzunluk, ağırlık, sıcaklık, alan, hacim, hız, veri boyutu ve zaman birimi dönüştürücüleri bu kategoride. Metrik ve emperyal (inç, feet, mil, libre) sistemler arasında anında çeviri yapar. Mühendislik, mutfak ölçüleri veya yurt dışı alışverişi için pratik bir başvuru kaynağıdır.",
  ticari:
    "Kâr marjı, iskonto, desi/hacimsel ağırlık, fatura (KDV + stopaj), vade farkı ve reklam metrikleri (ROAS, CTR, CPM) hesaplamaları burada. Esnaf, e-ticaret satıcısı ve muhasebeciler için günlük ticari hesapları hızlandırır. Kargo desi hesabı Türkiye'deki yaygın 3000'e bölme standardını kullanır.",
  sigorta:
    "DASK (zorunlu deprem sigortası), kasko, trafik sigortası basamağı, hayat ve seyahat sigortası prim tahminleri bu sayfada. Hesaplar sektörün yayımlanmış tarife mantığına dayalı yaklaşık değerler verir; kesin prim, poliçe anında sigorta şirketinizce belirlenir.",
  hukuki:
    "Yasal faiz, gecikme faizi, arabuluculuk ücreti, tapu harcı, kira artış tavanı (TÜFE), nafaka ve miras payı hesaplamaları burada. Hesaplar ilgili mevzuata (TBK, TMK, harçlar tarifesi) ve güncel resmî oranlara dayanır. Sonuçlar bilgilendirme amaçlıdır; hukuki işlemlerde avukatınıza danışın.",
  "sans-karar":
    "Karar çarkı, yazı tura, zar atma, kur'a çekimi ve rastgele seçim araçları bu kategoride. Aralarında karar veremediğiniz seçenekleri yazın, aracı çalıştırın, sonuç anında karşınızda. Ekip içi çekiliş, oyun gecesi veya basit kararlar için eğlenceli ve adil bir yöntem.",
  bilimsel:
    "Denklem sistemleri, matris işlemleri, türev-integral, limit, Taylor serisi, vektörler, Newton hareket denklemleri, Ohm yasası ve pH hesaplamaları burada. Mühendislik ve fen öğrencileri için tasarlanmış bu araçlar, formül adımlarını göstererek sonuca nasıl ulaşıldığını da öğretir.",
  seyahat:
    "Elektrikli araç şarj maliyeti ve menzili, taksi ücreti, otopark ücreti ve aylık ulaşım kartı karşılaştırması bu sayfada. Yolculuğa çıkmadan maliyeti önceden görmenizi, elektrikli araçta şarj planlaması yapmanızı sağlar.",
  yasam:
    "Zekat, burç, kuşak hesaplama, klima BTU seçimi, sigara maliyeti, bahşiş, hesap bölüştürme ve daha onlarca günlük yaşam hesabı bu kategoride. Gündelik hayatta 'acaba ne kadar?' dediğiniz her şeyi saniyeler içinde hesaplayın.",
  tarih:
    "Yaş hesaplama, iki tarih arası gün sayısı, tarihe gün ekleme, haftanın günü bulma, hicri-miladi çevirme ve yıldönümü sayacı burada. Resmî işlemler için gün hesabı, doğum günü ve özel gün planlaması için pratik araçlar.",
  gelistirici:
    "JSON formatlayıcı, Base64 çevirici, UUID üretici, SHA hash, renk çevirici (HEX-RGB-HSL), WCAG kontrast kontrolü ve CIDR alt ağ hesaplayıcı bu kategoride. Tüm işlemler tarayıcınızda yapılır; verileriniz sunucuya gönderilmez.",
};
