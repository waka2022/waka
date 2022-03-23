import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMasPageRoutingModule } from './ver-mas-routing.module';

import { VerMasPage } from './ver-mas.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerMasPage]
})
export class VerMasPageModule {}
