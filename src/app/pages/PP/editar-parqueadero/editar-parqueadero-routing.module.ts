import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarParqueaderoPage } from './editar-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: EditarParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarParqueaderoPageRoutingModule {}
