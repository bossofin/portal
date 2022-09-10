import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaporlarHomeRoutingModule } from './raporlar-home-routing.module';
import { RaporlarHomeComponent } from './components/raporlar-home/raporlar-home.component';
import { SelectPeriodModule } from '@shared-components/select-period/select-period.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RaporlarHomeComponent],
  imports: [
    CommonModule,
    RaporlarHomeRoutingModule,
    SelectPeriodModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class RaporlarHomeModule {}
