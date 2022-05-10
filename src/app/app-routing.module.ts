import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  {
    path: 'novedades',
    loadChildren: () => import('./pages/BP/novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
  {
    path: 'ver-mas/:id',
    loadChildren: () => import('./pages/PP/ver-mas/ver-mas.module').then( m => m.VerMasPageModule)
  },
  {
    path: 'agregar-foto',
    loadChildren: () => import('./pages/PP/agregar-foto/agregar-foto.module').then( m => m.AgregarFotoPageModule)
  },
  {
    path: 'new-pass',
    loadChildren: () => import('./pages/new-pass/new-pass.module').then( m => m.NewPassPageModule)
  },
  {
    path: 'error404',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: 'actualizarperfil',
    loadChildren: () => import('./pages/BP/actualizarperfil/actualizarperfil.module').then( m => m.ActualizarperfilPageModule)
  },
  {
    path: 'mis-parqueaderos',
    loadChildren: () => import('./pages/PP/mis-parqueaderos/mis-parqueaderos.module').then( m => m.MisParqueaderosPageModule)
  },
  {
    path: 'registro-parqueadero',
    loadChildren: () => import('./pages/PP/registro-parqueadero/registro-parqueadero.module').then( m => m.RegistroParqueaderoPageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'editar-parqueadero/:id',
    loadChildren: () => import('./pages/PP/editar-parqueadero/editar-parqueadero.module').then( m => m.EditarParqueaderoPageModule)
  },
  {
    path: 'actualizarvehiculo/:id',
    loadChildren: () => import('./pages/BP/actualizarvehiculo/actualizarvehiculo.module').then( m => m.ActualizarvehiculoPageModule)
  },
  {
    path: 'app-new-pass',
    loadChildren: () => import('./pages/new-pass/new-pass.module').then( m => m.NewPassPageModule)
  },
  {
    path: 're-activation-account/:id',
    loadChildren: () => import('./pages/re-activation-account/re-activation-account.module').then( m => m.ReActivationAccountPageModule)
  },
  {
    path: 'graficas',
    loadChildren: () => import('./pages/PP/graficas/graficas.module').then( m => m.GraficasPageModule)
  },


 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
