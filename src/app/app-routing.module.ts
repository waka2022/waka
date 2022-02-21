import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoVehiculoPageModule } from './pages/BP/info-vehiculo/info-vehiculo.module';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'seleccionar-rol',
    loadChildren: () => import('./pages/seleccionar-rol/seleccionar-rol.module').then( m => m.SeleccionarRolPageModule)
  },
  {
    path: 'formulario-bp',
    loadChildren: () => import('./pages/BP/formulario-bp/formulario-bp.module').then( m => m.FormularioBPPageModule)
  },
  {
    path: 'acceso',
    loadChildren: () => import('./pages/acceso/acceso.module').then( m => m.AccesoPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./pages/tabs2/tabs2.module').then( m => m.Tabs2PageModule)
  },
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
