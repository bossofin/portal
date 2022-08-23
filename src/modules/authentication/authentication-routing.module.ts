import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((module) => module.SignInModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((module) => module.SignUpModule),
  },
  {
    path: 'password-reset',
    loadChildren: () =>
      import('./password-reset/password-reset.module').then(
        (module) => module.PasswordResetModule
      ),
  },
  {
    path: 'new-password',
    loadChildren: () =>
      import('./new-password/new-password.module').then(
        (module) => module.NewPasswordModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
