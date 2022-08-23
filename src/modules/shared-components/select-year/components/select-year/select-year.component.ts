import { Component, EventEmitter, OnInit } from '@angular/core';
import { getYears } from '@constants/get-years';

@Component({
  selector: 'app-select-year',
  templateUrl: './select-year.component.html',
  styleUrls: ['./select-year.component.scss'],
  inputs: ['selectedYear'],
  outputs: ['onChange'],
})
export class SelectYearComponent implements OnInit {
  onChange = new EventEmitter<string>();
  selectedYear: string;
  years = getYears();
  constructor() {}
  ngOnInit(): void {}
  onModelChange() {
    this.onChange.emit(this.selectedYear);
  }
}
