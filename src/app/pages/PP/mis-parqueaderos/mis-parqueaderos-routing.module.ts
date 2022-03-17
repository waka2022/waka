import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisParqueaderosPage } from './mis-parqueaderos.page';

const routes: Routes = [
  {
    path: '',
    component: MisParqueaderosPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisParqueaderosPageRoutingModule {}
