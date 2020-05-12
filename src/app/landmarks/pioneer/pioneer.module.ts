import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PioneerPageRoutingModule } from './pioneer-routing.module';

import { PioneerPage } from './pioneer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PioneerPageRoutingModule
  ],
  declarations: [PioneerPage]
})
export class PioneerPageModule {}
