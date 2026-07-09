"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRightLeft, RefreshCw } from "lucide-react";
import type { KurPaketi } from "@/lib/rates";
import { formatNumber } from "@/lib/calc";
import { ResultHero, Field } from "@/components/result";

const TRY = { code: "TRY", name: "Türk Lirası", alis: 1, satis: 1 };

export function DovizHesaplayici() {
  const [paket, setPaket] = useState<KurPaketi | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [tutar, setTutar] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("TRY");

  useEffect(() => {
    fetch("/api/kurlar")
      .then((r) => r.json())
      .then((d: KurPaketi) => setPaket(d))
      .catch(() => {})
      .finally(() => setYukleniyor(false));
  }, []);

  const paralar = useMemo(() => [TRY, ...(paket?.doviz ?? [])], [paket]);
  const rate = (code: string) => paralar.find((p) => p.code === code)?.satis ?? 0;

  const t = parseFloat(tutar.replace(",", ".")) || 0;
  const rFrom = rate(from);
  const rTo = rate(to);
  const sonuc = rTo > 0 ? (t * rFrom) / rTo : 0;

  function swap() {
    setFrom(to);
    setTo(from);
  }

  const guncelleme = paket?.updatedAt
    ? new Date(paket.updatedAt).toLocaleString("tr-TR", { dateStyle: "medium", timeStyle: "short" })
    : "—";

  return (
    <div className="space-y-5">
      <div className="grid items-end gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-3">
          <Field label="Miktar">
            <input className="field tabular-nums" inputMode="decimal" value={tutar}
              onChange={(e) => setTutar(e.target.value)} />
          </Field>
          <Field label="Kaynak">
            <select className="field" value={from} onChange={(e) => setFrom(e.target.value)}>
              {paralar.map((p) => (
                <option key={p.code} value={p.code}>{p.code} · {p.name}</option>
              ))}
            </select>
          </Field>
        </div>

        <button
          onClick={swap}
          aria-label="Para birimlerini değiştir"
          className="mb-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border text-primary hover:bg-surface-2 transition-colors sm:mb-2.5"
        >
          <ArrowRightLeft className="h-5 w-5" />
        </button>

        <div className="space-y-3">
          <div className="hidden h-[70px] sm:block" aria-hidden />
          <Field label="Hedef">
            <select className="field" value={to} onChange={(e) => setTo(e.target.value)}>
              {paralar.map((p) => (
                <option key={p.code} value={p.code}>{p.code} · {p.name}</option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      <ResultHero
        label={`${formatNumber(t)} ${from} =`}
        value={`${formatNumber(sonuc, 2)} ${to}`}
        sub={yukleniyor ? "Kurlar yükleniyor…" : `1 ${from} = ${formatNumber(rFrom / (rTo || 1), 4)} ${to}`}
        tone="accent"
      />

      {paket?.doviz && paket.doviz.length > 0 && (
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" /> TCMB · Merkez Bankası kuru
            </span>
            <span>Güncelleme: {guncelleme}</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-text-muted">
                <th className="px-4 py-2 font-medium">Birim</th>
                <th className="px-4 py-2 text-right font-medium">Alış (₺)</th>
                <th className="px-4 py-2 text-right font-medium">Satış (₺)</th>
              </tr>
            </thead>
            <tbody>
              {paket.doviz.slice(0, 8).map((d) => (
                <tr key={d.code} className="border-t border-border">
                  <td className="px-4 py-2 font-medium text-text">{d.code} · {d.name}</td>
                  <td className="px-4 py-2 text-right tabular-nums">{formatNumber(d.alis, 4)}</td>
                  <td className="px-4 py-2 text-right tabular-nums">{formatNumber(d.satis, 4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
