"use client";

import { useState } from "react";
import { gelirVergisiDetay, MAAS } from "@/lib/maas";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function GelirVergisiHesaplayici() {
  const [matrah, setMatrah] = useState("500000");

  const m = parseFloat(matrah.replace(",", ".")) || 0;
  const r = gelirVergisiDetay(m);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <Field label="Yıllık Vergi Matrahı (₺)" hint={`${MAAS.yil} gelir vergisi tarifesi kullanılır.`}>
            <input
              className="field tabular-nums"
              inputMode="decimal"
              value={matrah}
              onChange={(e) => setMatrah(e.target.value)}
            />
          </Field>
        </div>

        <ResultHero
          label="Toplam Gelir Vergisi"
          value={formatTL(r.toplamVergi)}
          sub={`Efektif oran: %${formatNumber(r.ortalamaOran, 2)}`}
          tone="accent"
        />
      </div>

      {r.dilimler.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-text-muted">
                <th className="py-2 pr-3 font-medium">Dilim</th>
                <th className="py-2 pr-3 font-medium">Oran</th>
                <th className="py-2 pr-3 text-right font-medium">Bu dilime düşen</th>
                <th className="py-2 text-right font-medium">Vergi</th>
              </tr>
            </thead>
            <tbody>
              {r.dilimler.map((d, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-2 pr-3 tabular-nums text-text-muted">
                    {formatNumber(d.altSinir, 0)} –{" "}
                    {d.ustSinir === Infinity ? "üzeri" : formatNumber(d.ustSinir, 0)}
                  </td>
                  <td className="py-2 pr-3 font-medium text-text">%{d.oran * 100}</td>
                  <td className="py-2 pr-3 text-right tabular-nums text-text">{formatTL(d.dilimMatrahi)}</td>
                  <td className="py-2 text-right tabular-nums font-semibold text-text">{formatTL(d.dilimVergisi)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="card p-4">
        <ResultRow label="Vergi matrahı" value={formatTL(m)} />
        <ResultRow label="Toplam gelir vergisi" value={formatTL(r.toplamVergi)} />
        <ResultRow label="Vergi sonrası kalan" value={formatTL(m - r.toplamVergi)} />
      </div>
    </div>
  );
}
