import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaintriviaPageRoutingModule } from './raintrivia-routing.module';

import { RaintriviaPage } from './raintrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaintriviaPageRoutingModule
  ],
  declarations: [RaintriviaPage]
})
export class RaintriviaPageModule {}
