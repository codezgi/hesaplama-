"use client";
import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { ResultRow } from "@/components/result";

export function YaziTuraHesaplayici() {
  const [sonuc, setSonuc] = useState<"yazi" | "tura" | null>(null);
  const [donuyor, setDonuyor] = useState(false);
  const [istatistik, setIstatistik] = useState({ yazi: 0, tura: 0 });
  const [donus, setDonus] = useState({ y: 1260, x: 900 });

  function at() {
    if (donuyor) return;
    setDonuyor(true);
    setSonuc(null);
    setDonus({ y: 1080 + Math.random() * 360, x: 720 + Math.random() * 360 });
    setTimeout(() => {
      const s = Math.random() < 0.5 ? "yazi" : "tura";
      setSonuc(s);
      setIstatistik((prev) => ({ ...prev, [s]: prev[s] + 1 }));
      setDonuyor(false);
    }, 1200);
  }

  const toplam = istatistik.yazi + istatistik.tura;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col items-center">
        <div className="relative h-52 w-52" style={{ perspective: "800px" }}>
          <div
            className="absolute inset-0 rounded-full text-6xl font-bold shadow-2xl transition-transform duration-1000"
            style={{
              transformStyle: "preserve-3d",
              transform: donuyor
                ? `rotateY(${donus.y}deg) rotateX(${donus.x}deg)`
                : sonuc === "yazi" ? "rotateY(0deg)" : sonuc === "tura" ? "rotateY(180deg)" : "rotateY(0deg)",
              background: "radial-gradient(circle at 30% 30%, #f5c948, #d19c25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#5b3d10",
            }}
          >
            {donuyor ? "" : sonuc === "yazi" ? "Y" : sonuc === "tura" ? "T" : "?"}
          </div>
        </div>
        <button
          type="button"
          onClick={at}
          disabled={donuyor}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white shadow-lg hover:bg-primary-hover disabled:opacity-50"
        >
          <RefreshCw className={`h-5 w-5 ${donuyor ? "animate-spin" : ""}`} /> {donuyor ? "Havada…" : "🪙 Parayı At"}
        </button>
      </div>

      <div className="space-y-4">
        {sonuc && !donuyor && (
          <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
            <div className="text-sm text-text-muted">Sonuç</div>
            <div className="mt-1 text-4xl font-bold text-primary">{sonuc === "yazi" ? "YAZI" : "TURA"}</div>
          </div>
        )}
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-text">İstatistik ({toplam} atış)</div>
          <ResultRow label="Yazı" value={`${istatistik.yazi} (%${toplam > 0 ? ((istatistik.yazi / toplam) * 100).toFixed(1) : "0"})`} />
          <ResultRow label="Tura" value={`${istatistik.tura} (%${toplam > 0 ? ((istatistik.tura / toplam) * 100).toFixed(1) : "0"})`} />
        </div>
        <button type="button" onClick={() => setIstatistik({ yazi: 0, tura: 0 })} className="text-sm text-text-muted hover:text-primary">
          İstatistiği sıfırla
        </button>
      </div>
    </div>
  );
}
