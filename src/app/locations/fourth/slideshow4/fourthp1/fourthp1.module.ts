import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fourthp1PageRoutingModule } from './fourthp1-routing.module';

import { Fourthp1Page } from './fourthp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fourthp1PageRoutingModule
  ],
  declarations: [Fourthp1Page]
})
export class Fourthp1PageModule {}
