"use client";

import { useState } from "react";
import { fazlaMesai } from "@/lib/maas";
import { formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function FazlaMesaiHesaplayici() {
  const [maas, setMaas] = useState("30000");
  const [saat, setSaat] = useState("10");
  const [tur, setTur] = useState<"normal" | "tatil">("normal");

  const m = parseFloat(maas.replace(",", ".")) || 0;
  const s = parseFloat(saat.replace(",", ".")) || 0;
  const r = fazlaMesai(m, s, tur);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Brüt Ücret (₺)">
          <input className="field tabular-nums" inputMode="decimal" value={maas} onChange={(e) => setMaas(e.target.value)} />
        </Field>
        <Field label="Fazla Çalışma Saati">
          <input className="field tabular-nums" inputMode="decimal" value={saat} onChange={(e) => setSaat(e.target.value)} />
        </Field>
        <Field label="Çalışma Türü">
          <Segmented
            value={tur}
            onChange={setTur}
            options={[
              { label: "Normal (×1,5)", value: "normal" },
              { label: "Tatil (×2)", value: "tatil" },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Fazla Mesai Ücreti (Brüt)" value={formatTL(r.toplamBrut)} sub={`${s} saat × ${tur === "tatil" ? "2" : "1,5"}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Aylık brüt ücret" value={formatTL(m)} />
          <ResultRow label="Saatlik brüt (225 saat)" value={formatTL(r.saatlikBrut)} />
          <ResultRow label={`Fazla mesai saatlik (×${tur === "tatil" ? "2" : "1,5"})`} value={formatTL(r.saatlikMesai)} />
          <ResultRow label="Toplam fazla mesai (brüt)" value={formatTL(r.toplamBrut)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          İş Kanunu m.41&apos;e göre haftalık 45 saati aşan çalışma fazla çalışmadır; normal saat ücretinin en az %50 fazlasıyla ödenir. Hafta tatili/genel tatil için ayrıca yevmiye eklenir.
        </div>
      </div>
    </div>
  );
}
