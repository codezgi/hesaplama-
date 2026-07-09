"use client";

import { useState } from "react";
import { hesaplaBilesikFaiz, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function BilesikFaizHesaplayici() {
  const [anapara, setAnapara] = useState("10000");
  const [oran, setOran] = useState("40");
  const [yil, setYil] = useState("5");
  const [donem, setDonem] = useState(12);

  const a = parseFloat(anapara.replace(",", ".")) || 0;
  const o = parseFloat(oran.replace(",", ".")) || 0;
  const y = parseFloat(yil.replace(",", ".")) || 0;
  const r = hesaplaBilesikFaiz(a, o, y, donem);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Anapara (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={anapara} onChange={(e) => setAnapara(e.target.value)} />
        </Field>
        <Field label="Yıllık Faiz Oranı (%)">
          <input className="field tabular-nums" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} />
        </Field>
        <Field label="Süre (yıl)">
          <input className="field tabular-nums" inputMode="decimal" value={yil} onChange={(e) => setYil(e.target.value)} />
        </Field>
        <Field label="Faiz İşleme Sıklığı">
          <Segmented
            value={donem}
            onChange={setDonem}
            options={[
              { label: "Yıllık", value: 1 },
              { label: "3 Aylık", value: 4 },
              { label: "Aylık", value: 12 },
              { label: "Günlük", value: 365 },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Vade Sonu Değer"
          value={formatTL(r.sonDeger)}
          sub={`Toplam getiri: %${formatNumber(r.getiriOrani, 1)}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Anapara" value={formatTL(r.anapara)} />
          <ResultRow label="Toplam faiz getirisi" value={formatTL(r.toplamFaiz)} />
          <ResultRow label="Vade sonu değer" value={formatTL(r.sonDeger)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Faiz her dönemde anaparaya eklenip birlikte işlediği için getiri, basit faize göre daha yüksektir.
        </div>
      </div>
    </div>
  );
}
