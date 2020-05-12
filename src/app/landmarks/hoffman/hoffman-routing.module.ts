import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoffmanPage } from './hoffman.page';

const routes: Routes = [
  {
    path: '',
    component: HoffmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoffmanPageRoutingModule {}
