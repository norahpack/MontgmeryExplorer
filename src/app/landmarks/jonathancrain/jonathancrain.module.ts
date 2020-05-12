import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonathancrainPageRoutingModule } from './jonathancrain-routing.module';

import { JonathancrainPage } from './jonathancrain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonathancrainPageRoutingModule
  ],
  declarations: [JonathancrainPage]
})
export class JonathancrainPageModule {}
