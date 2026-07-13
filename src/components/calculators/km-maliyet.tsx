"use client";
import { useState } from "react";
import { kmBasinaMaliyet, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";
export function KmMaliyetHesaplayici() {
  const [t, setT] = useState("7");
  const [f, setF] = useState("42");
  const r = kmBasinaMaliyet(parseFloat(t.replace(",", ".")) || 0, parseFloat(f.replace(",", ".")) || 0);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Ort. Tüketim (L/100 km)"><input className="field tabular-nums" inputMode="decimal" value={t} onChange={(e) => setT(e.target.value)} /></Field>
    <Field label="Yakıt Fiyatı (₺/L)"><input className="field tabular-nums" inputMode="decimal" value={f} onChange={(e) => setF(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Km Başına Maliyet" value={formatTL(r.kmBasi)} sub={`100 km: ${formatTL(r.kmBasi * 100)}`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="1 km" value={formatTL(r.kmBasi)} />
      <ResultRow label="100 km" value={formatTL(r.kmBasi * 100)} />
      <ResultRow label="500 km" value={formatTL(r.kmBasi * 500)} />
      <ResultRow label="1000 km" value={formatTL(r.kmBasi * 1000)} />
    </div>
    <p className="text-sm text-text-muted">Yakıt fiyatı: <strong className="text-text">{formatNumber(parseFloat(f), 2)} ₺/L</strong></p>
  </div></div>;
}
