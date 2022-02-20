import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroParqueaderoPageRoutingModule } from './registro-parqueadero-routing.module';

import { RegistroParqueaderoPage } from './registro-parqueadero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroParqueaderoPageRoutingModule
  ],
  declarations: [RegistroParqueaderoPage]
})
export class RegistroParqueaderoPageModule {}
