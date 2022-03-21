import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarUserPageRoutingModule } from './validar-user-routing.module';

import { ValidarUserPage } from './validar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarUserPageRoutingModule
  ],
  declarations: [ValidarUserPage]
})
export class ValidarUserPageModule {}
