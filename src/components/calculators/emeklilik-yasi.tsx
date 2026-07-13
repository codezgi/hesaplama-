"use client";
import { useState } from "react";
import { emeklilikYasi } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function EmeklilikYasiHesaplayici() {
  const [yil, setYil] = useState("2005");
  const [cinsiyet, setCinsiyet] = useState<"erkek" | "kadin">("erkek");
  const r = emeklilikYasi(parseInt(yil) || 2000, cinsiyet);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İlk SGK Giriş Yılı"><input className="field tabular-nums" inputMode="numeric" value={yil} onChange={(e) => setYil(e.target.value)} /></Field>
        <Field label="Cinsiyet">
          <Segmented value={cinsiyet} onChange={setCinsiyet} options={[{ label: "Erkek", value: "erkek" }, { label: "Kadın", value: "kadin" }]} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Emeklilik Yaşı" value={`${r.yas} yaş`} sub={`${r.primGun} prim günü + ${r.sigortalilikYil} yıl sigortalılık`} tone="accent" />
        <div className="card p-4">
          <ResultRow label="Emeklilik yaşı" value={`${r.yas}`} />
          <ResultRow label="Toplam prim gün" value={`${r.primGun.toLocaleString("tr-TR")}`} />
          <ResultRow label="Sigortalılık süresi" value={`${r.sigortalilikYil} yıl`} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Yaklaşık koşullardır. Kısmi emeklilik, engellilik/yaş büyütme, EYT (8 Eylül 1999 öncesi) gibi durumlar farklılık yaratır. SGK 4A sigortalıları için verilmiştir.
        </div>
      </div>
    </div>
  );
}
