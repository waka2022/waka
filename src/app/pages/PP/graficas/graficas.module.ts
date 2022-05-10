import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficasPageRoutingModule } from './graficas-routing.module';

import { GraficasPage } from './graficas.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GraficasPage]
})
export class GraficasPageModule {}
