"use client";

import { useState } from "react";
import { hesaplaKar, iskonto, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function KarMarjiHesaplayici() {
  const [mod, setMod] = useState<"kar" | "iskonto">("kar");
  const [maliyet, setMaliyet] = useState("100");
  const [satis, setSatis] = useState("150");
  const [liste, setListe] = useState("1000");
  const [indirim, setIndirim] = useState("20");
  const [kdv, setKdv] = useState("20");

  const m = parseFloat(maliyet.replace(",", ".")) || 0;
  const s = parseFloat(satis.replace(",", ".")) || 0;
  const l = parseFloat(liste.replace(",", ".")) || 0;
  const i = parseFloat(indirim.replace(",", ".")) || 0;
  const k = parseFloat(kdv.replace(",", ".")) || 0;

  const rKar = hesaplaKar(m, s);
  const rIsk = iskonto(l, i, k);

  return (
    <div className="space-y-5">
      <Segmented
        value={mod}
        onChange={setMod}
        options={[
          { label: "Kâr Marjı", value: "kar" },
          { label: "İskonto (İndirim)", value: "iskonto" },
        ]}
      />

      {mod === "kar" ? (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <Field label="Alış / Maliyet (₺)">
              <input className="field tabular-nums" inputMode="decimal" value={maliyet} onChange={(e) => setMaliyet(e.target.value)} />
            </Field>
            <Field label="Satış Fiyatı (₺)">
              <input className="field tabular-nums" inputMode="decimal" value={satis} onChange={(e) => setSatis(e.target.value)} />
            </Field>
          </div>
          <div className="space-y-4">
            <ResultHero label="Kâr Yüzdesi (maliyete)" value={`%${formatNumber(rKar.karYuzdesi, 2)}`} tone="accent" />
            <div className="card p-4">
              <ResultRow label="Kâr tutarı" value={formatTL(rKar.kar)} />
              <ResultRow label="Kâr yüzdesi (maliyete)" value={`%${formatNumber(rKar.karYuzdesi, 2)}`} />
              <ResultRow label="Brüt marj (satışa)" value={`%${formatNumber(rKar.brutMarj, 2)}`} />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <Field label="Liste Fiyatı (₺)">
              <input className="field tabular-nums" inputMode="decimal" value={liste} onChange={(e) => setListe(e.target.value)} />
            </Field>
            <Field label="İndirim (%)">
              <input className="field tabular-nums" inputMode="decimal" value={indirim} onChange={(e) => setIndirim(e.target.value)} />
            </Field>
            <Field label="KDV (%)" hint="0 girerseniz KDV eklenmez.">
              <input className="field tabular-nums" inputMode="decimal" value={kdv} onChange={(e) => setKdv(e.target.value)} />
            </Field>
          </div>
          <div className="space-y-4">
            <ResultHero label="Ödenecek Tutar" value={formatTL(rIsk.genelToplam)} sub={`İndirim: ${formatTL(rIsk.indirim)}`} tone="accent" />
            <div className="card p-4">
              <ResultRow label="Liste fiyatı" value={formatTL(l)} />
              <ResultRow label={`İndirim (%${formatNumber(i, 2)})`} value={`− ${formatTL(rIsk.indirim)}`} />
              <ResultRow label="İskontolu fiyat" value={formatTL(rIsk.iskontolu)} />
              {k > 0 && <ResultRow label={`KDV (%${formatNumber(k, 0)})`} value={formatTL(rIsk.kdv)} />}
              <ResultRow label="Genel toplam" value={formatTL(rIsk.genelToplam)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
