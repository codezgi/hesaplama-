/* ---------------------------------------------------------------------------
   Birim çevirici motoru — veri odaklı. Her tür için birimler bir "temel birime"
   göre çarpan (factor) ile tanımlanır. Sıcaklık doğrusal olmadığı için özeldir.
--------------------------------------------------------------------------- */

export interface Birim {
  code: string;
  ad: string; // Türkçe ad
  kisa: string; // sembol/kısaltma
  factor: number; // temel birim başına değer
}

export interface CeviriTuru {
  key: string;
  baslik: string;
  birimler: Birim[];
  ozel?: "sicaklik";
}

export const ceviriTurleri: Record<string, CeviriTuru> = {
  uzunluk: {
    key: "uzunluk",
    baslik: "Uzunluk",
    birimler: [
      { code: "km", ad: "Kilometre", kisa: "km", factor: 1000 },
      { code: "m", ad: "Metre", kisa: "m", factor: 1 },
      { code: "cm", ad: "Santimetre", kisa: "cm", factor: 0.01 },
      { code: "mm", ad: "Milimetre", kisa: "mm", factor: 0.001 },
      { code: "mile", ad: "Mil", kisa: "mi", factor: 1609.344 },
      { code: "yard", ad: "Yarda", kisa: "yd", factor: 0.9144 },
      { code: "foot", ad: "Fit (Ayak)", kisa: "ft", factor: 0.3048 },
      { code: "inch", ad: "İnç", kisa: "in", factor: 0.0254 },
      { code: "nmi", ad: "Deniz Mili", kisa: "NM", factor: 1852 },
    ],
  },
  agirlik: {
    key: "agirlik",
    baslik: "Ağırlık / Kütle",
    birimler: [
      { code: "ton", ad: "Ton", kisa: "t", factor: 1000 },
      { code: "kg", ad: "Kilogram", kisa: "kg", factor: 1 },
      { code: "g", ad: "Gram", kisa: "g", factor: 0.001 },
      { code: "mg", ad: "Miligram", kisa: "mg", factor: 0.000001 },
      { code: "lb", ad: "Libre (Pound)", kisa: "lb", factor: 0.45359237 },
      { code: "oz", ad: "Ons (Ounce)", kisa: "oz", factor: 0.0283495231 },
      { code: "karat", ad: "Karat", kisa: "ct", factor: 0.0002 },
    ],
  },
  alan: {
    key: "alan",
    baslik: "Alan",
    birimler: [
      { code: "km2", ad: "Kilometrekare", kisa: "km²", factor: 1000000 },
      { code: "hektar", ad: "Hektar", kisa: "ha", factor: 10000 },
      { code: "donum", ad: "Dönüm", kisa: "dönüm", factor: 1000 },
      { code: "m2", ad: "Metrekare", kisa: "m²", factor: 1 },
      { code: "cm2", ad: "Santimetrekare", kisa: "cm²", factor: 0.0001 },
      { code: "acre", ad: "Akr (Acre)", kisa: "ac", factor: 4046.8564224 },
      { code: "ft2", ad: "Fitkare", kisa: "ft²", factor: 0.09290304 },
    ],
  },
  hacim: {
    key: "hacim",
    baslik: "Hacim",
    birimler: [
      { code: "m3", ad: "Metreküp", kisa: "m³", factor: 1000 },
      { code: "litre", ad: "Litre", kisa: "L", factor: 1 },
      { code: "dl", ad: "Desilitre", kisa: "dL", factor: 0.1 },
      { code: "cl", ad: "Santilitre", kisa: "cL", factor: 0.01 },
      { code: "ml", ad: "Mililitre", kisa: "mL", factor: 0.001 },
      { code: "galon", ad: "Galon (ABD)", kisa: "gal", factor: 3.785411784 },
      { code: "ft3", ad: "Fitküp", kisa: "ft³", factor: 28.316846592 },
    ],
  },
  hiz: {
    key: "hiz",
    baslik: "Hız",
    birimler: [
      { code: "kmh", ad: "Kilometre/saat", kisa: "km/s", factor: 0.2777777778 },
      { code: "ms", ad: "Metre/saniye", kisa: "m/s", factor: 1 },
      { code: "mph", ad: "Mil/saat", kisa: "mph", factor: 0.44704 },
      { code: "knot", ad: "Knot (Deniz mili/saat)", kisa: "kn", factor: 0.5144444444 },
      { code: "fts", ad: "Fit/saniye", kisa: "ft/s", factor: 0.3048 },
    ],
  },
  veri: {
    key: "veri",
    baslik: "Veri Boyutu",
    birimler: [
      { code: "bit", ad: "Bit", kisa: "bit", factor: 0.125 },
      { code: "byte", ad: "Byte", kisa: "B", factor: 1 },
      { code: "kb", ad: "Kilobyte", kisa: "KB", factor: 1024 },
      { code: "mb", ad: "Megabyte", kisa: "MB", factor: 1048576 },
      { code: "gb", ad: "Gigabyte", kisa: "GB", factor: 1073741824 },
      { code: "tb", ad: "Terabyte", kisa: "TB", factor: 1099511627776 },
    ],
  },
  zaman: {
    key: "zaman",
    baslik: "Zaman",
    birimler: [
      { code: "sn", ad: "Saniye", kisa: "sn", factor: 1 },
      { code: "dk", ad: "Dakika", kisa: "dk", factor: 60 },
      { code: "saat", ad: "Saat", kisa: "saat", factor: 3600 },
      { code: "gun", ad: "Gün", kisa: "gün", factor: 86400 },
      { code: "hafta", ad: "Hafta", kisa: "hafta", factor: 604800 },
      { code: "ay", ad: "Ay (30 gün)", kisa: "ay", factor: 2592000 },
      { code: "yil", ad: "Yıl (365 gün)", kisa: "yıl", factor: 31536000 },
    ],
  },
  sicaklik: {
    key: "sicaklik",
    baslik: "Sıcaklık",
    ozel: "sicaklik",
    birimler: [
      { code: "C", ad: "Santigrat", kisa: "°C", factor: 1 },
      { code: "F", ad: "Fahrenhayt", kisa: "°F", factor: 1 },
      { code: "K", ad: "Kelvin", kisa: "K", factor: 1 },
    ],
  },
};

/** Sıcaklık dönüşümü (özel) */
function sicaklikCevir(value: number, from: string, to: string): number {
  // Önce Santigrat'a çevir
  let c: number;
  if (from === "C") c = value;
  else if (from === "F") c = (value - 32) * (5 / 9);
  else c = value - 273.15; // K
  // Santigrat'tan hedefe
  if (to === "C") return c;
  if (to === "F") return c * (9 / 5) + 32;
  return c + 273.15; // K
}

/** Genel çevrim: from biriminden to birimine. */
export function cevir(turKey: string, value: number, from: string, to: string): number {
  const tur = ceviriTurleri[turKey];
  if (!tur) return NaN;
  if (tur.ozel === "sicaklik") return sicaklikCevir(value, from, to);
  const bf = tur.birimler.find((b) => b.code === from)?.factor ?? 1;
  const bt = tur.birimler.find((b) => b.code === to)?.factor ?? 1;
  return (value * bf) / bt;
}
