import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Info, FunctionSquare, Clock } from "lucide-react";
import { calculators, getCalculator, calculatorsByCategory } from "@/lib/calculators";
import { getCategory } from "@/lib/categories";
import { calculatorComponents } from "@/components/calculators/registry";
import { CalculatorCard } from "@/components/cards";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) return {};
  return {
    title: calc.title,
    description: calc.description,
    keywords: calc.keywords,
    alternates: { canonical: `/hesaplama/${calc.slug}` },
  };
}

export default async function HesaplamaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) notFound();

  const cat = getCategory(calc.category);
  const Component = calculatorComponents[calc.slug];
  const related = calculatorsByCategory(calc.category).filter((c) => c.slug !== calc.slug).slice(0, 3);

  const SITE = "https://hesaplamamerkezi.com";
  const url = `${SITE}/hesaplama/${calc.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: calc.title,
        url,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
        description: calc.description,
        inLanguage: "tr-TR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
          ...(cat
            ? [{ "@type": "ListItem", position: 2, name: cat.title, item: `${SITE}/kategori/${cat.slug}` }]
            : []),
          { "@type": "ListItem", position: cat ? 3 : 2, name: calc.title, item: url },
        ],
      },
      ...(calc.howItWorks && calc.howItWorks.length > 0
        ? [
            {
              "@type": "HowTo",
              "@id": `${url}#howto`,
              name: `${calc.title} nasıl yapılır?`,
              description: calc.description,
              step: calc.howItWorks.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: `Adım ${i + 1}`,
                text: s,
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-text-muted">
        <Link href="/" className="hover:text-primary">Anasayfa</Link>
        <ChevronRight className="h-4 w-4" />
        {cat && (
          <>
            <Link href={`/kategori/${cat.slug}`} className="hover:text-primary">{cat.title}</Link>
            <ChevronRight className="h-4 w-4" />
          </>
        )}
        <span className="text-text">{calc.title}</span>
      </nav>

      <header className="mb-6">
        <h1 className="text-2xl font-bold text-text sm:text-3xl">{calc.title}</h1>
        <p className="mt-2 text-text-muted">{calc.description}</p>
      </header>

      {/* Reklam — üst leaderboard */}
      <AdSlot format="leaderboard" className="mb-6" />

      {/* Hesaplayıcı */}
      <section className="card p-6 sm:p-7">
        {Component ? (
          <Component />
        ) : (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-surface-2 text-text-muted">
              <Clock className="h-6 w-6" />
            </span>
            <p className="font-medium text-text">Bu hesaplayıcı çok yakında.</p>
            <p className="max-w-sm text-sm text-text-muted">
              Doğru ve güncel sonuçlar için gerekli parametreler hazırlanıyor.
            </p>
          </div>
        )}
      </section>

      {/* Not / uyarı */}
      {calc.note && (
        <div className="mt-4 flex gap-3 rounded-xl border border-border bg-surface-2 p-4 text-sm text-text-muted">
          <Info className="h-5 w-5 shrink-0 text-primary" />
          <p>{calc.note}</p>
        </div>
      )}

      {/* Reklam — içerik içi (hesaplama sonrası) */}
      <AdSlot format="in-article" className="mt-8" />

      {/* Nasıl hesaplanır */}
      {(calc.formula || calc.howItWorks) && (
        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-text">
            <FunctionSquare className="h-5 w-5 text-primary" /> Nasıl hesaplanır?
          </h2>
          {calc.formula && (
            <div className="mt-3 rounded-xl border border-border bg-surface p-4 font-mono text-sm text-primary">
              {calc.formula}
            </div>
          )}
          {calc.howItWorks && (
            <ul className="mt-3 space-y-2">
              {calc.howItWorks.map((line, i) => (
                <li key={i} className="flex gap-2.5 text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* İlgili hesaplayıcılar */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-text">İlgili Hesaplayıcılar</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((c) => (
              <CalculatorCard key={c.slug} calc={c} />
            ))}
          </div>
        </section>
      )}

      {/* Reklam — sayfa altı */}
      <AdSlot format="leaderboard" className="mt-10" />
    </div>
  );
}
