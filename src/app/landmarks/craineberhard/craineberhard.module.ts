import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraineberhardPageRoutingModule } from './craineberhard-routing.module';

import { CraineberhardPage } from './craineberhard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraineberhardPageRoutingModule
  ],
  declarations: [CraineberhardPage]
})
export class CraineberhardPageModule {}
