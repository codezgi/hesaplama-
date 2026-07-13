"use client";
import { useMemo, useState } from "react";
import { safeEval } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { Field, ResultRow } from "@/components/result";

const RENKLER = ["#2f9e6f", "#e08a5f", "#4a90e2", "#c05dcd"];

export function GrafikCiziciHesaplayici() {
  const [fonksiyonlar, setFonksiyonlar] = useState<string[]>(["x^2", "sin(x)"]);
  const [xMin, setXMin] = useState("-5");
  const [xMax, setXMax] = useState("5");
  const [yMin, setYMin] = useState("-5");
  const [yMax, setYMax] = useState("10");

  const xmn = parseFloat(xMin.replace(",", ".")) || -5;
  const xmx = parseFloat(xMax.replace(",", ".")) || 5;
  const ymn = parseFloat(yMin.replace(",", ".")) || -5;
  const ymx = parseFloat(yMax.replace(",", ".")) || 5;

  const W = 600, H = 400;
  const px = (x: number) => ((x - xmn) / (xmx - xmn)) * W;
  const py = (y: number) => H - ((y - ymn) / (ymx - ymn)) * H;

  // Her fonksiyon için noktalar
  const yollar = useMemo(() => {
    return fonksiyonlar.map((f) => {
      if (!f.trim()) return { yol: "", hata: false };
      const N = 400;
      const noktalar: [number, number][] = [];
      for (let i = 0; i <= N; i++) {
        const x = xmn + ((xmx - xmn) * i) / N;
        try {
          const y = safeEval(f, { x });
          if (Number.isFinite(y)) noktalar.push([x, y]);
        } catch {
          return { yol: "", hata: true };
        }
      }
      if (noktalar.length === 0) return { yol: "", hata: false };
      // Y aralığından taşan segmentleri kes
      let d = "";
      let baslat = true;
      for (const [x, y] of noktalar) {
        if (y < ymn - 10 || y > ymx + 10) {
          baslat = true;
          continue;
        }
        d += `${baslat ? "M" : "L"} ${px(x).toFixed(2)} ${py(y).toFixed(2)} `;
        baslat = false;
      }
      return { yol: d, hata: false };
    });
  }, [fonksiyonlar, xmn, xmx, ymn, ymx]);

  function guncelle(i: number, v: string) {
    const k = [...fonksiyonlar];
    k[i] = v;
    setFonksiyonlar(k);
  }
  function ekle() { if (fonksiyonlar.length < 4) setFonksiyonlar([...fonksiyonlar, ""]); }
  function sil(i: number) { setFonksiyonlar(fonksiyonlar.filter((_, x) => x !== i)); }

  // Izgara çizgileri
  const xIzgara: number[] = [];
  const yIzgara: number[] = [];
  const xAdim = (xmx - xmn) / 10;
  const yAdim = (ymx - ymn) / 8;
  for (let x = Math.ceil(xmn); x <= xmx; x += xAdim > 1 ? Math.ceil(xAdim) : 1) xIzgara.push(x);
  for (let y = Math.ceil(ymn); y <= ymx; y += yAdim > 1 ? Math.ceil(yAdim) : 1) yIzgara.push(y);

  const ornekler = ["x^2", "sin(x)", "cos(x)", "tan(x)", "log(x)", "sqrt(x)", "x^3 - 3*x", "exp(-x^2/2)", "1/x", "abs(x)"];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-text">Fonksiyonlar (en fazla 4)</div>
          <button type="button" onClick={ekle} disabled={fonksiyonlar.length >= 4} className="rounded-lg border border-border bg-surface px-2.5 py-1 text-sm text-text hover:bg-surface-2 disabled:opacity-50">+ Fonksiyon ekle</button>
        </div>
        {fonksiyonlar.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="inline-block h-3 w-6 rounded" style={{ background: RENKLER[i] }} />
            <span className="text-sm font-mono text-text-muted">f{i + 1}(x) =</span>
            <input className="field flex-1 font-mono !py-1.5" value={f} onChange={(e) => guncelle(i, e.target.value)} spellCheck={false} />
            {fonksiyonlar.length > 1 && (
              <button type="button" onClick={() => sil(i)} className="p-1.5 text-text-muted hover:text-accent">×</button>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {ornekler.map((o) => (
          <button key={o} type="button" onClick={() => guncelle(0, o)} className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-muted hover:text-primary hover:border-primary/40">
            {o}
          </button>
        ))}
      </div>

      {/* Grafik */}
      <div className="overflow-x-auto rounded-xl border border-border bg-surface p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxWidth: "700px" }}>
          {/* Izgara arka */}
          {xIzgara.map((x) => (
            <line key={`vx-${x}`} x1={px(x)} x2={px(x)} y1={0} y2={H} stroke="#e5e5e5" strokeWidth="1" opacity="0.5" />
          ))}
          {yIzgara.map((y) => (
            <line key={`vy-${y}`} x1={0} x2={W} y1={py(y)} y2={py(y)} stroke="#e5e5e5" strokeWidth="1" opacity="0.5" />
          ))}
          {/* Eksenler */}
          {0 >= xmn && 0 <= xmx && (
            <line x1={px(0)} x2={px(0)} y1={0} y2={H} stroke="#666" strokeWidth="1.5" />
          )}
          {0 >= ymn && 0 <= ymx && (
            <line x1={0} x2={W} y1={py(0)} y2={py(0)} stroke="#666" strokeWidth="1.5" />
          )}
          {/* Etiketler */}
          {xIzgara.map((x) => (
            0 >= ymn && 0 <= ymx && Math.abs(x) > 0.01 && (
              <text key={`tx-${x}`} x={px(x)} y={py(0) + 14} fontSize="10" fill="#666" textAnchor="middle">{x}</text>
            )
          ))}
          {yIzgara.map((y) => (
            0 >= xmn && 0 <= xmx && Math.abs(y) > 0.01 && (
              <text key={`ty-${y}`} x={px(0) - 6} y={py(y) + 3} fontSize="10" fill="#666" textAnchor="end">{y}</text>
            )
          ))}
          {/* Fonksiyon eğrileri */}
          {yollar.map((y, i) => (
            y.yol ? <path key={i} d={y.yol} stroke={RENKLER[i]} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null
          ))}
        </svg>
      </div>

      {/* Aralık kontrolleri */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Field label="x min"><input className="field tabular-nums" inputMode="decimal" value={xMin} onChange={(e) => setXMin(e.target.value)} /></Field>
        <Field label="x max"><input className="field tabular-nums" inputMode="decimal" value={xMax} onChange={(e) => setXMax(e.target.value)} /></Field>
        <Field label="y min"><input className="field tabular-nums" inputMode="decimal" value={yMin} onChange={(e) => setYMin(e.target.value)} /></Field>
        <Field label="y max"><input className="field tabular-nums" inputMode="decimal" value={yMax} onChange={(e) => setYMax(e.target.value)} /></Field>
      </div>

      <div className="card p-4">
        {fonksiyonlar.map((f, i) => {
          if (!f.trim() || yollar[i].hata) return null;
          try {
            const y0 = safeEval(f, { x: 0 });
            const y1 = safeEval(f, { x: 1 });
            return (
              <ResultRow key={i} label={<span className="flex items-center gap-2"><span className="h-3 w-3 rounded" style={{ background: RENKLER[i] }} />f{i + 1}(x) = <code className="font-mono">{f}</code></span>} value={`f(0)=${formatNumber(y0, 3)}, f(1)=${formatNumber(y1, 3)}`} />
            );
          } catch { return null; }
        })}
      </div>
    </div>
  );
}
