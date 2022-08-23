import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MizanGoruntuleComponent } from './components/mizan-goruntule/mizan-goruntule.component';

const routes: Routes = [
  {
    path: '',
    component: MizanGoruntuleComponent,
    data: {
      title: 'Mizan Görüntüle',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MizanGoruntuleRoutingModule {}
