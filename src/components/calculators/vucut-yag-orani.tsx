"use client";

import { useState } from "react";
import { vucutYagi, type Cinsiyet } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function VucutYagOraniHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [boy, setBoy] = useState("178");
  const [kilo, setKilo] = useState("80");
  const [bel, setBel] = useState("85");
  const [boyun, setBoyun] = useState("38");
  const [kalca, setKalca] = useState("95");

  const b = parseFloat(boy) || 0;
  const k = parseFloat(kilo) || 0;
  const bl = parseFloat(bel) || 0;
  const bn = parseFloat(boyun) || 0;
  const kl = parseFloat(kalca) || 0;
  const gecerli = b > 0 && k > 0 && bl > 0 && bn > 0 && (cinsiyet === "erkek" || kl > 0);
  const r = gecerli ? vucutYagi(cinsiyet, b, k, bl, bn, kl) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Cinsiyet">
          <Segmented
            value={cinsiyet}
            onChange={setCinsiyet}
            options={[
              { label: "Erkek", value: "erkek" },
              { label: "Kadın", value: "kadin" },
            ]}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Boy (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={boy} onChange={(e) => setBoy(e.target.value)} />
          </Field>
          <Field label="Kilo (kg)">
            <input className="field tabular-nums" inputMode="decimal" value={kilo} onChange={(e) => setKilo(e.target.value)} />
          </Field>
          <Field label="Bel çevresi (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={bel} onChange={(e) => setBel(e.target.value)} />
          </Field>
          <Field label="Boyun çevresi (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={boyun} onChange={(e) => setBoyun(e.target.value)} />
          </Field>
          {cinsiyet === "kadin" && (
            <Field label="Kalça çevresi (cm)">
              <input className="field tabular-nums" inputMode="decimal" value={kalca} onChange={(e) => setKalca(e.target.value)} />
            </Field>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Vücut Yağ Oranı"
          value={r ? `%${formatNumber(r.yuzde, 1)}` : "—"}
          sub={r ? r.kategori : "Ölçüleri girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Yağ oranı" value={`%${formatNumber(r.yuzde, 1)}`} />
            <ResultRow label="Yağ kütlesi" value={`${formatNumber(r.yagKg, 1)} kg`} />
            <ResultRow label="Yağsız kütle" value={`${formatNumber(r.yagsizKg, 1)} kg`} />
          </div>
        )}
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          US Navy yöntemi tahminidir. Kesin ölçüm için DEXA veya biyoelektrik empedans önerilir.
        </div>
      </div>
    </div>
  );
}
