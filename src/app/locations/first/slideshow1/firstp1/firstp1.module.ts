import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Firstp1PageRoutingModule } from './firstp1-routing.module';

import { Firstp1Page } from './firstp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Firstp1PageRoutingModule
  ],
  declarations: [Firstp1Page]
})
export class Firstp1PageModule {}
