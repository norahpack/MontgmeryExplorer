import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeuillyPageRoutingModule } from './neuilly-routing.module';

import { NeuillyPage } from './neuilly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeuillyPageRoutingModule
  ],
  declarations: [NeuillyPage]
})
export class NeuillyPageModule {}
