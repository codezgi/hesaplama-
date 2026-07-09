import type { ComponentType } from "react";
import { KdvHesaplayici } from "./kdv";
import { KrediHesaplayici } from "./kredi";
import { YuzdeHesaplayici } from "./yuzde";
import { BmiHesaplayici } from "./bmi";
import { GpaHesaplayici } from "./gpa";
import { YakitHesaplayici } from "./yakit";
import { YasHesaplayici } from "./yas";
import { DovizHesaplayici } from "./doviz";
import { AltinHesaplayici } from "./altin";
import { MaasHesaplayici } from "./maas";
import { KidemHesaplayici } from "./kidem";
import { MevduatHesaplayici } from "./mevduat";
import { GelirVergisiHesaplayici } from "./gelir-vergisi";
import { KaloriHesaplayici } from "./kalori";
import { TarihFarkiHesaplayici } from "./tarih-farki";
import { GebelikHesaplayici } from "./gebelik";
import { KonutKredisiHesaplayici } from "./konut-kredisi";
import { ElektrikFaturasiHesaplayici } from "./elektrik-faturasi";
import { JsonFormatlayici } from "./json-formatlayici";
import { Base64Hesaplayici } from "./base64";
import { UuidHesaplayici } from "./uuid";
import { BilesikFaizHesaplayici } from "./bilesik-faiz";
import { UsluKarekokHesaplayici } from "./uslu-karekok";
import { EbobEkokHesaplayici } from "./ebob-ekok";
import { FaktoriyelHesaplayici } from "./faktoriyel";
import { GeometriHesaplayici } from "./geometri";
import { SayiTabaniHesaplayici } from "./sayi-tabani";
import {
  UzunlukCevirici,
  AgirlikCevirici,
  AlanCevirici,
  HacimCevirici,
  HizCevirici,
  VeriCevirici,
  ZamanCevirici,
  SicaklikCevirici,
} from "./converters";
// Sağlık paketi
import { IdealKiloHesaplayici } from "./ideal-kilo";
import { VucutYagOraniHesaplayici } from "./vucut-yag-orani";
import { SuIhtiyaciHesaplayici } from "./su-ihtiyaci";
import { ProteinHesaplayici } from "./protein";
import { OvulasyonHesaplayici } from "./ovulasyon";
// Geliştirici + Metin
import { SifreUreticiHesaplayici } from "./sifre-uretici";
import { HashHesaplayici } from "./hash";
import { RenkCevirici } from "./renk-cevirici";
import { KarakterSayaciHesaplayici } from "./karakter-sayaci";
// Vergi + Ticari
import { MtvHesaplayici } from "./mtv";
import { DamgaVergisiHesaplayici } from "./damga-vergisi";
import { EmlakVergisiHesaplayici } from "./emlak-vergisi";
import { KiraGeliriHesaplayici } from "./kira-geliri";
import { KarMarjiHesaplayici } from "./kar-marji";
import { DesiHesaplayici } from "./desi";
// Zaman + Matematik
import { GunEkleHesaplayici } from "./gun-ekle";
import { HaftaninGunuHesaplayici } from "./haftanin-gunu";
import { HicriHesaplayici } from "./hicri";
import { OranOrantiHesaplayici } from "./oran-oranti";
import { IstatistikHesaplayici } from "./istatistik";
import { RomaRakamiHesaplayici } from "./roma-rakami";
import { RastgeleSayiHesaplayici } from "./rastgele-sayi";
// Sınav puanı
import { TytPuanHesaplayici } from "./tyt-puan";
import { AytPuanHesaplayici } from "./ayt-puan";
import { KpssPuanHesaplayici } from "./kpss-puan";
import { LgsPuanHesaplayici } from "./lgs-puan";
import { DgsPuanHesaplayici } from "./dgs-puan";
import { YdsAlesHesaplayici } from "./yds-ales";
// Muhasebe/Maaş
import { IhbarTazminatiHesaplayici } from "./ihbar-tazminati";
import { FazlaMesaiHesaplayici } from "./fazla-mesai";
import { YillikIzinHesaplayici } from "./yillik-izin";
import { IssizlikMaasiHesaplayici } from "./issizlik-maasi";
import { AmortismanHesaplayici } from "./amortisman";
import { SerbestMeslekHesaplayici } from "./serbest-meslek";
// Sigorta
import { DaskHesaplayici } from "./dask";
import { KaskoHesaplayici } from "./kasko";
import { TrafikBasamakHesaplayici } from "./trafik-basamak";
// Seyahat
import { EvSarjHesaplayici } from "./ev-sarj";
import { TaksiUcretHesaplayici } from "./taksi-ucret";
// Yaşam
import { BurcHesaplayici } from "./burc";
import { KusakHesaplayici } from "./kusak";
import { ZekatHesaplayici } from "./zekat";
import { KlimaBtuHesaplayici } from "./klima-btu";
import { SigaraHesaplayici } from "./sigara";
// Sağlık ek
import { BelKalcaHesaplayici } from "./bel-kalca";

/** slug → çalışan hesaplayıcı bileşeni */
export const calculatorComponents: Record<string, ComponentType> = {
  "kdv-hesaplama": KdvHesaplayici,
  "kredi-hesaplama": KrediHesaplayici,
  "yuzde-hesaplama": YuzdeHesaplayici,
  "vucut-kitle-indeksi": BmiHesaplayici,
  "gpa-hesaplama": GpaHesaplayici,
  "yakit-maliyeti": YakitHesaplayici,
  "yas-hesaplama": YasHesaplayici,
  "doviz-cevirici": DovizHesaplayici,
  "altin-hesaplama": AltinHesaplayici,
  "brut-net-maas": MaasHesaplayici,
  "kidem-tazminati": KidemHesaplayici,
  "mevduat-faizi": MevduatHesaplayici,
  "gelir-vergisi": GelirVergisiHesaplayici,
  "gunluk-kalori": KaloriHesaplayici,
  "iki-tarih-arasi": TarihFarkiHesaplayici,
  "gebelik-hesaplama": GebelikHesaplayici,
  "konut-kredisi": KonutKredisiHesaplayici,
  "elektrik-faturasi": ElektrikFaturasiHesaplayici,
  "json-formatlayici": JsonFormatlayici,
  "base64-cevirici": Base64Hesaplayici,
  "uuid-uretici": UuidHesaplayici,
  "bilesik-faiz": BilesikFaizHesaplayici,
  "uslu-karekok": UsluKarekokHesaplayici,
  "ebob-ekok": EbobEkokHesaplayici,
  "faktoriyel-permutasyon": FaktoriyelHesaplayici,
  "geometri-alan-cevre": GeometriHesaplayici,
  "sayi-tabani-cevirici": SayiTabaniHesaplayici,
  "uzunluk-cevirici": UzunlukCevirici,
  "agirlik-cevirici": AgirlikCevirici,
  "alan-cevirici": AlanCevirici,
  "hacim-cevirici": HacimCevirici,
  "hiz-cevirici": HizCevirici,
  "veri-cevirici": VeriCevirici,
  "zaman-cevirici": ZamanCevirici,
  "sicaklik-cevirici": SicaklikCevirici,
  // Sağlık
  "ideal-kilo": IdealKiloHesaplayici,
  "vucut-yag-orani": VucutYagOraniHesaplayici,
  "su-ihtiyaci": SuIhtiyaciHesaplayici,
  "protein-ihtiyaci": ProteinHesaplayici,
  "ovulasyon-takibi": OvulasyonHesaplayici,
  // Geliştirici + Metin
  "sifre-uretici": SifreUreticiHesaplayici,
  "hash-uretici": HashHesaplayici,
  "renk-cevirici": RenkCevirici,
  "karakter-sayaci": KarakterSayaciHesaplayici,
  // Vergi + Ticari
  "mtv-hesaplama": MtvHesaplayici,
  "damga-vergisi": DamgaVergisiHesaplayici,
  "emlak-vergisi": EmlakVergisiHesaplayici,
  "kira-geliri-vergisi": KiraGeliriHesaplayici,
  "kar-marji-iskonto": KarMarjiHesaplayici,
  "desi-kargo": DesiHesaplayici,
  // Zaman + Matematik
  "tarih-gun-ekle": GunEkleHesaplayici,
  "haftanin-gunu": HaftaninGunuHesaplayici,
  "hicri-takvim": HicriHesaplayici,
  "oran-oranti": OranOrantiHesaplayici,
  "istatistik-ortalama": IstatistikHesaplayici,
  "roma-rakami": RomaRakamiHesaplayici,
  "rastgele-sayi": RastgeleSayiHesaplayici,
  // Sınav
  "tyt-puan": TytPuanHesaplayici,
  "ayt-puan": AytPuanHesaplayici,
  "kpss-puan": KpssPuanHesaplayici,
  "lgs-puan": LgsPuanHesaplayici,
  "dgs-puan": DgsPuanHesaplayici,
  "yds-ales-puan": YdsAlesHesaplayici,
  // Muhasebe/Maaş
  "ihbar-tazminati": IhbarTazminatiHesaplayici,
  "fazla-mesai": FazlaMesaiHesaplayici,
  "yillik-izin": YillikIzinHesaplayici,
  "issizlik-maasi": IssizlikMaasiHesaplayici,
  "amortisman": AmortismanHesaplayici,
  "serbest-meslek-makbuzu": SerbestMeslekHesaplayici,
  // Sigorta
  "dask-hesaplama": DaskHesaplayici,
  "kasko-tahmin": KaskoHesaplayici,
  "trafik-basamak": TrafikBasamakHesaplayici,
  // Seyahat
  "elektrikli-arac-sarj": EvSarjHesaplayici,
  "taksi-ucreti": TaksiUcretHesaplayici,
  // Yaşam
  "burc-hesaplama": BurcHesaplayici,
  "kusak-hesaplama": KusakHesaplayici,
  "zekat-hesaplama": ZekatHesaplayici,
  "klima-btu": KlimaBtuHesaplayici,
  "sigara-maliyeti": SigaraHesaplayici,
  // Sağlık ek
  "bel-kalca-orani": BelKalcaHesaplayici,
};
