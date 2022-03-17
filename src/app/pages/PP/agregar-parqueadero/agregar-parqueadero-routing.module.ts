import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarParqueaderoPage } from './agregar-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarParqueaderoPageRoutingModule {}
