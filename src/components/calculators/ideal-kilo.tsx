"use client";

import { useState } from "react";
import { idealKilo, type Cinsiyet } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function IdealKiloHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [boy, setBoy] = useState("178");

  const b = parseFloat(boy.replace(",", ".")) || 0;
  const valid = b >= 120 && b <= 230;
  const r = valid ? idealKilo(b, cinsiyet) : null;
  const kg = (v: number) => `${formatNumber(v, 1)} kg`;

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
        <Field label="Boy (cm)">
          <input className="field tabular-nums" inputMode="numeric" value={boy} onChange={(e) => setBoy(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Ortalama İdeal Kilo"
          value={r ? kg(r.ortalama) : "—"}
          sub={r ? "4 klasik formülün ortalaması" : "Geçerli bir boy girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Devine formülü" value={kg(r.devine)} />
            <ResultRow label="Robinson formülü" value={kg(r.robinson)} />
            <ResultRow label="Miller formülü" value={kg(r.miller)} />
            <ResultRow label="Hamwi formülü" value={kg(r.hamwi)} />
          </div>
        )}
      </div>
    </div>
  );
}
