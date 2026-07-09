import Link from "next/link";
import { Search, Home, Compass } from "lucide-react";
import { activeCalculators } from "@/lib/calculators";

export default function NotFound() {
  const populer = activeCalculators().slice(0, 6);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary-soft text-primary">
        <Search className="h-8 w-8" />
      </div>
      <h1 className="mt-6 text-4xl font-bold text-text sm:text-5xl">404</h1>
      <p className="mt-3 text-lg text-text-muted">
        Bu sayfa bulunamadı. Adresi yanlış yazmış ya da içerik kaldırılmış olabilir.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 px-5 py-2.5"
        >
          <Home className="h-4 w-4" /> Anasayfa
        </Link>
        <Link
          href="/#kategoriler"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-medium text-text hover:bg-surface-2"
        >
          <Compass className="h-4 w-4" /> Kategorileri gör
        </Link>
      </div>

      <div className="mt-12 text-left">
        <h2 className="mb-3 text-sm font-semibold text-text">Sık kullanılan hesaplayıcılar</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {populer.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/hesaplama/${c.slug}`}
                className="block rounded-lg border border-border bg-surface p-3 text-left hover:border-primary/40 hover:bg-surface-2"
              >
                <span className="font-medium text-text">{c.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
