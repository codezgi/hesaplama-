/* ---------------------------------------------------------------------------
   Yaşam / diğer hesaplar — burç, kuşak, zekat, klima BTU, sigara maliyeti vb.
--------------------------------------------------------------------------- */

/* --------------------------------- BURÇ --------------------------------- */
export type BurcAd =
  | "Koç" | "Boğa" | "İkizler" | "Yengeç" | "Aslan" | "Başak"
  | "Terazi" | "Akrep" | "Yay" | "Oğlak" | "Kova" | "Balık";

export interface BurcBilgi {
  ad: BurcAd;
  element: "Ateş" | "Toprak" | "Hava" | "Su";
  gezegen: string;
  ozet: string;
}

const BURC_TABLOSU: {
  ay: number; gunMin: number; sonAyGun: number; ad: BurcAd; element: BurcBilgi["element"]; gezegen: string; ozet: string;
}[] = [
  { ay: 3, gunMin: 21, sonAyGun: 19, ad: "Koç", element: "Ateş", gezegen: "Mars", ozet: "Girişken, atılgan, lider ruhlu." },
  { ay: 4, gunMin: 20, sonAyGun: 20, ad: "Boğa", element: "Toprak", gezegen: "Venüs", ozet: "İstikrarlı, sabırlı, doğa sever." },
  { ay: 5, gunMin: 21, sonAyGun: 20, ad: "İkizler", element: "Hava", gezegen: "Merkür", ozet: "Meraklı, iletişimci, çok yönlü." },
  { ay: 6, gunMin: 21, sonAyGun: 22, ad: "Yengeç", element: "Su", gezegen: "Ay", ozet: "Duygusal, koruyucu, aile odaklı." },
  { ay: 7, gunMin: 23, sonAyGun: 22, ad: "Aslan", element: "Ateş", gezegen: "Güneş", ozet: "Cömert, gururlu, karizmatik." },
  { ay: 8, gunMin: 23, sonAyGun: 22, ad: "Başak", element: "Toprak", gezegen: "Merkür", ozet: "Titiz, analitik, düzenli." },
  { ay: 9, gunMin: 23, sonAyGun: 22, ad: "Terazi", element: "Hava", gezegen: "Venüs", ozet: "Dengeli, estetik, adil." },
  { ay: 10, gunMin: 23, sonAyGun: 21, ad: "Akrep", element: "Su", gezegen: "Plüton", ozet: "Yoğun, tutkulu, gizemli." },
  { ay: 11, gunMin: 22, sonAyGun: 21, ad: "Yay", element: "Ateş", gezegen: "Jüpiter", ozet: "Özgür, iyimser, gezmeyi seven." },
  { ay: 12, gunMin: 22, sonAyGun: 19, ad: "Oğlak", element: "Toprak", gezegen: "Satürn", ozet: "Disiplinli, hırslı, kararlı." },
  { ay: 1, gunMin: 20, sonAyGun: 18, ad: "Kova", element: "Hava", gezegen: "Uranüs", ozet: "Özgün, yenilikçi, insancıl." },
  { ay: 2, gunMin: 19, sonAyGun: 20, ad: "Balık", element: "Su", gezegen: "Neptün", ozet: "Sezgisel, hayalperest, empatik." },
];

/** Doğum tarihinden batı burcu. */
export function burcBul(d: Date): BurcBilgi {
  const ay = d.getMonth() + 1;
  const gun = d.getDate();
  for (const b of BURC_TABLOSU) {
    if (b.ay === ay && gun >= b.gunMin) {
      return { ad: b.ad, element: b.element, gezegen: b.gezegen, ozet: b.ozet };
    }
    // Bir sonraki ayda gunMin'e ulaşmadıysa bu burçtayız
    const sonrakiIdx = BURC_TABLOSU.findIndex((x) => x.ay === (ay === 12 ? 1 : ay + 1));
    if (sonrakiIdx >= 0) {
      const sonraki = BURC_TABLOSU[sonrakiIdx];
      if (b.ay === ay && gun < b.gunMin && gun >= 1) {
        // Bu ayın başındayız, önceki burçtayız
        const oncekiIdx = (BURC_TABLOSU.indexOf(b) - 1 + BURC_TABLOSU.length) % BURC_TABLOSU.length;
        const onceki = BURC_TABLOSU[oncekiIdx];
        return { ad: onceki.ad, element: onceki.element, gezegen: onceki.gezegen, ozet: onceki.ozet };
      }
      void sonraki;
    }
  }
  return { ad: "Koç", element: "Ateş", gezegen: "Mars", ozet: "—" };
}

/* --------------------------------- KUŞAK --------------------------------- */
export interface Kusak {
  ad: string;
  aralik: string;
  ozet: string;
}

export function kusakBul(dogumYili: number): Kusak {
  if (dogumYili <= 1945) return { ad: "Sessiz Kuşak", aralik: "1928-1945", ozet: "Savaş ve kıtlık çocuğu, disiplinli ve gelenekçi." };
  if (dogumYili <= 1964) return { ad: "Baby Boomer", aralik: "1946-1964", ozet: "Refah sonrası, iş odaklı ve otoriteye saygılı." };
  if (dogumYili <= 1980) return { ad: "X Kuşağı", aralik: "1965-1980", ozet: "Bağımsız, teknolojiye geçişte köprü kuşak." };
  if (dogumYili <= 1996) return { ad: "Y Kuşağı (Milenyum)", aralik: "1981-1996", ozet: "Dijital yerli, iş-yaşam dengesi odaklı." };
  if (dogumYili <= 2012) return { ad: "Z Kuşağı", aralik: "1997-2012", ozet: "Doğuştan online, sosyal medya çağı." };
  return { ad: "Alfa Kuşağı", aralik: "2013+", ozet: "Yapay zekâ ve dokunmatik cihazlarla büyüyen." };
}

/* --------------------------------- ZEKAT --------------------------------- */
/** Zekat: nisap üzeri mal varlığının %2,5'i. Altın nisap ~85 gr. */
export function zekatHesapla(malVarligi: number, borc: number, altinGramFiyat: number) {
  const net = Math.max(0, malVarligi - borc);
  const nisap = 85 * altinGramFiyat;
  const yukumlu = net >= nisap;
  return {
    net,
    nisap,
    yukumlu,
    zekat: yukumlu ? net * 0.025 : 0,
  };
}

/* --------------------------------- KLİMA BTU --------------------------------- */
/**
 * Klima BTU tahmini: alan × yükseklik × 200 + insan × 500 + pencere/güneş katkı.
 * Türkiye piyasa uygulaması ~ 5000/12000/18000/24000 BTU segmentleri.
 */
export function klimaBtu(m2: number, tavanY: number, insan: number, gunesli: boolean): {
  btu: number;
  onerilenSegment: number;
  segmentAd: string;
} {
  let btu = m2 * tavanY * 200 + insan * 500;
  if (gunesli) btu *= 1.15;
  btu = Math.round(btu);
  const segments = [
    { max: 6000, seg: 5000, ad: "Küçük oda (5.000 BTU)" },
    { max: 9500, seg: 9000, ad: "Oda (9.000 BTU)" },
    { max: 13000, seg: 12000, ad: "Salon küçük (12.000 BTU)" },
    { max: 19000, seg: 18000, ad: "Salon orta (18.000 BTU)" },
    { max: 100000, seg: 24000, ad: "Salon büyük (24.000+ BTU)" },
  ];
  const s = segments.find((x) => btu < x.max) ?? segments[segments.length - 1];
  return { btu, onerilenSegment: s.seg, segmentAd: s.ad };
}

/* --------------------------------- SİGARA MALİYETİ --------------------------------- */
export interface SigaraResult {
  gunlukMaliyet: number;
  aylikMaliyet: number;
  yillikMaliyet: number;
  onYillikMaliyet: number;
  toplamAdet: (gun: number) => number;
}

export function sigaraMaliyet(paketFiyat: number, gunlukAdet: number) {
  const gunlukMaliyet = (gunlukAdet / 20) * paketFiyat;
  return {
    gunlukMaliyet,
    aylikMaliyet: gunlukMaliyet * 30,
    yillikMaliyet: gunlukMaliyet * 365,
    onYillikMaliyet: gunlukMaliyet * 365 * 10,
  };
}
