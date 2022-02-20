import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabs2Page } from './tabs2.page';
import { AgregarParqueaderoPageModule } from '../PP/agregar-parqueadero/agregar-parqueadero.module';

const routes: Routes = [
  {
    path: '',
    component: Tabs2Page,
    children: [
      {
        path: 'Mis-parqueaderos',
        loadChildren: () => import('../PP/agregar-parqueadero/agregar-parqueadero.module').then(m => m.AgregarParqueaderoPageModule)
      },
      {
        path: 'info-parqueadero',
        loadChildren: () => import('../PP/info-parqueadero/info-parqueadero.module').then(m => m.InfoParqueaderoPageModule),
      },
      {
        path: 'recibo',
        loadChildren: () => import('../PP/vehiculos-parqueadero/vehiculos-parqueadero.module').then(m => m.VehiculosParqueaderoPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () => import('../PP/perfil-parqueadero/perfil-parqueadero.module').then( m => m.PerfilParqueaderoPageModule)
      },
      {
        path: 'ver-mas',
        loadChildren: () => import('../PP/ver-mas/ver-mas.module').then( m => m.VerMasPageModule)
      },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabs2PageRoutingModule {}
