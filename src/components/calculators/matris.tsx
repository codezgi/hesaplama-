"use client";
import { useState } from "react";
import { matris2Toplam, matris2Carpim, matris2Determinant, matris2Ters } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { ResultRow, Field, Segmented } from "@/components/result";

function MatrisGoster({ m, ad }: { m: number[][] | null; ad: string }) {
  if (!m) return <div className="text-sm text-text-muted">{ad}: hesaplanamıyor</div>;
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-text">{ad}</div>
      <div className="inline-block rounded-xl border border-border bg-surface p-3 font-mono">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 tabular-nums text-text">
          {m.map((row, i) => row.map((v, j) => (
            <span key={`${i}-${j}`} className="min-w-[3rem] text-center">{formatNumber(v, 3)}</span>
          )))}
        </div>
      </div>
    </div>
  );
}

export function Matris2Hesaplayici() {
  const [mod, setMod] = useState<"toplam" | "carpim" | "det" | "ters">("carpim");
  const [A, setA] = useState([["1", "2"], ["3", "4"]]);
  const [B, setB] = useState([["2", "0"], ["1", "3"]]);
  const num = (s: string) => parseFloat(s.replace(",", ".")) || 0;
  const a = A.map((r) => r.map(num));
  const b = B.map((r) => r.map(num));

  const setAik = (i: number, j: number, v: string) => { const k = A.map((r) => [...r]); k[i][j] = v; setA(k); };
  const setBik = (i: number, j: number, v: string) => { const k = B.map((r) => [...r]); k[i][j] = v; setB(k); };

  const sonuc = mod === "toplam" ? matris2Toplam(a, b) : mod === "carpim" ? matris2Carpim(a, b) : null;
  const detA = matris2Determinant(a);
  const tersA = matris2Ters(a);

  return (
    <div className="space-y-6">
      <Segmented value={mod} onChange={setMod} options={[
        { label: "A + B", value: "toplam" }, { label: "A × B", value: "carpim" },
        { label: "det(A)", value: "det" }, { label: "A⁻¹", value: "ters" },
      ]} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-semibold text-text">Matris A (2×2)</div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1].map((i) => [0, 1].map((j) => (
              <input key={`${i}-${j}`} className="field !py-2 text-center tabular-nums" inputMode="decimal" value={A[i][j]} onChange={(e) => setAik(i, j, e.target.value)} />
            )))}
          </div>
        </div>
        {(mod === "toplam" || mod === "carpim") && (
          <div>
            <div className="mb-2 text-sm font-semibold text-text">Matris B (2×2)</div>
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map((i) => [0, 1].map((j) => (
                <input key={`${i}-${j}`} className="field !py-2 text-center tabular-nums" inputMode="decimal" value={B[i][j]} onChange={(e) => setBik(i, j, e.target.value)} />
              )))}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary-soft p-4">
        {mod === "det" && (
          <div>
            <div className="text-sm text-text-muted">Determinant(A)</div>
            <div className="mt-1 text-3xl font-bold text-primary">{formatNumber(detA, 4)}</div>
          </div>
        )}
        {mod === "ters" && <MatrisGoster m={tersA} ad="A⁻¹ (Ters Matris)" />}
        {(mod === "toplam" || mod === "carpim") && <MatrisGoster m={sonuc} ad={mod === "toplam" ? "A + B" : "A × B"} />}
      </div>

      <div className="card p-4">
        <ResultRow label="det(A)" value={formatNumber(detA, 4)} />
        <ResultRow label="A tersi var mı?" value={detA !== 0 ? "Var" : "Yok (det=0)"} />
      </div>
    </div>
  );
}
