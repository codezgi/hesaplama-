"use client";

import { useState } from "react";
import { hesaplaBmi, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const KATEGORI_RENK: Record<string, string> = {
  Zayıf: "text-amber-600",
  Normal: "text-emerald-600",
  "Fazla Kilolu": "text-orange-600",
  "1. Derece Obez": "text-red-600",
  "2. Derece Obez": "text-red-600",
  "3. Derece (Morbid) Obez": "text-red-700",
};

export function BmiHesaplayici() {
  const [kilo, setKilo] = useState("70");
  const [boy, setBoy] = useState("175");

  const k = parseFloat(kilo.replace(",", ".")) || 0;
  const b = parseFloat(boy.replace(",", ".")) || 0;
  const valid = k > 0 && b > 0;
  const r = valid ? hesaplaBmi(k, b) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kilo (kg)">
          <input className="field tabular-nums" inputMode="decimal" value={kilo}
            onChange={(e) => setKilo(e.target.value)} />
        </Field>
        <Field label="Boy (cm)">
          <input className="field tabular-nums" inputMode="decimal" value={boy}
            onChange={(e) => setBoy(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Vücut Kitle İndeksi"
          value={r ? formatNumber(r.bmi, 1) : "—"}
          sub={r ? <span className={`font-semibold ${KATEGORI_RENK[r.kategori]}`}>{r.kategori}</span> : "Değer girin"}
        />
        {r && (
          <div className="card p-4">
            <ResultRow
              label="Bu boy için ideal aralık"
              value={`${formatNumber(r.idealMin, 1)} – ${formatNumber(r.idealMax, 1)} kg`}
            />
            <ResultRow label="Sınıflandırma" value={r.kategori} />
          </div>
        )}
      </div>
    </div>
  );
}
