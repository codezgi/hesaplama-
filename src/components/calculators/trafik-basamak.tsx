"use client";

import { useState } from "react";
import { TRAFIK_BASAMAK, trafikBasamakPrimi } from "@/lib/sigorta";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function TrafikBasamakHesaplayici() {
  const [baz, setBaz] = useState("5000");
  const [basamak, setBasamak] = useState(4);

  const b = parseFloat(baz.replace(",", ".")) || 0;
  const prim = trafikBasamakPrimi(b, basamak);
  const secili = TRAFIK_BASAMAK.find((x) => x.no === basamak);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Baz Prim (₺)" hint="Sigorta şirketinin belirlediği başlangıç primi.">
          <input className="field tabular-nums" inputMode="decimal" value={baz} onChange={(e) => setBaz(e.target.value)} />
        </Field>
        <Field label="Basamak (Hasarsızlık İndirimi)">
          <select className="field" value={basamak} onChange={(e) => setBasamak(Number(e.target.value))}>
            {TRAFIK_BASAMAK.map((x) => (
              <option key={x.no} value={x.no}>{x.ad}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Ödenecek Prim" value={formatTL(prim)} sub={secili?.ad} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Baz prim" value={formatTL(b)} />
          <ResultRow label="Uygulanan katsayı" value={`× ${formatNumber(secili?.oran ?? 1, 2)}`} />
          <ResultRow label="Ödenecek prim" value={formatTL(prim)} />
          <ResultRow label="Baza göre fark" value={formatTL(prim - b)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Trafik sigortası basamak sistemi: hasarsız yıllar için basamak düşer (indirim), hasar durumunda yükselir (artırım). 4. basamak yeni araç veya sıfırlanan poliçedir.
        </div>
      </div>
    </div>
  );
}
