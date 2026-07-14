import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories, getCategory } from "@/lib/categories";
import { calculatorsByCategory } from "@/lib/calculators";
import { categoryIntros } from "@/lib/category-seo";
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
  const aktif = calculatorsByCategory(slug).filter((c) => c.status === "active").length;
  return {
    title: `${cat.title} — ${aktif} Ücretsiz Online Araç`,
    description: cat.description,
    alternates: { canonical: `/kategori/${slug}` },
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
  const intro = categoryIntros[slug];

  const SITE = "https://hesaplamamerkezi.com";
  const url = `${SITE}/kategori/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: cat.title,
        description: cat.description,
        url,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${SITE}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: calcs
          .filter((c) => c.status === "active")
          .map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.title,
            url: `${SITE}/hesaplama/${c.slug}`,
          })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
          { "@type": "ListItem", position: 2, name: cat.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-6 flex items-center gap-1 text-sm text-text-muted">
        <Link href="/" className="hover:text-primary">Anasayfa</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/#kategoriler" className="hover:text-primary">Kategoriler</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-text">{cat.title}</span>
      </nav>

      <div className="flex items-start gap-5">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{cat.title}</h1>
          <p className="mt-2 max-w-2xl text-text-muted">{cat.description}</p>
          <p className="mt-2 text-sm text-text-soft">
            {calcs.filter((c) => c.status === "active").length} aktif hesaplayıcı
          </p>
        </div>
      </div>

      {intro && (
        <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">{intro}</p>
      )}

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
