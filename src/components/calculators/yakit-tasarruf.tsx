"use client";
import { useState } from "react";
import { yakitTasarruf, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YakitTasarrufHesaplayici() {
  const [eski, setEski] = useState("8");
  const [yeni, setYeni] = useState("5.5");
  const [km, setKm] = useState("20000");
  const [fiyat, setFiyat] = useState("42");
  const e = parseFloat(eski.replace(",", ".")) || 0;
  const y = parseFloat(yeni.replace(",", ".")) || 0;
  const k = parseFloat(km.replace(",", ".")) || 0;
  const f = parseFloat(fiyat.replace(",", ".")) || 0;
  const r = yakitTasarruf(e, y, k, f);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Eski araç tüketim (L/100 km)"><input className="field tabular-nums" inputMode="decimal" value={eski} onChange={(e) => setEski(e.target.value)} /></Field>
        <Field label="Yeni araç tüketim (L/100 km)"><input className="field tabular-nums" inputMode="decimal" value={yeni} onChange={(e) => setYeni(e.target.value)} /></Field>
        <Field label="Yıllık km"><input className="field tabular-nums" inputMode="numeric" value={km} onChange={(e) => setKm(e.target.value)} /></Field>
        <Field label="Yakıt fiyatı (₺/L)"><input className="field tabular-nums" inputMode="decimal" value={fiyat} onChange={(e) => setFiyat(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yıllık Tasarruf" value={formatTL(r.tasarrufYillik)} sub={`5 yılda: ${formatTL(r.tasarrufYillik * 5)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Eski araç yıllık" value={formatTL(r.eskiYillik)} />
          <ResultRow label="Yeni araç yıllık" value={formatTL(r.yeniYillik)} />
          <ResultRow label="Yıllık tasarruf" value={formatTL(r.tasarrufYillik)} />
          <ResultRow label="10 yıllık tasarruf" value={formatTL(r.tasarrufYillik * 10)} />
        </div>
      </div>
    </div>
  );
}
