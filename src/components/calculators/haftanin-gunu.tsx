"use client";

import { useState } from "react";
import { HAFTA_GUNLERI } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function HaftaninGunuHesaplayici() {
  const [tarih, setTarih] = useState(bugun);

  const d = tarih ? new Date(tarih) : null;
  const valid = d && !isNaN(d.getTime());

  const guncelBilgi = () => {
    if (!valid) return null;
    // Yılın kaçıncı günü
    const yilBas = new Date(d!.getFullYear(), 0, 1);
    const yilinGunu = Math.floor((d!.getTime() - yilBas.getTime()) / 86400000) + 1;
    // Yılın kaçıncı haftası (ISO 8601)
    const d2 = new Date(Date.UTC(d!.getFullYear(), d!.getMonth(), d!.getDate()));
    const gunNo = d2.getUTCDay() || 7;
    d2.setUTCDate(d2.getUTCDate() + 4 - gunNo);
    const yilBas2 = new Date(Date.UTC(d2.getUTCFullYear(), 0, 1));
    const hafta = Math.ceil(((d2.getTime() - yilBas2.getTime()) / 86400000 + 1) / 7);
    return { yilinGunu, hafta };
  };
  const b = guncelBilgi();

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Tarih">
          <input className="field" type="date" value={tarih} onChange={(e) => setTarih(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Haftanın Günü"
          value={valid ? HAFTA_GUNLERI[d!.getDay()] : "—"}
          sub={
            valid
              ? d!.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" })
              : "Tarih girin"
          }
          tone="accent"
        />
        {valid && b && (
          <div className="card p-4">
            <ResultRow label="Gün" value={HAFTA_GUNLERI[d!.getDay()]} />
            <ResultRow label="Yılın kaçıncı günü" value={`${b.yilinGunu}. gün`} />
            <ResultRow label="Yılın kaçıncı haftası" value={`${b.hafta}. hafta (ISO)`} />
            <ResultRow label="Hafta içi/sonu" value={d!.getDay() === 0 || d!.getDay() === 6 ? "Hafta sonu" : "Hafta içi"} />
          </div>
        )}
      </div>
    </div>
  );
}
