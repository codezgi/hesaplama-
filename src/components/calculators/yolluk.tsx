"use client";

import { useState } from "react";
import { yolluk } from "@/lib/maas";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YollukHesaplayici() {
  const [gunluk, setGunluk] = useState("500");
  const [gun, setGun] = useState("5");
  const [konak, setKonak] = useState("2500");
  const [yol, setYol] = useState("1000");

  const g = parseFloat(gunluk.replace(",", ".")) || 0;
  const gn = parseInt(gun, 10) || 0;
  const k = parseFloat(konak.replace(",", ".")) || 0;
  const y = parseFloat(yol.replace(",", ".")) || 0;
  const r = yolluk(g, gn, k, y);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Günlük harcırah (₺)">
            <input className="field tabular-nums" inputMode="decimal" value={gunluk} onChange={(e) => setGunluk(e.target.value)} />
          </Field>
          <Field label="Gün sayısı">
            <input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} />
          </Field>
          <Field label="Konaklama (₺)">
            <input className="field tabular-nums" inputMode="decimal" value={konak} onChange={(e) => setKonak(e.target.value)} />
          </Field>
          <Field label="Yol (₺)">
            <input className="field tabular-nums" inputMode="decimal" value={yol} onChange={(e) => setYol(e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero label="Toplam Harcırah" value={formatTL(r.toplam)} sub={`Gündelik toplamı: ${formatTL(r.gundelikToplam)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label={`Gündelik (${gn} gün × ${formatTL(g)})`} value={formatTL(r.gundelikToplam)} />
          <ResultRow label="Konaklama" value={formatTL(k)} />
          <ResultRow label="Yol gideri" value={formatTL(y)} />
          <ResultRow label="Toplam" value={formatTL(r.toplam)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Kamu görevlilerinde günlük harcırah tutarı 6245 s. Harcırah Kanunu&apos;na göre kadro derecesine göre belirlenir. Özel sektör için işveren tarafından tarif edilir.
        </div>
      </div>
    </div>
  );
}
