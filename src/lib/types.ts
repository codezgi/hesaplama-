import type { LucideIcon } from "lucide-react";

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind renk sınıfları (kart ikon arka planı için) */
  tint: string;
}

export interface Calculator {
  slug: string;
  title: string;
  /** Kategori slug'ı */
  category: string;
  /** Kısa açıklama — kartlarda ve meta description'da kullanılır */
  description: string;
  /** SEO ve arama için anahtar kelimeler */
  keywords: string[];
  /** "Nasıl hesaplanır?" bölümü için kısa açıklama satırları */
  howItWorks?: string[];
  /** Formül metni (gösterim amaçlı) */
  formula?: string;
  /** Kaynak/uyarı notu (özellikle mevzuata bağlı hesaplar için) */
  note?: string;
  /** active: çalışıyor, soon: yakında */
  status: "active" | "soon";
}
