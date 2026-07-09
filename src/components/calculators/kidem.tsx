"use client";

import { useState } from "react";
import { kidemTazminati, KIDEM } from "@/lib/maas";
import { formatTL, formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field } from "@/components/result";

const bugun = new Date().toISOString().slice(0, 10);

export function KidemHesaplayici() {
  const [giris, setGiris] = useState("2019-01-01");
  const [cikis, setCikis] = useState(bugun);
  const [maas, setMaas] = useState("50000");
  const [tavan, setTavan] = useState(String(KIDEM.tavanVarsayilan));

  const gd = giris ? new Date(giris) : null;
  const cd = cikis ? new Date(cikis) : null;
  const m = parseFloat(maas.replace(",", ".")) || 0;
  const tv = parseFloat(tavan.replace(",", ".")) || KIDEM.tavanVarsayilan;

  const valid = gd && cd && !isNaN(gd.getTime()) && !isNaN(cd.getTime()) && cd > gd;
  const r = valid ? kidemTazminati(gd!, cd!, m, tv) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İşe Giriş Tarihi">
          <input
            className="field"
            type="date"
            value={giris}
            max={cikis}
            onChange={(e) => setGiris(e.target.value)}
          />
        </Field>

        <Field label="İşten Çıkış Tarihi">
          <input
            className="field"
            type="date"
            value={cikis}
            min={giris}
            onChange={(e) => setCikis(e.target.value)}
          />
        </Field>

        <Field label="Giydirilmiş Brüt Aylık Ücret (₺)" hint="Maaş + düzenli yan haklar (yol, yemek, ikramiye vb.)">
          <input
            className="field tabular-nums"
            inputMode="decimal"
            value={maas}
            onChange={(e) => setMaas(e.target.value)}
          />
        </Field>

        <Field label="Kıdem Tavanı (₺)" hint="Her 6 ayda güncellenir; güncel dönem değerini girin.">
          <input
            className="field tabular-nums"
            inputMode="decimal"
            value={tavan}
            onChange={(e) => setTavan(e.target.value)}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero
          label="Net Kıdem Tazminatı"
          value={r && r.hakEdiyor ? formatTL(r.netTazminat) : "—"}
          sub={
            r
              ? r.hakEdiyor
                ? `Kıdem: ${r.yil} yıl ${r.ay} ay ${r.gun} gün`
                : "En az 1 yıl çalışma şartı sağlanmıyor"
              : "Geçerli tarihleri girin"
          }
          tone="accent"
        />

        {r && r.hakEdiyor && (
          <>
            <div className="card p-4">
              <ResultRow label="Toplam çalışma süresi" value={`${formatNumber(r.toplamGun, 0)} gün`} />
              <ResultRow label="Hesaba esas aylık ücret" value={formatTL(r.kullanilanAylik)} />
              <ResultRow label="Brüt kıdem tazminatı" value={formatTL(r.brutTazminat)} />
              <ResultRow label="Damga vergisi (binde 7,59)" value={`− ${formatTL(r.damgaVergisi)}`} />
              <ResultRow label="Net kıdem tazminatı" value={formatTL(r.netTazminat)} />
            </div>

            {r.tavanUygulandi && (
              <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
                Ücretiniz kıdem tavanını aştığı için hesap <strong className="text-text">{formatTL(r.kullanilanAylik)}</strong> tavan tutarı üzerinden yapıldı.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
