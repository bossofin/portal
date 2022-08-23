import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDefterYukleRoutingModule } from './e-defter-yukle-routing.module';
import { EDefterYukleComponent } from './components/e-defter-yukle/e-defter-yukle.component';


@NgModule({
  declarations: [
    EDefterYukleComponent
  ],
  imports: [
    CommonModule,
    EDefterYukleRoutingModule
  ]
})
export class EDefterYukleModule { }
