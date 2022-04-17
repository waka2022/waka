import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoWakaComponent } from './logo-waka/logo-waka.component';
import { ModalComponent } from './modal/modal.component';
import { NovedadesAutoComponent } from './novedades-auto/novedades-auto.component';
import { ModalCalificarComponent } from './modal-calificar/modal-calificar.component';
import { LogoWakaDarkComponent } from './logo-waka-dark/logo-waka-dark.component';
import { MenupruebaComponent } from './menuprueba/menuprueba.component';


@NgModule({
  declarations: [
    MenuComponent,
    LogoWakaComponent,
    ModalComponent,
    NovedadesAutoComponent,
    ModalCalificarComponent,
    LogoWakaDarkComponent,
    MenupruebaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   MenuComponent,
   LogoWakaComponent,
   ModalComponent,
   NovedadesAutoComponent,
   ModalCalificarComponent,
   LogoWakaDarkComponent,
   MenupruebaComponent

  ]
})
export class ComponentsModule { }
