"use client";
import { useState } from "react";
import { forwardKur, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";
export function ForwardKurHesaplayici() {
  const [spot, setSpot] = useState("40");
  const [yerel, setYerel] = useState("45");
  const [yabanci, setYabanci] = useState("4.5");
  const [gun, setGun] = useState("90");
  const r = forwardKur(parseFloat(spot.replace(",", ".")) || 0, parseFloat(yerel) || 0, parseFloat(yabanci.replace(",", ".")) || 0, parseFloat(gun) || 0);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Spot Kur (₺)"><input className="field tabular-nums" inputMode="decimal" value={spot} onChange={(e) => setSpot(e.target.value)} /></Field>
    <Field label="Yerel (TL) Faizi (%)"><input className="field tabular-nums" inputMode="decimal" value={yerel} onChange={(e) => setYerel(e.target.value)} /></Field>
    <Field label="Yabancı Para Faizi (%)"><input className="field tabular-nums" inputMode="decimal" value={yabanci} onChange={(e) => setYabanci(e.target.value)} /></Field>
    <Field label="Vade (gün)"><input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Forward Kur (Teorik)" value={`₺${formatNumber(r.forwardKur, 4)}`} sub={`Prim: %${formatNumber(r.primYuzde, 2)}`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Spot" value={`₺${formatNumber(parseFloat(spot), 4)}`} />
      <ResultRow label="Forward" value={`₺${formatNumber(r.forwardKur, 4)}`} />
      <ResultRow label="Prim / iskonto" value={`${formatNumber(r.primYuzde, 2)}%`} />
    </div>
  </div></div>;
}
