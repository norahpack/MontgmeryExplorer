import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityservicesPageRoutingModule } from './cityservices-routing.module';

import { CityservicesPage } from './cityservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityservicesPageRoutingModule
  ],
  declarations: [CityservicesPage]
})
export class CityservicesPageModule {}
