import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReActivationAccountPageRoutingModule } from './re-activation-account-routing.module';

import { ReActivationAccountPage } from './re-activation-account.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReActivationAccountPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReActivationAccountPage]
})
export class ReActivationAccountPageModule {}
