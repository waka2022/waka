<<<<<<< HEAD
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
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPassPage } from './new-pass.page';

>>>>>>> Waka-APK
const routes: Routes = [
  {
    path: '',
    component: NewPassPage
  }
];

<<<<<<< HEAD
//*Módulos de funciones de carga diferida
=======
>>>>>>> Waka-APK
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPassPageRoutingModule {}
