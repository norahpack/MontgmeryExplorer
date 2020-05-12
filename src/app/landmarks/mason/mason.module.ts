import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasonPageRoutingModule } from './mason-routing.module';

import { MasonPage } from './mason.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasonPageRoutingModule
  ],
  declarations: [MasonPage]
})
export class MasonPageModule {}
