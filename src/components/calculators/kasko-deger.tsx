"use client";
import { useState } from "react";
import { kaskoDegerKaybi, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KaskoDegerHesaplayici() {
  const [sifir, setSifir] = useState("1500000");
  const [yas, setYas] = useState("5");
  const [yillik, setYillik] = useState("12");
  const r = kaskoDegerKaybi(parseFloat(sifir) || 0, parseInt(yas) || 0, parseFloat(yillik) || 12);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sıfır Araç Bedeli (₺)"><input className="field tabular-nums" inputMode="decimal" value={sifir} onChange={(e) => setSifir(e.target.value)} /></Field>
        <Field label="Aracın yaşı"><input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} /></Field>
        <Field label="Yıllık değer kaybı (%)"><input className="field tabular-nums" inputMode="decimal" value={yillik} onChange={(e) => setYillik(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Güncel Değer" value={formatTL(r.guncelDeger)} sub={`Kayıp: %${formatNumber(r.degerKaybiOran, 1)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Sıfır bedel" value={formatTL(parseFloat(sifir) || 0)} />
          <ResultRow label="Güncel değer" value={formatTL(r.guncelDeger)} />
          <ResultRow label="Toplam kayıp" value={formatTL(r.toplamKayip)} />
          <ResultRow label="Değer kaybı oranı" value={`%${formatNumber(r.degerKaybiOran, 1)}`} />
        </div>
      </div>
    </div>
  );
}
