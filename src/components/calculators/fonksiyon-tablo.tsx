"use client";
import { useMemo, useState } from "react";
import { safeEval } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { Field } from "@/components/result";

export function FonksiyonTabloHesaplayici() {
  const [ifade, setIfade] = useState("x^2 - 3*x + 2");
  const [xMin, setXMin] = useState("-2");
  const [xMax, setXMax] = useState("5");
  const [adim, setAdim] = useState("0.5");

  const sonuclar = useMemo(() => {
    const mn = parseFloat(xMin.replace(",", ".")) || 0;
    const mx = parseFloat(xMax.replace(",", ".")) || 0;
    const ad = parseFloat(adim.replace(",", ".")) || 1;
    if (ad <= 0 || mn > mx) return [];
    const arr: { x: number; y: number | null }[] = [];
    for (let x = mn; x <= mx + 0.0001; x += ad) {
      try {
        arr.push({ x, y: safeEval(ifade, { x }) });
      } catch {
        arr.push({ x, y: null });
      }
      if (arr.length > 200) break;
    }
    return arr;
  }, [ifade, xMin, xMax, adim]);

  // Min-max normalizasyon (görsel bar için)
  const gecerli = sonuclar.filter((s) => s.y !== null).map((s) => s.y as number);
  const min = gecerli.length ? Math.min(...gecerli) : 0;
  const max = gecerli.length ? Math.max(...gecerli) : 1;
  const aralik = max - min || 1;

  return (
    <div className="space-y-6">
      <Field label="Fonksiyon f(x)" hint="Değişken sadece x. Örn: x^2, sin(x), sqrt(x), log(x)">
        <input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} />
      </Field>

      <div className="grid grid-cols-3 gap-3">
        <Field label="x min"><input className="field tabular-nums" inputMode="decimal" value={xMin} onChange={(e) => setXMin(e.target.value)} /></Field>
        <Field label="x max"><input className="field tabular-nums" inputMode="decimal" value={xMax} onChange={(e) => setXMax(e.target.value)} /></Field>
        <Field label="Adım"><input className="field tabular-nums" inputMode="decimal" value={adim} onChange={(e) => setAdim(e.target.value)} /></Field>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-text-muted">
              <th className="py-2 pr-3 font-medium">x</th>
              <th className="py-2 pr-3 font-medium">f(x)</th>
              <th className="py-2 font-medium">Görsel</th>
            </tr>
          </thead>
          <tbody>
            {sonuclar.map((s, i) => {
              const orn = s.y !== null ? ((s.y - min) / aralik) * 100 : 0;
              return (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-1.5 pr-3 tabular-nums text-text">{formatNumber(s.x, 3)}</td>
                  <td className="py-1.5 pr-3 tabular-nums font-medium text-text">{s.y === null ? "—" : formatNumber(s.y, 4)}</td>
                  <td className="py-1.5 min-w-[100px]">
                    {s.y !== null && (
                      <div className="h-3 rounded bg-primary/20">
                        <div className="h-3 rounded bg-primary" style={{ width: `${orn}%` }} />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Değer sayısı 200 ile sınırlandırılmıştır. Grafiği görsel olarak takip etmek için görsel bar kullanılır (min-max normalizasyon).
      </div>
    </div>
  );
}
