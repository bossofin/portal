import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { CompanyService } from '@firmalar/business/company.service';
import { Company } from '@firmalar/mdoels/company.interface';
import {
  lastValueFrom,
  map,
  merge,
  Observable,
  startWith,
  Subscription,
  switchMap,
} from 'rxjs';
import { AddCompanyComponent } from '../add-company/add-company.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class CompanyListComponent implements OnInit, OnDestroy {
  displayedColumns = [
    'logo',
    'taxNumber',
    'companyName',
    'createdDate',
    'actions',
  ];
  data$: Observable<Company[]>;
  resultsLength: number;
  subscriptions: Subscription[] = [];
  private _paginator: MatPaginator;
  public get paginator(): MatPaginator {
    return this._paginator;
  }
  @ViewChild(MatPaginator) public set paginator(value: MatPaginator) {
    this._paginator = value;
    if (!this.paginator) {
      return;
    }
    this.data$ = merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() =>
        this.companyService.getAll(this.paginator.pageIndex + 1, 10)
      ),
      map((value) => {
        this.resultsLength = 10;
        return value;
      })
    );
  }
  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  onCreate() {
    const dialogRef = this.dialog.open(AddCompanyComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          this.paginator.pageIndex = 0;
          this.paginator.page.emit();
        }
      })
    );
  }
  async onDelete(company: Company) {
    const confirmResult = confirm(
      `${company.companyName} silinecek. Emin misiniz?`
    );
    if (confirmResult) {
      const request$ = this.companyService.delete(company.id);
      await lastValueFrom(request$);
      this.paginator.page.emit();
    }
  }
  onEdit(company: Company) {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      data: {
        ...company,
      },
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          this.paginator.page.emit();
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscriotion) => subscriotion.unsubscribe());
  }
}
