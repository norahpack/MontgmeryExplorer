import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MillshellmanPage } from './millshellman.page';

const routes: Routes = [
  {
    path: '',
    component: MillshellmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MillshellmanPageRoutingModule {}
