import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoParqueaderoPage } from './info-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: InfoParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoParqueaderoPageRoutingModule {}
