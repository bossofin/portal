import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRateComponent } from './components/star-rate/star-rate.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StarRateComponent],
  imports: [CommonModule, MatIconModule],
  exports: [StarRateComponent],
})
export class StarRateModule {}
