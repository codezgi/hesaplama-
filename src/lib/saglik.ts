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
