"use client";
import { useState } from "react";
import { pisagor } from "@/lib/calc";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function PisagorHesaplayici() {
  const [bilinmeyen, setBilinmeyen] = useState<"c" | "a" | "b">("c");
  const [a, setA] = useState("3");
  const [b, setB] = useState("4");
  const [c, setC] = useState("5");
  const av = parseFloat(a) || 0;
  const bv = parseFloat(b) || 0;
  const cv = parseFloat(c) || 0;
  const r = bilinmeyen === "c" ? pisagor(av, bv, null) : bilinmeyen === "a" ? pisagor(null, bv, cv) : pisagor(av, null, cv);
  const bulunan = bilinmeyen === "c" ? r.c : bilinmeyen === "a" ? r.a : r.b;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Bilinmeyen">
          <Segmented value={bilinmeyen} onChange={setBilinmeyen} options={[{ label: "Hipotenüs (c)", value: "c" }, { label: "Dik kenar a", value: "a" }, { label: "Dik kenar b", value: "b" }]} />
        </Field>
        {bilinmeyen !== "a" && <Field label="a (dik kenar)"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>}
        {bilinmeyen !== "b" && <Field label="b (dik kenar)"><input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} /></Field>}
        {bilinmeyen !== "c" && <Field label="c (hipotenüs)"><input className="field tabular-nums" inputMode="decimal" value={c} onChange={(e) => setC(e.target.value)} /></Field>}
      </div>
      <div className="space-y-4">
        <ResultHero label={`${bilinmeyen}`} value={typeof bulunan === "number" && !Number.isNaN(bulunan) ? formatNumber(bulunan, 4) : "—"} sub="a² + b² = c²" tone="accent" />
        <div className="card p-4">
          <ResultRow label="Formül" value="a² + b² = c²" />
          <ResultRow label="Örnek" value="3, 4, 5 (Pisagor üçlüsü)" />
        </div>
      </div>
    </div>
  );
}
