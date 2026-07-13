"use client";

import { useState } from "react";
import { donguTakvimi } from "@/lib/saglik";
import { ResultHero, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);
const trTarih = (d: Date) =>
  d.toLocaleDateString("tr-TR", { day: "2-digit", month: "short", weekday: "short" });

export function AdetTakvimiHesaplayici() {
  const [sonAdet, setSonAdet] = useState("");
  const [dongu, setDongu] = useState("28");
  const [suresi, setSuresi] = useState("5");

  const d = sonAdet ? new Date(sonAdet) : null;
  const dg = parseInt(dongu, 10) || 28;
  const s = parseInt(suresi, 10) || 5;
  const valid = d && !isNaN(d.getTime());
  const takvim = valid ? donguTakvimi(d!, dg, s) : [];

  const renkler: Record<string, string> = {
    adet: "bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400",
    folikuler: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400",
    ovulasyon: "bg-primary text-white border-primary",
    luteal: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400",
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Son Adet Tarihi">
          <input className="field" type="date" value={sonAdet} max={bugun} onChange={(e) => setSonAdet(e.target.value)} />
        </Field>
        <Field label="Döngü Uzunluğu (gün)">
          <input className="field tabular-nums" inputMode="numeric" value={dongu} onChange={(e) => setDongu(e.target.value)} />
        </Field>
        <Field label="Adet Süresi (gün)">
          <input className="field tabular-nums" inputMode="numeric" value={suresi} onChange={(e) => setSuresi(e.target.value)} />
        </Field>
      </div>

      {takvim.length > 0 && (
        <>
          <ResultHero
            label="Sonraki adet"
            value={takvim[dg] ? trTarih(takvim[dg].tarih) : "—"}
            sub={`${dg} gün döngü`}
            tone="accent"
          />

          <div>
            <div className="mb-2 text-sm font-semibold text-text">3 aylık takvim</div>
            <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-7">
              {takvim.map((g, i) => (
                <div
                  key={i}
                  className={`rounded-lg border px-2 py-1.5 text-center text-[11px] ${renkler[g.faz]}`}
                  title={g.aciklama}
                >
                  <div className="font-semibold">{g.tarih.getDate()}</div>
                  <div className="opacity-80 text-[10px]">{g.tarih.toLocaleDateString("tr-TR", { month: "short" })}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-3 text-xs text-text-muted">
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-red-400" /> Adet</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-blue-400" /> Folikuler</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-primary" /> Ovulasyon</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-amber-400" /> Luteal</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
