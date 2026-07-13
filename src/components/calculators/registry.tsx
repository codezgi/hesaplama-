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
// Hukuki
import { YasalFaizHesaplayici } from "./yasal-faiz";
import { ArabuluculukHesaplayici } from "./arabuluculuk";
import { TapuHarciHesaplayici } from "./tapu-harci";
import { KiraArtisHesaplayici } from "./kira-artis";
// Bebek gelişimi
import { BebekBuyumeHesaplayici } from "./bebek-buyume";
import { BebekUykuHesaplayici } from "./bebek-uyku";
// Muhasebe ek
import { YollukHesaplayici } from "./yolluk";
import { DogumIzniHesaplayici } from "./dogum-izni";
// Sınav ek
import { TusPuanHesaplayici } from "./tus-puan";
// Geliştirici ek
import { RenkKontrastHesaplayici } from "./renk-kontrast";
// Sınav ek 2
import { MsuPuanHesaplayici } from "./msu-puan";
import { EhliyetHesaplayici } from "./ehliyet";
// Finansal ek
import { IbanHesaplayici } from "./iban";
import { NpvHesaplayici } from "./npv";
import { EnflasyonHesaplayici } from "./enflasyon";
// Sağlık ek 2
import { AlkolPromilHesaplayici } from "./alkol-promil";
import { SigaraBirakmaHesaplayici } from "./sigara-birakma";
// Ev-Yaşam ek
import { SuFaturasiHesaplayici } from "./su-faturasi";
import { DogalgazFaturasiHesaplayici } from "./dogalgaz";
// Ticari ek
import { VadeFarkiHesaplayici } from "./vade-farki";
// Matematik ek 2
import { DenklemCozucuHesaplayici } from "./denklem-cozucu";
import { LotoIhtimaliHesaplayici } from "./loto-ihtimali";
// Sınav ek 3
import { EkpssPuanHesaplayici } from "./ekpss-puan";
import { PmyoPuanHesaplayici } from "./pmyo-puan";
// Sağlık ek 3
import { YasamBeklentisiHesaplayici } from "./yasam-beklentisi";
import { KalpAtisHesaplayici } from "./kalp-atis";
import { AdetTakvimiHesaplayici } from "./adet-takvimi";
// Finansal ek 2
import { BilesikKatkiHesaplayici } from "./bilesik-katki";
import { RoiHesaplayici } from "./roi";
import { IrrHesaplayici } from "./irr";
// Tarih ek
import { YildonumuHesaplayici } from "./yildonumu";
import { ZamanDilimiHesaplayici } from "./zaman-dilimi";
// Yaşam + Matematik ek
import { KararMatrisiHesaplayici } from "./karar-matrisi";
import { DogumGunuParadoksuHesaplayici } from "./dogum-gunu-paradoksu";
// Ek batch
import { SayiYaziHesaplayici } from "./sayi-yazi";
import { FaturaHesaplayici } from "./fatura";
import { BmrHarrisHesaplayici } from "./bmr-harris";
import { CocukBoyHesaplayici } from "./cocuk-boy";
import { AsiTakvimiHesaplayici } from "./asi-takvimi";
import { SutIzniHesaplayici } from "./sut-izni";
// 200 hedefi batch
import { YuruyusKaloriHesaplayici } from "./yuruyus-kalori";
import { KosuTempoHesaplayici } from "./kosu-tempo";
import { TansiyonHesaplayici } from "./tansiyon";
import { KolesterolHesaplayici } from "./kolesterol";
import { BelBoyHesaplayici } from "./bel-boy";
import { Vo2MaxHesaplayici } from "./vo2max";
import { KarbonAyakHesaplayici } from "./karbon-ayak";
import { YakitTasarrufHesaplayici } from "./yakit-tasarruf";
import { LpgHesaplayici } from "./lpg";
import { KaskoDegerHesaplayici } from "./kasko-deger";
import { TaksKaksHesaplayici } from "./taks-kaks";
import { BoyaHesaplayici } from "./boya";
import { KombiGucHesaplayici } from "./kombi-guc";
import { BeyazEsyaHesaplayici } from "./beyaz-esya";
import { SeyahatSigortasiHesaplayici } from "./seyahat-sigortasi";
import { HayatSigortasiHesaplayici } from "./hayat-sigortasi";
import { KkAsgariHesaplayici } from "./kk-asgari";
import { NafakaHesaplayici } from "./nafaka";
import { MirasHesaplayici } from "./miras";
import { InsaatMaliyetHesaplayici } from "./insaat-maliyet";
import { TrigonometriHesaplayici } from "./trigonometri";
import { KarisimHesaplayici } from "./karisim";
import { EvMenzilHesaplayici } from "./ev-menzil";

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
  // Hukuki
  "yasal-faiz": YasalFaizHesaplayici,
  "arabuluculuk-ucreti": ArabuluculukHesaplayici,
  "tapu-harci": TapuHarciHesaplayici,
  "kira-artis-tavani": KiraArtisHesaplayici,
  // Bebek gelişimi
  "bebek-buyume-takibi": BebekBuyumeHesaplayici,
  "bebek-uyku-ihtiyaci": BebekUykuHesaplayici,
  // Muhasebe ek
  "yolluk-harcirah": YollukHesaplayici,
  "dogum-izni": DogumIzniHesaplayici,
  // Sınav ek
  "tus-puan": TusPuanHesaplayici,
  // Geliştirici ek
  "renk-kontrast": RenkKontrastHesaplayici,
  // Sınav ek 2
  "msu-puan": MsuPuanHesaplayici,
  "ehliyet-sinavi": EhliyetHesaplayici,
  // Finansal ek
  "iban-dogrulama": IbanHesaplayici,
  "npv-hesaplama": NpvHesaplayici,
  "enflasyon-guncelleme": EnflasyonHesaplayici,
  // Sağlık ek 2
  "alkol-promil": AlkolPromilHesaplayici,
  "sigara-birakma": SigaraBirakmaHesaplayici,
  // Ev-Yaşam ek
  "su-faturasi": SuFaturasiHesaplayici,
  "dogalgaz-faturasi": DogalgazFaturasiHesaplayici,
  // Ticari ek
  "vade-farki-senet": VadeFarkiHesaplayici,
  // Matematik ek 2
  "denklem-cozucu": DenklemCozucuHesaplayici,
  "loto-ihtimali": LotoIhtimaliHesaplayici,
  // Sınav ek 3
  "ekpss-puan": EkpssPuanHesaplayici,
  "pmyo-puan": PmyoPuanHesaplayici,
  // Sağlık ek 3
  "yasam-beklentisi": YasamBeklentisiHesaplayici,
  "kalp-atis-zonlari": KalpAtisHesaplayici,
  "adet-takvimi": AdetTakvimiHesaplayici,
  // Finansal ek 2
  "bilesik-faiz-katki": BilesikKatkiHesaplayici,
  "roi-hesaplama": RoiHesaplayici,
  "irr-hesaplama": IrrHesaplayici,
  // Tarih ek
  "yildonumu-sayaci": YildonumuHesaplayici,
  "zaman-dilimi-farki": ZamanDilimiHesaplayici,
  // Yaşam + Matematik ek
  "karar-matrisi": KararMatrisiHesaplayici,
  "dogum-gunu-paradoksu": DogumGunuParadoksuHesaplayici,
  // Ek batch
  "sayi-yazi-cevirici": SayiYaziHesaplayici,
  "fatura-hesaplama": FaturaHesaplayici,
  "bmr-harris-benedict": BmrHarrisHesaplayici,
  "cocuk-boy-tahmini": CocukBoyHesaplayici,
  "asi-takvimi": AsiTakvimiHesaplayici,
  "sut-izni": SutIzniHesaplayici,
  // 200 hedefi
  "yuruyus-kalori": YuruyusKaloriHesaplayici,
  "kosu-tempo": KosuTempoHesaplayici,
  "tansiyon-kategori": TansiyonHesaplayici,
  "kolesterol-kategori": KolesterolHesaplayici,
  "bel-boy-orani": BelBoyHesaplayici,
  "vo2max": Vo2MaxHesaplayici,
  "karbon-ayak-izi": KarbonAyakHesaplayici,
  "yakit-tasarruf": YakitTasarrufHesaplayici,
  "lpg-donusum": LpgHesaplayici,
  "kasko-deger-kaybi": KaskoDegerHesaplayici,
  "taks-kaks-emsal": TaksKaksHesaplayici,
  "boya-miktari": BoyaHesaplayici,
  "kombi-guc": KombiGucHesaplayici,
  "beyaz-esya-elektrik": BeyazEsyaHesaplayici,
  "seyahat-sigortasi": SeyahatSigortasiHesaplayici,
  "hayat-sigortasi": HayatSigortasiHesaplayici,
  "kredi-karti-asgari": KkAsgariHesaplayici,
  "nafaka": NafakaHesaplayici,
  "miras-paylari": MirasHesaplayici,
  "insaat-maliyet": InsaatMaliyetHesaplayici,
  "trigonometri": TrigonometriHesaplayici,
  "karisim-problemi": KarisimHesaplayici,
  "elektrikli-arac-menzil": EvMenzilHesaplayici,
};

// 200 hedefine son sprint imports
import { YumurtaHesaplayici } from "./yumurta";
import { UykuDonguHesaplayici } from "./uyku-dongu";
import { ZayiflamaHesaplayici } from "./zayiflama";
import { IlacKatilimHesaplayici } from "./ilac-katilim";
import { EmeklilikYasiHesaplayici } from "./emeklilik-yasi";
import { ReelGetiriHesaplayici } from "./reel-getiri";
import { BirikimSureHesaplayici } from "./birikim-sure";
import { SuTarifeKademeHesaplayici } from "./su-tarife";
import { KlimaSaatlikHesaplayici } from "./klima-saatlik";
import { KdvTevkifatHesaplayici } from "./kdv-tevkifat";
import { ItirazSureHesaplayici } from "./itiraz-sure";
import { RamazanSayacHesaplayici } from "./ramazan-sayac";
import { KagitBoyutuHesaplayici } from "./kagit-boyutu";
import { MetinOkumaHesaplayici } from "./metin-okuma";
import { PisagorHesaplayici } from "./pisagor";
import { DetayYasHesaplayici } from "./detay-yas";
import { YasProblemHesaplayici } from "./yas-problem";
import { YksDilHesaplayici } from "./yks-dil";
import { IyosHesaplayici } from "./iyos";

// Son sprint 40+
import { DpiHesaplayici } from "./dpi";
import { FontDonusumHesaplayici } from "./font-donusum";
import { ForwardKurHesaplayici } from "./forward-kur";
import { KekMalzemeHesaplayici } from "./kek-malzeme";
import { OtoparkHesaplayici } from "./otopark";
import { TrafikIndirimHesaplayici } from "./trafik-indirim";
import { KmMaliyetHesaplayici } from "./km-maliyet";
import { BahceSuHesaplayici } from "./bahce-su";
import {
  HacimBirimiHesaplayici, KarekokHesaplayici, LogaritmaHesaplayici, BasitFaizHesaplayici,
  SicaklikMiniHesaplayici, BmiMiniHesaplayici, YasFarkiHesaplayici, PizzaHesaplayici,
  DeriMiktarHesaplayici, GsmTarifeHesaplayici,
} from "./mini";
import {
  DogumGunuKalanHesaplayici, AlkolKaloriHesaplayici, ParaKatlamaHesaplayici,
  KiloBirimiHesaplayici, KombinBasitHesaplayici, MerdivenKaloriHesaplayici,
  SuRehberHesaplayici, AyakkabiBedenHesaplayici, YuzukOlcuHesaplayici, BahsisHesaplayici,
} from "./mini2";
import {
  YagmurHesaplayici, LedTasarrufHesaplayici, IdealBmi22Hesaplayici, CokluKurHesaplayici,
  KekKaloriHesaplayici, KuraCekimHesaplayici, GelecektekiYasHesaplayici, AnketOranHesaplayici,
  CidrHesaplayici, DamacanaHesaplayici,
} from "./mini3";
// Şans & Karar (etkileşimli, tıklanmayı artırıcı)
import { KararCarkiHesaplayici } from "./karar-carki";
import { YaziTuraHesaplayici } from "./yazi-tura";
import { ZarAtHesaplayici } from "./zar-at";
import { NeYiyeyimHesaplayici } from "./ne-yiyeyim";
import { TasKagitMakasHesaplayici } from "./tas-kagit";
// Popüler (hesaplama.net'te olmayan Türk pazarı hitleri)
import {
  AylikButceHesaplayici, KiralaVsSatinAlHesaplayici, FreelanceUcretHesaplayici,
  EmeklilikFonHesaplayici, KiraGelirOranHesaplayici, KykGeriOdemeHesaplayici,
  BesHesaplayici, DepozitoIadeHesaplayici,
} from "./populer";
// Bilimsel + Kompleks
import { FormulIfadeHesaplayici } from "./formul-ifade";
import { DenkSistem2Hesaplayici, DenkSistem3Hesaplayici } from "./denk-sistem";
import { Matris2Hesaplayici } from "./matris";
import { Vektor3DHesaplayici } from "./vektor-3d";
import { KompleksSayiHesaplayici } from "./kompleks-sayi";
import { NewtonHareketHesaplayici, OhmWattHesaplayici } from "./fizik";
import { FonksiyonTabloHesaplayici } from "./fonksiyon-tablo";
import { TurevIntegralHesaplayici } from "./turev-integral";
import { MolariteHesaplayici, PhHesaplayici, EoqHesaplayici, ToplamHesapBolusHesaplayici, KonutTopMaliyetHesaplayici } from "./kimya-kompleks";
import { GrafikCiziciHesaplayici } from "./grafik-cizici";
import { TurevIntegralGrafikHesaplayici } from "./turev-integral-grafik";
import { SayisalTurevHesaplayici, BelirliIntegralHesaplayici, RiemannGorselHesaplayici, KokBulucuHesaplayici, TaylorSerisiHesaplayici, LimitHesaplayici } from "./sayisal-analiz";
import {
  DcaKriptoHesaplayici, ReklamMetrikleriHesaplayici, WpmTestHesaplayici,
  KitapBitisHesaplayici, IsitmaKiyasHesaplayici, HaliM2Hesaplayici,
  UlasimKartHesaplayici, AudioSureHesaplayici,
} from "./yeni-batch";

Object.assign(calculatorComponents, {
  "yumurta-pisirme": YumurtaHesaplayici,
  "uyku-dongu": UykuDonguHesaplayici,
  "zayiflama-sure": ZayiflamaHesaplayici,
  "ilac-katilim-payi": IlacKatilimHesaplayici,
  "emeklilik-yasi": EmeklilikYasiHesaplayici,
  "reel-getiri": ReelGetiriHesaplayici,
  "birikim-hedef-suresi": BirikimSureHesaplayici,
  "su-tarife-kademe": SuTarifeKademeHesaplayici,
  "klima-saatlik-elektrik": KlimaSaatlikHesaplayici,
  "kdv-tevkifat": KdvTevkifatHesaplayici,
  "itiraz-suresi": ItirazSureHesaplayici,
  "ramazan-sayaci": RamazanSayacHesaplayici,
  "kagit-boyutlari": KagitBoyutuHesaplayici,
  "metin-okuma-suresi": MetinOkumaHesaplayici,
  "pisagor-teoremi": PisagorHesaplayici,
  "kac-yasindayim": DetayYasHesaplayici,
  "yas-problemi": YasProblemHesaplayici,
  "yks-dil-puan": YksDilHesaplayici,
  "iyos-puan": IyosHesaplayici,
  "dpi-piksel": DpiHesaplayici,
  "font-donusum": FontDonusumHesaplayici,
  "forward-kur": ForwardKurHesaplayici,
  "kek-malzeme": KekMalzemeHesaplayici,
  "otopark-ucret": OtoparkHesaplayici,
  "trafik-cezasi-indirim": TrafikIndirimHesaplayici,
  "km-basi-yakit": KmMaliyetHesaplayici,
  "bahce-su-ihtiyaci": BahceSuHesaplayici,
  "hacim-birim-hizli": HacimBirimiHesaplayici,
  "karekok-hesap": KarekokHesaplayici,
  "logaritma": LogaritmaHesaplayici,
  "basit-faiz": BasitFaizHesaplayici,
  "sicaklik-hizli": SicaklikMiniHesaplayici,
  "bmi-hizli": BmiMiniHesaplayici,
  "yas-farki-iki-kisi": YasFarkiHesaplayici,
  "pizza-dilim": PizzaHesaplayici,
  "deri-miktar": DeriMiktarHesaplayici,
  "gsm-tarife": GsmTarifeHesaplayici,
  "dogum-gunune-kalan": DogumGunuKalanHesaplayici,
  "alkol-kalori": AlkolKaloriHesaplayici,
  "para-katlama-72": ParaKatlamaHesaplayici,
  "kilo-birim-hizli": KiloBirimiHesaplayici,
  "kombin-basit": KombinBasitHesaplayici,
  "merdiven-kalori": MerdivenKaloriHesaplayici,
  "su-rehberi": SuRehberHesaplayici,
  "ayakkabi-beden": AyakkabiBedenHesaplayici,
  "yuzuk-olcusu": YuzukOlcuHesaplayici,
  "bahsis": BahsisHesaplayici,
  "yagmur-litre": YagmurHesaplayici,
  "led-tasarruf": LedTasarrufHesaplayici,
  "ideal-kilo-bmi22": IdealBmi22Hesaplayici,
  "coklu-kur": CokluKurHesaplayici,
  "kek-kalori": KekKaloriHesaplayici,
  "kura-cekimi": KuraCekimHesaplayici,
  "gelecekteki-yas": GelecektekiYasHesaplayici,
  "anket-oran": AnketOranHesaplayici,
  "cidr-alt-ag": CidrHesaplayici,
  "damacana-suresi": DamacanaHesaplayici,
  // Şans & Karar
  "karar-carki": KararCarkiHesaplayici,
  "yazi-tura": YaziTuraHesaplayici,
  "zar-at": ZarAtHesaplayici,
  "ne-yiyeyim": NeYiyeyimHesaplayici,
  "tas-kagit-makas": TasKagitMakasHesaplayici,
  // Popüler Türk pazarı
  "aylik-butce-50-30-20": AylikButceHesaplayici,
  "kirala-vs-satin-al": KiralaVsSatinAlHesaplayici,
  "freelance-saatlik-ucret": FreelanceUcretHesaplayici,
  "emeklilik-fon-hedefi": EmeklilikFonHesaplayici,
  "kira-gelir-orani": KiraGelirOranHesaplayici,
  "kyk-geri-odeme": KykGeriOdemeHesaplayici,
  "bes-devlet-katkisi": BesHesaplayici,
  "depozito-iade": DepozitoIadeHesaplayici,
  // Bilimsel + Kompleks
  "formul-ifade": FormulIfadeHesaplayici,
  "denklem-sistemi-2x2": DenkSistem2Hesaplayici,
  "denklem-sistemi-3x3": DenkSistem3Hesaplayici,
  "matris-2x2": Matris2Hesaplayici,
  "vektor-3d": Vektor3DHesaplayici,
  "kompleks-sayi": KompleksSayiHesaplayici,
  "newton-hareket": NewtonHareketHesaplayici,
  "ohm-watt": OhmWattHesaplayici,
  "fonksiyon-tablo": FonksiyonTabloHesaplayici,
  "turev-integral": TurevIntegralHesaplayici,
  "molarite": MolariteHesaplayici,
  "ph-hesaplama": PhHesaplayici,
  "eoq-siparis": EoqHesaplayici,
  "toplu-hesap-bolustur": ToplamHesapBolusHesaplayici,
  "konut-toplam-maliyet": KonutTopMaliyetHesaplayici,
  // 240+ hedef
  "grafik-cizici": GrafikCiziciHesaplayici,
  "dca-kripto": DcaKriptoHesaplayici,
  "reklam-metrikleri": ReklamMetrikleriHesaplayici,
  "wpm-test": WpmTestHesaplayici,
  "kitap-bitis-suresi": KitapBitisHesaplayici,
  "isitma-kiyas": IsitmaKiyasHesaplayici,
  "hali-m2": HaliM2Hesaplayici,
  "ulasim-kart-vs-bilet": UlasimKartHesaplayici,
  "podcast-hiz": AudioSureHesaplayici,
  // Türev/İntegral/Grafik/Analiz
  "turev-integral-grafik": TurevIntegralGrafikHesaplayici,
  "sayisal-turev": SayisalTurevHesaplayici,
  "belirli-integral": BelirliIntegralHesaplayici,
  "riemann-toplami": RiemannGorselHesaplayici,
  "kok-bulucu": KokBulucuHesaplayici,
  "taylor-serisi": TaylorSerisiHesaplayici,
  "limit-hesaplama": LimitHesaplayici,
});
