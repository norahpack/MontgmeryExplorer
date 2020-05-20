import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TedtriviaPageRoutingModule } from './tedtrivia-routing.module';

import { TedtriviaPage } from './tedtrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TedtriviaPageRoutingModule
  ],
  declarations: [TedtriviaPage]
})
export class TedtriviaPageModule {}
