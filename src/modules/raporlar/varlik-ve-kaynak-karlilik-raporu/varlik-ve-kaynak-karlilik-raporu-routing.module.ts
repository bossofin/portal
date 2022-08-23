import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VarlikVeKaynakKarlilikRaporuComponent } from './components/varlik-ve-kaynak-karlilik-raporu/varlik-ve-kaynak-karlilik-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: VarlikVeKaynakKarlilikRaporuComponent,
    data: {
      title: 'Varlık ve Kaynak Karlılık Raporu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarlikVeKaynakKarlilikRaporuRoutingModule {}
