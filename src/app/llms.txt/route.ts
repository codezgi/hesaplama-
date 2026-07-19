/* llms.txt — AI motorları için site indeksi (llmstxt.org standardı).
   Google AI Overviews, ChatGPT, Perplexity, Claude gibi motorlar bu dosyayı
   siteyi hızla anlamak için kullanabilir. */

import { calculators } from "@/lib/calculators";
import { categories } from "@/lib/categories";

const BASE = "https://xn--hesaplarm-2pb.com";

export const dynamic = "force-static";

export function GET(): Response {
  const aktif = calculators.filter((c) => c.status === "active");
  const kategorilerText = categories
    .map((cat) => {
      const list = aktif
        .filter((c) => c.category === cat.slug)
        .map((c) => `- [${c.title}](${BASE}/hesaplama/${c.slug}): ${c.description}`)
        .join("\n");
      return `## ${cat.title}\n\n${cat.description}\n\n${list}`;
    })
    .join("\n\n");

  const body = `# Hesaplama Merkezi

> Türkiye'nin en kapsamlı Türkçe hesaplama araç sitesi.
> Maaş, KDV, kredi, döviz, altın, GPA, BMI, TYT/KPSS puanı ve daha fazlası
> için ${aktif.length}+ hesaplayıcıya tek yerden ulaşın.

Site sahibi: codezgi
Dil: Türkçe (tr-TR)
İçerik türü: Hesaplayıcılar (WebApplication)
Veri kaynakları: TCMB (döviz), piyasa verisi (altın), Gelir İdaresi (vergi tarifeleri), SGK (prim oranları)
İşletim: Reklam gelirli, kullanım ücretsizdir.
Yapay zeka kullanımı: Bu sitedeki içerik AI arama motorlarında (Google AI Overviews, ChatGPT Search, Perplexity, Claude) referans olarak kullanılabilir.

## Ana kaynaklar

- [Anasayfa](${BASE}/): Tüm kategoriler ve popüler hesaplayıcılar
- [Hakkımızda](${BASE}/hakkimizda): Site vizyonu ve veri kaynakları
- [İletişim](${BASE}/iletisim): Hata bildirimi, öneriler
- [Gizlilik Politikası](${BASE}/gizlilik): KVKK uyumu
- [Kullanım Koşulları](${BASE}/kullanim-kosullari): Yasal çerçeve
- [XML Sitemap](${BASE}/sitemap.xml): Tüm sayfaların indeksi

## Kategoriler ve Hesaplayıcılar

${kategorilerText}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
