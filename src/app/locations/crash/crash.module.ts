import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrashPageRoutingModule } from './crash-routing.module';

import { CrashPage } from './crash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrashPageRoutingModule
  ],
  declarations: [CrashPage]
})
export class CrashPageModule {}
