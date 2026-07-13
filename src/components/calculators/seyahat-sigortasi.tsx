"use client";
import { useState } from "react";
import { seyahatSigortaTahmin, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function SeyahatSigortasiHesaplayici() {
  const [yas, setYas] = useState("30");
  const [gun, setGun] = useState("14");
  const [teminat, setTeminat] = useState("30000");
  const r = seyahatSigortaTahmin(parseFloat(yas) || 0, parseFloat(gun) || 0, parseFloat(teminat) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yaş"><input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} /></Field>
        <Field label="Seyahat Süresi (gün)"><input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} /></Field>
        <Field label="Teminat Tutarı (€)"><input className="field tabular-nums" inputMode="numeric" value={teminat} onChange={(e) => setTeminat(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yaklaşık Prim" value={`€ ${r.prim.toFixed(2)}`} sub={`Şengen vizesi için 30.000 € teminat asgari geçerlidir.`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Prim (€)" value={`€ ${r.prim.toFixed(2)}`} />
          <ResultRow label="Prim (~₺)" value={formatTL(r.prim * 40)} />
        </div>
      </div>
    </div>
  );
}
