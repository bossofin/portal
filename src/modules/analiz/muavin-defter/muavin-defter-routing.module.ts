import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuavinDefterComponent } from './components/muavin-defter/muavin-defter.component';

const routes: Routes = [
  {
    path: '',
    component: MuavinDefterComponent,
    data: {
      title: 'Muavin Defter',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuavinDefterRoutingModule {}
