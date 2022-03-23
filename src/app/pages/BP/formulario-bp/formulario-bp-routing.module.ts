import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioBPPage } from './formulario-bp.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioBPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioBPPageRoutingModule {}
