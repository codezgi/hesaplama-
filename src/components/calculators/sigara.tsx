"use client";

import { useState } from "react";
import { sigaraMaliyet } from "@/lib/yasam";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function SigaraHesaplayici() {
  const [fiyat, setFiyat] = useState("60");
  const [adet, setAdet] = useState("20");

  const f = parseFloat(fiyat.replace(",", ".")) || 0;
  const a = parseFloat(adet.replace(",", ".")) || 0;
  const r = sigaraMaliyet(f, a);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Paket Fiyatı (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={fiyat} onChange={(e) => setFiyat(e.target.value)} />
        </Field>
        <Field label="Günlük Sigara Adedi" hint="1 paket = 20 adet.">
          <input className="field tabular-nums" inputMode="numeric" value={adet} onChange={(e) => setAdet(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Sigaraya Harcadığınız (10 yılda)" value={formatTL(r.onYillikMaliyet)} sub="Bu para birikime yönlense…" tone="accent" />
        <div className="card p-4">
          <ResultRow label="Günlük" value={formatTL(r.gunlukMaliyet)} />
          <ResultRow label="Aylık" value={formatTL(r.aylikMaliyet)} />
          <ResultRow label="Yıllık" value={formatTL(r.yillikMaliyet)} />
          <ResultRow label="10 yıllık toplam" value={formatTL(r.onYillikMaliyet)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Bu tutar, günde 5 dakika &quot;acaba bıraksam mı?&quot; için iyi bir sebep. Bırakma sürecinde ilk yıl ~1.500 saat de kazanırsınız.
        </div>
      </div>
    </div>
  );
}
