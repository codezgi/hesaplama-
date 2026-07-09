"use client";

import { useState } from "react";
import { smmNetBrut } from "@/lib/maas";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function SerbestMeslekHesaplayici() {
  const [net, setNet] = useState("40000");
  const [kdv, setKdv] = useState("20");
  const [stopaj, setStopaj] = useState("20");

  const n = parseFloat(net.replace(",", ".")) || 0;
  const k = parseFloat(kdv.replace(",", ".")) || 0;
  const s = parseFloat(stopaj.replace(",", ".")) || 0;
  const r = smmNetBrut(n, k, s);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Net Ele Geçmesi İstenen Tutar (₺)" hint="Gelir vergisi stopajı ve KDV çıktıktan sonra elde etmek istediğiniz.">
          <input className="field tabular-nums" inputMode="decimal" value={net} onChange={(e) => setNet(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="KDV Oranı (%)">
            <input className="field tabular-nums" inputMode="decimal" value={kdv} onChange={(e) => setKdv(e.target.value)} />
          </Field>
          <Field label="Stopaj Oranı (%)">
            <input className="field tabular-nums" inputMode="decimal" value={stopaj} onChange={(e) => setStopaj(e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero label="Müşteriden Tahsil Edilecek" value={formatTL(r.tahsilEdilen)} sub={`Brüt: ${formatTL(r.brut)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Brüt hizmet bedeli" value={formatTL(r.brut)} />
          <ResultRow label={`KDV (%${k})`} value={formatTL(r.kdv)} />
          <ResultRow label={`GV Stopajı (%${s})`} value={`− ${formatTL(r.gvStopaj)}`} />
          <ResultRow label="Müşteriden tahsil edilecek" value={formatTL(r.tahsilEdilen)} />
          <ResultRow label="Ele geçen net" value={formatTL(r.netEleGecen)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Serbest meslek makbuzunda müşteri KDV&apos;yi öder, stopajı devlete keser. Muhtasar beyanname ile aylık ödenir.
        </div>
      </div>
    </div>
  );
}
