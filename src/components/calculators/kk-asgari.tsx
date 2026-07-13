"use client";
import { useState } from "react";
import { krediKartiAsgari, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KkAsgariHesaplayici() {
  const [borc, setBorc] = useState("15000");
  const r = krediKartiAsgari(parseFloat(borc) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Ekstre Borcu (₺)" hint="Dönem sonu toplam borç.">
          <input className="field tabular-nums" inputMode="numeric" value={borc} onChange={(e) => setBorc(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Asgari Ödeme" value={formatTL(r.asgariOdeme)} sub={`Oran: %${r.oran}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Toplam borç" value={formatTL(parseFloat(borc) || 0)} />
          <ResultRow label="Asgari ödeme oranı" value={`%${r.oran}`} />
          <ResultRow label="Asgari ödeme" value={formatTL(r.asgariOdeme)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          BDDK: Borç 25.000 ₺ altı %20, 25.000-50.000 %30, üstü %40. Sadece asgariyi ödemek yüksek faiz nedeniyle borcu büyütür.
        </div>
      </div>
    </div>
  );
}
