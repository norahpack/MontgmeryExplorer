import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TedPageRoutingModule } from './ted-routing.module';

import { TedPage } from './ted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TedPageRoutingModule
  ],
  declarations: [TedPage]
})
export class TedPageModule {}
