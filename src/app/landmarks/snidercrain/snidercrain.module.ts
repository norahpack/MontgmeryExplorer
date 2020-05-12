import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnidercrainPageRoutingModule } from './snidercrain-routing.module';

import { SnidercrainPage } from './snidercrain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnidercrainPageRoutingModule
  ],
  declarations: [SnidercrainPage]
})
export class SnidercrainPageModule {}
