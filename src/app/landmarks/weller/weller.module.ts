import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellerPageRoutingModule } from './weller-routing.module';

import { WellerPage } from './weller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellerPageRoutingModule
  ],
  declarations: [WellerPage]
})
export class WellerPageModule {}
