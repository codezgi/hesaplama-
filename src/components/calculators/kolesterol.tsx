"use client";
import { useState } from "react";
import { kolesterolKategori, type Cinsiyet } from "@/lib/saglik";
import { ResultRow, Field, Segmented } from "@/components/result";

export function KolesterolHesaplayici() {
  const [c, setC] = useState<Cinsiyet>("erkek");
  const [t, setT] = useState("190");
  const [ldl, setLdl] = useState("110");
  const [hdl, setHdl] = useState("45");
  const [tri, setTri] = useState("150");
  const durum = kolesterolKategori(parseFloat(t) || 0, parseFloat(ldl) || 0, parseFloat(hdl) || 0, c);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Cinsiyet">
          <Segmented value={c} onChange={setC} options={[{ label: "Erkek", value: "erkek" }, { label: "Kadın", value: "kadin" }]} />
        </Field>
        <Field label="Toplam Kolesterol (mg/dL)"><input className="field tabular-nums" inputMode="numeric" value={t} onChange={(e) => setT(e.target.value)} /></Field>
        <Field label="LDL (kötü kolesterol)"><input className="field tabular-nums" inputMode="numeric" value={ldl} onChange={(e) => setLdl(e.target.value)} /></Field>
        <Field label="HDL (iyi kolesterol)"><input className="field tabular-nums" inputMode="numeric" value={hdl} onChange={(e) => setHdl(e.target.value)} /></Field>
        <Field label="Trigliserid"><input className="field tabular-nums" inputMode="numeric" value={tri} onChange={(e) => setTri(e.target.value)} /></Field>
      </div>
      <div className="card p-4">
        <div className="mb-2 text-sm font-semibold text-text">Değerlendirme</div>
        {durum.map((d, i) => <ResultRow key={i} label={d.split(":")[0]} value={d.split(":")[1]?.trim() ?? "—"} />)}
      </div>
    </div>
  );
}
