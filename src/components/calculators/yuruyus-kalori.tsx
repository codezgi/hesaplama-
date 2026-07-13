"use client";
import { useState } from "react";
import { yuruyusKalori } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YuruyusKaloriHesaplayici() {
  const [adim, setAdim] = useState("10000");
  const [kilo, setKilo] = useState("75");
  const [boy, setBoy] = useState("170");
  const a = parseFloat(adim) || 0;
  const k = parseFloat(kilo) || 0;
  const b = parseFloat(boy) || 0;
  const r = yuruyusKalori(a, k, b);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Adım sayısı"><input className="field tabular-nums" inputMode="numeric" value={adim} onChange={(e) => setAdim(e.target.value)} /></Field>
        <Field label="Kilo (kg)"><input className="field tabular-nums" inputMode="numeric" value={kilo} onChange={(e) => setKilo(e.target.value)} /></Field>
        <Field label="Boy (cm)"><input className="field tabular-nums" inputMode="numeric" value={boy} onChange={(e) => setBoy(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yakılan Kalori" value={`${formatNumber(r.kcal, 0)} kcal`} sub={`Mesafe: ${formatNumber(r.mesafeKm, 2)} km`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Adım" value={formatNumber(a, 0)} />
          <ResultRow label="Mesafe" value={`${formatNumber(r.mesafeKm, 2)} km`} />
          <ResultRow label="Yakılan kalori" value={`${formatNumber(r.kcal, 0)} kcal`} />
        </div>
      </div>
    </div>
  );
}
