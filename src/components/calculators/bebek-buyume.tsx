"use client";

import { useState } from "react";
import { bebekBuyume, type Cinsiyet } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function BebekBuyumeHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [ay, setAy] = useState("6");
  const [kilo, setKilo] = useState("7.9");
  const [boy, setBoy] = useState("67.6");

  const a = parseFloat(ay.replace(",", ".")) || 0;
  const k = parseFloat(kilo.replace(",", ".")) || 0;
  const b = parseFloat(boy.replace(",", ".")) || 0;
  const gecerli = a >= 0 && a <= 24 && k > 0 && b > 0;
  const r = gecerli ? bebekBuyume(a, cinsiyet, k, b) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Cinsiyet">
          <Segmented
            value={cinsiyet}
            onChange={setCinsiyet}
            options={[
              { label: "Erkek", value: "erkek" },
              { label: "Kız", value: "kadin" },
            ]}
          />
        </Field>
        <Field label="Yaş (ay)" hint="0-24 ay aralığı için P50 değerleri.">
          <input className="field tabular-nums" inputMode="decimal" value={ay} onChange={(e) => setAy(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Kilo (kg)">
            <input className="field tabular-nums" inputMode="decimal" value={kilo} onChange={(e) => setKilo(e.target.value)} />
          </Field>
          <Field label="Boy (cm)">
            <input className="field tabular-nums" inputMode="decimal" value={boy} onChange={(e) => setBoy(e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Kilo Değerlendirmesi"
          value={r?.kiloDurum ?? "—"}
          sub={r ? `Beklenen (P50): ${formatNumber(r.beklenenKilo, 1)} kg` : "Bilgileri girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label={`Beklenen kilo (${a} ay)`} value={`${formatNumber(r.beklenenKilo, 1)} kg`} />
            <ResultRow label="Gerçek kilo" value={`${formatNumber(k, 1)} kg`} />
            <ResultRow label="Kilo durumu" value={r.kiloDurum} />
            <ResultRow label={`Beklenen boy (${a} ay)`} value={`${formatNumber(r.beklenenBoy, 1)} cm`} />
            <ResultRow label="Gerçek boy" value={`${formatNumber(b, 1)} cm`} />
            <ResultRow label="Boy durumu" value={r.boyDurum} />
          </div>
        )}
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          WHO çocuk gelişim eğrisi P50 (median) değerlerine dayanır. Bireysel değerlendirme için pediatri hekiminize danışın.
        </div>
      </div>
    </div>
  );
}
