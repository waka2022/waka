import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPassPageRoutingModule } from './new-pass-routing.module';

import { NewPassPage } from './new-pass.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPassPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [NewPassPage]
})
export class NewPassPageModule {}
