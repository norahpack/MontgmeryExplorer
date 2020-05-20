import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParrotttriviaPageRoutingModule } from './parrotttrivia-routing.module';

import { ParrotttriviaPage } from './parrotttrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParrotttriviaPageRoutingModule
  ],
  declarations: [ParrotttriviaPage]
})
export class ParrotttriviaPageModule {}
