"use client";
import { useState } from "react";
import { detayliYas, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function DetayYasHesaplayici() {
  const [dogum, setDogum] = useState("2000-01-01");
  const d = dogum ? new Date(dogum) : null;
  const r = d && !isNaN(d.getTime()) ? detayliYas(d) : null;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Doğum Tarihi"><input className="field" type="date" value={dogum} onChange={(e) => setDogum(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        {r && (
          <>
            <ResultHero label="Toplam Gün" value={formatNumber(r.toplamGun, 0)} sub="Yaşamdaki toplam gün" tone="accent" />
            <div className="card p-4">
              <ResultRow label="Hafta" value={formatNumber(r.toplamHafta, 0)} />
              <ResultRow label="Ay" value={formatNumber(r.toplamAy, 0)} />
              <ResultRow label="Gün" value={formatNumber(r.toplamGun, 0)} />
              <ResultRow label="Saat" value={formatNumber(r.toplamSaat, 0)} />
              <ResultRow label="Dakika" value={formatNumber(r.toplamDakika, 0)} />
              <ResultRow label="Saniye" value={formatNumber(r.toplamSaniye, 0)} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
