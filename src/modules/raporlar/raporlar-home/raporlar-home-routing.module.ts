import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaporlarHomeComponent } from './components/raporlar-home/raporlar-home.component';

const routes: Routes = [
  {
    path: '',
    component: RaporlarHomeComponent,
    data: {
      title: 'Raporlar',
    },
    children: [
      {
        path: 'likidite-raporu',
        loadChildren: () =>
          import('../likidite-raporu/likidite-raporu.module').then(
            (module) => module.LikiditeRaporuModule
          ),
      },
      {
        path: 'faaliyet-raporu',
        loadChildren: () =>
          import('../faaliyet-raporu/faaliyet-raporu.module').then(
            (module) => module.FaaliyetRaporuModule
          ),
      },
      {
        path: 'varlik-ve-kaynak-raporu',
        loadChildren: () =>
          import(
            '../varlik-ve-kaynak-raporu/varlik-ve-kaynak-raporu.module'
          ).then((module) => module.VarlikVeKaynakRaporuModule),
      },
      {
        path: 'varlik-ve-kaynak-karlilik-raporu',
        loadChildren: () =>
          import(
            '../varlik-ve-kaynak-karlilik-raporu/varlik-ve-kaynak-karlilik-raporu.module'
          ).then((module) => module.VarlikVeKaynakKarlilikRaporuModule),
      },
      {
        path: 'operasyonel-karlilik-raporu',
        loadChildren: () =>
          import(
            '../operasyonel-karlilik-raporu/operasyonel-karlilik-raporu.module'
          ).then((module) => module.OperasyonelKarlilikRaporuModule),
      },
      {
        path: 'return-raporu',
        loadChildren: () =>
          import('../return-raporu/return-raporu.module').then(
            (module) => module.ReturnRaporuModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaporlarHomeRoutingModule {}
