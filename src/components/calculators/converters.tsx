"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { ceviriTurleri, cevir } from "@/lib/converters";
import { formatNumber } from "@/lib/calc";
import { ResultHero, Field } from "@/components/result";

function UnitConverter({ turKey }: { turKey: string }) {
  const tur = ceviriTurleri[turKey];
  const [deger, setDeger] = useState("1");
  const [from, setFrom] = useState(tur.birimler[0].code);
  const [to, setTo] = useState(tur.birimler[1]?.code ?? tur.birimler[0].code);

  const v = parseFloat(deger.replace(",", ".")) || 0;
  const sonuc = cevir(turKey, v, from, to);
  const fromKisa = tur.birimler.find((b) => b.code === from)?.kisa ?? "";
  const toKisa = tur.birimler.find((b) => b.code === to)?.kisa ?? "";

  function takas() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className="space-y-5">
      <div className="grid items-end gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <Field label="Değer">
          <input
            className="field tabular-nums"
            inputMode="decimal"
            value={deger}
            onChange={(e) => setDeger(e.target.value)}
          />
          <select className="field mt-2" value={from} onChange={(e) => setFrom(e.target.value)}>
            {tur.birimler.map((b) => (
              <option key={b.code} value={b.code}>
                {b.ad} ({b.kisa})
              </option>
            ))}
          </select>
        </Field>

        <button
          type="button"
          onClick={takas}
          aria-label="Birimleri değiştir"
          className="mb-1 grid h-10 w-10 place-items-center self-center rounded-lg border border-border bg-surface text-text-muted hover:text-primary hover:bg-surface-2"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </button>

        <Field label="Sonuç">
          <div className="field flex items-center tabular-nums font-semibold text-text">
            {Number.isFinite(sonuc) ? formatNumber(sonuc, 6) : "—"}
          </div>
          <select className="field mt-2" value={to} onChange={(e) => setTo(e.target.value)}>
            {tur.birimler.map((b) => (
              <option key={b.code} value={b.code}>
                {b.ad} ({b.kisa})
              </option>
            ))}
          </select>
        </Field>
      </div>

      <ResultHero
        label={`${formatNumber(v, 4)} ${fromKisa} =`}
        value={`${formatNumber(sonuc, 6)} ${toKisa}`}
        tone="accent"
      />

      {/* Tüm birimlerdeki karşılığı */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-text">Tüm birimlerde karşılığı</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-sm">
            <tbody>
              {tur.birimler.map((b) => (
                <tr key={b.code} className="border-b border-border last:border-0">
                  <td className="py-2 text-text-muted">
                    {b.ad} <span className="text-text-muted/70">({b.kisa})</span>
                  </td>
                  <td className="py-2 text-right tabular-nums font-medium text-text">
                    {formatNumber(cevir(turKey, v, from, b.code), 6)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Her tür için ince sarmalayıcılar (registry slug → bileşen) */
export const UzunlukCevirici = () => <UnitConverter turKey="uzunluk" />;
export const AgirlikCevirici = () => <UnitConverter turKey="agirlik" />;
export const AlanCevirici = () => <UnitConverter turKey="alan" />;
export const HacimCevirici = () => <UnitConverter turKey="hacim" />;
export const HizCevirici = () => <UnitConverter turKey="hiz" />;
export const VeriCevirici = () => <UnitConverter turKey="veri" />;
export const ZamanCevirici = () => <UnitConverter turKey="zaman" />;
export const SicaklikCevirici = () => <UnitConverter turKey="sicaklik" />;
