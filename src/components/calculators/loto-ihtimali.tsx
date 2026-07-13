"use client";

import { useState } from "react";
import { lotoOlasilik } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

const oyunlar = [
  { key: "sayisal", ad: "Sayısal Loto (6/90)", havuz: 90, secilen: 6 },
  { key: "sansTopu", ad: "Şans Topu (5/34 + 1/14)", havuz: 34, secilen: 5 },
  { key: "onNumara", ad: "On Numara (10/80)", havuz: 80, secilen: 10 },
  { key: "superLoto", ad: "Süper Loto (6/54)", havuz: 54, secilen: 6 },
  { key: "custom", ad: "Özel", havuz: 49, secilen: 6 },
] as const;

export function LotoIhtimaliHesaplayici() {
  const [oyun, setOyun] = useState<typeof oyunlar[number]["key"]>("sayisal");
  const [havuz, setHavuz] = useState("49");
  const [secilen, setSecilen] = useState("6");

  const seciliOyun = oyunlar.find((o) => o.key === oyun);
  const h = oyun === "custom" ? parseInt(havuz, 10) || 0 : (seciliOyun?.havuz ?? 0);
  const s = oyun === "custom" ? parseInt(secilen, 10) || 0 : (seciliOyun?.secilen ?? 0);
  const r = lotoOlasilik(h, s);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Oyun">
          <select className="field" value={oyun} onChange={(e) => setOyun(e.target.value as typeof oyun)}>
            {oyunlar.map((o) => (
              <option key={o.key} value={o.key}>{o.ad}</option>
            ))}
          </select>
        </Field>
        {oyun === "custom" && (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Havuz (N)"><input className="field tabular-nums" inputMode="numeric" value={havuz} onChange={(e) => setHavuz(e.target.value)} /></Field>
            <Field label="Seçilecek (K)"><input className="field tabular-nums" inputMode="numeric" value={secilen} onChange={(e) => setSecilen(e.target.value)} /></Field>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <ResultHero
          label={`Tam Bilme Olasılığı`}
          value={`1 / ${formatNumber(r.tamBilme1e, 0)}`}
          sub={`~ ${r.tamBilmeYuzde.toExponential(2)}%`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Kombinasyon" value={`C(${h}, ${s})`} />
          <ResultRow label="Toplam olası kupon" value={formatNumber(r.tamBilme1e, 0)} />
          <ResultRow label="Tam bilme şansı" value={`${r.tamBilmeYuzde.toExponential(4)}%`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Sadece olasılık hesabıdır — kumar tavsiyesi değildir. Şans oyunları uzun vadede kaybettirir; harcama alışkanlıklarınıza dikkat edin.
        </div>
      </div>
    </div>
  );
}
