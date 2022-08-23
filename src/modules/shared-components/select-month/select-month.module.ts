import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMonthComponent } from './components/select-month/select-month.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectMonthComponent],
  imports: [CommonModule, MatSelectModule, FormsModule],
  exports: [SelectMonthComponent],
})
export class SelectMonthModule {}
