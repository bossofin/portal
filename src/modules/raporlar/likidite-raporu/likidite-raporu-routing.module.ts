import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikiditeRaporuComponent } from './components/likidite-raporu/likidite-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: LikiditeRaporuComponent,
    data: {
      title: 'Likidite Raporu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikiditeRaporuRoutingModule {}
