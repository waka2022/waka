import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilParqueaderoPageRoutingModule } from './perfil-parqueadero-routing.module';

import { PerfilParqueaderoPage } from './perfil-parqueadero.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilParqueaderoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PerfilParqueaderoPage]
})
export class PerfilParqueaderoPageModule {}
