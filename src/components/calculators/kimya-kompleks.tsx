"use client";
import { useState } from "react";
import { pHesapla, eoq } from "@/lib/bilimsel";
import { formatNumber, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

/* Mol / Molarite */
export function MolariteHesaplayici() {
  const [g, setG] = useState("18");
  const [mm, setMm] = useState("18");
  const [v, setV] = useState("1");
  const grams = parseFloat(g) || 0;
  const molKut = parseFloat(mm) || 0;
  const hacim = parseFloat(v) || 0;
  const mol = molKut > 0 ? grams / molKut : 0;
  const M = hacim > 0 ? mol / hacim : 0;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Madde Kütlesi (g)"><input className="field tabular-nums" inputMode="decimal" value={g} onChange={(e) => setG(e.target.value)} /></Field>
        <Field label="Molekül Kütlesi (g/mol)"><input className="field tabular-nums" inputMode="decimal" value={mm} onChange={(e) => setMm(e.target.value)} /></Field>
        <Field label="Çözelti Hacmi (L)"><input className="field tabular-nums" inputMode="decimal" value={v} onChange={(e) => setV(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Molarite" value={`${formatNumber(M, 4)} M`} sub={`${formatNumber(mol, 4)} mol / ${hacim} L`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Mol sayısı" value={`${formatNumber(mol, 4)} mol`} />
          <ResultRow label="Molarite (M)" value={`${formatNumber(M, 4)}`} />
          <ResultRow label="Avogadro sayısı × mol" value={`${(mol * 6.022e23).toExponential(3)} molekül`} />
        </div>
      </div>
    </div>
  );
}

/* pH / pOH */
export function PhHesaplayici() {
  const [mod, setMod] = useState<"H" | "pH">("H");
  const [deger, setDeger] = useState("0.001");
  const v = parseFloat(deger.replace(",", ".")) || 0;
  const r = mod === "H" ? pHesapla(v) : { pH: v, pOH: 14 - v };
  const H = mod === "H" ? v : Math.pow(10, -v);
  const OH = mod === "H" ? Math.pow(10, -(14 - Math.abs(r.pH))) : Math.pow(10, -(14 - v));
  const kategori = r.pH < 3 ? "Güçlü asit" : r.pH < 7 ? "Asit" : r.pH < 7.5 ? "Nötr" : r.pH < 11 ? "Baz" : "Güçlü baz";
  return (
    <div className="space-y-6">
      <Segmented value={mod} onChange={setMod} options={[{ label: "[H⁺]'dan pH", value: "H" }, { label: "pH'dan diğerleri", value: "pH" }]} />
      <Field label={mod === "H" ? "H⁺ konsantrasyonu (M)" : "pH değeri"}>
        <input className="field tabular-nums" inputMode="decimal" value={deger} onChange={(e) => setDeger(e.target.value)} />
      </Field>
      <ResultHero label="Kategori" value={kategori} sub={`pH = ${formatNumber(r.pH, 3)}, pOH = ${formatNumber(r.pOH, 3)}`} tone="accent" />
      <div className="card p-4">
        <ResultRow label="pH" value={formatNumber(r.pH, 4)} />
        <ResultRow label="pOH" value={formatNumber(r.pOH, 4)} />
        <ResultRow label="[H⁺] (M)" value={H.toExponential(4)} />
        <ResultRow label="[OH⁻] (M)" value={OH.toExponential(4)} />
      </div>
    </div>
  );
}

/* EOQ - Optimum Sipariş Miktarı */
export function EoqHesaplayici() {
  const [D, setD] = useState("10000");
  const [S, setS] = useState("500");
  const [H, setH] = useState("2");
  const r = eoq(parseFloat(D) || 0, parseFloat(S) || 0, parseFloat(H) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yıllık Talep (D — adet)"><input className="field tabular-nums" inputMode="numeric" value={D} onChange={(e) => setD(e.target.value)} /></Field>
        <Field label="Sipariş Başı Sabit Maliyet (S — ₺)"><input className="field tabular-nums" inputMode="numeric" value={S} onChange={(e) => setS(e.target.value)} /></Field>
        <Field label="Birim Tutma Maliyeti (H — ₺/birim/yıl)"><input className="field tabular-nums" inputMode="numeric" value={H} onChange={(e) => setH(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Optimum Sipariş Miktarı" value={`${formatNumber(r.eoq, 0)} birim`} sub={`Yılda ${formatNumber(r.siparisAdet, 1)} kez sipariş`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="EOQ" value={`${formatNumber(r.eoq, 2)} birim`} />
          <ResultRow label="Yıllık sipariş sayısı" value={formatNumber(r.siparisAdet, 2)} />
          <ResultRow label="Ortalama toplam maliyet" value={formatTL(r.toplamMaliyet)} />
        </div>
      </div>
    </div>
  );
}

/* Toplu Hesap Bölüştürme (Restoran) */
export function ToplamHesapBolusHesaplayici() {
  const [tutar, setTutar] = useState("450");
  const [kdvDahil, setKdvDahil] = useState(true);
  const [servisYuzde, setServisYuzde] = useState("10");
  const [kisi, setKisi] = useState("4");
  const [bahsis, setBahsis] = useState("10");
  const t = parseFloat(tutar) || 0;
  const s = parseFloat(servisYuzde) || 0;
  const b = parseFloat(bahsis) || 0;
  const k = parseInt(kisi) || 1;
  const kdvsiz = kdvDahil ? t / 1.2 : t;
  const kdv = kdvDahil ? t - kdvsiz : t * 0.2;
  const araToplam = kdvDahil ? t : t + kdv;
  const servis = araToplam * (s / 100);
  const bahsisT = araToplam * (b / 100);
  const genelToplam = araToplam + servis + bahsisT;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Hesap Tutarı (₺)"><input className="field tabular-nums" inputMode="numeric" value={tutar} onChange={(e) => setTutar(e.target.value)} /></Field>
        <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={kdvDahil} onChange={(e) => setKdvDahil(e.target.checked)} /> KDV dahil</label>
        <Field label="Servis Ücreti (%)"><input className="field tabular-nums" inputMode="decimal" value={servisYuzde} onChange={(e) => setServisYuzde(e.target.value)} /></Field>
        <Field label="Bahşiş (%)"><input className="field tabular-nums" inputMode="decimal" value={bahsis} onChange={(e) => setBahsis(e.target.value)} /></Field>
        <Field label="Kişi Sayısı"><input className="field tabular-nums" inputMode="numeric" value={kisi} onChange={(e) => setKisi(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Kişi Başı Ödeme" value={formatTL(genelToplam / k)} sub={`Toplam: ${formatTL(genelToplam)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Yemek + içecek" value={formatTL(kdvDahil ? kdvsiz : t)} />
          <ResultRow label="KDV (%20)" value={formatTL(kdv)} />
          <ResultRow label={`Servis (%${s})`} value={formatTL(servis)} />
          <ResultRow label={`Bahşiş (%${b})`} value={formatTL(bahsisT)} />
          <ResultRow label="Genel toplam" value={formatTL(genelToplam)} />
          <ResultRow label={`Kişi başı (${k} kişi)`} value={formatTL(genelToplam / k)} />
        </div>
      </div>
    </div>
  );
}

/* Konut Toplam Maliyet (bedel + peşinat + faiz + aidat + emlak + tapu + kasko) */
export function KonutTopMaliyetHesaplayici() {
  const [b, setB] = useState("3000000");
  const [p, setP] = useState("20");
  const [f, setF] = useState("2.5");
  const [v, setV] = useState("120");
  const [ai, setAi] = useState("1500");
  const [em, setEm] = useState("3000");
  const [tp, setTp] = useState("60000");
  const [ks, setKs] = useState("8000");

  const bedel = parseFloat(b) || 0;
  const pesinat = bedel * (parseFloat(p) / 100 || 0);
  const kredi = bedel - pesinat;
  const faiz = parseFloat(f.replace(",", ".")) / 100 || 0;
  const vade = parseFloat(v) || 0;
  const taksit = faiz === 0 ? kredi / vade : kredi * faiz * Math.pow(1 + faiz, vade) / (Math.pow(1 + faiz, vade) - 1);
  const toplamKrediOdeme = taksit * vade;
  const aidat10 = parseFloat(ai) * 12 * 10;
  const emlak10 = parseFloat(em) * 10;
  const yillikKasko = parseFloat(ks) * 10;
  const tpH = parseFloat(tp) || 0;
  const toplamMaliyet10Yil = pesinat + toplamKrediOdeme + aidat10 + emlak10 + yillikKasko + tpH;

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Bedel (₺)"><input className="field tabular-nums" inputMode="numeric" value={b} onChange={(e) => setB(e.target.value)} /></Field>
        <Field label="Peşinat (%)"><input className="field tabular-nums" inputMode="numeric" value={p} onChange={(e) => setP(e.target.value)} /></Field>
        <Field label="Aylık faiz (%)"><input className="field tabular-nums" inputMode="decimal" value={f} onChange={(e) => setF(e.target.value)} /></Field>
        <Field label="Vade (ay)"><input className="field tabular-nums" inputMode="numeric" value={v} onChange={(e) => setV(e.target.value)} /></Field>
        <Field label="Aylık aidat (₺)"><input className="field tabular-nums" inputMode="numeric" value={ai} onChange={(e) => setAi(e.target.value)} /></Field>
        <Field label="Yıllık emlak vergisi"><input className="field tabular-nums" inputMode="numeric" value={em} onChange={(e) => setEm(e.target.value)} /></Field>
        <Field label="Tapu harcı"><input className="field tabular-nums" inputMode="numeric" value={tp} onChange={(e) => setTp(e.target.value)} /></Field>
        <Field label="Yıllık DASK/kasko"><input className="field tabular-nums" inputMode="numeric" value={ks} onChange={(e) => setKs(e.target.value)} /></Field>
      </div>

      <ResultHero label="10 Yıllık Toplam Maliyet" value={formatTL(toplamMaliyet10Yil)} sub={`Aylık taksit: ${formatTL(taksit)}`} tone="accent" />

      <div className="card p-4">
        <ResultRow label="Peşinat (bir defa)" value={formatTL(pesinat)} />
        <ResultRow label="Kredi (aylık taksit)" value={formatTL(taksit)} />
        <ResultRow label={`Toplam kredi ödeme (${vade} ay)`} value={formatTL(toplamKrediOdeme)} />
        <ResultRow label="Tapu harcı" value={formatTL(tpH)} />
        <ResultRow label="10 yıllık aidat" value={formatTL(aidat10)} />
        <ResultRow label="10 yıllık emlak vergisi" value={formatTL(emlak10)} />
        <ResultRow label="10 yıllık DASK/kasko" value={formatTL(yillikKasko)} />
        <ResultRow label="10 yıllık TOPLAM" value={formatTL(toplamMaliyet10Yil)} />
      </div>
    </div>
  );
}
