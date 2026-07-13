"use client";
import { useState } from "react";
import { boyaMiktari, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function BoyaHesaplayici() {
  const [m2, setM2] = useState("60");
  const [kat, setKat] = useState("2");
  const r = boyaMiktari(parseFloat(m2) || 0, parseInt(kat) || 2);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Boyanacak Alan (m²)" hint="Duvar/tavan yüzeyi. Kapı ve pencereleri düşün.">
          <input className="field tabular-nums" inputMode="decimal" value={m2} onChange={(e) => setM2(e.target.value)} />
        </Field>
        <Field label="Kat Sayısı"><input className="field tabular-nums" inputMode="numeric" value={kat} onChange={(e) => setKat(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Boya Miktarı" value={`${formatNumber(r.kg, 1)} kg`} sub={`Yaklaşık ${r.kutu} × 2,5 kg kutu`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Toplam boya" value={`${formatNumber(r.kg, 2)} kg`} />
          <ResultRow label="2,5 kg kutu sayısı" value={`${r.kutu} adet`} />
          <ResultRow label="10 kg kova sayısı" value={`${Math.ceil(r.kg / 10)} adet`} />
        </div>
      </div>
    </div>
  );
}
