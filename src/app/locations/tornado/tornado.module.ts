import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TornadoPageRoutingModule } from './tornado-routing.module';

import { TornadoPage } from './tornado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TornadoPageRoutingModule
  ],
  declarations: [TornadoPage]
})
export class TornadoPageModule {}
