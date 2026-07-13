"use client";

import { useState } from "react";
import { senetIskonto, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function VadeFarkiHesaplayici() {
  const [tutar, setTutar] = useState("100000");
  const [oran, setOran] = useState("3.5");
  const [gun, setGun] = useState("90");

  const t = parseFloat(tutar.replace(",", ".")) || 0;
  const o = parseFloat(oran.replace(",", ".")) || 0;
  const g = parseInt(gun, 10) || 0;
  const r = senetIskonto(t, o, g);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Senet Vadeli Tutarı (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} />
        </Field>
        <Field label="Aylık İskonto Oranı (%)">
          <input className="field tabular-nums" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} />
        </Field>
        <Field label="Vade (Gün)">
          <input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Peşin Değer" value={formatTL(r.pesinDeger)} sub={`Vade farkı: ${formatTL(r.vadeFarki)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Vadeli tutar" value={formatTL(t)} />
          <ResultRow label={`Vade farkı (${g} gün)`} value={formatTL(r.vadeFarki)} />
          <ResultRow label="Peşin (bugünkü) değer" value={formatTL(r.pesinDeger)} />
          <ResultRow label="Yıllık gerçek oran" value={`%${formatNumber(r.gerçekOran, 2)}`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Basit iskonto formülü: İskonto = Tutar × Yıllık Oran × Gün / 36500. Ticari uygulamada faturayı erken tahsil etme veya senedi banka iskonto ettirme durumlarında kullanılır.
        </div>
      </div>
    </div>
  );
}
