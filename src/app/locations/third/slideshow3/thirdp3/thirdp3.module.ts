import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Thirdp3PageRoutingModule } from './thirdp3-routing.module';

import { Thirdp3Page } from './thirdp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Thirdp3PageRoutingModule
  ],
  declarations: [Thirdp3Page]
})
export class Thirdp3PageModule {}
