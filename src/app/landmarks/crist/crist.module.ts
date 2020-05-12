import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CristPageRoutingModule } from './crist-routing.module';

import { CristPage } from './crist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CristPageRoutingModule
  ],
  declarations: [CristPage]
})
export class CristPageModule {}
