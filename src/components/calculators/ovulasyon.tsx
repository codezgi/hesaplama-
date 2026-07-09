"use client";

import { useState } from "react";
import { ovulasyon } from "@/lib/saglik";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);
const trTarih = (d: Date) =>
  d.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric", weekday: "long" });

export function OvulasyonHesaplayici() {
  const [sonAdet, setSonAdet] = useState("");
  const [dongu, setDongu] = useState("28");

  const d = sonAdet ? new Date(sonAdet) : null;
  const dg = parseInt(dongu, 10) || 0;
  const valid = d && !isNaN(d.getTime()) && dg >= 21 && dg <= 45;
  const r = valid ? ovulasyon(d!, dg) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Son Adet Başlangıç Tarihi">
          <input className="field" type="date" value={sonAdet} max={bugun} onChange={(e) => setSonAdet(e.target.value)} />
        </Field>
        <Field label="Ortalama Döngü Uzunluğu (gün)" hint="Genellikle 21-35 gün arasıdır (varsayılan 28).">
          <input className="field tabular-nums" inputMode="numeric" value={dongu} onChange={(e) => setDongu(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Tahmini Ovulasyon (Yumurtlama) Günü"
          value={r ? trTarih(r.ovulasyon) : "—"}
          sub={r ? "En verimli 5 günün merkezinde" : "Son adet tarihini girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Verimli dönem başlangıcı" value={trTarih(r.verimliBas)} />
            <ResultRow label="Verimli dönem bitişi" value={trTarih(r.verimliBit)} />
            <ResultRow label="Sonraki adet tarihi" value={trTarih(r.sonrakiRegl)} />
            <ResultRow label="Luteal faz" value={`${r.luteal} gün (varsayılan)`} />
          </div>
        )}
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Tahminidir; hormon dalgalanmaları ovulasyonu kaydırabilir. Kesin takip için jinekoloğunuza danışın.
        </div>
      </div>
    </div>
  );
}
