"use client";
import { useState } from "react";
import { KEK_MALZEME, formatNumber } from "@/lib/calc";
import { ResultRow, Field } from "@/components/result";
export function KekMalzemeHesaplayici() {
  const [kisi, setKisi] = useState("8");
  const k = parseFloat(kisi) || 0;
  const oran = k / 6;
  return <div className="space-y-6">
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="Kişi Sayısı" hint="Referans tarif 6 kişilik.">
        <input className="field tabular-nums" inputMode="numeric" value={kisi} onChange={(e) => setKisi(e.target.value)} />
      </Field>
    </div>
    <div className="card p-4">
      <div className="mb-2 text-sm font-semibold text-text">Klasik Kek Malzemeleri (6 → {k} kişilik)</div>
      {KEK_MALZEME.map((m) => (
        <ResultRow key={m.ad} label={m.ad} value={`${formatNumber(m.miktar * oran, m.birim === "adet" ? 0 : 0)} ${m.birim}`} />
      ))}
    </div>
  </div>;
}
