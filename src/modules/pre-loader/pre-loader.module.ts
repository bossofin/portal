import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';

@NgModule({
  declarations: [PreLoaderComponent],
  imports: [CommonModule],
  exports: [PreLoaderComponent],
})
export class PreLoaderModule {}
