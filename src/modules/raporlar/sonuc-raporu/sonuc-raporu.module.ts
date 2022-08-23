import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SonucRaporuRoutingModule } from './sonuc-raporu-routing.module';
import { SonucRaporuComponent } from './components/sonuc-raporu/sonuc-raporu.component';


@NgModule({
  declarations: [
    SonucRaporuComponent
  ],
  imports: [
    CommonModule,
    SonucRaporuRoutingModule
  ]
})
export class SonucRaporuModule { }
