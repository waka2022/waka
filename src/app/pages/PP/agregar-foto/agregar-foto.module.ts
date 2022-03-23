import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarFotoPageRoutingModule } from './agregar-foto-routing.module';

import { AgregarFotoPage } from './agregar-foto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarFotoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarFotoPage]
})
export class AgregarFotoPageModule {}
