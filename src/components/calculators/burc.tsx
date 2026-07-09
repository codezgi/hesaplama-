"use client";

import { useState } from "react";
import { burcBul } from "@/lib/yasam";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function BurcHesaplayici() {
  const [tarih, setTarih] = useState("2000-05-15");

  const d = tarih ? new Date(tarih) : null;
  const valid = d && !isNaN(d.getTime());
  const b = valid ? burcBul(d!) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Doğum Tarihi">
          <input className="field" type="date" value={tarih} onChange={(e) => setTarih(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Burcunuz" value={b?.ad ?? "—"} sub={b?.ozet} tone="accent" />
        {b && (
          <div className="card p-4">
            <ResultRow label="Burç" value={b.ad} />
            <ResultRow label="Element" value={b.element} />
            <ResultRow label="Yönetici gezegen" value={b.gezegen} />
          </div>
        )}
      </div>
    </div>
  );
}
