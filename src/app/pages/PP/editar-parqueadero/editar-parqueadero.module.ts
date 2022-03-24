import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarParqueaderoPageRoutingModule } from './editar-parqueadero-routing.module';

import { EditarParqueaderoPage } from './editar-parqueadero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarParqueaderoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarParqueaderoPage]
})
export class EditarParqueaderoPageModule {}
