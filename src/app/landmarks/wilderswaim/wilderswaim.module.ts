import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WilderswaimPageRoutingModule } from './wilderswaim-routing.module';

import { WilderswaimPage } from './wilderswaim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WilderswaimPageRoutingModule
  ],
  declarations: [WilderswaimPage]
})
export class WilderswaimPageModule {}
