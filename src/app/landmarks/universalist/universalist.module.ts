import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversalistPageRoutingModule } from './universalist-routing.module';

import { UniversalistPage } from './universalist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversalistPageRoutingModule
  ],
  declarations: [UniversalistPage]
})
export class UniversalistPageModule {}
