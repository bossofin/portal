export interface FinansalDurumTablosuDonenVarliklar {
  digerAlacaklar: {
    kasa131: number;
    kasa132: number;
    kasa133: number;
    kasa135: number;
    kasa136: number;
    kasa137: number;
    kasa138: number;
    kasa139: number;
    sumOfDigerAlacaklar: number;
  };
  digerDonenVarliklar: {
    kasa190: number;
    kasa191: number;
    kasa192: number;
    kasa193: number;
    kasa195: number;
    kasa196: number;
    kasa197: number;
    kasa198: number;
    kasa199: number;
    sumOfDigerDonenVarliklar: number;
  };
  gelecekAylaraAitGiderVeGelirTahakkuklari: {
    kasa180: number;
    kasa181: number;
    sumOfGelecekAylaraAitGiderVeGelirTahakkuklari: number;
  };
  hazirDegerler: {
    kasa100: number;
    kasa101: number;
    kasa102: number;
    kasa103: number;
    kasa108: number;
    sumOfHazirDegerler: number;
  };
  menkulKiymetler: {
    kasa110: number;
    kasa111: number;
    kasa112: number;
    kasa118: number;
    kasa119: number;
    sumOfMenkulKiymetler: number;
  };
  stoklar: {
    kasa150: number;
    kasa151: number;
    kasa152: number;
    kasa153: number;
    kasa157: number;
    kasa158: number;
    kasa159: number;
    sumOfStoklar: number;
  };
  ticariAlacaklar: {
    kasa120: number;
    kasa121: number;
    kasa122: number;
    kasa124: number;
    kasa126: number;
    kasa127: number;
    kasa128: number;
    kasa129: number;
    sumOfTicariAlacaklar: number;
  };
  yillaraYayginInsaatVeOnarimMaliyetleri: {
    kasa170: number;
    kasa178: number;
    kasa179: number;
    sumOfYillaraYayginInsaatVeOnarimMaliyetleri: number;
  };
  sumOfDonenVarliklar: number;
}
export interface FinansalDurumTablosuDuranVarliklar {
  digerAlacaklar: {
    kasa231: number;
    kasa232: number;
    kasa233: number;
    kasa235: number;
    kasa236: number;
    kasa237: number;
    kasa239: number;
    sumOfigerAlacaklar: number;
  };
  gelecekYillaraAitGiderlerVeGelirlerTahakkuklari: {
    kasa280: number;
    kasa281: number;
    kasa291: number;
    kasa292: number;
    kasa293: number;
    kasa294: number;
    kasa295: number;
    kasa296: number;
    kasa297: number;
    kasa298: number;
    kasa299: number;
    sumOfGelecekYillaraAitGiderlerVeGelirlerTahakkuklari: number;
  };
  maddiDuranVarliklar: {
    kasa250: number;
    kasa251: number;
    kasa252: number;
    kasa253: number;
    kasa254: number;
    kasa255: number;
    kasa256: number;
    kasa257: number;
    kasa258: number;
    kasa259: number;
    sumOfMaddiDuranVarliklar: number;
  };
  maddiOlmayanDuranVarliklar: {
    kasa260: number;
    kasa261: number;
    kasa262: number;
    kasa263: number;
    kasa264: number;
    kasa267: number;
    kasa268: number;
    kasa269: number;
    sumOfMaddiOlmayanDuranVarliklar: number;
  };
  maliDuranVarliklar: {
    kasa240: number;
    kasa241: number;
    kasa242: number;
    kasa243: number;
    kasa244: number;
    kasa245: number;
    kasa246: number;
    kasa247: number;
    kasa248: number;
    kasa249: number;
    sumOfMaliDuranVarliklar: number;
  };
  ozelTukenmeyeTabiVarliklar: {
    kasa271: number;
    kasa272: number;
    kasa277: number;
    kasa278: number;
    kasa279: number;
    sumOfOzelTukenmeyeTabiVarliklar: number;
  };
  ticariAlacaklar: {
    kasa220: number;
    kasa221: number;
    kasa222: number;
    kasa224: number;
    kasa226: number;
    kasa229: number;
    sumOfTicariAlacaklar: number;
  };
  sumOfDuranVarliklar: number;
}
export interface FinansalDurumTablosuActiveData {
  donenVarliklar: FinansalDurumTablosuDonenVarliklar;
  duranVarliklar: FinansalDurumTablosuDuranVarliklar;
  sumOfAktifVarliklar: number;
}
