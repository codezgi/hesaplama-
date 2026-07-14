"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, Copy, RefreshCw } from "lucide-react";
import { Field, ResultHero } from "@/components/result";

const BUYUK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const KUCUK = "abcdefghijklmnopqrstuvwxyz";
const SAYI = "0123456789";
const SEMBOL = "!@#$%^&*()-_=+[]{};:,.<>/?";

function guclu(char: string, uzunluk: number) {
  const n = char.length;
  if (!n) return { skor: 0, etiket: "—" };
  const entropi = Math.log2(n) * uzunluk;
  if (entropi < 40) return { skor: 1, etiket: "Zayıf" };
  if (entropi < 60) return { skor: 2, etiket: "Orta" };
  if (entropi < 80) return { skor: 3, etiket: "Güçlü" };
  return { skor: 4, etiket: "Çok güçlü" };
}

export function SifreUreticiHesaplayici() {
  const [uzunluk, setUzunluk] = useState(16);
  const [buyuk, setBuyuk] = useState(true);
  const [kucuk, setKucuk] = useState(true);
  const [sayi, setSayi] = useState(true);
  const [sembol, setSembol] = useState(true);
  const [sifre, setSifre] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);

  const uret = useCallback(() => {
    const havuz = (buyuk ? BUYUK : "") + (kucuk ? KUCUK : "") + (sayi ? SAYI : "") + (sembol ? SEMBOL : "");
    if (!havuz) {
      setSifre("");
      return;
    }
    const buf = new Uint32Array(uzunluk);
    crypto.getRandomValues(buf);
    let s = "";
    for (let i = 0; i < uzunluk; i++) s += havuz[buf[i] % havuz.length];
    setSifre(s);
  }, [uzunluk, buyuk, kucuk, sayi, sembol]);

  useEffect(() => {
    // Rastgele değer SSR/hydration uyuşmazlığı yaratmasın diye yalnızca istemcide üretilir
    // eslint-disable-next-line react-hooks/set-state-in-effect
    uret();
  }, [uret]);

  async function kopyala() {
    if (!sifre) return;
    try {
      await navigator.clipboard.writeText(sifre);
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 1500);
    } catch {}
  }

  const havuz = (buyuk ? BUYUK : "") + (kucuk ? KUCUK : "") + (sayi ? SAYI : "") + (sembol ? SEMBOL : "");
  const g = guclu(havuz, uzunluk);
  const renk = ["text-text-muted", "text-red-500", "text-orange-500", "text-primary", "text-primary"][g.skor];

  return (
    <div className="space-y-5">
      <ResultHero
        label={`Güçlülük: ${g.etiket}`}
        value={<span className="font-mono break-all">{sifre || "—"}</span>}
        tone="accent"
        sub={<span className={renk}>{"█".repeat(g.skor)}{"░".repeat(4 - g.skor)}</span>}
      />

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={uret}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2"
        >
          <RefreshCw className="h-4 w-4" /> Yeni şifre
        </button>
        <button
          type="button"
          onClick={kopyala}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2"
        >
          {kopyalandi ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          {kopyalandi ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`Uzunluk: ${uzunluk}`}>
          <input
            type="range"
            min={4}
            max={64}
            value={uzunluk}
            onChange={(e) => setUzunluk(Number(e.target.value))}
            className="w-full accent-[var(--primary)]"
          />
        </Field>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={buyuk} onChange={(e) => setBuyuk(e.target.checked)} /> Büyük harf (A-Z)</label>
          <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={kucuk} onChange={(e) => setKucuk(e.target.checked)} /> Küçük harf (a-z)</label>
          <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={sayi} onChange={(e) => setSayi(e.target.checked)} /> Sayı (0-9)</label>
          <label className="flex items-center gap-2 text-sm text-text"><input type="checkbox" checked={sembol} onChange={(e) => setSembol(e.target.checked)} /> Sembol (!@#…)</label>
        </div>
      </div>

      <p className="text-sm text-text-muted">
        Şifre tarayıcınızda <code className="font-mono">crypto.getRandomValues</code> ile üretilir; sunucuya gönderilmez.
      </p>
    </div>
  );
}
