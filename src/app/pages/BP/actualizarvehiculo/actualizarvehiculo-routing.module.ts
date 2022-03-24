import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarvehiculoPage } from './actualizarvehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarvehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarvehiculoPageRoutingModule {}
