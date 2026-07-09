"use client";

import { useState } from "react";
import { daskHesapla, type DaskYapi } from "@/lib/sigorta";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function DaskHesaplayici() {
  const [m2, setM2] = useState("100");
  const [yapi, setYapi] = useState<DaskYapi>("a");
  const [risk, setRisk] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(3);

  const m = parseFloat(m2.replace(",", ".")) || 0;
  const r = daskHesapla(m, yapi, risk);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Brüt Kullanım Alanı (m²)">
          <input className="field tabular-nums" inputMode="decimal" value={m2} onChange={(e) => setM2(e.target.value)} />
        </Field>
        <Field label="Yapı Sınıfı">
          <select className="field" value={yapi} onChange={(e) => setYapi(e.target.value as DaskYapi)}>
            <option value="a">A — Betonarme / çelik</option>
            <option value="b">B — Yığma / kagir</option>
            <option value="c">C — Ahşap / diğer</option>
          </select>
        </Field>
        <Field label="Deprem Risk Bölgesi" hint="1 en riskli, 7 en güvenli (AFAD).">
          <select className="field" value={risk} onChange={(e) => setRisk(Number(e.target.value) as 1)}>
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>{n}. bölge</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Yıllık DASK Primi" value={formatTL(r.yillikPrim)} sub={`Aylık: ${formatTL(r.aylikPrim)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="m² birim fiyat" value={formatTL(r.birimFiyat / 100) + "/m²"} />
          <ResultRow label="Bölge risk çarpanı" value={`× ${r.bolgeCarpani}`} />
          <ResultRow label="Yıllık prim" value={formatTL(r.yillikPrim)} />
          <ResultRow label="Aylık prim" value={formatTL(r.aylikPrim)} />
          <ResultRow label="Azami teminat" value={formatTL(r.ustSinir)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Zorunlu deprem sigortası (DASK) meskenler için yasal zorunludur. Tarifeler 2026 yaklaşık değerlerdir; kesin fiyat sigorta acenteniz veya DASK sisteminden alınabilir.
        </div>
      </div>
    </div>
  );
}
