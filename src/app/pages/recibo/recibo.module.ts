import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciboPageRoutingModule } from './recibo-routing.module';

import { ReciboPage } from './recibo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciboPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReciboPage]
})
export class ReciboPageModule {}
