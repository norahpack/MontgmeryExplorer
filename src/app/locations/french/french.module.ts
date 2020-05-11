import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrenchPageRoutingModule } from './french-routing.module';

import { FrenchPage } from './french.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrenchPageRoutingModule
  ],
  declarations: [FrenchPage]
})
export class FrenchPageModule {}
