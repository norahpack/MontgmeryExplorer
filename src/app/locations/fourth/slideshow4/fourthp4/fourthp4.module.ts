import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fourthp4PageRoutingModule } from './fourthp4-routing.module';

import { Fourthp4Page } from './fourthp4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fourthp4PageRoutingModule
  ],
  declarations: [Fourthp4Page]
})
export class Fourthp4PageModule {}
