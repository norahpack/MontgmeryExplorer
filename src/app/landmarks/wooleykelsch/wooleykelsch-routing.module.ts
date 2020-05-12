import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WooleykelschPage } from './wooleykelsch.page';

const routes: Routes = [
  {
    path: '',
    component: WooleykelschPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WooleykelschPageRoutingModule {}
