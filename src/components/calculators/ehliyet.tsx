"use client";

import { useState } from "react";
import { ehliyetSonuc } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function EhliyetHesaplayici() {
  const [dogru, setDogru] = useState("40");
  const d = parseInt(dogru, 10) || 0;
  const r = ehliyetSonuc(d);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Doğru Cevap Sayısı" hint="50 soruluk teori sınavı — geçme sınırı 35 doğru.">
          <input className="field tabular-nums" inputMode="numeric" value={dogru} min={0} max={50} onChange={(e) => setDogru(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero
          label={r.basarili ? "Başarılı" : "Başarısız"}
          value={`${formatNumber(r.puan, 0)} puan`}
          sub={r.basarili ? "Ehliyet sınavını geçtiniz" : `Geçmek için ${r.kalan} doğru daha lazımdı`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Doğru sayısı" value={`${d} / 50`} />
          <ResultRow label="Puan (100 üzerinden)" value={formatNumber(r.puan, 2)} />
          <ResultRow label="Geçme sınırı" value="35 doğru (%70)" />
          <ResultRow label="Sonuç" value={r.basarili ? "Başarılı" : "Başarısız"} />
        </div>
      </div>
    </div>
  );
}
