"use client";

import { useState } from "react";
import { hesaplaMsu, type MsuGirdi } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bos: MsuGirdi = { turkceD: 28, turkceY: 6, sosyalD: 15, sosyalY: 3, matD: 22, matY: 8, fenD: 15, fenY: 4 };

export function MsuPuanHesaplayici() {
  const [g, setG] = useState<MsuGirdi>(bos);
  const set = (k: keyof MsuGirdi, v: string) => setG({ ...g, [k]: parseInt(v, 10) || 0 });
  const r = hesaplaMsu(g);
  const n = (v: number) => formatNumber(v, 2);

  const bloklar: [string, keyof MsuGirdi, keyof MsuGirdi, number][] = [
    ["Türkçe (40)", "turkceD", "turkceY", 40],
    ["Sosyal (20)", "sosyalD", "sosyalY", 20],
    ["Matematik (40)", "matD", "matY", 40],
    ["Fen (20)", "fenD", "fenY", 20],
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {bloklar.map(([ad, dk, yk, mx]) => (
          <div key={ad} className="card p-4">
            <p className="mb-2 text-sm font-semibold text-text">{ad}</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={g[dk]} min={0} max={mx} onChange={(e) => set(dk, e.target.value)} /></Field>
              <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={g[yk]} min={0} max={mx} onChange={(e) => set(yk, e.target.value)} /></Field>
            </div>
          </div>
        ))}
      </div>
      <ResultHero label="Tahmini MSÜ Puanı" value={n(r.hamPuan)} sub={`Toplam net: ${n(r.toplamNet)}`} tone="accent" />
      <div className="card p-4">
        <ResultRow label="Toplam net" value={n(r.toplamNet)} />
        <ResultRow label="Tahmini puan" value={n(r.hamPuan)} />
      </div>
    </div>
  );
}
