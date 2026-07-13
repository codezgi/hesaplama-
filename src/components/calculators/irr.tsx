"use client";

import { useState } from "react";
import { hesaplaIrr, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function IrrHesaplayici() {
  const [giris, setGiris] = useState("-100000, 30000, 35000, 40000, 45000, 50000");

  const akislar = giris.split(/[,;]+/).map((x) => parseFloat(x.trim().replace(",", "."))).filter((n) => Number.isFinite(n));
  const irr = akislar.length >= 2 ? hesaplaIrr(akislar) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Nakit Akışları" hint="Virgülle ayır. İlk değer t=0 (yatırım, genelde negatif).">
          <textarea className="field h-32 resize-y tabular-nums" value={giris} onChange={(e) => setGiris(e.target.value)} />
        </Field>
        <p className="text-sm text-text-muted">
          Girilen: {akislar.length} dönem
        </p>
      </div>
      <div className="space-y-4">
        <ResultHero
          label="İç Verim Oranı (IRR)"
          value={irr !== null ? `%${formatNumber(irr, 3)}` : "Bulunamadı"}
          sub={irr !== null && irr > 0 ? "NPV = 0 olan iskonto oranı" : "Nakit akışlarını gözden geçirin"}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Dönem sayısı" value={`${akislar.length}`} />
          <ResultRow label="Toplam giriş" value={akislar.filter((x) => x > 0).reduce((s, x) => s + x, 0).toFixed(2)} />
          <ResultRow label="Toplam çıkış" value={akislar.filter((x) => x < 0).reduce((s, x) => s + x, 0).toFixed(2)} />
          <ResultRow label="IRR" value={irr !== null ? `%${formatNumber(irr, 3)}` : "—"} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          IRR &gt; Zorunlu getiri oranınız ise proje kabul edilebilir. Newton-bisection ile [-99, +200]% aralığında iteratif çözülür.
        </div>
      </div>
    </div>
  );
}
