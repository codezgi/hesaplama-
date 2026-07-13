"use client";
import { useState } from "react";
import { klimaSaatlikMaliyet, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KlimaSaatlikHesaplayici() {
  const [btu, setBtu] = useState("12000");
  const [saat, setSaat] = useState("8");
  const [birim, setBirim] = useState("3.5");
  const [sinif, setSinif] = useState<"A+++" | "A++" | "A+" | "A">("A++");
  const r = klimaSaatlikMaliyet(parseFloat(btu) || 0, parseFloat(saat) || 0, parseFloat(birim.replace(",", ".")) || 0, sinif);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Klima Kapasitesi (BTU)"><input className="field tabular-nums" inputMode="numeric" value={btu} onChange={(e) => setBtu(e.target.value)} /></Field>
        <Field label="Enerji Sınıfı">
          <Segmented value={sinif} onChange={setSinif} options={[{ label: "A+++", value: "A+++" }, { label: "A++", value: "A++" }, { label: "A+", value: "A+" }, { label: "A", value: "A" }]} />
        </Field>
        <Field label="Günlük Çalışma (saat)"><input className="field tabular-nums" inputMode="numeric" value={saat} onChange={(e) => setSaat(e.target.value)} /></Field>
        <Field label="Elektrik (₺/kWh)"><input className="field tabular-nums" inputMode="decimal" value={birim} onChange={(e) => setBirim(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Saatlik Maliyet" value={formatTL(r.saatlikMaliyet)} sub={`Aylık: ${formatTL(r.aylikMaliyet)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Saatlik güç çekimi" value={`${formatNumber(r.saatlikKw, 2)} kW`} />
          <ResultRow label="Saatlik maliyet" value={formatTL(r.saatlikMaliyet)} />
          <ResultRow label="Günlük maliyet" value={formatTL(r.saatlikMaliyet * parseFloat(saat))} />
          <ResultRow label="Aylık maliyet" value={formatTL(r.aylikMaliyet)} />
        </div>
      </div>
    </div>
  );
}
