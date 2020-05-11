import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TavernPageRoutingModule } from './tavern-routing.module';

import { TavernPage } from './tavern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TavernPageRoutingModule
  ],
  declarations: [TavernPage]
})
export class TavernPageModule {}
