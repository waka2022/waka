import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilParqueaderoPage } from './perfil-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilParqueaderoPageRoutingModule {}
