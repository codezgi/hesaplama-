"use client";
import { useState } from "react";
import { komplTopla, komplCikar, komplCarp, komplBol, komplModul, komplArgument } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { ResultRow, Field, Segmented } from "@/components/result";

function fmt(z: { re: number; im: number }): string {
  const r = formatNumber(z.re, 4);
  const i = formatNumber(Math.abs(z.im), 4);
  const sign = z.im >= 0 ? "+" : "−";
  return `${r} ${sign} ${i}i`;
}

export function KompleksSayiHesaplayici() {
  const [op, setOp] = useState<"topla" | "cikar" | "carp" | "bol">("topla");
  const [aRe, setARe] = useState("3"); const [aIm, setAIm] = useState("4");
  const [bRe, setBRe] = useState("1"); const [bIm, setBIm] = useState("2");
  const n = (s: string) => parseFloat(s.replace(",", ".")) || 0;
  const a = { re: n(aRe), im: n(aIm) };
  const b = { re: n(bRe), im: n(bIm) };
  const sonuc = op === "topla" ? komplTopla(a, b) : op === "cikar" ? komplCikar(a, b) : op === "carp" ? komplCarp(a, b) : komplBol(a, b);

  return (
    <div className="space-y-6">
      <Segmented value={op} onChange={setOp} options={[
        { label: "A + B", value: "topla" }, { label: "A − B", value: "cikar" },
        { label: "A × B", value: "carp" }, { label: "A ÷ B", value: "bol" },
      ]} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-semibold text-text">A = a + bi</div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Reel (a)"><input className="field tabular-nums" inputMode="decimal" value={aRe} onChange={(e) => setARe(e.target.value)} /></Field>
            <Field label="Sanal (b)"><input className="field tabular-nums" inputMode="decimal" value={aIm} onChange={(e) => setAIm(e.target.value)} /></Field>
          </div>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold text-text">B = c + di</div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Reel (c)"><input className="field tabular-nums" inputMode="decimal" value={bRe} onChange={(e) => setBRe(e.target.value)} /></Field>
            <Field label="Sanal (d)"><input className="field tabular-nums" inputMode="decimal" value={bIm} onChange={(e) => setBIm(e.target.value)} /></Field>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
        <div className="text-sm text-text-muted">Sonuç</div>
        <div className="mt-1 font-mono text-2xl font-bold text-primary">{fmt(sonuc)}</div>
      </div>

      <div className="card p-4">
        <ResultRow label="|A|" value={formatNumber(komplModul(a), 4)} />
        <ResultRow label="arg(A) (°)" value={formatNumber(komplArgument(a), 2)} />
        <ResultRow label="|B|" value={formatNumber(komplModul(b), 4)} />
        <ResultRow label="arg(B) (°)" value={formatNumber(komplArgument(b), 2)} />
        <ResultRow label="Sonuç modülü |R|" value={formatNumber(komplModul(sonuc), 4)} />
        <ResultRow label="Sonuç argümanı (°)" value={formatNumber(komplArgument(sonuc), 2)} />
      </div>
    </div>
  );
}
