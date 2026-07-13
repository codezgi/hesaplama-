"use client";

import { useState } from "react";
import { hesaplaRoi, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function RoiHesaplayici() {
  const [yatirim, setYatirim] = useState("50000");
  const [getiri, setGetiri] = useState("75000");
  const [ay, setAy] = useState("24");

  const y = parseFloat(yatirim.replace(",", ".")) || 0;
  const g = parseFloat(getiri.replace(",", ".")) || 0;
  const a = parseInt(ay, 10) || 0;
  const r = hesaplaRoi(y, g, a);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yatırım Tutarı (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={yatirim} onChange={(e) => setYatirim(e.target.value)} />
        </Field>
        <Field label="Elde Edilen Toplam Getiri (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={getiri} onChange={(e) => setGetiri(e.target.value)} />
        </Field>
        <Field label="Yatırım Süresi (ay)">
          <input className="field tabular-nums" inputMode="numeric" value={ay} onChange={(e) => setAy(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="ROI" value={`%${formatNumber(r.roi, 2)}`} sub={`Yıllık: %${formatNumber(r.yillikRoi, 2)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Yatırım" value={formatTL(y)} />
          <ResultRow label="Getiri" value={formatTL(g)} />
          <ResultRow label="Net kâr" value={formatTL(r.netGetiri)} />
          <ResultRow label="Toplam ROI" value={`%${formatNumber(r.roi, 2)}`} />
          <ResultRow label="Yıllık ROI (annualize)" value={`%${formatNumber(r.yillikRoi, 2)}`} />
        </div>
      </div>
    </div>
  );
}
