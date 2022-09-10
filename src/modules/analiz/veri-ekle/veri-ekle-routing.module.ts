import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeriEkleComponent } from './components/veri-ekle/veri-ekle.component';

const routes: Routes = [
  {
    path: '',
    component: VeriEkleComponent,
    data: {
      title: 'Veri Ekle',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeriEkleRoutingModule {}
