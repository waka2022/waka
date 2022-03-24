import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarRolPage } from './seleccionar-rol.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarRolPageRoutingModule {}
