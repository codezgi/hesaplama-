"use client";
import { useState } from "react";
import { karisimProblemi, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KarisimHesaplayici() {
  const [oran1, setOran1] = useState("40");
  const [oran2, setOran2] = useState("10");
  const [hedef, setHedef] = useState("25");
  const [birinci, setBirinci] = useState("10");
  const r = karisimProblemi(parseFloat(oran1) || 0, parseFloat(oran2) || 0, parseFloat(hedef) || 0, parseFloat(birinci) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Birinci Karışım Oranı (%)"><input className="field tabular-nums" inputMode="decimal" value={oran1} onChange={(e) => setOran1(e.target.value)} /></Field>
        <Field label="Birinci Karışım Miktarı (kg)"><input className="field tabular-nums" inputMode="decimal" value={birinci} onChange={(e) => setBirinci(e.target.value)} /></Field>
        <Field label="İkinci Karışım Oranı (%)"><input className="field tabular-nums" inputMode="decimal" value={oran2} onChange={(e) => setOran2(e.target.value)} /></Field>
        <Field label="Hedef Karışım Oranı (%)"><input className="field tabular-nums" inputMode="decimal" value={hedef} onChange={(e) => setHedef(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="İkinci Karışım Miktarı" value={Number.isFinite(r.ikinciKg) ? `${formatNumber(r.ikinciKg, 2)} kg` : "—"} sub={r.uyari ?? (r.toplamKg ? `Toplam: ${formatNumber(r.toplamKg, 2)} kg` : "")} tone="accent" />
        {Number.isFinite(r.ikinciKg) && (
          <div className="card p-4">
            <ResultRow label="1. karışım" value={`${birinci} kg × %${oran1}`} />
            <ResultRow label="2. karışım (eklenmesi gereken)" value={`${formatNumber(r.ikinciKg, 2)} kg × %${oran2}`} />
            <ResultRow label="Toplam" value={`${formatNumber(r.toplamKg!, 2)} kg × %${hedef}`} />
          </div>
        )}
      </div>
    </div>
  );
}
