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
        path: 'mis-parqueaderos',
        loadChildren: () => import('../PP/agregar-parqueadero/agregar-parqueadero.module').then(m => m.AgregarParqueaderoPageModule)
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
      {
        path: 'info-vehiculo',
        loadChildren: () => import('../BP/info-vehiculo/info-vehiculo.module').then( m => m.InfoVehiculoPageModule)
      },
      {
        path: 'acceso-estadisticas',
        loadChildren: () => import('../PP/acceso-estadisticas/acceso-estadisticas.module').then( m => m.AccesoEstadisticasPageModule)
      },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabs2PageRoutingModule {}
