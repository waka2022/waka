import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReActivationAccountPage } from './re-activation-account.page';

const routes: Routes = [
  {
    path: '',
    component: ReActivationAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReActivationAccountPageRoutingModule {}
