/* Türkiye'de çok aranan ama hesaplama.net'te olmayan hesaplayıcılar */
"use client";
import { useState } from "react";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

/* 1. Aylık Bütçe (50/30/20 kuralı) */
export function AylikButceHesaplayici() {
  const [gelir, setGelir] = useState("30000");
  const g = parseFloat(gelir) || 0;
  const ihtiyac = g * 0.5;
  const istek = g * 0.3;
  const birikim = g * 0.2;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Net Gelir (₺)"><input className="field tabular-nums" inputMode="numeric" value={gelir} onChange={(e) => setGelir(e.target.value)} /></Field>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          <strong>50/30/20 Kuralı:</strong> Gelirinin %50&apos;si ihtiyaç, %30&apos;u istek, %20&apos;si birikim/borç ödeme olsun.
        </div>
      </div>
      <div className="space-y-4">
        <ResultHero label="Aylık Birikim" value={formatTL(birikim)} sub={`Yıllık: ${formatTL(birikim * 12)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="🏠 İhtiyaçlar (%50)" value={formatTL(ihtiyac)} />
          <ResultRow label="🎭 İstekler (%30)" value={formatTL(istek)} />
          <ResultRow label="💰 Birikim/Borç (%20)" value={formatTL(birikim)} />
          <ResultRow label="Kira üst sınır (~%30)" value={formatTL(g * 0.3)} />
        </div>
      </div>
    </div>
  );
}

/* 2. Kirala vs Satın Al */
export function KiralaVsSatinAlHesaplayici() {
  const [evFiyat, setEvFiyat] = useState("3000000");
  const [pesinat, setPesinat] = useState("20");
  const [faiz, setFaiz] = useState("2.5");
  const [vade, setVade] = useState("120");
  const [kira, setKira] = useState("15000");
  const [kiraArtis, setKiraArtis] = useState("40");

  const f = parseFloat(evFiyat) || 0;
  const p = parseFloat(pesinat) || 0;
  const fi = parseFloat(faiz.replace(",", ".")) || 0;
  const v = parseFloat(vade) || 0;
  const k = parseFloat(kira) || 0;
  const ka = parseFloat(kiraArtis) || 0;

  const pesinatTutar = f * (p / 100);
  const krediTutar = f - pesinatTutar;
  const i = fi / 100;
  const taksit = i === 0 ? krediTutar / v : krediTutar * i * Math.pow(1 + i, v) / (Math.pow(1 + i, v) - 1);
  const toplamKrediOdeme = taksit * v;
  const yilSayisi = v / 12;

  // Kira toplamı (yıllık %ka artışlı)
  let toplamKira = 0;
  let aylikKira = k;
  for (let y = 0; y < yilSayisi; y++) {
    toplamKira += aylikKira * 12;
    aylikKira *= 1 + ka / 100;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Ev Fiyatı (₺)"><input className="field tabular-nums" inputMode="numeric" value={evFiyat} onChange={(e) => setEvFiyat(e.target.value)} /></Field>
        <Field label="Peşinat (%)"><input className="field tabular-nums" inputMode="numeric" value={pesinat} onChange={(e) => setPesinat(e.target.value)} /></Field>
        <Field label="Aylık Faiz (%)"><input className="field tabular-nums" inputMode="decimal" value={faiz} onChange={(e) => setFaiz(e.target.value)} /></Field>
        <Field label="Kredi Vadesi (ay)"><input className="field tabular-nums" inputMode="numeric" value={vade} onChange={(e) => setVade(e.target.value)} /></Field>
        <Field label="Aylık Kira (₺)"><input className="field tabular-nums" inputMode="numeric" value={kira} onChange={(e) => setKira(e.target.value)} /></Field>
        <Field label="Yıllık Kira Artışı (%)"><input className="field tabular-nums" inputMode="decimal" value={kiraArtis} onChange={(e) => setKiraArtis(e.target.value)} /></Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-primary">🏠 SATIN AL</div>
          <ResultRow label="Peşinat" value={formatTL(pesinatTutar)} />
          <ResultRow label="Aylık taksit" value={formatTL(taksit)} />
          <ResultRow label={`Toplam ödeme (${v} ay)`} value={formatTL(pesinatTutar + toplamKrediOdeme)} />
          <ResultRow label="Sonunda ev senin" value="✓ (mülk edinme)" />
        </div>
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-accent">🔑 KİRALA</div>
          <ResultRow label="Aylık kira başlangıç" value={formatTL(k)} />
          <ResultRow label={`Toplam kira (${yilSayisi.toFixed(1)} yıl)`} value={formatTL(toplamKira)} />
          <ResultRow label="Peşinat = yatırıma" value={formatTL(pesinatTutar)} />
          <ResultRow label="Sonunda ev senin değil" value="✗" />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Basit karşılaştırma. Gerçekçi analiz için: mülkün değer artışı, tamir/aidat/emlak vergisi ve peşinatın yatırım getirisini de dikkate alın.
      </div>
    </div>
  );
}

/* 3. Freelance Saatlik Ücret */
export function FreelanceUcretHesaplayici() {
  const [hedef, setHedef] = useState("500000");
  const [gunHafta, setGunHafta] = useState("4");
  const [saatGun, setSaatGun] = useState("6");
  const [tatilHafta, setTatilHafta] = useState("6");

  const h = parseFloat(hedef) || 0;
  const gh = parseFloat(gunHafta) || 0;
  const sg = parseFloat(saatGun) || 0;
  const th = parseFloat(tatilHafta) || 0;

  const calisilanHafta = 52 - th;
  const yillikSaat = calisilanHafta * gh * sg;
  const saatlik = yillikSaat > 0 ? h / yillikSaat : 0;
  const kdvli = saatlik * 1.2;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Yıllık Hedef Kazanç (₺)"><input className="field tabular-nums" inputMode="numeric" value={hedef} onChange={(e) => setHedef(e.target.value)} /></Field>
        <Field label="Haftada çalışılan gün"><input className="field tabular-nums" inputMode="numeric" value={gunHafta} onChange={(e) => setGunHafta(e.target.value)} /></Field>
        <Field label="Günde çalışılan saat"><input className="field tabular-nums" inputMode="numeric" value={saatGun} onChange={(e) => setSaatGun(e.target.value)} /></Field>
        <Field label="Tatil haftası (yıl)"><input className="field tabular-nums" inputMode="numeric" value={tatilHafta} onChange={(e) => setTatilHafta(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Saatlik Ücretin" value={formatTL(saatlik)} sub={`KDV dahil: ${formatTL(kdvli)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Çalışılan hafta" value={`${calisilanHafta}`} />
          <ResultRow label="Yıllık çalışma saati" value={`${formatNumber(yillikSaat, 0)} sa`} />
          <ResultRow label="Saatlik (KDV hariç)" value={formatTL(saatlik)} />
          <ResultRow label="Saatlik (KDV %20 dahil)" value={formatTL(kdvli)} />
          <ResultRow label="Günlük" value={formatTL(saatlik * sg)} />
        </div>
      </div>
    </div>
  );
}

/* 4. Emeklilik Fon Hedefi (4% kuralı) */
export function EmeklilikFonHesaplayici() {
  const [aylikGider, setAylikGider] = useState("25000");
  const g = parseFloat(aylikGider) || 0;
  const yillikGider = g * 12;
  const fonHedefi = yillikGider * 25; // 4% kuralı
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Emeklilikte Aylık Gider Hedefi (₺)"><input className="field tabular-nums" inputMode="numeric" value={aylikGider} onChange={(e) => setAylikGider(e.target.value)} /></Field>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          <strong>4% Kuralı:</strong> Yıllık giderin 25 katı fonun olsun. Her yıl %4 çektiğinde para bitmez.
        </div>
      </div>
      <div className="space-y-4">
        <ResultHero label="Gereken Emeklilik Fonu" value={formatTL(fonHedefi)} sub={`Yıllık gider × 25`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Aylık gider" value={formatTL(g)} />
          <ResultRow label="Yıllık gider" value={formatTL(yillikGider)} />
          <ResultRow label="Fon hedefi (4% kuralı)" value={formatTL(fonHedefi)} />
          <ResultRow label="Yıllık %4 çekim" value={formatTL(yillikGider)} />
        </div>
      </div>
    </div>
  );
}

/* 5. Kira / Gelir Oranı (%30 sağlıklı) */
export function KiraGelirOranHesaplayici() {
  const [gelir, setGelir] = useState("30000");
  const [kira, setKira] = useState("10000");
  const g = parseFloat(gelir) || 0;
  const k = parseFloat(kira) || 0;
  const oran = g > 0 ? (k / g) * 100 : 0;
  const durum = oran <= 25 ? "🎯 Mükemmel" : oran <= 30 ? "✓ Sağlıklı" : oran <= 40 ? "⚠️ Zorlayıcı" : "❌ Sürdürülemez";
  const uygunKira = g * 0.3;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Net Gelir (₺)"><input className="field tabular-nums" inputMode="numeric" value={gelir} onChange={(e) => setGelir(e.target.value)} /></Field>
        <Field label="Ödeyeceğin Kira (₺)"><input className="field tabular-nums" inputMode="numeric" value={kira} onChange={(e) => setKira(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={durum} value={`%${formatNumber(oran, 1)}`} sub={`Uygun üst sınır: ${formatTL(uygunKira)}`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="≤ %25" value="Mükemmel — birikim kolay" />
          <ResultRow label="%25 - 30" value="Sağlıklı, sürdürülebilir" />
          <ResultRow label="%30 - 40" value="Zorlayıcı, sıkıntılı olabilir" />
          <ResultRow label="%40 üzeri" value="Sürdürülemez, alternatif ara" />
        </div>
      </div>
    </div>
  );
}

/* 6. KYK Öğrenci Kredisi Geri Ödeme */
export function KykGeriOdemeHesaplayici() {
  const [borc, setBorc] = useState("50000");
  const [ay, setAy] = useState("24");
  const b = parseFloat(borc) || 0;
  const a = parseFloat(ay) || 1;
  const aylik = b / a;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Toplam KYK Borcu (₺)" hint="TÜFE ile güncellenmiş toplam.">
          <input className="field tabular-nums" inputMode="numeric" value={borc} onChange={(e) => setBorc(e.target.value)} />
        </Field>
        <Field label="Geri Ödeme Süresi (ay)" hint="Mezuniyet + 2 yıl sonrası başlar, öğrenim süresinin 2 katı kadar.">
          <input className="field tabular-nums" inputMode="numeric" value={ay} onChange={(e) => setAy(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Aylık Taksit" value={formatTL(aylik)} sub={`${a} ay taksitle`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Toplam borç" value={formatTL(b)} />
          <ResultRow label="Ay sayısı" value={`${a}`} />
          <ResultRow label="Aylık taksit" value={formatTL(aylik)} />
          <ResultRow label="Yıllık toplam" value={formatTL(aylik * 12)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          KYK borcu 2022&apos;den beri TÜFE ile güncelleniyor (faiz değil). Geri ödeme mezuniyet + 2 yıl sonra başlar; öğrenim süresinin 2 katı boyunca taksitlendirilir.
        </div>
      </div>
    </div>
  );
}

/* 7. BES + Devlet Katkısı */
export function BesHesaplayici() {
  const [aylik, setAylik] = useState("2000");
  const [yil, setYil] = useState("20");
  const [getiri, setGetiri] = useState("35");

  const a = parseFloat(aylik) || 0;
  const y = parseFloat(yil) || 0;
  const g = parseFloat(getiri) || 0;

  const yillikKatki = a * 12;
  const devletKatki = yillikKatki * 0.30; // %30, üst sınır asgari ücret yıllığı × 3
  const toplamKatki = yillikKatki + devletKatki;

  const i = g / 100 / 12;
  const n = y * 12;
  const aylikToplam = a + (devletKatki / 12);
  const sonDeger = i === 0 ? aylikToplam * n : aylikToplam * (Math.pow(1 + i, n) - 1) / i;
  const anaparaToplam = aylikToplam * n;
  const getiriToplam = sonDeger - anaparaToplam;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Aylık Katkı Payı (₺)"><input className="field tabular-nums" inputMode="numeric" value={aylik} onChange={(e) => setAylik(e.target.value)} /></Field>
        <Field label="Yıl"><input className="field tabular-nums" inputMode="numeric" value={yil} onChange={(e) => setYil(e.target.value)} /></Field>
        <Field label="Yıllık Getiri Beklentisi (%)"><input className="field tabular-nums" inputMode="decimal" value={getiri} onChange={(e) => setGetiri(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Emeklilikte Alacağın" value={formatTL(sonDeger)} sub={`${y} yıl BES`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Aylık katkın" value={formatTL(a)} />
          <ResultRow label="Devlet katkısı (%30)" value={formatTL(devletKatki / 12) + "/ay"} />
          <ResultRow label="Toplam yıllık katkı" value={formatTL(toplamKatki)} />
          <ResultRow label="Toplam anapara" value={formatTL(anaparaToplam)} />
          <ResultRow label="Getiri" value={formatTL(getiriToplam)} />
          <ResultRow label="Son değer" value={formatTL(sonDeger)} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          BES devlet katkısı %30, yıllık üst sınır brüt asgari ücretin 3 katı kadardır. En az 10 yıl sistemde kalınırsa katkının tamamına hak kazanılır.
        </div>
      </div>
    </div>
  );
}

/* 8. Depozito İade (kira depozitosu) */
export function DepozitoIadeHesaplayici() {
  const [dep, setDep] = useState("30000");
  const [ay, setAy] = useState("36");
  const [tufe, setTufe] = useState("300");
  const d = parseFloat(dep) || 0;
  const a = parseFloat(ay) || 0;
  const t = parseFloat(tufe) || 0;
  const tufeCarpan = 1 + t / 100;
  const guncellenmis = d * tufeCarpan;
  const kayipMi = guncellenmis > d;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Ödediğiniz Depozito (₺)"><input className="field tabular-nums" inputMode="numeric" value={dep} onChange={(e) => setDep(e.target.value)} /></Field>
        <Field label="Kaç Ay Önce?"><input className="field tabular-nums" inputMode="numeric" value={ay} onChange={(e) => setAy(e.target.value)} /></Field>
        <Field label="Bu Süredeki Kümülatif TÜFE (%)"><input className="field tabular-nums" inputMode="decimal" value={tufe} onChange={(e) => setTufe(e.target.value)} /></Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Bugünkü Karşılık" value={formatTL(guncellenmis)} sub={kayipMi ? `Reel kayıp: ${formatTL(guncellenmis - d)} enflasyon` : "Enflasyondan koruma"} tone="accent" />
        <div className="card p-4">
          <ResultRow label={`Ödediğin (${a} ay önce)`} value={formatTL(d)} />
          <ResultRow label="TÜFE ile güncel karşılık" value={formatTL(guncellenmis)} />
          <ResultRow label="Reel değer kaybı" value={formatTL(guncellenmis - d)} />
        </div>
        <div className="rounded-xl border border-border bg-accent/10 px-4 py-3 text-sm text-accent">
          Türkiye&apos;de depozitonun faizli iadesi TBK m.342&apos;ye göre kiracının hakkıdır: 3 aylık kira tavanı ve faizli iade zorunludur.
        </div>
      </div>
    </div>
  );
}
