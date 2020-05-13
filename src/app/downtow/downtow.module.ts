import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DowntowPageRoutingModule } from './downtow-routing.module';

import { DowntowPage } from './downtow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DowntowPageRoutingModule
  ],
  declarations: [DowntowPage]
})
export class DowntowPageModule {}
