import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuavinSelectPeriodComponent } from './muavin-select-period.component';
import { MatIconModule } from '@angular/material/icon';
import { SelectMonthModule } from '@shared-components/select-month/select-month.module';
import { SelectYearModule } from '@shared-components/select-year/select-year.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MuavinSelectPeriodComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SelectMonthModule,
    SelectYearModule,
    MatButtonModule,
  ],
  exports: [MuavinSelectPeriodComponent],
})
export class MuavinSelectPeriodModule {}
