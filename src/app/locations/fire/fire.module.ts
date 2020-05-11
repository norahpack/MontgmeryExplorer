import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirePageRoutingModule } from './fire-routing.module';

import { FirePage } from './fire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirePageRoutingModule
  ],
  declarations: [FirePage]
})
export class FirePageModule {}
