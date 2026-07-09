"use client";

import { useState } from "react";
import { amortismanTablosu } from "@/lib/maas";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, Field, Segmented } from "@/components/result";

export function AmortismanHesaplayici() {
  const [bedel, setBedel] = useState("100000");
  const [omur, setOmur] = useState("5");
  const [yontem, setYontem] = useState<"normal" | "azalanBakiye">("normal");

  const b = parseFloat(bedel.replace(",", ".")) || 0;
  const o = parseInt(omur, 10) || 1;
  const tablo = amortismanTablosu(b, o, yontem);

  const yillikNormal = b / o;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Bedel (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={bedel} onChange={(e) => setBedel(e.target.value)} />
        </Field>
        <Field label="Faydalı Ömür (yıl)">
          <input className="field tabular-nums" inputMode="numeric" value={omur} onChange={(e) => setOmur(e.target.value)} />
        </Field>
        <Field label="Yöntem">
          <Segmented
            value={yontem}
            onChange={setYontem}
            options={[
              { label: "Normal", value: "normal" },
              { label: "Azalan Bakiye", value: "azalanBakiye" },
            ]}
          />
        </Field>
      </div>

      <ResultHero
        label={yontem === "normal" ? "Yıllık Amortisman" : "1. Yıl Amortismanı"}
        value={formatTL(tablo[0]?.amortismanPayi ?? 0)}
        sub={`${o} yıl faydalı ömür · ${yontem === "normal" ? "eşit dağılım" : `%${formatNumber(200 / o, 1)} oran`}`}
        tone="accent"
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-text-muted">
              <th className="py-2 pr-3 font-medium">Yıl</th>
              <th className="py-2 pr-3 text-right font-medium">Amortisman Payı</th>
              <th className="py-2 pr-3 text-right font-medium">Birikmiş</th>
              <th className="py-2 text-right font-medium">Net Defter</th>
            </tr>
          </thead>
          <tbody>
            {tablo.map((r) => (
              <tr key={r.yil} className="border-b border-border last:border-0">
                <td className="py-2 pr-3 tabular-nums text-text">{r.yil}</td>
                <td className="py-2 pr-3 text-right tabular-nums font-medium text-text">{formatTL(r.amortismanPayi)}</td>
                <td className="py-2 pr-3 text-right tabular-nums text-text-muted">{formatTL(r.birikmisAmortisman)}</td>
                <td className="py-2 text-right tabular-nums text-text-muted">{formatTL(r.netDeger)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Normal amortismanda bedel eşit dilimlere bölünür. Azalan bakiye yönteminde ilk yıllarda daha yüksek pay ayrılır (oran = 2/faydalı ömür). {yontem === "normal" && <>Yıllık pay: <strong className="text-text">{formatTL(yillikNormal)}</strong></>}
      </div>
    </div>
  );
}
