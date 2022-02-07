import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarParqueaderoPageRoutingModule } from './agregar-parqueadero-routing.module';

import { AgregarParqueaderoPage } from './agregar-parqueadero.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarParqueaderoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarParqueaderoPage]
})
export class AgregarParqueaderoPageModule {}
