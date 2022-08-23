import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMonthRangeComponent } from './components/select-month-range/select-month-range.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SelectMonthRangeComponent],
  imports: [CommonModule, MatSelectModule, MatIconModule, MatButtonModule],
  exports: [SelectMonthRangeComponent],
})
export class SelectMonthRangeModule {}
