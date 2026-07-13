"use client";

import { useState } from "react";
import { kiraArtis } from "@/lib/hukuki";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KiraArtisHesaplayici() {
  const [kira, setKira] = useState("15000");
  const [tufe, setTufe] = useState("55");
  const [talep, setTalep] = useState("55");

  const k = parseFloat(kira.replace(",", ".")) || 0;
  const t = parseFloat(tufe.replace(",", ".")) || 0;
  const tp = parseFloat(talep.replace(",", ".")) || 0;
  const r = kiraArtis(k, t, tp);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Mevcut Aylık Kira (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={kira} onChange={(e) => setKira(e.target.value)} />
        </Field>
        <Field label="TÜFE 12 Aylık Ortalama (%)" hint="TÜİK aylık verisinden alın.">
          <input className="field tabular-nums" inputMode="decimal" value={tufe} onChange={(e) => setTufe(e.target.value)} />
        </Field>
        <Field label="Mal Sahibinin Talep Ettiği Artış (%)">
          <input className="field tabular-nums" inputMode="decimal" value={talep} onChange={(e) => setTalep(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Ödenecek Yeni Kira" value={formatTL(r.yeniKira)} sub={`Uygulanan oran: %${formatNumber(r.uygulananOran, 2)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Mevcut kira" value={formatTL(k)} />
          <ResultRow label="TÜFE tavanı" value={`%${formatNumber(t, 2)}`} />
          <ResultRow label="Talep edilen" value={`%${formatNumber(tp, 2)}`} />
          <ResultRow label="Uygulanan oran (yasal min)" value={`%${formatNumber(r.uygulananOran, 2)}`} />
          <ResultRow label="Aylık artış tutarı" value={formatTL(r.artis)} />
          <ResultRow label="Yasal maksimum kira" value={formatTL(r.yasalTavan)} />
          <ResultRow label="Yeni kira" value={formatTL(r.yeniKira)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          TBK m.344: Konut kira artışı TÜFE 12 aylık ortalamayı aşamaz — sözleşmede daha yüksek yazsa dahi geçersizdir.
        </div>
      </div>
    </div>
  );
}
