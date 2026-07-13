"use client";

import { useState } from "react";
import { dogumIzniHesapla } from "@/lib/maas";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function DogumIzniHesaplayici() {
  const [ebeveyn, setEbeveyn] = useState<"anne" | "baba">("anne");
  const [cogul, setCogul] = useState<"tekli" | "cogul">("tekli");
  const [sektor, setSektor] = useState<"ozel" | "memur">("ozel");

  const r = dogumIzniHesapla(ebeveyn, cogul === "cogul", sektor === "memur");

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="İzin Talep Eden">
          <Segmented
            value={ebeveyn}
            onChange={setEbeveyn}
            options={[
              { label: "Anne", value: "anne" },
              { label: "Baba", value: "baba" },
            ]}
          />
        </Field>
        {ebeveyn === "anne" && (
          <Field label="Gebelik Türü">
            <Segmented
              value={cogul}
              onChange={setCogul}
              options={[
                { label: "Tekli", value: "tekli" },
                { label: "Çoğul", value: "cogul" },
              ]}
            />
          </Field>
        )}
        {ebeveyn === "baba" && (
          <Field label="Çalışma Şekli">
            <Segmented
              value={sektor}
              onChange={setSektor}
              options={[
                { label: "Özel Sektör", value: "ozel" },
                { label: "Memur", value: "memur" },
              ]}
            />
          </Field>
        )}
      </div>

      <div className="space-y-4">
        <ResultHero
          label={ebeveyn === "anne" ? "Anne Doğum İzni" : "Baba İzni"}
          value={`${r.toplamGun} gün`}
          sub={ebeveyn === "anne" ? `${r.hafta} hafta toplam` : "Yasal ücretli izin"}
          tone="accent"
        />
        <div className="card p-4">
          {r.ayrinti.map((line, i) => (
            <ResultRow key={i} label={`${i + 1}.`} value={<span className="text-right text-sm">{line}</span>} />
          ))}
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          4857 sayılı İş Kanunu m.74 (özel sektör) ve 657 sayılı Devlet Memurları Kanunu m.104 (memur). Süreler asgaridir; toplu sözleşmede uzun süreler belirlenebilir.
        </div>
      </div>
    </div>
  );
}
