import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeuillytriviaPageRoutingModule } from './neuillytrivia-routing.module';

import { NeuillytriviaPage } from './neuillytrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeuillytriviaPageRoutingModule
  ],
  declarations: [NeuillytriviaPage]
})
export class NeuillytriviaPageModule {}
