import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Company } from '@firmalar/mdoels/company.interface';
import { UserService } from '@kullanicilar/business/user.service';
import { User } from '@kullanicilar/models/user.interface';
import { Observable, of } from 'rxjs';
import { map, merge, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class UserListComponent implements OnInit {
  selectedCompany: Company;
  userList: any[];
  displayedColumns = ['userName', 'createdDate', 'activationStatus', 'actions'];
  resultsLength: number;
  data$: Observable<User[]>;
  private _paginator: MatPaginator;
  public get paginator(): MatPaginator {
    return this._paginator;
  }
  @ViewChild(MatPaginator) public set paginator(value: MatPaginator) {
    this._paginator = value;
    if (this.paginator) {
      setTimeout(() => {
        this.data$ = merge(this.paginator.page).pipe(
          startWith({}),
          switchMap(() => {
            if (this.selectedCompany) {
              return this.userService.getUsersByCompanyId(
                this.selectedCompany.id
              );
            }
            return of([]);
          }),
          map((userList) => {
            this.resultsLength = 1000;
            return userList;
          })
        );
      });
    }
  }
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  onCompanySelect(company: Company) {
    this.selectedCompany = company;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.paginator.page.emit();
    }
  }
}
