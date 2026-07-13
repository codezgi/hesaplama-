/* Ultra-kompakt hesaplayıcılar — tek dosyada birden fazla, basit formüller.
   Her bileşen ~15-25 satır; kompleks olanlar ayrı dosyada. */
"use client";
import { useState } from "react";
import { formatNumber, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

/* ========== 1. Litre-galon-kova dönüşüm ========== */
export function HacimBirimiHesaplayici() {
  const [litre, setLitre] = useState("100");
  const l = parseFloat(litre.replace(",", ".")) || 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4"><Field label="Litre"><input className="field tabular-nums" inputMode="decimal" value={litre} onChange={(e) => setLitre(e.target.value)} /></Field></div>
      <div className="card p-4">
        <ResultRow label="Litre" value={formatNumber(l, 2)} />
        <ResultRow label="Mililitre (mL)" value={formatNumber(l * 1000, 0)} />
        <ResultRow label="Galon (ABD)" value={formatNumber(l / 3.785, 2)} />
        <ResultRow label="Galon (İng)" value={formatNumber(l / 4.546, 2)} />
        <ResultRow label="Metreküp (m³)" value={formatNumber(l / 1000, 4)} />
        <ResultRow label="Fitküp (ft³)" value={formatNumber(l / 28.317, 4)} />
      </div>
    </div>
  );
}

/* ========== 2. Karekök hesaplama ========== */
export function KarekokHesaplayici() {
  const [n, setN] = useState("144");
  const v = parseFloat(n.replace(",", ".")) || 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4"><Field label="Sayı"><input className="field tabular-nums" inputMode="decimal" value={n} onChange={(e) => setN(e.target.value)} /></Field></div>
      <div className="space-y-4">
        <ResultHero label={`√${v}`} value={v < 0 ? "Tanımsız (negatif)" : formatNumber(Math.sqrt(v), 6)} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Karekök" value={v < 0 ? "—" : formatNumber(Math.sqrt(v), 6)} />
          <ResultRow label="Küpkök" value={formatNumber(Math.cbrt(v), 6)} />
          <ResultRow label="Kare (n²)" value={formatNumber(v * v, 4)} />
          <ResultRow label="Küp (n³)" value={formatNumber(v * v * v, 4)} />
        </div>
      </div>
    </div>
  );
}

/* ========== 3. Logaritma ========== */
export function LogaritmaHesaplayici() {
  const [n, setN] = useState("100");
  const [taban, setTaban] = useState("10");
  const v = parseFloat(n.replace(",", ".")) || 0;
  const t = parseFloat(taban.replace(",", ".")) || 10;
  const log = v > 0 && t > 0 && t !== 1 ? Math.log(v) / Math.log(t) : NaN;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sayı (x)"><input className="field tabular-nums" inputMode="decimal" value={n} onChange={(e) => setN(e.target.value)} /></Field>
        <Field label="Taban"><input className="field tabular-nums" inputMode="decimal" value={taban} onChange={(e) => setTaban(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={`log_${t}(${v})`} value={isNaN(log) ? "Tanımsız" : formatNumber(log, 6)} tone="accent" />
        <div className="card p-4">
          <ResultRow label={`log (${t})`} value={isNaN(log) ? "—" : formatNumber(log, 6)} />
          <ResultRow label="log₁₀ (onluk)" value={v > 0 ? formatNumber(Math.log10(v), 6) : "—"} />
          <ResultRow label="ln (doğal, e)" value={v > 0 ? formatNumber(Math.log(v), 6) : "—"} />
          <ResultRow label="log₂ (ikilik)" value={v > 0 ? formatNumber(Math.log2(v), 6) : "—"} />
        </div>
      </div>
    </div>
  );
}

/* ========== 4. Basit faiz ========== */
export function BasitFaizHesaplayici() {
  const [a, setA] = useState("10000");
  const [o, setO] = useState("40");
  const [g, setG] = useState("365");
  const anap = parseFloat(a) || 0;
  const oran = parseFloat(o) || 0;
  const gun = parseFloat(g) || 0;
  const faiz = (anap * oran * gun) / 36500;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Anapara (₺)"><input className="field tabular-nums" inputMode="numeric" value={a} onChange={(e) => setA(e.target.value)} /></Field>
        <Field label="Yıllık Faiz (%)"><input className="field tabular-nums" inputMode="decimal" value={o} onChange={(e) => setO(e.target.value)} /></Field>
        <Field label="Süre (gün)"><input className="field tabular-nums" inputMode="numeric" value={g} onChange={(e) => setG(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="İşleyen Faiz" value={formatTL(faiz)} sub={`Toplam: ${formatTL(anap + faiz)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Anapara" value={formatTL(anap)} />
          <ResultRow label="Basit faiz" value={formatTL(faiz)} />
          <ResultRow label="Toplam" value={formatTL(anap + faiz)} />
        </div>
      </div>
    </div>
  );
}

/* ========== 5. Sıcaklık dönüşüm (hızlı) ========== */
export function SicaklikMiniHesaplayici() {
  const [c, setC] = useState("25");
  const v = parseFloat(c.replace(",", ".")) || 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4"><Field label="Santigrat (°C)"><input className="field tabular-nums" inputMode="decimal" value={c} onChange={(e) => setC(e.target.value)} /></Field></div>
      <div className="card p-4">
        <ResultRow label="Santigrat" value={`${formatNumber(v, 2)} °C`} />
        <ResultRow label="Fahrenhayt" value={`${formatNumber(v * 9 / 5 + 32, 2)} °F`} />
        <ResultRow label="Kelvin" value={`${formatNumber(v + 273.15, 2)} K`} />
        <ResultRow label="Réaumur" value={`${formatNumber(v * 0.8, 2)} °Ré`} />
        <ResultRow label="Rankine" value={`${formatNumber((v + 273.15) * 9 / 5, 2)} °R`} />
      </div>
    </div>
  );
}

/* ========== 6. BMI mini (hızlı) ========== */
export function BmiMiniHesaplayici() {
  const [b, setB] = useState("175");
  const [k, setK] = useState("75");
  const bv = parseFloat(b) || 0;
  const kv = parseFloat(k) || 0;
  const bmi = bv > 0 ? kv / ((bv / 100) * (bv / 100)) : 0;
  const durum = bmi < 18.5 ? "Zayıf" : bmi < 25 ? "Normal" : bmi < 30 ? "Fazla kilolu" : "Obez";
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Boy (cm)"><input className="field tabular-nums" inputMode="numeric" value={b} onChange={(e) => setB(e.target.value)} /></Field>
        <Field label="Kilo (kg)"><input className="field tabular-nums" inputMode="numeric" value={k} onChange={(e) => setK(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="BMI" value={formatNumber(bmi, 2)} sub={durum} tone="accent" />
        <div className="card p-4">
          <ResultRow label="İdeal aralık" value="18,5 - 24,9" />
          <ResultRow label="Sizin BMI" value={formatNumber(bmi, 2)} />
          <ResultRow label="Kategori" value={durum} />
        </div>
      </div>
    </div>
  );
}

/* ========== 7. Yaş farkı (2 kişi) ========== */
export function YasFarkiHesaplayici() {
  const [k1, setK1] = useState("1990-05-15");
  const [k2, setK2] = useState("1995-11-20");
  const d1 = new Date(k1);
  const d2 = new Date(k2);
  const valid = !isNaN(d1.getTime()) && !isNaN(d2.getTime());
  const farkGun = valid ? Math.abs(Math.floor((d1.getTime() - d2.getTime()) / 86400000)) : 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kişi 1 doğum tarihi"><input className="field" type="date" value={k1} onChange={(e) => setK1(e.target.value)} /></Field>
        <Field label="Kişi 2 doğum tarihi"><input className="field" type="date" value={k2} onChange={(e) => setK2(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yaş Farkı" value={`${Math.floor(farkGun / 365)} yıl ${Math.floor((farkGun % 365) / 30)} ay`} sub={`${formatNumber(farkGun, 0)} gün`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Toplam gün" value={formatNumber(farkGun, 0)} />
          <ResultRow label="Yıl" value={formatNumber(farkGun / 365, 2)} />
          <ResultRow label="Ay" value={formatNumber(farkGun / 30.44, 1)} />
          <ResultRow label="Hafta" value={formatNumber(farkGun / 7, 0)} />
        </div>
      </div>
    </div>
  );
}

/* ========== 8. Pizza dilim ========== */
export function PizzaHesaplayici() {
  const [cap, setCap] = useState("30");
  const [kisi, setKisi] = useState("4");
  const c = parseFloat(cap) || 0;
  const k = parseFloat(kisi) || 1;
  const alan = Math.PI * (c / 2) * (c / 2);
  const kisiBasi = alan / k;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Pizza Çapı (cm)"><input className="field tabular-nums" inputMode="numeric" value={cap} onChange={(e) => setCap(e.target.value)} /></Field>
        <Field label="Kişi Sayısı"><input className="field tabular-nums" inputMode="numeric" value={kisi} onChange={(e) => setKisi(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Kişi Başı Alan" value={`${formatNumber(kisiBasi, 0)} cm²`} sub={`Toplam pizza: ${formatNumber(alan, 0)} cm²`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Pizza alanı" value={`${formatNumber(alan, 0)} cm²`} />
          <ResultRow label="Kişi başı" value={`${formatNumber(kisiBasi, 0)} cm²`} />
          <ResultRow label="Öneri: 500 cm² üstü doyurucu" value={kisiBasi >= 500 ? "✓ Yeterli" : "✗ Az"} />
        </div>
      </div>
    </div>
  );
}

/* ========== 9. Deri boyutları (kaç m² deri lazım) ========== */
export function DeriMiktarHesaplayici() {
  const [ust, setUst] = useState<"koltuk" | "kanepe" | "ceket" | "ayakkabi">("koltuk");
  const t: Record<string, { m2: number; ad: string }> = {
    koltuk: { m2: 4, ad: "Tekli koltuk" },
    kanepe: { m2: 8, ad: "3'lü kanepe" },
    ceket: { m2: 2.5, ad: "Deri ceket" },
    ayakkabi: { m2: 0.3, ad: "Bir çift ayakkabı" },
  };
  const s = t[ust];
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Ürün Tipi">
          <Segmented value={ust} onChange={setUst} options={[
            { label: "Koltuk", value: "koltuk" }, { label: "Kanepe", value: "kanepe" }, { label: "Ceket", value: "ceket" }, { label: "Ayakkabı", value: "ayakkabi" }
          ]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={s.ad} value={`~ ${s.m2} m² deri`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Tekli koltuk" value="~ 4 m²" />
          <ResultRow label="3'lü kanepe" value="~ 8 m²" />
          <ResultRow label="Deri ceket" value="~ 2,5 m²" />
          <ResultRow label="Ayakkabı çifti" value="~ 0,3 m²" />
        </div>
      </div>
    </div>
  );
}

/* ========== 10. GSM tarife karşılaştırma (2 tarife) ========== */
export function GsmTarifeHesaplayici() {
  const [a, setA] = useState("200");
  const [b, setB] = useState("300");
  const av = parseFloat(a) || 0;
  const bv = parseFloat(b) || 0;
  const yillikA = av * 12;
  const yillikB = bv * 12;
  const fark = Math.abs(yillikA - yillikB);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Tarife A — Aylık (₺)"><input className="field tabular-nums" inputMode="numeric" value={a} onChange={(e) => setA(e.target.value)} /></Field>
        <Field label="Tarife B — Aylık (₺)"><input className="field tabular-nums" inputMode="numeric" value={b} onChange={(e) => setB(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={av < bv ? "A daha ucuz" : bv < av ? "B daha ucuz" : "Eşit"} value={formatTL(fark)} sub="Yıllık tasarruf" tone="accent" />
        <div className="card p-4">
          <ResultRow label="Tarife A yıllık" value={formatTL(yillikA)} />
          <ResultRow label="Tarife B yıllık" value={formatTL(yillikB)} />
          <ResultRow label="Yıllık fark" value={formatTL(fark)} />
          <ResultRow label="10 yıllık fark" value={formatTL(fark * 10)} />
        </div>
      </div>
    </div>
  );
}
