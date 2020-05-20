import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerttriviaPageRoutingModule } from './certtrivia-routing.module';

import { CerttriviaPage } from './certtrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerttriviaPageRoutingModule
  ],
  declarations: [CerttriviaPage]
})
export class CerttriviaPageModule {}
