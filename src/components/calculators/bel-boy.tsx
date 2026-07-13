"use client";
import { useState } from "react";
import { belBoyOrani } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function BelBoyHesaplayici() {
  const [bel, setBel] = useState("85");
  const [boy, setBoy] = useState("178");
  const b = parseFloat(bel) || 0;
  const y = parseFloat(boy) || 0;
  const r = belBoyOrani(b, y);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Bel çevresi (cm)"><input className="field tabular-nums" inputMode="numeric" value={bel} onChange={(e) => setBel(e.target.value)} /></Field>
        <Field label="Boy (cm)"><input className="field tabular-nums" inputMode="numeric" value={boy} onChange={(e) => setBoy(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Bel/Boy Oranı (WHtR)" value={formatNumber(r.oran, 3)} sub={r.kategori} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Çok düşük" value="< 0,40" />
          <ResultRow label="Sağlıklı" value="0,40 - 0,50" />
          <ResultRow label="Artmış risk" value="0,50 - 0,60" />
          <ResultRow label="Yüksek risk" value="≥ 0,60" />
        </div>
      </div>
    </div>
  );
}
