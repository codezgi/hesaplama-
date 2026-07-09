"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import {
  hesaplaGpa,
  HARF_NOTLARI,
  formatNumber,
  type DersSatiri,
  type Agirlik,
} from "@/lib/calc";
import { ResultHero, Segmented } from "@/components/result";

let idSeq = 0;
const yeniDers = (ad = "", kredi = 3, akts = 5, katsayi = 4): DersSatiri & { id: number } => ({
  id: idSeq++,
  ad,
  kredi,
  akts,
  katsayi,
});

export function GpaHesaplayici() {
  const [agirlik, setAgirlik] = useState<Agirlik>("kredi");
  const [dersler, setDersler] = useState<(DersSatiri & { id: number })[]>(() => [
    yeniDers("Matematik", 4, 6, 4),
    yeniDers("Fizik", 3, 5, 3),
    yeniDers("Türk Dili", 2, 3, 3.5),
  ]);

  const { gpa, toplamKredi, toplamAkts } = hesaplaGpa(dersler, agirlik);

  function update(id: number, patch: Partial<DersSatiri>) {
    setDersler((d) => d.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }
  function remove(id: number) {
    setDersler((d) => d.filter((r) => r.id !== id));
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-medium text-text">Ortalama neye göre hesaplansın?</span>
        <Segmented
          value={agirlik}
          onChange={setAgirlik}
          options={[
            { label: "Krediye göre", value: "kredi" },
            { label: "AKTS'ye göre", value: "akts" },
          ]}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2 text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-text-muted">
              <th className="px-2 pb-1">Ders</th>
              <th className="w-20 px-2 pb-1">Kredi</th>
              <th className="w-20 px-2 pb-1">AKTS</th>
              <th className="w-28 px-2 pb-1">Not</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {dersler.map((d, i) => (
              <tr key={d.id}>
                <td className="px-1">
                  <input
                    className="field !py-2"
                    value={d.ad}
                    placeholder={`${i + 1}. ders`}
                    onChange={(e) => update(d.id, { ad: e.target.value })}
                  />
                </td>
                <td className="px-1">
                  <input
                    className={`field !py-2 tabular-nums ${agirlik === "kredi" ? "ring-1 ring-primary/30" : ""}`}
                    type="number"
                    min={0}
                    max={30}
                    value={d.kredi}
                    onChange={(e) => update(d.id, { kredi: parseFloat(e.target.value) || 0 })}
                  />
                </td>
                <td className="px-1">
                  <input
                    className={`field !py-2 tabular-nums ${agirlik === "akts" ? "ring-1 ring-primary/30" : ""}`}
                    type="number"
                    min={0}
                    max={60}
                    value={d.akts}
                    onChange={(e) => update(d.id, { akts: parseFloat(e.target.value) || 0 })}
                  />
                </td>
                <td className="px-1">
                  <select
                    className="field !py-2"
                    value={d.katsayi}
                    onChange={(e) => update(d.id, { katsayi: parseFloat(e.target.value) })}
                  >
                    {HARF_NOTLARI.map((h) => (
                      <option key={h.harf} value={h.katsayi}>
                        {h.harf} ({h.katsayi.toFixed(2)})
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-1 text-center">
                  <button
                    onClick={() => remove(d.id)}
                    aria-label="Dersi sil"
                    className="grid h-9 w-9 place-items-center rounded-lg text-text-muted hover:bg-surface-2 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => setDersler((d) => [...d, yeniDers()])}
        className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2.5 text-sm font-medium text-text-muted hover:border-primary hover:text-primary transition-colors"
      >
        <Plus className="h-4 w-4" /> Ders ekle
      </button>

      <ResultHero
        label={`Not Ortalaması · ${agirlik === "akts" ? "AKTS ağırlıklı" : "Kredi ağırlıklı"} (4.00)`}
        value={formatNumber(gpa, 2)}
        sub={`${dersler.length} ders · ${formatNumber(toplamKredi, 0)} kredi · ${formatNumber(toplamAkts, 0)} AKTS`}
        tone="accent"
      />
    </div>
  );
}
