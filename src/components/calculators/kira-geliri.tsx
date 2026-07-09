"use client";

import { useState } from "react";
import { kiraGelirMatrahi, formatTL } from "@/lib/calc";
import { gelirVergisiDetay } from "@/lib/maas";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

/** 2026 mesken kira istisnası. UI'de düzenlenebilir tutulur. */
const ISTISNA_VARSAYILAN = 47000;

export function KiraGeliriHesaplayici() {
  const [aylik, setAylik] = useState("15000");
  const [yontem, setYontem] = useState<"goturu" | "gercek">("goturu");
  const [gercek, setGercek] = useState("0");
  const [istisna, setIstisna] = useState(String(ISTISNA_VARSAYILAN));

  const a = parseFloat(aylik.replace(",", ".")) || 0;
  const g = parseFloat(gercek.replace(",", ".")) || 0;
  const i = parseFloat(istisna.replace(",", ".")) || 0;
  const yillik = a * 12;
  const m = kiraGelirMatrahi(yillik, yontem, g, i);
  const gv = gelirVergisiDetay(m.matrah);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Kira Geliri (₺)" hint={`Yıllık: ${formatTL(yillik)}`}>
          <input className="field tabular-nums" inputMode="decimal" value={aylik} onChange={(e) => setAylik(e.target.value)} />
        </Field>
        <Field label="Gider Yöntemi">
          <Segmented
            value={yontem}
            onChange={setYontem}
            options={[
              { label: "Götürü (%15)", value: "goturu" },
              { label: "Gerçek gider", value: "gercek" },
            ]}
          />
        </Field>
        {yontem === "gercek" && (
          <Field label="Yıllık Gerçek Gider (₺)">
            <input className="field tabular-nums" inputMode="decimal" value={gercek} onChange={(e) => setGercek(e.target.value)} />
          </Field>
        )}
        <Field label="Mesken İstisnası (₺)" hint="Her yıl güncellenir; güncel dönem değerini girin.">
          <input className="field tabular-nums" inputMode="decimal" value={istisna} onChange={(e) => setIstisna(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Ödenecek Gelir Vergisi"
          value={formatTL(gv.toplamVergi)}
          sub={`Vergi matrahı: ${formatTL(m.matrah)}`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Yıllık gelir" value={formatTL(m.yillikGelir)} />
          <ResultRow label="Uygulanan istisna" value={`− ${formatTL(m.istisnaTutari)}`} />
          <ResultRow label={yontem === "goturu" ? "Götürü gider (%15)" : "Gerçek gider"} value={`− ${formatTL(m.gider)}`} />
          <ResultRow label="Vergi matrahı" value={formatTL(m.matrah)} />
          <ResultRow label="Toplam gelir vergisi" value={formatTL(gv.toplamVergi)} />
          <ResultRow label="Net kalan" value={formatTL(m.yillikGelir - gv.toplamVergi)} />
        </div>
      </div>
    </div>
  );
}
