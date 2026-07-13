/* ---------------------------------------------------------------------------
   Sınav puanı hesapları. ÖSYM/MEB resmi formülleri karmaşık (ham → z → ağırlıklı
   toplam → ölçekleme). Bunlar geniş kabul gören "net × ağırlık + baz" tahmin
   formülleridir; sonuçlar tahmini ~5-10 puan hatayla değişebilir.

   Yanlış cevap doğruyu götürür oranı: standartta 4:1 (soru sayısı = doğru + yanlış).
--------------------------------------------------------------------------- */

/** net = doğru − yanlış/kesinti */
export function net(dogru: number, yanlis: number, kesinti = 4): number {
  return Math.max(0, dogru - yanlis / kesinti);
}

/* ------------------------------ YKS: TYT ------------------------------ */
export interface TytGirdi {
  turkceD: number; turkceY: number;
  sosyalD: number; sosyalY: number;
  matD: number; matY: number;
  fenD: number; fenY: number;
}
export interface TytSonuc {
  turkceNet: number; sosyalNet: number; matNet: number; fenNet: number;
  toplamNet: number;
  hamPuan: number;
}
/** TYT ham puan tahmini: 100 + ders net'lerinin ağırlıklı toplamı. */
export function hesaplaTyt(g: TytGirdi): TytSonuc {
  const t = net(g.turkceD, g.turkceY);
  const s = net(g.sosyalD, g.sosyalY);
  const m = net(g.matD, g.matY);
  const f = net(g.fenD, g.fenY);
  // ÖSYM standart ağırlıklarına yakın tahmini katsayılar:
  const hamPuan = 100 + t * 3.3 + s * 3.4 + m * 3.3 + f * 3.4;
  return { turkceNet: t, sosyalNet: s, matNet: m, fenNet: f, toplamNet: t + s + m + f, hamPuan };
}

/* ------------------------------ YKS: AYT ------------------------------ */
export interface AytGirdi {
  matD: number; matY: number; // 40 soru
  fizikD: number; fizikY: number; // 14
  kimyaD: number; kimyaY: number; // 13
  biyoD: number; biyoY: number; // 13
  edebiyatD: number; edebiyatY: number; // 24
  tarih1D: number; tarih1Y: number; // 10
  cografya1D: number; cografya1Y: number; // 6
  tarih2D: number; tarih2Y: number; // 11
  cografya2D: number; cografya2Y: number; // 11
  felsefeD: number; felsefeY: number; // 12
  dinD: number; dinY: number; // 6
}
export type AytTur = "sayisal" | "esitAgirlik" | "sozel";
export interface AytSonuc {
  toplamNet: number;
  hamPuan: number;
  tur: AytTur;
}
/** AYT ham puan tahmini (sayısal / eşit ağırlık / sözel dallarında). */
export function hesaplaAyt(g: AytGirdi, tur: AytTur, tytHam = 0): AytSonuc {
  const mat = net(g.matD, g.matY);
  const fiz = net(g.fizikD, g.fizikY);
  const kim = net(g.kimyaD, g.kimyaY);
  const biyo = net(g.biyoD, g.biyoY);
  const edb = net(g.edebiyatD, g.edebiyatY);
  const t1 = net(g.tarih1D, g.tarih1Y);
  const c1 = net(g.cografya1D, g.cografya1Y);
  const t2 = net(g.tarih2D, g.tarih2Y);
  const c2 = net(g.cografya2D, g.cografya2Y);
  const fel = net(g.felsefeD, g.felsefeY);
  const din = net(g.dinD, g.dinY);

  let ayt = 0;
  let toplam = 0;
  if (tur === "sayisal") {
    ayt = mat * 3 + fiz * 3.2 + kim * 3.2 + biyo * 3.2;
    toplam = mat + fiz + kim + biyo;
  } else if (tur === "esitAgirlik") {
    ayt = mat * 3 + edb * 3 + t1 * 2.8 + c1 * 2.8;
    toplam = mat + edb + t1 + c1;
  } else {
    ayt = edb * 3 + t1 * 2.8 + c1 * 2.8 + t2 * 2.9 + c2 * 2.9 + fel * 2.9 + din * 2.9;
    toplam = edb + t1 + c1 + t2 + c2 + fel + din;
  }
  // Yerleştirme puanı yaklaşık: TYT ham (40%) + AYT ham (60%)
  const hamPuan = 100 + (tytHam ? (tytHam - 100) * 0.4 + ayt * 0.6 : ayt);
  return { toplamNet: toplam, hamPuan, tur };
}

/* ------------------------------ KPSS ------------------------------ */
export interface KpssGirdi {
  gyD: number; gyY: number; // Genel Yetenek — 60 soru
  gkD: number; gkY: number; // Genel Kültür — 60 soru
}
export function hesaplaKpss(g: KpssGirdi): { gyNet: number; gkNet: number; p3: number; p93: number } {
  const gy = net(g.gyD, g.gyY);
  const gk = net(g.gkD, g.gkY);
  // KPSS P3 = 50 + (GY×0.5 + GK×0.5) × 0.85 gibi bir tahmini formül
  const p3 = 50 + (gy + gk) * 0.85;
  // P93 (ÖABT hariç öğretmenlik): GY %40 + GK %60
  const p93 = 50 + (gy * 0.4 + gk * 0.6) * 1.7;
  return { gyNet: gy, gkNet: gk, p3, p93 };
}

/* ------------------------------ LGS ------------------------------ */
export interface LgsGirdi {
  turkceD: number; turkceY: number; // 20
  matD: number; matY: number; // 20
  fenD: number; fenY: number; // 20
  inkD: number; inkY: number; // 10
  dinD: number; dinY: number; // 10
  ingD: number; ingY: number; // 10
}
/** LGS ham puan tahmini. */
export function hesaplaLgs(g: LgsGirdi): { toplamNet: number; hamPuan: number } {
  const t = net(g.turkceD, g.turkceY);
  const m = net(g.matD, g.matY);
  const f = net(g.fenD, g.fenY);
  const i = net(g.inkD, g.inkY);
  const d = net(g.dinD, g.dinY);
  const ing = net(g.ingD, g.ingY);
  const toplam = t + m + f + i + d + ing;
  // Sözel (T, İnk, Din, İng) + Sayısal (Mat, Fen) ağırlıklı
  const hamPuan = 100 + toplam * 4;
  return { toplamNet: toplam, hamPuan };
}

/* ------------------------------ DGS ------------------------------ */
export interface DgsGirdi {
  sayisalD: number; sayisalY: number; // 60
  sozelD: number; sozelY: number; // 60
}
/** DGS SAY, SÖZ ve EA puan tahminleri. */
export function hesaplaDgs(g: DgsGirdi): { sayNet: number; sozNet: number; say: number; soz: number; ea: number } {
  const s = net(g.sayisalD, g.sayisalY);
  const z = net(g.sozelD, g.sozelY);
  return {
    sayNet: s, sozNet: z,
    say: 50 + (s * 0.7 + z * 0.3) * 1.3,
    soz: 50 + (s * 0.3 + z * 0.7) * 1.3,
    ea: 50 + (s + z) * 0.65,
  };
}

/* ------------------------------ YDS ------------------------------ */
/** YDS: 80 soru üzerinden 100 puanlık ölçek. */
export function hesaplaYds(dogru: number, yanlis: number): { net: number; puan: number } {
  const n = net(dogru, yanlis);
  return { net: n, puan: (n / 80) * 100 };
}

/* ------------------------------ TUS ------------------------------ */
export interface TusGirdi {
  tbtD: number; tbtY: number; // Temel Bilimler 120 soru
  ktbtD: number; ktbtY: number; // Klinik Bilimler 120 soru
}
/** TUS puan tahmini. K.puanı: TBT %50 + KTBT %50. */
export function hesaplaTus(g: TusGirdi): {
  tbtNet: number;
  ktbtNet: number;
  tbtPuan: number;
  ktbtPuan: number;
  kPuan: number;
} {
  const t = net(g.tbtD, g.tbtY);
  const k = net(g.ktbtD, g.ktbtY);
  // TUS ham puan yaklaşık = 30 + net × 0.6 (basit tahmini)
  const tbtPuan = 30 + t * 0.6;
  const ktbtPuan = 30 + k * 0.6;
  return {
    tbtNet: t,
    ktbtNet: k,
    tbtPuan,
    ktbtPuan,
    kPuan: (tbtPuan + ktbtPuan) / 2,
  };
}

/* ------------------------------ YKS-DİL ------------------------------ */
export interface YksDilGirdi {
  dilD: number; dilY: number; // 80
  tytD: number; tytY: number; // Bunun için TYT ham puanı da gerekli
}
/** YKS Yabancı Dil puan tahmini: Dil × 3 + TYT ham × 0,4 */
export function hesaplaYksDil(dilD: number, dilY: number, tytHam: number) {
  const dilNet = net(dilD, dilY);
  const dilPuan = 100 + dilNet * 3;
  const yerlestirme = tytHam * 0.4 + dilPuan * 0.6;
  return { dilNet, dilPuan, yerlestirme };
}

/* ------------------------------ İYÖS ------------------------------ */
/** İYÖS (Yabancı öğrenci) yaklaşık: 80 soru, doğru sayısı ile puan. */
export function hesaplaIyos(dogru: number, yanlis: number) {
  const n = net(dogru, yanlis);
  return { net: n, puan: 100 + n * 5 };
}

/* ------------------------------ EKPSS ------------------------------ */
export interface EkpssGirdi {
  gyD: number; gyY: number; // Genel Yetenek 30
  gkD: number; gkY: number; // Genel Kültür 30
}
/** EKPSS (Engelli KPSS) — 3 puan türü tahmini. */
export function hesaplaEkpss(g: EkpssGirdi): { gyNet: number; gkNet: number; p1: number; p2: number; p3: number } {
  const gy = net(g.gyD, g.gyY);
  const gk = net(g.gkD, g.gkY);
  return {
    gyNet: gy, gkNet: gk,
    p1: 50 + (gy + gk) * 1.5,
    p2: 50 + (gy * 0.6 + gk * 0.4) * 2.5,
    p3: 50 + (gy * 0.4 + gk * 0.6) * 2.5,
  };
}

/* ------------------------------ PMYO ------------------------------ */
/**
 * PMYO (Polis Meslek Yüksekokulu) taban puanı YKS/TYT üzerinden hesaplanır.
 * Ek olarak fiziksel yeterlilik ve mülakat puanı %30 ağırlıklı.
 */
export function hesaplaPmyo(
  tytPuan: number,
  fizikselYeterlilikPuan: number,
  mulakatPuan: number,
): { yerlestirmePuan: number; ortalamaFiziksel: number; genelBasari: string } {
  // Yerleştirme: TYT ham × 0,7 + Fiziksel × 0,15 + Mülakat × 0,15
  const yerlestirme = tytPuan * 0.7 + fizikselYeterlilikPuan * 0.15 + mulakatPuan * 0.15;
  const ortFiziksel = (fizikselYeterlilikPuan + mulakatPuan) / 2;
  let basari: string;
  if (yerlestirme >= 350) basari = "Yüksek şans";
  else if (yerlestirme >= 300) basari = "Orta şans";
  else basari = "Düşük şans";
  return { yerlestirmePuan: yerlestirme, ortalamaFiziksel: ortFiziksel, genelBasari: basari };
}

/* ------------------------------ MSÜ ------------------------------ */
export interface MsuGirdi {
  turkceD: number; turkceY: number; // 40
  sosyalD: number; sosyalY: number; // 20
  matD: number; matY: number; // 40
  fenD: number; fenY: number; // 20
}
/** MSÜ (Milli Savunma Üniversitesi) puan tahmini — TYT-benzeri yapı. */
export function hesaplaMsu(g: MsuGirdi): { toplamNet: number; hamPuan: number } {
  const t = net(g.turkceD, g.turkceY);
  const s = net(g.sosyalD, g.sosyalY);
  const m = net(g.matD, g.matY);
  const f = net(g.fenD, g.fenY);
  return { toplamNet: t + s + m + f, hamPuan: 100 + t * 3.3 + s * 3.4 + m * 3.3 + f * 3.4 };
}

/* ------------------------------ EHLİYET SINAVI ------------------------------ */
/** Sürücü ehliyet teori sınavı: 50 sorudan 35 doğru geçme sınırı. */
export function ehliyetSonuc(dogru: number): { basarili: boolean; puan: number; kalan: number } {
  const puan = (dogru / 50) * 100;
  return {
    basarili: dogru >= 35,
    puan,
    kalan: Math.max(0, 35 - dogru),
  };
}

/* ------------------------------ ALES ------------------------------ */
export interface AlesGirdi {
  sayisalD: number; sayisalY: number; // 50
  sozelD: number; sozelY: number; // 50
}
export function hesaplaAles(g: AlesGirdi): { sayNet: number; sozNet: number; say: number; soz: number; ea: number } {
  const s = net(g.sayisalD, g.sayisalY);
  const z = net(g.sozelD, g.sozelY);
  return {
    sayNet: s, sozNet: z,
    say: 50 + (s * 0.75 + z * 0.25) * 1.4,
    soz: 50 + (s * 0.25 + z * 0.75) * 1.4,
    ea: 50 + (s + z) * 0.7,
  };
}
