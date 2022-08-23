import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPeriodComponent } from './components/select-period/select-period.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SelectPeriodTypeModule } from '@shared-components/select-period-type/select-period-type.module';
import { SelectYearModule } from '@shared-components/select-year/select-year.module';
import { SelectMonthModule } from '@shared-components/select-month/select-month.module';

@NgModule({
  declarations: [SelectPeriodComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    SelectPeriodTypeModule,
    SelectYearModule,
    SelectMonthModule,
  ],
  exports: [SelectPeriodComponent],
})
export class SelectPeriodModule {}
