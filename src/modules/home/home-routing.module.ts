import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Anasayfa',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'analiz',
        loadChildren: () =>
          import('@analiz/analiz.module').then((module) => module.AnalizModule),
      },
      {
        path: 'finansal-analizler',
        loadChildren: () =>
          import('@finanaslAnalizler/finansal-analizler.module').then(
            (module) => module.FinansalAnalizlerModule
          ),
      },
      {
        path: 'raporlar',
        loadChildren: () =>
          import('@raporlar/raporlar.module').then(
            (module) => module.RaporlarModule
          ),
      },
      {
        path: 'buyume-raporu',
        loadChildren: () =>
          import('@buyumeRaporu/buyume-raporu.module').then(
            (module) => module.BuyumeRaporuModule
          ),
      },
      {
        path: 'firmalar',
        loadChildren: () =>
          import('@firmalar/companies.module').then(
            (module) => module.CompaniesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
