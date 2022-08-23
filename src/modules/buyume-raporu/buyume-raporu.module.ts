import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyumeRaporuRoutingModule } from './buyume-raporu-routing.module';
import { BuyumeRaporuComponent } from './components/buyume-raporu/buyume-raporu.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BuyumeRaporuComponent],
  imports: [
    CommonModule,
    BuyumeRaporuRoutingModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class BuyumeRaporuModule {}
