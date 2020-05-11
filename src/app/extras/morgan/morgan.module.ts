import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorganPageRoutingModule } from './morgan-routing.module';

import { MorganPage } from './morgan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorganPageRoutingModule
  ],
  declarations: [MorganPage]
})
export class MorganPageModule {}
