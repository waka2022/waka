//?importando los Ngmolue de angular alojado en angular/core
import { NgModule } from '@angular/core';

//?importando commnmoduel para implemetnar componenetes alojado en agnualr/common
import { CommonModule } from '@angular/common';

//?imposratando forsmoulde para reactivos alojado en angular/fomrs
import { FormsModule } from '@angular/forms';

//?importando modulo  ionic alojado en ionic/angular
import { IonicModule } from '@ionic/angular';

//?importando modelue novedades para su uso alojado en ./novedades-routing.module
import { NovedadesPageRoutingModule } from './novedades-routing.module';

//?importando pagina novedades alojado en ./novedades.pge
import { NovedadesPage } from './novedades.page';


//*Módulos de funciones de carga diferida
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovedadesPageRoutingModule
  ],
  declarations: [NovedadesPage]
})
export class NovedadesPageModule {}
