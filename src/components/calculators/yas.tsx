"use client";

import { useState } from "react";
import { hesaplaYas, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YasHesaplayici() {
  const [dogum, setDogum] = useState("2000-01-01");
  const d = dogum ? new Date(dogum) : null;
  const valid = d && !isNaN(d.getTime()) && d <= new Date();
  const r = valid ? hesaplaYas(d!) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Doğum Tarihi">
          <input
            className="field"
            type="date"
            value={dogum}
            max={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setDogum(e.target.value)}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Yaşınız"
          value={r ? `${r.yil} yıl` : "—"}
          sub={r ? `${r.ay} ay ${r.gun} gün` : "Geçerli bir tarih girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Toplam Gün" value={`${formatNumber(r.toplamGun, 0)} gün`} />
            <ResultRow label="Toplam Hafta" value={`${formatNumber(r.toplamHafta, 0)} hafta`} />
            <ResultRow label="Sonraki doğum gününe" value={`${r.sonrakiDogumGunuGun} gün`} />
          </div>
        )}
      </div>
    </div>
  );
}
