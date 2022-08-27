import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mizan-goster',
    pathMatch: 'full',
  },
  {
    path: 'mizan',
    loadChildren: () =>
      import('./mizan/mizan.module').then((module) => module.MizanModule),
  },
  {
    path: 'muavin-defter',
    loadChildren: () =>
      import('./muavin-defter/muavin-defter.module').then(
        (module) => module.MuavinDefterModule
      ),
  },
  /* {
    path: 'e-defter-yukle',
    loadChildren: () =>
      import('./e-defter-yukle/e-defter-yukle.module').then(
        (module) => module.EDefterYukleModule
      ),
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalizRoutingModule {}
