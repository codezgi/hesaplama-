import Link from "next/link";
import { Grid2x2Plus } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/kategori/finansal", label: "Finansal" },
  { href: "/kategori/maas", label: "Maaş" },
  { href: "/kategori/egitim", label: "Eğitim" },
  { href: "/#kategoriler", label: "Tüm kategoriler" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-sm">
            <Grid2x2Plus className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold text-text">Hesaplama</span>
            <span className="-mt-1 block text-[13px] font-semibold text-primary">Merkezi</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted hover:bg-surface-2 hover:text-text transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
