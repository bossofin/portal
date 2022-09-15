import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomConfirmComponent } from './components/custom-confirm/custom-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CustomConfirmComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  exports: [CustomConfirmComponent],
})
export class CustomConfirmModule {}
