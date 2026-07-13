"use client";

import { useState } from "react";
import { yasalFaizHesapla, gecikmeZammi, YASAL_FAIZ_ORANLARI } from "@/lib/hukuki";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function YasalFaizHesaplayici() {
  const [mod, setMod] = useState<"yasal" | "ticari" | "reeskont" | "gecikme">("yasal");
  const [anapara, setAnapara] = useState("100000");
  const [gun, setGun] = useState("365");
  const [ay, setAy] = useState("12");
  const [ozel, setOzel] = useState("");

  const a = parseFloat(anapara.replace(",", ".")) || 0;
  const g = parseInt(gun, 10) || 0;
  const m = parseInt(ay, 10) || 0;
  const oz = parseFloat(ozel.replace(",", ".")) || 0;

  const oran = mod === "yasal" ? YASAL_FAIZ_ORANLARI.yasalFaiz
    : mod === "ticari" ? YASAL_FAIZ_ORANLARI.ticariFaiz
    : mod === "reeskont" ? YASAL_FAIZ_ORANLARI.reeskont
    : YASAL_FAIZ_ORANLARI.gecikmeZammi;

  const kullanilan = oz > 0 ? oz : oran;

  const r = mod === "gecikme"
    ? gecikmeZammi(a, kullanilan, m)
    : yasalFaizHesapla(a, kullanilan, g);

  const faizTutar = mod === "gecikme" ? (r as ReturnType<typeof gecikmeZammi>).zam : (r as ReturnType<typeof yasalFaizHesapla>).faiz;

  return (
    <div className="space-y-5">
      <Segmented
        value={mod}
        onChange={setMod}
        options={[
          { label: "Yasal Faiz (%9)", value: "yasal" },
          { label: "Ticari (%15)", value: "ticari" },
          { label: "Reeskont", value: "reeskont" },
          { label: "Gecikme Zammı", value: "gecikme" },
        ]}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <Field label="Anapara (₺)">
            <input className="field tabular-nums" inputMode="decimal" value={anapara} onChange={(e) => setAnapara(e.target.value)} />
          </Field>
          {mod === "gecikme" ? (
            <Field label="Süre (ay)">
              <input className="field tabular-nums" inputMode="numeric" value={ay} onChange={(e) => setAy(e.target.value)} />
            </Field>
          ) : (
            <Field label="Süre (gün)">
              <input className="field tabular-nums" inputMode="numeric" value={gun} onChange={(e) => setGun(e.target.value)} />
            </Field>
          )}
          <Field label={`Özel Oran (%) — boş = varsayılan (${oran})`}>
            <input className="field tabular-nums" inputMode="decimal" value={ozel} onChange={(e) => setOzel(e.target.value)} placeholder={String(oran)} />
          </Field>
        </div>

        <div className="space-y-4">
          <ResultHero label={mod === "gecikme" ? "Toplam Zam" : "İşleyecek Faiz"} value={formatTL(faizTutar)} sub={`Kullanılan oran: ${mod === "gecikme" ? `aylık %${formatNumber(kullanilan, 2)}` : `yıllık %${formatNumber(kullanilan, 2)}`}`} tone="accent" />
          <div className="card p-4">
            <ResultRow label="Anapara" value={formatTL(a)} />
            <ResultRow label={mod === "gecikme" ? "Zam" : "Faiz"} value={formatTL(faizTutar)} />
            <ResultRow label="Genel toplam" value={formatTL(r.toplam)} />
          </div>
          <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
            3095 sayılı Kanun (yasal/ticari faiz) ve 6183 sayılı Kanun (kamu alacaklarında gecikme zammı). Oranlar yıl içinde değişebilir; kesin oran için Resmi Gazete&apos;ye bakınız.
          </div>
        </div>
      </div>
    </div>
  );
}
