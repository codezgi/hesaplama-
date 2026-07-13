"use client";

import { useState } from "react";
import { ZAMAN_DILIMLERI, zamanDilimiFarki } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const pad2 = (n: number) => n.toString().padStart(2, "0");

export function ZamanDilimiHesaplayici() {
  const [from, setFrom] = useState("ist");
  const [to, setTo] = useState("nyc");
  const [saat, setSaat] = useState("14:00");

  const fromZ = ZAMAN_DILIMLERI.find((z) => z.key === from);
  const toZ = ZAMAN_DILIMLERI.find((z) => z.key === to);
  const [h, m] = saat.split(":").map((x) => parseInt(x, 10) || 0);
  const r = zamanDilimiFarki(fromZ?.utcOfset ?? 0, toZ?.utcOfset ?? 0, h, m);
  const gunEtiket = r.gunFarki === 0 ? "" : r.gunFarki > 0 ? " (ertesi gün)" : " (önceki gün)";

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kaynak Dilim">
          <select className="field" value={from} onChange={(e) => setFrom(e.target.value)}>
            {ZAMAN_DILIMLERI.map((z) => <option key={z.key} value={z.key}>{z.ad}</option>)}
          </select>
        </Field>
        <Field label="Saat (HH:MM)">
          <input className="field tabular-nums" type="time" value={saat} onChange={(e) => setSaat(e.target.value)} />
        </Field>
        <Field label="Hedef Dilim">
          <select className="field" value={to} onChange={(e) => setTo(e.target.value)}>
            {ZAMAN_DILIMLERI.map((z) => <option key={z.key} value={z.key}>{z.ad}</option>)}
          </select>
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label={`${toZ?.ad ?? ""}`}
          value={`${pad2(r.hedefSaat)}:${pad2(r.hedefDakika)}${gunEtiket}`}
          sub={`Fark: ${r.fark >= 0 ? "+" : ""}${r.fark} saat`}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Kaynak" value={`${fromZ?.ad} · ${saat}`} />
          <ResultRow label="Hedef" value={`${toZ?.ad}`} />
          <ResultRow label="Saat farkı" value={`${r.fark >= 0 ? "+" : ""}${r.fark} saat`} />
          <ResultRow label="Hedef zaman" value={`${pad2(r.hedefSaat)}:${pad2(r.hedefDakika)}${gunEtiket}`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Not: DST (yaz saati) uygulanmaz — bazı ülkelerde saat mart-kasım arası +1 saat kayar.
        </div>
      </div>
    </div>
  );
}
