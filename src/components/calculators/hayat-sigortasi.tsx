"use client";
import { useState } from "react";
import { hayatSigortaTahmin, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function HayatSigortasiHesaplayici() {
  const [teminat, setTeminat] = useState("500000");
  const [yas, setYas] = useState("35");
  const [sigara, setSigara] = useState(false);
  const r = hayatSigortaTahmin(parseFloat(teminat) || 0, parseFloat(yas) || 0, sigara);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Teminat Tutarı (₺)"><input className="field tabular-nums" inputMode="numeric" value={teminat} onChange={(e) => setTeminat(e.target.value)} /></Field>
        <Field label="Yaş"><input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} /></Field>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={sigara} onChange={(e) => setSigara(e.target.checked)} /> Sigara içiyorum
        </label>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yıllık Prim (Tahmin)" value={formatTL(r.yillikPrim)} sub={`Aylık: ${formatTL(r.yillikPrim / 12)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Yıllık prim" value={formatTL(r.yillikPrim)} />
          <ResultRow label="Aylık prim" value={formatTL(r.yillikPrim / 12)} />
          <ResultRow label="20 yıllık toplam prim" value={formatTL(r.yillikPrim * 20)} />
        </div>
      </div>
    </div>
  );
}
