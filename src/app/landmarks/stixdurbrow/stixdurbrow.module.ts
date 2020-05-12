import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StixdurbrowPageRoutingModule } from './stixdurbrow-routing.module';

import { StixdurbrowPage } from './stixdurbrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StixdurbrowPageRoutingModule
  ],
  declarations: [StixdurbrowPage]
})
export class StixdurbrowPageModule {}
