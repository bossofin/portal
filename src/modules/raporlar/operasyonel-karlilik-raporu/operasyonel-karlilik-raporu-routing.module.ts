import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasyonelKarlilikRaporuComponent } from './components/operasyonel-karlilik-raporu/operasyonel-karlilik-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: OperasyonelKarlilikRaporuComponent,
    data: {
      title: 'Operasyonel Karlılık Raporu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperasyonelKarlilikRaporuRoutingModule {}
