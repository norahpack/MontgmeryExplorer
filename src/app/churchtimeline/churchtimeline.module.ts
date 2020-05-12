import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChurchtimelinePageRoutingModule } from './churchtimeline-routing.module';

import { ChurchtimelinePage } from './churchtimeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChurchtimelinePageRoutingModule
  ],
  declarations: [ChurchtimelinePage]
})
export class ChurchtimelinePageModule {}
