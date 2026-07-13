"use client";

import { useState } from "react";
import { sutIzniHesapla } from "@/lib/maas";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function SutIzniHesaplayici() {
  const [memur, setMemur] = useState<"ozel" | "memur">("ozel");
  const [cocukAyi, setCocukAyi] = useState("3");

  const c = parseInt(cocukAyi, 10) || 0;
  const r = sutIzniHesapla(memur === "memur", c);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Çalışma Türü">
          <Segmented value={memur} onChange={setMemur} options={[
            { label: "Özel Sektör", value: "ozel" },
            { label: "Memur", value: "memur" },
          ]} />
        </Field>
        <Field label="Çocuğun Yaşı (ay)">
          <input className="field tabular-nums" inputMode="numeric" value={cocukAyi} onChange={(e) => setCocukAyi(e.target.value)} />
        </Field>
      </div>
      <div className="space-y-4">
        <ResultHero
          label="Günlük Süt İzni"
          value={r.toplamGunSaat > 0 ? `${r.gunlukSaat} sa ${r.gunlukDakika} dk` : "Hak yok"}
          sub={r.aciklama}
          tone="accent"
        />
        <div className="card p-4">
          <ResultRow label="Günlük süt izni" value={`${r.toplamGunSaat} saat`} />
          <ResultRow label="Yasal dayanak" value={memur === "memur" ? "657 s.K. m.104" : "İş K. m.74/7"} />
          <ResultRow label="Süre" value="Doğum sonrası 12 ay" />
          <ResultRow label="Ücret" value="Çalışma süresinden sayılır (kesinti yok)" />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          Kadın işçi bu süreyi gün içinde bölerek veya birleştirerek kullanabilir; işveren süt izni gerekçesiyle kesinti yapamaz.
        </div>
      </div>
    </div>
  );
}
