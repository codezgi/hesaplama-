"use client";

import { useState } from "react";
import { ihbarTazminati } from "@/lib/maas";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function IhbarTazminatiHesaplayici() {
  const [giris, setGiris] = useState("2022-01-01");
  const [cikis, setCikis] = useState(bugun);
  const [maas, setMaas] = useState("50000");

  const gd = new Date(giris);
  const cd = new Date(cikis);
  const m = parseFloat(maas.replace(",", ".")) || 0;
  const valid = !isNaN(gd.getTime()) && !isNaN(cd.getTime()) && cd > gd && m > 0;
  const r = valid ? ihbarTazminati(gd, cd, m) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İşe Giriş Tarihi">
          <input className="field" type="date" value={giris} max={cikis} onChange={(e) => setGiris(e.target.value)} />
        </Field>
        <Field label="İşten Çıkış Tarihi">
          <input className="field" type="date" value={cikis} min={giris} onChange={(e) => setCikis(e.target.value)} />
        </Field>
        <Field label="Giydirilmiş Brüt Aylık Ücret (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={maas} onChange={(e) => setMaas(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Net İhbar Tazminatı"
          value={r ? formatTL(r.net) : "—"}
          sub={r ? `${r.hafta} hafta (${r.gun} gün) ihbar süresi` : "Bilgileri girin"}
          tone="accent"
        />
        {r && (
          <div className="card p-4">
            <ResultRow label="İhbar süresi" value={`${r.hafta} hafta`} />
            <ResultRow label="Brüt tazminat" value={formatTL(r.brut)} />
            <ResultRow label="Gelir vergisi (~%15)" value={`− ${formatTL(r.gelirVergisi)}`} />
            <ResultRow label="Damga vergisi (binde 7,59)" value={`− ${formatTL(r.damgaVergisi)}`} />
            <ResultRow label="Net tazminat" value={formatTL(r.net)} />
          </div>
        )}
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          İhbar süreleri (İş K. m.17): 0-6 ay: 2 hafta, 6-18 ay: 4, 18 ay-3 yıl: 6, 3+ yıl: 8 hafta. Kıdemin aksine gelir vergisi kesilir.
        </div>
      </div>
    </div>
  );
}
