"use client";
import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { ResultHero, ResultRow, Field, Segmented } from "@/components/result";

const NOKTALAR: Record<number, { cx: number; cy: number }[]> = {
  1: [{ cx: 50, cy: 50 }],
  2: [{ cx: 25, cy: 25 }, { cx: 75, cy: 75 }],
  3: [{ cx: 25, cy: 25 }, { cx: 50, cy: 50 }, { cx: 75, cy: 75 }],
  4: [{ cx: 25, cy: 25 }, { cx: 75, cy: 25 }, { cx: 25, cy: 75 }, { cx: 75, cy: 75 }],
  5: [{ cx: 25, cy: 25 }, { cx: 75, cy: 25 }, { cx: 50, cy: 50 }, { cx: 25, cy: 75 }, { cx: 75, cy: 75 }],
  6: [{ cx: 25, cy: 25 }, { cx: 25, cy: 50 }, { cx: 25, cy: 75 }, { cx: 75, cy: 25 }, { cx: 75, cy: 50 }, { cx: 75, cy: 75 }],
};

function ZarYuz({ n, salla }: { n: number; salla: boolean }) {
  return (
    <div className={`inline-block ${salla ? "animate-bounce" : ""}`}>
      <svg viewBox="0 0 100 100" className="h-24 w-24 sm:h-28 sm:w-28">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#fff" stroke="#333" strokeWidth="2" />
        {NOKTALAR[n]?.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="7" fill="#333" />
        ))}
      </svg>
    </div>
  );
}

export function ZarAtHesaplayici() {
  const [adet, setAdet] = useState<number>(2);
  const [sayilar, setSayilar] = useState<number[]>([1, 1]);
  const [salla, setSalla] = useState(false);

  function at() {
    if (salla) return;
    setSalla(true);
    // Sallarken sürekli değişen sayılar
    const interval = setInterval(() => {
      setSayilar(Array.from({ length: adet }, () => Math.floor(Math.random() * 6) + 1));
    }, 60);
    setTimeout(() => {
      clearInterval(interval);
      const sonHal = Array.from({ length: adet }, () => Math.floor(Math.random() * 6) + 1);
      setSayilar(sonHal);
      setSalla(false);
    }, 1200);
  }

  const toplam = sayilar.reduce((s, x) => s + x, 0);

  return (
    <div className="space-y-6">
      <Field label="Zar Sayısı">
        <Segmented value={adet} onChange={(v) => { setAdet(v); setSayilar(Array(v).fill(1)); }} options={[{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "5", value: 5 }]} />
      </Field>

      <div className="flex flex-wrap items-center justify-center gap-3 py-6">
        {sayilar.map((n, i) => <ZarYuz key={i} n={n} salla={salla} />)}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button type="button" onClick={at} disabled={salla} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white shadow-lg hover:bg-primary-hover disabled:opacity-50">
          <RefreshCw className={`h-5 w-5 ${salla ? "animate-spin" : ""}`} /> {salla ? "Sallanıyor…" : "Zar At"}
        </button>

        {!salla && (
          <ResultHero label={`${adet} zar toplamı`} value={`${toplam}`} sub={sayilar.join(" + ")} tone="accent" />
        )}
      </div>

      <div className="card p-4">
        <ResultRow label="Zar sayısı" value={`${adet}`} />
        <ResultRow label="Zar değerleri" value={sayilar.join(", ")} />
        <ResultRow label="Toplam" value={`${toplam}`} />
        <ResultRow label="Ortalama" value={`${(toplam / adet).toFixed(2)}`} />
      </div>
    </div>
  );
}
