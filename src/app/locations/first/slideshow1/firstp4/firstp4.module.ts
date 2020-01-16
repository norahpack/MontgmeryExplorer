import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Firstp4PageRoutingModule } from './firstp4-routing.module';

import { Firstp4Page } from './firstp4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Firstp4PageRoutingModule
  ],
  declarations: [Firstp4Page]
})
export class Firstp4PageModule {}
