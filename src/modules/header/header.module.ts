import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignOutButtonComponent } from './components/sign-out-button/sign-out-button.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { SelectCompanyModule } from '@shared-components/select-company/select-company.module';

@NgModule({
  declarations: [HeaderComponent, SignOutButtonComponent, PageTitleComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    SelectCompanyModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
