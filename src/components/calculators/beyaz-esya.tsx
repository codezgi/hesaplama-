"use client";
import { useState } from "react";
import { beyazEsyaTuketim, formatTL, formatNumber, BEYAZ_ESYA } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

type Tur = keyof typeof BEYAZ_ESYA;

export function BeyazEsyaHesaplayici() {
  const [tur, setTur] = useState<Tur>("buzdolabi");
  const [sinif, setSinif] = useState<"A" | "B" | "C" | "D">("A");
  const [birim, setBirim] = useState("3.5");
  const r = beyazEsyaTuketim(tur, sinif, parseFloat(birim.replace(",", ".")) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Beyaz Eşya">
          <select className="field" value={tur} onChange={(e) => setTur(e.target.value as Tur)}>
            <option value="buzdolabi">Buzdolabı</option>
            <option value="bulasik">Bulaşık Makinesi</option>
            <option value="camasir">Çamaşır Makinesi</option>
            <option value="klima">Klima</option>
          </select>
        </Field>
        <Field label="Enerji Sınıfı">
          <select className="field" value={sinif} onChange={(e) => setSinif(e.target.value as "A")}>
            <option value="A">A / A+++</option>
            <option value="B">B / A++</option>
            <option value="C">C / A+</option>
            <option value="D">D / A</option>
          </select>
        </Field>
        <Field label="Elektrik Birim (₺/kWh)"><input className="field tabular-nums" inputMode="decimal" value={birim} onChange={(e) => setBirim(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yıllık Elektrik Maliyeti" value={formatTL(r.yillikTL)} sub={`${formatNumber(r.yillikKwh, 0)} kWh/yıl`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Yıllık kWh" value={`${formatNumber(r.yillikKwh, 0)}`} />
          <ResultRow label="Yıllık maliyet" value={formatTL(r.yillikTL)} />
          <ResultRow label="10 yıllık maliyet" value={formatTL(r.yillikTL * 10)} />
        </div>
      </div>
    </div>
  );
}
