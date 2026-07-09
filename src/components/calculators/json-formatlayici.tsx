"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Segmented } from "@/components/result";

export function JsonFormatlayici() {
  const [input, setInput] = useState('{"ad":"Alperen","roller":["kaptan","developer"],"aktif":true}');
  const [girinti, setGirinti] = useState<number>(2);
  const [kopyalandi, setKopyalandi] = useState(false);

  const { output, hata } = useMemo(() => {
    if (!input.trim()) return { output: "", hata: null as string | null };
    try {
      const parsed = JSON.parse(input);
      const out = girinti === 0 ? JSON.stringify(parsed) : JSON.stringify(parsed, null, girinti);
      return { output: out, hata: null };
    } catch (e) {
      return { output: "", hata: e instanceof Error ? e.message : "Geçersiz JSON" };
    }
  }, [input, girinti]);

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
          value={girinti}
          onChange={setGirinti}
          options={[
            { label: "2 boşluk", value: 2 },
            { label: "4 boşluk", value: 4 },
            { label: "Küçült", value: 0 },
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
          <span className="mb-1.5 block text-sm font-medium text-text">JSON Girişi</span>
          <textarea
            className="field h-64 resize-y font-mono text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            placeholder='{"örnek": "veri"}'
          />
        </div>
        <div>
          <span className="mb-1.5 block text-sm font-medium text-text">Sonuç</span>
          <textarea
            className="field h-64 resize-y font-mono text-sm"
            value={hata ? "" : output}
            readOnly
            spellCheck={false}
            placeholder="Biçimlendirilmiş JSON burada görünecek"
          />
        </div>
      </div>

      {hata && (
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">
          <strong>Geçersiz JSON:</strong> {hata}
        </div>
      )}
    </div>
  );
}
