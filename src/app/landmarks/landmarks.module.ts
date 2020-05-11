import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandmarksPageRoutingModule } from './landmarks-routing.module';

import { LandmarksPage } from './landmarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandmarksPageRoutingModule
  ],
  declarations: [LandmarksPage]
})
export class LandmarksPageModule {}
