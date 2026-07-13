"use client";
import { useState } from "react";
import { trafikCezaIndirim, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";
export function TrafikIndirimHesaplayici() {
  const [ceza, setCeza] = useState("2000");
  const [gun, setGun] = useState("10");
  const r = trafikCezaIndirim(parseFloat(ceza) || 0, parseFloat(gun) || 0);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Ceza Tutarı (₺)"><input className="field tabular-nums" inputMode="numeric" value={ceza} onChange={(e) => setCeza(e.target.value)} /></Field>
    <Field label="Tebliğden Bu Yana Geçen Gün"><input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label={r.gecerli ? "%25 İndirimli Ödeme" : "İndirim geçersiz"} value={formatTL(r.odenecek)} sub={r.gecerli ? `Tasarruf: ${formatTL(r.indirim)}` : "15 gün sınırı aşıldı"} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Ceza tutarı" value={formatTL(parseFloat(ceza) || 0)} />
      <ResultRow label="İndirim (%25)" value={r.gecerli ? `− ${formatTL(r.indirim)}` : "Yok"} />
      <ResultRow label="Ödenecek" value={formatTL(r.odenecek)} />
    </div>
  </div></div>;
}
