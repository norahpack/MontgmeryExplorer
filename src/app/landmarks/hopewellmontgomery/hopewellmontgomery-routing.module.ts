import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HopewellmontgomeryPage } from './hopewellmontgomery.page';

const routes: Routes = [
  {
    path: '',
    component: HopewellmontgomeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HopewellmontgomeryPageRoutingModule {}
