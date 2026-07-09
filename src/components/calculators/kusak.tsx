"use client";

import { useState } from "react";
import { kusakBul } from "@/lib/yasam";
import { ResultHero, ResultRow, Field } from "@/components/result";

export function KusakHesaplayici() {
  const [yil, setYil] = useState("2000");

  const y = parseInt(yil, 10) || 0;
  const valid = y >= 1900 && y <= new Date().getFullYear();
  const k = valid ? kusakBul(y) : null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Doğum Yılı">
          <input className="field tabular-nums" inputMode="numeric" value={yil} onChange={(e) => setYil(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <ResultHero label="Kuşağınız" value={k?.ad ?? "—"} sub={k?.aralik} tone="accent" />
        {k && (
          <div className="card p-4">
            <ResultRow label="Kuşak" value={k.ad} />
            <ResultRow label="Yıl aralığı" value={k.aralik} />
            <ResultRow label="Özet" value={<span className="text-right">{k.ozet}</span>} />
          </div>
        )}
      </div>
    </div>
  );
}
