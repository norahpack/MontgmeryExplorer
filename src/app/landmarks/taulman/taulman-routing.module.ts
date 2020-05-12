import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaulmanPage } from './taulman.page';

const routes: Routes = [
  {
    path: '',
    component: TaulmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaulmanPageRoutingModule {}
