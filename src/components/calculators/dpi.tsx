"use client";
import { useState } from "react";
import { dpiHesapla, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";
export function DpiHesaplayici() {
  const [px, setPx] = useState("1920");
  const [dpi, setDpi] = useState("96");
  const r = dpiHesapla(parseFloat(px) || 0, parseFloat(dpi) || 96);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Piksel"><input className="field tabular-nums" inputMode="numeric" value={px} onChange={(e) => setPx(e.target.value)} /></Field>
    <Field label="DPI (72/96/144/300)"><input className="field tabular-nums" inputMode="numeric" value={dpi} onChange={(e) => setDpi(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Piksel Karşılığı" value={`${formatNumber(r.inch, 2)} inch`} sub={`${formatNumber(r.cm, 2)} cm`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Inch" value={formatNumber(r.inch, 3)} />
      <ResultRow label="Santimetre" value={formatNumber(r.cm, 2)} />
      <ResultRow label="Milimetre" value={formatNumber(r.mm, 1)} />
      <ResultRow label="Punto (pt)" value={formatNumber(r.pt, 0)} />
    </div>
  </div></div>;
}
