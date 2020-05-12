import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroverkjellenbergPageRoutingModule } from './groverkjellenberg-routing.module';

import { GroverkjellenbergPage } from './groverkjellenberg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroverkjellenbergPageRoutingModule
  ],
  declarations: [GroverkjellenbergPage]
})
export class GroverkjellenbergPageModule {}
