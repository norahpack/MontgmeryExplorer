import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityhallPageRoutingModule } from './cityhall-routing.module';

import { CityhallPage } from './cityhall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityhallPageRoutingModule
  ],
  declarations: [CityhallPage]
})
export class CityhallPageModule {}
