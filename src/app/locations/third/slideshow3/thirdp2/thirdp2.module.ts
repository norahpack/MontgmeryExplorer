import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Thirdp2PageRoutingModule } from './thirdp2-routing.module';

import { Thirdp2Page } from './thirdp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Thirdp2PageRoutingModule
  ],
  declarations: [Thirdp2Page]
})
export class Thirdp2PageModule {}
