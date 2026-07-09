"use client";

import { useState } from "react";
import { taksiUcret, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function TaksiUcretHesaplayici() {
  const [acilis, setAcilis] = useState("30");
  const [km, setKm] = useState("12");
  const [birimKm, setBirimKm] = useState("32");
  const [bekleme, setBekleme] = useState("5");
  const [birimDk, setBirimDk] = useState("10");
  const [gece, setGece] = useState<"gunduz" | "gece">("gunduz");

  const a = parseFloat(acilis.replace(",", ".")) || 0;
  const k = parseFloat(km.replace(",", ".")) || 0;
  const bk = parseFloat(birimKm.replace(",", ".")) || 0;
  const b = parseFloat(bekleme.replace(",", ".")) || 0;
  const bd = parseFloat(birimDk.replace(",", ".")) || 0;
  const r = taksiUcret(a, k, bk, b, bd, gece === "gece");

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Açılış (₺)" hint="Taksi indirim / kalkış ücreti.">
          <input className="field tabular-nums" inputMode="decimal" value={acilis} onChange={(e) => setAcilis(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Mesafe (km)">
            <input className="field tabular-nums" inputMode="decimal" value={km} onChange={(e) => setKm(e.target.value)} />
          </Field>
          <Field label="₺/km">
            <input className="field tabular-nums" inputMode="decimal" value={birimKm} onChange={(e) => setBirimKm(e.target.value)} />
          </Field>
          <Field label="Bekleme (dk)">
            <input className="field tabular-nums" inputMode="decimal" value={bekleme} onChange={(e) => setBekleme(e.target.value)} />
          </Field>
          <Field label="₺/dk">
            <input className="field tabular-nums" inputMode="decimal" value={birimDk} onChange={(e) => setBirimDk(e.target.value)} />
          </Field>
        </div>
        <Field label="Tarife">
          <Segmented
            value={gece}
            onChange={setGece}
            options={[
              { label: "Gündüz", value: "gunduz" },
              { label: "Gece (×1,5)", value: "gece" },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Toplam Ücret" value={formatTL(r.toplam)} sub={`${k} km + ${b} dk bekleme`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Açılış" value={formatTL(r.acilis)} />
          <ResultRow label={`Mesafe (${k} km × ${bk}₺)`} value={formatTL(r.mesafeUcreti)} />
          <ResultRow label={`Bekleme (${b} dk × ${bd}₺)`} value={formatTL(r.beklemeUcreti)} />
          {gece === "gece" && <ResultRow label="Gece tarifesi (×1,5)" value="uygulandı" />}
          <ResultRow label="Toplam" value={formatTL(r.toplam)} />
        </div>
      </div>
    </div>
  );
}
