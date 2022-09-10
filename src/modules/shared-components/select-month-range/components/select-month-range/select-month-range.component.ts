import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-select-month-range',
  templateUrl: './select-month-range.component.html',
  styleUrls: ['./select-month-range.component.scss'],
  outputs: ['onSearch'],
})
export class SelectMonthRangeComponent implements OnInit {
  onSearch = new EventEmitter<{
    selectedStartMonth: string;
    selectedEndMonth: string;
  }>();
  months = [
    '2021-01',
    '2021-02',
    '2021-03',
    '2021-04',
    '2021-05',
    '2021-06',
    '2021-07',
    '2021-08',
    '2021-09',
    '2021-10',
    '2021-11',
    '2021-12',
  ];
  endMonths: string[];
  selectedStartMonth: string;
  selectedEndMonth: string;
  constructor() {}

  ngOnInit(): void {}
  onStartMonthChange(event: MatOptionSelectionChange, selectedIndex: number) {
    if (event.isUserInput) {
      this.selectedStartMonth = event.source.value;
      this.endMonths = this.months.filter(
        (month, index) => index > selectedIndex
      );
    }
  }

  onEndMonthChange(event: MatOptionSelectionChange) {
    if (event.isUserInput) {
      const value: string = event.source.value;
      const stringArray = value.split('-');
      const year = stringArray[0];
      const month = Number(stringArray[1]) - 1;

      this.selectedEndMonth = `${year}-${String(month).padStart(2, '0')}`;
    }
  }
  onSearchHandle() {
    this.onSearch.emit({
      selectedEndMonth: this.selectedEndMonth,
      selectedStartMonth: this.selectedStartMonth,
    });
  }
}
