import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VarlikVeKaynakRaporuComponent } from './components/varlik-ve-kaynak-raporu/varlik-ve-kaynak-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: VarlikVeKaynakRaporuComponent,
    data: {
      title: 'Varlık ve Kaynak Raporu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarlikVeKaynakRaporuRoutingModule {}
