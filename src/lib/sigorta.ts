/* ---------------------------------------------------------------------------
   Sigorta hesapları — yaklaşık tarifelere dayalı tahminler.
   Kesin fiyat sigorta şirketinin ilan ettiği güncel tarifedir.
--------------------------------------------------------------------------- */

/* ------------------------------ DASK ------------------------------ */
/** DASK yapı sınıfına göre m² birim fiyat (2026 yaklaşık). */
export const DASK_TARIFE = {
  a: 1075, // Betonarme / çelik
  b: 1200, // Yığma - kagir
  c: 1350, // Yığma - kagir dışı, ahşap
} as const;
export type DaskYapi = keyof typeof DASK_TARIFE;

/** Bölge risk çarpanı (1-7, 1 en riskli). Yaklaşık %5-25 fark yaratabilir. */
export function daskBolgeCarpani(risk: 1 | 2 | 3 | 4 | 5 | 6 | 7): number {
  const t = { 1: 1.25, 2: 1.15, 3: 1.05, 4: 1.0, 5: 0.95, 6: 0.9, 7: 0.85 } as const;
  return t[risk];
}

export interface DaskResult {
  birimFiyat: number;
  bolgeCarpani: number;
  yillikPrim: number;
  aylikPrim: number;
  ustSinir: number; // DASK azami teminat
}

/** DASK yıllık prim tahmini. */
export function daskHesapla(
  m2: number,
  yapi: DaskYapi,
  bolgeRisk: 1 | 2 | 3 | 4 | 5 | 6 | 7,
): DaskResult {
  const birim = DASK_TARIFE[yapi];
  const carp = daskBolgeCarpani(bolgeRisk);
  // DASK primi ~ m² × birim × çarpan / 100 (yaklaşık ölçek)
  const yillikPrim = (m2 * birim * carp) / 100;
  return {
    birimFiyat: birim,
    bolgeCarpani: carp,
    yillikPrim,
    aylikPrim: yillikPrim / 12,
    ustSinir: 1075000, // 2026 azami teminat yaklaşık
  };
}

/* ------------------------------ TRAFİK SİGORTASI BASAMAK ------------------------------ */
/** Hasarsızlık indirim/artırım basamak sistemi (8 kademe). */
export const TRAFIK_BASAMAK = [
  { no: 1, oran: 2.0, ad: "1. basamak (%100 artırım)" },
  { no: 2, oran: 1.5, ad: "2. basamak (%50 artırım)" },
  { no: 3, oran: 1.25, ad: "3. basamak (%25 artırım)" },
  { no: 4, oran: 1.0, ad: "4. basamak (başlangıç)" },
  { no: 5, oran: 0.9, ad: "5. basamak (%10 indirim)" },
  { no: 6, oran: 0.8, ad: "6. basamak (%20 indirim)" },
  { no: 7, oran: 0.7, ad: "7. basamak (%30 indirim)" },
  { no: 8, oran: 0.6, ad: "8. basamak (%40 indirim)" },
] as const;

export function trafikBasamakPrimi(bazPrim: number, basamak: number): number {
  const b = TRAFIK_BASAMAK.find((x) => x.no === basamak) ?? TRAFIK_BASAMAK[3];
  return bazPrim * b.oran;
}

/* ------------------------------ KASKO ------------------------------ */
/** Aracın piyasa değeri × tipik oran (mini kasko ~ %2, tam kasko ~ %4-6). */
export function kaskoTahmin(piyasaDegeri: number): {
  mini: number;
  standart: number;
  tam: number;
} {
  return {
    mini: piyasaDegeri * 0.02,
    standart: piyasaDegeri * 0.035,
    tam: piyasaDegeri * 0.055,
  };
}
