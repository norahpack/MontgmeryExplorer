import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoffmanPageRoutingModule } from './hoffman-routing.module';

import { HoffmanPage } from './hoffman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoffmanPageRoutingModule
  ],
  declarations: [HoffmanPage]
})
export class HoffmanPageModule {}
