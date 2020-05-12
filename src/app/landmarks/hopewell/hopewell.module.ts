import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HopewellPageRoutingModule } from './hopewell-routing.module';

import { HopewellPage } from './hopewell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HopewellPageRoutingModule
  ],
  declarations: [HopewellPage]
})
export class HopewellPageModule {}
