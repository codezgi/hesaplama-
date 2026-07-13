"use client";

import { useState } from "react";
import { yildonumuSayaci, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const trTarih = (d: Date) =>
  d.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric", weekday: "long" });

export function YildonumuHesaplayici() {
  const [tarih, setTarih] = useState("2015-06-15");

  const d = tarih ? new Date(tarih) : null;
  const valid = d && !isNaN(d.getTime());
  const r = valid ? yildonumuSayaci(d!) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Özel Tarih" hint="Evlilik, iş başlangıcı, doğum vb.">
          <input className="field" type="date" value={tarih} onChange={(e) => setTarih(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        {r && (
          <>
            <ResultHero
              label={`Sonraki ${r.yilSayisi}. Yıldönümü`}
              value={`${r.kalanGun} gün kaldı`}
              sub={trTarih(r.sonrakiYildonumu) + (r.isim ? ` · ${r.isim} yıldönümü` : "")}
              tone="accent"
            />
            <div className="card p-4">
              <ResultRow label="Sonraki yıldönümü tarihi" value={trTarih(r.sonrakiYildonumu)} />
              <ResultRow label="Sonraki yıldönümü" value={`${r.yilSayisi}. yıl`} />
              <ResultRow label="Kalan gün" value={`${r.kalanGun}`} />
              <ResultRow label="Bugüne toplam gün" value={formatNumber(r.toplamGun, 0)} />
              {r.isim && <ResultRow label="Evlilik yıldönümü adı" value={r.isim} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
