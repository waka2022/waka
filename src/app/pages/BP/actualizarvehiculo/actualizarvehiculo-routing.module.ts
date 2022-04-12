  // Proyecto de formación SENA (WAKA)
  //   Descripción: codigo HTML de la pagina actualizar vehiculo = seleccionar uno de mis vehiculo para editarlo y guardar los cambios.
  //   ?Autor:@SamuelCanoRomero
  //   Fecha de creación:/02/2022
  //   Ultima fecha de modificación:09/04/2022


  //?importando componente NgModule de agular alojado en angular/core
import { NgModule } from '@angular/core';

//?importando la directiva routes para su uso alojado en angular/router
import { Routes, RouterModule } from '@angular/router';

//?importando la pagina Actualizar Vehiculo para su uso alojado ./actualizarvehiculo
import { ActualizarvehiculoPage } from './actualizarvehiculo.page';


//!Agregar navegación en la aplicación con enrutamiento
const routes: Routes = [
  {
    path: '',
    component: ActualizarvehiculoPage
  }
];

//*Módulos de funciones de carga diferida
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarvehiculoPageRoutingModule {}
