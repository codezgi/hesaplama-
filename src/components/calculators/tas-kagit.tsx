"use client";
import { useState } from "react";
import { ResultRow, Segmented } from "@/components/result";

type Secim = "tas" | "kagit" | "makas";
const emoji = { tas: "✊", kagit: "✋", makas: "✌️" };
const ad = { tas: "Taş", kagit: "Kağıt", makas: "Makas" };

function kimKazandi(k: Secim, b: Secim): "kullanici" | "bilgisayar" | "berabere" {
  if (k === b) return "berabere";
  if ((k === "tas" && b === "makas") || (k === "kagit" && b === "tas") || (k === "makas" && b === "kagit")) return "kullanici";
  return "bilgisayar";
}

export function TasKagitMakasHesaplayici() {
  const [k, setK] = useState<Secim | null>(null);
  const [b, setB] = useState<Secim | null>(null);
  const [sonuc, setSonuc] = useState<string | null>(null);
  const [skor, setSkor] = useState({ kul: 0, bil: 0, ber: 0 });

  function oyna(secim: Secim) {
    const bilSecim = (["tas", "kagit", "makas"] as Secim[])[Math.floor(Math.random() * 3)];
    setK(secim);
    setB(bilSecim);
    const sonuc = kimKazandi(secim, bilSecim);
    if (sonuc === "kullanici") { setSonuc("🏆 Kazandın!"); setSkor((p) => ({ ...p, kul: p.kul + 1 })); }
    else if (sonuc === "bilgisayar") { setSonuc("😢 Kaybettin"); setSkor((p) => ({ ...p, bil: p.bil + 1 })); }
    else { setSonuc("🤝 Berabere"); setSkor((p) => ({ ...p, ber: p.ber + 1 })); }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6 text-center">
        <div>
          <div className="mb-2 text-sm font-semibold text-text-muted">SEN</div>
          <div className="text-7xl">{k ? emoji[k] : "❓"}</div>
          <div className="mt-2 text-sm text-text-muted">{k ? ad[k] : "seçim bekleniyor"}</div>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold text-text-muted">BİLGİSAYAR</div>
          <div className="text-7xl">{b ? emoji[b] : "❓"}</div>
          <div className="mt-2 text-sm text-text-muted">{b ? ad[b] : "seçim bekleniyor"}</div>
        </div>
      </div>

      {sonuc && (
        <div className="rounded-2xl border border-primary/20 bg-primary-soft p-4 text-center">
          <div className="text-2xl font-bold text-primary">{sonuc}</div>
        </div>
      )}

      <Segmented value={k ?? "tas"} onChange={(v) => oyna(v as Secim)} options={[
        { label: "✊ Taş", value: "tas" },
        { label: "✋ Kağıt", value: "kagit" },
        { label: "✌️ Makas", value: "makas" },
      ]} />

      <div className="card p-4">
        <div className="mb-2 text-sm font-semibold text-text">Skor</div>
        <ResultRow label="Sen" value={`${skor.kul}`} />
        <ResultRow label="Bilgisayar" value={`${skor.bil}`} />
        <ResultRow label="Berabere" value={`${skor.ber}`} />
      </div>
    </div>
  );
}
