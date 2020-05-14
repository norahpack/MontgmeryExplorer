import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadershiptriviaPageRoutingModule } from './leadershiptrivia-routing.module';

import { LeadershiptriviaPage } from './leadershiptrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadershiptriviaPageRoutingModule
  ],
  declarations: [LeadershiptriviaPage]
})
export class LeadershiptriviaPageModule {}
