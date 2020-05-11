import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmersPageRoutingModule } from './farmers-routing.module';

import { FarmersPage } from './farmers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmersPageRoutingModule
  ],
  declarations: [FarmersPage]
})
export class FarmersPageModule {}
