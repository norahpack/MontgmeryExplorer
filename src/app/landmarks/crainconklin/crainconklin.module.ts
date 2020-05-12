import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrainconklinPageRoutingModule } from './crainconklin-routing.module';

import { CrainconklinPage } from './crainconklin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrainconklinPageRoutingModule
  ],
  declarations: [CrainconklinPage]
})
export class CrainconklinPageModule {}
