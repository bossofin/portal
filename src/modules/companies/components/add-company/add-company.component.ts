import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getValidationMessage } from '@custom-validation/get-validation-message';
import { vknValidator } from '@custom-validation/vkn-validator';
import { CompanyService } from '@firmalar/business/company.service';
import { Company } from '@firmalar/mdoels/company.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
  addForm: FormGroup;
  private _isEdit: boolean;
  public get isEdit(): boolean {
    return this._isEdit;
  }
  public set isEdit(value: boolean) {
    this._isEdit = value;
    if (this.isEdit) {
      this.title = 'Firma Güncelle';
    }
  }
  title: string = 'Firma Ekle';
  companyId: number;
  constructor(
    private companyService: CompanyService,
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: Company,
    private dialogRef: MatDialogRef<AddCompanyComponent>,
    private snackbar: MatSnackBar
  ) {
    this.addForm = formBuilder.group({
      taxNumber: formBuilder.control(data?.taxNumber || '', [
        Validators.required,
        vknValidator,
      ]),
      companyName: formBuilder.control(data?.companyName || '', [
        Validators.required,
      ]),
      logo: formBuilder.control(''),
      taxOffice: formBuilder.control(data?.taxOffice || '', [
        Validators.required,
      ]),
    });
    if (data) {
      this.isEdit = true;
      this.companyId = data.id;
    }
  }

  ngOnInit(): void {}
  async onSave() {
    let request$;
    if (this.isEdit) {
      request$ = this.companyService.update({
        ...this.addForm.value,
        id: this.companyId,
      });
    } else {
      request$ = this.companyService.create({
        ...this.addForm.value,
      });
    }

    const response = await lastValueFrom(request$);
    if (response) {
      if (this.isEdit) {
        this.snackbar.open(`Firma Güncellendi.`, 'Kapat', {
          duration: 5000,
        });
      } else {
        this.snackbar.open(`Firma Eklendi.`, 'Kapat', {
          duration: 5000,
        });
      }
      this.dialogRef.close(true);
    }
  }
  get taxNumberValidationMessage(): string {
    return getValidationMessage(this.addForm.get('taxNumber'));
  }
  get companyNameValidationMessage(): string {
    return getValidationMessage(this.addForm.get('companyName'));
  }
  get taxOfficeValidationMessage(): string {
    return getValidationMessage(this.addForm.get('taxOffice'));
  }
}
