"use client";

import { useState } from "react";
import { desiHesapla, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function DesiHesaplayici() {
  const [en, setEn] = useState("40");
  const [boy, setBoy] = useState("30");
  const [yuk, setYuk] = useState("20");
  const [agirlik, setAgirlik] = useState("5");

  const e = parseFloat(en.replace(",", ".")) || 0;
  const b = parseFloat(boy.replace(",", ".")) || 0;
  const y = parseFloat(yuk.replace(",", ".")) || 0;
  const a = parseFloat(agirlik.replace(",", ".")) || 0;
  const r = desiHesapla(e, b, y, a);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="En (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={en} onChange={(e) => setEn(e.target.value)} />
          </Field>
          <Field label="Boy (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={boy} onChange={(e) => setBoy(e.target.value)} />
          </Field>
          <Field label="Yükseklik (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={yuk} onChange={(e) => setYuk(e.target.value)} />
          </Field>
        </div>
        <Field label="Gerçek Ağırlık (kg)">
          <input className="field tabular-nums" inputMode="decimal" value={agirlik} onChange={(e) => setAgirlik(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Desi (Hacimsel Ağırlık)"
          value={`${formatNumber(r.desi, 2)}`}
          sub={`Faturalanacak ağırlık: ${formatNumber(r.faturalanacakKg, 2)} kg`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Desi (hacimsel kg)" value={`${formatNumber(r.desi, 2)}`} />
          <ResultRow label="Gerçek ağırlık" value={`${formatNumber(a, 2)} kg`} />
          <ResultRow label="Faturalanacak" value={`${formatNumber(r.faturalanacakKg, 2)} kg`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Kargo firmalarının çoğu, desi ile ağırlıktan yüksek olanı esas alır. Formül: (en × boy × yükseklik cm) / 3000.
        </div>
      </div>
    </div>
  );
}
