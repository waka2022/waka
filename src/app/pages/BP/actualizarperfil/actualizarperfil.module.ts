import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarperfilPageRoutingModule } from './actualizarperfil-routing.module';

import { ActualizarperfilPage } from './actualizarperfil.page';
import { ComponentsModule } from '../../../components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarperfilPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizarperfilPage]
})
export class ActualizarperfilPageModule {}
