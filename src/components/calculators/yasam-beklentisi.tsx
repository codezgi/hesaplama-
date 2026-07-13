"use client";

import { useState } from "react";
import { yasamBeklentisi, type Cinsiyet } from "@/lib/saglik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function YasamBeklentisiHesaplayici() {
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("erkek");
  const [yas, setYas] = useState("30");
  const [sigara, setSigara] = useState(false);
  const [aktif, setAktif] = useState(true);
  const [saglikli, setSaglikli] = useState(true);

  const y = parseFloat(yas.replace(",", ".")) || 0;
  const r = yasamBeklentisi(y, cinsiyet, sigara, aktif, saglikli);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Cinsiyet">
          <Segmented
            value={cinsiyet}
            onChange={setCinsiyet}
            options={[
              { label: "Erkek", value: "erkek" },
              { label: "Kadın", value: "kadin" },
            ]}
          />
        </Field>
        <Field label="Yaş">
          <input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} />
        </Field>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={sigara} onChange={(e) => setSigara(e.target.checked)} /> Sigara içiyorum (−8 yıl)</label>
          <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={aktif} onChange={(e) => setAktif(e.target.checked)} /> Düzenli spor yapıyorum</label>
          <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={saglikli} onChange={(e) => setSaglikli(e.target.checked)} /> Sağlıklı beslenirim</label>
        </div>
      </div>

      <div className="space-y-4">
        <ResultHero label="Tahmini Yaşam Beklentisi" value={`${formatNumber(r.beklenenYas, 1)} yaş`} sub={`Kalan ~ ${formatNumber(r.kalanYil, 1)} yıl`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Beklenen ölüm yaşı" value={`${formatNumber(r.beklenenYas, 1)}`} />
          <ResultRow label="Kalan yıl" value={`${formatNumber(r.kalanYil, 1)}`} />
          <ResultRow label="Kalan gün" value={`${formatNumber(r.kalanGun, 0)}`} />
          <ResultRow label="Yaşam skoru" value={`${r.yasSkoru} / 100`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          TÜİK 2023 Türkiye ortalamaları (kadın 81,3, erkek 75,9) baz alınmıştır. Gerçek aktüerya çok daha karmaşık faktör içerir; bu bir bilgilendirmedir.
        </div>
      </div>
    </div>
  );
}
