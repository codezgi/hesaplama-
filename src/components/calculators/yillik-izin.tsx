"use client";

import { useState } from "react";
import { yillikIzin } from "@/lib/maas";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function YillikIzinHesaplayici() {
  const [yil, setYil] = useState("4");
  const [yas, setYas] = useState("28");

  const y = parseFloat(yil.replace(",", ".")) || 0;
  const ya = parseFloat(yas.replace(",", ".")) || 0;
  const r = yillikIzin(y, ya);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kıdem Yılı">
          <input className="field tabular-nums" inputMode="decimal" value={yil} onChange={(e) => setYil(e.target.value)} />
        </Field>
        <Field label="Yaş" hint="18 altı ve 50 üstünde izin en az 20 gündür.">
          <input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Yıllık Ücretli İzin Hakkı" value={r.gun > 0 ? `${r.gun} gün` : "Hak yok"} sub={r.aciklama} tone="accent" />
        <div className="card p-4">
          <ResultRow label="1-5 yıl kıdem" value="14 gün" />
          <ResultRow label="5-15 yıl kıdem" value="20 gün" />
          <ResultRow label="15+ yıl kıdem" value="26 gün" />
          <ResultRow label="18 altı & 50 üstü (asgari)" value="20 gün" />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          İş Kanunu m.53 uyarınca 1 yıl kıdemi doldurmuş her işçi ücretli yıllık izne hak kazanır. Toplu iş sözleşmelerinde daha yüksek süreler belirlenebilir.
        </div>
      </div>
    </div>
  );
}
