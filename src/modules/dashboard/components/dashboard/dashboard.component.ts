import { Component, OnDestroy, OnInit } from '@angular/core';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { Company } from '@firmalar/mdoels/company.interface';
import { RaporApiResponse } from '@raporlar/model/rapor-api-response.interface';
import { RaporItem } from '@raporlar/model/rapor-item.interface';
import { GlobalStore } from '@store/global.store';
import { forkJoin, lastValueFrom, Subscription } from 'rxjs';
import { DashboardService } from '../../business/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  selectedMonth = String(new Date().getMonth() + 1);
  selectedYear = new Date().getFullYear();
  selectedCompany: Company;
  private _chartsData: RaporApiResponse;
  public get chartsData(): RaporApiResponse {
    return this._chartsData;
  }
  public set chartsData(value: RaporApiResponse) {
    this._chartsData = value;
    if (this.chartsData) {
      this.cariOran = [makeImmutable(this.chartsData.cariOran)];
      this.borcOdemeSuresi = [makeImmutable(this.chartsData.borcOdemeSuresi)];
      this.aktifKarlilik = [makeImmutable(this.chartsData.aktifKarlilik)];
      this.faaliyetGiderlerininNetSatislaraOrani = [
        makeImmutable(this.chartsData.faaliyetGiderlerininNetSatislaraOrani),
      ];
    }
  }
  profitAndDebitData: number;
  score: number;
  cariOran: RaporItem[];
  borcOdemeSuresi: RaporItem[];
  aktifKarlilik: RaporItem[];
  faaliyetGiderlerininNetSatislaraOrani: RaporItem[];
  subscriptions: Subscription[] = [];
  constructor(
    private dashboardService: DashboardService,
    globalStore: GlobalStore
  ) {
    this.subscriptions.push(
      globalStore.selectedCompany$.subscribe((company) => {
        this.selectedCompany = company;
        if (this.selectedCompany) {
          this.getData();
        }
      })
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getSelectedYear(year: number) {
    this.selectedYear = year;
  }
  getSelectedMonth(month: string | string[]) {
    if (typeof month === 'string') {
      this.selectedMonth = month;
    }
  }
  onSearch() {
    this.getData();
  }

  private async getData() {
    const { chartsDataApi, profitAndDebitDataApi } = this.getApiRequests();
    const request$ = forkJoin({
      chartsData: chartsDataApi,
      profitAndDebitData: profitAndDebitDataApi,
    });
    const response = await lastValueFrom(request$);
    this.chartsData = response.chartsData[0];
    this.profitAndDebitData =
      response.profitAndDebitData[0].donemKariVergiVeDigerYasalYukumlulukKarsiliklari.sumOfDonemKariVergiVeDigerYasalYukumlulukKarsiliklari;
    this.setScore();
  }
  private getApiRequests() {
    const periodStart = `${this.selectedYear}-${this.selectedMonth}`;
    const chartsDataApi = this.dashboardService.getChartsData(
      periodStart,
      periodStart,
      this.selectedCompany.taxNumber
    );
    const profitAndDebitDataApi = this.dashboardService.getProfitAndDebitData(
      periodStart,
      periodStart,
      this.selectedCompany.taxNumber
    );
    return { chartsDataApi, profitAndDebitDataApi };
  }

  private setScore() {
    const values = Object.values(this.chartsData);
    let totalItem = 0;
    const totalScore: number = values.reduce((prev, cur, index) => {
      if (typeof cur === 'string') {
        return 0;
      } else {
        totalItem = totalItem + 1;
        return prev + cur.starRate;
      }
    }, 0);
    this.score = totalScore / totalItem;
  }
}
