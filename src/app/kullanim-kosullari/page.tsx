import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Hesaplama Merkezi kullanım koşulları: sonuçların bilgilendirme amaçlı olduğu, sorumluluk sınırları ve fikri mülkiyet.",
  alternates: { canonical: "/kullanim-kosullari" },
};

export default function KullanimKosullariPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 flex items-center gap-1 text-sm text-text-muted">
        <Link href="/" className="hover:text-primary">Anasayfa</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-text">Kullanım Koşulları</span>
      </nav>

      <h1 className="text-3xl font-bold text-text sm:text-4xl">Kullanım Koşulları</h1>
      <p className="mt-2 text-sm text-text-muted">Son güncelleme: 9 Temmuz 2026</p>

      <div className="prose prose-neutral mt-8 max-w-none text-text-muted [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-text [&_h2]:text-xl [&_h2]:font-bold [&_p]:mb-3">
        <h2>1. Kabul</h2>
        <p>
          Hesaplama Merkezi&apos;ni (&quot;site&quot;) kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul
          etmiyorsanız lütfen siteyi kullanmayın.
        </p>

        <h2>2. Sonuçlar bilgilendirme amaçlıdır</h2>
        <p>
          Sitedeki tüm hesap sonuçları <strong>bilgilendirme ve tahmin amaçlıdır</strong>. Resmi işlemlerde,
          hukuki, mali ya da tıbbi kararlarda ilgili kurumun (SGK, GİB, bankanız, hekiminiz vb.) veya bir uzmanın
          hesabı esas alınmalıdır.
        </p>

        <h2>3. Sorumluluk sınırı</h2>
        <p>
          Site, hesaplama sonuçlarının kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu
          tutulamaz. Mevzuat değişikliklerinden kaynaklanan güncelleme gecikmeleri olabilir; en son yayınlanan
          resmi tarifeyi kontrol etmeniz önerilir.
        </p>

        <h2>4. Fikri mülkiyet</h2>
        <p>
          Sitedeki tasarım, kod, metin ve içerikler telif hakkı ile korunur. Bireysel kullanım dışında izinsiz
          çoğaltma, yeniden yayınlama yasaktır. Formüller ve matematiksel yöntemler kamuya açıktır.
        </p>

        <h2>5. Kullanıcı davranışı</h2>
        <p>
          Siteyi yasadışı, kötüye kullanım (aşırı otomatik istek, saldırı vb.) veya başkalarına zarar verecek
          şekilde kullanmamayı kabul edersiniz.
        </p>

        <h2>6. Değişiklik hakkı</h2>
        <p>
          Site içeriği, hesaplayıcıları ve bu koşullar önceden bildirim yapılmaksızın güncellenebilir. Devam eden
          kullanımınız, güncellenen koşulları kabul ettiğiniz anlamına gelir.
        </p>

        <h2>7. Uygulanacak hukuk</h2>
        <p>
          Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Doğabilecek uyuşmazlıklarda İstanbul Mahkemeleri
          yetkilidir.
        </p>

        <p className="pt-4">
          Sorularınız için <Link href="/iletisim" className="text-primary hover:underline">iletişim sayfamıza</Link> ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}
