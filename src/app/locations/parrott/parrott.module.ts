import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParrottPageRoutingModule } from './parrott-routing.module';

import { ParrottPage } from './parrott.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParrottPageRoutingModule
  ],
  declarations: [ParrottPage]
})
export class ParrottPageModule {}
