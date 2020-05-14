import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchooltriviaPageRoutingModule } from './schooltrivia-routing.module';

import { SchooltriviaPage } from './schooltrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchooltriviaPageRoutingModule
  ],
  declarations: [SchooltriviaPage]
})
export class SchooltriviaPageModule {}
