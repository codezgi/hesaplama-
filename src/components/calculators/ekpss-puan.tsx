"use client";

import { useState } from "react";
import { hesaplaEkpss } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function EkpssPuanHesaplayici() {
  const [gyD, setGyD] = useState("22");
  const [gyY, setGyY] = useState("4");
  const [gkD, setGkD] = useState("20");
  const [gkY, setGkY] = useState("5");

  const g = {
    gyD: parseInt(gyD) || 0, gyY: parseInt(gyY) || 0,
    gkD: parseInt(gkD) || 0, gkY: parseInt(gkY) || 0,
  };
  const r = hesaplaEkpss(g);
  const n = (v: number) => formatNumber(v, 3);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Genel Yetenek (30 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={gyD} onChange={(e) => setGyD(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={gyY} onChange={(e) => setGyY(e.target.value)} /></Field>
          </div>
        </div>
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Genel Kültür (30 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={gkD} onChange={(e) => setGkD(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={gkY} onChange={(e) => setGkY(e.target.value)} /></Field>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <ResultHero label="EKPSS P1" value={n(r.p1)} tone="accent" />
        <ResultHero label="EKPSS P2" value={n(r.p2)} />
        <ResultHero label="EKPSS P3" value={n(r.p3)} />
      </div>
      <div className="card p-4">
        <ResultRow label="GY net" value={n(r.gyNet)} />
        <ResultRow label="GK net" value={n(r.gkNet)} />
      </div>
    </div>
  );
}
