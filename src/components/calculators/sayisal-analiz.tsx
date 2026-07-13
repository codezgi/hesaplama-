"use client";
import { useMemo, useState } from "react";
import { safeEval, sayisalTurev, sayisalTurev2, simpsonIntegral, trapezIntegral, riemannToplam, newtonRaphson, tumKokler, taylorKatsayilari, taylorDeger, sayisalLimit } from "@/lib/bilimsel";
import { formatNumber } from "@/lib/calc";
import { Field, ResultHero, ResultRow, Segmented } from "@/components/result";

/* 1. Sayısal Türev Hesaplayıcı (belli noktada f'(x)) */
export function SayisalTurevHesaplayici() {
  const [ifade, setIfade] = useState("x^2 + 3*x - 5");
  const [x, setX] = useState("2");
  const f = (v: number) => { try { return safeEval(ifade, { x: v }); } catch { return NaN; } };
  const xVal = parseFloat(x.replace(",", ".")) || 0;
  const fx = f(xVal);
  const fp = sayisalTurev(f, xVal);
  const fpp = sayisalTurev2(f, xVal);
  return (
    <div className="space-y-6">
      <Field label="f(x) =" hint="Örn: x^2 + 3*x, sin(x), exp(x)"><input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} /></Field>
      <Field label="x noktası"><input className="field tabular-nums" inputMode="decimal" value={x} onChange={(e) => setX(e.target.value)} /></Field>
      <ResultHero label={`f'(${xVal}) — türev`} value={formatNumber(fp, 6)} sub={`f''(${xVal}) = ${formatNumber(fpp, 6)}`} tone="accent" />
      <div className="card p-4">
        <ResultRow label={`f(${xVal})`} value={formatNumber(fx, 6)} />
        <ResultRow label={`f'(${xVal}) — sayısal türev`} value={formatNumber(fp, 6)} />
        <ResultRow label={`f''(${xVal}) — 2. türev`} value={formatNumber(fpp, 6)} />
        <ResultRow label="Yorum" value={Math.abs(fp) < 0.01 ? "🎯 Kritik nokta (f' ≈ 0)" : fp > 0 ? "↗ Artıyor" : "↘ Azalıyor"} />
        <ResultRow label="Konkavlık" value={fpp > 0.01 ? "⌣ Aşağı bakan (konveks)" : fpp < -0.01 ? "⌢ Yukarı bakan (konkav)" : "Düzlem"} />
      </div>
      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Sayısal türev merkezi fark ile: f'(x) ≈ (f(x+h) − f(x−h)) / (2h). h = 10⁻⁶.
      </div>
    </div>
  );
}

/* 2. Belirli İntegral (Simpson) */
export function BelirliIntegralHesaplayici() {
  const [ifade, setIfade] = useState("x^2");
  const [a, setA] = useState("0");
  const [b, setB] = useState("3");
  const [yontem, setYontem] = useState<"simpson" | "trapez">("simpson");
  const f = (v: number) => { try { return safeEval(ifade, { x: v }); } catch { return NaN; } };
  const av = parseFloat(a.replace(",", ".")) || 0;
  const bv = parseFloat(b.replace(",", ".")) || 0;
  const simpson = simpsonIntegral(f, av, bv, 1000);
  const trapez = trapezIntegral(f, av, bv, 1000);
  const deger = yontem === "simpson" ? simpson : trapez;
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 text-center font-mono text-2xl text-primary">
        ∫<span className="text-xs align-sub">{a}</span><span className="text-xs align-super">{b}</span> ({ifade}) dx
      </div>
      <Field label="f(x) ="><input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} /></Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Alt sınır a"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>
        <Field label="Üst sınır b"><input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} /></Field>
      </div>
      <Segmented value={yontem} onChange={setYontem} options={[{ label: "Simpson 1/3", value: "simpson" }, { label: "Trapez", value: "trapez" }]} />
      <ResultHero label="∫f(x) dx sonucu" value={formatNumber(deger, 6)} sub={`n = 1000 alt aralık, ${yontem === "simpson" ? "Simpson 1/3" : "Trapez"} kuralı`} tone="accent" />
      <div className="card p-4">
        <ResultRow label="Simpson 1/3 sonucu" value={formatNumber(simpson, 6)} />
        <ResultRow label="Trapez sonucu" value={formatNumber(trapez, 6)} />
        <ResultRow label="Yöntemler arası fark" value={formatNumber(Math.abs(simpson - trapez), 8)} />
      </div>
    </div>
  );
}

/* 3. Riemann Toplamı Görsel (dikdörtgen yaklaşımı) */
export function RiemannGorselHesaplayici() {
  const [ifade, setIfade] = useState("x^2");
  const [a, setA] = useState("0");
  const [b, setB] = useState("3");
  const [n, setN] = useState<number>(10);
  const [tip, setTip] = useState<"sol" | "orta" | "sag">("orta");
  const f = (v: number) => { try { return safeEval(ifade, { x: v }); } catch { return NaN; } };
  const av = parseFloat(a.replace(",", ".")) || 0;
  const bv = parseFloat(b.replace(",", ".")) || 1;
  const r = riemannToplam(f, av, bv, n, tip);
  const kesin = simpsonIntegral(f, av, bv, 1000);

  const W = 500, H = 300;
  // Min-max
  const yDegs = r.dikdortgenler.map((d) => d.yukseklik);
  const yMin = Math.min(0, ...yDegs);
  const yMax = Math.max(0, ...yDegs) * 1.2;
  const px = (x: number) => ((x - av) / (bv - av)) * W;
  const py = (y: number) => H - ((y - yMin) / (yMax - yMin)) * H;

  return (
    <div className="space-y-6">
      <Field label="f(x) ="><input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} /></Field>
      <div className="grid grid-cols-3 gap-3">
        <Field label="a"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>
        <Field label="b"><input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} /></Field>
        <Field label="n (dikdörtgen)">
          <Segmented value={n} onChange={setN} options={[{ label: "5", value: 5 }, { label: "10", value: 10 }, { label: "25", value: 25 }, { label: "50", value: 50 }, { label: "100", value: 100 }]} />
        </Field>
      </div>
      <Field label="Yaklaşım Tipi">
        <Segmented value={tip} onChange={setTip} options={[{ label: "Sol", value: "sol" }, { label: "Orta", value: "orta" }, { label: "Sağ", value: "sag" }]} />
      </Field>

      <div className="overflow-x-auto rounded-xl border border-border bg-surface p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxWidth: "600px" }}>
          <line x1={0} x2={W} y1={py(0)} y2={py(0)} stroke="#333" strokeWidth="1.5" />
          {r.dikdortgenler.map((d, i) => {
            const yBot = py(0);
            const yTop = py(d.yukseklik);
            const height = Math.abs(yBot - yTop);
            const top = Math.min(yBot, yTop);
            return (
              <rect key={i} x={px(d.x)} y={top} width={px(d.x + d.genislik) - px(d.x)} height={height} fill="#2f9e6f" fillOpacity="0.35" stroke="#2f9e6f" strokeWidth="1" />
            );
          })}
          {/* Fonksiyon eğrisi */}
          {(() => {
            let d = "";
            let baslat = true;
            for (let i = 0; i <= 200; i++) {
              const x = av + ((bv - av) * i) / 200;
              const y = f(x);
              if (Number.isFinite(y)) {
                d += `${baslat ? "M" : "L"} ${px(x).toFixed(2)} ${py(y).toFixed(2)} `;
                baslat = false;
              }
            }
            return <path d={d} stroke="#333" strokeWidth="2.5" fill="none" />;
          })()}
        </svg>
      </div>

      <ResultHero label="Riemann Toplamı" value={formatNumber(r.toplam, 4)} sub={`Kesin: ${formatNumber(kesin, 4)} · Hata: ${formatNumber(Math.abs(r.toplam - kesin), 4)}`} tone="accent" />
      <div className="card p-4">
        <ResultRow label="Yaklaşık toplam" value={formatNumber(r.toplam, 6)} />
        <ResultRow label="Kesin değer (Simpson n=1000)" value={formatNumber(kesin, 6)} />
        <ResultRow label="Hata" value={formatNumber(Math.abs(r.toplam - kesin), 6)} />
        <ResultRow label="Kullanılan dikdörtgen" value={`${n} × ${tip}`} />
      </div>
    </div>
  );
}

/* 4. Kök Bulucu (Newton-Raphson + Bisection) */
export function KokBulucuHesaplayici() {
  const [ifade, setIfade] = useState("x^3 - 2*x - 5");
  const [x0, setX0] = useState("2");
  const [a, setA] = useState("-5");
  const [b, setB] = useState("5");
  const f = (v: number) => { try { return safeEval(ifade, { x: v }); } catch { return NaN; } };
  const nrKok = newtonRaphson(f, parseFloat(x0) || 0);
  const tumK = tumKokler(f, parseFloat(a) || -10, parseFloat(b) || 10, 0.05);
  return (
    <div className="space-y-6">
      <Field label="f(x) ="><input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} /></Field>
      <div className="grid grid-cols-3 gap-3">
        <Field label="Newton-Raphson x₀"><input className="field tabular-nums" inputMode="decimal" value={x0} onChange={(e) => setX0(e.target.value)} /></Field>
        <Field label="Aralık a"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>
        <Field label="Aralık b"><input className="field tabular-nums" inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} /></Field>
      </div>

      <ResultHero label="Newton-Raphson Sonucu" value={nrKok !== null ? formatNumber(nrKok, 8) : "Yakınsamadı"} sub={nrKok !== null ? `f(x) ≈ ${formatNumber(f(nrKok), 8)}` : "Farklı x₀ deneyin"} tone="accent" />

      <div className="card p-4">
        <div className="mb-2 text-sm font-semibold text-text">Aralıktaki Tüm Kökler ({tumK.length})</div>
        {tumK.length === 0 ? (
          <p className="text-sm text-text-muted">[{a}, {b}] aralığında kök yok.</p>
        ) : (
          tumK.map((k, i) => <ResultRow key={i} label={`Kök ${i + 1}`} value={formatNumber(k, 6)} />)
        )}
      </div>
    </div>
  );
}

/* 5. Taylor Serisi Açılımı */
export function TaylorSerisiHesaplayici() {
  const [ifade, setIfade] = useState("sin(x)");
  const [a, setA] = useState("0");
  const [derece, setDerece] = useState<number>(5);
  const [xTest, setXTest] = useState("0.5");
  const f = (v: number) => { try { return safeEval(ifade, { x: v }); } catch { return NaN; } };
  const av = parseFloat(a.replace(",", ".")) || 0;
  const xt = parseFloat(xTest.replace(",", ".")) || 0;
  const kats = useMemo(() => taylorKatsayilari(f, av, derece), [ifade, av, derece]);
  const taylorX = taylorDeger(kats, av, xt);
  const gercek = f(xt);

  return (
    <div className="space-y-6">
      <Field label="f(x) ="><input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} /></Field>
      <div className="grid grid-cols-3 gap-3">
        <Field label="Açılım noktası a"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>
        <Field label="Derece">
          <Segmented value={derece} onChange={setDerece} options={[{ label: "3", value: 3 }, { label: "5", value: 5 }, { label: "7", value: 7 }]} />
        </Field>
        <Field label="Test x"><input className="field tabular-nums" inputMode="decimal" value={xTest} onChange={(e) => setXTest(e.target.value)} /></Field>
      </div>

      <div className="card p-4">
        <div className="mb-2 text-sm font-semibold text-text">Taylor Katsayıları (a = {av})</div>
        {kats.map((k, i) => {
          let fak = 1; for (let j = 1; j <= i; j++) fak *= j;
          return <ResultRow key={i} label={`f${'⁽'}${i}${'⁾'}(a)/${i}! = c${i}`} value={formatNumber(k, 6)} />;
        })}
      </div>

      <ResultHero label={`Taylor(${xt}) yaklaşımı`} value={formatNumber(taylorX, 6)} sub={`Gerçek f(${xt}) = ${formatNumber(gercek, 6)} · Hata: ${formatNumber(Math.abs(taylorX - gercek), 6)}`} tone="accent" />
      <div className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
        Taylor Serisi: f(x) ≈ Σ f<sup>(k)</sup>(a) (x−a)<sup>k</sup> / k! . Yüksek dereceler ve a noktasından uzaklaştıkça sayısal türev hatası birikir.
      </div>
    </div>
  );
}

/* 6. Limit Hesaplayıcı */
export function LimitHesaplayici() {
  const [ifade, setIfade] = useState("sin(x)/x");
  const [a, setA] = useState("0");
  const f = (v: number) => { try { return safeEval(ifade, { x: v }); } catch { return NaN; } };
  const av = parseFloat(a.replace(",", ".")) || 0;
  const r = sayisalLimit(f, av);
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 text-center font-mono text-2xl text-primary">
        lim<sub className="text-sm">x→{a}</sub> ({ifade})
      </div>
      <Field label="f(x) ="><input className="field font-mono" value={ifade} onChange={(e) => setIfade(e.target.value)} spellCheck={false} /></Field>
      <Field label="x → a"><input className="field tabular-nums" inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} /></Field>

      <ResultHero label="Limit" value={r.iki !== null ? formatNumber(r.iki, 8) : "Yok / farklı"} sub={r.iki !== null ? "Sol = Sağ ✓" : `Sol: ${r.sol ?? "?"} · Sağ: ${r.sag ?? "?"}`} tone="accent" />
      <div className="card p-4">
        <ResultRow label="Sol limit (x → a⁻)" value={r.sol !== null ? formatNumber(r.sol, 6) : "—"} />
        <ResultRow label="Sağ limit (x → a⁺)" value={r.sag !== null ? formatNumber(r.sag, 6) : "—"} />
        <ResultRow label="İki taraflı limit" value={r.iki !== null ? formatNumber(r.iki, 6) : "Farklı (limit yok)"} />
      </div>

      <div className="flex flex-wrap gap-2">
        {[["sin(x)/x", "0"], ["(1+1/x)^x", "1000000"], ["(x^2-1)/(x-1)", "1"], ["1/x", "0"]].map(([f, a]) => (
          <button key={f} type="button" onClick={() => { setIfade(f); setA(a); }} className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-muted hover:text-primary hover:border-primary/40">
            lim {f} → {a}
          </button>
        ))}
      </div>
    </div>
  );
}
