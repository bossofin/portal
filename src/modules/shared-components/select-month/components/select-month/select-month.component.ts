import { Component, EventEmitter, OnInit } from '@angular/core';
import { months } from '@constants/months';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.scss'],
  outputs: ['onChange'],
  inputs: ['selectedPeriods', 'label', 'startMonth'],
})
export class SelectMonthComponent implements OnInit {
  startMonth: string | number;
  onChange = new EventEmitter<string | string[]>();
  label: string = 'Ay Seç';
  selectedPeriods: string[] | string = [];
  months = months;
  constructor() {}

  ngOnInit(): void {}
  onModelChange() {
    this.onChange.emit(this.selectedPeriods);
  }
  showMonth(month: string) {
    if (!this.startMonth) {
      return true;
    }
    return Number(month) >= Number(this.startMonth);
  }
}
