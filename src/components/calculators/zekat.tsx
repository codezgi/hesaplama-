"use client";

import { useState } from "react";
import { zekatHesapla } from "@/lib/yasam";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function ZekatHesaplayici() {
  const [mal, setMal] = useState("500000");
  const [borc, setBorc] = useState("0");
  const [gram, setGram] = useState("2900");

  const m = parseFloat(mal.replace(",", ".")) || 0;
  const b = parseFloat(borc.replace(",", ".")) || 0;
  const g = parseFloat(gram.replace(",", ".")) || 0;
  const r = zekatHesapla(m, b, g);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Toplam Mal Varlığı (₺)" hint="Nakit + banka + altın + döviz + ticari mal.">
          <input className="field tabular-nums" inputMode="decimal" value={mal} onChange={(e) => setMal(e.target.value)} />
        </Field>
        <Field label="Borçlarınız (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={borc} onChange={(e) => setBorc(e.target.value)} />
        </Field>
        <Field label="Gram Altın Fiyatı (₺)" hint="Nisap = 85 gr altın. Güncel fiyatı girin.">
          <input className="field tabular-nums" inputMode="decimal" value={gram} onChange={(e) => setGram(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label={r.yukumlu ? "Ödemeniz Gereken Zekat" : "Yükümlü Değilsiniz"}
          value={r.yukumlu ? formatTL(r.zekat) : "—"}
          sub={`Nisap: ${formatTL(r.nisap)} · Net mal: ${formatTL(r.net)}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Net mal varlığı" value={formatTL(r.net)} />
          <ResultRow label="Nisap (85 gr altın)" value={formatTL(r.nisap)} />
          <ResultRow label="Yükümlülük" value={r.yukumlu ? "Var" : "Yok"} />
          <ResultRow label="Zekat (%2,5)" value={formatTL(r.zekat)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Nisap üzeri mal 1 yıl elde kaldıysa zekat farz olur. Bilgi amaçlıdır; kesin dini hüküm için Diyanet İşleri Başkanlığı fetvasını esas alınız.
        </div>
      </div>
    </div>
  );
}
