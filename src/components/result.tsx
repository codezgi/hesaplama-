import type { ReactNode } from "react";

/** Öne çıkan büyük sonuç kutusu */
export function ResultHero({
  label,
  value,
  sub,
  tone = "primary",
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  tone?: "primary" | "accent";
}) {
  const bg =
    tone === "accent"
      ? "bg-accent-soft border-accent/20"
      : "bg-primary-soft border-primary/20";
  const text = tone === "accent" ? "text-accent" : "text-primary";
  return (
    <div className={`rounded-2xl border ${bg} p-5 text-center`}>
      <div className="text-sm font-medium text-text-muted">{label}</div>
      <div className={`mt-1 text-3xl font-bold tabular-nums sm:text-4xl ${text}`}>{value}</div>
      {sub && <div className="mt-1 text-sm text-text-muted">{sub}</div>}
    </div>
  );
}

/** Sonuç satırı (etiket + değer) */
export function ResultRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-2.5 last:border-0">
      <span className="text-sm text-text-muted">{label}</span>
      <span className="font-semibold tabular-nums text-text">{value}</span>
    </div>
  );
}

/** Form alanı sarmalayıcı */
export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-text">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-text-muted">{hint}</span>}
    </label>
  );
}

/** Segmentli seçim (ör. KDV dahil/hariç, oran seçimi) */
export function Segmented<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-border bg-surface-2 p-1">
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          onClick={() => onChange(o.value)}
          className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
            value === o.value
              ? "bg-surface text-primary shadow-sm"
              : "text-text-muted hover:text-text"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
