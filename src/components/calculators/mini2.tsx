"use client";
import { useState } from "react";
import { formatNumber, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

/* ========== 11. Doğum gününe kalan gün ========== */
export function DogumGunuKalanHesaplayici() {
  const [d, setD] = useState("1990-05-15");
  const dt = new Date(d);
  const valid = !isNaN(dt.getTime());
  const bugun = new Date();
  let sonraki = new Date(bugun.getFullYear(), dt.getMonth(), dt.getDate());
  if (sonraki < bugun) sonraki = new Date(bugun.getFullYear() + 1, dt.getMonth(), dt.getDate());
  const kalan = valid ? Math.ceil((sonraki.getTime() - bugun.getTime()) / 86400000) : 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4"><Field label="Doğum Tarihi"><input className="field" type="date" value={d} onChange={(e) => setD(e.target.value)} /></Field></div>
      <div className="space-y-4">
        <ResultHero label="Doğum Gününe Kalan" value={`${kalan} gün`} sub={sonraki.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", weekday: "long" })} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Kalan gün" value={`${kalan}`} />
          <ResultRow label="Kalan hafta" value={`~${Math.floor(kalan / 7)}`} />
          <ResultRow label="Sonraki doğum günü" value={sonraki.toLocaleDateString("tr-TR")} />
        </div>
      </div>
    </div>
  );
}

/* ========== 12. Alkol kalorisi ========== */
export function AlkolKaloriHesaplayici() {
  const [tur, setTur] = useState<"bira" | "sarap" | "raki" | "viski">("bira");
  const [ml, setMl] = useState("500");
  const t = { bira: { alk: 5, ad: "Bira (%5)" }, sarap: { alk: 12, ad: "Şarap (%12)" }, raki: { alk: 45, ad: "Rakı (%45)" }, viski: { alk: 40, ad: "Viski (%40)" } }[tur];
  const v = parseFloat(ml) || 0;
  const gramAlkol = v * t.alk / 100 * 0.789;
  const kcal = gramAlkol * 7;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İçki Türü">
          <Segmented value={tur} onChange={setTur} options={[{ label: "Bira", value: "bira" }, { label: "Şarap", value: "sarap" }, { label: "Rakı", value: "raki" }, { label: "Viski", value: "viski" }]} />
        </Field>
        <Field label="Miktar (ml)"><input className="field tabular-nums" inputMode="numeric" value={ml} onChange={(e) => setMl(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Kalori" value={`${formatNumber(kcal, 0)} kcal`} sub={t.ad} tone="accent" />
        <div className="card p-4">
          <ResultRow label="İçki" value={t.ad} />
          <ResultRow label="Miktar" value={`${v} ml`} />
          <ResultRow label="Saf alkol" value={`${formatNumber(gramAlkol, 1)} g`} />
          <ResultRow label="Kalori" value={`${formatNumber(kcal, 0)} kcal`} />
        </div>
      </div>
    </div>
  );
}

/* ========== 13. Enterese hesap (yatırım süresi) ========== */
export function ParaKatlamaHesaplayici() {
  const [oran, setOran] = useState("15");
  const o = parseFloat(oran) || 0;
  const rule72 = 72 / o;
  const kesin = o > 0 ? Math.log(2) / Math.log(1 + o / 100) : 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4"><Field label="Yıllık Getiri (%)"><input className="field tabular-nums" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} /></Field></div>
      <div className="space-y-4">
        <ResultHero label="Para İkiye Katlanma Süresi" value={`${formatNumber(kesin, 1)} yıl`} sub={`72 kuralı: ${formatNumber(rule72, 1)} yıl`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="72 kuralı (basit)" value={`${formatNumber(rule72, 1)} yıl`} />
          <ResultRow label="Kesin (logaritmik)" value={`${formatNumber(kesin, 2)} yıl`} />
          <ResultRow label="3x'e katlanma" value={o > 0 ? `${formatNumber(Math.log(3) / Math.log(1 + o / 100), 1)} yıl` : "—"} />
          <ResultRow label="10x'e katlanma" value={o > 0 ? `${formatNumber(Math.log(10) / Math.log(1 + o / 100), 1)} yıl` : "—"} />
        </div>
      </div>
    </div>
  );
}

/* ========== 14. Kilo taşları (kg → tas ölçek) ========== */
export function KiloBirimiHesaplayici() {
  const [kg, setKg] = useState("100");
  const v = parseFloat(kg) || 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4"><Field label="Kilogram"><input className="field tabular-nums" inputMode="decimal" value={kg} onChange={(e) => setKg(e.target.value)} /></Field></div>
      <div className="card p-4">
        <ResultRow label="Gram" value={formatNumber(v * 1000, 0)} />
        <ResultRow label="Miligram" value={formatNumber(v * 1000000, 0)} />
        <ResultRow label="Ton" value={formatNumber(v / 1000, 4)} />
        <ResultRow label="Libre (lb)" value={formatNumber(v * 2.2046, 2)} />
        <ResultRow label="Ons (oz)" value={formatNumber(v * 35.274, 2)} />
        <ResultRow label="Kilo taşı (stone)" value={formatNumber(v * 0.1574, 2)} />
      </div>
    </div>
  );
}

/* ========== 15. Kombinasyon (küçük problem) ========== */
export function KombinBasitHesaplayici() {
  const [n, setN] = useState("10");
  const [r, setR] = useState("3");
  const nn = parseInt(n) || 0;
  const rr = parseInt(r) || 0;
  const fak = (x: number) => { let s = 1; for (let i = 2; i <= x; i++) s *= i; return s; };
  const perm = rr <= nn && rr >= 0 ? fak(nn) / fak(nn - rr) : NaN;
  const komb = rr <= nn && rr >= 0 ? perm / fak(rr) : NaN;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="n"><input className="field tabular-nums" inputMode="numeric" value={n} onChange={(e) => setN(e.target.value)} /></Field>
        <Field label="r"><input className="field tabular-nums" inputMode="numeric" value={r} onChange={(e) => setR(e.target.value)} /></Field>
      </div>
      <div className="card p-4">
        <ResultRow label="Permütasyon P(n,r)" value={isNaN(perm) ? "—" : formatNumber(perm, 0)} />
        <ResultRow label="Kombinasyon C(n,r)" value={isNaN(komb) ? "—" : formatNumber(komb, 0)} />
        <ResultRow label="n faktöriyel (n!)" value={formatNumber(fak(nn), 0)} />
      </div>
    </div>
  );
}

/* ========== 16. Kat çıkma (adım eşdeğeri) ========== */
export function MerdivenKaloriHesaplayici() {
  const [kat, setKat] = useState("5");
  const [kilo, setKilo] = useState("75");
  const k = parseFloat(kat) || 0;
  const kg = parseFloat(kilo) || 0;
  const kcal = k * 15 * (kg / 70); // ~15 basamak/kat, ~1 kcal/basamak (70kg)
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Çıkılan Kat Sayısı"><input className="field tabular-nums" inputMode="numeric" value={kat} onChange={(e) => setKat(e.target.value)} /></Field>
        <Field label="Kilo (kg)"><input className="field tabular-nums" inputMode="numeric" value={kilo} onChange={(e) => setKilo(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yakılan Kalori" value={`${formatNumber(kcal, 0)} kcal`} sub={`~${k * 15} basamak`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Kat" value={`${k}`} />
          <ResultRow label="Basamak" value={`~${k * 15}`} />
          <ResultRow label="Yakılan kalori" value={`${formatNumber(kcal, 0)} kcal`} />
        </div>
      </div>
    </div>
  );
}

/* ========== 17. Su tüketimi rehberi (yaşa göre) ========== */
export function SuRehberHesaplayici() {
  const [yas, setYas] = useState("30");
  const [k, setK] = useState("75");
  const y = parseFloat(yas) || 0;
  const kg = parseFloat(k) || 0;
  const min = y < 18 ? kg * 45 : y > 65 ? kg * 30 : kg * 35;
  const max = y < 18 ? kg * 55 : y > 65 ? kg * 40 : kg * 45;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yaş"><input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} /></Field>
        <Field label="Kilo (kg)"><input className="field tabular-nums" inputMode="numeric" value={k} onChange={(e) => setK(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Önerilen Su" value={`${formatNumber(min, 0)}-${formatNumber(max, 0)} mL`} sub={`${formatNumber(min / 250, 1)}-${formatNumber(max / 250, 1)} bardak`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Alt sınır (mL)" value={formatNumber(min, 0)} />
          <ResultRow label="Üst sınır (mL)" value={formatNumber(max, 0)} />
          <ResultRow label="Litre" value={`${formatNumber(min / 1000, 2)} - ${formatNumber(max / 1000, 2)} L`} />
        </div>
      </div>
    </div>
  );
}

/* ========== 18. Ayakkabı beden (EU/US/UK) ========== */
export function AyakkabiBedenHesaplayici() {
  const [eu, setEu] = useState("42");
  const [c, setC] = useState<"erkek" | "kadin">("erkek");
  const v = parseFloat(eu) || 0;
  const us = c === "erkek" ? v - 33 : v - 30.5;
  const uk = c === "erkek" ? v - 33.5 : v - 32;
  const cm = c === "erkek" ? (v - 30) * 0.667 + 22 : (v - 30) * 0.667 + 21;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="EU Beden"><input className="field tabular-nums" inputMode="numeric" value={eu} onChange={(e) => setEu(e.target.value)} /></Field>
        <Field label="Cinsiyet">
          <Segmented value={c} onChange={setC} options={[{ label: "Erkek", value: "erkek" }, { label: "Kadın", value: "kadin" }]} />
        </Field>
      </div>
      <div className="card p-4">
        <ResultRow label="EU (Avrupa)" value={formatNumber(v, 1)} />
        <ResultRow label="US (Amerika)" value={formatNumber(us, 1)} />
        <ResultRow label="UK (İngiltere)" value={formatNumber(uk, 1)} />
        <ResultRow label="Ayak uzunluğu" value={`~${formatNumber(cm, 1)} cm`} />
      </div>
    </div>
  );
}

/* ========== 19. Yüzük ölçüsü (mm çevre → beden) ========== */
export function YuzukOlcuHesaplayici() {
  const [mm, setMm] = useState("57");
  const v = parseFloat(mm) || 0;
  // TR: (çap * 3.14) yaklaşık; genelde ölçü tablosu
  const tr = Math.round((v - 40) / 2) + 40;
  const us = ((v - 44.2) / 2.55).toFixed(1);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4"><Field label="Parmak Çevresi (mm)"><input className="field tabular-nums" inputMode="numeric" value={mm} onChange={(e) => setMm(e.target.value)} /></Field></div>
      <div className="card p-4">
        <ResultRow label="TR / EU beden" value={`${tr}`} />
        <ResultRow label="US beden" value={us} />
        <ResultRow label="Çap" value={`${formatNumber(v / Math.PI, 2)} mm`} />
      </div>
    </div>
  );
}

/* ========== 20. Bahşiş hesaplama ========== */
export function BahsisHesaplayici() {
  const [hesap, setHesap] = useState("250");
  const [oran, setOran] = useState("10");
  const [kisi, setKisi] = useState("1");
  const h = parseFloat(hesap) || 0;
  const o = parseFloat(oran) || 0;
  const k = parseFloat(kisi) || 1;
  const bahsis = h * o / 100;
  const toplam = h + bahsis;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Hesap (₺)"><input className="field tabular-nums" inputMode="numeric" value={hesap} onChange={(e) => setHesap(e.target.value)} /></Field>
        <Field label="Bahşiş (%)"><input className="field tabular-nums" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} /></Field>
        <Field label="Kişi Sayısı"><input className="field tabular-nums" inputMode="numeric" value={kisi} onChange={(e) => setKisi(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Toplam" value={formatTL(toplam)} sub={`Kişi başı: ${formatTL(toplam / k)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Hesap" value={formatTL(h)} />
          <ResultRow label={`Bahşiş (${o}%)`} value={formatTL(bahsis)} />
          <ResultRow label="Toplam" value={formatTL(toplam)} />
          <ResultRow label="Kişi başı" value={formatTL(toplam / k)} />
        </div>
      </div>
    </div>
  );
}
