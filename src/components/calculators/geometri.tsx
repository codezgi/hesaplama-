"use client";

import { useState } from "react";
import { geometri, type SekilTuru } from "@/lib/matematik";
import { formatNumber } from "@/lib/calc";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

export function GeometriHesaplayici() {
  const [sekil, setSekil] = useState<SekilTuru>("daire");
  const [a, setA] = useState("5");
  const [b, setB] = useState("3");
  const [k1, setK1] = useState("3");
  const [k2, setK2] = useState("4");
  const [k3, setK3] = useState("5");

  const av = parseFloat(a.replace(",", ".")) || 0;
  const bv = parseFloat(b.replace(",", ".")) || 0;
  const kenarlar = [k1, k2, k3].map((x) => parseFloat(x.replace(",", ".")) || 0);
  const r = geometri(sekil, av, bv, kenarlar);

  const num = (v: number) => formatNumber(v, 4);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Şekil">
          <select className="field" value={sekil} onChange={(e) => setSekil(e.target.value as SekilTuru)}>
            <option value="kare">Kare</option>
            <option value="dikdortgen">Dikdörtgen</option>
            <option value="ucgen">Üçgen</option>
            <option value="daire">Daire</option>
          </select>
        </Field>

        {sekil === "kare" && (
          <Field label="Kenar (a)">
            <input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} />
          </Field>
        )}
        {sekil === "dikdortgen" && (
          <>
            <Field label="En (a)">
              <input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} />
            </Field>
            <Field label="Boy (b)">
              <input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} />
            </Field>
          </>
        )}
        {sekil === "daire" && (
          <Field label="Yarıçap (r)">
            <input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} />
          </Field>
        )}
        {sekil === "ucgen" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Taban">
                <input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} />
              </Field>
              <Field label="Yükseklik">
                <input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} />
              </Field>
            </div>
            <Field label="Kenarlar (çevre için)">
              <div className="grid grid-cols-3 gap-2">
                <input className="field tabular-nums" inputMode="decimal" value={k1} onChange={(e) => setK1(e.target.value)} />
                <input className="field tabular-nums" inputMode="decimal" value={k2} onChange={(e) => setK2(e.target.value)} />
                <input className="field tabular-nums" inputMode="decimal" value={k3} onChange={(e) => setK3(e.target.value)} />
              </div>
            </Field>
          </>
        )}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <ResultHero label="Alan" value={num(r.alan)} tone="accent" />
          <ResultHero label={sekil === "daire" ? "Çevre" : "Çevre"} value={num(r.cevre)} />
        </div>
        <div className="card p-4">
          <ResultRow label="Alan" value={`${num(r.alan)} birim²`} />
          <ResultRow label="Çevre" value={`${num(r.cevre)} birim`} />
          {sekil === "daire" && <ResultRow label="Çap" value={num(av * 2)} />}
        </div>
      </div>
    </div>
  );
}
