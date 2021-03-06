import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarRolPageRoutingModule } from './seleccionar-rol-routing.module';

import { SeleccionarRolPage } from './seleccionar-rol.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarRolPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [SeleccionarRolPage]
})
export class SeleccionarRolPageModule {}
