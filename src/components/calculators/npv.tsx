"use client";

import { useState } from "react";
import { hesaplaNpv, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function NpvHesaplayici() {
  const [oran, setOran] = useState("15");
  const [giris, setGiris] = useState("-100000, 25000, 30000, 35000, 40000, 45000");

  const o = parseFloat(oran.replace(",", ".")) || 0;
  const akislar = giris.split(/[,;]+/).map((x) => parseFloat(x.trim().replace(",", "."))).filter((n) => Number.isFinite(n));
  const r = hesaplaNpv(akislar, o);

  return (
    <div className="space-y-5">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <Field label="İskonto (Zorunlu Getiri) Oranı (%)">
            <input className="field tabular-nums" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} />
          </Field>
          <Field label="Nakit Akışları" hint="Virgülle ayrılmış — ilk değer t=0 (yatırım, negatif).">
            <textarea className="field h-24 resize-y tabular-nums" value={giris} onChange={(e) => setGiris(e.target.value)} />
          </Field>
        </div>
        <div className="space-y-4">
          <ResultHero
            label={r.kararUygun ? "✅ Yatırım Uygun (NPV>0)" : "❌ Yatırım Uygun Değil"}
            value={formatTL(r.npv)}
            sub={`${akislar.length} dönem · %${formatNumber(o, 2)} iskonto`}
            tone="accent"
          />
          <div className="card p-4">
            <ResultRow label="İlk yatırım" value={formatTL(r.yatirim)} />
            <ResultRow label="Toplam nakit giriş" value={formatTL(r.toplamGiris)} />
            <ResultRow label="NPV" value={formatTL(r.npv)} />
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        NPV &gt; 0 ise proje iskonto oranını aşan getiri sağlar; kabul edilmesi finansal olarak mantıklıdır. NPV &lt; 0 ise reddedin.
      </div>
    </div>
  );
}
