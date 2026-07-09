"use client";

import { useState } from "react";
import { hesaplaKredi, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KrediHesaplayici() {
  const [anapara, setAnapara] = useState("100000");
  const [faiz, setFaiz] = useState("3.5");
  const [vade, setVade] = useState("24");

  const a = parseFloat(anapara.replace(",", ".")) || 0;
  const f = parseFloat(faiz.replace(",", ".")) || 0;
  const v = parseInt(vade) || 0;
  const r = v > 0 ? hesaplaKredi(a, f, v) : { taksit: 0, toplamOdeme: 0, toplamFaiz: 0 };

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kredi Tutarı (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={anapara}
            onChange={(e) => setAnapara(e.target.value)} />
        </Field>
        <Field label="Aylık Faiz Oranı (%)" hint="Bankanızın aylık akdi faiz oranı">
          <input className="field tabular-nums" inputMode="decimal" value={faiz}
            onChange={(e) => setFaiz(e.target.value)} />
        </Field>
        <Field label="Vade (ay)">
          <input className="field tabular-nums" inputMode="numeric" value={vade}
            onChange={(e) => setVade(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Aylık Taksit" value={formatTL(r.taksit)} />
        <div className="card p-4">
          <ResultRow label="Toplam Geri Ödeme" value={formatTL(r.toplamOdeme)} />
          <ResultRow label="Toplam Faiz" value={formatTL(r.toplamFaiz)} />
          <ResultRow label="Anapara" value={formatTL(a)} />
        </div>
      </div>
    </div>
  );
}
