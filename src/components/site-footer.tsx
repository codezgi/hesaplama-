import Link from "next/link";
import { categories } from "@/lib/categories";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="text-[15px] font-bold text-text">Hesaplama Merkezi</span>
            <p className="mt-2 max-w-xs text-sm text-text-muted">
              Maaş, vergi, kredi ve günlük hesaplar için pratik araçlar. Döviz ve altın verileri
              güncel tutulur.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">Kategoriler</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/kategori/${c.slug}`} className="text-text-muted hover:text-primary">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">Daha Fazla</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(5, 10).map((c) => (
                <li key={c.slug}>
                  <Link href={`/kategori/${c.slug}`} className="text-text-muted hover:text-primary">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">Kurumsal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="text-text-muted hover:text-primary">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="text-text-muted hover:text-primary">İletişim</Link></li>
              <li><Link href="/gizlilik" className="text-text-muted hover:text-primary">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-kosullari" className="text-text-muted hover:text-primary">Kullanım Koşulları</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-text-muted">
          © {new Date().getFullYear()} Hesaplama Merkezi. Sonuçlar bilgilendirme amaçlıdır.
        </div>
      </div>
    </footer>
  );
}
