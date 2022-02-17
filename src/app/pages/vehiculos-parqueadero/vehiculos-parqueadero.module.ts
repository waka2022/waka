import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosParqueaderoPageRoutingModule } from './vehiculos-parqueadero-routing.module';

import { VehiculosParqueaderoPage } from './vehiculos-parqueadero.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosParqueaderoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VehiculosParqueaderoPage]
})
export class VehiculosParqueaderoPageModule {}
