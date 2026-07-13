"use client";

import { useState } from "react";
import { alkolPromil, type Cinsiyet } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function AlkolPromilHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [kilo, setKilo] = useState("75");
  const [ml, setMl] = useState("500");
  const [alkolYuzde, setAlkolYuzde] = useState("5");
  const [saat, setSaat] = useState("1");

  const k = parseFloat(kilo.replace(",", ".")) || 0;
  const m = parseFloat(ml.replace(",", ".")) || 0;
  const a = parseFloat(alkolYuzde.replace(",", ".")) || 0;
  const s = parseFloat(saat.replace(",", ".")) || 0;
  const r = alkolPromil(m, a, k, cinsiyet, s);

  const renk = r.arac === "guvenli" ? "primary" : "accent";

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Cinsiyet">
          <Segmented
            value={cinsiyet}
            onChange={setCinsiyet}
            options={[
              { label: "Erkek (r=0,68)", value: "erkek" },
              { label: "Kadın (r=0,55)", value: "kadin" },
            ]}
          />
        </Field>
        <Field label="Kilo (kg)">
          <input className="field tabular-nums" inputMode="decimal" value={kilo} onChange={(e) => setKilo(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="İçki Hacmi (ml)"><input className="field tabular-nums" inputMode="decimal" value={ml} onChange={(e) => setMl(e.target.value)} /></Field>
          <Field label="Alkol Oranı (%)"><input className="field tabular-nums" inputMode="decimal" value={alkolYuzde} onChange={(e) => setAlkolYuzde(e.target.value)} /></Field>
        </div>
        <Field label="İçtikten Sonra Geçen Süre (saat)">
          <input className="field tabular-nums" inputMode="decimal" value={saat} onChange={(e) => setSaat(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Tahmini Kan Alkol Düzeyi"
          value={`${formatNumber(r.promil, 2)} ‰`}
          sub={r.kategori}
          tone={renk as "primary" | "accent"}
        />
        <div className="card p-4">
          <ResultRow label="Promil (g/L)" value={`${formatNumber(r.promil, 3)}`} />
          <ResultRow label="Kategori" value={r.kategori} />
          <ResultRow label="Araç kullanımı" value={r.arac === "guvenli" ? "Güvenli" : r.arac === "sinir" ? "Sınırda" : "YASAK"} />
          <ResultRow label="Ceza notu" value={<span className="text-right text-sm">{r.ceza}</span>} />
        </div>
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">
          ⚠️ Widmark tahmini formüldür. TCK m.179 uyarınca 0,50 ‰ üstü sürüş yasaktır. Alkollüyken kesinlikle direksiyon başına geçmeyin.
        </div>
      </div>
    </div>
  );
}
