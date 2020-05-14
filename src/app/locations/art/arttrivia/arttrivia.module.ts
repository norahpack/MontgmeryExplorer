import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArttriviaPageRoutingModule } from './arttrivia-routing.module';

import { ArttriviaPage } from './arttrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArttriviaPageRoutingModule
  ],
  declarations: [ArttriviaPage]
})
export class ArttriviaPageModule {}
