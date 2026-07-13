"use client";
import { useState } from "react";
import { vo2Max } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function Vo2MaxHesaplayici() {
  const [metre, setMetre] = useState("2400");
  const m = parseFloat(metre) || 0;
  const r = vo2Max(m);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="12 Dakikada Koştuğunuz Mesafe (metre)" hint="Cooper testi.">
          <input className="field tabular-nums" inputMode="numeric" value={metre} onChange={(e) => setMetre(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="VO2 Max" value={`${formatNumber(r.vo2, 1)} ml/kg/dk`} sub={r.kategori} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Zayıf" value="< 25" />
          <ResultRow label="Ortalama altı" value="25 - 33" />
          <ResultRow label="Ortalama" value="33 - 42" />
          <ResultRow label="İyi" value="42 - 52" />
          <ResultRow label="Mükemmel" value="> 52" />
        </div>
      </div>
    </div>
  );
}
