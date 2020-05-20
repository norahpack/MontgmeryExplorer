import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverytriviaPageRoutingModule } from './recoverytrivia-routing.module';

import { RecoverytriviaPage } from './recoverytrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverytriviaPageRoutingModule
  ],
  declarations: [RecoverytriviaPage]
})
export class RecoverytriviaPageModule {}
