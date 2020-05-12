import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylesPageRoutingModule } from './styles-routing.module';

import { StylesPage } from './styles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylesPageRoutingModule
  ],
  declarations: [StylesPage]
})
export class StylesPageModule {}
