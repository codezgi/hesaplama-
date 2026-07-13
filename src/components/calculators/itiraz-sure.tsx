"use client";
import { useState } from "react";
import { ITIRAZ_SURELERI, itirazHesapla } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function ItirazSureHesaplayici() {
  const [tur, setTur] = useState(ITIRAZ_SURELERI[0].ad);
  const [tebligTarihi, setTebligTarihi] = useState(bugun);
  const secili = ITIRAZ_SURELERI.find((x) => x.ad === tur) ?? ITIRAZ_SURELERI[0];
  const d = new Date(tebligTarihi);
  const r = !isNaN(d.getTime()) ? itirazHesapla(d, secili.gun) : null;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İtiraz Türü">
          <select className="field" value={tur} onChange={(e) => setTur(e.target.value)}>
            {ITIRAZ_SURELERI.map((x) => <option key={x.ad} value={x.ad}>{x.ad} ({x.gun} gün)</option>)}
          </select>
        </Field>
        <Field label="Tebliğ Tarihi"><input className="field" type="date" value={tebligTarihi} onChange={(e) => setTebligTarihi(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        {r && (
          <>
            <ResultHero
              label={r.gecmisMi ? "❌ Süre GEÇMİŞ" : `${r.kalanGun} gün kaldı`}
              value={r.sonTarih.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" })}
              sub={secili.aciklama}
              tone="accent"
            />
            <div className="card p-4">
              <ResultRow label="İtiraz türü" value={secili.ad} />
              <ResultRow label="Süre" value={`${secili.gun} gün`} />
              <ResultRow label="Son tarih" value={r.sonTarih.toLocaleDateString("tr-TR")} />
              <ResultRow label="Kalan gün" value={r.gecmisMi ? "GEÇMİŞ" : `${r.kalanGun}`} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
