import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WilderswaimPage } from './wilderswaim.page';

const routes: Routes = [
  {
    path: '',
    component: WilderswaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WilderswaimPageRoutingModule {}
