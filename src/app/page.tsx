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

export default function Home() {
  const populer = populerSlugs.map(getCalculator).filter(Boolean) as NonNullable<
    ReturnType<typeof getCalculator>
  >[];
  const aktifSayi = activeCalculators().length;

  return (
    <>
      {/* HERO — asimetrik: solda ne/kime, sağda canlı veri */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:py-20">
          <div>
            <h1 className="text-3xl font-bold text-text sm:text-[2.6rem] sm:leading-[1.15]">
              Sık kullanılan hesaplar, tek yerde
            </h1>
            <p className="mt-4 max-w-xl text-lg text-text-muted">
              Maaş, KDV, kredi taksiti, döviz ve not ortalaması gibi hesapları birkaç saniyede
              yapın. Döviz ve altın verileri TCMB ve piyasadan güncel gelir.
            </p>

            <div className="mt-6 max-w-lg">
              <SearchBox big />
            </div>

            <p className="mt-3 text-sm text-text-muted">
              Sık aranan:{" "}
              {populer.slice(0, 4).map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && <span className="mx-1.5 text-border">·</span>}
                  <Link href={`/hesaplama/${c.slug}`} className="text-text hover:text-primary hover:underline">
                    {c.title.replace(/ \(.*\)/, "")}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          <div className="lg:pl-4">
            <RateTicker />
          </div>
        </div>
      </section>

      {/* ÇOK KULLANILANLAR — vurgulu bant (farklı zemin, ritim için) */}
      <section className="border-b border-border bg-surface-2/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-lg font-semibold text-text">Çok kullanılanlar</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {populer.map((c) => (
              <CalculatorCard key={c.slug} calc={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Reklam — bölümler arası */}
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <AdSlot format="leaderboard" />
      </div>

      {/* KATEGORİLER — sade zemin, kompakt liste */}
      <section id="kategoriler" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-lg font-semibold text-text">Konuya göre bul</h2>
          <p className="mt-1 text-text-muted">
            Finanstan eğitime, sağlıktan araç masraflarına kadar günlük hesaplar kategoriler altında.
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* GÜVEN — sahte istatistik yerine dürüst kaynak bilgisi */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-xl font-semibold text-text">Veriler ve doğruluk</h2>
          </div>
          <div className="space-y-4 text-text-muted">
            <p>
              Döviz kurlarını TCMB&apos;nin günlük verisinden, altın fiyatlarını piyasadan çekiyoruz;
              sayfalar gün içinde otomatik güncellenir. Maaş ve vergi hesapları {" "}
              <span className="text-text">2026 yılının</span> resmî oran ve istisnalarına göre yapılır.
            </p>
            <p>
              Öğrenciler, çalışanlar, esnaf ve muhasebeciler için pratik olsun diye tasarlandı.
              Sonuçlar bilgilendirme amaçlıdır; resmî işlemlerde ilgili kurumun hesabını esas alın.
            </p>
            <p className="text-sm">
              Şu an <span className="text-text">{aktifSayi}</span> hesap aktif, listeye düzenli olarak
              yenileri ekleniyor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
