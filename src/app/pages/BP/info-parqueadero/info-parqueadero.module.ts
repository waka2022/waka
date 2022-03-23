import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoParqueaderoPageRoutingModule } from './info-parqueadero-routing.module';
import { InfoParqueaderoPage } from './info-parqueadero.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoParqueaderoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfoParqueaderoPage]
})
export class InfoParqueaderoPageModule {}
