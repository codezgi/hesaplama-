import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hesaplamamerkezi.com"),
  title: {
    default: "Hesaplama Merkezi — Maaş, KDV, Kredi, Döviz ve 100+ Hesaplama",
    template: "%s | Hesaplama Merkezi",
  },
  description:
    "Türkiye'nin en kapsamlı Türkçe hesaplama merkezi: maaş, KDV, kredi taksiti, döviz, altın, not ortalaması, TYT/KPSS ve 100+ hesaplayıcı. Canlı TCMB ve piyasa verileri.",
  keywords: [
    "hesaplama", "hesaplayıcı", "kdv hesaplama", "kredi hesaplama", "bmi",
    "gpa", "brüt net maaş", "tyt puan", "kpss", "döviz çevirici", "altın hesaplama",
    "kıdem tazminatı", "gelir vergisi", "damga vergisi",
  ],
  authors: [{ name: "Hesaplama Merkezi" }],
  creator: "Hesaplama Merkezi",
  publisher: "Hesaplama Merkezi",
  applicationName: "Hesaplama Merkezi",
  category: "utilities",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Hesaplama Merkezi",
    title: "Hesaplama Merkezi — Türkiye'nin En Kapsamlı Hesaplama Aracı",
    description: "Maaş, KDV, kredi, döviz, altın ve 100+ hesaplayıcı. Canlı TCMB kurları.",
    url: "https://hesaplamamerkezi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesaplama Merkezi",
    description: "Türkiye'nin en kapsamlı Türkçe hesaplama merkezi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  other: {
    // AI/LLM ilkeleri — içerik AI arama sonuçlarında görünmeye açıktır
    "robots-ai": "index, allow-training",
  },
};

// Tema flash'ını (FOUC) önlemek için render öncesi çalışan script
const themeScript = `
(function() {
  try {
    // Varsayılan beyaz tema; yalnızca kullanıcı bilinçli olarak seçtiyse karanlık
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
