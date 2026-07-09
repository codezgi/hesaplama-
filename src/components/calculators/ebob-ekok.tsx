"use client";

import { useState } from "react";
import { ebobEkok, asalCarpanlar } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function EbobEkokHesaplayici() {
  const [giris, setGiris] = useState("12, 18, 24");

  const sayilar = giris
    .split(/[\s,;]+/)
    .map((x) => parseInt(x, 10))
    .filter((n) => Number.isFinite(n));
  const r = ebobEkok(sayilar);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sayılar" hint="Virgül veya boşlukla ayırın (ör. 12, 18, 24).">
          <input className="field tabular-nums" value={giris} onChange={(e) => setGiris(e.target.value)} />
        </Field>
        {sayilar.length > 0 && (
          <p className="text-sm text-text-muted">
            Girilen: {sayilar.map((n) => formatNumber(n, 0)).join(", ")}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <ResultHero label="EBOB" value={formatNumber(r.ebob, 0)} />
          <ResultHero label="EKOK" value={formatNumber(r.ekok, 0)} tone="accent" />
        </div>
        {sayilar.length > 0 && (
          <div className="card p-4">
            {sayilar.map((n, i) => {
              const carpanlar = asalCarpanlar(n);
              return (
                <ResultRow
                  key={i}
                  label={`${n} = asal çarpanlar`}
                  value={carpanlar.map((c) => (c.us > 1 ? `${c.carpan}^${c.us}` : `${c.carpan}`)).join(" × ") || "—"}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
