import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MillshellmanPageRoutingModule } from './millshellman-routing.module';

import { MillshellmanPage } from './millshellman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MillshellmanPageRoutingModule
  ],
  declarations: [MillshellmanPage]
})
export class MillshellmanPageModule {}
