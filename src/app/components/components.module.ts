import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoWakaComponent } from './logo-waka/logo-waka.component';
import { ModalComponent } from './modal/modal.component';
import { NovedadesAutoComponent } from './novedades-auto/novedades-auto.component';
import { ModalCalificarComponent } from './modal-calificar/modal-calificar.component';




@NgModule({
  declarations: [
    MenuComponent,
    LogoWakaComponent,
    ModalComponent,
    NovedadesAutoComponent,
    ModalCalificarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   MenuComponent,
   LogoWakaComponent,
   ModalComponent,
   NovedadesAutoComponent,
   ModalCalificarComponent

  ]
})
export class ComponentsModule { }
