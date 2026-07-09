import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories, getCategory } from "@/lib/categories";
import { calculatorsByCategory } from "@/lib/calculators";
import { CalculatorCard } from "@/components/cards";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function KategoriPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();

  const calcs = calculatorsByCategory(slug);
  const Icon = cat.icon;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <nav className="mb-6 flex items-center gap-1 text-sm text-text-muted">
        <Link href="/" className="hover:text-primary">Anasayfa</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-text">{cat.title}</span>
      </nav>

      <div className="flex items-center gap-4">
        <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${cat.tint}`}>
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-text sm:text-3xl">{cat.title}</h1>
          <p className="mt-1 text-text-muted">{cat.description}</p>
        </div>
      </div>

      <AdSlot format="leaderboard" className="mt-8" />

      {calcs.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calcs.map((c) => (
            <CalculatorCard key={c.slug} calc={c} />
          ))}
        </div>
      ) : (
        <div className="card mt-8 p-10 text-center text-text-muted">
          Bu kategoriye hesaplayıcılar yakında eklenecek.
        </div>
      )}

      <AdSlot format="leaderboard" className="mt-10" />
    </div>
  );
}
