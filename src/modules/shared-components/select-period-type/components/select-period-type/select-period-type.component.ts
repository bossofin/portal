import { Component, EventEmitter, OnInit } from '@angular/core';
import { periodTypes } from '@constants/period-types';
import { PeriodType } from '@shared-components/select-period/models/select-period-data.interface';

@Component({
  selector: 'app-select-period-type',
  templateUrl: './select-period-type.component.html',
  styleUrls: ['./select-period-type.component.scss'],
  outputs: ['onChange'],
  inputs: ['selectedPeriodType'],
})
export class SelectPeriodTypeComponent implements OnInit {
  onChange = new EventEmitter<PeriodType>();
  periodTypes = periodTypes;
  selectedPeriodType: PeriodType;
  constructor() {}

  ngOnInit(): void {}
  onModelChange() {
    this.onChange.emit(this.selectedPeriodType);
  }
}
