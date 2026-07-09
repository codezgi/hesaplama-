"use client";

import { useState } from "react";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

const TARIFE = [
  { key: "sozlesme", label: "Sözleşme (bedelli)", binde: 9.48 },
  { key: "kira", label: "Kira sözleşmesi (yıllık)", binde: 1.89 },
  { key: "maas", label: "Maaş / Ücret bordrosu", binde: 7.59 },
  { key: "ihale", label: "İhale kararı", binde: 5.69 },
  { key: "makbuz", label: "Makbuz / Tediye", binde: 9.48 },
] as const;

export function DamgaVergisiHesaplayici() {
  const [tur, setTur] = useState<typeof TARIFE[number]["key"]>("sozlesme");
  const [tutar, setTutar] = useState("100000");

  const t = parseFloat(tutar.replace(",", ".")) || 0;
  const s = TARIFE.find((x) => x.key === tur) ?? TARIFE[0];
  const damga = (t * s.binde) / 1000;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Belge Türü">
          <select className="field" value={tur} onChange={(e) => setTur(e.target.value as typeof tur)}>
            {TARIFE.map((x) => (
              <option key={x.key} value={x.key}>
                {x.label} — binde {formatNumber(x.binde, 2)}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Belge Bedeli / Tutar (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Damga Vergisi"
          value={formatTL(damga)}
          sub={`Oran: binde ${formatNumber(s.binde, 2)}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Belge bedeli" value={formatTL(t)} />
          <ResultRow label="Oran" value={`binde ${formatNumber(s.binde, 2)}`} />
          <ResultRow label="Damga vergisi" value={formatTL(damga)} />
        </div>
      </div>
    </div>
  );
}
