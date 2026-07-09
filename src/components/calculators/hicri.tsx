"use client";

import { useState } from "react";
import { miladiToHicri } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function HicriHesaplayici() {
  const [tarih, setTarih] = useState(bugun);

  const d = tarih ? new Date(tarih) : null;
  const valid = d && !isNaN(d.getTime());
  const r = valid ? miladiToHicri(d!) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Miladi Tarih">
          <input className="field" type="date" value={tarih} onChange={(e) => setTarih(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Hicri Tarih"
          value={r ? `${r.gun} ${r.ayAdi} ${r.yil}` : "—"}
          sub={r ? "Kuwaiti algoritması (yaklaşık)" : "Tarih girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Gün" value={`${r.gun}`} />
            <ResultRow label="Ay" value={`${r.ay} — ${r.ayAdi}`} />
            <ResultRow label="Yıl" value={`${r.yil} H.`} />
          </div>
        )}
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Hicri takvim ay hareketine dayanır; astronomik gözlemle 1-2 gün farklılık olabilir. Resmi işlerde Diyanet takvimini esas alın.
        </div>
      </div>
    </div>
  );
}
