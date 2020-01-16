import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Firstp4Page } from './firstp4.page';

const routes: Routes = [
  {
    path: '',
    component: Firstp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Firstp4PageRoutingModule {}
