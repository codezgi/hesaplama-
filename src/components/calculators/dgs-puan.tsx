"use client";

import { useState } from "react";
import { hesaplaDgs } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function DgsPuanHesaplayici() {
  const [sD, setSD] = useState("35");
  const [sY, setSY] = useState("10");
  const [zD, setZD] = useState("40");
  const [zY, setZY] = useState("8");

  const g = { sayisalD: parseInt(sD) || 0, sayisalY: parseInt(sY) || 0, sozelD: parseInt(zD) || 0, sozelY: parseInt(zY) || 0 };
  const r = hesaplaDgs(g);
  const n = (v: number) => formatNumber(v, 3);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Sayısal (60 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={sD} onChange={(e) => setSD(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={sY} onChange={(e) => setSY(e.target.value)} /></Field>
          </div>
        </div>
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold text-text">Sözel (60 soru)</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={zD} onChange={(e) => setZD(e.target.value)} /></Field>
            <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={zY} onChange={(e) => setZY(e.target.value)} /></Field>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <ResultHero label="SAY" value={n(r.say)} tone="accent" />
        <ResultHero label="SÖZ" value={n(r.soz)} />
        <ResultHero label="EA" value={n(r.ea)} />
      </div>

      <div className="card p-4">
        <ResultRow label="Sayısal net" value={n(r.sayNet)} />
        <ResultRow label="Sözel net" value={n(r.sozNet)} />
        <ResultRow label="SAY puan" value={n(r.say)} />
        <ResultRow label="SÖZ puan" value={n(r.soz)} />
        <ResultRow label="EA puan" value={n(r.ea)} />
      </div>
    </div>
  );
}
