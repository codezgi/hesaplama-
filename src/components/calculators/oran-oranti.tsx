"use client";

import { useState } from "react";
import { orantiCoz } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function OranOrantiHesaplayici() {
  const [a, setA] = useState("2");
  const [b, setB] = useState("5");
  const [c, setC] = useState("6");

  const av = parseFloat(a.replace(",", ".")) || 0;
  const bv = parseFloat(b.replace(",", ".")) || 0;
  const cv = parseFloat(c.replace(",", ".")) || 0;
  const x = orantiCoz(av, bv, cv);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm text-text-muted">
          <code className="font-mono text-primary">a / b = c / x</code> denkleminde <strong>x</strong>'i çözer.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <Field label="a">
            <input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} />
          </Field>
          <Field label="b">
            <input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} />
          </Field>
          <Field label="c">
            <input className="field tabular-nums" inputMode="decimal" value={c} onChange={(e) => setC(e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="x = (b × c) / a"
          value={Number.isFinite(x) ? formatNumber(x, 4) : "Tanımsız"}
          sub={`${formatNumber(av, 2)} / ${formatNumber(bv, 2)} = ${formatNumber(cv, 2)} / x`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="İşlem" value={`(${formatNumber(bv, 2)} × ${formatNumber(cv, 2)}) / ${formatNumber(av, 2)}`} />
          <ResultRow label="x" value={Number.isFinite(x) ? formatNumber(x, 4) : "Tanımsız"} />
        </div>
      </div>
    </div>
  );
}
