"use client";

import { useState } from "react";
import { hesaplaAyt, type AytGirdi, type AytTur } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

const bos: AytGirdi = {
  matD: 20, matY: 8, fizikD: 6, fizikY: 3, kimyaD: 5, kimyaY: 2, biyoD: 5, biyoY: 2,
  edebiyatD: 12, edebiyatY: 5, tarih1D: 5, tarih1Y: 2, cografya1D: 3, cografya1Y: 1,
  tarih2D: 5, tarih2Y: 2, cografya2D: 5, cografya2Y: 2, felsefeD: 6, felsefeY: 2, dinD: 3, dinY: 1,
};

export function AytPuanHesaplayici() {
  const [g, setG] = useState<AytGirdi>(bos);
  const [tur, setTur] = useState<AytTur>("sayisal");
  const [tytHam, setTytHam] = useState("200");
  const set = (k: keyof AytGirdi, v: string) => setG({ ...g, [k]: parseInt(v, 10) || 0 });

  const r = hesaplaAyt(g, tur, parseFloat(tytHam) || 0);
  const n = (v: number) => formatNumber(v, 2);

  const bloklar: Record<AytTur, [string, keyof AytGirdi, keyof AytGirdi, number][]> = {
    sayisal: [
      ["Matematik (40)", "matD", "matY", 40],
      ["Fizik (14)", "fizikD", "fizikY", 14],
      ["Kimya (13)", "kimyaD", "kimyaY", 13],
      ["Biyoloji (13)", "biyoD", "biyoY", 13],
    ],
    esitAgirlik: [
      ["Matematik (40)", "matD", "matY", 40],
      ["Edebiyat (24)", "edebiyatD", "edebiyatY", 24],
      ["Tarih-1 (10)", "tarih1D", "tarih1Y", 10],
      ["Coğrafya-1 (6)", "cografya1D", "cografya1Y", 6],
    ],
    sozel: [
      ["Edebiyat (24)", "edebiyatD", "edebiyatY", 24],
      ["Tarih-1 (10)", "tarih1D", "tarih1Y", 10],
      ["Coğrafya-1 (6)", "cografya1D", "cografya1Y", 6],
      ["Tarih-2 (11)", "tarih2D", "tarih2Y", 11],
      ["Coğrafya-2 (11)", "cografya2D", "cografya2Y", 11],
      ["Felsefe (12)", "felsefeD", "felsefeY", 12],
      ["Din (6)", "dinD", "dinY", 6],
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Segmented
          value={tur}
          onChange={setTur}
          options={[
            { label: "Sayısal", value: "sayisal" },
            { label: "Eşit Ağırlık", value: "esitAgirlik" },
            { label: "Sözel", value: "sozel" },
          ]}
        />
        <div className="w-40">
          <Field label="TYT ham puan">
            <input className="field tabular-nums" inputMode="decimal" value={tytHam} onChange={(e) => setTytHam(e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {bloklar[tur].map(([ad, dk, yk, mx]) => (
          <div key={ad} className="card p-4">
            <p className="mb-2 text-sm font-semibold text-text">{ad}</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Doğru">
                <input className="field tabular-nums" inputMode="numeric" value={g[dk]} min={0} max={mx} onChange={(e) => set(dk, e.target.value)} />
              </Field>
              <Field label="Yanlış">
                <input className="field tabular-nums" inputMode="numeric" value={g[yk]} min={0} max={mx} onChange={(e) => set(yk, e.target.value)} />
              </Field>
            </div>
          </div>
        ))}
      </div>

      <ResultHero label={`Tahmini ${tur === "sayisal" ? "SAY" : tur === "esitAgirlik" ? "EA" : "SÖZ"} Yerleştirme Puanı`} value={n(r.hamPuan)} sub={`AYT toplam net: ${n(r.toplamNet)}`} tone="accent" />

      <div className="card p-4">
        <ResultRow label="AYT toplam net" value={n(r.toplamNet)} />
        <ResultRow label="TYT ham puan katkısı (%40)" value={n(((parseFloat(tytHam) || 100) - 100) * 0.4)} />
        <ResultRow label="Yerleştirme puanı (tahmini)" value={n(r.hamPuan)} />
      </div>
    </div>
  );
}
