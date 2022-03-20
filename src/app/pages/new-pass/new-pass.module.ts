// Proyecto de formación SENA (WAKA)
// Descripción: codigo TypeSCRIPT de la pagina CAMBIAR Psw = formulario la clave de la cuenta .
// ?Autor:SamuelCanoRomero
// Fecha de creación:/02/2022
// Ultima fecha de modificación:17/03/2022

//?importando componenetes  de angular alojado en anuglar/core
import { Component, NgModule } from '@angular/core';

//?importando modulos componetns de angular alojado en anuglar/common
import { CommonModule } from '@angular/common';

//?importando formularios reactivos de angular alojado en angular/forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Proyecto de formación SENA (WAKA)
// Descripción: codigo TypeSCRIPT  de la pagina CAMBIAR Psw = formulario la clave de la cuenta .
// ?Autor:SamuelCanoRomero
// Fecha de creación:/02/2022
// Ultima fecha de modificación:17/03/2022

//?importando modules de ionic alojado en ionic/angular
import { IonicModule } from '@ionic/angular';

//?importando la modulo de new pass para uno uso alojado en ./new-pass-routing.page
import { NewPassPageRoutingModule } from './new-pass-routing.module';

//?importando la pagina de new pass para uno uso alojado en ./new-pass.page
import { NewPassPage } from './new-pass.page';

//?importando comporeneste alojados en src/app/components/components.module
import { ComponentsModule } from 'src/app/components/components.module';


//!importando directiva Ngmodule,de los componenetes o rutas a implementar.
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPassPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [NewPassPage]
})
export class NewPassPageModule {}
