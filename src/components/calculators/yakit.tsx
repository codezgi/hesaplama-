"use client";

import { useState } from "react";
import { hesaplaYakitMaliyeti, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YakitHesaplayici() {
  const [mesafe, setMesafe] = useState("500");
  const [tuketim, setTuketim] = useState("7");
  const [fiyat, setFiyat] = useState("43");

  const m = parseFloat(mesafe.replace(",", ".")) || 0;
  const t = parseFloat(tuketim.replace(",", ".")) || 0;
  const f = parseFloat(fiyat.replace(",", ".")) || 0;
  const r = hesaplaYakitMaliyeti(m, t, f);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Mesafe (km)">
          <input className="field tabular-nums" inputMode="decimal" value={mesafe}
            onChange={(e) => setMesafe(e.target.value)} />
        </Field>
        <Field label="Ortalama Tüketim (lt/100km)">
          <input className="field tabular-nums" inputMode="decimal" value={tuketim}
            onChange={(e) => setTuketim(e.target.value)} />
        </Field>
        <Field label="Yakıt Fiyatı (₺/lt)">
          <input className="field tabular-nums" inputMode="decimal" value={fiyat}
            onChange={(e) => setFiyat(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Toplam Yakıt Maliyeti" value={formatTL(r.maliyet)} />
        <div className="card p-4">
          <ResultRow label="Gereken Yakıt" value={`${formatNumber(r.toplamLitre, 1)} lt`} />
          <ResultRow label="Km Başına Maliyet" value={formatTL(m > 0 ? r.maliyet / m : 0)} />
        </div>
      </div>
    </div>
  );
}
