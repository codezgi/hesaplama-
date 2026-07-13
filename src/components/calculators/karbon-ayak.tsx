"use client";
import { useState } from "react";
import { karbonAyakIzi } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KarbonAyakHesaplayici() {
  const [km, setKm] = useState("15000");
  const [kwh, setKwh] = useState("3500");
  const [ucus, setUcus] = useState("5");
  const [et, setEt] = useState(true);
  const r = karbonAyakIzi(parseFloat(km) || 0, parseFloat(kwh) || 0, parseFloat(ucus) || 0, et);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yıllık araç km"><input className="field tabular-nums" inputMode="numeric" value={km} onChange={(e) => setKm(e.target.value)} /></Field>
        <Field label="Yıllık elektrik (kWh)"><input className="field tabular-nums" inputMode="numeric" value={kwh} onChange={(e) => setKwh(e.target.value)} /></Field>
        <Field label="Yıllık uçuş (saat)"><input className="field tabular-nums" inputMode="numeric" value={ucus} onChange={(e) => setUcus(e.target.value)} /></Field>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={et} onChange={(e) => setEt(e.target.checked)} /> Et tüketirim
        </label>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yıllık CO2 Ayak İzi" value={`${formatNumber(r.toplam, 0)} kg`} sub={`Denk gelen ${r.agacIhtiyaci} ağaç dikilmeli`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Araç" value={`${formatNumber(r.arac, 0)} kg`} />
          <ResultRow label="Elektrik" value={`${formatNumber(r.elektrik, 0)} kg`} />
          <ResultRow label="Uçuş" value={`${formatNumber(r.ucus, 0)} kg`} />
          <ResultRow label="Beslenme" value={`${formatNumber(r.beslenme, 0)} kg`} />
          <ResultRow label="Toplam" value={`${formatNumber(r.toplam, 0)} kg CO2`} />
          <ResultRow label="Nötrlemek için gereken ağaç" value={`${r.agacIhtiyaci}`} />
        </div>
      </div>
    </div>
  );
}
