"use client";

import { useState } from "react";
import { belKalcaOrani, type Cinsiyet } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function BelKalcaHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [bel, setBel] = useState("85");
  const [kalca, setKalca] = useState("95");

  const b = parseFloat(bel.replace(",", ".")) || 0;
  const k = parseFloat(kalca.replace(",", ".")) || 0;
  const gecerli = b > 0 && k > 0;
  const r = gecerli ? belKalcaOrani(b, k, cinsiyet) : null;

  const renk = r?.riskSeviyesi === "düşük" ? "primary" : "accent";

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Cinsiyet">
          <Segmented
            value={cinsiyet}
            onChange={setCinsiyet}
            options={[
              { label: "Erkek", value: "erkek" },
              { label: "Kadın", value: "kadin" },
            ]}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Bel çevresi (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={bel} onChange={(e) => setBel(e.target.value)} />
          </Field>
          <Field label="Kalça çevresi (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={kalca} onChange={(e) => setKalca(e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Bel/Kalça Oranı"
          value={r ? formatNumber(r.oran, 2) : "—"}
          sub={r ? r.kategori : "Ölçüleri girin"}
          tone={renk as "primary" | "accent"}
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Oran" value={formatNumber(r.oran, 2)} />
            <ResultRow label="Sağlık kategorisi" value={r.kategori} />
            <ResultRow label="Kardiyovasküler risk" value={r.riskSeviyesi} />
          </div>
        )}
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          WHO eşikleri — Erkek: &lt;0,90 normal, 0,90-1,0 orta, ≥1,0 yüksek risk. Kadın: &lt;0,80 normal, 0,80-0,85 orta, ≥0,85 yüksek risk. BMI ile birlikte değerlendirmek daha güvenlidir.
        </div>
      </div>
    </div>
  );
}
