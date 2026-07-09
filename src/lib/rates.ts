/* ---------------------------------------------------------------------------
   Canlı kur ve altın verisi.
   - Döviz: TCMB today.xml (resmi Merkez Bankası kuru, anahtarsız)
   - Altın/Gümüş: Truncgil finance API (gerçek zamanlı, anahtarsız)
   Veriler ISR ile önbelleğe alınır; arka planda periyodik tazelenir.
--------------------------------------------------------------------------- */

export interface DovizKur {
  code: string;
  name: string; // Türkçe isim
  alis: number; // TRY (1 birim başına)
  satis: number; // TRY (1 birim başına)
}

export interface Emtia {
  code: string;
  name: string;
  alis: number;
  satis: number;
  birim: string;
}

export interface KurPaketi {
  updatedAt: string;
  doviz: DovizKur[];
  altin: Emtia[];
  kaynak: { doviz: string; altin: string };
  hata?: string;
}

const TCMB_URL = "https://www.tcmb.gov.tr/kurlar/today.xml";
const TRUNCGIL_URL = "https://finance.truncgil.com/api/today.json";

// Dövizlerde gösterilecek ve sıralanacak ana para birimleri
const ONE_CIKAN_DOVIZ = ["USD", "EUR", "GBP", "CHF", "JPY", "CAD", "AUD", "RUB", "SAR", "AED", "CNY", "SEK"];

// Truncgil altın/emtia anahtarları → Türkçe isim + birim
const ALTIN_MAP: Record<string, { name: string; birim: string }> = {
  GRA: { name: "Gram Altın", birim: "gram" },
  CEYREKALTIN: { name: "Çeyrek Altın", birim: "adet" },
  YARIMALTIN: { name: "Yarım Altın", birim: "adet" },
  TAMALTIN: { name: "Tam Altın", birim: "adet" },
  CUMHURIYETALTINI: { name: "Cumhuriyet Altını", birim: "adet" },
  ATAALTIN: { name: "Ata Altın", birim: "adet" },
  "14AYARALTIN": { name: "14 Ayar Altın", birim: "gram" },
  "18AYARALTIN": { name: "18 Ayar Altın", birim: "gram" },
  GUMUS: { name: "Gümüş", birim: "gram" },
};

function num(v: unknown): number {
  const n = typeof v === "number" ? v : parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

/** TCMB today.xml → ana dövizler (birim başına TRY'ye normalize edilir) */
export async function getTcmbDoviz(): Promise<DovizKur[]> {
  const res = await fetch(TCMB_URL, {
    next: { revalidate: 1800 }, // 30 dk — TCMB iş günü ~15:30 günceller
    headers: { "User-Agent": "HesaplamaMerkezi/1.0" },
  });
  if (!res.ok) throw new Error(`TCMB ${res.status}`);
  const xml = await res.text();

  const bloklar = xml.match(/<Currency[\s\S]*?<\/Currency>/g) ?? [];
  const list: DovizKur[] = [];
  for (const b of bloklar) {
    const code = b.match(/CurrencyCode="([A-Z]+)"/)?.[1];
    if (!code) continue;
    const unit = num(b.match(/<Unit>([\d.]+)<\/Unit>/)?.[1]) || 1;
    const isim = b.match(/<Isim>([^<]+)<\/Isim>/)?.[1]?.trim() ?? code;
    const fb = num(b.match(/<ForexBuying>([\d.]*)<\/ForexBuying>/)?.[1]);
    const fs = num(b.match(/<ForexSelling>([\d.]*)<\/ForexSelling>/)?.[1]);
    if (fs <= 0) continue;
    list.push({ code, name: isim, alis: fb / unit, satis: fs / unit });
  }
  // Ana dövizler önce, sonra alfabetik
  list.sort((a, b) => {
    const ia = ONE_CIKAN_DOVIZ.indexOf(a.code);
    const ib = ONE_CIKAN_DOVIZ.indexOf(b.code);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.code.localeCompare(b.code);
  });
  return list;
}

/** Truncgil → seçili altın/gümüş türleri */
export async function getAltin(): Promise<Emtia[]> {
  const res = await fetch(TRUNCGIL_URL, {
    next: { revalidate: 600 }, // 10 dk — gerçek zamanlı kaynak
    headers: { "User-Agent": "HesaplamaMerkezi/1.0" },
  });
  if (!res.ok) throw new Error(`Truncgil ${res.status}`);
  const data = (await res.json()) as { Rates?: Record<string, { Buying?: number; Selling?: number }> };
  const rates = data.Rates ?? {};

  const list: Emtia[] = [];
  for (const [key, meta] of Object.entries(ALTIN_MAP)) {
    const r = rates[key];
    if (!r) continue;
    const alis = num(r.Buying);
    const satis = num(r.Selling);
    if (alis <= 0 && satis <= 0) continue;
    list.push({ code: key, name: meta.name, birim: meta.birim, alis, satis: satis || alis });
  }
  return list;
}

/** Tek çağrıda tüm paket — hata olsa da site çökmeden boş liste döner */
export async function getKurPaketi(): Promise<KurPaketi> {
  const [dovizR, altinR] = await Promise.allSettled([getTcmbDoviz(), getAltin()]);
  const doviz = dovizR.status === "fulfilled" ? dovizR.value : [];
  const altin = altinR.status === "fulfilled" ? altinR.value : [];
  const hata =
    dovizR.status === "rejected" || altinR.status === "rejected"
      ? "Bazı kaynaklara ulaşılamadı, son bilinen veriler gösterilebilir."
      : undefined;
  return {
    updatedAt: new Date().toISOString(),
    doviz,
    altin,
    kaynak: { doviz: "TCMB", altin: "Truncgil" },
    hata,
  };
}
