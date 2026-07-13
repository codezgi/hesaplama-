"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

function hexToRgb(hex: string): [number, number, number] | null {
  const t = hex.trim().replace(/^#/, "");
  const uzun = t.length === 3 ? t.split("").map((c) => c + c).join("") : t;
  if (!/^[0-9a-fA-F]{6}$/.test(uzun)) return null;
  return [parseInt(uzun.slice(0, 2), 16), parseInt(uzun.slice(2, 4), 16), parseInt(uzun.slice(4, 6), 16)];
}

function relLum(r: number, g: number, b: number): number {
  const c = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
}

function contrastRatio(a: [number, number, number], b: [number, number, number]): number {
  const l1 = relLum(...a);
  const l2 = relLum(...b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

export function RenkKontrastHesaplayici() {
  const [on, setOn] = useState("#2f9e6f");
  const [arka, setArka] = useState("#ffffff");

  const rOn = useMemo(() => hexToRgb(on), [on]);
  const rArka = useMemo(() => hexToRgb(arka), [arka]);
  const oran = rOn && rArka ? contrastRatio(rOn, rArka) : 0;

  const durumlar = [
    { ad: "AA — Normal metin", esik: 4.5, gecti: oran >= 4.5 },
    { ad: "AA — Büyük metin (18pt+)", esik: 3, gecti: oran >= 3 },
    { ad: "AAA — Normal metin", esik: 7, gecti: oran >= 7 },
    { ad: "AAA — Büyük metin", esik: 4.5, gecti: oran >= 4.5 },
    { ad: "AA — UI bileşenleri", esik: 3, gecti: oran >= 3 },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Ön Plan (Metin) Rengi">
          <div className="flex items-center gap-3">
            <input type="color" value={rOn ? on : "#000000"} onChange={(e) => setOn(e.target.value)} className="h-11 w-16 rounded-lg border border-border bg-surface" />
            <input className="field font-mono" value={on} onChange={(e) => setOn(e.target.value)} />
          </div>
        </Field>
        <Field label="Arka Plan Rengi">
          <div className="flex items-center gap-3">
            <input type="color" value={rArka ? arka : "#ffffff"} onChange={(e) => setArka(e.target.value)} className="h-11 w-16 rounded-lg border border-border bg-surface" />
            <input className="field font-mono" value={arka} onChange={(e) => setArka(e.target.value)} />
          </div>
        </Field>
        <div
          className="rounded-xl border border-border p-6 text-center text-lg font-semibold"
          style={{ color: rOn ? on : "#000", background: rArka ? arka : "#fff" }}
        >
          Örnek metin — Aa Bb 123
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Kontrast Oranı"
          value={rOn && rArka ? `${formatNumber(oran, 2)} : 1` : "—"}
          sub={rOn && rArka ? (oran >= 7 ? "Mükemmel (AAA)" : oran >= 4.5 ? "İyi (AA)" : oran >= 3 ? "Sınırda" : "Yetersiz") : "Renkleri girin"}
          tone="accent"
        />
        <div className="card p-4">
          {durumlar.map((d) => (
            <ResultRow key={d.ad} label={`${d.ad} (≥${d.esik}:1)`} value={<span className={d.gecti ? "text-primary" : "text-accent"}>{d.gecti ? "✓ Geçer" : "✗ Kalır"}</span>} />
          ))}
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          WCAG 2.1 kontrast oranı hesaplaması. Normal metin için AA seviyesi 4,5:1, AAA için 7:1 gereklidir. Erişilebilir tasarım için kritiktir.
        </div>
      </div>
    </div>
  );
}
