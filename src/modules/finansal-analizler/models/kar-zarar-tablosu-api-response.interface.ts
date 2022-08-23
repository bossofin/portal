export interface KarZararTablosuAmortismanGiderleriData {
  kasa900: number;
  sumOfAmortismanGiderleri: number;
}
export interface KarZararTablosuBrutSatislarData {
  kasa600: number;
  kasa601: number;
  kasa602: number;
  sumOfBrutSatislar: number;
}
export interface KarZararTablosuDigerFaalGiderVeZararlarData {
  kasa653: number;
  kasa654: number;
  kasa655: number;
  kasa656: number;
  kasa657: number;
  kasa658: number;
  kasa659: number;
  sumOfDigerFaalOlaganGiderVeZararlar: number;
}
export interface KarZararTablosuDigerFaalOlaganGiderVeKarlarData {
  kasa640: number;
  kasa641: number;
  kasa642: number;
  kasa643: number;
  kasa644: number;
  kasa645: number;
  kasa646: number;
  kasa647: number;
  kasa648: number;
  kasa649: number;
  sumOfDigerFaalOlaganGelirVeKarlar: number;
}
export interface KarZararTablosudonemKariVergiVeDigerYasalYukumlulukKarsiliklariData {
  kasa691: number;
  sumOfDonemKariVergiVeDigerYasalYukumlulukKarsiliklari: number;
}
export interface KarZararTablosufaliyetGiderleriData {
  kasa630: number;
  kasa631: number;
  kasa632: number;
  sumOfFaliyetGiderleri: number;
}
export interface KarZararTablosufinansmanGiderleriData {
  kasa660: number;
  kasa661: number;
  sumOfFinansmanGiderleri: number;
}
export interface KarZararTablosuOlagandisiGelirVeKarlarData {
  kasa671: number;
  kasa679: number;
  sumOfOlagandisiGelirVeKarlar: number;
}
export interface KarZararTablosuOlagandisiGiderVeZararlarData {
  kasa680: number;
  kasa681: number;
  kasa689: number;
  sumOfOlagandisiGiderVeZararlar: number;
}
export interface KarZararTablosuSatisIndirimleriData {
  kasa610: number;
  kasa611: number;
  kasa612: number;
  sumOfSatisIndirimleri: number;
}
export interface KarZarartablosuSatislarinMaliyetiData {
  kasa620: number;
  kasa621: number;
  kasa622: number;
  kasa623: number;
  sumOfSatislarinMaliyeti: number;
}
export interface KarZararTablosuApiResponse {
  amortismanGiderleri: KarZararTablosuAmortismanGiderleriData;
  brutSatislar: KarZararTablosuBrutSatislarData;
  digerFaalOlaganGiderVeZararlar: KarZararTablosuDigerFaalGiderVeZararlarData;
  digerFaalOlaganGelirVeKarlar: KarZararTablosuDigerFaalOlaganGiderVeKarlarData;
  donemKariVergiVeDigerYasalYukumlulukKarsiliklari: KarZararTablosudonemKariVergiVeDigerYasalYukumlulukKarsiliklariData;
  faliyetGiderleri: KarZararTablosufaliyetGiderleriData;
  finansmanGiderleri: KarZararTablosufinansmanGiderleriData;
  olagandisiGelirVeKarlar: KarZararTablosuOlagandisiGelirVeKarlarData;
  olagandisiGiderVeZararlar: KarZararTablosuOlagandisiGiderVeZararlarData;
  satisIndirimleri: KarZararTablosuSatisIndirimleriData;
  satislarinMaliyeti: KarZarartablosuSatislarinMaliyetiData;
  periodEnd: string;
  periodStart: string;
  totalOfBrutSatisKariVeyaZarari: number;
  totalOfDonemKariVeyaZarari: number;
  totalOfDonemNetKariVeyaZarari: number;
  totalOfFAVOK: number;
  totalOfFaliyetKariVeyaZarari: number;
  totalOfNetSatislar: number;
  totalOfOlaganKarVeyaZarar: number;
  percentageOfBrutSatisKariVeyaZarari: number;
  percentageOfDonemKariVeyaZarari: number;
  percentageOfDonemNetKariVeyaZarari: number;
  percentageOfFaliyetKariVeyaZarari: number;
  percentageOfOlaganKarVeyaZarar: number;
}
