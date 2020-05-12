import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameronfeinthelPageRoutingModule } from './cameronfeinthel-routing.module';

import { CameronfeinthelPage } from './cameronfeinthel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameronfeinthelPageRoutingModule
  ],
  declarations: [CameronfeinthelPage]
})
export class CameronfeinthelPageModule {}
