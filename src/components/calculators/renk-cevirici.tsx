"use client";

import { useMemo, useState } from "react";
import { ResultRow, Field } from "@/components/result";

function hexToRgb(hex: string): [number, number, number] | null {
  const t = hex.trim().replace(/^#/, "");
  const uzun = t.length === 3 ? t.split("").map((c) => c + c).join("") : t;
  if (!/^[0-9a-fA-F]{6}$/.test(uzun)) return null;
  return [parseInt(uzun.slice(0, 2), 16), parseInt(uzun.slice(2, 4), 16), parseInt(uzun.slice(4, 6), 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  const h = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}`.toUpperCase();
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h * 360, s * 100, l * 100];
}

export function RenkCevirici() {
  const [hex, setHex] = useState("#2f9e6f");

  const rgb = useMemo(() => hexToRgb(hex), [hex]);
  const hsl = rgb ? rgbToHsl(...rgb) : null;
  const gecerli = !!rgb;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
        <Field label="Renk Seçici">
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={gecerli ? rgbToHex(rgb![0], rgb![1], rgb![2]) : "#000000"}
              onChange={(e) => setHex(e.target.value.toUpperCase())}
              className="h-11 w-16 cursor-pointer rounded-lg border border-border bg-surface"
            />
            <input
              className="field font-mono"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="#RRGGBB"
              spellCheck={false}
            />
          </div>
        </Field>

        <div
          className="h-24 w-full rounded-xl border border-border"
          style={{ background: gecerli ? rgbToHex(rgb![0], rgb![1], rgb![2]) : "transparent" }}
        />
      </div>

      <div className="space-y-4">
        {gecerli ? (
          <div className="card p-4">
            <ResultRow label="HEX" value={<code className="font-mono">{rgbToHex(rgb![0], rgb![1], rgb![2])}</code>} />
            <ResultRow
              label="RGB"
              value={<code className="font-mono">rgb({rgb![0]}, {rgb![1]}, {rgb![2]})</code>}
            />
            <ResultRow
              label="HSL"
              value={
                <code className="font-mono">
                  hsl({Math.round(hsl![0])}, {Math.round(hsl![1])}%, {Math.round(hsl![2])}%)
                </code>
              }
            />
            <ResultRow label="R (0-255)" value={`${rgb![0]}`} />
            <ResultRow label="G (0-255)" value={`${rgb![1]}`} />
            <ResultRow label="B (0-255)" value={`${rgb![2]}`} />
          </div>
        ) : (
          <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">
            Geçersiz HEX (örn. #2f9e6f veya #FFF).
          </div>
        )}
      </div>
    </div>
  );
}
