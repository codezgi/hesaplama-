/* ---------------------------------------------------------------------------
   Bilimsel & kompleks hesaplamalar — güvenli ifade parser, matris, denklem
   sistemi, vektör, kompleks sayı, fizik/kimya sabitleri.
--------------------------------------------------------------------------- */

/* --------------------------- GÜVENLİ FORMÜL PARSER --------------------------- */
/**
 * n değişkenli bir ifadeyi güvenli değerlendir. Sadece güvenli karakterlere
 * izin verilir; Math.sin, cos, tan, sqrt, log, ln, exp, pi, e sabitleri
 * kullanıcı tarafından fonksiyon olarak yazılabilir.
 * Örn: safeEval("sin(x) + 2*y^2 - z", {x: 1, y: 2, z: 3})
 */
export function safeEval(expr: string, vars: Record<string, number>): number {
  const tmp = expr.trim();
  if (!tmp) throw new Error("Boş ifade");
  // İzin verilen karakterler
  if (!/^[0-9a-zA-Z+\-*/^().,\s%]+$/.test(tmp)) {
    throw new Error("Geçersiz karakter içeriyor");
  }
  // ^ operatörünü ** ile değiştir (JS üs alma)
  const parsed = tmp.replace(/\^/g, "**");

  const varKeys = Object.keys(vars);
  const varVals = Object.values(vars);

  // Math sabitleri/fonksiyonları için wrapper (kullanıcı sin, cos vs yazabilsin)
  const kod = `
    "use strict";
    const sin = Math.sin, cos = Math.cos, tan = Math.tan;
    const asin = Math.asin, acos = Math.acos, atan = Math.atan;
    const sinh = Math.sinh, cosh = Math.cosh, tanh = Math.tanh;
    const log = Math.log10, log10 = Math.log10, ln = Math.log, log2 = Math.log2;
    const sqrt = Math.sqrt, cbrt = Math.cbrt, abs = Math.abs;
    const exp = Math.exp, floor = Math.floor, ceil = Math.ceil, round = Math.round;
    const pow = Math.pow, min = Math.min, max = Math.max;
    const pi = Math.PI, e = Math.E, PI = Math.PI, E = Math.E;
    return (${parsed});
  `;
  try {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const fn = new Function(...varKeys, kod);
    const sonuc = fn(...varVals) as number;
    if (typeof sonuc !== "number" || Number.isNaN(sonuc)) throw new Error("Sayısal olmayan sonuç");
    return sonuc;
  } catch (e) {
    throw new Error("Formül hatası: " + (e instanceof Error ? e.message : String(e)));
  }
}

/* --------------------------- SAYISAL TÜREV --------------------------- */
/** Merkezi fark: f'(x) ≈ (f(x+h) − f(x−h)) / (2h). h=1e-6 iyi bir varsayılan. */
export function sayisalTurev(f: (x: number) => number, x: number, h = 1e-6): number {
  return (f(x + h) - f(x - h)) / (2 * h);
}
/** İkinci türev: f''(x) ≈ (f(x+h) − 2f(x) + f(x−h)) / h² */
export function sayisalTurev2(f: (x: number) => number, x: number, h = 1e-4): number {
  return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
}

/* --------------------------- BELİRLİ İNTEGRAL (Simpson 1/3) --------------------------- */
/** ∫ₐᵇ f(x)dx — Simpson 1/3 kuralı (n çift sayı olmalı). Yüksek doğruluk. */
export function simpsonIntegral(f: (x: number) => number, a: number, b: number, n = 1000): number {
  if (n % 2 !== 0) n++;
  const h = (b - a) / n;
  let toplam = f(a) + f(b);
  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    toplam += (i % 2 === 0 ? 2 : 4) * f(x);
  }
  return (h / 3) * toplam;
}
/** Trapez kuralı — daha basit ama daha düşük doğruluk. Riemann toplamı için de kullanılır. */
export function trapezIntegral(f: (x: number) => number, a: number, b: number, n = 1000): number {
  const h = (b - a) / n;
  let toplam = 0.5 * (f(a) + f(b));
  for (let i = 1; i < n; i++) toplam += f(a + i * h);
  return h * toplam;
}
/** Riemann sol/orta/sağ toplamları */
export function riemannToplam(f: (x: number) => number, a: number, b: number, n: number, tip: "sol" | "orta" | "sag") {
  const h = (b - a) / n;
  let toplam = 0;
  const dikdortgenler: { x: number; genislik: number; yukseklik: number }[] = [];
  for (let i = 0; i < n; i++) {
    const xSol = a + i * h;
    const xOrta = xSol + h / 2;
    const xSag = xSol + h;
    const x = tip === "sol" ? xSol : tip === "orta" ? xOrta : xSag;
    const y = f(x);
    toplam += y * h;
    dikdortgenler.push({ x: xSol, genislik: h, yukseklik: y });
  }
  return { toplam, dikdortgenler };
}

/* --------------------------- KÖK BULMA (Newton-Raphson + Bisection) --------------------------- */
/** Newton-Raphson: x_{n+1} = x_n − f(x_n) / f'(x_n). Başlangıç tahmini x₀. */
export function newtonRaphson(f: (x: number) => number, x0: number, tolerans = 1e-9, maxIter = 100): number | null {
  let x = x0;
  for (let i = 0; i < maxIter; i++) {
    const fx = f(x);
    if (Math.abs(fx) < tolerans) return x;
    const fpx = sayisalTurev(f, x);
    if (Math.abs(fpx) < 1e-15) return null;
    x = x - fx / fpx;
    if (!Number.isFinite(x)) return null;
  }
  return Math.abs(f(x)) < 1e-4 ? x : null;
}
/** Bisection: [a, b] aralığında işaret değişimi varsa kök var. */
export function bisection(f: (x: number) => number, a: number, b: number, tolerans = 1e-9, maxIter = 200): number | null {
  let fa = f(a);
  let fb = f(b);
  if (fa * fb > 0) return null;
  for (let i = 0; i < maxIter; i++) {
    const c = (a + b) / 2;
    const fc = f(c);
    if (Math.abs(fc) < tolerans) return c;
    if (fa * fc < 0) { b = c; fb = fc; }
    else { a = c; fa = fc; }
  }
  return (a + b) / 2;
}

/** Belirtilen aralıkta tüm kökleri bul (işaret değişimlerini tara). */
export function tumKokler(f: (x: number) => number, a: number, b: number, adim = 0.1): number[] {
  const kokler: number[] = [];
  let x = a;
  let fx = f(x);
  while (x < b) {
    const yeniX = Math.min(x + adim, b);
    const yeniFx = f(yeniX);
    if (Number.isFinite(fx) && Number.isFinite(yeniFx) && fx * yeniFx < 0) {
      const k = bisection(f, x, yeniX);
      if (k !== null && !kokler.some((r) => Math.abs(r - k) < adim / 2)) kokler.push(k);
    }
    x = yeniX;
    fx = yeniFx;
  }
  return kokler;
}

/* --------------------------- KRİTİK NOKTALAR (yerel min/max) --------------------------- */
export function kritikNoktalar(f: (x: number) => number, a: number, b: number, adim = 0.1) {
  const fprime = (x: number) => sayisalTurev(f, x);
  const noktalar = tumKokler(fprime, a, b, adim);
  return noktalar.map((x) => {
    const fpp = sayisalTurev2(f, x);
    const tip = fpp > 0.001 ? "min" : fpp < -0.001 ? "max" : "eyer";
    return { x, y: f(x), tip };
  });
}

/* --------------------------- TAYLOR SERİSİ --------------------------- */
/** f'nin a noktasında n. derece Taylor açılım katsayıları: [f(a), f'(a), f''(a)/2!, ...] */
export function taylorKatsayilari(f: (x: number) => number, a: number, n: number): number[] {
  const kats: number[] = [f(a)];
  let h = 1e-3;
  // Basit sayısal türev tekrarı — kararlı için düşük derece (5-6) tavsiye
  for (let k = 1; k <= n; k++) {
    let fak = 1;
    for (let i = 1; i <= k; i++) fak *= i;
    // k. türev merkezi fark kombinasyonlarıyla
    let sum = 0;
    for (let j = 0; j <= k; j++) {
      const isaret = ((k - j) % 2 === 0 ? 1 : -1);
      const kombin = (() => { let r = 1; for (let i = 0; i < j; i++) r *= (k - i) / (i + 1); return r; })();
      sum += isaret * kombin * f(a + (j - k / 2) * h);
    }
    kats.push(sum / Math.pow(h, k) / fak);
  }
  return kats;
}
export function taylorDeger(kats: number[], a: number, x: number): number {
  let sum = 0;
  for (let k = 0; k < kats.length; k++) sum += kats[k] * Math.pow(x - a, k);
  return sum;
}

/* --------------------------- LİMİT (Sayısal Yakınsama) --------------------------- */
/** f(x)'in x→a'da limitini iki yandan yaklaşarak bulmaya çalışır. */
export function sayisalLimit(f: (x: number) => number, a: number): { sol: number | null; sag: number | null; iki: number | null } {
  const denemeler = [1e-1, 1e-2, 1e-3, 1e-5, 1e-8];
  let solSon = NaN, sagSon = NaN;
  for (const eps of denemeler) {
    const sol = f(a - eps);
    const sag = f(a + eps);
    if (Number.isFinite(sol)) solSon = sol;
    if (Number.isFinite(sag)) sagSon = sag;
  }
  const solFin = Number.isFinite(solSon) ? solSon : null;
  const sagFin = Number.isFinite(sagSon) ? sagSon : null;
  const iki = solFin !== null && sagFin !== null && Math.abs(solFin - sagFin) < 1e-3 ? (solFin + sagFin) / 2 : null;
  return { sol: solFin, sag: sagFin, iki };
}

/* --------------------------- 2×2 DENKLEM SİSTEMİ --------------------------- */
/**
 * a1x + b1y = c1
 * a2x + b2y = c2
 * Cramer kuralı ile çözer.
 */
export function denkTakim2(a1: number, b1: number, c1: number, a2: number, b2: number, c2: number) {
  const det = a1 * b2 - b1 * a2;
  if (det === 0) {
    // Sonsuz çözüm veya çözüm yok
    if (a1 * c2 - c1 * a2 === 0) return { tur: "sonsuz" as const };
    return { tur: "yok" as const };
  }
  return {
    tur: "tek" as const,
    x: (c1 * b2 - b1 * c2) / det,
    y: (a1 * c2 - c1 * a2) / det,
    determinant: det,
  };
}

/* --------------------------- 3×3 DENKLEM SİSTEMİ --------------------------- */
export function denkTakim3(m: number[][], c: number[]) {
  // Cramer ile 3x3 determinant
  const det3 = (a: number[][]) =>
    a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) -
    a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0]) +
    a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);

  const D = det3(m);
  if (D === 0) return { tur: "yok" as const, determinant: 0 };

  const Dx = det3([[c[0], m[0][1], m[0][2]], [c[1], m[1][1], m[1][2]], [c[2], m[2][1], m[2][2]]]);
  const Dy = det3([[m[0][0], c[0], m[0][2]], [m[1][0], c[1], m[1][2]], [m[2][0], c[2], m[2][2]]]);
  const Dz = det3([[m[0][0], m[0][1], c[0]], [m[1][0], m[1][1], c[1]], [m[2][0], m[2][1], c[2]]]);

  return { tur: "tek" as const, x: Dx / D, y: Dy / D, z: Dz / D, determinant: D };
}

/* --------------------------- MATRİS 2×2 İŞLEMLERİ --------------------------- */
export function matris2Toplam(a: number[][], b: number[][]) {
  return [
    [a[0][0] + b[0][0], a[0][1] + b[0][1]],
    [a[1][0] + b[1][0], a[1][1] + b[1][1]],
  ];
}
export function matris2Carpim(a: number[][], b: number[][]) {
  return [
    [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
    [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]],
  ];
}
export function matris2Determinant(a: number[][]) {
  return a[0][0] * a[1][1] - a[0][1] * a[1][0];
}
export function matris2Ters(a: number[][]) {
  const det = matris2Determinant(a);
  if (det === 0) return null;
  return [
    [a[1][1] / det, -a[0][1] / det],
    [-a[1][0] / det, a[0][0] / det],
  ];
}

/* --------------------------- VEKTÖR 3D İŞLEMLERİ --------------------------- */
export interface Vektor3 { x: number; y: number; z: number; }

export function vektorUzunluk(v: Vektor3) {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}
export function vektorNokta(a: Vektor3, b: Vektor3) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}
export function vektorCapraz(a: Vektor3, b: Vektor3): Vektor3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}
export function vektorAci(a: Vektor3, b: Vektor3) {
  const ua = vektorUzunluk(a);
  const ub = vektorUzunluk(b);
  if (ua === 0 || ub === 0) return NaN;
  const cosA = vektorNokta(a, b) / (ua * ub);
  return Math.acos(Math.max(-1, Math.min(1, cosA))) * (180 / Math.PI);
}

/* --------------------------- KOMPLEKS SAYI --------------------------- */
export interface Kompleks { re: number; im: number; }
export function komplTopla(a: Kompleks, b: Kompleks): Kompleks {
  return { re: a.re + b.re, im: a.im + b.im };
}
export function komplCikar(a: Kompleks, b: Kompleks): Kompleks {
  return { re: a.re - b.re, im: a.im - b.im };
}
export function komplCarp(a: Kompleks, b: Kompleks): Kompleks {
  return {
    re: a.re * b.re - a.im * b.im,
    im: a.re * b.im + a.im * b.re,
  };
}
export function komplBol(a: Kompleks, b: Kompleks): Kompleks {
  const d = b.re * b.re + b.im * b.im;
  return {
    re: (a.re * b.re + a.im * b.im) / d,
    im: (a.im * b.re - a.re * b.im) / d,
  };
}
export function komplModul(a: Kompleks) {
  return Math.sqrt(a.re * a.re + a.im * a.im);
}
export function komplArgument(a: Kompleks) {
  return Math.atan2(a.im, a.re) * (180 / Math.PI);
}

/* --------------------------- FİZİK: NEWTON HAREKET --------------------------- */
/**
 * v = v0 + a·t
 * x = v0·t + 0.5·a·t²
 * v² = v0² + 2·a·x
 * Verilen 3 değişkenden diğerlerini bul.
 */
export function newtonHareket(input: { v0?: number; v?: number; a?: number; t?: number; x?: number }) {
  const { v0, v, a, t, x } = input;
  const r: { [key: string]: number } = {};
  if (v0 !== undefined && a !== undefined && t !== undefined) {
    if (v === undefined) r.v = v0 + a * t;
    if (x === undefined) r.x = v0 * t + 0.5 * a * t * t;
  }
  if (v0 !== undefined && v !== undefined && t !== undefined) {
    if (a === undefined) r.a = (v - v0) / t;
    if (x === undefined) r.x = ((v0 + v) / 2) * t;
  }
  if (v0 !== undefined && v !== undefined && a !== undefined && a !== 0) {
    if (t === undefined) r.t = (v - v0) / a;
    if (x === undefined) r.x = (v * v - v0 * v0) / (2 * a);
  }
  return r;
}

/* --------------------------- ELEKTRİK: OHM & WATT --------------------------- */
/** V = I·R, P = V·I. Bilinen 2 değerden diğerlerini hesapla. */
export function ohmWatt(input: { V?: number; I?: number; R?: number; P?: number }) {
  const r: { V?: number; I?: number; R?: number; P?: number } = { ...input };
  // 3 aşamalı iteratif
  for (let i = 0; i < 4; i++) {
    if (r.V !== undefined && r.I !== undefined) {
      if (r.R === undefined && r.I !== 0) r.R = r.V / r.I;
      if (r.P === undefined) r.P = r.V * r.I;
    }
    if (r.V !== undefined && r.R !== undefined && r.R !== 0) {
      if (r.I === undefined) r.I = r.V / r.R;
      if (r.P === undefined) r.P = (r.V * r.V) / r.R;
    }
    if (r.I !== undefined && r.R !== undefined) {
      if (r.V === undefined) r.V = r.I * r.R;
      if (r.P === undefined) r.P = r.I * r.I * r.R;
    }
    if (r.P !== undefined && r.V !== undefined && r.V !== 0) {
      if (r.I === undefined) r.I = r.P / r.V;
    }
    if (r.P !== undefined && r.I !== undefined && r.I !== 0) {
      if (r.V === undefined) r.V = r.P / r.I;
    }
    if (r.P !== undefined && r.R !== undefined && r.R > 0) {
      if (r.I === undefined) r.I = Math.sqrt(r.P / r.R);
      if (r.V === undefined) r.V = Math.sqrt(r.P * r.R);
    }
  }
  return r;
}

/* --------------------------- KİMYA: MOL / MOLARITE / pH --------------------------- */
export function molarKutle(gram: number, molekulKutlesi: number) {
  return { mol: molekulKutlesi > 0 ? gram / molekulKutlesi : 0 };
}
export function molarite(mol: number, hacimL: number) {
  return { M: hacimL > 0 ? mol / hacimL : 0 };
}
export function pHesapla(H: number) {
  return { pH: H > 0 ? -Math.log10(H) : NaN, pOH: H > 0 ? 14 + Math.log10(H) : NaN };
}

/* --------------------------- ÜRETİM: EOQ (Economic Order Quantity) --------------------------- */
/** EOQ = √(2·D·S / H) — optimum sipariş miktarı. */
export function eoq(yillikTalep: number, siparisKal: number, tutmaMaliyet: number) {
  const eoq = Math.sqrt((2 * yillikTalep * siparisKal) / Math.max(1, tutmaMaliyet));
  return {
    eoq,
    siparisAdet: eoq > 0 ? yillikTalep / eoq : 0,
    toplamMaliyet: 2 * Math.sqrt(2 * yillikTalep * siparisKal * tutmaMaliyet) / 2,
  };
}

/* --------------------------- TÜREV (polinom) --------------------------- */
/** ax^n → nax^(n-1). Basit polinom kısaltması. */
export function polinomTurev(katsayilar: number[]): number[] {
  // katsayilar[i] = a_i × x^i
  const sonuc: number[] = [];
  for (let i = 1; i < katsayilar.length; i++) {
    sonuc.push(katsayilar[i] * i);
  }
  return sonuc;
}
export function polinomIntegral(katsayilar: number[]): number[] {
  const sonuc: number[] = [0]; // sabit terim +C
  for (let i = 0; i < katsayilar.length; i++) {
    sonuc.push(katsayilar[i] / (i + 1));
  }
  return sonuc;
}
export function polinomDeger(katsayilar: number[], x: number): number {
  let s = 0;
  for (let i = 0; i < katsayilar.length; i++) s += katsayilar[i] * Math.pow(x, i);
  return s;
}
export function polinomYazi(katsayilar: number[]): string {
  const parcalar: string[] = [];
  for (let i = katsayilar.length - 1; i >= 0; i--) {
    const k = katsayilar[i];
    if (k === 0) continue;
    let terim = "";
    if (i === 0) terim = `${k}`;
    else if (i === 1) terim = `${k === 1 ? "" : k === -1 ? "-" : k}x`;
    else terim = `${k === 1 ? "" : k === -1 ? "-" : k}x^${i}`;
    parcalar.push(terim);
  }
  return parcalar.length > 0 ? parcalar.join(" + ").replace(/\+ -/g, "- ") : "0";
}
