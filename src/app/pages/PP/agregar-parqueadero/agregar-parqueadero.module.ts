import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarParqueaderoPageRoutingModule } from './agregar-parqueadero-routing.module';

import { AgregarParqueaderoPage } from './agregar-parqueadero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarParqueaderoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarParqueaderoPage]
})
export class AgregarParqueaderoPageModule {}
