/* ---------------------------------------------------------------------------
   Hukuki hesaplar — yasal faiz, arabuluculuk, tapu harcı, kira artışı, harç.
   Tarifeler her yıl güncellenir; kullanıcı UI'de düzenleyebilir.
--------------------------------------------------------------------------- */

/* --------------------------- YASAL FAİZ --------------------------- */
/**
 * Türk hukukunda kullanılan başlıca yasal faiz oranları (2026 yaklaşık).
 * 3095 sayılı Kanun'a göre yıllık oranlar; TCMB reeskont oranları yıl içinde
 * değişebilir. UI'de kullanıcı güncel değeri girer.
 */
export const YASAL_FAIZ_ORANLARI = {
  yasalFaiz: 9, // 3095 s.K. genel yasal faiz
  ticariFaiz: 15, // Ticari işlerde temerrüt (avans faizi)
  reeskont: 43, // TCMB reeskont oranı yaklaşık
  gecikmeZammi: 3.5, // Aylık (6183 s.K. AATUHK)
} as const;

/** Basit faizle işlemiş faiz. Yıl = 365 gün. */
export function yasalFaizHesapla(
  anapara: number,
  yillikOranYuzde: number,
  gun: number,
): { faiz: number; toplam: number } {
  const faiz = anapara * (yillikOranYuzde / 100) * (gun / 365);
  return { faiz, toplam: anapara + faiz };
}

/** 6183 s.K. gecikme zammı: aylık oran × ay (fiili gün ay tamamlansa sayılır). */
export function gecikmeZammi(
  anapara: number,
  aylikOranYuzde: number,
  ay: number,
): { zam: number; toplam: number } {
  const zam = anapara * (aylikOranYuzde / 100) * ay;
  return { zam, toplam: anapara + zam };
}

/* --------------------------- ARABULUCULUK ÜCRETİ --------------------------- */
/**
 * İş uyuşmazlığı arabuluculuk ücret tarifesi (yaklaşık 2026).
 * Anlaşma sağlanan durumda taraflarca eşit ödenir; anlaşamayınca 2 saatlik
 * ücret devletçe ödenir.
 */
export interface ArabuluculukDilim {
  ustSinir: number;
  oran: number; // %
  taban: number; // önceki dilim toplam ücreti
}

export const ARABULUCULUK_TARIFE: ArabuluculukDilim[] = [
  { ustSinir: 300000, oran: 6, taban: 0 },
  { ustSinir: 780000, oran: 5, taban: 18000 },
  { ustSinir: 1560000, oran: 4, taban: 42000 },
  { ustSinir: 4680000, oran: 3, taban: 73200 },
  { ustSinir: 9360000, oran: 2, taban: 166800 },
  { ustSinir: 18720000, oran: 1.5, taban: 260400 },
  { ustSinir: Infinity, oran: 1, taban: 400800 },
];

export function arabuluculukUcret(davaDegeri: number): {
  toplamUcret: number;
  tarafBasi: number;
  dilim: string;
} {
  const dilim = ARABULUCULUK_TARIFE.find((d) => davaDegeri <= d.ustSinir) ?? ARABULUCULUK_TARIFE[0];
  const oncekiUst = ARABULUCULUK_TARIFE[ARABULUCULUK_TARIFE.indexOf(dilim) - 1]?.ustSinir ?? 0;
  const dilimTutari = Math.max(0, davaDegeri - oncekiUst);
  const toplam = dilim.taban + (dilimTutari * dilim.oran) / 100;
  return {
    toplamUcret: toplam,
    tarafBasi: toplam / 2,
    dilim: `%${dilim.oran} dilimi`,
  };
}

/* --------------------------- TAPU HARCI --------------------------- */
/**
 * Konut/işyeri devir tapu harcı: alıcı %2 + satıcı %2 = toplam %4.
 * Aksi kararlaştırılmadıkça yasal olarak eşit ödenir.
 */
export function tapuHarci(satisBedeli: number): {
  aliciPayi: number;
  saticiPayi: number;
  toplam: number;
} {
  const yarim = satisBedeli * 0.02;
  return { aliciPayi: yarim, saticiPayi: yarim, toplam: yarim * 2 };
}

/* --------------------------- KİRA ARTIŞI (TÜFE) --------------------------- */
/**
 * TBK m.344: Konut kira artış oranı, taraflarca kararlaştırılmışsa dahi,
 * bir önceki kira yılı TÜFE 12 aylık ortalamasını GEÇEMEZ. UI'de kullanıcı
 * güncel TÜFE'yi girer.
 */
export function kiraArtis(mevcutKira: number, tufeYuzde: number, talepYuzde: number): {
  yasalTavan: number;
  yeniKira: number;
  uygulananOran: number;
  artis: number;
} {
  const uygulanan = Math.min(Math.max(0, talepYuzde), tufeYuzde);
  const artis = mevcutKira * (uygulanan / 100);
  return {
    yasalTavan: mevcutKira * (1 + tufeYuzde / 100),
    yeniKira: mevcutKira + artis,
    uygulananOran: uygulanan,
    artis,
  };
}
