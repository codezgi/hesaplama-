"use client";
import { useState } from "react";
import { mirasPaylari, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function MirasHesaplayici() {
  const [toplam, setToplam] = useState("1000000");
  const [es, setEs] = useState<"var" | "yok">("var");
  const [cocuk, setCocuk] = useState("2");
  const [ab, setAb] = useState<"var" | "yok">("var");
  const r = mirasPaylari(parseFloat(toplam) || 0, es === "var", parseInt(cocuk) || 0, ab === "var");
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Toplam Miras (₺)"><input className="field tabular-nums" inputMode="numeric" value={toplam} onChange={(e) => setToplam(e.target.value)} /></Field>
        <Field label="Sağ Kalan Eş">
          <Segmented value={es} onChange={setEs} options={[{ label: "Var", value: "var" }, { label: "Yok", value: "yok" }]} />
        </Field>
        <Field label="Çocuk Sayısı"><input className="field tabular-nums" inputMode="numeric" value={cocuk} onChange={(e) => setCocuk(e.target.value)} /></Field>
        {parseInt(cocuk) === 0 && (
          <Field label="Anne / Baba">
            <Segmented value={ab} onChange={setAb} options={[{ label: "Sağ", value: "var" }, { label: "Yok", value: "yok" }]} />
          </Field>
        )}
      </div>
      <div className="space-y-4">
        <ResultHero label="Mirasçı Sayısı" value={`${r.length}`} tone="accent" />
        <div className="card p-4">
          {r.map((p, i) => <ResultRow key={i} label={p.pay} value={formatTL(p.tutar)} />)}
        </div>
      </div>
    </div>
  );
}
