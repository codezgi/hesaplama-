import Link from "next/link";
import type { Category, Calculator } from "@/lib/types";
import { calculatorsByCategory } from "@/lib/calculators";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  const count = calculatorsByCategory(category.slug).filter((c) => c.status === "active").length;
  return (
    <Link
      href={`/kategori/${category.slug}`}
      className="group flex items-start gap-3.5 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/40 hover:bg-surface-2"
    >
      <span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md ${category.tint}`}>
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <div className="min-w-0">
        <h3 className="font-medium text-text">{category.title}</h3>
        <p className="mt-0.5 text-sm leading-snug text-text-muted">{category.description}</p>
        {count > 0 && (
          <span className="mt-1.5 inline-block text-xs text-text-muted">{count} hesaplama</span>
        )}
      </div>
    </Link>
  );
}

export function CalculatorCard({ calc }: { calc: Calculator }) {
  const soon = calc.status === "soon";

  if (soon) {
    return (
      <div className="rounded-lg border border-dashed border-border p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium text-text-muted">{calc.title}</h3>
          <span className="text-[11px] text-text-muted">yakında</span>
        </div>
        <p className="mt-1 text-sm leading-snug text-text-muted">{calc.description}</p>
      </div>
    );
  }

  return (
    <Link
      href={`/hesaplama/${calc.slug}`}
      className="group block rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/40 hover:bg-surface-2"
    >
      <h3 className="font-medium text-text group-hover:text-primary">{calc.title}</h3>
      <p className="mt-1 text-sm leading-snug text-text-muted">{calc.description}</p>
    </Link>
  );
}
