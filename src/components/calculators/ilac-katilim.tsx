"use client";
import { useState } from "react";
import { ilacKatilimi } from "@/lib/saglik";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function IlacKatilimHesaplayici() {
  const [bedel, setBedel] = useState("300");
  const [durum, setDurum] = useState<"aktif" | "emekli">("aktif");
  const b = parseFloat(bedel) || 0;
  const r = ilacKatilimi(b, durum === "emekli");
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İlaç Bedeli (₺)"><input className="field tabular-nums" inputMode="numeric" value={bedel} onChange={(e) => setBedel(e.target.value)} /></Field>
        <Field label="Durum">
          <Segmented value={durum} onChange={setDurum} options={[{ label: "Aktif çalışan (%20)", value: "aktif" }, { label: "Emekli (%10)", value: "emekli" }]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Cepten Ödemeniz Gereken" value={formatTL(r.katilim)} sub={`SGK payı: ${formatTL(r.sgkPay)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="İlaç bedeli" value={formatTL(b)} />
          <ResultRow label={`Katılım payı (%${r.oran})`} value={formatTL(r.katilim)} />
          <ResultRow label="SGK ödediği" value={formatTL(r.sgkPay)} />
        </div>
      </div>
    </div>
  );
}
