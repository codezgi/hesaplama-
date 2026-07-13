"use client";
import { useState } from "react";
import { hesaplaIyos } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function IyosHesaplayici() {
  const [d, setD] = useState("60");
  const [y, setY] = useState("10");
  const r = hesaplaIyos(parseInt(d) || 0, parseInt(y) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">İYÖS (80 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={d} onChange={(e) => setD(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={y} onChange={(e) => setY(e.target.value)} /></Field>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <ResultHero label="Tahmini İYÖS Puanı" value={formatNumber(r.puan, 2)} sub={`Net: ${formatNumber(r.net, 2)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Net" value={formatNumber(r.net, 2)} />
          <ResultRow label="Puan" value={formatNumber(r.puan, 2)} />
        </div>
      </div>
    </div>
  );
}
