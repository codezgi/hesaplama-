import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
import { categories } from "@/lib/categories";

const BASE = "https://hesaplamamerkezi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statik: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/gizlilik`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/kullanim-kosullari`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const kategoriler: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE}/kategori/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const hesaplayicilar: MetadataRoute.Sitemap = calculators
    .filter((c) => c.status === "active")
    .map((c) => ({
      url: `${BASE}/hesaplama/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  return [...statik, ...kategoriler, ...hesaplayicilar];
}
