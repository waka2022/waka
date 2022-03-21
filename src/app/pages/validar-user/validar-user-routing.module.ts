import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarUserPage } from './validar-user.page';

const routes: Routes = [
  {
    path: '',
    component: ValidarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarUserPageRoutingModule {}
