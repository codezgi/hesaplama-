"use client";

import { useEffect, useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";
import type { KurPaketi } from "@/lib/rates";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function AltinHesaplayici() {
  const [paket, setPaket] = useState<KurPaketi | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [miktar, setMiktar] = useState("10");
  const [tur, setTur] = useState("GRA");

  useEffect(() => {
    fetch("/api/kurlar")
      .then((r) => r.json())
      .then((d: KurPaketi) => setPaket(d))
      .catch(() => {})
      .finally(() => setYukleniyor(false));
  }, []);

  const altinlar = useMemo(() => paket?.altin ?? [], [paket]);
  const secili = altinlar.find((a) => a.code === tur) ?? altinlar[0];

  const m = parseFloat(miktar.replace(",", ".")) || 0;
  const alisDeger = secili ? m * secili.alis : 0;
  const satisDeger = secili ? m * secili.satis : 0;

  const guncelleme = paket?.updatedAt
    ? new Date(paket.updatedAt).toLocaleString("tr-TR", { dateStyle: "medium", timeStyle: "short" })
    : "—";

  return (
    <div className="space-y-5">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <Field label="Altın Türü">
            <select className="field" value={tur} onChange={(e) => setTur(e.target.value)}>
              {altinlar.map((a) => (
                <option key={a.code} value={a.code}>{a.name}</option>
              ))}
            </select>
          </Field>
          <Field label={`Miktar (${secili?.birim ?? "adet"})`}>
            <input className="field tabular-nums" inputMode="decimal" value={miktar}
              onChange={(e) => setMiktar(e.target.value)} />
          </Field>
        </div>

        <div className="space-y-4">
          <ResultHero
            label={`${secili ? secili.name : "Altın"} · Satış Değeri`}
            value={formatTL(satisDeger)}
            sub={yukleniyor ? "Fiyatlar yükleniyor…" : secili ? `Birim satış: ${formatTL(secili.satis)}` : ""}
            tone="accent"
          />
          {secili && (
            <div className="card p-4">
              <ResultRow label="Alış değeri" value={formatTL(alisDeger)} />
              <ResultRow label="Birim alış" value={formatTL(secili.alis)} />
              <ResultRow label="Miktar" value={`${formatNumber(m)} ${secili.birim}`} />
            </div>
          )}
        </div>
      </div>

      {altinlar.length > 0 && (
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" /> Kapalıçarşı · gerçek zamanlı
            </span>
            <span>Güncelleme: {guncelleme}</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-text-muted">
                <th className="px-4 py-2 font-medium">Tür</th>
                <th className="px-4 py-2 text-right font-medium">Alış (₺)</th>
                <th className="px-4 py-2 text-right font-medium">Satış (₺)</th>
              </tr>
            </thead>
            <tbody>
              {altinlar.map((a) => (
                <tr key={a.code} className="border-t border-border">
                  <td className="px-4 py-2 font-medium text-text">{a.name}</td>
                  <td className="px-4 py-2 text-right tabular-nums">{formatNumber(a.alis, 2)}</td>
                  <td className="px-4 py-2 text-right tabular-nums">{formatNumber(a.satis, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
