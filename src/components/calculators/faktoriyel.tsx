"use client";

import { useState } from "react";
import { faktoriyel, permutasyon, kombinasyon } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function FaktoriyelHesaplayici() {
  const [mod, setMod] = useState<"fakt" | "perm" | "komb">("fakt");
  const [n, setN] = useState("5");
  const [r, setR] = useState("2");

  const nn = parseInt(n, 10) || 0;
  const rr = parseInt(r, 10) || 0;

  const fmt = (v: number) =>
    Number.isNaN(v) ? "Tanımsız" : v > 1e15 ? v.toExponential(4) : formatNumber(v, 0);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Segmented
          value={mod}
          onChange={setMod}
          options={[
            { label: "Faktöriyel", value: "fakt" },
            { label: "Permütasyon", value: "perm" },
            { label: "Kombinasyon", value: "komb" },
          ]}
        />
        <Field label={mod === "fakt" ? "n (sayı)" : "n (toplam eleman)"}>
          <input className="field tabular-nums" inputMode="numeric" value={n} onChange={(e) => setN(e.target.value)} />
        </Field>
        {mod !== "fakt" && (
          <Field label="r (seçilen)">
            <input className="field tabular-nums" inputMode="numeric" value={r} onChange={(e) => setR(e.target.value)} />
          </Field>
        )}
      </div>

      <div className="space-y-4">
        {mod === "fakt" && (
          <>
            <ResultHero label={`${nn}!`} value={fmt(faktoriyel(nn))} tone="accent" />
            <div className="card p-4">
              <ResultRow label="İşlem" value={`${nn}! = 1 × 2 × … × ${nn}`} />
              <ResultRow label="Sonuç" value={fmt(faktoriyel(nn))} />
            </div>
          </>
        )}
        {mod === "perm" && (
          <>
            <ResultHero label={`P(${nn}, ${rr})`} value={fmt(permutasyon(nn, rr))} tone="accent" />
            <div className="card p-4">
              <ResultRow label="Formül" value={`${nn}! / (${nn}−${rr})!`} />
              <ResultRow label="Sonuç" value={fmt(permutasyon(nn, rr))} />
            </div>
          </>
        )}
        {mod === "komb" && (
          <>
            <ResultHero label={`C(${nn}, ${rr})`} value={fmt(kombinasyon(nn, rr))} tone="accent" />
            <div className="card p-4">
              <ResultRow label="Formül" value={`${nn}! / (${rr}! × (${nn}−${rr})!)`} />
              <ResultRow label="Sonuç" value={fmt(kombinasyon(nn, rr))} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
