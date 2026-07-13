"use client";
import { useState } from "react";
import { kanBasinciKategori } from "@/lib/saglik";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function TansiyonHesaplayici() {
  const [s, setS] = useState("120");
  const [d, setD] = useState("80");
  const sv = parseFloat(s) || 0;
  const dv = parseFloat(d) || 0;
  const kat = kanBasinciKategori(sv, dv);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sistolik (büyük tansiyon, mmHg)"><input className="field tabular-nums" inputMode="numeric" value={s} onChange={(e) => setS(e.target.value)} /></Field>
        <Field label="Diyastolik (küçük tansiyon, mmHg)"><input className="field tabular-nums" inputMode="numeric" value={d} onChange={(e) => setD(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Kan Basıncı Kategorisi" value={kat} sub={`${sv} / ${dv} mmHg`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Düşük" value="<90 / <60" />
          <ResultRow label="Normal" value="90-119 / 60-79" />
          <ResultRow label="Yüksek normal" value="120-129 / <80" />
          <ResultRow label="Hipertansiyon 1" value="130-139 / 80-89" />
          <ResultRow label="Hipertansiyon 2" value="≥140 / ≥90" />
          <ResultRow label="Hipertansif kriz" value="≥180 / ≥120" />
        </div>
      </div>
    </div>
  );
}
