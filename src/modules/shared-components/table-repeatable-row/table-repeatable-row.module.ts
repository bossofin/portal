import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRepeatableRowComponent } from './components/table-repeatable-row/table-repeatable-row.component';
import { CurrencyModule } from '@shared-components/currency/currency.module';

@NgModule({
  declarations: [TableRepeatableRowComponent],
  imports: [CommonModule, CurrencyModule],
  exports: [TableRepeatableRowComponent],
})
export class TableRepeatableRowModule {}
