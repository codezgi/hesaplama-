"use client";
import { useState } from "react";
import { evMenzil, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function EvMenzilHesaplayici() {
  const [batarya, setBatarya] = useState("70");
  const [sarj, setSarj] = useState("80");
  const [tuketim, setTuketim] = useState("18");
  const r = evMenzil(parseFloat(batarya) || 0, parseFloat(sarj) || 0, parseFloat(tuketim) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Batarya Kapasitesi (kWh)"><input className="field tabular-nums" inputMode="numeric" value={batarya} onChange={(e) => setBatarya(e.target.value)} /></Field>
        <Field label="Şarj Yüzdesi (%)"><input className="field tabular-nums" inputMode="numeric" value={sarj} onChange={(e) => setSarj(e.target.value)} /></Field>
        <Field label="Ortalama Tüketim (kWh/100 km)"><input className="field tabular-nums" inputMode="decimal" value={tuketim} onChange={(e) => setTuketim(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Tahmini Menzil" value={`${formatNumber(r.menzilKm, 0)} km`} sub={`Kullanılabilir enerji: ${formatNumber(r.netKwh, 1)} kWh`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Net enerji" value={`${formatNumber(r.netKwh, 1)} kWh`} />
          <ResultRow label="Menzil" value={`${formatNumber(r.menzilKm, 0)} km`} />
          <ResultRow label="100 km başına gerekli %" value={`%${formatNumber((100 / r.menzilKm) * parseFloat(sarj), 1)}`} />
        </div>
      </div>
    </div>
  );
}
