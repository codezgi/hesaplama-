"use client";

import { useState } from "react";
import { enflasyonGuncelle, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function EnflasyonHesaplayici() {
  const [tutar, setTutar] = useState("1000");
  const [yuzde, setYuzde] = useState("125");

  const t = parseFloat(tutar.replace(",", ".")) || 0;
  const y = parseFloat(yuzde.replace(",", ".")) || 0;
  const r = enflasyonGuncelle(t, y);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Geçmişteki Tutar (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} />
        </Field>
        <Field label="Kümülatif Enflasyon (%)" hint="Örn. 2 yılda %125 birikmiş enflasyon.">
          <input className="field tabular-nums" inputMode="decimal" value={yuzde} onChange={(e) => setYuzde(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero
          label="Bugünkü Karşılığı"
          value={formatTL(r.bugunku)}
          sub={`Satın alma gücü kaybı: %${formatNumber(r.gercekAzalis, 2)}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Geçmişteki tutar" value={formatTL(t)} />
          <ResultRow label={`Kümülatif enflasyon (%${formatNumber(y, 2)})`} value={`+ ${formatTL(r.artis)}`} />
          <ResultRow label="Bugünkü karşılığı" value={formatTL(r.bugunku)} />
          <ResultRow label="Gerçek satın alma gücü kaybı" value={`%${formatNumber(r.gercekAzalis, 2)}`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          TÜİK TÜFE serisinden kümülatif oranı hesaplayıp girin. Nominal ve reel satın alma gücü farkını gösterir.
        </div>
      </div>
    </div>
  );
}
