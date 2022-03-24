import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarvehiculoPageRoutingModule } from './actualizarvehiculo-routing.module';

import { ActualizarvehiculoPage } from './actualizarvehiculo.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarvehiculoPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizarvehiculoPage]
})
export class ActualizarvehiculoPageModule {}
