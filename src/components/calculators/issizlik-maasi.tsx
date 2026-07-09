"use client";

import { useState } from "react";
import { issizlikMaasi } from "@/lib/maas";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function IssizlikMaasiHesaplayici() {
  const [ort, setOrt] = useState("40000");
  const [prim, setPrim] = useState("900");

  const o = parseFloat(ort.replace(",", ".")) || 0;
  const p = parseFloat(prim.replace(",", ".")) || 0;
  const r = issizlikMaasi(o, p);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Son 4 Ay Brüt Ortalama (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={ort} onChange={(e) => setOrt(e.target.value)} />
        </Field>
        <Field label="Toplam Prim Ödeme Gün Sayısı" hint="Son 3 yılda ≥600 gün ve son 120 gün kesintisiz şart.">
          <input className="field tabular-nums" inputMode="numeric" value={prim} onChange={(e) => setPrim(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label={r.hakKazandiMi ? "Aylık Net Ödenek" : "Hak yok"}
          value={r.hakKazandiMi ? formatTL(r.aylikNet) : "—"}
          sub={r.hakKazandiMi ? `${r.odemeSayisi} ay boyunca` : "En az 600 prim günü gerekir"}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Alt sınır" value={formatTL(r.altSinir)} />
          <ResultRow label="Üst sınır (asgari × 2,5)" value={formatTL(r.ustSinir)} />
          <ResultRow label="Aylık net ödenek" value={formatTL(r.aylikNet)} />
          <ResultRow label="Ödeme süresi" value={`${r.odemeSayisi} ay`} />
          <ResultRow label="Toplam ödeme" value={formatTL(r.toplamOdeme)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Ödeme süresi: 600 gün→6 ay, 900 gün→8 ay, 1080+ gün→10 ay. Brüt ortalama × %40 esas alınır; alt-üst sınırlar arasında sabitlenir.
        </div>
      </div>
    </div>
  );
}
