"use client";
import { useState } from "react";
import { reelGetiri, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function ReelGetiriHesaplayici() {
  const [nominal, setNominal] = useState("45");
  const [enflasyon, setEnflasyon] = useState("55");
  const r = reelGetiri(parseFloat(nominal) || 0, parseFloat(enflasyon) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Nominal Getiri (%)"><input className="field tabular-nums" inputMode="decimal" value={nominal} onChange={(e) => setNominal(e.target.value)} /></Field>
        <Field label="Enflasyon (%)"><input className="field tabular-nums" inputMode="decimal" value={enflasyon} onChange={(e) => setEnflasyon(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Reel Getiri" value={`%${formatNumber(r.reelYuzde, 2)}`} sub={r.netKayipMi ? "❌ Reel kayıp — satın alma gücü düştü" : "✅ Reel kazanç"} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Nominal" value={`%${nominal}`} />
          <ResultRow label="Enflasyon" value={`%${enflasyon}`} />
          <ResultRow label="Reel getiri" value={`%${formatNumber(r.reelYuzde, 2)}`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Fisher formülü: (1+Nominal) / (1+Enflasyon) − 1. Basitçe fark almak yanıltıcıdır, çünkü enflasyon oranı satın alma gücünü orantılı düşürür.
        </div>
      </div>
    </div>
  );
}
