import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SagetriviaPageRoutingModule } from './sagetrivia-routing.module';

import { SagetriviaPage } from './sagetrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SagetriviaPageRoutingModule
  ],
  declarations: [SagetriviaPage]
})
export class SagetriviaPageModule {}
