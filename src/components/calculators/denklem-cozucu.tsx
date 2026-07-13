"use client";

import { useState } from "react";
import { ikinciDereceDenklem } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function DenklemCozucuHesaplayici() {
  const [a, setA] = useState("1");
  const [b, setB] = useState("-5");
  const [c, setC] = useState("6");

  const av = parseFloat(a.replace(",", ".")) || 0;
  const bv = parseFloat(b.replace(",", ".")) || 0;
  const cv = parseFloat(c.replace(",", ".")) || 0;
  const r = ikinciDereceDenklem(av, bv, cv);

  const num = (v: number) => formatNumber(v, 4);

  return (
    <div className="space-y-5">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-surface p-4 text-center font-mono text-lg text-primary">
            {av}x² + ({bv})x + ({cv}) = 0
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Field label="a"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>
            <Field label="b"><input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} /></Field>
            <Field label="c"><input className="field tabular-nums" inputMode="decimal" value={c} onChange={(e) => setC(e.target.value)} /></Field>
          </div>
        </div>

        <div className="space-y-4">
          <ResultHero
            label={`${r.gerceklKok} Gerçek Kök`}
            value={
              r.gerceklKok === 2 ? `x₁ = ${num(r.x1 ?? 0)}, x₂ = ${num(r.x2 ?? 0)}`
                : r.gerceklKok === 1 ? `x = ${num(r.x1 ?? 0)}`
                : r.x1Imag ? "Kompleks kökler" : "—"
            }
            sub={`Diskriminant: Δ = ${num(r.diskriminant)}`}
            tone="accent"
          />
          <div className="card p-4">
            <ResultRow label="Δ = b² − 4ac" value={num(r.diskriminant)} />
            {r.gerceklKok >= 1 && <ResultRow label="x₁" value={r.x1 !== null ? num(r.x1) : "—"} />}
            {r.gerceklKok === 2 && <ResultRow label="x₂" value={r.x2 !== null ? num(r.x2) : "—"} />}
            {r.x1Imag && <ResultRow label="x₁ (kompleks)" value={<code className="font-mono">{r.x1Imag}</code>} />}
            {r.x2Imag && <ResultRow label="x₂ (kompleks)" value={<code className="font-mono">{r.x2Imag}</code>} />}
            <ResultRow label="Tepe noktası" value={`(${num(r.tepe.x)}, ${num(r.tepe.y)})`} />
          </div>
        </div>
      </div>
    </div>
  );
}
