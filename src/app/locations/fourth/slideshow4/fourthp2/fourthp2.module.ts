import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fourthp2PageRoutingModule } from './fourthp2-routing.module';

import { Fourthp2Page } from './fourthp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fourthp2PageRoutingModule
  ],
  declarations: [Fourthp2Page]
})
export class Fourthp2PageModule {}
