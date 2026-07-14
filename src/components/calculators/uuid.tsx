"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, Copy, RefreshCw } from "lucide-react";
import { Field, Segmented } from "@/components/result";

export function UuidHesaplayici() {
  const [adet, setAdet] = useState(5);
  const [liste, setListe] = useState<string[]>([]);
  const [kopyalandi, setKopyalandi] = useState(false);

  const uret = useCallback(() => {
    const n = Math.min(Math.max(adet, 1), 100);
    setListe(Array.from({ length: n }, () => crypto.randomUUID()));
  }, [adet]);

  useEffect(() => {
    // Rastgele değer SSR/hydration uyuşmazlığı yaratmasın diye yalnızca istemcide üretilir
    // eslint-disable-next-line react-hooks/set-state-in-effect
    uret();
  }, [uret]);

  async function kopyala() {
    if (liste.length === 0) return;
    try {
      await navigator.clipboard.writeText(liste.join("\n"));
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 1500);
    } catch {}
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="w-40">
          <Field label="Adet">
            <Segmented
              value={adet}
              onChange={setAdet}
              options={[
                { label: "1", value: 1 },
                { label: "5", value: 5 },
                { label: "10", value: 10 },
                { label: "20", value: 20 },
              ]}
            />
          </Field>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={uret}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2"
          >
            <RefreshCw className="h-4 w-4" /> Yenile
          </button>
          <button
            type="button"
            onClick={kopyala}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface-2"
          >
            {kopyalandi ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            {kopyalandi ? "Kopyalandı" : "Tümünü kopyala"}
          </button>
        </div>
      </div>

      <div className="card divide-y divide-border">
        {liste.map((u, i) => (
          <div key={i} className="flex items-center justify-between gap-3 px-4 py-2.5">
            <code className="truncate font-mono text-sm text-text">{u}</code>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(u).catch(() => {})}
              aria-label="Kopyala"
              className="shrink-0 text-text-muted hover:text-primary"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <p className="text-sm text-text-muted">
        Sürüm 4 (rastgele) UUID — tarayıcınızın kriptografik <code className="font-mono">crypto.randomUUID()</code> fonksiyonuyla üretilir; sunucuya gönderilmez.
      </p>
    </div>
  );
}
