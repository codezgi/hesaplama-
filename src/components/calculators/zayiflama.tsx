"use client";
import { useState } from "react";
import { zayiflamaSure } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function ZayiflamaHesaplayici() {
  const [mevcut, setMevcut] = useState("85");
  const [hedef, setHedef] = useState("75");
  const [haftalik, setHaftalik] = useState("0.5");
  const m = parseFloat(mevcut) || 0;
  const h = parseFloat(hedef) || 0;
  const hk = parseFloat(haftalik.replace(",", ".")) || 0;
  const r = zayiflamaSure(m, h, hk);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Mevcut Kilo (kg)"><input className="field tabular-nums" inputMode="decimal" value={mevcut} onChange={(e) => setMevcut(e.target.value)} /></Field>
        <Field label="Hedef Kilo (kg)"><input className="field tabular-nums" inputMode="decimal" value={hedef} onChange={(e) => setHedef(e.target.value)} /></Field>
        <Field label="Haftalık Kayıp Hedefi (kg)" hint="Sağlıklı: 0,5-1 kg/hafta">
          <input className="field tabular-nums" inputMode="decimal" value={haftalik} onChange={(e) => setHaftalik(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Hedefe Süre" value={r.hafta > 0 ? `${formatNumber(r.hafta, 1)} hafta` : "—"} sub={r.mesaj} tone="accent" />
        {r.hafta > 0 && (
          <div className="card p-4">
            <ResultRow label="Kaybedilecek" value={`${formatNumber(m - h, 1)} kg`} />
            <ResultRow label="Süre (hafta)" value={formatNumber(r.hafta, 1)} />
            <ResultRow label="Süre (ay)" value={formatNumber(r.ay, 1)} />
            <ResultRow label="Günlük kalori açığı" value="~500 kcal (500g/hafta için)" />
          </div>
        )}
      </div>
    </div>
  );
}
