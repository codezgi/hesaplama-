"use client";

import { useState } from "react";
import { sigaraBirakma } from "@/lib/saglik";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function SigaraBirakmaHesaplayici() {
  const [tarih, setTarih] = useState(bugun);
  const [gunluk, setGunluk] = useState("60");

  const d = tarih ? new Date(tarih) : null;
  const g = parseFloat(gunluk.replace(",", ".")) || 0;
  const bugunD = new Date();
  const gun = d && !isNaN(d.getTime()) ? Math.max(0, Math.floor((bugunD.getTime() - d.getTime()) / 86400000)) : 0;
  const r = sigaraBirakma(gun, g);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Sigarayı Bıraktığın Tarih">
          <input className="field" type="date" value={tarih} max={bugun} onChange={(e) => setTarih(e.target.value)} />
        </Field>
        <Field label="Günlük Sigara Bedeli (₺)" hint="Bırakmadan önceki günlük harcaman.">
          <input className="field tabular-nums" inputMode="decimal" value={gunluk} onChange={(e) => setGunluk(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label={`${formatNumber(gun, 0)} Gündür Bırakmışsın`} value={formatTL(r.birikenPara)} sub="Biriken para (sigara yerine)" tone="accent" />
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-text">Kazandığın sağlık aşamaları</div>
          {r.asamalari.length > 0 ? (
            <ul className="space-y-1.5 text-sm">
              {r.asamalari.map((a, i) => (
                <li key={i} className="text-text-muted"><span className="mr-1 text-primary">–</span> {a.ad}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-text-muted">Henüz aşama yok — devam et!</p>
          )}
          {r.sonrakiAsama && (
            <div className="mt-3 border-t border-border pt-3 text-sm">
              <span className="text-text-muted">Bir sonraki aşama:</span>
              <div className="text-text">{r.sonrakiAsama.ad}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
