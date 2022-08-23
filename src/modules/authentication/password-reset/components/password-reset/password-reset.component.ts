import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '@custom-validation/email-validator';
import { getValidationMessage } from '@custom-validation/get-validation-message';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  host: {
    class:
      'd-flex flex-column justify-content-center align-items-center auth pt-5',
  },
})
export class PasswordResetComponent implements OnInit {
  form: FormGroup;
  public get emailValidationError(): string {
    return getValidationMessage(this.form.get('email'));
  }
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(
        '',
        Validators.compose([Validators.required, emailValidator])
      ),
    });
  }

  ngOnInit(): void {}
  onSubmit() {}
}
