import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoEstadisticasPageRoutingModule } from './acceso-estadisticas-routing.module';

import { AccesoEstadisticasPage } from './acceso-estadisticas.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoEstadisticasPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AccesoEstadisticasPage]
})
export class AccesoEstadisticasPageModule {}
