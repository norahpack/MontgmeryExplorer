import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Thirdp4PageRoutingModule } from './thirdp4-routing.module';

import { Thirdp4Page } from './thirdp4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Thirdp4PageRoutingModule
  ],
  declarations: [Thirdp4Page]
})
export class Thirdp4PageModule {}
