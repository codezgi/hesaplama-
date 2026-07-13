"use client";

import { useState } from "react";
import { hesaplaPmyo } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function PmyoPuanHesaplayici() {
  const [tyt, setTyt] = useState("340");
  const [fiziksel, setFiziksel] = useState("70");
  const [mulakat, setMulakat] = useState("75");

  const t = parseFloat(tyt.replace(",", ".")) || 0;
  const f = parseFloat(fiziksel.replace(",", ".")) || 0;
  const m = parseFloat(mulakat.replace(",", ".")) || 0;
  const r = hesaplaPmyo(t, f, m);
  const n = (v: number) => formatNumber(v, 2);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="TYT Ham Puanı">
          <input className="field tabular-nums" inputMode="decimal" value={tyt} onChange={(e) => setTyt(e.target.value)} />
        </Field>
        <Field label="Fiziksel Yeterlilik Puanı (0-100)">
          <input className="field tabular-nums" inputMode="decimal" value={fiziksel} onChange={(e) => setFiziksel(e.target.value)} />
        </Field>
        <Field label="Mülakat Puanı (0-100)">
          <input className="field tabular-nums" inputMode="decimal" value={mulakat} onChange={(e) => setMulakat(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero
          label="PMYO Yerleştirme Puanı"
          value={n(r.yerlestirmePuan)}
          sub={r.genelBasari}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="TYT ham × %70" value={n(t * 0.7)} />
          <ResultRow label="Fiziksel × %15" value={n(f * 0.15)} />
          <ResultRow label="Mülakat × %15" value={n(m * 0.15)} />
          <ResultRow label="Ort. fiziksel+mülakat" value={n(r.ortalamaFiziksel)} />
          <ResultRow label="Yerleştirme puanı" value={n(r.yerlestirmePuan)} />
        </div>
      </div>
    </div>
  );
}
