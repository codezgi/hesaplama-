"use client";
import { useState } from "react";
import { nafakaTahmin, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function NafakaHesaplayici() {
  const [maas, setMaas] = useState("50000");
  const [cocuk, setCocuk] = useState("2");
  const r = nafakaTahmin(parseFloat(maas) || 0, parseInt(cocuk) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yükümlü Aylık Brüt Maaş (₺)"><input className="field tabular-nums" inputMode="numeric" value={maas} onChange={(e) => setMaas(e.target.value)} /></Field>
        <Field label="Çocuk Sayısı"><input className="field tabular-nums" inputMode="numeric" value={cocuk} onChange={(e) => setCocuk(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Toplam Aylık Nafaka (Tahmin)" value={formatTL(r.toplamAylik)} sub="Yoksulluk + iştirak" tone="accent" />
        <div className="card p-4">
          <ResultRow label="Yoksulluk nafakası (eş)" value={formatTL(r.yoksullukNafaka)} />
          <ResultRow label="İştirak nafakası (çocuk başı)" value={formatTL(r.istirakNafakasiPerCocuk)} />
          <ResultRow label="Toplam iştirak" value={formatTL(r.istirakToplam)} />
          <ResultRow label="Toplam aylık" value={formatTL(r.toplamAylik)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Tahminidir. Nafaka miktarı hakim tarafından tarafların ekonomik durumu, çocuk sayısı ve ihtiyaçlarına göre belirlenir (TMK m.169, 175, 182).
        </div>
      </div>
    </div>
  );
}
