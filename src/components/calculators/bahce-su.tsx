"use client";
import { useState } from "react";
import { bahceSuIhtiyaci, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";
export function BahceSuHesaplayici() {
  const [m2, setM2] = useState("50");
  const [gunes, setGunes] = useState("8");
  const r = bahceSuIhtiyaci(parseFloat(m2) || 0, parseFloat(gunes) || 8);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Bahçe Alanı (m²)"><input className="field tabular-nums" inputMode="numeric" value={m2} onChange={(e) => setM2(e.target.value)} /></Field>
    <Field label="Günlük Güneş Saati"><input className="field tabular-nums" inputMode="numeric" value={gunes} onChange={(e) => setGunes(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Günlük Su İhtiyacı" value={`${formatNumber(r.litreGun, 0)} L`} sub={`Aylık: ~${formatNumber(r.litreGun * 30, 0)} L`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Günlük" value={`${formatNumber(r.litreGun, 0)} L`} />
      <ResultRow label="Haftalık" value={`${formatNumber(r.litreGun * 7, 0)} L`} />
      <ResultRow label="Aylık" value={`${formatNumber(r.litreGun * 30, 0)} L`} />
    </div>
  </div></div>;
}
