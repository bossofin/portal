import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuyumeRaporApiResponse } from '@buyumeRaporu/models/buyume-rapor-api-response.interface';
import { addCharToStart } from '@custom-utils/add-char-to-start';
import { environment } from '@environment/environment';
import { PeriodType } from '@shared-components/select-period/models/select-period-data.interface';
import { ApiResponseContainer } from 'src/global';

@Injectable({
  providedIn: 'root',
})
export class BuyumeRaporuService {
  private api = environment.apiUrl;
  selectedEndMonth: string;
  selectedEndYear: number;
  selectedPeriodType: PeriodType;
  selectedStartMonth: string;
  selectedStartYear: number;
  constructor(private http: HttpClient) {}
  growThrateReport(companyId: string) {
    const urlString = this.createUrlString();
    return this.http.get<ApiResponseContainer<BuyumeRaporApiResponse>>(
      `${this.api}/growthratereport/${companyId}?${urlString}`
    );
  }

  private createUrlString() {
    let firstPeriodEndYear = this.selectedStartYear;
    let secondPeriodEndYear = this.selectedEndYear;
    let { firstPeriodEndMonth, secondPeriodEndMonth } = this.createMonthsString(
      Number(this.selectedStartMonth),
      Number(this.selectedEndMonth)
    );
    if (firstPeriodEndMonth > 12) {
      firstPeriodEndYear = this.selectedStartYear + 1;
      firstPeriodEndMonth = firstPeriodEndMonth - 12;
    }
    if (secondPeriodEndMonth > 12) {
      secondPeriodEndYear = this.selectedEndYear + 1;
      secondPeriodEndMonth = secondPeriodEndMonth - 12;
    }
    const firstPeriodUrlString = this.createFirstPeriodUrlString(
      firstPeriodEndMonth,
      firstPeriodEndYear
    );

    const secondPeriodUrlString = this.createSecondPeriodUrlString(
      secondPeriodEndMonth,
      secondPeriodEndYear
    );
    return `${firstPeriodUrlString}&${secondPeriodUrlString}`;
  }

  private createMonthsString(
    firstPeriodEndMonth: number,
    secondPeriodEndMonth: number
  ) {
    switch (this.selectedPeriodType) {
      case 'yillik':
        firstPeriodEndMonth = Number(this.selectedStartMonth) + 11;
        secondPeriodEndMonth = Number(this.selectedEndMonth) + 11;
        break;
      case 'ucAylik':
        firstPeriodEndMonth = Number(this.selectedStartMonth) + 2;
        secondPeriodEndMonth = Number(this.selectedEndMonth) + 2;
        break;
      case 'altiAylik':
        firstPeriodEndMonth = Number(this.selectedStartMonth) + 5;
        secondPeriodEndMonth = Number(this.selectedEndMonth) + 5;
        break;
    }
    return { firstPeriodEndMonth, secondPeriodEndMonth };
  }

  private createSecondPeriodUrlString(
    secondPeriodEndMonth: number,
    secondPeriodEndYear: number
  ) {
    const secondPeriodEndMonthString = addCharToStart(secondPeriodEndMonth);
    const secondPeriodStartString = `secondPeriodStart=${this.selectedEndYear}-${this.selectedEndMonth}`;
    const secondPeriodEndString = `secondPeriodEnd=${secondPeriodEndYear}-${secondPeriodEndMonthString}`;
    const secondPeriodUrlString = `${secondPeriodStartString}&${secondPeriodEndString}`;
    return secondPeriodUrlString;
  }

  private createFirstPeriodUrlString(
    firstPeriodEndMonth: number,
    firstPeriodEndYear: number
  ) {
    const firstPeriodEndMonthString = addCharToStart(firstPeriodEndMonth);
    const firstPeriodStartString = `firstPeriodStart=${this.selectedStartYear}-${this.selectedStartMonth}`;
    const firstPeriodEndString = `firstPeriodEnd=${firstPeriodEndYear}-${firstPeriodEndMonthString}`;
    const firstPeriodUrlString = `${firstPeriodStartString}&${firstPeriodEndString}`;
    return firstPeriodUrlString;
  }
}
