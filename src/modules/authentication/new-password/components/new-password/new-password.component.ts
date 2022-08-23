import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from '@custom-validation/confirm-password';
import { getValidationMessage } from '@custom-validation/get-validation-message';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  host: {
    class:
      'd-flex flex-column justify-content-center align-items-center auth pt-5',
  },
})
export class NewPasswordComponent implements OnInit {
  form: FormGroup;
  public get passwordValidationError(): string {
    return getValidationMessage(this.form.get('password'));
  }
  public get rePasswordValidationError(): string {
    return getValidationMessage(this.form.get('rePassword'));
  }

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group(
      {
        password: this.formBuilder.control(
          '',
          Validators.compose([Validators.required, Validators.minLength(6)])
        ),
        rePassword: this.formBuilder.control(
          '',
          Validators.compose([Validators.required, Validators.minLength(6)])
        ),
      },
      {
        validators: confirmPassword,
      }
    );
  }

  ngOnInit(): void {}
  onSubmit() {}
}
