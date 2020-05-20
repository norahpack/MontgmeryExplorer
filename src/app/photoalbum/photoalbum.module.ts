import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoalbumPageRoutingModule } from './photoalbum-routing.module';

import { PhotoalbumPage } from './photoalbum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoalbumPageRoutingModule
  ],
  declarations: [PhotoalbumPage]
})
export class PhotoalbumPageModule {}
