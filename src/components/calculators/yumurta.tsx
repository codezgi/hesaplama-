"use client";
import { useState } from "react";
import { yumurtaSuresi } from "@/lib/saglik";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function YumurtaHesaplayici() {
  const [g, setG] = useState("60");
  const [s, setS] = useState<"buzdolabi" | "oda">("oda");
  const [t, setT] = useState<"rafadan" | "orta" | "kati">("orta");
  const r = yumurtaSuresi(parseFloat(g) || 60, s, t);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yumurta Ağırlığı (gram)"><input className="field tabular-nums" inputMode="numeric" value={g} onChange={(e) => setG(e.target.value)} /></Field>
        <Field label="Sıcaklık">
          <Segmented value={s} onChange={setS} options={[{ label: "Oda", value: "oda" }, { label: "Buzdolabı", value: "buzdolabi" }]} />
        </Field>
        <Field label="Pişme Türü">
          <Segmented value={t} onChange={setT} options={[{ label: "Rafadan", value: "rafadan" }, { label: "Orta", value: "orta" }, { label: "Katı", value: "kati" }]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Pişirme Süresi" value={`${r.dakika} dk ${r.saniye} sn`} sub={`Toplam: ${r.toplamSaniye} saniye`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Rafadan" value="4-5 dk (60g, oda)" />
          <ResultRow label="Orta pişmiş" value="6-7 dk (60g, oda)" />
          <ResultRow label="Katı pişmiş" value="9-10 dk (60g, oda)" />
          <ResultRow label="Buzdolabı yumurtası" value="+1 dk ekle" />
        </div>
      </div>
    </div>
  );
}
