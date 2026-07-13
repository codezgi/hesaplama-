/* ---------------------------------------------------------------------------
   Sağlık hesaplamaları — saf fonksiyonlar.
--------------------------------------------------------------------------- */

export type Cinsiyet = "erkek" | "kadin";

/* --------------------------- İDEAL KİLO --------------------------- */
export interface IdealKiloResult {
  devine: number;
  robinson: number;
  miller: number;
  hamwi: number;
  ortalama: number;
}

/** İdeal kilo (4 klasik formül). Boy cm, cinsiyet. */
export function idealKilo(boyCm: number, cinsiyet: Cinsiyet): IdealKiloResult {
  const inch = boyCm / 2.54;
  const over60 = Math.max(0, inch - 60);
  const e = cinsiyet === "erkek";

  const devine = (e ? 50 : 45.5) + 2.3 * over60;
  const robinson = (e ? 52 : 49) + 1.9 * over60;
  const miller = (e ? 56.2 : 53.1) + 1.41 * over60;
  const hamwi = (e ? 48 : 45.5) + 2.7 * over60;

  return {
    devine,
    robinson,
    miller,
    hamwi,
    ortalama: (devine + robinson + miller + hamwi) / 4,
  };
}

/* -------------------- VÜCUT YAĞ ORANI (US NAVY) -------------------- */
export interface YagOraniResult {
  yuzde: number; // yağ oranı %
  kategori: string;
  yagKg: number;
  yagsizKg: number;
}

/**
 * US Navy yöntemi. Erkek: bel, boyun. Kadın: bel, kalça, boyun.
 * Ölçüler cm, boy cm, kilo kg.
 */
export function vucutYagi(
  cinsiyet: Cinsiyet,
  boyCm: number,
  kiloKg: number,
  belCm: number,
  boyunCm: number,
  kalcaCm = 0,
): YagOraniResult {
  const log10 = (x: number) => Math.log10(Math.max(x, 0.0001));
  let yuzde: number;
  if (cinsiyet === "erkek") {
    yuzde = 495 / (1.0324 - 0.19077 * log10(belCm - boyunCm) + 0.15456 * log10(boyCm)) - 450;
  } else {
    yuzde =
      495 /
        (1.29579 - 0.35004 * log10(belCm + kalcaCm - boyunCm) + 0.221 * log10(boyCm)) -
      450;
  }
  yuzde = Math.max(0, yuzde);

  let kategori: string;
  if (cinsiyet === "erkek") {
    if (yuzde < 6) kategori = "Zorunlu yağ";
    else if (yuzde < 14) kategori = "Sporcu";
    else if (yuzde < 18) kategori = "Fit";
    else if (yuzde < 25) kategori = "Normal";
    else kategori = "Fazla";
  } else {
    if (yuzde < 14) kategori = "Zorunlu yağ";
    else if (yuzde < 21) kategori = "Sporcu";
    else if (yuzde < 25) kategori = "Fit";
    else if (yuzde < 32) kategori = "Normal";
    else kategori = "Fazla";
  }

  const yagKg = (kiloKg * yuzde) / 100;
  return { yuzde, kategori, yagKg, yagsizKg: kiloKg - yagKg };
}

/* ------------------------ SU İHTİYACI ------------------------ */
/** Kiloya + aktivite/iklim etkisine göre günlük su ihtiyacı (litre). */
export function suIhtiyaci(kiloKg: number, aktiviteDk = 0, sicakIklim = false): number {
  const temel = kiloKg * 0.035; // L
  const aktiviteEk = (aktiviteDk / 30) * 0.35; // 30 dk egzersiz ≈ 350 ml
  const iklimEk = sicakIklim ? 0.5 : 0;
  return temel + aktiviteEk + iklimEk;
}

/* ------------------------ PROTEİN İHTİYACI ------------------------ */
export interface ProteinDurum {
  key: "hareketsiz" | "hafif" | "orta" | "dayanikli" | "kuvvet";
  label: string;
  faktor: number; // g/kg
}
export const PROTEIN_DURUMLARI: ProteinDurum[] = [
  { key: "hareketsiz", label: "Hareketsiz yaşam", faktor: 0.8 },
  { key: "hafif", label: "Hafif aktif", faktor: 1.0 },
  { key: "orta", label: "Orta aktif", faktor: 1.2 },
  { key: "dayanikli", label: "Dayanıklılık sporu", faktor: 1.6 },
  { key: "kuvvet", label: "Kuvvet sporu / kas kazanımı", faktor: 2.0 },
];

/** Kiloya + duruma göre günlük protein (gram). */
export function proteinIhtiyaci(kiloKg: number, faktor: number): number {
  return kiloKg * faktor;
}

/* ---------------------- BEL-KALÇA ORANI (WHR) ---------------------- */
export interface WhrResult {
  oran: number;
  kategori: string;
  riskSeviyesi: "düşük" | "orta" | "yüksek";
}

/** WHO'ya göre bel/kalça oranı ve sağlık risk kategorisi. */
export function belKalcaOrani(belCm: number, kalcaCm: number, cinsiyet: Cinsiyet): WhrResult {
  const oran = kalcaCm > 0 ? belCm / kalcaCm : 0;
  let kategori: string;
  let risk: "düşük" | "orta" | "yüksek";
  if (cinsiyet === "erkek") {
    if (oran < 0.9) { kategori = "Normal"; risk = "düşük"; }
    else if (oran < 1.0) { kategori = "Orta risk"; risk = "orta"; }
    else { kategori = "Yüksek risk"; risk = "yüksek"; }
  } else {
    if (oran < 0.8) { kategori = "Normal"; risk = "düşük"; }
    else if (oran < 0.85) { kategori = "Orta risk"; risk = "orta"; }
    else { kategori = "Yüksek risk"; risk = "yüksek"; }
  }
  return { oran, kategori, riskSeviyesi: risk };
}

/* ---------------------- YUMURTA PİŞİRME ---------------------- */
export function yumurtaSuresi(agirlikG: number, sicaklik: "buzdolabi" | "oda", tur: "rafadan" | "orta" | "kati") {
  // Baz süre (60g yumurta, oda sıcaklığında)
  const bazSaniye = { rafadan: 240, orta: 360, kati: 540 }[tur];
  const agirlikFaktor = agirlikG / 60;
  const sicaklikEklenen = sicaklik === "buzdolabi" ? 60 : 0;
  const toplamSaniye = Math.round(bazSaniye * agirlikFaktor + sicaklikEklenen);
  return { dakika: Math.floor(toplamSaniye / 60), saniye: toplamSaniye % 60, toplamSaniye };
}

/* ---------------------- UYKU DÖNGÜLERİ ---------------------- */
/** 90 dk uyku döngüsü. Uyanma vakti verilir → yatma saatleri (5-6 döngü optimum). */
export function uykuHesapla(uyanmaHH: number, uyanmaMM: number) {
  const uykuMin = 15; // yatağa girdikten 15 dk sonra uyku başlar
  const donguDk = 90;
  const uyanmaMin = uyanmaHH * 60 + uyanmaMM;
  const yatma: string[] = [];
  for (let d = 6; d >= 3; d--) {
    let m = uyanmaMin - (d * donguDk + uykuMin);
    while (m < 0) m += 24 * 60;
    const h = Math.floor(m / 60) % 24;
    const mm = m % 60;
    yatma.push(`${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")} (${d} döngü)`);
  }
  return { yatmaSaatleri: yatma };
}

/* ---------------------- ZAYIFLAMA HEDEF SÜRE ---------------------- */
/** Haftalık 0,5-1 kg sağlıklı kayıp. Kaç haftada hedefe ulaşılır. */
export function zayiflamaSure(mevcut: number, hedef: number, haftalikKayipKg: number) {
  const kayip = mevcut - hedef;
  if (kayip <= 0 || haftalikKayipKg <= 0) return { hafta: 0, ay: 0, mesaj: kayip <= 0 ? "Zaten hedef veya altındasınız" : "Geçerli değer girin" };
  const hafta = kayip / haftalikKayipKg;
  return { hafta, ay: hafta / 4.345, mesaj: `${Math.ceil(hafta)} haftada hedefe ulaşılır` };
}

/* ---------------------- SGK İLAÇ KATILIM PAYI ---------------------- */
/** Aktif çalışan %20, emekli %10. Reçete başı asgari 3 TL. */
export function ilacKatilimi(ilacBedel: number, emekli: boolean) {
  const oran = emekli ? 0.10 : 0.20;
  const katilimHam = ilacBedel * oran;
  const katilim = Math.max(3, katilimHam);
  return { katilim, sgkPay: ilacBedel - katilim, oran: oran * 100 };
}

/* ---------------------- YÜRÜYÜŞ / KOŞU ---------------------- */
/** Adım → mesafe → kcal (~0,04 kcal/adım × kilo/70 orantı). */
export function yuruyusKalori(adim: number, kiloKg: number, boyCm = 170) {
  const adimUzunlukM = boyCm * 0.415 * 0.01; // ~%41,5 boy
  const mesafeKm = (adim * adimUzunlukM) / 1000;
  const kcal = 0.04 * adim * (kiloKg / 70);
  return { mesafeKm, kcal };
}

/** Koşu tempo: dk/km → hız km/s dönüşümü. */
export function kosuTempo(mesafeKm: number, dakika: number) {
  if (mesafeKm <= 0) return { tempoDkKm: 0, tempoStr: "—", hizKmS: 0 };
  const tempo = dakika / mesafeKm; // dk/km
  const dk = Math.floor(tempo);
  const sn = Math.round((tempo - dk) * 60);
  return {
    tempoDkKm: tempo,
    tempoStr: `${dk}:${String(sn).padStart(2, "0")}/km`,
    hizKmS: 60 / tempo,
  };
}

/* ---------------------- KAN BASINCI / KOLESTEROL ---------------------- */
export function kanBasinciKategori(sistolik: number, diastolik: number): string {
  if (sistolik >= 180 || diastolik >= 120) return "Hipertansif kriz — acil tıbbi yardım";
  if (sistolik >= 140 || diastolik >= 90) return "Hipertansiyon Evre 2";
  if (sistolik >= 130 || diastolik >= 80) return "Hipertansiyon Evre 1";
  if (sistolik >= 120) return "Yüksek normal";
  if (sistolik >= 90 && diastolik >= 60) return "Normal";
  return "Düşük tansiyon";
}

export function kolesterolKategori(toplam: number, ldl: number, hdl: number, cinsiyet: Cinsiyet) {
  const durum: string[] = [];
  if (toplam < 200) durum.push("Toplam kolesterol: Normal");
  else if (toplam < 240) durum.push("Toplam kolesterol: Sınırda yüksek");
  else durum.push("Toplam kolesterol: Yüksek");
  if (ldl < 100) durum.push("LDL: Optimal");
  else if (ldl < 130) durum.push("LDL: Optimuma yakın");
  else if (ldl < 160) durum.push("LDL: Sınırda yüksek");
  else if (ldl < 190) durum.push("LDL: Yüksek");
  else durum.push("LDL: Çok yüksek");
  const hdlEsik = cinsiyet === "erkek" ? 40 : 50;
  durum.push(hdl >= hdlEsik ? "HDL: Yeterli" : "HDL: Düşük");
  return durum;
}

/* ---------------------- BEL/BOY ORANI ---------------------- */
/** WHtR: sağlık riski göstergesi. 0,5 üstü artmış risk. */
export function belBoyOrani(belCm: number, boyCm: number) {
  const oran = boyCm > 0 ? belCm / boyCm : 0;
  let kategori: string;
  if (oran < 0.4) kategori = "Çok düşük";
  else if (oran < 0.5) kategori = "Sağlıklı";
  else if (oran < 0.6) kategori = "Artmış risk";
  else kategori = "Yüksek risk";
  return { oran, kategori };
}

/* ---------------------- VO2 MAX (Cooper testi) ---------------------- */
/** Cooper 12 dk koşu testi: VO2max = (mesafe m − 504,9) / 44,73 */
export function vo2Max(metre12dk: number) {
  const vo2 = (metre12dk - 504.9) / 44.73;
  let kategori: string;
  if (vo2 < 25) kategori = "Zayıf";
  else if (vo2 < 33) kategori = "Ortalama altı";
  else if (vo2 < 42) kategori = "Ortalama";
  else if (vo2 < 52) kategori = "İyi";
  else kategori = "Mükemmel";
  return { vo2, kategori };
}

/* ---------------------- KARBON AYAK İZİ ---------------------- */
/** Yıllık CO2 tahmini: km × ~0,17 kg CO2 + elektrik kWh × 0,46 + et yeme. */
export function karbonAyakIzi(
  aracKmYil: number,
  elektrikKwhYil: number,
  ucusSaatYil: number,
  etYesin: boolean,
) {
  const arac = aracKmYil * 0.17;
  const elektrik = elektrikKwhYil * 0.46;
  const ucus = ucusSaatYil * 90; // ~90 kg/saat
  const beslenme = etYesin ? 2500 : 1500; // yıllık kg CO2
  const toplam = arac + elektrik + ucus + beslenme;
  return {
    arac, elektrik, ucus, beslenme, toplam,
    agacIhtiyaci: Math.ceil(toplam / 22), // 1 ağaç ~22 kg CO2/yıl emer
  };
}

/* ---------------------- BMR (Harris-Benedict) ---------------------- */
/**
 * Harris-Benedict Revised (1984) formülleri — Mifflin-St Jeor'a alternatif.
 * Farklı formüller %5-10 farklı sonuç verir; ikisi de tıbben kullanılır.
 */
export function bmrHarrisBenedict(
  cinsiyet: Cinsiyet,
  yas: number,
  boyCm: number,
  kiloKg: number,
): number {
  if (cinsiyet === "erkek") {
    return 88.362 + 13.397 * kiloKg + 4.799 * boyCm - 5.677 * yas;
  }
  return 447.593 + 9.247 * kiloKg + 3.098 * boyCm - 4.330 * yas;
}

/* ---------------------- ÇOCUK BOY TAHMİNİ (Mid-parental) ---------------------- */
/**
 * Mid-parental height (Tanner) yöntemi:
 * Erkek: (baba + anne + 13) / 2
 * Kız: (baba + anne − 13) / 2
 * ± 8,5 cm hata payı.
 */
export function cocukBoyTahmini(
  babaCm: number,
  anneCm: number,
  cocukCinsiyet: Cinsiyet,
): { tahmin: number; altSinir: number; ustSinir: number } {
  const ort = (babaCm + anneCm) / 2;
  const tahmin = cocukCinsiyet === "erkek" ? ort + 6.5 : ort - 6.5;
  return { tahmin, altSinir: tahmin - 8.5, ustSinir: tahmin + 8.5 };
}

/* ---------------------- BEBEK AŞI TAKVİMİ (SB Türkiye) ---------------------- */
export interface AsiBilgi {
  ay: number;
  ad: string;
  asilar: string[];
}
export const ASI_TAKVIMI: AsiBilgi[] = [
  { ay: 0, ad: "Doğumda", asilar: ["Hepatit B (1. doz)", "BCG (verem)"] },
  { ay: 1, ad: "1. Ay", asilar: ["Hepatit B (2. doz)"] },
  { ay: 2, ad: "2. Ay", asilar: ["DaBT-İPA-Hib (1)", "KPA (1) — konjuge pnömokok", "OPA-Rota"] },
  { ay: 4, ad: "4. Ay", asilar: ["DaBT-İPA-Hib (2)", "KPA (2)", "Rota (2)"] },
  { ay: 6, ad: "6. Ay", asilar: ["DaBT-İPA-Hib (3)", "Hepatit B (3. doz)", "OPA (1)"] },
  { ay: 12, ad: "12. Ay", asilar: ["KPA rapel", "KKK (Kızamık-Kabakulak-Kızamıkçık) (1)", "Suçiçeği (1)"] },
  { ay: 18, ad: "18. Ay", asilar: ["DaBT-İPA-Hib rapel", "Hepatit A (1)"] },
  { ay: 24, ad: "24. Ay", asilar: ["Hepatit A (2)"] },
  { ay: 48, ad: "48. Ay (İlkokul öncesi)", asilar: ["DaBT-İPA rapel", "KKK (2)"] },
  { ay: 156, ad: "13 yaş", asilar: ["Td rapel (Tetanoz-difteri)", "HPV (kız çocuklar için önerilir)"] },
];

/* ---------------------- YAŞAM BEKLENTİSİ ---------------------- */
/**
 * TÜİK 2023 verisine göre Türkiye yaşam beklentisi ~78,6 (kadın 81,3, erkek 75,9).
 * Yaş+cinsiyet+yaşam tarzına göre kaba tahmin. Gerçek aktüerya tabloları çok daha karmaşıktır.
 */
export function yasamBeklentisi(
  yas: number,
  cinsiyet: Cinsiyet,
  sigara: boolean,
  aktif: boolean,
  saglikli: boolean,
): { beklenenYas: number; kalanYil: number; kalanGun: number; yasSkoru: number } {
  const baz = cinsiyet === "kadin" ? 81.3 : 75.9;
  let beklenen = baz;
  if (sigara) beklenen -= 8;
  if (!aktif) beklenen -= 3;
  if (!saglikli) beklenen -= 4;
  if (aktif && saglikli && !sigara) beklenen += 3;
  const kalanYil = Math.max(0, beklenen - yas);
  return {
    beklenenYas: beklenen,
    kalanYil,
    kalanGun: Math.round(kalanYil * 365),
    yasSkoru: Math.round((beklenen / 90) * 100),
  };
}

/* ---------------------- KALP ATIŞ HIZI (Karvonen) ---------------------- */
export interface KalpZone {
  ad: string;
  altYuzde: number;
  ustYuzde: number;
  altBpm: number;
  ustBpm: number;
  aciklama: string;
}
/**
 * Karvonen formülü ile antrenman zonları:
 * Hedef = ((MaxKAH − İstirahatKAH) × %) + İstirahatKAH
 * MaxKAH ≈ 220 − Yaş (basitleştirilmiş)
 */
export function kalpAtisZonlari(yas: number, istirahatKah: number): {
  maxKah: number;
  istirahat: number;
  zonlar: KalpZone[];
} {
  const maxKah = 220 - yas;
  const rezerv = maxKah - istirahatKah;
  const zonYap = (ad: string, alt: number, ust: number, aciklama: string): KalpZone => ({
    ad, altYuzde: alt, ustYuzde: ust,
    altBpm: Math.round(rezerv * (alt / 100) + istirahatKah),
    ustBpm: Math.round(rezerv * (ust / 100) + istirahatKah),
    aciklama,
  });
  return {
    maxKah,
    istirahat: istirahatKah,
    zonlar: [
      zonYap("Zone 1 — Isınma", 50, 60, "Kolay tempo, ısınma & soğuma."),
      zonYap("Zone 2 — Yağ yakımı", 60, 70, "Uzun süreli aerobik, dayanıklılık."),
      zonYap("Zone 3 — Aerobik", 70, 80, "Orta yoğunluk, kardiyovasküler gelişim."),
      zonYap("Zone 4 — Anaerobik eşik", 80, 90, "Yüksek yoğunluk, hız/laktat."),
      zonYap("Zone 5 — Maksimum", 90, 100, "Kısa süreli patlayıcı, VO2max."),
    ],
  };
}

/* ---------------------- ADET DÖNGÜ TAKVİMİ ---------------------- */
export interface DonguGunu {
  tarih: Date;
  faz: "adet" | "folikuler" | "ovulasyon" | "luteal";
  aciklama: string;
}
/** 3 aylık adet döngü takvimi tahmini. */
export function donguTakvimi(sonAdet: Date, donguUzun: number, adetSuresi: number): DonguGunu[] {
  const msGun = 86400000;
  const gunler: DonguGunu[] = [];
  for (let c = 0; c < 3; c++) {
    const bas = new Date(sonAdet.getTime() + c * donguUzun * msGun);
    for (let g = 0; g < donguUzun; g++) {
      const t = new Date(bas.getTime() + g * msGun);
      let faz: DonguGunu["faz"];
      let aciklama: string;
      const ovulasyonGun = donguUzun - 14;
      if (g < adetSuresi) { faz = "adet"; aciklama = `Adet günü ${g + 1}`; }
      else if (g >= ovulasyonGun - 3 && g < ovulasyonGun) { faz = "folikuler"; aciklama = "Verimli dönem — folikuler"; }
      else if (g === ovulasyonGun) { faz = "ovulasyon"; aciklama = "Ovulasyon (yumurtlama)"; }
      else if (g < ovulasyonGun) { faz = "folikuler"; aciklama = "Folikuler faz"; }
      else { faz = "luteal"; aciklama = "Luteal faz"; }
      gunler.push({ tarih: t, faz, aciklama });
    }
  }
  return gunler;
}

/* ---------------------- ALKOL PROMİL (Widmark) ---------------------- */
export interface PromilSonuc {
  promil: number; // ‰ (g/L kan)
  kategori: string;
  ceza: string;
  arac: "guvenli" | "sinir" | "yasak";
}

/**
 * Widmark formülü. C = (A × %) / (KiloKg × r) − β × Saat
 * A: içki hacmi ml, %: alkol yüzdesi, r: dağılım (erkek 0.68, kadın 0.55),
 * β: eliminasyon (0.15 ‰/saat), sonuç g/L (promil).
 */
export function alkolPromil(
  icecekMl: number,
  alkolYuzde: number,
  kiloKg: number,
  cinsiyet: Cinsiyet,
  saatGectiktenSonra: number,
): PromilSonuc {
  const r = cinsiyet === "erkek" ? 0.68 : 0.55;
  const gramAlkol = (icecekMl * alkolYuzde * 0.789) / 100; // etanol yoğunluğu 0,789 g/ml
  let c = gramAlkol / (kiloKg * r) - 0.15 * saatGectiktenSonra;
  c = Math.max(0, c);

  let kategori: string, ceza: string, arac: PromilSonuc["arac"];
  if (c === 0) { kategori = "Alkol yok"; ceza = "—"; arac = "guvenli"; }
  else if (c < 0.5) { kategori = "Az / etkisiz"; ceza = "Yasak sınırında değil"; arac = "guvenli"; }
  else if (c < 1.0) { kategori = "Orta düzey"; ceza = "TCK: sürüş yasak, para+ehliyet 6 ay"; arac = "yasak"; }
  else if (c < 2.0) { kategori = "İleri düzey"; ceza = "Ehliyet 2 yıl geri alınabilir"; arac = "yasak"; }
  else { kategori = "Ağır sarhoşluk"; ceza = "Sağlık riski + ağır ceza"; arac = "yasak"; }

  return { promil: c, kategori, ceza, arac };
}

/* ---------------------- SİGARA BIRAKMA KAZANÇLARI ---------------------- */
/** Sigara bırakma sonrası gün sayısına göre biyolojik iyileşme ve para birikimi. */
export function sigaraBirakma(gun: number, gunlukParaMuadili: number) {
  const asamalari: { esik: number; ad: string }[] = [
    { esik: 1, ad: "20 dk: Kan basıncı ve nabız normale döner." },
    { esik: 1, ad: "12 saat: Kanda karbonmonoksit normale iner." },
    { esik: 2, ad: "24 saat: Kalp krizi riski düşmeye başlar." },
    { esik: 3, ad: "48 saat: Koku ve tat alma duyusu iyileşir." },
    { esik: 90, ad: "2-12 hafta: Akciğer kapasitesi %30 artar." },
    { esik: 270, ad: "1-9 ay: Öksürük, nefes darlığı azalır." },
    { esik: 365, ad: "1 yıl: Koroner kalp hastalığı riski yarıya iner." },
    { esik: 1825, ad: "5 yıl: Ağız/gırtlak/yemek borusu kanser riski yarı azalır." },
    { esik: 3650, ad: "10 yıl: Akciğer kanseri riski yarıya iner." },
  ];
  const kazanilanAsamalar = asamalari.filter((a) => gun >= a.esik);
  return {
    birikenPara: gun * gunlukParaMuadili,
    asamalari: kazanilanAsamalar,
    sonrakiAsama: asamalari.find((a) => gun < a.esik),
  };
}

/* ---------------------- BEBEK BOY-KİLO (WHO) ---------------------- */
/**
 * WHO çocuk gelişim eğrilerinden yaklaşık P50 (median) değerler.
 * Kız ve erkek için 0-24 ay aralığı. Gerçek uygulamada z-skor gerekir;
 * bu tablo kaba bir ortalama karşılaştırması sunar.
 */
export const WHO_BEBEK_P50 = {
  erkek: {
    kilo: [
      { ay: 0, deger: 3.3 }, { ay: 1, deger: 4.5 }, { ay: 2, deger: 5.6 },
      { ay: 3, deger: 6.4 }, { ay: 4, deger: 7.0 }, { ay: 5, deger: 7.5 },
      { ay: 6, deger: 7.9 }, { ay: 9, deger: 8.9 }, { ay: 12, deger: 9.6 },
      { ay: 18, deger: 10.9 }, { ay: 24, deger: 12.2 },
    ],
    boy: [
      { ay: 0, deger: 49.9 }, { ay: 1, deger: 54.7 }, { ay: 2, deger: 58.4 },
      { ay: 3, deger: 61.4 }, { ay: 4, deger: 63.9 }, { ay: 5, deger: 65.9 },
      { ay: 6, deger: 67.6 }, { ay: 9, deger: 72.0 }, { ay: 12, deger: 75.7 },
      { ay: 18, deger: 82.3 }, { ay: 24, deger: 87.8 },
    ],
  },
  kadin: {
    kilo: [
      { ay: 0, deger: 3.2 }, { ay: 1, deger: 4.2 }, { ay: 2, deger: 5.1 },
      { ay: 3, deger: 5.8 }, { ay: 4, deger: 6.4 }, { ay: 5, deger: 6.9 },
      { ay: 6, deger: 7.3 }, { ay: 9, deger: 8.2 }, { ay: 12, deger: 8.9 },
      { ay: 18, deger: 10.2 }, { ay: 24, deger: 11.5 },
    ],
    boy: [
      { ay: 0, deger: 49.1 }, { ay: 1, deger: 53.7 }, { ay: 2, deger: 57.1 },
      { ay: 3, deger: 59.8 }, { ay: 4, deger: 62.1 }, { ay: 5, deger: 64.0 },
      { ay: 6, deger: 65.7 }, { ay: 9, deger: 70.1 }, { ay: 12, deger: 74.0 },
      { ay: 18, deger: 80.7 }, { ay: 24, deger: 86.4 },
    ],
  },
} as const;

function interpol(tablo: readonly { ay: number; deger: number }[], ay: number): number {
  if (ay <= tablo[0].ay) return tablo[0].deger;
  if (ay >= tablo[tablo.length - 1].ay) return tablo[tablo.length - 1].deger;
  for (let i = 0; i < tablo.length - 1; i++) {
    const a = tablo[i], b = tablo[i + 1];
    if (ay >= a.ay && ay <= b.ay) {
      const t = (ay - a.ay) / (b.ay - a.ay);
      return a.deger + t * (b.deger - a.deger);
    }
  }
  return 0;
}

export interface BebekBuyumeSonuc {
  beklenenKilo: number;
  beklenenBoy: number;
  kiloDurum: string;
  boyDurum: string;
}

/** Bebeğin yaşına göre P50 değerlerine göre kilo/boy değerlendirmesi. */
export function bebekBuyume(
  ay: number,
  cinsiyet: Cinsiyet,
  gercekKilo: number,
  gercekBoy: number,
): BebekBuyumeSonuc {
  const t = WHO_BEBEK_P50[cinsiyet];
  const bKilo = interpol(t.kilo, ay);
  const bBoy = interpol(t.boy, ay);

  const durum = (gercek: number, beklenen: number) => {
    const orn = (gercek / beklenen) * 100;
    if (orn < 85) return "Beklenenin altında";
    if (orn < 95) return "Alt normal";
    if (orn <= 110) return "Beklenene yakın";
    if (orn <= 120) return "Üst normal";
    return "Beklenenin üstünde";
  };

  return {
    beklenenKilo: bKilo,
    beklenenBoy: bBoy,
    kiloDurum: durum(gercekKilo, bKilo),
    boyDurum: durum(gercekBoy, bBoy),
  };
}

/* ---------------------- BEBEK UYKU İHTİYACI ---------------------- */
/** Yaş bazlı önerilen günlük toplam uyku saati (National Sleep Foundation). */
export function bebekUyku(ay: number): { min: number; max: number; aciklama: string } {
  if (ay < 3) return { min: 14, max: 17, aciklama: "Yenidoğan (0-3 ay)" };
  if (ay < 12) return { min: 12, max: 15, aciklama: "Bebek (4-11 ay)" };
  if (ay < 24) return { min: 11, max: 14, aciklama: "Yürümeye başlayan (1-2 yaş)" };
  if (ay < 60) return { min: 10, max: 13, aciklama: "Okul öncesi (3-5 yaş)" };
  if (ay < 156) return { min: 9, max: 11, aciklama: "Okul çağı (6-13 yaş)" };
  return { min: 8, max: 10, aciklama: "Ergen ve üstü" };
}

/* ---------------------- OVULASYON / REGL ---------------------- */
export interface OvulasyonResult {
  ovulasyon: Date; // tahmini yumurtlama günü
  verimliBas: Date;
  verimliBit: Date;
  sonrakiRegl: Date;
  luteal: number;
}

/**
 * Ortalama luteal faz 14 gündür → ovulasyon ≈ sonraki regl − 14.
 * Verimli pencere = ovulasyon ± 3 gün.
 */
export function ovulasyon(sonAdet: Date, dongu: number): OvulasyonResult {
  const msGun = 1000 * 60 * 60 * 24;
  const sonraki = new Date(sonAdet.getTime() + dongu * msGun);
  const ovul = new Date(sonraki.getTime() - 14 * msGun);
  return {
    ovulasyon: ovul,
    verimliBas: new Date(ovul.getTime() - 3 * msGun),
    verimliBit: new Date(ovul.getTime() + 1 * msGun),
    sonrakiRegl: sonraki,
    luteal: 14,
  };
}
