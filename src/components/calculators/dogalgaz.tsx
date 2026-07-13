"use client";

import { useState } from "react";
import { hesaplaDogalgazFaturasi, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function DogalgazFaturasiHesaplayici() {
  const [m3, setM3] = useState("100");
  const [birim, setBirim] = useState("2.5");

  const m = parseFloat(m3.replace(",", ".")) || 0;
  const b = parseFloat(birim.replace(",", ".")) || 0;
  const r = hesaplaDogalgazFaturasi(m, b);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Tüketim (m³)">
          <input className="field tabular-nums" inputMode="decimal" value={m3} onChange={(e) => setM3(e.target.value)} />
        </Field>
        <Field label="Birim Fiyat (₺/kWh)" hint="Faturadaki gaz birim fiyatı (yaklaşık 1 m³ ≈ 10,64 kWh).">
          <input className="field tabular-nums" inputMode="decimal" value={birim} onChange={(e) => setBirim(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Tahmini Fatura Tutarı" value={formatTL(r.toplam)} sub={`${formatNumber(r.kwh, 1)} kWh`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Tüketim" value={`${m} m³ = ${formatNumber(r.kwh, 1)} kWh`} />
          <ResultRow label="Gaz bedeli" value={formatTL(r.gazBedeli)} />
          <ResultRow label="Perakende hizmet bedeli" value={formatTL(r.perakendeHizmet)} />
          <ResultRow label="KDV (%20)" value={formatTL(r.kdv)} />
          <ResultRow label="Genel toplam" value={formatTL(r.toplam)} />
        </div>
      </div>
    </div>
  );
}
