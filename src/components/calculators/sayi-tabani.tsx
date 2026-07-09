"use client";

import { useState } from "react";
import { tabanCevir } from "@/lib/matematik";
import { ResultHero, ResultRow, Field } from "@/components/result";

const tabanlar = [
  { v: 2, ad: "İkilik (Binary)" },
  { v: 8, ad: "Sekizlik (Octal)" },
  { v: 10, ad: "Onluk (Decimal)" },
  { v: 16, ad: "Onaltılık (Hex)" },
];

export function SayiTabaniHesaplayici() {
  const [deger, setDeger] = useState("255");
  const [from, setFrom] = useState(10);

  const cevirTo = (t: number) => tabanCevir(deger, from, t) ?? "geçersiz";

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sayı">
          <input
            className="field font-mono"
            value={deger}
            onChange={(e) => setDeger(e.target.value)}
            spellCheck={false}
          />
        </Field>
        <Field label="Giriş Tabanı">
          <select className="field" value={from} onChange={(e) => setFrom(Number(e.target.value))}>
            {tabanlar.map((t) => (
              <option key={t.v} value={t.v}>
                {t.ad} — taban {t.v}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Onluk (Decimal) karşılığı" value={cevirTo(10)} tone="accent" />
        <div className="card p-4">
          {tabanlar.map((t) => (
            <ResultRow key={t.v} label={t.ad} value={<span className="font-mono">{cevirTo(t.v)}</span>} />
          ))}
        </div>
      </div>
    </div>
  );
}
