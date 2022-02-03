import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoWakaComponent } from './logo-waka/logo-waka.component';



@NgModule({
  declarations: [
    MenuComponent,
    LogoWakaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
   MenuComponent,
   LogoWakaComponent

  ]
})
export class ComponentsModule { }
