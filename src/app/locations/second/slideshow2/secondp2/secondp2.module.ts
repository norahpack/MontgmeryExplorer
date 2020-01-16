import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Secondp2PageRoutingModule } from './secondp2-routing.module';

import { Secondp2Page } from './secondp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Secondp2PageRoutingModule
  ],
  declarations: [Secondp2Page]
})
export class Secondp2PageModule {}
