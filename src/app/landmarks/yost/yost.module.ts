import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YostPageRoutingModule } from './yost-routing.module';

import { YostPage } from './yost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YostPageRoutingModule
  ],
  declarations: [YostPage]
})
export class YostPageModule {}
