import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Thirdp1PageRoutingModule } from './thirdp1-routing.module';

import { Thirdp1Page } from './thirdp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Thirdp1PageRoutingModule
  ],
  declarations: [Thirdp1Page]
})
export class Thirdp1PageModule {}
