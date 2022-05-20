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
        loadChildren: () => import('../BP/mapa/mapa.module').then(m => m.MapaPageModule)
      },
      {
        path: 'info-parqueadero/:id',
        loadChildren: () => import('../BP/info-parqueadero/info-parqueadero.module').then(m => m.InfoParqueaderoPageModule),
      },
      {
        path: 'recibo',
        loadChildren: () => import('../BP/recibo/recibo.module').then(m => m.ReciboPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () => import('../BP/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'novedades',
        loadChildren: () => import('../BP/novedades/novedades.module').then( m => m.NovedadesPageModule)
      },
      {
        path: 'agregar-vehiculo',
        loadChildren: () => import('../BP/formulario-agregar-vehiculo/formulario-agregar-vehiculo.module').then( m => m.FormularioAgregarVehiculoPageModule)
      },
        
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
