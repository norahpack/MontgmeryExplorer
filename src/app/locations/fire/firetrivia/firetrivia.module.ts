import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiretriviaPageRoutingModule } from './firetrivia-routing.module';

import { FiretriviaPage } from './firetrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiretriviaPageRoutingModule
  ],
  declarations: [FiretriviaPage]
})
export class FiretriviaPageModule {}
