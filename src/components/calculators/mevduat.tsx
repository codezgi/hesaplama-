"use client";

import { useState } from "react";
import { hesaplaMevduat, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function MevduatHesaplayici() {
  const [anapara, setAnapara] = useState("100000");
  const [oran, setOran] = useState("45");
  const [vade, setVade] = useState(32);
  const [stopaj, setStopaj] = useState("15");

  const a = parseFloat(anapara.replace(",", ".")) || 0;
  const o = parseFloat(oran.replace(",", ".")) || 0;
  const s = parseFloat(stopaj.replace(",", ".")) || 0;
  const r = hesaplaMevduat(a, o, vade, s);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Anapara (₺)">
          <input
            className="field tabular-nums"
            inputMode="decimal"
            value={anapara}
            onChange={(e) => setAnapara(e.target.value)}
          />
        </Field>

        <Field label="Yıllık Brüt Faiz Oranı (%)" hint="Bankanın ilan ettiği yıllık brüt oran.">
          <input
            className="field tabular-nums"
            inputMode="decimal"
            value={oran}
            onChange={(e) => setOran(e.target.value)}
          />
        </Field>

        <Field label="Vade">
          <Segmented
            value={vade}
            onChange={setVade}
            options={[
              { label: "32 gün", value: 32 },
              { label: "3 ay", value: 92 },
              { label: "6 ay", value: 183 },
              { label: "1 yıl", value: 365 },
            ]}
          />
        </Field>

        <Field label="Stopaj Oranı (%)" hint="TL mevduatta vadeye göre değişir; güncel oranı girin.">
          <input
            className="field tabular-nums"
            inputMode="decimal"
            value={stopaj}
            onChange={(e) => setStopaj(e.target.value)}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Vade Sonu Ele Geçen"
          value={formatTL(r.vadeSonuToplam)}
          sub={`Net faiz: ${formatTL(r.netFaiz)}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Anapara" value={formatTL(a)} />
          <ResultRow label="Brüt faiz" value={formatTL(r.brutFaiz)} />
          <ResultRow label={`Stopaj (%${formatNumber(s, 2)})`} value={`− ${formatTL(r.stopaj)}`} />
          <ResultRow label="Net faiz" value={formatTL(r.netFaiz)} />
          <ResultRow label="Net getiri oranı" value={`%${formatNumber(r.netGetiriOrani, 2)}`} />
          <ResultRow label="Aylık net ortalama" value={formatTL(r.aylikNetOrtalama)} />
        </div>
      </div>
    </div>
  );
}
