"use client";

import { useState } from "react";
import { proteinIhtiyaci, PROTEIN_DURUMLARI } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function ProteinHesaplayici() {
  const [kilo, setKilo] = useState("75");
  const [faktor, setFaktor] = useState<number>(1.2);

  const k = parseFloat(kilo) || 0;
  const gram = proteinIhtiyaci(k, faktor);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kilo (kg)">
          <input className="field tabular-nums" inputMode="decimal" value={kilo} onChange={(e) => setKilo(e.target.value)} />
        </Field>
        <Field label="Aktivite / Amaç">
          <select className="field" value={faktor} onChange={(e) => setFaktor(Number(e.target.value))}>
            {PROTEIN_DURUMLARI.map((d) => (
              <option key={d.key} value={d.faktor}>
                {d.label} — {d.faktor} g/kg
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Günlük Protein İhtiyacı"
          value={`${formatNumber(gram, 0)} g`}
          sub={`${faktor} g/kg × ${k} kg`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Gram" value={`${formatNumber(gram, 0)} g`} />
          <ResultRow label="~ 3 öğün başına" value={`${formatNumber(gram / 3, 0)} g`} />
          <ResultRow label="Tavuk göğsü karşılığı (~31g/100g)" value={`${formatNumber(gram / 0.31, 0)} g`} />
          <ResultRow label="Yumurta karşılığı (~6g/adet)" value={`${formatNumber(gram / 6, 0)} adet`} />
        </div>
      </div>
    </div>
  );
}
