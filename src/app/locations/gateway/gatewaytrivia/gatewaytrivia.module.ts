import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatewaytriviaPageRoutingModule } from './gatewaytrivia-routing.module';

import { GatewaytriviaPage } from './gatewaytrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatewaytriviaPageRoutingModule
  ],
  declarations: [GatewaytriviaPage]
})
export class GatewaytriviaPageModule {}
