import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmethurstPageRoutingModule } from './smethurst-routing.module';

import { SmethurstPage } from './smethurst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmethurstPageRoutingModule
  ],
  declarations: [SmethurstPage]
})
export class SmethurstPageModule {}
