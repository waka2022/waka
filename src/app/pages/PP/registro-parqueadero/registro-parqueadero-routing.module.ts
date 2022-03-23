import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroParqueaderoPage } from './registro-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroParqueaderoPageRoutingModule {}
