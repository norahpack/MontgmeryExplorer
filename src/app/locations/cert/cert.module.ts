import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertPageRoutingModule } from './cert-routing.module';

import { CertPage } from './cert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertPageRoutingModule
  ],
  declarations: [CertPage]
})
export class CertPageModule {}
