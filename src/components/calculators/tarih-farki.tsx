"use client";

import { useState } from "react";
import { tarihFarki, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function TarihFarkiHesaplayici() {
  const [bas, setBas] = useState(bugun);
  const [bit, setBit] = useState("2000-01-01");

  const b0 = bas ? new Date(bas) : null;
  const b1 = bit ? new Date(bit) : null;
  const valid = b0 && b1 && !isNaN(b0.getTime()) && !isNaN(b1.getTime());
  const r = valid ? tarihFarki(b0!, b1!) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Başlangıç Tarihi">
          <input className="field" type="date" value={bas} onChange={(e) => setBas(e.target.value)} />
        </Field>
        <Field label="Bitiş Tarihi">
          <input className="field" type="date" value={bit} onChange={(e) => setBit(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Toplam Fark"
          value={r ? `${formatNumber(r.toplamGun, 0)} gün` : "—"}
          sub={r ? `${r.yil} yıl ${r.ay} ay ${r.gun} gün` : "Geçerli tarihler girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Hafta olarak" value={`${formatNumber(r.toplamHafta, 0)} hafta ${r.kalanGun} gün`} />
            <ResultRow label="İş günü (Pzt-Cuma)" value={`${formatNumber(r.isGunu, 0)} gün`} />
            <ResultRow label="Saat olarak" value={`${formatNumber(r.toplamSaat, 0)} saat`} />
            <ResultRow label="Dakika olarak" value={`${formatNumber(r.toplamDakika, 0)} dk`} />
          </div>
        )}
      </div>
    </div>
  );
}
