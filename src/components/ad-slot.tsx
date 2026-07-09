/* ---------------------------------------------------------------------------
   Reklam alanı (AdSlot) — reklam ağı (ör. Google AdSense) entegrasyonu için
   ayrılmış, boyutu rezerve edilmiş yer tutucu. CLS (layout kayması) olmasın
   diye min-height sabittir. Gerçek reklam kodu bağlanınca placeholder yerine
   <ins class="adsbygoogle"> gelir.

   Kullanım: <AdSlot format="leaderboard" />
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
      <div
        data-ad-slot={format}
        aria-hidden="true"
        className={`flex ${b.minH} w-full items-center justify-center rounded-xl border border-dashed border-border bg-surface-2/50 text-center`}
      >
        {/*
          AdSense bağlanınca burası ile değiştirilir:
          <ins className="adsbygoogle" style={{ display: "block" }}
               data-ad-client="ca-pub-XXXX" data-ad-slot="XXXX"
               data-ad-format="auto" data-full-width-responsive="true" />
        */}
        <span className="select-none text-xs font-medium uppercase tracking-wide text-text-muted/70">
          Reklam · {b.etiket}
        </span>
      </div>
    </div>
  );
}
