import { Component, OnDestroy, OnInit } from '@angular/core';
import { BuyumeRaporuService } from '@buyumeRaporu/business/buyume-raporu.service';
import { Company } from '@firmalar/mdoels/company.interface';
import { RaporItem } from '@raporlar/model/rapor-item.interface';
import { PeriodType } from '@shared-components/select-period/models/select-period-data.interface';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-buyume-raporu',
  templateUrl: './buyume-raporu.component.html',
  styleUrls: ['./buyume-raporu.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class BuyumeRaporuComponent implements OnInit, OnDestroy {
  reportList = [
    {
      name: 'Satışın Büyümesi',
      value: 'satisinBuyumesi',
    },
    {
      name: 'Kar Büyümesi',
      value: 'karBuyumesi',
    },
  ];
  selectedReport: string;
  selectedPeriodType: PeriodType;
  selectedStartYear: number;
  selectedStartMonth: string;
  selectedEndYear: number;
  selectedEndMonth: string;
  selectedPeriod: string[];
  karBuyumesi: RaporItem;
  satisinBuyumesi: RaporItem;
  subscriptions: Subscription[] = [];
  selectedCompany: Company;
  constructor(
    private buyumeRaporuService: BuyumeRaporuService,
    globalStore: GlobalStore
  ) {
    this.subscriptions.push(
      globalStore.selectedCompany$.subscribe((company) => {
        this.selectedCompany = company;
        this.onSearch();
      })
    );
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  onPeriodTypeChange(periodType: PeriodType) {
    this.selectedPeriodType = periodType;
    this.buyumeRaporuService.selectedPeriodType = this.selectedPeriodType;
  }
  onStartYearChange(year: number) {
    this.selectedStartYear = year;
    this.buyumeRaporuService.selectedStartYear = this.selectedStartYear;
  }
  onEndYearChange(year: number) {
    this.selectedEndYear = year;
    this.buyumeRaporuService.selectedEndYear = this.selectedEndYear;
  }
  onStartMonthChange(month: string | string[]) {
    this.selectedStartMonth = month as string;
    this.buyumeRaporuService.selectedStartMonth = this.selectedStartMonth;
  }
  onEndMonthChange(month: string | string[]) {
    this.selectedEndMonth = month as string;
    this.buyumeRaporuService.selectedEndMonth = this.selectedEndMonth;
  }
  async onSearch() {
    if (!this.selectedStartYear || !this.selectedStartMonth) {
      return;
    }
    this.selectedPeriod = [
      `${this.selectedStartYear}-${this.selectedStartMonth}`,
      `${this.selectedEndYear}-${this.selectedEndMonth}`,
    ];

    const request$ = this.buyumeRaporuService.growThrateReport(
      this.selectedCompany.taxNumber
    );
    const response = await lastValueFrom(request$);
    this.karBuyumesi = response.karBuyumesi;
    this.satisinBuyumesi = response.satisBuyumesi;
  }
}
