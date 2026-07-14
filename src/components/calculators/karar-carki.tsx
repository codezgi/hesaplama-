"use client";
import { useState, useRef } from "react";
import { RefreshCw, Plus, Trash2 } from "lucide-react";
import { Field } from "@/components/result";

const RENKLER = [
  "#2f9e6f", "#e08a5f", "#4a90e2", "#f4b43e", "#c05dcd", "#5cb85c",
  "#e74c3c", "#f39c12", "#3498db", "#9b59b6", "#1abc9c", "#e67e22",
];

export function KararCarkiHesaplayici() {
  const [secenekler, setSecenekler] = useState<string[]>(["Pizza", "Hamburger", "Kebap", "Sushi", "Salata", "Pilav"]);
  const [yeni, setYeni] = useState("");
  const [donuyor, setDonuyor] = useState(false);
  const [sonuc, setSonuc] = useState<string | null>(null);
  const [aci, setAci] = useState(0);
  const carkRef = useRef<SVGSVGElement>(null);

  const n = secenekler.length;
  const dilimAcisi = 360 / Math.max(1, n);

  function ekle() {
    if (yeni.trim() && secenekler.length < 12) {
      setSecenekler([...secenekler, yeni.trim()]);
      setYeni("");
    }
  }
  function sil(i: number) {
    setSecenekler(secenekler.filter((_, x) => x !== i));
    setSonuc(null);
  }
  function dondur() {
    if (donuyor || n < 2) return;
    setDonuyor(true);
    setSonuc(null);
    const secilenIdx = Math.floor(Math.random() * n);
    // Ok yukarıda; seçilen dilim üstte olacak şekilde döndür (5 tam tur + hedef)
    const hedefAci = 360 * 5 + (360 - (secilenIdx * dilimAcisi + dilimAcisi / 2));
    setAci((a) => a + hedefAci);
    setTimeout(() => {
      setSonuc(secenekler[secilenIdx]);
      setDonuyor(false);
    }, 4200);
  }

  // SVG dilim yolu
  function dilimYolu(idx: number): string {
    const r = 150;
    const cx = 160, cy = 160;
    const bas = (idx * dilimAcisi - 90) * Math.PI / 180;
    const bit = ((idx + 1) * dilimAcisi - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(bas);
    const y1 = cy + r * Math.sin(bas);
    const x2 = cx + r * Math.cos(bit);
    const y2 = cy + r * Math.sin(bit);
    const buyukYay = dilimAcisi > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${buyukYay} 1 ${x2} ${y2} Z`;
  }
  function metinKonumu(idx: number): { x: number; y: number; rot: number } {
    const cx = 160, cy = 160;
    const rTexto = 95;
    const orta = (idx * dilimAcisi + dilimAcisi / 2 - 90) * Math.PI / 180;
    return {
      x: cx + rTexto * Math.cos(orta),
      y: cy + rTexto * Math.sin(orta),
      rot: idx * dilimAcisi + dilimAcisi / 2,
    };
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
      {/* Sol: Seçenekler */}
      <div className="space-y-4">
        <Field label="Seçenekler (en fazla 12)">
          <div className="flex gap-2">
            <input
              className="field"
              value={yeni}
              onChange={(e) => setYeni(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), ekle())}
              placeholder="Yeni seçenek yaz…"
              disabled={secenekler.length >= 12}
            />
            <button type="button" onClick={ekle} disabled={secenekler.length >= 12 || !yeni.trim()} className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-white font-medium hover:bg-primary-hover disabled:opacity-50">
              <Plus className="h-4 w-4" /> Ekle
            </button>
          </div>
        </Field>
        <ul className="space-y-2">
          {secenekler.map((s, i) => (
            <li key={i} className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
              <span className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded" style={{ background: RENKLER[i % RENKLER.length] }} />
                <span className="text-text">{s}</span>
              </span>
              <button type="button" onClick={() => sil(i)} className="text-text-muted hover:text-accent">
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Sağ: Çark */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <svg
            ref={carkRef}
            viewBox="0 0 320 320"
            className="w-72 sm:w-80"
            style={{ transform: `rotate(${aci}deg)`, transition: donuyor ? "transform 4s cubic-bezier(.17,.67,.32,1.01)" : "none" }}
          >
            {secenekler.map((s, i) => {
              const pos = metinKonumu(i);
              return (
                <g key={i}>
                  <path d={dilimYolu(i)} fill={RENKLER[i % RENKLER.length]} stroke="#fff" strokeWidth="2" />
                  <text
                    x={pos.x}
                    y={pos.y}
                    transform={`rotate(${pos.rot} ${pos.x} ${pos.y})`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontSize="14"
                    fontWeight="600"
                    style={{ pointerEvents: "none" }}
                  >
                    {s.length > 10 ? s.slice(0, 10) + "…" : s}
                  </text>
                </g>
              );
            })}
            <circle cx="160" cy="160" r="18" fill="#fff" stroke="#ddd" strokeWidth="2" />
          </svg>
          {/* Ok göstergesi */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2">
            <div className="h-0 w-0 border-l-[14px] border-r-[14px] border-t-[24px] border-l-transparent border-r-transparent border-t-accent drop-shadow" />
          </div>
        </div>

        <button
          type="button"
          onClick={dondur}
          disabled={donuyor || n < 2}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white shadow-lg hover:bg-primary-hover disabled:opacity-50"
        >
          <RefreshCw className={`h-5 w-5 ${donuyor ? "animate-spin" : ""}`} /> {donuyor ? "Dönüyor…" : "Çarkı Döndür"}
        </button>

        {sonuc && (
          <div className="mt-4 rounded-xl border border-primary/30 bg-primary-soft px-5 py-3 text-center">
            <div className="text-xs text-text-muted uppercase tracking-wider">Kazanan</div>
            <div className="text-2xl font-bold text-primary">{sonuc}</div>
          </div>
        )}
      </div>
    </div>
  );
}
