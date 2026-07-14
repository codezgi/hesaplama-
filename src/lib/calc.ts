/* ---------------------------------------------------------------------------
   Saf hesaplama fonksiyonları — UI'dan bağımsız, test edilebilir.
--------------------------------------------------------------------------- */

/* --------------------------- BİLEŞİK FAİZ --------------------------- */
export interface BilesikFaizResult {
  anapara: number;
  sonDeger: number;
  toplamFaiz: number;
  getiriOrani: number; // toplam getiri (%)
}

/**
 * Bileşik faiz (tek seferlik yatırım). donemPerYil: yılda kaç kez faiz işletildiği
 * (1=yıllık, 4=3 aylık, 12=aylık, 365=günlük). A = P(1 + r/n)^(n·t).
 */
export function hesaplaBilesikFaiz(
  anapara: number,
  yillikOranYuzde: number,
  yil: number,
  donemPerYil: number,
): BilesikFaizResult {
  const i = yillikOranYuzde / 100 / donemPerYil;
  const n = donemPerYil * yil;
  const sonDeger = anapara * Math.pow(1 + i, n);
  return {
    anapara,
    sonDeger,
    toplamFaiz: sonDeger - anapara,
    getiriOrani: anapara > 0 ? ((sonDeger - anapara) / anapara) * 100 : 0,
  };
}

/** Türkçe para/sayı formatı */
export function formatTL(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number, digits = 2): string {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(value);
}

/* ------------------------------- KDV -------------------------------- */
export interface KdvResult {
  base: number; // matrah (KDV hariç)
  vat: number; // KDV tutarı
  total: number; // KDV dahil
}

/** amount, KDV hariç ise dahil edilerek; dahil ise ayrıştırılarak hesaplanır. */
export function hesaplaKdv(amount: number, rate: number, amountIncludesVat: boolean): KdvResult {
  const r = rate / 100;
  if (amountIncludesVat) {
    const base = amount / (1 + r);
    return { base, vat: amount - base, total: amount };
  }
  const vat = amount * r;
  return { base: amount, vat, total: amount + vat };
}

/* ------------------------------ KREDİ ------------------------------- */
export interface KrediResult {
  taksit: number;
  toplamOdeme: number;
  toplamFaiz: number;
}

/** Eşit taksitli (annüite) kredi. monthlyRate yüzde olarak (örn. 3.5). */
export function hesaplaKredi(anapara: number, aylikFaizYuzde: number, vade: number): KrediResult {
  const i = aylikFaizYuzde / 100;
  let taksit: number;
  if (i === 0) {
    taksit = anapara / vade;
  } else {
    const factor = Math.pow(1 + i, vade);
    taksit = (anapara * i * factor) / (factor - 1);
  }
  const toplamOdeme = taksit * vade;
  return { taksit, toplamOdeme, toplamFaiz: toplamOdeme - anapara };
}

/* ------------------------------ YÜZDE ------------------------------- */
/** X'in %P'si */
export function yuzdesi(sayi: number, yuzde: number): number {
  return (sayi * yuzde) / 100;
}
/** eski → yeni yüzde değişimi */
export function yuzdeDegisim(eski: number, yeni: number): number {
  if (eski === 0) return NaN;
  return ((yeni - eski) / eski) * 100;
}

/* ------------------------------- BMI -------------------------------- */
export interface BmiResult {
  bmi: number;
  kategori: string;
  idealMin: number;
  idealMax: number;
}

export function hesaplaBmi(kiloKg: number, boyCm: number): BmiResult {
  const boyM = boyCm / 100;
  const bmi = kiloKg / (boyM * boyM);
  let kategori = "";
  if (bmi < 18.5) kategori = "Zayıf";
  else if (bmi < 25) kategori = "Normal";
  else if (bmi < 30) kategori = "Fazla Kilolu";
  else if (bmi < 35) kategori = "1. Derece Obez";
  else if (bmi < 40) kategori = "2. Derece Obez";
  else kategori = "3. Derece (Morbid) Obez";
  return {
    bmi,
    kategori,
    idealMin: 18.5 * boyM * boyM,
    idealMax: 24.9 * boyM * boyM,
  };
}

/* ------------------------------- GPA -------------------------------- */
export const HARF_NOTLARI: { harf: string; katsayi: number }[] = [
  { harf: "AA", katsayi: 4.0 },
  { harf: "BA", katsayi: 3.5 },
  { harf: "BB", katsayi: 3.0 },
  { harf: "CB", katsayi: 2.5 },
  { harf: "CC", katsayi: 2.0 },
  { harf: "DC", katsayi: 1.5 },
  { harf: "DD", katsayi: 1.0 },
  { harf: "FD", katsayi: 0.5 },
  { harf: "FF", katsayi: 0.0 },
];

export interface DersSatiri {
  ad: string;
  kredi: number;
  akts: number;
  katsayi: number;
}

export type Agirlik = "kredi" | "akts";

/** Ortalama, seçilen ağırlığa (yerel kredi veya AKTS) göre hesaplanır. */
export function hesaplaGpa(
  dersler: DersSatiri[],
  agirlik: Agirlik = "kredi",
): { gpa: number; toplamKredi: number; toplamAkts: number } {
  let agirlikliToplam = 0;
  let toplamAgirlik = 0;
  let toplamKredi = 0;
  let toplamAkts = 0;
  for (const d of dersler) {
    const w = agirlik === "akts" ? d.akts : d.kredi;
    if (w > 0) {
      agirlikliToplam += w * d.katsayi;
      toplamAgirlik += w;
    }
    if (d.kredi > 0) toplamKredi += d.kredi;
    if (d.akts > 0) toplamAkts += d.akts;
  }
  return {
    gpa: toplamAgirlik > 0 ? agirlikliToplam / toplamAgirlik : 0,
    toplamKredi,
    toplamAkts,
  };
}

/* ---------------------------- YAKIT ---------------------------- */
export function hesaplaYakitMaliyeti(mesafeKm: number, tuketim100km: number, litreFiyat: number) {
  const toplamLitre = (mesafeKm / 100) * tuketim100km;
  return { toplamLitre, maliyet: toplamLitre * litreFiyat };
}

/* ------------------------------- YAŞ -------------------------------- */
export interface YasResult {
  yil: number;
  ay: number;
  gun: number;
  toplamGun: number;
  toplamHafta: number;
  sonrakiDogumGunuGun: number;
}

export function hesaplaYas(dogum: Date, bugun: Date = new Date()): YasResult {
  const d0 = new Date(dogum.getFullYear(), dogum.getMonth(), dogum.getDate());
  const d1 = new Date(bugun.getFullYear(), bugun.getMonth(), bugun.getDate());

  let yil = d1.getFullYear() - d0.getFullYear();
  let ay = d1.getMonth() - d0.getMonth();
  let gun = d1.getDate() - d0.getDate();

  if (gun < 0) {
    ay -= 1;
    const gecenAyGunSayisi = new Date(d1.getFullYear(), d1.getMonth(), 0).getDate();
    gun += gecenAyGunSayisi;
  }
  if (ay < 0) {
    yil -= 1;
    ay += 12;
  }

  const msGun = 1000 * 60 * 60 * 24;
  const toplamGun = Math.floor((d1.getTime() - d0.getTime()) / msGun);

  // Bir sonraki doğum günü
  let sonraki = new Date(d1.getFullYear(), d0.getMonth(), d0.getDate());
  if (sonraki < d1) sonraki = new Date(d1.getFullYear() + 1, d0.getMonth(), d0.getDate());
  const sonrakiDogumGunuGun = Math.ceil((sonraki.getTime() - d1.getTime()) / msGun);

  return {
    yil,
    ay,
    gun,
    toplamGun,
    toplamHafta: Math.floor(toplamGun / 7),
    sonrakiDogumGunuGun,
  };
}

/* ----------------------------- MEVDUAT ------------------------------ */
export interface MevduatResult {
  brutFaiz: number;
  stopaj: number;
  netFaiz: number;
  vadeSonuToplam: number; // anapara + net faiz
  netGetiriOrani: number; // vade boyunca net getiri (%)
  aylikNetOrtalama: number; // net faiz / (vade ay)
}

/**
 * Vadeli mevduat. Basit faiz esasıyla: faiz, vade günü oranında işletilir.
 * Stopaj (gelir vergisi stopajı) brüt faizden kesilir.
 */
export function hesaplaMevduat(
  anapara: number,
  yillikOranYuzde: number,
  vadeGun: number,
  stopajYuzde: number,
): MevduatResult {
  const brutFaiz = anapara * (yillikOranYuzde / 100) * (vadeGun / 365);
  const stopaj = brutFaiz * (stopajYuzde / 100);
  const netFaiz = brutFaiz - stopaj;
  return {
    brutFaiz,
    stopaj,
    netFaiz,
    vadeSonuToplam: anapara + netFaiz,
    netGetiriOrani: anapara > 0 ? (netFaiz / anapara) * 100 : 0,
    aylikNetOrtalama: vadeGun > 0 ? netFaiz / (vadeGun / 30) : 0,
  };
}

/* ------------------------------ KALORİ ------------------------------ */
export type Cinsiyet = "erkek" | "kadin";

/** Aktivite seviyesi çarpanları (TDEE için) */
export const AKTIVITE = [
  { value: 1.2, label: "Hareketsiz (masa başı)" },
  { value: 1.375, label: "Hafif aktif (haftada 1-3 gün)" },
  { value: 1.55, label: "Orta aktif (haftada 3-5 gün)" },
  { value: 1.725, label: "Çok aktif (haftada 6-7 gün)" },
  { value: 1.9, label: "Aşırı aktif (ağır iş/sporcu)" },
] as const;

export interface KaloriResult {
  bmr: number; // bazal metabolizma
  tdee: number; // günlük toplam ihtiyaç (koruma)
  kiloVerme: number; // tdee - 500
  kiloAlma: number; // tdee + 500
}

/** Mifflin-St Jeor denklemi ile BMR ve aktiviteye göre TDEE. */
export function hesaplaKalori(
  cinsiyet: Cinsiyet,
  yas: number,
  boyCm: number,
  kiloKg: number,
  aktivite: number,
): KaloriResult {
  const bmr = 10 * kiloKg + 6.25 * boyCm - 5 * yas + (cinsiyet === "erkek" ? 5 : -161);
  const tdee = bmr * aktivite;
  return {
    bmr,
    tdee,
    kiloVerme: tdee - 500,
    kiloAlma: tdee + 500,
  };
}

/* --------------------------- İKİ TARİH ARASI --------------------------- */
export interface TarihFarkiResult {
  toplamGun: number;
  yil: number;
  ay: number;
  gun: number;
  toplamHafta: number;
  kalanGun: number; // hafta dışında kalan gün
  isGunu: number; // Pzt-Cuma
  toplamSaat: number;
  toplamDakika: number;
}

/** İki tarih arasındaki farkı çeşitli birimlerde hesaplar. */
export function tarihFarki(bas: Date, bit: Date): TarihFarkiResult {
  const msGun = 1000 * 60 * 60 * 24;
  let d0 = new Date(bas.getFullYear(), bas.getMonth(), bas.getDate());
  let d1 = new Date(bit.getFullYear(), bit.getMonth(), bit.getDate());
  if (d1 < d0) [d0, d1] = [d1, d0];

  const toplamGun = Math.round((d1.getTime() - d0.getTime()) / msGun);

  let yil = d1.getFullYear() - d0.getFullYear();
  let ay = d1.getMonth() - d0.getMonth();
  let gun = d1.getDate() - d0.getDate();
  if (gun < 0) {
    ay -= 1;
    gun += new Date(d1.getFullYear(), d1.getMonth(), 0).getDate();
  }
  if (ay < 0) {
    yil -= 1;
    ay += 12;
  }

  // İş günü (Pzt-Cuma) sayımı
  let isGunu = 0;
  for (let t = d0.getTime(); t < d1.getTime(); t += msGun) {
    const gunNo = new Date(t).getDay(); // 0 Paz, 6 Cmt
    if (gunNo !== 0 && gunNo !== 6) isGunu += 1;
  }

  return {
    toplamGun,
    yil,
    ay,
    gun,
    toplamHafta: Math.floor(toplamGun / 7),
    kalanGun: toplamGun % 7,
    isGunu,
    toplamSaat: toplamGun * 24,
    toplamDakika: toplamGun * 24 * 60,
  };
}

/* ------------------------------ GEBELİK ------------------------------ */
export interface GebelikResult {
  edd: Date; // tahmini doğum tarihi (Naegele: SAT + 280 gün)
  gebelikGun: number; // SAT'tan bugüne
  haftaTam: number;
  gunKalan: number; // haftanın artık günü
  trimester: 1 | 2 | 3;
  kalanGun: number; // doğuma kalan
  kalanHafta: number;
}

/** Naegele kuralı: son adet tarihine (SAT) 280 gün eklenir. */
export function hesaplaGebelik(sat: Date, bugun: Date = new Date()): GebelikResult {
  const msGun = 1000 * 60 * 60 * 24;
  const d0 = new Date(sat.getFullYear(), sat.getMonth(), sat.getDate());
  const d1 = new Date(bugun.getFullYear(), bugun.getMonth(), bugun.getDate());

  const edd = new Date(d0.getTime() + 280 * msGun);
  const gebelikGun = Math.max(0, Math.floor((d1.getTime() - d0.getTime()) / msGun));
  const haftaTam = Math.floor(gebelikGun / 7);
  const kalanGun = Math.ceil((edd.getTime() - d1.getTime()) / msGun);

  const trimester: 1 | 2 | 3 = haftaTam <= 13 ? 1 : haftaTam <= 27 ? 2 : 3;

  return {
    edd,
    gebelikGun,
    haftaTam,
    gunKalan: gebelikGun % 7,
    trimester,
    kalanGun,
    kalanHafta: Math.floor(kalanGun / 7),
  };
}

/* -------------------------- ELEKTRİK FATURASI -------------------------- */
export interface ElektrikResult {
  enerjiBedeli: number;
  dagitimBedeli: number;
  btv: number; // elektrik tüketim vergisi (mesken %5)
  araToplam: number;
  kdv: number;
  toplam: number;
}

/**
 * Mesken elektrik faturası tahmini. Birim fiyatlar (enerji + dağıtım) faturadan
 * girilir; üzerine elektrik tüketim vergisi (BTV %5) ve KDV (%20) eklenir.
 */
export function hesaplaElektrik(
  kwh: number,
  enerjiFiyat: number,
  dagitimFiyat: number,
  btvOran = 5,
  kdvOran = 20,
): ElektrikResult {
  const enerjiBedeli = kwh * enerjiFiyat;
  const dagitimBedeli = kwh * dagitimFiyat;
  const btv = enerjiBedeli * (btvOran / 100);
  const araToplam = enerjiBedeli + dagitimBedeli + btv;
  const kdv = araToplam * (kdvOran / 100);
  return {
    enerjiBedeli,
    dagitimBedeli,
    btv,
    araToplam,
    kdv,
    toplam: araToplam + kdv,
  };
}

/* --------------------------- KRİPTO DCA (Dollar Cost Average) --------------------------- */
export function dcaHesapla(aylikMiktar: number, ay: number, ortalamaGiris: number, mevcutFiyat: number) {
  const toplamYatirim = aylikMiktar * ay;
  const alinanMiktar = ortalamaGiris > 0 ? toplamYatirim / ortalamaGiris : 0;
  const guncelDeger = alinanMiktar * mevcutFiyat;
  const kar = guncelDeger - toplamYatirim;
  const karOran = toplamYatirim > 0 ? (kar / toplamYatirim) * 100 : 0;
  return { toplamYatirim, alinanMiktar, guncelDeger, kar, karOran };
}

/* --------------------------- REKLAM CTR + ROAS --------------------------- */
export function reklamMetrikleri(gosterim: number, tiklama: number, harcama: number, ciro: number) {
  const ctr = gosterim > 0 ? (tiklama / gosterim) * 100 : 0;
  const cpc = tiklama > 0 ? harcama / tiklama : 0;
  const cpm = gosterim > 0 ? (harcama / gosterim) * 1000 : 0;
  const roas = harcama > 0 ? ciro / harcama : 0;
  const kar = ciro - harcama;
  return { ctr, cpc, cpm, roas, kar };
}

/* --------------------------- WPM (Yazma Hızı) --------------------------- */
export function wpmHesapla(karakter: number, dakika: number, hataSayisi = 0) {
  const kelime = karakter / 5; // Standart: 1 kelime = 5 karakter
  const brutWpm = dakika > 0 ? kelime / dakika : 0;
  const netWpm = Math.max(0, brutWpm - hataSayisi / Math.max(1, dakika));
  const dogrulukYuzde = kelime > 0 ? Math.max(0, ((kelime - hataSayisi) / kelime) * 100) : 0;
  let seviye: string;
  if (netWpm >= 100) seviye = "Uzman";
  else if (netWpm >= 70) seviye = "Hızlı";
  else if (netWpm >= 50) seviye = "İyi";
  else if (netWpm >= 30) seviye = "→ Orta";
  else seviye = "Yavaş";
  return { brutWpm, netWpm, kelime, dogrulukYuzde, seviye };
}

/* --------------------------- KİTAP OKUMA BİTİŞ --------------------------- */
export function kitapBitis(kalanSayfa: number, sayfaHiz: number, gunlukDakika: number) {
  const gerekliDakika = sayfaHiz > 0 ? kalanSayfa / sayfaHiz : 0;
  const gun = gunlukDakika > 0 ? gerekliDakika / gunlukDakika : 0;
  return { gerekliDakika, gun, hafta: gun / 7 };
}

/* --------------------------- KLİMA / MEVCUT ELEKTRİK KIYASI --------------------------- */
export function isitmaKiyas(m2: number, gunSaat: number, gun: number, birimElektrikTL: number, birimGazTL_m3: number) {
  // Elektrikli ısıtıcı: 2 kW / 10 m²
  const elektrikKW = (m2 / 10) * 2;
  const elektrikMaliyet = elektrikKW * gunSaat * gun * birimElektrikTL;
  // Gaz kombi: ~0.12 m³ / m² / saat
  const gazM3 = m2 * 0.12 * gunSaat * gun;
  const gazMaliyet = gazM3 * birimGazTL_m3;
  return {
    elektrikKW, elektrikMaliyet,
    gazM3, gazMaliyet,
    tasarruf: elektrikMaliyet - gazMaliyet,
  };
}

/* --------------------------- HALI / KİLİM m² --------------------------- */
export function haliM2(odaEn: number, odaBoy: number, halikenar: number) {
  const kullanilabilirEn = Math.max(0, odaEn - 2 * halikenar);
  const kullanilabilirBoy = Math.max(0, odaBoy - 2 * halikenar);
  return {
    odaAlan: odaEn * odaBoy,
    haliAlan: kullanilabilirEn * kullanilabilirBoy,
    onerilenBoy: `${kullanilabilirEn.toFixed(1)} × ${kullanilabilirBoy.toFixed(1)} m`,
  };
}

/* --------------------------- METRO KART vs BİLETLİ --------------------------- */
export function ulasimKarti(gunlukBinis: number, tekBinis: number, aylikKart: number, ayGun = 22) {
  const bileteToplam = gunlukBinis * ayGun * tekBinis;
  const tasarruf = bileteToplam - aylikKart;
  const gunlukEsit = tekBinis > 0 ? aylikKart / tekBinis / ayGun : 0;
  return { bileteToplam, tasarruf, karliMi: tasarruf > 0, gunlukEsit };
}

/* --------------------------- PODCAST/AUDIO SÜRE --------------------------- */
export function audioSure(uzunlukDk: number, hiz: number) {
  const yeniDk = hiz > 0 ? uzunlukDk / hiz : uzunlukDk;
  return { yeniDk, tasarrufDk: uzunlukDk - yeniDk };
}

/* --------------------------- REKABETÇİ VERGİ DİLİMİ ANALİZİ --------------------------- */
export function vergiDilimAnaliz(yillikGelir: number, dilimler: { ust: number; oran: number }[]) {
  let vergi = 0;
  let onceki = 0;
  const kirilim: { alt: number; ust: number; oran: number; dilimTutar: number; dilimVergi: number }[] = [];
  for (const d of dilimler) {
    if (yillikGelir <= onceki) break;
    const dilimT = Math.min(yillikGelir, d.ust) - onceki;
    const dilimV = dilimT * d.oran;
    vergi += dilimV;
    kirilim.push({ alt: onceki, ust: d.ust, oran: d.oran, dilimTutar: dilimT, dilimVergi: dilimV });
    onceki = d.ust;
  }
  const efektif = yillikGelir > 0 ? (vergi / yillikGelir) * 100 : 0;
  const marjinal = kirilim.length > 0 ? kirilim[kirilim.length - 1].oran * 100 : 0;
  return { toplamVergi: vergi, efektif, marjinal, kirilim, net: yillikGelir - vergi };
}

/* --------------------------- DPI / PIXEL DÖNÜŞÜM --------------------------- */
export function dpiHesapla(genislikPx: number, dpi: number) {
  return {
    inch: genislikPx / dpi,
    cm: (genislikPx / dpi) * 2.54,
    mm: (genislikPx / dpi) * 25.4,
    pt: (genislikPx / dpi) * 72,
  };
}

/* --------------------------- FONT: PX ↔ EM ↔ REM ↔ PT --------------------------- */
export function fontDonusum(px: number, kokPx = 16) {
  return {
    em: px / kokPx,
    rem: px / kokPx,
    pt: px * 0.75,
    percent: (px / kokPx) * 100,
  };
}

/* --------------------------- KUR RİSKİ (FORWARD) --------------------------- */
export function forwardKur(spotKur: number, yerelFaiz: number, yabanciFaiz: number, gun: number) {
  const forward = spotKur * ((1 + yerelFaiz / 100 * gun / 365) / (1 + yabanciFaiz / 100 * gun / 365));
  return { forwardKur: forward, primYuzde: ((forward - spotKur) / spotKur) * 100 };
}

/* --------------------------- KEK MALZEME (KİŞİ SAYISI) --------------------------- */
/** Referans kek 6 kişilik. Kişi sayısına göre ölçekle. */
export const KEK_MALZEME = [
  { ad: "Un", miktar: 300, birim: "g" },
  { ad: "Şeker", miktar: 200, birim: "g" },
  { ad: "Yumurta", miktar: 4, birim: "adet" },
  { ad: "Yağ / Tereyağ", miktar: 150, birim: "g" },
  { ad: "Süt", miktar: 100, birim: "ml" },
  { ad: "Kabartma tozu", miktar: 10, birim: "g" },
  { ad: "Vanilya", miktar: 5, birim: "g" },
];

/* --------------------------- HEDİYE BÜTÇESİ BÖLÜŞTÜRME --------------------------- */
export function hediyeButce(toplamButce: number, kisiler: { ad: string; oran: number }[]) {
  const oranToplam = kisiler.reduce((s, k) => s + k.oran, 0);
  return kisiler.map((k) => ({ ad: k.ad, tutar: oranToplam > 0 ? (toplamButce * k.oran) / oranToplam : 0 }));
}

/* --------------------------- OTOPARK ÜCRETİ --------------------------- */
/** Genelde: ilk saat, sonrasında saatlik. */
export function otoparkUcret(saat: number, ilkSaat: number, sonrakiSaat: number, gunlukTavan = Infinity) {
  if (saat <= 1) return { toplam: ilkSaat };
  const toplam = Math.min(gunlukTavan, ilkSaat + (saat - 1) * sonrakiSaat);
  return { toplam };
}

/* --------------------------- TRAFİK CEZASI PEŞİN İNDİRİM --------------------------- */
/** 15 gün içinde peşin ödemede %25 indirim. */
export function trafikCezaIndirim(cezaTutar: number, gunKalan: number) {
  const indirimliOran = gunKalan <= 15 ? 0.75 : 1.0;
  return { indirim: cezaTutar * (1 - indirimliOran), odenecek: cezaTutar * indirimliOran, gecerli: gunKalan <= 15 };
}

/* --------------------------- YAKIT AB REL. TASARRUFU (Km başı L) --------------------------- */
export function kmBasinaMaliyet(tuketim100Km: number, litreFiyat: number) {
  return { kmBasi: (tuketim100Km / 100) * litreFiyat };
}

/* --------------------------- PIŞARANIN İHTIYAÇ HESABI --------------------------- */
/** Su tüketimi (yaz garden basit): m² × 5 L/gün */
export function bahceSuIhtiyaci(m2: number, saatliGunes: number) {
  const litreGun = m2 * 5 * (saatliGunes / 8);
  return { litreGun, saatGun: (litreGun / 500) };
}

/* --------------------------- EMEKLİLİK YAŞI (SGK) --------------------------- */
/** SSK/4A giriş tarihine göre emeklilik koşulları (yaklaşık; 1999+ yeni sistem). */
export function emeklilikYasi(girisYili: number, cinsiyet: "erkek" | "kadin") {
  if (girisYili < 1976) return { yas: cinsiyet === "erkek" ? 45 : 43, primGun: 5000, sigortalilikYil: 15 };
  if (girisYili < 1981) return { yas: cinsiyet === "erkek" ? 46 : 44, primGun: 5075, sigortalilikYil: 15 };
  if (girisYili < 1986) return { yas: cinsiyet === "erkek" ? 47 : 45, primGun: 5150, sigortalilikYil: 15 };
  if (girisYili < 1991) return { yas: cinsiyet === "erkek" ? 48 : 46, primGun: 5225, sigortalilikYil: 15 };
  if (girisYili < 1996) return { yas: cinsiyet === "erkek" ? 50 : 47, primGun: 5300, sigortalilikYil: 15 };
  if (girisYili < 1999) return { yas: cinsiyet === "erkek" ? 52 : 48, primGun: 5375, sigortalilikYil: 15 };
  if (girisYili < 2000) return { yas: cinsiyet === "erkek" ? 57 : 55, primGun: 7000, sigortalilikYil: 25 };
  return { yas: cinsiyet === "erkek" ? 60 : 58, primGun: 7200, sigortalilikYil: 25 };
}

/* --------------------------- YILLIK → AYLIK FAİZ --------------------------- */
/** Yıllık akdi faizden aylık efektif faiz. */
export function yillikAyklikFaiz(yillikYuzde: number, bilesikMi = true) {
  const y = yillikYuzde / 100;
  const aylik = bilesikMi ? (Math.pow(1 + y, 1 / 12) - 1) * 100 : (y / 12) * 100;
  return { aylikYuzde: aylik };
}

/* --------------------------- REEL GETİRİ --------------------------- */
/** Nominal getiri ve enflasyondan reel (satın alma gücü) getiri: (1+n)/(1+i) − 1 */
export function reelGetiri(nominalYuzde: number, enflasyonYuzde: number) {
  const n = nominalYuzde / 100;
  const i = enflasyonYuzde / 100;
  const reel = (1 + n) / (1 + i) - 1;
  return { reelYuzde: reel * 100, netKayipMi: reel < 0 };
}

/* --------------------------- BİRİKİM HEDEF SÜRESİ --------------------------- */
/** Aylık katkı + faiz oranı ile hedef tutara ne kadar sürede ulaşılır. */
export function birikimSuresi(hedef: number, baslangic: number, aylikKatki: number, yillikFaizYuzde: number) {
  const i = yillikFaizYuzde / 100 / 12;
  const p = baslangic;
  const c = aylikKatki;
  if (i === 0) {
    const ay = (hedef - p) / c;
    return { ay: Math.max(0, ay), yil: Math.max(0, ay) / 12 };
  }
  // Denklem: hedef = p(1+i)^n + c×((1+i)^n − 1)/i
  // (1+i)^n = (hedef×i + c) / (p×i + c)
  const pay = hedef * i + c;
  const payda = p * i + c;
  if (pay <= 0 || payda <= 0) return { ay: 0, yil: 0 };
  const n = Math.log(pay / payda) / Math.log(1 + i);
  return { ay: Math.max(0, n), yil: Math.max(0, n) / 12 };
}

/* --------------------------- SU/ELEKTRİK TARİFE KADEME --------------------------- */
export interface Kademe { esik: number; birim: number; }
export function tarifeKademe(tuketim: number, kademeler: Kademe[]) {
  let toplam = 0;
  let onceki = 0;
  const detay: { esik: string; birim: number; miktar: number; tutar: number }[] = [];
  for (const k of kademeler) {
    if (tuketim <= onceki) break;
    const miktar = Math.min(tuketim, k.esik) - onceki;
    const tutar = miktar * k.birim;
    toplam += tutar;
    detay.push({ esik: k.esik === Infinity ? "üzeri" : k.esik.toString(), birim: k.birim, miktar, tutar });
    onceki = k.esik;
  }
  return { toplam, detay };
}

// Türkiye ortalama tarife (kullanıcı UI'de değiştirebilir)
export const SU_TARIFE_KADEMELERI: Kademe[] = [
  { esik: 10, birim: 20 },
  { esik: 20, birim: 30 },
  { esik: 30, birim: 45 },
  { esik: Infinity, birim: 65 },
];
export const ELEKTRIK_TARIFE_KADEMELERI: Kademe[] = [
  { esik: 150, birim: 2.4 },
  { esik: Infinity, birim: 3.5 },
];

/* --------------------------- KLİMA SAATLİK ELEKTRİK --------------------------- */
export function klimaSaatlikMaliyet(btu: number, calismaSaat: number, birimTL_perKwh: number, verimlilik: "A+++" | "A++" | "A+" | "A") {
  const seer = { "A+++": 8.5, "A++": 7.5, "A+": 6.5, "A": 5.5 }[verimlilik];
  const kw = btu / (seer * 1000); // Yaklaşık kw çekim
  const saatlikMaliyet = kw * birimTL_perKwh;
  return { saatlikKw: kw, saatlikMaliyet, aylikMaliyet: saatlikMaliyet * calismaSaat * 30 };
}

/* --------------------------- KDV TEVKİFAT --------------------------- */
/** KDV tevkifat: satıcıdan yalnızca bir kısım KDV tahsil edilir, kalanı doğrudan
    devlete ödenir. Alıcı sorumlu. Tevkifat oranları 2/10, 3/10, 5/10, 7/10, 9/10. */
export function kdvTevkifat(kdvHaric: number, kdvOran: number, tevkifat: string) {
  const kdv = kdvHaric * (kdvOran / 100);
  const [pay, payda] = tevkifat.split("/").map((x) => parseFloat(x));
  const tevkOran = pay / payda;
  const tevkTutar = kdv * tevkOran;
  const saticininTahsili = kdv - tevkTutar;
  return {
    kdv,
    tevkifatTutar: tevkTutar,
    saticininTahsili,
    aliciNinDevleteOdedigi: tevkTutar,
    faturaToplam: kdvHaric + kdv,
  };
}

/* --------------------------- İTİRAZ SÜRESİ --------------------------- */
/** Türk hukukunda başlıca itiraz süreleri. */
export const ITIRAZ_SURELERI: { ad: string; gun: number; aciklama: string }[] = [
  { ad: "İdari mahkeme dava süresi", gun: 60, aciklama: "İdari işlemin tebliğinden itibaren" },
  { ad: "Vergi mahkemesi dava süresi", gun: 30, aciklama: "Tebliğinden itibaren" },
  { ad: "Ödeme emrine itiraz", gun: 15, aciklama: "Tebliğinden itibaren (icra)" },
  { ad: "Trafik cezasına itiraz", gun: 15, aciklama: "Tebliğinden itibaren (sulh ceza)" },
  { ad: "İstinaf süresi (HMK)", gun: 14, aciklama: "Kararın tebliği veya öğrenilmesinden" },
  { ad: "Temyiz süresi (HMK)", gun: 14, aciklama: "Bölge adliye mahkemesi kararından" },
  { ad: "İş mahkemesi istinaf", gun: 14, aciklama: "Kararın tebliği" },
  { ad: "İtiraz — icra hukuk", gun: 7, aciklama: "İhtiyati tedbir kararına" },
];
export function itirazHesapla(tebligDate: Date, gun: number) {
  const msGun = 86400000;
  const son = new Date(tebligDate.getTime() + gun * msGun);
  const bugun = new Date();
  const kalan = Math.ceil((son.getTime() - bugun.getTime()) / msGun);
  return { sonTarih: son, kalanGun: kalan, gecmisMi: kalan < 0 };
}

/* --------------------------- RAMAZAN GÜN SAYACI --------------------------- */
/** Basit: 2026 için sabit. Gelecekte astronomik hesap yapılabilir. */
export const RAMAZAN_2026 = { bas: new Date(2026, 1, 17), bit: new Date(2026, 2, 18) }; // 17 Şub-18 Mart 2026
export function ramazanKac(bugun: Date = new Date()) {
  const msGun = 86400000;
  const { bas, bit } = RAMAZAN_2026;
  if (bugun < bas) {
    return { durum: "yakinda" as const, kalan: Math.ceil((bas.getTime() - bugun.getTime()) / msGun) };
  }
  if (bugun > bit) {
    const bir = new Date(bas.getFullYear() + 1, bas.getMonth(), bas.getDate() - 11);
    return { durum: "bitti" as const, sonrakine: Math.ceil((bir.getTime() - bugun.getTime()) / msGun) };
  }
  const gecen = Math.floor((bugun.getTime() - bas.getTime()) / msGun) + 1;
  const kalan = Math.ceil((bit.getTime() - bugun.getTime()) / msGun);
  return { durum: "devam" as const, gecen, kalan };
}

/* --------------------------- KAĞIT BOYUTLARI (A, B, C serileri) --------------------------- */
export const KAGIT_A: { format: string; mm: string; inch: string }[] = [
  { format: "A0", mm: "841 × 1189", inch: "33,1 × 46,8" },
  { format: "A1", mm: "594 × 841", inch: "23,4 × 33,1" },
  { format: "A2", mm: "420 × 594", inch: "16,5 × 23,4" },
  { format: "A3", mm: "297 × 420", inch: "11,7 × 16,5" },
  { format: "A4", mm: "210 × 297", inch: "8,3 × 11,7" },
  { format: "A5", mm: "148 × 210", inch: "5,8 × 8,3" },
  { format: "A6", mm: "105 × 148", inch: "4,1 × 5,8" },
  { format: "A7", mm: "74 × 105", inch: "2,9 × 4,1" },
  { format: "A8", mm: "52 × 74", inch: "2,0 × 2,9" },
];

/* --------------------------- METIN OKUMA SÜRESİ --------------------------- */
export function metinOkumaSuresi(kelime: number, hiz: "yavas" | "normal" | "hizli") {
  const wpm = { yavas: 150, normal: 220, hizli: 300 }[hiz];
  const sn = (kelime / wpm) * 60;
  return {
    sn: Math.round(sn),
    dk: Math.floor(sn / 60),
    kalanSn: Math.round(sn % 60),
    formatli: sn < 60 ? `${Math.round(sn)} sn` : `${Math.floor(sn / 60)} dk ${Math.round(sn % 60)} sn`,
  };
}

/* --------------------------- PISAGOR --------------------------- */
/** Dik üçgen: a² + b² = c². Verilen iki kenardan üçüncüsünü bulur. */
export function pisagor(a: number | null, b: number | null, c: number | null) {
  if (c === null && a !== null && b !== null) return { c: Math.sqrt(a * a + b * b), bilinmeyen: "c" };
  if (a === null && b !== null && c !== null) return { a: Math.sqrt(c * c - b * b), bilinmeyen: "a" };
  if (b === null && a !== null && c !== null) return { b: Math.sqrt(c * c - a * a), bilinmeyen: "b" };
  return { bilinmeyen: null };
}

/* --------------------------- KAÇ YAŞINDAYIM (detaylı) --------------------------- */
export function detayliYas(dogum: Date, bugun: Date = new Date()) {
  const msGun = 86400000;
  const toplamGun = Math.floor((bugun.getTime() - dogum.getTime()) / msGun);
  return {
    toplamGun,
    toplamHafta: Math.floor(toplamGun / 7),
    toplamAy: Math.floor(toplamGun / 30.44),
    toplamSaat: toplamGun * 24,
    toplamDakika: toplamGun * 24 * 60,
    toplamSaniye: toplamGun * 24 * 60 * 60,
  };
}

/* --------------------------- YAKIT TASARRUFU KARŞILAŞTIRMA --------------------------- */
export function yakitTasarruf(
  eskiTuketim100Km: number,
  yeniTuketim100Km: number,
  yillikKm: number,
  litreFiyat: number,
) {
  const eskiYillik = (yillikKm / 100) * eskiTuketim100Km * litreFiyat;
  const yeniYillik = (yillikKm / 100) * yeniTuketim100Km * litreFiyat;
  return { eskiYillik, yeniYillik, tasarrufYillik: eskiYillik - yeniYillik };
}

/* --------------------------- LPG DÖNÜŞÜM KARLILIĞI --------------------------- */
/** LPG dönüşüm karlılığı: donusum maliyeti kaç km sonra amorti olur. */
export function lpgAmorti(
  donusumMaliyeti: number,
  benzinLtFiyat: number,
  lpgLtFiyat: number,
  tuketim100Km: number,
  lpgTuketimFark = 1.2, // LPG ~%20 daha fazla tüketir
) {
  const benzinBirim = (tuketim100Km / 100) * benzinLtFiyat;
  const lpgBirim = (tuketim100Km * lpgTuketimFark / 100) * lpgLtFiyat;
  const kmBasinaTasarruf = benzinBirim - lpgBirim;
  const amortiKm = kmBasinaTasarruf > 0 ? donusumMaliyeti / kmBasinaTasarruf : Infinity;
  return { benzin100Km: benzinBirim * 100, lpg100Km: lpgBirim * 100, kmBasinaTasarruf, amortiKm };
}

/* --------------------------- KASKO DEĞER KAYBI --------------------------- */
/** Yıllık %10-15 kaba değer kaybı. */
export function kaskoDegerKaybi(sifirBedel: number, yas: number, yillikKayipYuzde = 12) {
  const oran = Math.max(0.2, Math.pow(1 - yillikKayipYuzde / 100, yas));
  return { guncelDeger: sifirBedel * oran, toplamKayip: sifirBedel * (1 - oran), degerKaybiOran: (1 - oran) * 100 };
}

/* --------------------------- TAKS / KAKS / EMSAL --------------------------- */
/** Arsa büyüklüğü ve imar parametrelerine göre inşaat alan hesabı. */
export function taksKaksHesapla(arsaM2: number, taks: number, kaks: number, emsal: number) {
  return {
    tabanAlan: arsaM2 * taks, // TAKS: taban alan / arsa
    toplamInsaatAlan: arsaM2 * kaks, // KAKS: toplam alan / arsa
    emsalAlan: arsaM2 * emsal,
  };
}

/* --------------------------- BOYA MİKTARI --------------------------- */
/** Duvar alanı → boya litresi. 1 kg boya ~10 m² tek kat kapatır. */
export function boyaMiktari(duvarM2: number, kat = 2, birimGramM2 = 100) {
  const gram = duvarM2 * birimGramM2 * kat;
  return { kg: gram / 1000, kutu: Math.ceil(gram / 1000 / 2.5) };
}

/* --------------------------- KOMBİ GÜÇ SEÇİMİ --------------------------- */
/** Isıtılacak alan m² × 100 W/m² ≈ kW gücü. */
export function kombiGuc(m2: number, yalitim: "iyi" | "orta" | "zayif") {
  const carpan = yalitim === "iyi" ? 80 : yalitim === "orta" ? 100 : 130;
  const watt = m2 * carpan;
  const kW = watt / 1000;
  const kcal = watt * 0.86;
  return { watt, kW, kcalSaat: kcal };
}

/* --------------------------- SEYAHAT SİGORTASI --------------------------- */
/** Basit tahmin: yaş × gün × faktör. */
export function seyahatSigortaTahmin(yas: number, gun: number, teminatEuro: number) {
  let birim = 3;
  if (yas > 65) birim = 6;
  else if (yas > 45) birim = 4;
  if (teminatEuro >= 100000) birim *= 1.5;
  return { prim: gun * birim };
}

/* --------------------------- HAYAT SİGORTASI TAHMİN --------------------------- */
/** Basit: teminat × %0,5 baz + yaş faktörü. */
export function hayatSigortaTahmin(teminatTL: number, yas: number, sigara: boolean) {
  let oran = 0.005;
  if (yas > 50) oran = 0.008;
  else if (yas > 40) oran = 0.006;
  if (sigara) oran *= 1.5;
  return { yillikPrim: teminatTL * oran };
}

/* --------------------------- KREDİ KARTI ASGARİ ÖDEME --------------------------- */
/** BDDK 2026: <25.000 borç %20, 25.000-50.000 %30, üstü %40 */
export function krediKartiAsgari(borc: number) {
  let oran = 0.4;
  if (borc < 25000) oran = 0.2;
  else if (borc < 50000) oran = 0.3;
  return { asgariOdeme: borc * oran, oran: oran * 100 };
}

/* --------------------------- NAFAKA TAHMİN --------------------------- */
/** Yoksulluk nafakası ~ maaşın %10-20'si. Çocuk sayısına göre iştirak nafakası %8-15/çocuk. */
export function nafakaTahmin(brutMaas: number, cocukSayisi: number) {
  const yoksulluk = brutMaas * 0.15;
  const istirakBirim = brutMaas * 0.12;
  const istirakToplam = istirakBirim * cocukSayisi;
  return {
    yoksullukNafaka: yoksulluk,
    istirakNafakasiPerCocuk: istirakBirim,
    istirakToplam,
    toplamAylik: yoksulluk + istirakToplam,
  };
}

/* --------------------------- MİRAS PAYI --------------------------- */
/** Türk Medeni Kanunu — mirasçılık dereceleri (basitleştirilmiş). */
export function mirasPaylari(
  toplamMiras: number,
  esVarMi: boolean,
  cocukSayisi: number,
  anneBabaVarMi: boolean,
): { pay: string; tutar: number }[] {
  const sonuc: { pay: string; tutar: number }[] = [];
  if (cocukSayisi > 0) {
    // 1. zümre — çocuklar + eş
    const esPay = esVarMi ? toplamMiras * 0.25 : 0;
    const cocukTum = toplamMiras - esPay;
    if (esVarMi) sonuc.push({ pay: "Eş (1/4)", tutar: esPay });
    sonuc.push({ pay: `Her çocuk (${cocukSayisi} adet)`, tutar: cocukTum / cocukSayisi });
  } else if (anneBabaVarMi) {
    // 2. zümre — anne baba + eş
    const esPay = esVarMi ? toplamMiras * 0.5 : 0;
    const abTum = toplamMiras - esPay;
    if (esVarMi) sonuc.push({ pay: "Eş (1/2)", tutar: esPay });
    sonuc.push({ pay: "Anne ve baba (eşit)", tutar: abTum / 2 });
  } else {
    // Sadece eş
    if (esVarMi) sonuc.push({ pay: "Eş (tamamı)", tutar: toplamMiras });
  }
  return sonuc;
}

/* --------------------------- İNŞAAT M² MALİYETİ --------------------------- */
/** m² inşaat maliyeti × alan. Kaba/normal/lüks segmentleri. */
export function insaatMaliyet(m2: number, segment: "kaba" | "normal" | "luks", birimTL?: number) {
  const varsayilan = { kaba: 8000, normal: 15000, luks: 25000 };
  const birim = birimTL ?? varsayilan[segment];
  return { toplamMaliyet: m2 * birim, birimTL: birim };
}

/* --------------------------- KARIŞIM PROBLEMİ --------------------------- */
/** İki karışım oranını hedeflenen orana getirmek için karışım miktarı. */
export function karisimProblemi(oran1: number, oran2: number, hedefOran: number, birinciKg: number) {
  // Denklem: birinciKg*oran1 + x*oran2 = (birinciKg + x)*hedefOran
  const payda = hedefOran - oran2;
  if (Math.abs(payda) < 1e-9) return { ikinciKg: NaN, uyari: "İkinci oran hedeflenene eşit — çözüm yok" };
  const ikinci = (birinciKg * (oran1 - hedefOran)) / payda;
  return { ikinciKg: ikinci, toplamKg: birinciKg + ikinci };
}

/* --------------------------- TRİGONOMETRİ --------------------------- */
export function trigonometri(dereceInput: number) {
  const rad = (dereceInput * Math.PI) / 180;
  return {
    derece: dereceInput,
    radyan: rad,
    sin: Math.sin(rad),
    cos: Math.cos(rad),
    tan: Math.abs(Math.cos(rad)) < 1e-10 ? Infinity : Math.tan(rad),
    cot: Math.abs(Math.sin(rad)) < 1e-10 ? Infinity : 1 / Math.tan(rad),
  };
}

/* --------------------------- EV ELEKTRİKLİ ARAÇ MENZİL --------------------------- */
/** Batarya kWh × şarj% ÷ tüketim (kWh/100km) → menzil. */
export function evMenzil(bataryaKwh: number, sarjYuzde: number, tuketim100Km: number) {
  const netKwh = bataryaKwh * (sarjYuzde / 100);
  const menzil = tuketim100Km > 0 ? (netKwh / tuketim100Km) * 100 : 0;
  return { netKwh, menzilKm: menzil };
}

/* --------------------------- BEYAZ EŞYA YILLIK ELEKTRİK --------------------------- */
export const BEYAZ_ESYA = {
  buzdolabi: { A: 220, B: 300, C: 400, D: 550 },
  bulasik: { A: 180, B: 250, C: 320, D: 420 },
  camasir: { A: 150, B: 210, C: 280, D: 380 },
  klima: { A: 400, B: 600, C: 850, D: 1100 },
} as const;

export function beyazEsyaTuketim(tur: keyof typeof BEYAZ_ESYA, sinif: "A" | "B" | "C" | "D", birimTLKwh: number) {
  const kwh = BEYAZ_ESYA[tur][sinif];
  return { yillikKwh: kwh, yillikTL: kwh * birimTLKwh };
}

/* --------------------------- E-FATURA / GENEL FATURA HESABI --------------------------- */
export interface FaturaResult {
  netMalHizmet: number;
  kdvTutar: number;
  stopajTutar: number;
  damgaTutar: number;
  toplamFatura: number; // müşteriye kesilen
  tahsilTutar: number; // müşterinin ödeyeceği (stopaj varsa devlete)
}

/**
 * Genel fatura kalemi hesabı: mal/hizmet bedeli + KDV, opsiyonel stopaj + damga.
 * Serbest meslek makbuzu için stopajOran=20 kullanılır.
 */
export function faturaHesapla(
  netBedel: number,
  kdvOran: number,
  stopajOran = 0,
  damgaOran = 0,
): FaturaResult {
  const kdv = netBedel * (kdvOran / 100);
  const stopaj = netBedel * (stopajOran / 100);
  const damga = netBedel * (damgaOran / 100);
  const toplam = netBedel + kdv;
  return {
    netMalHizmet: netBedel,
    kdvTutar: kdv,
    stopajTutar: stopaj,
    damgaTutar: damga,
    toplamFatura: toplam,
    tahsilTutar: toplam - stopaj - damga,
  };
}

/* --------------------------- SU FATURASI --------------------------- */
export interface SuFaturasiResult {
  suBedeli: number;
  atikSuBedeli: number;
  cevreVergisi: number;
  kdv: number;
  toplam: number;
}
/**
 * Mesken su faturası. Kademe uygulanmış birim fiyat + atık su + çevre temizlik + KDV.
 */
export function hesaplaSuFaturasi(
  m3: number,
  birimFiyat: number,
  atikSuOran = 60,
  cevreVergisiAylik = 15,
  kdvOran = 20,
) {
  const su = m3 * birimFiyat;
  const atikSu = su * (atikSuOran / 100);
  const araToplam = su + atikSu + cevreVergisiAylik;
  const kdv = araToplam * (kdvOran / 100);
  return {
    suBedeli: su,
    atikSuBedeli: atikSu,
    cevreVergisi: cevreVergisiAylik,
    kdv,
    toplam: araToplam + kdv,
  };
}

/* --------------------------- DOĞALGAZ FATURASI --------------------------- */
export interface DogalgazFaturasiResult {
  gazBedeli: number;
  perakendeHizmet: number;
  kdv: number;
  toplam: number;
  kwh: number;
}
/** Doğalgaz faturası. Aylık tüketim (m³) → kWh dönüşümü (~10,64 kWh/m³) + birim × kWh. */
export function hesaplaDogalgazFaturasi(
  m3: number,
  birimTL_perKwh: number,
  perakendeHizmet = 25,
  kdvOran = 20,
) {
  const kwh = m3 * 10.64; // üst ısıl değer
  const gaz = kwh * birimTL_perKwh;
  const araToplam = gaz + perakendeHizmet;
  const kdv = araToplam * (kdvOran / 100);
  return {
    kwh,
    gazBedeli: gaz,
    perakendeHizmet,
    kdv,
    toplam: araToplam + kdv,
  };
}

/* --------------------------- VADE FARKI / SENET İSKONTO --------------------------- */
export interface VadeFarkiResult {
  vadeFarki: number;
  pesinDeger: number;
  gerçekOran: number;
}
/** Basit iskonto ile senedin peşin değeri. */
export function senetIskonto(vadeliTutar: number, aylikOranYuzde: number, gun: number): VadeFarkiResult {
  const yillikOran = aylikOranYuzde * 12;
  const iskonto = (vadeliTutar * yillikOran * gun) / (100 * 365);
  return {
    vadeFarki: iskonto,
    pesinDeger: vadeliTutar - iskonto,
    gerçekOran: yillikOran,
  };
}

/* ----------------------------- KÂR & İSKONTO ----------------------------- */
export interface KarResult {
  kar: number;
  karYuzdesi: number; // maliyete göre
  brutMarj: number; // satışa göre %
}

export function hesaplaKar(maliyet: number, satis: number): KarResult {
  const kar = satis - maliyet;
  return {
    kar,
    karYuzdesi: maliyet > 0 ? (kar / maliyet) * 100 : 0,
    brutMarj: satis > 0 ? (kar / satis) * 100 : 0,
  };
}

/** İskonto: liste fiyatına indirim uygulama */
export function iskonto(liste: number, indirimYuzde: number, kdvYuzde = 0) {
  const indirim = liste * (indirimYuzde / 100);
  const iskontolu = liste - indirim;
  const kdv = iskontolu * (kdvYuzde / 100);
  return {
    indirim,
    iskontolu,
    kdv,
    genelToplam: iskontolu + kdv,
  };
}

/* --------------------------- DESİ / KARGO -------------------------- */
/** Hacimsel ağırlık (desi) — kargolarda: (en × boy × yükseklik cm) / 3000 */
export function desiHesapla(enCm: number, boyCm: number, yukCm: number, agirlikKg: number) {
  const desi = (enCm * boyCm * yukCm) / 3000;
  return {
    desi,
    hacimselKg: desi,
    faturalanacakKg: Math.max(desi, agirlikKg),
    fark: Math.abs(desi - agirlikKg),
  };
}

/* -------------------------- KİRA GELİRİ VERGİSİ -------------------------- */
export interface KiraGeliriResult {
  yontem: "goturu" | "gercek";
  yillikGelir: number;
  istisnaTutari: number; // 2026 mesken istisnası
  gider: number;
  matrah: number;
  vergi: number;
}

/**
 * Mesken kira geliri vergisi (2026).
 * - Götürü gider yöntemi: (gelir − istisna) × %15 gider indirimi.
 * - Gerçek gider: kullanıcı gider tutarını girer.
 * Vergi, tarifeden hesaplanır (dilim entegrasyonu için ayrıca çağrılır).
 */
export function kiraGelirMatrahi(
  yillikGelir: number,
  yontem: "goturu" | "gercek",
  gercekGider: number,
  istisna: number,
): Omit<KiraGeliriResult, "vergi"> {
  const istisnaSonrasi = Math.max(0, yillikGelir - istisna);
  const gider = yontem === "goturu" ? istisnaSonrasi * 0.15 : gercekGider;
  return {
    yontem,
    yillikGelir,
    istisnaTutari: Math.min(yillikGelir, istisna),
    gider,
    matrah: Math.max(0, istisnaSonrasi - gider),
  };
}

/* ----------------------------- MTV ----------------------------- */
export interface MtvSatir {
  motorMax: number; // cm³ üst sınırı
  yas: [number, number, number, number, number]; // 1-3 / 4-6 / 7-11 / 12-15 / 16+
}

/**
 * 2026 MTV (I sayılı cetvel, otomobil) — yaklaşık tarifeler.
 * NOT: Kesin oranlar Gelir İdaresi'nin yıllık cetvelinden gelmelidir;
 * kullanıcı UI'da düzenleyebilecek şekilde göstermek daha güvenli.
 */
export const MTV_TARIFE_2026: MtvSatir[] = [
  { motorMax: 1300, yas: [3359, 2341, 1310, 989, 350] },
  { motorMax: 1600, yas: [5849, 4384, 2545, 1798, 692] },
  { motorMax: 1800, yas: [10333, 8072, 4744, 2892, 1148] },
  { motorMax: 2000, yas: [16273, 12537, 7365, 4384, 1731] },
  { motorMax: 2500, yas: [24406, 17715, 11062, 6607, 2614] },
  { motorMax: 3000, yas: [34019, 29594, 18490, 9950, 3651] },
  { motorMax: 3500, yas: [51797, 46612, 28074, 14018, 5138] },
  { motorMax: 4000, yas: [81411, 70298, 41398, 18490, 7365] },
  { motorMax: Infinity, yas: [133284, 99889, 59180, 26610, 10333] },
];

export function hesaplaMtv(motorCm3: number, aracYas: number): { yillik: number; taksit: number } {
  const satir = MTV_TARIFE_2026.find((s) => motorCm3 <= s.motorMax) ?? MTV_TARIFE_2026[MTV_TARIFE_2026.length - 1];
  const idx = aracYas <= 3 ? 0 : aracYas <= 6 ? 1 : aracYas <= 11 ? 2 : aracYas <= 15 ? 3 : 4;
  const yillik = satir.yas[idx];
  return { yillik, taksit: yillik / 2 };
}

/* --------------------------- EMLAK VERGİSİ --------------------------- */
/** Emlak vergisi. Rayiç bedel × oran. Konut ‰1, ticari ‰2, arsa ‰3, arazi ‰1
 *  (büyükşehirlerde katları 2×). */
export function emlakVergisi(
  rayic: number,
  tur: "konut" | "isyeri" | "arsa" | "arazi",
  buyuksehir: boolean,
): { oranBinde: number; yillik: number } {
  const temel = { konut: 1, isyeri: 2, arsa: 3, arazi: 1 }[tur];
  const oranBinde = buyuksehir ? temel * 2 : temel;
  return { oranBinde, yillik: (rayic * oranBinde) / 1000 };
}

/* --------------------------- BİLEŞİK FAİZ + DÜZENLİN KATKI --------------------------- */
export interface BirikimResult {
  sonDeger: number;
  toplamKatki: number;
  toplamGetiri: number;
  toplamYatirilan: number; // anapara + katkı
}
/**
 * Anapara + aylık düzenli katkı ile bileşik faiz.
 * Formül: A = P(1+i)^n + PMT × ((1+i)^n − 1)/i
 */
export function bilesikFaizKatki(
  anapara: number,
  aylikKatki: number,
  yillikOranYuzde: number,
  yil: number,
  donemPerYil = 12,
): BirikimResult {
  const i = yillikOranYuzde / 100 / donemPerYil;
  const n = donemPerYil * yil;
  const pow = Math.pow(1 + i, n);
  const anaparaSonDeger = anapara * pow;
  const katkiSonDeger = i > 0 ? aylikKatki * ((pow - 1) / i) : aylikKatki * n;
  const sonDeger = anaparaSonDeger + katkiSonDeger;
  const toplamKatki = aylikKatki * n;
  const toplamYatirilan = anapara + toplamKatki;
  return {
    sonDeger,
    toplamKatki,
    toplamYatirilan,
    toplamGetiri: sonDeger - toplamYatirilan,
  };
}

/* --------------------------- ROI --------------------------- */
export function hesaplaRoi(yatirim: number, getiri: number, sureAy: number) {
  const netGetiri = getiri - yatirim;
  const roi = yatirim > 0 ? (netGetiri / yatirim) * 100 : 0;
  const yillikRoi = sureAy > 0 ? (roi * 12) / sureAy : 0;
  return { netGetiri, roi, yillikRoi };
}

/* --------------------------- IRR (İç Verim Oranı) --------------------------- */
/**
 * IRR: NPV(r)=0 olan r'yi bulur. Bisection ile [-99, 200]% aralığında arar.
 */
export function hesaplaIrr(akislar: number[], tolerans = 1e-4, maxIter = 100): number | null {
  const npvAt = (r: number) => akislar.reduce((s, a, t) => s + a / Math.pow(1 + r, t), 0);
  let lo = -0.99, hi = 2.0; // -99% .. 200%
  let fLo = npvAt(lo);
  let fHi = npvAt(hi);
  if (fLo * fHi > 0) return null; // Bisection çalışmaz
  for (let i = 0; i < maxIter; i++) {
    const mid = (lo + hi) / 2;
    const f = npvAt(mid);
    if (Math.abs(f) < tolerans) return mid * 100;
    if (fLo * f < 0) { hi = mid; fHi = f; }
    else { lo = mid; fLo = f; }
  }
  return ((lo + hi) / 2) * 100;
}

/* --------------------------- IBAN DOĞRULAMA (mod-97) --------------------------- */
/** ISO 13616 IBAN doğrulama: MOD-97. Doğru IBAN'ın MOD-97 kalanı 1'dir. */
export function ibanDogrula(iban: string): {
  gecerli: boolean;
  ulke: string;
  uzunluk: number;
  formatli: string;
  hata?: string;
} {
  const temiz = iban.replace(/\s+/g, "").toUpperCase();
  const uzunluk = temiz.length;

  const ulke = temiz.slice(0, 2);
  const beklenenUzunluk: Record<string, number> = {
    TR: 26, DE: 22, GB: 22, FR: 27, NL: 18, BE: 16, AT: 20, CH: 21, IT: 27, ES: 24,
    US: 0, // US IBAN kullanmaz
  };

  const formatli = temiz.replace(/(.{4})/g, "$1 ").trim();

  if (!/^[A-Z]{2}\d{2}[A-Z0-9]+$/.test(temiz)) {
    return { gecerli: false, ulke, uzunluk, formatli, hata: "Format bozuk" };
  }
  if (ulke in beklenenUzunluk && beklenenUzunluk[ulke] > 0 && uzunluk !== beklenenUzunluk[ulke]) {
    return {
      gecerli: false, ulke, uzunluk, formatli,
      hata: `${ulke} için ${beklenenUzunluk[ulke]} hane olmalı (girilen ${uzunluk})`,
    };
  }

  // Ülke kodu ve kontrol basamağı sona alınır
  const yenidenSirali = temiz.slice(4) + temiz.slice(0, 4);
  // Harfleri sayıya çevir: A=10, B=11, ..., Z=35
  let sayisal = "";
  for (const c of yenidenSirali) {
    sayisal += /[A-Z]/.test(c) ? (c.charCodeAt(0) - 55).toString() : c;
  }
  // BigInt olmadan MOD-97 (parça parça)
  let mod = 0;
  for (const digit of sayisal) mod = (mod * 10 + parseInt(digit, 10)) % 97;
  return {
    gecerli: mod === 1,
    ulke,
    uzunluk,
    formatli,
    hata: mod === 1 ? undefined : "Kontrol basamağı doğrulanamadı (MOD-97 ≠ 1)",
  };
}

/* --------------------------- NPV (Net Bugünkü Değer) --------------------------- */
/** Nakit akışlarının indirgenmiş değerini toplar. akislar[0] = t=0 (genelde negatif). */
export function hesaplaNpv(akislar: number[], iskontoOranYuzde: number): {
  npv: number;
  yatirim: number;
  toplamGiris: number;
  kararUygun: boolean;
} {
  const r = iskontoOranYuzde / 100;
  let npv = 0;
  akislar.forEach((a, t) => (npv += a / Math.pow(1 + r, t)));
  const yatirim = akislar[0] < 0 ? -akislar[0] : 0;
  const toplamGiris = akislar.slice(1).filter((x) => x > 0).reduce((s, x) => s + x, 0);
  return { npv, yatirim, toplamGiris, kararUygun: npv > 0 };
}

/* --------------------------- ENFLASYON GÜNCELLEME --------------------------- */
/** T yılındaki tutarı, T→bugün TÜFE artışı uygulayarak bugünkü değere çevirir. */
export function enflasyonGuncelle(tutar: number, kumulatifYuzde: number): {
  bugunku: number;
  artis: number;
  gercekAzalis: number; // satın alma gücü kaybı %
} {
  const cp = kumulatifYuzde / 100;
  const bugunku = tutar * (1 + cp);
  return {
    bugunku,
    artis: tutar * cp,
    gercekAzalis: (cp / (1 + cp)) * 100,
  };
}

/* --------------------------- ELEKTRİKLİ ARAÇ ŞARJ --------------------------- */
export interface EvSarjResult {
  gerekenKwh: number;
  sarjSuresi: number; // saat
  maliyet: number;
}
/** Batarya kapasitesine göre hedef %'e ulaşana kadar şarj süresi ve maliyeti. */
export function evSarjMaliyet(
  bataryaKwh: number,
  mevcutYuzde: number,
  hedefYuzde: number,
  sarjHiziKw: number,
  birimKwhTl: number,
  verim = 0.9,
): EvSarjResult {
  const yuzdeFark = Math.max(0, hedefYuzde - mevcutYuzde);
  const netKwh = (bataryaKwh * yuzdeFark) / 100;
  // Verim kaybı → dizardan çekilen toplam enerji
  const gerekenKwh = netKwh / verim;
  return {
    gerekenKwh,
    sarjSuresi: sarjHiziKw > 0 ? gerekenKwh / sarjHiziKw : 0,
    maliyet: gerekenKwh * birimKwhTl,
  };
}

/* --------------------------- TAKSİ ÜCRETİ --------------------------- */
export interface TaksiResult {
  acilis: number;
  mesafeUcreti: number;
  beklemeUcreti: number;
  toplam: number;
}

export function taksiUcret(
  acilis: number,
  mesafeKm: number,
  birimKm: number,
  beklemeDk: number,
  birimDk: number,
  gece: boolean,
): TaksiResult {
  const mesafeUcreti = mesafeKm * birimKm;
  const beklemeUcreti = beklemeDk * birimDk;
  let toplam = acilis + mesafeUcreti + beklemeUcreti;
  if (gece) toplam *= 1.5;
  return { acilis, mesafeUcreti, beklemeUcreti, toplam };
}

/* --------------------------- YILDÖNÜMÜ SAYACI --------------------------- */
export interface YildonumuResult {
  yilSayisi: number;
  toplamGun: number;
  kalanGun: number; // sonraki yıldönümüne
  sonrakiYildonumu: Date;
  isim: string; // (Gümüş, Altın vs)
}
const EVLILIK_YILDONUMU_ISIM: Record<number, string> = {
  1: "Pamuk", 5: "Ağaç", 10: "Kalay", 15: "Kristal", 20: "Porselen",
  25: "Gümüş", 30: "İnci", 40: "Yakut", 50: "Altın", 60: "Elmas", 75: "Platin",
};
export function yildonumuSayaci(tarih: Date, bugun: Date = new Date()): YildonumuResult {
  const msGun = 86400000;
  const toplam = Math.floor((bugun.getTime() - tarih.getTime()) / msGun);
  const yil = bugun.getFullYear() - tarih.getFullYear();
  let sonraki = new Date(bugun.getFullYear(), tarih.getMonth(), tarih.getDate());
  if (sonraki < bugun) sonraki = new Date(bugun.getFullYear() + 1, tarih.getMonth(), tarih.getDate());
  const kalan = Math.ceil((sonraki.getTime() - bugun.getTime()) / msGun);
  const yilSayisi = sonraki.getFullYear() - tarih.getFullYear();
  return {
    yilSayisi,
    toplamGun: toplam,
    kalanGun: kalan,
    sonrakiYildonumu: sonraki,
    isim: EVLILIK_YILDONUMU_ISIM[yilSayisi] ?? "",
  };
}

/* --------------------------- ZAMAN DİLİMİ FARKI --------------------------- */
export const ZAMAN_DILIMLERI: { key: string; ad: string; utcOfset: number }[] = [
  { key: "utc", ad: "UTC (GMT)", utcOfset: 0 },
  { key: "ist", ad: "İstanbul (UTC+3)", utcOfset: 3 },
  { key: "lon", ad: "Londra (UTC+0/+1)", utcOfset: 0 },
  { key: "par", ad: "Paris/Berlin (UTC+1/+2)", utcOfset: 1 },
  { key: "mos", ad: "Moskova (UTC+3)", utcOfset: 3 },
  { key: "dub", ad: "Dubai (UTC+4)", utcOfset: 4 },
  { key: "del", ad: "Delhi (UTC+5:30)", utcOfset: 5.5 },
  { key: "bkk", ad: "Bangkok (UTC+7)", utcOfset: 7 },
  { key: "tok", ad: "Tokyo (UTC+9)", utcOfset: 9 },
  { key: "syd", ad: "Sydney (UTC+10/+11)", utcOfset: 10 },
  { key: "hnl", ad: "Honolulu (UTC-10)", utcOfset: -10 },
  { key: "lax", ad: "Los Angeles (UTC-8/-7)", utcOfset: -8 },
  { key: "nyc", ad: "New York (UTC-5/-4)", utcOfset: -5 },
];

export function zamanDilimiFarki(fromOfset: number, toOfset: number, saat: number, dakika: number): {
  fark: number;
  hedefSaat: number;
  hedefDakika: number;
  gunFarki: number;
} {
  const fark = toOfset - fromOfset;
  const kaynakMinutes = saat * 60 + dakika;
  let hedefMinutes = kaynakMinutes + fark * 60;
  let gunFarki = 0;
  while (hedefMinutes < 0) { hedefMinutes += 24 * 60; gunFarki -= 1; }
  while (hedefMinutes >= 24 * 60) { hedefMinutes -= 24 * 60; gunFarki += 1; }
  return {
    fark,
    hedefSaat: Math.floor(hedefMinutes / 60),
    hedefDakika: hedefMinutes % 60,
    gunFarki,
  };
}

/* --------------------------- DOĞUM GÜNÜ PARADOKSU --------------------------- */
/** N kişilik grupta en az iki kişinin aynı doğum gününe sahip olma olasılığı. */
export function dogumGunuParadoksu(n: number): { olasilik: number; yuzde: number } {
  if (n <= 1) return { olasilik: 0, yuzde: 0 };
  if (n >= 365) return { olasilik: 1, yuzde: 100 };
  let pFarkli = 1;
  for (let i = 0; i < n; i++) pFarkli *= (365 - i) / 365;
  return { olasilik: 1 - pFarkli, yuzde: (1 - pFarkli) * 100 };
}

/* --------------------------- KARAR MATRİSİ --------------------------- */
/** Ağırlıklı karar matrisi: seçeneklerin kriterlere göre ağırlıklı toplam skoru. */
export interface KararSonuc {
  secenek: string;
  skor: number;
  yuzde: number; // toplama göre pay
}

export function kararMatrisi(
  secenekler: { ad: string; puanlar: number[] }[],
  agirliklar: number[],
): KararSonuc[] {
  const skorlar = secenekler.map((s) => ({
    ad: s.ad,
    skor: s.puanlar.reduce((sum, p, i) => sum + p * (agirliklar[i] ?? 0), 0),
  }));
  const toplam = skorlar.reduce((s, x) => s + x.skor, 0);
  return skorlar
    .map((s) => ({ secenek: s.ad, skor: s.skor, yuzde: toplam > 0 ? (s.skor / toplam) * 100 : 0 }))
    .sort((a, b) => b.skor - a.skor);
}

/* --------------------------- TARİH: GÜN EKLE --------------------------- */
export function gunEkle(baz: Date, gunSayisi: number): Date {
  const d = new Date(baz.getFullYear(), baz.getMonth(), baz.getDate());
  d.setDate(d.getDate() + gunSayisi);
  return d;
}

export const HAFTA_GUNLERI = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

/* -------------------------- HİCRİ TAKVİM -------------------------- */
/**
 * Miladi → Hicri (Ümmülkura yaklaşımı).
 * Kaynak: Kuwaiti algoritması (astronomik olmayan, ortalama ~2 gün doğrulukta).
 */
export function miladiToHicri(m: Date): { yil: number; ay: number; gun: number; ayAdi: string } {
  const gy = m.getFullYear();
  const gm = m.getMonth() + 1;
  const gd = m.getDate();
  // Julian day
  let jd: number;
  if (gy > 1582 || (gy === 1582 && (gm > 10 || (gm === 10 && gd >= 15)))) {
    jd = Math.floor((1461 * (gy + 4800 + Math.floor((gm - 14) / 12))) / 4) +
      Math.floor((367 * (gm - 2 - 12 * Math.floor((gm - 14) / 12))) / 12) -
      Math.floor((3 * Math.floor((gy + 4900 + Math.floor((gm - 14) / 12)) / 100)) / 4) +
      gd - 32075;
  } else {
    jd = 367 * gy - Math.floor((7 * (gy + 5001 + Math.floor((gm - 9) / 7))) / 4) +
      Math.floor((275 * gm) / 9) + gd + 1729777;
  }
  const l1 = jd - 1948440 + 10632;
  const n = Math.floor((l1 - 1) / 10631);
  const l2 = l1 - 10631 * n + 354;
  const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
    Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const hicriAy = Math.floor((24 * l3) / 709);
  const hicriGun = l3 - Math.floor((709 * hicriAy) / 24);
  const hicriYil = 30 * n + j - 30;

  const ayAdlari = ["Muharrem", "Safer", "Rebiülevvel", "Rebiülahir", "Cemaziyelevvel",
    "Cemaziyelahir", "Recep", "Şaban", "Ramazan", "Şevval", "Zilkade", "Zilhicce"];

  return {
    yil: hicriYil,
    ay: hicriAy,
    gun: hicriGun,
    ayAdi: ayAdlari[Math.max(0, Math.min(11, hicriAy - 1))],
  };
}
