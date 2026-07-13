"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { categories } from "@/lib/categories";
import { SearchBox } from "./search-box";

const primaryNav = [
  { href: "/kategori/finansal", label: "Finansal" },
  { href: "/kategori/maas", label: "Maaş" },
  { href: "/kategori/egitim", label: "Eğitim" },
  { href: "/kategori/saglik", label: "Sağlık" },
];

export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (!megaOpen && !mobileOpen && !searchOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen, mobileOpen, searchOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-1.5" onClick={() => setMobileOpen(false)}>
          <span className="text-[17px] font-semibold tracking-tight text-text">Hesaplama</span>
          <span className="text-[17px] font-semibold tracking-tight text-primary">Merkezi</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <button
            onClick={() => setMegaOpen((v) => !v)}
            onMouseEnter={() => setMegaOpen(true)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              megaOpen ? "bg-surface-2 text-text" : "text-text-muted hover:bg-surface-2 hover:text-text"
            }`}
            aria-expanded={megaOpen}
          >
            Tüm hesaplayıcılar
            <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
          </button>
          {primaryNav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted hover:bg-surface-2 hover:text-text transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-muted hover:border-border-strong hover:text-text transition-colors"
            aria-label="Ara"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Ara…</span>
            <kbd className="hidden lg:inline rounded border border-border bg-surface-2 px-1.5 py-0.5 text-[10px] font-mono text-text-soft">⌘K</kbd>
          </button>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg hover:bg-surface-2 text-text"
            aria-label="Menü"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MEGA MENU — desktop */}
      {megaOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-30 hidden md:block"
            onClick={() => setMegaOpen(false)}
            onMouseEnter={() => setMegaOpen(false)}
          />
          <div
            onMouseLeave={() => setMegaOpen(false)}
            className="absolute inset-x-0 top-16 z-40 hidden md:block border-b border-border bg-surface shadow-lg"
          >
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
              <div className="mb-6 flex items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-text">Kategoriler</h3>
                  <p className="mt-0.5 text-xs text-text-muted">Tüm alanlar tek çatı altında.</p>
                </div>
                <Link
                  href="/#kategoriler"
                  onClick={() => setMegaOpen(false)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Tümünü gör →
                </Link>
              </div>
              <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((c) => {
                  const Icon = c.icon;
                  return (
                    <Link
                      key={c.slug}
                      href={`/kategori/${c.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className="group flex items-start gap-3 rounded-lg p-2.5 -mx-2.5 transition-colors hover:bg-surface-2"
                    >
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-surface-2 text-text-muted group-hover:bg-primary-soft group-hover:text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-text">{c.title}</span>
                        <span className="block text-xs text-text-muted line-clamp-1">{c.description}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4">
            <div className="mb-4">
              <SearchBox />
            </div>
            <div className="mb-2 px-1 text-xs font-semibold text-text">
              Kategoriler
            </div>
            <div className="grid grid-cols-1 gap-0.5">
              {categories.map((c) => {
                const Icon = c.icon;
                return (
                  <Link
                    key={c.slug}
                    href={`/kategori/${c.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-2.5 py-2.5 hover:bg-surface-2"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-surface-2 text-text-muted">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-text">{c.title}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 border-t border-border pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link href="/hakkimizda" onClick={() => setMobileOpen(false)} className="rounded-lg px-2.5 py-2 hover:bg-surface-2 text-text-muted">Hakkımızda</Link>
              <Link href="/iletisim" onClick={() => setMobileOpen(false)} className="rounded-lg px-2.5 py-2 hover:bg-surface-2 text-text-muted">İletişim</Link>
              <Link href="/gizlilik" onClick={() => setMobileOpen(false)} className="rounded-lg px-2.5 py-2 hover:bg-surface-2 text-text-muted">Gizlilik</Link>
              <Link href="/kullanim-kosullari" onClick={() => setMobileOpen(false)} className="rounded-lg px-2.5 py-2 hover:bg-surface-2 text-text-muted">Koşullar</Link>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-text/40 backdrop-blur-sm p-4 sm:p-6" onClick={() => setSearchOpen(false)}>
          <div className="mx-auto mt-16 max-w-xl" onClick={(e) => e.stopPropagation()}>
            <SearchBox big />
            <p className="mt-3 text-center text-xs text-white/80">ESC ile kapat</p>
          </div>
        </div>
      )}
    </header>
  );
}
