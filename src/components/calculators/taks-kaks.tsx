"use client";
import { useState } from "react";
import { taksKaksHesapla, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function TaksKaksHesaplayici() {
  const [arsa, setArsa] = useState("500");
  const [taks, setTaks] = useState("0.30");
  const [kaks, setKaks] = useState("1.20");
  const [emsal, setEmsal] = useState("1.50");
  const a = parseFloat(arsa) || 0;
  const r = taksKaksHesapla(a, parseFloat(taks) || 0, parseFloat(kaks) || 0, parseFloat(emsal) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Arsa Alanı (m²)"><input className="field tabular-nums" inputMode="numeric" value={arsa} onChange={(e) => setArsa(e.target.value)} /></Field>
        <Field label="TAKS (Taban Alanı Katsayısı)"><input className="field tabular-nums" inputMode="decimal" value={taks} onChange={(e) => setTaks(e.target.value)} /></Field>
        <Field label="KAKS (Kat Alanı Katsayısı)"><input className="field tabular-nums" inputMode="decimal" value={kaks} onChange={(e) => setKaks(e.target.value)} /></Field>
        <Field label="Emsal Değeri"><input className="field tabular-nums" inputMode="decimal" value={emsal} onChange={(e) => setEmsal(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Toplam İnşaat Alanı" value={`${formatNumber(r.toplamInsaatAlan, 1)} m²`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Taban alanı" value={`${formatNumber(r.tabanAlan, 1)} m²`} />
          <ResultRow label="Toplam inşaat" value={`${formatNumber(r.toplamInsaatAlan, 1)} m²`} />
          <ResultRow label="Emsal alan" value={`${formatNumber(r.emsalAlan, 1)} m²`} />
        </div>
      </div>
    </div>
  );
}
