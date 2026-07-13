"use client";
import { useState } from "react";
import { yasProblemi } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YasProblemHesaplayici() {
  const [kat, setKat] = useState("3");
  const [fark, setFark] = useState("20");
  const r = yasProblemi(parseFloat(kat.replace(",", ".")) || 0, parseFloat(fark) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm text-text-muted">Örnek: &quot;Baba yaşı, oğluna göre <strong>3 kat</strong> ve aralarında <strong>20 yaş fark</strong> var.&quot;</p>
        <Field label="Kat Farkı (k)"><input className="field tabular-nums" inputMode="decimal" value={kat} onChange={(e) => setKat(e.target.value)} /></Field>
        <Field label="Yaş Farkı"><input className="field tabular-nums" inputMode="numeric" value={fark} onChange={(e) => setFark(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={r.mesaj ?? "Küçük"} value={r.mesaj ? "—" : `${formatNumber(r.kucuk, 1)} yaş`} sub={r.mesaj ? "" : `Büyük: ${formatNumber(r.buyuk, 1)} yaş`} tone="accent" />
        {!r.mesaj && (
          <div className="card p-4">
            <ResultRow label="Küçük yaş" value={`${formatNumber(r.kucuk, 1)}`} />
            <ResultRow label="Büyük yaş" value={`${formatNumber(r.buyuk, 1)}`} />
            <ResultRow label="Kat" value={`${kat}`} />
            <ResultRow label="Fark" value={`${fark}`} />
          </div>
        )}
      </div>
    </div>
  );
}
