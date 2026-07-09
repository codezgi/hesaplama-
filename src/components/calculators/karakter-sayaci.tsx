"use client";

import { useMemo, useState } from "react";
import { ResultRow, Field } from "@/components/result";
import { formatNumber } from "@/lib/calc";

export function KarakterSayaciHesaplayici() {
  const [metin, setMetin] = useState("");

  const s = useMemo(() => {
    const karakter = metin.length;
    const bosluksuz = metin.replace(/\s/g, "").length;
    const kelime = metin.trim() ? metin.trim().split(/\s+/).length : 0;
    const cumle = metin.trim() ? metin.split(/[.!?]+/).filter((c) => c.trim()).length : 0;
    const satir = metin ? metin.split("\n").length : 0;
    const paragraf = metin.trim() ? metin.split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
    // Ortalama okuma hızı ~200 kelime/dakika
    const okumaSn = Math.round((kelime / 200) * 60);
    return { karakter, bosluksuz, kelime, cumle, satir, paragraf, okumaSn };
  }, [metin]);

  const okuma = s.okumaSn < 60
    ? `${s.okumaSn} saniye`
    : `${Math.floor(s.okumaSn / 60)} dk ${s.okumaSn % 60} sn`;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="Metin">
          <textarea
            className="field h-64 resize-y"
            value={metin}
            onChange={(e) => setMetin(e.target.value)}
            placeholder="Metin buraya…"
          />
        </Field>
        <button
          type="button"
          onClick={() => setMetin("")}
          className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2"
        >
          Temizle
        </button>
      </div>

      <div className="card p-4">
        <ResultRow label="Karakter (boşluklu)" value={formatNumber(s.karakter, 0)} />
        <ResultRow label="Karakter (boşluksuz)" value={formatNumber(s.bosluksuz, 0)} />
        <ResultRow label="Kelime" value={formatNumber(s.kelime, 0)} />
        <ResultRow label="Cümle" value={formatNumber(s.cumle, 0)} />
        <ResultRow label="Satır" value={formatNumber(s.satir, 0)} />
        <ResultRow label="Paragraf" value={formatNumber(s.paragraf, 0)} />
        <ResultRow label="Tahmini okuma süresi" value={okuma} />
      </div>
    </div>
  );
}
