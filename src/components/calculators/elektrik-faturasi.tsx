"use client";

import { useState } from "react";
import { hesaplaElektrik, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function ElektrikFaturasiHesaplayici() {
  const [kwh, setKwh] = useState("230");
  const [enerji, setEnerji] = useState("2.40");
  const [dagitim, setDagitim] = useState("1.10");

  const k = parseFloat(kwh.replace(",", ".")) || 0;
  const e = parseFloat(enerji.replace(",", ".")) || 0;
  const d = parseFloat(dagitim.replace(",", ".")) || 0;
  const r = hesaplaElektrik(k, e, d);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Tüketim (kWh)" hint="Faturadaki toplam tüketim.">
          <input className="field tabular-nums" inputMode="decimal" value={kwh} onChange={(e) => setKwh(e.target.value)} />
        </Field>

        <Field label="Enerji Birim Fiyatı (₺/kWh)" hint="Faturadaki aktif enerji birim fiyatı.">
          <input className="field tabular-nums" inputMode="decimal" value={enerji} onChange={(e) => setEnerji(e.target.value)} />
        </Field>

        <Field label="Dağıtım Birim Fiyatı (₺/kWh)" hint="Faturadaki dağıtım bedeli birim fiyatı.">
          <input className="field tabular-nums" inputMode="decimal" value={dagitim} onChange={(e) => setDagitim(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Tahmini Fatura Tutarı" value={formatTL(r.toplam)} sub={`${k} kWh tüketim`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Enerji bedeli" value={formatTL(r.enerjiBedeli)} />
          <ResultRow label="Dağıtım bedeli" value={formatTL(r.dagitimBedeli)} />
          <ResultRow label="Elektrik tüketim vergisi (%5)" value={formatTL(r.btv)} />
          <ResultRow label="Ara toplam" value={formatTL(r.araToplam)} />
          <ResultRow label="KDV (%20)" value={formatTL(r.kdv)} />
          <ResultRow label="Genel toplam" value={formatTL(r.toplam)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Tahminidir. Birim fiyatlar tarifeye ve aboneliğe (mesken/ticarethane, kademe) göre değişir; en doğru sonuç için faturanızdaki birim fiyatları girin.
        </div>
      </div>
    </div>
  );
}
