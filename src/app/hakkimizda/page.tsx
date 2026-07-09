import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Zap, Heart } from "lucide-react";
import { activeCalculators } from "@/lib/calculators";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Hesaplama Merkezi hakkında: neden kurduk, verilerimizi nereden alıyoruz, nasıl güncel tutuyoruz.",
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  const aktifSayi = activeCalculators().length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 flex items-center gap-1 text-sm text-text-muted">
        <Link href="/" className="hover:text-primary">Anasayfa</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-text">Hakkımızda</span>
      </nav>

      <h1 className="text-3xl font-bold text-text sm:text-4xl">Hesaplama Merkezi</h1>
      <p className="mt-3 text-lg text-text-muted">
        Türkiye&apos;deki en pratik, en dürüst ve reklamla dengelenmiş hesaplayıcı platformu olmayı hedefliyoruz.
      </p>

      <section className="mt-10 space-y-4 text-text-muted">
        <h2 className="text-xl font-bold text-text">Neden bu site?</h2>
        <p>
          Vergi hesaplarken üç farklı hesaplayıcıyı denemek, kredi taksitini üniversite makalesi gibi
          açıklayan sayfalarda kaybolmak, sonuçlar arasında sürüklenen reklamlarla boğuşmak…
          Hesaplama Merkezi tam olarak bu sorunları çözmek için var: <span className="text-text">tek tıkla doğru sonuç</span>,
          anlaşılır formül ve okunur bir arayüz.
        </p>
        <p>
          Şu anda <span className="text-text">{aktifSayi} aktif hesaplayıcı</span> {categories.length} kategoride yayında.
          Her sayfa hem sonucu hem <em>nasıl hesaplandığını</em> gösterir — böylece hesabı anlar, güvenirsiniz.
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="card p-5">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <h3 className="mt-3 font-semibold text-text">Dürüst kaynak</h3>
          <p className="mt-1 text-sm text-text-muted">
            Kurlar TCMB, altın piyasa verisi, vergi/maaş parametreleri Gelir İdaresi ve SGK resmi tarifelerine dayanır.
          </p>
        </div>
        <div className="card p-5">
          <Zap className="h-6 w-6 text-primary" />
          <h3 className="mt-3 font-semibold text-text">Anlık sonuç</h3>
          <p className="mt-1 text-sm text-text-muted">
            Yaz-tuş-bekle yok; girdiler değiştikçe sonuç anında güncellenir. Sayfa yenilenmez.
          </p>
        </div>
        <div className="card p-5">
          <Heart className="h-6 w-6 text-primary" />
          <h3 className="mt-3 font-semibold text-text">Ücretsiz</h3>
          <p className="mt-1 text-sm text-text-muted">
            Tüm hesaplar sonsuza kadar ücretsiz. Reklamlar site ayakta kalsın diyedir; sonuçlarla iç içe geçmez.
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-4 text-text-muted">
        <h2 className="text-xl font-bold text-text">Doğruluk sözü</h2>
        <p>
          Hesaplarımız mevzuata ve resmi kaynaklara olabildiğince sadıktır ama sonuçlar
          <span className="text-text"> bilgilendirme amaçlıdır</span>; kesin işlemler için ilgili kurumun (SGK, GİB,
          bankanız, hekiminiz) hesabını esas alın. Bir hesapta hata gördüyseniz {" "}
          <Link href="/iletisim" className="text-primary hover:underline">iletişim sayfamızdan</Link> bize bildirin — düzeltiriz.
        </p>
      </section>
    </div>
  );
}
