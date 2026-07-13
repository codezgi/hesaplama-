"use client";

import { useState } from "react";
import { bmrHarrisBenedict, type Cinsiyet } from "@/lib/saglik";
import { AKTIVITE, formatNumber, hesaplaKalori } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function BmrHarrisHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [yas, setYas] = useState("30");
  const [boy, setBoy] = useState("178");
  const [kilo, setKilo] = useState("78");
  const [aktivite, setAktivite] = useState<number>(1.55);

  const y = parseFloat(yas) || 0;
  const b = parseFloat(boy) || 0;
  const k = parseFloat(kilo) || 0;

  const bmrHB = bmrHarrisBenedict(cinsiyet, y, b, k);
  const bmrMSJ = hesaplaKalori(cinsiyet, y, b, k, aktivite).bmr;
  const tdeeHB = bmrHB * aktivite;
  const kcal = (n: number) => `${formatNumber(n, 0)} kcal`;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Cinsiyet">
          <Segmented value={cinsiyet} onChange={setCinsiyet} options={[{ label: "Erkek", value: "erkek" }, { label: "Kadın", value: "kadin" }]} />
        </Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Yaş"><input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} /></Field>
          <Field label="Boy (cm)"><input className="field tabular-nums" inputMode="numeric" value={boy} onChange={(e) => setBoy(e.target.value)} /></Field>
          <Field label="Kilo (kg)"><input className="field tabular-nums" inputMode="numeric" value={kilo} onChange={(e) => setKilo(e.target.value)} /></Field>
        </div>
        <Field label="Aktivite">
          <select className="field" value={aktivite} onChange={(e) => setAktivite(Number(e.target.value))}>
            {AKTIVITE.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
          </select>
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Harris-Benedict BMR" value={kcal(bmrHB)} sub={`TDEE: ${kcal(tdeeHB)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Harris-Benedict BMR" value={kcal(bmrHB)} />
          <ResultRow label="Mifflin-St Jeor BMR" value={kcal(bmrMSJ)} />
          <ResultRow label="İki formül farkı" value={`${formatNumber(Math.abs(bmrHB - bmrMSJ), 0)} kcal`} />
          <ResultRow label="Harris-Benedict TDEE" value={kcal(tdeeHB)} />
          <ResultRow label="Kilo verme (−500)" value={kcal(tdeeHB - 500)} />
          <ResultRow label="Kilo alma (+500)" value={kcal(tdeeHB + 500)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Harris-Benedict (1984 revize) formülü Mifflin-St Jeor&apos;a göre biraz daha yüksek BMR verir; ikisi de klinikte kullanılır. Kişisel takipte tutarlı olmak için hep aynı formülü kullanın.
        </div>
      </div>
    </div>
  );
}
