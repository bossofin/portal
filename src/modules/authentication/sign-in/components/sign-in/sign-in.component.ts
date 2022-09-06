import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authentication/business/authentication.service';
import { emailValidator } from '@custom-validation/email-validator';
import { getValidationMessage } from '@custom-validation/get-validation-message';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  host: {
    class:
      'd-flex flex-column justify-content-center align-items-center auth pt-5',
  },
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackbar: MatSnackBar,
    private router: Router,
    private globalStore: GlobalStore
  ) {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(
        '',
        Validators.compose([Validators.required /* emailValidator */])
      ),
      password: this.formBuilder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  public get emailValidationError(): string {
    return getValidationMessage(this.form.get('email'));
  }

  public get passwordValidationError(): string {
    return getValidationMessage(this.form.get('password'));
  }

  ngOnInit(): void {}
  async onSubmit() {
    if (this.form.valid) {
      const { email: userName, password } = this.form.value;
      const request$ = this.authenticationService.signIn(userName, password);
      const response = await lastValueFrom(request$);
      if (response.sessionToken) {
        sessionStorage.setItem('token', response.sessionToken);
        this.router.navigateByUrl('/');
        this.snackbar.open('Giriş başarılı.', 'Kapat', {
          duration: 5000,
        });
        sessionStorage.setItem('userName', userName);
        return;
      }
      this.snackbar.open('Kullanıcı bilgileri hatalı.', 'Kapat', {
        duration: 5000,
      });
    }
  }
}
