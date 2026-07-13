"use client";
import { useState } from "react";
import { kdvTevkifat, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KdvTevkifatHesaplayici() {
  const [bedel, setBedel] = useState("10000");
  const [oran, setOran] = useState("20");
  const [tev, setTev] = useState<string>("2/10");
  const r = kdvTevkifat(parseFloat(bedel) || 0, parseFloat(oran) || 0, tev);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Mal/Hizmet Bedeli (KDV Hariç, ₺)"><input className="field tabular-nums" inputMode="numeric" value={bedel} onChange={(e) => setBedel(e.target.value)} /></Field>
        <Field label="KDV Oranı (%)"><input className="field tabular-nums" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} /></Field>
        <Field label="Tevkifat Oranı">
          <Segmented value={tev} onChange={setTev} options={[{ label: "2/10", value: "2/10" }, { label: "3/10", value: "3/10" }, { label: "5/10", value: "5/10" }, { label: "7/10", value: "7/10" }, { label: "9/10", value: "9/10" }]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Satıcının Tahsili" value={formatTL(r.saticininTahsili)} sub={`Alıcı devlete: ${formatTL(r.aliciNinDevleteOdedigi)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Toplam KDV" value={formatTL(r.kdv)} />
          <ResultRow label={`Tevkifat (${tev})`} value={formatTL(r.tevkifatTutar)} />
          <ResultRow label="Satıcının aldığı KDV" value={formatTL(r.saticininTahsili)} />
          <ResultRow label="Fatura toplamı" value={formatTL(r.faturaToplam)} />
        </div>
      </div>
    </div>
  );
}
