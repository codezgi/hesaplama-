"use client";
import { useState } from "react";
import { kosuTempo } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KosuTempoHesaplayici() {
  const [mesafe, setMesafe] = useState("10");
  const [dakika, setDakika] = useState("55");
  const m = parseFloat(mesafe.replace(",", ".")) || 0;
  const d = parseFloat(dakika.replace(",", ".")) || 0;
  const r = kosuTempo(m, d);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Mesafe (km)"><input className="field tabular-nums" inputMode="decimal" value={mesafe} onChange={(e) => setMesafe(e.target.value)} /></Field>
        <Field label="Süre (dk)"><input className="field tabular-nums" inputMode="decimal" value={dakika} onChange={(e) => setDakika(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Tempo" value={r.tempoStr} sub={`Hız: ${formatNumber(r.hizKmS, 2)} km/s`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Tempo" value={r.tempoStr} />
          <ResultRow label="Hız" value={`${formatNumber(r.hizKmS, 2)} km/s`} />
          <ResultRow label="10 km süresi (bu tempoyla)" value={`${formatNumber(r.tempoDkKm * 10, 1)} dk`} />
          <ResultRow label="Maraton (42,2 km) süresi" value={`${formatNumber((r.tempoDkKm * 42.2) / 60, 2)} sa`} />
        </div>
      </div>
    </div>
  );
}
