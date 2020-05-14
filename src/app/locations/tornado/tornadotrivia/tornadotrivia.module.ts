import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TornadotriviaPageRoutingModule } from './tornadotrivia-routing.module';

import { TornadotriviaPage } from './tornadotrivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TornadotriviaPageRoutingModule
  ],
  declarations: [TornadotriviaPage]
})
export class TornadotriviaPageModule {}
