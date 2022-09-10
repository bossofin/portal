import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { KarZararTablosuApiResponse } from '@finanaslAnalizler/models/kar-zarar-tablosu-api-response.interface';
import { RaporApiResponse } from '@raporlar/model/rapor-api-response.interface';
import { forkJoin, map } from 'rxjs';
import { ExchangeRateApiData } from '../models/exchange-rate-api-data.interface';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}
  private getpair(from: 'USD' | 'GBP' | 'EUR') {
    return this.http.get<ExchangeRateApiData>(
      'https://api.frankfurter.app/latest',
      {
        params: {
          from,
          to: 'TRY',
        },
      }
    );
  }
  getCurrencyParis() {
    return forkJoin({
      usd: this.getpair('USD'),
      eur: this.getpair('EUR'),
      gbp: this.getpair('GBP'),
    }).pipe(
      map(
        (response: {
          eur: ExchangeRateApiData;
          gbp: ExchangeRateApiData;
          usd: ExchangeRateApiData;
        }) => {
          return {
            eur: response.eur.rates.TRY,
            gbp: response.gbp.rates.TRY,
            usd: response.usd.rates.TRY,
          };
        }
      )
    );
  }
  getChartsData(periodStart: string, periodEnd: string, companyTax: string) {
    return this.http.get<RaporApiResponse[]>(
      `${this.api}/ratioreport/${companyTax}?periodArray=${periodStart}:${periodEnd}`
    );
  }
  getProfitAndDebitData(
    periodStart: string,
    periodEnd: string,
    companyTax: string
  ) {
    return this.http.get<KarZararTablosuApiResponse[]>(
      `${this.api}/profitandlossreport/${companyTax}?periodArray=${periodStart}:${periodEnd}`
    );
  }
}
