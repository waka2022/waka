import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioAgregarVehiculoPage } from './formulario-agregar-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioAgregarVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioAgregarVehiculoPageRoutingModule {}
