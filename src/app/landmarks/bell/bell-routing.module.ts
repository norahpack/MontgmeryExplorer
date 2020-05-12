import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BellPage } from './bell.page';

const routes: Routes = [
  {
    path: '',
    component: BellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BellPageRoutingModule {}
