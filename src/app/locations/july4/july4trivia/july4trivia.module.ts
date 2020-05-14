import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { July4triviaPageRoutingModule } from './july4trivia-routing.module';

import { July4triviaPage } from './july4trivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    July4triviaPageRoutingModule
  ],
  declarations: [July4triviaPage]
})
export class July4triviaPageModule {}
