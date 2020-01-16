import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Firstp3PageRoutingModule } from './firstp3-routing.module';

import { Firstp3Page } from './firstp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Firstp3PageRoutingModule
  ],
  declarations: [Firstp3Page]
})
export class Firstp3PageModule {}
