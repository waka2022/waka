import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosParqueaderoPage } from './vehiculos-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosParqueaderoPageRoutingModule {}
