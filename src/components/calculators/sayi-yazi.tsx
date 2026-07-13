"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { sayiyiYazyaCevir } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function SayiYaziHesaplayici() {
  const [sayi, setSayi] = useState("12345,67");
  const [kopyalandi, setKopyalandi] = useState(false);

  const n = parseFloat(sayi.replace(/\./g, "").replace(",", "."));
  const yazi = Number.isFinite(n) ? sayiyiYazyaCevir(n) : "";

  async function kopyala() {
    await navigator.clipboard.writeText(yazi);
    setKopyalandi(true);
    setTimeout(() => setKopyalandi(false), 1500);
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sayı" hint="Ondalık ayırıcı olarak virgül kullanın (ör. 12.345,67).">
          <input className="field tabular-nums" inputMode="decimal" value={sayi} onChange={(e) => setSayi(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Türkçe Yazılı" value={<span className="text-lg leading-snug">{yazi || "—"}</span>} sub={Number.isFinite(n) ? formatNumber(n, 2) : "Geçerli sayı girin"} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Sayı" value={Number.isFinite(n) ? formatNumber(n, 2) : "—"} />
          <ResultRow label="Yazı ile" value={<span className="text-right">{yazi}</span>} />
        </div>
        <button
          type="button"
          onClick={kopyala}
          disabled={!yazi}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2 disabled:opacity-50"
        >
          {kopyalandi ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          {kopyalandi ? "Kopyalandı" : "Yazıyı kopyala"}
        </button>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Çek, senet ve resmi belgelerde sıklıkla gereken tutarların yazı ile yazılışını üretir.
        </div>
      </div>
    </div>
  );
}
