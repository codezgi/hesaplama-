"use client";
import { useState } from "react";
import { lpgAmorti, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function LpgHesaplayici() {
  const [donusum, setDonusum] = useState("40000");
  const [benzin, setBenzin] = useState("42");
  const [lpg, setLpg] = useState("22");
  const [tuketim, setTuketim] = useState("8");
  const d = parseFloat(donusum) || 0;
  const b = parseFloat(benzin.replace(",", ".")) || 0;
  const l = parseFloat(lpg.replace(",", ".")) || 0;
  const t = parseFloat(tuketim.replace(",", ".")) || 0;
  const r = lpgAmorti(d, b, l, t);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="LPG dönüşüm maliyeti (₺)"><input className="field tabular-nums" inputMode="decimal" value={donusum} onChange={(e) => setDonusum(e.target.value)} /></Field>
        <Field label="Benzin fiyatı (₺/L)"><input className="field tabular-nums" inputMode="decimal" value={benzin} onChange={(e) => setBenzin(e.target.value)} /></Field>
        <Field label="LPG fiyatı (₺/L)"><input className="field tabular-nums" inputMode="decimal" value={lpg} onChange={(e) => setLpg(e.target.value)} /></Field>
        <Field label="Benzinli tüketim (L/100 km)"><input className="field tabular-nums" inputMode="decimal" value={tuketim} onChange={(e) => setTuketim(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Amorti KM" value={r.amortiKm === Infinity ? "Kar yok" : `${formatNumber(r.amortiKm, 0)} km`} sub={`Km başına tasarruf: ${formatTL(r.kmBasinaTasarruf)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Benzin 100 km maliyeti" value={formatTL(r.benzin100Km)} />
          <ResultRow label="LPG 100 km maliyeti" value={formatTL(r.lpg100Km)} />
          <ResultRow label="Km başı tasarruf" value={formatTL(r.kmBasinaTasarruf)} />
          <ResultRow label="Dönüşüm amortisi" value={r.amortiKm === Infinity ? "—" : `${formatNumber(r.amortiKm, 0)} km`} />
        </div>
      </div>
    </div>
  );
}
