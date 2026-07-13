/* ---------------------------------------------------------------------------
   Reklam alanı (AdSlot) — reklam ağı (ör. Google AdSense) entegrasyonu için
   ayrılmış, boyutu rezerve edilmiş yer tutucu. CLS (layout kayması) olmasın
   diye min-height sabittir. Gerçek reklam kodu bağlanınca placeholder yerine
   <ins class="adsbygoogle"> gelir.

   Yerleşim rehberi (sitedeki tüm reklam alanları):
   - HESAPLAYICI SAYFASI (5 slot):
     * üst-leaderboard (H1 altı)
     * in-article (hesap sonucu altı)
     * alt-leaderboard (İlgili hesaplayıcılar sonrası)
     * yan-sidebar (masaüstünde sağ sticky)
     * yan-rectangle (yan-sidebar altında)
   - KATEGORİ SAYFASI (2 slot): üst + alt leaderboard
   - ANA SAYFA (1 slot): bölümler arası leaderboard
--------------------------------------------------------------------------- */

type AdFormat = "leaderboard" | "rectangle" | "sidebar" | "in-article";

const boyut: Record<AdFormat, { minH: string; etiket: string; maxW?: string }> = {
  leaderboard: { minH: "min-h-[90px] sm:min-h-[90px]", etiket: "728 × 90", maxW: "max-w-[728px]" },
  rectangle: { minH: "min-h-[250px]", etiket: "300 × 250", maxW: "max-w-[336px]" },
  sidebar: { minH: "min-h-[250px] lg:min-h-[600px]", etiket: "300 × 600", maxW: "max-w-[300px]" },
  "in-article": { minH: "min-h-[120px]", etiket: "responsive" },
};

export function AdSlot({
  format = "in-article",
  className = "",
}: {
  format?: AdFormat;
  className?: string;
}) {
  const b = boyut[format];
  return (
    <div className={`mx-auto w-full ${b.maxW ?? ""} ${className}`}>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-text-muted/60">
        <span>Reklam</span>
        <span>{b.etiket}</span>
      </div>
      <div
        data-ad-slot={format}
        aria-hidden="true"
        className={`mt-1 flex ${b.minH} w-full items-center justify-center rounded-xl border border-dashed border-border bg-surface-2/40 text-center`}
      >
        {/*
          AdSense bağlanınca burası ile değiştirilir:
          <ins className="adsbygoogle" style={{ display: "block" }}
               data-ad-client="ca-pub-XXXX" data-ad-slot="XXXX"
               data-ad-format="auto" data-full-width-responsive="true" />
        */}
        <span className="select-none text-xs font-medium text-text-muted/60">
          Reklam alanı
        </span>
      </div>
    </div>
  );
}
