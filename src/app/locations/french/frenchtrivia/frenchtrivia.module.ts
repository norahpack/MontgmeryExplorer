import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrenchtriviaPageRoutingModule } from './frenchtrivia-routing.module';

import { FrenchtriviaPage } from './frenchtrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrenchtriviaPageRoutingModule
  ],
  declarations: [FrenchtriviaPage]
})
export class FrenchtriviaPageModule {}
