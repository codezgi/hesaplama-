"use client";

import { useState } from "react";
import { hesaplaKdv, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KdvHesaplayici() {
  const [amount, setAmount] = useState("1000");
  const [rate, setRate] = useState(20);
  const [includes, setIncludes] = useState<"haric" | "dahil">("haric");

  const a = parseFloat(amount.replace(",", ".")) || 0;
  const r = hesaplaKdv(a, rate, includes === "dahil");

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Tutar (₺)">
          <input
            className="field tabular-nums"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
          />
        </Field>

        <Field label="KDV Oranı">
          <Segmented
            value={rate}
            onChange={setRate}
            options={[
              { label: "%1", value: 1 },
              { label: "%10", value: 10 },
              { label: "%20", value: 20 },
            ]}
          />
        </Field>

        <Field label="Girilen tutar">
          <Segmented
            value={includes}
            onChange={setIncludes}
            options={[
              { label: "KDV Hariç", value: "haric" },
              { label: "KDV Dahil", value: "dahil" },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="KDV Tutarı" value={formatTL(r.vat)} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Matrah (KDV hariç)" value={formatTL(r.base)} />
          <ResultRow label={`KDV (%${rate})`} value={formatTL(r.vat)} />
          <ResultRow label="Genel Toplam (KDV dahil)" value={formatTL(r.total)} />
        </div>
      </div>
    </div>
  );
}
