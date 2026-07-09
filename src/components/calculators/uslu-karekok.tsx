"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function UsluKarekokHesaplayici() {
  const [mod, setMod] = useState<"us" | "kok">("us");
  const [taban, setTaban] = useState("2");
  const [us, setUs] = useState("10");
  const [sayi, setSayi] = useState("144");
  const [derece, setDerece] = useState("2");

  const t = parseFloat(taban.replace(",", ".")) || 0;
  const u = parseFloat(us.replace(",", ".")) || 0;
  const s = parseFloat(sayi.replace(",", ".")) || 0;
  const d = parseFloat(derece.replace(",", ".")) || 2;

  const usSonuc = Math.pow(t, u);
  const kokSonuc = s < 0 && d % 2 === 0 ? NaN : Math.sign(s) * Math.pow(Math.abs(s), 1 / d);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Segmented
          value={mod}
          onChange={setMod}
          options={[
            { label: "Üslü Sayı", value: "us" },
            { label: "Kök", value: "kok" },
          ]}
        />

        {mod === "us" ? (
          <>
            <Field label="Taban">
              <input className="field tabular-nums" inputMode="decimal" value={taban} onChange={(e) => setTaban(e.target.value)} />
            </Field>
            <Field label="Üs (kuvvet)">
              <input className="field tabular-nums" inputMode="decimal" value={us} onChange={(e) => setUs(e.target.value)} />
            </Field>
          </>
        ) : (
          <>
            <Field label="Sayı">
              <input className="field tabular-nums" inputMode="decimal" value={sayi} onChange={(e) => setSayi(e.target.value)} />
            </Field>
            <Field label="Kök Derecesi" hint="2 = karekök, 3 = küpkök …">
              <input className="field tabular-nums" inputMode="decimal" value={derece} onChange={(e) => setDerece(e.target.value)} />
            </Field>
          </>
        )}
      </div>

      <div className="space-y-4">
        {mod === "us" ? (
          <>
            <ResultHero label={`${formatNumber(t, 4)} üzeri ${formatNumber(u, 4)}`} value={formatNumber(usSonuc, 6)} tone="accent" />
            <div className="card p-4">
              <ResultRow label="İşlem" value={`${formatNumber(t, 4)}^${formatNumber(u, 4)}`} />
              <ResultRow label="Sonuç" value={formatNumber(usSonuc, 6)} />
            </div>
          </>
        ) : (
          <>
            <ResultHero label={`${formatNumber(d, 0)}. dereceden kök`} value={Number.isNaN(kokSonuc) ? "Tanımsız" : formatNumber(kokSonuc, 6)} tone="accent" />
            <div className="card p-4">
              <ResultRow label="İşlem" value={`${formatNumber(d, 0)}√${formatNumber(s, 4)}`} />
              <ResultRow label="Sonuç" value={Number.isNaN(kokSonuc) ? "Tanımsız (negatif sayının çift kökü)" : formatNumber(kokSonuc, 6)} />
              {d === 2 && s >= 0 && <ResultRow label="Karesi (doğrulama)" value={formatNumber(kokSonuc * kokSonuc, 4)} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
