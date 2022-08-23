import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPeriodTypeComponent } from './components/select-period-type/select-period-type.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectPeriodTypeComponent],
  imports: [CommonModule, MatSelectModule, FormsModule],
  exports: [SelectPeriodTypeComponent],
})
export class SelectPeriodTypeModule {}
