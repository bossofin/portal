import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { CompanySearchModule } from '@shared-components/company-search/company-search.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SelectCompanyModule } from '@shared-components/select-company/select-company.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [UserListComponent, AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CompanySearchModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    SelectCompanyModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
})
export class UsersModule {}
