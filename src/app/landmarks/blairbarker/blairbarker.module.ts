import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlairbarkerPageRoutingModule } from './blairbarker-routing.module';

import { BlairbarkerPage } from './blairbarker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlairbarkerPageRoutingModule
  ],
  declarations: [BlairbarkerPage]
})
export class BlairbarkerPageModule {}
