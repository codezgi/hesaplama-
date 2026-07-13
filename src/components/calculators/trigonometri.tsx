"use client";
import { useState } from "react";
import { trigonometri, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function TrigonometriHesaplayici() {
  const [derece, setDerece] = useState("30");
  const r = trigonometri(parseFloat(derece.replace(",", ".")) || 0);
  const num = (v: number) => Number.isFinite(v) ? formatNumber(v, 6) : "Tanımsız";
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Açı (derece)"><input className="field tabular-nums" inputMode="decimal" value={derece} onChange={(e) => setDerece(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={`${derece}°`} value={`sin: ${num(r.sin)}`} sub={`cos: ${num(r.cos)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Radyan" value={num(r.radyan)} />
          <ResultRow label="sin" value={num(r.sin)} />
          <ResultRow label="cos" value={num(r.cos)} />
          <ResultRow label="tan" value={num(r.tan)} />
          <ResultRow label="cot" value={num(r.cot)} />
        </div>
      </div>
    </div>
  );
}
