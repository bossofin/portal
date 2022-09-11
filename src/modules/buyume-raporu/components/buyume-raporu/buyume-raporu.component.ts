import { Component, OnInit } from '@angular/core';
import { BuyumeRaporuService } from '@buyumeRaporu/business/buyume-raporu.service';
import { SelectCompany } from '@globalModels/select-company.abstract.class';
import { RaporItem } from '@raporlar/model/rapor-item.interface';
import { PeriodType } from '@shared-components/select-period/models/select-period-data.interface';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-buyume-raporu',
  templateUrl: './buyume-raporu.component.html',
  styleUrls: ['./buyume-raporu.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class BuyumeRaporuComponent extends SelectCompany implements OnInit {
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
  constructor(
    private buyumeRaporuService: BuyumeRaporuService,
    globalStore: GlobalStore
  ) {
    super(globalStore);
  }
  onCompanySelect(): void {
    this.onSearch();
  }
  ngOnInit(): void {}

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
    this.selectedStartMonth = String(month).padStart(2, '0');
    this.buyumeRaporuService.selectedStartMonth = this.selectedStartMonth;
  }
  onEndMonthChange(month: string | string[]) {
    this.selectedEndMonth = String(month).padStart(2, '0');
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
