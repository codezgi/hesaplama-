"use client";

import { useState } from "react";
import { klimaBtu } from "@/lib/yasam";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KlimaBtuHesaplayici() {
  const [m2, setM2] = useState("30");
  const [tavan, setTavan] = useState("2.6");
  const [insan, setInsan] = useState("2");
  const [gunes, setGunes] = useState<"az" | "cok">("az");

  const a = parseFloat(m2.replace(",", ".")) || 0;
  const t = parseFloat(tavan.replace(",", ".")) || 0;
  const i = parseInt(insan, 10) || 0;
  const r = klimaBtu(a, t, i, gunes === "cok");

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Oda Alanı (m²)">
          <input className="field tabular-nums" inputMode="decimal" value={m2} onChange={(e) => setM2(e.target.value)} />
        </Field>
        <Field label="Tavan Yüksekliği (m)">
          <input className="field tabular-nums" inputMode="decimal" value={tavan} onChange={(e) => setTavan(e.target.value)} />
        </Field>
        <Field label="Odada Yaşayan Kişi Sayısı">
          <input className="field tabular-nums" inputMode="numeric" value={insan} onChange={(e) => setInsan(e.target.value)} />
        </Field>
        <Field label="Güneşe Maruziyet">
          <Segmented
            value={gunes}
            onChange={setGunes}
            options={[
              { label: "Az / Kuzey", value: "az" },
              { label: "Çok / Güney (+%15)", value: "cok" },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Önerilen Klima Kapasitesi" value={r.segmentAd} sub={`Hesaplanan: ${formatNumber(r.btu, 0)} BTU`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Hesaplanan BTU" value={`${formatNumber(r.btu, 0)} BTU`} />
          <ResultRow label="Önerilen segment" value={r.segmentAd} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Kaba tahmindir. Cam alanı, izolasyon, bulunduğunuz iklim ve elektronik cihazlar sonucu %20&apos;ye kadar değiştirebilir.
        </div>
      </div>
    </div>
  );
}
