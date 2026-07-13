"use client";

import { useState } from "react";
import { bilesikFaizKatki, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function BilesikKatkiHesaplayici() {
  const [anapara, setAnapara] = useState("10000");
  const [katki, setKatki] = useState("2000");
  const [oran, setOran] = useState("40");
  const [yil, setYil] = useState("10");

  const a = parseFloat(anapara.replace(",", ".")) || 0;
  const k = parseFloat(katki.replace(",", ".")) || 0;
  const o = parseFloat(oran.replace(",", ".")) || 0;
  const y = parseFloat(yil.replace(",", ".")) || 0;
  const r = bilesikFaizKatki(a, k, o, y);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Başlangıç Sermayesi (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={anapara} onChange={(e) => setAnapara(e.target.value)} />
        </Field>
        <Field label="Aylık Düzenli Katkı (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={katki} onChange={(e) => setKatki(e.target.value)} />
        </Field>
        <Field label="Yıllık Faiz Oranı (%)">
          <input className="field tabular-nums" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} />
        </Field>
        <Field label="Süre (yıl)">
          <input className="field tabular-nums" inputMode="decimal" value={yil} onChange={(e) => setYil(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Vade Sonu Toplam Birikim"
          value={formatTL(r.sonDeger)}
          sub={`Yatırdığınız: ${formatTL(r.toplamYatirilan)} · Getiri: ${formatTL(r.toplamGetiri)}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Başlangıç anaparası" value={formatTL(a)} />
          <ResultRow label="Toplam aylık katkı" value={formatTL(r.toplamKatki)} />
          <ResultRow label="Toplam yatırılan" value={formatTL(r.toplamYatirilan)} />
          <ResultRow label="Faiz getirisi" value={formatTL(r.toplamGetiri)} />
          <ResultRow label="Vade sonu birikim" value={formatTL(r.sonDeger)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Emeklilik veya birikim planı simülasyonu için idealdir. Vergi ve enflasyon hariçtir.
        </div>
      </div>
    </div>
  );
}
