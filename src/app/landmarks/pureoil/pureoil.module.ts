import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PureoilPageRoutingModule } from './pureoil-routing.module';

import { PureoilPage } from './pureoil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PureoilPageRoutingModule
  ],
  declarations: [PureoilPage]
})
export class PureoilPageModule {}
