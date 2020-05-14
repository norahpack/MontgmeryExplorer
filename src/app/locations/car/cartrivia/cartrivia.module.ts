import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartriviaPageRoutingModule } from './cartrivia-routing.module';

import { CartriviaPage } from './cartrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartriviaPageRoutingModule
  ],
  declarations: [CartriviaPage]
})
export class CartriviaPageModule {}
