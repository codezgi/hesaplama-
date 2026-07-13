"use client";

import { useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { kararMatrisi, formatNumber } from "@/lib/calc";
import { ResultHero, Field } from "@/components/result";

interface Kriter { ad: string; agirlik: number; }
interface Secenek { ad: string; puanlar: number[]; }

export function KararMatrisiHesaplayici() {
  const [kriterler, setKriterler] = useState<Kriter[]>([
    { ad: "Fiyat", agirlik: 5 },
    { ad: "Kalite", agirlik: 4 },
    { ad: "Kullanışlılık", agirlik: 3 },
  ]);
  const [secenekler, setSecenekler] = useState<Secenek[]>([
    { ad: "Seçenek A", puanlar: [7, 8, 6] },
    { ad: "Seçenek B", puanlar: [8, 6, 7] },
    { ad: "Seçenek C", puanlar: [6, 9, 8] },
  ]);

  function kriterEkle() {
    setKriterler([...kriterler, { ad: `Kriter ${kriterler.length + 1}`, agirlik: 3 }]);
    setSecenekler(secenekler.map((s) => ({ ...s, puanlar: [...s.puanlar, 5] })));
  }
  function kriterSil(i: number) {
    setKriterler(kriterler.filter((_, x) => x !== i));
    setSecenekler(secenekler.map((s) => ({ ...s, puanlar: s.puanlar.filter((_, x) => x !== i) })));
  }
  function secenekEkle() {
    setSecenekler([...secenekler, { ad: `Seçenek ${String.fromCharCode(65 + secenekler.length)}`, puanlar: kriterler.map(() => 5) }]);
  }
  function secenekSil(i: number) {
    setSecenekler(secenekler.filter((_, x) => x !== i));
  }
  function updateK(i: number, key: keyof Kriter, val: string) {
    const kopya = [...kriterler];
    (kopya[i] as unknown as Record<string, unknown>)[key] = key === "agirlik" ? parseFloat(val) || 0 : val;
    setKriterler(kopya);
  }
  function updateS(i: number, ad: string) {
    const kopya = [...secenekler];
    kopya[i].ad = ad;
    setSecenekler(kopya);
  }
  function updateP(sIdx: number, kIdx: number, val: string) {
    const kopya = [...secenekler];
    kopya[sIdx].puanlar[kIdx] = parseFloat(val) || 0;
    setSecenekler(kopya);
  }

  const sonuclar = kararMatrisi(secenekler, kriterler.map((k) => k.agirlik));
  const kazanan = sonuclar[0];

  return (
    <div className="space-y-6">
      <ResultHero
        label="Önerilen Seçenek"
        value={kazanan?.secenek ?? "—"}
        sub={kazanan ? `Skor: ${formatNumber(kazanan.skor, 2)} (%${formatNumber(kazanan.yuzde, 1)})` : ""}
        tone="accent"
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-2 pr-2 text-text-muted font-medium">Seçenek \ Kriter</th>
              {kriterler.map((k, i) => (
                <th key={i} className="py-2 pr-2">
                  <input className="field !py-1 !text-sm" value={k.ad} onChange={(e) => updateK(i, "ad", e.target.value)} />
                  <div className="mt-1">
                    <input type="number" className="field !py-1 !text-sm w-16 tabular-nums" value={k.agirlik} min={1} max={10} onChange={(e) => updateK(i, "agirlik", e.target.value)} />
                    <button type="button" onClick={() => kriterSil(i)} className="ml-1 text-text-muted hover:text-accent">
                      <Trash2 className="inline h-3.5 w-3.5" />
                    </button>
                  </div>
                </th>
              ))}
              <th className="py-2 text-right font-medium">Skor</th>
            </tr>
          </thead>
          <tbody>
            {secenekler.map((s, sIdx) => {
              const skor = sonuclar.find((x) => x.secenek === s.ad)?.skor ?? 0;
              return (
                <tr key={sIdx} className="border-b border-border last:border-0">
                  <td className="py-2 pr-2">
                    <input className="field !py-1 !text-sm" value={s.ad} onChange={(e) => updateS(sIdx, e.target.value)} />
                    <button type="button" onClick={() => secenekSil(sIdx)} className="ml-1 text-text-muted hover:text-accent">
                      <Trash2 className="inline h-3.5 w-3.5" />
                    </button>
                  </td>
                  {kriterler.map((_, kIdx) => (
                    <td key={kIdx} className="py-2 pr-2">
                      <input type="number" className="field !py-1 !text-sm w-16 tabular-nums" value={s.puanlar[kIdx] ?? 0} min={0} max={10} onChange={(e) => updateP(sIdx, kIdx, e.target.value)} />
                    </td>
                  ))}
                  <td className="py-2 text-right tabular-nums font-semibold text-primary">{formatNumber(skor, 2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2">
        <Field label="">
          <button type="button" onClick={secenekEkle} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2">
            <Plus className="h-4 w-4" /> Seçenek ekle
          </button>
        </Field>
        <Field label="">
          <button type="button" onClick={kriterEkle} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2">
            <Plus className="h-4 w-4" /> Kriter ekle
          </button>
        </Field>
      </div>

      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Ağırlıklı Karar Matrisi (Weighted Decision Matrix). Puanlar 0-10 arası, ağırlıklar 1-10 arası girilir. En yüksek skorlu seçenek önerilir.
      </div>
    </div>
  );
}
