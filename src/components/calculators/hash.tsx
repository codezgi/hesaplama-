"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Field, Segmented } from "@/components/result";

type Algoritma = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

async function hashla(metin: string, alg: Algoritma): Promise<string> {
  const bytes = new TextEncoder().encode(metin);
  const buf = await crypto.subtle.digest(alg, bytes);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function HashHesaplayici() {
  const [metin, setMetin] = useState("merhaba dünya");
  const [alg, setAlg] = useState<Algoritma>("SHA-256");
  const [sonuc, setSonuc] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);

  useEffect(() => {
    let iptal = false;
    hashla(metin, alg).then((h) => {
      if (!iptal) setSonuc(h);
    });
    return () => {
      iptal = true;
    };
  }, [metin, alg]);

  async function kopyala() {
    try {
      await navigator.clipboard.writeText(sonuc);
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 1500);
    } catch {}
  }

  return (
    <div className="space-y-5">
      <Segmented
        value={alg}
        onChange={setAlg}
        options={[
          { label: "SHA-1", value: "SHA-1" },
          { label: "SHA-256", value: "SHA-256" },
          { label: "SHA-384", value: "SHA-384" },
          { label: "SHA-512", value: "SHA-512" },
        ]}
      />

      <Field label="Metin">
        <textarea
          className="field h-32 resize-y font-mono text-sm"
          value={metin}
          onChange={(e) => setMetin(e.target.value)}
          spellCheck={false}
        />
      </Field>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-sm font-medium text-text">{alg} Hash</span>
          <button
            type="button"
            onClick={kopyala}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text hover:bg-surface-2"
          >
            {kopyalandi ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
            {kopyalandi ? "Kopyalandı" : "Kopyala"}
          </button>
        </div>
        <textarea
          readOnly
          value={sonuc}
          className="field h-24 resize-none break-all font-mono text-xs"
          spellCheck={false}
        />
      </div>

      <p className="text-sm text-text-muted">
        SHA algoritmaları tek yönlüdür — hash'ten metni geri elde edemezsiniz. İşlem tarayıcıda yapılır; veri sunucuya gönderilmez. (MD5 modern web kripto API'sinde bulunmadığı için hariç tutulmuştur.)
      </p>
    </div>
  );
}
