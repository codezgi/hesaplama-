import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Mail, Bug, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Hesaplama Merkezi'ne hata bildirimi, öneri veya reklam için nasıl ulaşacağınız.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 flex items-center gap-1 text-sm text-text-muted">
        <Link href="/" className="hover:text-primary">Anasayfa</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-text">İletişim</span>
      </nav>

      <h1 className="text-3xl font-bold text-text sm:text-4xl">İletişim</h1>
      <p className="mt-3 text-lg text-text-muted">
        Bir hesapta hata gördün, aklına yeni bir hesap fikri geldi ya da işbirliği önereceksin —
        aşağıdaki adreslerden bize ulaş.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href="mailto:alperencangilic@hotmail.com"
          className="card group flex items-start gap-4 p-5 transition-colors hover:border-primary/40"
        >
          <Mail className="h-6 w-6 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-text group-hover:text-primary">Genel iletişim</h3>
            <p className="mt-1 text-sm text-text-muted">alperencangilic@hotmail.com</p>
            <p className="mt-2 text-xs text-text-muted">Reklam işbirlikleri, kurumsal talepler ve genel sorular.</p>
          </div>
        </a>

        <a
          href="mailto:alperencangilic@hotmail.com"
          className="card group flex items-start gap-4 p-5 transition-colors hover:border-primary/40"
        >
          <Bug className="h-6 w-6 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-text group-hover:text-primary">Hata bildirimi</h3>
            <p className="mt-1 text-sm text-text-muted">alperencangilic@hotmail.com</p>
            <p className="mt-2 text-xs text-text-muted">
              Bir hesaplayıcının sonucu yanlış ise: sayfa adı, girdiğin değerler ve beklediğin sonucu paylaş.
            </p>
          </div>
        </a>

        <a
          href="mailto:alperencangilic@hotmail.com"
          className="card group flex items-start gap-4 p-5 transition-colors hover:border-primary/40 sm:col-span-2"
        >
          <Lightbulb className="h-6 w-6 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-text group-hover:text-primary">Yeni hesaplayıcı önerisi</h3>
            <p className="mt-1 text-sm text-text-muted">alperencangilic@hotmail.com</p>
            <p className="mt-2 text-xs text-text-muted">
              Aradığın bir hesap listede yoksa, kısaca anlat — hesaplama.net paritesine ilerlerken önerileri değerlendiriyoruz.
            </p>
          </div>
        </a>
      </div>

      <p className="mt-8 text-sm text-text-muted">
        Yasal ve gizlilik konuları için <Link href="/gizlilik" className="text-primary hover:underline">Gizlilik Politikası</Link> ve
        {" "}
        <Link href="/kullanim-kosullari" className="text-primary hover:underline">Kullanım Koşulları</Link> sayfalarımıza da göz atabilirsin.
      </p>
    </div>
  );
}
