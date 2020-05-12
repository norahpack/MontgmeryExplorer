import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SagePageRoutingModule } from './sage-routing.module';

import { SagePage } from './sage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SagePageRoutingModule
  ],
  declarations: [SagePage]
})
export class SagePageModule {}
