"use client";
import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { ResultHero, Segmented, Field } from "@/components/result";

const YEMEKLER: Record<string, string[]> = {
  turk: ["🍖 Adana Kebap", "🥘 Tas Kebabı", "🍚 Etli Pilav", "🥟 Mantı", "🫓 Lahmacun", "🍢 Şiş Köfte", "🧆 İçli Köfte", "🥣 Yayla Çorbası", "🥧 Su Böreği", "🍅 Menemen", "🌯 Beyti", "🥩 Tavuk Şiş", "🫔 Simit", "🥧 Karnıyarık", "🌯 Dürüm", "🥘 Bamya"],
  hizli: ["🍔 Hamburger", "🍕 Pizza", "🌭 Sosisli", "🥙 Döner Dürüm", "🍟 Patates Kızartması", "🌮 Taco", "🥪 Sandviç", "🍗 Tavuk But", "🥯 Bagel"],
  saglikli: ["🥗 Ton Balıklı Salata", "🍲 Mercimek Çorbası", "🍎 Meyve Tabağı", "🥒 Salatalık Yoğurtlu", "🥑 Avokado Toast", "🐟 Izgara Somon", "🥬 Yeşil Salata", "🥕 Havuç Tarama", "🍠 Bulgur Pilavı"],
  dunya: ["🍜 Ramen", "🍱 Sushi", "🍛 Curry", "🌯 Burrito", "🍝 Makarna", "🥘 Paella", "🍲 Pho", "🥟 Dumpling", "🥙 Falafel", "🌮 Taco"],
  tatli: ["🍰 Cheesecake", "🍮 Sütlaç", "🧁 Muffin", "🍩 Donut", "🍨 Dondurma", "🥮 Baklava", "🍫 Brownie", "🍡 Muhallebi", "🍯 Kadayıf"],
};

export function NeYiyeyimHesaplayici() {
  const [kategori, setKategori] = useState<keyof typeof YEMEKLER>("turk");
  const [sonuc, setSonuc] = useState<string | null>(null);
  const [donuyor, setDonuyor] = useState(false);

  function sec() {
    if (donuyor) return;
    setDonuyor(true);
    setSonuc(null);
    let sayac = 0;
    const interval = setInterval(() => {
      const liste = YEMEKLER[kategori];
      setSonuc(liste[Math.floor(Math.random() * liste.length)]);
      sayac++;
      if (sayac > 15) clearInterval(interval);
    }, 60);
    setTimeout(() => {
      clearInterval(interval);
      const liste = YEMEKLER[kategori];
      setSonuc(liste[Math.floor(Math.random() * liste.length)]);
      setDonuyor(false);
    }, 1400);
  }

  return (
    <div className="space-y-6">
      <Field label="Kategori">
        <Segmented value={kategori} onChange={setKategori} options={[
          { label: "🇹🇷 Türk", value: "turk" },
          { label: "🍔 Hızlı", value: "hizli" },
          { label: "🥗 Sağlıklı", value: "saglikli" },
          { label: "🌍 Dünya", value: "dunya" },
          { label: "🍰 Tatlı", value: "tatli" },
        ]} />
      </Field>

      <div className="flex flex-col items-center gap-6 py-8">
        {sonuc && (
          <div className={`text-center transition-all ${donuyor ? "scale-95 opacity-50" : "scale-100 opacity-100"}`}>
            <div className="text-8xl">{sonuc.split(" ")[0]}</div>
            <div className="mt-3 text-2xl font-bold text-primary">{sonuc.split(" ").slice(1).join(" ")}</div>
          </div>
        )}
        {!sonuc && <div className="text-center text-text-muted">Buton'a bas, ne yemek istediğinize karar verelim!</div>}

        <button type="button" onClick={sec} disabled={donuyor} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white shadow-lg hover:bg-primary-hover disabled:opacity-50">
          <RefreshCw className={`h-5 w-5 ${donuyor ? "animate-spin" : ""}`} /> {donuyor ? "Karar veriliyor…" : sonuc ? "🔄 Bir de bu olsun" : "🍽️ Ne yiyeyim?"}
        </button>
      </div>

      {sonuc && !donuyor && (
        <ResultHero label="Bugünkü öneri" value={sonuc} sub={`${YEMEKLER[kategori].length} seçenek arasından`} tone="accent" />
      )}
    </div>
  );
}
