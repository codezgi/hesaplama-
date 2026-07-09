"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Segmented } from "@/components/result";

/** UTF-8 güvenli base64 encode/decode (Türkçe karakterler için) */
function encodeB64(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}
function decodeB64(s: string): string {
  const bin = atob(s.trim());
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function Base64Hesaplayici() {
  const [mod, setMod] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("Merhaba Dünya");
  const [kopyalandi, setKopyalandi] = useState(false);

  const { output, hata } = useMemo(() => {
    if (!input.trim()) return { output: "", hata: null as string | null };
    try {
      return { output: mod === "encode" ? encodeB64(input) : decodeB64(input), hata: null };
    } catch {
      return { output: "", hata: "Geçersiz Base64 girişi." };
    }
  }, [input, mod]);

  async function kopyala() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 1500);
    } catch {}
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented
          value={mod}
          onChange={setMod}
          options={[
            { label: "Metin → Base64", value: "encode" },
            { label: "Base64 → Metin", value: "decode" },
          ]}
        />
        <button
          type="button"
          onClick={kopyala}
          disabled={!output}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2 disabled:opacity-50"
        >
          {kopyalandi ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          {kopyalandi ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <span className="mb-1.5 block text-sm font-medium text-text">{mod === "encode" ? "Metin" : "Base64"}</span>
          <textarea
            className="field h-48 resize-y font-mono text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div>
          <span className="mb-1.5 block text-sm font-medium text-text">{mod === "encode" ? "Base64" : "Metin"}</span>
          <textarea
            className="field h-48 resize-y font-mono text-sm"
            value={hata ? "" : output}
            readOnly
            spellCheck={false}
            placeholder="Sonuç burada görünecek"
          />
        </div>
      </div>

      {hata && (
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">
          {hata}
        </div>
      )}
    </div>
  );
}
