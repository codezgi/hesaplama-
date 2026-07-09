"use client";

import { useCallback, useEffect, useState } from "react";
import { RefreshCw, Copy, Check } from "lucide-react";
import { rastgeleSayilar } from "@/lib/matematik";
import { Field, Segmented } from "@/components/result";

export function RastgeleSayiHesaplayici() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [adet, setAdet] = useState("5");
  const [mod, setMod] = useState<"tekrarli" | "tekrarsiz">("tekrarli");
  const [liste, setListe] = useState<number[]>([]);
  const [kopyalandi, setKopyalandi] = useState(false);

  const uret = useCallback(() => {
    const mn = parseFloat(min.replace(",", ".")) || 0;
    const mx = parseFloat(max.replace(",", ".")) || 0;
    const a = parseInt(adet, 10) || 0;
    setListe(rastgeleSayilar(mn, mx, a, mod === "tekrarsiz"));
  }, [min, max, adet, mod]);

  useEffect(() => {
    uret();
  }, [uret]);

  async function kopyala() {
    if (!liste.length) return;
    try {
      await navigator.clipboard.writeText(liste.join(", "));
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 1500);
    } catch {}
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Min">
          <input className="field tabular-nums" inputMode="numeric" value={min} onChange={(e) => setMin(e.target.value)} />
        </Field>
        <Field label="Max">
          <input className="field tabular-nums" inputMode="numeric" value={max} onChange={(e) => setMax(e.target.value)} />
        </Field>
        <Field label="Adet">
          <input className="field tabular-nums" inputMode="numeric" value={adet} onChange={(e) => setAdet(e.target.value)} />
        </Field>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented
          value={mod}
          onChange={setMod}
          options={[
            { label: "Tekrarlı", value: "tekrarli" },
            { label: "Tekrarsız", value: "tekrarsiz" },
          ]}
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={uret}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2"
          >
            <RefreshCw className="h-4 w-4" /> Yeniden üret
          </button>
          <button
            type="button"
            onClick={kopyala}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2"
          >
            {kopyalandi ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            {kopyalandi ? "Kopyalandı" : "Kopyala"}
          </button>
        </div>
      </div>

      <div className="card p-4">
        <div className="flex flex-wrap gap-2">
          {liste.length ? (
            liste.map((n, i) => (
              <span
                key={i}
                className="rounded-lg bg-primary-soft px-3 py-1.5 font-mono text-sm font-semibold text-primary"
              >
                {n}
              </span>
            ))
          ) : (
            <span className="text-sm text-text-muted">Değer üretilmedi.</span>
          )}
        </div>
      </div>
    </div>
  );
}
