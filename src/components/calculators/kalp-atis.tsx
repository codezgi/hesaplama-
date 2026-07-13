"use client";

import { useState } from "react";
import { kalpAtisZonlari } from "@/lib/saglik";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KalpAtisHesaplayici() {
  const [yas, setYas] = useState("30");
  const [istirahat, setIstirahat] = useState("65");

  const y = parseInt(yas, 10) || 0;
  const i = parseInt(istirahat, 10) || 0;
  const r = kalpAtisZonlari(y, i);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Yaş">
          <input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} />
        </Field>
        <Field label="İstirahat Kalp Atışı (bpm)" hint="Sabah uyanınca ölçün.">
          <input className="field tabular-nums" inputMode="numeric" value={istirahat} onChange={(e) => setIstirahat(e.target.value)} />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ResultHero label="Maks. Kalp Atışı" value={`${r.maxKah} bpm`} sub="220 − Yaş" tone="accent" />
        <ResultHero label="Rezerv" value={`${r.maxKah - r.istirahat} bpm`} sub="Karvonen rezervi" />
      </div>

      <div className="card p-4">
        <div className="mb-2 text-sm font-semibold text-text">Antrenman Zonları (Karvonen)</div>
        {r.zonlar.map((z) => (
          <ResultRow
            key={z.ad}
            label={<>
              <div className="font-medium text-text">{z.ad}</div>
              <div className="text-xs text-text-muted">{z.aciklama}</div>
            </>}
            value={<span className="tabular-nums text-text">{z.altBpm}-{z.ustBpm} bpm <span className="text-text-muted">({z.altYuzde}-{z.ustYuzde}%)</span></span>}
          />
        ))}
      </div>
    </div>
  );
}
