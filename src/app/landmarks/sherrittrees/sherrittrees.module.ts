import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SherrittreesPageRoutingModule } from './sherrittrees-routing.module';

import { SherrittreesPage } from './sherrittrees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SherrittreesPageRoutingModule
  ],
  declarations: [SherrittreesPage]
})
export class SherrittreesPageModule {}
