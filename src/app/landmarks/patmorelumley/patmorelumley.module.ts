import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatmorelumleyPageRoutingModule } from './patmorelumley-routing.module';

import { PatmorelumleyPage } from './patmorelumley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatmorelumleyPageRoutingModule
  ],
  declarations: [PatmorelumleyPage]
})
export class PatmorelumleyPageModule {}
