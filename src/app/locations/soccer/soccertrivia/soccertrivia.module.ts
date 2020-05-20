import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccertriviaPageRoutingModule } from './soccertrivia-routing.module';

import { SoccertriviaPage } from './soccertrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccertriviaPageRoutingModule
  ],
  declarations: [SoccertriviaPage]
})
export class SoccertriviaPageModule {}
