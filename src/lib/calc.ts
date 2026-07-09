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
