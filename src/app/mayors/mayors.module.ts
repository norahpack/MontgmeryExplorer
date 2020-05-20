import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayorsPageRoutingModule } from './mayors-routing.module';

import { MayorsPage } from './mayors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayorsPageRoutingModule
  ],
  declarations: [MayorsPage]
})
export class MayorsPageModule {}
