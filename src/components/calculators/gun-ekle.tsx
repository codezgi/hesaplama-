"use client";

import { useState } from "react";
import { gunEkle, HAFTA_GUNLERI } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);
const trTarih = (d: Date) =>
  d.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });

export function GunEkleHesaplayici() {
  const [tarih, setTarih] = useState(bugun);
  const [adet, setAdet] = useState("30");
  const [yon, setYon] = useState<"ekle" | "cikar">("ekle");

  const d = tarih ? new Date(tarih) : null;
  const n = parseInt(adet, 10) || 0;
  const g = yon === "cikar" ? -n : n;
  const valid = d && !isNaN(d.getTime());
  const sonuc = valid ? gunEkle(d!, g) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Başlangıç Tarihi">
          <input className="field" type="date" value={tarih} onChange={(e) => setTarih(e.target.value)} />
        </Field>
        <Field label="Gün Sayısı">
          <input className="field tabular-nums" inputMode="numeric" value={adet} onChange={(e) => setAdet(e.target.value)} />
        </Field>
        <Field label="İşlem">
          <Segmented
            value={yon}
            onChange={setYon}
            options={[
              { label: "Ekle (+)", value: "ekle" },
              { label: "Çıkar (−)", value: "cikar" },
            ]}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label={yon === "ekle" ? `${n} gün sonra` : `${n} gün önce`}
          value={sonuc ? trTarih(sonuc) : "—"}
          sub={sonuc ? HAFTA_GUNLERI[sonuc.getDay()] : "Tarih girin"}
          tone="accent"
        />
        {sonuc && (
          <div className="card p-4">
            <ResultRow label="Tarih" value={trTarih(sonuc)} />
            <ResultRow label="Haftanın günü" value={HAFTA_GUNLERI[sonuc.getDay()]} />
            <ResultRow label="ISO tarih" value={sonuc.toISOString().slice(0, 10)} />
          </div>
        )}
      </div>
    </div>
  );
}
