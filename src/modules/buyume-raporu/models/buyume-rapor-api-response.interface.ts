import { chartStaticData } from '@constants/reports/static-data';
import { RaporItem } from '@raporlar/model/rapor-item.interface';

export interface BuyumeRaporApiResponse {
  karBuyumesi: RaporItem;
  satisBuyumesi: RaporItem;
}

export type buyumeOraniChartType = keyof typeof chartStaticData.buyumeRaporu;
