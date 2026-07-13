"use client";

import { useState } from "react";
import { bebekUyku } from "@/lib/saglik";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function BebekUykuHesaplayici() {
  const [ay, setAy] = useState("6");

  const a = parseFloat(ay.replace(",", ".")) || 0;
  const r = bebekUyku(a);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Çocuğunuzun Yaşı (ay)" hint="Yenidoğan için 0, 5 yaş için 60 girin.">
          <input className="field tabular-nums" inputMode="decimal" value={ay} onChange={(e) => setAy(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Günlük Önerilen Uyku"
          value={`${r.min}-${r.max} saat`}
          sub={r.aciklama}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Yaş grubu" value={r.aciklama} />
          <ResultRow label="Alt sınır" value={`${r.min} saat`} />
          <ResultRow label="Üst sınır" value={`${r.max} saat`} />
          <ResultRow label="Ortalama" value={`${(r.min + r.max) / 2} saat`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          National Sleep Foundation önerilerine dayanır. Gündüz uyuklamaları toplam süreye dahildir.
        </div>
      </div>
    </div>
  );
}
