import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'finansal-durum-tablosu',
    loadChildren: () =>
      import('./finansal-durum-tablosu/finansal-durum-tablosu.module').then(
        (module) => module.FinansalDurumTablosuModule
      ),
  },
  {
    path: 'kar-zarar-tablosu',
    loadChildren: () =>
      import('./kar-zarar-tablosu/kar-zarar-tablosu.module').then(
        (module) => module.KarZararTablosuModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinansalAnalizlerRoutingModule {}
