import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectCompany } from '@globalModels/select-company.abstract.class';
import { UserService } from '@kullanicilar/business/user.service';
import { User } from '@kullanicilar/models/user.interface';
import { CustomConfirmComponent } from '@shared-components/custom-confirm/components/custom-confirm/custom-confirm.component';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom, Observable, of } from 'rxjs';
import { map, merge, startWith, switchMap } from 'rxjs';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class UserListComponent extends SelectCompany implements OnInit {
  userList: any[];
  displayedColumns = ['userName', 'activationStatus', 'createdDate', 'actions'];
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
            return of({
              statusCode: 200,
              statusDescription: 'OK',
              dataContainer: [],
            });
          }),
          map((userList) => {
            this.resultsLength = 1000;
            return userList.dataContainer;
          })
        );
      });
    }
  }
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    globalStore: GlobalStore
  ) {
    super(globalStore);
  }

  ngOnInit(): void {}
  onCompanySelect(): void {
    if (!this.paginator) {
      return;
    }
    this.paginator.pageIndex = 0;
    this.paginator.page.emit();
  }
  onCreate() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        company: this.selectedCompany,
      },
    });
    this.onDialogClose(dialogRef);
  }

  onEdit(user: User) {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        user,
        company: this.selectedCompany,
      },
    });
    this.onDialogClose(dialogRef);
  }
  onDeleteConfirmDialog(user: User) {
    const dialogRef = this.dialog.open(CustomConfirmComponent, {
      data: `${user.userName} kullanıcısı silinecek. Emin misiniz?`,
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          this.onDelete(user);
        }
      })
    );
  }
  async onDelete(user: User) {
    const request$ = this.userService.delete(user.id);
    await lastValueFrom(request$);
    this.snackbar.open('Kullanıcı Silindi.', 'Kapat', {
      duration: 5000,
    });
    this.paginator.page.emit();
  }

  private onDialogClose(dialogRef: MatDialogRef<AddUserComponent>) {
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          this.paginator.page.emit();
        }
      })
    );
  }
}
