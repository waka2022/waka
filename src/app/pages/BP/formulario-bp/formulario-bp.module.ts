import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioBPPageRoutingModule } from './formulario-bp-routing.module';

import { FormularioBPPage } from './formulario-bp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioBPPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioBPPage]
})
export class FormularioBPPageModule {}
