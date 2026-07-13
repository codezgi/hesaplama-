"use client";
import { useState } from "react";
import { uykuHesapla } from "@/lib/saglik";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function UykuDonguHesaplayici() {
  const [uyanma, setUyanma] = useState("07:00");
  const [h, m] = uyanma.split(":").map((x) => parseInt(x, 10) || 0);
  const r = uykuHesapla(h, m);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Uyanma Saati" hint="Kaçta uyanmak istiyorsun?">
          <input className="field" type="time" value={uyanma} onChange={(e) => setUyanma(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero label="Önerilen Yatma Saatleri" value={r.yatmaSaatleri[1]} sub="5 döngü — çoğu yetişkin için yeterli" tone="accent" />
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-text">Uyku döngüsü 90 dk. Bu saatlerden birinde yat:</div>
          {r.yatmaSaatleri.map((y, i) => <ResultRow key={i} label={`Seçenek ${i + 1}`} value={y} />)}
        </div>
      </div>
    </div>
  );
}
