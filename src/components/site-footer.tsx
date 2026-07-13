import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { categories } from "@/lib/categories";

export function SiteFooter() {
  const cols = 4;
  const perCol = Math.ceil(categories.length / cols);
  const grouped = Array.from({ length: cols }, (_, i) =>
    categories.slice(i * perCol, (i + 1) * perCol),
  );

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2.4fr]">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1.5">
              <span className="text-[17px] font-semibold tracking-tight text-text">Hesaplama</span>
              <span className="text-[17px] font-semibold tracking-tight text-primary">Merkezi</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Maaş, vergi, kredi, döviz ve günlük hesaplar için modern ve güvenilir Türkçe
              hesaplama merkezi. Reklamsız hisli, kayıtsız kullanım.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-text-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              TCMB verisiyle güncel
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {grouped.map((group, i) => (
              <div key={i}>
                {i === 0 && (
                  <h3 className="mb-3 text-sm font-semibold text-text">
                    Kategoriler
                  </h3>
                )}
                {i !== 0 && <h3 className="mb-3 text-sm font-semibold text-text opacity-0">·</h3>}
                <ul className="space-y-2.5 text-sm">
                  {group.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/kategori/${c.slug}`}
                        className="text-text-muted hover:text-primary transition-colors"
                      >
                        {c.title.replace(/ Hesaplamaları?/, "").replace(/ Araçları/, "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} Hesaplama Merkezi. Sonuçlar bilgilendirme amaçlıdır.
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link>
            <Link href="/iletisim" className="hover:text-primary transition-colors">İletişim</Link>
            <Link href="/gizlilik" className="hover:text-primary transition-colors">Gizlilik</Link>
            <Link href="/kullanim-kosullari" className="hover:text-primary transition-colors">Koşullar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
