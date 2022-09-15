import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { passwordRegEx } from '@constants/password-regex';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { confirmPassword } from '@custom-validation/confirm-password';
import { getValidationMessage } from '@custom-validation/get-validation-message';
import { Company } from '@firmalar/mdoels/company.interface';
import { UserService } from '@kullanicilar/business/user.service';
import { CreateUserPayload } from '@kullanicilar/models/create-user-payload.interface';
import { User } from '@kullanicilar/models/user.interface';
import { lastValueFrom, Observable } from 'rxjs';
import { ApiResponseContainer } from 'src/global';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  company: Company;
  private _isEdit: boolean;
  public get isEdit(): boolean {
    return this._isEdit;
  }
  public set isEdit(value: boolean) {
    this._isEdit = value;
    if (this.isEdit) {
      this.title = 'Kullanıcı Güncelle';
    }
  }
  title: string = 'Kullanıcı Oluştur';
  addForm: FormGroup;
  toggleTitle: string = 'Aktif';
  constructor(
    @Inject(DIALOG_DATA) private data: { user: User; company: Company },
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<AddUserComponent>,
    private snackbar: MatSnackBar
  ) {
    this.company = makeImmutable(data.company);
    this.createForm();
    this.setFormInitialValues();
  }

  private setFormInitialValues() {
    if (this.data.user) {
      this.isEdit = true;
      this.addForm.patchValue({
        userName: this.data.user.userName,
        activationStatus: this.data.user.activationStatus,
      });
      this.setToggleTitle(Boolean(this.data.user.activationStatus));
    } else {
      this.addForm.get('password').addValidators(Validators.required);
      this.addForm.get('rePassword').addValidators(Validators.required);
    }
  }

  private createForm() {
    this.addForm = this.formBuilder.group(
      {
        userName: this.formBuilder.control('', Validators.required),
        password: this.formBuilder.control('', [
          Validators.minLength(6),
          Validators.pattern(passwordRegEx),
        ]),
        rePassword: this.formBuilder.control(''),
        activationStatus: this.formBuilder.control(1, Validators.required),
        companyId: this.formBuilder.control('', Validators.required),
      },
      {
        validators: confirmPassword,
      }
    );
    this.addForm.patchValue({
      companyId: this.company.id,
    });
  }

  ngOnInit(): void {}
  onStatusChange(event: MatSlideToggleChange) {
    this.setToggleTitle(event.checked);
  }

  private setToggleTitle(value: boolean) {
    if (value) {
      this.toggleTitle = 'Aktif';
    } else {
      this.toggleTitle = 'Pasif';
    }
  }

  async onSave() {
    const formValue = makeImmutable(this.addForm.value) as CreateUserPayload;
    let request$: Observable<ApiResponseContainer<User>>;
    if (this.isEdit) {
      request$ = this.userService.update({
        activationStatus: Boolean(formValue.activationStatus) ? 1 : 0,
        password: formValue.password,
        id: this.data.user.id,
        userName: formValue.userName,
      });
    } else {
      request$ = this.userService.create({
        activationStatus: Boolean(formValue.activationStatus) ? 1 : 0,
        password: formValue.password,
        userName: formValue.userName,
        companyId: this.company.id,
      });
    }

    const response = await lastValueFrom(request$);
    if (response.dataContainer.userName) {
      if (this.isEdit) {
        this.snackbar.open('Kullanıcı güncellendi.', 'Kapat', {
          duration: 5000,
        });
      } else {
        this.snackbar.open('Kullanıcı eklendi.', 'Kapat', {
          duration: 5000,
        });
      }
      this.dialogRef.close(true);
    }
  }
  public get userNameValidationErrorMessage(): string {
    return getValidationMessage(this.addForm.get('userName'));
  }
  public get passwordValidationErrorMessage(): string {
    return getValidationMessage(this.addForm.get('password'));
  }
  public get rePasswordValidationError(): string {
    return getValidationMessage(this.addForm.get('rePassword'));
  }
}
