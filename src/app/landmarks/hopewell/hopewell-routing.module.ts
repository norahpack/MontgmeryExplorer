import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HopewellPage } from './hopewell.page';

const routes: Routes = [
  {
    path: '',
    component: HopewellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HopewellPageRoutingModule {}
