import { FinansalDurumTablosuActiveData } from './finansal-durum-tablosu-active-data.interface';
import { FinansalDurumTablosuPassiveData } from './finansal-durum-tablosu-passive-data.interface';

export interface FinansalDurumTablosuApiResponse {
  aktifVarliklar: FinansalDurumTablosuActiveData;
  asanKismaIsabetEdenFinansmanGideri: number;
  finansmanGiderTutari: number;
  hesaplamadaDikkateAlinacakFinansmanGideri: number;
  kKEGOlacakFinansmanGiderleri: number;
  ozSermayeTutari: number;
  ozSermayeyiAsanKisminYabanciKaynagaOrani: number;
  ozSermayeyiAsanYabanciKaynakTutari: number;
  pasifKaynaklar: FinansalDurumTablosuPassiveData;
  periodEnd: string;
  periodStart: string;
  yabanciKaynakToplami: number;
}
