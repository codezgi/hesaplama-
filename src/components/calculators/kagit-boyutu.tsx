"use client";
import { KAGIT_A } from "@/lib/calc";
import { ResultRow } from "@/components/result";

export function KagitBoyutuHesaplayici() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
        <div className="text-sm font-medium text-text-muted">ISO 216 A Serisi Kağıt Boyutları</div>
        <div className="mt-2 text-2xl font-bold text-primary">A4: 210 × 297 mm</div>
        <div className="mt-1 text-sm text-text-muted">Her boy bir öncekinin yarısı</div>
      </div>
      <div className="card p-4">
        {KAGIT_A.map((k) => (
          <ResultRow key={k.format} label={<span className="font-mono">{k.format}</span>} value={<><span className="tabular-nums">{k.mm} mm</span> <span className="text-text-muted"> · {k.inch} inç</span></>} />
        ))}
      </div>
      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        A serisi kağıt boyutları ISO 216 standardıdır. Her boy bir sonrakinin iki katıdır ve √2 en/boy oranını korur. Bu, kâğıdı ikiye böldüğünde yeni boyun aynı en/boy oranını sürdürmesini sağlar.
      </div>
    </div>
  );
}
