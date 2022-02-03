import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'mapa',
        loadChildren: () => import('../mapa/mapa.module').then(m => m.MapaPageModule)
      },
      {
        path: 'info-parqueadero',
        loadChildren: () => import('../info-parqueadero/info-parqueadero.module').then(m => m.InfoParqueaderoPageModule),
      },
      {
        path: 'recibo',
        loadChildren: () => import('../recibo/recibo.module').then(m => m.ReciboPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      }
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
