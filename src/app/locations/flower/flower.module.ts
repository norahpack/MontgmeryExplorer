import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlowerPageRoutingModule } from './flower-routing.module';

import { FlowerPage } from './flower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowerPageRoutingModule
  ],
  declarations: [FlowerPage]
})
export class FlowerPageModule {}
