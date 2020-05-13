import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AerialPageRoutingModule } from './aerial-routing.module';

import { AerialPage } from './aerial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AerialPageRoutingModule
  ],
  declarations: [AerialPage]
})
export class AerialPageModule {}
