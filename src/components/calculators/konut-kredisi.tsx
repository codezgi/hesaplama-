"use client";

import { useState } from "react";
import { hesaplaKredi, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KonutKredisiHesaplayici() {
  const [bedel, setBedel] = useState("3000000");
  const [pesinatYuzde, setPesinatYuzde] = useState("20");
  const [faiz, setFaiz] = useState("2.5");
  const [vade, setVade] = useState(120);

  const b = parseFloat(bedel.replace(",", ".")) || 0;
  const p = parseFloat(pesinatYuzde.replace(",", ".")) || 0;
  const f = parseFloat(faiz.replace(",", ".")) || 0;

  const pesinat = b * (p / 100);
  const krediTutari = Math.max(0, b - pesinat);
  const r = hesaplaKredi(krediTutari, f, vade);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Konut Bedeli (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={bedel} onChange={(e) => setBedel(e.target.value)} />
        </Field>

        <Field label="Peşinat Oranı (%)" hint={`Peşinat: ${formatTL(pesinat)} · Kredi: ${formatTL(krediTutari)}`}>
          <input className="field tabular-nums" inputMode="decimal" value={pesinatYuzde} onChange={(e) => setPesinatYuzde(e.target.value)} />
        </Field>

        <Field label="Aylık Faiz Oranı (%)">
          <input className="field tabular-nums" inputMode="decimal" value={faiz} onChange={(e) => setFaiz(e.target.value)} />
        </Field>

        <Field label="Vade">
          <Segmented
            value={vade}
            onChange={setVade}
            options={[
              { label: "60 ay", value: 60 },
              { label: "120 ay", value: 120 },
              { label: "180 ay", value: 180 },
              { label: "240 ay", value: 240 },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Aylık Taksit" value={formatTL(r.taksit)} sub={`${vade} ay vade`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Peşinat" value={formatTL(pesinat)} />
          <ResultRow label="Kredi tutarı" value={formatTL(krediTutari)} />
          <ResultRow label="Aylık taksit" value={formatTL(r.taksit)} />
          <ResultRow label="Toplam geri ödeme" value={formatTL(r.toplamOdeme)} />
          <ResultRow label="Toplam faiz" value={formatTL(r.toplamFaiz)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Konut değerinin <strong className="text-text">%{formatNumber((krediTutari / (b || 1)) * 100, 0)}</strong>&apos;i kredilendiriliyor. Sonuçlar bilgilendirme amaçlıdır; masraf ve sigortalar dahil değildir.
        </div>
      </div>
    </div>
  );
}
