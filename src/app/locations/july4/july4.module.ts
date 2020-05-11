import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { July4PageRoutingModule } from './july4-routing.module';

import { July4Page } from './july4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    July4PageRoutingModule
  ],
  declarations: [July4Page]
})
export class July4PageModule {}
