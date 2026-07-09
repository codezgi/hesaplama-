"use client";

import { useState } from "react";
import { hesaplaLgs, type LgsGirdi } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bos: LgsGirdi = {
  turkceD: 15, turkceY: 5, matD: 10, matY: 8, fenD: 12, fenY: 6,
  inkD: 7, inkY: 2, dinD: 7, dinY: 2, ingD: 7, ingY: 2,
};

export function LgsPuanHesaplayici() {
  const [g, setG] = useState<LgsGirdi>(bos);
  const set = (k: keyof LgsGirdi, v: string) => setG({ ...g, [k]: parseInt(v, 10) || 0 });
  const r = hesaplaLgs(g);
  const n = (v: number) => formatNumber(v, 2);

  const bloklar: [string, keyof LgsGirdi, keyof LgsGirdi, number][] = [
    ["Türkçe (20)", "turkceD", "turkceY", 20],
    ["Matematik (20)", "matD", "matY", 20],
    ["Fen Bilimleri (20)", "fenD", "fenY", 20],
    ["T.C. İnkılâp Tarihi (10)", "inkD", "inkY", 10],
    ["Din Kültürü (10)", "dinD", "dinY", 10],
    ["İngilizce (10)", "ingD", "ingY", 10],
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <ResultHero label="Tahmini LGS Puanı" value={n(r.hamPuan)} sub={`Toplam net: ${n(r.toplamNet)}`} tone="accent" />

      <div className="card p-4">
        <ResultRow label="Toplam net" value={n(r.toplamNet)} />
        <ResultRow label="Tahmini puan" value={n(r.hamPuan)} />
      </div>
    </div>
  );
}
