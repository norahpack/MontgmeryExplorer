import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlowertriviaPageRoutingModule } from './flowertrivia-routing.module';

import { FlowertriviaPage } from './flowertrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowertriviaPageRoutingModule
  ],
  declarations: [FlowertriviaPage]
})
export class FlowertriviaPageModule {}
