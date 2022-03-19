
  // Proyecto de formación SENA (WAKA)
  //   Descripción: codigo HTML del Componente novedad = seleccionar archivo fotograficos (para saber el estado del auto antes y despues), esté se mostrara antes y despues de terminar la estadia en el parqueadero.
  //   ?Autor:@SamuelCanoRomero
  //   Fecha de creación:/02/2022
  //   Ultima fecha de modificación:17/03/2022

//?importando componente NgModule de agular alojado en angular/core
import { NgModule } from '@angular/core';

//?importando la directiva routes para su uso alojado en angular/router
import { Routes, RouterModule } from '@angular/router';

//?importando la pagina Novedades para su uso alojado ./novedades.page
import { NovedadesPage } from './novedades.page';

//!Agregar navegación en la aplicación con enrutamiento
const routes: Routes = [
  {
    path: '',
    component: NovedadesPage
  }
];

//*Módulos de funciones de carga diferida
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovedadesPageRoutingModule {}
