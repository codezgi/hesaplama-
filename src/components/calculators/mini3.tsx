"use client";
import { useState } from "react";
import { formatNumber, formatTL } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

/* 21. Yağmur miktarı (mm → L/m²) */
export function YagmurHesaplayici() {
  const [mm, setMm] = useState("25");
  const [m2, setM2] = useState("100");
  const l = (parseFloat(mm) || 0) * (parseFloat(m2) || 0);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Yağış miktarı (mm)"><input className="field tabular-nums" inputMode="decimal" value={mm} onChange={(e) => setMm(e.target.value)} /></Field>
    <Field label="Alan (m²)"><input className="field tabular-nums" inputMode="numeric" value={m2} onChange={(e) => setM2(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Toplam Yağış" value={`${formatNumber(l, 0)} litre`} sub="1 mm = 1 L/m²" tone="accent" />
    <div className="card p-4">
      <ResultRow label="Alan × mm" value={`${m2} m² × ${mm} mm`} />
      <ResultRow label="Toplam su" value={`${formatNumber(l, 0)} L`} />
      <ResultRow label="m³" value={`${formatNumber(l / 1000, 3)} m³`} />
    </div>
  </div></div>;
}

/* 22. Enerji tasarrufu (LED-ampul karşılaştırma) */
export function LedTasarrufHesaplayici() {
  const [ampulW, setAmpulW] = useState("60");
  const [ledW, setLedW] = useState("9");
  const [saat, setSaat] = useState("5");
  const [birim, setBirim] = useState("3.5");
  const a = parseFloat(ampulW) || 0;
  const l = parseFloat(ledW) || 0;
  const s = parseFloat(saat) || 0;
  const f = parseFloat(birim.replace(",", ".")) || 0;
  const yillikTasarruf = ((a - l) * s * 365 / 1000) * f;
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Eski ampul gücü (W)"><input className="field tabular-nums" inputMode="numeric" value={ampulW} onChange={(e) => setAmpulW(e.target.value)} /></Field>
    <Field label="LED güç (W)"><input className="field tabular-nums" inputMode="numeric" value={ledW} onChange={(e) => setLedW(e.target.value)} /></Field>
    <Field label="Günlük çalışma (saat)"><input className="field tabular-nums" inputMode="numeric" value={saat} onChange={(e) => setSaat(e.target.value)} /></Field>
    <Field label="Elektrik (₺/kWh)"><input className="field tabular-nums" inputMode="decimal" value={birim} onChange={(e) => setBirim(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Yıllık Tasarruf (Ampul Başına)" value={formatTL(yillikTasarruf)} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Güç farkı" value={`${a - l} W`} />
      <ResultRow label="Yıllık tasarruf" value={formatTL(yillikTasarruf)} />
      <ResultRow label="10 ampul için" value={formatTL(yillikTasarruf * 10)} />
    </div>
  </div></div>;
}

/* 23. Sağlıklı hedef kilo (BMI 22) */
export function IdealBmi22Hesaplayici() {
  const [boy, setBoy] = useState("178");
  const b = parseFloat(boy) || 0;
  const idealK = b > 0 ? 22 * (b / 100) * (b / 100) : 0;
  const min = 18.5 * (b / 100) * (b / 100);
  const max = 24.9 * (b / 100) * (b / 100);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Boy (cm)"><input className="field tabular-nums" inputMode="numeric" value={boy} onChange={(e) => setBoy(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="İdeal Kilo (BMI 22)" value={`${formatNumber(idealK, 1)} kg`} sub={`Normal aralık: ${formatNumber(min, 1)}-${formatNumber(max, 1)} kg`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Zayıf sınırı" value={`${formatNumber(min, 1)} kg`} />
      <ResultRow label="İdeal (BMI 22)" value={`${formatNumber(idealK, 1)} kg`} />
      <ResultRow label="Üst normal" value={`${formatNumber(max, 1)} kg`} />
    </div>
  </div></div>;
}

/* 24. TL → yabancı para birden fazla kur (statik) */
export function CokluKurHesaplayici() {
  const [tl, setTl] = useState("10000");
  const v = parseFloat(tl) || 0;
  const kurlar = { USD: 40.2, EUR: 43.5, GBP: 51.8, CHF: 47.3, JPY: 0.27, RUB: 0.48 };
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Türk Lirası (₺)"><input className="field tabular-nums" inputMode="numeric" value={tl} onChange={(e) => setTl(e.target.value)} /></Field>
    <p className="text-xs text-text-muted">Yaklaşık kurlar. Anlık için &quot;Döviz Çevirici&quot; sayfasını kullanın.</p>
  </div><div className="card p-4">
    {Object.entries(kurlar).map(([k, r]) => (
      <ResultRow key={k} label={k} value={formatNumber(v / r, 2)} />
    ))}
  </div></div>;
}

/* 25. Kek kalori (dilim) */
export function KekKaloriHesaplayici() {
  const [g, setG] = useState("100");
  const [tip, setTip] = useState<"sade" | "cikolatali" | "meyveli">("sade");
  const k = { sade: 3.5, cikolatali: 4.5, meyveli: 3.0 }[tip];
  const kcal = (parseFloat(g) || 0) * k;
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Kek Dilimi Ağırlığı (g)"><input className="field tabular-nums" inputMode="numeric" value={g} onChange={(e) => setG(e.target.value)} /></Field>
    <Field label="Kek Türü">
      <Segmented value={tip} onChange={setTip} options={[{ label: "Sade", value: "sade" }, { label: "Çikolatalı", value: "cikolatali" }, { label: "Meyveli", value: "meyveli" }]} />
    </Field>
  </div><div className="space-y-4">
    <ResultHero label="Kalori" value={`${formatNumber(kcal, 0)} kcal`} sub={tip} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Sade kek" value="3,5 kcal/g" />
      <ResultRow label="Çikolatalı kek" value="4,5 kcal/g" />
      <ResultRow label="Meyveli kek" value="3,0 kcal/g" />
    </div>
  </div></div>;
}

/* 26. Kur'a çekimi (random isim seç) */
export function KuraCekimHesaplayici() {
  const [isimler, setIsimler] = useState("Ali, Ayşe, Mehmet, Fatma, Ahmet");
  const [adet, setAdet] = useState("1");
  const [secim, setSecim] = useState<string[]>([]);
  const yap = () => {
    const dizi = isimler.split(",").map((x) => x.trim()).filter(Boolean);
    const n = Math.min(parseInt(adet) || 1, dizi.length);
    const kopya = [...dizi];
    const s: string[] = [];
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * kopya.length);
      s.push(kopya.splice(idx, 1)[0]);
    }
    setSecim(s);
  };
  return <div className="space-y-6"><div className="grid gap-4 sm:grid-cols-2">
    <Field label="İsimler (virgülle ayır)"><textarea className="field h-24 resize-y" value={isimler} onChange={(e) => setIsimler(e.target.value)} /></Field>
    <div className="space-y-3">
      <Field label="Kaç kişi seçilecek?"><input className="field tabular-nums" inputMode="numeric" value={adet} onChange={(e) => setAdet(e.target.value)} /></Field>
      <button type="button" onClick={yap} className="rounded-lg bg-primary px-4 py-2 text-white font-medium hover:bg-primary-hover">Kur&apos;a Çek</button>
    </div>
  </div>
    {secim.length > 0 && <ResultHero label="Kur'a Sonucu" value={secim.join(", ")} tone="accent" />}
  </div>;
}

/* 27. Yer değiştirme (X yaşındaki kişi Y yıl sonra kaç yaşında) */
export function GelecektekiYasHesaplayici() {
  const [yas, setYas] = useState("30");
  const [yil, setYil] = useState("10");
  const y = parseFloat(yas) || 0;
  const yl = parseFloat(yil) || 0;
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Şu anki yaş"><input className="field tabular-nums" inputMode="numeric" value={yas} onChange={(e) => setYas(e.target.value)} /></Field>
    <Field label="Kaç yıl sonra?"><input className="field tabular-nums" inputMode="numeric" value={yil} onChange={(e) => setYil(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="O Yaşta Olacaksınız" value={`${y + yl} yaş`} sub={`${new Date().getFullYear() + yl} yılında`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Şimdi" value={`${y} yaş`} />
      <ResultRow label="+ Yıl" value={`${yl} yıl`} />
      <ResultRow label={`= ${new Date().getFullYear() + yl}`} value={`${y + yl} yaş`} />
    </div>
  </div></div>;
}

/* 28. Anket sonuç (evet/hayır oran) */
export function AnketOranHesaplayici() {
  const [e, setE] = useState("40");
  const [h, setH] = useState("60");
  const ev = parseFloat(e) || 0;
  const ha = parseFloat(h) || 0;
  const t = ev + ha;
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Evet sayısı"><input className="field tabular-nums" inputMode="numeric" value={e} onChange={(e) => setE(e.target.value)} /></Field>
    <Field label="Hayır sayısı"><input className="field tabular-nums" inputMode="numeric" value={h} onChange={(e) => setH(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Evet oranı" value={t > 0 ? `%${formatNumber((ev / t) * 100, 1)}` : "—"} sub={`Toplam: ${t} yanıt`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Evet" value={t > 0 ? `${ev} (%${formatNumber((ev / t) * 100, 1)})` : "—"} />
      <ResultRow label="Hayır" value={t > 0 ? `${ha} (%${formatNumber((ha / t) * 100, 1)})` : "—"} />
      <ResultRow label="Toplam" value={`${t}`} />
    </div>
  </div></div>;
}

/* 29. IP alt ağ (CIDR /24 vb.) */
export function CidrHesaplayici() {
  const [prefix, setPrefix] = useState("24");
  const p = parseInt(prefix) || 0;
  const hostBit = 32 - p;
  const toplamIp = Math.pow(2, hostBit);
  const kullanilabilir = Math.max(0, toplamIp - 2);
  const mask = [24, 16, 8, 0].map((s) => Math.max(0, Math.min(255, (0xFFFFFFFF << (32 - p)) >>> s & 0xFF)).toString());
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="CIDR Prefix (0-32)"><input className="field tabular-nums" inputMode="numeric" value={prefix} onChange={(e) => setPrefix(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label={`/ ${p}`} value={formatNumber(toplamIp, 0)} sub={`${formatNumber(kullanilabilir, 0)} kullanılabilir host`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Alt ağ maskesi" value={<span className="font-mono">{mask.join(".")}</span>} />
      <ResultRow label="Toplam IP" value={formatNumber(toplamIp, 0)} />
      <ResultRow label="Kullanılabilir host" value={formatNumber(kullanilabilir, 0)} />
      <ResultRow label="Host bit" value={`${hostBit} bit`} />
    </div>
  </div></div>;
}

/* 30. Damacana bitiş (kişi × gün × mL → kaç gün yeter) */
export function DamacanaHesaplayici() {
  const [kisi, setKisi] = useState("4");
  const [ml, setMl] = useState("2500");
  const [litre, setLitre] = useState("19");
  const k = parseFloat(kisi) || 0;
  const m = parseFloat(ml) || 0;
  const l = parseFloat(litre) || 0;
  const gunTotal = (l * 1000) / (k * m);
  return <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-4">
    <Field label="Hane kişi sayısı"><input className="field tabular-nums" inputMode="numeric" value={kisi} onChange={(e) => setKisi(e.target.value)} /></Field>
    <Field label="Kişi başı günlük (mL)"><input className="field tabular-nums" inputMode="numeric" value={ml} onChange={(e) => setMl(e.target.value)} /></Field>
    <Field label="Damacana hacmi (L)"><input className="field tabular-nums" inputMode="numeric" value={litre} onChange={(e) => setLitre(e.target.value)} /></Field>
  </div><div className="space-y-4">
    <ResultHero label="Damacana Bitiş Süresi" value={`${formatNumber(gunTotal, 1)} gün`} sub={`Aylık ${formatNumber(30 / gunTotal, 1)} damacana`} tone="accent" />
    <div className="card p-4">
      <ResultRow label="Damacana süresi" value={`${formatNumber(gunTotal, 1)} gün`} />
      <ResultRow label="Aylık ihtiyaç" value={`${formatNumber(30 / gunTotal, 1)} adet`} />
      <ResultRow label="Yıllık" value={`${formatNumber(365 / gunTotal, 0)} adet`} />
    </div>
  </div></div>;
}
