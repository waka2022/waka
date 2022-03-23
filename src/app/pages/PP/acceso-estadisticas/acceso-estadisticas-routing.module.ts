
  // Proyecto de formación SENA (WAKA)
  //   Descripción: codigo TypeScript de ruta la pagina estadisticas = visulaizar estadisitcas de un parqueadero, solo rol (BP).
  //   ?Autor:@SamuelCanoRomero
  //   Fecha de creación:/02/2022
  //   Ultima fecha de modificación:17/03/2022

//?importando la directiva NgModule ,alojada en angular/core
import { NgModule } from '@angular/core';

//?importando el componente routes, alojado en angular/router para implementar el llamado de vistas
import { Routes, RouterModule } from '@angular/router';

//?importando acceso estadisticas ,alojada en accesso-estadistica.page
import { AccesoEstadisticasPage } from './acceso-estadisticas.page';

//!Agregar navegación en la aplicación con enrutamiento
const routes: Routes = [
  {
    path: '',
    component: AccesoEstadisticasPage
  }
];


//*Módulos de funciones de carga diferida
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesoEstadisticasPageRoutingModule {}
