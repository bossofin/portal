import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-muavin-select-period',
  templateUrl: './muavin-select-period.component.html',
  styleUrls: ['./muavin-select-period.component.scss'],
  outputs: ['onChange'],
})
export class MuavinSelectPeriodComponent implements OnInit {
  onChange = new EventEmitter<{
    selectedStartYear: number;
    selectedStartMonth: number;
    selectedEndtYear: number;
    selectedEndtMonth: number;
  }>();
  selectedStartYear: number;
  selectedStartMonth: number;
  selectedEndtYear: number;
  selectedEndtMonth: number;
  constructor() {}

  ngOnInit(): void {}
  onStartYearChange(value: number) {
    this.selectedStartYear = value;
  }
  onStartMonthChange(value: string | string[]) {
    if (!(value instanceof Array)) {
      this.selectedStartMonth = Number(value);
    }
  }
  onEndYearChange(value: number) {
    this.selectedEndtYear = value;
  }
  onEndMonthChange(value: string | string[]) {
    if (!(value instanceof Array)) {
      this.selectedEndtMonth = Number(value);
    }
  }
  onSearchHandle() {
    this.onChange.emit({
      selectedEndtMonth: this.selectedEndtMonth,
      selectedEndtYear: this.selectedEndtYear,
      selectedStartMonth: this.selectedStartMonth,
      selectedStartYear: this.selectedStartYear,
    });
  }
}
