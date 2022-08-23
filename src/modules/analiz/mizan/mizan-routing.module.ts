import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'goruntule',
    pathMatch: 'full',
  },
  {
    path: 'goruntule',
    loadChildren: () =>
      import('./mizan-goruntule/mizan-goruntule.module').then(
        (module) => module.MizanGoruntuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MizanRoutingModule {}
