import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fourthp3PageRoutingModule } from './fourthp3-routing.module';

import { Fourthp3Page } from './fourthp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fourthp3PageRoutingModule
  ],
  declarations: [Fourthp3Page]
})
export class Fourthp3PageModule {}
