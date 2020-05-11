import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TornadopicsPageRoutingModule } from './tornadopics-routing.module';

import { TornadopicsPage } from './tornadopics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TornadopicsPageRoutingModule
  ],
  declarations: [TornadopicsPage]
})
export class TornadopicsPageModule {}
