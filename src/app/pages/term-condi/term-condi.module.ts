import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermCondiPageRoutingModule } from './term-condi-routing.module';

import { TermCondiPage } from './term-condi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermCondiPageRoutingModule
  ],
  declarations: [TermCondiPage]
})
export class TermCondiPageModule {}
