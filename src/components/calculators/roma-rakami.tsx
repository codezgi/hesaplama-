"use client";

import { useState } from "react";
import { sayidanRomaya, romadanSayiya } from "@/lib/matematik";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function RomaRakamiHesaplayici() {
  const [mod, setMod] = useState<"araba" | "roma">("araba");
  const [sayi, setSayi] = useState("2026");
  const [roma, setRoma] = useState("MMXXVI");

  const s = parseInt(sayi, 10);
  const romaSonuc = Number.isFinite(s) ? sayidanRomaya(s) : null;
  const sayiSonuc = romadanSayiya(roma);

  return (
    <div className="space-y-5">
      <Segmented
        value={mod}
        onChange={setMod}
        options={[
          { label: "Sayı → Roma", value: "araba" },
          { label: "Roma → Sayı", value: "roma" },
        ]}
      />

      {mod === "araba" ? (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <Field label="Sayı (1 - 3999)">
              <input
                className="field tabular-nums"
                inputMode="numeric"
                value={sayi}
                onChange={(e) => setSayi(e.target.value)}
              />
            </Field>
          </div>
          <div className="space-y-4">
            <ResultHero
              label="Roma Rakamı"
              value={romaSonuc ?? "Geçersiz"}
              sub={romaSonuc ? `${s} sayısının karşılığı` : "1 ile 3999 arasında bir sayı girin"}
              tone="accent"
            />
            {romaSonuc && (
              <div className="card p-4">
                <ResultRow label="Sayı" value={`${s}`} />
                <ResultRow label="Roma rakamı" value={<span className="font-mono">{romaSonuc}</span>} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <Field label="Roma Rakamı" hint="Sadece I, V, X, L, C, D, M harfleri.">
              <input
                className="field font-mono uppercase"
                value={roma}
                onChange={(e) => setRoma(e.target.value.toUpperCase())}
                spellCheck={false}
              />
            </Field>
          </div>
          <div className="space-y-4">
            <ResultHero
              label="Sayı Karşılığı"
              value={sayiSonuc !== null ? `${sayiSonuc}` : "Geçersiz"}
              sub={sayiSonuc !== null ? `${roma} rakamının karşılığı` : "Geçerli bir roma rakamı girin"}
              tone="accent"
            />
            {sayiSonuc !== null && (
              <div className="card p-4">
                <ResultRow label="Roma rakamı" value={<span className="font-mono">{roma}</span>} />
                <ResultRow label="Sayı" value={`${sayiSonuc}`} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
