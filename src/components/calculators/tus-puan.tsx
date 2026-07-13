"use client";

import { useState } from "react";
import { hesaplaTus, type TusGirdi } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bos: TusGirdi = { tbtD: 80, tbtY: 20, ktbtD: 75, ktbtY: 25 };

export function TusPuanHesaplayici() {
  const [g, setG] = useState<TusGirdi>(bos);
  const set = (k: keyof TusGirdi, v: string) => setG({ ...g, [k]: parseInt(v, 10) || 0 });
  const r = hesaplaTus(g);
  const n = (v: number) => formatNumber(v, 2);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Temel Bilimler (120 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={g.tbtD} onChange={(e) => set("tbtD", e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={g.tbtY} onChange={(e) => set("tbtY", e.target.value)} /></Field>
          </div>
        </div>
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Klinik Bilimler (120 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={g.ktbtD} onChange={(e) => set("ktbtD", e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={g.ktbtY} onChange={(e) => set("ktbtY", e.target.value)} /></Field>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <ResultHero label="TBT Puan" value={n(r.tbtPuan)} />
        <ResultHero label="KTBT Puan" value={n(r.ktbtPuan)} />
        <ResultHero label="K.Puan (%50-%50)" value={n(r.kPuan)} tone="accent" />
      </div>

      <div className="card p-4">
        <ResultRow label="TBT net" value={n(r.tbtNet)} />
        <ResultRow label="KTBT net" value={n(r.ktbtNet)} />
      </div>

      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        TUS puanı ÖSYM tarafından z-skor tabanlı hesaplanır; bu araç yaklaşık net-baz formül kullanır. Kesin puan için resmi sınav sonucu esastır.
      </div>
    </div>
  );
}
