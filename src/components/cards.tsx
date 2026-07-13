import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category, Calculator } from "@/lib/types";
import { calculatorsByCategory } from "@/lib/calculators";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  const count = calculatorsByCategory(category.slug).filter((c) => c.status === "active").length;
  return (
    <Link
      href={`/kategori/${category.slug}`}
      className="group relative flex items-start gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-2 text-text-muted transition-colors group-hover:bg-primary-soft group-hover:text-primary">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-text tracking-tight group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="mt-1 text-sm leading-snug text-text-muted line-clamp-2">{category.description}</p>
        {count > 0 && (
          <span className="mt-2 inline-block text-xs text-text-soft">
            {count} hesaplama
          </span>
        )}
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-text-soft opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

export function CalculatorCard({ calc }: { calc: Calculator }) {
  const soon = calc.status === "soon";

  if (soon) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-surface/50 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium text-text-muted">{calc.title}</h3>
          <span className="text-xs text-text-soft">yakında</span>
        </div>
        <p className="mt-1 text-sm leading-snug text-text-muted line-clamp-2">{calc.description}</p>
      </div>
    );
  }

  return (
    <Link
      href={`/hesaplama/${calc.slug}`}
      className="group relative block rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text tracking-tight group-hover:text-primary transition-colors">
          {calc.title}
        </h3>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-text-soft opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="mt-1 text-sm leading-snug text-text-muted line-clamp-2">{calc.description}</p>
    </Link>
  );
}
