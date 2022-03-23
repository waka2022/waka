import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoPageRoutingModule } from './acceso-routing.module';

import { AccesoPage } from './acceso.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AccesoPage]
})
export class AccesoPageModule {}
