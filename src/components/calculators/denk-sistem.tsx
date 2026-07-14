"use client";
import { useState } from "react";
import { denkTakim2, denkTakim3 } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function DenkSistem2Hesaplayici() {
  const [a1, setA1] = useState("2");
  const [b1, setB1] = useState("3");
  const [c1, setC1] = useState("12");
  const [a2, setA2] = useState("1");
  const [b2, setB2] = useState("-1");
  const [c2, setC2] = useState("1");
  const num = (s: string) => parseFloat(s.replace(",", ".")) || 0;
  const r = denkTakim2(num(a1), num(b1), num(c1), num(a2), num(b2), num(c2));

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 font-mono text-lg text-primary">
        <div>{a1}x + {b1}y = {c1}</div>
        <div>{a2}x + {b2}y = {c2}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Field label="a₁"><input className="field tabular-nums" inputMode="decimal" value={a1} onChange={(e) => setA1(e.target.value)} /></Field>
        <Field label="b₁"><input className="field tabular-nums" inputMode="decimal" value={b1} onChange={(e) => setB1(e.target.value)} /></Field>
        <Field label="c₁"><input className="field tabular-nums" inputMode="decimal" value={c1} onChange={(e) => setC1(e.target.value)} /></Field>
        <Field label="a₂"><input className="field tabular-nums" inputMode="decimal" value={a2} onChange={(e) => setA2(e.target.value)} /></Field>
        <Field label="b₂"><input className="field tabular-nums" inputMode="decimal" value={b2} onChange={(e) => setB2(e.target.value)} /></Field>
        <Field label="c₂"><input className="field tabular-nums" inputMode="decimal" value={c2} onChange={(e) => setC2(e.target.value)} /></Field>
      </div>
      {r.tur === "tek" && (
        <>
          <ResultHero label="Çözüm" value={`x = ${formatNumber(r.x, 4)}, y = ${formatNumber(r.y, 4)}`} sub={`Determinant: ${formatNumber(r.determinant, 2)}`} tone="accent" />
          <div className="card p-4">
            <ResultRow label="x" value={formatNumber(r.x, 6)} />
            <ResultRow label="y" value={formatNumber(r.y, 6)} />
            <ResultRow label="Determinant" value={formatNumber(r.determinant, 4)} />
          </div>
        </>
      )}
      {r.tur === "yok" && (
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">Bu denklem sisteminin çözümü yok (paralel doğrular).</div>
      )}
      {r.tur === "sonsuz" && (
        <div className="rounded-xl border border-primary/30 bg-primary-soft px-4 py-3 text-sm text-primary">∞ Sonsuz çözüm var (aynı doğru).</div>
      )}
    </div>
  );
}

export function DenkSistem3Hesaplayici() {
  const [m, setM] = useState([
    ["2", "1", "-1"],
    ["1", "3", "2"],
    ["3", "-1", "1"],
  ]);
  const [c, setC] = useState(["8", "13", "6"]);
  const num = (s: string) => parseFloat(s.replace(",", ".")) || 0;
  const matris = m.map((row) => row.map(num));
  const carrier = c.map(num);
  const r = denkTakim3(matris, carrier);

  function setMik(i: number, j: number, v: string) {
    const kopya = m.map((row) => [...row]);
    kopya[i][j] = v;
    setM(kopya);
  }
  function setCik(i: number, v: string) {
    const kopya = [...c];
    kopya[i] = v;
    setC(kopya);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 font-mono text-lg text-primary">
        {[0, 1, 2].map((i) => (
          <div key={i}>{m[i][0]}x + {m[i][1]}y + {m[i][2]}z = {c[i]}</div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px]">
          <thead>
            <tr className="border-b border-border text-left text-xs text-text-muted">
              <th className="pb-2 pr-2">Denklem</th>
              <th className="pb-2 pr-2">x</th>
              <th className="pb-2 pr-2">y</th>
              <th className="pb-2 pr-2">z</th>
              <th className="pb-2">=</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2].map((i) => (
              <tr key={i}>
                <td className="py-1 pr-2 text-sm text-text-muted">D{i + 1}</td>
                {[0, 1, 2].map((j) => (
                  <td key={j} className="py-1 pr-2"><input className="field !py-1 !w-20 tabular-nums" inputMode="decimal" value={m[i][j]} onChange={(e) => setMik(i, j, e.target.value)} /></td>
                ))}
                <td><input className="field !py-1 !w-20 tabular-nums" inputMode="decimal" value={c[i]} onChange={(e) => setCik(i, e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {r.tur === "tek" ? (
        <>
          <ResultHero label="Çözüm" value={`(${formatNumber(r.x, 3)}, ${formatNumber(r.y, 3)}, ${formatNumber(r.z, 3)})`} sub={`|A| = ${formatNumber(r.determinant, 4)}`} tone="accent" />
          <div className="card p-4">
            <ResultRow label="x" value={formatNumber(r.x, 6)} />
            <ResultRow label="y" value={formatNumber(r.y, 6)} />
            <ResultRow label="z" value={formatNumber(r.z, 6)} />
            <ResultRow label="Determinant" value={formatNumber(r.determinant, 4)} />
          </div>
        </>
      ) : (
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">Determinant sıfır — sistem tekil (çözüm yok veya sonsuz çözüm).</div>
      )}
    </div>
  );
}
