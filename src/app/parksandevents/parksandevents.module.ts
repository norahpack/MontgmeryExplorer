import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParksandeventsPageRoutingModule } from './parksandevents-routing.module';

import { ParksandeventsPage } from './parksandevents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParksandeventsPageRoutingModule
  ],
  declarations: [ParksandeventsPage]
})
export class ParksandeventsPageModule {}
