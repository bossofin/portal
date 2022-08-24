import { Component, OnInit } from '@angular/core';
import { PeriodType } from '@shared-components/select-period/models/select-period-data.interface';

@Component({
  selector: 'app-buyume-raporu',
  templateUrl: './buyume-raporu.component.html',
  styleUrls: ['./buyume-raporu.component.scss'],
})
export class BuyumeRaporuComponent implements OnInit {
  selectedPeriodType: PeriodType;
  selectedStartYear: number;
  selectedEndYear: number;
  selectedStartMonth: string;
  selectedEndMonth: string;
  constructor() {}
  ngOnInit(): void {}
  onPeriodTypeChange(periodType: PeriodType) {
    this.selectedPeriodType = periodType;
  }
  onStartYearChange(year: number) {
    this.selectedStartYear = year;
  }
  onEndYearChange(year: number) {
    this.selectedEndYear = year;
  }
  onStartMonthChange(month: string | string[]) {
    this.selectedStartMonth = month as string;
  }
  onEndMonthChange(month: string | string[]) {
    this.selectedEndMonth = month as string;
  }
  onSearch() {
    let firstPeriodEndMonth = 0;
    let firstPeriodEndYear = this.selectedStartYear;
    let secondPeriodEndMonth = 0;
    let secondPeriodEndYear = this.selectedEndYear;
    switch (this.selectedPeriodType) {
      case 'aylik':
        firstPeriodEndMonth = Number(this.selectedStartMonth) + 1;
        secondPeriodEndMonth = Number(this.selectedEndMonth) + 1;
        break;
      case 'yillik':
        firstPeriodEndMonth = Number(this.selectedStartMonth) + 12;
        secondPeriodEndMonth = Number(this.selectedEndMonth) + 12;
        break;
      case 'ucAylik':
        firstPeriodEndMonth = Number(this.selectedStartMonth) + 3;
        secondPeriodEndMonth = Number(this.selectedEndMonth) + 3;
        break;
      case 'altiAylik':
        firstPeriodEndMonth = Number(this.selectedStartMonth) + 6;
        secondPeriodEndMonth = Number(this.selectedEndMonth) + 6;
        break;
    }
    if (firstPeriodEndMonth > 12) {
      firstPeriodEndYear = this.selectedStartYear + 1;
      firstPeriodEndMonth = firstPeriodEndMonth - 12;
    }
    if (secondPeriodEndMonth > 12) {
      secondPeriodEndYear = this.selectedEndYear + 1;
      secondPeriodEndMonth = secondPeriodEndMonth - 12;
    }
    const firstPeriodEndMonthString = String(firstPeriodEndMonth).padStart(
      2,
      '0'
    );
    const secondPeriodEndMonthString = String(secondPeriodEndMonth).padStart(
      2,
      '0'
    );
    const urlString = `firstPeriodStart=${this.selectedStartYear}-${this.selectedStartMonth}&firstPeriodEnd=${firstPeriodEndYear}-${firstPeriodEndMonthString}&secondPeriodStart=${this.selectedEndYear}-${this.selectedEndMonth}&secondPeriodEnd=${secondPeriodEndYear}-${secondPeriodEndMonthString}`;
    console.log(this.selectedPeriodType, urlString);
  }
}
