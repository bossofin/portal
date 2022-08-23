import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@global-services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@home/home.module').then((module) => module.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
