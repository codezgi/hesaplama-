"use client";
import { useMemo, useState } from "react";
import { safeEval, sayisalTurev, sayisalTurev2, simpsonIntegral, tumKokler, kritikNoktalar } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { Field, ResultHero, ResultRow, Segmented } from "@/components/result";

/**
 * Gelişmiş Türev + İntegral Grafik Çizici
 * - f(x), f'(x), f''(x) aynı ekranda
 * - Belirli integral gölgelendirmesi (yeşil pozitif / kırmızı negatif)
 * - Kritik noktalar (yerel min/max) yıldızla gösterilir
 * - Sıfırlar (kökler) mavi noktalarla gösterilir
 */
export function TurevIntegralGrafikHesaplayici() {
  const [ifade, setIfade] = useState("x^3 - 3*x");
  const [xMin, setXMin] = useState("-3");
  const [xMax, setXMax] = useState("3");
  const [yMin, setYMin] = useState("-6");
  const [yMax, setYMax] = useState("6");
  const [gostFprime, setGostFprime] = useState(true);
  const [gostFpp, setGostFpp] = useState(false);
  const [integrAlt, setIntegrAlt] = useState("-2");
  const [integrUst, setIntegrUst] = useState("2");
  const [integrGoster, setIntegrGoster] = useState(true);

  const xmn = parseFloat(xMin.replace(",", ".")) || -5;
  const xmx = parseFloat(xMax.replace(",", ".")) || 5;
  const ymn = parseFloat(yMin.replace(",", ".")) || -5;
  const ymx = parseFloat(yMax.replace(",", ".")) || 5;
  const iA = parseFloat(integrAlt.replace(",", ".")) || 0;
  const iB = parseFloat(integrUst.replace(",", ".")) || 0;

  const f = (x: number) => {
    try { return safeEval(ifade, { x }); } catch { return NaN; }
  };
  const fp = (x: number) => sayisalTurev(f, x);
  const fpp = (x: number) => sayisalTurev2(f, x);

  const W = 700, H = 450;
  const px = (x: number) => ((x - xmn) / (xmx - xmn)) * W;
  const py = (y: number) => H - ((y - ymn) / (ymx - ymn)) * H;

  const yol = useMemo(() => {
    return (fn: (x: number) => number) => {
      const N = 500;
      let d = "";
      let baslat = true;
      for (let i = 0; i <= N; i++) {
        const x = xmn + ((xmx - xmn) * i) / N;
        const y = fn(x);
        if (!Number.isFinite(y) || y < ymn - 100 || y > ymx + 100) {
          baslat = true;
          continue;
        }
        d += `${baslat ? "M" : "L"} ${px(x).toFixed(2)} ${py(y).toFixed(2)} `;
        baslat = false;
      }
      return d;
    };
  }, [ifade, xmn, xmx, ymn, ymx]);

  // İntegral gölgesi (dikdörtgen yığını)
  const integrPolygon = useMemo(() => {
    if (!integrGoster) return { yol: "", deger: 0 };
    const deger = simpsonIntegral(f, iA, iB, 200);
    const N = 200;
    let d = `M ${px(iA).toFixed(2)} ${py(0).toFixed(2)} `;
    for (let i = 0; i <= N; i++) {
      const x = iA + ((iB - iA) * i) / N;
      const y = f(x);
      if (Number.isFinite(y)) d += `L ${px(x).toFixed(2)} ${py(Math.max(ymn, Math.min(ymx, y))).toFixed(2)} `;
    }
    d += `L ${px(iB).toFixed(2)} ${py(0).toFixed(2)} Z`;
    return { yol: d, deger };
  }, [ifade, iA, iB, integrGoster, xmn, xmx, ymn, ymx]);

  const kokler = useMemo(() => tumKokler(f, xmn, xmx, (xmx - xmn) / 50), [ifade, xmn, xmx]);
  const kritikNokt = useMemo(() => kritikNoktalar(f, xmn, xmx, (xmx - xmn) / 50), [ifade, xmn, xmx]);

  return (
    <div className="space-y-6">
      <Field label="f(x) =" hint="Örn: x^3 - 3*x, sin(x), 1/x, exp(-x^2)">
        <input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} />
      </Field>

      <div className="flex flex-wrap gap-2">
        {["x^3 - 3*x", "sin(x)", "x^2 - 4", "exp(-x^2/2)", "cos(x)*x", "1/x", "x^4 - 2*x^2"].map((o) => (
          <button key={o} type="button" onClick={() => setIfade(o)} className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-muted hover:text-primary hover:border-primary/40">{o}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Field label="x min"><input className="field tabular-nums" inputMode="decimal" value={xMin} onChange={(e) => setXMin(e.target.value)} /></Field>
        <Field label="x max"><input className="field tabular-nums" inputMode="decimal" value={xMax} onChange={(e) => setXMax(e.target.value)} /></Field>
        <Field label="y min"><input className="field tabular-nums" inputMode="decimal" value={yMin} onChange={(e) => setYMin(e.target.value)} /></Field>
        <Field label="y max"><input className="field tabular-nums" inputMode="decimal" value={yMax} onChange={(e) => setYMax(e.target.value)} /></Field>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">
        <label className="flex items-center gap-2 text-text">
          <input type="checkbox" checked={gostFprime} onChange={(e) => setGostFprime(e.target.checked)} />
          <span className="inline-block h-3 w-4 rounded bg-accent" /> f&apos;(x) türev
        </label>
        <label className="flex items-center gap-2 text-text">
          <input type="checkbox" checked={gostFpp} onChange={(e) => setGostFpp(e.target.checked)} />
          <span className="inline-block h-3 w-4 rounded bg-purple-500" /> f&apos;&apos;(x) 2. türev
        </label>
        <label className="flex items-center gap-2 text-text">
          <input type="checkbox" checked={integrGoster} onChange={(e) => setIntegrGoster(e.target.checked)} />
          <span className="inline-block h-3 w-4 rounded bg-primary/30" /> ∫ integral gölgesi
        </label>
      </div>

      {integrGoster && (
        <div className="grid grid-cols-2 gap-3">
          <Field label="İntegral alt (a)"><input className="field tabular-nums" inputMode="decimal" value={integrAlt} onChange={(e) => setIntegrAlt(e.target.value)} /></Field>
          <Field label="İntegral üst (b)"><input className="field tabular-nums" inputMode="decimal" value={integrUst} onChange={(e) => setIntegrUst(e.target.value)} /></Field>
        </div>
      )}

      {/* SVG Grafik */}
      <div className="overflow-x-auto rounded-xl border border-border bg-surface p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxWidth: "800px" }}>
          {/* Izgara */}
          {Array.from({ length: 11 }).map((_, i) => {
            const x = xmn + ((xmx - xmn) * i) / 10;
            return <line key={`gx-${i}`} x1={px(x)} x2={px(x)} y1={0} y2={H} stroke="#e5e5e5" strokeWidth="1" opacity="0.4" />;
          })}
          {Array.from({ length: 9 }).map((_, i) => {
            const y = ymn + ((ymx - ymn) * i) / 8;
            return <line key={`gy-${i}`} x1={0} x2={W} y1={py(y)} y2={py(y)} stroke="#e5e5e5" strokeWidth="1" opacity="0.4" />;
          })}
          {/* Eksenler */}
          {0 >= xmn && 0 <= xmx && <line x1={px(0)} x2={px(0)} y1={0} y2={H} stroke="#333" strokeWidth="1.5" />}
          {0 >= ymn && 0 <= ymx && <line x1={0} x2={W} y1={py(0)} y2={py(0)} stroke="#333" strokeWidth="1.5" />}

          {/* İntegral gölgesi */}
          {integrGoster && integrPolygon.yol && (
            <path d={integrPolygon.yol} fill={integrPolygon.deger >= 0 ? "#2f9e6f" : "#e08a5f"} opacity="0.28" />
          )}

          {/* İkinci türev */}
          {gostFpp && <path d={yol(fpp)} stroke="#9333ea" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3,3" />}
          {/* Türev */}
          {gostFprime && <path d={yol(fp)} stroke="#e08a5f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6,3" />}
          {/* Ana fonksiyon */}
          <path d={yol(f)} stroke="#2f9e6f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

          {/* Sıfırlar */}
          {kokler.map((x, i) => (
            <circle key={`z-${i}`} cx={px(x)} cy={py(0)} r="5" fill="#4a90e2" stroke="#fff" strokeWidth="2" />
          ))}
          {/* Kritik noktalar */}
          {kritikNokt.map((k, i) => (
            <g key={`k-${i}`}>
              <circle cx={px(k.x)} cy={py(k.y)} r="6" fill={k.tip === "max" ? "#e74c3c" : k.tip === "min" ? "#5cb85c" : "#f39c12"} stroke="#fff" strokeWidth="2" />
              <text x={px(k.x)} y={py(k.y) - 12} fontSize="10" fill="#333" textAnchor="middle" fontWeight="bold">
                {k.tip === "max" ? "▼max" : k.tip === "min" ? "▲min" : "eyer"}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Sonuçlar */}
      <div className="grid gap-4 sm:grid-cols-2">
        {integrGoster && (
          <ResultHero
            label={`∫ [${iA}, ${iB}] f(x) dx`}
            value={formatNumber(integrPolygon.deger, 6)}
            sub={`${integrPolygon.deger >= 0 ? "Pozitif alan" : "Net negatif alan"} (Simpson 1/3)`}
            tone="accent"
          />
        )}
        <div className="card p-4">
          <div className="mb-2 text-sm font-semibold text-text">Kritik Noktalar</div>
          {kritikNokt.length === 0 ? (
            <p className="text-sm text-text-muted">Yerel min/max bulunamadı.</p>
          ) : (
            kritikNokt.map((k, i) => (
              <ResultRow key={i} label={`x = ${formatNumber(k.x, 4)} (${k.tip})`} value={`f(x) = ${formatNumber(k.y, 4)}`} />
            ))
          )}
          <div className="mt-3 mb-2 text-sm font-semibold text-text">Sıfırlar (Kökler)</div>
          {kokler.length === 0 ? (
            <p className="text-sm text-text-muted">Bu aralıkta kök yok.</p>
          ) : (
            <p className="tabular-nums">{kokler.map((k) => formatNumber(k, 4)).join(", ")}</p>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Sayısal analiz: türev merkezi fark ile (h=1e-6), integral Simpson 1/3 kuralıyla (n=200 alt aralık), kökler bisection ile bulunur. Yeşil = f(x), turuncu kesikli = f&apos;(x), mor kesikli = f&apos;&apos;(x), yeşil alan = ∫f(x)dx &gt; 0, kırmızı alan = ∫f(x)dx &lt; 0.
      </div>
    </div>
  );
}
