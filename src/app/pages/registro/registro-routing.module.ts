
//? importando la diretiva Ngmodelo de angular que esta en angular/core
import { NgModule } from '@angular/core';
//? importando la diretiva routes y routesmodule de angular que esta en angular/route para el manejo de rutas(vistas)
import { Routes, RouterModule } from '@angular/router';

//? importando la directiva Registropage que esta en ./registro.page
import { RegistroPage } from './registro.page';

//!Agregar navegación en la aplicación con enrutamiento
const routes: Routes = [
  {
    path: '',
    component: RegistroPage
  }
];

//*Módulos de funciones de carga diferida
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}