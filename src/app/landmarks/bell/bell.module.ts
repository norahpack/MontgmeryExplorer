import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BellPageRoutingModule } from './bell-routing.module';

import { BellPage } from './bell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BellPageRoutingModule
  ],
  declarations: [BellPage]
})
export class BellPageModule {}
