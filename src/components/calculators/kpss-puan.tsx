"use client";

import { useState } from "react";
import { hesaplaKpss } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KpssPuanHesaplayici() {
  const [gyD, setGyD] = useState("40");
  const [gyY, setGyY] = useState("15");
  const [gkD, setGkD] = useState("38");
  const [gkY, setGkY] = useState("15");

  const g = {
    gyD: parseInt(gyD, 10) || 0, gyY: parseInt(gyY, 10) || 0,
    gkD: parseInt(gkD, 10) || 0, gkY: parseInt(gkY, 10) || 0,
  };
  const r = hesaplaKpss(g);
  const n = (v: number) => formatNumber(v, 3);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Genel Yetenek (60 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={gyD} onChange={(e) => setGyD(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={gyY} onChange={(e) => setGyY(e.target.value)} /></Field>
          </div>
        </div>
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Genel Kültür (60 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={gkD} onChange={(e) => setGkD(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={gkY} onChange={(e) => setGkY(e.target.value)} /></Field>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ResultHero label="KPSS P3 (Genel)" value={n(r.p3)} tone="accent" />
        <ResultHero label="KPSS P93 (Öğretmen)" value={n(r.p93)} />
      </div>

      <div className="card p-4">
        <ResultRow label="GY net" value={n(r.gyNet)} />
        <ResultRow label="GK net" value={n(r.gkNet)} />
        <ResultRow label="Toplam net" value={n(r.gyNet + r.gkNet)} />
        <ResultRow label="P3 (Genel)" value={n(r.p3)} />
        <ResultRow label="P93 (Öğretmenlik, GK ağırlıklı)" value={n(r.p93)} />
      </div>
    </div>
  );
}
