"use client";
import { useState } from "react";
import { metinOkumaSuresi } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function MetinOkumaHesaplayici() {
  const [kelime, setKelime] = useState("500");
  const [hiz, setHiz] = useState<"yavas" | "normal" | "hizli">("normal");
  const r = metinOkumaSuresi(parseFloat(kelime) || 0, hiz);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kelime Sayısı"><input className="field tabular-nums" inputMode="numeric" value={kelime} onChange={(e) => setKelime(e.target.value)} /></Field>
        <Field label="Okuma Hızı">
          <Segmented value={hiz} onChange={setHiz} options={[{ label: "Yavaş (150)", value: "yavas" }, { label: "Normal (220)", value: "normal" }, { label: "Hızlı (300)", value: "hizli" }]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Okuma Süresi" value={r.formatli} sub={`${kelime} kelime · ${hiz === "yavas" ? "150" : hiz === "normal" ? "220" : "300"} kelime/dk`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Yavaş okuma (150 kpm)" value={metinOkumaSuresi(parseFloat(kelime) || 0, "yavas").formatli} />
          <ResultRow label="Normal okuma (220 kpm)" value={metinOkumaSuresi(parseFloat(kelime) || 0, "normal").formatli} />
          <ResultRow label="Hızlı okuma (300 kpm)" value={metinOkumaSuresi(parseFloat(kelime) || 0, "hizli").formatli} />
        </div>
      </div>
    </div>
  );
}
