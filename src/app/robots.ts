import type { MetadataRoute } from "next";

const BASE = "https://xn--hesaplarm-2pb.com";

/**
 * robots.txt — genel arama motorları + yapay zeka botları için izinler.
 * Hesaplama Merkezi içeriği AI arama sonuçlarında (Google AI Overviews,
 * ChatGPT Search, Perplexity, Claude) referans olarak kullanılabilir.
 */
export default function robots(): MetadataRoute.Robots {
  const aramaMotoru = { userAgent: "*", allow: "/", disallow: ["/api/"] };

  // AI botları — açık izin (site içeriği AI arama sonuçlarında görünebilsin)
  const aiBotlari = [
    "GPTBot", // OpenAI ChatGPT
    "OAI-SearchBot", // OpenAI SearchGPT
    "ChatGPT-User", // ChatGPT kullanıcı bağlamı
    "Claude-Web", // Anthropic Claude web crawler
    "ClaudeBot", // Anthropic Claude
    "anthropic-ai", // Anthropic (eski)
    "PerplexityBot", // Perplexity
    "Perplexity-User", // Perplexity kullanıcı bağlamı
    "Google-Extended", // Gemini / Bard eğitim
    "CCBot", // Common Crawl (birçok AI'a besleme)
    "Applebot-Extended", // Apple Intelligence
    "Bytespider", // ByteDance / Doubao
    "cohere-ai", // Cohere
    "DuckAssistBot", // DuckDuckGo AI
    "FacebookBot", // Meta
    "Meta-ExternalAgent", // Meta AI
    "YouBot", // You.com
  ].map((agent) => ({ userAgent: agent, allow: "/", disallow: ["/api/"] }));

  return {
    rules: [aramaMotoru, ...aiBotlari],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
