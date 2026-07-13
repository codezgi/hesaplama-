"use client";

import { useState } from "react";
import { cocukBoyTahmini, type Cinsiyet } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function CocukBoyHesaplayici() {
  const [baba, setBaba] = useState("178");
  const [anne, setAnne] = useState("165");
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");

  const b = parseFloat(baba) || 0;
  const a = parseFloat(anne) || 0;
  const r = cocukBoyTahmini(b, a, cinsiyet);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Babanın Boyu (cm)">
          <input className="field tabular-nums" inputMode="numeric" value={baba} onChange={(e) => setBaba(e.target.value)} />
        </Field>
        <Field label="Annenin Boyu (cm)">
          <input className="field tabular-nums" inputMode="numeric" value={anne} onChange={(e) => setAnne(e.target.value)} />
        </Field>
        <Field label="Çocuğun Cinsiyeti">
          <Segmented value={cinsiyet} onChange={setCinsiyet} options={[{ label: "Erkek", value: "erkek" }, { label: "Kız", value: "kadin" }]} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Tahmini Yetişkin Boy" value={`${formatNumber(r.tahmin, 1)} cm`} sub={`Aralık: ${formatNumber(r.altSinir, 1)} - ${formatNumber(r.ustSinir, 1)} cm`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Tahmin (median)" value={`${formatNumber(r.tahmin, 1)} cm`} />
          <ResultRow label="Alt sınır (±8,5)" value={`${formatNumber(r.altSinir, 1)} cm`} />
          <ResultRow label="Üst sınır (±8,5)" value={`${formatNumber(r.ustSinir, 1)} cm`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Mid-parental height (Tanner) yöntemi. Beslenme, hormon dengesi, genetik varyasyonlar bu tahmini etkileyebilir.
        </div>
      </div>
    </div>
  );
}
