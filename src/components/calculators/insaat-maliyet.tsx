"use client";
import { useState } from "react";
import { insaatMaliyet, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function InsaatMaliyetHesaplayici() {
  const [m2, setM2] = useState("150");
  const [segment, setSegment] = useState<"kaba" | "normal" | "luks">("normal");
  const [birim, setBirim] = useState("");
  const r = insaatMaliyet(parseFloat(m2) || 0, segment, birim ? parseFloat(birim) : undefined);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İnşaat Alanı (m²)"><input className="field tabular-nums" inputMode="numeric" value={m2} onChange={(e) => setM2(e.target.value)} /></Field>
        <Field label="İnşaat Kalite Segmenti">
          <Segmented value={segment} onChange={setSegment} options={[
            { label: "Kaba", value: "kaba" },
            { label: "Normal", value: "normal" },
            { label: "Lüks", value: "luks" },
          ]} />
        </Field>
        <Field label="Özel m² Fiyatı (₺, opsiyonel)"><input className="field tabular-nums" inputMode="numeric" value={birim} onChange={(e) => setBirim(e.target.value)} placeholder={`Varsayılan: ${r.birimTL}`} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Toplam İnşaat Maliyeti" value={formatTL(r.toplamMaliyet)} sub={`${formatTL(r.birimTL)}/m² × ${m2} m²`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Alan" value={`${m2} m²`} />
          <ResultRow label="m² birim fiyat" value={formatTL(r.birimTL)} />
          <ResultRow label="Toplam maliyet" value={formatTL(r.toplamMaliyet)} />
        </div>
      </div>
    </div>
  );
}
