import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatewayPageRoutingModule } from './gateway-routing.module';

import { GatewayPage } from './gateway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatewayPageRoutingModule
  ],
  declarations: [GatewayPage]
})
export class GatewayPageModule {}
