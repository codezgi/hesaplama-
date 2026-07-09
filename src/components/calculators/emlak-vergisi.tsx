"use client";

import { useState } from "react";
import { emlakVergisi, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function EmlakVergisiHesaplayici() {
  const [rayic, setRayic] = useState("500000");
  const [tur, setTur] = useState<"konut" | "isyeri" | "arsa" | "arazi">("konut");
  const [buyuksehir, setBuyuksehir] = useState<"evet" | "hayir">("evet");

  const r = parseFloat(rayic.replace(",", ".")) || 0;
  const bs = buyuksehir === "evet";
  const sonuc = emlakVergisi(r, tur, bs);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Rayiç (Vergi) Bedeli (₺)" hint="Belediyenin belirlediği vergi değeri.">
          <input className="field tabular-nums" inputMode="decimal" value={rayic} onChange={(e) => setRayic(e.target.value)} />
        </Field>
        <Field label="Gayrimenkul Türü">
          <select className="field" value={tur} onChange={(e) => setTur(e.target.value as typeof tur)}>
            <option value="konut">Konut</option>
            <option value="isyeri">İşyeri</option>
            <option value="arsa">Arsa</option>
            <option value="arazi">Arazi</option>
          </select>
        </Field>
        <Field label="Büyükşehir sınırı içinde mi?">
          <Segmented
            value={buyuksehir}
            onChange={setBuyuksehir}
            options={[
              { label: "Evet", value: "evet" },
              { label: "Hayır", value: "hayir" },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Yıllık Emlak Vergisi"
          value={formatTL(sonuc.yillik)}
          sub={`Oran: binde ${sonuc.oranBinde}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Rayiç bedel" value={formatTL(r)} />
          <ResultRow label="Uygulanan oran" value={`binde ${sonuc.oranBinde}${bs ? " (büyükşehir 2×)" : ""}`} />
          <ResultRow label="Yıllık vergi" value={formatTL(sonuc.yillik)} />
          <ResultRow label="1. taksit (Mart-Mayıs)" value={formatTL(sonuc.yillik / 2)} />
          <ResultRow label="2. taksit (Kasım)" value={formatTL(sonuc.yillik / 2)} />
        </div>
      </div>
    </div>
  );
}
