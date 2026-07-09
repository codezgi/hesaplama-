"use client";

import { useState } from "react";
import { kaskoTahmin } from "@/lib/sigorta";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KaskoHesaplayici() {
  const [deger, setDeger] = useState("500000");
  const d = parseFloat(deger.replace(",", ".")) || 0;
  const r = kaskoTahmin(d);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aracın Piyasa Değeri (₺)" hint="Kasko değer listesi (TSB) referans alınabilir.">
          <input className="field tabular-nums" inputMode="decimal" value={deger} onChange={(e) => setDeger(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Standart Kasko Yıllık Prim (Tahmin)" value={formatTL(r.standart)} sub="Aracın piyasa değerinin ~%3,5'i" tone="accent" />
        <div className="card p-4">
          <ResultRow label="Mini kasko (~%2)" value={formatTL(r.mini)} />
          <ResultRow label="Standart kasko (~%3,5)" value={formatTL(r.standart)} />
          <ResultRow label="Tam kasko (~%5,5)" value={formatTL(r.tam)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Tahminidir. Gerçek prim marka/model, yaş, hasarsızlık indirimi, kullanıcı profili ve ek teminatlara göre değişir.
        </div>
      </div>
    </div>
  );
}
