"use client";

import { useState } from "react";
import { faturaHesapla, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function FaturaHesaplayici() {
  const [bedel, setBedel] = useState("10000");
  const [kdv, setKdv] = useState("20");
  const [stopaj, setStopaj] = useState("0");
  const [damga, setDamga] = useState("0.759");

  const b = parseFloat(bedel.replace(",", ".")) || 0;
  const k = parseFloat(kdv.replace(",", ".")) || 0;
  const s = parseFloat(stopaj.replace(",", ".")) || 0;
  const d = parseFloat(damga.replace(",", ".")) || 0;
  const r = faturaHesapla(b, k, s, d);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Net Mal/Hizmet Bedeli (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={bedel} onChange={(e) => setBedel(e.target.value)} />
        </Field>
        <Field label="KDV Oranı (%)">
          <input className="field tabular-nums" inputMode="decimal" value={kdv} onChange={(e) => setKdv(e.target.value)} />
        </Field>
        <Field label="Stopaj (%)" hint="Serbest meslek makbuzu: %20. Kira: %20. Diğer: 0.">
          <input className="field tabular-nums" inputMode="decimal" value={stopaj} onChange={(e) => setStopaj(e.target.value)} />
        </Field>
        <Field label="Damga Vergisi (%)">
          <input className="field tabular-nums" inputMode="decimal" value={damga} onChange={(e) => setDamga(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Tahsil Edilecek Tutar" value={formatTL(r.tahsilTutar)} sub={`Fatura toplamı: ${formatTL(r.toplamFatura)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Net bedel" value={formatTL(r.netMalHizmet)} />
          <ResultRow label={`KDV (%${k})`} value={`+ ${formatTL(r.kdvTutar)}`} />
          <ResultRow label="Fatura toplamı (KDV dahil)" value={formatTL(r.toplamFatura)} />
          {s > 0 && <ResultRow label={`Stopaj kesintisi (%${s})`} value={`− ${formatTL(r.stopajTutar)}`} />}
          {d > 0 && <ResultRow label={`Damga vergisi (%${d})`} value={`− ${formatTL(r.damgaTutar)}`} />}
          <ResultRow label="Müşteriden tahsil" value={formatTL(r.tahsilTutar)} />
        </div>
      </div>
    </div>
  );
}
