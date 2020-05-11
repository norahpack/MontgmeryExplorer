import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadershipPageRoutingModule } from './leadership-routing.module';

import { LeadershipPage } from './leadership.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadershipPageRoutingModule
  ],
  declarations: [LeadershipPage]
})
export class LeadershipPageModule {}
