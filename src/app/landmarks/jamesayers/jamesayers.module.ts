import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JamesayersPageRoutingModule } from './jamesayers-routing.module';

import { JamesayersPage } from './jamesayers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JamesayersPageRoutingModule
  ],
  declarations: [JamesayersPage]
})
export class JamesayersPageModule {}
