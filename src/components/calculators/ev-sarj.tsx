"use client";

import { useState } from "react";
import { evSarjMaliyet, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function EvSarjHesaplayici() {
  const [batarya, setBatarya] = useState("70");
  const [mevcut, setMevcut] = useState("20");
  const [hedef, setHedef] = useState("80");
  const [hiz, setHiz] = useState<number>(11);
  const [birim, setBirim] = useState("6.5");

  const b = parseFloat(batarya.replace(",", ".")) || 0;
  const m = parseFloat(mevcut.replace(",", ".")) || 0;
  const h = parseFloat(hedef.replace(",", ".")) || 0;
  const bf = parseFloat(birim.replace(",", ".")) || 0;
  const r = evSarjMaliyet(b, m, h, hiz, bf);

  const saat = Math.floor(r.sarjSuresi);
  const dk = Math.round((r.sarjSuresi - saat) * 60);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Batarya Kapasitesi (kWh)">
          <input className="field tabular-nums" inputMode="decimal" value={batarya} onChange={(e) => setBatarya(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Mevcut şarj %">
            <input className="field tabular-nums" inputMode="numeric" value={mevcut} onChange={(e) => setMevcut(e.target.value)} />
          </Field>
          <Field label="Hedef şarj %">
            <input className="field tabular-nums" inputMode="numeric" value={hedef} onChange={(e) => setHedef(e.target.value)} />
          </Field>
        </div>
        <Field label="Şarj Cihazı Gücü">
          <Segmented
            value={hiz}
            onChange={setHiz}
            options={[
              { label: "Ev 2,3 kW", value: 2.3 },
              { label: "AC 11 kW", value: 11 },
              { label: "AC 22 kW", value: 22 },
              { label: "DC 50 kW", value: 50 },
              { label: "DC 180 kW", value: 180 },
            ]}
          />
        </Field>
        <Field label="Birim Fiyat (₺/kWh)">
          <input className="field tabular-nums" inputMode="decimal" value={birim} onChange={(e) => setBirim(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Şarj Maliyeti" value={formatTL(r.maliyet)} sub={`~ ${saat} sa ${dk} dk`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Gerekli enerji (verim %90 dahil)" value={`${formatNumber(r.gerekenKwh, 2)} kWh`} />
          <ResultRow label="Şarj süresi" value={`${saat} sa ${dk} dk`} />
          <ResultRow label="Toplam maliyet" value={formatTL(r.maliyet)} />
        </div>
      </div>
    </div>
  );
}
