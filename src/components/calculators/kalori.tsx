"use client";

import { useState } from "react";
import { hesaplaKalori, AKTIVITE, formatNumber, type Cinsiyet } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KaloriHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [yas, setYas] = useState("28");
  const [boy, setBoy] = useState("178");
  const [kilo, setKilo] = useState("75");
  const [aktivite, setAktivite] = useState<number>(1.55);

  const y = parseFloat(yas.replace(",", ".")) || 0;
  const b = parseFloat(boy.replace(",", ".")) || 0;
  const k = parseFloat(kilo.replace(",", ".")) || 0;
  const valid = y > 0 && b > 0 && k > 0;
  const r = valid ? hesaplaKalori(cinsiyet, y, b, k, aktivite) : null;

  const kcal = (n: number) => `${formatNumber(n, 0)} kcal`;

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

        <div className="grid grid-cols-3 gap-3">
          <Field label="Yaş">
            <input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} />
          </Field>
          <Field label="Boy (cm)">
            <input className="field tabular-nums" inputMode="numeric" value={boy} onChange={(e) => setBoy(e.target.value)} />
          </Field>
          <Field label="Kilo (kg)">
            <input className="field tabular-nums" inputMode="numeric" value={kilo} onChange={(e) => setKilo(e.target.value)} />
          </Field>
        </div>

        <Field label="Aktivite Seviyesi">
          <select className="field" value={aktivite} onChange={(e) => setAktivite(Number(e.target.value))}>
            {AKTIVITE.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Günlük Kalori İhtiyacı (koruma)"
          value={r ? kcal(r.tdee) : "—"}
          sub={r ? `Bazal metabolizma (BMR): ${kcal(r.bmr)}` : "Bilgileri eksiksiz girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Kilo vermek için (−500)" value={kcal(r.kiloVerme)} />
            <ResultRow label="Kilonu korumak için" value={kcal(r.tdee)} />
            <ResultRow label="Kilo almak için (+500)" value={kcal(r.kiloAlma)} />
          </div>
        )}
      </div>
    </div>
  );
}
