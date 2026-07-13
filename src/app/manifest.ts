import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hesaplama Merkezi",
    short_name: "Hesaplama",
    description:
      "Türkiye'nin en kapsamlı Türkçe hesaplama araçları — maaş, KDV, kredi, döviz, altın, GPA, BMI ve 100+ hesaplayıcı.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ef",
    theme_color: "#2f9e6f",
    lang: "tr-TR",
    orientation: "portrait-primary",
    categories: ["finance", "productivity", "education", "utilities"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
