import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HopewellmontgomeryPageRoutingModule } from './hopewellmontgomery-routing.module';

import { HopewellmontgomeryPage } from './hopewellmontgomery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HopewellmontgomeryPageRoutingModule
  ],
  declarations: [HopewellmontgomeryPage]
})
export class HopewellmontgomeryPageModule {}
