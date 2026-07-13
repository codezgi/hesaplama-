"use client";
import { useState } from "react";
import { otoparkUcret, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";
export function OtoparkHesaplayici() {
  const [saat, setSaat] = useState("4");
  const [ilk, setIlk] = useState("40");
  const [sonra, setSonra] = useState("15");
  const [gun, setGun] = useState("150");
  const r = otoparkUcret(parseFloat(saat.replace(",", ".")) || 0, parseFloat(ilk) || 0, parseFloat(sonra) || 0, parseFloat(gun) || Infinity);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Kalış Süresi (saat)"><input className="field tabular-nums" inputMode="decimal" value={saat} onChange={(e) => setSaat(e.target.value)} /></Field>
    <Field label="İlk Saat Ücreti (₺)"><input className="field tabular-nums" inputMode="numeric" value={ilk} onChange={(e) => setIlk(e.target.value)} /></Field>
    <Field label="Sonraki Saat (₺)"><input className="field tabular-nums" inputMode="numeric" value={sonra} onChange={(e) => setSonra(e.target.value)} /></Field>
    <Field label="Günlük Tavan (₺)"><input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Ödenecek" value={formatTL(r.toplam)} sub={`${saat} saat için`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="İlk saat" value={formatTL(parseFloat(ilk) || 0)} />
      <ResultRow label="Ek saatler" value={formatTL(r.toplam - (parseFloat(ilk) || 0))} />
      <ResultRow label="Toplam" value={formatTL(r.toplam)} />
    </div>
  </div></div>;
}
