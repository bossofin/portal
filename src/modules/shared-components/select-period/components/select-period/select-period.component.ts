import { Component, EventEmitter, OnInit } from '@angular/core';
import { months } from '@constants/months';
import { getYears } from '@constants/get-years';
import {
  PeriodType,
  SelectPeriodData,
} from '@shared-components/select-period/models/select-period-data.interface';
import { getThreeMonthPeriod } from '@constants/get-three-month-period';
import { getSixMonthPeriod } from '@constants/get-six-month-period';

@Component({
  selector: 'app-select-period',
  templateUrl: './select-period.component.html',
  styleUrls: ['./select-period.component.scss'],
  inputs: ['multiple', 'selectedPeriods'],
  outputs: ['onSearch'],
  host: {
    class: 'd-flex',
  },
})
export class SelectPeriodComponent implements OnInit {
  maxSelectionCount: number;
  periodsThreeMonth = getThreeMonthPeriod();
  periodsSixMonth = getSixMonthPeriod();

  selectedYear: string;
  selectedPeriods: string[] | string = [];
  private _selectedPeriodType: PeriodType;
  public get selectedPeriodType(): PeriodType {
    return this._selectedPeriodType;
  }
  public set selectedPeriodType(value: PeriodType) {
    this._selectedPeriodType = value;
    this.setMaxSelectionCount();
  }

  onSearch = new EventEmitter<SelectPeriodData>();
  constructor() {}

  private setMaxSelectionCount() {
    switch (this.selectedPeriodType) {
      case 'altiAylik':
        this.maxSelectionCount = 2;
        break;
      case 'ucAylik':
        this.maxSelectionCount = 4;
        break;
      default:
        this.maxSelectionCount = undefined;
        break;
    }
  }

  ngOnInit(): void {}

  onChange(value: string | string[]) {
    this.selectedPeriods = value;
  }

  onSearchHandle() {
    this.onSearch.emit({
      periods: Array.isArray(this.selectedPeriods)
        ? this.selectedPeriods
        : [this.selectedPeriods],
      periodType: this.selectedPeriodType,
      selectedYear: this.selectedYear,
    });
  }

  disablePeriod(period: string) {
    if (!this.selectedPeriods) {
      return false;
    }
    return this.isSelectedPeriodMax() && this.isPeriodNotSelected(period);
  }

  private isPeriodNotSelected(period: string) {
    return !this.selectedPeriods.includes(period);
  }

  private isSelectedPeriodMax() {
    return this.selectedPeriods.length === this.maxSelectionCount;
  }

  onPeriodTypeChnage(periodType: PeriodType) {
    this.selectedPeriodType = periodType;
  }

  onYearChange(selectedYear: string) {
    this.selectedYear = selectedYear;
  }

  onMonthChange(selectedPeriods: string | string[]) {
    this.selectedPeriods = selectedPeriods;
  }
}
