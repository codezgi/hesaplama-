"use client";
import { ramazanKac, RAMAZAN_2026 } from "@/lib/calc";
import { ResultHero, ResultRow } from "@/components/result";

export function RamazanSayacHesaplayici() {
  const r = ramazanKac();
  return (
    <div className="space-y-6">
      {r.durum === "devam" && (
        <ResultHero
          label={`Ramazan'ın ${r.gecen}. günü`}
          value={`${r.kalan} gün kaldı`}
          sub={`Ramazan Bayramı yaklaşıyor`}
          tone="accent"
        />
      )}
      {r.durum === "yakinda" && (
        <ResultHero label="Ramazan'a Kalan Süre" value={`${r.kalan} gün`} sub={RAMAZAN_2026.bas.toLocaleDateString("tr-TR")} tone="accent" />
      )}
      {r.durum === "bitti" && (
        <ResultHero label="Bu yılki Ramazan bitti" value={`Sonrakine ${r.sonrakine} gün`} sub="Bir sonraki yıl (11 gün önce)" tone="accent" />
      )}
      <div className="card p-4">
        <ResultRow label="Ramazan Başlangıcı (2026)" value={RAMAZAN_2026.bas.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" })} />
        <ResultRow label="Ramazan Sonu (2026)" value={RAMAZAN_2026.bit.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" })} />
        <ResultRow label="Toplam Gün" value="30 gün" />
      </div>
    </div>
  );
}
