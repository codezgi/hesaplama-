"use client";

import { useState } from "react";
import { dogumGunuParadoksu, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function DogumGunuParadoksuHesaplayici() {
  const [n, setN] = useState("23");

  const kisi = parseInt(n, 10) || 0;
  const r = dogumGunuParadoksu(kisi);

  const ilginc = [10, 20, 23, 30, 40, 50, 70, 100, 200];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Grup Büyüklüğü (kişi)">
          <input className="field tabular-nums" inputMode="numeric" value={n} min={1} max={365} onChange={(e) => setN(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Aynı Doğum Günü Olasılığı" value={`%${formatNumber(r.yuzde, 2)}`} sub="En az 2 kişi aynı gün doğmuş olma olasılığı" tone="accent" />
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-text">Ünlü değerler</div>
          {ilginc.map((k) => (
            <ResultRow key={k} label={`${k} kişilik grup`} value={`%${formatNumber(dogumGunuParadoksu(k).yuzde, 2)}`} />
          ))}
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          <strong>Doğum Günü Paradoksu:</strong> Sadece 23 kişi ile olasılık %50&apos;yi geçer. 70 kişide %99.9&apos;dur. İnsanların sezgisiyle çelişen bu sonuç ünlü bir matematik paradoksudur.
        </div>
      </div>
    </div>
  );
}
