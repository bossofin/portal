import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectYearComponent } from './components/select-year/select-year.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectYearComponent],
  imports: [CommonModule, MatSelectModule, FormsModule],
  exports: [SelectYearComponent],
})
export class SelectYearModule {}
