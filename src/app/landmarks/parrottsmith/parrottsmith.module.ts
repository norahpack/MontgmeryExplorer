import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParrottsmithPageRoutingModule } from './parrottsmith-routing.module';

import { ParrottsmithPage } from './parrottsmith.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParrottsmithPageRoutingModule
  ],
  declarations: [ParrottsmithPage]
})
export class ParrottsmithPageModule {}
