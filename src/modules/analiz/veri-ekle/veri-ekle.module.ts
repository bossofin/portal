import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeriEkleRoutingModule } from './veri-ekle-routing.module';
import { VeriEkleComponent } from './components/veri-ekle/veri-ekle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyModule } from '@shared-components/currency/currency.module';

@NgModule({
  declarations: [VeriEkleComponent],
  imports: [
    CommonModule,
    VeriEkleRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    CurrencyModule,
    NgxMaskModule.forRoot(),
  ],
})
export class VeriEkleModule {}
