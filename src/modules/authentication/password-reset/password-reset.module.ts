import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordResetComponent],
  imports: [
    CommonModule,
    PasswordResetRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
})
export class PasswordResetModule {}
