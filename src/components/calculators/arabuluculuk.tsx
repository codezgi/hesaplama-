"use client";

import { useState } from "react";
import { arabuluculukUcret } from "@/lib/hukuki";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function ArabuluculukHesaplayici() {
  const [dava, setDava] = useState("500000");
  const d = parseFloat(dava.replace(",", ".")) || 0;
  const r = arabuluculukUcret(d);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Dava Değeri (₺)" hint="Uyuşmazlık konusu tutar.">
          <input className="field tabular-nums" inputMode="decimal" value={dava} onChange={(e) => setDava(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Toplam Arabuluculuk Ücreti" value={formatTL(r.toplamUcret)} sub={`Taraf başı: ${formatTL(r.tarafBasi)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Dava değeri" value={formatTL(d)} />
          <ResultRow label="Uygulanan dilim" value={r.dilim} />
          <ResultRow label="Toplam ücret" value={formatTL(r.toplamUcret)} />
          <ResultRow label="Taraflardan her biri" value={formatTL(r.tarafBasi)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Arabuluculuk Asgari Ücret Tarifesi&apos;ne göre yaklaşık hesaptır. Taraflarca eşit ödenmesi esastır. Anlaşamama halinde 2 saatlik ücret devletçe ödenir.
        </div>
      </div>
    </div>
  );
}
