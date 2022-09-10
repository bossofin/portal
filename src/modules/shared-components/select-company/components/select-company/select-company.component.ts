import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Company } from '@firmalar/mdoels/company.interface';
import { UserService } from '@kullanicilar/business/user.service';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom, switchMap } from 'rxjs';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss'],
  outputs: ['onSelect'],
})
export class SelectCompanyComponent implements OnInit {
  onSelect = new EventEmitter<Company>();
  companies: Company[];
  constructor(
    private userService: UserService,
    private globalStore: GlobalStore
  ) {}

  ngOnInit(): void {
    this.getCompaniesOfUser();
  }
  onSelectHandle(event: MatSelectChange) {
    this.onSelect.emit(event.value);
    this.globalStore.setCompany(event.value);
  }

  private async getCompaniesOfUser() {
    const companiesOfUserRequest$ = this.userService
      .getUserByUserName(true)
      .pipe(
        switchMap((user) => {
          this.userService.user = user;
          return this.userService.getCompaniesByUserId(true);
        })
      );
    const companiesOfUserResponse = await lastValueFrom(
      companiesOfUserRequest$
    );
    this.companies = companiesOfUserResponse;
    this.onSelect.emit(this.companies[0]);
    this.globalStore.setCompany(this.companies[0]);
  }
}
