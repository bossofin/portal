import { Component, EventEmitter, OnInit } from '@angular/core';
import { months } from '@constants/months';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.scss'],
  outputs: ['onChange'],
  inputs: ['selectedPeriods'],
})
export class SelectMonthComponent implements OnInit {
  onChange = new EventEmitter<string | string[]>();
  selectedPeriods: string[] | string = [];
  months = months;
  constructor() {}

  ngOnInit(): void {}
  onModelChange() {
    this.onChange.emit(this.selectedPeriods);
  }
}
