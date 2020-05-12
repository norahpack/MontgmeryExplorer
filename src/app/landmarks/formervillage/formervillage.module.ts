import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormervillagePageRoutingModule } from './formervillage-routing.module';

import { FormervillagePage } from './formervillage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormervillagePageRoutingModule
  ],
  declarations: [FormervillagePage]
})
export class FormervillagePageModule {}
