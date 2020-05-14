import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaverntriviaPageRoutingModule } from './taverntrivia-routing.module';

import { TaverntriviaPage } from './taverntrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaverntriviaPageRoutingModule
  ],
  declarations: [TaverntriviaPage]
})
export class TaverntriviaPageModule {}
