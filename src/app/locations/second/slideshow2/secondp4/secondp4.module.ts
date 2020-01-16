import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Secondp4PageRoutingModule } from './secondp4-routing.module';

import { Secondp4Page } from './secondp4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Secondp4PageRoutingModule
  ],
  declarations: [Secondp4Page]
})
export class Secondp4PageModule {}
