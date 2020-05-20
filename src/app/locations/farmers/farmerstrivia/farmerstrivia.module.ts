import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerstriviaPageRoutingModule } from './farmerstrivia-routing.module';

import { FarmerstriviaPage } from './farmerstrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerstriviaPageRoutingModule
  ],
  declarations: [FarmerstriviaPage]
})
export class FarmerstriviaPageModule {}
