"use client";

import { useState } from "react";
import { istatistik } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function IstatistikHesaplayici() {
  const [giris, setGiris] = useState("4, 7, 8, 5, 9, 6, 7, 10, 5, 8");

  const sayilar = giris
    .split(/[\s,;]+/)
    .map((x) => parseFloat(x.replace(",", ".")))
    .filter((n) => Number.isFinite(n));
  const r = istatistik(sayilar);

  const num = (v: number) => (Number.isNaN(v) ? "—" : formatNumber(v, 4));

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sayı Dizisi" hint="Virgül, boşluk veya noktalı virgülle ayırın.">
          <textarea
            className="field h-32 resize-y tabular-nums"
            value={giris}
            onChange={(e) => setGiris(e.target.value)}
          />
        </Field>
        {r && <p className="text-sm text-text-muted">Dizideki sayı sayısı: <strong className="text-text">{r.n}</strong></p>}
      </div>

      <div className="space-y-4">
        {r ? (
          <>
            <ResultHero label="Aritmetik Ortalama" value={num(r.aritmetik)} sub={`Toplam: ${num(r.toplam)}`} tone="accent" />
            <div className="card p-4">
              <ResultRow label="Aritmetik ortalama" value={num(r.aritmetik)} />
              <ResultRow label="Geometrik ortalama" value={num(r.geometrik)} />
              <ResultRow label="Harmonik ortalama" value={num(r.harmonik)} />
              <ResultRow label="Medyan" value={num(r.medyan)} />
              <ResultRow label="Mod" value={r.mod.length ? r.mod.map((v) => formatNumber(v, 2)).join(", ") : "—"} />
              <ResultRow label="Standart sapma" value={num(r.standartSapma)} />
              <ResultRow label="Varyans" value={num(r.varyans)} />
              <ResultRow label="Min / Max" value={`${num(r.min)} / ${num(r.max)}`} />
              <ResultRow label="Aralık (max−min)" value={num(r.aralik)} />
            </div>
          </>
        ) : (
          <div className="card p-6 text-center text-text-muted">Geçerli sayılar girin.</div>
        )}
      </div>
    </div>
  );
}
