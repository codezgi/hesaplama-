"use client";
import { useState } from "react";
import { hesaplaYksDil } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YksDilHesaplayici() {
  const [dogru, setDogru] = useState("60");
  const [yanlis, setYanlis] = useState("12");
  const [tyt, setTyt] = useState("340");
  const r = hesaplaYksDil(parseInt(dogru) || 0, parseInt(yanlis) || 0, parseFloat(tyt) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="TYT Ham Puanı"><input className="field tabular-nums" inputMode="decimal" value={tyt} onChange={(e) => setTyt(e.target.value)} /></Field>
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Yabancı Dil (80 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={dogru} onChange={(e) => setDogru(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={yanlis} onChange={(e) => setYanlis(e.target.value)} /></Field>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <ResultHero label="YKS Dil Yerleştirme Puanı" value={formatNumber(r.yerlestirme, 2)} sub={`Dil ham: ${formatNumber(r.dilPuan, 2)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Dil net" value={formatNumber(r.dilNet, 2)} />
          <ResultRow label="Dil ham puan" value={formatNumber(r.dilPuan, 2)} />
          <ResultRow label="Yerleştirme (TYT %40 + DİL %60)" value={formatNumber(r.yerlestirme, 2)} />
        </div>
      </div>
    </div>
  );
}
