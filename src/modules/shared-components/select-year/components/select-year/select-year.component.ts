import { Component, EventEmitter, OnInit } from '@angular/core';
import { getYears } from '@constants/get-years';

@Component({
  selector: 'app-select-year',
  templateUrl: './select-year.component.html',
  styleUrls: ['./select-year.component.scss'],
  inputs: ['selectedYear', 'startYear', 'label'],
  outputs: ['onChange'],
})
export class SelectYearComponent implements OnInit {
  label: string = 'Yıl Seç';
  onChange = new EventEmitter<number>();
  private _startYear: number = 2010;
  public get startYear(): number {
    return this._startYear;
  }
  public set startYear(value: number) {
    this._startYear = value;
    this.years = getYears(this.startYear || 2010);
  }
  selectedYear: number;
  years: number[] = getYears();
  constructor() {}
  ngOnInit(): void {}
  onModelChange() {
    this.onChange.emit(this.selectedYear);
  }
}
