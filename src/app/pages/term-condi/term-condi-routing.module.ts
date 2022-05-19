import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermCondiPage } from './term-condi.page';

const routes: Routes = [
  {
    path: '',
    component: TermCondiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermCondiPageRoutingModule {}
