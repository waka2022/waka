import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisParqueaderosPageRoutingModule } from './mis-parqueaderos-routing.module';

import { MisParqueaderosPage } from './mis-parqueaderos.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisParqueaderosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisParqueaderosPage]
})
export class MisParqueaderosPageModule {}
