import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormularioAgregarVehiculoPageRoutingModule } from './formulario-agregar-vehiculo-routing.module';
import { FormularioAgregarVehiculoPage } from './formulario-agregar-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioAgregarVehiculoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioAgregarVehiculoPage]
})
export class FormularioAgregarVehiculoPageModule {}
