import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Firstp2PageRoutingModule } from './firstp2-routing.module';

import { Firstp2Page } from './firstp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Firstp2PageRoutingModule
  ],
  declarations: [Firstp2Page]
})
export class Firstp2PageModule {}
