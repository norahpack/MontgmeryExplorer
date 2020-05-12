import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaulmanPageRoutingModule } from './taulman-routing.module';

import { TaulmanPage } from './taulman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaulmanPageRoutingModule
  ],
  declarations: [TaulmanPage]
})
export class TaulmanPageModule {}
