import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EDefterYukleComponent } from './components/e-defter-yukle/e-defter-yukle.component';

const routes: Routes = [
  {
    path: '',
    component: EDefterYukleComponent,
    data: {
      title: 'e-Defter Yükle',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EDefterYukleRoutingModule {}
