"use client";
import { useState } from "react";
import { vektorUzunluk, vektorNokta, vektorCapraz, vektorAci } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { ResultRow, Field } from "@/components/result";

export function Vektor3DHesaplayici() {
  const [ax, setAx] = useState("1"); const [ay, setAy] = useState("2"); const [az, setAz] = useState("3");
  const [bx, setBx] = useState("4"); const [by, setBy] = useState("5"); const [bz, setBz] = useState("6");
  const n = (s: string) => parseFloat(s.replace(",", ".")) || 0;
  const a = { x: n(ax), y: n(ay), z: n(az) };
  const b = { x: n(bx), y: n(by), z: n(bz) };
  const nokta = vektorNokta(a, b);
  const capraz = vektorCapraz(a, b);
  const aci = vektorAci(a, b);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-semibold text-text">Vektör A</div>
          <div className="grid grid-cols-3 gap-2">
            <Field label="x"><input className="field tabular-nums" inputMode="decimal" value={ax} onChange={(e) => setAx(e.target.value)} /></Field>
            <Field label="y"><input className="field tabular-nums" inputMode="decimal" value={ay} onChange={(e) => setAy(e.target.value)} /></Field>
            <Field label="z"><input className="field tabular-nums" inputMode="decimal" value={az} onChange={(e) => setAz(e.target.value)} /></Field>
          </div>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold text-text">Vektör B</div>
          <div className="grid grid-cols-3 gap-2">
            <Field label="x"><input className="field tabular-nums" inputMode="decimal" value={bx} onChange={(e) => setBx(e.target.value)} /></Field>
            <Field label="y"><input className="field tabular-nums" inputMode="decimal" value={by} onChange={(e) => setBy(e.target.value)} /></Field>
            <Field label="z"><input className="field tabular-nums" inputMode="decimal" value={bz} onChange={(e) => setBz(e.target.value)} /></Field>
          </div>
        </div>
      </div>

      <div className="card p-4">
        <ResultRow label="|A| — uzunluk" value={formatNumber(vektorUzunluk(a), 4)} />
        <ResultRow label="|B| — uzunluk" value={formatNumber(vektorUzunluk(b), 4)} />
        <ResultRow label="A · B — nokta çarpım" value={formatNumber(nokta, 4)} />
        <ResultRow label="A × B — çapraz çarpım" value={`(${formatNumber(capraz.x, 2)}, ${formatNumber(capraz.y, 2)}, ${formatNumber(capraz.z, 2)})`} />
        <ResultRow label="Aralarındaki açı" value={`${formatNumber(aci, 2)}°`} />
        <ResultRow label="Ortogonal mi?" value={Math.abs(nokta) < 0.001 ? "Evet (nokta çarpım ≈ 0)" : "Hayır"} />
      </div>
    </div>
  );
}
