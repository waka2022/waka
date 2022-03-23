// Proyecto de formación SENA (WAKA)
// Descripción: codigo TypeSCRIPT ruta  de la pagina CAMBIAR Psw = formulario la clave de la cuenta .
// ?Autor:SamuelCanoRomero
// Fecha de creación:/02/2022
// Ultima fecha de modificación:17/03/2022

//?importando ngmodeo de angular alojado en anuglar/core
import { NgModule } from '@angular/core';

//?importadnoe las routes de angular para uso alojadas en angular/route
import { Routes, RouterModule } from '@angular/router';

//?importando la ruta de la pagina newpass para un uso alojada en ./new-pass.page
import { NewPassPage } from './new-pass.page';

//!Agregar navegación en la aplicación con enrutamiento
const routes: Routes = [
  {
    path: '',
    component: NewPassPage
  }
];

//*Módulos de funciones de carga diferida
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPassPageRoutingModule {}
