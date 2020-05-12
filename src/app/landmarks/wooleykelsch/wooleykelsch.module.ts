import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WooleykelschPageRoutingModule } from './wooleykelsch-routing.module';

import { WooleykelschPage } from './wooleykelsch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WooleykelschPageRoutingModule
  ],
  declarations: [WooleykelschPage]
})
export class WooleykelschPageModule {}
