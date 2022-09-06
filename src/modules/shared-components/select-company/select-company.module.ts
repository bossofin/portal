import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCompanyComponent } from './components/select-company/select-company.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SelectCompanyComponent],
  imports: [CommonModule, MatSelectModule],
  exports: [SelectCompanyComponent],
})
export class SelectCompanyModule {}
