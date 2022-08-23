export interface FinansalDurumTablosuKisaVadeliYabanciKaynaklar {
  alinanAvanslar: {
    kasa340: number;
    kasa349: number;
    sumOfAlinanAvanslar: number;
  };
  borcVeGiderKarsiliklari: {
    kasa370: number;
    kasa371: number;
    kasa372: number;
    kasa373: number;
    kasa379: number;
    sumOfBorcVeGiderKarsiliklari: number;
  };
  digerBorclar: {
    kasa331: number;
    kasa332: number;
    kasa333: number;
    kasa335: number;
    kasa336: number;
    kasa337: number;
    sumOfDigerBorclar: number;
  };
  digerKisaVadeliYabanciKaynaklar: {
    kasa391: number;
    kasa392: number;
    kasa393: number;
    kasa397: number;
    kasa399: number;
    sumOfDigerKisaVadeliYabanciKaynaklar: number;
  };
  gelecekAylaraAitGiderVeGelirTahakkuklari: {
    kasa380: number;
    kasa381: number;
    sumOfkVYKGelecekAylaraAitGiderVeGelirTahakkuklari: number;
  };
  maliBorclar: {
    kasa300: number;
    kasa301: number;
    kasa302: number;
    kasa303: number;
    kasa304: number;
    kasa305: number;
    kasa306: number;
    kasa308: number;
    kasa309: number;
    sumOfMaliBorclar: number;
  };
  odenecekVergiVeDigerYukumlulukler: {
    kasa360: number;
    kasa361: number;
    kasa368: number;
    kasa369: number;
    sumOfOdenecekVergiVeDigerYukumlulukler: number;
  };
  ticariBorclar: {
    kasa320: number;
    kasa321: number;
    kasa322: number;
    kasa326: number;
    kasa329: number;
    sumOfTicariBorclar: number;
  };
  yillaraYayginInsaatVeOnarimHakedisBedelleri: {
    kasa350: number;
    kasa358: number;
    sumOfYillaraYayginInsaatVeOnarimHakedisBedelleri: number;
  };
  sumOfKisaVadeliYabanciKaynaklar: number;
}
export interface FinansalDurumTablosuOzKaynaklar {
  donemNetKarZarari: {
    kasa590: number;
    kasa591: number;
    sumOfDonemNetKarZarari: number;
  };
  gecmisYillarKarlari: {
    kasa570: number;
    sumOfGecmisYillarKarlari: number;
  };
  gecmisYillarZararlari: {
    kasa580: number;
    sumOfGgecmisYillarZararlari: number;
  };
  karYedekleri: {
    kasa540: number;
    kasa541: number;
    kasa542: number;
    kasa548: number;
    kasa549: number;
    sumOfKarYedekleri: number;
  };
  odenmisSermaye: {
    kasa500: number;
    kasa501: number;
    kasa502: number;
    kasa503: number;
    sumOfOdenmisSermaye: number;
  };
  sermayeYedekleri: {
    kasa520: number;
    kasa521: number;
    kasa522: number;
    kasa523: number;
    kasa524: number;
    kasa525: number;
    kasa526: number;
    kasa529: number;
    sumOfSermayeYedekleri: number;
  };
  sumOfOzKaynaklar: number;
}
export interface FinansalDurumTablosuUzunVadeliYabanciKaynaklar {
  alinanAvanslar: {
    kasa440: number;
    kasa449: number;
    sumOfUzunVadeliAlinanAvanslar: number;
  };
  borcVeGiderKarsiliklari: {
    kasa472: number;
    kasa479: number;
    sumOfUzunVadeliBorcVeGiderKarsiliklari: number;
  };
  digerBorclar: {
    kasa431: number;
    kasa432: number;
    kasa433: number;
    kasa436: number;
    kasa437: number;
    kasa438: number;
    sumOfUzunVadeliDigerBorclar: number;
  };
  digerUzunVadeliYabanciKaynaklar: {
    kasa492: number;
    kasa493: number;
    kasa499: number;
    sumOfDigerUzunVadeliYabanciKaynaklar: number;
  };
  gelecekYillaraAitGiderVeGelirTahakkuklari: {
    kasa480: number;
    kasa481: number;
    sumOfGelecekYillaraAitGiderVeGelirTahakkuklari: number;
  };
  maliBorclar: {
    kasa400: number;
    kasa401: number;
    kasa402: number;
    kasa405: number;
    kasa407: number;
    kasa408: number;
    kasa409: number;
    sumOfUzunVadeliMaliBorclar: number;
  };
  ticariBorclar: {
    kasa420: number;
    kasa421: number;
    kasa422: number;
    kasa426: number;
    kasa429: number;
    sumOfUzunVadeliTicariBorclar: number;
  };
  sumOfUzunVadeliYabanciKaynaklar: number;
}
export interface FinansalDurumTablosuPassiveData {
  kisaVadeliYabanciKaynaklar: FinansalDurumTablosuKisaVadeliYabanciKaynaklar;
  ozKaynaklar: FinansalDurumTablosuOzKaynaklar;
  uzunVadeliYabanciKaynaklar: FinansalDurumTablosuUzunVadeliYabanciKaynaklar;
  sumOfPasifKaynaklar: number;
}
