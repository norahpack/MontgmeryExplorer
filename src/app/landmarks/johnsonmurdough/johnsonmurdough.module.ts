import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohnsonmurdoughPageRoutingModule } from './johnsonmurdough-routing.module';

import { JohnsonmurdoughPage } from './johnsonmurdough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohnsonmurdoughPageRoutingModule
  ],
  declarations: [JohnsonmurdoughPage]
})
export class JohnsonmurdoughPageModule {}
