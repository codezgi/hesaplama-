/* ---------------------------------------------------------------------------
   Brüt ↔ Net maaş hesabı — 2026 resmî parametreleri.
   Parametreler her yıl kanunla değişir; yıl başında yalnızca bu bloğu güncelleyin.
   Kaynak: 2026 asgari ücret (brüt 33.030 / net 28.075,50), GİB gelir vergisi
   tarifesi 2026, SGK prim oranları, damga vergisi ve asgari ücret istisnaları.
--------------------------------------------------------------------------- */

export const MAAS = {
  yil: 2026,
  asgariUcretBrut: 33030,
  asgariUcretNet: 28075.5,
  sgkIsciOran: 0.14, // SGK işçi payı
  issizlikIsciOran: 0.01, // İşsizlik işçi payı
  sgkTavanKat: 7.5, // SGK tavanı = brüt asgari × 7.5
  damgaOran: 0.00759, // binde 7,59
  // Asgari ücretli için hesaplanan aylık gelir vergisi (istisna tutarı)
  gvIstisnaAylik: 4211.33,
  // İşveren tarafı (5 puanlık teşvik hariç, standart oranlar)
  sgkIsverenOran: 0.205,
  issizlikIsverenOran: 0.02,
  // Yıllık kümülatif gelir vergisi dilimleri
  gvDilimleri: [
    { ust: 190000, oran: 0.15 },
    { ust: 400000, oran: 0.2 },
    { ust: 1000000, oran: 0.27 },
    { ust: 5300000, oran: 0.35 },
    { ust: Infinity, oran: 0.4 },
  ],
} as const;

export const sgkTavan = MAAS.asgariUcretBrut * MAAS.sgkTavanKat;
export const damgaIstisnaAylik = MAAS.asgariUcretBrut * MAAS.damgaOran;

/** Kümülatif matrah üzerinden artan oranlı gelir vergisi */
export function gelirVergisi(matrah: number): number {
  let vergi = 0;
  let onceki = 0;
  for (const d of MAAS.gvDilimleri) {
    if (matrah <= onceki) break;
    const dilimTutar = Math.min(matrah, d.ust) - onceki;
    vergi += dilimTutar * d.oran;
    onceki = d.ust;
  }
  return vergi;
}

export interface MaasDetay {
  brut: number;
  sgkIsci: number;
  issizlikIsci: number;
  gvMatrahi: number;
  gelirVergisi: number; // istisna sonrası kesilen
  damgaVergisi: number; // istisna sonrası kesilen
  net: number;
  isverenMaliyeti: number;
}

/**
 * Brütten nete. `oncekiMatrah`: yıl başından bu aya kadar birikmiş GV matrahı
 * (varsayılan 0 = yılın ilk ayı). Sonraki aylarda net, dilimler dolduğunda düşer.
 */
export function brutToNet(brut: number, oncekiMatrah = 0): MaasDetay {
  const sgkMatrah = Math.min(brut, sgkTavan);
  const sgkIsci = sgkMatrah * MAAS.sgkIsciOran;
  const issizlikIsci = sgkMatrah * MAAS.issizlikIsciOran;
  const gvMatrahi = Math.max(0, brut - sgkIsci - issizlikIsci);

  // Bu ayın vergisi = (birikmiş + bu ay) − birikmiş
  const buAyGV = gelirVergisi(oncekiMatrah + gvMatrahi) - gelirVergisi(oncekiMatrah);
  const gelirVergisiKesinti = Math.max(0, buAyGV - MAAS.gvIstisnaAylik);

  const damgaHam = brut * MAAS.damgaOran;
  const damgaVergisi = Math.max(0, damgaHam - damgaIstisnaAylik);

  const net = brut - sgkIsci - issizlikIsci - gelirVergisiKesinti - damgaVergisi;
  const isverenMaliyeti =
    brut + sgkMatrah * (MAAS.sgkIsverenOran + MAAS.issizlikIsverenOran);

  return {
    brut,
    sgkIsci,
    issizlikIsci,
    gvMatrahi,
    gelirVergisi: gelirVergisiKesinti,
    damgaVergisi,
    net,
    isverenMaliyeti,
  };
}

/** Netten brüte — fonksiyon monoton olduğu için ikili arama ile çözülür. */
export function netToBrut(hedefNet: number, oncekiMatrah = 0): MaasDetay {
  let alt = hedefNet;
  let ust = hedefNet * 2.5 + 1000;
  for (let i = 0; i < 60; i++) {
    const orta = (alt + ust) / 2;
    const net = brutToNet(orta, oncekiMatrah).net;
    if (Math.abs(net - hedefNet) < 0.01) break;
    if (net < hedefNet) alt = orta;
    else ust = orta;
  }
  return brutToNet((alt + ust) / 2, oncekiMatrah);
}

/* ------------------------- GELİR VERGİSİ DETAY ------------------------- */
export interface GvDilimSatiri {
  altSinir: number;
  ustSinir: number;
  oran: number;
  dilimMatrahi: number; // bu dilime düşen matrah
  dilimVergisi: number; // bu dilimde hesaplanan vergi
}

/** Yıllık matrahı dilimlere ayırarak vergi kırılımını döndürür. */
export function gelirVergisiDetay(matrah: number): {
  toplamVergi: number;
  ortalamaOran: number; // efektif oran (%)
  dilimler: GvDilimSatiri[];
} {
  const dilimler: GvDilimSatiri[] = [];
  let onceki = 0;
  let toplam = 0;
  for (const d of MAAS.gvDilimleri) {
    if (matrah <= onceki) break;
    const dilimMatrahi = Math.min(matrah, d.ust) - onceki;
    const dilimVergisi = dilimMatrahi * d.oran;
    toplam += dilimVergisi;
    dilimler.push({
      altSinir: onceki,
      ustSinir: d.ust,
      oran: d.oran,
      dilimMatrahi,
      dilimVergisi,
    });
    onceki = d.ust;
  }
  return {
    toplamVergi: toplam,
    ortalamaOran: matrah > 0 ? (toplam / matrah) * 100 : 0,
    dilimler,
  };
}

/* --------------------------- KIDEM TAZMİNATI --------------------------- */
export const KIDEM = {
  /**
   * Kıdem tazminatı tavanı (aylık giydirilmiş brüt için üst sınır).
   * Her yıl Ocak ve Temmuz'da memur maaş katsayısıyla güncellenir.
   * Kullanıcı güncel değeri girebilsin diye UI'da düzenlenebilir alan olarak sunulur.
   * Varsayılan: son firm bilinen dönem değeri (bilgilendirme amaçlı).
   */
  tavanVarsayilan: 46655.43,
  damgaOran: 0.00759, // kıdem tazminatından yalnızca damga vergisi kesilir
} as const;

export interface KidemDetay {
  toplamGun: number;
  yil: number;
  ay: number;
  gun: number;
  kullanilanAylik: number; // tavan uygulandıktan sonra kullanılan aylık ücret
  tavanUygulandi: boolean;
  brutTazminat: number;
  damgaVergisi: number;
  netTazminat: number;
  hakEdiyor: boolean; // en az 1 yıl (365 gün) şartı
}

/**
 * Kıdem tazminatı: her tam çalışma yılı için 30 günlük giydirilmiş brüt ücret,
 * artan süre orantılı hesaplanır. Aylık ücret tavanı aşamaz. Yalnızca damga
 * vergisi kesilir (gelir vergisi ve SGK istisnadır).
 */
export function kidemTazminati(
  girisTarihi: Date,
  cikisTarihi: Date,
  giydirilmisAylikBrut: number,
  tavan: number = KIDEM.tavanVarsayilan,
): KidemDetay {
  const msGun = 1000 * 60 * 60 * 24;
  const g0 = new Date(girisTarihi.getFullYear(), girisTarihi.getMonth(), girisTarihi.getDate());
  const g1 = new Date(cikisTarihi.getFullYear(), cikisTarihi.getMonth(), cikisTarihi.getDate());
  const toplamGun = Math.max(0, Math.floor((g1.getTime() - g0.getTime()) / msGun));

  // Yıl/ay/gün kırılımı (gösterim amaçlı)
  let yil = g1.getFullYear() - g0.getFullYear();
  let ay = g1.getMonth() - g0.getMonth();
  let gun = g1.getDate() - g0.getDate();
  if (gun < 0) {
    ay -= 1;
    gun += new Date(g1.getFullYear(), g1.getMonth(), 0).getDate();
  }
  if (ay < 0) {
    yil -= 1;
    ay += 12;
  }

  const kullanilanAylik = Math.min(giydirilmisAylikBrut, tavan);
  const tavanUygulandi = giydirilmisAylikBrut > tavan;
  const hakEdiyor = toplamGun >= 365;

  // Her yıl için 1 aylık (30 günlük) ücret → toplam süreyi yıla oranla
  const brutTazminat = hakEdiyor ? kullanilanAylik * (toplamGun / 365) : 0;
  const damgaVergisi = brutTazminat * KIDEM.damgaOran;

  return {
    toplamGun,
    yil,
    ay,
    gun,
    kullanilanAylik,
    tavanUygulandi,
    brutTazminat,
    damgaVergisi,
    netTazminat: brutTazminat - damgaVergisi,
    hakEdiyor,
  };
}

/* --------------------------- İHBAR TAZMİNATI --------------------------- */
export interface IhbarDetay {
  hafta: number;
  gun: number;
  brut: number;
  damgaVergisi: number;
  gelirVergisi: number; // kıdemin aksine gelir vergisine tabi
  net: number;
}

/**
 * İhbar süresi: <6ay=2 hafta, 6-18ay=4, 18ay-3yıl=6, 3+ yıl=8 hafta.
 * Tazminat, giydirilmiş brüt günlük ücret × süre gün olarak hesaplanır.
 * Kıdemden farkı: hem gelir vergisi hem damga vergisi kesilir.
 */
export function ihbarTazminati(
  girisTarihi: Date,
  cikisTarihi: Date,
  giydirilmisAylikBrut: number,
): IhbarDetay {
  const msGun = 1000 * 60 * 60 * 24;
  const toplamGun = Math.max(
    0,
    Math.floor((cikisTarihi.getTime() - girisTarihi.getTime()) / msGun),
  );
  const yilOran = toplamGun / 365;

  let hafta: number;
  if (yilOran < 0.5) hafta = 2;
  else if (yilOran < 1.5) hafta = 4;
  else if (yilOran < 3) hafta = 6;
  else hafta = 8;

  const gun = hafta * 7;
  const gunlukBrut = giydirilmisAylikBrut / 30;
  const brut = gunlukBrut * gun;
  const damgaVergisi = brut * MAAS.damgaOran;
  // İhbar tazminatında gelir vergisi kesintisi var — sabit dilim varsayımıyla %15
  const gelirVergisi = brut * 0.15;
  return { hafta, gun, brut, damgaVergisi, gelirVergisi, net: brut - damgaVergisi - gelirVergisi };
}

/* --------------------------- FAZLA MESAİ --------------------------- */
/**
 * Fazla çalışma: haftalık 45 saat üzeri saatler için normal saatlik ücretin
 * 1,5 katı ödenir. Hafta tatili çalışması ayrıca ek 1 yevmiye + 1,5 kat gerektirir.
 */
export function fazlaMesai(
  aylikBrut: number,
  fazlaSaat: number,
  hafta: "normal" | "tatil" = "normal",
): { saatlikBrut: number; saatlikMesai: number; toplamBrut: number } {
  // 4857 sy'de aylık çalışma süresi 225 saat (45×5)
  const saatlikBrut = aylikBrut / 225;
  const carpan = hafta === "tatil" ? 2 : 1.5;
  const saatlikMesai = saatlikBrut * carpan;
  return {
    saatlikBrut,
    saatlikMesai,
    toplamBrut: saatlikMesai * fazlaSaat,
  };
}

/* --------------------------- YILLIK İZİN --------------------------- */
/** Kıdeme göre yıllık ücretli izin (İş Kanunu m.53). */
export function yillikIzin(yil: number, yas: number): { gun: number; aciklama: string } {
  if (yil < 1) return { gun: 0, aciklama: "1 yıl doldurulmadıkça izne hak kazanılmaz." };
  let gun: number;
  if (yil >= 15) gun = 26;
  else if (yil >= 5) gun = 20;
  else gun = 14;
  // 18 yaş altı & 50 yaş üstü için en az 20 gün
  if ((yas < 18 || yas > 50) && gun < 20) gun = 20;
  return { gun, aciklama: `Kıdem: ${yil} yıl, yaş: ${yas}` };
}

/* ------------------------------ AMORTİSMAN ------------------------------ */
export interface AmortismanSatir {
  yil: number;
  amortismanPayi: number;
  birikmisAmortisman: number;
  netDeger: number;
}

/** Normal amortisman: her yıl bedel/faydali ömür. Azalan bakiye: kalan × oran (×2). */
export function amortismanTablosu(
  bedel: number,
  faydaliOmur: number,
  yontem: "normal" | "azalanBakiye",
): AmortismanSatir[] {
  const rows: AmortismanSatir[] = [];
  const oran = 1 / faydaliOmur;
  const azalanOran = Math.min(2 * oran, 0.5);
  let birikmis = 0;
  let netDeger = bedel;

  for (let y = 1; y <= faydaliOmur; y++) {
    let pay = yontem === "normal" ? bedel / faydaliOmur : netDeger * azalanOran;
    // Son yıl kalanı temizle
    if (y === faydaliOmur) pay = netDeger;
    birikmis += pay;
    netDeger -= pay;
    rows.push({ yil: y, amortismanPayi: pay, birikmisAmortisman: birikmis, netDeger: Math.max(0, netDeger) });
  }
  return rows;
}

/* ------------------------ SERBEST MESLEK MAKBUZU ------------------------ */
export interface SmmDetay {
  brut: number;
  kdv: number;
  gvStopaj: number; // %20
  netEleGecen: number;
  tahsilEdilen: number; // müşteriden alınacak
}

/**
 * Serbest meslek makbuzu. Net alacağa göre brütü hesaplar veya brütten neti bulur.
 * Standart: KDV %20, GV stopajı %20. Net = Brüt × (1 − 0,20) = Brüt × 0,80.
 * Tahsil edilen = Brüt + KDV − Stopaj.
 */
export function smmNetBrut(net: number, kdvOran = 20, stopajOran = 20): SmmDetay {
  const brut = net / (1 - stopajOran / 100);
  const kdv = brut * (kdvOran / 100);
  const gvStopaj = brut * (stopajOran / 100);
  return {
    brut,
    kdv,
    gvStopaj,
    netEleGecen: net,
    tahsilEdilen: brut + kdv - gvStopaj,
  };
}

/* --------------------------- İŞSİZLİK MAAŞI --------------------------- */
export interface IssizlikDetay {
  aylikNet: number;
  toplamOdeme: number;
  odemeSayisi: number;
  ustSinir: number;
  altSinir: number;
  hakKazandiMi: boolean;
}

/**
 * İşsizlik ödeneği: son 4 ay brüt ortalama × %40. Alt: brüt asgari × %40,
 * üst: brüt asgari × %40 × 2,5 (yaklaşık aylık asgari brüt = üst tavan).
 * Prim sayısına göre ay sayısı: 600 gün→6, 900 gün→8, 1080 gün→10 ay.
 */
export function issizlikMaasi(son4AyOrtBrut: number, primGun: number): IssizlikDetay {
  const alt = MAAS.asgariUcretBrut * 0.4;
  const ust = alt * 2.5;
  let ham = son4AyOrtBrut * 0.4;
  ham = Math.max(alt, Math.min(ust, ham));

  // %20 damga vergisi kesintisi yaklaşık (aslında binde 7,59 damga)
  const aylikNet = ham - ham * MAAS.damgaOran;

  const primYil = primGun / 360;
  let ay = 0;
  if (primYil >= 3) ay = 10;
  else if (primYil >= 2.5) ay = 8;
  else if (primYil >= 20 / 12) ay = 6;

  return {
    aylikNet,
    odemeSayisi: ay,
    toplamOdeme: aylikNet * ay,
    ustSinir: ust,
    altSinir: alt,
    hakKazandiMi: ay > 0,
  };
}
