"use client";

import { useState } from "react";
import { hesaplaYds, hesaplaAles } from "@/lib/sinav";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function YdsAlesHesaplayici() {
  const [mod, setMod] = useState<"yds" | "ales">("yds");
  const [ydsD, setYdsD] = useState("55");
  const [ydsY, setYdsY] = useState("10");
  const [aSD, setASD] = useState("30");
  const [aSY, setASY] = useState("8");
  const [aZD, setAZD] = useState("32");
  const [aZY, setAZY] = useState("7");

  const yds = hesaplaYds(parseInt(ydsD) || 0, parseInt(ydsY) || 0);
  const ales = hesaplaAles({ sayisalD: parseInt(aSD) || 0, sayisalY: parseInt(aSY) || 0, sozelD: parseInt(aZD) || 0, sozelY: parseInt(aZY) || 0 });
  const n = (v: number) => formatNumber(v, 3);

  return (
    <div className="space-y-6">
      <Segmented value={mod} onChange={setMod} options={[{ label: "YDS", value: "yds" }, { label: "ALES", value: "ales" }]} />

      {mod === "yds" ? (
        <div className="space-y-4">
          <div className="card p-4">
            <p className="mb-2 text-sm font-semibold text-text">YDS — 80 soru üzerinden 100 puan</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={ydsD} onChange={(e) => setYdsD(e.target.value)} /></Field>
              <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={ydsY} onChange={(e) => setYdsY(e.target.value)} /></Field>
            </div>
          </div>
          <ResultHero label="YDS Puanı" value={n(yds.puan)} sub={`Net: ${n(yds.net)}`} tone="accent" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card p-4">
              <p className="mb-2 text-sm font-semibold text-text">Sayısal (50)</p>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={aSD} onChange={(e) => setASD(e.target.value)} /></Field>
                <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={aSY} onChange={(e) => setASY(e.target.value)} /></Field>
              </div>
            </div>
            <div className="card p-4">
              <p className="mb-2 text-sm font-semibold text-text">Sözel (50)</p>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Doğru"><input className="field tabular-nums" inputMode="numeric" value={aZD} onChange={(e) => setAZD(e.target.value)} /></Field>
                <Field label="Yanlış"><input className="field tabular-nums" inputMode="numeric" value={aZY} onChange={(e) => setAZY(e.target.value)} /></Field>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <ResultHero label="SAY" value={n(ales.say)} tone="accent" />
            <ResultHero label="SÖZ" value={n(ales.soz)} />
            <ResultHero label="EA" value={n(ales.ea)} />
          </div>
          <div className="card p-4">
            <ResultRow label="Sayısal net" value={n(ales.sayNet)} />
            <ResultRow label="Sözel net" value={n(ales.sozNet)} />
          </div>
        </div>
      )}
    </div>
  );
}
