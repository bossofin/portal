import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUrlStringByThreePeriods } from '@custom-utils/create-url-string-by-periods.util';
import { environment } from '@environment/environment';
import { FinansalDurumTablosuApiResponse } from '@finanaslAnalizler/models/finansal-durum-tablosu-api-response.interface';
import { KarZararTablosuApiResponse } from '@finanaslAnalizler/models/kar-zarar-tablosu-api-response.interface';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
import { SelectPeriodReturnData } from '@shared-components/select-period/models/select-period-return-data.class';

@Injectable({
  providedIn: 'root',
})
export class FinansalAnalizlerService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getDetailedBalance(
    selectedPeriodData: SelectPeriodData,
    vkn: string = '6490519109'
  ) {
    const selectedPeriodsUrlString = new SelectPeriodReturnData(
      selectedPeriodData
    ).getURLString();
    return this.http.get<FinansalDurumTablosuApiResponse[]>(
      `${this.api}/detailedbalance/${vkn}?${selectedPeriodsUrlString}`
    );
  }

  getProfitAndlossReport(
    selectedPeriodData: SelectPeriodData,
    vkn: string = '6490519109'
  ) {
    const selectedPeriodsUrlString = new SelectPeriodReturnData(
      selectedPeriodData
    ).getURLString();
    return this.http.get<KarZararTablosuApiResponse[]>(
      `${this.api}/profitandlossreport/${vkn}?${selectedPeriodsUrlString}`
    );
  }
}
