import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'formulario-bp',
    pathMatch: 'full',
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'info-parqueadero',
    loadChildren: () => import('./pages/info-parqueadero/info-parqueadero.module').then( m => m.InfoParqueaderoPageModule)
  },
  {
    path: 'recibo',
    loadChildren: () => import('./pages/recibo/recibo.module').then( m => m.ReciboPageModule)
  },
  {
    path: 'info-vehiculo',
    loadChildren: () => import('./pages/info-vehiculo/info-vehiculo.module').then( m => m.InfoVehiculoPageModule)
  },
  {
    path: 'acceso',
    loadChildren: () => import('./pages/acceso/acceso.module').then( m => m.AccesoPageModule)
  },
  {
    path: 'agregar-parqueadero',
    loadChildren: () => import('./pages/agregar-parqueadero/agregar-parqueadero.module').then( m => m.AgregarParqueaderoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'seleccionar-rol',
    loadChildren: () => import('./pages/seleccionar-rol/seleccionar-rol.module').then( m => m.SeleccionarRolPageModule)
  },
  {
    path: 'formulario-bp',
    loadChildren: () => import('./pages/formulario-bp/formulario-bp.module').then( m => m.FormularioBPPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
