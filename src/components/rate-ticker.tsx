"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { KurPaketi } from "@/lib/rates";
import { formatNumber } from "@/lib/calc";

interface Satir {
  ad: string;
  deger: number;
  href: string;
}

export function RateTicker() {
  const [satirlar, setSatirlar] = useState<Satir[] | null>(null);
  const [saat, setSaat] = useState<string>("");

  useEffect(() => {
    let iptal = false;
    fetch("/api/kurlar")
      .then((r) => r.json())
      .then((d: KurPaketi) => {
        if (iptal) return;
        const usd = d.doviz.find((x) => x.code === "USD");
        const eur = d.doviz.find((x) => x.code === "EUR");
        const gram = d.altin.find((x) => x.code === "GRA");
        const list: Satir[] = [];
        if (usd) list.push({ ad: "Dolar", deger: usd.satis, href: "/hesaplama/doviz-cevirici" });
        if (eur) list.push({ ad: "Euro", deger: eur.satis, href: "/hesaplama/doviz-cevirici" });
        if (gram) list.push({ ad: "Gram Altın", deger: gram.satis, href: "/hesaplama/altin-hesaplama" });
        setSatirlar(list);
        setSaat(
          new Date(d.updatedAt).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        );
      })
      .catch(() => setSatirlar([]));
    return () => {
      iptal = true;
    };
  }, []);

  return (
    <div className="w-full border border-border bg-surface" style={{ borderRadius: 12 }}>
      <div className="flex items-baseline justify-between border-b border-border px-4 py-2.5">
        <span className="text-sm font-semibold text-text">Güncel kurlar</span>
        <span className="text-xs text-text-muted">
          {saat ? `${saat} · TCMB & piyasa` : "yükleniyor…"}
        </span>
      </div>
      <div className="divide-y divide-border">
        {(satirlar ?? [{ ad: "Dolar" }, { ad: "Euro" }, { ad: "Gram Altın" }] as Satir[]).map(
          (s, i) => (
            <Link
              key={i}
              href={s.href ?? "#"}
              className="flex items-center justify-between px-4 py-3 hover:bg-surface-2"
            >
              <span className="text-[15px] text-text">{s.ad}</span>
              <span className="tabular-nums font-semibold text-text">
                {s.deger ? `₺${formatNumber(s.deger, 2)}` : "—"}
              </span>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
