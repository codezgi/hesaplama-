"use client";

import { useState } from "react";
import { suIhtiyaci } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function SuIhtiyaciHesaplayici() {
  const [kilo, setKilo] = useState("75");
  const [aktivite, setAktivite] = useState("30");
  const [iklim, setIklim] = useState<"normal" | "sicak">("normal");

  const k = parseFloat(kilo) || 0;
  const a = parseFloat(aktivite) || 0;
  const litre = k > 0 ? suIhtiyaci(k, a, iklim === "sicak") : 0;
  const bardak = Math.round((litre * 1000) / 250);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kilo (kg)">
          <input className="field tabular-nums" inputMode="decimal" value={kilo} onChange={(e) => setKilo(e.target.value)} />
        </Field>
        <Field label="Günlük Egzersiz (dakika)" hint="Yürüyüş, koşu, spor toplam süresi.">
          <input className="field tabular-nums" inputMode="numeric" value={aktivite} onChange={(e) => setAktivite(e.target.value)} />
        </Field>
        <Field label="İklim">
          <Segmented
            value={iklim}
            onChange={setIklim}
            options={[
              { label: "Normal", value: "normal" },
              { label: "Sıcak / Nemli", value: "sicak" },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Günlük Su İhtiyacı"
          value={`${formatNumber(litre, 2)} L`}
          sub={`Yaklaşık ${bardak} bardak (250 ml)`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Litre" value={`${formatNumber(litre, 2)} L`} />
          <ResultRow label="Mililitre" value={`${formatNumber(litre * 1000, 0)} ml`} />
          <ResultRow label="Bardak (250 ml)" value={`${bardak}`} />
        </div>
      </div>
    </div>
  );
}
