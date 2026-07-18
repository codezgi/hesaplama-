/** Hesaplayıcı sayfalarına eklenen SEO içerik bloğu */
export interface SeoExtra {
  /** "Nasıl hesaplanır?" adımları — HowTo JSON-LD üretir */
  howItWorks?: string[];
  /** Sık sorulan sorular — FAQPage JSON-LD üretir */
  faqs?: { q: string; a: string }[];
  /**
   * Uzman notu / detaylı bilgi — sayfanın alt kısmında gösterilen,
   * o hesaba özgü pratik ayrıntılar içeren 2-4 paragraflık metin.
   * Genel geçer cümleler değil, somut örnek ve rakam içermeli.
   */
  detay?: string[];
}
