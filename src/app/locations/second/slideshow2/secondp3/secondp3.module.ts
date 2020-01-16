import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Secondp3PageRoutingModule } from './secondp3-routing.module';

import { Secondp3Page } from './secondp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Secondp3PageRoutingModule
  ],
  declarations: [Secondp3Page]
})
export class Secondp3PageModule {}
