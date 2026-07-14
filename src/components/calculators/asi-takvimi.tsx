"use client";

import { useState } from "react";
import { ASI_TAKVIMI } from "@/lib/saglik";
import { ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function AsiTakvimiHesaplayici() {
  const [dogum, setDogum] = useState(bugun);

  const d = dogum ? new Date(dogum) : null;
  const bugunD = new Date();
  const cocukAy = d && !isNaN(d.getTime())
    ? Math.max(0, Math.floor((bugunD.getTime() - d.getTime()) / (86400000 * 30.44)))
    : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Çocuğun Doğum Tarihi">
          <input className="field" type="date" value={dogum} max={bugun} onChange={(e) => setDogum(e.target.value)} />
        </Field>
        {d && <p className="text-sm text-text-muted">Çocuğun yaşı: <strong className="text-text">{cocukAy} ay</strong></p>}
      </div>

      <div className="card p-4">
        <div className="mb-2 text-sm font-semibold text-text">T.C. Sağlık Bakanlığı Genişletilmiş Bağışıklama Programı</div>
        {ASI_TAKVIMI.map((a) => {
          const asilmis = cocukAy >= a.ay;
          const yakin = !asilmis && cocukAy >= a.ay - 1;
          return (
            <ResultRow
              key={a.ay}
              label={
                <div>
                  <div className={`font-medium ${asilmis ? "text-text-muted line-through" : yakin ? "text-primary" : "text-text"}`}>{a.ad}</div>
                  <div className="text-xs text-text-muted">{a.asilar.join(" · ")}</div>
                </div>
              }
              value={
                <span className={asilmis ? "text-text-muted" : yakin ? "text-primary font-bold" : "text-text-muted"}>
                  {asilmis ? "Yapılmış olmalı" : yakin ? "Yakında" : "Bekleniyor"}
                </span>
              }
            />
          );
        })}
      </div>

      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        T.C. Sağlık Bakanlığı Genişletilmiş Bağışıklama Programı (GBP) standart takvimidir. Bebeğinizin sağlık durumuna göre pediatri hekiminiz farklı bir plan önerebilir.
      </div>
    </div>
  );
}
