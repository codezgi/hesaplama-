"use client";
import { useState } from "react";
import { polinomTurev, polinomIntegral, polinomDeger, polinomYazi } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { ResultRow, Field } from "@/components/result";

export function TurevIntegralHesaplayici() {
  const [girdi, setGirdi] = useState("2, -3, 1, 4"); // 4x³ + x² − 3x + 2
  const [x, setX] = useState("1");

  const katsayilar = girdi.split(/[,;]+/).map((s) => parseFloat(s.trim().replace(",", ".")) || 0);
  const turev = polinomTurev(katsayilar);
  const integral = polinomIntegral(katsayilar);
  const xVal = parseFloat(x.replace(",", ".")) || 0;
  const fx = polinomDeger(katsayilar, xVal);
  const fPrimeX = polinomDeger(turev, xVal);

  return (
    <div className="space-y-6">
      <Field label="Polinom katsayıları" hint="Küçük dereceden büyüğe: a₀, a₁, a₂, … Örn: '2, -3, 1' → 2 + (-3)x + x² veya sadece x²−3x+2">
        <input className="field font-mono tabular-nums" value={girdi} onChange={(e) => setGirdi(e.target.value)} />
      </Field>

      <div className="rounded-xl border border-border bg-surface p-4 font-mono">
        <div className="mb-1 text-sm text-text-muted">f(x) =</div>
        <div className="text-lg text-primary">{polinomYazi(katsayilar)}</div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-text">Türev — f&apos;(x)</div>
          <div className="font-mono text-primary">{polinomYazi(turev)}</div>
        </div>
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-text">İntegral — ∫f(x)dx</div>
          <div className="font-mono text-primary">{polinomYazi(integral)} + C</div>
        </div>
      </div>

      <div className="space-y-3">
        <Field label="Nokta değerlendirmesi — x ="><input className="field tabular-nums" inputMode="decimal" value={x} onChange={(e) => setX(e.target.value)} /></Field>
        <div className="card p-4">
          <ResultRow label={`f(${x})`} value={formatNumber(fx, 6)} />
          <ResultRow label={`f'(${x})`} value={formatNumber(fPrimeX, 6)} />
        </div>
      </div>
    </div>
  );
}
