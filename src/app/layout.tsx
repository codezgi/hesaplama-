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
    default: "Hesaplama Merkezi — Maaş, KDV, Kredi ve Döviz Hesaplama",
    template: "%s | Hesaplama Merkezi",
  },
  description:
    "Maaş, KDV, kredi taksiti, döviz, altın ve not ortalaması hesaplama araçları. Döviz ve altın verileri güncel.",
  keywords: ["hesaplama", "hesaplayıcı", "kdv hesaplama", "kredi hesaplama", "bmi", "gpa"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Hesaplama Merkezi",
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
