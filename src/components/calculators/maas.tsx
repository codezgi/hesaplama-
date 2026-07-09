"use client";

import { useState } from "react";
import { brutToNet, netToBrut, MAAS } from "@/lib/maas";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function MaasHesaplayici() {
  const [yon, setYon] = useState<"brutnet" | "netbrut">("brutnet");
  const [tutar, setTutar] = useState("50000");

  const t = parseFloat(tutar.replace(",", ".")) || 0;
  const d = yon === "brutnet" ? brutToNet(t) : netToBrut(t);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <Segmented
          value={yon}
          onChange={setYon}
          options={[
            { label: "Brütten Nete", value: "brutnet" },
            { label: "Netten Brüte", value: "netbrut" },
          ]}
        />
        <span className="text-xs text-text-muted">{MAAS.yil} parametreleri</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Field label={yon === "brutnet" ? "Brüt Maaş (₺)" : "Net Maaş (₺)"}>
            <input
              className="field tabular-nums"
              inputMode="decimal"
              value={tutar}
              onChange={(e) => setTutar(e.target.value)}
            />
          </Field>
        </div>

        <ResultHero
          label={yon === "brutnet" ? "Net Maaş (ele geçen)" : "Brüt Maaş"}
          value={formatTL(yon === "brutnet" ? d.net : d.brut)}
          tone="accent"
        />
      </div>

      <div className="card p-4">
        <ResultRow label="Brüt maaş" value={formatTL(d.brut)} />
        <ResultRow label="SGK primi (%14)" value={`− ${formatTL(d.sgkIsci)}`} />
        <ResultRow label="İşsizlik primi (%1)" value={`− ${formatTL(d.issizlikIsci)}`} />
        <ResultRow label="Gelir vergisi" value={`− ${formatTL(d.gelirVergisi)}`} />
        <ResultRow label="Damga vergisi" value={`− ${formatTL(d.damgaVergisi)}`} />
        <ResultRow label="Net maaş" value={formatTL(d.net)} />
      </div>

      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Toplam işveren maliyeti: <strong className="text-text">{formatTL(d.isverenMaliyeti)}</strong>
        <span className="mx-1.5">·</span>
        Hesap ilk aya göredir; asgari ücret gelir ve damga vergisi istisnası uygulanmıştır.
      </div>
    </div>
  );
}
