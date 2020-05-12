import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArstingstallmayPageRoutingModule } from './arstingstallmay-routing.module';

import { ArstingstallmayPage } from './arstingstallmay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArstingstallmayPageRoutingModule
  ],
  declarations: [ArstingstallmayPage]
})
export class ArstingstallmayPageModule {}
