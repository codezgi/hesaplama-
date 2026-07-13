"use client";
import { useState } from "react";
import { newtonHareket, ohmWatt } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { ResultRow, Field } from "@/components/result";

export function NewtonHareketHesaplayici() {
  const [v0, setV0] = useState("10");
  const [v, setV] = useState("");
  const [a, setA] = useState("2");
  const [t, setT] = useState("5");
  const [x, setX] = useState("");

  const num = (s: string) => s.trim() === "" ? undefined : (parseFloat(s.replace(",", ".")) || 0);
  const r = newtonHareket({ v0: num(v0), v: num(v), a: num(a), t: num(t), x: num(x) });

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 font-mono text-primary text-center space-y-1">
        <div>v = v₀ + a·t</div>
        <div>x = v₀·t + ½·a·t²</div>
        <div>v² = v₀² + 2·a·x</div>
      </div>
      <p className="text-sm text-text-muted">3 değişken gir, kalan 2&apos;yi hesaplayalım. Boş bırakmak istediklerini boş bırak.</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <Field label="v₀ (m/s)"><input className="field tabular-nums" inputMode="decimal" value={v0} onChange={(e) => setV0(e.target.value)} /></Field>
        <Field label="v (m/s)"><input className="field tabular-nums" inputMode="decimal" value={v} onChange={(e) => setV(e.target.value)} /></Field>
        <Field label="a (m/s²)"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>
        <Field label="t (s)"><input className="field tabular-nums" inputMode="decimal" value={t} onChange={(e) => setT(e.target.value)} /></Field>
        <Field label="x (m)"><input className="field tabular-nums" inputMode="decimal" value={x} onChange={(e) => setX(e.target.value)} /></Field>
      </div>
      <div className="card p-4">
        <div className="mb-2 text-sm font-semibold text-text">Hesaplanan Değerler</div>
        {Object.keys(r).length === 0 && <p className="text-sm text-text-muted">Yeterli girdi yok — en az 3 değer verilmeli.</p>}
        {"v" in r && <ResultRow label="v (son hız)" value={`${formatNumber(r.v!, 3)} m/s`} />}
        {"a" in r && <ResultRow label="a (ivme)" value={`${formatNumber(r.a!, 3)} m/s²`} />}
        {"t" in r && <ResultRow label="t (süre)" value={`${formatNumber(r.t!, 3)} s`} />}
        {"x" in r && <ResultRow label="x (yer değiştirme)" value={`${formatNumber(r.x!, 3)} m`} />}
      </div>
    </div>
  );
}

export function OhmWattHesaplayici() {
  const [V, setV] = useState("12");
  const [I, setI] = useState("");
  const [R, setR] = useState("4");
  const [P, setP] = useState("");
  const num = (s: string) => s.trim() === "" ? undefined : (parseFloat(s.replace(",", ".")) || 0);
  const r = ohmWatt({ V: num(V), I: num(I), R: num(R), P: num(P) });

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 font-mono text-primary text-center space-y-1">
        <div>V = I × R</div>
        <div>P = V × I = I² × R = V² / R</div>
      </div>
      <p className="text-sm text-text-muted">2 değişken yeterlidir. Boş bırakılanları hesaplarız.</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Field label="V (Volt)"><input className="field tabular-nums" inputMode="decimal" value={V} onChange={(e) => setV(e.target.value)} /></Field>
        <Field label="I (Amper)"><input className="field tabular-nums" inputMode="decimal" value={I} onChange={(e) => setI(e.target.value)} /></Field>
        <Field label="R (Ohm)"><input className="field tabular-nums" inputMode="decimal" value={R} onChange={(e) => setR(e.target.value)} /></Field>
        <Field label="P (Watt)"><input className="field tabular-nums" inputMode="decimal" value={P} onChange={(e) => setP(e.target.value)} /></Field>
      </div>
      <div className="card p-4">
        {r.V !== undefined && <ResultRow label="V (gerilim)" value={`${formatNumber(r.V, 3)} V`} />}
        {r.I !== undefined && <ResultRow label="I (akım)" value={`${formatNumber(r.I, 4)} A`} />}
        {r.R !== undefined && <ResultRow label="R (direnç)" value={`${formatNumber(r.R, 3)} Ω`} />}
        {r.P !== undefined && <ResultRow label="P (güç)" value={`${formatNumber(r.P, 3)} W`} />}
      </div>
    </div>
  );
}
