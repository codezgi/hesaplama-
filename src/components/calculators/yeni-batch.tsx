"use client";
import { useEffect, useRef, useState } from "react";
import { dcaHesapla, reklamMetrikleri, wpmHesapla, kitapBitis, isitmaKiyas, haliM2, ulasimKarti, audioSure, formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

/* 1. Kripto DCA */
export function DcaKriptoHesaplayici() {
  const [aylik, setAylik] = useState("5000");
  const [ay, setAy] = useState("12");
  const [ortGiris, setOrtGiris] = useState("100000");
  const [guncel, setGuncel] = useState("120000");
  const r = dcaHesapla(parseFloat(aylik) || 0, parseFloat(ay) || 0, parseFloat(ortGiris) || 1, parseFloat(guncel) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Yatırım (₺)"><input className="field tabular-nums" inputMode="numeric" value={aylik} onChange={(e) => setAylik(e.target.value)} /></Field>
        <Field label="Süre (ay)"><input className="field tabular-nums" inputMode="numeric" value={ay} onChange={(e) => setAy(e.target.value)} /></Field>
        <Field label="Ortalama Giriş Fiyatı (₺)"><input className="field tabular-nums" inputMode="numeric" value={ortGiris} onChange={(e) => setOrtGiris(e.target.value)} /></Field>
        <Field label="Bugünkü Fiyat (₺)"><input className="field tabular-nums" inputMode="numeric" value={guncel} onChange={(e) => setGuncel(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Güncel Değer" value={formatTL(r.guncelDeger)} sub={`Kâr: ${formatTL(r.kar)} (%${formatNumber(r.karOran, 2)})`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Toplam yatırım" value={formatTL(r.toplamYatirim)} />
          <ResultRow label="Elde edilen miktar" value={formatNumber(r.alinanMiktar, 6)} />
          <ResultRow label="Bugünkü değer" value={formatTL(r.guncelDeger)} />
          <ResultRow label="Kâr / zarar" value={formatTL(r.kar)} />
          <ResultRow label="Getiri oranı" value={`%${formatNumber(r.karOran, 2)}`} />
        </div>
      </div>
    </div>
  );
}

/* 2. Reklam CTR + ROAS */
export function ReklamMetrikleriHesaplayici() {
  const [g, setG] = useState("100000");
  const [t, setT] = useState("2500");
  const [h, setH] = useState("5000");
  const [c, setC] = useState("18000");
  const r = reklamMetrikleri(parseFloat(g) || 0, parseFloat(t) || 0, parseFloat(h) || 0, parseFloat(c) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Gösterim"><input className="field tabular-nums" inputMode="numeric" value={g} onChange={(e) => setG(e.target.value)} /></Field>
        <Field label="Tıklama"><input className="field tabular-nums" inputMode="numeric" value={t} onChange={(e) => setT(e.target.value)} /></Field>
        <Field label="Harcama (₺)"><input className="field tabular-nums" inputMode="numeric" value={h} onChange={(e) => setH(e.target.value)} /></Field>
        <Field label="Kampanya Cirosu (₺)"><input className="field tabular-nums" inputMode="numeric" value={c} onChange={(e) => setC(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="ROAS" value={`${formatNumber(r.roas, 2)}x`} sub={`CTR: %${formatNumber(r.ctr, 2)} · CPC: ${formatTL(r.cpc)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="CTR (Click-Through)" value={`%${formatNumber(r.ctr, 3)}`} />
          <ResultRow label="CPC (Click Başı)" value={formatTL(r.cpc)} />
          <ResultRow label="CPM (1000 Gösterim)" value={formatTL(r.cpm)} />
          <ResultRow label="ROAS" value={`${formatNumber(r.roas, 2)}x`} />
          <ResultRow label="Net kâr" value={formatTL(r.kar)} />
        </div>
      </div>
    </div>
  );
}

/* 3. WPM Yazma Hızı Testi (Etkileşimli) */
export function WpmTestHesaplayici() {
  const cumleler = [
    "Türkçe klavye ile hızlı yazmak alıştırma gerektirir. Her gün 15 dakika pratik yapmanız hızınızı artırır.",
    "İyi bir yazılımcı sadece kod yazmaz, aynı zamanda düşünür ve öğrenir.",
    "Küçük tasarrufların uzun vadede büyük yatırımlara dönüşür.",
    "Bir kitap okumak yeni bir dünyaya kapı açmak demektir.",
  ];
  const [orjinal] = useState(cumleler[Math.floor(Math.random() * cumleler.length)]);
  const [metin, setMetin] = useState("");
  const [basladi, setBasladi] = useState<number | null>(null);
  const [bitti, setBitti] = useState<number | null>(null);

  function baslat(v: string) {
    if (basladi === null && v.length > 0) setBasladi(Date.now());
    setMetin(v);
    if (v.length >= orjinal.length && basladi !== null && bitti === null) {
      setBitti(Date.now());
    }
  }

  const sure = bitti && basladi ? (bitti - basladi) / 1000 / 60 : basladi ? (Date.now() - basladi) / 1000 / 60 : 0;
  let hata = 0;
  for (let i = 0; i < Math.min(metin.length, orjinal.length); i++) {
    if (metin[i] !== orjinal[i]) hata++;
  }
  const wpm = wpmHesapla(metin.length, sure, hata);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 font-mono text-lg text-text leading-relaxed">
        {orjinal.split("").map((c, i) => {
          const yazilan = metin[i];
          const renk = yazilan === undefined ? "text-text-muted" : yazilan === c ? "text-primary" : "text-accent bg-accent/10";
          return <span key={i} className={renk}>{c}</span>;
        })}
      </div>
      <Field label="Yazmaya başla">
        <textarea className="field h-24 resize-none font-mono" value={metin} onChange={(e) => baslat(e.target.value)} placeholder="Buraya yaz…" disabled={bitti !== null} />
      </Field>
      {bitti && (
        <>
          <ResultHero label={wpm.seviye} value={`${formatNumber(wpm.netWpm, 0)} WPM`} sub={`Doğruluk: %${formatNumber(wpm.dogrulukYuzde, 1)}`} tone="accent" />
          <div className="card p-4">
            <ResultRow label="Brüt WPM" value={formatNumber(wpm.brutWpm, 1)} />
            <ResultRow label="Net WPM" value={formatNumber(wpm.netWpm, 1)} />
            <ResultRow label="Hata sayısı" value={`${hata}`} />
            <ResultRow label="Doğruluk" value={`%${formatNumber(wpm.dogrulukYuzde, 1)}`} />
            <ResultRow label="Süre" value={`${formatNumber(sure * 60, 1)} sn`} />
          </div>
          <button type="button" onClick={() => { setMetin(""); setBasladi(null); setBitti(null); window.location.reload(); }} className="rounded-lg bg-primary px-4 py-2 text-white">↻ Tekrar Dene</button>
        </>
      )}
    </div>
  );
}

/* 4. Kitap Okuma Bitiş */
export function KitapBitisHesaplayici() {
  const [kalan, setKalan] = useState("300");
  const [hiz, setHiz] = useState("1");
  const [gunluk, setGunluk] = useState("30");
  const r = kitapBitis(parseFloat(kalan) || 0, parseFloat(hiz.replace(",", ".")) || 1, parseFloat(gunluk) || 1);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Kalan Sayfa"><input className="field tabular-nums" inputMode="numeric" value={kalan} onChange={(e) => setKalan(e.target.value)} /></Field>
        <Field label="Sayfa/Dakika" hint="Ortalama okuyan 0.8-1.2 sayfa/dk."><input className="field tabular-nums" inputMode="decimal" value={hiz} onChange={(e) => setHiz(e.target.value)} /></Field>
        <Field label="Günlük Okuma (dk)"><input className="field tabular-nums" inputMode="numeric" value={gunluk} onChange={(e) => setGunluk(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Kitabı Bitirme Süresi" value={`${formatNumber(r.gun, 1)} gün`} sub={`${formatNumber(r.hafta, 1)} hafta`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Toplam okuma süresi" value={`${formatNumber(r.gerekliDakika, 0)} dk`} />
          <ResultRow label="Gün olarak" value={`${formatNumber(r.gun, 1)}`} />
          <ResultRow label="Hafta olarak" value={`${formatNumber(r.hafta, 1)}`} />
        </div>
      </div>
    </div>
  );
}

/* 5. Kombi vs Elektrikli Isıtıcı */
export function IsitmaKiyasHesaplayici() {
  const [m2, setM2] = useState("20");
  const [saat, setSaat] = useState("8");
  const [gun, setGun] = useState("30");
  const [el, setEl] = useState("3.5");
  const [gaz, setGaz] = useState("22");
  const r = isitmaKiyas(parseFloat(m2) || 0, parseFloat(saat) || 0, parseFloat(gun) || 0, parseFloat(el.replace(",", ".")) || 0, parseFloat(gaz.replace(",", ".")) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Isıtılacak Alan (m²)"><input className="field tabular-nums" inputMode="numeric" value={m2} onChange={(e) => setM2(e.target.value)} /></Field>
        <Field label="Günlük Isıtma (saat)"><input className="field tabular-nums" inputMode="numeric" value={saat} onChange={(e) => setSaat(e.target.value)} /></Field>
        <Field label="Kaç Gün"><input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} /></Field>
        <Field label="Elektrik (₺/kWh)"><input className="field tabular-nums" inputMode="decimal" value={el} onChange={(e) => setEl(e.target.value)} /></Field>
        <Field label="Gaz (₺/m³)"><input className="field tabular-nums" inputMode="decimal" value={gaz} onChange={(e) => setGaz(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={r.tasarruf > 0 ? "Kombi Kazanır" : "Elektrik Kazanır"} value={formatTL(Math.abs(r.tasarruf))} sub={`${gun} gün için tasarruf`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Elektrikli ısıtıcı" value={formatTL(r.elektrikMaliyet)} />
          <ResultRow label="Doğalgaz kombi" value={formatTL(r.gazMaliyet)} />
          <ResultRow label="Fark" value={formatTL(Math.abs(r.tasarruf))} />
        </div>
      </div>
    </div>
  );
}

/* 6. Halı m² */
export function HaliM2Hesaplayici() {
  const [en, setEn] = useState("4");
  const [boy, setBoy] = useState("5");
  const [kenar, setKenar] = useState("0.5");
  const r = haliM2(parseFloat(en) || 0, parseFloat(boy) || 0, parseFloat(kenar.replace(",", ".")) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Oda Eni (m)"><input className="field tabular-nums" inputMode="decimal" value={en} onChange={(e) => setEn(e.target.value)} /></Field>
        <Field label="Oda Boyu (m)"><input className="field tabular-nums" inputMode="decimal" value={boy} onChange={(e) => setBoy(e.target.value)} /></Field>
        <Field label="Halı Kenar Boşluğu (m)" hint="Duvarla arasındaki boşluk (genelde 30-60 cm).">
          <input className="field tabular-nums" inputMode="decimal" value={kenar} onChange={(e) => setKenar(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Önerilen Halı Boyu" value={r.onerilenBoy} sub={`Alan: ${formatNumber(r.haliAlan, 2)} m²`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Oda alanı" value={`${formatNumber(r.odaAlan, 2)} m²`} />
          <ResultRow label="Halı alanı" value={`${formatNumber(r.haliAlan, 2)} m²`} />
          <ResultRow label="Kaplama oranı" value={`%${formatNumber((r.haliAlan / r.odaAlan) * 100, 0)}`} />
        </div>
      </div>
    </div>
  );
}

/* 7. Aylık Ulaşım Kartı vs Bilet */
export function UlasimKartHesaplayici() {
  const [binis, setBinis] = useState("4");
  const [tek, setTek] = useState("30");
  const [aylik, setAylik] = useState("1500");
  const r = ulasimKarti(parseFloat(binis) || 0, parseFloat(tek) || 0, parseFloat(aylik) || 0);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Günlük Biniş"><input className="field tabular-nums" inputMode="numeric" value={binis} onChange={(e) => setBinis(e.target.value)} /></Field>
        <Field label="Tek Biniş (₺)"><input className="field tabular-nums" inputMode="numeric" value={tek} onChange={(e) => setTek(e.target.value)} /></Field>
        <Field label="Aylık Kart (₺)"><input className="field tabular-nums" inputMode="numeric" value={aylik} onChange={(e) => setAylik(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={r.karliMi ? "Aylık Kart Kârlı" : "Tek Bilet Kârlı"} value={formatTL(Math.abs(r.tasarruf))} sub="Aylık tasarruf" tone="accent" />
        <div className="card p-4">
          <ResultRow label="Bilete aylık toplam" value={formatTL(r.bileteToplam)} />
          <ResultRow label="Aylık kart" value={formatTL(parseFloat(aylik) || 0)} />
          <ResultRow label="Aylık tasarruf" value={formatTL(r.tasarruf)} />
          <ResultRow label="Aylık kart binis başı" value={formatTL(r.gunlukEsit * parseFloat(tek))} />
        </div>
      </div>
    </div>
  );
}

/* 8. Podcast/Audio Süre (hızlandırma) */
export function AudioSureHesaplayici() {
  const [uz, setUz] = useState("60");
  const [hiz, setHiz] = useState("1.5");
  const r = audioSure(parseFloat(uz) || 0, parseFloat(hiz.replace(",", ".")) || 1);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Orijinal Süre (dk)"><input className="field tabular-nums" inputMode="numeric" value={uz} onChange={(e) => setUz(e.target.value)} /></Field>
        <Field label="Oynatma Hızı">
          <Segmented value={hiz} onChange={setHiz} options={[
            { label: "1x", value: "1" }, { label: "1.25x", value: "1.25" }, { label: "1.5x", value: "1.5" }, { label: "1.75x", value: "1.75" }, { label: "2x", value: "2" }, { label: "2.5x", value: "2.5" }
          ]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Yeni Süre" value={`${formatNumber(r.yeniDk, 1)} dk`} sub={`Tasarruf: ${formatNumber(r.tasarrufDk, 1)} dk`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Orijinal" value={`${uz} dk`} />
          <ResultRow label={`Hız × ${hiz}`} value={`${formatNumber(r.yeniDk, 1)} dk`} />
          <ResultRow label="Tasarruf" value={`${formatNumber(r.tasarrufDk, 1)} dk`} />
          <ResultRow label="1 saat için tasarruf" value={`${formatNumber((60 * (1 - 1 / parseFloat(hiz))), 1)} dk`} />
        </div>
      </div>
    </div>
  );
}
