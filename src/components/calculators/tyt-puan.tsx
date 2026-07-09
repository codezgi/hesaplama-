"use client";

import { useState } from "react";
import { hesaplaTyt, type TytGirdi } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bosGirdi: TytGirdi = {
  turkceD: 30, turkceY: 5,
  sosyalD: 15, sosyalY: 5,
  matD: 20, matY: 8,
  fenD: 15, fenY: 5,
};

export function TytPuanHesaplayici() {
  const [g, setG] = useState<TytGirdi>(bosGirdi);
  const set = (k: keyof TytGirdi, v: string) => setG({ ...g, [k]: parseInt(v, 10) || 0 });

  const r = hesaplaTyt(g);
  const n = (v: number) => formatNumber(v, 2);

  const bloklar: [string, keyof TytGirdi, keyof TytGirdi, number][] = [
    ["Türkçe (40 soru)", "turkceD", "turkceY", 40],
    ["Sosyal Bilimler (20 soru)", "sosyalD", "sosyalY", 20],
    ["Matematik (40 soru)", "matD", "matY", 40],
    ["Fen Bilimleri (20 soru)", "fenD", "fenY", 20],
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {bloklar.map(([ad, dk, yk, mx]) => (
          <div key={ad} className="card p-4">
            <p className="mb-2 text-sm font-semibold text-text">{ad}</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Doğru">
                <input className="field tabular-nums" inputMode="numeric" value={g[dk]} min={0} max={mx} onChange={(e) => set(dk, e.target.value)} />
              </Field>
              <Field label="Yanlış">
                <input className="field tabular-nums" inputMode="numeric" value={g[yk]} min={0} max={mx} onChange={(e) => set(yk, e.target.value)} />
              </Field>
            </div>
          </div>
        ))}
      </div>

      <ResultHero label="Tahmini TYT Ham Puanı" value={n(r.hamPuan)} sub={`Toplam net: ${n(r.toplamNet)}`} tone="accent" />

      <div className="card p-4">
        <ResultRow label="Türkçe net" value={n(r.turkceNet)} />
        <ResultRow label="Sosyal net" value={n(r.sosyalNet)} />
        <ResultRow label="Matematik net" value={n(r.matNet)} />
        <ResultRow label="Fen net" value={n(r.fenNet)} />
        <ResultRow label="Toplam net" value={n(r.toplamNet)} />
        <ResultRow label="Tahmini ham puan" value={n(r.hamPuan)} />
      </div>
    </div>
  );
}
