"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { ibanDogrula } from "@/lib/calc";
import { ResultRow, Field } from "@/components/result";

export function IbanHesaplayici() {
  const [iban, setIban] = useState("TR33 0006 1005 1978 6457 8413 26");
  const r = ibanDogrula(iban);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="IBAN" hint="Boşluklu veya boşluksuz girebilirsiniz.">
          <input className="field font-mono uppercase" value={iban} onChange={(e) => setIban(e.target.value)} spellCheck={false} />
        </Field>
      </div>
      <div className="space-y-4">
        <div className={`rounded-2xl border p-5 text-center ${r.gecerli ? "border-primary/20 bg-primary-soft" : "border-accent/20 bg-accent-soft"}`}>
          <div className={`mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full ${r.gecerli ? "bg-primary text-white" : "bg-accent text-white"}`}>
            {r.gecerli ? <Check className="h-6 w-6" /> : <X className="h-6 w-6" />}
          </div>
          <div className={`text-xl font-bold ${r.gecerli ? "text-primary" : "text-accent"}`}>
            {r.gecerli ? "Geçerli IBAN" : "Geçersiz IBAN"}
          </div>
          {r.hata && <div className="mt-1 text-sm text-text-muted">{r.hata}</div>}
        </div>
        <div className="card p-4">
          <ResultRow label="Ülke kodu" value={r.ulke} />
          <ResultRow label="Karakter sayısı" value={`${r.uzunluk}`} />
          <ResultRow label="Formatlı" value={<code className="font-mono text-xs">{r.formatli}</code>} />
        </div>
        <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          ISO 13616 IBAN standardı MOD-97 algoritmasıyla doğrulanır. IBAN&apos;ın matematiksel doğruluğunu gösterir; hesap sahibi bilgisini içermez.
        </div>
      </div>
    </div>
  );
}
