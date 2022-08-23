import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SonucRaporuComponent } from './components/sonuc-raporu/sonuc-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: SonucRaporuComponent,
    data: {
      title: 'Sonuç Raporu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonucRaporuRoutingModule {}
