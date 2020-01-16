import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Secondp1PageRoutingModule } from './secondp1-routing.module';

import { Secondp1Page } from './secondp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Secondp1PageRoutingModule
  ],
  declarations: [Secondp1Page]
})
export class Secondp1PageModule {}
