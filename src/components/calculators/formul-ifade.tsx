"use client";
import { useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { safeEval } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

interface Degisken { ad: string; deger: string; }

export function FormulIfadeHesaplayici() {
  const [ifade, setIfade] = useState("2*x + 3*y - z + sin(a*pi/180)");
  const [dgsList, setDgsList] = useState<Degisken[]>([
    { ad: "x", deger: "10" },
    { ad: "y", deger: "5" },
    { ad: "z", deger: "2" },
    { ad: "a", deger: "30" },
  ]);

  const sonuc = useMemo(() => {
    try {
      const vars: Record<string, number> = {};
      for (const d of dgsList) {
        vars[d.ad] = parseFloat(d.deger.replace(",", ".")) || 0;
      }
      return { deger: safeEval(ifade, vars), hata: null as string | null };
    } catch (e) {
      return { deger: 0, hata: e instanceof Error ? e.message : "Hata" };
    }
  }, [ifade, dgsList]);

  function ekle() {
    if (dgsList.length >= 8) return;
    const kalanHarfler = "abcdefghijklmnopqrstuvw".split("").filter((h) => !dgsList.some((d) => d.ad === h));
    setDgsList([...dgsList, { ad: kalanHarfler[0] ?? "u", deger: "1" }]);
  }
  function sil(i: number) { setDgsList(dgsList.filter((_, x) => x !== i)); }
  function guncelle(i: number, alan: keyof Degisken, val: string) {
    const kopya = [...dgsList];
    kopya[i][alan] = val;
    setDgsList(kopya);
  }

  const ornekler = [
    "2*x + 3*y - z",
    "sqrt(x^2 + y^2)",
    "sin(x*pi/180) + cos(y*pi/180)",
    "log(x) * ln(y)",
    "(a*x + b) / (c*y + d)",
    "x^3 - 3*x*y + y^3",
    "exp(-x^2/2)",
  ];

  return (
    <div className="space-y-6">
      <Field label="Formül / İfade" hint="Kullanılabilir: + − × ÷ ^ ( ), sin/cos/tan, sqrt, log, ln, exp, pi, e">
        <input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} />
      </Field>

      <div className="flex flex-wrap gap-2">
        {ornekler.map((o) => (
          <button key={o} type="button" onClick={() => setIfade(o)} className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-muted hover:text-primary hover:border-primary/40">
            {o}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-text">Değişkenler ({dgsList.length})</div>
          <button type="button" onClick={ekle} disabled={dgsList.length >= 8} className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1 text-sm text-text hover:bg-surface-2 disabled:opacity-50">
            <Plus className="h-4 w-4" /> Değişken ekle
          </button>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {dgsList.map((d, i) => (
            <div key={i} className="flex items-center gap-1">
              <input className="field !w-14 !py-1.5 text-center font-mono font-bold text-primary" maxLength={1} value={d.ad} onChange={(e) => guncelle(i, "ad", e.target.value.toLowerCase().replace(/[^a-z]/g, ""))} />
              <span className="text-text-muted">=</span>
              <input className="field !py-1.5 tabular-nums" inputMode="decimal" value={d.deger} onChange={(e) => guncelle(i, "deger", e.target.value)} />
              <button type="button" onClick={() => sil(i)} className="p-1 text-text-muted hover:text-accent"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
      </div>

      {sonuc.hata ? (
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">{sonuc.hata}</div>
      ) : (
        <ResultHero label="Sonuç" value={formatNumber(sonuc.deger, 6)} sub={ifade} tone="accent" />
      )}

      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        <strong>Örnek fonksiyonlar:</strong> <code className="font-mono">sin(x), cos(x), tan(x), sqrt(x), log(x), ln(x), exp(x), abs(x), floor(x), ceil(x)</code> · Sabitler: <code className="font-mono">pi, e</code>
      </div>
    </div>
  );
}
