//?importando directiva Ngmodule de angular, alojada en angular/core
import { NgModule } from '@angular/core';

//?importando directiva commonModule de angular, alojada en angular/common para componentes
import { CommonModule } from '@angular/common';

//?importando directiva  formsModule de angular, alojada en angular/forms para fomularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//?importando directiva ionicModule de ionic, alojada en ionic/angular para la implementacion de campos de ionic
import { IonicModule } from '@ionic/angular';

//?importando directiva modulo RegistroPageRoutinMOdule, alojada en ./registro-routing.moduel para implementar las rutas
import { RegistroPageRoutingModule } from './registro-routing.module';

//?importando ruta registropage, alojada en ./registro.page para uso de esta ruta
import { RegistroPage } from './registro.page';

//?importando directiva componenetsMOdule, alojado en componenetes/componenets.module para a implementacion de componentes 
import { ComponentsModule } from '../../components/components.module';

//!importando directiva Ngmodule,de los componenetes o rutas a implementar.
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
