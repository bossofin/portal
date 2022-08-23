import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordRegEx } from '@constants/password-regex';
import { confirmPassword } from '@custom-validation/confirm-password';
import { emailValidator } from '@custom-validation/email-validator';
import { getValidationMessage } from '@custom-validation/get-validation-message';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  host: {
    class:
      'd-flex flex-column justify-content-center align-items-center auth pt-5',
  },
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group(
      {
        name: this.formBuilder.control('', Validators.required),
        surname: this.formBuilder.control('', Validators.required),
        email: this.formBuilder.control('', [
          Validators.required,
          emailValidator,
        ]),
        phone: this.formBuilder.control('', Validators.required),
        nace: this.formBuilder.control('', Validators.required),
        password: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(passwordRegEx),
        ]),
        rePassword: this.formBuilder.control('', [Validators.required]),
        kvkk: this.formBuilder.control('', Validators.requiredTrue),
      },
      {
        validators: confirmPassword,
      }
    );
  }

  public get nameValidationError(): string {
    return getValidationMessage(this.form.get('name'));
  }
  public get surnameValidationError(): string {
    return getValidationMessage(this.form.get('surname'));
  }
  public get emailValidationError(): string {
    return getValidationMessage(this.form.get('email'));
  }
  public get phoneValidationError(): string {
    return getValidationMessage(this.form.get('phone'));
  }
  public get naceValidationError(): string {
    return getValidationMessage(this.form.get('nace'));
  }
  public get passwordValidationError(): string {
    return getValidationMessage(this.form.get('password'));
  }
  public get rePasswordValidationError(): string {
    return getValidationMessage(this.form.get('rePassword'));
  }

  ngOnInit(): void {}
  async onSubmit() {}
}
