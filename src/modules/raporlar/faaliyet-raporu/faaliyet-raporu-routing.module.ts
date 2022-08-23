import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaaliyetRaporuComponent } from './components/faaliyet-raporu/faaliyet-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: FaaliyetRaporuComponent,
    data: {
      title: 'Faaliyet Raporu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaaliyetRaporuRoutingModule {}
