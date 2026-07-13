"use client";

import { useState } from "react";
import { hesaplaSuFaturasi, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function SuFaturasiHesaplayici() {
  const [m3, setM3] = useState("15");
  const [birim, setBirim] = useState("25");

  const m = parseFloat(m3.replace(",", ".")) || 0;
  const b = parseFloat(birim.replace(",", ".")) || 0;
  const r = hesaplaSuFaturasi(m, b);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Tüketim (m³)">
          <input className="field tabular-nums" inputMode="decimal" value={m3} onChange={(e) => setM3(e.target.value)} />
        </Field>
        <Field label="Su Birim Fiyatı (₺/m³)" hint="Faturadaki mesken su birim fiyatı.">
          <input className="field tabular-nums" inputMode="decimal" value={birim} onChange={(e) => setBirim(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Tahmini Fatura Tutarı" value={formatTL(r.toplam)} sub={`${m} m³ tüketim`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Su bedeli" value={formatTL(r.suBedeli)} />
          <ResultRow label="Atık su bedeli (%60)" value={formatTL(r.atikSuBedeli)} />
          <ResultRow label="Çevre temizlik vergisi" value={formatTL(r.cevreVergisi)} />
          <ResultRow label="KDV (%20)" value={formatTL(r.kdv)} />
          <ResultRow label="Genel toplam" value={formatTL(r.toplam)} />
        </div>
      </div>
    </div>
  );
}
