/* ---------------------------------------------------------------------------
   Saf matematik fonksiyonları — UI'dan bağımsız.
--------------------------------------------------------------------------- */

/** En Büyük Ortak Bölen (Öklit) */
export function ebob(a: number, b: number): number {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

/** En Küçük Ortak Kat */
export function ekok(a: number, b: number): number {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  if (a === 0 || b === 0) return 0;
  return (a / ebob(a, b)) * b;
}

/** Bir dizi sayı için EBOB ve EKOK */
export function ebobEkok(sayilar: number[]): { ebob: number; ekok: number } {
  const temiz = sayilar.filter((n) => Number.isFinite(n) && n !== 0).map((n) => Math.abs(Math.trunc(n)));
  if (temiz.length === 0) return { ebob: 0, ekok: 0 };
  return {
    ebob: temiz.reduce((acc, n) => ebob(acc, n)),
    ekok: temiz.reduce((acc, n) => ekok(acc, n)),
  };
}

/** Faktöriyel (n!). Büyük değerlerde Infinity dönebilir. */
export function faktoriyel(n: number): number {
  n = Math.trunc(n);
  if (n < 0) return NaN;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

/** Permütasyon P(n,r) = n! / (n-r)! */
export function permutasyon(n: number, r: number): number {
  n = Math.trunc(n);
  r = Math.trunc(r);
  if (r < 0 || n < 0 || r > n) return NaN;
  let r2 = 1;
  for (let i = n; i > n - r; i--) r2 *= i;
  return r2;
}

/** Kombinasyon C(n,r) = n! / (r!(n-r)!) */
export function kombinasyon(n: number, r: number): number {
  n = Math.trunc(n);
  r = Math.trunc(r);
  if (r < 0 || n < 0 || r > n) return NaN;
  r = Math.min(r, n - r);
  let num = 1;
  let den = 1;
  for (let i = 0; i < r; i++) {
    num *= n - i;
    den *= i + 1;
  }
  return num / den;
}

/** Bir sayının asal çarpanları */
export function asalCarpanlar(n: number): { carpan: number; us: number }[] {
  n = Math.abs(Math.trunc(n));
  const sonuc: { carpan: number; us: number }[] = [];
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      let us = 0;
      while (n % d === 0) {
        n /= d;
        us++;
      }
      sonuc.push({ carpan: d, us });
    }
  }
  if (n > 1) sonuc.push({ carpan: n, us: 1 });
  return sonuc;
}

export function asalMi(n: number): boolean {
  n = Math.trunc(n);
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
  return true;
}

/* --------------------------------- GEOMETRİ -------------------------------- */
export type SekilTuru = "kare" | "dikdortgen" | "ucgen" | "daire";

export interface GeometriSonuc {
  alan: number;
  cevre: number;
}

/**
 * Şekil alanı ve çevresi.
 * kare: a=kenar · dikdortgen: a=en, b=boy · ucgen: a=taban, b=yükseklik, (c,d,e kenarlar çevre için)
 * daire: a=yarıçap
 */
export function geometri(
  sekil: SekilTuru,
  a: number,
  b = 0,
  kenarlar: number[] = [],
): GeometriSonuc {
  switch (sekil) {
    case "kare":
      return { alan: a * a, cevre: 4 * a };
    case "dikdortgen":
      return { alan: a * b, cevre: 2 * (a + b) };
    case "ucgen": {
      const cevre = kenarlar.length === 3 ? kenarlar.reduce((x, y) => x + y, 0) : 0;
      return { alan: (a * b) / 2, cevre };
    }
    case "daire":
      return { alan: Math.PI * a * a, cevre: 2 * Math.PI * a };
    default:
      return { alan: 0, cevre: 0 };
  }
}

/** Sayı tabanı çevirme (2–36 arası). Girdi geçersizse null. */
/* ---------------------------- İSTATİSTİK ---------------------------- */
export interface IstatistikSonuc {
  n: number;
  toplam: number;
  aritmetik: number;
  geometrik: number;
  harmonik: number;
  medyan: number;
  mod: number[];
  varyans: number;
  standartSapma: number;
  min: number;
  max: number;
  aralik: number;
}

/** Bir sayı dizisinin tam istatistik özeti. */
export function istatistik(sayilar: number[]): IstatistikSonuc | null {
  const arr = sayilar.filter((n) => Number.isFinite(n));
  const n = arr.length;
  if (n === 0) return null;

  const toplam = arr.reduce((a, b) => a + b, 0);
  const aritmetik = toplam / n;

  const pozitif = arr.filter((x) => x > 0);
  const geometrik =
    pozitif.length === n ? Math.pow(pozitif.reduce((a, b) => a * b, 1), 1 / n) : NaN;
  const harmonik = pozitif.length === n ? n / arr.reduce((a, b) => a + 1 / b, 0) : NaN;

  const sirali = [...arr].sort((a, b) => a - b);
  const medyan =
    n % 2 === 1 ? sirali[(n - 1) / 2] : (sirali[n / 2 - 1] + sirali[n / 2]) / 2;

  const freq = new Map<number, number>();
  arr.forEach((x) => freq.set(x, (freq.get(x) ?? 0) + 1));
  const maxFreq = Math.max(...freq.values());
  const mod = maxFreq > 1 ? [...freq.entries()].filter(([, f]) => f === maxFreq).map(([v]) => v) : [];

  const varyans = arr.reduce((s, x) => s + (x - aritmetik) ** 2, 0) / n;
  const standartSapma = Math.sqrt(varyans);

  return {
    n,
    toplam,
    aritmetik,
    geometrik,
    harmonik,
    medyan,
    mod,
    varyans,
    standartSapma,
    min: sirali[0],
    max: sirali[n - 1],
    aralik: sirali[n - 1] - sirali[0],
  };
}

/* ---------------------------- ORAN / ORANTI ---------------------------- */
/** a/b = c/x → x çöz. Diğer değişkeni de çözebilir. */
export function orantiCoz(a: number, b: number, c: number): number {
  if (a === 0) return NaN;
  return (b * c) / a;
}

/* ------------------------------ ROMA RAKAMI ------------------------------ */
const ROMA_TABLOSU: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

export function sayidanRomaya(n: number): string | null {
  n = Math.trunc(n);
  if (n <= 0 || n >= 4000) return null;
  let s = "";
  for (const [v, r] of ROMA_TABLOSU) {
    while (n >= v) {
      s += r;
      n -= v;
    }
  }
  return s;
}

export function romadanSayiya(s: string): number | null {
  const t = s.trim().toUpperCase();
  if (!/^[IVXLCDM]+$/.test(t)) return null;
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let toplam = 0;
  for (let i = 0; i < t.length; i++) {
    const cur = map[t[i]];
    const nxt = map[t[i + 1]] ?? 0;
    toplam += cur < nxt ? -cur : cur;
  }
  // Round-trip doğrulama (I, X, C tekrarı vb. için)
  if (sayidanRomaya(toplam) !== t) return null;
  return toplam;
}

/* ---------------------------- RASTGELE SAYI ---------------------------- */
export function rastgeleSayilar(min: number, max: number, adet: number, tekrarsiz: boolean): number[] {
  const lo = Math.ceil(Math.min(min, max));
  const hi = Math.floor(Math.max(min, max));
  const aralik = hi - lo + 1;
  if (aralik <= 0) return [];

  if (tekrarsiz) {
    const n = Math.min(adet, aralik);
    // Fisher-Yates ile bir alt kümesini karıştır
    const arr = Array.from({ length: aralik }, (_, i) => lo + i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, n);
  }
  return Array.from({ length: adet }, () => lo + Math.floor(Math.random() * aralik));
}

export function tabanCevir(deger: string, fromTaban: number, toTaban: number): string | null {
  const temiz = deger.trim().toLowerCase();
  if (!temiz) return null;
  // Geçerlilik kontrolü
  const gecerli = new RegExp(`^[0-9a-z]+$`).test(temiz);
  if (!gecerli) return null;
  const n = parseInt(temiz, fromTaban);
  if (Number.isNaN(n)) return null;
  // parseInt geçersiz karakterleri atlayabilir; yeniden doğrula
  if (n.toString(fromTaban) !== temiz.replace(/^0+(?=.)/, "")) {
    // Baştaki sıfırlar dışında eşleşmiyorsa geçersiz
    if (parseInt(temiz, fromTaban).toString(fromTaban) !== temiz) return null;
  }
  return n.toString(toTaban).toUpperCase();
}
