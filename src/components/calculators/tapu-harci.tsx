"use client";

import { useState } from "react";
import { tapuHarci } from "@/lib/hukuki";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function TapuHarciHesaplayici() {
  const [bedel, setBedel] = useState("3000000");
  const b = parseFloat(bedel.replace(",", ".")) || 0;
  const r = tapuHarci(b);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Satış Bedeli (₺)" hint="Tapuda beyan edilecek bedel.">
          <input className="field tabular-nums" inputMode="decimal" value={bedel} onChange={(e) => setBedel(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Toplam Tapu Harcı" value={formatTL(r.toplam)} sub={`Alıcı ve satıcı: her biri ${formatTL(r.aliciPayi)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Satış bedeli" value={formatTL(b)} />
          <ResultRow label="Alıcı payı (%2)" value={formatTL(r.aliciPayi)} />
          <ResultRow label="Satıcı payı (%2)" value={formatTL(r.saticiPayi)} />
          <ResultRow label="Toplam (%4)" value={formatTL(r.toplam)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Konut/işyeri devir tapu harcı yasal olarak alıcı ve satıcıdan ayrı ayrı %2, toplam %4&apos;tür. Ayrıca döner sermaye ücreti ve emlak vergisi ilişik kesme belgesi gerekir.
        </div>
      </div>
    </div>
  );
}
