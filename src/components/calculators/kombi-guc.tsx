"use client";
import { useState } from "react";
import { kombiGuc, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KombiGucHesaplayici() {
  const [m2, setM2] = useState("120");
  const [yalitim, setYalitim] = useState<"iyi" | "orta" | "zayif">("orta");
  const r = kombiGuc(parseFloat(m2) || 0, yalitim);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Isıtılacak Alan (m²)"><input className="field tabular-nums" inputMode="numeric" value={m2} onChange={(e) => setM2(e.target.value)} /></Field>
        <Field label="Yalıtım Durumu">
          <Segmented value={yalitim} onChange={setYalitim} options={[
            { label: "İyi", value: "iyi" },
            { label: "Orta", value: "orta" },
            { label: "Zayıf", value: "zayif" },
          ]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Önerilen Güç" value={`${formatNumber(r.kW, 1)} kW`} sub={`${formatNumber(r.kcalSaat, 0)} kcal/saat`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Watt" value={`${formatNumber(r.watt, 0)} W`} />
          <ResultRow label="kW" value={`${formatNumber(r.kW, 1)} kW`} />
          <ResultRow label="kcal/saat" value={`${formatNumber(r.kcalSaat, 0)}`} />
        </div>
      </div>
    </div>
  );
}
