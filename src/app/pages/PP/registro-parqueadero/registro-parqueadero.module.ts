import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroParqueaderoPageRoutingModule } from './registro-parqueadero-routing.module';

import { RegistroParqueaderoPage } from './registro-parqueadero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroParqueaderoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroParqueaderoPage]
})
export class RegistroParqueaderoPageModule {}
