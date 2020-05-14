import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrashtriviaPageRoutingModule } from './crashtrivia-routing.module';

import { CrashtriviaPage } from './crashtrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrashtriviaPageRoutingModule
  ],
  declarations: [CrashtriviaPage]
})
export class CrashtriviaPageModule {}
