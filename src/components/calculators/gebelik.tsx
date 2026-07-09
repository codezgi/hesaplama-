"use client";

import { useState } from "react";
import { hesaplaGebelik, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

function tarihTR(d: Date): string {
  return d.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
}

export function GebelikHesaplayici() {
  const [sat, setSat] = useState("");

  const d = sat ? new Date(sat) : null;
  const valid = d && !isNaN(d.getTime()) && d <= new Date();
  const r = valid ? hesaplaGebelik(d!) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Son Adet Tarihi (SAT)" hint="Son adet döneminin ilk günü.">
          <input
            className="field"
            type="date"
            value={sat}
            max={bugun}
            onChange={(e) => setSat(e.target.value)}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Tahmini Doğum Tarihi"
          value={r ? tarihTR(r.edd) : "—"}
          sub={r ? `${r.haftaTam}. hafta ${r.gunKalan} gün · ${r.trimester}. trimester` : "Son adet tarihini girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="Gebelik süresi" value={`${r.haftaTam} hafta ${r.gunKalan} gün`} />
            <ResultRow label="Trimester" value={`${r.trimester}. trimester`} />
            <ResultRow label="Doğuma kalan" value={`${r.kalanHafta} hafta (${formatNumber(r.kalanGun, 0)} gün)`} />
            <ResultRow label="Toplam süre" value="40 hafta (280 gün)" />
          </div>
        )}
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Naegele kuralına göre tahminidir (SAT + 280 gün). Kesin takip için hekiminize danışın.
        </div>
      </div>
    </div>
  );
}
