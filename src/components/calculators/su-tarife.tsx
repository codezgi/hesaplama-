"use client";
import { useState } from "react";
import { tarifeKademe, SU_TARIFE_KADEMELERI, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function SuTarifeKademeHesaplayici() {
  const [m3, setM3] = useState("25");
  const r = tarifeKademe(parseFloat(m3) || 0, SU_TARIFE_KADEMELERI);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Su Tüketimi (m³)"><input className="field tabular-nums" inputMode="numeric" value={m3} onChange={(e) => setM3(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Kademeli Toplam" value={formatTL(r.toplam)} sub="KDV ve atık su hariç, kademe kırılımlı" tone="accent" />
        <div className="card p-4">
          {r.detay.map((d, i) => (
            <ResultRow key={i} label={`Kademe ${i + 1} (0-${d.esik} m³, ₺${d.birim}/m³)`} value={`${d.miktar.toFixed(1)} m³ × ₺${d.birim} = ${formatTL(d.tutar)}`} />
          ))}
          <ResultRow label="Toplam" value={formatTL(r.toplam)} />
        </div>
      </div>
    </div>
  );
}
