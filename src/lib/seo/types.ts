/** Hesaplayıcı sayfalarına eklenen SEO içerik bloğu */
export interface SeoExtra {
  /** "Nasıl hesaplanır?" adımları — HowTo JSON-LD üretir */
  howItWorks?: string[];
  /** Sık sorulan sorular — FAQPage JSON-LD üretir */
  faqs: { q: string; a: string }[];
}
