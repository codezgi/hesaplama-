import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Hesaplama Merkezi'nde verileriniz nasıl işlenir: hesaplamalar, çerezler, üçüncü taraf reklamlar (Google AdSense) ve analytics.",
  alternates: { canonical: "/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 flex items-center gap-1 text-sm text-text-muted">
        <Link href="/" className="hover:text-primary">Anasayfa</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-text">Gizlilik Politikası</span>
      </nav>

      <h1 className="text-3xl font-bold text-text sm:text-4xl">Gizlilik Politikası</h1>
      <p className="mt-2 text-sm text-text-muted">Son güncelleme: 9 Temmuz 2026</p>

      <div className="prose prose-neutral mt-8 max-w-none text-text-muted [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-text [&_h2]:text-xl [&_h2]:font-bold [&_p]:mb-3 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_a]:text-primary hover:[&_a]:underline">
        <h2>1. Genel</h2>
        <p>
          Hesaplama Merkezi (bundan sonra &quot;site&quot;) olarak gizliliğinize önem veriyoruz. Bu politika, siteyi
          kullandığınızda hangi verilerin işlendiğini, nasıl saklandığını ve haklarınızı açıklar. Site 6698 sayılı
          Kişisel Verilerin Korunması Kanunu (KVKK) ile uyumlu çalışır.
        </p>

        <h2>2. Hesaplama verileri</h2>
        <p>
          Hesaplayıcılara girdiğiniz sayısal veriler (maaş, kredi tutarı, boy, kilo vb.) <strong>tarayıcınızda</strong>
          işlenir; sunucularımıza <strong>gönderilmez ve kaydedilmez</strong>. İstisna: canlı kur/altın verisi
          çekmek için TCMB ve piyasa API&apos;lerine yalnızca genel istekler gönderilir (sizin verilerinizi içermez).
        </p>

        <h2>3. Çerezler (Cookies)</h2>
        <p>Site aşağıdaki amaçlarla çerez kullanabilir:</p>
        <ul>
          <li><strong>Zorunlu:</strong> Tema (açık/koyu) ve dil tercihinizi hatırlamak için.</li>
          <li><strong>Analitik:</strong> Sayfa görüntülemelerini anonim olarak takip etmek (Google Analytics vb.).</li>
          <li><strong>Reklam:</strong> Reklam ağlarının size uygun içerik göstermesi için (aşağıya bakın).</li>
        </ul>
        <p>Tarayıcı ayarlarınızdan çerezleri her zaman engelleyebilirsiniz.</p>

        <h2>4. Üçüncü taraf reklamlar (Google AdSense)</h2>
        <p>
          Site, işletim maliyetlerini karşılamak için Google AdSense ve benzeri reklam ağları aracılığıyla reklam
          gösterebilir. Bu ağlar size uygun reklamı sunabilmek için tarayıcınıza çerez yerleştirebilir, IP adresinizi
          ve genel demografik/ilgi verilerinizi işleyebilir. Google&apos;ın reklam kullanımını{" "}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">
            bu bağlantıdan
          </a>{" "}
          devre dışı bırakabilirsiniz.
        </p>

        <h2>5. Analitik</h2>
        <p>
          Kullanıcı davranışını (hangi hesaplayıcılar daha çok kullanılıyor, hangi arama terimleri geliyor)
          anlamak için anonim istatistikler toplayabiliriz. Bu veriler tek başına sizi tanımlamaz.
        </p>

        <h2>6. Google API / AI arama entegrasyonu</h2>
        <p>
          Site ilerleyen dönemde hesaplayıcıları Google arama sonuçlarında (AI Overviews, Zengin Sonuçlar)
          gösterilebilir hale getirmek için yapılandırılmış veri (Schema.org) işaretlemesi kullanabilir. Bu, sadece
          sayfa yapısını Google&apos;ın anlayacağı biçimde tanımlar — kişisel veri iletimi içermez.
        </p>

        <h2>7. Haklarınız</h2>
        <p>
          KVKK kapsamında verilerinize erişme, silme, düzeltme ve işlemeye itiraz etme hakkına sahipsiniz.
          Talepleriniz için <Link href="/iletisim">iletişim sayfamızdaki</Link> adreslerden bize ulaşabilirsiniz.
        </p>

        <h2>8. Değişiklikler</h2>
        <p>
          Bu politika zaman zaman güncellenebilir. Önemli değişiklikler ana sayfada duyurulur. Politikanın en
          güncel hâlini bu sayfada bulabilirsiniz.
        </p>
      </div>
    </div>
  );
}
