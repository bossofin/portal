import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaporlarHomeRoutingModule } from './raporlar-home-routing.module';
import { RaporlarHomeComponent } from './components/raporlar-home/raporlar-home.component';
import { SelectPeriodModule } from '@shared-components/select-period/select-period.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SelectCompanyModule } from '@shared-components/select-company/select-company.module';

@NgModule({
  declarations: [RaporlarHomeComponent],
  imports: [
    CommonModule,
    RaporlarHomeRoutingModule,
    SelectPeriodModule,
    MatSelectModule,
    FormsModule,
    SelectCompanyModule,
  ],
})
export class RaporlarHomeModule {}
