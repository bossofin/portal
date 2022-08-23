import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyumeRaporuComponent } from './components/buyume-raporu/buyume-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: BuyumeRaporuComponent,
    data: {
      title: 'Büyüme Raporu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyumeRaporuRoutingModule {}
