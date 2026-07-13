import Link from "next/link";
import { SearchBox } from "@/components/search-box";
import { RateTicker } from "@/components/rate-ticker";
import { CategoryCard, CalculatorCard } from "@/components/cards";
import { AdSlot } from "@/components/ad-slot";
import { categories } from "@/lib/categories";
import { getCalculator, activeCalculators } from "@/lib/calculators";

const populerSlugs = [
  "brut-net-maas",
  "kdv-hesaplama",
  "kredi-hesaplama",
  "doviz-cevirici",
  "gpa-hesaplama",
  "altin-hesaplama",
];

const oneCikanSlugs = [
  "kidem-tazminati",
  "bmi-hesaplama",
  "yakit-maliyeti",
  "yas-hesaplama",
  "gelir-vergisi",
  "formul-ifade",
];

export default function Home() {
  const populer = populerSlugs.map(getCalculator).filter(Boolean) as NonNullable<
    ReturnType<typeof getCalculator>
  >[];
  const oneCikan = oneCikanSlugs.map(getCalculator).filter(Boolean) as NonNullable<
    ReturnType<typeof getCalculator>
  >[];
  const aktifSayi = activeCalculators().length;

  return (
    <>
      {/* HERO */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:py-20">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-[2.6rem] sm:leading-[1.15]">
              Hesaplama Merkezi
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">
              Maaş, KDV, kredi taksiti, döviz, altın, not ortalaması ve daha fazlası.
              Sonuçlar 2026 yılının resmî oranlarına ve TCMB günlük verisine göre hesaplanır.
            </p>

            <div className="mt-6 max-w-xl">
              <SearchBox big />
            </div>

            <p className="mt-4 text-sm text-text-muted">
              <span className="text-text-soft">Sık aranan:</span>{" "}
              {populer.slice(0, 5).map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && <span className="mx-1.5 text-border">·</span>}
                  <Link
                    href={`/hesaplama/${c.slug}`}
                    className="text-text hover:text-primary transition-colors"
                  >
                    {c.title.replace(/ \(.*\)/, "")}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          <div>
            <RateTicker />
          </div>
        </div>
      </section>

      {/* ÇOK KULLANILANLAR */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight text-text">
              Çok kullanılan hesaplamalar
            </h2>
            <Link
              href="/#kategoriler"
              className="hidden text-sm text-text-muted hover:text-primary sm:inline"
            >
              Tümü →
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {populer.map((c) => (
              <CalculatorCard key={c.slug} calc={c} />
            ))}
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section id="kategoriler" className="border-t border-border bg-surface-2/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-text">Kategoriler</h2>
            <p className="mt-2 text-text-muted">
              Toplam {aktifSayi} hesaplayıcı, {categories.length} kategori altında.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ÖNE ÇIKAN */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">Öne çıkanlar</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {oneCikan.map((c) => (
              <CalculatorCard key={c.slug} calc={c} />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
          <AdSlot format="leaderboard" />
        </div>
      </section>

      {/* GÜVEN */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-text">Veriler ve doğruluk</h2>
          </div>
          <div className="space-y-4 text-text-muted">
            <p>
              Döviz kurları TCMB&apos;nin günlük verisinden, altın fiyatları piyasadan alınır.
              Sayfalar gün içinde otomatik güncellenir.
            </p>
            <p>
              Maaş ve vergi hesapları <span className="text-text">2026 yılı</span> resmî oran
              ve istisnalarına göre yapılır. Sonuçlar bilgilendirme amaçlıdır; resmî işlemlerde
              ilgili kurumun hesabını esas alın.
            </p>
            <p>
              Öğrenciler, çalışanlar, esnaf ve muhasebeciler için pratik olsun diye tasarlandı.
              Kayıt gerektirmez, ücretsizdir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
