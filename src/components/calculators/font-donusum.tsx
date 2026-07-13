"use client";
import { useState } from "react";
import { fontDonusum, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";
export function FontDonusumHesaplayici() {
  const [px, setPx] = useState("16");
  const [kok, setKok] = useState("16");
  const r = fontDonusum(parseFloat(px) || 0, parseFloat(kok) || 16);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Piksel Değeri"><input className="field tabular-nums" inputMode="decimal" value={px} onChange={(e) => setPx(e.target.value)} /></Field>
    <Field label="Kök Font Boyutu (px, varsayılan 16)"><input className="field tabular-nums" inputMode="decimal" value={kok} onChange={(e) => setKok(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Karşılıklar" value={`${formatNumber(r.rem, 3)} rem`} sub={`${formatNumber(r.pt, 1)} pt`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="em" value={formatNumber(r.em, 3)} />
      <ResultRow label="rem" value={formatNumber(r.rem, 3)} />
      <ResultRow label="pt (punto)" value={formatNumber(r.pt, 2)} />
      <ResultRow label="%" value={`${formatNumber(r.percent, 1)}%`} />
    </div>
  </div></div>;
}
