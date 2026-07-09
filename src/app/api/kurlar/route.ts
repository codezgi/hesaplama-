import { NextResponse } from "next/server";
import { getKurPaketi } from "@/lib/rates";

// Route seviyesinde ISR: yanıt 10 dk önbelleklenir, arka planda tazelenir
export const revalidate = 600;

export async function GET() {
  const paket = await getKurPaketi();
  return NextResponse.json(paket, {
    headers: {
      // CDN'de 10 dk taze tut, 1 saate kadar bayat sürümü serverken arka planda yenile
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
    },
  });
}
