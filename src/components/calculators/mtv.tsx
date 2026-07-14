"use client";

import { useState } from "react";
import { hesaplaMtv } from "@/lib/calc";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function MtvHesaplayici() {
  const [motor, setMotor] = useState("1600");
  const [yas, setYas] = useState("3");

  const m = parseInt(motor, 10) || 0;
  const y = parseInt(yas, 10) || 0;
  const r = hesaplaMtv(m, y);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Motor Silindir Hacmi (cm³)">
          <input className="field tabular-nums" inputMode="numeric" value={motor} onChange={(e) => setMotor(e.target.value)} />
        </Field>
        <Field label="Aracın Yaşı" hint="Tescil tarihinden bu yana geçen yıl.">
          <input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Yıllık MTV"
          value={formatTL(r.yillik)}
          sub={`İki taksit halinde: ${formatTL(r.taksit)} × 2 (Ocak & Temmuz)`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Yıllık MTV" value={formatTL(r.yillik)} />
          <ResultRow label="1. taksit (Ocak)" value={formatTL(r.taksit)} />
          <ResultRow label="2. taksit (Temmuz)" value={formatTL(r.taksit)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          2026 (I sayılı cetvel, otomobil) yaklaşık tarifedir. Kesin tutar Gelir İdaresi&apos;nin yıllık cetveline göre değişebilir.
        </div>
      </div>
    </div>
  );
}
