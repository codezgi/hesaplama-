"use client";
import { useState } from "react";
import { birikimSuresi, formatNumber, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function BirikimSureHesaplayici() {
  const [hedef, setHedef] = useState("1000000");
  const [bas, setBas] = useState("50000");
  const [katki, setKatki] = useState("5000");
  const [faiz, setFaiz] = useState("40");
  const r = birikimSuresi(parseFloat(hedef) || 0, parseFloat(bas) || 0, parseFloat(katki) || 0, parseFloat(faiz) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Hedef Tutar (₺)"><input className="field tabular-nums" inputMode="numeric" value={hedef} onChange={(e) => setHedef(e.target.value)} /></Field>
        <Field label="Başlangıç Anaparası (₺)"><input className="field tabular-nums" inputMode="numeric" value={bas} onChange={(e) => setBas(e.target.value)} /></Field>
        <Field label="Aylık Katkı (₺)"><input className="field tabular-nums" inputMode="numeric" value={katki} onChange={(e) => setKatki(e.target.value)} /></Field>
        <Field label="Yıllık Faiz (%)"><input className="field tabular-nums" inputMode="decimal" value={faiz} onChange={(e) => setFaiz(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Hedefe Ulaşma Süresi" value={`${formatNumber(r.yil, 1)} yıl`} sub={`${formatNumber(r.ay, 0)} ay`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Hedef" value={formatTL(parseFloat(hedef) || 0)} />
          <ResultRow label="Ay olarak" value={formatNumber(r.ay, 0)} />
          <ResultRow label="Yıl olarak" value={formatNumber(r.yil, 1)} />
          <ResultRow label="Aylık katkı" value={formatTL(parseFloat(katki) || 0)} />
        </div>
      </div>
    </div>
  );
}
