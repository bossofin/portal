import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authentication/business/authentication.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-sign-out-button',
  templateUrl: './sign-out-button.component.html',
  styleUrls: ['./sign-out-button.component.scss'],
})
export class SignOutButtonComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}
  async signOut() {
    const request$ = this.authenticationService.signOut();
    await lastValueFrom(request$);
    this.router.navigateByUrl('/auth');
    this.snackbar.open('Çıkış Başarılı', 'Kapat', {
      duration: 5000,
    });
  }
}
