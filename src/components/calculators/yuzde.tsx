"use client";

import { useState } from "react";
import { yuzdesi, yuzdeDegisim, formatNumber } from "@/lib/calc";
import { ResultHero, Field, Segmented } from "@/components/result";

export function YuzdeHesaplayici() {
  const [mode, setMode] = useState<"yuzdesi" | "degisim">("yuzdesi");

  // Mod 1: X'in %P'si
  const [sayi, setSayi] = useState("250");
  const [yuzde, setYuzde] = useState("18");
  // Mod 2: eski → yeni değişim
  const [eski, setEski] = useState("200");
  const [yeni, setYeni] = useState("250");

  const s = parseFloat(sayi.replace(",", ".")) || 0;
  const y = parseFloat(yuzde.replace(",", ".")) || 0;
  const e = parseFloat(eski.replace(",", ".")) || 0;
  const n = parseFloat(yeni.replace(",", ".")) || 0;

  return (
    <div className="space-y-6">
      <Segmented
        value={mode}
        onChange={setMode}
        options={[
          { label: "Bir sayının yüzdesi", value: "yuzdesi" },
          { label: "Yüzde değişim", value: "degisim" },
        ]}
      />

      {mode === "yuzdesi" ? (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <Field label="Sayı">
              <input className="field tabular-nums" inputMode="decimal" value={sayi}
                onChange={(ev) => setSayi(ev.target.value)} />
            </Field>
            <Field label="Yüzde (%)">
              <input className="field tabular-nums" inputMode="decimal" value={yuzde}
                onChange={(ev) => setYuzde(ev.target.value)} />
            </Field>
          </div>
          <ResultHero
            label={`${formatNumber(s)} sayısının %${formatNumber(y)}'i`}
            value={formatNumber(yuzdesi(s, y))}
            tone="accent"
          />
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <Field label="Eski değer">
              <input className="field tabular-nums" inputMode="decimal" value={eski}
                onChange={(ev) => setEski(ev.target.value)} />
            </Field>
            <Field label="Yeni değer">
              <input className="field tabular-nums" inputMode="decimal" value={yeni}
                onChange={(ev) => setYeni(ev.target.value)} />
            </Field>
          </div>
          <ResultHero
            label="Yüzde değişim"
            value={`${yuzdeDegisim(e, n) >= 0 ? "+" : ""}${formatNumber(yuzdeDegisim(e, n))}%`}
            sub={yuzdeDegisim(e, n) >= 0 ? "Artış" : "Azalış"}
            tone={yuzdeDegisim(e, n) >= 0 ? "accent" : "primary"}
          />
        </div>
      )}
    </div>
  );
}
